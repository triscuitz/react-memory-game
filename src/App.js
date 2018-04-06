import React, { Component } from "react";
import "./App.css";

import Header from './header/header';
import ImgCard from "./img-card/img-card";
import images from "./images.json";

let score = 0;
let highScore = 0;
let message = "Click on an image to earn points, but only click them once!";

class App extends Component {

    state = {
        images,
        score,
        highScore,
        message
    };

    setClicked = id => {
        let images = this.state.images;
        let clickedImage = images.filter(image => image.id === id);

        if (clickedImage[0].clicked){
            score = 0;
            message = "Already clicked that once...GAME OVER!"

            for (let i = 0 ; i < images.length ; i++){
                images[i].clicked = false;
            }

            this.setState({ message });
            this.setState({ score });
            this.setState({ images });

        } else if (score < 11) {
            clickedImage[0].clicked = true;
            score++;
            message = "First time clicking that one...Keep Clicking!";

            if (score > highScore){
                highScore = score;
                this.setState({ highScore });
            }

            images.sort(function(a, b){return 0.5 - Math.random()});

            this.setState({ images });
            this.setState({ score });
            this.setState({ message });
        } else {

            clickedImage[0].clicked = true;
            score = 0;
            message = "Awesome! You clicked them all! Bet you cant do it again!";
            highScore = 12;
            this.setState({ highScore });

            for (let i = 0 ; i < images.length ; i++){
                images[i].clicked = false;
            }

            images.sort(function(a, b){return 0.5 - Math.random()});

            this.setState({ images });
            this.setState({ score });
            this.setState({ message });

        }
    };

    render() {
        return (
          <div className= "App">
            <Header />
            <div className= "container-fluid">
              <div className="row">
                <div className="col-sm-6 text-left">
                  <h3 className="bodyCopy">
                  {this.state.message}
                  </h3>
                </div>
                <div className="col-sm-6 text-right">
                  <h3 className="bodyCopy">
                    Score: {this.state.score} | High Score: {this.state.highScore}
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 text-center">
                  {this.state.images.map(image => (
                    <ImgCard
                      setClicked={ this.setClicked }
                      id={ image.id }
                      key={ image.id }
                      image={ image.image }
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        );
    }
}

export default App;
