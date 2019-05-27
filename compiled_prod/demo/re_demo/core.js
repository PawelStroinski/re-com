// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
goog.require('secretary.core');
goog.require('re_com.core');
goog.require('re_com.util');
goog.require('re_demo.utils');
goog.require('re_demo.introduction');
goog.require('re_demo.radio_button');
goog.require('re_demo.checkbox');
goog.require('re_demo.input_text');
goog.require('re_demo.slider');
goog.require('re_demo.label');
goog.require('re_demo.p');
goog.require('re_demo.title');
goog.require('re_demo.progress_bar');
goog.require('re_demo.throbber');
goog.require('re_demo.button');
goog.require('re_demo.md_circle_icon_button');
goog.require('re_demo.md_icon_button');
goog.require('re_demo.info_button');
goog.require('re_demo.row_button');
goog.require('re_demo.hyperlink');
goog.require('re_demo.hyperlink_href');
goog.require('re_demo.dropdowns');
goog.require('re_demo.alert_box');
goog.require('re_demo.alert_list');
goog.require('re_demo.tabs');
goog.require('re_demo.popovers');
goog.require('re_demo.datepicker');
goog.require('re_demo.selection_list');
goog.require('re_demo.input_time');
goog.require('re_demo.layout');
goog.require('re_demo.splits');
goog.require('re_demo.tour');
goog.require('re_demo.modal_panel');
goog.require('re_demo.h_box');
goog.require('re_demo.v_box');
goog.require('re_demo.box');
goog.require('re_demo.gap');
goog.require('re_demo.line');
goog.require('re_demo.scroller');
goog.require('re_demo.border');
goog.require('re_demo.typeahead');
goog.require('goog.history.EventType');
goog.require('goog.History');
cljs.core.enable_console_print_BANG_();
re_demo.core.tabs_definition = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$introduction,cljs.core.cst$kw$level,cljs.core.cst$kw$major,cljs.core.cst$kw$label,"Introduction",cljs.core.cst$kw$panel,re_demo.introduction.panel], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$buttons,cljs.core.cst$kw$level,cljs.core.cst$kw$major,cljs.core.cst$kw$label,"Buttons"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$button,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Basic Button",cljs.core.cst$kw$panel,re_demo.button.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$row_DASH_button,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Row Button",cljs.core.cst$kw$panel,re_demo.row_button.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$md_DASH_circle_DASH_icon_DASH_button,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Circle Icon Button",cljs.core.cst$kw$panel,re_demo.md_circle_icon_button.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$md_DASH_icon_DASH_button,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Icon Button",cljs.core.cst$kw$panel,re_demo.md_icon_button.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$info_DASH_button,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Info Button",cljs.core.cst$kw$panel,re_demo.info_button.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$hyperlink,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Hyperlink",cljs.core.cst$kw$panel,re_demo.hyperlink.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$hyperlink_DASH_href,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Hyperlink (href)",cljs.core.cst$kw$panel,re_demo.hyperlink_href.panel], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$basics,cljs.core.cst$kw$level,cljs.core.cst$kw$major,cljs.core.cst$kw$label,"Basics"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Checkbox",cljs.core.cst$kw$panel,re_demo.checkbox.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$radio_DASH_button,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Radio Button",cljs.core.cst$kw$panel,re_demo.radio_button.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Input Text",cljs.core.cst$kw$panel,re_demo.input_text.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$slider,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Slider",cljs.core.cst$kw$panel,re_demo.slider.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$progress_DASH_bar,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Progress Bar",cljs.core.cst$kw$panel,re_demo.progress_bar.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$throbber,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Throbber",cljs.core.cst$kw$panel,re_demo.throbber.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$date,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Date Picker",cljs.core.cst$kw$panel,re_demo.datepicker.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$time,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Input Time",cljs.core.cst$kw$panel,re_demo.input_time.panel], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$selection,cljs.core.cst$kw$level,cljs.core.cst$kw$major,cljs.core.cst$kw$label,"Selection"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$dropdown,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Dropdown",cljs.core.cst$kw$panel,re_demo.dropdowns.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$lists,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Selection List",cljs.core.cst$kw$panel,re_demo.selection_list.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$tabs,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Tabs",cljs.core.cst$kw$panel,re_demo.tabs.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$typeahead,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Typeahead",cljs.core.cst$kw$panel,re_demo.typeahead.panel], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$layers,cljs.core.cst$kw$level,cljs.core.cst$kw$major,cljs.core.cst$kw$label,"Layers"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$modal_DASH_panel,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Modal Panel",cljs.core.cst$kw$panel,re_demo.modal_panel.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$popovers,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Popover",cljs.core.cst$kw$panel,re_demo.popovers.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$popover_DASH_reference,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Popover Reference",cljs.core.cst$kw$panel,re_demo.popovers.arg_lists], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$tour,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Tour",cljs.core.cst$kw$panel,re_demo.tour.panel], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$typography,cljs.core.cst$kw$level,cljs.core.cst$kw$major,cljs.core.cst$kw$label,"Typography"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$label,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Label",cljs.core.cst$kw$panel,re_demo.label.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$p,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Paragraph (p)",cljs.core.cst$kw$panel,re_demo.p.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$title,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Title",cljs.core.cst$kw$panel,re_demo.title.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$alert_DASH_box,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Alert Box",cljs.core.cst$kw$panel,re_demo.alert_box.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$alert_DASH_list,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Alert List",cljs.core.cst$kw$panel,re_demo.alert_list.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$layout,cljs.core.cst$kw$level,cljs.core.cst$kw$major,cljs.core.cst$kw$label,"Layout",cljs.core.cst$kw$panel,re_demo.layout.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$h_DASH_box,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"H-box",cljs.core.cst$kw$panel,re_demo.h_box.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$v_DASH_box,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"V-box",cljs.core.cst$kw$panel,re_demo.v_box.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$box,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Box",cljs.core.cst$kw$panel,re_demo.box.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$gap,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Gap",cljs.core.cst$kw$panel,re_demo.gap.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$line,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Line",cljs.core.cst$kw$panel,re_demo.line.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$scroller,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Scroller",cljs.core.cst$kw$panel,re_demo.scroller.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$border,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Border",cljs.core.cst$kw$panel,re_demo.border.panel], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$splits,cljs.core.cst$kw$level,cljs.core.cst$kw$minor,cljs.core.cst$kw$label,"Splits",cljs.core.cst$kw$panel,re_demo.splits.panel], null)], true);
re_demo.core.nav_item = (function re_demo$core$nav_item(){
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouse_over_QMARK_){
return (function (tab,selected_tab_id,on_select_tab){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_tab_id),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tab));
var is_major_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(tab),cljs.core.cst$kw$major);
var has_panel_QMARK_ = (!((cljs.core.cst$kw$panel.cljs$core$IFn$_invoke$arity$1(tab) == null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$border_DASH_right,cljs.core.cst$kw$color,cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$cursor,cljs.core.cst$kw$padding_DASH_top,cljs.core.cst$kw$padding_DASH_left],["1.3em",((selected_QMARK_)?"4px #d0d0d0 solid":null),((has_panel_QMARK_)?((selected_QMARK_)?"#111":null):"#888"),"nowrap",((is_major_QMARK_)?"15px":null),((is_major_QMARK_)?"bold":null),(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_tab_id),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tab));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.deref(mouse_over_QMARK_);
}
})())?"#eaeaea":null),((has_panel_QMARK_)?"pointer":"default"),((is_major_QMARK_)?"6px":null),((is_major_QMARK_)?"24px":"32px")]),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,is_major_QMARK_,has_panel_QMARK_,mouse_over_QMARK_){
return (function (event){
if(has_panel_QMARK_){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);
} else {
}

return null;
});})(selected_QMARK_,is_major_QMARK_,has_panel_QMARK_,mouse_over_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (selected_QMARK_,is_major_QMARK_,has_panel_QMARK_,mouse_over_QMARK_){
return (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
});})(selected_QMARK_,is_major_QMARK_,has_panel_QMARK_,mouse_over_QMARK_))
,cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,is_major_QMARK_,has_panel_QMARK_,mouse_over_QMARK_){
return (function (event){
if(has_panel_QMARK_){
var G__12085_12086 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tab);
(on_select_tab.cljs$core$IFn$_invoke$arity$1 ? on_select_tab.cljs$core$IFn$_invoke$arity$1(G__12085_12086) : on_select_tab.call(null,G__12085_12086));

re_demo.utils.scroll_to_top(re_com.util.get_element_by_id("right-panel"));
} else {
}

return null;
});})(selected_QMARK_,is_major_QMARK_,has_panel_QMARK_,mouse_over_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(tab)], null)], null);
});
;})(mouse_over_QMARK_))
});
re_demo.core.left_side_nav_bar = (function re_demo$core$left_side_nav_bar(selected_tab_id,on_select_tab){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$class,"noselect",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#fcfcfc"], null),cljs.core.cst$kw$children,(function (){var iter__4434__auto__ = (function re_demo$core$left_side_nav_bar_$_iter__12087(s__12088){
return (new cljs.core.LazySeq(null,(function (){
var s__12088__$1 = s__12088;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__12088__$1);
if(temp__5720__auto__){
var s__12088__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12088__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__12088__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__12090 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__12089 = (0);
while(true){
if((i__12089 < size__4433__auto__)){
var tab = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__12089);
cljs.core.chunk_append(b__12090,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.core.nav_item,tab,selected_tab_id,on_select_tab], null));

var G__12091 = (i__12089 + (1));
i__12089 = G__12091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12090),re_demo$core$left_side_nav_bar_$_iter__12087(cljs.core.chunk_rest(s__12088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12090),null);
}
} else {
var tab = cljs.core.first(s__12088__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.core.nav_item,tab,selected_tab_id,on_select_tab], null),re_demo$core$left_side_nav_bar_$_iter__12087(cljs.core.rest(s__12088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(re_demo.core.tabs_definition);
})()], null);
});
re_demo.core.re_com_title_box = (function re_demo$core$re_com_title_box(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$height,"62px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#666"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Re-com",cljs.core.cst$kw$level,cljs.core.cst$kw$level1,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"32px",cljs.core.cst$kw$color,"#fefefe"], null)], null)], null)], null);
});
re_demo.core.browser_alert = (function re_demo$core$browser_alert(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$padding,"10px 10px 0px 0px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,cljs.core.cst$kw$alert_DASH_type,cljs.core.cst$kw$danger,cljs.core.cst$kw$heading,"Only Tested On Chrome",cljs.core.cst$kw$body,"re-com should work on all modern browsers, but there might be dragons!"], null)], null);
});
if((typeof re_demo !== 'undefined') && (typeof re_demo.core !== 'undefined') && (typeof re_demo.core.id_store !== 'undefined')){
} else {
re_demo.core.id_store = alandipert.storage_atom.local_storage(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$re_DASH_demo$core_SLASH_id_DASH_store);
}
if((typeof re_demo !== 'undefined') && (typeof re_demo.core !== 'undefined') && (typeof re_demo.core.selected_tab_id !== 'undefined')){
} else {
re_demo.core.selected_tab_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((((((cljs.core.deref(re_demo.core.id_store) == null)) || ((re_com.util.item_for_id(cljs.core.deref(re_demo.core.id_store),re_demo.core.tabs_definition) == null))))?cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(re_demo.core.tabs_definition)):cljs.core.deref(re_demo.core.id_store)));
}
var action__11901__auto___12098 = (function (params__11902__auto__){
if(cljs.core.map_QMARK_(params__11902__auto__)){
var map__12092 = params__11902__auto__;
var map__12092__$1 = (((((!((map__12092 == null))))?(((((map__12092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12092):map__12092);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12092__$1,cljs.core.cst$kw$tab);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tab);
cljs.core.reset_BANG_(re_demo.core.selected_tab_id,id);

return cljs.core.reset_BANG_(re_demo.core.id_store,id);
} else {
if(cljs.core.vector_QMARK_(params__11902__auto__)){
var vec__12094 = params__11902__auto__;
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12094,(0),null);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tab);
cljs.core.reset_BANG_(re_demo.core.selected_tab_id,id);

return cljs.core.reset_BANG_(re_demo.core.id_store,id);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:tab",action__11901__auto___12098);

re_demo.core.demo_page = ((function (action__11901__auto___12098){
return (function re_demo$core$demo_page(var_args){
var args__4647__auto__ = [];
var len__4641__auto___12099 = arguments.length;
var i__4642__auto___12100 = (0);
while(true){
if((i__4642__auto___12100 < len__4641__auto___12099)){
args__4647__auto__.push((arguments[i__4642__auto___12100]));

var G__12101 = (i__4642__auto___12100 + (1));
i__4642__auto___12100 = G__12101;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_demo.core.demo_page.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});})(action__11901__auto___12098))
;

re_demo.core.demo_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__11901__auto___12098){
return (function (args__11900__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:tab",args__11900__auto__);
});})(action__11901__auto___12098))
;

re_demo.core.demo_page.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_demo.core.demo_page.cljs$lang$applyTo = ((function (action__11901__auto___12098){
return (function (seq12097){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12097));
});})(action__11901__auto___12098))
;

if((typeof re_demo !== 'undefined') && (typeof re_demo.core !== 'undefined') && (typeof re_demo.core.history !== 'undefined')){
} else {
re_demo.core.history = (new goog.History());
}
var G__12102_12105 = re_demo.core.history;
var G__12103_12106 = goog.history.EventType.NAVIGATE;
var G__12104_12107 = ((function (G__12102_12105,G__12103_12106){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__12102_12105,G__12103_12106))
;
goog.events.listen(G__12102_12105,G__12103_12106,G__12104_12107);
re_demo.core.history.setEnabled(true);
re_demo.core.main = (function re_demo$core$main(){
var on_select_tab = (function (p1__12108_SHARP_){
return re_demo.core.history.setToken(re_demo.core.demo_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tab,cljs.core.name(p1__12108_SHARP_)], null)], 0)));
});
return ((function (on_select_tab){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_split,cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$initial_DASH_split,(9),cljs.core.cst$kw$margin,"0px",cljs.core.cst$kw$panel_DASH_1,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$auto,cljs.core.cst$kw$h_DASH_scroll,cljs.core.cst$kw$off,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.core.re_com_title_box], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.core.left_side_nav_bar,re_demo.core.selected_tab_id,on_select_tab], null)], null)], null)], null),cljs.core.cst$kw$panel_DASH_2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"right-panel"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.browser.isChrome())?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.core.browser_alert], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$padding,"0px 0px 0px 50px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panel.cljs$core$IFn$_invoke$arity$1(re_com.util.item_for_id(cljs.core.deref(re_demo.core.selected_tab_id),re_demo.core.tabs_definition))], null)], null)], null)], null)], null)], null);
});
;})(on_select_tab))
});
re_demo.core.mount_demo = (function re_demo$core$mount_demo(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.core.main], null),re_com.util.get_element_by_id("app"));
});
goog.exportSymbol('re_demo.core.mount_demo', re_demo.core.mount_demo);
