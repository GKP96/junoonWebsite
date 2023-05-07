import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import Data from './data';
import '../css/myModal.css';

function MyVerticallyCenteredModal(props) {

  return (
    <>
      {/* {
        Data.cardData.map((item, index) => {
          return (
            <> */}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='modalTitle'>
            {/* {item.title} */}
            {props.data.title}
          </Modal.Title>
        </Modal.Header>
        
          <Modal.Body className='modalBody' style={{backgroundColor:"black"}} >
            {/* 
             style={{backgroundImage: `url(${props.data.imgSrc})`,
      height: "50vh", backgroundRepeat: "no-repeat"}} */}
        <img src={props.data.imgSrc} alt="" style={{height:'20vh',display:'flex',justifyContent:'center'}} />
              <h4 style={{color:"white"}}> Read it carefully</h4>
              <p style={{color:'white'}}>
               {props.data.about}
              </p>
            
          </Modal.Body>
        
        <Modal.Footer>
          <Button>Rulebook</Button>
          <span></span>
          <Button>Register</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
  //     })
  //   }

  // </>
  // );
}

export default MyVerticallyCenteredModal;