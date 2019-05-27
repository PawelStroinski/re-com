// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5492__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5493__i = 0, G__5493__a = new Array(arguments.length -  0);
while (G__5493__i < G__5493__a.length) {G__5493__a[G__5493__i] = arguments[G__5493__i + 0]; ++G__5493__i;}
  args = new cljs.core.IndexedSeq(G__5493__a,0,null);
} 
return G__5492__delegate.call(this,args);};
G__5492.cljs$lang$maxFixedArity = 0;
G__5492.cljs$lang$applyTo = (function (arglist__5494){
var args = cljs.core.seq(arglist__5494);
return G__5492__delegate(args);
});
G__5492.cljs$core$IFn$_invoke$arity$variadic = G__5492__delegate;
return G__5492;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5495__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5496__i = 0, G__5496__a = new Array(arguments.length -  0);
while (G__5496__i < G__5496__a.length) {G__5496__a[G__5496__i] = arguments[G__5496__i + 0]; ++G__5496__i;}
  args = new cljs.core.IndexedSeq(G__5496__a,0,null);
} 
return G__5495__delegate.call(this,args);};
G__5495.cljs$lang$maxFixedArity = 0;
G__5495.cljs$lang$applyTo = (function (arglist__5497){
var args = cljs.core.seq(arglist__5497);
return G__5495__delegate(args);
});
G__5495.cljs$core$IFn$_invoke$arity$variadic = G__5495__delegate;
return G__5495;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
