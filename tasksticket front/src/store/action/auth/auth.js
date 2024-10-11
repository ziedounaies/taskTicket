import {
  GET_USER,
  ADD_USER,
  GET_BYID_USER,
  UPDATE_USER,
  DELETE_USER,
  TOKEN,
  SING_UP,
  SEARCH,
  NOTIFICATION,
  LOGIN,
  LOGOUT,
  AUTHORIZATIONHEADER,
  SET_ERROR,
  CLEAR_ERROR,
  LOADING_USER,
  LOADING_DATA,
  LOGED_USER,
  REGISTERED_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  TIME,
  UPLOAD,
  UPDATE_USER_PROFIL
} from "../actionType";
import axios from "axios";
//import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
// ? localStorage.getItem("token")
//: null;

export const setSearch = (payload) => {
  return {
    type: SEARCH,
    payload: payload,
  };
};
const setUpload = (payload) => {
  return {
    type: UPLOAD,
    payload: payload,
  };
};

const setUser = (payload) => {
  return {
    type: GET_USER,
    payload: payload,
  };
};

const setUserAdd = (payload) => {
  return {
    type: ADD_USER,
    payload: payload,
  };
};

const setUserById = (payload) => {
  return {
    type: GET_BYID_USER,
    payload: payload,
  };
};

const setUserUpdate = (payload) => {
  return {
    type: UPDATE_USER,
    payload: payload,
  };
};
const setUserUpdateProfil = (payload) => {
  return {
    type: UPDATE_USER_PROFIL,
    payload: payload,
  };
};

const setUserDelete = (payload) => {
  return {
    type: DELETE_USER,
    payload: payload,
  };
};

const setUserSingUp = (payload) => {
  return {
    type: SING_UP,
    payload: payload,
  };
};

const setToken = (payload) => {
  return {
    type: TOKEN,
    payload: payload,
  };
};

const setNotification = (payload) => {
  return {
    type: NOTIFICATION,
    payload: payload,
  };
};

const setLogin = (payload) => {
  return {
    type: LOGIN,
    payload: payload,
  };
};

const setAuthorizationHeader = (payload) => {
  return {
    type: AUTHORIZATIONHEADER,
    payload: payload,
  };
};

const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload: payload,
  };
};

const setClearError = (payload) => {
  return {
    type: CLEAR_ERROR,
    payload: payload,
  };
};

const setLogout = (payload) => {
  return {
    type: CLEAR_ERROR,
    payload: payload,
  };
};

const setLogedUser = (payload) => {
  return {
    type: LOGED_USER,
    payload: payload,
  };
};

const setLoading = (payload) => {
  return {
    type: LOADING_USER,
    payload: payload,
  };
};

const setForgotPassword = (payload) => {
  return {
    type: FORGOT_PASSWORD,
    payload: payload,
  };
};
const setResetPassword = (payload) => {
  return {
    type: RESET_PASSWORD,
    payload: payload,
  };
};
const setTime = (payload) => {
  return {
    type: TIME,
    payload: payload,
  };
};



const setRegisteredUser = (payload) => {
  return {
    type: REGISTERED_USER,
    payload: payload,
  };
};

export const upload = (formData) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/projects/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data); // Log the response data for debugging
        dispatch(setUpload(response.data));
      })
      .catch((error) => {
        console.error(error); // Log any errors for debugging
        //dispatch(setError(true));
      });
  };
};

export const timee = (data) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/api/users/time`, data)
      .then((response) => {
        dispatch(setTime(response.data));
      })
      .catch((error) => {});
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwtToken");
    delete axios.defaults.headers.common["Authorization"];
    dispatch({ type: LOGOUT });
  };
};


export const error = (data) => {
  return (dispatch) => {
    axios
      .get()

      .then((response) => {
        dispatch(setError(response.data));
      })
      .catch((error) => {});
  };
};

export const clearError = (data) => {
  return (dispatch) => {
    axios
      .get()

      .then((response) => {
        dispatch(setClearError(response.data));
      })
      .catch((error) => {});
  };
};
/*
export const authorizationHeader = (token) => {
  localStorage.setItem("jwtToken", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
*/
export const login = (data) => {
  return (dispatch) => {
    setLoading(true);
    axios
      .post(`http://localhost:5000/api/users/login`, data)
      .then((response) => {
        if (response.status === 200) {
         // const token = response.data.token;
           //   localStorage.setItem('token', token);
              
          dispatch(setLogedUser(response.data));
          dispatch(setError(""));

  
          //fil api mte3 logout response data twalli null
        }
        setLoading(false);
        //  dispatch(setClearError());
      })

      .catch((error) => {
        if (error.response.status === 400) {
          dispatch(setError("Email or Password wrong!"));
          setLoading(false);
        }
      });
  };
};

export const userSingUp = (data) => {
  return (dispatch) => {
    dispatch(setError(""));
    setLoading(true);
    axios
      .post(`http://localhost:5000/api/users/singUp`, data)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          dispatch(setRegisteredUser(response.data));
          dispatch(setError(""));
        }
        //   dispatch(setClearError());
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setLoading(false);
          dispatch(setError(error.response.data.message));
        }
      });
  };
};

export const notification = (data, subscription, payload, message) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/users/notification`, data, {
        subscription,
        payload,
        message, // Pass the message to the server
      })
      .then((response) => {
        dispatch(setNotification(response.data));
        
      })
      .catch((error) => {
        // Handle error...
      });
  };
};


export const resetPassword = (data,token) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/users/resetPassword`, 
      )
      .then((response) => {
        dispatch(setResetPassword(response.data));
      })
      .catch((error) => {
        if (error.response.status === 400) {
          //setLoading(false);
          dispatch(setError(error.response.data.message))}
       // dispatch(setError(error.response.data.message));

      });
  };
};

export const forgotPassword = (data) => {
  const { OTP, userEmail } = data;
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/users/forgotPassword`, data, {
        OTP,
        recipient_email: userEmail,
      })
      .then((response) => {
        dispatch(setForgotPassword(response.data));
      })
      .catch((error) => {});
  };
};

export const searchh = (data) => {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:5000/api/users/search${data ? `?search=${data}` : ""}`
      )
      .then((response) => {
        dispatch(setSearch(response.data));
      })
      .catch((error) => {});
  };
};

export const getUser = (token,page) => {
  return (dispatch) => {
    //const token = localStorage.getItem('token');
    axios
      .get(`http://localhost:5000/api/users/get?limit=5&page=${page}`, {
        headers: { Authorization: `bearer ${token}` },
      })
         

      .then((response) => {
        dispatch(setUser(response.data));
         localStorage.setItem('token', token)
       
//  const token = localStorage.getItem('token');
        // localStorage.setItem('token', data.jwt);
        //dispatch({ type: 'user/saveUser', payload: data.user})
      })
      .catch((error) => {});
  };
};

export const UserAdd = (data) => {
  return (dispatch) => {
    dispatch(setError(""));
    setLoading(true);
    axios
      .post("http://localhost:5000/api/users/singup", data)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);

          dispatch(setUserAdd(response.data));
          dispatch(setError(""));
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setLoading(false);
          dispatch(setError(error.response.data.message));
        }
      });
  };
};

export const UserById = (id) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/users/getByid`, { id: id })
      .then((response) => {
        dispatch(setUserById(response.data));
      })
      .catch((error) => {});
  };
};

export const UserUpdate = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/users/update`, data)
      .then((response) => {
        dispatch(setUserUpdate(response.data));
      })
      .catch((error) => {});
  };
};

export const UserUpdateProfil = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/users/updateProfile`, data)
      .then((response) => {
        dispatch(setUserUpdateProfil(response.data));
      })
      .catch((error) => {});
  };
};


export const UserDelete = (id) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/users/delete`, { id:id })
      .then((response) => {
        dispatch(setUserDelete(response.data));
      })
      .catch((error) => {});
  };
};

//export const authStart=() => {
//return {
//type:actionTypes.AUTH_START
//} ;

//};

//export const authSuccess=(token,userId) =>{
//return {
//type:actionTypes.AUTH_SUCCESS,
//token:token,
//userId:userId
//   }

// }

//   export const authFail=(error) => {
//   return {
//   type:actionTypes.AUTH_FAIL?
//    error:error
//   };

//   };

// export const auth =(email,password,) =>{

//  return dispatch => {
// dispatch(authStart());
//  const authData={
//   email:email,
//  password:password,
// returnSecureToken:true
// };

//axios.post('')
//.then(response => {
//console.log(response);

//dispatch(authSuccess(response.data.idToken,response.data.))
//dispatch(checkAuthTimeOut(response.data.expiresIn))
//})

//.catch(err => {
//console.log(err);
//dispatch(authFail(err.response.data.error))

//} )

// };

// export const logout =() =>{

//return {
//type:actionTypes.AUTH_LOGOUT
//};
//}

// export const checkAuthTimeOut=(expirationTime ) =>{

// return dispatch => {
// setTimeout(() => {
// dispatch(logout());
//  },expirationTime);

//}
// }

//                     };
