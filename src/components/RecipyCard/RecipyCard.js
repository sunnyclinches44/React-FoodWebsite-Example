import {
  StyledRecipyCard,
  StyledRecipyCardTitle,
  StyledRecipyCardDescription
} from "./RecipyCard-styles";

const RecipyCard = (props) => {
  return (
    <StyledRecipyCard>
      <img src={props.src.medium} alt="Sample Veg Card" loading="lazy" />
      <div className="card-content">
        <StyledRecipyCardTitle titleLength={props.alt.length}>
          {props.alt}
          <img src="/icons8-leaf-48.png" alt="vegetarian green leaf icon" />
        </StyledRecipyCardTitle>

        <StyledRecipyCardDescription>
          Recipy Card Description
        </StyledRecipyCardDescription>
      </div>
    </StyledRecipyCard>
  );
};

export default RecipyCard;
