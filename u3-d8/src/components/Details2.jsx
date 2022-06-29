import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TvShows from './TvShows'
import Gallery from './Gallery'

export default function Details2() {
    <TvShows />
    const [movie, setMovie] = useState(null)
    const params = useParams()
    console.log(params)
    let movieId = params.movieId
  
    return (
        <div>Details2</div>
    )
}
