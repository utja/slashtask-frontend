import React, { Component } from 'react'
import Task from '../components/Task'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import { compose } from 'redux'


class TaskList extends Component {


  mappedTasks = () => {
    // console.log('non-slashed tasks: ', this.props.tasks.filter((task) => task.slashed === false))

    return this.props.tasks.map((task) => <Task task={task}
      key={task.id}
      handleEditTask={this.props.handleEditTask}
      handleSlashTask={this.props.handleSlashTask}
      handleDeleteTask={this.props.handleDeleteTask} />
    )
  }

  render () {
    console.log("TaskList props", this.props)
    console.log("props user", this.props.user)
    console.log("props tasks", this.props.tasks)
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Task Title</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Task Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Date Posted</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Update Task</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Slash Task</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Delete Task</h3>
            </th>
          </tr>

          {this.mappedTasks()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside TaskList
  console.log("app state", state)
  console.log("this.props are: ", this.props)

return {
    currentUser: state.users.currentUser,

    tasks: state.tasks.tasks
    .filter((task) => task.task_list_id === state.users.currentUser.task_lists[0].id)
    .filter((task) => task.slashed === false)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    // .sort to sort by newest task created instead of ID by default
  }
}
// }


export default withAuth(connect(mapStateToProps)(TaskList))
