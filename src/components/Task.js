import React from 'react'
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../actions';
import { useDispatch } from 'react-redux';


const Task = (props) => {

    const dispatch = useDispatch();

    const updateProcess = (value, id) => {
        dispatch(updateTask(value, id));
    }

    const removeTask = (id) => {
        dispatch(deleteTask(id));
    }

    const renderTask = () => {
        return (props.Tasks.map((task) => {
            return (
                <div className="ui card container" key={task.id}>
                    <div className="content">
                        <div className='right floated'>
                            <select className="ui dropdown" defaultValue={task.status} onChange={(e) => { updateProcess(e.target.value, task.id) }}>
                                <option value='P'>Pending</option>
                                <option value='C'>Completed</option>
                                <option value='I'>Incomplete</option>
                            </select>
                            <i className='delete icon red large' onClick={() => { removeTask(task.id) }}></i>
                        </div>
                        <div className="header">
                            {task.name}
                        </div>
                        <div className="meta">
                            {task.time}
                        </div>
                    </div>
                </div>
            )
        }));
    }

    return (
        <>
            {renderTask()}
        </>
    )
}

const mapStateToProps = (state) => {
    return { Tasks: state.Tasks }
}

export default connect(mapStateToProps)(Task);