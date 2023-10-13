"use client";
import React, { useEffect, useRef } from "react";

const UploadResume = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  //   fetch("http://localhost:8000/upload").then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  const handleUpload = async () => {
    const uploadFile = inputRef.current?.files?.[0];
    console.log(uploadFile);
    if (!uploadFile) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadFile, uploadFile.name); // "file"은 서버에서 사용할 필드 이름

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // // 성공된 text를 받아옴
        const data = await response.json();
        console.log("파일 업로드 성공", data);

        // console.log("파일 업로드 성공", extractedText);
        console.log("success");
      } else {
        console.log(response.status, response.statusText);
        throw new Error("Failed to upload file");
      }
    } catch (error) {
      console.error("파일 업로드 중 오류 발생", error);
    }
  };

  return (
    <div>
      <label htmlFor="resume-upload">Upload Resume</label>
      <input
        ref={inputRef}
        type="file"
        id="resume-upload"
        onChange={handleUpload}
      />
    </div>
  );
};

export default UploadResume;
