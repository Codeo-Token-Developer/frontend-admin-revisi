import React from "react";

import {
  Modal,ModalHeader,ModalBody,ModalFooter
} from "reactstrap";

function ViewNotify(props) {

  const [dmodal,setModal]=React.useState(false);

  const toggleModal=(action)=>{
  if(action==="open"){
    setModal(!dmodal);
  }else if(action==="close"){
    setModal(!dmodal);
    props.click(props.index,props.data._id);
  }
  };
  return (
        <>
        <button className="dropdown-item notify-item active" onClick={()=>toggleModal("open")}>
          <div className="notify-icon bg-warning">
            <i className="mdi mdi-message" />
          </div>
          <p className="notify-details">
            {props.title}
            <div>
            <small className="text-muted">
              {props.data.text.length<=100?props.data.text:props.data.text.substr(0,100)+" ..."}
            </small>
            <small>
              {new Date(props.data.updatedAt).toLocaleDateString()+" "+new Date(props.data.updatedAt).toLocaleTimeString()}
            </small>
            </div>
          </p>
        </button>
          <Modal isOpen={dmodal} toggle={()=>toggleModal("close")}>
            <ModalHeader toggle={()=>toggleModal("close")}>
                  <i className="mdi mdi-message" /> {props.title}
            </ModalHeader>
            <ModalBody>
                  {props.data.text}
            </ModalBody>
            <ModalFooter>
            <span>
              {new Date(props.data.updatedAt).toLocaleDateString()+" "+new Date(props.data.updatedAt).toLocaleTimeString()}
            </span>
            </ModalFooter>
          </Modal>
        </>
  );
}

export default function Notifications(action){
  switch (action.type) {
    case 'Order':
      return {message:(
        <>
          <ViewNotify error={action.errors} data={action.data} title={action.title} index={action.indexValue} click={action.click} />
        </>
      )};
    case 'Wallet':
    return {
      message:(
        <>
        <ViewNotify error={action.errors} data={action.data} title={action.title} index={action.indexValue} click={action.click} />
      </>
    )
    };
    case 'Transfer':
    return {
      message:(
        <>
        <ViewNotify error={action.errors} data={action.data} title={action.title} index={action.indexValue} click={action.click} />
        </>
      )
    };
    case "Message":
      return {message:(
        <>
        <ViewNotify error={action.errors} data={action.data} title={action.title} index={action.indexValue} click={action.click} />
        </>
      )};
    default:
      return {message:action.message};
  }
}

// let ENDPOINT=`https://codeo-backend-user.herokuapp.com`;
//   let soketio=SocketIo(ENDPOINT);
//   soketio.on("user-notif",(socket)=>{
//     alert(JSON.stringify(socket))
//   });

// let socketdata=[
  // {message:"Message1",status:false},{message:"Message2",status:false},{message:"Message3",status:false},{message:"Message4",status:false},
  // {message:"Message5",status:false},{message:"Message6",status:false},{message:"Message7",status:false},{message:"Message8",status:false},
  // {message:"Message9",status:false},{message:"Message10",status:false}];
  //   socketdata.reverse().forEach((item,index)=>{
  //     inc++;
  //     socketData.push(Notify({type:"Message",message:item.message,title:"Notification",indexValue:index,userId:"",click:ReadMessage}).message);
  //   });
  //   setData(socketData);
  //   setCount(inc);
