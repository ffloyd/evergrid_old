Datacenters = new Mongo.Collection('Datacenters');

Schemas.Datacenters = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    min: 4,
    max: 200,
    fieldType: FieldTypes.textInput,
  },
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
});

Datacenters.attachSchema(Schemas.Datacenters);

Datacenters.attachBehaviour('timestampable');

Datacenters.methods = {};

Datacenters.methods.create = new ValidatedMethod({
  name: 'Datacenters.methods.create',
  validate: Schemas.Datacenters.pick('name').validator(),
  run({name}) {
    Datacenters.insert({
      name: name,
      ownerId: Meteor.userId(),
    });
  },
});

if (Meteor.isClient) {
  Meteor.subscribe('datacenters');
}

if (Meteor.isServer) {
  Meteor.publish('datacenters', function() {
    return Datacenters.find({
      ownerId: this.userId,
    });
  });
}
