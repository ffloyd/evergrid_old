TextInput = React.createClass({
  propTypes: {
    value: React.PropTypes.any.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  render() {
    return (
      <div className="form-group">
        <label htmlFor="name" className="col-md-2 control-label">{this.props.children}</label>
        <div className="col-md-10">
          <input type="text" className="form-control" value={this.props.value} onChange={this.props.onChange}></input>
        </div>
      </div>
    );
  }
});
