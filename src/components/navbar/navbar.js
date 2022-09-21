import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
// import './section.css';

class navbar extends React.Component{

    render(){
        return(
            <nav className='navbar navbar-expand-md'>
                <div className='navbar-brand'>
                    <FontAwesomeIcon icon={faPlaneDeparture} className="nav-icon" /> Book My Flight
                </div>
                <p className='navbarComment'>{this.props.comment}</p>                   
            </nav>
        );
    };
};

export default navbar;