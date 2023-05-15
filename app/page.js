"use client";

import Sidebar from "@/components/Sidebar";
import StepperForm from "@/components/Stepper/Step1";
import StepperStep2 from "@/components/Stepper/Step2";
import StepperStep3 from "@/components/Stepper/Step3";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";


export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [value, setValue] = useState("");

  const handleChangeRoute = (w) => {
    setCurrentStep(w);
  };

  const {
    register,
    getValues,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const _res = {
      ...data,
      projectURL: `Alphaguilty.io/${data.projectURL}`,
      projectCatagory: value,
    };
    console.log(_res);
    fetch("/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_res),
    })
      .then((res) => {
        console.log(res.json())
        location.href = "/results"
      })
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   console.log(value)
  // },[value])
  // const watchedValue = watch("productCatagory", "");

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden h-screen sm:p-2 ">
      <aside className="bg-primary lg:h-screen inset-y-0 -top-5 left-0 border-r-2 border-opacity-40 sm:flex border-gray-700 lg:w-64 sm:h-20 sm:w-full">
        <Sidebar step={currentStep} />
        <div class="fixed bottom-0 w-50 h-50 bg-gradient-to-t from-red-900 via-purple-800 to-transparent">
          <div class="absolute bottom-0 w-full h-full bg-gradient-to-t from-transparent via-gray-800 to-gray-900 blur-lg"></div>
        </div>
      </aside>

      <main className="flex-1 lg:ml-20 lg:pt-24 lg:pl-2 sm:ml-5 sm:w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 ? (
            <StepperForm
              Controller={Controller}
              setVal={setValue}
              control={control}
              register={register}
              handleNext={handleChangeRoute}
            />
          ) : currentStep === 2 ? (
            <StepperStep2 register={register} backHandler={handleChangeRoute} />
          ) : currentStep === 3 ? (
            <StepperStep3
              register={register}
              handleForm={onSubmit}
              backHandler={handleChangeRoute}
            />
          ) : (
            ""
          )}
        </form>
      </main>
    </div>
  );
}
