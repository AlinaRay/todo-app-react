import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        })
    };
    onKey = (e) => {
        if (e.key === 'Enter') {
            this.onSubmit(e);
        }
    };
    render () {
        return (
            <header className="header">
                <h1>Todo app</h1>
                    <input
                        className="new-todo"
                        onChange={ this.onChange}
                        value={this.state.text}
                        type="text"
                        onKeyDown={this.onKey}
                        placeholder="What needs to be done?"/>
            </header>
        )
    }
}
