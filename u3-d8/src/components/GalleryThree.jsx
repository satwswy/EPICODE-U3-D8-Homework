import React, { Component } from 'react'
import SingleMovie from './SingleMovie'
import { Container, Row,Col } from 'react-bootstrap'
import { SpinnerCircularFixed } from "spinners-react"

export default class GalleryOne extends Component {
    state = {
        movies:[],
        isLoading: true,
    }
    componentDidMount = () => {
        this.fetchGalleryOneMovies()
    }
    fetchGalleryOneMovies = async () => {
        try {
            const url = "http://www.omdbapi.com/?apikey=1116749d&s=batman"
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                movies:data.Search,
                isLoading: false,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <Container>
                {this.state.isLoading && (
            <SpinnerCircularFixed size={80} thickness={172} speed={133} color="rgba(57, 172, 76, 1)" secondaryColor="rgba(154, 57, 172, 1)" />
          )}
            <Row className="justify-content-center mt-3">
                {this.state.movies.map(movie => {
                    return (

                        <Col key={movie.imdbID} xs={6} md={4} lg={3} className="text-center">
                            <SingleMovie  movie={movie} />
                        </Col>


                    )
                })}
            </Row>
        </Container>
        )
    }
}