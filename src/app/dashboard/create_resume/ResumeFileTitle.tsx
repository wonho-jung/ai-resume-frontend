"use client";
import React, { useState } from "react";

import { headingStyles } from "@/components/designSystem";
const MAX_FILE_LENGTH = 20;

const ResumeFileTitle = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("My_resume");

  const handleClick = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleChange = (e) => {
    if (e.target.value.length > MAX_FILE_LENGTH) {
      return;
    }
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="max-w-[350px]" onClick={handleClick}>
        {isActive ? (
          <>
            <input
              autoFocus={true}
              onBlur={handleBlur}
              onChange={handleChange}
              value={inputValue}
              className={`${
                headingStyles.h2
              } bg-transparent outline-none border-b border-gray-200 text-center ${
                inputValue.length === MAX_FILE_LENGTH && "border-red-500	"
              }`}
              type="text"
            />
            {inputValue.length === MAX_FILE_LENGTH && (
              <p className="text-red-500 text-sm">
                Your resume name is reach to max length
              </p>
            )}
          </>
        ) : (
          <h2
            className={`${headingStyles.h2} border-b border-transparent	hover:border-gray-200		`}
          >
            {inputValue ? inputValue : "My_resume"}
          </h2>
        )}
      </div>
    </>
  );
};

export default ResumeFileTitle;
