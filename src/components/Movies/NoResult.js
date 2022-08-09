import { ErrorHeadingStyle, NoResultStyle } from "../../styles/NoResult.styled";
import noResult from "../SVGs/noResult.svg";

export const NoResult = () => {
  return (
    <>
      <NoResultStyle>
        <ErrorHeadingStyle>Sorry,there is no result for keyword you searched</ErrorHeadingStyle>
        <img src={noResult} alt= "no result"></img>
      </NoResultStyle>
    </>
  );
}
