import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  happyButton = () => this.setState({isTrue: true})

  feedbackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.happyButton}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br />
                <span className="name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <h1 className="thank-you">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isTrue} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          {isTrue ? this.thankYouScreen() : this.feedbackScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
