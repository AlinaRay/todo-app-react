import React from 'react';

export default class Footer extends React.Component {
    buttons = [
        {id: 0, name: 'all', label: 'All'},
        {id: 1, name: 'active', label: 'Active'},
        {id: 2, name: 'done', label: 'Done'}
    ];
    renderClearCompleted = () => {
        return (
            <button
                className="clear-completed"
                onClick={() => this.props.deleteAll()}>
                Clear completed
            </button>
        )
    };
    renderButtons = () => {
        return (
            this.buttons.map(({id, name, label}) => {
                return (
                    <li key={id}>
                        <a
                            href={`#/${name}`}
                            key={name}
                            onClick={() => this.props.onFilterChange(name)}>{label}
                        </a>
                    </li>
                );
            })
        )
    };
    render() {
        const {done} = this.props;
        let clearCompleted;
        if (done) {
            clearCompleted = this.renderClearCompleted();
        } else {
            clearCompleted = null;
        }
        const buttons = this.renderButtons();
        return (
            <footer className="footer">
            <span className="todo-count">
                <strong>{this.props.size}</strong>
                <span>&nbsp;</span>
                <span>items&nbsp;</span>
                <span>left</span>
            </span>
                <ul className="filters">
                    {buttons}
                </ul>
                {clearCompleted}
            </footer>
        )
    }
}
