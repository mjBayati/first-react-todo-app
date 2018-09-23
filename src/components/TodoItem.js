import React from 'react';


export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          todo: props.todo
        }


    }

    handleClick (id){
      this.props.toggleDone(this.props.todo.id);
    }

    render() {
        return (
            <div className='todo-item'>
                <p  onClick={this.handleClick.bind(this)}>
                    <span className='name'> {this.props.todo.name}
                    </span>{' '}

                    <span className='priority'> {this.props.todo.priority}
                    </span>{' '}

                    <span className='status'> {this.props.todo.done ? 'Done':''}
                    </span>
                </p>
            </div>
        )
    }
}
