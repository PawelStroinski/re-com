// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
/**
 * given a label and a relative path, return a component which hyperlinks to the GitHub URL in a new tab
 */
re_demo.utils.github_hyperlink = (function re_demo$utils$github_hyperlink(label,src_path){
var base_url = "https://github.com/Day8/re-com/tree/master/";
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,cljs.core.cst$kw$label,label,cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_path)].join(''),cljs.core.cst$kw$target,"_blank"], null);
});
/**
 * Shown across the top of each page
 */
re_demo.utils.panel_title = (function re_demo$utils$panel_title(panel_name,src1,src2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$margin,"0px 0px 9px 0px",cljs.core.cst$kw$height,"54px",cljs.core.cst$kw$align,cljs.core.cst$kw$end,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,panel_name,cljs.core.cst$kw$level,cljs.core.cst$kw$level1,cljs.core.cst$kw$margin_DASH_bottom,"0px",cljs.core.cst$kw$margin_DASH_top,"2px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"25px"], null),(cljs.core.truth_(src1)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$class,"all-small-caps",cljs.core.cst$kw$gap,"7px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"source:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.github_hyperlink,"component",src1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"|",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"12px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.github_hyperlink,"page",src2], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line], null)], null)], null);
});
/**
 * 2nd level title
 */
re_demo.utils.title2 = (function re_demo$utils$title2(text,style){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,text,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$style,style], null);
});
/**
 * given some status text, return a component that displays that status
 */
re_demo.utils.status_text = (function re_demo$utils$status_text(status,style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"Status: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null),status], null)], null);
});
re_demo.utils.material_design_hyperlink = (function re_demo$utils$material_design_hyperlink(text){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,cljs.core.cst$kw$label,text,cljs.core.cst$kw$href,"http://zavoloklom.github.io/material-design-iconic-font/icons.html",cljs.core.cst$kw$target,"_blank"], null);
});
/**
 * I show one argument in an args table.
 */
re_demo.utils.arg_row = (function re_demo$utils$arg_row(name_width,arg,odd_row_QMARK_){
var required = cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(arg);
var default$ = cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(arg);
var arg_type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(arg);
var needed_vec = ((cljs.core.not(required))?(((default$ == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$semibold$all_DASH_small_DASH_caps,"optional"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$semibold$all_DASH_small_DASH_caps,"default:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$semibold,cljs.core.str.cljs$core$IFn$_invoke$arity$1(default$)], null)], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$semibold$all_DASH_small_DASH_caps,"required"], null)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,(cljs.core.truth_(odd_row_QMARK_)?"#F4F4F4":"#FCFCFC")], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"semibold",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__11447 = cljs.core.cst$kw$align_DASH_self;
var G__11448 = cljs.core.cst$kw$center;
return (re_com.core.align_style.cljs$core$IFn$_invoke$arity$2 ? re_com.core.align_style.cljs$core$IFn$_invoke$arity$2(G__11447,G__11448) : re_com.core.align_style.call(null,G__11447,G__11448));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,name_width,cljs.core.cst$kw$padding_DASH_left,"15px"], null)], 0))], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(arg))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,cljs.core.cst$kw$size,"1px",cljs.core.cst$kw$color,"white"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"7px 15px 2px 15px"], null),cljs.core.cst$kw$gap,"4px",cljs.core.cst$kw$width,"310px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"4px",cljs.core.cst$kw$children,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$semibold,arg_type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null)], null),needed_vec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"smaller",cljs.core.cst$kw$color,"red"], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(arg)], null)], null)], null)], null)], null);
});
/**
 * I display a component arguements in an easy to read format
 */
re_demo.utils.args_table = (function re_demo$utils$args_table(args){
var name_width = "130px";
return ((function (name_width){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Parameters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_demo.utils.arg_row,name_width),args,cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null))))], null);
});
;})(name_width))
});
re_demo.utils.scroll_to_top = (function re_demo$utils$scroll_to_top(element){
return element.scrollTop = (0);
});
