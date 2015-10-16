define([
    'model/CodeCollection',
    'text!tinyschemer/intro.scm',
    'text!tinyschemer/values.scm',
    'text!tinyschemer/lists.scm',
    'text!tinyschemer/functioncalls.scm'
], function (CodeCollection, intro, values, lists, functioncalls) {
  return new CodeCollection([
      { name: 'Intro', code: intro },
      { name: 'Values', code: values },
      { name: 'Lists', code: lists },
      { name: 'Function calls', code: functioncalls }
  ]);
});
