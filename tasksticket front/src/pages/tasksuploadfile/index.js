
import React, { useEffect, useState } from "react";

import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';
import Vector11 from '../../assets/Vector11.png';
import Vector111 from '../../assets/Vector111.png';
import { upload } from '../../store/action/tasks/getTasks';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




export default function Index({open,handleClose}) {
   
  const dispatch = useDispatch();


  const { uploadFile, uploadFileList } = useSelector((state) => state.uploadReducer);
  

  const handlerUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      dispatch(upload(formData));
    }
  }
  
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

    return (
        <div className="App"
        style={{
        display:'flex',
        justifyContent:'center', 
     alignItems:'center',
  
          }} >
       
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p  style={{ position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4, backgroundColor:'white',borderColor:'#d3d3d3', borderStyle:'solid',borderWidth:1,borderRadius:10,height:'47%',width:'30%'}}>
        <div  style={{display:'flex',flexDirection:'column'}} >

        <p
            style={{
              marginTop: 20,
              marginLeft: 150,
              borderStyle: "solid",
              borderWidth: 1.8,
              borderColor: "#d3d3d3",
              borderRadius: 20,
              width: 130,
              height: 110,
             // padding: 22,
            
              
            }}
           
        

          >


              <img
                 src={selectedFile && URL.createObjectURL(selectedFile)}
                {...uploadFile[0]}
               // alt="Uploaded Image"
                style={{ marginLeft:15,  maxWidth: 100, maxHeight: 100,marginTop:5,borderRadius:10 }}
              />
            
          </p>


        <input
            style={{  marginRight:80,marginLeft:170 }}
            type="file"
            name="file"
            multiple
            onChange={handleFileSelect}
          ></input>

        <a style={{color:'#3e41a8',fontFamily:'Rubik-Regular',fontSize:20,marginTop:25,marginLeft:170}} >Replace File  > </a>
    <Divider style={{marginTop:25}} variant='fullWidth' />
    <div style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between',marginTop:25}}>
        <div style={{display:'flex',flexDirection:'row',marginLeft:30}} >
        <img style={{marginTop:3}}  height={15} src={Vector11}/>
   <a style={{fontSize:20,fontFamily:'Rubik-Regular',color:'#00a5ab'}}>  Cancel  </a>
   </div>
   <div style={{display:'flex',flexDirection:'row',marginRight:30}} >
    <a style={{fontSize:20,fontFamily:'Rubik-Regular',color:'#3e41a8',cursor:'pointer'}}  onClick={() => handlerUpload()} >Confirm  </a>
   
    <img style={{marginTop:3 }}  height={15} width={9} src={Vector111}/>
</div>
    </div>


        </div>
        </p>
      </Modal>
        </div>
    )
}
