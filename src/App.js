import {Container} from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { TournamentsGrid } from './components/Tournaments';

function App() {
  return (
      <Container maxWidth='md' >
        <Switch>
            <Route exact path='/' component={TournamentsGrid} />
        </Switch>
      </Container>
  );
}

export default App;
