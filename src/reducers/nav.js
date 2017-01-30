import { AppNavigator, INITIAL_ROUTE } from '../router';
import { ACTION_NAVIGATE, ACTION_POP } from '../actions';

const initialState = {
    index: 0,
    routes: [
        { key: 'Initial', routeName: INITIAL_ROUTE }
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {

        case ACTION_NAVIGATE:
        case ACTION_POP:
            return AppNavigator.router.getStateForAction(action, state);

        default: return state;
    }
};
