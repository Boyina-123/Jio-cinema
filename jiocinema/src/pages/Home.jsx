import Carousel from "../components/carousel/Carousel";
import Featured from "../components/featured/featured";
import Channels from "../components/channels/Channel"
import Header from "../components/header/Header";
import Shows from "../components/shows/Shows";
import Tags from "../components/header/tags/Tags";
import { useState,useEffect } from "react";

export default function Home()
{
     let [movies,setMovies] = useState([]);
     let [featuredMovies,setFeaturedMovies] = useState([])
     let [dramaMovies,setDramaMovies] = useState([])
     let [hindiMovies,setHindiMovies] = useState([])
     let [topMovies,setTopMovies] = useState([])
     let [japaneseMovies,setJapaneseMovies]=useState([])

     useEffect(()=>{

        async function  fetchMovies(){
        try
        {
            let movieResponse  = await fetch("http://localhost:3000/movies");
            let moviesData = await movieResponse.json();

            setMovies(moviesData);

            // filter for featured movies 
            let featMovies = moviesData.filter((movie)=>{return movie.featured===true})
            setFeaturedMovies(featMovies.slice(0,6))

            // filter for drama movies 
            let draMovies = moviesData.filter((movie)=>{return movie.genre.includes("Drama")})
            setDramaMovies(draMovies.slice(0,6))

             // filter for hindi movies 
             let hinMovies = moviesData.filter((movie)=>{return movie.language==="Hindi"})
             setHindiMovies(hinMovies.slice(0,6))

             let topRatedMovies = moviesData.filter((movie)=>{return movie.imdb>=8.5})
             setTopMovies(topRatedMovies.slice(0,6))
             
        }
        catch(err)
        {
            console.log(err)
        }
    }
    fetchMovies()
     },[])

   
    return(
        <>
            <Header movies={movies}/>
            <Tags/>
            <Carousel/>
            <Channels/>
            <Featured movies={featuredMovies}/>

            <Shows title="Drama Movies" movies={dramaMovies}/>
            <Shows title="Hindi Language Movies" movies={hindiMovies} />
            <Shows title="Highly Rated Movies" movies={topMovies}/>
            

        </>
    )
}
  