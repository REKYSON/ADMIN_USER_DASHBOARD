import {AuthProvider} from 'react-admin';

export const authProvider: AuthProvider = {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('username', username);
            return Promise.resolve();
        }
        else{
            return Promise.reject();
        }
    },
    // called when the user clicks on the logout button
    logout: () => {
        // called when the user clicks on the logout button
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    },  
    // called when the user changes their permissions / roles
    getPermissions: () => Promise.resolve(),
};