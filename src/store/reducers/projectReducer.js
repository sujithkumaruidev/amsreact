import axios from 'axios';
import URL from "../../common/configUrl";
const PROJECT_LIST_SUCCESS = "PROJECT_LIST_SUCCESS";
const PROJECT_LIST_FAIL = "PROJECT_LIST_FAIL";
const PROJECT_ADD_SUCCESS = "PROJECT_ADD_SUCCESS";
const PROJECT_ADD_FAIL = "PROJECT_ADD_FAIL";
const PROJECT_UPDATE_SUCCESS = "PROJECT_UPDATE_SUCCESS";
const PROJECT_UPDATE_FAIL = "PROJECT_UPDATE_FAIL";
const CLEAR_MESSAGES = "CLEAR_MESSAGES";

const initialState = {
    projectList:null,
    addSuccess:"",
    addError:"",
    updateError:"",
    updateSuccess:""
}
export const messagesClearInStore=()=>{
    return {
        type:CLEAR_MESSAGES
    }
}



export const getProjectList = () => (dispatch) => {
    const config = {
        method: 'get',
        url: URL.PROJECT_LIST,
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: PROJECT_LIST_SUCCESS,
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: PROJECT_LIST_FAIL,
                    error: error
                })
            })
}

export const addNewProject = (payload) => (dispatch) => {
    const config = {
        method: 'post',
        url: URL.PROJECT_ADD,
        data:payload,
        headers: {
            'Content-Type': 'application/json'
        },
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: PROJECT_ADD_SUCCESS,
                    payload: response.data
                })
                dispatch(getProjectList())
            })
            .catch((error) => {
                dispatch({
                    type: PROJECT_ADD_FAIL,
                    error: error
                })
            })
}

export const updateProject = (payload) => (dispatch) => {
    const config = {
        method: 'post',
        url: URL.PROJECT_UPDATE,
        data:payload,
        headers: {
            'Content-Type': 'application/json'
        },
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: PROJECT_UPDATE_SUCCESS,
                    payload: response.data
                })
                dispatch(getProjectList())
            })
            .catch((error) => {
                dispatch({
                    type: PROJECT_UPDATE_FAIL,
                    error: error
                })
            })
}

export default (state = initialState, action) => {
    switch (action.type) {

        case PROJECT_LIST_SUCCESS: {
            return {
                ...state,
                projectList: action.payload && action.payload.data ,

            }
        }
            case PROJECT_LIST_FAIL: {
                return {
                    ...state,
                    projectList: null ,
                    listError : action.error
                }
            }
            case PROJECT_ADD_SUCCESS:{
                return {
                    ...state,
                    addSuccess:action.payload,
                }
            }
            case PROJECT_ADD_FAIL:{
                return {
                    ...state,
                    addError:action.error,
                }
            }
            case PROJECT_UPDATE_SUCCESS:{
                return {
                    ...state,
                    updateSuccess:action.payload,
                }
            }
            case PROJECT_UPDATE_FAIL:{
                return {
                    ...state,
                    updateError:action.error,
                }
            }
        
        case  CLEAR_MESSAGES : {
            return {
                ...state,
                addSuccess:"",
                addError:"",
                updateError:"",
                updateSuccess:""
            }
        }
    default:
            return {
                ...state,
            }
        }
}