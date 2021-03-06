import React, { Component } from 'react';
//Components
import Loader from './Loader';
//Libraries
import axios from 'axios'

import Constants from '../constants';

/**
 * Renders the ball on screen and interacts with the api
 * @class MagicBall
 * @extends {Component}
 */
class MagicBall extends Component {

  constructor(props) {
    super(props);
    this.getAdvice = this.getAdvice.bind(this);
    this.state = {
      advice: Constants.BALL_INITIAL_TEXT,
      loading: true,
      showError: false
    }
  }

  /**
   * Gets advice from the api and handles the response. Calls the api after a delay to show the animation effect/loading icon to the user
   * @memberof MagicBall
   */
  getAdvice() {
    setTimeout(() => {
      axios.get('/api/magic8ball/v1/advice/')
      .then(response => {
        this.setState({
          advice: response.data,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          showError: true,
          advice: Constants.ERROR_API_ADVICE,
          loading: false
        })
        console.error(error);
      })
    },1500)
  }

  /**
   * Show loading icon initially while initializing the ball
   * @memberof MagicBall
   */
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);

  }

  render() {
    const { advice, loading, showError } = this.state;
    return (
      <div className="magic-ball-container" id="magic-ball-container">
        <div className="ball">
          <div id="ball-answer-container" className={`ball-answer-container ${showError ? `error` : null}`} onClick={() => this.setState({ loading: true }, () => this.getAdvice())}>
            {loading ? <Loader />
              :
              <div className="advice" id="advice">{advice}</div>
            }
          </div>
        </div>
      </div>
    );
  }

}

export default MagicBall;