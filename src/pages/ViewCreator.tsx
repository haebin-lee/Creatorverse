import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { Creator } from "./ShowCreators";

function ViewCreator() {
  const [creator, setCreator] = useState<Creator>();
  const { id } = useParams();
  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id);
      setCreator(data[0]);
    };
    fetchCreator();
  });

  return (
    <>
      <h2>{creator?.name}</h2>
      <img src={creator?.imageUrl} alt="profile_image" />
      <p>{creator?.url}</p>
      <p>{creator?.description}</p>
    </>
  );
}
export default ViewCreator;
