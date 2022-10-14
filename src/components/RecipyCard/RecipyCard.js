import {
  StyledRecipyCard,
  StyledRecipyCardTitle,
  StyledRecipyCardDescription
} from "./RecipyCard-styles";

const RecipyCard = (props) => {
  return (
    <StyledRecipyCard>
      <img src={props.url} alt="Sample Veg Card" loading="lazy" />
      <div className="card-content">
        <StyledRecipyCardTitle titleLength={props.length}>
          {props.title}
          <img src="/icons8-leaf-48.png" alt="vegetarian green leaf icon" />
        </StyledRecipyCardTitle>

        <StyledRecipyCardDescription>
          {props.description}
        </StyledRecipyCardDescription>
      </div>
    </StyledRecipyCard>
  );
};

export default RecipyCard;
