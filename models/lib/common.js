Schemas = {}; // Object for all schemas

FieldTypes = { // List of possible field types
  textInput: 'textInput',
  textArea: 'textArea',
  radioButtons: 'radioButtons',
};

SimpleSchema.extendOptions({
  fieldType: Match.Optional(String), // eslint-disable-line new-cap
  humanOptions: Match.Optional(Object), // eslint-disable-line new-cap
});
