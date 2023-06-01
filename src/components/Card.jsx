import "./Card.css";

const Card = ({ title, imageUrl, href }) => {
  const handleClick = () => {
    window.location.href = href; // Redirect to the specified href on click
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <h5 className="card-title">{title}</h5>
    </div>
  );
};

export default Card;
