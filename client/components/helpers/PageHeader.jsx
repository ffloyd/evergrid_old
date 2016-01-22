PageHeader = React.createClass({
  render() {
    return (
      <div className="page-header">
        <h1>{this.props.children}</h1>
      </div>
    );
  }
});
