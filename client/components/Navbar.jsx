Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Evergrid</a>
          </div>
          <UserLoginControls />
        </div>
      </nav>
    );
  }
});
