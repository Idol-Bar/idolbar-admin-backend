!function(t){"use strict"
function e(){this.$body=t("body"),this.charts=[]}e.prototype.respChart=function(e,r,a,o){var n=Chart.controllers.bar.prototype.draw
Chart.controllers.bar=Chart.controllers.bar.extend({draw:function(){n.apply(this,arguments)
var t=this.chart.chart.ctx,e=t.fill
t.fill=function(){t.save(),t.shadowColor="rgba(0,0,0,0.01)",t.shadowBlur=20,t.shadowOffsetX=4,t.shadowOffsetY=5,e.apply(this,arguments),t.restore()}}}),Chart.defaults.global.defaultFontColor="#8391a2",Chart.defaults.scale.gridLines.color="#8391a2"
var i=e.get(0).getContext("2d"),s=t(e).parent()
return function(){var n
switch(e.attr("width",t(s).width()),r){case"Line":n=new Chart(i,{type:"line",data:a,options:o})
break
case"Doughnut":n=new Chart(i,{type:"doughnut",data:a,options:o})
break
case"Pie":n=new Chart(i,{type:"pie",data:a,options:o})
break
case"Bar":n=new Chart(i,{type:"bar",data:a,options:o})
break
case"Radar":n=new Chart(i,{type:"radar",data:a,options:o})
break
case"PolarArea":n=new Chart(i,{data:a,type:"polarArea",options:o})}return n}()},e.prototype.initCharts=function(){var e,r
0<t("#high-performing-product").length&&((e=document.getElementById("high-performing-product").getContext("2d").createLinearGradient(0,500,0,150)).addColorStop(0,"#fa5c7c"),e.addColorStop(1,"#727cf5"),r={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Orders",backgroundColor:e,borderColor:e,hoverBackgroundColor:e,hoverBorderColor:e,data:[65,59,80,81,56,89,40,32,65,59,80,81]},{label:"Revenue",backgroundColor:"#e3eaef",borderColor:"#e3eaef",hoverBackgroundColor:"#e3eaef",hoverBorderColor:"#e3eaef",data:[89,40,32,65,59,80,81,56,89,40,65,59]}]},[].push(this.respChart(t("#high-performing-product"),"Bar",r,{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1,color:"rgba(0,0,0,0.05)"},stacked:!1,ticks:{stepSize:20}}],xAxes:[{barPercentage:.7,categoryPercentage:.5,stacked:!1,gridLines:{color:"rgba(0,0,0,0.01)"}}]}})))},e.prototype.init=function(){var e=this
Chart.defaults.global.defaultFontFamily='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',e.charts=this.initCharts(),t(window).on("resize",(function(r){t.each(e.charts,(function(t,e){try{e.destroy()}catch(t){}})),e.charts=e.initCharts()}))},t.Profile=new e,t.Profile.Constructor=e}(window.jQuery),function(){"use strict"
window.jQuery.Profile.init()}()
