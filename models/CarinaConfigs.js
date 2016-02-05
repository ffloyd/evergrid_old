CarinaConfigs = new FS.Collection('carina-configs', {
  stores: [new FS.Store.FileSystem('carina-configs', {path: '~/uploads/carina-configs'})],
  filter: {
    maxSize: 100 * 1024 * 1024,
    allow: {
      contentTypes: ['application/zip'],
      extensions: ['zip'],
    },
  },
});

CarinaConfigs.allow({
  'insert': function() {
    return true;
  },
  'update': function() {
    return true;
  },
});
