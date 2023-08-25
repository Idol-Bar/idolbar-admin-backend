!function(t){"use strict"
function a(){this.$body=t("body")}a.prototype.init=function(){t('[data-plugin="dragula"]').each((function(){var a=t(this).data("containers"),n=[]
if(a)for(var i=0;i<a.length;i++)n.push(t("#"+a[i])[0])
else n=[t(this)[0]]
var r=t(this).data("handleclass")
r?dragula(n,{moves:function(t,a,n){return n.classList.contains(r)}}):dragula(n)}))},t.Dragula=new a,t.Dragula.Constructor=a}(window.jQuery),function(){"use strict"
window.jQuery.Dragula.init()}()
