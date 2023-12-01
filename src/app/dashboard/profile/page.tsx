"use client";
import React, { useEffect, useState } from "react";
import data from "@/components/test.json";
import { headingStyles } from "@/components/designSystem";
import { Divider } from "@mui/material";
const Profile = () => {
  const [resume, setResume] = useState(null);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
  });
  const [website, setWebsite] = useState({
    git: "",
    linkedin: "",
    portfolio: "",
  });
  const [skills, setSkills] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);

  console.log(resume);

  useEffect(() => {
    setResume(data);
  }, []);
  return (
    <>
      {!!resume && (
        <div>
          <div>
            <h3 className={headingStyles.h3}>Contact info</h3>
            <p>name: {resume?.name}</p>
            <p>Phone:{resume?.contact_info.phone}</p>
            <p>Email: {resume?.contact_info.email}</p>
            <p>location: {resume?.contact_info.location}</p>
            <Divider />
          </div>
          <div>
            <h3 className={headingStyles.h3}>Websites</h3>
            <p>Linkedin: {resume?.contact_info.linkedin}</p>
            <p>Portfolio: {resume?.contact_info.portfolio}</p>
            <p>GitHub: {resume?.contact_info.github}</p>
            <Divider />
          </div>

          <div>
            <h3 className={headingStyles.h3}>Skills</h3>
            <p> {resume?.skills.join(",")}</p>
            <Divider />
          </div>
          <div>
            <h3 className={headingStyles.h3}> Work Experience</h3>
            {resume.jobs.length > 0 &&
              resume.jobs.map((job, index) => (
                <div key={index}>
                  <h6 className={headingStyles.h6}>{job.title}</h6>
                  <p>{job.company}</p>
                  <p>{job.dates}</p>
                  <ul className="list-disc list-outside	">
                    {job.responsibilities.map((res, index) => (
                      <li key={index}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            <Divider />
          </div>
          <div>
            <h3 className={headingStyles.h3}>Projects</h3>
            {resume.projects.map((project, index) => (
              <div key={index}>
                <h6 className={headingStyles.h6}>{project.title}</h6>
                <p>{project.dates}</p>
                <p>{project.description}</p>
                <ul className="list-disc list-outside	">
                  {project.descriptions.map((res, index) => (
                    <li key={index}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className={headingStyles.h3}>Education</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
