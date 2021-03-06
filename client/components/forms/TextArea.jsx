TextArea = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    rows: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    field: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    rows: 10,
  },

  render() {
    return (
      <InputWrapper field={this.props.field} label={this.props.label} error={this.props.error}>
        <textarea name={this.props.field} className="form-control" rows={this.props.rows} value={this.props.value} onChange={this.props.onChange}/>
      </InputWrapper>
    );
  },
});
