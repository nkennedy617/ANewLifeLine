import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "../style/calendar.style.css";
import  "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from './gcal.js'


const localizer = momentLocalizer(moment)

class MyCalendar extends Component {
    state = {
        events: [ ]
    };

    componentDidMount () {
        getEvents((events) => {
            this.setState({events})
        })
    }

    render() {
        return (
            <div className="App">
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    style={{ height: "100vh" }}
                />
            </div>
        );
    }
}

export default MyCalendar;
