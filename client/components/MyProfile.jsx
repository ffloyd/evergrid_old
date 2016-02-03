MyProfile = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      profile: Meteor.user().profile,
    };
  },

  onNameChange(event) {
    Meteor.users.update(
      {_id: Meteor.user()._id},
      {$set: {
        profile: {name: event.target.value},
      }});
  },

  render() {
    return (
      <div>
        <PageHeader>User profile</PageHeader>
        <form className="form-horizontal">
          <TextInput value={this.data.profile.name} onChange={this.onNameChange}>Name</TextInput>
        </form>
      </div>
    );
  },
});
