import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../Components/Navigation/Menu Toggle/MenuToggle'
import Drawer from '../../Components/Navigation/Drawer/Drawer'
import {connect} from 'react-redux'


class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandlser = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer 
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandlser}
                    isAuthenticated={this.props.isAuthenticated}
                />
                <MenuToggle 
                     onToggle={this.toggleMenuHandler}
                     isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)