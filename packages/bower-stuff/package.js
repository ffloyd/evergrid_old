Package.describe({
  name: 'ffloyd:bower-stuff',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Internal package for manage various bower stuff',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'fourseven:scss'
  ]);

  // primer-css integration
  api.addFiles([
    'primer-css/scss/_alerts.scss',
    'primer-css/scss/_avatars.scss',
    'primer-css/scss/_base.scss',
    'primer-css/scss/_blankslate.scss',
    'primer-css/scss/_buttons.scss',
    'primer-css/scss/_counter.scss',
    'primer-css/scss/_filter-list.scss',
    'primer-css/scss/_flex-table.scss',
    'primer-css/scss/_forms.scss',
    'primer-css/scss/_layout.scss',
    'primer-css/scss/_menu.scss',
    'primer-css/scss/_mixins.scss',
    'primer-css/scss/_normalize.scss',
    'primer-css/scss/_states.scss',
    'primer-css/scss/_tabnav.scss',
    'primer-css/scss/_tooltips.scss',
    'primer-css/scss/_truncate.scss',
    'primer-css/scss/_type.scss',
    'primer-css/scss/_utility.scss',
    'primer-css/scss/_variables.scss',
    'primer-css/scss/primer.scss',
  ], 'client', {isImport: true});
});
