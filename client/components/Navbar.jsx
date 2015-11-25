Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Evergrid</a>
          </div>
          <div className="navbar-right">
            <button type="button" className="btn btn-default navbar-btn">
              <i className="fa fa-github"/>
              &nbsp;
              Sign In
            </button>
          </div>
        </div>
      </nav>
    );
  }
});
