import { Link } from "react-router-dom";

//styles
import "./ShowDetails.css";

const ShowDetails = ({ singleShow }) => {
  const {
    id,
    image,
    name,
    summary,
    rating,
    language,
    genres,
    runtime,
    premiered,
  } = singleShow.show;
  const showSummary = summary.replace(/(<([^>]+)>)/gi, "");

  return (
    <main className="details-page">
      <img src={image ? image.original : ""} alt="movie banner" />

      <div className="show-summary">
        <h1>{name}</h1>
        <h3>Summary</h3>
        <p>{showSummary}</p>
        <p>{`Ratings: ${rating.average}`}</p>
        <p>{`Language: ${language}`}</p>
        <p>{`Genres: ${genres.map((genre) => genre)}`}</p>
        <p>{`Runtime: ${runtime}`}</p>
        <p>{`Released: ${premiered}`}</p>
        <Link to={`/${id}/booking`}>
          <button>Book Ticket</button>
        </Link>
      </div>
    </main>
  );
};

export default ShowDetails;
