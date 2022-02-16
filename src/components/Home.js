import MovieList from './MovieList';
import { useEffect } from "react";
import { useState } from "react";


function Home() {
    const [data, setdata] = useState();

    const fetchData = async () => {
        try {
            const respons= await fetch(`https://movies-d.herokuapp.com/trending`)
            

            const rRender = await respons.json();
          
            setdata(rRender)
           
            console.log("hind",rRender)

        } catch (error) {
            console.log("error", error);
        }

    }
    useEffect(() => { fetchData(); }, [])


    return (
        <>
            <p>Home</p>

            <MovieList mData={data}/>
        </>
    )
}
export default Home