import React, {useState} from 'react';
import WeekCalendar from './week-calendar-component';
import TodosList from './todo-list-component';

function CalendarPage () {
    let [selectedDay, setSelectedDay] = useState({
        date: new Date(),
        day: new Date().getDay()
    });
    return(
        <div>
            <WeekCalendar selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            <TodosList selectedDay={selectedDay} filter={true}/>
        </div>
    );
}
export default CalendarPage;