define(["tinyJSScheme"],function(e){function t(t){this.env=Object.create(e.schemeEnv),t&&e.schemeIO.loadMixin(this.env,function(){return t.get("code")})}return t.prototype.evalOne=function(t){var n=this;return e.parseScheme.one(t).then(function(e){return e.matched[0]}).then(function(e){return e.eval(n.env)}).call("toString").catch(e.scheme.SchemeError,function(e){throw new Error("Error: "+e.toString())}).catch(e.parseScheme.ParseError,function(e){throw new Error(e.prettyMessage)})},t});