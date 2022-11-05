import { CenterBox, StyledSpinner } from "./styled-spinner";

const Spinner = () => (
  <CenterBox>
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
  </CenterBox>
);

export default Spinner;