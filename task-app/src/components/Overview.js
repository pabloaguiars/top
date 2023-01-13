import { Component } from "react";

class Overview extends Component{
    render(){
        const { tasks } = this.props;
        return (
            <ul>
                {tasks.map((task) => {
                    console.log(task)
                    return <li key={task.id}>{task.text}</li>;
                })}
            </ul>
        );
    };
}

export default Overview;