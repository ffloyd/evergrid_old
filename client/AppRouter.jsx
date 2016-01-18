const { Router, Route, IndexRoute } = ReactRouter;

const appHistory = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

const AppRouter = (
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="my_profile"  component={MyProfile}/>
      <Route path="projects"    component={ProjectsPage}/>
      <Route path="datasets"    component={DatasetsPage}/>
      <Route path="datacenters" component={DatacentersPage}/>
    </Route>
  </Router>
);

Meteor.startup(function() {
  ReactDOM.render(AppRouter, document.getElementById('render-target'));
});
