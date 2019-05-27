// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.tabs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.tabs');
goog.require('re_com.util');
goog.require('re_demo.utils');
goog.require('alandipert.storage_atom');
goog.require('reagent.core');
re_demo.tabs.demos = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$label,"Tab Styles"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$label,"Persistent Tab Selection"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$label,"Dynamic Tabs"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$label,"Tooltips"], null)], null);
re_demo.tabs.tabs_definition = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_tab1,cljs.core.cst$kw$label,"Tab1",cljs.core.cst$kw$say_DASH_this,"I don't like my tab siblings, they smell."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_tab2,cljs.core.cst$kw$label,"Tab2",cljs.core.cst$kw$say_DASH_this,"Don't listen to Tab1, he's just jealous of my train set."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_tab3,cljs.core.cst$kw$label,"Tab3",cljs.core.cst$kw$say_DASH_this,"I'm telling Mum on you two !!"], null)], null);
re_demo.tabs.tab_styles_demo = (function re_demo$tabs$tab_styles_demo(){
var selected_tab_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(re_demo.tabs.tabs_definition)));
var change_tab = ((function (selected_tab_id){
return (function (p1__11712_SHARP_){
return cljs.core.reset_BANG_(selected_tab_id,p1__11712_SHARP_);
});})(selected_tab_id))
;
var fn_name_width = "240px";
return ((function (selected_tab_id,change_tab,fn_name_width){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Each of the five tab components shown below have a distinct visual style."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"In this demo, all five tab components share the same state, so they change in lockstep."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"For effect, some fake  \"Tab Contents\" (a string of text) is shown in the dotted border below."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"The implementation here is simple and your selection is forgotten when you change to another demo panel."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"[horizontal-tabs ... ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,fn_name_width,cljs.core.cst$kw$font_DASH_size,"20px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,re_demo.tabs.tabs_definition,cljs.core.cst$kw$on_DASH_change,change_tab], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"[horizontal-bar-tabs ... ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,fn_name_width,cljs.core.cst$kw$font_DASH_size,"20px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,re_demo.tabs.tabs_definition,cljs.core.cst$kw$on_DASH_change,change_tab], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"[vertical-bar-tabs ... ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,fn_name_width,cljs.core.cst$kw$font_DASH_size,"20px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.vertical_bar_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,re_demo.tabs.tabs_definition,cljs.core.cst$kw$on_DASH_change,change_tab], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"[horizontal-pill-tabs ... ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,fn_name_width,cljs.core.cst$kw$font_DASH_size,"20px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_pill_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,re_demo.tabs.tabs_definition,cljs.core.cst$kw$on_DASH_change,change_tab], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"[vertical-pill-tabs ... ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,fn_name_width,cljs.core.cst$kw$font_DASH_size,"20px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.vertical_pill_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,re_demo.tabs.tabs_definition,cljs.core.cst$kw$on_DASH_change,change_tab], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,fn_name_width], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,cljs.core.cst$kw$border,"1px dashed grey",cljs.core.cst$kw$radius,"10px",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$say_DASH_this.cljs$core$IFn$_invoke$arity$1(re_com.util.item_for_id(cljs.core.deref(selected_tab_id),re_demo.tabs.tabs_definition))], null)], null)], null)], null)], null)], null);
});
;})(selected_tab_id,change_tab,fn_name_width))
});
re_demo.tabs.remembers_demo = (function re_demo$tabs$remembers_demo(){
var tab_defs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_1,cljs.core.cst$kw$label,"1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_2,cljs.core.cst$kw$label,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_3,cljs.core.cst$kw$label,"3"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_4,cljs.core.cst$kw$label,"4"], null)], null);
var id_store = alandipert.storage_atom.local_storage(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_id_DASH_store);
var selected_tab_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((((cljs.core.deref(id_store) == null))?cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(tab_defs)):cljs.core.deref(id_store)));
var _ = cljs.core.add_watch(selected_tab_id,null,((function (tab_defs,id_store,selected_tab_id){
return (function (p1__11714_SHARP_,p2__11715_SHARP_,p3__11716_SHARP_,p4__11713_SHARP_){
return cljs.core.reset_BANG_(id_store,p4__11713_SHARP_);
});})(tab_defs,id_store,selected_tab_id))
);
return ((function (tab_defs,id_store,selected_tab_id,_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Any tab selection you make below will persist, because your choice will be\n                  remembered using HTML5's local-storage."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"If you refresh the entire browser page and return here, you'll see the same selection."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,tab_defs,cljs.core.cst$kw$on_DASH_change,((function (tab_defs,id_store,selected_tab_id,_){
return (function (p1__11717_SHARP_){
return cljs.core.reset_BANG_(selected_tab_id,p1__11717_SHARP_);
});})(tab_defs,id_store,selected_tab_id,_))
], null)], null)], null);
});
;})(tab_defs,id_store,selected_tab_id,_))
});
re_demo.tabs.adding_tabs_demo = (function re_demo$tabs$adding_tabs_demo(){
var tab_defs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_1,cljs.core.cst$kw$label,"1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_2,cljs.core.cst$kw$label,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_3,cljs.core.cst$kw$label,"3"], null)], null));
var selected_tab_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(tab_defs))));
return ((function (tab_defs,selected_tab_id){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"If the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null)," parameter is an atom and the value in that atom changes,\n                   the display will change dynamically"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,tab_defs,cljs.core.cst$kw$on_DASH_change,((function (tab_defs,selected_tab_id){
return (function (p1__11718_SHARP_){
return cljs.core.reset_BANG_(selected_tab_id,p1__11718_SHARP_);
});})(tab_defs,selected_tab_id))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$gap,"25px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Click to \"add\" more tabs:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Add",cljs.core.cst$kw$on_DASH_click,((function (tab_defs,selected_tab_id){
return (function (){
var c = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(cljs.core.deref(tab_defs)) + (1)));
var new_tab = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(c),cljs.core.cst$kw$label,c], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tab_defs,cljs.core.conj,new_tab);
});})(tab_defs,selected_tab_id))
], null)], null)], null)], null)], null);
});
;})(tab_defs,selected_tab_id))
});
re_demo.tabs.tooltips_demo = (function re_demo$tabs$tooltips_demo(){
var tab_defs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_1,cljs.core.cst$kw$label,"Left Tab",cljs.core.cst$kw$tooltip,"This is the first tooltip..."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_2,cljs.core.cst$kw$label,"Middle Tab",cljs.core.cst$kw$tooltip,"This is the second tooltip..."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$re_DASH_demo$tabs_SLASH_3,cljs.core.cst$kw$label,"Right Tab",cljs.core.cst$kw$tooltip,"This is the third and the final tooltip!"], null)], null);
var selected_tab_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(tab_defs)));
return ((function (tab_defs,selected_tab_id){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Hover over a tab to see a tooltip."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,cljs.core.cst$kw$model,selected_tab_id,cljs.core.cst$kw$tabs,tab_defs,cljs.core.cst$kw$on_DASH_change,((function (tab_defs,selected_tab_id){
return (function (p1__11719_SHARP_){
return cljs.core.reset_BANG_(selected_tab_id,p1__11719_SHARP_);
});})(tab_defs,selected_tab_id))
], null)], null)], null);
});
;})(tab_defs,selected_tab_id))
});
re_demo.tabs.panel2 = (function re_demo$tabs$panel2(){
var selected_demo_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
return ((function (selected_demo_id){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"Tab Components","src/re_com/tabs.cljs","src/re_demo/tabs.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"A variety of horizontal and vertical tab selection components, styled\n                                            using Bootstrap."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"It is quite straight formward to roll your own tab components. The left\n                                           side navigation in this demo is effectively a hand-rolled tab component."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.tabs.tabs_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"600px",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Select a demo"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$choices,re_demo.tabs.demos,cljs.core.cst$kw$model,selected_demo_id,cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$on_DASH_change,((function (selected_demo_id){
return (function (p1__11720_SHARP_){
return cljs.core.reset_BANG_(selected_demo_id,p1__11720_SHARP_);
});})(selected_demo_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"30px"], null),(function (){var G__11721 = cljs.core.deref(selected_demo_id);
switch (G__11721) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.tabs.tab_styles_demo], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.tabs.remembers_demo], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.tabs.adding_tabs_demo], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.tabs.tooltips_demo], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11721)].join('')));

}
})()], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(selected_demo_id))
});
re_demo.tabs.panel = (function re_demo$tabs$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.tabs.panel2], null);
});
