import { GET_ERRORS, SET_CURRENT_USER } from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode'
import store from '../store';
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(res => {
            history.push('/login');
            // 注册成功后更新 state中的 errors
            /* dispatch(
                {
                    type: GET_ERRORS,
                    payload: {}
                }
            ); */
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const loginAction = (userData) => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            //设置axios 的 headers 的 token 
            setAuthToken(token);
            const decoded = jwt_decode(token);
            // console.log(decoded);
            dispatch(
                setCurrentUser(decoded)
            );
            // 拿到当前时间
            const currentTime = Date.now() / 1000; // ms -> s
            //console.log('currentTime: ', currentTime);
            //console.log('exp: ', decoded.exp);
            if (decoded.exp < currentTime) {
                //过期
                store.dispatch(logoutUser);
                // TODO: 清除用户信息
                window.location.href = '/login';
            }
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}