import React from 'react';
import Item from './Item';

export default class Main extends React.Component {
    render() {
        let data = this.props.items;
        let elements = data.map((item) => {
            return <Item key={item.id}
                         done = {item.done}
                         id = {item.id}
                         text = {item.text}
                         deleteItem = {this.props.onDeleted}
                         onChecked = {this.props.onChecked}/>
        });
        return (
            <main className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    onClick={() => this.props.checkAll()}
                />
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {elements}
                </ul>
            </main>
        )
    }
}
