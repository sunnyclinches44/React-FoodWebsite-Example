import { Link } from "react-router-dom";

import {
  StyledHeroContainer,
  StyledSecondaryContainer
} from "./MainContent-styles";

import { StyledButton } from "../GenericStyledComponents/GenericStyledComponents";

import Card from "../Card/Card";

const MainContent = () => {
  return (
    <div>
      <StyledHeroContainer>
        <section className="Herocontainer-Left">
          <h1>The Indian Food</h1>
          <h2>Recipies that you are craving for</h2>
          <StyledButton>Food Recipies</StyledButton>
        </section>
        <section>
          <img
            src="sumeet-b-e2b0-q7gjgg-unsplash.jpg"
            alt="Home page food site"
          />
        </section>
      </StyledHeroContainer>
      <StyledSecondaryContainer>
        <h2> Something to explore </h2>
        <div className="cards_section">
          <Link to="/recipies/Vegetarian" className="card_link">
            <Card
              imageToUse="tangerine-newt-RgT22Ixcq4Y-unsplash.jpg"
              title="Vegetarian"
            />
          </Link>
          <Link to="/recipies/NonVegetarian" className="card_link">
            <Card
              imageToUse="victoria-shes-UC0HZdUitWY-unsplash.jpg"
              title="Non-Vegetarian"
            />
          </Link>
          <Link to="/recipies/Desserts" className="card_link">
            <Card
              imageToUse="kobby-mendez-idTwDKt2j2o-unsplash.jpg"
              title="Desserts"
            />
          </Link>
        </div>
      </StyledSecondaryContainer>
    </div>
  );
};

export default MainContent;
