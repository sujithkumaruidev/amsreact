const API = "http://44.233.138.4:9000/AMS/API";

 const configUrl = {
    PROJECT_LIST : `${API}/project/name/list`,
    PROJECT_ADD : `${API}/project/name/add`,
    PROJECT_UPDATE:`${API}/project/name/update`,
    UPLOAD_LIST : `${API}/list/video`,
    UPLOAD_VIDEO : `${API}/upload/video`,
    UPLOAD_VIDEO_CRACK : `${API}/project/video/detect`,
    CRACK_IMAGE_LIST : `${API}/project/list/detected/images`
}
export default configUrl;