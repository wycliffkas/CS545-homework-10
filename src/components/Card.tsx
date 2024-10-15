type CardProps = {
  name: string;
  avatarUrl: string;
  url: string;
};

const Card: React.FC<CardProps> = ({ url, name, avatarUrl }) => {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={avatarUrl} style={{ width: "100px" }} alt={`photo-${name}`} />
      </a>
      <p className="card-text">{name}</p>
    </div>
  );
};

export default Card;
