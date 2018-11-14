import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRestaurant } from '../Apis';

class Restaurants extends Component {
    // Get data trước
    componentWillMount() {
        getRestaurant(this.props.restaurantId);
    }

    render() {
        if (!this.props.restaurantDetails) return <div>Loading...</div>;
        return (
            <div>
                {/* <Link to="/restaurants"><button style={{ marginBottom: '2%', float: 'left' }}>Back</button></Link>
                <h1 style={{ textAlign: 'center' }}>Nhà hàng</h1>

                <ul>
                    <li>Tên: <span>{restaurant.info.name}</span></li>
                    <li>Địa chỉ: <span>{restaurant.info.address}</span></li>
                    <li>Số điện thoại: <span>{restaurant.info.phone}</span></li>
                </ul>
                <ListFoods restaurant={restaurant}/> */}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const restaurantId = ownProps.match.params.id;
    console.log(restaurantId);
    return {
        restaurantId,
        restaurantDetails: state.getIn(['restaurantDetails', restaurantId])
    };
}
export default connect(mapStateToProps)(Restaurants);