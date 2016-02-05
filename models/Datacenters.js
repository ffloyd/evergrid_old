Datacenters = new Mongo.Collection('Datacenters');

Schemas.Datacenters = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    min: 4,
    max: 200,
    fieldType: FieldTypes.textInput,
  },
  dcType: {
    label: 'Datacenter Type',
    type: String,
    allowedValues: ['GetCarina'],
    fieldType: FieldTypes.radioButtons,
    humanOptions: {
      GetCarina: 'app.getcarina.com',
    },
  },
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
});

Datacenters.attachSchema(Schemas.Datacenters);

Datacenters.attachBehaviour('timestampable');

Datacenters.helpers({
  humanDcType() {
    return Schemas.Datacenters.schema().dcType.humanOptions[this.dcType];
  },
});

Datacenters.methods = {};

Datacenters.methods.create = new ValidatedMethod({
  name: 'Datacenters.methods.create',
  validate: Schemas.Datacenters.pick(['name', 'dcType']).validator(),
  run({name, dcType}) {
    Datacenters.insert({
      name: name,
      dcType: dcType,
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
