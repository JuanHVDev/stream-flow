import React from 'react'

const CircularProgress = ({ percent }: { percent: number }) =>
{
  const circumference = 2 * Math.PI * 30; // Calculate the circumference of the circle

  return (
    <div
      className=" inline-flex items-center justify-center overflow-hidden rounded-full"
    >
      <svg className="w-20 h-20">
        <circle
          className="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-ring"
          strokeWidth="5"
          strokeDasharray={circumference} // Use the calculated circumference
          strokeDashoffset={circumference - (circumference * percent) / 10} // Adjust the strokeDashoffset accordingly
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute text-xl text-blue-700" >{percent}%</span>
    </div>
  )
}

export default CircularProgress