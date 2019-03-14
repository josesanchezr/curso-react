import React from 'react'
import {Button, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {increaseLikes} from '../../actions/character'
import { Link } from 'react-router-dom'
 
class StatePage extends React.Component {
    state = {
        
    }

    render() {
        return (
            <Segment>
                <h1>Local State</h1>
                <Button onClick={this.props.increaseLikes}
                    color="red"
                    content="Like"
                    icon="heart"
                    label={{basic: true, color: 'red', pointing: 'left', content: this.props.likes}} />
                <br/>
                <Link to="/">go to Dashboard</Link>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => ({
    likes: state.character.likes
})

export default connect(mapStateToProps, {increaseLikes})(StatePage)