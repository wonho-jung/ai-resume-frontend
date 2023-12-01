"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

interface ResumeFormProps {
  onSubmit: (resume: Resume) => void;
}

interface Resume {
  name: string;
  contactInfo: string;
  workExperience: string[];
  projects: string[];
  education: string[];
}

const ManualResume: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [workExperience, setWorkExperience] = useState<string[]>([]);
  const [projects, setProjects] = useState<string[]>([]);
  const [education, setEducation] = useState<string[]>([]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resume: Resume = {
      name,
      contactInfo,
      workExperience,
      projects,
      education,
    };
    onSubmit(resume);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Contact Info
        <div className="flex">
          <TextField
            label="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </div>
        <TextField
          label="Phone Number"
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Location"
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email Address"
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        Website
        <TextField
          label="LinkedIn"
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Portfolio"
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Github"
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        Work Experience
        <IconButton aria-label="add a work experience">
          <AddIcon />
        </IconButton>
        <div>
          <TextField
            label="Company Name"
            value={workExperience.join("\n")}
            onChange={(event) =>
              setWorkExperience(event.target.value.split("\n"))
            }
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Period"
            value={workExperience.join("\n")}
            onChange={(event) =>
              setWorkExperience(event.target.value.split("\n"))
            }
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Job Title"
            value={workExperience.join("\n")}
            onChange={(event) =>
              setWorkExperience(event.target.value.split("\n"))
            }
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Job Description"
            value={workExperience.join("\n")}
            onChange={(event) =>
              setWorkExperience(event.target.value.split("\n"))
            }
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
          />
        </div>
      </div>
      <div>
        Project
        <IconButton aria-label="add a work experience">
          <AddIcon />
        </IconButton>
        <TextField
          label="Projects"
          value={projects.join("\n")}
          onChange={(event) => setProjects(event.target.value.split("\n"))}
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
      </div>

      <TextField
        label="Education"
        value={education.join("\n")}
        onChange={(event) => setEducation(event.target.value.split("\n"))}
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        rows={4}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ManualResume;
