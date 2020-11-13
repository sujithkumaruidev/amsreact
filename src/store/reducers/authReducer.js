const PROJECT_NAME_STORE = "PROJECT_NAME_STORE";

const initialState = {
     selectedProject:JSON.parse(sessionStorage.getItem("projectId")),
}

export const projectNameStore=(value)=>{
    return {
        type:PROJECT_NAME_STORE,
        payload:value
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        
            case PROJECT_NAME_STORE : {
                return {
                    ...state,
                    selectedProject:action.payload
                }
            }
        
    default:
            return {
                ...state,
            }
        }
}
