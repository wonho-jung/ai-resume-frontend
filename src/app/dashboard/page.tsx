"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { headingStyles } from "@/components/designSystem";
import Button from "@mui/material/Button";
export default function Dashboard() {
  const router = useRouter();

  const [alignment, setAlignment] = useState("upload");
  const [userResume, setUserResume] = useState([]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <div className="">
        <h2 className={headingStyles.h2}>Resumes</h2>
      </div>
      {userResume.length === 0 && (
        <div className=" mt-40 flex flex-col justify-center items-center  ">
          <div className="w-[350px] text-center border p-6 rounded">
            <p>
              You don&apos;t have any resumes yet.
              <br /> Create one by uploading a resume or manually entering your
              information.
            </p>

            <Button
              className="bg-blue-500 hover:bg-blue-700 mt-3 "
              variant="contained"
              onClick={() => router.push("/dashboard/create_resume")}
            >
              Create a new resume
            </Button>
          </div>
        </div>
      )}

      {userResume.length > 0 && (
        <div>
          <h3 className={headingStyles.h3}>Your Resumes</h3>
          <ul>
            {userResume.map((resume, index) => (
              <li key={index}>{resume}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
