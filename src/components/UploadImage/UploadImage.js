import { useState } from "react";

import {
  StyledButton,
  StyledHeaderOne,
  StyledHeaderTwo,
} from "../GenericStyledComponents/GenericStyledComponents";

import { StyledUploadImageContainer } from "./UploadImage-styles";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadImage = (props) => {
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const [imageSelected, SetImageSelected] = useState(null);
  const [uploadMessage, SetUploadMessage] = useState(null);
  const [isUploadInProgress, SetIsUploadInProgress] = useState(false);

  const updateImageUploaded = (event) => {
    SetImageSelected(event.target.files[0]);
  };

  const uploadImageSelected = () => {
    console.log(imageSelected.type);
    if (imageSelected == null) {
      console.log("Please upload an image");
      return;
    }
    if (types.includes(imageSelected.type)) {
      // Validate the type of image file
      SetIsUploadInProgress(true);
      return;
    } else {
      SetUploadMessage({
        status: "error",
        message: "Uploaded file format is not supported",
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
          uploadmessagestatus={uploadMessage.status}
        >
          {uploadMessage.message}
        </div>
      )}
      <StyledHeaderOne>Upload</StyledHeaderOne>
      {imageSelected == null && (
        <div>
          <label htmlFor="UploadFileInput">
            <img
              src="/icons8-upload-to-cloud-50.png"
              className="styled-upload-img"
              alt="Upload Icon"
            />
          </label>
          <input
            type="file"
            id="UploadFileInput"
            onChange={updateImageUploaded}
          />
        </div>
      )}
      {imageSelected != null && (
        <StyledHeaderTwo>Selected Image - {imageSelected.name}</StyledHeaderTwo>
      )}
      {isUploadInProgress && (
        <div>
          <ProgressBar
            file={imageSelected}
            setFile={SetImageSelected}
            setUploadMessage={SetUploadMessage}
            setIsUploadInProgress={SetIsUploadInProgress}
          />
        </div>
      )}

      <StyledButton onClick={uploadImageSelected}> Submit </StyledButton>
    </StyledUploadImageContainer>
  );
};

export default UploadImage;
