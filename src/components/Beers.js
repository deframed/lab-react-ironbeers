import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios'


class Beers extends Component {

state = {
    beers: []
}

    componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')

    .then((response) => {
      console.log(response.data.results)
        this.setState({ beers: response.data })
    })

    .catch(() => {
      console.log("Can't get data from the api!")
    })

  }

  componentDidUpdate(){
    console.log('Beer updated')
}



        render() {

             const {beers} = this.state

                return(
                    <div>

                        {
                            beers.map((singleBeer, index) => {
                                return <div key={index}>
                                <Link to={`beers/${singleBeer._id}`}>
                                    <img class="pic" src={singleBeer.image_url}/> </Link>
                                    <h5>{singleBeer.name}</h5>
                                    <p>{singleBeer.contributed_by}</p>
                                    <p><i>{singleBeer.tagline}</i></p>
                                    <hr></hr>

                                </div>
                                        
                            })
                    
                         }

                    </div>
                    

                
                )

     }
}
        
export default Beers;


