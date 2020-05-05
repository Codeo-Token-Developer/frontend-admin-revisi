import React from "react";

import {
  Modal,ModalHeader,ModalBody
} from "reactstrap";

function ViewNotify(props) {

  const [dmodal,setModal]=React.useState(false);

  const toggleModal=(action)=>{
  if(action==="open"){
    setModal(!dmodal);
  }else if(action==="close"){
    setModal(!dmodal);
    props.click(props.index);
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
            <small className="text-muted">
              {props.message}
            </small>
          </p>
        </button>
          <Modal isOpen={dmodal}>
            <ModalHeader toggle={()=>toggleModal("close")}>
                  <i className="mdi mdi-message" /> {props.title}
            </ModalHeader>
            <ModalBody>
                  {props.message}
            </ModalBody>
          </Modal>
        </>
  );
}

export default function Notifications(action){
  switch (action.type) {
    case 'Order':
      return {message:(
        <>
          <ViewNotify title={action.title} message={action.message} index={action.indexValue} click={action.click} />
        </>
      )};
    case 'Wallet':
    return {
      message:(
        <>
        <ViewNotify title={action.title} message={action.message} index={action.indexValue} click={action.click} />
      </>
    )
    };
    case 'Transfer':
    return {
      message:(
        <>
        <ViewNotify title={action.title} message={action.message} index={action.indexValue} click={action.click} />
        </>
      )
    };
    case "Message":
      return {message:(
        <>
        <ViewNotify title={action.title} message={action.message} index={action.indexValue} click={action.click} />
        </>
      )};
    default:
      return {message:action.message};
  }
}
