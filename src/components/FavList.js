import { Button, Card, CardGroup } from "react-bootstrap";

import Movie from './Movie'

function FavList(props){
console.log(props)
   
     return (
         <>
         <CardGroup style={{ display: "flex" }}>
            {
                
                (props.favoriteLis ?? []).map(Movie => {
                    return (
                        <Card key={Movie.id}>
                            <Card.Img width='100%'  variant="top" src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.data.poster_path}` } />
                            <Card.Body>
                                <Card.Title>{Movie.title}</Card.Title>
                                <Card.Text>
                                    {Movie.overview}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary"> UpDate
                                </Button>
                                <Button variant="primary"> Delete
                                </Button>

                            </Card.Footer>
                        </Card>
                        
                    )
                })
            }
            
        
        </CardGroup>
         <h1>this  is my FavList</h1>
         </>

     )


}
   export default FavList;