!function(t){"use strict"
function e(){this.body=t("body"),this.window=t(window),this.menuContainer=t("#leftside-menu-container")}e.prototype._reset=function(){this.body.removeAttr("data-leftbar-theme")},e.prototype.activateCondensedSidebar=function(){this.body.attr("data-leftbar-compact-mode","condensed")},e.prototype.deactivateCondensedSidebar=function(){this.body.removeAttr("data-leftbar-compact-mode")},e.prototype.activateScrollableSidebar=function(){this.body.attr("data-leftbar-compact-mode","scrollable")},e.prototype.deactivateScrollableSidebar=function(){this.body.removeAttr("data-leftbar-compact-mode")},e.prototype.activateDefaultTheme=function(){this._reset()},e.prototype.activateLightTheme=function(){this._reset(),this.body.attr("data-leftbar-theme","light")},e.prototype.activateDarkTheme=function(){this._reset(),this.body.attr("data-leftbar-theme","dark")},e.prototype.initMenu=function(){var e,a=this
this._reset(),t(document).on("click",".button-menu-mobile",(function(t){t.preventDefault(),a.body.toggleClass("sidebar-enable"),576<=a.window.width()&&("condensed"===a.body.attr("data-leftbar-compact-mode")?a.deactivateCondensedSidebar():a.activateCondensedSidebar())})),t(".side-nav").length&&(e=t(".side-nav li .collapse"),t(".side-nav li [data-bs-toggle='collapse']").on("click",(function(t){return!1})),e.on({"show.bs.collapse":function(e){var a=t(e.target).parents(".collapse.show")
t(".side-nav .collapse.show").not(e.target).not(a).collapse("hide")}}),t(".side-nav a").each((function(){var e,a,o,i=window.location.href.split(/[?#]/)[0]
this.href==i&&(t(this).addClass("active"),t(this).parent().addClass("menuitem-active"),t(this).parent().parent().parent().addClass("show"),t(this).parent().parent().parent().parent().addClass("menuitem-active"),"sidebar-menu"!==(e=t(this).parent().parent().parent().parent().parent().parent()).attr("id")&&e.addClass("show"),t(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"),"wrapper"!==(a=t(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id")&&a.addClass("show"),(o=t(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body")||o.addClass("menuitem-active"))})))
var o=document.querySelectorAll("ul.navbar-nav .dropdown .dropdown-toggle"),i=!1
o.forEach((function(t){t.addEventListener("click",(function(e){var a
t.parentElement.classList.contains("nav-item")||(i=!0,a=t.parentElement.parentElement.parentElement.querySelector(".nav-link"),bootstrap.Dropdown.getInstance(a).show(),t.ariaExpanded?bootstrap.Dropdown.getInstance(t).hide():bootstrap.Dropdown.getInstance(a).show(),i=!0)})),t.addEventListener("hide.bs.dropdown",(function(t){i&&(t.preventDefault(),t.stopPropagation(),i=!1)})),t.addEventListener("show.bs.dropdown",(function(e){i||t.parentElement.classList.contains("nav-item")||(e.preventDefault(),e.stopPropagation(),i=!0)}))}))},e.prototype.init=function(){this.initMenu()},t.LeftSidebar=new e,t.LeftSidebar.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){this.$body=t("body"),this.$window=t(window)}e.prototype.initMenu=function(){t(".topnav-menu").length&&(t(".topnav-menu li a").each((function(){var e=window.location.href.split(/[?#]/)[0]
this.href==e&&(t(this).addClass("active"),t(this).parent().parent().addClass("active"),t(this).parent().parent().parent().parent().addClass("active"),t(this).parent().parent().parent().parent().parent().parent().addClass("active"))})),t(".navbar-toggle").on("click",(function(){t(this).toggleClass("open"),t("#navigation").slideToggle(400)})))},e.prototype.initSearch=function(){var e=t(".navbar-custom .dropdown:not(.app-search)")
t(document).on("click",(function(e){return"top-search"==e.target.id||e.target.closest("#search-dropdown")?t("#search-dropdown").addClass("d-block"):t("#search-dropdown").removeClass("d-block"),!0})),t("#top-search").on("focus",(function(a){return a.preventDefault(),e.children(".dropdown-menu.show").removeClass("show"),t("#search-dropdown").addClass("d-block"),!1})),e.on("show.bs.dropdown",(function(){t("#search-dropdown").removeClass("d-block")}))},e.prototype.init=function(){this.initMenu(),this.initSearch()},t.Topbar=new e,t.Topbar.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){this.body=t("body"),this.window=t(window)}e.prototype._selectOptionsFromConfig=function(){var e=t.App.getLayoutConfig()
if(e){switch(t("input[type=checkbox]").prop("checked",!1),e.sideBarTheme){case"default":t("#default-check").prop("checked",!0)
break
case"light":t("#light-check").prop("checked",!0)
break
case"dark":t("#dark-check").prop("checked",!0)}e.isBoxed?t("#boxed-check").prop("checked",!0):t("#fluid-check").prop("checked",!0),e.isCondensed&&t("#condensed-check").prop("checked",!0),e.isScrollable&&t("#scrollable-check").prop("checked",!0),e.isScrollable||e.isCondensed||t("#fixed-check").prop("checked",!0),e.isDarkModeEnabled||(t("#light-mode-check").prop("checked",!0),"vertical"===e.layout&&t("input[type=checkbox][name=theme]").prop("disabled",!1)),e.isDarkModeEnabled&&(t("#dark-mode-check").prop("checked",!0),"vertical"===e.layout&&t("input[type=checkbox][name=theme]").prop("disabled",!1))}},e.prototype.toggleRightSideBar=function(){this.body.toggleClass("end-bar-enabled"),this._selectOptionsFromConfig()},e.prototype.init=function(){var e=this
t(document).on("click",".end-bar-toggle",(function(){e.toggleRightSideBar()})),t(document).on("click","body",(function(e){0<t(e.target).closest(".end-bar-toggle, .end-bar").length||0<t(e.target).closest(".leftside-menu, .side-nav").length||t(e.target).hasClass("button-menu-mobile")||0<t(e.target).closest(".button-menu-mobile").length||(t("body").removeClass("end-bar-enabled"),t("body").removeClass("sidebar-enable"))})),t("input[type=checkbox][name=width]").change((function(){switch(t(this).val()){case"fluid":t.App.activateFluid()
break
case"boxed":t.App.activateBoxed()}e._selectOptionsFromConfig()})),t("input[type=checkbox][name=theme]").change((function(){switch(t(this).val()){case"default":t.App.activateDefaultSidebarTheme()
break
case"light":t.App.activateLightSidebarTheme()
break
case"dark":t.App.activateDarkSidebarTheme()}e._selectOptionsFromConfig()})),t("input[type=checkbox][name=compact]").change((function(){switch(t(this).val()){case"fixed":t.App.deactivateCondensedSidebar(),t.App.deactivateScrollableSidebar()
break
case"scrollable":t.App.activateScrollableSidebar()
break
case"condensed":t.App.activateCondensedSidebar()}e._selectOptionsFromConfig()})),t("input[type=checkbox][name=color-scheme-mode]").change((function(){switch(t(this).val()){case"light":t.App.deactivateDarkMode(),t("#default-check").prop("checked",!0),t("input[type=checkbox][name=theme]").prop("disabled",!1)
break
case"dark":t.App.activateDarkMode(),t("#dark-check").prop("checked",!0)}e._selectOptionsFromConfig()})),t("#resetBtn").on("click",(function(a){a.preventDefault(),t.App.resetLayout((function(){e._selectOptionsFromConfig()}))}))},t.RightBar=new e,t.RightBar.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){this.body=t("body"),this.window=t(window),this._config={},this.defaultSelectedStyle=null}var a="default",o="light",i="dark",n={sideBarTheme:a,isBoxed:!1,isCondensed:!1,isScrollable:!1,isDarkModeEnabled:!1}
e.prototype._saveConfig=function(e){t.extend(this._config,e)},e.prototype._getStoredConfig=function(){var t=this.body.data("layoutConfig"),e=n
return t&&(e.sideBarTheme=t.leftSideBarTheme,e.isBoxed=t.layoutBoxed,e.isCondensed=t.leftSidebarCondensed,e.isScrollable=t.leftSidebarScrollable,e.isDarkModeEnabled=t.darkMode),e},e.prototype._applyConfig=function(){var e=this
switch(this._config=this._getStoredConfig(),t.LeftSidebar.init(),e._config.sideBarTheme){case i:e.activateDarkSidebarTheme()
break
case o:e.activateLightSidebarTheme()}e._config.isDarkModeEnabled?e.activateDarkMode():e.deactivateDarkMode(),e._config.isBoxed&&e.activateBoxed(),e._config.isCondensed&&e.activateCondensedSidebar(),e._config.isScrollable&&e.activateScrollableSidebar()},e.prototype._adjustLayout=function(){var t
750<=this.window.width()&&this.window.width()<=1028?this.activateCondensedSidebar(!0):(t=this._getStoredConfig()).isCondensed||t.isScrollable||this.deactivateCondensedSidebar()},e.prototype.activateFluid=function(){this._saveConfig({isBoxed:!1}),this.body.attr("data-layout-mode","fluid")},e.prototype.activateBoxed=function(){this._saveConfig({isBoxed:!0}),this.body.attr("data-layout-mode","boxed")},e.prototype.activateCondensedSidebar=function(e){e||this._saveConfig({isCondensed:!0,isScrollable:!1}),t.LeftSidebar.activateCondensedSidebar()},e.prototype.deactivateCondensedSidebar=function(){this._saveConfig({isCondensed:!1}),t.LeftSidebar.deactivateCondensedSidebar()},e.prototype.activateScrollableSidebar=function(){this._saveConfig({isScrollable:!0,isCondensed:!1}),t.LeftSidebar.activateScrollableSidebar()},e.prototype.deactivateScrollableSidebar=function(){this._saveConfig({isScrollable:!1}),t.LeftSidebar.deactivateScrollableSidebar()},e.prototype.activateDefaultSidebarTheme=function(){t.LeftSidebar.activateDefaultTheme(),this._saveConfig({sideBarTheme:a})},e.prototype.activateLightSidebarTheme=function(){t.LeftSidebar.activateLightTheme(),this._saveConfig({sideBarTheme:o})},e.prototype.activateDarkSidebarTheme=function(){t.LeftSidebar.activateDarkTheme(),this._saveConfig({sideBarTheme:i})},e.prototype.activateDarkMode=function(){var e=this
this.body.css("visibility","hidden"),t("#light-style").attr("disabled",!0),t("#dark-style").removeAttr("disabled"),setTimeout((function(){e.body.css("visibility","visible")}),500),t.LeftSidebar.activateDarkTheme(),this._saveConfig({isDarkModeEnabled:!0,sideBarTheme:i})},e.prototype.deactivateDarkMode=function(){var e=this
this.body.css("visibility","hidden"),t("#dark-style").attr("disabled",!0),t("#light-style").removeAttr("disabled"),setTimeout((function(){e.body.css("visibility","visible")}),500),this._saveConfig({isDarkModeEnabled:!1})},e.prototype.clearSavedConfig=function(){this._config=n},e.prototype.getConfig=function(){return this._config},e.prototype.reset=function(e){this.clearSavedConfig()
var a=this
t("#main-style-container").length&&(a.defaultSelectedStyle=t("#main-style-container").attr("href")),a.deactivateCondensedSidebar(),a.deactivateDarkMode(),a.activateDefaultSidebarTheme(),a.activateFluid(),e()},e.prototype.init=function(){var e=this
t("#main-style-container").length&&(e.defaultSelectedStyle=t("#main-style-container").attr("href")),this._applyConfig(),this._adjustLayout(),this.window.on("resize",(function(t){t.preventDefault(),e._adjustLayout()})),t.Topbar.init()},t.LayoutThemeApp=new e,t.LayoutThemeApp.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){this.$body=t("body"),this.$portletIdentifier=".card",this.$portletCloser='.card a[data-bs-toggle="remove"]',this.$portletRefresher='.card a[data-bs-toggle="reload"]'}e.prototype.init=function(){var e=this
t(document).on("click",this.$portletCloser,(function(a){a.preventDefault()
var o=t(this).closest(e.$portletIdentifier),i=o.parent()
o.remove(),0==i.children().length&&i.remove()})),t(document).on("click",this.$portletRefresher,(function(a){a.preventDefault()
var o=t(this).closest(e.$portletIdentifier)
o.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>')
var i=o.find(".card-disabled")
setTimeout((function(){i.fadeOut("fast",(function(){i.remove()}))}),500+5*Math.random()*300)}))},t.Portlet=new e,t.Portlet.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){this.$body=t("body"),this.$window=t(window)}e.prototype.initSelect2=function(){t('[data-toggle="select2"]').select2()},e.prototype.initMask=function(){t('[data-toggle="input-mask"]').each((function(e,a){var o=t(a).data("maskFormat"),i=t(a).data("reverse")
null!=i?t(a).mask(o,{reverse:i}):t(a).mask(o)}))},e.prototype.initDateRange=function(){var e={cancelClass:"btn-light",applyButtonClasses:"btn-success"}
t('[data-toggle="date-picker"]').each((function(a,o){var i=t.extend({},e,t(o).data())
t(o).daterangepicker(i)}))
var a={startDate:moment().subtract(29,"days"),endDate:moment(),ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]}}
t('[data-toggle="date-picker-range"]').each((function(e,o){var i=t.extend({},a,t(o).data()),n=i.targetDisplay
t(o).daterangepicker(i,(function(e,a){n&&t(n).html(e.format("MMMM D, YYYY")+" - "+a.format("MMMM D, YYYY"))}))}))},e.prototype.initTimePicker=function(){var e={showSeconds:!0,icons:{up:"mdi mdi-chevron-up",down:"mdi mdi-chevron-down"}}
t('[data-toggle="timepicker"]').each((function(a,o){var i=t.extend({},e,t(o).data())
t(o).timepicker(i)}))},e.prototype.initTouchspin=function(){var e={}
t('[data-toggle="touchspin"]').each((function(a,o){var i=t.extend({},e,t(o).data())
t(o).TouchSpin(i)}))},e.prototype.initMaxlength=function(){var e={warningClass:"badge bg-success",limitReachedClass:"badge bg-danger",separator:" out of ",preText:"You typed ",postText:" chars available.",placement:"bottom"}
t('[data-toggle="maxlength"]').each((function(a,o){var i=t.extend({},e,t(o).data())
t(o).maxlength(i)}))},e.prototype.init=function(){this.initSelect2(),this.initMask(),this.initDateRange(),this.initTimePicker(),this.initTouchspin(),this.initMaxlength()},t.AdvanceFormApp=new e,t.AdvanceFormApp.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){}e.prototype.send=function(e,a,o,i,n,r,s,d){var c={heading:e,text:a,position:o,loaderBg:i,icon:n,hideAfter:r=r||3e3,stack:s=s||1}
c.showHideTransition=d||"fade",t.toast().reset("all"),t.toast(c)},t.NotificationApp=new e,t.NotificationApp.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){}e.prototype.initTooltipPlugin=function(){t.fn.tooltip&&t('[data-toggle="tooltip"]').tooltip()},e.prototype.initPopoverPlugin=function(){t.fn.popover&&t('[data-bs-toggle="popover"]').each((function(e,a){t(this).popover()}))},e.prototype.initToastPlugin=function(){t.fn.toast&&t('[data-toggle="toast"]').toast()},e.prototype.initFormValidation=function(){t(".needs-validation").on("submit",(function(e){return t(this).addClass("was-validated"),!1!==t(this)[0].checkValidity()||(e.preventDefault(),e.stopPropagation(),!1)}))},e.prototype.initShowHidePassword=function(){t("[data-password]").on("click",(function(){"false"==t(this).attr("data-password")?(t(this).siblings("input").attr("type","text"),t(this).attr("data-password","true"),t(this).addClass("show-password")):(t(this).siblings("input").attr("type","password"),t(this).attr("data-password","false"),t(this).removeClass("show-password"))}))},e.prototype.initMultiDropdown=function(){t(".dropdown-menu a.dropdown-toggle").on("click",(function(){return t(this).next().hasClass("show")||t(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),t(this).next(".dropdown-menu").toggleClass("show"),!1}))},e.prototype.initSyntaxHighlight=function(){t(document).ready((function(t){document.querySelectorAll("pre span.escape").forEach((function(t,e){for(var a=1/0,o=(t.classList.contains("escape"),t.innerText).replace(/^\n/,"").trimRight().split("\n"),i=0;i<o.length;i++)o[i].trim()&&(a=Math.min(o[i].search(/\S/),a))
var n=[]
for(i=0;i<o.length;i++)n.push(o[i].replace(new RegExp("^ {"+a+"}","g"),""))
t.innerText=n.join("\n")})),document.querySelectorAll("pre span.escape").forEach((function(t){hljs.highlightBlock(t)}))}))},e.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initToastPlugin(),this.initFormValidation(),this.initShowHidePassword(),this.initMultiDropdown(),this.initSyntaxHighlight()},t.Components=new e,t.Components.Constructor=e}(window.jQuery),function(t){"use strict"
function e(){this.$body=t("body"),this.$window=t(window)}e.prototype.activateDefaultSidebarTheme=function(){t.LayoutThemeApp.activateDefaultSidebarTheme()},e.prototype.activateLightSidebarTheme=function(){t.LayoutThemeApp.activateLightSidebarTheme()},e.prototype.activateDarkSidebarTheme=function(){t.LayoutThemeApp.activateDarkSidebarTheme()},e.prototype.activateCondensedSidebar=function(){t.LayoutThemeApp.activateCondensedSidebar()},e.prototype.deactivateCondensedSidebar=function(){t.LayoutThemeApp.deactivateCondensedSidebar()},e.prototype.activateScrollableSidebar=function(){t.LayoutThemeApp.activateScrollableSidebar()},e.prototype.deactivateScrollableSidebar=function(){t.LayoutThemeApp.deactivateScrollableSidebar()},e.prototype.activateBoxed=function(){t.LayoutThemeApp.activateBoxed()},e.prototype.activateFluid=function(){t.LayoutThemeApp.activateFluid()},e.prototype.activateDarkMode=function(){t.LayoutThemeApp.activateDarkMode()},e.prototype.deactivateDarkMode=function(){t.LayoutThemeApp.deactivateDarkMode()},e.prototype.clearSavedConfig=function(){t.LayoutThemeApp.clearSavedConfig()},e.prototype.getLayoutConfig=function(){return t.LayoutThemeApp.getConfig()},e.prototype.resetLayout=function(e){t.LayoutThemeApp.reset(e)},e.prototype.init=function(){t.LayoutThemeApp.init(),setTimeout((function(){document.body.classList.remove("loading")}),400),t.RightBar.init()
var e=this.$body.data("layoutConfig")
window.sessionStorage&&e&&e.hasOwnProperty("showRightSidebarOnStart")&&e.showRightSidebarOnStart&&(sessionStorage.getItem("_HYPER_VISITED_")||(t.RightBar.toggleRightSideBar(),sessionStorage.setItem("_HYPER_VISITED_",!0))),t.Portlet.init(),t.AdvanceFormApp.init(),t.Components.init(),t(window).on("load",(function(){t("#status").fadeOut(),t("#preloader").delay(350).fadeOut("slow")})),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(t){return new bootstrap.Popover(t)})),document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(t){t.addEventListener("mouseover",(function(e){new bootstrap.Tooltip(t).show()}))})),[].slice.call(document.querySelectorAll(".offcanvas")).map((function(t){return new bootstrap.Offcanvas(t)}))
var a=document.getElementById("toastPlacement")
a&&document.getElementById("selectToastPlacement").addEventListener("change",(function(){a.dataset.originalClass||(a.dataset.originalClass=a.className),a.className=a.dataset.originalClass+" "+this.value})),[].slice.call(document.querySelectorAll(".toast")).map((function(t){return new bootstrap.Toast(t)})),document.getElementById("light-style").href.includes("rtl.min.html")&&(document.getElementsByTagName("html")[0].dir="rtl"),document.getElementById("dark-style").href.includes("rtl.min.html")&&(document.getElementsByTagName("html")[0].dir="rtl")},t.App=new e,t.App.Constructor=e}(window.jQuery),function(){"use strict"
window.jQuery.App.init()}()
