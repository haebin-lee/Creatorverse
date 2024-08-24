import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";
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
      const { data, error } = await supabase.from("creators").select("*");
      setCreators(data as Creator[]);
    };
    fetchCreators();
  }, []);

  return (
    <>
      <h1>CREATORVERSE</h1>
      <div>
        <button>View Creators</button>
        <button>
          <Link to={`/add`}>Add a creator</Link>
        </button>
      </div>
      <div>
        <ul>
          {creators.map((profile) => (
            <li key={profile.id}>
              <CreatorCard {...profile} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ShowCreators;

const profiles = [
  {
    id: 1,
    name: "Alex Thompson",
    url: "https://instagram.com/alexthompson_travel",
    imageUrl: "https://example.com/images/alex_thompson.jpg",
    description:
      "Adventure seeker and travel photographer sharing breathtaking landscapes from around the world.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    url: "https://youtube.com/sophialeecooks",
    imageUrl: "https://example.com/images/sophia_lee.jpg",
    description:
      "Culinary artist and food vlogger bringing international cuisines to your kitchen.",
  },
  {
    id: 3,
    name: "Marcus Green",
    url: "https://tiktok.com/@marcusgreen_fitness",
    imageUrl: "https://example.com/images/marcus_green.jpg",
    description:
      "Certified personal trainer and nutrition expert helping you achieve your fitness goals.",
  },
  {
    id: 4,
    name: "Emma Watson",
    url: "https://twitter.com/emmawatson_tech",
    imageUrl: "https://example.com/images/emma_watson.jpg",
    description:
      "Tech enthusiast and software engineer sharing insights on the latest in AI and machine learning.",
  },
  {
    id: 5,
    name: "Jamal Harris",
    url: "https://twitch.tv/jamalharris_gaming",
    imageUrl: "https://example.com/images/jamal_harris.jpg",
    description:
      "Professional gamer and streamer, specializing in strategy games and community building.",
  },
];
