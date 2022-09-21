import React from 'react';
import Mobileinput from '../components/Booking/Mobileinput';
import DetailForm from './DetailForm';
import './Form.css';

class Form extends React.Component{
    state = {
        details: new Array(this.props.count),
        email: "",
        mobileNumber: "",
        invalidResult: false,
    }

    setDetails(detail, index){
        this.state.details[index-1] = detail;
    }

    setMobile(num){
        this.state.mobileNumber = num;
    }
    render(){
        return(
            <div className='container travDetcont'>
                <p>TRAVELLER DETAILS</p>
                <hr />
                <div>
                    <DetailForm count={this.props.count} details={this.setDetails.bind(this)}/>
                <div className="mt-3 mb-3 row">
                    <label htmlFor="email" className="col-sm-3 col-form-label">Email Address</label>
                    <div className="col-sm-6">
                    <input onChange={(e) => {this.state.email = e.target.value}} type="email" className="form-control form-det py-3" placeholder="Email" />
                    </div>
                    </div>
                    <div className="mb-3 row">
                    <label htmlFor="mobileNumber" className="col-sm-3 col-form-label">Mobile Number</label>
                    <div className="col-sm-5">
                        <Mobileinput mobile={this.setMobile.bind(this)} />
                    </div>
                </div>
            
            </div>
            <hr />
            {this.state.invalidResult ? <div className="container travelDet alert alert-danger" role="alert">Please Enter all details</div>: ''}
            <div className='book'>
                        <button className='bookBtn' onClick={(e) => this.onClickHandle(e)}>Proceed</button>
                    </div>
            </div>
        );
    };
    onClickHandle(e){
        e.preventDefault();
        if(this.state.email == '' || this.state.mobile == ''){
            this.state.invalidResult = false;
        this.setState({invalidResult: !this.state.invalidResult});
    }
    else{
        this.props.clicked(true);
        this.props.setFormDetails(this.state);}
    }
};

export default Form;