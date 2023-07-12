import React from 'react'
import { connect } from 'react-redux'

import Calendar from './Calendar/Calendar'

const WeekTask = (props) => {

    const renderCalender = () => {
        return (
            props.Tasks.map((task) => {
                return <Calendar props={task} key={task.id} />
            })
        );
    }

    return (
        <>
            {renderCalender()}
        </>
    )
}

const mapStateToProps = (state) => {
    return { Tasks: state.Tasks }
}

export default connect(mapStateToProps)(WeekTask);