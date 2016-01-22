SubmitButton = React.createClass({
  propTypes: {
    disabled: React.PropTypes.bool,
  },

  render() {
    return (
      <button type="submit" className="btn btn-success" disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
});
