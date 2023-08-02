import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelaration = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState({count: count + 10})
    }
  }

  onBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({count: count - 10})
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-decor"
        />
        <h1 className="mph">Speed is {count}mph</h1>
        <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btns-decor">
          <button className="ace" onClick={this.onAccelaration} type="button">
            Accelerate
          </button>
          <button className="break" onClick={this.onBreak} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
