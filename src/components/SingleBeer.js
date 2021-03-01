import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import SingleBeer from './SingleBeer'

 class SingleBeer extends Component {

    state = {
        singleBeer: {}
    }


    getBeer = () => {
        let id = this.props.match.params.singleBeerId
        axios.get('https://ih-beers-api2.herokuapp.com/beers${_id}')

        .then((response) => {

            let singleBeer = {
                image: response.data.image_url,
                // id: response.data._id,
                name: response.data.name,
                tagline: response.data.tagline,
                attenuationLevel: response.data.attenuation_level,
                firstBrewed:  response.data.first_brewed,
                description: response.data.description,
                contributedBy: response.data.contributed_by
            }

            .catch(() => {
                console.log('Get Single Beer failed')
              })

        })

        this.setState({
            singleBeer: singleBeer
        })

    }

    componentDidMount() {
        console.log('Component Mounted')
        this.getBeer()
    }

    componentDidUpdate() {
        let id = this.props.match.params.singleBeerId

        if (this.state.singleBeerId._id !== _id) {
            this.getBeer()
        }
        
    }


    render() {
        

        const {singleBeer: {image, name, tagline, attenuationLevel, firstBrewed, description, contributedBy }} = this.state
        
        console.log(singleBeer)

        return (
            <div class="single-beer-container">
                <img src={image}/>
                <div class="beer-header">
                    <h2>{name}</h2>
                    <h6>{tagline}</h6>
                    <h2>{attenuationLevel}</h2>
                    <p><strong>{firstBrewed}</strong></p>
                </div>
                <p>{description}</p>
                <p><strong>{contributedBy}</strong></p>
                
            </div>
        )
    }
}

export default SingleBeer;
