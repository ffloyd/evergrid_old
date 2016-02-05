TextInput = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    field: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <InputWrapper field={this.props.field} label={this.props.label} error={this.props.error}>
        <input name={this.props.field} type="text" className="form-control" value={this.props.value} onChange={this.props.onChange}/>
      </InputWrapper>
    );
  },
});
