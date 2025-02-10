import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    // Using FormData to submit the file
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5005/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      {" "}
      <h2>Upload an Image</h2> <input type="file" onChange={handleFileChange} />{" "}
      <button onClick={handleUpload}>Upload</button>{" "}
      {imageUrl && (
        <div>
          {" "}
          <p>Uploaded Image:</p>{" "}
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default Upload;
