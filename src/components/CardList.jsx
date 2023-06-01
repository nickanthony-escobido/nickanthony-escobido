import Card from "./Card";
import Bugslayer from "../assets/images/first_web.png";
import Tables from "../assets/images/tables.png";
import Nft from "../assets/images/nft.png";
import Form from "../assets/images/form.png";
import ExploreBatanes from "../assets/images/mini-project.png";
import Calculator from "../assets/images/calculator.png";
import "./Card.css";

const CardList = () => {
  const cardData = [
    {
      id: 1,
      title: "Bugslayer",
      imageUrl: Bugslayer,
      href: "https://nickanthony-escobido.github.io/first_web_proj/",
    },
    {
      id: 2,
      title: "Tables",
      imageUrl: Tables,
    },
    { id: 3, title: "Simple Card UI", imageUrl: Nft },
    { id: 4, title: "Form", imageUrl: Form },
    {
      id: 5,
      title: "Explore Batanes",
      imageUrl: ExploreBatanes,
    },
    {
      id: 6,
      title: "Calculator",
      imageUrl: Calculator,
    },
  ];

  return (
    <div className="App">
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
