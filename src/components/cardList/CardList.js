import React from 'react';
import TruckCard from '../truckCard/TruckCard';
import { Divider } from '@material-ui/core';
import './CardList.css'

const CardList = (props) =>{
    console.log('be props', props.trucks)
    const trucks = props.trucks.map(truck => {
        <TruckCard/>
    })
    return(
        <div className="card-list-container">  
            {
                props.trucks.map((truck, index) => {                    
                   return <TruckCard key={index} name={truck.print_name} text={truck.alerttext}/>
                })
            }           
        </div>
    )
}

export default CardList;