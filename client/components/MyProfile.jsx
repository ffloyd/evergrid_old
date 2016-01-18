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
        profile: {name: event.target.value}
      }});
  },

  render() {
    return (
      <div>
        <h2>User profile</h2>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="name" className="col-md-2 control-label">Public Name</label>
            <div className="col-md-10">
              <input type="text" className="form-control" value={this.data.profile.name} onChange={this.onNameChange}></input>
            </div>
          </div>
        </form>
      </div>
    );
  },
});
