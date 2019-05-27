// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('reagent.core');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id | atom",cljs.core.cst$kw$description,"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tabs,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of tabs | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"tab -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[horizontal-bar-tabs only] given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its tooltip"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[horizontal-bar-tabs only] relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$validate_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[horizontal-bar-tabs & vertical-bar-tabs only] validate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," against ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null)], null)], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10681 = arguments.length;
var i__4642__auto___10682 = (0);
while(true){
if((i__4642__auto___10682 < len__4641__auto___10681)){
args__4647__auto__.push((arguments[i__4642__auto___10682]));

var G__10683 = (i__4642__auto___10682 + (1));
i__4642__auto___10682 = G__10683;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10674){
var map__10675 = p__10674;
var map__10675__$1 = (((((!((map__10675 == null))))?(((((map__10675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10675):map__10675);
var args = map__10675__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10675__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10675__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (p1__10672_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__10672_SHARP_) : id_fn.call(null,p1__10672_SHARP_)));
});})(current,tabs__$1,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__10672#] (= current (id-fn p1__10672#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs nav nav-tabs noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4434__auto__ = ((function (current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function re_com$tabs$iter__10677(s__10678){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (){
var s__10678__$1 = s__10678;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10678__$1);
if(temp__5720__auto__){
var s__10678__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10678__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__10678__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__10680 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__10679 = (0);
while(true){
if((i__10679 < size__4433__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__10679);
cljs.core.chunk_append(b__10680,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__10679,id,label,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10680,s__10678__$2,temp__5720__auto__,current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__10679,id,label,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10680,s__10678__$2,temp__5720__auto__,current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})());

var G__10684 = (i__10679 + (1));
i__10679 = G__10684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10680),re_com$tabs$iter__10677(cljs.core.chunk_rest(s__10678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10680),null);
}
} else {
var t = cljs.core.first(s__10678__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__10678__$2,temp__5720__auto__,current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__10678__$2,temp__5720__auto__,current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__10677(cljs.core.rest(s__10678__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
,null,null));
});})(current,tabs__$1,_,map__10675,map__10675__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
;
return iter__4434__auto__(tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq10673){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10673));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10698 = arguments.length;
var i__4642__auto___10699 = (0);
while(true){
if((i__4642__auto___10699 < len__4641__auto___10698)){
args__4647__auto__.push((arguments[i__4642__auto___10699]));

var G__10700 = (i__4642__auto___10699 + (1));
i__4642__auto___10699 = G__10700;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10688){
var map__10689 = p__10688;
var map__10689__$1 = (((((!((map__10689 == null))))?(((((map__10689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10689):map__10689);
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$tabs);
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$tooltip_DASH_fn);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$vertical_QMARK_);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10689__$1,cljs.core.cst$kw$tooltip_DASH_position);
var showing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function() { 
var G__10701__delegate = function (p__10691){
var map__10692 = p__10691;
var map__10692__$1 = (((((!((map__10692 == null))))?(((((map__10692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10692):map__10692);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10692__$1,cljs.core.cst$kw$model);
var tabs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10692__$1,cljs.core.cst$kw$tabs);
var current = re_com.util.deref_or_value(model__$1);
var tabs__$2 = re_com.util.deref_or_value(tabs__$1);
var _ = (cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not(validate_QMARK_);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (or__4047__auto__,current,tabs__$2,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__10685_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__10685_SHARP_) : id_fn.call(null,p1__10685_SHARP_)));
});})(or__4047__auto__,current,tabs__$2,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,tabs__$2));
}
})())?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(or (not validate?) (not-empty (filter (fn* [p1__10685#] (= current (id-fn p1__10685#))) tabs)))"].join('')))})());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs noselect btn-group",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),attr], 0))], null),(function (){var iter__4434__auto__ = ((function (current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function re_com$tabs$iter__10694(s__10695){
return (new cljs.core.LazySeq(null,((function (current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
var s__10695__$1 = s__10695;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10695__$1);
if(temp__5720__auto__){
var s__10695__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10695__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__10695__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__10697 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__10696 = (0);
while(true){
if((i__10696 < size__4433__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__10696);
cljs.core.chunk_append(b__10697,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,((function (i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__10686_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__10686_SHARP_)){
return null;
} else {
return p1__10686_SHARP_;
}
});})(i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(i__10696,id,label,tooltip,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null)], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4047__auto__ = tooltip_position;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,reagent.core.track(((function (i__10696,id,label,tooltip,selected_QMARK_,the_button,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(i__10696,id,label,tooltip,selected_QMARK_,the_button,t,c__4432__auto__,size__4433__auto__,b__10697,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),cljs.core.cst$kw$anchor,the_button], null);
} else {
return the_button;
}
})());

var G__10702 = (i__10696 + (1));
i__10696 = G__10702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10697),re_com$tabs$iter__10694(cljs.core.chunk_rest(s__10695__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10697),null);
}
} else {
var t = cljs.core.first(s__10695__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,((function (id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__10686_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__10686_SHARP_)){
return null;
} else {
return p1__10686_SHARP_;
}
});})(id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null)], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4047__auto__ = tooltip_position;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,reagent.core.track(((function (id,label,tooltip,selected_QMARK_,the_button,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(id,label,tooltip,selected_QMARK_,the_button,t,s__10695__$2,temp__5720__auto__,current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),cljs.core.cst$kw$anchor,the_button], null);
} else {
return the_button;
}
})(),re_com$tabs$iter__10694(cljs.core.rest(s__10695__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,null,null));
});})(current,tabs__$2,_,map__10692,map__10692__$1,model__$1,tabs__$1,showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
;
return iter__4434__auto__(tabs__$2);
})());
};
var G__10701 = function (var_args){
var p__10691 = null;
if (arguments.length > 0) {
var G__10703__i = 0, G__10703__a = new Array(arguments.length -  0);
while (G__10703__i < G__10703__a.length) {G__10703__a[G__10703__i] = arguments[G__10703__i + 0]; ++G__10703__i;}
  p__10691 = new cljs.core.IndexedSeq(G__10703__a,0,null);
} 
return G__10701__delegate.call(this,p__10691);};
G__10701.cljs$lang$maxFixedArity = 0;
G__10701.cljs$lang$applyTo = (function (arglist__10704){
var p__10691 = cljs.core.seq(arglist__10704);
return G__10701__delegate(p__10691);
});
G__10701.cljs$core$IFn$_invoke$arity$variadic = G__10701__delegate;
return G__10701;
})()
;
;})(showing,map__10689,map__10689__$1,validate_QMARK_,on_change,model,attr,label_fn,tabs,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq10687){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10687));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10709 = arguments.length;
var i__4642__auto___10710 = (0);
while(true){
if((i__4642__auto___10710 < len__4641__auto___10709)){
args__4647__auto__.push((arguments[i__4642__auto___10710]));

var G__10711 = (i__4642__auto___10710 + (1));
i__4642__auto___10710 = G__10711;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10706){
var map__10707 = p__10706;
var map__10707__$1 = (((((!((map__10707 == null))))?(((((map__10707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10707):map__10707);
var args = map__10707__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10707__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$tabs);
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10707__$1,cljs.core.cst$kw$tooltip_DASH_fn,cljs.core.cst$kw$tooltip);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10707__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10707__$1,cljs.core.cst$kw$tooltip_DASH_position);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$tooltip_DASH_fn,tooltip_fn,cljs.core.cst$kw$tooltip_DASH_position,tooltip_position,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$validate_QMARK_,validate_QMARK_], 0));
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq10705){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10705));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10716 = arguments.length;
var i__4642__auto___10717 = (0);
while(true){
if((i__4642__auto___10717 < len__4641__auto___10716)){
args__4647__auto__.push((arguments[i__4642__auto___10717]));

var G__10718 = (i__4642__auto___10717 + (1));
i__4642__auto___10717 = G__10718;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10713){
var map__10714 = p__10713;
var map__10714__$1 = (((((!((map__10714 == null))))?(((((map__10714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10714):map__10714);
var args = map__10714__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10714__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$tabs);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10714__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$class);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$validate_QMARK_,validate_QMARK_], 0));
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq10712){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10712));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10728 = arguments.length;
var i__4642__auto___10729 = (0);
while(true){
if((i__4642__auto___10729 < len__4641__auto___10728)){
args__4647__auto__.push((arguments[i__4642__auto___10729]));

var G__10730 = (i__4642__auto___10729 + (1));
i__4642__auto___10729 = G__10730;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10721){
var map__10722 = p__10721;
var map__10722__$1 = (((((!((map__10722 == null))))?(((((map__10722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10722):map__10722);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$tabs);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10722__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (p1__10719_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__10719_SHARP_) : id_fn.call(null,p1__10719_SHARP_)));
});})(current,tabs__$1,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__10719#] (= current (id-fn p1__10719#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs noselect nav nav-pills",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none"),cljs.core.cst$kw$role,"tabslist"], null),attr], 0)),(function (){var iter__4434__auto__ = ((function (current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function re_com$tabs$iter__10724(s__10725){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (){
var s__10725__$1 = s__10725;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10725__$1);
if(temp__5720__auto__){
var s__10725__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10725__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__10725__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__10727 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__10726 = (0);
while(true){
if((i__10726 < size__4433__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__10726);
cljs.core.chunk_append(b__10727,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__10726,id,label,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10727,s__10725__$2,temp__5720__auto__,current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__10726,id,label,selected_QMARK_,t,c__4432__auto__,size__4433__auto__,b__10727,s__10725__$2,temp__5720__auto__,current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__10731 = (i__10726 + (1));
i__10726 = G__10731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10727),re_com$tabs$iter__10724(cljs.core.chunk_rest(s__10725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10727),null);
}
} else {
var t = cljs.core.first(s__10725__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__10725__$2,temp__5720__auto__,current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__10725__$2,temp__5720__auto__,current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__10724(cljs.core.rest(s__10725__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__10722,map__10722__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
;
return iter__4434__auto__(tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq10720){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10720));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10736 = arguments.length;
var i__4642__auto___10737 = (0);
while(true){
if((i__4642__auto___10737 < len__4641__auto___10736)){
args__4647__auto__.push((arguments[i__4642__auto___10737]));

var G__10738 = (i__4642__auto___10737 + (1));
i__4642__auto___10737 = G__10738;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10733){
var map__10734 = p__10733;
var map__10734__$1 = (((((!((map__10734 == null))))?(((((map__10734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10734):map__10734);
var args = map__10734__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10734__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10734__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10734__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10734__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10734__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10734__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10734__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10734__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq10732){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10732));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10743 = arguments.length;
var i__4642__auto___10744 = (0);
while(true){
if((i__4642__auto___10744 < len__4641__auto___10743)){
args__4647__auto__.push((arguments[i__4642__auto___10744]));

var G__10745 = (i__4642__auto___10744 + (1));
i__4642__auto___10744 = G__10745;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10740){
var map__10741 = p__10740;
var map__10741__$1 = (((((!((map__10741 == null))))?(((((map__10741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10741):map__10741);
var args = map__10741__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10741__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10741__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10741__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10741__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10741__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10741__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10741__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10741__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq10739){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10739));
});

