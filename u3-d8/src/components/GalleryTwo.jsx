import React, { Component } from 'react'
import SingleMovie from './SingleMovie'
import { Container, Row,Col } from 'react-bootstrap'
import { SpinnerRoundOutlined } from "spinners-react"

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
            const url = "http://www.omdbapi.com/?apikey=1116749d&s=hobbit"
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
            <SpinnerRoundOutlined size={90} thickness={180} speed={180} color="rgba(172, 127, 57, 1)" />
          )}
            <Row className="justify-content-center mt-3">
                {this.state.movies.map(movie => {
                    return (

                        <Col key={movie.imdbID} xs={6} md={4} lg={3} className="text-center">
                            <SingleMovie  movie={movie}/>
                        </Col>


                    )
                })}
            </Row>
        </Container>
        )
    }
}
