import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Home extends Component {

   

    render() {

        return(
            <div>
                <div class="all-beers-hp-container">
                        <img src="../assets/beers.png" alt="beer"></img>
                        <Link to='/beers'> <h3>Beers</h3> </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>
                 

                 <div class="random-beer-hp-container">
                        <img src="../assets/random-beer.png" alt="beer"></img>
                        <Link to='/random-beer'> <h3>Random Beer</h3> </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>

                 <div class="new-beer-hp-container">
                        <img src="../assets/new-beer.png" alt="beer"></img>
                        <Link to='/new-beer'> <h3>New Beer</h3> </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </div>


                 

            </div>
        )
    }
}

export default Home;



