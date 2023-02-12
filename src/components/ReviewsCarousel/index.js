// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexOfReview: 0}

  getPreviousReview = () => {
    const {indexOfReview} = this.state
    if (indexOfReview !== 0) {
      this.setState(prevState => ({
        indexOfReview: prevState.indexOfReview - 1,
      }))
    }
  }

  getLatestReview = () => {
    const {indexOfReview} = this.state
    if (indexOfReview < 3) {
      this.setState(prevState => ({
        indexOfReview: prevState.indexOfReview + 1,
      }))
    }
  }

  renderReviewDetails = activeReview => {
    const {imgUrl, username, companyName, description} = activeReview
    return (
      <div className="user-details">
        <img src={imgUrl} alt={username} />
        <p className="name"> {username} </p>
        <p className="company-name"> {companyName} </p>
        <p className="description"> {description} </p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {indexOfReview} = this.state
    const activeReview = reviewsList[indexOfReview]

    return (
      <div className="bg-container">
        <h1 className="heading"> Reviews </h1>

        <div className="name-container">
          <button
            onClick={this.getPreviousReview}
            type="button"
            className="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="left-arrow"
              alt="left arrow"
            />
          </button>

          {this.renderReviewDetails(activeReview)}
          <button
            onClick={this.getLatestReview}
            type="button"
            className="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="right-arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
