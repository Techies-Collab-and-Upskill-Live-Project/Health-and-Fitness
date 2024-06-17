/* eslint-disable react/prop-types */

import { useGetQuery } from "../../../../hooks/useGetQuery";
import { roundUp } from "../../../../utils/helpers";

import { InnerContainer, OuterContainer } from "../../Containers";
import { Modal } from "../MealSection/MealSection";

import ScreenOverlay from "../../../../components/ScreenOverlay";
import SmallModal from "../../../../components/SmallModal";
import { useContext, useState } from "react";
import { DiaryContext } from "../../../../contexts/DiaryContext";

export default function ExerciseSection() {
  const { data: exerciseData, status: exerciseStatus } =
    useGetQuery("exercises");
  const { setShowAddExercise } = useContext(DiaryContext);

  return (
    <OuterContainer
      handleClick={() => {
        setShowAddExercise(true);
      }}
      title="Exercises"
    >
      {exerciseStatus === 404 ? (
        <InnerContainer
          isEmpty={exerciseStatus === 404}
          image_url={"/exercise.png"}
          name="Exercise"
        />
      ) : (
        <>
          {exerciseData.map((exercise) => {
            return <Exercise exercise={exercise} key={exercise.id} />;
          })}
        </>
      )}
    </OuterContainer>
  );
}

export function Exercise({ exercise }) {
  const [showExerciseModal, setShowExerciseModal] = useState(false);

  return (
    <InnerContainer
      handleHamburgerClick={() => setShowExerciseModal(true)}
      image_url={"/exercise.png"}
      name="Exercise"
    >
      <div className="flex flex-col h-[60px] justify-end">
        <p className="flex items-center justify-center gap-2">
          <span>{exercise.name}</span>
          <img src="/Flame.svg" alt="Burned calorie" />{" "}
          <span>
            {roundUp(
              exercise.time_spent * parseFloat(exercise.energy_per_minute)
            )}{" "}
            kcal
          </span>
        </p>
      </div>
      {showExerciseModal && (
        <ScreenOverlay>
          <DeleteExerciseBtn handleCancel={setShowExerciseModal} />
        </ScreenOverlay>
      )}
    </InnerContainer>
  );
}

function DeleteExerciseBtn({ handleCancel }) {
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);

  function onCancel() {
    handleCancel(false);
  }

  return (
    <>
      {isConfirmDelete ? (
        <Modal
          handleCancel={onCancel}
          title={"Delete Exercise?"}
          bg={"bg-accent-1"}
          action={"Delete"}
          actionColor={"accent-6"}
        >
          <p className="text-grey-4 font-medium text-[11px] leading-[18px]">
            Exercise will be permanently removed from your diary.
          </p>
        </Modal>
      ) : (
        <SmallModal
          handleClick={() => setIsConfirmDelete((initValue) => !initValue)}
          textColor={"text-accent-6"}
        >
          <img src="/Trash.svg" alt="Delete Meal" />
          Delete
        </SmallModal>
      )}
    </>
  );
}
