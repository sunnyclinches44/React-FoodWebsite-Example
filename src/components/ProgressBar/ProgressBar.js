import {
  StyledProgressBarContainer,
  StyledFillerContainer
} from "./ProgressBar-styles";

const ProgressBar = (props) => {
  const { completed } = props;
  return (
    <StyledProgressBarContainer>
      <StyledFillerContainer completed={completed}>
        <span className="span-style">{`${completed}%`}</span>
      </StyledFillerContainer>
    </StyledProgressBarContainer>
  );
};

export default ProgressBar;
