import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Colum from "./components/Colum";
import HeaderAddTasks from "./components/HeaderAddTasks"

function App() {
const priorities = [1,2,3,4,5,6,7,8,9,10]

    const [statuses, setStatuses] = useState([])
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newPriority, setNewPriority] = useState(1)
    const [newStatus, setNewStatus] = useState('')
console.log(newPriority)
    const getStatuses = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then((res) => {
                // handle success
                setStatuses(res.data);
            })
            .catch((err) => {
                // handle error
                alert('trouble');
            })
    }
    useEffect(() => {
        getStatuses()
    }, [])

//     const updateTask = (id) => {
// const newStatus={status:"todo"}
//        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`,
//            newStatus).then((res)=>{
//                console.log(res)
//        })
//            .catch((err)=>{
//                alert('server kaput')
//            })
//     } //need to change statuses tasks in server

    const getTasks = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then((res) => {
                // handle success
                setTasks(res.data);
            })
            .catch((err) => {
                // handle error
                alert('trouble');
            })
    }

    useEffect(() => {
        getTasks()
    }, [])

    const onDeleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then((res) => {
                getTasks()
            })
            .catch((err) => {
                alert('server kaput')
            })
    }

    const newTaskSubmit = () => {
        axios.post(`https://expressjs-server.vercel.app/tasks`,
            {
                name: newTasks,
                status: newStatus,
                description: newDescription,
                priority: newPriority
            })
            .then((res) => {
                getTasks()
            })
            .catch((err) => {
                alert('server go away')
            })
    }

    return (
        <div className="App">
            <h1>Kanban board</h1>
            <hr/>
            <HeaderAddTasks
                setNewTasks={setNewTasks}
                newTaskSubmit={newTaskSubmit}
                newTasks={newTasks}
                newDescription={newDescription}
                setNewDescription={setNewDescription}
                newPriority={newPriority}
                setNewPriority={setNewPriority}
                newStatus={newStatus}
                setNewStatus={setNewStatus}
                statuses={statuses}
                tasks={tasks}
                priorities={priorities}
            />
            {/*<button onClick={()=>updateTask("63dd9cf579ea0dc9396aeda9")}>update</button>*/}
            <div className="container">
                <div className="row align-items-start">
                    {statuses.map((status) =>
                        <Colum status={status} key={status._id}
                               tasks={tasks}
                               setTasks={setTasks}
                               onDeleteTask={onDeleteTask}
                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default App;
