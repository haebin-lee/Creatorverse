import { useForm } from "react-hook-form";

function AddCreator() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
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
