import React from 'react';
import './DetailForm.css';
import DetailFormList from './DetailFormList';

const DetailForm = ({count, details}) => {    
    const renderList = count.map(elem => {
            return(
                <DetailFormList key = {elem} index = {elem} details={details}/>
            );
            });
    
        return(
            <div className='container detailcont'>
                {renderList}
            </div>
        );
};

export default DetailForm;