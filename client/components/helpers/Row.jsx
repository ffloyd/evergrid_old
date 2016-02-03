Row = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },

  render() {
    return <div className="row">{this.props.children}</div>;
  },
});
