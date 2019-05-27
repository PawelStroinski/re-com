// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.datepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.date.Date');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('re_com.core');
goog.require('re_com.datepicker');
goog.require('re_com.validate');
goog.require('re_com.util');
goog.require('re_demo.utils');
goog.require('goog.i18n.DateTimeSymbols_pl');
re_demo.datepicker.days_map = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$Su,"S",cljs.core.cst$kw$Mo,"M",cljs.core.cst$kw$Tu,"T",cljs.core.cst$kw$We,"W",cljs.core.cst$kw$Th,"T",cljs.core.cst$kw$Fr,"F",cljs.core.cst$kw$Sa,"S"], null);
/**
 * convenience function to include/exclude member from
 */
re_demo.datepicker.toggle_inclusion_BANG_ = (function re_demo$datepicker$toggle_inclusion_BANG_(set_atom,member){
return cljs.core.reset_BANG_(set_atom,((cljs.core.contains_QMARK_(cljs.core.deref(set_atom),member))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(set_atom),member):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(set_atom),member)));
});
re_demo.datepicker.checkbox_for_day = (function re_demo$datepicker$checkbox_for_day(day,enabled_days){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"smaller"], null),cljs.core.cst$kw$label,(day.cljs$core$IFn$_invoke$arity$1 ? day.cljs$core$IFn$_invoke$arity$1(re_demo.datepicker.days_map) : day.call(null,re_demo.datepicker.days_map))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$model,(function (){var fexpr__11823 = cljs.core.deref(enabled_days);
return (fexpr__11823.cljs$core$IFn$_invoke$arity$1 ? fexpr__11823.cljs$core$IFn$_invoke$arity$1(day) : fexpr__11823.call(null,day));
})(),cljs.core.cst$kw$on_DASH_change,(function (){
return re_demo.datepicker.toggle_inclusion_BANG_(enabled_days,day);
})], null)], null)], null);
});
/**
 * Toggle controls for some parameters.
 */
re_demo.datepicker.parameters_with = (function re_demo$datepicker$parameters_with(content,enabled_days,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"15px",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level3,cljs.core.cst$kw$label,"Parameters"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":disabled?"], null)], null),cljs.core.cst$kw$model,disabled_QMARK_,cljs.core.cst$kw$on_DASH_change,(function (p1__11824_SHARP_){
return cljs.core.reset_BANG_(disabled_QMARK_,p1__11824_SHARP_);
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":show-today?"], null)], null),cljs.core.cst$kw$model,show_today_QMARK_,cljs.core.cst$kw$on_DASH_change,(function (p1__11825_SHARP_){
return cljs.core.reset_BANG_(show_today_QMARK_,p1__11825_SHARP_);
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":show-weeks?"], null)], null),cljs.core.cst$kw$model,show_weeks_QMARK_,cljs.core.cst$kw$on_DASH_change,(function (p1__11826_SHARP_){
return cljs.core.reset_BANG_(show_weeks_QMARK_,p1__11826_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"2px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.checkbox_for_day,cljs.core.cst$kw$Su,enabled_days], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.checkbox_for_day,cljs.core.cst$kw$Mo,enabled_days], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.checkbox_for_day,cljs.core.cst$kw$Tu,enabled_days], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.checkbox_for_day,cljs.core.cst$kw$We,enabled_days], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.checkbox_for_day,cljs.core.cst$kw$Th,enabled_days], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.checkbox_for_day,cljs.core.cst$kw$Fr,enabled_days], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.checkbox_for_day,cljs.core.cst$kw$Sa,enabled_days], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"5px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":selectable-fn"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"e.g. (fn [date] (#{1 2 3 4 5 6 7} (day-of-week date)))"], null)], null),content], null)], null);
});
re_demo.datepicker.date__GT_string = (function re_demo$datepicker$date__GT_string(date){
if(re_com.validate.date_like_QMARK_(date)){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("dd MMM, yyyy"),date);
} else {
return "no date";
}
});
re_demo.datepicker.show_variant = (function re_demo$datepicker$show_variant(variation){
var model1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.now__GT_utc());
var model2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(re_com.util.now__GT_utc(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((120))));
var model3 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var model4 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_time.core.today());
var disabled_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var show_today_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var show_weeks_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var enabled_days = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.keys(re_demo.datepicker.days_map)));
var as_days = reagent.ratom.make_reaction(((function (model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days){
return (function (){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days){
return (function (p1__11827_SHARP_){
var G__11832 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$Su,(7),cljs.core.cst$kw$Sa,(6),cljs.core.cst$kw$Fr,(5),cljs.core.cst$kw$Th,(4),cljs.core.cst$kw$We,(3),cljs.core.cst$kw$Tu,(2),cljs.core.cst$kw$Mo,(1)], null);
return (p1__11827_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11827_SHARP_.cljs$core$IFn$_invoke$arity$1(G__11832) : p1__11827_SHARP_.call(null,G__11832));
});})(model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days))
,cljs.core.deref(enabled_days)));
});})(model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days))
);
var selectable_pred = ((function (model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days){
return (function (date){
var G__11834 = cljs_time.core.day_of_week(date);
var fexpr__11833 = cljs.core.deref(as_days);
return (fexpr__11833.cljs$core$IFn$_invoke$arity$1 ? fexpr__11833.cljs$core$IFn$_invoke$arity$1(G__11834) : fexpr__11833.call(null,G__11834));
});})(model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days))
;
var label_style = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$font_DASH_size,"smaller",cljs.core.cst$kw$color,"#777"], null);
var G__11835 = variation;
var G__11835__$1 = (((G__11835 instanceof cljs.core.Keyword))?G__11835.fqn:null);
switch (G__11835__$1) {
case "inline":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function re_demo$datepicker$show_variant_$_inline_fn(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.parameters_with,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"20px",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$style,label_style,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," :maximum - ",re_demo.datepicker.date__GT_string(cljs.core.deref(model2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),":start-of-week - Sunday"], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker,cljs.core.cst$kw$model,model1,cljs.core.cst$kw$maximum,model2,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$show_DASH_today_QMARK_,cljs.core.deref(show_today_QMARK_),cljs.core.cst$kw$show_DASH_weeks_QMARK_,cljs.core.deref(show_weeks_QMARK_),cljs.core.cst$kw$selectable_DASH_fn,selectable_pred,cljs.core.cst$kw$on_DASH_change,((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function (p1__11828_SHARP_){
return cljs.core.reset_BANG_(model1,p1__11828_SHARP_);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$style,label_style,cljs.core.cst$kw$label,["selected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_demo.datepicker.date__GT_string(cljs.core.deref(model1)))].join('')], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"6px",cljs.core.cst$kw$margin,"10px 0px 0px 0px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$style,label_style,cljs.core.cst$kw$label,"Change model:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-arrow-left",cljs.core.cst$kw$size,cljs.core.cst$kw$smaller,cljs.core.cst$kw$disabled_QMARK_,(!(re_com.validate.date_like_QMARK_(cljs.core.deref(model1)))),cljs.core.cst$kw$on_DASH_click,((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function (){
if(re_com.validate.date_like_QMARK_(cljs.core.deref(model1))){
return cljs.core.reset_BANG_(model1,cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(model1),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
} else {
return null;
}
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-arrow-right",cljs.core.cst$kw$size,cljs.core.cst$kw$smaller,cljs.core.cst$kw$disabled_QMARK_,((((re_com.validate.date_like_QMARK_(cljs.core.deref(model1))) && (re_com.validate.date_like_QMARK_(cljs.core.deref(model2)))))?cljs.core.not(cljs_time.core.before_QMARK_(cljs_time.coerce.to_local_date(cljs.core.deref(model1)),cljs_time.coerce.to_local_date(cljs.core.deref(model2)))):true),cljs.core.cst$kw$on_DASH_click,((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function (){
if(re_com.validate.date_like_QMARK_(cljs.core.deref(model1))){
return cljs.core.reset_BANG_(model1,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(model1),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
} else {
return null;
}
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Reset",cljs.core.cst$kw$class,"btn btn-default",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"1px 4px"], null),cljs.core.cst$kw$on_DASH_click,((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function (){
return cljs.core.reset_BANG_(model1,null);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$style,label_style,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,":minimum - ",re_demo.datepicker.date__GT_string(cljs.core.deref(model1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),":start-of-week - Monday"], null)], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker,cljs.core.cst$kw$start_DASH_of_DASH_week,(0),cljs.core.cst$kw$model,model2,cljs.core.cst$kw$minimum,model1,cljs.core.cst$kw$show_DASH_today_QMARK_,cljs.core.deref(show_today_QMARK_),cljs.core.cst$kw$show_DASH_weeks_QMARK_,cljs.core.deref(show_weeks_QMARK_),cljs.core.cst$kw$selectable_DASH_fn,selectable_pred,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$on_DASH_change,((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function (p1__11829_SHARP_){
return cljs.core.reset_BANG_(model2,p1__11829_SHARP_);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$style,label_style,cljs.core.cst$kw$label,["selected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_demo.datepicker.date__GT_string(cljs.core.deref(model2)))].join('')], null)], null)], null)], null)], null),enabled_days,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_], null);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null);

break;
case "dropdown":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function re_demo$datepicker$show_variant_$_dropdown_fn(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.parameters_with,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"120px"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,cljs.core.cst$kw$model,model3,cljs.core.cst$kw$show_DASH_today_QMARK_,cljs.core.deref(show_today_QMARK_),cljs.core.cst$kw$show_DASH_weeks_QMARK_,cljs.core.deref(show_weeks_QMARK_),cljs.core.cst$kw$selectable_DASH_fn,selectable_pred,cljs.core.cst$kw$placeholder,"Select a date",cljs.core.cst$kw$format,"dd MMM, yyyy",cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$on_DASH_change,((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function (p1__11830_SHARP_){
return cljs.core.reset_BANG_(model3,p1__11830_SHARP_);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null)], null)], null),enabled_days,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_], null);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null);

break;
case "i18n":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function re_demo$datepicker$show_variant_$_i18n_fn(){
goog.i18n.DateTimeSymbols = goog.i18n.DateTimeSymbols_pl;

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$margin,"30px 0 0 0",cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,cljs.core.cst$kw$model,model4,cljs.core.cst$kw$format,"d MMMM yyyy",cljs.core.cst$kw$goog_QMARK_,true,cljs.core.cst$kw$i18n,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$days,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PON","WT","\u015AR","CZW","PT","SOB","ND"], null),cljs.core.cst$kw$months,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017Adziernik","Listopad","Grudzie\u0144"], null)], null),cljs.core.cst$kw$width,"190px",cljs.core.cst$kw$position_DASH_offset,(25),cljs.core.cst$kw$on_DASH_change,((function (G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style){
return (function (p1__11831_SHARP_){
return cljs.core.reset_BANG_(model4,p1__11831_SHARP_);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null)], null);
});})(G__11835,G__11835__$1,model1,model2,model3,model4,disabled_QMARK_,show_today_QMARK_,show_weeks_QMARK_,enabled_days,as_days,selectable_pred,label_style))
], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11835__$1)].join('')));

}
});
re_demo.datepicker.variations = cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$inline,cljs.core.cst$kw$label,"Inline"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$dropdown,cljs.core.cst$kw$label,"Dropdown"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$i18n,cljs.core.cst$kw$label,"I18n"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$private,true], null));
re_demo.datepicker.datepicker_examples = (function re_demo$datepicker$datepicker_examples(){
var selected_variation = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$inline);
return ((function (selected_variation){
return (function re_demo$datepicker$datepicker_examples_$_examples_fn(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"Date Components","src/re_com/datepicker.cljs","src/re_demo/datepicker.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"[datepicker ... ] & [datepicker-dropdown ... ]",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"24px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"An inline or popover date picker component."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.datepicker.datepicker_dropdown_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Select a demo"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$choices,re_demo.datepicker.variations,cljs.core.cst$kw$model,selected_variation,cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$on_DASH_change,((function (selected_variation){
return (function (p1__11837_SHARP_){
return cljs.core.reset_BANG_(selected_variation,p1__11837_SHARP_);
});})(selected_variation))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.show_variant,cljs.core.deref(selected_variation)], null)], null)], null)], null)], null)], null)], null);
});
;})(selected_variation))
});
re_demo.datepicker.panel = (function re_demo$datepicker$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.datepicker.datepicker_examples], null);
});
