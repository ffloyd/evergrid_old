Col = React.createClass({
  propTypes: {
    md: React.PropTypes.number.isRequired,
    children: React.PropTypes.node,
  },

  render() {
    return <div className={`col-md-${this.props.md}`}>{this.props.children}</div>;
  },
});
