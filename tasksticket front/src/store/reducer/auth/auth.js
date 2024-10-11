
import {
  GET_USER,
  ADD_USER,
  GET_BYID_USER,
  UPDATE_USER,
  DELETE_USER,
  SING_UP,
  TOKEN,
  SEARCH,
  NOTIFICATION,
  LOGIN,
  AUTHORIZATIONHEADER,
  SET_ERROR,
  CLEAR_ERROR,
  LOGOUT,
  LOADING_USER,
  STOP_LOADING_UI,
  LOGED_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  TIME,  UPLOAD,
  UPDATE_USER_PROFIL
  
} from "../../action/actionType";


const initialState = {
  user: [],
  detailsUser: null,
  userSearch: [],

  //userId:null,
  errorsLogin: "",
  errorsRegister: "",
  
  id:null,
  loading: false,
  logedUser: null,
  listProjet: [],
  listTasks: [],
  totalItem: null,
  totalPages:null,
  currentPage:100,
  totalItemProject: null,
  token: null,
  refreshToken: null,
  registeredUser: null,
  time:null,
  uploadFile:[],
  forgotPassword:'',
  password:'',
  updateUserProfil:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

case TIME:
  return {

...state,
time:action.payload.time

  }

  case UPLOAD:
    return {
      ...state,
      uploadFile:action.payload
      
    };

    case SING_UP:
      return {
        ...state,
        registeredUser: action.payload,
        //errorsRegister:action.payload
      };

    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword:action.payload

      };
      case RESET_PASSWORD:
        return {
          ...state,
   
          password:action.payload.password

        }

    case ADD_USER:
      return {
        ...state,
        user: action.payload.list,
        errorsRegister: action.payload,
        registeredUser: action.payload,
      };

    case GET_USER:
      return {
        ...state,
      
        user: action.payload.list,
        //logedUser: action.payload,
        totalPages: action.payload.totalPages,
        totalItem: action.payload.totalItem,
        currentPage: action.payload.currentPage,
      };

    case GET_BYID_USER:
      return {
        ...state,

        detailsUser: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        //   user: action.payload,
      };
      case  UPDATE_USER_PROFIL:
        return {
          ...state,
          updateUserProfil:action.payload.updateUserProfil
          //   user: action.payload,
        };

     

    case DELETE_USER:
      return {
        ...state,
        id:action.payload.id
       
      };

    case TOKEN:
      return {
        ...state,
        auth: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        userSearch:action.payload.list,
        //user: action.payload.list,
        listProjet:action.payload.listProjet,
        listTasks:action.payload.listTasks,
        // totalItemProject:action.payload.totalItemProject,
      };

      case NOTIFICATION:
        return {
          ...state,
          message: action.payload.message, // Update the state with the message
          token: action.payload.token,
          data:action.payload.data,
          subscription:action.payload.subscription,
          payload:action.payload.payload
        };

    case LOADING_USER:
      return {
        ...state,
        loading: action.payload,
      };

    case LOGIN:
      return {
        ...state,
        token: action.payload,

        email: action.payload.detailsUser,

        password: action.payload.detailsUser,
        errorsLogin: action.payload,
      };

    case LOGED_USER:
      return {
        ...state,
        logedUser: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        token: action.payload.token,

        email: action.payload.detailsUser,

        password: action.payload.detailsUser,
      };

    case AUTHORIZATIONHEADER:
      return {
        ...state,
        // token: action.payload.token,
      };

    case SET_ERROR:
      return {
        ...state,
        loading: false,
        errorsLogin: action.payload,
        errorsRegister: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        // errorsLogin: null,
      };

    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
