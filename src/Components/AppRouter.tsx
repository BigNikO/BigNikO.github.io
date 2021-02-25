import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Articles from './Articles/Articles';
import NavigationMenu from './NavigationMenu/NavigationMenu';

export interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  const [isNavigating, setIsNavigating] = useState<boolean>(true);
  return (
    <Router>
      <NavigationMenu setIsNavigating={setIsNavigating} />
      <Switch>
        <Route exact path="/">
          {!isNavigating && <div>Home section is under construction</div>}
        </Route>
        <Route exact path="/about">
          {!isNavigating && <div>About section is under construction</div>}
        </Route>
        <Route exact path="/articles">
          {!isNavigating && <Articles />}
        </Route>
        <Route exact path="/technologies">
          {!isNavigating && (
            <div>Technologies section is under construction</div>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
