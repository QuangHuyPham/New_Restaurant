import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../Apis';
import Immutable from 'immutable';
// mapStateToProps
// @connect(
//     (state, ownProps) => {
//         const restaurantId = ownProps.match.params.id;
//             return {
//                 restaurantId,
//                 restaurantDetail: state.getIn(['restaurantDetail', restaurantId])
//             };
//     }
// )
class RestaurantDetail extends Component {
    // Get data trước
    componentWillMount() {
        getRestaurant(this.props.restaurantId);
    }
    render() {
        const { restaurantDetail } = this.props;
        if (!restaurantDetail) return <div>Loading...</div>;
        // chuyển state sang JSON
        return (
            <div>
                <div>
                    <h1>RESTAURANT</h1>
                    <h5>Restaurant name: {restaurantDetail.getIn(['info', 'name'])}</h5>
                    <h5>Restaurant address: {restaurantDetail.getIn(['info', 'address'])}</h5>
                    <h5>Restaurant name: {restaurantDetail.getIn(['info', 'phone'])}</h5>
                </div>
                <div>
                    <h1>FOODS</h1>
                    { restaurantDetail.get('foods').map(r => (
                        <div key={r.get('idFood')}>
                            <h2>{r.get('idFood') + ' - ' + r.get('nameFood')}</h2>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
// mapStateToProps (Gọi state)
function mapStateToProps(state, ownProps) {
    const restaurantId = ownProps.match.params.id;
    return {
        restaurantId,
        restaurantDetail: state.getIn(['restaurantDetail', restaurantId])
    };
}
export default connect(mapStateToProps)(RestaurantDetail);