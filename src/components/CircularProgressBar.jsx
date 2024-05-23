/* eslint-disable react/prop-types */
export function CircularProgress({ progress }) {
  const radius = 85;
  const circumference = 2 * Math.PI * radius;

  // Function to calculate the offset for the progress circle
  const calculateOffset = (percentage) => {
    return circumference - (percentage / 100) * circumference;
  };

  // Function to calculate the position of the ellipsis
  const calculateEllipsisPosition = (percentage) => {
    const angle = (percentage / 100) * 2 * Math.PI - Math.PI / 2; // -90 degrees to start from the top
    const ellipsisX = 100 + radius * Math.cos(angle);
    const ellipsisY = 100 + radius * Math.sin(angle);
    return { x: ellipsisX, y: ellipsisY };
  };

  const offset = calculateOffset(progress);
  const ellipsisPosition = calculateEllipsisPosition(progress);

  return (
    <div className="relative w-[200px] h-[200px]">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Outline circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          className="stroke-white-3"
          strokeWidth="1"
          fill="none"
        />
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r="85"
          className="stroke-white-3"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          className="stroke-secondary-6 rotate-[-90deg] origin-center transition-all duration-300 ease-out"
          cx="100"
          cy="100"
          r="85"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        {/* Ellipsis for indicating end of progress */}
        <circle
          cx={ellipsisPosition.x}
          cy={ellipsisPosition.y}
          r="8"
          className={progress > 0 ? "fill-secondary-6" : "fill-white-3"}
        />
      </svg>
      <div className="absolute inset-12 flex flex-col items-center justify-center gap-2">
        <p>Calories log</p>
        <p className="text-[28px] font-semibold">886</p>
        <p className="text-base">of 1500 kcal</p>
      </div>
    </div>
  );
}
