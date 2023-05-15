import React, { useState } from "react";

const Step3 = ({ backHandler, handleForm, register }) => {
  const [num, setNum] = useState(1);

  return (
    <div className=" p-3 w-full">
      <span className="text-blue-600 capitalize opacity-90 text-md">
        Create Project
      </span>
      <h1 className="capitalize lg:text-2xl text-2xl">
        How many full-time workers on this project?
      </h1>

      <div className="mt-5">
        <div className="flex gap-2">
          <button
            onClick={() => setNum(num - 1)}
            type="button"
            disabled={num === 0}
            className="block bg-gray-800 w-12 rounded-md text-sm font-medium text-gray-900 dark:text-white"
          >
            -
          </button>
          <input
            type="number"
            id="workers"
            name="workers"
            min="0"
            value={num}
            onChange={(e) => setNum(e)}
            {...register('workers')}
            style={{ WebkitAppearance: "none" }}
            className="bg-gray-50 border text-center appearance-none outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-full md:w-28 p-2 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            onClick={() => setNum(num + 1)}
            type="button"
            className="block bg-gray-800 w-12 rounded-md text-sm font-medium text-gray-900 dark:text-white"
          >
            +
          </button>
        </div>

        <h1 className="capitalize text-2xl mt-5">
          Are you pre or post product launch?
        </h1>
        <div className="flex items-center mb-4 mt-4">
          <input
            id="pre"
            type="radio"
            value="pre product"
            {...register('product')}
            name="product"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="pre"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            {" "}
            Pre Product
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="post"
            type="radio"
            value="post product"
            {...register('product')}
            name="product"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="post"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            {" "}
            Post Product
          </label>
        </div>

        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <h1 className="capitalize text-2xl mt-5">Contact Email</h1>
          </label>
          <input
            type="email"
            id="email"
            {...register('contactEmail')}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-2/3 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@exmple.com"
            required
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => backHandler(2)}
            className="bg-zinc-700 bg-opacity-60 mt-8 border-0 lg:w-28 w-1/2 font-normal border-gray-500 px-2 py-2 rounded-md text-white"
          >
            Back
          </button>
          <button
            type="submit"
            onClick={() => handleForm}
            className="bg-blue-500 mt-8 border-2 lg:w-64 w-1/2 text-sm font-normal border-blue-500  py-2 rounded-md text-black"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
