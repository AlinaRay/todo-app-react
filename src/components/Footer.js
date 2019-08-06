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
    render() {
        const {done, size, onFilterChange} = this.props;

        return (
            <footer className="footer">
            <span className="todo-count">
                <strong>{size()}</strong>
                <span>&nbsp;</span>
                <span>items&nbsp;</span>
                <span>left</span>
            </span>
                <ul className="filters">
                    {this.buttons.map(({id, name, label}) => {
                        return (
                            <li key={id}>
                                <a
                                    href={`#/${name}`}
                                    onClick={() => onFilterChange(name)}>{label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                { done() ?
                    (
                        <button
                            className="clear-completed"
                            onClick={() => this.props.deleteAll()}>
                            Clear completed
                        </button>
                    ) : (
                        ' '
                    )
                }
            </footer>
        )
    }
}
