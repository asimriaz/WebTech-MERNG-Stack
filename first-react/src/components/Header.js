import { Body } from "./Body"
import React, { Component } from 'react'
import Logo from "./Logo"

class Header extends Component {
    render(props) {
        return (
            <div>
                <header className="App-header">
                    <Logo />
                    <h3>{this.props.message}</h3>
                </header>
                <Body number={5} arr={[1, 2]} />
            </div>
        )
    }
}

export default Header