import React from "react"
import './Clock.css'

export class Clock extends React.Component {
    state = {
        date: new Date()
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount = () => {
        this.timerId = setInterval(this.tick, 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div>Time is: {this.state.date.toLocaleTimeString()}</div>
        )
    }
}
