import React from 'react';
import Flights from './Flights';

const FlightList = ({flights, bookedFlight, book, date, count}) => {
    const renderList = flights.map((flight) => {
        return <Flights key={flight.dep+flight.arrival} flight={flight} bookedFlight={bookedFlight} book = {book} date = {date} count={count}/>;
    });

    return (   
            <main>
            <div className='container d-flex justify-content-center'>
            <div className='container-fluid visible'>
                {flights.length !== 0 ? renderList: ''}
           </div>
            </div>
        </main>
    );
};

export default FlightList;