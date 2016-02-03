TextInput = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
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
          <input type="text" className="form-control" value={this.props.value} onChange={this.props.onChange}/>
          {helpBlock}
        </div>
      </div>
    );
  },
});
