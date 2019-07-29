import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: [],
            filter: 'all',
            flag: false,
            counter: 1
        };
    }
    createTodoItem = (text) => {
        return {
            text,
            done: false,
            id: Date.now()
        }
    };
    addItem = (newTodo) => {
        if (newTodo === '') {
            return;
        }
        this.setState((prevState) => ({
            todoData: [...prevState.todoData, this.createTodoItem(newTodo)]
        }));
    };
    findElement = (todoData, id) => {
        return todoData.findIndex((el) => el.id === id);
    };

    onChecked = (id) => {
        this.setState(({todoData}) => {
            const copy = [...todoData];
            const index = this.findElement(copy, id);
            copy[index] = {
                ...copy[index],
                done: !copy[index].done
            };
            return {
                todoData: copy
            }
        })
    };
    checkAll = () => {
        this.setState((prevState) => {
            const elements = [...prevState.todoData];
            elements.forEach(el => {
                el.done = !prevState.flag;
            });
            return {
                todoData: elements,
                flag: !prevState.flag
            };
        })
    };
    deleteAll = () => {
        this.setState(({todoData}) => {
            const arr = todoData.filter(el => !el.done);
            return {
                todoData: arr
            }
        });
    };
    deleteItem = (id) => {
        const newItems = this.state.todoData.filter((item) => item.id !== id);
        this.setState({ todoData: newItems })
    };
    getActiveCount = () => {
        return this.state.todoData.filter(el => !el.done).length;
    };
    filterBy = (filterBy) => {
        switch (filterBy) {
            case 'active':
                return this.state.todoData.filter(item => !item.done);
            case 'done':
                return this.state.todoData.filter(item => item.done);
            default:
                return this.state.todoData;
        }
    };
    onFilterChange = (filter) => {
        this.setState({filter});
    };
    showDone = () => {
        return this.state.todoData.some(el => el.done);
    };
    editTodoItem = (id, text) => {
        this.setState(prevState => {
            return {
                todoData: prevState.todoData.map(todo => {
                    return todo.id !== id
                    ? todo
                    : {...todo, text};
                })
            }
        })
    };
    render() {
        const {filter} = this.state;
        const visibleItems = this.filterBy(filter);
        return (
            <div className="todoapp">
                <Header addItem={(text) => this.addItem(text)}/>
                <Main items={visibleItems}
                      onDeleted={(id) => this.deleteItem(id)}
                      onChecked={(id) => this.onChecked(id)}
                      checkAll={this.checkAll}
                      editTodoItem={this.editTodoItem}
                />
                <Footer filter={filter}
                        onFilterChange={this.onFilterChange}
                        deleteAll={this.deleteAll}
                        done={this.showDone()}
                        size={this.getActiveCount()}/>
            </div>
        );
    }
}
