import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//styles
import "./ShowDetailsPage.css";

//components
import ShowDetails from "../../components/ShowDetails/ShowDetails";

const ShowDetailsPage = () => {
  const { showId } = useParams();
  const id = Number(showId);
  const [singleShowData, setSingleShowData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json = await response.json();
      const singleShow = json.find((data) => data.show.id === id);
      setSingleShowData(singleShow);
    };
    fetchAPI();
  }, [id]);

  return <>{singleShowData && <ShowDetails singleShow={singleShowData} />}</>;
};

export default ShowDetailsPage;
