define(['tinyJSScheme'], function (tinyJSScheme) {

  function Tiny (codeModel) {
    this.env = Object.create(tinyJSScheme.schemeEnv);
    if (codeModel) {
      tinyJSScheme.schemeIO.loadMixin(this.env, function () {
        return codeModel.get('code');
      });
    }
  }

  Tiny.prototype.evalOne = function (str) {
    var self = this;
    return tinyJSScheme.parseScheme.one(str)
    .then(function (res) {
      return res.matched[0];
    })
    .then(function (expr) {
      return expr.eval(self.env);
    })
    .call('toString')
    .catch(tinyJSScheme.scheme.SchemeError, function (err) {
      throw new Error('Error: ' + err.toString());
    })
    .catch(tinyJSScheme.parseScheme.ParseError, function (err) {
      throw new Error(err.prettyMessage);
    });
  };

  return Tiny;
});
