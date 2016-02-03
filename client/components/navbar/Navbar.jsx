Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Evergrid</Link>
          </div>
          <ul className="nav navbar-nav">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/datasets">Datasets</NavLink>
            <NavLink to="/datacenters">Datacenters</NavLink>
          </ul>
          <UserLoginControls />
        </div>
      </nav>
    );
  },
});
