import { Description } from "@material-ui/icons";
import {
  GET_TASKS_ALL,
  GET_TASKS,
  UPDATE_TASKS,
  GET_BYID_TASKS,
  DELETE_TASKS,
  CREATE_TASKS,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  UPLOAD,
  GET_BYID_TASKS_DETAILS,
  GET_NOTE,
  TASKS_TO_DO,
  GET_TASKS_Review,
  GET_TASKS_InProgress,
  GET_TASKS_Confirmed,
  GET_TASKS_ALL_HOME,
  GET_PATERNS
} from "../../action/actionType";

const initialState = {
  tasksDetails: null,
  totalItemAll:null,
  tasks:[],
  //tasks: [],
  Note: [],
token:null,
getNoteList: [],
  tasksToDo:[],
  tasksInProgress:[],
  tasksReview:[],
  tasksConfirmed:[],
  totalItemTodo:null,
  currentPageToDo:100,
  totalPagesToDo:null,
  totalItemInprogress:null,
  totalPagesInpr: null,
  currentPageInp: 100,
  totalItemReview:null,
 totalPagesrev:null,
  currentPageRev:100,
  totalItemConfirmed:null,
totalPagesConf:null,
  currentPageConf:100,
  totalPages :null,
  totalItem:null,
  tasksHome:[],
  paternsList:[],
  totalPagesPaterns:null,
  totalItemPaterns:null,
  currentPagePaterns:null,
  uploadFile:new FormData(),
  uploadFileList:[],
};






const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BYID_TASKS_DETAILS:
      return {
        ...state,
        tasksDetails: action.payload,
        Note: action.payload.list,
        totalPages:action.payload.totalPages,
        totalItem:action.payload.totalItem,
        currentPage:action.payload.currentPage,
        

      };


      case GET_TASKS_ALL:
        return {
          ...state,
        
          tasks:action.payload.list,
          totalItemAll: action.payload.totalItemAll,         
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        };
  
        case GET_TASKS_ALL_HOME:
          return {
            ...state,
          
            tasksHome:action.payload.list,
        
          };


    case TASKS_TO_DO:
      return {
        ...state,
      
        tasksToDo:action.payload.list,
        totalItemTodo: action.payload.totalItemTodo,
        taksName: action.payload.taksName,
        taksTags: action.payload.taksTags,
        assignName: action.payload.assignName,
        totalPagesToDo: action.payload.totalPagesToDo,
        currentPageToDo: action.payload.currentPageToDo
      };

    case GET_TASKS_InProgress:
      return {
        ...state,
  
        totalItemInprogress: action.payload.totalItemInprogress,
        taksName: action.payload.taksName,
        taksTags: action.payload.taksTags,
        assignName: action.payload.assignName,
        totalPagesInpr: action.payload.totalPagesInpr,
        currentPageInp: action.payload.currentPageInp,
        tasksInProgress:action.payload.list
      };

    case GET_TASKS_Review:
      return {
        ...state,
     
        totalItemReview: action.payload.totalItemReview,
        taksName: action.payload.taksName,
        taksTags: action.payload.taksTags,
        assignName: action.payload.assignName,
        totalPagesrev: action.payload.totalPagesrev,
        currentPageRev: action.payload.currentPageRev,
        tasksReview:action.payload.list
      };

    case GET_TASKS_Confirmed:
      return {
        ...state,
   
        totalItemConfirmed:action.payload.totalItemConfirmed,
        taksName: action.payload.taksName,
        taksTags: action.payload.taksTags,
        assignName: action.payload.assignName,
        totalPagesConf: action.payload.totalPagesConf,
        currentPageConf: action.payload.currentPageConf,
        tasksConfirmed:action.payload.list
      };

      case UPLOAD:
        return {
          ...state,
          uploadFile:action.payload,
          uploadFileList:action.payload.list
        };
  

    case UPDATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case GET_BYID_TASKS:
      return {
        ...state,
        tasks: action.payload,
        totalPages:action.payload.totalPages,
        totalItem:action.payload.totalItem,
        currentPage:action.payload.currentPage,
      };

    case DELETE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case CREATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
        totalPages:action.payload

      };

    case GET_NOTE:
      return {
        ...state,
        getNoteList: action.payload.list,
        totalPagesNote:action.payload.totalPages,
        totalItemNote:action.payload.totalItem,
        currentPageNote:action.payload.currentPage,
      };

    case ADD_NOTE:
      return {
        ...state,
        note: action.payload.list,
        id: action.payload.id,
      };
    case DELETE_NOTE:
      return {
        ...state,
        note: action.payload,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        note: action.payload,
      };

      

      case GET_PATERNS:
        return {
          ...state,
          paternsList: action.payload.list,
          totalPagesPaterns:action.payload.totalPagesPaterns,
          totalItemPaterns:action.payload.totalItemPaterns,
          currentPagePaterns:action.payload.currentPagePaterns
        };

    default:
      return state;
  }
};
export default reducer;
