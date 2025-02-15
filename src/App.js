import React from 'react';
import {useState,useEffect} from 'react';
//c6d0d148
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=c6d0d148'
// const movie1={
//         "Title": "Italian Spiderman",
//         "Year": "2007",
//         "imdbID": "tt2705436",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
// }
const App = () => {
    const [movies,setMovies]=useState([]);
    const [searchItem,setSearchItem]=useState('');
    const searchMovies=async(title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search); //data about movies
        }
useEffect(()=>{
    searchMovies('Harry Potter');
    },[]);

    return(
        <div className='app'>
            <h1>CineVerse</h1>
            <div className="search">
                <input 
                placeholder="Search for Movies"
                value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchItem)}
                />
            </div>
            {
                movies?.length>0
                ?(
                    <div className="container">
                    {movies.map((movie)=>(<MovieCard movie={movie}/>)
                )}
                    </div>
                ): (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;