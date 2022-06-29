import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TvShows from './TvShows'
import Gallery from './Gallery'
import { ListGroup } from 'react-bootstrap'

export default function Details2() {
    <TvShows />
    const [movie, setMovie] = useState(null)
    const params = useParams()
    console.log(params)
    let movieId = params.movieId
    useEffect(() => {
        
        fetchMovies()
        
        
        
      }, [])
      useEffect(() => {
        
        console.log(movie)
        
        
        
      }, [movie])
      
   const fetchMovies = async () => {
        try {
            const url = `http://www.omdbapi.com/?apikey=1116749d&i=${movieId}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setMovie(data)
           
            
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
      <div>
  {movie &&  <ListGroup><ListGroup.Item> Title : {movie.Title}</ListGroup.Item>
  <ListGroup.Item>Year : {movie.Year}</ListGroup.Item>
  <ListGroup.Item>Genre : {movie.Genre}</ListGroup.Item>
  <ListGroup.Item>Plot : {movie.Plot}</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item></ListGroup>}
  </div>

    )
}
