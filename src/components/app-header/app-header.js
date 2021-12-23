import React, {Component} from "react";


export default class AppHeader extends Component {

    render() {

        return (
        <>
            <header className="header">
                <p><i id="logo" className="fas fa-edit"></i>Ежедневник</p>
                <i onClick={() => this.props.onForm()} id="form-open" className="fas fa-bars"></i>
            </header>
        </>
        )
    }
}