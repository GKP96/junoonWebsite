import React from 'react';
import Data from './data';
import Card from 'react-bootstrap/Card';
const Gallery = () => {
    return (
        <div className="row" style={{}}>
            {
                Data.galleryData.map((item, index) => {
                    return (
                        <>
                            <div className='col-lg-4 col-sm-12 m-sm-0 pb-5'>
                            <Card>
                                <Card.Img variant="top" src={item.imgSrc} style={{ height: '50vh' }} />
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </div >
                        </>
    )
})
            }

        </div >
    );
}

export default Gallery;
