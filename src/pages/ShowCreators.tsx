import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { useNavigate } from "react-router-dom";
export interface Creator {
  id: number;
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
}

function ShowCreators() {
  const navigate = useNavigate();
  const [creators, setCreators] = useState<Creator[]>([]);
  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from("creators").select("*");
      setCreators(data as Creator[]);
    };
    fetchCreators();
  }, []);

  return (
    <>
      <div
        style={{
          padding: "10rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Registered creators:</h1>
        {creators.length === 0 && (
          <h4 style={{ textAlign: "center" }} className="pico-color-red-600">
            No creators found
          </h4>
        )}
        <ul style={styles.cardContainer}>
          {creators.map((profile) => (
            <li key={profile.id} style={{ listStyleType: "none" }}>
              <CreatorCard {...profile} />
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <button
            className="pico-background-grey-200"
            style={styles.button}
            onClick={() => navigate("/")}
          >
            Main
          </button>
        </div>
      </div>
    </>
  );
}
export default ShowCreators;

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
    width: "70%",
    gap: "10px",
    margin: "0 auto",
    zIndex: 100,
  },
  button: {
    color: "white",
    border: "none",
    width: "100px",
    height: "50px",
    borderRadius: "5px",
  },
};
