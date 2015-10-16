define([
    'model/CodeCollection',
    'text!tinyschemer/intro.scm',
    'text!tinyschemer/values.scm',
    'text!tinyschemer/lists.scm',
    'text!tinyschemer/functioncalls.scm',
    'text!tinyschemer/listfunctions.scm',
    'text!tinyschemer/define.scm',
    'text!tinyschemer/recursionintro.scm',
    'text!tinyschemer/sum.scm',
    'text!tinyschemer/sumAnswer.scm',
    'text!tinyschemer/count-in.scm',
    'text!tinyschemer/count-inAnswer.scm'
], function (CodeCollection, intro, values, lists, functioncalls,
              listfunctions, define, recursionintro, sum, sumAnswer,
              countIn, countInAnswer) {
  return new CodeCollection([
      { name: 'Intro', code: intro },
      { name: 'Values', code: values },
      { name: 'Lists', code: lists },
      { name: 'Function calls', code: functioncalls },
      { name: 'List functions', code: listfunctions },
      { name: 'Defining variables and functions', code: define },
      { name: 'Recursive functions', code: recursionintro},
      { name: 'sum exercise', code: sum},
      { name: 'sum answer', code: sumAnswer},
      { name: 'count-in exercise', code: countIn},
      { name: 'count-in answer', code: countInAnswer}
  ]);
});
