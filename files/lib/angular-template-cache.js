var map = require('broccoli-stew/lib/map');
var concat = require('broccoli-concat');

const HEADER = 'export default function setupTemplates() { \nangular.module("templates", []).run(["$templateCache", function($templateCache) {\n';
const FOOTER = '} ]); \n};';

function angularTemplateCache(inputTree, options) {
  var tree = map(inputTree, '**/*.html', function(content, relativePath) {
    const parts = relativePath.split('/');
    parts.shift();
    const templateName = parts.join('/');
    content = content.replace(/\n/g, "\\n").replace(/"/g, '\\"');
    return '$templateCache.put("' + templateName + '", "' + content + '");\n';
  });

  tree = concat(tree, {
    inputFiles: ['**/*.html'],
    outputFile: '/' + options.name + '/templates.js',
    wrapInEval: false,
    wrapInFunction: false,
    header: HEADER,
    footer: FOOTER
  });

  return tree;
}

module.exports = angularTemplateCache;
