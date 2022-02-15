import { Card, CardGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import MovieList from './MovieList';
import ModalMovie from './ModalMovie'


function Movie(props) {
    const [showModal, setShowModal] = useState(false);
    const [meme, setMeme] = useState();
    return (
        <>
            <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
                {
                    props.Movie.map(meme => {
                        return <div key={meme.id}>
                            <Card key={meme.id} >
                                <Card.Img variant="top" src={meme.poster_path} />
                                <Card.Body>
                                    <Card.Title>{meme.title}</Card.Title>
                                    <Card.Text>
                                        {meme.overview ? meme.overview : "No text"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { setMeme(meme); setShowModal(true) }} >Add to FavList</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </CardGroup>
            {showModal && <MovieList show={showModal} meme={meme} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}

            <ModalMovie />
        </>
    )
}

export default Movie;