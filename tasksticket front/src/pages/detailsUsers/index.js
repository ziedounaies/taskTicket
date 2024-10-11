import {useEffect} from "react";
import { useState } from "react";
import Avatar51 from "../../assets/Avatar51.png";
import Vector12 from "../../assets/Vector12.png";
import Vector111 from "../../assets/Vector111.png";
import briefcasegreen from "../../assets/briefcasegreen.svg";
import clipboardgreen from "../../assets/clipboardgreen.svg";
import zied from "../../assets/zied.png";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ProfileSettings from "../profileSettings";

import Password from '../password';

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { UserUpdate } from "../../store/action/auth/auth";
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';

import {UserById} from "../../store/action/auth/auth";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import {
  
  BrowserRouter as Router,
 
  useHistory,useLocation

 
} from "react-router-dom";

import { useParams } from "react-router-dom";
import { borderColor } from "@mui/system";





export default function Index() {

  const [textInput, setTextInput] = useState('');


  const [userUpdated,setUserUpdated]= React.useState(false);
  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }





 

 
 
  const [checked, setChecked] = React.useState([0]);

  const query =useQuery();



  const dispatch = useDispatch()



  useEffect(() => {

    dispatch(UserById(query.get("id")))
    
  
    

  }, []);


useEffect(() => {
  dispatch(UserUpdate())

}, [])



const handlerUpdateUser =()=> {
  dispatch(UserUpdate(userData))
  setUserUpdated(true);
}
const { totalItemNewProjectPag } = useSelector(
  (state) => state.getProjectNewReducer
);
const { totalItemInprogress } = useSelector(
  (state) => state.tasksInProgressReducer
);

  const {detailsUser} = useSelector((state) => state.getByIdUserReducer
  );



  const [openpassword, setOpenpassword] =
  React.useState(false);
 
  const [openDelete, setOpenDelete] =
  React.useState(false);

  const [openprofileSettings, setOpenprofileSettings] =
  React.useState(false);




  const handleOpenDelete =()=> {
    setOpenDelete(true)
    setOpenprofileSettings(false)
 }


 const closeDelete =()=> {
  setOpenDelete(false)
  setOpenprofileSettings(true)
}

 
const handleOpenpassword =() => {
   setOpenpassword(true)
   setOpenprofileSettings(false)

}

const closepassword =() => {
   setOpenpassword(false)
   setOpenprofileSettings(true)

}




useEffect(() => {
  setuserData({
    fisrtName:detailsUser?.fisrtName  ,
    lastName:detailsUser?.lastName,
    id:detailsUser?._id,
    email:detailsUser?.email,
    profession:detailsUser?.profession,
    birthDate:detailsUser?.birthDate,
    nationality:detailsUser?.nationality,
    address:detailsUser?.address,
   phoneNumber:detailsUser?.phoneNumber,
   password:detailsUser?.password,
  })


}, [detailsUser])





const onChange=(input,value)=> {
  setuserData({...userData,[input]:value})
}

const [userData, setuserData] = useState({
  fisrtName:"",

  id:"",
  email:"",
  profession:"",
  birthDate:"",
  nationality:"",
  address:"",
 phoneNumber:"",
 password:"",
})


  return (
    <div
      className="App"
      style={{
        flex: 1,
      }}
    >

<ProfileSettings open={openprofileSettings} handleClose={()=>setOpenprofileSettings(false)} setOpenDelete={()=>handleOpenDelete()}  setOpenpassword={()=>handleOpenpassword()}  />


<Password open={openpassword} handleClose={() =>closepassword()     }/>


      <p
        style={{
          borderStyle: "solid",
          borderWidth: 1.8,
          borderColor: "#d3d3d3",
          borderRadius: 20,
          width: "92%",
          height: "85%",
          backgroundColor: "white",
          marginLeft: 60,
          marginTop: 44,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <p
            style={{
              marginTop: 40,
              marginLeft: -70,
              borderStyle: "solid",
              borderWidth: 1.8,
              borderColor: "#d3d3d3",
              borderRadius: 20,
              width: "9%",
              height: "15%",
            }}
          >
            <img
              style={{ marginTop: 5 }}
              src={Avatar51}
              height={110}
              width={100}
            />
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              marginLeft: -90,
              maxWidth:"15%"
            }}
          >
            <a
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: 25,
                color: "#00a5ab",
                marginLeft: -35,
           
              }}
            >
              {detailsUser?.fisrtName}
            </a>
          



            <a
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: 25,
                color: "#00a5ab",
             
              }}
            >
               {detailsUser?.birthDate}
            </a>
            
            <a
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: 25,
                color: "#00a5ab",
             marginLeft:-65
              }}
            >
               {detailsUser?.profession}
            </a>

          

          
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
            
              <div>
                <a
                  style={{
                    fontFamily: "Rubik-Medium",
                    fontSize: 20,
                    color: "#00a5ab",
                    marginLeft: 5,
                    cursor:'pointer',
                    
                  }}
                  onClick={() =>setOpenprofileSettings(true)}

                >
                  Settings{" "}
                </a>
                <img height={13} width={8} src={Vector12} />
              </div>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                style={{ marginTop: "12px", marginRight: 15 }}
                src={briefcasegreen}
                height={18}
                width={18}
              />

              <p
                style={{
                  color: "#000000",
                  marginTop: "10px",
                  color: "#00a5ab",
                  fontFamily: "Rubik-Regular",
                  fontSize: 20,
                }}
              >
                {totalItemNewProjectPag} Projects on hold{" "}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                style={{ marginTop: "12px", marginRight: 15 }}
                src={clipboardgreen}
                height={20}
                width={20}
              />

              <p
                style={{
                  color: "#000000",
                  marginTop: "12px",
                  color: "#00a5ab",
                  fontFamily: "Rubik-Regular",
                  fontSize: 20,
                }}
              >
                {totalItemInprogress} Tasks today{" "}
              </p>
            </div>
          </div>

          <img
            style={{ marginTop: 30, marginBottom: 15 }}
            src={zied}
            height={140}
          />
        </div>
        <Divider variant="fullWidth" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "20%" }}
          >
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -190,

              }}
            >
              First Name{" "}

            </a>


   

  <TextField
          
              id="standard-basic "
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15,  }}
              defaultValue={detailsUser?.fisrtName}
              value={userData?.fisrtName}
              onChange={(event)=>onChange("fisrtName",event.target.value)}
            />
           

            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -190,
              }}
            >
              Last Name{" "}
            </a>

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              defaultValue={detailsUser?.lastName}

              value={userData?.lastName}
              onChange={(event)=>onChange("lastName",event.target.value)}

            />
            
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -225,
              }}
            >
              Email{" "}
            </a>
            

            <TextField
              id="standard-basic"
              style={{ marginLeft: -20, marginTop: 15 }}
              variant="standard"

              defaultValue={detailsUser?.email}

              value={userData?.email}
              onChange={(event)=>onChange("email",event.target.value)}

            />

          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "20%" }}
          >
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -195,
              }}
            >
              Profession{" "}
            </a>
           


            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              defaultValue={detailsUser?.profession}

              value={userData?.profession}
              onChange={(event)=>onChange("profession",event.target.value)}

            />
       
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -195,
              }}
            >
              Birth Date{" "}
            </a>
          

            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}
              defaultValue={detailsUser?.birthDate}

              value={userData?.birthDate}
              onChange={(event)=>onChange("birthDate",event.target.value)}

            />
       
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -180,
              }}
            >
              Nationality{" "}
            </a>
            
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}

              defaultValue={detailsUser?.nationality}

              value={userData?.nationality}
              onChange={(event)=>onChange("nationality",event.target.value)}

            />
          
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "20%" }}
          >
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -220,
              }}
            >
              Adress{" "}
            </a>

           
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}

              defaultValue={detailsUser?.address}

              value={userData?.address}
              onChange={(event)=>onChange("address",event.target.value)}

            />
           
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 40,
                marginLeft: -150,
              }}
            >
              Phone Number{" "}
            </a>
      
            <TextField
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20, marginTop: 15 }}

        
           
           
              defaultValue={detailsUser?.phoneNumber}

              value={userData?.phoneNumber}
              onChange={(event)=>onChange("PhoneNumber",event.target.value)}

             
             
            />




<Button  style={{marginTop:'80px',width:'100px',marginLeft:'150px',cursor:'pointer', color: "#00a5ab",borderColor:"#00a5ab" }}
                variant="outlined"   onClick={() => handlerUpdateUser()} >SAVE</Button>
    
      
            </div>
        </div>
      </p>
      <Collapse in={userUpdated} style={{position:'absolute',bottom:10,right:10}} >
        <Alert
        severity="success"
          action={
            <IconButton
              aria-label="close"
              color="success"
              size="small"
              onClick={() => {
                setUserUpdated(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
            user updated
        </Alert>
      </Collapse>
    </div>
  );
}
