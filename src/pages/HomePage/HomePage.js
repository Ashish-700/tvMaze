import { useEffect, useState } from "react";

//styles
import "./HomePage.css";

//components
import ShowCard from "../../components/ShowCard/ShowCard";

const HomePage = () => {
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json = await response.json();
      if (response.ok) {
        setShowData(json);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div className="home">
      {showData &&
        showData.map((showInfo) => (
          <ShowCard key={showInfo.show.id} showInfo={showInfo} />
        ))}
    </div>
  );
};

export default HomePage;
