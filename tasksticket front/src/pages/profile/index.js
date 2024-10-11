import React ,{useEffect} from "react";
import { useState } from "react";
import Avatar51 from "../../assets/Avatar51.png";
import Vector12 from "../../assets/Vector12.png";

import briefcasegreen from "../../assets/briefcasegreen.svg";
import clipboardgreen from "../../assets/clipboardgreen.svg";
import zied from "../../assets/zied.png";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ProfileSettings from "../profileSettings";

import Delete from '../Delete';
import Password from '../password';
import {login} from "../../store/action/auth/auth"
import { UserUpdateProfil } from "../../store/action/auth/auth";

import { useDispatch, useSelector } from "react-redux";

export default function Index() {


  const [openpassword, setOpenpassword] =
  React.useState(false);
 
  const [openDelete, setOpenDelete] =
  React.useState(false);

  const [openprofileSettings, setOpenprofileSettings] =
  React.useState(false);


  const dispatch = useDispatch()
  const {logedUser}=useSelector((state)=>state.loginReducer)


  const { totalItemNewProjectPag } = useSelector(
    (state) => state.getProjectNewReducer
  );
  const { totalItemInprogress } = useSelector(
    (state) => state.tasksInProgressReducer
  );


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


const [userData, setuserData] = useState({
    
  fisrtName:"",
 // id:"",
  lastName:"",
  email:"",
  profession:"",
  birthDate:"",
  nationality:"",
  address:"",
 phoneNumber:"",

})


  useEffect(() => {

    const token = window.localStorage.getItem("token");
    if (token) {
    dispatch(login(token))
    }

  
    }, [dispatch])
  

 
  const [userUpdated,setUserUpdated]= React.useState(false);
  
  const handlerUpdateUser =()=> {
    dispatch(UserUpdateProfil(userData))
    setUserUpdated(true);
  }



  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setuserData({
        fisrtName:logedUser?.fisrtName,
        lastName:logedUser?.lastName,
        email:logedUser?.email,
        profession:logedUser?.profession,
        birthDate:logedUser?.birthDate,
        nationality:logedUser?.nationality,
        address:logedUser?.address,
        phoneNumber:logedUser?.phoneNumber,
      });
    }
  }, [dispatch]); // Add `token` as a dependency
  
const onChange=(input,value)=> {
  const token = window.localStorage.getItem("token");
  if (token) {

  setuserData({...userData,[input]:value},token)
}
}

  return (
    <div
      className="App"
      style={{
        flex: 1,
      }}
    >
<ProfileSettings open={openprofileSettings} handleClose={()=>setOpenprofileSettings(false)} setOpenDelete={()=>handleOpenDelete()}  setOpenpassword={()=>handleOpenpassword()}  />
<Delete open={openDelete} handleClose={()=>closeDelete()   }/>

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
              marginTop: 60,
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
              height={90}
              width={100}
            />
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              marginLeft: -115,
            }}
          >
            <a
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: 30,
                color: "#00a5ab",
                marginLeft: -30,
              }}
            >
              
               {logedUser?.fisrtName}
            </a>
            <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 10,
              }}
            >
           {logedUser?.birthDate}
           </a>
             <a
              style={{
                fontFamily: "Rubik-Regular",
                fontSize: 20,
                color: "#00a5ab",
                marginTop: 10,
                marginLeft:-25
              }}
            >
           {logedUser?.profession}
         
           
     </a>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <div>
              
              </div>
              <div>
                <a
                  style={{
                    fontFamily: "Rubik-Medium",
                    fontSize: 20,
                    color: "#00a5ab",
          
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
                marginTop: 55,
                marginLeft: -190,
              }}
            >
              First Name{" "}
            </a>
            <div>
             
            <TextField
            width='100%'
              id="standard-basic"
              variant="standard"
              style={{ marginLeft: -20,width:"107%"  }}
              defaultValue={logedUser?.fisrtName}
              value={userData?.fisrtName}
              onChange={(event)=>onChange("fisrtName",event.target.value)}
            />

</div>
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
              defaultValue={logedUser?.lastName}
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
              defaultValue={logedUser?.email}
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
              defaultValue={logedUser?.profession}
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
              defaultValue={logedUser?.birthDate}
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
              defaultValue={logedUser?.nationality}
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
              defaultValue={logedUser?.address}
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
              defaultValue={logedUser?.phoneNumber}
              value={userData?.phoneNumber}
              onChange={(event)=>onChange("phoneNumber",event.target.value)}
            
            />



          </div>
        </div>
      </p>
    
    </div>
  );
}
