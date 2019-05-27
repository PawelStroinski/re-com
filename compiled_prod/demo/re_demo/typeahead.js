// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.typeahead');
goog.require('re_demo.utils');
goog.require('reagent.core');
goog.require('cljs.core.async');
re_demo.typeahead.md_classes_for_icon = (function re_demo$typeahead$md_classes_for_icon(name){
return ["zmdi zmdi-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," zmdi-hc-2x"].join('');
});
re_demo.typeahead.typeahead_demo = (function re_demo$typeahead$typeahead_demo(){
var typeahead_on_change_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var typeahead_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var status = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var status_icon_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var status_tooltip = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var disabled_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var change_on_blur_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var immediate_model_update_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var rigid_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var data_source_choice = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$immediate);
var md_icon_result = ((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice){
return (function (p1__11775_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p1__11775_SHARP_,cljs.core.cst$kw$more,cljs.core.cst$kw$stuff], null);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice))
;
var suggestions_for_search = ((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result){
return (function (s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),(function (){var iter__4434__auto__ = ((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result){
return (function re_demo$typeahead$typeahead_demo_$_iter__11789(s__11790){
return (new cljs.core.LazySeq(null,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result){
return (function (){
var s__11790__$1 = s__11790;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11790__$1);
if(temp__5720__auto__){
var s__11790__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11790__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__11790__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__11792 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__11791 = (0);
while(true){
if((i__11791 < size__4433__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__11791);
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),n))){
cljs.core.chunk_append(b__11792,md_icon_result(n));

var G__11810 = (i__11791 + (1));
i__11791 = G__11810;
continue;
} else {
var G__11811 = (i__11791 + (1));
i__11791 = G__11811;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11792),re_demo$typeahead$typeahead_demo_$_iter__11789(cljs.core.chunk_rest(s__11790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11792),null);
}
} else {
var n = cljs.core.first(s__11790__$2);
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),n))){
return cljs.core.cons(md_icon_result(n),re_demo$typeahead$typeahead_demo_$_iter__11789(cljs.core.rest(s__11790__$2)));
} else {
var G__11812 = cljs.core.rest(s__11790__$2);
s__11790__$1 = G__11812;
continue;
}
}
} else {
return null;
}
break;
}
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result))
,null,null));
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result))
;
return iter__4434__auto__(re_demo.typeahead.md_icon_names);
})()));
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result))
;
var data_source_immediate = ((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search){
return (function (s){
return suggestions_for_search(s);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search))
;
var data_source_async = ((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate){
return (function (s,callback){
var c__8416__auto___11813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___11813,typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___11813,typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate){
return (function (state_11799){
var state_val_11800 = (state_11799[(1)]);
if((state_val_11800 === (1))){
var inst_11793 = cljs.core.async.timeout((500));
var state_11799__$1 = state_11799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11799__$1,(2),inst_11793);
} else {
if((state_val_11800 === (2))){
var inst_11795 = (state_11799[(2)]);
var inst_11796 = suggestions_for_search(s);
var inst_11797 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_11796) : callback.call(null,inst_11796));
var state_11799__$1 = (function (){var statearr_11801 = state_11799;
(statearr_11801[(7)] = inst_11795);

return statearr_11801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11799__$1,inst_11797);
} else {
return null;
}
}
});})(c__8416__auto___11813,typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate))
;
return ((function (switch__8309__auto__,c__8416__auto___11813,typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate){
return (function() {
var re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto__ = null;
var re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto____0 = (function (){
var statearr_11802 = [null,null,null,null,null,null,null,null];
(statearr_11802[(0)] = re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto__);

(statearr_11802[(1)] = (1));

return statearr_11802;
});
var re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto____1 = (function (state_11799){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_11799);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e11803){if((e11803 instanceof Object)){
var ex__8313__auto__ = e11803;
var statearr_11804_11814 = state_11799;
(statearr_11804_11814[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11799);

return cljs.core.cst$kw$recur;
} else {
throw e11803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__11815 = state_11799;
state_11799 = G__11815;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto__ = function(state_11799){
switch(arguments.length){
case 0:
return re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto____0.call(this);
case 1:
return re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto____1.call(this,state_11799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto____0;
re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto____1;
return re_demo$typeahead$typeahead_demo_$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___11813,typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate))
})();
var state__8418__auto__ = (function (){var statearr_11805 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_11805[(6)] = c__8416__auto___11813);

return statearr_11805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___11813,typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate))
);


return null;
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate))
;
return ((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"[typeahead ... ]","src/re_com/typeahead.cljs","src/re_demo/typeahead.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Text input that shows suggestions as the user types, and allows the user to choose one of the suggestions using the keyboard or mouse."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)," function provides suggestions (which can be arbitrary objects). This can be done synchronously or asynchronously."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," function will be called when the user chooses a selection (the default), or as the user navigates through the available suggestions."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"The user can navigate through suggestions using the mouse, the UP & DOWN arrow keys, or the TAB key. The ENTER key chooses the active suggestion. The ESCAPE key hides the suggestions."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Setting ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":rigid?"], null)," to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null)," will allow the typeahead's model value to be arbitrary text input from the user. By default the model value can only be one of the suggestions."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":render-suggestion"], null)," function can override the default rendering of suggestions."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Input warnings and errors can be indicated visually by border colors and icons."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.typeahead.typeahead_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"40px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"[typeahead ... ]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.typeahead,cljs.core.cst$kw$model,typeahead_model,cljs.core.cst$kw$data_DASH_source,(function (){var G__11806 = cljs.core.deref(data_source_choice);
var G__11806__$1 = (((G__11806 instanceof cljs.core.Keyword))?G__11806.fqn:null);
switch (G__11806__$1) {
case "async":
return data_source_async;

break;
case "immediate":
return data_source_immediate;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11806__$1)].join('')));

}
})(),cljs.core.cst$kw$suggestion_DASH_to_DASH_string,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11776_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__11776_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$render_DASH_suggestion,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p__11807){
var map__11808 = p__11807;
var map__11808__$1 = (((((!((map__11808 == null))))?(((((map__11808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11808):map__11808);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11808__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"40px"], null),cljs.core.cst$kw$class,re_demo.typeahead.md_classes_for_icon(name)], null)], null),name], null);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$status,cljs.core.deref(status),cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.deref(status_icon_QMARK_),cljs.core.cst$kw$status_DASH_tooltip,cljs.core.deref(status_tooltip),cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$placeholder,"Material Design Icons",cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11777_SHARP_){
return cljs.core.reset_BANG_(typeahead_on_change_value,p1__11777_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,change_on_blur_QMARK_,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,immediate_model_update_QMARK_,cljs.core.cst$kw$rigid_QMARK_,rigid_QMARK_,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"15px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level3,cljs.core.cst$kw$label,"Callbacks"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," last called with this value: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(typeahead_on_change_value))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level3,cljs.core.cst$kw$label,"Parameters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Synchronous ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"string -> results"], null)], null),cljs.core.cst$kw$value,cljs.core.cst$kw$immediate,cljs.core.cst$kw$model,cljs.core.deref(data_source_choice),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11778_SHARP_){
return cljs.core.reset_BANG_(data_source_choice,p1__11778_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Asynchronous ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"string, callback -> nil"], null)], null),cljs.core.cst$kw$value,cljs.core.cst$kw$async,cljs.core.cst$kw$model,cljs.core.deref(data_source_choice),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11779_SHARP_){
return cljs.core.reset_BANG_(data_source_choice,p1__11779_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"false - Call on-change on every keystroke",cljs.core.cst$kw$value,false,cljs.core.cst$kw$model,cljs.core.deref(change_on_blur_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11780_SHARP_){
return cljs.core.reset_BANG_(change_on_blur_QMARK_,p1__11780_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"true - Call on-change only on blur or Enter key (Esc key resets text)",cljs.core.cst$kw$value,true,cljs.core.cst$kw$model,cljs.core.deref(change_on_blur_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11781_SHARP_){
return cljs.core.reset_BANG_(change_on_blur_QMARK_,p1__11781_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":immediate-model-update?"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"false - Do not update model on every keystroke",cljs.core.cst$kw$value,false,cljs.core.cst$kw$model,cljs.core.deref(immediate_model_update_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11782_SHARP_){
return cljs.core.reset_BANG_(immediate_model_update_QMARK_,p1__11782_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"true - Update model on every keystroke",cljs.core.cst$kw$value,true,cljs.core.cst$kw$model,cljs.core.deref(immediate_model_update_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11783_SHARP_){
return cljs.core.reset_BANG_(immediate_model_update_QMARK_,p1__11783_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":rigid?"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"false - Arbitrary text can be chosen as well as suggestion objects",cljs.core.cst$kw$value,false,cljs.core.cst$kw$model,cljs.core.deref(rigid_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11784_SHARP_){
return cljs.core.reset_BANG_(rigid_QMARK_,p1__11784_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"true - Only a suggestion object can be chosen",cljs.core.cst$kw$value,true,cljs.core.cst$kw$model,cljs.core.deref(rigid_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11785_SHARP_){
return cljs.core.reset_BANG_(rigid_QMARK_,p1__11785_SHARP_);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,"nil/omitted - normal input state",cljs.core.cst$kw$value,null,cljs.core.cst$kw$model,cljs.core.deref(status),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11786_SHARP_){
cljs.core.reset_BANG_(status,p1__11786_SHARP_);

return cljs.core.reset_BANG_(status_tooltip,"");
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,":warning - border color becomes orange",cljs.core.cst$kw$value,cljs.core.cst$kw$warning,cljs.core.cst$kw$model,cljs.core.deref(status),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11787_SHARP_){
cljs.core.reset_BANG_(status,p1__11787_SHARP_);

return cljs.core.reset_BANG_(status_tooltip,"Warning tooltip - this (optionally) appears when there are warnings on typeahead components.");
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,cljs.core.cst$kw$label,":error - border color becomes red",cljs.core.cst$kw$value,cljs.core.cst$kw$error,cljs.core.cst$kw$model,cljs.core.deref(status),cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (p1__11788_SHARP_){
cljs.core.reset_BANG_(status,p1__11788_SHARP_);

return cljs.core.reset_BANG_(status_tooltip,"Error tooltip - this (optionally) appears when there are errors on typeahead components.");
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status-icon?"], null),cljs.core.cst$kw$model,status_icon_QMARK_,cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (val){
return cljs.core.reset_BANG_(status_icon_QMARK_,val);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," (notice the tooltips on the icons)"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":disabled?"], null)], null),cljs.core.cst$kw$model,disabled_QMARK_,cljs.core.cst$kw$on_DASH_change,((function (typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async){
return (function (val){
return cljs.core.reset_BANG_(disabled_QMARK_,val);
});})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(typeahead_on_change_value,typeahead_model,status,status_icon_QMARK_,status_tooltip,disabled_QMARK_,change_on_blur_QMARK_,immediate_model_update_QMARK_,rigid_QMARK_,data_source_choice,md_icon_result,suggestions_for_search,data_source_immediate,data_source_async))
});
re_demo.typeahead.panel = (function re_demo$typeahead$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.typeahead.typeahead_demo], null);
});
re_demo.typeahead.md_icon_names = cljs.core.PersistentVector.fromArray(["google","google-plus-box","google-plus","paypal","3d-rotation","airplane-off","airplane","album","archive","assignment-account","assignment-alert","assignment-check","assignment-o","assignment-return","assignment-returned","assignment","attachment-alt","attachment","audio","badge-check","balance-wallet","balance","battery-alert","battery-flash","battery-unknown","battery","bike","block-alt","block","boat","book-image","book","bookmark-outline","bookmark","brush","bug","bus","cake","car-taxi","car-wash","car","card-giftcard","card-membership","card-travel","card","case-check","case-download","case-play","case","cast-connected","cast","chart-donut","chart","city-alt","city","close-circle-o","close-circle","close","cocktail","code-setting","code-smartphone","code","coffee","collection-bookmark","collection-case-play","collection-folder-image","collection-image-o","collection-image","collection-item-1","collection-item-2","collection-item-3","collection-item-4","collection-item-5","collection-item-6","collection-item-7","collection-item-8","collection-item-9-plus","collection-item-9","collection-item","collection-music","collection-pdf","collection-plus","collection-speaker","collection-text","collection-video","compass","cutlery","delete","dialpad","dns","drink","edit","email-open","email","eye-off","eye","eyedropper","favorite-outline","favorite","filter-list","fire","flag","flare","flash-auto","flash-off","flash","flip","flower-alt","flower","font","fullscreen-alt","fullscreen-exit","fullscreen","functions","gas-station","gesture","globe-alt","globe-lock","globe","graduation-cap","home","hospital-alt","hospital","hotel","hourglass-alt","hourglass-outline","hourglass","http","image-alt","image-o","image","inbox","invert-colors-off","invert-colors","key","label-alt-outline","label-alt","label-heart","label","labels","lamp","landscape","layers-off","layers","library","link","lock-open","lock-outline","lock","mail-reply-all","mail-reply","mail-send","mall","map","menu","money-box","money-off","money","more-vert","more","movie-alt","movie","nature-people","nature","navigation","open-in-browser","open-in-new","palette","parking","pin-account","pin-assistant","pin-drop","pin-help","pin-off","pin","pizza","plaster","power-setting","power","print","puzzle-piece","quote","railway","receipt","refresh-alt","refresh-sync-alert","refresh-sync-off","refresh-sync","refresh","roller","ruler","scissors","screen-rotation-lock","screen-rotation","search-for","search-in-file","search-in-page","search-replace","search","seat","settings-square","settings","shape","shield-check","shield-security","shopping-basket","shopping-cart-plus","shopping-cart","sign-in","sort-amount-asc","sort-amount-desc","sort-asc","sort-desc","spellcheck","spinner","storage","store-24","store","subway","sun","tab-unselected","tab","tag-close","tag-more","tag","thumb-down","thumb-up-down","thumb-up","ticket-star","toll","toys","traffic","translate","triangle-down","triangle-up","truck","turning-sign","wallpaper","washing-machine","window-maximize","window-minimize","window-restore","wrench","zoom-in","zoom-out","alert-circle-o","alert-circle","alert-octagon","alert-polygon","alert-triangle","help-outline","help","info-outline","info","notifications-active","notifications-add","notifications-none","notifications-off","notifications-paused","notifications","account-add","account-box-mail","account-box-o","account-box-phone","account-box","account-calendar","account-circle","account-o","account","accounts-add","accounts-alt","accounts-list-alt","accounts-list","accounts-outline","accounts","face","female","male-alt","male-female","male","mood-bad","mood","run","walk","cloud-box","cloud-circle","cloud-done","cloud-download","cloud-off","cloud-outline-alt","cloud-outline","cloud-upload","cloud","download","file-plus","file-text","file","folder-outline","folder-person","folder-star-alt","folder-star","folder","gif","upload","border-all","border-bottom","border-clear","border-color","border-horizontal","border-inner","border-left","border-outer","border-right","border-style","border-top","border-vertical","copy","crop","format-align-center","format-align-justify","format-align-left","format-align-right","format-bold","format-clear-all","format-clear","format-color-fill","format-color-reset","format-color-text","format-indent-decrease","format-indent-increase","format-italic","format-line-spacing","format-list-bulleted","format-list-numbered","format-ltr","format-rtl","format-size","format-strikethrough-s","format-strikethrough","format-subject","format-underlined","format-valign-bottom","format-valign-center","format-valign-top","redo","select-all","space-bar","text-format","transform","undo","wrap-text","comment-alert","comment-alt-text","comment-alt","comment-edit","comment-image","comment-list","comment-more","comment-outline","comment-text-alt","comment-text","comment-video","comment","comments","check-all","check-circle-u","check-circle","check-square","check","circle-o","circle","dot-circle-alt","dot-circle","minus-circle-outline","minus-circle","minus-square","minus","plus-circle-o-duplicate","plus-circle-o","plus-circle","plus-square","plus","square-o","star-circle","star-half","star-outline","star","bluetooth-connected","bluetooth-off","bluetooth-search","bluetooth-setting","bluetooth","camera-add","camera-alt","camera-bw","camera-front","camera-mic","camera-party-mode","camera-rear","camera-roll","camera-switch","camera","card-alert","card-off","card-sd","card-sim","desktop-mac","desktop-windows","device-hub","devices-off","devices","dock","floppy","gamepad","gps-dot","gps-off","gps","headset-mic","headset","input-antenna","input-composite","input-hdmi","input-power","input-svideo","keyboard-hide","keyboard","laptop-chromebook","laptop-mac","laptop","mic-off","mic-outline","mic-setting","mic","mouse","network-alert","network-locked","network-off","network-outline","network-setting","network","phone-bluetooth","phone-end","phone-forwarded","phone-in-talk","phone-locked","phone-missed","phone-msg","phone-paused","phone-ring","phone-setting","phone-sip","phone","portable-wifi-changes","portable-wifi-off","portable-wifi","radio","reader","remote-control-alt","remote-control","router","scanner","smartphone-android","smartphone-download","smartphone-erase","smartphone-info","smartphone-iphone","smartphone-landscape-lock","smartphone-landscape","smartphone-lock","smartphone-portrait-lock","smartphone-ring","smartphone-setting","smartphone-setup","smartphone","speaker","tablet-android","tablet-mac","tablet","tv-alt-play","tv-list","tv-play","tv","usb","videocam-off","videocam-switch","videocam","watch","wifi-alt-2","wifi-alt","wifi-info","wifi-lock","wifi-off","wifi-outline","wifi","arrow-left-bottom","arrow-left","arrow-merge","arrow-missed","arrow-right-top","arrow-right","arrow-split","arrows","caret-down-circle","caret-down","caret-left-circle","caret-left","caret-right-circle","caret-right","caret-up-circle","caret-up","chevron-down","chevron-left","chevron-right","chevron-up","forward","long-arrow-down","long-arrow-left","long-arrow-return","long-arrow-right","long-arrow-tab","long-arrow-up","rotate-ccw","rotate-cw","rotate-left","rotate-right","square-down","square-right","swap-alt","swap-vertical-circle","swap-vertical","swap","trending-down","trending-flat","trending-up","unfold-less","unfold-more","directions-bike","directions-boat","directions-bus","directions-car","directions-railway","directions-run","directions-subway","directions-walk","directions","layers-off","layers","local-activity","local-airport","local-atm","local-bar","local-cafe","local-car-wash","local-convenience-store","local-dining","local-drink","local-florist","local-gas-station","local-grocery-store","local-hospital","local-hotel","local-laundry-service","local-library","local-mall","local-movies","local-offer","local-parking","local-pharmacy","local-phone","local-pizza","local-activity","local-post-office","local-printshop","local-see","local-shipping","local-store","local-taxi","local-wc","map","my-location","nature-people","nature","navigation","pin-account","pin-assistant","pin-drop","pin-help","pin-off","pin","traffic","apps","grid-off","grid","view-agenda","view-array","view-carousel","view-column","view-comfy","view-compact","view-dashboard","view-day","view-headline","view-list-alt","view-list","view-module","view-quilt","view-stream","view-subtitles","view-toc","view-web","view-week","widgets","alarm-check","alarm-off","alarm-plus","alarm-snooze","alarm","calendar-alt","calendar-check","calendar-close","calendar-note","calendar","time-countdown","time-interval","time-restore-setting","time-restore","time","timer-off","timer","android-alt","android","apple","behance","codepen","dribbble","dropbox","evernote","facebook-box","facebook","github-box","github","google-drive","google-earth","google-glass","google-maps","google-pages","google-play","google-plus-box","google-plus","google","instagram","language-css3","language-html5","language-javascript","language-python-alt","language-python","lastfm","pocket","polymer","rss","share","steam-square","steam","twitter-box","twitter","vk","wikipedia","windows","500px","8tracks","aspect-ratio-alt","aspect-ratio","blur-circular","blur-linear","blur-off","blur","brightness-2","brightness-3","brightness-4","brightness-5","brightness-6","brightness-7","brightness-auto","brightness-setting","broken-image","center-focus-strong","center-focus-weak","compare","crop-16-9","crop-3-2","crop-5-4","crop-7-5","crop-din","crop-free","crop-landscape","crop-portrait","crop-square","exposure-alt","exposure","filter-b-and-w","filter-center-focus","filter-frames","filter-tilt-shift","gradient","grain","graphic-eq","hdr-off","hdr-strong","hdr-weak","hdr","iridescent","leak-off","leak","looks","loupe","panorama-horizontal","panorama-vertical","panorama-wide-angle","photo-size-select-large","photo-size-select-small","picture-in-picture","slideshow","texture","tonality","vignette","wb-auto","eject-alt","eject","equalizer","fast-forward","fast-rewind","forward-10","forward-30","forward-5","hearing","pause-circle-outline","pause-circle","pause","play-circle-outline","play-circle","play","playlist-audio","playlist-plus","repeat-one","repeat","replay-10","replay-30","replay-5","replay","shuffle","skip-next","skip-previous","stop","surround-sound","tune","volume-down","volume-mute","volume-off","volume-up","n-1-square","n-2-square","n-3-square","n-4-square","n-5-square","n-6-square","neg-1","neg-2","plus-1","plus-2","sec-10","sec-3","zero"], true);
