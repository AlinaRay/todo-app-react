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

    onChecked = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.map((item) => item.id === id ? { ...item, done: !item.done } : item )
            }
        })
    };
    checkAll = () => {
        this.setState(({todoData, flag}) => {
            return {
                todoData: todoData.map((item) => item.done === flag ? { ...item, done: !item.done } : item ),
                flag: !flag
            }
        })
    };
    deleteAll = () => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter(el => !el.done)
            }
        });
    };
    deleteItem = (id) => {
        this.setState((prevState) => ({ todoData: prevState.todoData.filter((item) => item.id !== id) }))
    };
    getActiveCount = () => {
        return this.state.todoData.filter(el => !el.done).length;
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
        const {filter, todoData} = this.state;
        return (
            <div className="todoapp">
                <Header addItem={(text) => this.addItem(text)}/>
                <CachedVisibleItems items={todoData}
                      filter={filter}
                      onDeleted={this.deleteItem}
                      onChecked ={this.onChecked}
                      checkAll={this.checkAll}
                      editTodoItem={this.editTodoItem}
                />
                <Footer filter={filter}
                        onFilterChange={this.onFilterChange}
                        deleteAll={this.deleteAll}
                        done={this.showDone}
                        size={this.getActiveCount} />
            </div>
        );
    }
}
const CachedVisibleItems = React.memo(Main);