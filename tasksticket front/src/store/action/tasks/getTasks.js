import {
  GET_TASKS_ALL,
  GET_TASKS,
  TASKS_TO_DO,
  GET_TASKS_Review,
  GET_TASKS_InProgress,
  GET_TASKS_Confirmed,
SET_ERROR,
  UPDATE_TASKS,
  GET_BYID_TASKS,
  DELETE_TASKS,
  CREATE_TASKS,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  GET_TASKS_PAG,
  GET_BYID_TASKS_DETAILS,
  GET_NOTE,
  GET_TASKS_ALL_HOME,
  GET_PATERNS,
  UPLOAD

} from "../actionType";
import axios from "axios";




const setTasks = (payload) => {
  return {
    type: GET_TASKS,
    payload: payload,
  };
};

const setGetTasksAll = (payload) => {
  return {
    type: GET_TASKS_ALL,
    payload: payload,
  };
};

const setGetTasksAllHome = (payload) => {
  return {
    type: GET_TASKS_ALL_HOME,
    payload: payload,
  };
};



const setTasksToDo = (payload) => {
  return {
    type: TASKS_TO_DO,
    payload: payload,
  };
};


const setTasksInProgress = (payload) => {
  return {
    type: GET_TASKS_InProgress,
    payload: payload,
  };
};
const setTasksReview = (payload) => {
  return {
    type: GET_TASKS_Review,
    payload: payload,
  };
};

const setTasksConfirmed = (payload) => {
  return {
    type: GET_TASKS_Confirmed,
    payload: payload,
  };
};

const setTasksPag = (payload) => {
  return {
    type: GET_TASKS_PAG,
    payload: payload,
  };
};

const setTasksUpdate = (payload) => {
  return {
    payload: payload,
    type: UPDATE_TASKS,
  };
};

const setTasksById = (payload) => {
  return {
    type: GET_BYID_TASKS,
    payload: payload,
  };
};

const setgetByidTasDetails = (payload) => {
  return {
    type: GET_BYID_TASKS_DETAILS,
    payload: payload,
  };
};

const setTasksDelete = (payload) => {
  return {
    type: DELETE_TASKS,
    payload: payload,
  };
};

const setTasksCreate = (payload) => {
  return {
    type: CREATE_TASKS,
    payload: payload,
  };
};

const setNoteAdd = (payload) => {
  return {
    type: ADD_NOTE,
    payload: payload,
  };
};

const setNoteDelete = (payload) => {
  return {
    type: DELETE_NOTE,
    payload: payload,
  };
};

const setNoteUpdate = (payload) => {
  return {
    type: UPDATE_NOTE,
    payload: payload,
  };
};


const setNoteGet = (payload) => {
  return {
    type: GET_NOTE,
    payload: payload,
  };
};


const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload: payload,
  };
};



const setGetPaterns = (payload) => {
  return {
    type: GET_PATERNS,
    payload: payload,
  };
};


const setUpload = (payload) => {
  return {
    type: UPLOAD,
    payload: payload,
  };
};


export const upload = (formData) => {
  //const formData = new FormData()

  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/tasks/upload`, formData,{
    headers: {
      'Content-Type': 'multipart/form-data',
    }})

      .then((response) => {
        dispatch(setUpload(response.data));
      })
      .catch((error) => {
        //dispatch(setError(true));
      });
  };
};


export const getPaterns = (token) => {
  return (dispatch) => {
   
    axios
      .get(`http://localhost:5000/api/tasks/getPaterns?limit=2&page=1`,{
        headers: { Authorization: `bearer ${token}` },
      })
       
      .then((response) => {
       dispatch(setGetPaterns(response.data)) 
      })

      .catch((error) => {});
  };
};

export const getTasksAll = (token,page) => {
  return (dispatch) => {
  
    axios
      .get(`http://localhost:5000/api/tasks/getTasks?limit=9&page=${page}`,{
        headers: { Authorization: `bearer ${token}` },
      })
       
      .then((response) => {
        dispatch(setGetTasksAll(response.data));
         localStorage.setItem('token', token)
        
      })

      .catch((error) => {});
  };
};



export const getTasksAllHome = (token) => {
  return (dispatch) => {
   
    axios
      .get(`http://localhost:5000/api/tasks/getTasks?limit=8&page=1`,{
        headers: { Authorization: `bearer ${token}` },
      })
       
      .then((response) => {
        dispatch(setGetTasksAllHome(response.data));
        localStorage.setItem('token', token)
       // dispatch(setToken(token));
       
      })

      .catch((error) => {});
  };
};

export const getNote = (page,token) => {
  return (dispatch) => {
   
    axios
      .get(`http://localhost:5000/api/tasks/getNote?limit=6&page=${page}`,{
        headers: { Authorization: `bearer ${token}` }
  })
   
      .then((response) => {
        dispatch(setNoteGet(response.data));
    
      
      })

      .catch((error) => {});
  };
};

export const getByidTasDetails = (id) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/tasks/getByIdDetails?limit=3&page=1`, {
        id: id,
      })
      .then((response) => {
        dispatch(setgetByidTasDetails(response.data));
      })

      .catch((error) => {});
  };
};

export const getTasPag = (page) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/api/tasks/get?limit=6&page=${page}`)
      .then((response) => {
        dispatch(setTasksPag(response.data));
      })
      .catch((error) => {

      });
  };
};

export const getTasToDo = (token,page) => {
  return (dispatch) => {
   
    axios
      .get(`http://localhost:5000/api/tasks/getTodo?limit=2&page=${page}`,{
        headers: { Authorization:`bearer ${token}`},
      }
      )
       
      .then((response) => {
       // const token = response.data.token;
        //localStorage.setItem('token', token);
        //dispatch(setTasks(response.data));
        dispatch(setTasksToDo(response.data));
        localStorage.setItem('token', token)
    
      })

      .catch((error) => {
      //dispatch(setError(true));
      });
  };
};

export const getTasInProgress = (token,pageInProgress) => {
  return (dispatch) => {
  
    axios
      .get(`http://localhost:5000/api/tasks/getInprogress?limit=2&page=${pageInProgress}`,{
        headers: { Authorization: `bearer ${token}` },
      })
    
      .then((response) => {
        dispatch(setTasksInProgress(response.data));
         localStorage.setItem('token', token)
        
      })
   
      .catch((error) => {
       // dispatch(setError(true));
      });
  };
};

export const getTasReview = (token,pageReview) => {
  return (dispatch) => {
  
    axios
      .get(`http://localhost:5000/api/tasks/getReview?limit=2&page=${pageReview}`,{
        headers: { Authorization: `bearer ${token}` },
      })
        
      .then((response) => {
        dispatch(setTasksReview(response.data));
        localStorage.setItem('token', token)
       
      })

      .catch((error) => {
       // dispatch(setError(true));
      });
  };
};

export const getTasConfirmed = (token,pageConfirmed) => {
  return (dispatch) => {
 
    axios
      .get(`http://localhost:5000/api/tasks/getConfirmed?limit=2&page=${pageConfirmed}`,{
        headers: { Authorization: `bearer ${token}` },
      })

         
      .then((response) => {
        dispatch(setTasksConfirmed(response.data));
        localStorage.setItem('token', token)
    
      })

      .catch((error) => {
       // dispatch(setError(true));
      });
  };
};

export const updateTas = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/tasks/update")
      .then((response) => {
        dispatch(setTasksUpdate(response.data));
      })
      .catch((error) => {});
  };
};

export const getByidTas = (id, description, user) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/tasks/getByid`, {
        id: id,
        description,
        user,
      })
      .then((response) => {
        dispatch(setTasksById(response.data));
      })
      .catch((error) => {});
  };
};

export const deleteTas = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/tasks/delete")
      .then((response) => {
        dispatch(setTasksDelete(response.data));
      })

      .catch((error) => {});
  };
};

export const createTas = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/tasks/create")
      .then((response) => {
        dispatch(setTasksCreate(response.data));
      })

      .catch((error) => {});
  };
};

export const addNOT = (noteData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/tasks/addNote", noteData)
      .then((response) => {
        dispatch(setNoteAdd(response.data));
        dispatch(getByidTasDetails(noteData.id));
      })

      .catch((error) => {});
  };
};

export const DELETENOT = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/tasks/deleteNote")
      .then((response) => {
        dispatch(setNoteDelete(response.data));
      })

      .catch((error) => {});
  };
};

export const updateNOT = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/tasks/addNote")
      .then((response) => {
        dispatch(setNoteUpdate(response.data));
      })

      .catch((error) => {});
  };
};
