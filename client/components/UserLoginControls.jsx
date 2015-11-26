UserLoginControls = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.user(),
    };
  },

  handleGithubLogin() {
    Meteor.loginWithGithub({
      requestPermissions: ['user:email','repo'],
      loginStyle: 'popup',
    });
  },

  handleLogout() {
    Meteor.logout();
  },

  renderUnauthorized() {
    return (
      <button type="button" className="btn btn-default navbar-btn" onClick={this.handleGithubLogin}>
        <i className="fa fa-github"/>
        &nbsp;
        Sign In
      </button>
    );
  },

  renderAuthorized() {
    return [
      <span className="navbar-text" key="name">{this.data.user.profile.name}</span>,
      <a className="btn btn-default navbar-btn" onClick={this.handleLogout} key="logout">Logout</a>
    ];
  },

  render() {
    if (!Accounts.loginServicesConfigured()) {
      return (
        <div className="navbar-right">
          <span className="navbar-text">Login service isn't configured yet</span>
        </div>
      )
    }

    const inner = this.data.user ? this.renderAuthorized() : this.renderUnauthorized();
    return (
      <div className="navbar-right">
        {inner}
      </div>
    )
  },
});
