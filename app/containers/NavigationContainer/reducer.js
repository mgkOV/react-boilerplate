/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC,
  REQUEST_TOPICS_FAILED,
  TOGGLE_DRAWER
} from './constants';

const initialState = fromJS({
  topics: [],
  isDrawerOpen: false
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case REQUEST_TOPICS_FAILED:
      console.log(action.message);
      return state;
    case SELECT_TOPIC:
      return state
        .set('selectedTopic', action.topic)
        .set('isDrawerOpen', false);
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default navigationContainerReducer;
