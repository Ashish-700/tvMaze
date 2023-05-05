//styles
import { Link } from "react-router-dom";
import "./ShowCard.css";

const ShowCard = ({ showInfo }) => {
  return (
    <div className="show-card">
      <img
        src={showInfo.show.image ? showInfo.show.image.original : ""}
        alt="movie banner"
      />
      <div className="show-info">
        <h2>{showInfo.show.name}</h2>
        <p>{`Rating: ${showInfo.show.rating.average}`}</p>
        <p>{`Language: ${showInfo.show.language}`}</p>
        <p>{`Genres: ${showInfo.show.genres.map((genre) => genre)}`}</p>
        <p>{`Runtime: ${showInfo.show.runtime}`}</p>
        <p>{`Released: ${showInfo.show.premiered}`}</p>
        <Link to={`/${showInfo.show.id}`}>
          <button>Watch</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
