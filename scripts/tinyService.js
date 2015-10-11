define(['tinyJSScheme'], function (tiny) {
  var env = Object.create(tiny.schemeEnv);

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
