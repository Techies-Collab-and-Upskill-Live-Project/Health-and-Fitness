/* eslint-disable react/prop-types */
import { MainWrapper } from "../diary/MainWrapper";
import { DiaryProvider } from "../../contexts/DiaryContext";
import { Title, SearchBar, Logo } from "./Sections/Title";

export default function Recipes() {
  return (
    <DiaryProvider>
      <RecipesPage />
    </DiaryProvider>
  );
}

function RecipesPage() {
  return (
    <MainWrapper id={2}>
      <Container>
        <Logo />
        <Title />
        <SearchBar />
        <Categories />
      </Container>
    </MainWrapper>
  );
}

function Container({ children }) {
  return <div className="p-4 flex flex-col gap-4">{children}</div>;
}

function Categories() {
  return (
    <div className="flex flex-col w-ful gap-4 text-grey-5">
      <p className="font-semibold text-[19px] leading-[27px]">Categories</p>
      <div className="w-full gap-3 flex justify-between overflow-auto">
        <Category type="All" />
        <Category type="Local foods" bg="/PoundedYam.png" />
        <Category type="Snacks" bg="/Snacks.png" />
        <Category type="Drinks" bg="/Drinks.png" />
        <Category type="Side Dishes" bg="/SideDishes.png" />
        <Category type="Soup" bg="/Soup.png" />
      </div>
    </div>
  );
}

function Category({ type, bg = null }) {
  return (
    <div className="cursor-pointer flex flex-col gap-1 items-center">
      <div
        className={`w-10 h-10 rounded-lg ${
          type === "All" ? "border border-primary-4 bg-primary-1" : ""
        } flex items-center justify-center`}
      >
        {type === "All" ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 7C15.6569 7 17 5.65685 17 4C17 2.34315 15.6569 1 14 1C12.3431 1 11 2.34315 11 4C11 5.65685 12.3431 7 14 7Z"
              stroke="#548D16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 17C5.65685 17 7 15.6569 7 14C7 12.3431 5.65685 11 4 11C2.34315 11 1 12.3431 1 14C1 15.6569 2.34315 17 4 17Z"
              stroke="#548D16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 11H17V16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H12C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V11ZM1 1H7V6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7H2C1.73478 7 1.48043 6.89464 1.29289 6.70711C1.10536 6.51957 1 6.26522 1 6V1Z"
              stroke="#548D16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <img className="w-10 h-10 rounded-lg" src={bg} alt={type} />
        )}
      </div>
      <p className="text-[10px] leading-[18px] font-medium text-nowrap">
        {type}
      </p>
    </div>
  );
}
