RadioButtons = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    options: React.PropTypes.object.isRequired,
    field: React.PropTypes.string.isRequired,
  },

  *renderOptions() {
    const options = this.props.options;

    for (const value of Object.keys(options)) {
      const label = options[value];
      yield (
        <div className="radio" key={value}>
          <label>
            <input type="radio" name={this.props.field} value={value} checked={this.props.value === value} onChange={this.props.onChange}/>
            {label}
          </label>
        </div>
      );
    }
  },

  render() {
    return (
      <InputWrapper field={this.props.field} label={this.props.label} error={this.props.error}>
        {[...this.renderOptions()]}
      </InputWrapper>
    );
  },
});
