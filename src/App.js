import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LinearProgress } from "@mui/material";

import Track from "./views/Tracks/Tracks";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route exact path="/tracks" name="Tracks" component={Track} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
