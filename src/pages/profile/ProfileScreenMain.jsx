/* eslint-disable react/prop-types */
import { useContext } from "react";

import AppWrapper from "../../components/AppWrapper";
import { ProfileContext, ProfileProvider } from "../../contexts/Profile";
import { NavBar, ProfileNav } from "./Nav";
import { NextButton } from "./NextButton";
import { GoalScreen } from "./ProfileNutritionalGoal";
import GenderScreen from "./ProfileGenderScreen";
import DOBScreen from "./ProfileDOBScreen";
import WeightScreen from "./ProfileWeightScreen";
import HeightScreen from "./ProfileHeightScreen";
import ActivityScreen from "./ProfileActivityLevel";
import BuildingProfile from "./BuildingProfile";

export default function Profile() {
  return (
    <ProfileProvider>
      <ProfilePage />
    </ProfileProvider>
  );
}

function ProfilePage() {
  const { step, isBuilding } = useContext(ProfileContext);

  return (
    <AppWrapper>
      <img
        className="h-[17px]"
        src="/Logo plain background.svg"
        alt="FudHouse logo"
      />
      {isBuilding === "pending" ? (
        <BuildingProfile />
      ) : (
        <>
          {step > 0 && <NavBar />}
          <ProfileNav />
          <ProfileContent title={titles[step]} note={notes[step]}>
            {step === 0 ? (
              <GoalScreen />
            ) : step === 1 ? (
              <GenderScreen />
            ) : step === 2 ? (
              <DOBScreen />
            ) : step === 3 ? (
              <WeightScreen />
            ) : step === 4 ? (
              <HeightScreen />
            ) : step === 5 ? (
              <ActivityScreen />
            ) : null}
          </ProfileContent>
          <NextButton />
        </>
      )}
    </AppWrapper>
  );
}

function ProfileContent({ title, note, children }) {
  return (
    <div className="flex flex-col h-[576px] items-center justify-between">
      <p className="text-center text-grey-6 font-semibold text-2xl text-wrap py-5 px-2">
        {title}
      </p>
      {children}
      <p className="text-center text-grey-4 font-normal text-xs py-6">{note}</p>
    </div>
  );
}

const titles = [
  "What is you nutritional goal",
  "What is your Sex?",
  "Your date of Birth",
  "How much do you weigh right now?",
  "What is your height?",
  "What is your activity level?",
];

const notes = [
  "Did you know? Your nutritional goal should determine what your eat and how you eat?",
  "Did you know? Your sex determines your calorie need and the amount of calorie your body is able to burn.",
  "Did you know? Your age determines your calorie need and the amount of calorie your body is able to burn.",
  "We use your weight and height and to recommend meals that suits your nutritional goal.",
  "We use your weight and height and to recommend meals that suits your nutritional goal.",
  "Your activity level is used to suggest your daily calorie and water requirement",
];
