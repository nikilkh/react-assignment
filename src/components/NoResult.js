import { NoResultStyle } from "../styles/NoResult.styled";
import noResult from "./noResult.svg";

export const NoResult = () => {
  return (
    <>
      <NoResultStyle>
        <h2>Sorry,there is no result for keyword you searched</h2>
        <img src={noResult} alt= "no result"></img>
      </NoResultStyle>
    </>
  );
}
