"use client";
import React, { useEffect, useState } from "react";

const ProjectResult = () => {
  const [data, setData] = useState([]);
  const [delVal, setDelVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getData = () => {
    fetch("/api/project", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((val) => {
        if (Array.isArray(val)) {
          setData(val);
        } else {
          console.error("Data is not an array");
        }
      });
  };

  const popup = (id) => {
    setIsOpen(!isOpen);
    setDelVal(id);
  };

  const handleDelete = () => {
    console.log("_",delVal)
    fetch("/api/project/" + delVal, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsOpen(false);
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRoute = () => {
    location.href = "/"
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="overflow-x-auto">
        <button
          onClick={() => handleRoute()}
          className="bg-blue-500 w-full lg:w-64 mt-8 border-2 sm:block font-normal border-blue-500 px-8 py-2 rounded-md text-black"
        >
          Home
        </button>
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Project Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Project URL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Catagory
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Workers
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data &&
                  data?.map((item, index) => (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-500 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item?.projectName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item?.projectURL}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item?.projectCatagory}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item?.workers}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          className="text-green-500 hover:text-green-700"
                          href="#"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          onClick={() => popup(item._id)}
                          className="text-red-500 hover:text-red-700"
                          href="#"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {isOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>

                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>

                  <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div> */}

                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            Delete
                          </h3>

                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are your sure you want to delete this item?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center mt-3 rounded-md border border-transparent items-center shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={popup}
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete()}
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-red-300  text-white shadow-sm px-4 py-2 bg-red-700 text-base font-medium  focus:outline-none focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:ring-offset-2 focus:ring-opacity-75 sm:mt=0 sm:w-auto sm:text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectResult;
