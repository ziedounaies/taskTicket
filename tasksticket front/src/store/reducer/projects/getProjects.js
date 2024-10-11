import {
  GET_PROJECT,
  CREATE_PROJECT,
  DELETE_PROJECTS,
  GET_BYID_PROJECTS,
  UPDATE_PROJECTS,
  GET_PROJECT_PAG,

  GET_PROJECT_NEW_PAG,
  GET_PROJECT_INPROGRESS_PAG,
  GET_PROJECT_Completed_PAG,
  NOTIFICATION,
  UPLOAD,
  GET_PROJECT_STATUE,
  LOADING_USER,

} from "../../action/actionType";

const initialState = {
  project: [],
  totalPages: null,
  totalItem: null,
  currentPage: 100,
  projectNew:[],
  projectInprogress:[],
  projectCompleted:[],
  totalItemNewProjectPag: null,
  totalItemInprogressProjectPag: null,
  totalItemCompletedProjectPag: null,
  token:null,

  projectsById: null,
  message: "",
  type: "",

  totalItemProject: null,
  statue: "",
  uploadFile:new FormData(),
    uploadFileList:[],
  totalPages:null,
  totalItemProject:null,
  //currentPage:null
  currentPageProPag:100,
  projectPag:[],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        totalPages:action.payload.totalPages,
        project:action.payload.list,
        totalItemProject: action.payload.totalItemProject,
        currentPage:action.payload.currentPage

      };

    case GET_PROJECT_STATUE:
      return {
        ...state,
        statue: action.payload.statue,
      };


      case LOADING_USER:
        return {
         ...state,

        }

    case GET_PROJECT_NEW_PAG:
      return {
        ...state,
        token: action.payload.token,
        projectNew: action.payload.list,
        totalItemNewProjectPag: action.payload.totalItemNewProjectPag,
        currentPage: action.payload.currentPage,
      };

    case GET_PROJECT_INPROGRESS_PAG:
      return {
        ...state,
        token: action.payload.token,
        projectInprogress:action.payload.list,
        totalItemInprogressProjectPag: action.payload.totalItemInprogressProjectPag,
        currentPage: action.payload.currentPage,
      };

    case GET_PROJECT_Completed_PAG:
      return {
        ...state,
        token: action.payload.token,
        projectCompleted: action.payload.list,
        totalItemCompletedProjectPag: action.payload.totalItemCompletedProjectPag,
        currentPageProPag: action.payload.currentPageProPag,
      };

    case CREATE_PROJECT:
      return {
        ...state,
        project: action.payload,
      };

    case GET_PROJECT_PAG:
      return {
        ...state,
 
        totalPages:action.payload.totalPages,
        projectPag:action.payload.list,
        totalItemProject: action.payload.totalItemProject,
        currentPage:action.payload.currentPage
      };

    case DELETE_PROJECTS:
      return {
        ...state,
        project: action.payload,
      };

    case GET_BYID_PROJECTS:
      return {
        ...state,
        projectsById: action.payload,
      };

    case UPDATE_PROJECTS:
      return {
        ...state,
        project: action.payload,
      };

    case NOTIFICATION:
      return {
        message: action.payload.message,
        type: action.payload.type,
      };

    case UPLOAD:
      return {
        ...state,
        uploadFile:action.payload,
        uploadFileList:action.payload.list
      };

    default:
      return state;
  }
};
export default reducer;
