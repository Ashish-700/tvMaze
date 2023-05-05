import { useState } from "react";

//styles
import "./BookingForm.css";

const BookingForm = ({ singleShowData }) => {
  const { name, image } = singleShowData.show;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, email, numberOfTickets);
    setUserName("");
    setEmail("");
    setNumberOfTickets(0);
  };

  return (
    <div className="booking-details">
      <img src={image ? image.original : ""} alt="movie banner" />
      <div className="booking-form">
        <h2>Book a Ticket</h2>
        <h1>{name}</h1>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <div>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />
          </div>

          <label>Email: </label>
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <label>Number of Tickets: </label>
          <div>
            <input
              type="Number"
              onChange={(e) => setNumberOfTickets(e.target.value)}
              value={numberOfTickets}
              required
            />
          </div>
          <button type="submit">Buy</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
