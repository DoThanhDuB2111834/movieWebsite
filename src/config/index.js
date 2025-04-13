import routes from './routes';

const config = {
    routes,
    apiServer: process.env.REACT_APP_API_SERVER,
    auth: {
        expLogin: process.env.REACT_APP_EXP_LOGIN,
        expRememberLogin: process.env.REACT_APP_EXP_REMEMBER_LOGIN,
    },
};

export default config;
