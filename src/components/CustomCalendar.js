import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomCalendar = ({ startDateProp, endDateProp, onStartDateChange, onEndDateChange }) => {
    const [startDate, setStartDate] = useState(startDateProp);
    const [endDate, setEndDate] = useState(endDateProp);
    const [open, setOpen] = useState(false);

    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onStartDateChange(start);
        onEndDateChange(end);
    };

    return (
        <div>
            <button onClick={() => setOpen(!open)}>
                {startDate && endDate ? `${startDate.toISOString().slice(0, 10)} - ${endDate.toISOString().slice(0, 10)}` : 'Select Date Range'}
            </button>
            {open && (
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                        popperPlacement="bottom"
                    />
                </div>
            )}
        </div>
    );
};

export default CustomCalendar;
