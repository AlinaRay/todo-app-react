import React from 'react';
import Item from './Item';

const filterBy = (data, filter) => {
    switch (filter) {
        case 'active':
            return data.filter(item => !item.done);
        case 'done':
            return data.filter(item => item.done);
        default:
            return data;
    }
};

export default class Main extends React.Component {
    render() {
        const visibleItems= filterBy(this.props.items, this.props.filter);
        const elements = visibleItems.map((item) => {
            return <Item key={item.id}
                         done = {item.done}
                         id = {item.id}
                         text = {item.text}
                         editTodoItem={this.props.editTodoItem}
                         deleteItem = {this.props.onDeleted}
                         onChecked = {this.props.onChecked}/>
        });
        return (
            <main className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    onClick={this.props.checkAll}
                />
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {elements}
                </ul>
            </main>
        )
    }
}
