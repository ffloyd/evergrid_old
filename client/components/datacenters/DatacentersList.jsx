DatacentersList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      datacenters: Datacenters.find({}, {sort: {createdAt: -1}}).fetch(),
    };
  },

  render() {
    const datacentersPanels = this.data.datacenters.map((datacenter) => {
      return <Datacenter datacenter={datacenter} key={datacenter._id}/>;
    });

    return (
      <Row>
        <Col md={9}>
          {datacentersPanels}
        </Col>
        <Col md={3}>
          <Button block type="primary" to="/datacenters/new">Create</Button>
        </Col>
      </Row>
    );
  },
});
