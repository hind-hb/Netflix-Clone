import React from 'react';
import { Button, Modal } from 'react-bootstrap';




export default function ModalMovie( cardInfo, show, handelClick ) {

    return (
        <>
            <Modal show={show} onHide={handelClick} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add to Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img  width='100%' src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${cardInfo.poster_path}` }/>
                    
                    <div>
                        <label htmlFor="op">Write  Comment :</label>
                        <input placeholder="Write  comment" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}