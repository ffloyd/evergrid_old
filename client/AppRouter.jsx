const { Router, Route, IndexRoute } = ReactRouter;

const appHistory = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

const AppRouter = (
  <Router history={appHistory}>
    <Route path="/" component={Evergrid}>
      <IndexRoute component={Home}/>
      <Route path="my_profile" component={MyProfile}/>
      <Route path="projects" component={ProjectsPage}/>
      <Route path="datasets">
        <IndexRoute component={DatasetsList}/>
        <Route path="new" component={NewDataset}/>
      </Route>
      <Route path="datacenters" component={DatacentersPage}/>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(AppRouter, document.getElementById('render-target'));
});
