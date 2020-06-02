import React from 'react';


export default function DropDown(props){
    return(
    <div className='selectWrapper' >
        <select onChange={(e) => props.handleSelectedTag(e,e.target.value)} id="select">
            {props.noTrend ? null : <option className='options' value='trending'>Trending</option>}
            {props.tags ? Object.values(props.tags).map(tag => <option className='options' key={tag.id} value={tag.id}>{tag.tags}</option>): null}
        </select>
    </div>
    )
}





