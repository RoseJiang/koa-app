import axios from 'axios'
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER } from './types'
export const getCurrentProfile = () => dispatch => {
    //设置加载动画
    dispatch(setProfileLoading());
    axios.get('/api/profile').then(res => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data[0]
        });
    })
        .catch(err => dispatch({
            type: GET_PROFILE,
            payload: {}
        }))
}

export const addProfile = (profileData, history) => dispatch => {
    axios.post('/api/profile', profileData).then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

// Delete current profile & user
export const deleteCurrentAccount = (params) => dispatch => {
    axios.delete('/api/profile').then(
        res => dispatch({
            type: SET_CURRENT_USER,
            payload: {}
        })
    ).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
}


export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
}

export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
}