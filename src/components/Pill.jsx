export function Pill() {
  return (
    <div className="flex items-center justify-center w-full h-0 relative">
      <div
        className="
        absolute top-[-90px]
      text-grey-6 bg-white-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[50px] w-[194px] 
      h-[50px]  flex items-center justify-center
      "
      >
        <div className="flex justify-between gap-3 items-center">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.66 8.2C13.43 7.9 13.15 7.64 12.89 7.38C12.22 6.78 11.46 6.35 10.82 5.72C9.33005 4.26 9.00005 1.85 9.95005 0C9.00005 0.23 8.17005 0.75 7.46005 1.32C4.87005 3.4 3.85005 7.07 5.07005 10.22C5.11005 10.32 5.15005 10.42 5.15005 10.55C5.15005 10.77 5.00005 10.97 4.80005 11.05C4.57005 11.15 4.33005 11.09 4.14005 10.93C4.08295 10.8828 4.03543 10.8251 4.00005 10.76C2.87005 9.33 2.69005 7.28 3.45005 5.64C1.78005 7 0.87005 9.3 1.00005 11.47C1.06005 11.97 1.12005 12.47 1.29005 12.97C1.43005 13.57 1.70005 14.17 2.00005 14.7C3.08005 16.43 4.95005 17.67 6.96005 17.92C9.10005 18.19 11.39 17.8 13.0301 16.32C14.8601 14.66 15.5 12 14.56 9.72L14.43 9.46C14.22 9 13.66 8.2 13.66 8.2ZM10.5 14.5C10.22 14.74 9.76005 15 9.40005 15.1C8.28005 15.5 7.16005 14.94 6.50005 14.28C7.69005 14 8.40005 13.12 8.61005 12.23C8.78005 11.43 8.46005 10.77 8.33005 10C8.21005 9.26 8.23005 8.63 8.50005 7.94C8.69005 8.32 8.89005 8.7 9.13005 9C9.90005 10 11.11 10.44 11.37 11.8C11.41 11.94 11.43 12.08 11.43 12.23C11.46 13.05 11.1 13.95 10.5 14.5Z"
              fill="#FF6347"
            />
          </svg>
          <p className="font-montserrat font-normal text-lg space-x-1">
            Burned 217 <span className="font-bold text-xs">kcal</span>
          </p>
        </div>
      </div>
    </div>
  );
}
