import React, { useState } from 'react';
import './App.css';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (show) => {
    // Handle booking ticket, saving to local/session storage, etc.
    setUserDetails({ showName: show.name, showId: show.id });
  };

  return (
    <div className="App">
      <header className="App-header header-bg">
        Filmozia
      </header>
      {selectedShow ? (
        <ShowDetails show={selectedShow} onBookTicket={handleBookTicket} />
      ) : (
        <ShowList onSelectShow={handleSelectShow} />
      )}
    </div>
  );
}

export default App;
