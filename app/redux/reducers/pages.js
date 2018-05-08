export default function pages(state = {}, action) {
    switch (action.type) {
    case 'FETCH_HOME_PAGE_SUCCESS':
        return {
            ...state,
            home: {
                data: action.data,
                ready: true,
            },
        };
    case 'FETCH_USER_PAGE_SUCCESS':
        return {
            ...state,
            user: {
                data: action.data,
                ready: true,
            },
        };
    default:
        return state;
    }
}
