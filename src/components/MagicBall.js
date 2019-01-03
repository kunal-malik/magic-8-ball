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
   * Gets advice from the api and handles the response
   * @memberof MagicBall
   */
  getAdvice() {
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
  }

  /**
   * Show spinner initially while loading the ball to include some animation
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
      <div className="magic-ball-container">
        <div className="ball">
          <div className={`ball-answer-container ${showError ? `error` : null}`} onClick={() => this.setState({ loading: true }, () => this.getAdvice())}>
            {loading ? <Loader />
              :
              <div className="advice">{advice}</div>
            }
          </div>
        </div>
      </div>
    );
  }

}

export default MagicBall;