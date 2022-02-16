import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


function ModalMovie(props) {
    console.log(props)
    async function addToFavorite(Movie){
        try{
            const res = await fetch(`${process.env.REACT_APP_SERVER}/addMovie`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title : Movie.title,
                    image : Movie.image,
                    

                })
                

            })
            const data = await res.json();




        } catch (error) {
            console.log("error", error);
        }
    }
    
    
    return (

        <>
            
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.Movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img  width='100%' src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.Movie.poster_path}` }/>
                    <p>{props.Movie.title}</p>
                </Modal.Body>
                <Modal.Footer>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control type="textarea" placeholder= "Add Your Comment Here..." />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit">
                        Add a Comment
                    </Button>
                    <Button variant="primary" onClick={()=> addToFavorite(props.Movie)}>
                        add to fav
                    </Button>
                <Button variant="secondary" onClick={props.handleColse}>Close</Button>
                </Modal.Footer>
            </Modal>


        </>



    )

}
export default ModalMovie






