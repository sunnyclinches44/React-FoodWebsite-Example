import { useEffect, useState } from "react";

import {
  StyledButton,
  StyledHeaderOne,
  StyledHeaderTwo,
} from "../GenericStyledComponents/GenericStyledComponents";

import {
  StyledUploadImageContainer,
  StyledUploadMessage,
} from "./UploadImage-styles";
import ProgressBar from "../ProgressBar/ProgressBar";

import FormInput from "../FormInput/FormInput";

const UploadImage = (props) => {
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const [imageSelected, SetImageSelected] = useState(null);
  const [isUploadInProgress, SetIsUploadInProgress] = useState(false);

  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [validationMessages, SetValidationMessages] = useState([]);

  const updateImageUploaded = (event) => {
    SetImageSelected(event.target.files[0]);
  };

  useEffect(() => {
    if (Object.keys(validationMessages).length > 0) {
      console.log(
        "Inside useEffect function of UploadForm: ",
        validationMessages
      );
    }
  }, [validationMessages]);

  const SubmitForm = (e) => {
    e.preventDefault();
    SetValidationMessages(ValidateForm);
    // Set is upload in progress to true
    SetIsUploadInProgress(true);
  };

  const ValidateForm = () => {
    // Validate the fields
    const errors = [];
    if (title === "") {
      errors.push({ field: "title", message: "Title is mandatory" });
    }
    if (description === "") {
      errors.push({
        field: "description",
        message: "Description is mandatory",
      });
    }
    if (imageSelected == null) {
      errors.push({
        field: "selectedImage",
        message: "Select an Image to upload",
        status: "error",
      });
    } else if (!types.includes(imageSelected.type)) {
      errors.push({
        field: "selectedImage",
        message: "Selected file format is not valid",
        status: "error",
      });
    }

    return errors;
  };

  return (
    <StyledUploadImageContainer onSubmit={SubmitForm}>
      <img
        src="/cancel-icon.svg"
        className="styled-cancel-img"
        alt="Cancel Icon"
        onClick={props.hideUploadScreen}
      />
      {validationMessages.map((info) => {
        if (info.field === "selectedImage") {
          console.log("Inside Map Function: ", info);
          return (
            <StyledUploadMessage
              key="{info.field}"
              uploadmessagestatus={info.status}
            >
              {info.message}
            </StyledUploadMessage>
          );
        }
      })}
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
            setIsUploadInProgress={SetIsUploadInProgress}
            category={props.category}
          />
        </div>
      )}

      <FormInput
        id="category"
        name="category"
        placeHolderInfo="Category"
        inputValue={props.category}
        isReadOnly={true}
      />
      <FormInput
        id="title"
        name="title"
        onChange={(e) => SetTitle(e.target.value)}
        placeHolderInfo="Title"
        errorMessages={validationMessages.filter(
          (info) => info.field === "title"
        )}
      />
      <FormInput
        id="description"
        name="description"
        onChange={(e) => SetDescription(e.target.value)}
        placeHolderInfo="Description"
        errorMessages={validationMessages.filter(
          (info) => info.field === "description"
        )}
      />

      <StyledButton type="submit"> Submit </StyledButton>
    </StyledUploadImageContainer>
  );
};

export default UploadImage;
