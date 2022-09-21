import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

class mobileinput extends React.Component {
    state = { phone: "" };
  
    handleOnChange = value => {
      this.state.phone = value;
      this.props.mobile(value);
    };
  
    render() {
      return (
        <div>
          <ReactPhoneInput
            inputExtraProps={{
              name: "phone",
              required: true,
              autoFocus: true
            }}
            defaultCountry={"sg"}
            value={this.state.phone}
            onChange={this.handleOnChange}
          />
        </div>
      );
    }
  }

  export default mobileinput;