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
    options = this.props.options;

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
    let formGroupClass = 'form-group';
    let helpBlock;

    if (this.props.error) {
      formGroupClass += ' has-error';
      helpBlock = <span className="help-block">{this.props.error}</span>;
    }

    return (
      <div className={formGroupClass}>
        <label htmlFor="name" className="col-md-2 control-label">{this.props.label}</label>
        <div className="col-md-10">
          {[...this.renderOptions()]}
          {helpBlock}
        </div>
      </div>
    );
  },
});
