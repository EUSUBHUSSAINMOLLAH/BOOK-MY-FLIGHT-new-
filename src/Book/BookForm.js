import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import '../components/navbar/navbar.css';
import './BookForm.css'
import Home from '../Backgrounds/Home';
import TicketDetails from './TicketDetails';
import Form from './Form';
import SeatSelection from './SeatSelection';

class BookForm extends React.Component{
    state={
        details: {},
        proceedClicked: false,
        seatsBooked: [],
    }

    setProceedClicked(val){
        this.setState({
            proceedClicked: val
        });
    };

    setDetails(det){
        this.state.details = det;
        console.log(this.state.details);
    }

    setSeatsBooked(seats){
        this.state.seatsBooked = seats;
    }

    onSubmit(){
        this.props.finalDetails(this.state);
        this.props.edit(true);
    }
    render(){
        return(
                    <div className='container d-flex justify-content-center'>
                        <div className='container-fluid visible'>
                        <TicketDetails flight={this.props.flight}/>
                        <div className='container d-lg-flex'>
                        <Form count = {this.props.flight.travellerCount} setFormDetails = {this.setDetails.bind(this)} clicked={this.setProceedClicked.bind(this)} />
                        <SeatSelection seats = {this.setSeatsBooked.bind(this)} count={this.props.flight.travellerCount.length} edit = {this.onSubmit.bind(this)} clicked={this.state.proceedClicked}/>
                        </div>
                        </div>
                    </div>
               
        );
    };

    
};

export default BookForm;