import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const project_catagory = [
  "NFT",
  "GameFi",
  "DeFi",
  "DAO",
  "SocialFi",
  "Metaverse",
  "Tools",
  "Ecosystem",
  "Others",
];

const StepperForm = ({ handleNext, register, Controller, control, setVal }) => {
  const [tag, setTag] = useState("");

  const handleTag = (e) => {
    console.log(e);
    // {...register("projectCatagory")}
    setTag(e);
    setVal(e);
  };

  return (
    <div className="p-3 w-full">
      <span className="text-blue-600 capitalize opacity-90 text-xs lg:text-sm">
        to create quest you need firstly create project
      </span>
      <h1 className="capitalize text-2xl">Add New Project</h1>

      <div className="mt-7">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Name (It can be changed later)
          </label>
          <input
            type="text"
            id="project_name"
            {...register("projectName", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-full lg:w-3/6 p-2.5 dark:bg-transparent dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Name"
            required
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project URL(it cannot be changed after creation)
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <p className="text-xs lg:text-sm text-gray-600">
                Alphaguilty.io/
              </p>
            </div>
            <input
              type="text"
              id="input-group-1"
              {...register("projectURL")}
              className="bg-transparent border lg:pl-28 border-gray-800 text-gray-400 text-sm rounded-lg active:border-blue-500 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-full lg:w-3/6 dark:focus:border-blue-500 block pl-24 lg:pl-10 p-2.5 "
            />
          </div>
        </div>

        <span className="capitalize">
          project catagory(it can not be changed after creation)
        </span>
        <div className="flex flex-wrap mt-2 lg:w-6/12 md:w-full">
          {project_catagory.map((item) => (
            // <Controller
            //   name="productCatagory"
            //   control={control}
            //   value={item}
            //   render={({ field }) => (
            <span
              key={item}
              value={item}
              {...register("productCatagory")}
              onInput={(e) => setVal(e.target.innerText)}
              onClick={() => handleTag(item)}
              className={`inline-flex cursor-pointer items-center m-1 px-4 py-1 mr-2 text-sm font-medium text-gray-300  rounded-full ${
                tag === item ? "bg-gray-900 text-blue-500" : "bg-gray-800"
              }`}
            >
              {item}
            </span>
            //   )}
            // />
          ))}
        </div>

        {/* <div className="flex lg:w-64 sm:w-full"> */}
        <button
          onClick={() => handleNext(2)}
          className="bg-blue-500 w-full lg:w-64 mt-8 border-2 sm:block font-normal border-blue-500 px-8 py-2 rounded-md text-black"
        >
          Add project
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default StepperForm;
