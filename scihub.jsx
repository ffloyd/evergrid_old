if (Meteor.isClient) {
  Meteor.startup(() => {
    ReactDOM.render(<App/>, document.getElementById('render-target'));
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
