// ShowList.js
import React, { useState, useEffect } from 'react';
import { fetchShows } from '../api';

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetchShows();
      setShows(data);
    };
    getShows();
  }, []);

  return (
    <div className="container text-warning">
      <h1>Filmozia</h1>
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className="col-md-4 mb-4">
            <div className="card">
              
              <img
                src={!(show.show.image?.medium)?"https://lumiere-a.akamaihd.net/v1/images/fol-awards-poster-2_627fd1e0.jpeg":(show.show.image?.medium)}
                className="card-img-top"
                alt={show.show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">{show.show.summary.slice(0,150)}...</p>
                <button
                  className="btn btn-warning text-dark"
                  onClick={() => onSelectShow(show.show)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
