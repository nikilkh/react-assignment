import { NoResultStyle } from "../styles/NoResult.styled";
import noresult from "./noresult.svg";

export default function NoResult() {
  return (
    <>
      <NoResultStyle>
        <h2>Sorry,there is no result for keyword you searched</h2>
        <img src={noresult}></img>
      </NoResultStyle>
    </>
  );
}
