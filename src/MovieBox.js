import react from 'react'
import App from './App'

const API_IMG = "https://image.tmdb.org/t/p/w500/"

const MovieBox = ({ title, poster_path, overview }) => {
    return (
        <div>
            <a href='#'><img id='resim' src={API_IMG + poster_path}></img></a>
        </div>
    )
}


export default MovieBox;
