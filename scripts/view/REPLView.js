define(["view/FillDownView","Tiny","jqueryconsole"],function(e,t){return e.extend({initialize:function(e){e=e||{};var n=e.tiny||new t,r=this.$el.console({promptLabel:"tiny> ",commandValidate:function(e){return e==""?!1:!0},commandHandle:function(e,t){n.evalOne(e).tap(function(e){t([{msg:e,className:"jquery-console-message-value"}])}).catch(function(e){t([{msg:e.message,className:"jquery-console-message-error"}])})},autofocus:!0,animateScroll:!0,promptHistory:!0})}})});