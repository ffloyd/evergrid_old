NewDatacenter = React.createClass({
  mixins: [ReactRouter.History],

  onSubmit(fields) {
    const file = fields.carinaConfig;
    CarinaConfigs.insert(file, (fileErr, fileObj) => {
      if (fileErr) {
        alert('Incorrect file'); // eslint-disable-line no-alert
      } else {
        fields.carinaConfig = fileObj._id;
        Meteor.call('Datacenters.methods.create', fields, 'Hello!', (err) => {
          if (err) {
            alert('Something went wrong'); // eslint-disable-line no-alert
          } else {
            this.history.pushState(null, '/datacenters');
          }
        });
      }
    });
  },

  render() {
    const schema = Schemas.Datacenters.pick(['name', 'dcType', 'carinaConfig']);
    const defaultValues = {
      dcType: schema.schema().dcType.allowedValues[0],
    };

    return (
      <Row>
        <Col md={9}>
          <PageHeader>New Datacenter</PageHeader>
          <FormBuilder schema={schema} defaultValues={defaultValues} onSubmit={this.onSubmit}/>
        </Col>
      </Row>
    );
  },
});
