Datacenter = React.createClass({
  propTypes: {
    datacenter: React.PropTypes.object.isRequired,
  },

  render() {
    const dc = this.props.datacenter;

    return (
      <Panel title={dc.name}>
        <p><strong>Datacenter Type:</strong> {dc.humanDcType()}</p>
        <p><strong>Config link:</strong> <a href={dc.configUrl()}>download</a></p>
        <Right>
          <p className="text-muted">Created at: {moment(dc.createdAt).format('lll')}</p>
        </Right>
      </Panel>
    );
  },
});
