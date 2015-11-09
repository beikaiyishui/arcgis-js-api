// COPYRIGHT © 2015 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["../../kernel","../_EventedWidget","../_Tooltip","./recommendedScales","./ScaleRanges","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-prop","dojo/dom-style","dojo/has","dojo/keys","dojo/number","dojo/on","dojo/query","dojo/string","dojox/html/entities","dojox/lang/functional/object","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ScaleMenu.html","dijit/form/TextBox"],function(e,t,s,a,i,n,l,c,r,o,d,u,h,m,p,S,_,g,f,b,j,T,L,M){var v=c([t,n,l,s],{declaredClass:"esri.dijit.VisibleScaleRangeSlider.ScaleMenu",templateString:M,baseClass:"esriScaleMenu",labels:L.widgets.visibleScaleRangeSlider,css:{header:"esriHeader",section:"esriSection",content:"esriContent",current:"esriCurrent",input:"esriInput",list:"esriList",item:"esriItem",inline:"esriInline",selectable:"esriSelectable",hidden:"esriHidden"},_elementValueMap:null,_elements:null,_scaleRangeCategories:null,_scaleRanges:null,_originalScaleInputValue:null,constructor:function(){this._scaleRanges=new i},buildRendering:function(){this.inherited(arguments);var e,t=this.labels,s=t.featuredScaleLabels,i=a.all(),n=this.css.item+" "+this.css.selectable;r.forEach(T.keys(i),function(t){e=s[t];var a=i[t],l=b.substitute(e,{scaleLabel:this._formatScale(a)});u.create("li",{innerHTML:l,className:n},this.dap_recommendedScales)},this);var l=u.create("span",{innerHTML:t.setTo,className:this.css.inline}),c=u.create("span",{innerHTML:t.selectOne,className:this.css.inline});h.set(this.dap_scaleListHeader,"innerHTML",b.substitute(t.setToSelectOne,{setTo:l.outerHTML,selectOne:c.outerHTML}))},_formatScale:function(e){return"1:"+_.format(e)},postCreate:function(){this.inherited(arguments);var e="."+this.css.item+"."+this.css.selectable;this.own(g(this.domNode,g.selector(e,"click"),o.hitch(this,function(e){this._emitScaleSelected(this._parseScale(e.target.innerHTML))}))),this.dap_scaleInput.on("keyDown",o.hitch(this,function(e){e.keyCode===S.ENTER&&this._handleCustomScaleInput()})),this.createTooltip(this.dap_scaleInput,this.labels.customScaleInputTooltip)},_emitScaleSelected:function(e){this.emit("scale-selected",{scale:e})},_handleCustomScaleInput:function(){var e=this._parseScale(this.dap_scaleInput.get("value"));isNaN(e)||this._emitScaleSelected(this._scaleRanges.clampScale(e))},_parseScale:function(e){var t=/[^0-9.\s]/g,s=j.decode(e).replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*1:/,"").replace(t,"");return _.parse(s)},_setCurrentScaleAttr:function(e){var t=e.scale,s=this._formatScale(t.current);h.set(this.dap_currentScaleLabel,"innerHTML",e.label),this.dap_scaleInput.set("value",s,!1),this._originalScaleInputValue=s;var a=b.substitute(this.labels.featuredScaleLabels.current,{scaleLabel:this._formatScale(t.map)});h.set(this.dap_currentScaleItem,"innerHTML",a),this._scaleRanges.set("scaleRangeBounds",{minScale:t.min,maxScale:t.max}),this._hideOutOfScaleRanges()},_hideOutOfScaleRanges:function(){var e,t="."+this.css.item+"."+this.css.selectable,s=f(t,this.dap_recommendedScales),a=this._scaleRanges;s.forEach(function(t){e=this._parseScale(t.innerHTML),d.toggle(t,this.css.hidden,!a.contains(e))},this);var i=s.every(function(e){return"none"===m.get(e,"display")});d.toggle(this.dap_recommendedScaleSection,this.css.hidden,i)}});return p("extend-esri")&&o.setObject("dijit.ScaleMenu",v,e),v});