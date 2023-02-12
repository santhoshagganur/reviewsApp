// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexOfReview: 1}

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
    const {imageUrl, username, companyName, description} = activeReview
    return (
      <div className="user-details">
        <img src={imageUrl} alt={username} />
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
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            className="left-arrow"
            alt="left-arrow"
            onClick={this.getPreviousReview}
          />
          {this.renderReviewDetails(activeReview)}
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            className="right-arrow"
            alt="right-arrow"
            onClick={this.getLatestReview}
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
