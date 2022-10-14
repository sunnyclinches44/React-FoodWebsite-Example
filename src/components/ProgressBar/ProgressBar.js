import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import {
  StyledProgressBarContainer,
  StyledFillerContainer,
} from "./ProgressBar-styles";

const ProgressBar = ({
  file,
  setFile,
  setIsUploadInProgress,
  category
}) => {
  const { progress, url } = useStorage(file, category);

  useEffect(() => {
    if (url) {
      setFile(null);
      setIsUploadInProgress(false);
    }
  }, [url, setFile,  setIsUploadInProgress]);

  return (
    <StyledProgressBarContainer>
      <StyledFillerContainer completed={Math.trunc(progress)}>
        <span className="span-style">{`${Math.trunc(progress)}%`}</span>
      </StyledFillerContainer>
    </StyledProgressBarContainer>
  );
};

export default ProgressBar;
