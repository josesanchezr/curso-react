import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {Dimmer, Loader} from 'semantic-ui-react'
import {increaseLikes, decreaseLikes, restartLikes, fetchCharacterSaga} from '../../actions/character'
import List from '../common/list'

class Dashboard extends React.Component {
    state = {}

    componentDidMount() {
        this.props.fetchCharacterSaga()
    }

    render() {
        const {character} = this.props

        if (character.fetching) {
            return (
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
            )
        }

        return (
            <div>
                <h1>Dashboard likes {this.props.likes}</h1>
                <button onClick={this.props.increaseLikes}>like to this character</button>
                <br/>
                <button onClick={this.props.decreaseLikes}>decrease likes</button>
                <br/>
                <button onClick={this.props.restartLikes}>reset likes</button>
                <br/>
                <Link to="/detail">Detail Page</Link>
                <br/>
                <Link to="/state">State Page</Link>
                <br/>
                <Link to="/create">Create Page</Link>
                <br/>
                <h1>Characters list</h1>
                {character.characters.length?(<List characters={character.characters} />):(<h3>Empty list</h3>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    likes: state.character.likes,
    character: state.character
})

export default connect(mapStateToProps, {increaseLikes, decreaseLikes, restartLikes, fetchCharacterSaga})(Dashboard)