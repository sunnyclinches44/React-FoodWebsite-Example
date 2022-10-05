import { useParams } from "react-router-dom";
import { useState } from "react";

import { StyledRecipiesContainer } from "./Recipies-styles";
import {
  StyledButton,
  StyledHeaderOne
} from "../GenericStyledComponents/GenericStyledComponents";

import RecipyCard from "../RecipyCard/RecipyCard";

import UploadImage from "../UploadImage/UploadImage";

import { getRecipySamples } from "../../data/recipy-samples";

const Recipies = () => {
  let params = useParams();
  let SelectedCategory = params.selectedCategory;
  let recipySamples = getRecipySamples();

  /* Logic related to upload screen */
  const [IsUploadDisplay, setIsUploadDisplay] = useState(false);

  const showUploadScreen = () => {
    setIsUploadDisplay(true);
  };

  const hideUploadScreen = () => {
    setIsUploadDisplay(false);
  };

  return (
    <StyledRecipiesContainer>
      <div className="Recipy-Header">
        <StyledHeaderOne>{SelectedCategory}</StyledHeaderOne>
        {!IsUploadDisplay && (
          <StyledButton onClick={showUploadScreen}>Upload</StyledButton>
        )}
      </div>
      {IsUploadDisplay && <UploadImage hideUploadScreen={hideUploadScreen} />}
      {!IsUploadDisplay && (
        <div className="Recipy-Card-Container">
          {recipySamples.map((recipy) => (
            <RecipyCard {...recipy} key={recipy.id} />
          ))}
        </div>
      )}
    </StyledRecipiesContainer>
  );
};

export default Recipies;
