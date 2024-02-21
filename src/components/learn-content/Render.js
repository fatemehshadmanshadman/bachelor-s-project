import React from 'react';
import tw from "twin.macro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container as ContainerBase} from 'components/misc/Layouts';
import ContentRender from './ContentRender';

const Container =tw(ContainerBase)` mb--10 mt-0 `;

const Render = () => {
    return (
        <Container id="render">
          <Router>
            <Switch>
            <Route path="/components/:type/:name"><ContentRender/></Route>         
            </Switch>
          </Router>   
      </Container>
      );
}
export default Render;