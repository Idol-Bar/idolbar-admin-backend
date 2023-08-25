function hexToRGB(a,r){var t=parseInt(a.slice(1,3),16),e=parseInt(a.slice(3,5),16),o=parseInt(a.slice(5,7),16)
return r?"rgba("+t+", "+e+", "+o+", "+r+")":"rgb("+t+", "+e+", "+o+")"}!function(a){"use strict"
function r(){this.$body=a("body"),this.charts=[]}r.prototype.respChart=function(r,t,e,o){var n=Chart.controllers.line.prototype.draw
Chart.controllers.line.prototype.draw=function(){n.apply(this,arguments)
var a=this.chart.chart.ctx,r=a.stroke
a.stroke=function(){a.save(),a.shadowColor="rgba(0,0,0,0.01)",a.shadowBlur=20,a.shadowOffsetX=0,a.shadowOffsetY=5,r.apply(this,arguments),a.restore()}}
var s=Chart.controllers.doughnut.prototype.draw
Chart.controllers.doughnut=Chart.controllers.doughnut.extend({draw:function(){s.apply(this,arguments)
var a=this.chart.chart.ctx,r=a.fill
a.fill=function(){a.save(),a.shadowColor="rgba(0,0,0,0.03)",a.shadowBlur=4,a.shadowOffsetX=0,a.shadowOffsetY=3,r.apply(this,arguments),a.restore()}}})
var l=Chart.controllers.bar.prototype.draw
Chart.controllers.bar=Chart.controllers.bar.extend({draw:function(){l.apply(this,arguments)
var a=this.chart.chart.ctx,r=a.fill
a.fill=function(){a.save(),a.shadowColor="rgba(0,0,0,0.01)",a.shadowBlur=20,a.shadowOffsetX=4,a.shadowOffsetY=5,r.apply(this,arguments),a.restore()}}}),Chart.defaults.global.defaultFontColor="#8391a2",Chart.defaults.scale.gridLines.color="#8391a2"
var i=r.get(0).getContext("2d"),c=a(r).parent()
return function(){var n
switch(r.attr("width",a(c).width()),t){case"Line":n=new Chart(i,{type:"line",data:e,options:o})
break
case"Doughnut":n=new Chart(i,{type:"doughnut",data:e,options:o})
break
case"Pie":n=new Chart(i,{type:"pie",data:e,options:o})
break
case"Bar":n=new Chart(i,{type:"bar",data:e,options:o})
break
case"Radar":n=new Chart(i,{type:"radar",data:e,options:o})
break
case"PolarArea":n=new Chart(i,{data:e,type:"polarArea",options:o})}return n}()},r.prototype.initCharts=function(){var r,t,e,o,n,s,l,i=[],c=["#727cf5","#0acf97","#fa5c7c","#ffbc00"]
return 0<a("#line-chart-example").length&&(r={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:hexToRGB((s=(n=a("#line-chart-example").data("colors"))?n.split(","):c.concat())[0],.3),borderColor:s[0],data:[32,42,42,62,52,75,62]},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:s[1],borderDash:[5,5],data:[42,58,66,93,82,105,92]}]},i.push(this.respChart(a("#line-chart-example"),"Line",r,{maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1}},scales:{xAxes:[{reverse:!0,gridLines:{color:"rgba(0,0,0,0.05)"}}],yAxes:[{ticks:{stepSize:20},display:!0,borderDash:[5,5],gridLines:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}]}}))),0<a("#bar-chart-example").length&&(s=(n=a("#bar-chart-example").data("colors"))?n.split(","):c.concat(),(t=document.getElementById("bar-chart-example").getContext("2d").createLinearGradient(0,500,0,150)).addColorStop(0,s[0]),t.addColorStop(1,s[1]),e={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales Analytics",backgroundColor:t,borderColor:t,hoverBackgroundColor:t,hoverBorderColor:t,data:[65,59,80,81,56,89,40,32,65,59,80,81]},{label:"Dollar Rate",backgroundColor:"#e3eaef",borderColor:"#e3eaef",hoverBackgroundColor:"#e3eaef",hoverBorderColor:"#e3eaef",data:[89,40,32,65,59,80,81,56,89,40,65,59]}]},i.push(this.respChart(a("#bar-chart-example"),"Bar",e,{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1,color:"rgba(0,0,0,0.05)"},stacked:!1,ticks:{stepSize:20}}],xAxes:[{barPercentage:.7,categoryPercentage:.5,stacked:!1,gridLines:{color:"rgba(0,0,0,0.01)"}}]}}))),0<a("#donut-chart-example").length&&(o={labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[300,135,48,154],backgroundColor:s=(n=a("#donut-chart-example").data("colors"))?n.split(","):c.concat(),borderColor:"transparent",borderWidth:"3"}]},i.push(this.respChart(a("#donut-chart-example"),"Doughnut",o,{maintainAspectRatio:!1,cutoutPercentage:60,legend:{display:!1}}))),0<a("#radar-chart-example").length&&(l={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Desktops",backgroundColor:hexToRGB((s=(n=a("#radar-chart-example").data("colors"))?n.split(","):c.concat())[0],.2),borderColor:s[0],pointBackgroundColor:s[0],pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:s[0],data:[65,59,90,81,56,55,40]},{label:"Tablets",backgroundColor:hexToRGB(s[1],.2),borderColor:s[1],pointBackgroundColor:s[1],pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:s[1],data:[28,48,40,19,96,27,100]}]},i.push(this.respChart(a("#radar-chart-example"),"Radar",l,{maintainAspectRatio:!1}))),i},r.prototype.init=function(){var r=this
Chart.defaults.global.defaultFontFamily='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',r.charts=this.initCharts(),a(window).on("resize",(function(t){a.each(r.charts,(function(a,r){try{r.destroy()}catch(a){}})),r.charts=r.initCharts()}))},a.ChartJs=new r,a.ChartJs.Constructor=r}(window.jQuery),function(){"use strict"
window.jQuery.ChartJs.init()}()
