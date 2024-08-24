import { useForm } from "react-hook-form";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
interface CreatorForm {
  name: string;
  url: string;
  description: string;
}

function AddCreator() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<CreatorForm>();
  const onSubmit = (data: CreatorForm) => {
    addCreator(data);
  };

  const addCreator = async ({ name, url, description }) => {
    await supabase.from("creators").insert({
      name: name,
      url: url,
      description: description,
    });
    navigate("/");
  };
  return (
    <>
      <h1>Create a creator profile!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("url")} placeholder="URL" />
        <textarea {...register("description")} placeholder="Description" />
        <button>Create!</button>
        <button>Cancel</button>
      </form>
    </>
  );
}
export default AddCreator;
