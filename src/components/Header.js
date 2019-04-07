import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { fixedMenuStyle, menuStyle } from '../helpers/styleHelper';
import { Visibility, Menu, Image, Container } from 'semantic-ui-react';

export default class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    }

    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: null })

    render() {
        const { menuFixed } = this.state

        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item as={Link} exact="true" to="/">
                                <Image size='mini' src='/logo.png' />
                                <Menu.Item header>Movieapp</Menu.Item>
                            </Menu.Item>
                            <Menu.Item as={NavLink} to="/movies" exact>Movies</Menu.Item>
                            <Menu.Item as={NavLink} to="/movies/new">Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        )
    }
}

