App = React.createClass({
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  },
});
