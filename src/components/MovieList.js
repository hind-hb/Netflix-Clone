import React, { useEffect, useState } from "react";
import Movie from './Movie'
import { Row, Container } from "react-bootstrap";
function MovieList(props) {
    const [memes, setMemes] = useState();
    
    const fetchData = async () => {
        
        try {
            
            const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US`)
           console.log(response);
           
            const data = await response.json();
            console.log(data);
            setMemes(data);
        } catch (error) {
            console.log("error", error);
        }
    };
     
    
    const updateCaptions = (data, id) => {
        let updatedMemes = memes.map(meme => {
            if (meme.id == id) {
                meme.caption = data.userCaption;
                return meme;
            }
            else return meme
        })
        setMemes(updatedMemes);
    }




    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
         <h1>Trending</h1>
            <main>
                {memes && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <Movie memes={memes} updateCaption={updateCaptions} />
                        </Row>
                    </Container>
                )}
            </main>
        
        </>
    );
}

export default MovieList;