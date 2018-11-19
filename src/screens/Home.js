import React, { Component } from 'react';
import "../styles/Home.css"

class Home extends Component {
    constructor(props) {
      super(props);

    }

    render(){
        let homeContainerHeight = {
            height: `${this.props.height}px`
          }
        console.log("Props: ", this.props)
        return(
            <div className="homeContainer" style={homeContainerHeight}>
                <div className="homeHeaderContainer">
                    <h3 className="homeHeaderText">Austin Efnor</h3>
                </div>
                <div className="homeBodyContainer">
                    <p className="description">
                        I Co-Created Intern Supply, a website which sent over 400,000 applicants to internship applications in the Fall 2016 recruiting season.
                        I have maintained an internship since my freshman year of college, totalling me to 3 years of work experience in a full production environment.
                    </p>
                </div>
            </div>
        )
    }
}
export default Home;