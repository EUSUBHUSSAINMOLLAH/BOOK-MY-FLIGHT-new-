import React from 'react';
import './FLights.css'

const nyear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const lyear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
class Flights extends React.Component{
 
    render(){
        return(
            <div className='container FlightContainer mb-3'>
                <p style={{fontWeight: '600'}}>{this.props.flight.flight}</p>
                
                <div className='container d-flex justify-content-between'>
                    <div className='fromCity'>
                        <p className='co-grey'>{`${this.props.flight.fromCode} ${this.props.flight.from}, India`}</p>
                        <p style={{fontWeight: '600'}}>{this.props.flight.dep}</p>
                    </div>
                    <div className='duration'>
                        <p className='co-grey'>Duration</p>
                        <p style={{fontWeight: '600'}}>{this.props.flight.duration}</p>
                    </div>
                    <div className='toCity'>
                        <p className='co-grey'>{`${this.props.flight.toCode} ${this.props.flight.to}, India`}</p>
                        <p style={{fontWeight: '600'}}>{this.props.flight.arrival}</p>
                    </div>
                    <div className='price'>
                        <p className='co-grey'>Price</p>
                        <p style={{fontWeight: '600'}}>{this.props.flight.price}</p>
                    </div>
                    <div className='book'>
                        <button className='bookBtn' onClick={(e) => this.handleChange(e)}>Book</button>
                    </div>
                </div>
            </div>
        );
    };

    handleChange(e){
        e.preventDefault();
        const tom= this.props.date;
        let year = tom.getFullYear();
        let month = tom.getMonth();
        let day = tom.getDay();
        if(this.props.flight.hr1 > this.props.flight.hr2){
                if((year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
                    if(lyear[month-1] == day){
                        day = 1;
                        if(month == 12){
                            month = 1;
                            year = year+1;
                        }
                    }
                    else{
                        day = day+1;
                    }
                }
                else {
                    if(nyear[month-1] == day){
                        day = 1;
                        if(month == 12){
                            month = 1;
                            year = year+1;
                        }
                    }
                    else
                    day = day+1;
                }
        }
        this.props.flight.arrDate = `${day} / ${month} / ${year}`;
    this.props.flight.depDate = `${tom.getDay()} /${tom.getMonth()} /${tom.getFullYear()}`; 
    
    if(this.props.count == 0)
    this.props.count = 1;
    let arr = [];
    for(let i = 1; i<=this.props.count; i++)
    arr.push(i);
    this.props.flight.travellerCount = arr;    
    
    this.props.bookedFlight(this.props.flight);
        this.props.book(true);
    }
}

export default Flights;