import {
  GET_PROJECT,
  UPDATE_PROJECTS,
  GET_BYID_PROJECTS,
  DELETE_PROJECTS,
  CREATE_PROJECT,
  GET_PROJECT_PAG,
  GET_PROJECT_NEW,
  GET_PROJECT_Inprogress,
  GET_PROJECT_Completed,
  GET_PROJECT_NEW_PAG,
  GET_PROJECT_INPROGRESS_PAG,
  GET_PROJECT_Completed_PAG,
  NOTIFICATION,
  UPLOAD,
  GET_PROJECT_STATUE,
  SET_ERROR,
  LOADING_USER
} from "../actionType";
import axios from "axios";

//const token = localStorage.getItem("token")



const setUpload = (payload) => {
  return {
    type: UPLOAD,
    payload: payload,
  };
};

const setProjects = (payload) => {
  return {
    type: GET_PROJECT,
    payload: payload,
  };
};

const setGetProjectStatue = (payload) => {
  return {
    type: GET_PROJECT_STATUE,
    payload: payload,
  };
};

const setProjectsNew = (payload) => {
  return {
    type: GET_PROJECT_NEW,
    payload: payload,
  };
};

const setProjectsInprogress = (payload) => {
  return {
    type: GET_PROJECT_Inprogress,
    payload: payload,
  };
};

const setProjectsCompleted = (payload) => {
  return {
    type: GET_PROJECT_Completed,
    payload: payload,
  };
};

const setProjectsNewPag = (payload) => {
  return {
    type: GET_PROJECT_NEW_PAG,
    payload: payload,
  };
};

const setProjectsInprogressPag = (payload) => {
  return {
    type: GET_PROJECT_INPROGRESS_PAG,
    payload: payload,
  };
};

const setProjectsCompletedPag = (payload) => {
  return {
    type: GET_PROJECT_Completed_PAG,
    payload: payload,
  };
};

const setProjectsPag = (payload) => {
  return {
    type: GET_PROJECT_PAG,
    payload: payload,
  };
};

const setProjectsById = (payload) => {
  return {
    type: GET_BYID_PROJECTS,
    payload: payload,
  };
};

const setProjectsDelete = (payload) => {
  return {
    type: DELETE_PROJECTS,
    payload: payload,
  };
};

const setProjectsUpdate = (payload) => {
  return {
    payload: payload,
    value: UPDATE_PROJECTS,
  };
};

const setProjectsCreate = (payload) => {
  return {
    type: CREATE_PROJECT,
    payload: payload,
  };
};

const setNotification = (payload) => {
  // notification
  return {
    type: NOTIFICATION,
    payload: payload, // notification
  };
};

const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload: payload,
  };
};

const setLoading = (payload) => {
  return {
    type: LOADING_USER,
    payload: payload,
  };
};

export const getProjectStatue = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/api/projects/viewall/:`)
      .then((response) => {
        dispatch(setGetProjectStatue(response.data));
      })

      .catch((error) => {});
  };
};

export const upload = (formData) => {
  //const formData = new FormData()

  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/projects/upload`, formData,{
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

export const notification = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/api/projects/notification`)
      .then((response) => {
        dispatch(setNotification(response.data));
      })

      .catch((error) => {});
  };
};

export const getProjectNew = (data,token) => {
  return (dispatch) => {
  
    axios
      .get(
        `http://localhost:5000/api/projects/getProjectNew?limit=2&page=1`,
        data,
        { headers: { Authorization: `bearer ${token}` } }
      )
   
      .then((response) => {
        dispatch(setProjectsNew(response.data));
        localStorage.setItem('token', token)
      
      })

      .catch((error) => {
        //  dispatch(setError(true));
      });
  };
};

export const getProjectInprogress = (data,token) => {
  return (dispatch) => {
  
    axios
      .get(
        "http://localhost:5000/api/projects/getProjectInprogress?limit=2&page=1",
        data,
        { headers: { Authorization: `bearer ${token}` } }
      )

        
      .then((response) => {
        dispatch(setProjectsInprogress(response.data));
        localStorage.setItem('token', token)
         
      })

      .catch((error) => {
        //  dispatch(setError(true));
      });
  };
};

export const getProjectCompleted = (data,token) => {
  return (dispatch) => {
  
    axios
      .get(
        "http://localhost:5000/api/projects/getProjectCompleted?limit=2&page=1",
        data,
        { headers: { Authorization: `bearer ${token}` } }
      )
        
      .then((response) => {
        dispatch(setProjectsCompleted(response.data));
        localStorage.setItem('token', token)
      
      })

      .catch((error) => {
        //  dispatch(setError(true));
      });
  };
};

export const getProjectNewPag = (token) => {
  return (dispatch) => {
 
    axios
      .get(
        `http://localhost:5000/api/projects/getProjectNewPag?limit=2&page=1`,
        {
          headers: { Authorization: `bearer ${token}` },
        }
      )
         
      .then((response) => {
    
        dispatch(setProjectsNewPag(response.data));
        localStorage.setItem('token', token)
      
      })

      .catch((error) => {
     
       // dispatch(setError(true));

      });
  };
};

export const getProjectInprogrgessPag = (token) => {
  return (dispatch) => {

    axios
      .get(
        `http://localhost:5000/api/projects/getProjectInprogressPag?limit=2&page=1`,
        {
          headers: { Authorization: `bearer ${token}` },
        }
      )
          
      .then((response) => {
        //const token = response.data.token;
        dispatch(setProjectsInprogressPag(response.data));
        localStorage.setItem('token', token)
    
      })

      .catch((error) => {
      //  dispatch(setError(true));
      });
  };
};

export const getProjectCompeltedPag = (token) => {
  return (dispatch) => {
   
    axios
      .get(
        `http://localhost:5000/api/projects/getProjectCompletedPag?limit=2&page=1`,
        {
          headers: { Authorization: `bearer ${token}` },
        }
      )
       
      .then((response) => {
        dispatch(setProjectsCompletedPag(response.data));
        localStorage.setItem('token', token)
      
      })

      .catch((error) => {
       // dispatch(setError(true));
      });
  };
};

export const getProPag = (token,page) => {
  return (dispatch) => {

    axios
      .get(`http://localhost:5000/api/projects/getProPag?limit=2&page=${page}`,{
        headers: { Authorization: `bearer ${token}` },
      
  })
      
      .then((response) => {
        dispatch(setProjectsPag(response.data));
        localStorage.setItem('token', token)
       
      })

      .catch((error) => {});
  };
};

export const getPro = (token) => {
  return (dispatch) => {
   
    axios
      .get("http://localhost:5000/api/projects/get?limit=2&page=1",{
        headers: { Authorization: `bearer ${token}` },
      })
      
      .then((response) => {
        dispatch(setProjects(response.data));
        localStorage.setItem('token', token);
       // dispatch(setToken(token));

      })

      .catch((error) => {});
  };
};

export const getByidPro = (id) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/projects/getByid`, {id: id })
      .then((response) => {
        dispatch(setProjectsById(response.data));
      })
      .catch((error) => {});
  };
};

export const updatePro = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/projects/update")
      .then((response) => {
        dispatch(setProjectsUpdate(response.data));
      })
      .catch((error) => {});
  };
};

export const deletePro = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/projects/delete")
      .then((response) => {
        dispatch(setProjectsDelete(response.data));
      })

      .catch((error) => {});
  };
};

export const createPro = (url, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/projects/create")
      .then((response) => {
        dispatch(setProjectsCreate(response.data));
      })

      .catch((error) => {});
  };
};
