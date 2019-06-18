import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoData: [],
            filter: 'all'
        };

    }
    flag = true;
    counter = 1;

    createTodoItem(text) {
        return {
            text,
            done: false,
            id: this.counter++
        }
    }

    addItem = (newTodo) => {
        if (newTodo === '') {
            return;
        }
        this.setState(({todoData}) => {
                console.log(todoData);
                let arrTodoData = [...todoData, this.createTodoItem(newTodo)];
                return {todoData: arrTodoData}
            }
        )
    };
    findElement = (todoData, id) => {
        return todoData.findIndex((el) => el.id === id);
    };

    onChecked = (id) => {
        this.setState(({todoData}) => {
            const copy = [...todoData];
            const index = this.findElement(copy, id);
            let obj = copy[index];
            obj.done = !obj.done;
            return {
                todoData: copy
            }
        })
    };
    checkAll = () => {
        this.setState(({todoData}) => {
            const elements = [...todoData];
            elements.forEach(el => {
                el.done = this.flag;
            });
            this.flag = !this.flag;
            // console.log("check all");
            return {
                todoData: elements,
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
        console.log("APP on delete {}", id);
        this.setState(({todoData}) => {
            const index = this.findElement(todoData, id);
            const newArr = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];
            return {
                todoData: newArr
            }
        });
    };
    showActive = () => {
        return this.state.todoData.filter(el => !el.done).length;
    };
    filter = (items, filter) => {
        switch (filter) {
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    render() {
        // console.log("app render");
        const {filter} = this.state;
        const visibleItems = this.filter(this.state.todoData, filter);
        return (
            <div className="todoapp">
                <Header addItem={(text) => this.addItem(text)}/>
                <Main items={visibleItems}
                      onDeleted={(id) => this.deleteItem(id)}
                      onChecked={(id) => this.onChecked(id)}
                      checkAll={this.checkAll}
                />
                <Footer filter={filter}
                        onFilterChange={this.onFilterChange}
                        deleteAll={this.deleteAll}
                        size={this.showActive()}/>
            </div>
        );
    }
}
