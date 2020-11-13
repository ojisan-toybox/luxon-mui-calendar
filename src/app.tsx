import * as React from "react";
import LuxonUtils from "@date-io/luxon"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export const App = () => {
  const [selectedDate, handleDateChange] = React.useState(new Date());

  return (
    <div>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <TimePicker value={selectedDate} onChange={handleDateChange} />
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};
