import React from "react";
import { Button } from "@mui/material";
import TemplatesDialog from "./Templates";
const emails = ["username@gmail.com", "user02@gmail.com"];

const ResumeBuild = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <div className="flex justify-between w-[816px] ">
        <div>
          <Button onClick={handleClickOpen}>Templates</Button>
          <Button>Manage Sections</Button>
          <Button>Upload resume</Button>
        </div>
        <Button>Download</Button>
      </div>
      <div className="w-[816px] h-[950px] bg-white "></div>
      <TemplatesDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        emails={emails}
      />
    </>
  );
};

export default ResumeBuild;
