import React from 'react';

const BookingForm = ({ show }) => {
  
  return (
    <div className="container">
      {/* <h2>Get your Tickets Now!!!</h2>
      <p>Please enter your details to book a ticket for the show {show.name}</p>
      <div className="container">
      <input type="text" name="name" placeholder="Your name" />
      <input className="" type="email" name="email" placeholder="Your email address" />
      <input className="row" type="number" name="tickets" placeholder="Number of tickets" />
      <button className="btn btn-primary row" onClick={() => onBookTicket(show)}>
        Book Ticket
      </button>
      </div> */}

      <div className="container">
      <form>
  <div className="mb-3">
    <label className="form-label"><h2>Name</h2></label>
    <input type="text" className="form-control bg-warning" placeholder='Your Name'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h2>Email address</h2></label>
    <input type="email" className="form-control bg-warning" placeholder='Yourname@email.com'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h2>No. of Tickets</h2></label>
    <input className="form-control bg-warning" type="number" name="tickets" placeholder="Number of tickets" />
  </div>
  
  <button type="submit" className="btn btn-dark text-warning">Submit</button>
</form>
</div>

    </div>
    
  );
};

export default BookingForm;
