import * as types from '../store/actions';

const initialState = {
        friends: [],
        loading: false,
        error: null,
        loggingIn: false,
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
                case types.LOGIN_START:
                        return { ...state, loggingIn: true }
                case types.LOGIN_SUCCESS:
                        return { ...state, logginIn: false }
                case types.LOGIN_FAIL:
                        return {}
                case types.LOADING:
                        return { friends: [], loading: true, error: null }

                case types.SUCCESS:
                        return { friends: action.payload, loading: false, error: null }

                case types.ERROR:
                        return { friends: [], loading: false, error: 'ERROR NETWORK' }
                default: return state;
        }
};

export default reducer;
// switch(action.type) {
        //         default: return state
        // }