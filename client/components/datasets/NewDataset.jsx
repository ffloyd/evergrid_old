NewDataset = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState() {
    return {
      name: '',
      description: '',
    };
  },

  isValid() {
    let valid;
    try {
      Datasets.methods.create.validate(this.state);
      valid = true;
    } catch (e) {
      valid = false;
    } finally {
      return valid;
    }
  },

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  },

  onDecriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  },

  onSubmit(event) {
    event.preventDefault();
    Meteor.call('Datasets.methods.create', this.state, (err, res) => {
      if (err) {
        alert('Something went wrong');
      } else {
        this.history.pushState(null, '/datasets');
      }
    });
  },

  render() {
    return (
      <Row>
        <Col md={9}>
          <PageHeader>New Dataset</PageHeader>
          <form className="form-horizontal" onSubmit={this.onSubmit}>
            <TextInput value={this.state.name} onChange={this.onNameChange}>Name</TextInput>
            <TextArea value={this.state.description} onChange={this.onDecriptionChange}>Description</TextArea>
            <Right>
              <SubmitButton disabled={!this.isValid()}>Create</SubmitButton>
            </Right>
          </form>
        </Col>
      </Row>
    );
  }
});
