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
      <div
        style={{
          margin: "10rem 5rem",
          padding: "10rem",
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
          />
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}
          >
            <button
              className="pico-background-orange-350"
              style={styles.button}
            >
              Create
            </button>
            <button className="pico-background-grey-200" style={styles.button}>
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
