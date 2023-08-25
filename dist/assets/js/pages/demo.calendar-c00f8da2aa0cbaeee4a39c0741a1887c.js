!function(e){"use strict"
function t(){this.$body=e("body"),this.$modal=new bootstrap.Modal(document.getElementById("event-modal"),{backdrop:"static"}),this.$calendar=e("#calendar"),this.$formEvent=e("#form-event"),this.$btnNewEvent=e("#btn-new-event"),this.$btnDeleteEvent=e("#btn-delete-event"),this.$btnSaveEvent=e("#btn-save-event"),this.$modalTitle=e("#modal-title"),this.$calendarObj=null,this.$selectedEvent=null,this.$newEventData=null}t.prototype.onEventClick=function(t){this.$formEvent[0].reset(),this.$formEvent.removeClass("was-validated"),this.$newEventData=null,this.$btnDeleteEvent.show(),this.$modalTitle.text("Edit Event"),this.$modal.show(),this.$selectedEvent=t.event,e("#event-title").val(this.$selectedEvent.title),e("#event-category").val(this.$selectedEvent.classNames[0])},t.prototype.onSelect=function(e){this.$formEvent[0].reset(),this.$formEvent.removeClass("was-validated"),this.$selectedEvent=null,this.$newEventData=e,this.$btnDeleteEvent.hide(),this.$modalTitle.text("Add New Event"),this.$modal.show(),this.$calendarObj.unselect()},t.prototype.init=function(){var t=new Date(e.now())
new FullCalendar.Draggable(document.getElementById("external-events"),{itemSelector:".external-event",eventData:function(t){return{title:t.innerText,className:e(t).data("class")}}})
var n=[{title:"Meeting with Mr. Shreyu",start:new Date(e.now()+158e6),end:new Date(e.now()+338e6),className:"bg-warning"},{title:"Interview - Backend Engineer",start:t,end:t,className:"bg-success"},{title:"Phone Screen - Frontend Engineer",start:new Date(e.now()+168e6),className:"bg-info"},{title:"Buy Design Assets",start:new Date(e.now()+338e6),end:new Date(e.now()+4056e5),className:"bg-primary"}],a=this
a.$calendarObj=new FullCalendar.Calendar(a.$calendar[0],{slotDuration:"00:15:00",slotMinTime:"08:00:00",slotMaxTime:"19:00:00",themeSystem:"bootstrap",bootstrapFontAwesome:!1,buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List",prev:"Prev",next:"Next"},initialView:"dayGridMonth",handleWindowResize:!0,height:e(window).height()-200,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},initialEvents:n,editable:!0,droppable:!0,selectable:!0,dateClick:function(e){a.onSelect(e)},eventClick:function(e){a.onEventClick(e)}}),a.$calendarObj.render(),a.$btnNewEvent.on("click",(function(e){a.onSelect({date:new Date,allDay:!0})})),a.$formEvent.on("submit",(function(t){t.preventDefault()
var n,l=a.$formEvent[0]
l.checkValidity()?(a.$selectedEvent?(a.$selectedEvent.setProp("title",e("#event-title").val()),a.$selectedEvent.setProp("classNames",[e("#event-category").val()])):(n={title:e("#event-title").val(),start:a.$newEventData.date,allDay:a.$newEventData.allDay,className:e("#event-category").val()},a.$calendarObj.addEvent(n)),a.$modal.hide()):(t.stopPropagation(),l.classList.add("was-validated"))})),e(a.$btnDeleteEvent.on("click",(function(e){a.$selectedEvent&&(a.$selectedEvent.remove(),a.$selectedEvent=null,a.$modal.hide())})))},e.CalendarApp=new t,e.CalendarApp.Constructor=t}(window.jQuery),function(){"use strict"
window.jQuery.CalendarApp.init()}()
