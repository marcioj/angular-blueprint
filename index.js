module.exports = {
  description: 'Generate an angular application',
  locals: function(options) {
    var name = options.entity.name;

    return {
      name: name,
      modulePrefix: name,
      namespace: name,
      emberCLIVersion: '0.2.5'
    };
  }
}
