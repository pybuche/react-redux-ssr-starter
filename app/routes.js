import HomePage from 'app/components/Home';
import UserAccountPage from 'app/components/UserAccount';

import { initHomePage, initUserPage } from 'app/redux/actions/init';


export default {
    '/': {
        exact: true,
        component: HomePage,
        action: initHomePage(),
    },
    '/user': {
        component: UserAccountPage,
        action: initUserPage(),
    },
};
