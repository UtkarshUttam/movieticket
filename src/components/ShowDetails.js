import React from 'react';
import BookingForm from './BookingForm';

const ShowDetails = ({ show, onBookTicket }) => {
  const [isBookingFormVisible, setIsBookingFormVisible] = React.useState(false);

  const handleBookTicketClick = () => {
    setIsBookingFormVisible(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="container">
          <h2>{show.name}</h2>
          <img src={show.image?.medium || ''} alt={show.name} />
          <p>{show.summary}</p>
        </div>
        <div className="col">
          <button className="btn btn-lg btn-warning text-dark my-3 position-relative" onClick={handleBookTicketClick}>
            Book Ticket
          </button>
        </div>
      </div>
      {isBookingFormVisible && <BookingForm show={show} onBookTicket={onBookTicket} />}
    </div>
  );
};

export default ShowDetails;
