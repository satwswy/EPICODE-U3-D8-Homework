import React, { Component } from 'react'
import { Card, Button, Container, Row , Col} from "react-bootstrap"
import Details from './Details'


export default class SingleMovie extends Component {
    state = {
        showDetails:false
    }
    
    render() {
        return (
            
                        <Card >
                            <Card.Img variant="top" src={this.props.movie.Poster} />
                            <Card.Body>
                                <Card.Title>{this.props.movie.Title}</Card.Title>
                                <Card.Text>
                                    Year: {this.props.movie.Year}
                                </Card.Text>
                                <Button onClick={()=>{this.setState({showDetails:!this.state.showDetails})}}variant="primary">Details</Button>
                            </Card.Body>
                            {this.state.showDetails&&<Details id={this.props.movie.imdbID}/>}
                        </Card>
                   
        )
    }
}
