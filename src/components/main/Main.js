import React from 'react';
import FoodMapContainer from '../maps/FoodMapContainer';
import CardList from '../cardList/CardList';
import truckAPI from '../maps/trucksAPI';


class Main extends React.Component {

    state = {
        url : `https://dc-food-trucks-api.herokuapp.com/data`,
        trucks: []
    }

    getMarkers = () => {
        fetch(this.state.url)
        .then(response => response.json())
        .then(data => this.saveTrucks(data.trucks))
        .catch(error => console.log(error))
    }

    getPlaceholderMarkers = () => {
        console.log('called')
        const truckz = truckAPI.markers.map(truck =>{
            truck.coord_lat =  parseFloat(truck.coord_lat);
            truck.coord_long = parseFloat(truck.coord_long);
            return truck;
        })
        console.log('truckin?', truckz)
        this.saveTrucks(truckz)
    }

    saveTrucks = data => {
        const trucks = [...data]
        console.log('setting state', trucks)
        this.setState({
            trucks
        })
        console.log('state:', this.state)
    }

    componentDidMount(){
        console.log('here?')
        this.getPlaceholderMarkers();
    }   


    render(){
        return(
            <div>
                <div>
                    <FoodMapContainer trucks={this.state.trucks}/>
                </div>
                <div>
                    <CardList trucks={this.state.trucks}/>
                </div>
            </div>
        )
    }
}

export default Main;
