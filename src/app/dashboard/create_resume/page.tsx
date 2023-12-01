"use client";
import React, { useState } from "react";

import ResumeFileTitle from "./ResumeFileTitle";
import ResumeBuild from "./ResumeBuild";

const Resume = () => {
  return (
    <>
      <div className="flex items-center flex-col w-full ">
        <ResumeFileTitle />
        <ResumeBuild />
      </div>
    </>
  );
};

export default Resume;
