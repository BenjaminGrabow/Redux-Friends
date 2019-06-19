import * as types from '../store/actions';

const initialState = {
        friends: [],
        loading: false,
        error: null
}

const reducer = (state = initialState, action) => {
        // switch(action.type) {
        //         case types.FETCHING:
        //         return {friends: [], loading: true, error: null}

        //         case types.SUCCESS:
        //         return  {friends: action.payload, loading: false, error: null}

        //         case types.ERROR:
        //         return  {friends: [], loading: false, error: action.payload}
        //         default: return state
        // }
}

export default reducer;