import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "../style/calendar.style.css";
import  "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from './gcal.js'


const localizer = momentLocalizer(moment)

class MyCalendar extends Component {
    state = {
        events: [
            {
                start: new Date(),
                end: new Date(moment().add(1, "days")),
                title: "A New Life Line Event"
            }
        ]
    };


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
