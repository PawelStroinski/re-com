// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.radio_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.misc');
goog.require('re_demo.utils');
goog.require('reagent.core');
re_demo.radio_button.radios_demo = (function re_demo$radio_button$radios_demo(){
var color = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("green");
return ((function (color){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"[radio-button ... ]","src/re_com/misc.cljs","src/re_demo/radio_button.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"A boostrap-styled radio button, with optional label (always displayed to the right)."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Clicking on the label is the same as clicking on the radio button."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.misc.radio_button_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (color){
return (function re_demo$radio_button$radios_demo_$_iter__12061(s__12062){
return (new cljs.core.LazySeq(null,((function (color){
return (function (){
var s__12062__$1 = s__12062;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__12062__$1);
if(temp__5720__auto__){
var s__12062__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12062__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__12062__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__12064 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__12063 = (0);
while(true){
if((i__12063 < size__4433__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__12063);
cljs.core.chunk_append(b__12064,cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,c,cljs.core.cst$kw$value,c,cljs.core.cst$kw$model,color,cljs.core.cst$kw$label_DASH_style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(color)))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,c,cljs.core.cst$kw$font_DASH_weight,"bold"], null):null),cljs.core.cst$kw$on_DASH_change,((function (i__12063,c,c__4432__auto__,size__4433__auto__,b__12064,s__12062__$2,temp__5720__auto__,color){
return (function (p1__12060_SHARP_){
return cljs.core.reset_BANG_(color,p1__12060_SHARP_);
});})(i__12063,c,c__4432__auto__,size__4433__auto__,b__12064,s__12062__$2,temp__5720__auto__,color))
], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c], null)));

var G__12065 = (i__12063 + (1));
i__12063 = G__12065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12064),re_demo$radio_button$radios_demo_$_iter__12061(cljs.core.chunk_rest(s__12062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12064),null);
}
} else {
var c = cljs.core.first(s__12062__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,c,cljs.core.cst$kw$value,c,cljs.core.cst$kw$model,color,cljs.core.cst$kw$label_DASH_style,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(color)))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,c,cljs.core.cst$kw$font_DASH_weight,"bold"], null):null),cljs.core.cst$kw$on_DASH_change,((function (c,s__12062__$2,temp__5720__auto__,color){
return (function (p1__12060_SHARP_){
return cljs.core.reset_BANG_(color,p1__12060_SHARP_);
});})(c,s__12062__$2,temp__5720__auto__,color))
], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c], null)),re_demo$radio_button$radios_demo_$_iter__12061(cljs.core.rest(s__12062__$2)));
}
} else {
return null;
}
break;
}
});})(color))
,null,null));
});})(color))
;
return iter__4434__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","blue"], null));
})())], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(color))
});
re_demo.radio_button.panel = (function re_demo$radio_button$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.radio_button.radios_demo], null);
});
