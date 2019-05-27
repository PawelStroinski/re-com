// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.popover_dialog_demo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.util');
goog.require('reagent.core');
re_demo.popover_dialog_demo.popover_body = (function re_demo$popover_dialog_demo$popover_body(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11493 = arguments.length;
var i__4642__auto___11494 = (0);
while(true){
if((i__4642__auto___11494 < len__4641__auto___11493)){
args__4647__auto__.push((arguments[i__4642__auto___11494]));

var G__11495 = (i__4642__auto___11494 + (1));
i__4642__auto___11494 = G__11495;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return re_demo.popover_dialog_demo.popover_body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

re_demo.popover_dialog_demo.popover_body.cljs$core$IFn$_invoke$arity$variadic = (function (dialog_data,on_change,p__11490){
var map__11491 = p__11490;
var map__11491__$1 = (((((!((map__11491 == null))))?(((((map__11491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11491):map__11491);
var showing_injected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11491__$1,cljs.core.cst$kw$showing_DASH_injected_QMARK_);
var position_injected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11491__$1,cljs.core.cst$kw$position_DASH_injected);
var dialog_data__$1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(dialog_data));
var submit_dialog = ((function (dialog_data__$1,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected){
return (function (new_dialog_data){
cljs.core.reset_BANG_(showing_injected_QMARK_,false);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_dialog_data) : on_change.call(null,new_dialog_data));
});})(dialog_data__$1,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected))
;
var cancel_dialog = ((function (dialog_data__$1,submit_dialog,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected){
return (function (){
return cljs.core.reset_BANG_(showing_injected_QMARK_,false);
});})(dialog_data__$1,submit_dialog,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected))
;
var show_tooltip_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tooltip_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dialog_data__$1)),"2"));
return ((function (dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,cljs.core.cst$kw$showing_DASH_injected_QMARK_,showing_injected_QMARK_,cljs.core.cst$kw$position_DASH_injected,position_injected,cljs.core.cst$kw$on_DASH_cancel,cancel_dialog,cljs.core.cst$kw$width,"400px",cljs.core.cst$kw$backdrop_DASH_opacity,0.3,cljs.core.cst$kw$title,"This is the title",cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"The body of a popover can act like a dialog box containing standard input controls."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"15px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"Don't show extra popover",cljs.core.cst$kw$value,"1",cljs.core.cst$kw$model,cljs.core.cst$kw$tooltip_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dialog_data__$1)),cljs.core.cst$kw$on_DASH_change,((function (dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected){
return (function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dialog_data__$1,cljs.core.assoc,cljs.core.cst$kw$tooltip_DASH_state,val);

return cljs.core.reset_BANG_(show_tooltip_QMARK_,false);
});})(dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"Show extra popover",cljs.core.cst$kw$value,"2",cljs.core.cst$kw$model,cljs.core.cst$kw$tooltip_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dialog_data__$1)),cljs.core.cst$kw$on_DASH_change,((function (dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected){
return (function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dialog_data__$1,cljs.core.assoc,cljs.core.cst$kw$tooltip_DASH_state,val);

return cljs.core.reset_BANG_(show_tooltip_QMARK_,true);
});})(dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zmdi zmdi-check"], null)], null)," Apply"], null),cljs.core.cst$kw$on_DASH_click,((function (dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected){
return (function (){
return submit_dialog(cljs.core.deref(dialog_data__$1));
});})(dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected))
,cljs.core.cst$kw$class,"btn-primary"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,cljs.core.cst$kw$showing_QMARK_,show_tooltip_QMARK_,cljs.core.cst$kw$position,cljs.core.cst$kw$right_DASH_below,cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zmdi zmdi-close"], null)], null)," Cancel"], null),cljs.core.cst$kw$on_DASH_click,cancel_dialog], null),cljs.core.cst$kw$popover,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,cljs.core.cst$kw$width,"250px",cljs.core.cst$kw$title,"This is the cancel button",cljs.core.cst$kw$close_DASH_button_QMARK_,false,cljs.core.cst$kw$body,"You can even have a popover over a popover!"], null)], null)], null)], null)], null)], null)], null);
});
;})(dialog_data__$1,submit_dialog,cancel_dialog,show_tooltip_QMARK_,map__11491,map__11491__$1,showing_injected_QMARK_,position_injected))
});

re_demo.popover_dialog_demo.popover_body.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_demo.popover_dialog_demo.popover_body.cljs$lang$applyTo = (function (seq11487){
var G__11488 = cljs.core.first(seq11487);
var seq11487__$1 = cljs.core.next(seq11487);
var G__11489 = cljs.core.first(seq11487__$1);
var seq11487__$2 = cljs.core.next(seq11487__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11488,G__11489,seq11487__$2);
});

re_demo.popover_dialog_demo.popover_dialog_demo = (function re_demo$popover_dialog_demo$popover_dialog_demo(position){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dialog_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tooltip_DASH_state,"2"], null));
var on_change = ((function (showing_QMARK_,dialog_data){
return (function (new_dialog_data){
return cljs.core.reset_BANG_(dialog_data,new_dialog_data);
});})(showing_QMARK_,dialog_data))
;
return ((function (showing_QMARK_,dialog_data,on_change){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$position,cljs.core.deref(position),cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Dialog box",cljs.core.cst$kw$on_DASH_click,((function (showing_QMARK_,dialog_data,on_change){
return (function (){
return cljs.core.reset_BANG_(showing_QMARK_,true);
});})(showing_QMARK_,dialog_data,on_change))
,cljs.core.cst$kw$class,"btn btn-danger"], null),cljs.core.cst$kw$popover,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.popover_dialog_demo.popover_body,dialog_data,on_change], null)], null);
});
;})(showing_QMARK_,dialog_data,on_change))
});
