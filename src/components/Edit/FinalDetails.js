import React from 'react';
import './FinalDetails.css';
import {v4 as uuid} from 'uuid';

let ind = 0;
const bookingID = uuid().slice(0,8);
class FinalDetails extends React.Component{
    
    render(){
        return(
            <div className='container travDetcont'>
                <p>TRAVELLER DETAILS</p>
                <hr />
                <div className='row pb-3'>
                <div style={{fontWeight: 600}} className="col-sm-2">Booking ID: </div> <div className='col-sm-4'>{bookingID}</div>
                </div>
                    {this.props.findet.details.details.map( elem => {
                        ind = ind+1;
                    return (<div key={ind} className='row'>
                    <p>Traveller {ind}</p>
                    <div className='col-sm-2'>Name:</div>
                    <div className='col-sm-8'>{`${elem.title}. ${elem.firstname} ${elem.lastname}`}</div>                    
                </div>)
    })
                    }
                    <hr />
                    <div className='row pt-3'>
                    <div className='col-sm-2'>Email:</div>
                    <div className='col-sm-8'>
                        {this.props.findet.details.email}
                    </div>
                    </div>

                    <div className='row'>
                    <div className='col-sm-2'>Mobile Number:</div>
                    <div className='col-sm-4'>
                        {this.props.findet.details.mobileNumber}
                    </div>
                    </div>

                <div className='row'>
                    <div className='col-sm-2'>Seats:</div>
                    <div className='col-sm-8 d-flex'>{this.props.findet.seatsBooked.map(elem =>
                        {return(
                            <div key={elem} className="pe-3">{elem}</div>
                        )
})}</div>
                </div>
                
                <hr />
                <div className='d-flex'>
                <div className='book'>
                    <button className='bookBtn' onClick={(e) => this.onClickHandle(e)}>Edit</button>
                </div>
                <div>
                    <button className='save' onClick={(e) => this.onSubmit(e)}>Book</button>
                </div>
                </div>
            </div>
        );
    };
    onClickHandle(e){
        e.preventDefault();
        this.props.edit(false);
    }
    onSubmit(e){
        e.preventDefault();
        this.props.booked(true);
    }
};

export default FinalDetails;