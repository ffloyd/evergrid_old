Datacenter = React.createClass({
  propTypes: {
    datacenter: React.PropTypes.object.isRequired,
  },

  render() {
    const dc = this.props.datacenter;

    return (
      <Panel title={dc.name}>
        <Right>
          <p className="text-muted">Created at: {moment(dc.createdAt).format('lll')}</p>
        </Right>
      </Panel>
    );
  },
});
