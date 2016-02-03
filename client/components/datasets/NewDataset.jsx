NewDataset = React.createClass({
  mixins: [ReactRouter.History],

  onSubmit(fields) {
    Meteor.call('Datasets.methods.create', fields, (err) => {
      if (err) {
        alert('Something went wrong'); // eslint-disable-line no-alert
      } else {
        this.history.pushState(null, '/datasets');
      }
    });
  },

  render() {
    const schema = Schemas.Datasets.pick(['name', 'description']);

    return (
      <Row>
        <Col md={9}>
          <PageHeader>New Dataset</PageHeader>
          <FormBuilder schema={schema} onSubmit={this.onSubmit}/>
        </Col>
      </Row>
    );
  },
});
