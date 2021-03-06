import axios from 'axios';
import URL from "../../common/configUrl";
const VIDEO_UPLOAD_SUCCESS = "VIDEO_UPLOAD_SUCCESS";
const VIDEO_UPLOAD_FAIL = "VIDEO_UPLOAD_FAIL";
const VIDEO_LIST_SUCCESS = "VIDEO_LIST_SUCCESS";
const VIDEO_LIST_FAIL = "VIDEO_LIST_FAIL";
const VIDEO_CRACK_SUCCESS = "VIDEO_CRACK_SUCCESS";
const VIDEO_CRACK_FAIL = "VIDEO_CRACK_FAIL";
const VIDEO_CRACKED_LIST_SUCCESS = "VIDEO_CRACKED_LIST_SUCCESS";
const VIDEO_CRACKED_LIST_FAIL = "VIDEO_CRACKED_LIST_FAIL";
const IMAGE_CATEORIES_LIST_SUCCESS ="IMAGE_CATEORIES_LIST_SUCCESS";
const IMAGE_CATEORIES_LIST_FAIL ="IMAGE_CATEORIES_LIST_FAIL";
const IMAGE_CATEORIES_ADD_SUCCESS ="IMAGE_CATEORIES_ADD_SUCCESS";
const IMAGE_CATEORIES_ADD_FAIL ="IMAGE_CATEORIES_ADD_FAIL";
const IMAGE_CATEORIES_RENAME_SUCCESS ="IMAGE_CATEORIES_RENAME_SUCCESS";
const IMAGE_CATEORIES_RENAME_FAIL ="IMAGE_CATEORIES_RENAME_FAIL";


const CLEAR_UPLOAD_MESSAGES = "CLEAR_UPLOAD_MESSAGES";

const initialState = {
    videoList:null,
    videoUploadSuccess:"",
    videoUploadError:"",
    videoError:"",
    videoCrackError:"",
    videoCrackSuccess:"",
    listOfCrackedImage:null,
    crackedImageError:"",
    listOfCategories:null,
    errorListCategories:"",
    addCategoriesSuccess:"",
    addCategoriesFail:"",
    renameCategoriesSuccess:"",
    renameCategoriesFail:"",
   
}
export const uploadVideoMessageClear=()=>{
    return {
        type:CLEAR_UPLOAD_MESSAGES
    }
}


export const getUploadedVideoList = (id) => (dispatch) => {
    const config = {
        method: 'get',
        url: URL.UPLOAD_LIST+'/'+id,
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: VIDEO_LIST_SUCCESS,
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: VIDEO_LIST_FAIL,
                    error: error
                })
            })
}
export const getUploadedVideoCrackImages = (id) => (dispatch) => {
    const config = {
        method: 'get',
        url: URL.CRACK_IMAGE_LIST+'/'+id,
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: VIDEO_CRACKED_LIST_SUCCESS,
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type:  VIDEO_CRACKED_LIST_FAIL,
                    error: error
                })
            })
}
export const uploadProjectBasedVideo = (payload) => (dispatch,getState) => {
    const project = getState().auth.selectedProject;
    const config = {
        method: 'post',
        url: URL.UPLOAD_VIDEO,
        data:payload,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: VIDEO_UPLOAD_SUCCESS,
                    payload: response.data
                })
                 dispatch(getUploadedVideoList(project && project.id));
            })
            .catch((error) => {
                dispatch({
                    type: VIDEO_UPLOAD_FAIL,
                    error: error
                })
            })
}


export const uploadVideoCrackDetect = (payload) => (dispatch,getState) => {
    const project = getState().auth.selectedProject;
    const config = {
        method: 'post',
        url: URL.UPLOAD_VIDEO_CRACK,
        data:payload,
        headers: {
            'Content-Type': 'application/json'
        },
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: VIDEO_CRACK_SUCCESS,
                    payload: response.data
                })
                 dispatch(getUploadedVideoList(project && project.id));
            })
            .catch((error) => {
                dispatch({
                    type: VIDEO_CRACK_FAIL,
                    error: error
                })
            })
}

export const listOfImageTypeGet = () => (dispatch,getState) => {
    // const project = getState().auth.selectedProject;
    const config = {
        method: 'get',
        url: URL.IMAGE_LIST_CATEGORIES,
        headers: {
            'Content-Type': 'application/json'
        },
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: IMAGE_CATEORIES_LIST_SUCCESS,
                    payload: response.data
                })
                //  dispatch(getUploadedVideoList(project && project.id));
            })
            .catch((error) => {
                dispatch({
                    type: IMAGE_CATEORIES_LIST_FAIL,
                    error: error
                })
            })
}


export const addImageCategoiesType = (payload) => (dispatch,getState) => {
    // const project = getState().auth.selectedProject;
    const config = {
        method: 'post',
        url: URL.IMAGE_CATEGORIES_ADD,
        data:payload,
        headers: {
            'Content-Type': 'application/json'
        },
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: IMAGE_CATEORIES_ADD_SUCCESS,
                    payload: response.data
                })
                 dispatch(listOfImageTypeGet());
            })
            .catch((error) => {
                dispatch({
                    type: IMAGE_CATEORIES_ADD_FAIL,
                    error: error
                })
            })
}

export const updateImageCategoiesType = (payload) => (dispatch,getState) => {
    const config = {
        method: 'post',
        url: URL.IMAGE_CATEGORIES_RENAME,
        data:payload,
        headers: {
            'Content-Type': 'application/json'
        },
    }
        axios(config)
            .then(response => {
                dispatch({
                    type: IMAGE_CATEORIES_RENAME_SUCCESS,
                    payload: response.data
                })
                dispatch(listOfImageTypeGet()); 
            })
            .catch((error) => {
                dispatch({
                    type: IMAGE_CATEORIES_RENAME_FAIL,
                    error: error
                })
            })
}

export default (state = initialState, action) => {
    // console.log("action.ay",action.payload)
    switch (action.type) {
        case IMAGE_CATEORIES_LIST_SUCCESS: {
            return {
                ...state,
                listOfCategories: action.payload && action.payload.data ,

            }
        }
            case IMAGE_CATEORIES_LIST_FAIL: {
                return {
                    ...state,
                    listOfCategories: null ,
                    errorListCategories: action.error,
    
                }
            }
     
    case IMAGE_CATEORIES_ADD_SUCCESS: {
        return {
            ...state,
            addCategoriesSuccess: action.payload && action.payload.data ,

        }
    }
        case IMAGE_CATEORIES_ADD_FAIL: {
            return {
                ...state,
                addCategoriesSuccess: null ,
                addCategoriesFail: action.error,

            }
        }
        case IMAGE_CATEORIES_RENAME_SUCCESS: {
            return {
                ...state,
                renameCategoriesSuccess: action.payload && action.payload.data ,
    
            }
        }
            case IMAGE_CATEORIES_RENAME_FAIL: {
                return {
                    ...state,
                    renameCategoriesSuccess: null ,
                    renameCategoriesFail: action.error,
    
                }
            }
        case VIDEO_LIST_SUCCESS: {
            return {
                ...state,
                videoList: action.payload && action.payload.data ,

            }
        }
            case VIDEO_LIST_FAIL: {
                return {
                    ...state,
                    videoList: null ,
                    videoError : action.error
                }
            }
            case VIDEO_UPLOAD_SUCCESS:{
                return {
                    ...state,
                    videoUploadSuccess:action.payload.message,
                }
            }
            case VIDEO_UPLOAD_FAIL:{
                return {
                    ...state,
                    videoUploadError:action.error.message,
                }
            }
           case VIDEO_CRACK_SUCCESS : {
               return {
                   ...state,
                   videoCrackSuccess:action.payload
               }
           }
           case VIDEO_CRACK_FAIL : {
            return {
                ...state,
                videoCrackError:action.error
            }
        }
        case VIDEO_CRACKED_LIST_SUCCESS : {
            return {
                ...state,
                listOfCrackedImage:action.payload.data
            }
        }
        case VIDEO_CRACKED_LIST_FAIL : {
         return {
             ...state,
             crackedImageError:action.error.message
         }
     }
     
        case  CLEAR_UPLOAD_MESSAGES : {
            return {
                ...state,
                videoUploadSuccess:"",
                videoUploadError:"",
                videoError:"",
                videoCrackSuccess:"",
                videoCrackError:"",
                crackedImageError:""
            }
        }
    default:
            return {
                ...state,
                
            }
        }
}