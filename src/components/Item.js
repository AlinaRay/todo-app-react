import React from 'react';

export default class Item extends React.Component {
    state = {
        isEdited: false,
        currentText: this.props.text
    };
    editText = (id, text) => {
        this.setState(() => {
            return {
                currentText: text
            }
        })
    };
    toggleEditMode = () => {
        this.setState(prevState => {
            return {
                isEdited: !prevState.isEdited
            }
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.editTodoItem(this.props.id, this.state.currentText);
        this.toggleEditMode();
    };

    render() {
        const {onChecked, deleteItem, id, done, text} = this.props;
        return (
            <li key={id}>
                {
                    this.state.isEdited ? (
                        <div className="view">
                            <form onSubmit={(e) => this.onSubmit(e)}>
                                <input
                                    className="new-todo edit-mode"
                                    type="text"
                                    value={this.state.currentText}
                                    onChange={(e) => this.editText(id, e.target.value)}
                                />
                            </form>
                        </div>
                    ) : (
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                onChange={() => onChecked(id)}
                                checked={done}
                            />
                            <label onClick={() => this.toggleEditMode()}>
                                {text}
                            </label>
                            <button
                                className="destroy"
                                onClick={() => deleteItem(id)}>
                            </button>
                        </div>
                    )
                }
            </li>
        )
    }
}