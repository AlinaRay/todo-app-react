import React from 'react';
import Item from './Item';
import cashedFilteredTodos from '../helpers/helperFilteredTodos';

const getFilteredTodos = (data, filter) => {
    switch (filter) {
        case 'active':
            return data.filter(item => !item.done);
        case 'done':
            return data.filter(item => item.done);
        default:
            return data;
    }
};

const getCashedFilteredTodos = cashedFilteredTodos(getFilteredTodos);

export default class Main extends React.Component {
    render() {
        const {items, filter, editTodoItem, onDeleted, onChecked, checkAll} = this.props;
        const visibleItems = getCashedFilteredTodos([...items], filter);
        return (
            <main className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    onClick={checkAll}
                />
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {
                        visibleItems.map((item) => {
                            return <Item key={item.id}
                                         item={item}
                                         editTodoItem={editTodoItem}
                                         deleteItem = {onDeleted}
                                         onChecked = {onChecked}/>
                        })
                    }
                </ul>
            </main>
        )
    }
}
