import React from 'react'
import {Image, Table} from 'semantic-ui-react'

const List = (props) => (
    <Table basic='very' celled collapsing>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Character</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Thumbnail</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>

            {props.characters.map(character => (
                <Table.Row>
                    <Table.Cell>{character.name}</Table.Cell>
                    <Table.Cell>{character.description}</Table.Cell>
                    <Table.Cell><Image src={character.thumbnail} rounded size='small' /></Table.Cell>
                </Table.Row>
            ))}

        </Table.Body>
    </Table>
)

export default List