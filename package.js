Package.describe({
	summary: "Raphael.js, JavaScript Vector Library goodness."
});

Package.on_use(function (api, where) {
  api.add_files('lib/raphael/raphael-min.js', ['client']);
});