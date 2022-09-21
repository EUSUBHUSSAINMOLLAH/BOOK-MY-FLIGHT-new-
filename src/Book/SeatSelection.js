import React from 'react';
import Seats from '../components/Booking/Seatselection';

class SeatSelection extends React.Component{
    state={
        seatsBooked: [],
        invalidResult: false,
    }

    setSeatsBooked(seats){
        this.state.seatsBooked = seats;
        this.props.seats(seats);
    }
    render(){
        return(
            <div className='container travDetcont' style={{pointerEvents: this.props.clicked ? 'auto' : 'none', opacity: this.props.clicked ? 1 : 0.5}}>
                <p>SELECT SEAT</p>
                <p>{`Select ${this.props.count} seats`}</p>
                <hr />
                <Seats seatsBooked = {this.setSeatsBooked.bind(this)} count = {this.props.count} />
                <hr />
                {this.state.invalidResult ? <div className="container travelDet alert alert-danger" role="alert">Please select all seats</div>: ''}
                <div className='book'>
                    <button onClick={(e) => this.onClickHandle(e)} className='bookBtn'>Save &amp; Continue</button>
                </div>
            </div>
        );
    };

    onClickHandle(e){
        e.preventDefault();
        if(this.state.seatsBooked.length < this.props.count){
            this.state.invalidResult = false;
        this.setState({invalidResult: !this.state.invalidResult});
        }
        else
        this.props.edit();
    }
};

export default SeatSelection;