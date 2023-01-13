import { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '', id: uniqid() },
      tasks: [],
    };
  }
  render(){
    const { task, tasks } = this.state;
    return(
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            type="text" 
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    if(this.state.task.text.trim().length > 0){
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: { text: '', id: uniqid() },
      });
    } else {console.log("here")}
  };
}

export default App;
