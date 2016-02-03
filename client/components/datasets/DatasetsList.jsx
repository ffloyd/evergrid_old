DatasetsList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      datasets: Datasets.find({}, {sort: {createdAt: -1}}).fetch(),
    };
  },

  render() {
    const datasetsPanels = this.data.datasets.map((dataset) => {
      return <Dataset dataset={dataset} key={dataset._id}/>;
    });

    return (
      <Row>
        <Col md={9}>
          {datasetsPanels}
        </Col>
        <Col md={3}>
          <Button block type="primary" to="/datasets/new">Create</Button>
        </Col>
      </Row>
    );
  },
});
