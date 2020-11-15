import * as React from "react";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export const App = () => {
  const [selectedDate, handleDateChange] = React.useState<
    MaterialUiPickersDate
  >(new Date() as any);

  return (
    <div>
      <DatePicker
        value={selectedDate}
        onChange={(date) => {
          handleDateChange(date);
        }}
        shouldDisableDate={(day: MaterialUiPickersDate) => {
          if (!day) throw new Error("");
          return day.weekday === 1 || day.weekday === 7;
        }}
      />
    </div>
  );
};
