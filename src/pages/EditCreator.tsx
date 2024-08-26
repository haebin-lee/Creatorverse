import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
interface CreatorForm {
  name: string;
  url: string;
  description: string;
}

function EditCreator() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<CreatorForm>();

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("creators").select().eq("id", id);
      reset(data ? data[0] : null);
    })();
  }, [id, reset]);

  const onValid = (data: CreatorForm) => {
    updateCreator(data);
  };
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await supabase.from("creators").delete().eq("id", id);
    navigate("/creators");
  };

  const updateCreator = async ({ name, url, description }: CreatorForm) => {
    await supabase
      .from("creators")
      .update({
        name: name,
        url: url,
        description: description,
      })
      .eq("id", id);
    navigate("/creators");
  };
  return (
    <>
      <div
        style={{
          margin: "10rem auto",
          minHeight: "50vh",
          maxWidth: "50vw",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Update a creator profile!</h1>
        <form
          onSubmit={handleSubmit(onValid)}
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
              Update
            </button>
            <button
              className="pico-background-red-450"
              style={styles.button}
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="pico-background-grey-200"
              style={styles.button}
              onClick={() => navigate("/creators")}
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
export default EditCreator;
