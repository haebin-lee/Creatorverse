import CreatorCard from "../components/CreatorCard";

function ShowCreators() {
  return (
    <>
      <h1>CREATORVERSE</h1>
      <div>
        <button>View Creators</button>
        <button>Add a Creator</button>
      </div>
      <div>
        {profiles.map((profile) => (
          <CreatorCard {...profile} />
        ))}
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
