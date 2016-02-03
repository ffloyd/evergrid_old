TextArea = React.createClass({
  propTypes: {
    value: React.PropTypes.any.isRequired,
    rows: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
    children: React.PropTypes.string,
  },

  defaultProps: {
    rows: 10,
  },

  render() {
    return (
      <div className="form-group">
        <label htmlFor="name" className="col-md-2 control-label">{this.props.children}</label>
        <div className="col-md-10">
          <textarea className="form-control" rows={this.props.rows} value={this.props.value} onChange={this.props.onChange}/>
        </div>
      </div>
    );
  },
});
