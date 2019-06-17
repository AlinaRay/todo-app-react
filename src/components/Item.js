import React from 'react';

export default class Item extends React.Component{
    render(){
        return (
            <li key = {this.props.id}>
                <div className="view" >
                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={() => this.props.onChecked(this.props.id)}
                        defaultChecked={this.props.done}
                    />
                    <label>{this.props.text}</label>
                    <button
                        className="destroy"
                        onClick={() => this.props.deleteItem(this.props.id)}>
                    </button>
                </div>
                <input className="edit" />
            </li>
        )
    }
}