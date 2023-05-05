import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import BookingForm from "../../components/BookingForm/BookingForm";

const BookingFormPage = () => {
  const [singleShowData, setSingleShowData] = useState(null);
  const { showId } = useParams();
  const id = Number(showId);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json = await response.json();
      const singleShow = json.find((data) => data.show.id === id);
      setSingleShowData(singleShow);
    };
    fetchAPI();
  }, [id]);

  return (
    <>{singleShowData && <BookingForm singleShowData={singleShowData} />}</>
  );
};

export default BookingFormPage;
