Right = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },

  render() {
    return (
      <div className="pull-right">{this.props.children}</div>
    );
  },
});
