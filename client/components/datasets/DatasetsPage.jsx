DatasetsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      datasets: Datasets.find({}).fetch(),
    };
  },

  handleCreate() {
    alert('Well done');
  },

  renderDatasets() {
    return this.data.datasets.map((dataset) => {
      return <Dataset dataset={dataset} key={dataset._id}/>;
    });
  },

  render() {
    return (
      <Row>
        <Col md={9}>
          {this.renderDatasets()}
        </Col>
        <Col md={3}>
          <Button type="primary" block onClick={this.handleCreate}>Create</Button>
        </Col>
      </Row>
    );
  },
});
