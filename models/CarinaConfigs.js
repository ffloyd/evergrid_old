CarinaConfigs = new FS.Collection('CarinaConfigs', {
  stores: [new FS.Store.FileSystem('CarinaConfigs', {path: '~/uploads/carina-configs'})],
  filter: {
    maxSize: 100 * 1024,
    allow: {
      contentTypes: ['application/zip'],
      extensions: ['zip'],
    },
  },
});

CarinaConfigs.allow({
  'insert': function(userId, fileObj) {
    return (fileObj.owner === userId);
  },
  'update': function(userId, fileObj) {
    return (fileObj.owner === userId);
  },
  'download': function(userId, fileObj) {
    return (fileObj.owner === userId);
  },
});
