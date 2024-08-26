import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
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

  const addCreator = async ({ name, url, description }: CreatorForm) => {
    await supabase.from("creators").insert({
      name: name,
      url: url,
      description: description,
    });
    navigate("/creators");
  };
  return (
    <>
      <div
        style={{
          padding: "10rem 30rem 0rem 30rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Create a creator profile!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <input
            {...register("name", {
              required: true,
              maxLength: 20,
            })}
            placeholder="Name"
          />
          <input
            {...register("url", {
              required: true,
              pattern: /^(http|https):\/\/[^ "]+$/,
            })}
            placeholder="URL"
          />
          <textarea
            {...register("description", {
              required: true,
              maxLength: 100,
            })}
            placeholder="Description"
            style={{ height: "200px" }}
          />
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <button
              className="pico-background-orange-350"
              style={styles.button}
            >
              Create
            </button>
            <button
              className="pico-background-grey-200"
              style={styles.button}
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

const styles = {
  button: {
    color: "white",
    border: "none",
    width: "100px",
    height: "50px",
    borderRadius: "5px",
  },
};
export default AddCreator;
