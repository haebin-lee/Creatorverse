interface Props {
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
}

function CreatorCard({ name, url, description, imageUrl }: Props) {
  return (
    <>
      <div>
        <img src={imageUrl} alt="profile_image" />
        <h2>{name}</h2>
        <p>{url}</p>
        <p>{description}</p>
      </div>
    </>
  );
}
export default CreatorCard;
