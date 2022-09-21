import React from 'react';
import Nav from './navbar/navbar';
import './App.css';
import Edit from './Edit/Edit';
import Travel from './Booking/Travel';
import Home from '../Backgrounds/Home';
import BookForm from '../Book/BookForm';
import Message from './Booking/Message';

const arr = ["Indigo", "Air India", "SpiceJet", "Go First", "AirAsia India", "Vistara"];
const cities = ["Ahemdabad", "Amritsar", "Bengaluru", "Chennai", "Calicut","Goa", "Guwahati", "Hyderabad", "Jaipur", "Kochi", "Kolkata", "Mumbai", "Nagpur", "New Delhi", "Port Blair", "Srinagar", "Thiruvananthapuram"];


const dic = {
    "Kolkata": {
        name: "Netaji Subhash Chandra Bose International Airport",
        code: "CCU"
    },
    "Chennai": {
        name: "Chennai International Airport",
        code: "MAA",
    },
    "Thiruvananthapuram": {
        name: "Thiruvananthapuram International Airport",
        code: "TRV",
    },
    "Ahemdabad": {
        name: "Sardar Vallabh Bhai Patel International Airport",
        code: "AMD",
    },
    "Amritsar": {
        name: "Guru Ram Dass Jee International Airport",
        code: "ATQ",
    },
    "Guwahati": {
        name: "Lokpriya Gopinath Bordoloi International Airport",
        code: "GAU",
    },
    "Goa": {
        name: "Goa International Airport",
        code: "GOI",
    },
    "Srinagar": {
        name: "Srinagar International Airport",
        code: "SXR",
    },
    "Jaipur": {
        name:"Jaipur International Airport",
        code: "JAI",
    },
    "Calicut": {
        name: "Kozhikode Airport",
        code: "CCJ",
    },
    "Port Blair": {
        name: "Veer Savarkar International Airport",
        code: "IXZ",
    },
    "New Delhi": {
        name: "Indira Gandhi International Airport",
        code:  "DEL",
    },
    Mumbai: {
        name: "Chattrapati Shivaji International Airport",
        code: "BOM",
    },
    Hyderabad: {
        name: "GMR Hyderabad International Airport",
        code: "HYD",
    },
    Bengaluru: {
        name: "Bangalore International Airport Limited",
        code: "BLR",
    },
    Kochi: {
        name: "Cochin International Airport",
        code: "COK",
    },
    Nagpur: {
        name: "Bharat Ratna Babasaheb Dr. B.R. Ambedkar International Airport",
        code: "NAG",
    },
};

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
const flights = [];

class App extends React.Component {
    state = {
            book: false,
            bookedFlight: {},
            editBtn: false,
            finalDetails: {},
            backBtn: {},
            booked: false,
        }
    

    componentDidMount(){
        for(let i = 0; i<5000; i++){
            let obj = {
                flight: "",
                from: "",
                fromAirport: "",
                fromCode: "",
                to: "",
                toCode: "",
                toAirport: "",
                day: "",
                dep: "",
                arrival: "",
                duration: "",
                price: "",
                hr1: 0,
                hr2: 0,
            };
            
            obj.flight = arr[Math.floor(Math.random()*6)];
            obj.from = cities[Math.floor(Math.random()*17)];
            obj.fromAirport = dic[obj.from].name;
            obj.fromCode = dic[obj.from].code;;
            obj.to = cities[Math.floor(Math.random()*17)];
            obj.toAirport = dic[obj.to].name;
            obj.toCode = dic[obj.to].code;
            obj.day = days[Math.floor(Math.random()*7)];
            obj.hr1 = Math.ceil(Math.random()*23);
            const sec1 = Math.floor(Math.random()*9);
            const min1 = Math.floor(Math.random()*6);
            obj.dep = `${obj.hr1} : ${min1}${sec1}`;
            obj.hr2 = Math.ceil(Math.random()*23);
            const sec2 = Math.floor(Math.random()*9);
            const min2 = Math.floor(Math.random()*6);
            obj.arrival = `${obj.hr2} : ${min2}${sec2}`;
            let minDur = 60-((10*min2)+sec2) + 60 - ((10*min1)+sec1);
            
            let hrDur = Math.abs(obj.hr1-obj.hr2);
            if(obj.hr1>12 && obj.hr2<12)
            hrDur = 24-obj.hr1 + obj.hr2;
            if(minDur >= 60){
                hrDur = hrDur+1;
                minDur = minDur - 60;
            }
            obj.duration = `${hrDur}h ${minDur > 0? minDur+'m': ''}`;
            obj.price = `₹ ${Math.floor(Math.random()*24000 + 1000)}`;
            obj.price = obj.price.substring(0, obj.price.length-3) + ","+ obj.price.substring(obj.price.length-3);
            // let str = `{"flight": ${obj.flight}, "from": ${obj.from}, "fromAirport": ${obj.fromAirport}, "to": ${obj.to}, "toAirport": ${obj.toAirport}, "day": ${obj.day}, "dep": ${obj.dep}, "arrival": ${obj.arrival} }`;
        flights.push(obj);
    }
};
setBook(val){
    this.setState({
        book: val
    });
};

    setBookedFlight(flight){
        this.setState({
            bookedFlight: flight
        });
    };

    setFinalDetails(det){
        this.state.finalDetails = det;
    };
    
    setEditBtn(val){
        this.setState({
            editBtn: val
        });
    };

    setBooked(val){
        this.setState({
            booked: val
        });
    };

    render(){
        return (
            <div className='body'>
                <Nav comment={this.state.booked? 'Done!!!' : (this.state.book ? (this.state.editBtn ?"Almost done!!!": "You are almost done!!!") : "Welcome!!!")}/>
                <div>
                <section>
                    <Home />
                    {this.state.booked? <Message /> : this.state.book ? (this.state.editBtn ? <Edit booked={this.setBooked.bind(this)} flight={this.state.bookedFlight} details={this.state.finalDetails} edit={this.setEditBtn.bind(this)} /> : <BookForm flight={this.state.bookedFlight} edit={this.setEditBtn.bind(this)} finalDetails = {this.setFinalDetails.bind(this)}/>) : <Travel flights={flights} cities = {cities} bookedFlight={this.setBookedFlight.bind(this)} book={this.setBook.bind(this)}/>}
                </section>
                </div>
            </div>
           
        );
    };
};

export default App;

