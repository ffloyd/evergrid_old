NewDatacenter = React.createClass({
  mixins: [ReactRouter.History],

  onSubmit(fields) {
    Meteor.call('Datacenters.methods.create', fields, (err) => {
      if (err) {
        alert('Something went wrong'); // eslint-disable-line no-alert
      } else {
        this.history.pushState(null, '/datacenters');
      }
    });
  },

  render() {
    const schema = Schemas.Datacenters.pick(['name']);

    return (
      <Row>
        <Col md={9}>
          <PageHeader>New Datacenter</PageHeader>
          <FormBuilder schema={schema} onSubmit={this.onSubmit}/>
        </Col>
      </Row>
    );
  },
});
