import React from 'react';
import './Travel.css';
import FlightList from './FlightList';


class Travel extends React.Component{
    state={
        from: "",
        to: "",
        departure: -1,
        travellers: "",
        checkResult: false,
        clicked: false,
        fli: [],
        date: "",
        invalidResult: false,
        sameCity: false,
    }

    setFromCity(e){
        this.setState({from: e.target.value});
    };

    setDepature(e){
        const date = new Date(e.target.value);
        this.setState({date: date});
        this.setState({departure: date.getDay()});
    }

    render(){
        return(
            <div>
                
                <form>
                    <div className='container d-flex justify-content-center'>
                    
            <div className='container TravelCont'>
                <p className='text-center' style={{fontSize: `2rem`}}>Domestic Flights</p>
                    <div className='container travelDet'>
                    <div className="row g-5">
                        <div className="col-md">
                        <label className='label' htmlFor="form">From</label>
                            <select className="form-select form-select-lg py-3 form-det" id="form" onChange={(e) => {this.setFromCity(e)}}>
                                <option value="From">From</option>
                                {this.props.cities.map(elem => {
                                    return(
                                        <option key={elem} value={elem}>{elem}</option>
                                    );
                                })}
                            </select>
                                </div>
                        <div className="col-md">
                        <label htmlFor="To">To</label>
                        <select className="form-select form-select-lg py-3 form-det" id="To" onChange={(e) => {this.setState({to: e.target.value});}}>
                        <option value="To">To</option>
                                {this.props.cities.map(elem => {
                                    return(
                                        <option key={elem} value={elem}>{elem}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col-md">
                        <label htmlFor="date">Departure</label>
                                <input onChange={(e) => {this.setDepature(e)}} type="date" className="form-control form-det py-3" id="date" min={new Date().toISOString().split("T")[0]}/>
                        </div>
                        
                        
                        <div className="col-md">
                        <label htmlFor="count">Travellers</label>
                            <input onChange={(e) => this.setState({travellers: e.target.value})} type="text" className="form-control form-det py-3" id="To" placeholder="0" required/>
                        </div>
                    </div>
                </div>
                </div>
                
                </div>
                <div className='container d-flex justify-content-center '>
                        
                <div className='conatiner searchbtn'><button type='submit' onClick={(e) => this.check(e)} className='searchFlightbtn'>Search Flights</button></div>
                </div>
                    </form>
                    {this.state.invalidResult ? <div className="container travelDet alert alert-danger" role="alert">Please Enter all details</div>: ''}
                    {this.state.checkResult ? <div className="container travelDet alert alert-danger" role="alert">No flights found</div>: this.state.sameCity ? <div className="container travelDet alert alert-danger" role="alert">Destination and boarding city should be different</div> : <FlightList flights={this.state.fli} bookedFlight={this.props.bookedFlight} book = {this.props.book} date={this.state.date} count={this.state.travellers}/> 
            }
               </div>
        );
    };

    check(e){
        e.preventDefault();
        if(this.state.from == '' || this.state.to == '' || this.state.departure == -1 || this.state.travellers == ''){
            this.state.invalidResult = false;
        this.setState({invalidResult: !this.state.invalidResult});
    }
        else{
            this.state.invalidResult = false;
            const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
        this.state.fli = [];
        if(this.state.from === this.state.to){
            this.state.sameCity = false;
    this.setState({sameCity: !this.state.sameCity});
        }
        else{
        if(this.props.cities.includes(this.state.from) && this.props.cities.includes(this.state.to)){
            this.props.flights.map( flight => {
                if(flight.to === this.state.to && flight.from === this.state.from && flight.day === weekdays[this.state.departure]){
                    this.state.fli.push(flight);
            }
        }
            );
        }
        if(this.state.fli.length == 0)
        this.setState({checkResult: true});
        else
        this.state.checkResult = false;
        this.setState({fli: this.state.fli});
        }}
    };
}

export default Travel;