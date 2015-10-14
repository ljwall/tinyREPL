define([
    'CodeCollection',
    'text!tinyschemer/intro.scm',
    'text!tinyschemer/functioncalls.scm'
], function (CodeCollection, intro, functioncalls) {
  return new CodeCollection([
      { name: 'Intro', code: intro },
      { name: 'Function calls', code:functioncalls }
  ]);
});
