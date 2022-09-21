import React from 'react';
import './Drawseats.css';

class Drawseats extends React.Component{
  
    render(){
        if(!this.props.seat)
                    return null;
        return(
            
            <div className='container containerD flex-row justify-content-between'>
               <div className='C1 column'>
               <table className='table table-bodered'>
                    <tbody>
                    <tr> 
                {
                this.props.seat.slice(0,30).map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}></td>
                    ) 
            }
              </tr>
          </tbody>
        </table>
               </div>
               <div className='C2 column'>
               <table className='table table-bodered'>
                    <tbody>
                    <tr> 
                {
                this.props.seat.slice(30,60).map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}></td>) 
            }
              </tr>
          </tbody>
        </table>
               </div>
               <div className='C3 column'>
               <table className='table table-bodered'>
                    <tbody>
                    <tr> 
                {
                this.props.seat.slice(60, 90).map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}></td>) 
            }
              </tr>
          </tbody>
        </table>
               </div>
            </div>
        );
    }
        onClickSeat(seat) {
            this.props.onClickData(seat);
        }
}

export default Drawseats;
