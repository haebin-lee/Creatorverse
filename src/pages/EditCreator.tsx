import { useParams } from "react-router-dom";

function EditCreator() {
  const { id } = useParams();
  return (
    <>
      <div>Edit Creator: {id}</div>
    </>
  );
}
export default EditCreator;
