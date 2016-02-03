Schemas = {}; // Object for all schemas

FieldTypes = { // List of possible field types
  textInput: 'textInput',
  textArea: 'textArea',
};

SimpleSchema.extendOptions({
  fieldType: Match.Optional(String), // eslint-disable-line new-cap
});
