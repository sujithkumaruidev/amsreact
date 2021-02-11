const API = "http://44.233.138.4:9000/AMS/API";

 const configUrl = {
    PROJECT_LIST : `${API}/project/name/list`,
    PROJECT_ADD : `${API}/project/name/add`,
    PROJECT_UPDATE:`${API}/project/name/update`,
    UPLOAD_LIST : `${API}/list/video`,
    UPLOAD_VIDEO : `${API}/upload/video`,
    UPLOAD_VIDEO_CRACK : `${API}/project/video/detect`,
    CRACK_IMAGE_LIST : `${API}/project/list/detected/images`,
    DASHBOARD_CRACK_IMAGE_LIST : `${API}/project/dashboard/details`,
    IMAGE_CATEGORIES_ADD:`${API}/create/train/category`,
    IMAGE_LIST_CATEGORIES:`${API}/list/category/names`,
    IMAGE_CATEGORIES_RENAME:`${API}/rename/train/category`,

}
export default configUrl;