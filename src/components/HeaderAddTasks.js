import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const HeaderAddTasks = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="input-group mb-3 d-flex justify-content-between" onClick={handleShow}>
                Create New Task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Control
                        style={{ margin: "5px", border: "1px solid black" }}
                        type="text"
                        id="name"
                        aria-describedby="name"
                        placeholder="Title"
                        onChange={(event) => props.setNewTasks(event.target.value)}
                    />
                    <Form.Control
                        style={{ margin: "5px", border: "1px solid black"  }}
                        type="text"
                        id="description"
                        aria-describedby="description"
                        placeholder="Description"
                        onChange={(event) => props.setNewDescription(event.target.value)}
                    />
                    <Form.Select
                        style={{ margin: "5px", border: "1px solid black"  }}
                        aria-label="Statuses"
                        onChange={(event) => props.setNewPriority(event.target.value)}
                    >
                        {props.priorities.map((priority) => (
                            <option key={priority} value={priority}>
                                {priority}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Select
                        style={{ margin: "5px", border: "1px solid black"  }}
                        aria-label="Statuses"
                        onChange={(event) => props.setNewStatus(event.target.value)}
                    >
                        {props.statuses.map((status) => (
                            <option key={status.id}>{status.title}</option>
                        ))}
                    </Form.Select>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={props.newTaskSubmit}>
                        Add task
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default HeaderAddTasks;