import React,{useEffect} from 'react'


import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';
import ziedd from '../../assets/ziedd.png';
import Vector11 from '../../assets/Vector11.png';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {
  
  BrowserRouter as Router,
 
  useLocation

 
} from "react-router-dom";


export default function Index({open,handleClose,item}) {
   



  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }


    return (
        <div className="App"
        style={{
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
    flex:1,
          }} >
       
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p  style={{position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
    flexDirection:'row', backgroundColor:'white',borderColor:'#d3d3d3', borderStyle:'solid',borderWidth:1,borderRadius:10,height:'30%',width:'33%'}}>

              <>    
                  <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                  paddingRight: 18,
                  paddingLeft: 18,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <img src={ziedd} height={35} width={35} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a
                      style={{
                        fontSize: 15,
                        fontFamily: "Inter-Bold",
                        color: "#3e41a8",
                        marginLeft: 10,
                      }}
                    >
                         {item?.user}
                    </a>
                    <a
                      style={{
                        fontSize: 12,
                        fontFamily: "Inter-Medium",
                        color: "#9592a6",
                        marginLeft: 10,
                        color: "#00a5ab",
                      }}
                    >
                      UX/UI Designer
                    </a>
                  </div>
                </div>
                <a
                  style={{
                    fontSize: 12,
                    fontFamily: "Rubik-Regular",
                    color: "#00a5ab",
                    marginLeft:75,
                    marginTop:12
                    
                  }}
                >
                     {item?.createAt}
                </a>
              </div>
              <div
                style={{
                 
                  marginTop: 15,
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Rubik-Regular",
                   display:'flex',
                   flexDirection:'column',
                   marginLeft:23
                  }}
                >
               
              <a>{item?.description}</a>
              </div>
              </div>


              </>
         

              <Divider style={{marginTop:15}} variant='fullWidth' />




             <div style={{display:'flex',flexDirection:'row',marginLeft:50,marginTop:25}} >
             
           <img src={Vector11} height={15} width={8} style={{paddingRight:8}}  />
              
              
    <a style={{fontFamily:'Rubik-Regular',fontSize:20,color:'#00a5ab',marginTop:-4,cursor:'pointer' }}  onClick={()=>handleClose()}>  Back</a>
              
</div> 


              
        </p>
      </Modal>
        </div>
    )
}
