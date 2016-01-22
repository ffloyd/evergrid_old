Dataset = React.createClass({
  propTypes: {
    dataset: React.PropTypes.object,
  },

  render() {
    const ds = this.props.dataset;

    return (
      <Panel title={ds.name}>
        <p>{ds.description}</p>
      </Panel>
    );
  }
});
