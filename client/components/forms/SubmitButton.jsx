SubmitButton = React.createClass({
  propTypes: {
    disabled: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
  },

  render() {
    return (
      <button type="submit" className="btn btn-success" disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  },
});
