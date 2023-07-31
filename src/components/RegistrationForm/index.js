import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    formSubmitted: false,
    isFirstNameBlurred: true,
    isLastNameBlurred: true,
    firstName: '',
    lastName: '',
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        formSubmitted: true,
      })
    } else if (firstName === '' && lastName === '') {
      this.setState({isFirstNameBlurred: false, isLastNameBlurred: false})
    } else if (firstName === '') {
      this.setState({isFirstNameBlurred: false})
    } else if (lastName === '') {
      this.setState({isLastNameBlurred: false})
    }
  }

  anotherResponse = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({formSubmitted: false, firstName: '', lastName: ''})
    }
  }

  onChangeFirstName = event => {
    const firstNameValue = event.target.value
    this.setState({firstName: firstNameValue})
    if (firstNameValue !== '') {
      this.setState({isFirstNameBlurred: true})
    } else {
      this.setState({isFirstNameBlurred: false})
    }
  }

  handleBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({isFirstNameBlurred: false})
    }
  }

  handleBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({isLastNameBlurred: false})
    }
  }

  onChangeLastName = event => {
    const lastNameValue = event.target.value
    this.setState({lastName: lastNameValue})
    if (lastNameValue === '') {
      this.setState({isLastNameBlurred: false})
    } else {
      this.setState({isLastNameBlurred: true})
    }
  }

  renderFrom = () => {
    const {
      isFirstNameBlurred,
      isLastNameBlurred,
      firstName,
      lastName,
    } = this.state

    const firstNameColor = isFirstNameBlurred ? 'black' : 'red'
    const lastNameColor = isLastNameBlurred ? 'black' : 'red'

    return (
      <form className="from-container" onSubmit={this.submitForm}>
        <div className="input-container">
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            className={`input-text ${firstNameColor}`}
            type="text"
            id="firstName"
            placeholder="First name"
            onChange={this.onChangeFirstName}
            onBlur={this.handleBlurFirstName}
            value={firstName}
          />
          {isFirstNameBlurred ? '' : <p className="required-text">Required</p>}
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            className={`input-text ${lastNameColor}`}
            type="text"
            id="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.handleBlurLastName}
          />
          {isLastNameBlurred ? '' : <p className="required-text">Required</p>}

          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderFormSubmitted = () => (
    <div className="from-container">
      <img
        className="success-image"
        alt="success"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="submitted-text">Submitted Successfully</p>
      <button
        className="submit-button-response"
        type="button"
        onClick={this.anotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {formSubmitted} = this.state

    return (
      <div className="registration-app-container">
        <h1 className="heading">Registration</h1>
        <div className="bg-container">
          {formSubmitted ? this.renderFormSubmitted() : this.renderFrom()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
