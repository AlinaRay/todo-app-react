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
    render () {
        return (
            <header className="header">
                <h1>Todo app</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="new-todo"
                        onChange={this.onChange}
                        value={this.state.text}
                        type="text"
                        placeholder="What needs to be done?"/>
                </form>
            </header>
        )
    }
}
