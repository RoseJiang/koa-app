import axios from 'axios'
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER } from './types'
export const getCurrentProfile = () => dispatch => {
    //设置加载动画
    dispatch(setProfileLoading());
    axios.get('/api/profile').then(res => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data
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
    console.log('deleteCurrentAccount');
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

export const addExperience = (experienceData, history) => dispatch => {
    axios.post('/api/profile/experence', experienceData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const deleteExpericenceById = id => dispatch => {
    console.log('deleteExpericenceById');
    axios.delete(`/api/profile/experience?exp_id=${id}`)
        .then(res => {
            return dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        )
}

export const deleteEducationById = id => dispatch => {
    axios.delete(`/api/profile/education?edu_id=${id}`)
        .then(res => {
            return dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        )
}

export const addEduation = (eduationData, history) => dispatch => {
    axios.post('/api/profile/education', eduationData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
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