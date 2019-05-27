// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.alert_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.alert');
goog.require('re_com.util');
goog.require('re_demo.utils');
goog.require('reagent.core');
re_demo.alert_list.add_alert = (function re_demo$alert_list$add_alert(alerts,id,alert_type,p__11539){
var map__11540 = p__11539;
var map__11540__$1 = (((((!((map__11540 == null))))?(((((map__11540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11540):map__11540);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11540__$1,cljs.core.cst$kw$heading);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11540__$1,cljs.core.cst$kw$body);
var alert = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$alert_DASH_type,alert_type,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$body,body,cljs.core.cst$kw$padding,"8px",cljs.core.cst$kw$closeable_QMARK_,true], null);
return cljs.core.reset_BANG_(alerts,re_com.util.insert_nth(cljs.core.deref(alerts),(0),alert));
});
re_demo.alert_list.alert_list_demo = (function re_demo$alert_list$alert_list_demo(){
var alerts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_demo.alert_list.add_alert(alerts,(0),cljs.core.cst$kw$danger,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,"Woa! something bad happened",cljs.core.cst$kw$body,"Next time you should take more care pressing that button! Did you read the fine print?  No, I didn't think so."], null));

re_demo.alert_list.add_alert(alerts,(1),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,"No Wait!",cljs.core.cst$kw$body,"The rain in Spain often falls on the mountatins too."], null));

re_demo.alert_list.add_alert(alerts,(2),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,"Here's some info",cljs.core.cst$kw$body,"The rain in Spain falls mainly on the plain."], null));

re_demo.alert_list.add_alert(alerts,(3),cljs.core.cst$kw$warning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,"\"Oh bother\", said Pooh. And then ...",cljs.core.cst$kw$body,"\"Some people care too much. I think it's called love.\""], null));

return ((function (alerts){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"[alert-list ... ]","src/re_com/alert.cljs","src/re_demo/alert_list.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Renders a dynamic list of alert-boxes vertically, with a scroll bar if necessary."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.alert.alert_list_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"600px",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"To insert alerts at the top of the list, click "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Add alert",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100px"], null),cljs.core.cst$kw$on_DASH_click,((function (alerts){
return (function (){
return re_demo.alert_list.add_alert(alerts,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,"New alert",cljs.core.cst$kw$body,"This alert was added by the \"Add alert\" button."], null));
});})(alerts))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Also, try clicking the \"x\" on alerts."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":max-height"], null)," is set to 300px. A scroll bar will appear as necessary."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"For demonstration purposes, a 'dotted' ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":border-style"], null)," is set."], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_list,cljs.core.cst$kw$alerts,alerts,cljs.core.cst$kw$on_DASH_close,((function (alerts){
return (function (p1__11542_SHARP_){
return cljs.core.reset_BANG_(alerts,re_com.util.remove_id_item(p1__11542_SHARP_,cljs.core.deref(alerts)));
});})(alerts))
,cljs.core.cst$kw$max_DASH_height,"300px",cljs.core.cst$kw$border_DASH_style,"1px dashed lightgrey"], null)], null)], null)], null)], null)], null)], null);
});
;})(alerts))
});
re_demo.alert_list.panel = (function re_demo$alert_list$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.alert_list.alert_list_demo], null);
});
