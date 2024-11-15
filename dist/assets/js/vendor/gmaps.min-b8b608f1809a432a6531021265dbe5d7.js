"use strict"
!function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["jquery","googlemaps!"],t):e.GMaps=t()}(this,(function(){var t,o,n=function(e,t){var o
if(e===t)return e
for(o in t)void 0!==t[o]&&(e[o]=t[o])
return e},r=function(e,t){var o,n=Array.prototype.slice.call(arguments,2),r=[],i=e.length
if(Array.prototype.map&&e.map===Array.prototype.map)r=Array.prototype.map.call(e,(function(e){var o=n.slice(0)
return o.splice(0,0,e),t.apply(this,o)}))
else for(o=0;o<i;o++)callback_params=n,callback_params.splice(0,0,e[o]),r.push(t.apply(this,callback_params))
return r},i=function(e){var t,o=[]
for(t=0;t<e.length;t++)o=o.concat(e[t])
return o},s=function(e,t){var o=e[0],n=e[1]
return t&&(o=e[1],n=e[0]),new google.maps.LatLng(o,n)},a=function(e,t){var o
for(o=0;o<e.length;o++)e[o]instanceof google.maps.LatLng||(e[o].length>0&&"object"==typeof e[o][0]?e[o]=a(e[o],t):e[o]=s(e[o],t))
return e},l=function(e,t){var o=e.replace(".","")
return"jQuery"in this&&t?$("."+o,t)[0]:document.getElementsByClassName(o)[0]},p=function(e,t){e=e.replace("#","")
return"jQuery"in window&&t?$("#"+e,t)[0]:document.getElementById(e)},c=function(e){var t=0,o=0
if(e.getBoundingClientRect){var n=e.getBoundingClientRect(),r=-(window.scrollX?window.scrollX:window.pageXOffset),i=-(window.scrollY?window.scrollY:window.pageYOffset)
return[n.left-r,n.top-i]}if(e.offsetParent)do{t+=e.offsetLeft,o+=e.offsetTop}while(e=e.offsetParent)
return[t,o]},g=function(e){var t=document,o=function(e){if("object"!=typeof window.google||!window.google.maps)return"object"==typeof window.console&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){}
if(!this)return new o(e)
e.zoom=e.zoom||15,e.mapType=e.mapType||"roadmap"
var r,i=function(e,t){return void 0===e?t:e},s=this,a=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],g=["mousemove","mouseout","mouseover"],h=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=e.el||e.div,d=e.markerClusterer,m=google.maps.MapTypeId[e.mapType.toUpperCase()],f=new google.maps.LatLng(e.lat,e.lng),y=i(e.zoomControl,!0),v=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},w=v.style||"DEFAULT",k=v.position||"TOP_LEFT",L=i(e.panControl,!0),b=i(e.mapTypeControl,!0),_=i(e.scaleControl,!0),M=i(e.streetViewControl,!0),x=i(x,!0),C={},O={zoom:this.zoom,center:f,mapTypeId:m},P={panControl:L,zoomControl:y,zoomControlOptions:{style:google.maps.ZoomControlStyle[w],position:google.maps.ControlPosition[k]},mapTypeControl:b,scaleControl:_,streetViewControl:M,overviewMapControl:x}
if("string"==typeof e.el||"string"==typeof e.div?u.indexOf("#")>-1?this.el=p(u,e.context):this.el=l.apply(this,[u,e.context]):this.el=u,void 0===this.el||null===this.el)throw"No element defined."
for(window.context_menu=window.context_menu||{},window.context_menu[s.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=e.zoom,this.registered_events={},this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=e.enableNewStyle,r=0;r<h.length;r++)delete e[h[r]]
for(1!=e.disableDefaultUI&&(O=n(O,P)),C=n(O,e),r=0;r<a.length;r++)delete C[a[r]]
for(r=0;r<g.length;r++)delete C[g[r]]
this.map=new google.maps.Map(this.el,C),d&&(this.markerClusterer=d.apply(this,[this.map]))
var T=function(e,t){var o="",n=window.context_menu[s.el.id][e]
for(var r in n)if(n.hasOwnProperty(r)){var i=n[r]
o+='<li><a id="'+e+"_"+r+'" href="#">'+i.title+"</a></li>"}if(p("gmaps_context_menu")){var a=p("gmaps_context_menu")
a.innerHTML=o
var l=a.getElementsByTagName("a"),g=l.length
for(r=0;r<g;r++){var h=l[r]
google.maps.event.clearListeners(h,"click"),google.maps.event.addDomListenerOnce(h,"click",(function(o){o.preventDefault(),n[this.id.replace(e+"_","")].action.apply(s,[t]),s.hideContextMenu()}),!1)}var u=c.apply(this,[s.el]),d=u[0]+t.pixel.x-15,m=u[1]+t.pixel.y-15
a.style.left=d+"px",a.style.top=m+"px"}}
this.buildContextMenu=function(e,t){if("marker"===e){t.pixel={}
var o=new google.maps.OverlayView
o.setMap(s.map),o.draw=function(){var n=o.getProjection(),r=t.marker.getPosition()
t.pixel=n.fromLatLngToContainerPixel(r),T(e,t)}}else T(e,t)
var n=p("gmaps_context_menu")
setTimeout((function(){n.style.display="block"}),0)},this.setContextMenu=function(e){window.context_menu[s.el.id][e.control]={}
var o,n=t.createElement("ul")
for(o in e.options)if(e.options.hasOwnProperty(o)){var r=e.options[o]
window.context_menu[s.el.id][e.control][r.name]={title:r.title,action:r.action}}n.id="gmaps_context_menu",n.style.display="none",n.style.position="absolute",n.style.minWidth="100px",n.style.background="white",n.style.listStyle="none",n.style.padding="8px",n.style.boxShadow="2px 2px 6px #ccc",p("gmaps_context_menu")||t.body.appendChild(n)
var i=p("gmaps_context_menu")
google.maps.event.addDomListener(i,"mouseout",(function(e){e.relatedTarget&&this.contains(e.relatedTarget)||window.setTimeout((function(){i.style.display="none"}),400)}),!1)},this.hideContextMenu=function(){var e=p("gmaps_context_menu")
e&&(e.style.display="none")}
var z=function(t,o){google.maps.event.addListener(t,o,(function(t){null==t&&(t=this),e[o].apply(this,[t]),s.hideContextMenu()}))}
google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu)
for(var S=0;S<a.length;S++){(W=a[S])in e&&z(this.map,W)}for(S=0;S<g.length;S++){var W;(W=g[S])in e&&z(this.map,W)}google.maps.event.addListener(this.map,"rightclick",(function(t){e.rightclick&&e.rightclick.apply(this,[t]),null!=window.context_menu[s.el.id].map&&s.buildContextMenu("map",t)})),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var e,t=[],o=this.markers.length
for(e=0;e<o;e++)"boolean"==typeof this.markers[e].visible&&this.markers[e].visible&&t.push(this.markers[e].getPosition())
this.fitLatLngBounds(t)},this.fitLatLngBounds=function(e){var t,o=e.length,n=new google.maps.LatLngBounds
for(t=0;t<o;t++)n.extend(e[t])
this.map.fitBounds(n)},this.setCenter=function(e,t,o){this.map.panTo(new google.maps.LatLng(e,t)),o&&o()},this.getElement=function(){return this.el},this.zoomIn=function(e){e=e||1,this.zoom=this.map.getZoom()+e,this.map.setZoom(this.zoom)},this.zoomOut=function(e){e=e||1,this.zoom=this.map.getZoom()-e,this.map.setZoom(this.zoom)}
var R,I=[]
for(R in this.map)"function"!=typeof this.map[R]||this[R]||I.push(R)
for(r=0;r<I.length;r++)!function(e,t,o){e[o]=function(){return t[o].apply(t,arguments)}}(this,this.map,I[r])}
return o}()
return g.prototype.createControl=function(e){var t=document.createElement("div")
for(var o in t.style.cursor="pointer",!0!==e.disableDefaultStyles&&(t.style.fontFamily="Roboto, Arial, sans-serif",t.style.fontSize="11px",t.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"),e.style)t.style[o]=e.style[o]
for(var n in e.id&&(t.id=e.id),e.title&&(t.title=e.title),e.classes&&(t.className=e.classes),e.content&&("string"==typeof e.content?t.innerHTML=e.content:e.content instanceof HTMLElement&&t.appendChild(e.content)),e.position&&(t.position=google.maps.ControlPosition[e.position.toUpperCase()]),e.events)!function(t,o){google.maps.event.addDomListener(t,o,(function(){e.events[o].apply(this,[this])}))}(t,n)
return t.index=1,t},g.prototype.addControl=function(e){var t=this.createControl(e)
return this.controls.push(t),this.map.controls[t.position].push(t),t},g.prototype.removeControl=function(e){var t,o=null
for(t=0;t<this.controls.length;t++)this.controls[t]==e&&(o=this.controls[t].position,this.controls.splice(t,1))
if(o)for(t=0;t<this.map.controls.length;t++){var n=this.map.controls[e.position]
if(n.getAt(t)==e){n.removeAt(t)
break}}return e},g.prototype.createMarker=function(e){if(null==e.lat&&null==e.lng&&null==e.position)throw"No latitude or longitude defined."
var t=this,o=e.details,r=e.fences,i=e.outside,s={position:new google.maps.LatLng(e.lat,e.lng),map:null},a=n(s,e)
delete a.lat,delete a.lng,delete a.fences,delete a.outside
var l=new google.maps.Marker(a)
if(l.fences=r,e.infoWindow){l.infoWindow=new google.maps.InfoWindow(e.infoWindow)
for(var p=["closeclick","content_changed","domready","position_changed","zindex_changed"],c=0;c<p.length;c++)!function(t,o){e.infoWindow[o]&&google.maps.event.addListener(t,o,(function(t){e.infoWindow[o].apply(this,[t])}))}(l.infoWindow,p[c])}var g=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],h=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"]
for(c=0;c<g.length;c++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,(function(){e[o].apply(this,[this])}))}(l,g[c])
for(c=0;c<h.length;c++)!function(t,o,n){e[n]&&google.maps.event.addListener(o,n,(function(o){o.pixel||(o.pixel=t.getProjection().fromLatLngToPoint(o.latLng)),e[n].apply(this,[o])}))}(this.map,l,h[c])
return google.maps.event.addListener(l,"click",(function(){this.details=o,e.click&&e.click.apply(this,[this]),l.infoWindow&&(t.hideInfoWindows(),l.infoWindow.open(t.map,l))})),google.maps.event.addListener(l,"rightclick",(function(o){o.marker=this,e.rightclick&&e.rightclick.apply(this,[o]),null!=window.context_menu[t.el.id].marker&&t.buildContextMenu("marker",o)})),l.fences&&google.maps.event.addListener(l,"dragend",(function(){t.checkMarkerGeofence(l,(function(e,t){i(e,t)}))})),l},g.prototype.addMarker=function(e){var t
if(e.hasOwnProperty("gm_accessors_"))t=e
else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined."
t=this.createMarker(e)}return t.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(t),this.markers.push(t),g.fire("marker_added",t,this),t},g.prototype.addMarkers=function(e){for(var t,o=0;t=e[o];o++)this.addMarker(t)
return this.markers},g.prototype.hideInfoWindows=function(){for(var e,t=0;e=this.markers[t];t++)e.infoWindow&&e.infoWindow.close()},g.prototype.removeMarker=function(e){for(var t=0;t<this.markers.length;t++)if(this.markers[t]===e){this.markers[t].setMap(null),this.markers.splice(t,1),this.markerClusterer&&this.markerClusterer.removeMarker(e),g.fire("marker_removed",e,this)
break}return e},g.prototype.removeMarkers=function(e){var t=[]
if(void 0===e){for(var o=0;o<this.markers.length;o++){(r=this.markers[o]).setMap(null),g.fire("marker_removed",r,this)}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers(),this.markers=t}else{for(o=0;o<e.length;o++){var n=this.markers.indexOf(e[o])
if(n>-1)(r=this.markers[n]).setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(r),g.fire("marker_removed",r,this)}for(o=0;o<this.markers.length;o++){var r
null!=(r=this.markers[o]).getMap()&&t.push(r)}this.markers=t}},g.prototype.drawOverlay=function(e){var t=new google.maps.OverlayView,o=!0
return t.setMap(this.map),null!=e.auto_show&&(o=e.auto_show),t.onAdd=function(){var o=document.createElement("div")
o.style.borderStyle="none",o.style.borderWidth="0px",o.style.position="absolute",o.style.zIndex=100,o.innerHTML=e.content,t.el=o,e.layer||(e.layer="overlayLayer")
var n=this.getPanes(),r=["contextmenu","DOMMouseScroll","dblclick","mousedown"]
n[e.layer].appendChild(o)
for(var i=0;i<r.length;i++)!function(e,t){google.maps.event.addDomListener(e,t,(function(e){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()}))}(o,r[i])
e.click&&(n.overlayMouseTarget.appendChild(t.el),google.maps.event.addDomListener(t.el,"click",(function(){e.click.apply(t,[t])}))),google.maps.event.trigger(this,"ready")},t.draw=function(){var n=this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng))
e.horizontalOffset=e.horizontalOffset||0,e.verticalOffset=e.verticalOffset||0
var r=t.el,i=r.children[0],s=i.clientHeight,a=i.clientWidth
switch(e.verticalAlign){case"top":r.style.top=n.y-s+e.verticalOffset+"px"
break
default:case"middle":r.style.top=n.y-s/2+e.verticalOffset+"px"
break
case"bottom":r.style.top=n.y+e.verticalOffset+"px"}switch(e.horizontalAlign){case"left":r.style.left=n.x-a+e.horizontalOffset+"px"
break
default:case"center":r.style.left=n.x-a/2+e.horizontalOffset+"px"
break
case"right":r.style.left=n.x+e.horizontalOffset+"px"}r.style.display=o?"block":"none",o||e.show.apply(this,[r])},t.onRemove=function(){var o=t.el
e.remove?e.remove.apply(this,[o]):(t.el.parentNode.removeChild(t.el),t.el=null)},this.overlays.push(t),t},g.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++)if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1)
break}},g.prototype.removeOverlays=function(){for(var e,t=0;e=this.overlays[t];t++)e.setMap(null)
this.overlays=[]},g.prototype.drawPolyline=function(e){var t=[],o=e.path
if(o.length)if(void 0===o[0][0])t=o
else for(var n,r=0;n=o[r];r++)t.push(new google.maps.LatLng(n[0],n[1]))
var i={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:!0,editable:!1,visible:!0}
e.hasOwnProperty("clickable")&&(i.clickable=e.clickable),e.hasOwnProperty("editable")&&(i.editable=e.editable),e.hasOwnProperty("icons")&&(i.icons=e.icons),e.hasOwnProperty("zIndex")&&(i.zIndex=e.zIndex)
for(var s=new google.maps.Polyline(i),a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],l=0;l<a.length;l++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,(function(t){e[o].apply(this,[t])}))}(s,a[l])
return this.polylines.push(s),g.fire("polyline_added",s,this),s},g.prototype.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++)if(this.polylines[t]===e){this.polylines[t].setMap(null),this.polylines.splice(t,1),g.fire("polyline_removed",e,this)
break}},g.prototype.removePolylines=function(){for(var e,t=0;e=this.polylines[t];t++)e.setMap(null)
this.polylines=[]},g.prototype.drawCircle=function(e){delete(e=n({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e)).lat,delete e.lng
for(var t=new google.maps.Circle(e),o=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],r=0;r<o.length;r++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,(function(t){e[o].apply(this,[t])}))}(t,o[r])
return this.polygons.push(t),t},g.prototype.drawRectangle=function(e){e=n({map:this.map},e)
var t=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]))
e.bounds=t
for(var o=new google.maps.Rectangle(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<r.length;i++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,(function(t){e[o].apply(this,[t])}))}(o,r[i])
return this.polygons.push(o),o},g.prototype.drawPolygon=function(e){var t=!1
e.hasOwnProperty("useGeoJSON")&&(t=e.useGeoJSON),delete e.useGeoJSON,e=n({map:this.map},e),0==t&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=i(r(e.paths,a,t)))
for(var o=new google.maps.Polygon(e),s=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],l=0;l<s.length;l++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,(function(t){e[o].apply(this,[t])}))}(o,s[l])
return this.polygons.push(o),g.fire("polygon_added",o,this),o},g.prototype.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++)if(this.polygons[t]===e){this.polygons[t].setMap(null),this.polygons.splice(t,1),g.fire("polygon_removed",e,this)
break}},g.prototype.removePolygons=function(){for(var e,t=0;e=this.polygons[t];t++)e.setMap(null)
this.polygons=[]},g.prototype.getFromFusionTables=function(e){var t=e.events
delete e.events
var o=e,n=new google.maps.FusionTablesLayer(o)
for(var r in t)!function(e,o){google.maps.event.addListener(e,o,(function(e){t[o].apply(this,[e])}))}(n,r)
return this.layers.push(n),n},g.prototype.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e)
return t.setMap(this.map),t},g.prototype.getFromKML=function(e){var t=e.url,o=e.events
delete e.url,delete e.events
var n=e,r=new google.maps.KmlLayer(t,n)
for(var i in o)!function(e,t){google.maps.event.addListener(e,t,(function(e){o[t].apply(this,[e])}))}(r,i)
return this.layers.push(r),r},g.prototype.loadFromKML=function(e){var t=this.getFromKML(e)
return t.setMap(this.map),t},g.prototype.addLayer=function(e,t){var o
switch(t=t||{},e){case"weather":this.singleLayers.weather=o=new google.maps.weather.WeatherLayer
break
case"clouds":this.singleLayers.clouds=o=new google.maps.weather.CloudLayer
break
case"traffic":this.singleLayers.traffic=o=new google.maps.TrafficLayer
break
case"transit":this.singleLayers.transit=o=new google.maps.TransitLayer
break
case"bicycling":this.singleLayers.bicycling=o=new google.maps.BicyclingLayer
break
case"panoramio":this.singleLayers.panoramio=o=new google.maps.panoramio.PanoramioLayer,o.setTag(t.filter),delete t.filter,t.click&&google.maps.event.addListener(o,"click",(function(e){t.click(e),delete t.click}))
break
case"places":if(this.singleLayers.places=o=new google.maps.places.PlacesService(this.map),t.search||t.nearbySearch||t.radarSearch){var n={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null}
t.radarSearch&&o.radarSearch(n,t.radarSearch),t.search&&o.search(n,t.search),t.nearbySearch&&o.nearbySearch(n,t.nearbySearch)}if(t.textSearch){var r={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null}
o.textSearch(r,t.textSearch)}}if(void 0!==o)return"function"==typeof o.setOptions&&o.setOptions(t),"function"==typeof o.setMap&&o.setMap(this.map),o},g.prototype.removeLayer=function(e){if("string"==typeof e&&void 0!==this.singleLayers[e])this.singleLayers[e].setMap(null),delete this.singleLayers[e]
else for(var t=0;t<this.layers.length;t++)if(this.layers[t]===e){this.layers[t].setMap(null),this.layers.splice(t,1)
break}},g.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":t=google.maps.TravelMode.BICYCLING
break
case"transit":t=google.maps.TravelMode.TRANSIT
break
case"driving":t=google.maps.TravelMode.DRIVING
break
default:t=google.maps.TravelMode.WALKING}o="imperial"===e.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC
var r=n({avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},e)
r.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]),r.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]),r.travelMode=t,r.unitSystem=o,delete r.callback,delete r.error
var i=[];(new google.maps.DirectionsService).route(r,(function(t,o){if(o===google.maps.DirectionsStatus.OK){for(var n in t.routes)t.routes.hasOwnProperty(n)&&i.push(t.routes[n])
e.callback&&e.callback(i,t,o)}else e.error&&e.error(t,o)}))},g.prototype.removeRoutes=function(){this.routes.length=0},g.prototype.getElevations=function(e){(e=n({locations:[],path:!1,samples:256},e)).locations.length>0&&e.locations[0].length>0&&(e.locations=i(r([e.locations],a,!1)))
var t=e.callback
delete e.callback
var o=new google.maps.ElevationService
if(e.path){var s={path:e.locations,samples:e.samples}
o.getElevationAlongPath(s,(function(e,o){t&&"function"==typeof t&&t(e,o)}))}else delete e.path,delete e.samples,o.getElevationForLocations(e,(function(e,o){t&&"function"==typeof t&&t(e,o)}))},g.prototype.cleanRoute=g.prototype.removePolylines,g.prototype.renderRoute=function(e,t){var o,r="string"==typeof t.panel?document.getElementById(t.panel.replace("#","")):t.panel
t.panel=r,t=n({map:this.map},t),o=new google.maps.DirectionsRenderer(t),this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,avoidHighways:e.avoidHighways,avoidTolls:e.avoidTolls,optimizeWaypoints:e.optimizeWaypoints,callback:function(e,t,n){n===google.maps.DirectionsStatus.OK&&o.setDirections(t)}})},g.prototype.drawRoute=function(e){var t=this
this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,avoidHighways:e.avoidHighways,avoidTolls:e.avoidTolls,optimizeWaypoints:e.optimizeWaypoints,callback:function(o){if(o.length>0){var n={path:o[o.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}
e.hasOwnProperty("icons")&&(n.icons=e.icons),t.drawPolyline(n),e.callback&&e.callback(o[o.length-1])}}})},g.prototype.travelRoute=function(e){if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,callback:function(t){if(t.length>0&&e.start&&e.start(t[t.length-1]),t.length>0&&e.step){var o=t[t.length-1]
if(o.legs.length>0)for(var n,r=o.legs[0].steps,i=0;n=r[i];i++)n.step_number=i,e.step(n,o.legs[0].steps.length-1)}t.length>0&&e.end&&e.end(t[t.length-1])}})
else if(e.route&&e.route.legs.length>0)for(var t,o=e.route.legs[0].steps,n=0;t=o[n];n++)t.step_number=n,e.step(t)},g.prototype.drawSteppedRoute=function(e){var t=this
if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,error:e.error,callback:function(o){if(o.length>0&&e.start&&e.start(o[o.length-1]),o.length>0&&e.step){var n=o[o.length-1]
if(n.legs.length>0)for(var r,i=n.legs[0].steps,s=0;r=i[s];s++){r.step_number=s
var a={path:r.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}
e.hasOwnProperty("icons")&&(a.icons=e.icons),t.drawPolyline(a),e.step(r,n.legs[0].steps.length-1)}}o.length>0&&e.end&&e.end(o[o.length-1])}})
else if(e.route&&e.route.legs.length>0)for(var o,n=e.route.legs[0].steps,r=0;o=n[r];r++){o.step_number=r
var i={path:o.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}
e.hasOwnProperty("icons")&&(i.icons=e.icons),t.drawPolyline(i),e.step(o)}},g.Route=function(e){this.origin=e.origin,this.destination=e.destination,this.waypoints=e.waypoints,this.map=e.map,this.route=e.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length
var t={path:new google.maps.MVCArray,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}
e.hasOwnProperty("icons")&&(t.icons=e.icons),this.polyline=this.map.drawPolyline(t).getPath()},g.Route.prototype.getRoute=function(t){var o=this
this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],error:t.error,callback:function(){o.route=e[0],t.callback&&t.callback.call(o)}})},g.Route.prototype.back=function(){if(this.step_count>0){this.step_count--
var e=this.route.legs[0].steps[this.step_count].path
for(var t in e)e.hasOwnProperty(t)&&this.polyline.pop()}},g.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path
for(var t in e)e.hasOwnProperty(t)&&this.polyline.push(e[t])
this.step_count++}},g.prototype.checkGeofence=function(e,t,o){return o.containsLatLng(new google.maps.LatLng(e,t))},g.prototype.checkMarkerGeofence=function(e,t){if(e.fences)for(var o,n=0;o=e.fences[n];n++){var r=e.getPosition()
this.checkGeofence(r.lat(),r.lng(),o)||t(e,o)}},g.prototype.toImage=function(e){e=e||{}
var t={}
if(t.size=e.size||[this.el.clientWidth,this.el.clientHeight],t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng(),this.markers.length>0){t.markers=[]
for(var o=0;o<this.markers.length;o++)t.markers.push({lat:this.markers[o].getPosition().lat(),lng:this.markers[o].getPosition().lng()})}if(this.polylines.length>0){var n=this.polylines[0]
t.polyline={},t.polyline.path=google.maps.geometry.encoding.encodePath(n.getPath()),t.polyline.strokeColor=n.strokeColor,t.polyline.strokeOpacity=n.strokeOpacity,t.polyline.strokeWeight=n.strokeWeight}return g.staticMapURL(t)},g.staticMapURL=function(e){function t(e,t){if("#"===e[0]&&(e=e.replace("#","0x"),t)){if(t=parseFloat(t),0===(t=Math.min(1,Math.max(t,0))))return"0x00000000"
1===(t=(255*t).toString(16)).length&&(t+=t),e=e.slice(0,8)+t}return e}var o,n=[],r=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap"
e.url&&(r=e.url,delete e.url),r+="?"
var i=e.markers
delete e.markers,!i&&e.marker&&(i=[e.marker],delete e.marker)
var s=e.styles
delete e.styles
var a=e.polyline
if(delete e.polyline,e.center)n.push("center="+e.center),delete e.center
else if(e.address)n.push("center="+e.address),delete e.address
else if(e.lat)n.push(["center=",e.lat,",",e.lng].join("")),delete e.lat,delete e.lng
else if(e.visible){var l=encodeURI(e.visible.join("|"))
n.push("visible="+l)}var p=e.size
p?(p.join&&(p=p.join("x")),delete e.size):p="630x300",n.push("size="+p),e.zoom||!1===e.zoom||(e.zoom=15)
var c=!e.hasOwnProperty("sensor")||!!e.sensor
for(var g in delete e.sensor,n.push("sensor="+c),e)e.hasOwnProperty(g)&&n.push(g+"="+e[g])
if(i)for(var h,u,d=0;o=i[d];d++){for(var g in h=[],o.size&&"normal"!==o.size?(h.push("size:"+o.size),delete o.size):o.icon&&(h.push("icon:"+encodeURI(o.icon)),delete o.icon),o.color&&(h.push("color:"+o.color.replace("#","0x")),delete o.color),o.label&&(h.push("label:"+o.label[0].toUpperCase()),delete o.label),u=o.address?o.address:o.lat+","+o.lng,delete o.address,delete o.lat,delete o.lng,o)o.hasOwnProperty(g)&&h.push(g+":"+o[g])
h.length||0===d?(h.push(u),h=h.join("|"),n.push("markers="+encodeURI(h))):(h=n.pop()+encodeURI("|"+u),n.push(h))}if(s)for(d=0;d<s.length;d++){var m=[]
s[d].featureType&&m.push("feature:"+s[d].featureType.toLowerCase()),s[d].elementType&&m.push("element:"+s[d].elementType.toLowerCase())
for(var f=0;f<s[d].stylers.length;f++)for(var y in s[d].stylers[f]){var v=s[d].stylers[f][y]
"hue"!=y&&"color"!=y||(v="0x"+v.substring(1)),m.push(y+":"+v)}var w=m.join("|")
""!=w&&n.push("style="+w)}if(a){if(o=a,a=[],o.strokeWeight&&a.push("weight:"+parseInt(o.strokeWeight,10)),o.strokeColor){var k=t(o.strokeColor,o.strokeOpacity)
a.push("color:"+k)}if(o.fillColor){var L=t(o.fillColor,o.fillOpacity)
a.push("fillcolor:"+L)}var b=o.path
if(b.join){var _
for(f=0;_=b[f];f++)a.push(_.join(","))}else a.push("enc:"+b)
a=a.join("|"),n.push("path="+encodeURI(a))}var M=window.devicePixelRatio||1
return n.push("scale="+M),r+(n=n.join("&"))},g.prototype.addMapType=function(e,t){if(!t.hasOwnProperty("getTileUrl")||"function"!=typeof t.getTileUrl)throw"'getTileUrl' function required."
t.tileSize=t.tileSize||new google.maps.Size(256,256)
var o=new google.maps.ImageMapType(t)
this.map.mapTypes.set(e,o)},g.prototype.addOverlayMapType=function(e){if(!e.hasOwnProperty("getTile")||"function"!=typeof e.getTile)throw"'getTile' function required."
var t=e.index
delete e.index,this.map.overlayMapTypes.insertAt(t,e)},g.prototype.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e)},g.prototype.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,{name:e.styledMapName})
this.map.mapTypes.set(e.mapTypeId,t)},g.prototype.setStyle=function(e){this.map.setMapTypeId(e)},g.prototype.createPanorama=function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||(e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng()),this.panorama=g.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama},g.createPanorama=function(e){var t=p(e.el,e.context)
e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng
for(var o=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],r=n({visible:!0},e),i=0;i<o.length;i++)delete r[o[i]]
var s=new google.maps.StreetViewPanorama(t,r)
for(i=0;i<o.length;i++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,(function(){e[o].apply(this)}))}(s,o[i])
return s},g.prototype.on=function(e,t){return g.on(e,this,t)},g.prototype.off=function(e){g.off(e,this)},g.prototype.once=function(e,t){return g.once(e,this,t)},g.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],g.on=function(e,t,o){if(-1==g.custom_events.indexOf(e))return t instanceof g&&(t=t.map),google.maps.event.addListener(t,e,o)
var n={handler:o,eventName:e}
return t.registered_events[e]=t.registered_events[e]||[],t.registered_events[e].push(n),n},g.off=function(e,t){-1==g.custom_events.indexOf(e)?(t instanceof g&&(t=t.map),google.maps.event.clearListeners(t,e)):t.registered_events[e]=[]},g.once=function(e,t,o){if(-1==g.custom_events.indexOf(e))return t instanceof g&&(t=t.map),google.maps.event.addListenerOnce(t,e,o)},g.fire=function(e,t,o){if(-1==g.custom_events.indexOf(e))google.maps.event.trigger(t,e,Array.prototype.slice.apply(arguments).slice(2))
else if(e in o.registered_events)for(var n=o.registered_events[e],r=0;r<n.length;r++)!function(e,t,o){e.apply(t,[o])}(n[r].handler,o,t)},g.geolocate=function(e){var t=e.always||e.complete
navigator.geolocation?navigator.geolocation.getCurrentPosition((function(o){e.success(o),t&&t()}),(function(o){e.error(o),t&&t()}),e.options):(e.not_supported(),t&&t())},g.geocode=function(e){this.geocoder=new google.maps.Geocoder
var t=e.callback
e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&(e.latLng=new google.maps.LatLng(e.lat,e.lng)),delete e.lat,delete e.lng,delete e.callback,this.geocoder.geocode(e,(function(e,o){t(e,o)}))},"object"==typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(e){for(var t,o=new google.maps.LatLngBounds,n=this.getPaths(),r=0;r<n.getLength();r++){t=n.getAt(r)
for(var i=0;i<t.getLength();i++)o.extend(t.getAt(i))}return o}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds()
if(null!==t&&!t.contains(e))return!1
for(var o=!1,n=this.getPaths().getLength(),r=0;r<n;r++)for(var i=this.getPaths().getAt(r),s=i.getLength(),a=s-1,l=0;l<s;l++){var p=i.getAt(l),c=i.getAt(a);(p.lng()<e.lng()&&c.lng()>=e.lng()||c.lng()<e.lng()&&p.lng()>=e.lng())&&p.lat()+(e.lng()-p.lng())/(c.lng()-p.lng())*(c.lat()-p.lat())<e.lat()&&(o=!o),a=l}return o}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(e){return!google.maps.geometry||google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),e)<=this.getRadius()}),google.maps.Rectangle.prototype.containsLatLng=function(e){return this.getBounds().contains(e)},google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e)},google.maps.Marker.prototype.setFences=function(e){this.fences=e},google.maps.Marker.prototype.addFence=function(e){this.fences.push(e)},google.maps.Marker.prototype.getId=function(){return this.__gm_id}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError
var t=Object(this),o=t.length>>>0
if(0===o)return-1
var n=0
if(arguments.length>1&&((n=Number(arguments[1]))!=n?n=0:0!=n&&n!=1/0&&n!=-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=o)return-1
for(var r=n>=0?n:Math.max(o-Math.abs(n),0);r<o;r++)if(r in t&&t[r]===e)return r
return-1}),g}))
