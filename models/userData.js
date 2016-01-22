if (Meteor.isClient) {
  Meteor.startup(function() {
    Meteor.subscribe('userData');
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    ServiceConfiguration.configurations.upsert(
      { service: "github" },
      {
        $set: {
          clientId: Meteor.settings.githubClientId,
          loginStyle: "popup",
          secret: Meteor.settings.githubSecret,
        }
      }
    );

    Meteor.publish("userData", function () {
      if (this.userId) {
        return Meteor.users.find({_id: this.userId},
                                 {fields: {'email': 1}});
      } else {
        this.ready();
      }
    });

    Accounts.onCreateUser(function(options, user) {
      if (options.profile) {
        user.profile = options.profile;
      }

      if (user.services.github) {
        user.email    = user.services.github.email;
        user.username = user.services.github.username;
      }
      return user;
    });
  });
}
