/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { DiaryContext, DiaryProvider } from "../../contexts/DiaryContext";
import { formatDate, formatToBackendDate } from "../../utils/helpers";
import { getUserCalorie } from "../../services/apiCalorieLog";
import { getUserMeal } from "../../services/apiMeal";
import { getUserExercise } from "../../services/apiExercise";
import { getUserWaterIntake } from "../../services/apiWaterIntake";

import CalorieLog from "./CalorieLog";
import SectionTwo from "./SectionTwo";
import Spinner from "../../components/Spinner";

import { Pentagon } from "../../components/Pentagon";
import { Pill } from "../../components/Pill";
import { MainWrapper } from "./MainWrapper";
import Settings from "./sections/WaterSettings/WaterSettings";

export default function Diary() {
  return (
    <DiaryProvider>
      <DiaryPage />
    </DiaryProvider>
  );
}

export function DiaryPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + step);
  const formattedDate = formatDate(date);

  const { showWaterSettings } = useContext(DiaryContext);

  const queryClient = useQueryClient();

  useEffect(() => {
    // Define an array of query keys to be removed
    const queryKeys = ["calorie", "meals", "exercises", "waterIntake"];

    // Iterate over the array and remove each query
    queryKeys.forEach((key) => {
      queryClient.removeQueries({
        queryKey: [key],
      });
    });
  }, [step, queryClient]);

  const { isLoading: isFetchingCalorie, data: calorieData } = useQuery({
    queryKey: ["calorie"],
    queryFn: () => getUserCalorie(formatToBackendDate(date)),
  });

  const { isLoading: isFetchingMeal, data: mealData } = useQuery({
    queryKey: ["meals"],
    queryFn: () => getUserMeal(formatToBackendDate(date)),
  });

  const { isLoading: isFetchingExercise, data: exerciseData } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => getUserExercise(formatToBackendDate(date)),
  });

  const { isLoading: isFetchingWaterIntake, data: waterIntakeData } = useQuery({
    queryKey: ["waterIntake"],
    queryFn: () => getUserWaterIntake(formatToBackendDate(date)),
  });

  // If user is logged out, redirect to log in page
  if (
    calorieData?.status === 401 ||
    exerciseData?.status === 401 ||
    mealData?.status === 401 ||
    waterIntakeData?.status === 401
  ) {
    navigate("/log-in");
  }

  if (
    isFetchingCalorie ||
    isFetchingMeal ||
    isFetchingExercise ||
    isFetchingWaterIntake
  )
    return <Spinner />;

  return (
    <>
      {showWaterSettings ? (
        <Settings />
      ) : (
        <MainWrapper id={1}>
          <CalorieLog
            step={step}
            setStep={setStep}
            formattedDate={formattedDate}
          />
          <Pentagon />
          <Pill />
          <SectionTwo />
        </MainWrapper>
      )}
    </>
  );
}
