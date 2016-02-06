CarinaConfigField = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    field: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      innerBlock: 'fileInput',
      error: false,
    };
  },

  onChange(event) {
    const file = event.target.files[0];
    this.setState({
      innerBlock: 'uploading',
      error: false,
    });
    CarinaConfigs.insert(file, (err, fileObj) => {
      if (err) {
        this.setState({
          error: 'Incorrect config or not a zip file',
          innerBlock: 'fileInput',
        });
      } else {
        this.setState({
          error: false,
          innerBlock: 'fileInput',
        });

        this.props.onChange(fileObj._id);
      }
    });
  },

  render() {
    const error = this.state.error ? this.state.error : this.props.error;

    return (
      <InputWrapper field={this.props.field} label={this.props.label} error={error}>
        <input name={this.props.field} type="file" className="form-control" onChange={this.onChange} disabled={this.state.innerBlock !== 'fileInput'}/>
        {this.state.innerBlock === 'uploading' ? 'Uploading and verifying...' : null}
      </InputWrapper>
    );
  },
});
