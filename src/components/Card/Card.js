import { StyledCard, StyledCardContainer } from "./Card-styles";

import { StyledHeaderTwo } from "../GenericStyledComponents/GenericStyledComponents";

const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.imageToUse} alt="Category Image" loading="lazy" />
      <StyledCardContainer>
        <StyledHeaderTwo>{props.title}</StyledHeaderTwo>
      </StyledCardContainer>
    </StyledCard>
  );
};

export default Card;
