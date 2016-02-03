Dataset = React.createClass({
  propTypes: {
    dataset: React.PropTypes.object,
  },

  render() {
    const ds = this.props.dataset;

    return (
      <Panel title={ds.name}>
        <p>{ds.description}</p>
        <Right>
          <p className="text-muted">Created at: {moment(ds.createdAt).format('lll')}</p>
        </Right>
      </Panel>
    );
  },
});
