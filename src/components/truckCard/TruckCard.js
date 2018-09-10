import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TruckIcon from '../maps/food-truck.png';

const styles = {
    card: {
      maxWidth: '100%',
      cursor: 'pointer'
    },
    media: {
      height: 140,
    },
  };

const imagePlaceholder = 'https://parade.com/wp-content/uploads/2018/04/cousins-maine-lobster-food-truck-ftr.jpg';

const TruckCard = (props) => {
    const {classes} = props;
    console.log('truck proppin', props)
    return (
        <Card className={classes.card}>
            <CardMedia
            className={classes.media}
            image={imagePlaceholder}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                {props.name}
            </Typography>
            <Typography component="p">
                Eventually some great info about food here
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" color="primary">
                Favorite
            </Button>
            <Button size="small" color="primary">
                View Detail
            </Button>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(TruckCard);
