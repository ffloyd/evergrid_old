InputWrapper = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    children: React.PropTypes.any.isRequired,
    field: React.PropTypes.string.isRequired,
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
        <label htmlFor={this.props.field} className="col-md-2 control-label">{this.props.label}</label>
        <div className="col-md-10">
          {this.props.children}
          {helpBlock}
        </div>
      </div>
    );
  },
});
