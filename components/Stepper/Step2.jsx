import React from "react";

const StepperStep2 = ({backHandler, register}) => {
  return (
    <div className=" p-3 w-full">
      <span className="text-blue-600 capitalize opacity-90 text-xs lg:text-sm">
        Project Details
      </span>
      <h1 className="capitalize text-2xl">
        What is your main goal with AlphaQuest?
      </h1>

      <div action="#" className="mt-7">
        <div className="flex items-center mb-4">
          <input
            id="grow"
            type="radio"
            value="grow my community"
            {...register('mainGoal')}
            name="mainGoal"
            className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 outline-none focus:ring-2"
          />
          <label
            htmlFor="grow"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Grow my community
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="activate"
            type="radio"
            value="activate existsing memebers"
            {...register('mainGoal')}
            name="mainGoal"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="activate"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            {" "}
            Activate Existing Members
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="understand"
            type="radio"
            value="understand my members"
            {...register('mainGoal')}
            name="mainGoal"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="understand"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            {" "}
            Understand my members
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="other"
            type="radio"
            value="other"
            {...register('mainGoal')}
            name="mainGoal"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="other"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            {" "}
            Others
          </label>
        </div>

        <div className="flex gap-3">
          <button onClick={() => backHandler(1)} className="bg-zinc-700 bg-opacity-60 mt-8 border-0 lg:w-28 w-1/2 font-normal border-gray-500 px-2 py-2 rounded-md text-white">
            Back
          </button>
          <button  onClick={() => backHandler(3)}  className="bg-blue-500 mt-8 border-2 lg:w-64 w-1/2 font-normal border-blue-500 px-8 py-2 rounded-md text-black">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepperStep2;
