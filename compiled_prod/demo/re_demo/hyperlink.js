// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.hyperlink');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.buttons');
goog.require('re_demo.utils');
goog.require('reagent.core');
re_demo.hyperlink.hyperlink_demo = (function re_demo$hyperlink$hyperlink_demo(){
var disabled_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (disabled_QMARK_,click_count){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"[hyperlink ... ]","src/re_com/buttons.cljs","src/re_demo/hyperlink.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"A blue, clickable hyperlink to which you can attach a click handler."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"If you want to launch external URLs, use the [hyperlink-href] component."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.buttons.hyperlink_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"30px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,cljs.core.cst$kw$label,"Click me",cljs.core.cst$kw$tooltip,"Click here to increase the click count",cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$left_DASH_center,cljs.core.cst$kw$on_DASH_click,((function (disabled_QMARK_,click_count){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(click_count,cljs.core.inc);
});})(disabled_QMARK_,click_count))
,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,["click count = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(click_count))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"15px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level3,cljs.core.cst$kw$label,"Parameters"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":disabled?"], null),cljs.core.cst$kw$model,disabled_QMARK_,cljs.core.cst$kw$on_DASH_change,((function (disabled_QMARK_,click_count){
return (function (val){
return cljs.core.reset_BANG_(disabled_QMARK_,val);
});})(disabled_QMARK_,click_count))
], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(disabled_QMARK_,click_count))
});
re_demo.hyperlink.panel = (function re_demo$hyperlink$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.hyperlink.hyperlink_demo], null);
});
