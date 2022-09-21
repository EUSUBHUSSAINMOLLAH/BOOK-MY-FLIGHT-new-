import React from 'react';
import './TicketDetails.css';

class TicketDetails extends React.Component{
    render(){
        return(
            <div className='container tcDetcont'>
                <p className='ticketHeading'>TICKET DETAILS</p>
                <hr />
                <div className='d-flex justify-content-center'>
                <div className='container-fluid detailscont d-flex justify-content-between'>
                    <div className='Flightname'>{this.props.flight.flight}</div>
                    <div className='fromCityTc'>
                        <p>{this.props.flight.depDate}</p>
                        <p>{`${this.props.flight.fromCode}`} <span className='time'>{`${this.props.flight.dep}`}</span></p>
                        <p>{`${this.props.flight.fromAirport},${this.props.flight.from}, India`}</p>
                    </div>
                    <div className='durationTc'>
                        <p>{this.props.flight.duration}</p>
                        <p>Flight Duration</p>
                    </div>
                    <div className='toCityTc'>
                        <p>{this.props.flight.arrDate}</p>
                        <p>{`${this.props.flight.toCode}`} <span className='time'>{`${this.props.flight.arrival}`}</span></p>
                        <p>{`${this.props.flight.toAirport},${this.props.flight.to}, India`}</p>
                    </div>
                </div>
                </div>
                <hr />
                <p className="time">Price: {this.props.flight.price}</p>
            </div>
        );
    };
};

export default TicketDetails;