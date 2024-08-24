import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
}

function CreatorCard({ id, name, url, description, imageUrl }: Props) {
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(id, "edit");
  };

  return (
    <>
      <Link to={`/creators/${id}`}>
        <div key={id}>
          <img src={imageUrl} alt="profile_image" />
          <h2>{name}</h2>
          <p>{url}</p>
          <p>{description}</p>
          <button onClick={handleEdit}>edit</button>
        </div>
      </Link>
    </>
  );
}
export default CreatorCard;
