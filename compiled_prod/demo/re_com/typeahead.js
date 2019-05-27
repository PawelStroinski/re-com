// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__10446){
var map__10447 = p__10446;
var map__10447__$1 = (((((!((map__10447 == null))))?(((((map__10447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10447):map__10447);
var args = map__10447__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__10449 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__4047__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__10449,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__10449,external_model_value));
} else {
return G__10449;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__10450,event){
var map__10451 = p__10450;
var map__10451__$1 = (((((!((map__10451 == null))))?(((((map__10451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10451):map__10451);
var state = map__10451__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10451__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10451__$1,cljs.core.cst$kw$rigid_QMARK_);
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10451__$1,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__10453 = event;
var G__10453__$1 = (((G__10453 instanceof cljs.core.Keyword))?G__10453.fqn:null);
switch (G__10453__$1) {
case "input-text-blurred":
var and__4036__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4036__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4036__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__4036__auto__){
var or__4047__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4036__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__10455,event){
var map__10456 = p__10455;
var map__10456__$1 = (((((!((map__10456 == null))))?(((((map__10456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10456):map__10456);
var state = map__10456__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10456__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__10458 = event;
var G__10458__$1 = (((G__10458 instanceof cljs.core.Keyword))?G__10458.fqn:null);
switch (G__10458__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__10460,new_value){
var map__10461 = p__10460;
var map__10461__$1 = (((((!((map__10461 == null))))?(((((map__10461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10461):map__10461);
var state = map__10461__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10461__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__10463,suggestion){
var map__10464 = p__10463;
var map__10464__$1 = (((((!((map__10464 == null))))?(((((map__10464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10464):map__10464);
var state = map__10464__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10464__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__10466 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__10466,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__10466;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__10467,index){
var map__10468 = p__10467;
var map__10468__$1 = (((((!((map__10468 == null))))?(((((map__10468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10468):map__10468);
var state = map__10468__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10468__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__10470 = state;
var G__10470__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10470,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__10470__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__10470__$1,suggestion):G__10470__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__10470__$2,suggestion);
} else {
return G__10470__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__10471,index){
var map__10472 = p__10471;
var map__10472__$1 = (((((!((map__10472 == null))))?(((((map__10472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10472):map__10472);
var state = map__10472__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10472__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__10474){
var map__10475 = p__10474;
var map__10475__$1 = (((((!((map__10475 == null))))?(((((map__10475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10475):map__10475);
var state = map__10475__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10475__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__10477 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__10477,suggestion_active_index);
} else {
return G__10477;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__10478){
var map__10479 = p__10478;
var map__10479__$1 = (((((!((map__10479 == null))))?(((((map__10479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10479):map__10479);
var state = map__10479__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10479__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10479__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__10481 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__10481,re_com.typeahead.wrap(((function (){var or__4047__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__10481;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__10482){
var map__10483 = p__10482;
var map__10483__$1 = (((((!((map__10483 == null))))?(((((map__10483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10483):map__10483);
var state = map__10483__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10483__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10483__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__10485 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__10485,re_com.typeahead.wrap(((function (){var or__4047__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__10485;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__10486 = state;
var G__10486__$1 = re_com.typeahead.clear_suggestions(G__10486)
;
var G__10486__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__10486__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__10486__$2,null);
} else {
return G__10486__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__10487){
var map__10488 = p__10487;
var map__10488__$1 = (((((!((map__10488 == null))))?(((((map__10488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10488):map__10488);
var state = map__10488__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$model);
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__4036__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_blurred);
} else {
return and__4036__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$input_DASH_text,input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),cljs.core.cst$kw$data_DASH_source,data_source);
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = (function (){var G__10491 = text;
var G__10492 = ((function (G__10491){
return (function (p1__10490_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__10490_SHARP_);
});})(G__10491))
;
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__10491,G__10492) : data_source.call(null,G__10491,G__10492));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$waiting_QMARK_,true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__8416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto__){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto__){
return (function (state_10510){
var state_val_10511 = (state_10510[(1)]);
if((state_val_10511 === (1))){
var state_10510__$1 = state_10510;
var statearr_10512_10525 = state_10510__$1;
(statearr_10512_10525[(2)] = null);

(statearr_10512_10525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10511 === (2))){
var state_10510__$1 = state_10510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10510__$1,(4),c_search);
} else {
if((state_val_10511 === (3))){
var inst_10508 = (state_10510[(2)]);
var state_10510__$1 = state_10510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10510__$1,inst_10508);
} else {
if((state_val_10511 === (4))){
var inst_10495 = (state_10510[(7)]);
var inst_10495__$1 = (state_10510[(2)]);
var inst_10496 = cljs.core.deref(state_atom);
var inst_10497 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_10496);
var inst_10498 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_10495__$1);
var state_10510__$1 = (function (){var statearr_10513 = state_10510;
(statearr_10513[(8)] = inst_10497);

(statearr_10513[(7)] = inst_10495__$1);

return statearr_10513;
})();
if(inst_10498){
var statearr_10514_10526 = state_10510__$1;
(statearr_10514_10526[(1)] = (5));

} else {
var statearr_10515_10527 = state_10510__$1;
(statearr_10515_10527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10511 === (5))){
var inst_10497 = (state_10510[(8)]);
var inst_10500 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_10501 = re_com.typeahead.search_data_source_BANG_(inst_10497,state_atom,"");
var state_10510__$1 = (function (){var statearr_10516 = state_10510;
(statearr_10516[(9)] = inst_10500);

return statearr_10516;
})();
var statearr_10517_10528 = state_10510__$1;
(statearr_10517_10528[(2)] = inst_10501);

(statearr_10517_10528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10511 === (6))){
var inst_10497 = (state_10510[(8)]);
var inst_10495 = (state_10510[(7)]);
var inst_10503 = re_com.typeahead.search_data_source_BANG_(inst_10497,state_atom,inst_10495);
var state_10510__$1 = state_10510;
var statearr_10518_10529 = state_10510__$1;
(statearr_10518_10529[(2)] = inst_10503);

(statearr_10518_10529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10511 === (7))){
var inst_10505 = (state_10510[(2)]);
var state_10510__$1 = (function (){var statearr_10519 = state_10510;
(statearr_10519[(10)] = inst_10505);

return statearr_10519;
})();
var statearr_10520_10530 = state_10510__$1;
(statearr_10520_10530[(2)] = null);

(statearr_10520_10530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__8416__auto__))
;
return ((function (switch__8309__auto__,c__8416__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto____0 = (function (){
var statearr_10521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10521[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto__);

(statearr_10521[(1)] = (1));

return statearr_10521;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto____1 = (function (state_10510){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_10510);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e10522){if((e10522 instanceof Object)){
var ex__8313__auto__ = e10522;
var statearr_10523_10531 = state_10510;
(statearr_10523_10531[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10510);

return cljs.core.cst$kw$recur;
} else {
throw e10522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__10532 = state_10510;
state_10510 = G__10532;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto__ = function(state_10510){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto____1.call(this,state_10510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto__))
})();
var state__8418__auto__ = (function (){var statearr_10524 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_10524[(6)] = c__8416__auto__);

return statearr_10524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto__))
);

return c__8416__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__10534 = cljs.core.deref(state_atom);
var map__10534__$1 = (((((!((map__10534 == null))))?(((((map__10534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10534):map__10534);
var state = map__10534__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10534__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10534__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__10534,map__10534__$1,state,input_text,c_input){
return (function (p1__10533_SHARP_){
var G__10536 = p1__10533_SHARP_;
var G__10536__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__10536,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__10536__$1,new_text);
} else {
return G__10536__$1;
}
});})(map__10534,map__10534__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__10537 = cljs.core._EQ_;
var expr__10538 = event.which;
if(cljs.core.truth_((pred__10537.cljs$core$IFn$_invoke$arity$2 ? pred__10537.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__10538) : pred__10537.call(null,goog.events.KeyCodes.UP,expr__10538)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__10537.cljs$core$IFn$_invoke$arity$2 ? pred__10537.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__10538) : pred__10537.call(null,goog.events.KeyCodes.DOWN,expr__10538)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__10537.cljs$core$IFn$_invoke$arity$2 ? pred__10537.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__10538) : pred__10537.call(null,goog.events.KeyCodes.ENTER,expr__10538)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__10537.cljs$core$IFn$_invoke$arity$2 ? pred__10537.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__10538) : pred__10537.call(null,goog.events.KeyCodes.ESC,expr__10538)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__10537.cljs$core$IFn$_invoke$arity$2 ? pred__10537.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__10538) : pred__10537.call(null,goog.events.KeyCodes.TAB,expr__10538)))){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$immediate_DASH_model_DASH_update_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"object | atom",cljs.core.cst$kw$description,"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(250),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.integer_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_suggestion,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"render fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"suggestion -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10562 = arguments.length;
var i__4642__auto___10563 = (0);
while(true){
if((i__4642__auto___10563 < len__4641__auto___10562)){
args__4647__auto__.push((arguments[i__4642__auto___10563]));

var G__10564 = (i__4642__auto___10563 + (1));
i__4642__auto___10563 = G__10564;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__10542){
var map__10543 = p__10542;
var map__10543__$1 = (((((!((map__10543 == null))))?(((((map__10543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10543):map__10543);
var args = map__10543__$1;
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__10545 = re_com.typeahead.make_typeahead_state(args);
var map__10545__$1 = (((((!((map__10545 == null))))?(((((map__10545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10545):map__10545);
var state = map__10545__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10545__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10545__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return ((function (map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function() { 
var G__10565__delegate = function (p__10547){
var map__10548 = p__10547;
var map__10548__$1 = (((((!((map__10548 == null))))?(((((map__10548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10548):map__10548);
var args__$1 = map__10548__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$attr);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$data_DASH_source);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$_immediate_DASH_model_DASH_update_QMARK_);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10548__$1,cljs.core.cst$kw$class);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__10550 = cljs.core.deref(state_atom);
var map__10550__$1 = (((((!((map__10550 == null))))?(((((map__10550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10550):map__10550);
var state__$1 = map__10550__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10550__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10550__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10550__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var last_data_source = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(state__$1);
var width__$1 = (function (){var or__4047__auto__ = width;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead",cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),cljs.core.cst$kw$on_DASH_focus,((function (map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function (){
return cljs.core.List.EMPTY;
});})(map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
,cljs.core.cst$kw$on_DASH_blur,((function (map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
});})(map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
], null)], null),(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead-suggestions-container",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4434__auto__ = ((function (map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function re_com$typeahead$iter__10552(s__10553){
return (new cljs.core.LazySeq(null,((function (map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function (){
var s__10553__$1 = s__10553;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10553__$1);
if(temp__5720__auto__){
var s__10553__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10553__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__10553__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__10555 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__10554 = (0);
while(true){
if((i__10554 < size__4433__auto__)){
var vec__10556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__10554);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10556,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10556,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__10555,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__10554,selected_QMARK_,vec__10556,i,s,c__4432__auto__,size__4433__auto__,b__10555,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__10554,selected_QMARK_,vec__10556,i,s,c__4432__auto__,size__4433__auto__,b__10555,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__10554,selected_QMARK_,vec__10556,i,s,c__4432__auto__,size__4433__auto__,b__10555,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function (p1__10540_SHARP_){
p1__10540_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__10554,selected_QMARK_,vec__10556,i,s,c__4432__auto__,size__4433__auto__,b__10555,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__10566 = (i__10554 + (1));
i__10554 = G__10566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10555),re_com$typeahead$iter__10552(cljs.core.chunk_rest(s__10553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10555),null);
}
} else {
var vec__10559 = cljs.core.first(s__10553__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10559,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10559,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__10559,i,s,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__10559,i,s,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__10559,i,s,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args){
return (function (p1__10540_SHARP_){
p1__10540_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__10559,i,s,s__10553__$2,temp__5720__auto__,map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$iter__10552(cljs.core.rest(s__10553__$2)));
}
} else {
return null;
}
break;
}
});})(map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
,null,null));
});})(map__10550,map__10550__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__10548,map__10548__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
;
return iter__4434__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__10565 = function (var_args){
var p__10547 = null;
if (arguments.length > 0) {
var G__10567__i = 0, G__10567__a = new Array(arguments.length -  0);
while (G__10567__i < G__10567__a.length) {G__10567__a[G__10567__i] = arguments[G__10567__i + 0]; ++G__10567__i;}
  p__10547 = new cljs.core.IndexedSeq(G__10567__a,0,null);
} 
return G__10565__delegate.call(this,p__10547);};
G__10565.cljs$lang$maxFixedArity = 0;
G__10565.cljs$lang$applyTo = (function (arglist__10568){
var p__10547 = cljs.core.seq(arglist__10568);
return G__10565__delegate(p__10547);
});
G__10565.cljs$core$IFn$_invoke$arity$variadic = G__10565__delegate;
return G__10565;
})()
;
;})(map__10545,map__10545__$1,state,c_search,c_input,state_atom,input_text_model,map__10543,map__10543__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq10541){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10541));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__8416__auto___10649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___10649,out){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___10649,out){
return (function (state_10619){
var state_val_10620 = (state_10619[(1)]);
if((state_val_10620 === (7))){
var inst_10574 = (state_10619[(2)]);
var state_10619__$1 = state_10619;
var statearr_10621_10650 = state_10619__$1;
(statearr_10621_10650[(2)] = inst_10574);

(statearr_10621_10650[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (1))){
var inst_10569 = null;
var state_10619__$1 = (function (){var statearr_10622 = state_10619;
(statearr_10622[(7)] = inst_10569);

return statearr_10622;
})();
var statearr_10623_10651 = state_10619__$1;
(statearr_10623_10651[(2)] = null);

(statearr_10623_10651[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (4))){
var state_10619__$1 = state_10619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10619__$1,(7),in$);
} else {
if((state_val_10620 === (15))){
var inst_10604 = (state_10619[(2)]);
var state_10619__$1 = (function (){var statearr_10624 = state_10619;
(statearr_10624[(8)] = inst_10604);

return statearr_10624;
})();
var statearr_10625_10652 = state_10619__$1;
(statearr_10625_10652[(2)] = null);

(statearr_10625_10652[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (13))){
var inst_10592 = (state_10619[(9)]);
var inst_10606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10592,cljs.core.cst$kw$default);
var state_10619__$1 = state_10619;
if(inst_10606){
var statearr_10626_10653 = state_10619__$1;
(statearr_10626_10653[(1)] = (16));

} else {
var statearr_10627_10654 = state_10619__$1;
(statearr_10627_10654[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (6))){
var inst_10578 = (state_10619[(10)]);
var inst_10577 = (state_10619[(2)]);
var inst_10578__$1 = cljs.core.async.timeout(ms);
var inst_10586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10587 = [in$,inst_10578__$1];
var inst_10588 = (new cljs.core.PersistentVector(null,2,(5),inst_10586,inst_10587,null));
var state_10619__$1 = (function (){var statearr_10628 = state_10619;
(statearr_10628[(10)] = inst_10578__$1);

(statearr_10628[(11)] = inst_10577);

return statearr_10628;
})();
return cljs.core.async.ioc_alts_BANG_(state_10619__$1,(8),inst_10588);
} else {
if((state_val_10620 === (17))){
var state_10619__$1 = state_10619;
var statearr_10629_10655 = state_10619__$1;
(statearr_10629_10655[(2)] = null);

(statearr_10629_10655[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (3))){
var inst_10617 = (state_10619[(2)]);
var state_10619__$1 = state_10619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10619__$1,inst_10617);
} else {
if((state_val_10620 === (12))){
var inst_10577 = (state_10619[(11)]);
var state_10619__$1 = state_10619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10619__$1,(15),out,inst_10577);
} else {
if((state_val_10620 === (2))){
var inst_10569 = (state_10619[(7)]);
var inst_10571 = (inst_10569 == null);
var state_10619__$1 = state_10619;
if(cljs.core.truth_(inst_10571)){
var statearr_10630_10656 = state_10619__$1;
(statearr_10630_10656[(1)] = (4));

} else {
var statearr_10631_10657 = state_10619__$1;
(statearr_10631_10657[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (11))){
var inst_10614 = (state_10619[(2)]);
var inst_10569 = inst_10614;
var state_10619__$1 = (function (){var statearr_10632 = state_10619;
(statearr_10632[(7)] = inst_10569);

return statearr_10632;
})();
var statearr_10633_10658 = state_10619__$1;
(statearr_10633_10658[(2)] = null);

(statearr_10633_10658[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (9))){
var inst_10590 = (state_10619[(12)]);
var inst_10598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10590,(0),null);
var inst_10599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10590,(1),null);
var state_10619__$1 = (function (){var statearr_10634 = state_10619;
(statearr_10634[(13)] = inst_10599);

return statearr_10634;
})();
var statearr_10635_10659 = state_10619__$1;
(statearr_10635_10659[(2)] = inst_10598);

(statearr_10635_10659[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (5))){
var inst_10569 = (state_10619[(7)]);
var state_10619__$1 = state_10619;
var statearr_10636_10660 = state_10619__$1;
(statearr_10636_10660[(2)] = inst_10569);

(statearr_10636_10660[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (14))){
var inst_10612 = (state_10619[(2)]);
var state_10619__$1 = state_10619;
var statearr_10637_10661 = state_10619__$1;
(statearr_10637_10661[(2)] = inst_10612);

(statearr_10637_10661[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (16))){
var inst_10591 = (state_10619[(14)]);
var state_10619__$1 = state_10619;
var statearr_10638_10662 = state_10619__$1;
(statearr_10638_10662[(2)] = inst_10591);

(statearr_10638_10662[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (10))){
var inst_10592 = (state_10619[(9)]);
var inst_10578 = (state_10619[(10)]);
var inst_10601 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10592,inst_10578);
var state_10619__$1 = state_10619;
if(inst_10601){
var statearr_10639_10663 = state_10619__$1;
(statearr_10639_10663[(1)] = (12));

} else {
var statearr_10640_10664 = state_10619__$1;
(statearr_10640_10664[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (18))){
var inst_10610 = (state_10619[(2)]);
var state_10619__$1 = state_10619;
var statearr_10641_10665 = state_10619__$1;
(statearr_10641_10665[(2)] = inst_10610);

(statearr_10641_10665[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10620 === (8))){
var inst_10592 = (state_10619[(9)]);
var inst_10590 = (state_10619[(12)]);
var inst_10590__$1 = (state_10619[(2)]);
var inst_10591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10590__$1,(0),null);
var inst_10592__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10590__$1,(1),null);
var inst_10593 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10592__$1,in$);
var state_10619__$1 = (function (){var statearr_10642 = state_10619;
(statearr_10642[(14)] = inst_10591);

(statearr_10642[(9)] = inst_10592__$1);

(statearr_10642[(12)] = inst_10590__$1);

return statearr_10642;
})();
if(inst_10593){
var statearr_10643_10666 = state_10619__$1;
(statearr_10643_10666[(1)] = (9));

} else {
var statearr_10644_10667 = state_10619__$1;
(statearr_10644_10667[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8416__auto___10649,out))
;
return ((function (switch__8309__auto__,c__8416__auto___10649,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__8310__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__8310__auto____0 = (function (){
var statearr_10645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10645[(0)] = re_com$typeahead$debounce_$_state_machine__8310__auto__);

(statearr_10645[(1)] = (1));

return statearr_10645;
});
var re_com$typeahead$debounce_$_state_machine__8310__auto____1 = (function (state_10619){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_10619);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e10646){if((e10646 instanceof Object)){
var ex__8313__auto__ = e10646;
var statearr_10647_10668 = state_10619;
(statearr_10647_10668[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10619);

return cljs.core.cst$kw$recur;
} else {
throw e10646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__10669 = state_10619;
state_10619 = G__10669;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__8310__auto__ = function(state_10619){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__8310__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__8310__auto____1.call(this,state_10619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__8310__auto____0;
re_com$typeahead$debounce_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__8310__auto____1;
return re_com$typeahead$debounce_$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___10649,out))
})();
var state__8418__auto__ = (function (){var statearr_10648 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_10648[(6)] = c__8416__auto___10649);

return statearr_10648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___10649,out))
);


return out;
});
