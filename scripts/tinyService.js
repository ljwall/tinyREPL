define(['tinyJSScheme', 'codeModel'], function (tiny, codeModel) {
  var env = Object.create(tiny.schemeEnv);

  tiny.schemeIO.loadMixin(env, function () {
    return codeModel.get('code');
  });

  return {
    evalOne: function (str) {
      return tiny.parseScheme.one(str)
      .then(function (res) {
        return res.matched[0];
      })
      .then(function (expr) {
        return expr.eval(env);
      })
      .call('toString')
      .catch(tiny.scheme.SchemeError, function (err) {
        throw new Error('Error: ' + err.toString());
      })
      .catch(tiny.parseScheme.ParseError, function (err) {
        throw new Error('Parser error. Expecting:\n' + err.expecting);
      });
    }
  };
});
