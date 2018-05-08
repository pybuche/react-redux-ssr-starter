export function initHomePage() {
    return { type: 'INIT_HOME_PAGE' };
}

export function fetchHomePageSuccess(data) {
    return {
        data,
        type: 'FETCH_HOME_PAGE_SUCCESS',
    };
}

export function initUserPage() {
    return { type: 'INIT_USER_PAGE' };
}

export function fetchUserPageSuccess(data) {
    return {
        data,
        type: 'FETCH_USER_PAGE_SUCCESS',
    };
}
