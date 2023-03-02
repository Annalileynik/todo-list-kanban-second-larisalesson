import React from 'react';
import Tasks from "./Tasks";
import 'bootstrap/dist/css/bootstrap.min.css'
const Colum = (props) => {

    return (
        <div className=" col-sm-6 col-md-3"><hr/>
            <span>  <h4 className="card-title" style={{backgroundColor:'red', height:"50px"}}>{props.status.title}
                <button type="button" style={{border:"2px double blue", float:'right'}}  className="btn btn-light me-md-2"><i className="arrow left"></i> ... </button></h4>
            </span><hr/>
            {props.tasks.filter(task=>
                task.status===props.status.title)
                .map(task=>
                    <Tasks
                        key={task._id} card={task}
                        setTasks={props.setTasks}
                        onDeleteTask={props.onDeleteTask}

                    />)}
        </div>
    );
};
export default Colum;

