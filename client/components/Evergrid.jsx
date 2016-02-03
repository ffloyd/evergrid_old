Evergrid = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
  },

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
