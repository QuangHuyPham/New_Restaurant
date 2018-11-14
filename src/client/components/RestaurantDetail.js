import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRestaurant } from '../Apis';

class Restaurants extends Component {
    // Get data trước
    componentWillMount() {
        getRestaurant(this.props.restaurantId);
    }

    render() {
        console.log(this.props.restaurantId);
        console.log(this.props);
        if (!this.props.restaurantDetails) return <div>Loading...</div>;
        return (
            <div>
                <h1>Kikai</h1>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const restaurantId = ownProps.match.params.id;
    return {
        restaurantId,
        restaurantDetails: state.getIn(['restaurantDetails', restaurantId])
    };
}
export default connect(mapStateToProps)(Restaurants);