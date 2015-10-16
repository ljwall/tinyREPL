define([
    'model/CodeCollection',
    'text!tinyschemer/intro.scm',
    'text!tinyschemer/values.scm',
    'text!tinyschemer/lists.scm',
    'text!tinyschemer/functioncalls.scm',
    'text!tinyschemer/listfunctions.scm',
    'text!tinyschemer/define.scm',
    'text!tinyschemer/recursionintro.scm'
], function (CodeCollection, intro, values, lists, functioncalls, listfunctions, define, recursionintro) {
  return new CodeCollection([
      { name: 'Intro', code: intro },
      { name: 'Values', code: values },
      { name: 'Lists', code: lists },
      { name: 'Function calls', code: functioncalls },
      { name: 'List functions', code: listfunctions },
      { name: 'Defining variables and functions', code: define },
      { name: 'Recursive functions', code: recursionintro}
  ]);
});
