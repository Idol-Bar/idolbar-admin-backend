!function(t){"use strict"
function i(){this.$body=t("body")}i.prototype.init=function(){Dropzone.autoDiscover=!1,t('[data-plugin="dropzone"]').each((function(){var i=t(this).attr("action"),e=t(this).data("previewsContainer"),o={url:i}
e&&(o.previewsContainer=e)
var n=t(this).data("uploadPreviewTemplate")
n&&(o.previewTemplate=t(n).html()),t(this).dropzone(o)}))},t.FileUpload=new i,t.FileUpload.Constructor=i}(window.jQuery),function(){"use strict"
window.jQuery.FileUpload.init()}()
