import React, { useState } from "react";
import Calendar from "react-calendar";
import Myclock from "../MyClock/Myclock";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const MyCalender = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = () => {};

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold mt-10 mb-10">Time & Calendar</h1>
        <Myclock></Myclock>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker orientation="landscape" />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default MyCalender;
