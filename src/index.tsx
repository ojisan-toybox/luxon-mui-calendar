import * as React from "react";
import * as ReactDOM from "react-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

import { App } from "./app";

const Root = () => {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <App />
    </MuiPickersUtilsProvider>
  );
};

ReactDOM.render(<Root></Root>, document.getElementById("root"));
