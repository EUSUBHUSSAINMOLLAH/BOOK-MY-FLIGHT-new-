import React from 'react';
import './DetailFormList.css';

class DetailFormList extends React.Component{
    state = {
        obj : {
            title: "",
            firstname: "",
            lastname: "",
        },
        invalidResult: false,
        addClicked: false,
    }
    render(){
        return(
            <div>
                <div className="mb-3 row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">{`Traveller ${this.props.index}`}</label>
                    <div className="col-sm-2">
                    <select onChange={(e) => this.state.obj.title = e.target.value} className="form-select form-select-lg py-3 form-det" id="title">
                    <option value="0">Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                    </select>
                    </div>
                    <div className='col-sm-8 d-flex'>
                    <div className="col-sm-4">
                    <input onChange={(e) => this.state.obj.firstname = e.target.value} type="text" className="form-control form-det py-3" placeholder="First Name" />
                    </div>
                    <div className="col-sm-4">
                    <input onChange={(e) => this.state.obj.lastname = e.target.value} type="text" className="form-control form-det py-3" placeholder="Last Name" />
                    </div>
                    <div className='col-sm-2 book mx-3'>
                        <button onClick={(e) => this.onClickHandle(e)} className='bookBtn addBtn' style={{background: this.state.addClicked ? '#3fff00' : '#fe6b03'}}>Add</button>
                    </div>
                    </div>
                        </div>       
                        {this.state.invalidResult ? <div className="container alert alert-danger" role="alert">Please Enter all details</div>: ''}
            </div>
        );
    };

    onClickHandle(e){
        e.preventDefault();
        if(this.state.obj.title == '' || this.state.obj.firstname == '' || this.state.obj.lastname == ''){
            this.state.invalidResult = false;
        this.setState({invalidResult: !this.state.invalidResult});
        this.setState({addClicked: false});
    }
    else{
        this.setState({addClicked: true});
        this.props.details(this.state.obj, this.props.index);
    }}
};

export default DetailFormList;