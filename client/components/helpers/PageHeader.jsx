PageHeader = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
  },

  render() {
    return (
      <div className="page-header">
        <h1>{this.props.children}</h1>
      </div>
    );
  },
});
