import React from 'react';
import './Edit.css';
import '../navbar/navbar.css';
import Home from '../../Backgrounds/Home';
import TicketDetails from '../../Book/TicketDetails';
import FinalDetails from './FinalDetails';



class Edit extends React.Component{
    render(){
        return(
                <div className='container d-flex justify-content-center'>
                        <div className='container-fluid visible'>
                            <TicketDetails flight={this.props.flight}/>
                            <FinalDetails findet={this.props.details} edit = {this.props.edit} booked={this.props.booked}/>
                            
                        </div>
                        
                </div>
            
       
    );
    }
    
}

export default Edit;
