Datasets = new Mongo.Collection('Datasets');

Schemas.Datasets = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 200,
  },
  description: {
    type: String,
    label: 'Description',
    optional: true,
  },
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
});

Datasets.attachSchema(Schemas.Datasets);

Datasets.methods = {};

Datasets.methods.create = new ValidatedMethod({
  name: 'Datasets.methods.create',
  validate: Schemas.Datasets.pick(['name', 'description']).validator(),
  run({name, description}) {
    Datasets.insert({
      name: name,
      description: description,
      ownerId: Meteor.userId(),
    });
  }
});

if (Meteor.isClient) {
  Meteor.subscribe('datasets');
}

if (Meteor.isServer) {
  Meteor.publish('datasets', function() {
    return Datasets.find({
      ownerId: this.userId,
    });
  });
}
