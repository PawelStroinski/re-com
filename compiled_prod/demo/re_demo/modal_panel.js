// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('re_demo.modal_panel');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.core');
goog.require('re_com.modal_panel');
goog.require('re_demo.utils');
goog.require('reagent.core');
/**
 * Create a button to show a 'Please wait...' message for 3 seconds
 */
re_demo.modal_panel.please_wait_message = (function re_demo$modal_panel$please_wait_message(){
var show_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (show_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Please wait message",cljs.core.cst$kw$class,"btn-info",cljs.core.cst$kw$on_DASH_click,((function (show_QMARK_){
return (function (){
cljs.core.reset_BANG_(show_QMARK_,true);

return setTimeout(((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
});})(show_QMARK_))
,(3000));
});})(show_QMARK_))
], null),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,cljs.core.cst$kw$backdrop_DASH_on_DASH_click,((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
});})(show_QMARK_))
,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Please wait for 3 seconds",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"(or click on backdrop)"], null)], null):null)], null)], null);
});
;})(show_QMARK_))
});
/**
 * Create a button to show a modal with progress bar and cancel button. Not actually operational.
 */
re_demo.modal_panel.progress_bar_with_cancel_button = (function re_demo$modal_panel$progress_bar_with_cancel_button(){
var show_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (show_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Progress bar with cancel button",cljs.core.cst$kw$class,"btn-info",cljs.core.cst$kw$on_DASH_click,((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,true);
});})(show_QMARK_))
], null),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,cljs.core.cst$kw$backdrop_DASH_on_DASH_click,((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
});})(show_QMARK_))
,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$level,cljs.core.cst$kw$level2,cljs.core.cst$kw$label,"Recalculating..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.progress_bar,cljs.core.cst$kw$model,(33)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Cancel",cljs.core.cst$kw$class,"btn-danger",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"15px"], null),cljs.core.cst$kw$on_DASH_click,((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
});})(show_QMARK_))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"pretend only, click Cancel",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"(or click on backdrop)"], null)], null)], null)], null)], null)], null):null)], null)], null);
});
;})(show_QMARK_))
});
re_demo.modal_panel.dialog_markup = (function re_demo$modal_panel$dialog_markup(form_data,process_ok,process_cancel){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,cljs.core.cst$kw$border,"1px solid #eee",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"cornsilk"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Welcome to MI6. Please log in",cljs.core.cst$kw$level,cljs.core.cst$kw$level2], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$class,"form-group",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pf-email"], null),"Email address"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,cljs.core.cst$kw$model,cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_data)),cljs.core.cst$kw$on_DASH_change,(function (p1__11519_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_data,cljs.core.assoc,cljs.core.cst$kw$email,p1__11519_SHARP_);
}),cljs.core.cst$kw$placeholder,"Enter email",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"pf-email"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$class,"form-group",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pf-password"], null),"Password"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,cljs.core.cst$kw$model,cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_data)),cljs.core.cst$kw$on_DASH_change,(function (p1__11520_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_data,cljs.core.assoc,cljs.core.cst$kw$password,p1__11520_SHARP_);
}),cljs.core.cst$kw$placeholder,"Enter password",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"pf-password",cljs.core.cst$kw$type,"password"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$label,"Forget me",cljs.core.cst$kw$model,cljs.core.cst$kw$remember_DASH_me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_data)),cljs.core.cst$kw$on_DASH_change,(function (p1__11521_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_data,cljs.core.assoc,cljs.core.cst$kw$remember_DASH_me,p1__11521_SHARP_);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,cljs.core.cst$kw$color,"#ddd",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px 0 10px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"12px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Sign in",cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$on_DASH_click,process_ok], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Cancel",cljs.core.cst$kw$on_DASH_click,process_cancel], null)], null)], null)], null)], null)], null);
});
/**
 * Create a button to test the modal component for modal dialogs
 */
re_demo.modal_panel.modal_dialog = (function re_demo$modal_panel$modal_dialog(){
var show_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var form_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$email,"james.bond.007@sis.gov.uk",cljs.core.cst$kw$password,"abc123",cljs.core.cst$kw$remember_DASH_me,true], null));
var save_form_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var process_ok = ((function (show_QMARK_,form_data,save_form_data){
return (function (event){
cljs.core.reset_BANG_(show_QMARK_,false);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Submitted form data: ",cljs.core.deref(form_data)], 0));

return false;
});})(show_QMARK_,form_data,save_form_data))
;
var process_cancel = ((function (show_QMARK_,form_data,save_form_data,process_ok){
return (function (event){
cljs.core.reset_BANG_(form_data,cljs.core.deref(save_form_data));

cljs.core.reset_BANG_(show_QMARK_,false);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cancelled form data: ",cljs.core.deref(form_data)], 0));

return false;
});})(show_QMARK_,form_data,save_form_data,process_ok))
;
return ((function (show_QMARK_,form_data,save_form_data,process_ok,process_cancel){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"Modal Dialog",cljs.core.cst$kw$class,"btn-info",cljs.core.cst$kw$on_DASH_click,((function (show_QMARK_,form_data,save_form_data,process_ok,process_cancel){
return (function (){
cljs.core.reset_BANG_(save_form_data,cljs.core.deref(form_data));

return cljs.core.reset_BANG_(show_QMARK_,true);
});})(show_QMARK_,form_data,save_form_data,process_ok,process_cancel))
], null),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,cljs.core.cst$kw$backdrop_DASH_color,"grey",cljs.core.cst$kw$backdrop_DASH_opacity,0.4,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,"Consolas"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.modal_panel.dialog_markup,form_data,process_ok,process_cancel], null)], null):null)], null)], null);
});
;})(show_QMARK_,form_data,save_form_data,process_ok,process_cancel))
});
re_demo.modal_panel.panel2 = (function re_demo$modal_panel$panel2(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.panel_title,"[modal-panel ... ]","src/re_com/modal_panel.cljs","src/re_demo/modal_panel.cljs"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"100px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.status_text,"Stable"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Displays a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":child"], null)," component centered with a semi-transparent\n                                       backdrop, which prevents other user interaction."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Good for showing progress of long running operations and gathering user\n                                       input via modal dialogs."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.p,"Warning: This component should be placed at the end of surrounding markup\n                                       to ensure the backdrop covers everything. Otherwise, in certain cases,\n                                       absolutely positioned components added to the DOM after this component can\n                                       appear above the backdrop."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.args_table,re_com.modal_panel.modal_panel_args_desc], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.utils.title2,"Demo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.modal_panel.please_wait_message], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.modal_panel.progress_bar_with_cancel_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.modal_panel.modal_dialog], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
re_demo.modal_panel.panel = (function re_demo$modal_panel$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_demo.modal_panel.panel2], null);
});
