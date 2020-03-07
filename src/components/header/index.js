import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Dropdown from 'react-bootstrap/Dropdown'
import history from '../../services/history'

export default function header() {
    return (
        <Container>
            <Content>
                <nav>
                    {/* <Link to="/"> */}
                        <img data-testid="img" src="https://www.userlogos.org/files/logos/danger83/marvel.png" alt="Icone Massa"></img>
                    {/* </Link> */}
                </nav>

                <aside data-testid="side">
                    <Dropdown>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            <MoreHorizIcon/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => history.replace('my-heros')}>Meus herois</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NotificationsNoneIcon />
                </aside>
            </Content>
        </Container>
    )
}
