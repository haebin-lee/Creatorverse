import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await supabase.from("creators").delete().eq("id", id);
    navigate("/");
  };
  return (
    <>
      <div>Edit Creator: {id}</div>
      <button onClick={handleDelete}>delete</button>
    </>
  );
}
export default EditCreator;
