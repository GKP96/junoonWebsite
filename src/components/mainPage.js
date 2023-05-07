import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/mainPage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-router-dom';

const MainPage = () => {

    return (

        <div>
            <div className='' style={{ backgroundColor: 'red' }}>
                <div className="row">
                    <div className="col-lg-9 col-sm-12">
                        <h1 style={{ marginTop: '20vh', marginLeft: '2rem' }}>Fiesta`23</h1><br></br><h1 style={{ marginLeft: '2rem' }}>Awaken the passion</h1>

                    </div>
                    <div className="col-sm-12 col-lg-3">
                        <Card style={{ marginTop: '5vh', borderRadius: '50%', marginBottom: '10vh' }} >
                            <Card.Img variant="top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" style={{ borderRadius: '50%', border: 'none', height: '50vh' }} />
                        </Card>

                    </div>
                </div>
            </div>
            <div > <h1 style={{ textAlign: 'center' }} className='my-3'> <span style={{ textShadow: '2px 2px #ff0000' }}>Societies</span></h1></div>
            <div className='bg-second row vikash ms-5'>
                <div className="row vikash">
                    <div className="col-lg-3 col-sm-12 bg-society mb-4" style={{ leftMargin: '5vw' }}>
                        <Card style={{ width: '18rem', alignContent: 'center', border: 'none' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
                            <Card.Body>

                                <Button variant="primary">MUSIC & DANCE SOCIETY</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12 bg-society vikash mb-4">
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
                            <Card.Body>

                                <Button variant="primary">ACTING & DRAMA SOCIETY</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12 bg-society vikash mb-4">
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
                            <Card.Body>

                                <Button variant="primary" className='hower'>MUSIC & DANCE SOCIETY</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-sm-12 bg-society mb-4">
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
                            <Card.Body>
                                <a href='http://16.171.67.60:3000/event' className='btn btn-primary'>MUSIC & DANCE SOCIETY</a>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

            </div>


        </div>
    )

}

export default MainPage;
