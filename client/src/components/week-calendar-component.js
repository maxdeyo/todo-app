import React, {useCallback} from 'react';

function WeekCalendar (props) {
    const onDayChange = ((newDay) => {
        let currDate = props.selectedDay.date;
        let currDay = currDate.getDay();
        let distance = newDay - currDay;
        currDate.setDate(currDate.getDate() + distance);

        props.setSelectedDay({
            day: newDay,
            date: currDate
        })
        console.log(props.selectedDay);
    });
    return(
        <div className='container p-3' style={{textAlign:'center', borderWidth:'10px', borderColor:'#ffffff'}}>
            <div className='row'>
                <div className={props.selectedDay.day===1 ? 'col border border-dark p-3 selected': 'col border border-dark p-3'} onClick={() => onDayChange(1)}>
                    Monday
                </div>
                <div className={props.selectedDay.day===2 ? 'col border border-dark p-3 selected': 'col border border-dark p-3'} onClick={() => onDayChange(2)}>
                    Tuesday
                </div>
                <div className={props.selectedDay.day===3 ? 'col border border-dark p-3 selected': 'col border border-dark p-3'} onClick={() => onDayChange(3)}>
                    Wednesday
                </div>
                <div className={props.selectedDay.day===4 ? 'col border border-dark p-3 selected': 'col border border-dark p-3'} onClick={() => onDayChange(4)}>
                    Thursday
                </div>
                <div className={props.selectedDay.day===5 ? 'col border border-dark p-3 selected': 'col border border-dark p-3'} onClick={() => onDayChange(5)}>
                    Friday
                </div>
                <div className={props.selectedDay.day===6 ? 'col border border-dark p-3 selected': 'col border border-dark p-3'} onClick={() => onDayChange(6)}>
                    Saturday
                </div>
                <div className={props.selectedDay.day===0 ? 'col border border-dark p-3 selected': 'col border border-dark p-3'} onClick={() => onDayChange(0)}>
                    Sunday
                </div>
            </div>
        </div>
    );
}
export default WeekCalendar;