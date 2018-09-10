import React from 'react';
import FoodMap from './FoodMap';

const FoodMapContainer = (props) => {
  
    return(
        <FoodMap 
        trucks = {props.trucks}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOG_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
		containerElement={<div style={{ height: `600px`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
        
    )
}

export default FoodMapContainer;