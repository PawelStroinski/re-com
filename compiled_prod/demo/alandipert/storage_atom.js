// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('alandipert.storage_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('goog.Timer');
goog.require('clojure.string');
alandipert.storage_atom.transit_read_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
alandipert.storage_atom.transit_write_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
alandipert.storage_atom.clj__GT_json = (function alandipert$storage_atom$clj__GT_json(x){
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,cljs.core.deref(alandipert.storage_atom.transit_write_handlers)], null)),x);
});
alandipert.storage_atom.json__GT_clj = (function alandipert$storage_atom$json__GT_clj(x){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,cljs.core.deref(alandipert.storage_atom.transit_read_handlers)], null)),x);
});

/**
 * Represents a storage resource.
 * @interface
 */
alandipert.storage_atom.IStorageBackend = function(){};

alandipert.storage_atom._get = (function alandipert$storage_atom$_get(this$,not_found){
if((((!((this$ == null)))) && ((!((this$.alandipert$storage_atom$IStorageBackend$_get$arity$2 == null)))))){
return this$.alandipert$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (alandipert.storage_atom._get[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__4348__auto__.call(null,this$,not_found));
} else {
var m__4348__auto____$1 = (alandipert.storage_atom._get["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,not_found) : m__4348__auto____$1.call(null,this$,not_found));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-get",this$);
}
}
}
});

/**
 * Commit value to storage at location.
 */
alandipert.storage_atom._commit_BANG_ = (function alandipert$storage_atom$_commit_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null)))))){
return this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (alandipert.storage_atom._commit_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4348__auto__.call(null,this$,value));
} else {
var m__4348__auto____$1 = (alandipert.storage_atom._commit_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4348__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IStorageBackend.-commit!",this$);
}
}
}
});


/**
* @constructor
 * @implements {alandipert.storage_atom.IStorageBackend}
*/
alandipert.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
});
alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$ = cljs.core.PROTOCOL_SENTINEL;

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = self__.store.getItem(alandipert.storage_atom.clj__GT_json(self__.key));
if(cljs.core.truth_(temp__5718__auto__)){
var existing = temp__5718__auto__;
return alandipert.storage_atom.json__GT_clj(existing);
} else {
return not_found;
}
});

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(alandipert.storage_atom.clj__GT_json(self__.key),alandipert.storage_atom.clj__GT_json(value));
});

alandipert.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$store,cljs.core.cst$sym$key], null);
});

alandipert.storage_atom.StorageBackend.cljs$lang$type = true;

alandipert.storage_atom.StorageBackend.cljs$lang$ctorStr = "alandipert.storage-atom/StorageBackend";

alandipert.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"alandipert.storage-atom/StorageBackend");
});

/**
 * Positional factory function for alandipert.storage-atom/StorageBackend.
 */
alandipert.storage_atom.__GT_StorageBackend = (function alandipert$storage_atom$__GT_StorageBackend(store,key){
return (new alandipert.storage_atom.StorageBackend(store,key));
});

/**
 * Return a function that will always store a future call into the
 *   same atom. If recalled before the time is elapsed, the call is
 *   replaced without being executed.
 */
alandipert.storage_atom.debounce_factory = (function alandipert$storage_atom$debounce_factory(){
var f = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (f){
return (function (func,ttime){
if(cljs.core.truth_(cljs.core.deref(f))){
var G__11695_11696 = cljs.core.deref(f);
goog.Timer.clear(G__11695_11696);
} else {
}

return cljs.core.reset_BANG_(f,goog.Timer.callOnce(func,ttime));
});
;})(f))
});
/**
 * Delay in ms before a change is committed to the local storage. If a
 * new change occurs before the time is elapsed, the old change is
 * discarded an only the new one is committed.
 */
alandipert.storage_atom.storage_delay = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((10));
alandipert.storage_atom._STAR_storage_delay_STAR_ = null;
alandipert.storage_atom._STAR_watch_active_STAR_ = true;
alandipert.storage_atom.store = (function alandipert$storage_atom$store(atom,backend){
var existing = alandipert.storage_atom._get(backend,cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_none);
var debounce = alandipert.storage_atom.debounce_factory();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_none,existing)){
alandipert.storage_atom._commit_BANG_(backend,cljs.core.deref(atom));
} else {
cljs.core.reset_BANG_(atom,existing);
}

var G__11701 = atom;
cljs.core.add_watch(G__11701,cljs.core.cst$kw$alandipert$storage_DASH_atom_SLASH_storage_DASH_watch,((function (G__11701,existing,debounce){
return (function (p1__11699_SHARP_,p2__11700_SHARP_,p3__11697_SHARP_,p4__11698_SHARP_){
if(((alandipert.storage_atom._STAR_watch_active_STAR_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__11697_SHARP_,p4__11698_SHARP_)))){
var G__11702 = ((function (G__11701,existing,debounce){
return (function (){
return alandipert.storage_atom._commit_BANG_(backend,p4__11698_SHARP_);
});})(G__11701,existing,debounce))
;
var G__11703 = (function (){var or__4047__auto__ = alandipert.storage_atom._STAR_storage_delay_STAR_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.deref(alandipert.storage_atom.storage_delay);
}
})();
return (debounce.cljs$core$IFn$_invoke$arity$2 ? debounce.cljs$core$IFn$_invoke$arity$2(G__11702,G__11703) : debounce.call(null,G__11702,G__11703));
} else {
return null;
}
});})(G__11701,existing,debounce))
);

return G__11701;
});
alandipert.storage_atom.maybe_update_backend = (function alandipert$storage_atom$maybe_update_backend(atom,storage,k,default$,e){
if((storage === e.storageArea)){
if(cljs.core.empty_QMARK_(e.key)){
var _STAR_watch_active_STAR__orig_val__11704 = alandipert.storage_atom._STAR_watch_active_STAR_;
var _STAR_watch_active_STAR__temp_val__11705 = false;
alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__temp_val__11705;

try{return cljs.core.reset_BANG_(atom,default$);
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__orig_val__11704;
}} else {
try{var temp__5720__auto__ = alandipert.storage_atom.json__GT_clj(e.key);
if(cljs.core.truth_(temp__5720__auto__)){
var sk = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sk,k)){
var _STAR_watch_active_STAR__orig_val__11707 = alandipert.storage_atom._STAR_watch_active_STAR_;
var _STAR_watch_active_STAR__temp_val__11708 = false;
alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__temp_val__11708;

try{return cljs.core.reset_BANG_(atom,(function (){var value = e.newValue;
if((!(clojure.string.blank_QMARK_(value)))){
return alandipert.storage_atom.json__GT_clj(value);
} else {
return default$;
}
})());
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR__orig_val__11707;
}} else {
return null;
}
} else {
return null;
}
}catch (e11706){var e__$1 = e11706;
return null;
}}
} else {
return null;
}
});
alandipert.storage_atom.link_storage = (function alandipert$storage_atom$link_storage(atom,storage,k){
var default$ = cljs.core.deref(atom);
return window.addEventListener("storage",((function (default$){
return (function (p1__11709_SHARP_){
return alandipert.storage_atom.maybe_update_backend(atom,storage,k,default$,p1__11709_SHARP_);
});})(default$))
);
});
/**
 * Create and dispatch a synthetic StorageEvent. Expects key to be a string.
 *   An empty key indicates that all storage is being cleared.
 */
alandipert.storage_atom.dispatch_remove_event_BANG_ = (function alandipert$storage_atom$dispatch_remove_event_BANG_(storage,key){
var event = document.createEvent("StorageEvent");
event.initStorageEvent("storage",false,false,key,null,null,window.location.href,storage);

window.dispatchEvent(event);

return null;
});
alandipert.storage_atom.load_html_storage = (function alandipert$storage_atom$load_html_storage(storage,k){
return (new alandipert.storage_atom.StorageBackend(storage,k)).alandipert$storage_atom$IStorageBackend$_get$arity$2(null,null);
});
alandipert.storage_atom.load_local_storage = (function alandipert$storage_atom$load_local_storage(k){
return alandipert.storage_atom.load_html_storage(localStorage,k);
});
alandipert.storage_atom.load_session_storage = (function alandipert$storage_atom$load_session_storage(k){
return alandipert.storage_atom.load_html_storage(sessionStorage,k);
});
alandipert.storage_atom.html_storage = (function alandipert$storage_atom$html_storage(atom,storage,k){
alandipert.storage_atom.link_storage(atom,storage,k);

return alandipert.storage_atom.store(atom,(new alandipert.storage_atom.StorageBackend(storage,k)));
});
alandipert.storage_atom.local_storage = (function alandipert$storage_atom$local_storage(atom,k){
return alandipert.storage_atom.html_storage(atom,localStorage,k);
});
alandipert.storage_atom.session_storage = (function alandipert$storage_atom$session_storage(atom,k){
return alandipert.storage_atom.html_storage(atom,sessionStorage,k);
});
/**
 * Clear storage and also trigger an event on the current window
 *   so its atoms will be cleared as well.
 */
alandipert.storage_atom.clear_html_storage_BANG_ = (function alandipert$storage_atom$clear_html_storage_BANG_(storage){
storage.clear();

return alandipert.storage_atom.dispatch_remove_event_BANG_(storage,"");
});
alandipert.storage_atom.clear_local_storage_BANG_ = (function alandipert$storage_atom$clear_local_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_(localStorage);
});
alandipert.storage_atom.clear_session_storage_BANG_ = (function alandipert$storage_atom$clear_session_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_(sessionStorage);
});
/**
 * Remove key from storage and also trigger an event on the current
 *   window so its atoms will be cleared as well.
 */
alandipert.storage_atom.remove_html_storage_BANG_ = (function alandipert$storage_atom$remove_html_storage_BANG_(storage,k){
var key = alandipert.storage_atom.clj__GT_json(k);
storage.removeItem(key);

return alandipert.storage_atom.dispatch_remove_event_BANG_(storage,key);
});
alandipert.storage_atom.remove_local_storage_BANG_ = (function alandipert$storage_atom$remove_local_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_(localStorage,k);
});
alandipert.storage_atom.remove_session_storage_BANG_ = (function alandipert$storage_atom$remove_session_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_(sessionStorage,k);
});
