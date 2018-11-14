import { combineReducers } from 'redux-immutablejs';
import restaurants from './Restaurants';
import restaurantDetail from './RestaurantDetail';

export default combineReducers({
    restaurants,
    restaurantDetail
});