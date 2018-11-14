import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRestaurants } from '../Apis';

// @connect(
//     state => ({
//         restaurants: state.get('restaurants')
//     })
// )
class Restaurants extends Component {
    // Get data trước
    componentWillMount() {
        getRestaurants();
    }

    render() {
        console.log(this.props.restaurants);
        return (
            <div>
                <h1>Restaurants</h1>
                {this.props.restaurants.size > 0 ?
                    <table>
                        <tbody>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>CodeRestaurant</td>
                            <td>Address</td>
                            <td>Phone</td>
                        </tr>
                        {this.props.restaurants.map((value) => (
                            <tr key={value.id} onClick={() => this.props.history.push(`/restaurants/${value.id}`)} style={{ cursor: 'pointer' }}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.codeRestaurant}</td>
                                <td>{value.address}</td>
                                <td>{value.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    : <div>No Restaurants</div>}
                <button style={{ marginTop: '20px' }}><Link to="/">Back</Link></button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.get('restaurants')
});
export default connect(mapStateToProps)(Restaurants);