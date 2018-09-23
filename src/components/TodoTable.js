import React from 'react';
import v4 from 'uuid';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';


export default class TodoTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            undoneOnly: false,
            todoList: []
        };

        this.toggleDone = this.toggleDone.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    toggleFilter() {
        this.setState(prevState => ({
            undoneOnly: !prevState.undoneOnly
        }));
    }

    toggleDone(id) {
      for (var i = 0; i < this.state.todoList.length; i++) {
        console.log(id.toString());
        if (this.state.todoList[i].id === id){
            var list = this.state.todoList;
            list[i].done = !list[i].done;
            this.setState( {
              todoList : list
          });
          break;
        }
      }
    }

    addTodo(name, priority) {
      let list = this.state.todoList;
      list.push({name: name, priority: priority,  done: false, id: v4()});
      let tempList = [];
      let tempList2 = [];
      let finalList = [];
      for (var i = 0; i < list.length; i++){
          if (list[i].priority === 'low'){
            tempList.push(list[i]);
          }
        }
      tempList.sort((a,b) => a.name.trim().toUpperCase() > b.name.trim().toUpperCase())

      for (let i = 0; i < list.length; i++){
          if (list[i].priority === 'high'){
            tempList2.push(list[i]);
          }
      }
      tempList2.sort((a,b) => a.name.trim().toUpperCase() > b.name.trim().toUpperCase());


      for (let i = 0; i < tempList2.length ; i++){
          finalList.push(tempList2[i]);
      }
      for (let i = 0; i < tempList.length ; i++){
          finalList.push(tempList[i]);
      }

      this.setState({
        todoList: finalList
      });
    }

    render() {
        return (
            <div className='todo-table'>
                <AddTodo addTodo={this.addTodo}/>
                <FilterTodo undoneOnly={this.state.undoneOnly} toggleFilter={this.toggleFilter}/>
                <TodoList todoList={this.state.todoList} toggleDone={this.toggleDone}
                          undoneOnly={this.state.undoneOnly}/>
            </div>
        )
    }
}
