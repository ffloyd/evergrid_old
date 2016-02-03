TextArea = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    rows: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    rows: 10,
  },

  render() {
    return (
      <div className="form-group">
        <label htmlFor="name" className="col-md-2 control-label">{this.props.label}</label>
        <div className="col-md-10">
          <textarea className="form-control" rows={this.props.rows} value={this.props.value} onChange={this.props.onChange}/>
        </div>
      </div>
    );
  },
});
