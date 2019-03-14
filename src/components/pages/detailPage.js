import React from 'react'
import {Link} from 'react-router-dom'

class Detail extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to="/">go back to Dashboard</Link>
            </div>
        )
    }
}

export default Detail