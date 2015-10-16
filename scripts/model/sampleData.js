define([
    'model/CodeCollection',
    'text!tinyschemer/intro.scm',
    'text!tinyschemer/values.scm',
    'text!tinyschemer/functioncalls.scm'
], function (CodeCollection, intro, values, functioncalls) {
  return new CodeCollection([
      { name: 'Intro', code: intro },
      { name: 'Values', code: values },
      { name: 'Function calls', code: functioncalls }
  ]);
});
