import React from 'react';

export default class Footer extends React.Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];
    render() {
        const {onFilterChange} = this.props;
        let index = 0;
        const buttons = this.buttons.map(({name, label}) => {
            return (
                <li key={++index}>
                    <a
                        href={`#/${name}`}
                        key={name}
                        onClick={() => onFilterChange(name)}>{label}
                    </a>
                </li>
            );
        });
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
                <button
                    className="clear-completed"
                    onClick={() => this.props.deleteAll()}>
                    Clear completed
                </button>
            </footer>
        )
    }
}
