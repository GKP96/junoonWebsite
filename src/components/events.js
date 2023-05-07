
import Card from 'react-bootstrap/Card'
import React from 'react';
import '../css/popup.css';
import Data from './data';
import MyVerticallyCenteredModal from './modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/esm/Container';
function Events() {
  const [modalData, setModalData] = React.useState({
    show: false,
    data: {}
  });

  return (
    <>
      <div>
      <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </div>

      < div className='row' style={{backgroundColor:'black'}} >
        {
          Data.cardData.map((item, index) => {

            return (<>

              <div className="col-lg-4 col-sm-12 m-sm-0 pb-5">
                <Card onClick={() => { setModalData(prevstate => ({...prevstate, show: true, data: item})) }}>
                  <Card.Img variant="top" src={item.imgSrc} style={{height:'50vh'}} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
               
              </div>
              {/* <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  index={index}
                /> */}
                
            </>
            )
          }
          )
        }

      </div>
      
          <MyVerticallyCenteredModal
                  show={modalData.show}
                  data={modalData.data}
                  onHide={() => setModalData(prevstate => ({...prevstate, show: false}))}
                />
      
    </>
  );
}

export default Events;

