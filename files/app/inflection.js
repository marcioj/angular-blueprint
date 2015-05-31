var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);

export function camelize(str) {
  return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match) {
    return match.toLowerCase();
  });
};

export function classify(str) {
  var parts = str.split('.'),
    out = [];

  for (var i=0, l=parts.length; i<l; i++) {
    var camelized = camelize(parts[i]);
    out.push(camelized.charAt(0).toUpperCase() + camelized.substr(1));
  }

  return out.join('.');
};
