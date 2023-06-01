import CardList from "../components/CardList";
import NavigationBar from "../components/NavigationBar";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <NavigationBar />
      <div className="portfolioContent">
        <h1>PORTFOLIO</h1>
        <CardList />
      </div>
    </>
  );
};

export default Portfolio;
