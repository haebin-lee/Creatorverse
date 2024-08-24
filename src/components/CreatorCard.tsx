import { Link, useNavigate } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
}

function CreatorCard({ id, name, url, description, imageUrl }: Props) {
  const navigate = useNavigate();
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`creators/${id}/edit`);
  };
  return (
    <div>
      <button>
        <Link key={id} to={`/creators/${id}`}>
          detail
        </Link>
      </button>
      <img src={imageUrl} alt="profile_image" />
      <h2>{name}</h2>
      <p>{url}</p>
      <p>{description}</p>
      <button onClick={handleEdit}>edit</button>
      <br />
    </div>
  );
}
export default CreatorCard;
