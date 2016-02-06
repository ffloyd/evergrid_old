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
  carinaConfig: { // store file reference as String. A very hackish logic. =/
    label: 'Carina config zip-file',
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    fieldType: FieldTypes.carinaConfig,
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

  configUrl() {
    const file = CarinaConfigs.findOne({_id: this.carinaConfig});
    return file.url();
  },
});

Datacenters.methods = {};

Datacenters.methods.create = new ValidatedMethod({
  name: 'Datacenters.methods.create',
  validate: Schemas.Datacenters.pick(['name', 'dcType', 'carinaConfig']).validator(),
  run({name, dcType, carinaConfig}) {
    Datacenters.insert({
      name, dcType, carinaConfig,
      ownerId: Meteor.userId(),
    });
  },
});

if (Meteor.isClient) {
  Meteor.subscribe('datacenters');
}

if (Meteor.isServer) {
  Meteor.smartPublish('datacenters', function() {
    this.addDependency('Datacenters', 'CarinaConfigs', function(dc) {
      return CarinaConfigs.find({_id: dc.carinaConfig, owner: dc.ownerId});
    });

    return Datacenters.find({
      ownerId: this.userId,
    });
  });
}
