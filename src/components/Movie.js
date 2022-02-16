import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import ModalMovie from './ModalMovie';
import 'bootstrap/dist/css/bootstrap.min.css';

function Movie(props) {
    const [showModal, setShowModal] = useState(false);
    const [mov, setmov] = useState();
    
    return (
        <>
            <Card style={{ width: '25rem',margin: '20px 10%'}}>
                <Card.Header>Movie id : {props.data.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.overview}
                    </Card.Text>
                    <Card.Text>
                         <img width='100%' src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.data.poster_path}` }/>
                    </Card.Text>
                    <Button variant="primary" onClick={() => { setmov(props.data); setShowModal(true) }} >Add to Favorite </Button>
                </Card.Body>
            </Card>
            
            {showModal && <ModalMovie show={showModal} Movie={Movie} handleColse={() => { setShowModal(false) }}/>}
        </>
    )
}
export default Movie
