import react from 'react'
import App from './App'

const API_IMG = "https://image.tmdb.org/t/p/w500/"

const MovieBox = ({ title, poster_path, overview }) => {
    return (
        <div className='resim'>
            <a href='#'><img src={API_IMG + poster_path} alt={title}></img></a>

            <div className='title'>
                <a href='#'><h1>{title}</h1></a>
            </div>

        </div>
    )
}


export default MovieBox;
