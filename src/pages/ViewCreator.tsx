import { useParams, useSearchParams } from "react-router-dom";

function ViewCreator() {
  const { id } = useParams();

  return <>View Creator: {id}</>;
}
export default ViewCreator;
