import {Container} from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { TournamentsGrid } from './components/Tournaments';
import { FixtureGrid } from './components/Fixture';
import { Table } from './components/Table';
import { APP_ROUTES } from './config';

function App() {
  return (
      <Container maxWidth='md' >
        <Switch>
            <Route exact path={APP_ROUTES.HOME} component={TournamentsGrid} />
            <Route path={`${APP_ROUTES.FIXTURE}/:id`} component={FixtureGrid} />
            <Route path={`${APP_ROUTES.TABLE}/:id`} component={Table} />
        </Switch>
      </Container>
  );
}

export default App;
