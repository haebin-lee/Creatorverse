import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
export interface Creator {
  id: number;
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
}

function ShowCreators() {
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
      <ul style={styles.cardContainer}>
        {creators.map((profile) => (
          <li key={profile.id} style={{ listStyleType: "none" }}>
            <CreatorCard {...profile} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ShowCreators;

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
    width: "70%",
    gap: "50px",
    margin: "0 auto",
  },
};
