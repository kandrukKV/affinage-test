import {ActionTypes} from './actions';
import {SLIDES} from '../mocks/mocks';

const initialState = {
  slides: SLIDES
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SLIDES:
      return state.slides;
    default:
      return state;
  }
}
