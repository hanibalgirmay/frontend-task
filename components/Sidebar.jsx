import React from "react";

const Sidebar = ({ step }) => {
  return (
    <div className="">
      <ol className="ml-8 mt-14 hidden lg:block relative text-gray-500  border-opacity-50 pt-2 border-gray-200 dark:border-gray-700 dark:text-gray-400 sm:flex sm:flex-row">
        <li className="mb-6 ml-6">
          <span className={`absolute mt-2 flex items-center justify-center w-1 h-1 bg-green-200 rounded-full left-0 ring-2 ${step > 1 ? 'ring-blue-500' : 'ring-white'}`}></span>
          <div
            className={`absolute top-7 left-0 w-0.5 h-7 ${
              step > 1 ? "bg-blue-400" : "bg-gray-500"
            }`}
          ></div>
          <span
            className={`${
              step === 1
                ? "text-white"
                : step > 1
                ? "text-blue-500"
                : "text-gray-500"
            } font-medium leading-tight`}
          >
            Start First Project
          </span>
        </li>
        <li className="mb-8 ml-6">
          <span className={`absolute flex items-center justify-center w-1 h-1 mt-2 bg-gray-500 rounded-full left-0 ring-2 ${step > 2 ? 'ring-blue-500' : 'ring-gray-500'}`}></span>
          <div
            className={`absolute top-20 left-0 w-0.5 h-7 ${
              step > 2 ? "bg-blue-400" : "bg-gray-500"
            }`}
          ></div>
          <span
            className={`${
              step === 2
                ? "text-white"
                : step > 2
                ? "text-blue-500"
                : "text-gray-500"
            } font-medium leading-tight`}
          >
            Project Details
          </span>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-1 h-1 mt-2 bg-gray-500 rounded-full left-0 ring-2 ring-gray-500"></span>
          <span
            className={`${
              step === 3 ? "text-white" : "text-gray-500"
            } font-medium leading-tight text-gray-500`}
          >
            Create Project
          </span>
        </li>
      </ol>

      {/*mobile version  */}
      <div className="block lg:hidden">
        <div className="mt-14 grid place-items-center">
          <div className="w-full">
            <div className="flex relative">
              <div className="flex-1">
                <div className="relative w-full">
                  <div
                    className={`absolute top-0.5 left-2/4 w-full h-0.5 ${
                      step > 1 ? "bg-blue-400" : "bg-gray-500"
                    }`}
                  ></div>
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full text-gray-800 border border-gray-300 flex items-center justify-center z-10 ${
                        step === 1 ? "bg-white" : "bg-gray-500"
                      } ${step > 1 ? "bg-blue-400" : "bg-gray-500"}`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full">
                  <div
                    className={`absolute top-0.5 left-2/4 w-full h-0.5 ${
                      step > 2 ? "bg-blue-400" : "bg-gray-500"
                    }`}
                  ></div>
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full text-gray-800 border border-gray-300 flex items-center justify-center z-10 ${
                        step === 2 ? "bg-white" : "bg-gray-500"
                      } ${step > 2 ? "bg-blue-400" : "bg-gray-500"}`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full">
                  {/* <div className="absolute top-0.5 right-16 w-full h-0.5 bg-gray-500"></div> */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full text-gray-800 border border-gray-300 flex items-center justify-center z-10 ${
                        step === 3 ? "bg-white" : "bg-gray-500"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
