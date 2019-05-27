// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.md_icon_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.buttons');
goog.require('re_demo.md_circle_icon_button');
goog.require('re_demo.utils');
goog.require('reagent.core');
re_demo.md_icon_button.md_icon_button_demo = (function re_demo$md_icon_button$md_icon_button_demo(){
var selected_icon = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(re_demo.md_circle_icon_button.icons)));
return ((function (selected_icon){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"[md-icon-button ... ]","src/re_com/buttons.cljs","src/re_demo/md_icon_button.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p_span,"Material design icons, and their names, can be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.material_design_hyperlink,"found here"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.buttons.md_icon_button_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"15px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.md_circle_icon_button.example_icons,selected_icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Here's what the chosen icon looks like in an Icon Button."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"90px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":size"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.deref(selected_icon),cljs.core.cst$kw$tooltip,":size set to :smaller",cljs.core.cst$kw$size,cljs.core.cst$kw$smaller,cljs.core.cst$kw$on_DASH_click,((function (selected_icon){
return (function (){
return cljs.core.List.EMPTY;
});})(selected_icon))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.deref(selected_icon),cljs.core.cst$kw$tooltip,"No :size set. This is the default button",cljs.core.cst$kw$on_DASH_click,((function (selected_icon){
return (function (){
return cljs.core.List.EMPTY;
});})(selected_icon))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.deref(selected_icon),cljs.core.cst$kw$tooltip,":size set to :larger",cljs.core.cst$kw$size,cljs.core.cst$kw$larger,cljs.core.cst$kw$on_DASH_click,((function (selected_icon){
return (function (){
return cljs.core.List.EMPTY;
});})(selected_icon))
], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"90px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":emphasise?"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.deref(selected_icon),cljs.core.cst$kw$emphasise_QMARK_,true,cljs.core.cst$kw$tooltip,"This button has :emphasise? set to true",cljs.core.cst$kw$on_DASH_click,((function (selected_icon){
return (function (){
return cljs.core.List.EMPTY;
});})(selected_icon))
], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"90px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":disabled?"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.deref(selected_icon),cljs.core.cst$kw$tooltip,"This button has :disabled? set to true",cljs.core.cst$kw$disabled_QMARK_,true,cljs.core.cst$kw$on_DASH_click,((function (selected_icon){
return (function (){
return cljs.core.List.EMPTY;
});})(selected_icon))
], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(selected_icon))
});
re_demo.md_icon_button.panel = (function re_demo$md_icon_button$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.md_icon_button.md_icon_button_demo], null);
});
