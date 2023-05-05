import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ShowDetailsPage from "./pages/ShowDetailsPage/ShowDetailsPage";
import BookingFormPage from "./pages/BookingFormPage/BookingFormPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/:showId" element={<ShowDetailsPage />} />
          <Route path="/:showId/booking" element={<BookingFormPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
