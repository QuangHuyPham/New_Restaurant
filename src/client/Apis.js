import request from 'superagent';
import { actionCreators as RestaurantActions } from './reducers/Restaurants';
import { actionCreators as RestaurantDetailsActions } from './reducers/RestaurantDetail';
import store from './store';

// Get danh sách nhà hàng.
export function getRestaurants() {
  request.get('/list/restaurants')
    .then(res => store.dispatch(RestaurantActions.set(res.body)))
    .catch(err => console.log(err));
}
// Get chi tiết nhà hàng
export function getRestaurant(id) {
  request.get('/list/restaurants/' + id)
    .then(res => {
      const details = res.body[0];
      console.log(details);
      store.dispatch(RestaurantDetailsActions.set(id, details));
    })
    .catch(err => console.log(err));
}