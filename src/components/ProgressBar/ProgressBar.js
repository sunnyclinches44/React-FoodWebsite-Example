import { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import {
  StyledProgressBarContainer,
  StyledFillerContainer,
} from "./ProgressBar-styles";

const ProgressBar = ({
  file,
  setFile,
  setUploadMessage,
  setIsUploadInProgress,
}) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setUploadMessage({
        status: "success",
        message: `${file.name} uploaded to firebase`,
      });
      setFile(null);
  
      setIsUploadInProgress(false);
    }
  }, [url, setFile, setUploadMessage, setIsUploadInProgress]);

  return (
    <StyledProgressBarContainer>
      <StyledFillerContainer completed={Math.trunc(progress)}>
        <span className="span-style">{`${Math.trunc(progress)}%`}</span>
      </StyledFillerContainer>
    </StyledProgressBarContainer>
  );
};

export default ProgressBar;
