Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Evergrid</Link>
          </div>
          <UserLoginControls />
        </div>
      </nav>
    );
  }
});
