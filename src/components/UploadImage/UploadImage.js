import { useState } from "react";

import {
  StyledButton,
  StyledHeaderOne
} from "../GenericStyledComponents/GenericStyledComponents";

import { StyledUploadImageContainer } from "./UploadImage-styles";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadImage = (props) => {
  const [imageUpload, SetImageUpload] = useState(null);
  const [uploadMessage, SetUploadMessage] = useState(null);

  const updateImageUploaded = (event) => {
    SetImageUpload(event.target.files[0]);
  };

  const uploadImageUploaded = () => {
    console.log(imageUpload.type);
    if (imageUpload == null) {
      console.log("Please upload an image");
      return;
    }
    if (
      imageUpload.type.includes("image/png") ||
      imageUpload.type.includes("image/jpeg") ||
      imageUpload.type.includes("image/jpg")
    ) {
      SetUploadMessage({
        status: "success",
        message: "Upload the file to firebase storage"
      });
      console.log("Upload the file to firebase storage");
      return;
    } else {
      SetUploadMessage({
        status: "error",
        message: "Uploaded file format is not supported"
      });
      console.log("Uploaded file format is not supported");
    }
  };

  return (
    <StyledUploadImageContainer>
      <img
        src="/cancel-icon.svg"
        className="styled-cancel-img"
        alt="Cancel Icon"
        onClick={props.hideUploadScreen}
      />
      {uploadMessage != null && (
        <div
          className="upload-message"
          uploadMessageStatus={uploadMessage.status}
        >
          {uploadMessage.message}
        </div>
      )}
      <StyledHeaderOne>Upload</StyledHeaderOne>
      <label for="UploadFileInput">
        <img
          src="/icons8-upload-to-cloud-50.png"
          className="styled-upload-img"
          alt="Upload Icon"
        />
      </label>
      <input type="file" id="UploadFileInput" onChange={updateImageUploaded} />
      <ProgressBar completed="90" />
      <StyledButton onClick={uploadImageUploaded}> Submit </StyledButton>
    </StyledUploadImageContainer>
  );
};

export default UploadImage;
