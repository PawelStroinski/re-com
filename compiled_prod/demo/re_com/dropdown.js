// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_com.dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * In a vector of maps (where each map has an :id), return the id of the choice offset posititions away
 * from id (usually +1 or -1 to go to next/previous). Also accepts :start and :end
 */
re_com.dropdown.move_to_new_choice = (function re_com$dropdown$move_to_new_choice(choices,id_fn,id,offset){
var current_index = re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(id,choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn,id_fn], 0));
var new_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,cljs.core.cst$kw$start))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,cljs.core.cst$kw$end))?(cljs.core.count(choices) - (1)):(((current_index == null))?(0):cljs.core.mod((current_index + offset),cljs.core.count(choices))
)));
if(cljs.core.truth_((function (){var and__4036__auto__ = new_index;
if(cljs.core.truth_(and__4036__auto__)){
return (cljs.core.count(choices) > (0));
} else {
return and__4036__auto__;
}
})())){
var G__11311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(choices,new_index);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__11311) : id_fn.call(null,G__11311));
} else {
return null;
}
});
/**
 * If necessary, inserts group headings entries into the choices
 */
re_com.dropdown.choices_with_group_headings = (function re_com$dropdown$choices_with_group_headings(opts,group_fn){
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(group_fn,opts);
var group_headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (groups){
return (function (p1__11312_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$group],[cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),p1__11312_SHARP_]);
});})(groups))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(group_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,groups)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of choices based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.dropdown.filter_choices = (function re_com$dropdown$filter_choices(choices,group_fn,label_fn,filter_text){
var lower_filter_text = clojure.string.lower_case(filter_text);
var filter_fn = ((function (lower_filter_text){
return (function (opt){
var group = ((((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)) == null))?"":(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
var label = cljs.core.str.cljs$core$IFn$_invoke$arity$1((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
return (((clojure.string.lower_case(group).indexOf(lower_filter_text) >= (0))) || ((clojure.string.lower_case(label).indexOf(lower_filter_text) >= (0))));
});})(lower_filter_text))
;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.dropdown.filter_choices_regex = (function re_com$dropdown$filter_choices_regex(choices,group_fn,label_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e11313){if((e11313 instanceof Object)){
var e = e11313;
return null;
} else {
throw e11313;

}
}})();
var filter_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(((function (re){
return (function (re__$1,opt){
if((re__$1 == null)){
return null;
} else {
var or__4047__auto__ = re__$1.test((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return re__$1.test((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
}
}
});})(re))
,re);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices extra data within the choices vector
 */
re_com.dropdown.filter_choices_by_keyword = (function re_com$dropdown$filter_choices_by_keyword(choices,keyword,value){
var filter_fn = (function (opt){
return ((keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(opt) : keyword.call(null,opt)).indexOf(value) >= (0));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Return text after insertion in place of selection
 */
re_com.dropdown.insert = (function re_com$dropdown$insert(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11318 = arguments.length;
var i__4642__auto___11319 = (0);
while(true){
if((i__4642__auto___11319 < len__4641__auto___11318)){
args__4647__auto__.push((arguments[i__4642__auto___11319]));

var G__11320 = (i__4642__auto___11319 + (1));
i__4642__auto___11319 = G__11320;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic = (function (p__11315){
var map__11316 = p__11315;
var map__11316__$1 = (((((!((map__11316 == null))))?(((((map__11316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11316):map__11316);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11316__$1,cljs.core.cst$kw$text);
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11316__$1,cljs.core.cst$kw$sel_DASH_start);
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11316__$1,cljs.core.cst$kw$sel_DASH_end);
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11316__$1,cljs.core.cst$kw$ins);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(text)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),sel_start):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ins),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(text)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,sel_end):null))].join('');
});

re_com.dropdown.insert.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.dropdown.insert.cljs$lang$applyTo = (function (seq11314){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11314));
});

/**
 * Return text/selection map after insertion in place of selection & completion
 */
re_com.dropdown.auto_complete = (function re_com$dropdown$auto_complete(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11326 = arguments.length;
var i__4642__auto___11327 = (0);
while(true){
if((i__4642__auto___11327 < len__4641__auto___11326)){
args__4647__auto__.push((arguments[i__4642__auto___11327]));

var G__11328 = (i__4642__auto___11327 + (1));
i__4642__auto___11327 = G__11328;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.dropdown.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (p__11323){
var map__11324 = p__11323;
var map__11324__$1 = (((((!((map__11324 == null))))?(((((map__11324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11324):map__11324);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11324__$1,cljs.core.cst$kw$choices);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11324__$1,cljs.core.cst$kw$text);
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11324__$1,cljs.core.cst$kw$sel_DASH_start);
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11324__$1,cljs.core.cst$kw$sel_DASH_end);
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11324__$1,cljs.core.cst$kw$ins);
var text_SINGLEQUOTE_ = re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,text,cljs.core.cst$kw$sel_DASH_start,sel_start,cljs.core.cst$kw$sel_DASH_end,sel_end,cljs.core.cst$kw$ins,ins], 0));
var find = ((function (text_SINGLEQUOTE_,map__11324,map__11324__$1,choices,text,sel_start,sel_end,ins){
return (function (p1__11321_SHARP_){
return goog.string.caseInsensitiveStartsWith(p1__11321_SHARP_,text_SINGLEQUOTE_);
});})(text_SINGLEQUOTE_,map__11324,map__11324__$1,choices,text,sel_start,sel_end,ins))
;
var ret = (function (){var temp__5720__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(find,choices));
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var choice = cljs.core.first(xs__6277__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(choice,cljs.core.count(text_SINGLEQUOTE_)))].join(''),cljs.core.cst$kw$sel_DASH_start,(sel_start + cljs.core.count(ins)),cljs.core.cst$kw$sel_DASH_end,cljs.core.count(choice)], null);
} else {
return null;
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sel_DASH_start.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.cst$kw$sel_DASH_end.cljs$core$IFn$_invoke$arity$1(ret))) && (cljs.core.seq(ins)))){
return ret;
} else {
return null;
}
});

re_com.dropdown.auto_complete.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.dropdown.auto_complete.cljs$lang$applyTo = (function (seq11322){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11322));
});

/**
 * Capitalize the first letter leaving the rest as is
 */
re_com.dropdown.capitalize_first_letter = (function re_com$dropdown$capitalize_first_letter(text){
if(cljs.core.seq(text)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(text))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1)))].join('');
} else {
return text;
}
});
re_com.dropdown.show_selected_item = (function re_com$dropdown$show_selected_item(node){
var item_offset_top = node.offsetTop;
var item_offset_bottom = (item_offset_top + node.clientHeight);
var parent = node.parentNode;
var parent_height = parent.clientHeight;
var parent_visible_top = parent.scrollTop;
var parent_visible_bottom = (parent_visible_top + parent_height);
var new_scroll_top = (((item_offset_bottom > parent_visible_bottom))?(function (){var x__4135__auto__ = (item_offset_bottom - parent_height);
var y__4136__auto__ = (0);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})():(((item_offset_top < parent_visible_top))?item_offset_top:null));
if(cljs.core.truth_(new_scroll_top)){
return parent.scrollTop = new_scroll_top;
} else {
return null;
}
});
/**
 * Render a group heading
 */
re_com.dropdown.make_group_heading = (function re_com$dropdown$make_group_heading(m){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$group_DASH_result,cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(m)], null));
});
/**
 * Render a choice item and set up appropriate mouse events
 */
re_com.dropdown.choice_item = (function re_com$dropdown$choice_item(id,label,on_click,internal_model){
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (mouse_over_QMARK_){
return (function (this$){
var node = reagent.core.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
});})(mouse_over_QMARK_))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (mouse_over_QMARK_){
return (function (this$){
var node = reagent.core.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
});})(mouse_over_QMARK_))
,cljs.core.cst$kw$display_DASH_name,"choice-item",cljs.core.cst$kw$reagent_DASH_render,((function (mouse_over_QMARK_){
return (function (id__$1,label__$1,on_click__$1,internal_model__$1){
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model__$1),id__$1);
var class$ = ((selected)?"highlighted":(cljs.core.truth_(cljs.core.deref(mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["active-result group-option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected,class$,mouse_over_QMARK_){
return (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);

return null;
});})(selected,class$,mouse_over_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (selected,class$,mouse_over_QMARK_){
return (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
});})(selected,class$,mouse_over_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected,class$,mouse_over_QMARK_){
return (function (event){
(on_click__$1.cljs$core$IFn$_invoke$arity$1 ? on_click__$1.cljs$core$IFn$_invoke$arity$1(id__$1) : on_click__$1.call(null,id__$1));

event.preventDefault();

return null;
});})(selected,class$,mouse_over_QMARK_))
], null),label__$1], null);
});})(mouse_over_QMARK_))
], null));
});
re_com.dropdown.make_choice_item = (function re_com$dropdown$make_choice_item(id_fn,render_fn,callback,internal_model,opt){
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(opt) : id_fn.call(null,opt));
var markup = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(opt) : render_fn.call(null,opt));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.choice_item,id,markup,callback,internal_model], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null));
});
/**
 * Base function (before lifecycle metadata) to render a filter text box
 */
re_com.dropdown.filter_text_box_base = (function re_com$dropdown$filter_text_box_base(filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,set_filter_text,filter_placeholder){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$chosen_DASH_search,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$auto_DASH_complete,"off",cljs.core.cst$kw$style,(cljs.core.truth_(filter_box_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"0px",cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$border,"none"], null)),cljs.core.cst$kw$value,cljs.core.deref(filter_text),cljs.core.cst$kw$placeholder,filter_placeholder,cljs.core.cst$kw$on_DASH_change,(function (event){
var G__11329_11330 = event.target.value;
(set_filter_text.cljs$core$IFn$_invoke$arity$1 ? set_filter_text.cljs$core$IFn$_invoke$arity$1(G__11329_11330) : set_filter_text.call(null,G__11329_11330));

return null;
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.stopPropagation();

event.preventDefault();
}

return null;
}),cljs.core.cst$kw$on_DASH_blur,(function (event){
cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return null;
})], null)], null)], null);
});
/**
 * Render a filter text box
 */
re_com.dropdown.filter_text_box = cljs.core.with_meta(re_com.dropdown.filter_text_box_base,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__11331_SHARP_){
var node = reagent.core.dom_node(p1__11331_SHARP_).firstChild;
return node.focus();
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (p1__11332_SHARP_){
var node = reagent.core.dom_node(p1__11332_SHARP_).firstChild;
return node.focus();
})], null));
/**
 * Render the top part of the dropdown, with the clickable area and the up/down arrow
 */
re_com.dropdown.dropdown_top = (function re_com$dropdown$dropdown_top(){
var ignore_click = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (ignore_click){
return (function (internal_model,choices,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_){
var _ = reagent.core.set_state(reagent.core.current_component(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter_DASH_box_QMARK_,filter_box_QMARK_], null));
var text = (cljs.core.truth_(cljs.core.deref(internal_model))?(function (){var G__11333 = re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(internal_model),choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_fn,id_fn], 0));
return (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(G__11333) : label_fn.call(null,G__11333));
})():placeholder);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$chosen_DASH_single$chosen_DASH_default,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$href,"javascript:",cljs.core.cst$kw$tab_DASH_index,tab_index,cljs.core.cst$kw$on_DASH_click,((function (_,text,ignore_click){
return (function (event){
if(cljs.core.truth_(cljs.core.deref(ignore_click))){
cljs.core.reset_BANG_(ignore_click,false);
} else {
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));
}

return null;
});})(_,text,ignore_click))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (_,text,ignore_click){
return (function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
});})(_,text,ignore_click))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (_,text,ignore_click){
return (function (event){
(key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.which,(13))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
});})(_,text,ignore_click))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(title_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,text], null):null),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)], null)], null);
});
;})(ignore_click))
});
re_com.dropdown.handle_free_text_insertion = (function re_com$dropdown$handle_free_text_insertion(event,ins,auto_complete_QMARK_,capitalize_QMARK_,choices,internal_model,free_text_sel_range,free_text_change){
var input = event.target;
var input_sel_start = input.selectionStart;
var input_sel_end = input.selectionEnd;
var ins_SINGLEQUOTE_ = (function (){var G__11334 = ins;
if(cljs.core.truth_((function (){var and__4036__auto__ = capitalize_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (input_sel_start === (0));
} else {
return and__4036__auto__;
}
})())){
return re_com.dropdown.capitalize_first_letter(G__11334);
} else {
return G__11334;
}
})();
var auto_complete_ret = (function (){var and__4036__auto__ = auto_complete_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return re_com.dropdown.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$choices,choices,cljs.core.cst$kw$text,cljs.core.deref(internal_model),cljs.core.cst$kw$sel_DASH_start,input_sel_start,cljs.core.cst$kw$sel_DASH_end,input_sel_end,cljs.core.cst$kw$ins,ins_SINGLEQUOTE_], 0));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(auto_complete_ret)){
var map__11335 = auto_complete_ret;
var map__11335__$1 = (((((!((map__11335 == null))))?(((((map__11335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11335):map__11335);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11335__$1,cljs.core.cst$kw$text);
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11335__$1,cljs.core.cst$kw$sel_DASH_start);
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11335__$1,cljs.core.cst$kw$sel_DASH_end);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),text)){
input.setSelectionRange(sel_start,sel_end);
} else {
cljs.core.reset_BANG_(free_text_sel_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sel_start,sel_end], null));

(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(text) : free_text_change.call(null,text));
}

return event.preventDefault();
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ins,ins_SINGLEQUOTE_)){
cljs.core.reset_BANG_(free_text_sel_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(input_sel_start + cljs.core.count(ins)),(input_sel_start + cljs.core.count(ins))], null));

var G__11337_11338 = re_com.dropdown.insert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,cljs.core.deref(internal_model),cljs.core.cst$kw$sel_DASH_start,input_sel_start,cljs.core.cst$kw$sel_DASH_end,input_sel_end,cljs.core.cst$kw$ins,ins_SINGLEQUOTE_], 0));
(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(G__11337_11338) : free_text_change.call(null,G__11337_11338));

return event.preventDefault();
} else {
return null;
}
}
});
/**
 * Base function (before lifecycle metadata) to render the top part of the dropdown (free-text), with the editable area and the up/down arrow
 */
re_com.dropdown.free_text_dropdown_top_base = (function re_com$dropdown$free_text_dropdown_top_base(free_text_input,select_free_text_QMARK_,free_text_focused_QMARK_,free_text_sel_range,internal_model,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,cancel,width,free_text_change,auto_complete_QMARK_,choices,capitalize_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$chosen_DASH_choices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$search_DASH_field,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$free_DASH_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$tab_DASH_index,cljs.core.cst$kw$on_DASH_key_DASH_press,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$ref,cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$on_DASH_paste,cljs.core.cst$kw$style,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$on_DASH_key_DASH_down],["off",tab_index,(function (event){
var ins_11342 = event.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ins_11342),(1))){
re_com.dropdown.handle_free_text_insertion(event,ins_11342,auto_complete_QMARK_,capitalize_QMARK_,choices,internal_model,free_text_sel_range,free_text_change);
} else {
}

return null;
}),placeholder,(function (p1__11339_SHARP_){
return cljs.core.reset_BANG_(free_text_input,p1__11339_SHARP_);
}),(function (event){
cljs.core.reset_BANG_(free_text_focused_QMARK_,true);

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

return null;
}),cljs.core.deref(internal_model),(function (event){
if(cljs.core.truth_(filter_box_QMARK_)){
} else {
(cancel.cljs$core$IFn$_invoke$arity$0 ? cancel.cljs$core$IFn$_invoke$arity$0() : cancel.call(null));
}

cljs.core.reset_BANG_(free_text_focused_QMARK_,false);

return null;
}),"text",(function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
(cancel.cljs$core$IFn$_invoke$arity$0 ? cancel.cljs$core$IFn$_invoke$arity$0() : cancel.call(null));

event.preventDefault();
} else {
}

return null;
}),(function (event){
var ins_11343 = event.clipboardData.getData("Text");
re_com.dropdown.handle_free_text_insertion(event,ins_11343,auto_complete_QMARK_,capitalize_QMARK_,choices,internal_model,free_text_sel_range,free_text_change);

return null;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),"form-control",(function (event){
var value_11344 = event.target.value;
var G__11340_11345 = (function (){var G__11341 = value_11344;
if(cljs.core.truth_(capitalize_QMARK_)){
return re_com.dropdown.capitalize_first_letter(G__11341);
} else {
return G__11341;
}
})();
(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(G__11340_11345) : free_text_change.call(null,G__11340_11345));

return null;
}),(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.stopPropagation();

event.preventDefault();
}

return null;
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$b_DASH_wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (event){
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));

if(cljs.core.truth_(cljs.core.deref(free_text_focused_QMARK_))){
event.preventDefault();
} else {
}

return null;
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null)], null)], null)], null)], null);
});
/**
 * Render the top part of the dropdown (free-text), with the editable area and the up/down arrow
 */
re_com.dropdown.free_text_dropdown_top = cljs.core.with_meta(re_com.dropdown.free_text_dropdown_top_base,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_update,(function (p1__11346_SHARP_){
var vec__11347 = reagent.core.argv(p1__11346_SHARP_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11347,(0),null);
var free_text_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11347,(1),null);
var select_free_text_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11347,(2),null);
var free_text_focused_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11347,(3),null);
var free_text_sel_range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11347,(4),null);
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref(free_text_input);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = cljs.core.deref(select_free_text_QMARK_);
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.deref(free_text_focused_QMARK_);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
cljs.core.deref(free_text_input).select();
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref(free_text_input);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref(free_text_sel_range);
} else {
return and__4036__auto__;
}
})())){
cljs.core.deref(free_text_input).setSelectionRange(cljs.core.first(cljs.core.deref(free_text_sel_range)),cljs.core.second(cljs.core.deref(free_text_sel_range)));

return cljs.core.reset_BANG_(free_text_sel_range,null);
} else {
return null;
}
})], null));
re_com.dropdown.fn_or_vector_of_maps_or_strings_QMARK_ = (function re_com$dropdown$fn_or_vector_of_maps_or_strings_QMARK_(v){
return ((cljs.core.fn_QMARK_(v)) || (re_com.validate.vector_of_maps_QMARK_(v)) || (((cljs.core.sequential_QMARK_(v)) && (((cljs.core.empty_QMARK_(v)) || (typeof cljs.core.first(v) === 'string'))))));
});
/**
 * Load choices if choices is callback.
 */
re_com.dropdown.load_choices_STAR_ = (function re_com$dropdown$load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_){
var id = (cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)) + (1));
var callback = ((function (id){
return (function (p__11352){
var map__11353 = p__11352;
var map__11353__$1 = (((((!((map__11353 == null))))?(((((map__11353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11353):map__11353);
var args = map__11353__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11353__$1,cljs.core.cst$kw$result);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11353__$1,cljs.core.cst$kw$error);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error,error,cljs.core.cst$kw$choices,result], 0));
} else {
return null;
}
});})(id))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,cljs.core.cst$kw$loading_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error,null,cljs.core.cst$kw$id,id,cljs.core.cst$kw$timer,null], 0));

var G__11355 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$filter_DASH_text,text,cljs.core.cst$kw$regex_DASH_filter_QMARK_,regex_filter_QMARK_], null);
var G__11356 = ((function (G__11355,id,callback){
return (function (p1__11350_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,p1__11350_SHARP_], null));
});})(G__11355,id,callback))
;
var G__11357 = ((function (G__11355,G__11356,id,callback){
return (function (p1__11351_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,p1__11351_SHARP_], null));
});})(G__11355,G__11356,id,callback))
;
return (choices.cljs$core$IFn$_invoke$arity$3 ? choices.cljs$core$IFn$_invoke$arity$3(G__11355,G__11356,G__11357) : choices.call(null,G__11355,G__11356,G__11357));
});
/**
 * Load choices or schedule lodaing depending on debounce?
 */
re_com.dropdown.load_choices = (function re_com$dropdown$load_choices(choices_state,choices,debounce_delay,text,regex_filter_QMARK_,debounce_QMARK_){
if(cljs.core.fn_QMARK_(choices)){
var temp__5720__auto___11358 = cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
if(cljs.core.truth_(temp__5720__auto___11358)){
var timer_11359 = temp__5720__auto___11358;
clearTimeout(timer_11359);
} else {
}

if(cljs.core.truth_(debounce_QMARK_)){
var timer = setTimeout((function (){
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}),debounce_delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(choices_state,cljs.core.assoc,cljs.core.cst$kw$timer,timer);
} else {
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}
} else {
return null;
}
});
re_com.dropdown.single_dropdown_args_desc = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of choices | atom | (opts, done, fail) -> nil",cljs.core.cst$kw$validate_DASH_fn,re_com.dropdown.fn_or_vector_of_maps_or_strings_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Each is expected to have an id, label and, optionally, a group, provided by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":group-fn"], null),". May also be a callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"(opts, done, fail)"], null)," where opts is map of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":filter-text"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":regex-filter?."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"the id of a choice | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the id of the selected choice. If nil, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":placeholder"], null)," text is shown"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when a new choice is selected. Passed the id of new choice"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"choice -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its displayable label."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$group,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its group identifier"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"choice -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns the markup that will be rendered for that choice. Defaults to the label if no custom markup is required."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_box_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, a filter text field is placed at the top of the dropdown"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$regex_DASH_filter_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the filter text field will support JavaScript regular expressions. If false, just plain text"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text when no selection"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$title_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, allows the title for the selected dropdown to be displayed via a mouse over. Handy when dropdown width is small and text is truncated"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"100%",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the CSS width. e.g.: \"500px\" or \"20em\""], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"240px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the maximum height of the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab_DASH_index,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"component's tabindex. A value of -1 removes from order"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"delay to debounce loading requests when using callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$free_DASH_text_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"is the text freely editable? If true then ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":chocies"], null)," is a vector of strings, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," is a string (atom) and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," is called with a string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$auto_DASH_complete_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"auto-complete text while typing using dropdown choices. Has no effect if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":free-text?"], null)," is not turned on"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$capitalize_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"capitalize the first letter. Has no effect if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":free-text?"], null)," is not turned on"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$enter_DASH_drop_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"should pressing Enter display the dropdown part?"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$cancelable_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"should pressing Esc or clicking outside the dropdown part cancel selection made with arrow keys?"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$set_DASH_to_DASH_filter,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$type,"set",cljs.core.cst$kw$validate_DASH_fn,cljs.core.set_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":filter-box?"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":free-text?"], null)," are turned on and there are no results, current text can be set to filter text ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-enter-press"], null)," and/or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-no-results-match-click"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text in filter box when no filter"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$can_DASH_drop_DASH_above_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"should the dropdown part be displayed above if it does not fit below the top part?"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$est_DASH_item_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(30),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"estimated dropdown item height (for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":can-drop-above?"], null),"). used only *before* the dropdown part is displayed to guess whether it fits below the top part or not which is later verified when the dropdown is displayed"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$just_DASH_drop_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"display just the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$repeat_DASH_change_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"repeat ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," events if an already selected item is selected again"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$i18n,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"internationalization map with optional keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":loading"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":no-results"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":no-results-match"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_drop,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"() -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when the dropdown part is displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null)], true);
/**
 * Render a single dropdown component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 *    {:id "US" :label "United States"  :group "Group 1"}
 *    {:id "GB" :label "United Kingdom" :group "Group 1"}
 *    {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.dropdown.single_dropdown = (function re_com$dropdown$single_dropdown(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11391 = arguments.length;
var i__4642__auto___11392 = (0);
while(true){
if((i__4642__auto___11392 < len__4641__auto___11391)){
args__4647__auto__.push((arguments[i__4642__auto___11392]));

var G__11393 = (i__4642__auto___11392 + (1));
i__4642__auto___11392 = G__11393;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__11371){
var map__11372 = p__11371;
var map__11372__$1 = (((((!((map__11372 == null))))?(((((map__11372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11372):map__11372);
var args = map__11372__$1;
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11372__$1,cljs.core.cst$kw$choices);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11372__$1,cljs.core.cst$kw$model);
var regex_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11372__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11372__$1,cljs.core.cst$kw$debounce_DASH_delay,(250));
var just_drop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11372__$1,cljs.core.cst$kw$just_DASH_drop_QMARK_);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["single-dropdown"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var drop_showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(just_drop_QMARK_));
var filter_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var choices_fn_QMARK_ = cljs.core.fn_QMARK_(choices);
var choices_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$loading_QMARK_,choices_fn_QMARK_,cljs.core.cst$kw$error,null,cljs.core.cst$kw$choices,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$id,(0),cljs.core.cst$kw$timer,null], null));
var load_choices = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_com.dropdown.load_choices,choices_state,choices,debounce_delay);
var set_filter_text = ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (text,p__11374,debounce_QMARK_){
var map__11375 = p__11374;
var map__11375__$1 = (((((!((map__11375 == null))))?(((((map__11375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11375):map__11375);
var args__$1 = map__11375__$1;
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11375__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
(load_choices.cljs$core$IFn$_invoke$arity$3 ? load_choices.cljs$core$IFn$_invoke$arity$3(text,regex_filter_QMARK___$1,debounce_QMARK_) : load_choices.call(null,text,regex_filter_QMARK___$1,debounce_QMARK_));

return cljs.core.reset_BANG_(filter_text,text);
});})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var showing_QMARK_ = reagent.core.track(((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
var and__4036__auto__ = cljs.core.not(cljs.core.deref(drop_showing_QMARK_));
if(and__4036__auto__){
return cljs.core.deref(over_QMARK_);
} else {
return and__4036__auto__;
}
});})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
);
var free_text_focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var free_text_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var select_free_text_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var free_text_sel_range = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_free_text = ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(free_text_input))){
return cljs.core.deref(free_text_input).focus();
} else {
return null;
}
});})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_anchor = ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
var G__11377 = cljs.core.deref(node);
var G__11377__$1 = (((G__11377 == null))?null:G__11377.getElementsByClassName("chosen-single"));
var G__11377__$2 = (((G__11377__$1 == null))?null:G__11377__$1.item((0)));
if((G__11377__$2 == null)){
return null;
} else {
return G__11377__$2.focus();
}
});})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
(load_choices.cljs$core$IFn$_invoke$arity$3 ? load_choices.cljs$core$IFn$_invoke$arity$3("",regex_filter_QMARK_,false) : load_choices.call(null,"",regex_filter_QMARK_,false));

return ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function() { 
var G__11394__delegate = function (p__11378){
var map__11379 = p__11378;
var map__11379__$1 = (((((!((map__11379 == null))))?(((((map__11379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11379):map__11379);
var args__$1 = map__11379__$1;
var est_item_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11379__$1,cljs.core.cst$kw$est_DASH_item_DASH_height,(30));
var auto_complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$auto_DASH_complete_QMARK_);
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11379__$1,cljs.core.cst$kw$group_DASH_fn,cljs.core.cst$kw$group);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$on_DASH_change);
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$i18n);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$tooltip);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$model);
var free_text_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$free_DASH_text_QMARK_);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11379__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$tab_DASH_index);
var can_drop_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$can_DASH_drop_DASH_above_QMARK_);
var repeat_change_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$repeat_DASH_change_QMARK_);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$max_DASH_height);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$placeholder);
var title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$title_QMARK_);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11379__$1,cljs.core.cst$kw$render_DASH_fn,label_fn);
var cancelable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11379__$1,cljs.core.cst$kw$cancelable_QMARK_,true);
var set_to_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$set_DASH_to_DASH_filter);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$width);
var on_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$on_DASH_drop);
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$regex_DASH_filter_QMARK_);
var choices__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$choices);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11379__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$style);
var filter_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$filter_DASH_placeholder);
var debounce_delay__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$debounce_DASH_delay);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$class);
var enter_drop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11379__$1,cljs.core.cst$kw$enter_DASH_drop_QMARK_,true);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$tooltip_DASH_position);
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$filter_DASH_box_QMARK_);
var capitalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11379__$1,cljs.core.cst$kw$capitalize_QMARK_);
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["single-dropdown"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var choices__$2 = ((choices_fn_QMARK_)?cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)):re_com.util.deref_or_value(choices__$1));
var id_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:id_fn);
var label_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:label_fn);
var render_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:render_fn);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value(regex_filter_QMARK___$1);
var latest_ext_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model__$1));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),cljs.core.deref(latest_ext_model)))?(function (){
cljs.core.reset_BANG_(external_model,cljs.core.deref(latest_ext_model));

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__4036__auto__ = on_change;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4036__auto__;
}
})();
var call_on_change = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
if(cljs.core.truth_((function (){var and__4036__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
var or__4047__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(latest_ext_model));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return repeat_change_QMARK_;
}
} else {
return and__4036__auto__;
}
})())){
var G__11381 = cljs.core.deref(internal_model);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__11381) : on_change.call(null,G__11381));
} else {
return null;
}
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var callback = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (p1__11360_SHARP_){
cljs.core.reset_BANG_(internal_model,(function (){var G__11382 = p1__11360_SHARP_;
if(cljs.core.truth_((function (){var and__4036__auto__ = free_text_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return capitalize_QMARK_;
} else {
return and__4036__auto__;
}
})())){
return re_com.dropdown.capitalize_first_letter(G__11382);
} else {
return G__11382;
}
})());

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

call_on_change();

var current_drop_showing_QMARK__11395 = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(current_drop_showing_QMARK__11395)){
focus_free_text();
} else {
}

if(cljs.core.truth_(just_drop_QMARK_)){
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,cljs.core.not(current_drop_showing_QMARK__11395));
}

if(cljs.core.truth_(current_drop_showing_QMARK__11395)){
focus_anchor();
} else {
}

return set_filter_text("",args__$1,false);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var free_text_change = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (p1__11361_SHARP_){
cljs.core.reset_BANG_(internal_model,p1__11361_SHARP_);

cljs.core.reset_BANG_(select_free_text_QMARK_,false);

return call_on_change();
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var cancel = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(free_text_focused_QMARK_))){
} else {
focus_free_text();
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var dropdown_click = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
return cancel();
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,true);

focus_free_text();

return cljs.core.reset_BANG_(select_free_text_QMARK_,true);
}
}
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var filtered_choices = ((choices_fn_QMARK_)?choices__$2:(cljs.core.truth_(regex_filter_QMARK___$2)?re_com.dropdown.filter_choices_regex(choices__$2,group_fn,label_fn__$1,cljs.core.deref(filter_text)):re_com.dropdown.filter_choices(choices__$2,group_fn,label_fn__$1,cljs.core.deref(filter_text))));
var visible_count = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
var results_node = (function (){var and__4036__auto__ = cljs.core.deref(node);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref(node).getElementsByClassName("chosen-results").item((0));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4036__auto__ = results_node;
if(cljs.core.truth_(and__4036__auto__)){
return results_node.firstChild;
} else {
return and__4036__auto__;
}
})())){
return cljs.core.quot(results_node.clientHeight,results_node.firstChild.offsetHeight);
} else {
return (0);
}
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var est_drop_height = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
var items_height = (cljs.core.count(filtered_choices) * est_item_height);
var drop_margin = (12);
var filter_height = (32);
var maxh = ((cljs.core.not(max_height))?(240):((clojure.string.ends_with_QMARK_(max_height,"px"))?parseInt(max_height,(10)):(function (){
re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["max-height is not in pxs, using 240px for estimation"], 0));

return (240);
})()

));
var x__4138__auto__ = ((items_height + drop_margin) + (cljs.core.truth_(filter_box_QMARK_)?filter_height:(0)));
var y__4139__auto__ = maxh;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var drop_height = reagent.core.track(((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
var temp__5718__auto__ = (function (){var and__4036__auto__ = cljs.core.deref(node);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref(node).getElementsByClassName("chosen-drop").item((0));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var drop_node = temp__5718__auto__;
return drop_node.getBoundingClientRect().height;
} else {
return est_drop_height();
}
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
);
var top_height = (34);
var drop_above_QMARK_ = reagent.core.track(((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
if(cljs.core.truth_((function (){var and__4036__auto__ = can_drop_above_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref(node);
} else {
return and__4036__auto__;
}
})())){
var node_top = cljs.core.deref(node).getBoundingClientRect().top;
var window_height = document.documentElement.clientHeight;
return (((node_top + top_height) + cljs.core.deref(drop_height)) > window_height);
} else {
return null;
}
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
);
var press_enter = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
var drop_was_showing_QMARK_ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$on_DASH_enter_DASH_press.cljs$core$IFn$_invoke$arity$1(set_to_filter);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = cljs.core.seq(cljs.core.deref(filter_text));
if(and__4036__auto____$1){
var and__4036__auto____$2 = cljs.core.empty_QMARK_(filtered_choices);
if(and__4036__auto____$2){
var and__4036__auto____$3 = free_text_QMARK_;
if(cljs.core.truth_(and__4036__auto____$3)){
return cljs.core.deref(drop_showing_QMARK_);
} else {
return and__4036__auto____$3;
}
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
callback(cljs.core.deref(filter_text));
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return enter_drop_QMARK_;
}
})())){
callback(cljs.core.deref(internal_model));
} else {
}
}
}

return cljs.core.not(drop_was_showing_QMARK_);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_escape = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
var drop_was_showing_QMARK_ = cljs.core.deref(drop_showing_QMARK_);
cancel();

if(cljs.core.truth_(drop_was_showing_QMARK_)){
focus_anchor();
} else {
}

return cljs.core.not(drop_was_showing_QMARK_);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_tab = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (shift_key_QMARK_){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
var drop_was_showing_QMARK__11396 = cljs.core.deref(drop_showing_QMARK_);
call_on_change();

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

if(cljs.core.truth_((function (){var and__4036__auto__ = drop_was_showing_QMARK__11396;
if(cljs.core.truth_(and__4036__auto__)){
return shift_key_QMARK_;
} else {
return and__4036__auto__;
}
})())){
focus_anchor();
} else {
}
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return true;
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_arrow = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (offset){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq(filtered_choices);
} else {
return and__4036__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn__$1,cljs.core.deref(internal_model),offset));

if(cljs.core.truth_(cancelable_QMARK_)){
} else {
call_on_change();
}
} else {
}

cljs.core.reset_BANG_(drop_showing_QMARK_,true);

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

return true;
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_up = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
return press_arrow((-1));
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_down = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
return press_arrow((1));
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_page_up = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
return press_arrow((- (visible_count() - (1))));
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_page_down = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
return press_arrow((visible_count() - (1)));
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_home_or_end = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (offset){
if(((cljs.core.not(cljs.core.deref(free_text_focused_QMARK_))) && (cljs.core.seq(filtered_choices)))){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn__$1,cljs.core.deref(internal_model),offset));

cljs.core.reset_BANG_(select_free_text_QMARK_,true);
} else {
}

return true;
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_home = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
return press_home_or_end(cljs.core.cst$kw$start);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var press_end = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
return press_home_or_end(cljs.core.cst$kw$end);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var key_handler = ((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (p1__11362_SHARP_){
if(cljs.core.truth_(disabled_QMARK___$1)){
return false;
} else {
var G__11383 = p1__11362_SHARP_.which;
switch (G__11383) {
case (13):
return press_enter();

break;
case (27):
return press_escape();

break;
case (9):
return press_tab(p1__11362_SHARP_.shiftKey);

break;
case (38):
return press_up();

break;
case (40):
return press_down();

break;
case (33):
return press_page_up();

break;
case (34):
return press_page_down();

break;
case (36):
return press_home();

break;
case (35):
return press_end();

break;
default:
var or__4047__auto__ = filter_box_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return free_text_QMARK_;
}

}
}
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var dropdown = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-dropdown chosen-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(free_text_QMARK_)?"chosen-container-multi ":"chosen-container-single ")),"noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.deref(free_text_focused_QMARK_);
}
})())?"chosen-container-active ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))?"chosen-with-drop ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style((cljs.core.truth_(width)?"0 0 auto":"auto")),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$start),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),style], 0)),cljs.core.cst$kw$ref,((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (p1__11363_SHARP_){
return cljs.core.reset_BANG_(node,p1__11363_SHARP_);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (event){
cljs.core.reset_BANG_(over_QMARK_,true);

return null;
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (event){
cljs.core.reset_BANG_(over_QMARK_,false);

return null;
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
], null):null),attr], 0)),(cljs.core.truth_(just_drop_QMARK_)?null:(cljs.core.truth_(free_text_QMARK_)?new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.free_text_dropdown_top,free_text_input,select_free_text_QMARK_,free_text_focused_QMARK_,free_text_sel_range,internal_model,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,cancel,width,free_text_change,auto_complete_QMARK_,choices__$2,capitalize_QMARK_], null):new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.dropdown_top,internal_model,choices__$2,id_fn__$1,label_fn__$1,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_], null)
)),(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4036__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$chosen_DASH_drop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,(cljs.core.truth_(cljs.core.deref(drop_above_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(function (){var G__11384 = "translate3d(0px, -%ipx, 0px)";
var G__11385 = ((top_height + cljs.core.deref(drop_height)) + (-2));
return goog.string.format(G__11384,G__11385);
})()], null):null)], null),(cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = filter_box_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not(free_text_QMARK_);
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(just_drop_QMARK_);
} else {
return and__4036__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.filter_text_box,filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (p1__11364_SHARP_){
return set_filter_text(p1__11364_SHARP_,args__$1,true);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
,filter_placeholder], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$chosen_DASH_results,(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null)], null):null),(cljs.core.truth_((function (){var and__4036__auto__ = choices_fn_QMARK_;
if(and__4036__auto__){
return cljs.core.cst$kw$loading_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__4036__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$loading,cljs.core.get.cljs$core$IFn$_invoke$arity$3(i18n,cljs.core.cst$kw$loading,"Loading...")], null):(cljs.core.truth_((function (){var and__4036__auto__ = choices_fn_QMARK_;
if(and__4036__auto__){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__4036__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$error,cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state))], null):(((cljs.core.count(filtered_choices) > (0)))?(function (){var vec__11386 = re_com.dropdown.choices_with_group_headings(filtered_choices,group_fn);
var group_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,(0),null);
var group_opt_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,(1),null);
var make_a_choice = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.dropdown.make_choice_item,id_fn__$1,render_fn__$1,callback,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([internal_model], 0));
var make_choices = ((function (vec__11386,group_names,group_opt_lists,make_a_choice,choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (p1__11365_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_a_choice,p1__11365_SHARP_);
});})(vec__11386,group_names,group_opt_lists,make_a_choice,choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var make_h_then_choices = ((function (vec__11386,group_names,group_opt_lists,make_a_choice,make_choices,choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (h,opts){
return cljs.core.cons(re_com.dropdown.make_group_heading(h),make_choices(opts));
});})(vec__11386,group_names,group_opt_lists,make_a_choice,make_choices,choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
;
var has_no_group_names_QMARK_ = (cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(cljs.core.first(group_names)) == null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(group_opt_lists))) && (has_no_group_names_QMARK_))){
return make_choices(cljs.core.first(group_opt_lists));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(make_h_then_choices,group_names,group_opt_lists));
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$no_DASH_results,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$on_DASH_no_DASH_results_DASH_match_DASH_click.cljs$core$IFn$_invoke$arity$1(set_to_filter);
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = cljs.core.seq(cljs.core.deref(filter_text));
if(and__4036__auto____$1){
return free_text_QMARK_;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
callback(cljs.core.deref(filter_text));
} else {
}

return null;
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
], null),(function (){var G__11389 = (function (){var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core.seq(cljs.core.deref(filter_text));
if(and__4036__auto__){
return cljs.core.cst$kw$no_DASH_results_DASH_match.cljs$core$IFn$_invoke$arity$1(i18n);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var and__4036__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(filter_text));
if(and__4036__auto__){
return cljs.core.cst$kw$no_DASH_results.cljs$core$IFn$_invoke$arity$1(i18n);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = cljs.core.cst$kw$no_DASH_results_DASH_match.cljs$core$IFn$_invoke$arity$1(i18n);
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return "No results match \"%s\"";
}
}
}
})();
var G__11390 = cljs.core.deref(filter_text);
return goog.string.format(G__11389,G__11390);
})()], null)
)))], null)], null):null)], null);
var ___$1 = (cljs.core.truth_(tooltip)?cljs.core.add_watch(drop_showing_QMARK_,cljs.core.cst$kw$tooltip,((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,dropdown,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,dropdown,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
):null);
var ___$2 = (cljs.core.truth_(on_drop)?cljs.core.add_watch(drop_showing_QMARK_,cljs.core.cst$kw$on_DASH_drop,((function (choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,dropdown,___$1,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_){
return (function (p1__11368_SHARP_,p2__11369_SHARP_,p3__11366_SHARP_,p4__11367_SHARP_){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not(p3__11366_SHARP_);
if(and__4036__auto__){
return p4__11367_SHARP_;
} else {
return and__4036__auto__;
}
})())){
return (on_drop.cljs$core$IFn$_invoke$arity$0 ? on_drop.cljs$core$IFn$_invoke$arity$0() : on_drop.call(null));
} else {
return null;
}
});})(choices__$2,id_fn__$1,label_fn__$1,render_fn__$1,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,call_on_change,callback,free_text_change,cancel,dropdown_click,filtered_choices,visible_count,est_drop_height,drop_height,top_height,drop_above_QMARK_,press_enter,press_escape,press_tab,press_arrow,press_up,press_down,press_page_up,press_page_down,press_home_or_end,press_home,press_end,key_handler,dropdown,___$1,map__11379,map__11379__$1,args__$1,est_item_height,auto_complete_QMARK_,group_fn,disabled_QMARK_,on_change,i18n,tooltip,model__$1,free_text_QMARK_,attr,label_fn,tab_index,can_drop_above_QMARK_,repeat_change_QMARK_,max_height,placeholder,title_QMARK_,render_fn,cancelable_QMARK_,set_to_filter,width,on_drop,regex_filter_QMARK___$1,choices__$1,id_fn,style,filter_placeholder,debounce_delay__$1,class$,enter_drop_QMARK_,tooltip_position,filter_box_QMARK_,capitalize_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
):null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4047__auto__ = tooltip_position;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,dropdown], null);
} else {
return dropdown;
}
};
var G__11394 = function (var_args){
var p__11378 = null;
if (arguments.length > 0) {
var G__11398__i = 0, G__11398__a = new Array(arguments.length -  0);
while (G__11398__i < G__11398__a.length) {G__11398__a[G__11398__i] = arguments[G__11398__i + 0]; ++G__11398__i;}
  p__11378 = new cljs.core.IndexedSeq(G__11398__a,0,null);
} 
return G__11394__delegate.call(this,p__11378);};
G__11394.cljs$lang$maxFixedArity = 0;
G__11394.cljs$lang$applyTo = (function (arglist__11399){
var p__11378 = cljs.core.seq(arglist__11399);
return G__11394__delegate(p__11378);
});
G__11394.cljs$core$IFn$_invoke$arity$variadic = G__11394__delegate;
return G__11394;
})()
;
;})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,over_QMARK_,showing_QMARK_,free_text_focused_QMARK_,free_text_input,select_free_text_QMARK_,free_text_sel_range,focus_free_text,node,focus_anchor,map__11372,map__11372__$1,args,choices,model,regex_filter_QMARK_,debounce_delay,just_drop_QMARK_))
});

re_com.dropdown.single_dropdown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.dropdown.single_dropdown.cljs$lang$applyTo = (function (seq11370){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11370));
});

