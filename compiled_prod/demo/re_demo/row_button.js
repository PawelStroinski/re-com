// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.row_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.buttons');
goog.require('re_com.util');
goog.require('re_demo.md_circle_icon_button');
goog.require('re_demo.utils');
goog.require('reagent.core');
re_demo.row_button.data_row = (function re_demo$row_button$data_row(row,first_QMARK_,last_QMARK_,col_widths,mouse_over,click_msg){
var mouse_over_row_QMARK_ = (cljs.core.deref(mouse_over) === row);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$class,"rc-div-table-row",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (mouse_over_row_QMARK_){
return (function (event){
cljs.core.reset_BANG_(mouse_over,row);

return null;
});})(mouse_over_row_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (mouse_over_row_QMARK_){
return (function (event){
cljs.core.reset_BANG_(mouse_over,null);

return null;
});})(mouse_over_row_QMARK_))
], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$width,cljs.core.cst$kw$sort.cljs$core$IFn$_invoke$arity$1(col_widths),cljs.core.cst$kw$gap,"2px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi zmdi-arrow-back zmdi-hc-rotate-90",cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_,mouse_over_row_QMARK_,cljs.core.cst$kw$tooltip,"Move this line up",cljs.core.cst$kw$disabled_QMARK_,(function (){var and__4036__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return mouse_over_row_QMARK_;
} else {
return and__4036__auto__;
}
})(),cljs.core.cst$kw$on_DASH_click,((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_(click_msg,["move row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row))," up"].join(''));
});})(mouse_over_row_QMARK_))
], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi zmdi-arrow-forward zmdi-hc-rotate-90",cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_,mouse_over_row_QMARK_,cljs.core.cst$kw$tooltip,"Move this line down",cljs.core.cst$kw$disabled_QMARK_,(function (){var and__4036__auto__ = last_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return mouse_over_row_QMARK_;
} else {
return and__4036__auto__;
}
})(),cljs.core.cst$kw$on_DASH_click,((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_(click_msg,["move row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row))," down"].join(''));
});})(mouse_over_row_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(row),cljs.core.cst$kw$width,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(row),cljs.core.cst$kw$width,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(row),cljs.core.cst$kw$width,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"2px",cljs.core.cst$kw$width,cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(col_widths),cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi zmdi-copy",cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_,mouse_over_row_QMARK_,cljs.core.cst$kw$tooltip,"Copy this line",cljs.core.cst$kw$on_DASH_click,((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_(click_msg,["copy row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row))].join(''));
});})(mouse_over_row_QMARK_))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi zmdi-edit",cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_,mouse_over_row_QMARK_,cljs.core.cst$kw$tooltip,"Edit this line",cljs.core.cst$kw$on_DASH_click,((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_(click_msg,["edit row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row))].join(''));
});})(mouse_over_row_QMARK_))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi zmdi-delete",cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_,mouse_over_row_QMARK_,cljs.core.cst$kw$tooltip,"Delete this line",cljs.core.cst$kw$on_DASH_click,((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_(click_msg,["delete row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row))].join(''));
});})(mouse_over_row_QMARK_))
], null)], null)], null)], null)], null);
});
re_demo.row_button.data_table = (function re_demo$row_button$data_table(rows,col_widths){
var large_font = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mouse_over = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var click_msg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (large_font,mouse_over,click_msg){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,"Large font-size (row-buttons inherit their font-size from their parent)",cljs.core.cst$kw$model,large_font,cljs.core.cst$kw$on_DASH_change,((function (large_font,mouse_over,click_msg){
return (function (p1__11462_SHARP_){
return cljs.core.reset_BANG_(large_font,p1__11462_SHARP_);
});})(large_font,mouse_over,click_msg))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$class,"rc-div-table",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(cljs.core.truth_(cljs.core.deref(large_font))?"24px":null)], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$class,"rc-div-table-header",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Sort",cljs.core.cst$kw$width,cljs.core.cst$kw$sort.cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Name",cljs.core.cst$kw$width,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"From",cljs.core.cst$kw$width,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"To",cljs.core.cst$kw$width,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Actions",cljs.core.cst$kw$width,cljs.core.cst$kw$actions.cljs$core$IFn$_invoke$arity$1(col_widths)], null)], null)], null),(function (){var iter__4434__auto__ = ((function (large_font,mouse_over,click_msg){
return (function re_demo$row_button$data_table_$_iter__11463(s__11464){
return (new cljs.core.LazySeq(null,((function (large_font,mouse_over,click_msg){
return (function (){
var s__11464__$1 = s__11464;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11464__$1);
if(temp__5720__auto__){
var s__11464__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11464__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__11464__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__11466 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__11465 = (0);
while(true){
if((i__11465 < size__4433__auto__)){
var vec__11467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__11465);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(1),null);
var first_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(2),null);
var last_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,(3),null);
cljs.core.chunk_append(b__11466,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.row_button.data_row,row,first_QMARK_,last_QMARK_,col_widths,mouse_over,click_msg], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row)], null)));

var G__11473 = (i__11465 + (1));
i__11465 = G__11473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11466),re_demo$row_button$data_table_$_iter__11463(cljs.core.chunk_rest(s__11464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11466),null);
}
} else {
var vec__11470 = cljs.core.first(s__11464__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11470,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11470,(1),null);
var first_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11470,(2),null);
var last_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11470,(3),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.row_button.data_row,row,first_QMARK_,last_QMARK_,col_widths,mouse_over,click_msg], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row)], null)),re_demo$row_button$data_table_$_iter__11463(cljs.core.rest(s__11464__$2)));
}
} else {
return null;
}
break;
}
});})(large_font,mouse_over,click_msg))
,null,null));
});})(large_font,mouse_over,click_msg))
;
return iter__4434__auto__(re_com.util.enumerate(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sort,cljs.core.vals(rows))));
})()], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"clicked: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(click_msg))], null)], null)], null)], null)], null);
});
;})(large_font,mouse_over,click_msg))
});
re_demo.row_button.row_button_demo = (function re_demo$row_button$row_button_demo(){
var selected_icon = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(re_demo.md_circle_icon_button.icons)));
var col_widths = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$sort,"2.6em",cljs.core.cst$kw$name,"7.5em",cljs.core.cst$kw$from,"4em",cljs.core.cst$kw$to,"4em",cljs.core.cst$kw$actions,"4.5em"], null);
var rows = new cljs.core.PersistentArrayMap(null, 3, ["1",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,"1",cljs.core.cst$kw$sort,(0),cljs.core.cst$kw$name,"Time range 1",cljs.core.cst$kw$from,"18:00",cljs.core.cst$kw$to,"22:30"], null),"2",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,"2",cljs.core.cst$kw$sort,(1),cljs.core.cst$kw$name,"Time range 2",cljs.core.cst$kw$from,"18:00",cljs.core.cst$kw$to,"22:30"], null),"3",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,"3",cljs.core.cst$kw$sort,(2),cljs.core.cst$kw$name,"Time range 3",cljs.core.cst$kw$from,"06:00",cljs.core.cst$kw$to,"18:00"], null)], null);
return ((function (selected_icon,col_widths,rows){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"[row-button ... ]","src/re_com/buttons.cljs","src/re_demo/row_button.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Designed for tables which have per-row buttons. To avoid visual clutter, they only appear on row mouse-over."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"To understand, mouse-over the table in the demo.  Notice that buttons appear for each row, muted initially, but more strongly as the mouse is over them specifically."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Notice also that these buttons can have an optional explanatory tooltip."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p_span,"Material design icons, and their names, can be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.material_design_hyperlink,"found here"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.buttons.row_button_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.row_button.data_table,rows,col_widths], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(selected_icon,col_widths,rows))
});
re_demo.row_button.panel = (function re_demo$row_button$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.row_button.row_button_demo], null);
});
