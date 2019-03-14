import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Dimmer, Loader} from 'semantic-ui-react'
import {createCharacter} from '../../actions/character'
import {Form, Button, Message} from 'semantic-ui-react'

class NewCharacter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            character: {
                name: '',
                description: '',
                thumbnail: '',
            }
        }
        this.createCharacter = this.createCharacter.bind(this)
    }

    onChange = e => this.setState({
        character: {...this.state.character, [e.target.name]: e.target.value }
    })

    createCharacter() {
        this.props.createCharacter(this.state.character)
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
                <h1>Create character</h1>
                <Link to="/">back to Dashboard</Link>
                <br/>
                <br/>
                <Form onSubmit={this.createCharacter} className='attached fluid segment'>
                <Form.Field required>
                    <label>Name</label>
                    <input type="text" id="name" name="name" label='Name' placeholder='Name' 
                        required value={this.state.character.name} onChange={this.onChange} />
                </Form.Field>
                <Form.Field required>
                    <label>Description</label>
                    <input type="text" id="description" name="description" label='Description' 
                        placeholder='Description' required value={this.state.character.description} onChange={this.onChange} />
                </Form.Field>
                <Form.Field required>
                    <label>Thumbnail</label>
                    <input type="text" id="thumbnail" name="thumbnail" label='Thumbnail' 
                        placeholder='Thumbnail' required value={this.state.character.thumbnail} onChange={this.onChange} />
                </Form.Field>
                <Button primary type='submit'>Create character</Button>
                </Form>
                <InfoMessage createdCharacter={character.createdCharacter} />
            </div>
        )
    }
}

const InfoMessage = (props) => {
    if(props.createdCharacter != null) {

        return (
            <Message attached='bottom' info>
                Character was created.
            </Message>
        )
    } else {
        return null
    }
}

const mapStateToProps = (state) => ({
    character: state.character
})

export default connect(mapStateToProps, {createCharacter})(NewCharacter)