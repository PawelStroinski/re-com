// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__8476 = arguments.length;
switch (G__8476) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8477 = (function (f,blockable,meta8478){
this.f = f;
this.blockable = blockable;
this.meta8478 = meta8478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8479,meta8478__$1){
var self__ = this;
var _8479__$1 = this;
return (new cljs.core.async.t_cljs$core$async8477(self__.f,self__.blockable,meta8478__$1));
});

cljs.core.async.t_cljs$core$async8477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8479){
var self__ = this;
var _8479__$1 = this;
return self__.meta8478;
});

cljs.core.async.t_cljs$core$async8477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta8478], null);
});

cljs.core.async.t_cljs$core$async8477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8477";

cljs.core.async.t_cljs$core$async8477.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async8477");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8477.
 */
cljs.core.async.__GT_t_cljs$core$async8477 = (function cljs$core$async$__GT_t_cljs$core$async8477(f__$1,blockable__$1,meta8478){
return (new cljs.core.async.t_cljs$core$async8477(f__$1,blockable__$1,meta8478));
});

}

return (new cljs.core.async.t_cljs$core$async8477(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__8483 = arguments.length;
switch (G__8483) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__8486 = arguments.length;
switch (G__8486) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__8489 = arguments.length;
switch (G__8489) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_8491 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_8491) : fn1.call(null,val_8491));
} else {
cljs.core.async.impl.dispatch.run(((function (val_8491,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_8491) : fn1.call(null,val_8491));
});})(val_8491,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__8493 = arguments.length;
switch (G__8493) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___8495 = n;
var x_8496 = (0);
while(true){
if((x_8496 < n__4518__auto___8495)){
(a[x_8496] = (0));

var G__8497 = (x_8496 + (1));
x_8496 = G__8497;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__8498 = (i + (1));
i = G__8498;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8499 = (function (flag,meta8500){
this.flag = flag;
this.meta8500 = meta8500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8501,meta8500__$1){
var self__ = this;
var _8501__$1 = this;
return (new cljs.core.async.t_cljs$core$async8499(self__.flag,meta8500__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8501){
var self__ = this;
var _8501__$1 = this;
return self__.meta8500;
});})(flag))
;

cljs.core.async.t_cljs$core$async8499.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8499.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8499.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8499.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8499.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta8500], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8499";

cljs.core.async.t_cljs$core$async8499.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async8499");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8499.
 */
cljs.core.async.__GT_t_cljs$core$async8499 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8499(flag__$1,meta8500){
return (new cljs.core.async.t_cljs$core$async8499(flag__$1,meta8500));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8499(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8502 = (function (flag,cb,meta8503){
this.flag = flag;
this.cb = cb;
this.meta8503 = meta8503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8504,meta8503__$1){
var self__ = this;
var _8504__$1 = this;
return (new cljs.core.async.t_cljs$core$async8502(self__.flag,self__.cb,meta8503__$1));
});

cljs.core.async.t_cljs$core$async8502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8504){
var self__ = this;
var _8504__$1 = this;
return self__.meta8503;
});

cljs.core.async.t_cljs$core$async8502.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async8502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta8503], null);
});

cljs.core.async.t_cljs$core$async8502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8502";

cljs.core.async.t_cljs$core$async8502.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async8502");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8502.
 */
cljs.core.async.__GT_t_cljs$core$async8502 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8502(flag__$1,cb__$1,meta8503){
return (new cljs.core.async.t_cljs$core$async8502(flag__$1,cb__$1,meta8503));
});

}

return (new cljs.core.async.t_cljs$core$async8502(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8505_SHARP_){
var G__8507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8505_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8507) : fret.call(null,G__8507));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8506_SHARP_){
var G__8508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8506_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8508) : fret.call(null,G__8508));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8509 = (i + (1));
i = G__8509;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___8515 = arguments.length;
var i__4642__auto___8516 = (0);
while(true){
if((i__4642__auto___8516 < len__4641__auto___8515)){
args__4647__auto__.push((arguments[i__4642__auto___8516]));

var G__8517 = (i__4642__auto___8516 + (1));
i__4642__auto___8516 = G__8517;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8512){
var map__8513 = p__8512;
var map__8513__$1 = (((((!((map__8513 == null))))?(((((map__8513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8513):map__8513);
var opts = map__8513__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8510){
var G__8511 = cljs.core.first(seq8510);
var seq8510__$1 = cljs.core.next(seq8510);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8511,seq8510__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__8519 = arguments.length;
switch (G__8519) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8416__auto___8565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___8565){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___8565){
return (function (state_8543){
var state_val_8544 = (state_8543[(1)]);
if((state_val_8544 === (7))){
var inst_8539 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8545_8566 = state_8543__$1;
(statearr_8545_8566[(2)] = inst_8539);

(statearr_8545_8566[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (1))){
var state_8543__$1 = state_8543;
var statearr_8546_8567 = state_8543__$1;
(statearr_8546_8567[(2)] = null);

(statearr_8546_8567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (4))){
var inst_8522 = (state_8543[(7)]);
var inst_8522__$1 = (state_8543[(2)]);
var inst_8523 = (inst_8522__$1 == null);
var state_8543__$1 = (function (){var statearr_8547 = state_8543;
(statearr_8547[(7)] = inst_8522__$1);

return statearr_8547;
})();
if(cljs.core.truth_(inst_8523)){
var statearr_8548_8568 = state_8543__$1;
(statearr_8548_8568[(1)] = (5));

} else {
var statearr_8549_8569 = state_8543__$1;
(statearr_8549_8569[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (13))){
var state_8543__$1 = state_8543;
var statearr_8550_8570 = state_8543__$1;
(statearr_8550_8570[(2)] = null);

(statearr_8550_8570[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (6))){
var inst_8522 = (state_8543[(7)]);
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8543__$1,(11),to,inst_8522);
} else {
if((state_val_8544 === (3))){
var inst_8541 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8543__$1,inst_8541);
} else {
if((state_val_8544 === (12))){
var state_8543__$1 = state_8543;
var statearr_8551_8571 = state_8543__$1;
(statearr_8551_8571[(2)] = null);

(statearr_8551_8571[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (2))){
var state_8543__$1 = state_8543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8543__$1,(4),from);
} else {
if((state_val_8544 === (11))){
var inst_8532 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
if(cljs.core.truth_(inst_8532)){
var statearr_8552_8572 = state_8543__$1;
(statearr_8552_8572[(1)] = (12));

} else {
var statearr_8553_8573 = state_8543__$1;
(statearr_8553_8573[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (9))){
var state_8543__$1 = state_8543;
var statearr_8554_8574 = state_8543__$1;
(statearr_8554_8574[(2)] = null);

(statearr_8554_8574[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (5))){
var state_8543__$1 = state_8543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8555_8575 = state_8543__$1;
(statearr_8555_8575[(1)] = (8));

} else {
var statearr_8556_8576 = state_8543__$1;
(statearr_8556_8576[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (14))){
var inst_8537 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8557_8577 = state_8543__$1;
(statearr_8557_8577[(2)] = inst_8537);

(statearr_8557_8577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (10))){
var inst_8529 = (state_8543[(2)]);
var state_8543__$1 = state_8543;
var statearr_8558_8578 = state_8543__$1;
(statearr_8558_8578[(2)] = inst_8529);

(statearr_8558_8578[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8544 === (8))){
var inst_8526 = cljs.core.async.close_BANG_(to);
var state_8543__$1 = state_8543;
var statearr_8559_8579 = state_8543__$1;
(statearr_8559_8579[(2)] = inst_8526);

(statearr_8559_8579[(1)] = (10));


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
});})(c__8416__auto___8565))
;
return ((function (switch__8309__auto__,c__8416__auto___8565){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_8560 = [null,null,null,null,null,null,null,null];
(statearr_8560[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_8560[(1)] = (1));

return statearr_8560;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_8543){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8543);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8561){if((e8561 instanceof Object)){
var ex__8313__auto__ = e8561;
var statearr_8562_8580 = state_8543;
(statearr_8562_8580[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8543);

return cljs.core.cst$kw$recur;
} else {
throw e8561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8581 = state_8543;
state_8543 = G__8581;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_8543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_8543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___8565))
})();
var state__8418__auto__ = (function (){var statearr_8563 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8563[(6)] = c__8416__auto___8565);

return statearr_8563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___8565))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__8582){
var vec__8583 = p__8582;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8583,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8583,(1),null);
var job = vec__8583;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8416__auto___8754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___8754,res,vec__8583,v,p,job,jobs,results){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___8754,res,vec__8583,v,p,job,jobs,results){
return (function (state_8590){
var state_val_8591 = (state_8590[(1)]);
if((state_val_8591 === (1))){
var state_8590__$1 = state_8590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8590__$1,(2),res,v);
} else {
if((state_val_8591 === (2))){
var inst_8587 = (state_8590[(2)]);
var inst_8588 = cljs.core.async.close_BANG_(res);
var state_8590__$1 = (function (){var statearr_8592 = state_8590;
(statearr_8592[(7)] = inst_8587);

return statearr_8592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8590__$1,inst_8588);
} else {
return null;
}
}
});})(c__8416__auto___8754,res,vec__8583,v,p,job,jobs,results))
;
return ((function (switch__8309__auto__,c__8416__auto___8754,res,vec__8583,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0 = (function (){
var statearr_8593 = [null,null,null,null,null,null,null,null];
(statearr_8593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__);

(statearr_8593[(1)] = (1));

return statearr_8593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1 = (function (state_8590){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8590);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8594){if((e8594 instanceof Object)){
var ex__8313__auto__ = e8594;
var statearr_8595_8755 = state_8590;
(statearr_8595_8755[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8590);

return cljs.core.cst$kw$recur;
} else {
throw e8594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8756 = state_8590;
state_8590 = G__8756;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = function(state_8590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1.call(this,state_8590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___8754,res,vec__8583,v,p,job,jobs,results))
})();
var state__8418__auto__ = (function (){var statearr_8596 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8596[(6)] = c__8416__auto___8754);

return statearr_8596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___8754,res,vec__8583,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8597){
var vec__8598 = p__8597;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8598,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8598,(1),null);
var job = vec__8598;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___8757 = n;
var __8758 = (0);
while(true){
if((__8758 < n__4518__auto___8757)){
var G__8601_8759 = type;
var G__8601_8760__$1 = (((G__8601_8759 instanceof cljs.core.Keyword))?G__8601_8759.fqn:null);
switch (G__8601_8760__$1) {
case "compute":
var c__8416__auto___8762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8758,c__8416__auto___8762,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (__8758,c__8416__auto___8762,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async){
return (function (state_8614){
var state_val_8615 = (state_8614[(1)]);
if((state_val_8615 === (1))){
var state_8614__$1 = state_8614;
var statearr_8616_8763 = state_8614__$1;
(statearr_8616_8763[(2)] = null);

(statearr_8616_8763[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8615 === (2))){
var state_8614__$1 = state_8614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8614__$1,(4),jobs);
} else {
if((state_val_8615 === (3))){
var inst_8612 = (state_8614[(2)]);
var state_8614__$1 = state_8614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8614__$1,inst_8612);
} else {
if((state_val_8615 === (4))){
var inst_8604 = (state_8614[(2)]);
var inst_8605 = process(inst_8604);
var state_8614__$1 = state_8614;
if(cljs.core.truth_(inst_8605)){
var statearr_8617_8764 = state_8614__$1;
(statearr_8617_8764[(1)] = (5));

} else {
var statearr_8618_8765 = state_8614__$1;
(statearr_8618_8765[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8615 === (5))){
var state_8614__$1 = state_8614;
var statearr_8619_8766 = state_8614__$1;
(statearr_8619_8766[(2)] = null);

(statearr_8619_8766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8615 === (6))){
var state_8614__$1 = state_8614;
var statearr_8620_8767 = state_8614__$1;
(statearr_8620_8767[(2)] = null);

(statearr_8620_8767[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8615 === (7))){
var inst_8610 = (state_8614[(2)]);
var state_8614__$1 = state_8614;
var statearr_8621_8768 = state_8614__$1;
(statearr_8621_8768[(2)] = inst_8610);

(statearr_8621_8768[(1)] = (3));


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
});})(__8758,c__8416__auto___8762,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async))
;
return ((function (__8758,switch__8309__auto__,c__8416__auto___8762,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0 = (function (){
var statearr_8622 = [null,null,null,null,null,null,null];
(statearr_8622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__);

(statearr_8622[(1)] = (1));

return statearr_8622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1 = (function (state_8614){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8614);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8623){if((e8623 instanceof Object)){
var ex__8313__auto__ = e8623;
var statearr_8624_8769 = state_8614;
(statearr_8624_8769[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8614);

return cljs.core.cst$kw$recur;
} else {
throw e8623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8770 = state_8614;
state_8614 = G__8770;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = function(state_8614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1.call(this,state_8614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__;
})()
;})(__8758,switch__8309__auto__,c__8416__auto___8762,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async))
})();
var state__8418__auto__ = (function (){var statearr_8625 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8625[(6)] = c__8416__auto___8762);

return statearr_8625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(__8758,c__8416__auto___8762,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async))
);


break;
case "async":
var c__8416__auto___8771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8758,c__8416__auto___8771,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (__8758,c__8416__auto___8771,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async){
return (function (state_8638){
var state_val_8639 = (state_8638[(1)]);
if((state_val_8639 === (1))){
var state_8638__$1 = state_8638;
var statearr_8640_8772 = state_8638__$1;
(statearr_8640_8772[(2)] = null);

(statearr_8640_8772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8639 === (2))){
var state_8638__$1 = state_8638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8638__$1,(4),jobs);
} else {
if((state_val_8639 === (3))){
var inst_8636 = (state_8638[(2)]);
var state_8638__$1 = state_8638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8638__$1,inst_8636);
} else {
if((state_val_8639 === (4))){
var inst_8628 = (state_8638[(2)]);
var inst_8629 = async(inst_8628);
var state_8638__$1 = state_8638;
if(cljs.core.truth_(inst_8629)){
var statearr_8641_8773 = state_8638__$1;
(statearr_8641_8773[(1)] = (5));

} else {
var statearr_8642_8774 = state_8638__$1;
(statearr_8642_8774[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8639 === (5))){
var state_8638__$1 = state_8638;
var statearr_8643_8775 = state_8638__$1;
(statearr_8643_8775[(2)] = null);

(statearr_8643_8775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8639 === (6))){
var state_8638__$1 = state_8638;
var statearr_8644_8776 = state_8638__$1;
(statearr_8644_8776[(2)] = null);

(statearr_8644_8776[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8639 === (7))){
var inst_8634 = (state_8638[(2)]);
var state_8638__$1 = state_8638;
var statearr_8645_8777 = state_8638__$1;
(statearr_8645_8777[(2)] = inst_8634);

(statearr_8645_8777[(1)] = (3));


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
});})(__8758,c__8416__auto___8771,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async))
;
return ((function (__8758,switch__8309__auto__,c__8416__auto___8771,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0 = (function (){
var statearr_8646 = [null,null,null,null,null,null,null];
(statearr_8646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__);

(statearr_8646[(1)] = (1));

return statearr_8646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1 = (function (state_8638){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8638);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8647){if((e8647 instanceof Object)){
var ex__8313__auto__ = e8647;
var statearr_8648_8778 = state_8638;
(statearr_8648_8778[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8638);

return cljs.core.cst$kw$recur;
} else {
throw e8647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8779 = state_8638;
state_8638 = G__8779;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = function(state_8638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1.call(this,state_8638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__;
})()
;})(__8758,switch__8309__auto__,c__8416__auto___8771,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async))
})();
var state__8418__auto__ = (function (){var statearr_8649 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8649[(6)] = c__8416__auto___8771);

return statearr_8649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(__8758,c__8416__auto___8771,G__8601_8759,G__8601_8760__$1,n__4518__auto___8757,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8601_8760__$1)].join('')));

}

var G__8780 = (__8758 + (1));
__8758 = G__8780;
continue;
} else {
}
break;
}

var c__8416__auto___8781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___8781,jobs,results,process,async){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___8781,jobs,results,process,async){
return (function (state_8671){
var state_val_8672 = (state_8671[(1)]);
if((state_val_8672 === (7))){
var inst_8667 = (state_8671[(2)]);
var state_8671__$1 = state_8671;
var statearr_8673_8782 = state_8671__$1;
(statearr_8673_8782[(2)] = inst_8667);

(statearr_8673_8782[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8672 === (1))){
var state_8671__$1 = state_8671;
var statearr_8674_8783 = state_8671__$1;
(statearr_8674_8783[(2)] = null);

(statearr_8674_8783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8672 === (4))){
var inst_8652 = (state_8671[(7)]);
var inst_8652__$1 = (state_8671[(2)]);
var inst_8653 = (inst_8652__$1 == null);
var state_8671__$1 = (function (){var statearr_8675 = state_8671;
(statearr_8675[(7)] = inst_8652__$1);

return statearr_8675;
})();
if(cljs.core.truth_(inst_8653)){
var statearr_8676_8784 = state_8671__$1;
(statearr_8676_8784[(1)] = (5));

} else {
var statearr_8677_8785 = state_8671__$1;
(statearr_8677_8785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8672 === (6))){
var inst_8657 = (state_8671[(8)]);
var inst_8652 = (state_8671[(7)]);
var inst_8657__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_8658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8659 = [inst_8652,inst_8657__$1];
var inst_8660 = (new cljs.core.PersistentVector(null,2,(5),inst_8658,inst_8659,null));
var state_8671__$1 = (function (){var statearr_8678 = state_8671;
(statearr_8678[(8)] = inst_8657__$1);

return statearr_8678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8671__$1,(8),jobs,inst_8660);
} else {
if((state_val_8672 === (3))){
var inst_8669 = (state_8671[(2)]);
var state_8671__$1 = state_8671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8671__$1,inst_8669);
} else {
if((state_val_8672 === (2))){
var state_8671__$1 = state_8671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8671__$1,(4),from);
} else {
if((state_val_8672 === (9))){
var inst_8664 = (state_8671[(2)]);
var state_8671__$1 = (function (){var statearr_8679 = state_8671;
(statearr_8679[(9)] = inst_8664);

return statearr_8679;
})();
var statearr_8680_8786 = state_8671__$1;
(statearr_8680_8786[(2)] = null);

(statearr_8680_8786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8672 === (5))){
var inst_8655 = cljs.core.async.close_BANG_(jobs);
var state_8671__$1 = state_8671;
var statearr_8681_8787 = state_8671__$1;
(statearr_8681_8787[(2)] = inst_8655);

(statearr_8681_8787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8672 === (8))){
var inst_8657 = (state_8671[(8)]);
var inst_8662 = (state_8671[(2)]);
var state_8671__$1 = (function (){var statearr_8682 = state_8671;
(statearr_8682[(10)] = inst_8662);

return statearr_8682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8671__$1,(9),results,inst_8657);
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
});})(c__8416__auto___8781,jobs,results,process,async))
;
return ((function (switch__8309__auto__,c__8416__auto___8781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0 = (function (){
var statearr_8683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__);

(statearr_8683[(1)] = (1));

return statearr_8683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1 = (function (state_8671){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8671);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8684){if((e8684 instanceof Object)){
var ex__8313__auto__ = e8684;
var statearr_8685_8788 = state_8671;
(statearr_8685_8788[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8671);

return cljs.core.cst$kw$recur;
} else {
throw e8684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8789 = state_8671;
state_8671 = G__8789;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = function(state_8671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1.call(this,state_8671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___8781,jobs,results,process,async))
})();
var state__8418__auto__ = (function (){var statearr_8686 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8686[(6)] = c__8416__auto___8781);

return statearr_8686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___8781,jobs,results,process,async))
);


var c__8416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto__,jobs,results,process,async){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto__,jobs,results,process,async){
return (function (state_8724){
var state_val_8725 = (state_8724[(1)]);
if((state_val_8725 === (7))){
var inst_8720 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
var statearr_8726_8790 = state_8724__$1;
(statearr_8726_8790[(2)] = inst_8720);

(statearr_8726_8790[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (20))){
var state_8724__$1 = state_8724;
var statearr_8727_8791 = state_8724__$1;
(statearr_8727_8791[(2)] = null);

(statearr_8727_8791[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (1))){
var state_8724__$1 = state_8724;
var statearr_8728_8792 = state_8724__$1;
(statearr_8728_8792[(2)] = null);

(statearr_8728_8792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (4))){
var inst_8689 = (state_8724[(7)]);
var inst_8689__$1 = (state_8724[(2)]);
var inst_8690 = (inst_8689__$1 == null);
var state_8724__$1 = (function (){var statearr_8729 = state_8724;
(statearr_8729[(7)] = inst_8689__$1);

return statearr_8729;
})();
if(cljs.core.truth_(inst_8690)){
var statearr_8730_8793 = state_8724__$1;
(statearr_8730_8793[(1)] = (5));

} else {
var statearr_8731_8794 = state_8724__$1;
(statearr_8731_8794[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (15))){
var inst_8702 = (state_8724[(8)]);
var state_8724__$1 = state_8724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8724__$1,(18),to,inst_8702);
} else {
if((state_val_8725 === (21))){
var inst_8715 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
var statearr_8732_8795 = state_8724__$1;
(statearr_8732_8795[(2)] = inst_8715);

(statearr_8732_8795[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (13))){
var inst_8717 = (state_8724[(2)]);
var state_8724__$1 = (function (){var statearr_8733 = state_8724;
(statearr_8733[(9)] = inst_8717);

return statearr_8733;
})();
var statearr_8734_8796 = state_8724__$1;
(statearr_8734_8796[(2)] = null);

(statearr_8734_8796[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (6))){
var inst_8689 = (state_8724[(7)]);
var state_8724__$1 = state_8724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8724__$1,(11),inst_8689);
} else {
if((state_val_8725 === (17))){
var inst_8710 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
if(cljs.core.truth_(inst_8710)){
var statearr_8735_8797 = state_8724__$1;
(statearr_8735_8797[(1)] = (19));

} else {
var statearr_8736_8798 = state_8724__$1;
(statearr_8736_8798[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (3))){
var inst_8722 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8724__$1,inst_8722);
} else {
if((state_val_8725 === (12))){
var inst_8699 = (state_8724[(10)]);
var state_8724__$1 = state_8724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8724__$1,(14),inst_8699);
} else {
if((state_val_8725 === (2))){
var state_8724__$1 = state_8724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8724__$1,(4),results);
} else {
if((state_val_8725 === (19))){
var state_8724__$1 = state_8724;
var statearr_8737_8799 = state_8724__$1;
(statearr_8737_8799[(2)] = null);

(statearr_8737_8799[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (11))){
var inst_8699 = (state_8724[(2)]);
var state_8724__$1 = (function (){var statearr_8738 = state_8724;
(statearr_8738[(10)] = inst_8699);

return statearr_8738;
})();
var statearr_8739_8800 = state_8724__$1;
(statearr_8739_8800[(2)] = null);

(statearr_8739_8800[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (9))){
var state_8724__$1 = state_8724;
var statearr_8740_8801 = state_8724__$1;
(statearr_8740_8801[(2)] = null);

(statearr_8740_8801[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (5))){
var state_8724__$1 = state_8724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8741_8802 = state_8724__$1;
(statearr_8741_8802[(1)] = (8));

} else {
var statearr_8742_8803 = state_8724__$1;
(statearr_8742_8803[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (14))){
var inst_8704 = (state_8724[(11)]);
var inst_8702 = (state_8724[(8)]);
var inst_8702__$1 = (state_8724[(2)]);
var inst_8703 = (inst_8702__$1 == null);
var inst_8704__$1 = cljs.core.not(inst_8703);
var state_8724__$1 = (function (){var statearr_8743 = state_8724;
(statearr_8743[(11)] = inst_8704__$1);

(statearr_8743[(8)] = inst_8702__$1);

return statearr_8743;
})();
if(inst_8704__$1){
var statearr_8744_8804 = state_8724__$1;
(statearr_8744_8804[(1)] = (15));

} else {
var statearr_8745_8805 = state_8724__$1;
(statearr_8745_8805[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (16))){
var inst_8704 = (state_8724[(11)]);
var state_8724__$1 = state_8724;
var statearr_8746_8806 = state_8724__$1;
(statearr_8746_8806[(2)] = inst_8704);

(statearr_8746_8806[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (10))){
var inst_8696 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
var statearr_8747_8807 = state_8724__$1;
(statearr_8747_8807[(2)] = inst_8696);

(statearr_8747_8807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (18))){
var inst_8707 = (state_8724[(2)]);
var state_8724__$1 = state_8724;
var statearr_8748_8808 = state_8724__$1;
(statearr_8748_8808[(2)] = inst_8707);

(statearr_8748_8808[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8725 === (8))){
var inst_8693 = cljs.core.async.close_BANG_(to);
var state_8724__$1 = state_8724;
var statearr_8749_8809 = state_8724__$1;
(statearr_8749_8809[(2)] = inst_8693);

(statearr_8749_8809[(1)] = (10));


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
}
}
}
});})(c__8416__auto__,jobs,results,process,async))
;
return ((function (switch__8309__auto__,c__8416__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0 = (function (){
var statearr_8750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__);

(statearr_8750[(1)] = (1));

return statearr_8750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1 = (function (state_8724){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8724);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8751){if((e8751 instanceof Object)){
var ex__8313__auto__ = e8751;
var statearr_8752_8810 = state_8724;
(statearr_8752_8810[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8724);

return cljs.core.cst$kw$recur;
} else {
throw e8751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8811 = state_8724;
state_8724 = G__8811;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__ = function(state_8724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1.call(this,state_8724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8310__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto__,jobs,results,process,async))
})();
var state__8418__auto__ = (function (){var statearr_8753 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8753[(6)] = c__8416__auto__);

return statearr_8753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto__,jobs,results,process,async))
);

return c__8416__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__8813 = arguments.length;
switch (G__8813) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__8816 = arguments.length;
switch (G__8816) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__8819 = arguments.length;
switch (G__8819) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8416__auto___8868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___8868,tc,fc){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___8868,tc,fc){
return (function (state_8845){
var state_val_8846 = (state_8845[(1)]);
if((state_val_8846 === (7))){
var inst_8841 = (state_8845[(2)]);
var state_8845__$1 = state_8845;
var statearr_8847_8869 = state_8845__$1;
(statearr_8847_8869[(2)] = inst_8841);

(statearr_8847_8869[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (1))){
var state_8845__$1 = state_8845;
var statearr_8848_8870 = state_8845__$1;
(statearr_8848_8870[(2)] = null);

(statearr_8848_8870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (4))){
var inst_8822 = (state_8845[(7)]);
var inst_8822__$1 = (state_8845[(2)]);
var inst_8823 = (inst_8822__$1 == null);
var state_8845__$1 = (function (){var statearr_8849 = state_8845;
(statearr_8849[(7)] = inst_8822__$1);

return statearr_8849;
})();
if(cljs.core.truth_(inst_8823)){
var statearr_8850_8871 = state_8845__$1;
(statearr_8850_8871[(1)] = (5));

} else {
var statearr_8851_8872 = state_8845__$1;
(statearr_8851_8872[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (13))){
var state_8845__$1 = state_8845;
var statearr_8852_8873 = state_8845__$1;
(statearr_8852_8873[(2)] = null);

(statearr_8852_8873[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (6))){
var inst_8822 = (state_8845[(7)]);
var inst_8828 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8822) : p.call(null,inst_8822));
var state_8845__$1 = state_8845;
if(cljs.core.truth_(inst_8828)){
var statearr_8853_8874 = state_8845__$1;
(statearr_8853_8874[(1)] = (9));

} else {
var statearr_8854_8875 = state_8845__$1;
(statearr_8854_8875[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (3))){
var inst_8843 = (state_8845[(2)]);
var state_8845__$1 = state_8845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8845__$1,inst_8843);
} else {
if((state_val_8846 === (12))){
var state_8845__$1 = state_8845;
var statearr_8855_8876 = state_8845__$1;
(statearr_8855_8876[(2)] = null);

(statearr_8855_8876[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (2))){
var state_8845__$1 = state_8845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8845__$1,(4),ch);
} else {
if((state_val_8846 === (11))){
var inst_8822 = (state_8845[(7)]);
var inst_8832 = (state_8845[(2)]);
var state_8845__$1 = state_8845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8845__$1,(8),inst_8832,inst_8822);
} else {
if((state_val_8846 === (9))){
var state_8845__$1 = state_8845;
var statearr_8856_8877 = state_8845__$1;
(statearr_8856_8877[(2)] = tc);

(statearr_8856_8877[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (5))){
var inst_8825 = cljs.core.async.close_BANG_(tc);
var inst_8826 = cljs.core.async.close_BANG_(fc);
var state_8845__$1 = (function (){var statearr_8857 = state_8845;
(statearr_8857[(8)] = inst_8825);

return statearr_8857;
})();
var statearr_8858_8878 = state_8845__$1;
(statearr_8858_8878[(2)] = inst_8826);

(statearr_8858_8878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (14))){
var inst_8839 = (state_8845[(2)]);
var state_8845__$1 = state_8845;
var statearr_8859_8879 = state_8845__$1;
(statearr_8859_8879[(2)] = inst_8839);

(statearr_8859_8879[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (10))){
var state_8845__$1 = state_8845;
var statearr_8860_8880 = state_8845__$1;
(statearr_8860_8880[(2)] = fc);

(statearr_8860_8880[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8846 === (8))){
var inst_8834 = (state_8845[(2)]);
var state_8845__$1 = state_8845;
if(cljs.core.truth_(inst_8834)){
var statearr_8861_8881 = state_8845__$1;
(statearr_8861_8881[(1)] = (12));

} else {
var statearr_8862_8882 = state_8845__$1;
(statearr_8862_8882[(1)] = (13));

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
});})(c__8416__auto___8868,tc,fc))
;
return ((function (switch__8309__auto__,c__8416__auto___8868,tc,fc){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_8863 = [null,null,null,null,null,null,null,null,null];
(statearr_8863[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_8863[(1)] = (1));

return statearr_8863;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_8845){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8845);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8864){if((e8864 instanceof Object)){
var ex__8313__auto__ = e8864;
var statearr_8865_8883 = state_8845;
(statearr_8865_8883[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8845);

return cljs.core.cst$kw$recur;
} else {
throw e8864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8884 = state_8845;
state_8845 = G__8884;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_8845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_8845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___8868,tc,fc))
})();
var state__8418__auto__ = (function (){var statearr_8866 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8866[(6)] = c__8416__auto___8868);

return statearr_8866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___8868,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto__){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto__){
return (function (state_8905){
var state_val_8906 = (state_8905[(1)]);
if((state_val_8906 === (7))){
var inst_8901 = (state_8905[(2)]);
var state_8905__$1 = state_8905;
var statearr_8907_8925 = state_8905__$1;
(statearr_8907_8925[(2)] = inst_8901);

(statearr_8907_8925[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8906 === (1))){
var inst_8885 = init;
var state_8905__$1 = (function (){var statearr_8908 = state_8905;
(statearr_8908[(7)] = inst_8885);

return statearr_8908;
})();
var statearr_8909_8926 = state_8905__$1;
(statearr_8909_8926[(2)] = null);

(statearr_8909_8926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8906 === (4))){
var inst_8888 = (state_8905[(8)]);
var inst_8888__$1 = (state_8905[(2)]);
var inst_8889 = (inst_8888__$1 == null);
var state_8905__$1 = (function (){var statearr_8910 = state_8905;
(statearr_8910[(8)] = inst_8888__$1);

return statearr_8910;
})();
if(cljs.core.truth_(inst_8889)){
var statearr_8911_8927 = state_8905__$1;
(statearr_8911_8927[(1)] = (5));

} else {
var statearr_8912_8928 = state_8905__$1;
(statearr_8912_8928[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8906 === (6))){
var inst_8892 = (state_8905[(9)]);
var inst_8885 = (state_8905[(7)]);
var inst_8888 = (state_8905[(8)]);
var inst_8892__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_8885,inst_8888) : f.call(null,inst_8885,inst_8888));
var inst_8893 = cljs.core.reduced_QMARK_(inst_8892__$1);
var state_8905__$1 = (function (){var statearr_8913 = state_8905;
(statearr_8913[(9)] = inst_8892__$1);

return statearr_8913;
})();
if(inst_8893){
var statearr_8914_8929 = state_8905__$1;
(statearr_8914_8929[(1)] = (8));

} else {
var statearr_8915_8930 = state_8905__$1;
(statearr_8915_8930[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8906 === (3))){
var inst_8903 = (state_8905[(2)]);
var state_8905__$1 = state_8905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8905__$1,inst_8903);
} else {
if((state_val_8906 === (2))){
var state_8905__$1 = state_8905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8905__$1,(4),ch);
} else {
if((state_val_8906 === (9))){
var inst_8892 = (state_8905[(9)]);
var inst_8885 = inst_8892;
var state_8905__$1 = (function (){var statearr_8916 = state_8905;
(statearr_8916[(7)] = inst_8885);

return statearr_8916;
})();
var statearr_8917_8931 = state_8905__$1;
(statearr_8917_8931[(2)] = null);

(statearr_8917_8931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8906 === (5))){
var inst_8885 = (state_8905[(7)]);
var state_8905__$1 = state_8905;
var statearr_8918_8932 = state_8905__$1;
(statearr_8918_8932[(2)] = inst_8885);

(statearr_8918_8932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8906 === (10))){
var inst_8899 = (state_8905[(2)]);
var state_8905__$1 = state_8905;
var statearr_8919_8933 = state_8905__$1;
(statearr_8919_8933[(2)] = inst_8899);

(statearr_8919_8933[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8906 === (8))){
var inst_8892 = (state_8905[(9)]);
var inst_8895 = cljs.core.deref(inst_8892);
var state_8905__$1 = state_8905;
var statearr_8920_8934 = state_8905__$1;
(statearr_8920_8934[(2)] = inst_8895);

(statearr_8920_8934[(1)] = (10));


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
});})(c__8416__auto__))
;
return ((function (switch__8309__auto__,c__8416__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8310__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8310__auto____0 = (function (){
var statearr_8921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8921[(0)] = cljs$core$async$reduce_$_state_machine__8310__auto__);

(statearr_8921[(1)] = (1));

return statearr_8921;
});
var cljs$core$async$reduce_$_state_machine__8310__auto____1 = (function (state_8905){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8905);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8922){if((e8922 instanceof Object)){
var ex__8313__auto__ = e8922;
var statearr_8923_8935 = state_8905;
(statearr_8923_8935[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8905);

return cljs.core.cst$kw$recur;
} else {
throw e8922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8936 = state_8905;
state_8905 = G__8936;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8310__auto__ = function(state_8905){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8310__auto____1.call(this,state_8905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8310__auto____0;
cljs$core$async$reduce_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8310__auto____1;
return cljs$core$async$reduce_$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto__))
})();
var state__8418__auto__ = (function (){var statearr_8924 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8924[(6)] = c__8416__auto__);

return statearr_8924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto__))
);

return c__8416__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__8416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto__,f__$1){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto__,f__$1){
return (function (state_8942){
var state_val_8943 = (state_8942[(1)]);
if((state_val_8943 === (1))){
var inst_8937 = cljs.core.async.reduce(f__$1,init,ch);
var state_8942__$1 = state_8942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8942__$1,(2),inst_8937);
} else {
if((state_val_8943 === (2))){
var inst_8939 = (state_8942[(2)]);
var inst_8940 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_8939) : f__$1.call(null,inst_8939));
var state_8942__$1 = state_8942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8942__$1,inst_8940);
} else {
return null;
}
}
});})(c__8416__auto__,f__$1))
;
return ((function (switch__8309__auto__,c__8416__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__8310__auto__ = null;
var cljs$core$async$transduce_$_state_machine__8310__auto____0 = (function (){
var statearr_8944 = [null,null,null,null,null,null,null];
(statearr_8944[(0)] = cljs$core$async$transduce_$_state_machine__8310__auto__);

(statearr_8944[(1)] = (1));

return statearr_8944;
});
var cljs$core$async$transduce_$_state_machine__8310__auto____1 = (function (state_8942){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8942);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8945){if((e8945 instanceof Object)){
var ex__8313__auto__ = e8945;
var statearr_8946_8948 = state_8942;
(statearr_8946_8948[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8942);

return cljs.core.cst$kw$recur;
} else {
throw e8945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__8949 = state_8942;
state_8942 = G__8949;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__8310__auto__ = function(state_8942){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__8310__auto____1.call(this,state_8942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__8310__auto____0;
cljs$core$async$transduce_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__8310__auto____1;
return cljs$core$async$transduce_$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto__,f__$1))
})();
var state__8418__auto__ = (function (){var statearr_8947 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8947[(6)] = c__8416__auto__);

return statearr_8947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto__,f__$1))
);

return c__8416__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__8951 = arguments.length;
switch (G__8951) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto__){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto__){
return (function (state_8976){
var state_val_8977 = (state_8976[(1)]);
if((state_val_8977 === (7))){
var inst_8958 = (state_8976[(2)]);
var state_8976__$1 = state_8976;
var statearr_8978_8999 = state_8976__$1;
(statearr_8978_8999[(2)] = inst_8958);

(statearr_8978_8999[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (1))){
var inst_8952 = cljs.core.seq(coll);
var inst_8953 = inst_8952;
var state_8976__$1 = (function (){var statearr_8979 = state_8976;
(statearr_8979[(7)] = inst_8953);

return statearr_8979;
})();
var statearr_8980_9000 = state_8976__$1;
(statearr_8980_9000[(2)] = null);

(statearr_8980_9000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (4))){
var inst_8953 = (state_8976[(7)]);
var inst_8956 = cljs.core.first(inst_8953);
var state_8976__$1 = state_8976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8976__$1,(7),ch,inst_8956);
} else {
if((state_val_8977 === (13))){
var inst_8970 = (state_8976[(2)]);
var state_8976__$1 = state_8976;
var statearr_8981_9001 = state_8976__$1;
(statearr_8981_9001[(2)] = inst_8970);

(statearr_8981_9001[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (6))){
var inst_8961 = (state_8976[(2)]);
var state_8976__$1 = state_8976;
if(cljs.core.truth_(inst_8961)){
var statearr_8982_9002 = state_8976__$1;
(statearr_8982_9002[(1)] = (8));

} else {
var statearr_8983_9003 = state_8976__$1;
(statearr_8983_9003[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (3))){
var inst_8974 = (state_8976[(2)]);
var state_8976__$1 = state_8976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8976__$1,inst_8974);
} else {
if((state_val_8977 === (12))){
var state_8976__$1 = state_8976;
var statearr_8984_9004 = state_8976__$1;
(statearr_8984_9004[(2)] = null);

(statearr_8984_9004[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (2))){
var inst_8953 = (state_8976[(7)]);
var state_8976__$1 = state_8976;
if(cljs.core.truth_(inst_8953)){
var statearr_8985_9005 = state_8976__$1;
(statearr_8985_9005[(1)] = (4));

} else {
var statearr_8986_9006 = state_8976__$1;
(statearr_8986_9006[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (11))){
var inst_8967 = cljs.core.async.close_BANG_(ch);
var state_8976__$1 = state_8976;
var statearr_8987_9007 = state_8976__$1;
(statearr_8987_9007[(2)] = inst_8967);

(statearr_8987_9007[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (9))){
var state_8976__$1 = state_8976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8988_9008 = state_8976__$1;
(statearr_8988_9008[(1)] = (11));

} else {
var statearr_8989_9009 = state_8976__$1;
(statearr_8989_9009[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (5))){
var inst_8953 = (state_8976[(7)]);
var state_8976__$1 = state_8976;
var statearr_8990_9010 = state_8976__$1;
(statearr_8990_9010[(2)] = inst_8953);

(statearr_8990_9010[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (10))){
var inst_8972 = (state_8976[(2)]);
var state_8976__$1 = state_8976;
var statearr_8991_9011 = state_8976__$1;
(statearr_8991_9011[(2)] = inst_8972);

(statearr_8991_9011[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8977 === (8))){
var inst_8953 = (state_8976[(7)]);
var inst_8963 = cljs.core.next(inst_8953);
var inst_8953__$1 = inst_8963;
var state_8976__$1 = (function (){var statearr_8992 = state_8976;
(statearr_8992[(7)] = inst_8953__$1);

return statearr_8992;
})();
var statearr_8993_9012 = state_8976__$1;
(statearr_8993_9012[(2)] = null);

(statearr_8993_9012[(1)] = (2));


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
});})(c__8416__auto__))
;
return ((function (switch__8309__auto__,c__8416__auto__){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_8994 = [null,null,null,null,null,null,null,null];
(statearr_8994[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_8994[(1)] = (1));

return statearr_8994;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_8976){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_8976);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e8995){if((e8995 instanceof Object)){
var ex__8313__auto__ = e8995;
var statearr_8996_9013 = state_8976;
(statearr_8996_9013[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8976);

return cljs.core.cst$kw$recur;
} else {
throw e8995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9014 = state_8976;
state_8976 = G__9014;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_8976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_8976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto__))
})();
var state__8418__auto__ = (function (){var statearr_8997 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_8997[(6)] = c__8416__auto__);

return statearr_8997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto__))
);

return c__8416__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9015 = (function (ch,cs,meta9016){
this.ch = ch;
this.cs = cs;
this.meta9016 = meta9016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9017,meta9016__$1){
var self__ = this;
var _9017__$1 = this;
return (new cljs.core.async.t_cljs$core$async9015(self__.ch,self__.cs,meta9016__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9017){
var self__ = this;
var _9017__$1 = this;
return self__.meta9016;
});})(cs))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9015.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9015.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta9016], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9015";

cljs.core.async.t_cljs$core$async9015.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async9015");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9015.
 */
cljs.core.async.__GT_t_cljs$core$async9015 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9015(ch__$1,cs__$1,meta9016){
return (new cljs.core.async.t_cljs$core$async9015(ch__$1,cs__$1,meta9016));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9015(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8416__auto___9237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___9237,cs,m,dchan,dctr,done){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___9237,cs,m,dchan,dctr,done){
return (function (state_9152){
var state_val_9153 = (state_9152[(1)]);
if((state_val_9153 === (7))){
var inst_9148 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9154_9238 = state_9152__$1;
(statearr_9154_9238[(2)] = inst_9148);

(statearr_9154_9238[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (20))){
var inst_9051 = (state_9152[(7)]);
var inst_9063 = cljs.core.first(inst_9051);
var inst_9064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9063,(0),null);
var inst_9065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9063,(1),null);
var state_9152__$1 = (function (){var statearr_9155 = state_9152;
(statearr_9155[(8)] = inst_9064);

return statearr_9155;
})();
if(cljs.core.truth_(inst_9065)){
var statearr_9156_9239 = state_9152__$1;
(statearr_9156_9239[(1)] = (22));

} else {
var statearr_9157_9240 = state_9152__$1;
(statearr_9157_9240[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (27))){
var inst_9100 = (state_9152[(9)]);
var inst_9093 = (state_9152[(10)]);
var inst_9095 = (state_9152[(11)]);
var inst_9020 = (state_9152[(12)]);
var inst_9100__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9093,inst_9095);
var inst_9101 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9100__$1,inst_9020,done);
var state_9152__$1 = (function (){var statearr_9158 = state_9152;
(statearr_9158[(9)] = inst_9100__$1);

return statearr_9158;
})();
if(cljs.core.truth_(inst_9101)){
var statearr_9159_9241 = state_9152__$1;
(statearr_9159_9241[(1)] = (30));

} else {
var statearr_9160_9242 = state_9152__$1;
(statearr_9160_9242[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (1))){
var state_9152__$1 = state_9152;
var statearr_9161_9243 = state_9152__$1;
(statearr_9161_9243[(2)] = null);

(statearr_9161_9243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (24))){
var inst_9051 = (state_9152[(7)]);
var inst_9070 = (state_9152[(2)]);
var inst_9071 = cljs.core.next(inst_9051);
var inst_9029 = inst_9071;
var inst_9030 = null;
var inst_9031 = (0);
var inst_9032 = (0);
var state_9152__$1 = (function (){var statearr_9162 = state_9152;
(statearr_9162[(13)] = inst_9032);

(statearr_9162[(14)] = inst_9029);

(statearr_9162[(15)] = inst_9070);

(statearr_9162[(16)] = inst_9030);

(statearr_9162[(17)] = inst_9031);

return statearr_9162;
})();
var statearr_9163_9244 = state_9152__$1;
(statearr_9163_9244[(2)] = null);

(statearr_9163_9244[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (39))){
var state_9152__$1 = state_9152;
var statearr_9167_9245 = state_9152__$1;
(statearr_9167_9245[(2)] = null);

(statearr_9167_9245[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (4))){
var inst_9020 = (state_9152[(12)]);
var inst_9020__$1 = (state_9152[(2)]);
var inst_9021 = (inst_9020__$1 == null);
var state_9152__$1 = (function (){var statearr_9168 = state_9152;
(statearr_9168[(12)] = inst_9020__$1);

return statearr_9168;
})();
if(cljs.core.truth_(inst_9021)){
var statearr_9169_9246 = state_9152__$1;
(statearr_9169_9246[(1)] = (5));

} else {
var statearr_9170_9247 = state_9152__$1;
(statearr_9170_9247[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (15))){
var inst_9032 = (state_9152[(13)]);
var inst_9029 = (state_9152[(14)]);
var inst_9030 = (state_9152[(16)]);
var inst_9031 = (state_9152[(17)]);
var inst_9047 = (state_9152[(2)]);
var inst_9048 = (inst_9032 + (1));
var tmp9164 = inst_9029;
var tmp9165 = inst_9030;
var tmp9166 = inst_9031;
var inst_9029__$1 = tmp9164;
var inst_9030__$1 = tmp9165;
var inst_9031__$1 = tmp9166;
var inst_9032__$1 = inst_9048;
var state_9152__$1 = (function (){var statearr_9171 = state_9152;
(statearr_9171[(18)] = inst_9047);

(statearr_9171[(13)] = inst_9032__$1);

(statearr_9171[(14)] = inst_9029__$1);

(statearr_9171[(16)] = inst_9030__$1);

(statearr_9171[(17)] = inst_9031__$1);

return statearr_9171;
})();
var statearr_9172_9248 = state_9152__$1;
(statearr_9172_9248[(2)] = null);

(statearr_9172_9248[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (21))){
var inst_9074 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9176_9249 = state_9152__$1;
(statearr_9176_9249[(2)] = inst_9074);

(statearr_9176_9249[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (31))){
var inst_9100 = (state_9152[(9)]);
var inst_9104 = done(null);
var inst_9105 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9100);
var state_9152__$1 = (function (){var statearr_9177 = state_9152;
(statearr_9177[(19)] = inst_9104);

return statearr_9177;
})();
var statearr_9178_9250 = state_9152__$1;
(statearr_9178_9250[(2)] = inst_9105);

(statearr_9178_9250[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (32))){
var inst_9092 = (state_9152[(20)]);
var inst_9094 = (state_9152[(21)]);
var inst_9093 = (state_9152[(10)]);
var inst_9095 = (state_9152[(11)]);
var inst_9107 = (state_9152[(2)]);
var inst_9108 = (inst_9095 + (1));
var tmp9173 = inst_9092;
var tmp9174 = inst_9094;
var tmp9175 = inst_9093;
var inst_9092__$1 = tmp9173;
var inst_9093__$1 = tmp9175;
var inst_9094__$1 = tmp9174;
var inst_9095__$1 = inst_9108;
var state_9152__$1 = (function (){var statearr_9179 = state_9152;
(statearr_9179[(20)] = inst_9092__$1);

(statearr_9179[(21)] = inst_9094__$1);

(statearr_9179[(22)] = inst_9107);

(statearr_9179[(10)] = inst_9093__$1);

(statearr_9179[(11)] = inst_9095__$1);

return statearr_9179;
})();
var statearr_9180_9251 = state_9152__$1;
(statearr_9180_9251[(2)] = null);

(statearr_9180_9251[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (40))){
var inst_9120 = (state_9152[(23)]);
var inst_9124 = done(null);
var inst_9125 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9120);
var state_9152__$1 = (function (){var statearr_9181 = state_9152;
(statearr_9181[(24)] = inst_9124);

return statearr_9181;
})();
var statearr_9182_9252 = state_9152__$1;
(statearr_9182_9252[(2)] = inst_9125);

(statearr_9182_9252[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (33))){
var inst_9111 = (state_9152[(25)]);
var inst_9113 = cljs.core.chunked_seq_QMARK_(inst_9111);
var state_9152__$1 = state_9152;
if(inst_9113){
var statearr_9183_9253 = state_9152__$1;
(statearr_9183_9253[(1)] = (36));

} else {
var statearr_9184_9254 = state_9152__$1;
(statearr_9184_9254[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (13))){
var inst_9041 = (state_9152[(26)]);
var inst_9044 = cljs.core.async.close_BANG_(inst_9041);
var state_9152__$1 = state_9152;
var statearr_9185_9255 = state_9152__$1;
(statearr_9185_9255[(2)] = inst_9044);

(statearr_9185_9255[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (22))){
var inst_9064 = (state_9152[(8)]);
var inst_9067 = cljs.core.async.close_BANG_(inst_9064);
var state_9152__$1 = state_9152;
var statearr_9186_9256 = state_9152__$1;
(statearr_9186_9256[(2)] = inst_9067);

(statearr_9186_9256[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (36))){
var inst_9111 = (state_9152[(25)]);
var inst_9115 = cljs.core.chunk_first(inst_9111);
var inst_9116 = cljs.core.chunk_rest(inst_9111);
var inst_9117 = cljs.core.count(inst_9115);
var inst_9092 = inst_9116;
var inst_9093 = inst_9115;
var inst_9094 = inst_9117;
var inst_9095 = (0);
var state_9152__$1 = (function (){var statearr_9187 = state_9152;
(statearr_9187[(20)] = inst_9092);

(statearr_9187[(21)] = inst_9094);

(statearr_9187[(10)] = inst_9093);

(statearr_9187[(11)] = inst_9095);

return statearr_9187;
})();
var statearr_9188_9257 = state_9152__$1;
(statearr_9188_9257[(2)] = null);

(statearr_9188_9257[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (41))){
var inst_9111 = (state_9152[(25)]);
var inst_9127 = (state_9152[(2)]);
var inst_9128 = cljs.core.next(inst_9111);
var inst_9092 = inst_9128;
var inst_9093 = null;
var inst_9094 = (0);
var inst_9095 = (0);
var state_9152__$1 = (function (){var statearr_9189 = state_9152;
(statearr_9189[(20)] = inst_9092);

(statearr_9189[(21)] = inst_9094);

(statearr_9189[(27)] = inst_9127);

(statearr_9189[(10)] = inst_9093);

(statearr_9189[(11)] = inst_9095);

return statearr_9189;
})();
var statearr_9190_9258 = state_9152__$1;
(statearr_9190_9258[(2)] = null);

(statearr_9190_9258[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (43))){
var state_9152__$1 = state_9152;
var statearr_9191_9259 = state_9152__$1;
(statearr_9191_9259[(2)] = null);

(statearr_9191_9259[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (29))){
var inst_9136 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9192_9260 = state_9152__$1;
(statearr_9192_9260[(2)] = inst_9136);

(statearr_9192_9260[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (44))){
var inst_9145 = (state_9152[(2)]);
var state_9152__$1 = (function (){var statearr_9193 = state_9152;
(statearr_9193[(28)] = inst_9145);

return statearr_9193;
})();
var statearr_9194_9261 = state_9152__$1;
(statearr_9194_9261[(2)] = null);

(statearr_9194_9261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (6))){
var inst_9084 = (state_9152[(29)]);
var inst_9083 = cljs.core.deref(cs);
var inst_9084__$1 = cljs.core.keys(inst_9083);
var inst_9085 = cljs.core.count(inst_9084__$1);
var inst_9086 = cljs.core.reset_BANG_(dctr,inst_9085);
var inst_9091 = cljs.core.seq(inst_9084__$1);
var inst_9092 = inst_9091;
var inst_9093 = null;
var inst_9094 = (0);
var inst_9095 = (0);
var state_9152__$1 = (function (){var statearr_9195 = state_9152;
(statearr_9195[(30)] = inst_9086);

(statearr_9195[(20)] = inst_9092);

(statearr_9195[(21)] = inst_9094);

(statearr_9195[(10)] = inst_9093);

(statearr_9195[(29)] = inst_9084__$1);

(statearr_9195[(11)] = inst_9095);

return statearr_9195;
})();
var statearr_9196_9262 = state_9152__$1;
(statearr_9196_9262[(2)] = null);

(statearr_9196_9262[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (28))){
var inst_9092 = (state_9152[(20)]);
var inst_9111 = (state_9152[(25)]);
var inst_9111__$1 = cljs.core.seq(inst_9092);
var state_9152__$1 = (function (){var statearr_9197 = state_9152;
(statearr_9197[(25)] = inst_9111__$1);

return statearr_9197;
})();
if(inst_9111__$1){
var statearr_9198_9263 = state_9152__$1;
(statearr_9198_9263[(1)] = (33));

} else {
var statearr_9199_9264 = state_9152__$1;
(statearr_9199_9264[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (25))){
var inst_9094 = (state_9152[(21)]);
var inst_9095 = (state_9152[(11)]);
var inst_9097 = (inst_9095 < inst_9094);
var inst_9098 = inst_9097;
var state_9152__$1 = state_9152;
if(cljs.core.truth_(inst_9098)){
var statearr_9200_9265 = state_9152__$1;
(statearr_9200_9265[(1)] = (27));

} else {
var statearr_9201_9266 = state_9152__$1;
(statearr_9201_9266[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (34))){
var state_9152__$1 = state_9152;
var statearr_9202_9267 = state_9152__$1;
(statearr_9202_9267[(2)] = null);

(statearr_9202_9267[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (17))){
var state_9152__$1 = state_9152;
var statearr_9203_9268 = state_9152__$1;
(statearr_9203_9268[(2)] = null);

(statearr_9203_9268[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (3))){
var inst_9150 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9152__$1,inst_9150);
} else {
if((state_val_9153 === (12))){
var inst_9079 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9204_9269 = state_9152__$1;
(statearr_9204_9269[(2)] = inst_9079);

(statearr_9204_9269[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (2))){
var state_9152__$1 = state_9152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9152__$1,(4),ch);
} else {
if((state_val_9153 === (23))){
var state_9152__$1 = state_9152;
var statearr_9205_9270 = state_9152__$1;
(statearr_9205_9270[(2)] = null);

(statearr_9205_9270[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (35))){
var inst_9134 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9206_9271 = state_9152__$1;
(statearr_9206_9271[(2)] = inst_9134);

(statearr_9206_9271[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (19))){
var inst_9051 = (state_9152[(7)]);
var inst_9055 = cljs.core.chunk_first(inst_9051);
var inst_9056 = cljs.core.chunk_rest(inst_9051);
var inst_9057 = cljs.core.count(inst_9055);
var inst_9029 = inst_9056;
var inst_9030 = inst_9055;
var inst_9031 = inst_9057;
var inst_9032 = (0);
var state_9152__$1 = (function (){var statearr_9207 = state_9152;
(statearr_9207[(13)] = inst_9032);

(statearr_9207[(14)] = inst_9029);

(statearr_9207[(16)] = inst_9030);

(statearr_9207[(17)] = inst_9031);

return statearr_9207;
})();
var statearr_9208_9272 = state_9152__$1;
(statearr_9208_9272[(2)] = null);

(statearr_9208_9272[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (11))){
var inst_9029 = (state_9152[(14)]);
var inst_9051 = (state_9152[(7)]);
var inst_9051__$1 = cljs.core.seq(inst_9029);
var state_9152__$1 = (function (){var statearr_9209 = state_9152;
(statearr_9209[(7)] = inst_9051__$1);

return statearr_9209;
})();
if(inst_9051__$1){
var statearr_9210_9273 = state_9152__$1;
(statearr_9210_9273[(1)] = (16));

} else {
var statearr_9211_9274 = state_9152__$1;
(statearr_9211_9274[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (9))){
var inst_9081 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9212_9275 = state_9152__$1;
(statearr_9212_9275[(2)] = inst_9081);

(statearr_9212_9275[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (5))){
var inst_9027 = cljs.core.deref(cs);
var inst_9028 = cljs.core.seq(inst_9027);
var inst_9029 = inst_9028;
var inst_9030 = null;
var inst_9031 = (0);
var inst_9032 = (0);
var state_9152__$1 = (function (){var statearr_9213 = state_9152;
(statearr_9213[(13)] = inst_9032);

(statearr_9213[(14)] = inst_9029);

(statearr_9213[(16)] = inst_9030);

(statearr_9213[(17)] = inst_9031);

return statearr_9213;
})();
var statearr_9214_9276 = state_9152__$1;
(statearr_9214_9276[(2)] = null);

(statearr_9214_9276[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (14))){
var state_9152__$1 = state_9152;
var statearr_9215_9277 = state_9152__$1;
(statearr_9215_9277[(2)] = null);

(statearr_9215_9277[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (45))){
var inst_9142 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9216_9278 = state_9152__$1;
(statearr_9216_9278[(2)] = inst_9142);

(statearr_9216_9278[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (26))){
var inst_9084 = (state_9152[(29)]);
var inst_9138 = (state_9152[(2)]);
var inst_9139 = cljs.core.seq(inst_9084);
var state_9152__$1 = (function (){var statearr_9217 = state_9152;
(statearr_9217[(31)] = inst_9138);

return statearr_9217;
})();
if(inst_9139){
var statearr_9218_9279 = state_9152__$1;
(statearr_9218_9279[(1)] = (42));

} else {
var statearr_9219_9280 = state_9152__$1;
(statearr_9219_9280[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (16))){
var inst_9051 = (state_9152[(7)]);
var inst_9053 = cljs.core.chunked_seq_QMARK_(inst_9051);
var state_9152__$1 = state_9152;
if(inst_9053){
var statearr_9220_9281 = state_9152__$1;
(statearr_9220_9281[(1)] = (19));

} else {
var statearr_9221_9282 = state_9152__$1;
(statearr_9221_9282[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (38))){
var inst_9131 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9222_9283 = state_9152__$1;
(statearr_9222_9283[(2)] = inst_9131);

(statearr_9222_9283[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (30))){
var state_9152__$1 = state_9152;
var statearr_9223_9284 = state_9152__$1;
(statearr_9223_9284[(2)] = null);

(statearr_9223_9284[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (10))){
var inst_9032 = (state_9152[(13)]);
var inst_9030 = (state_9152[(16)]);
var inst_9040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9030,inst_9032);
var inst_9041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9040,(0),null);
var inst_9042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9040,(1),null);
var state_9152__$1 = (function (){var statearr_9224 = state_9152;
(statearr_9224[(26)] = inst_9041);

return statearr_9224;
})();
if(cljs.core.truth_(inst_9042)){
var statearr_9225_9285 = state_9152__$1;
(statearr_9225_9285[(1)] = (13));

} else {
var statearr_9226_9286 = state_9152__$1;
(statearr_9226_9286[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (18))){
var inst_9077 = (state_9152[(2)]);
var state_9152__$1 = state_9152;
var statearr_9227_9287 = state_9152__$1;
(statearr_9227_9287[(2)] = inst_9077);

(statearr_9227_9287[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (42))){
var state_9152__$1 = state_9152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9152__$1,(45),dchan);
} else {
if((state_val_9153 === (37))){
var inst_9120 = (state_9152[(23)]);
var inst_9111 = (state_9152[(25)]);
var inst_9020 = (state_9152[(12)]);
var inst_9120__$1 = cljs.core.first(inst_9111);
var inst_9121 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9120__$1,inst_9020,done);
var state_9152__$1 = (function (){var statearr_9228 = state_9152;
(statearr_9228[(23)] = inst_9120__$1);

return statearr_9228;
})();
if(cljs.core.truth_(inst_9121)){
var statearr_9229_9288 = state_9152__$1;
(statearr_9229_9288[(1)] = (39));

} else {
var statearr_9230_9289 = state_9152__$1;
(statearr_9230_9289[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9153 === (8))){
var inst_9032 = (state_9152[(13)]);
var inst_9031 = (state_9152[(17)]);
var inst_9034 = (inst_9032 < inst_9031);
var inst_9035 = inst_9034;
var state_9152__$1 = state_9152;
if(cljs.core.truth_(inst_9035)){
var statearr_9231_9290 = state_9152__$1;
(statearr_9231_9290[(1)] = (10));

} else {
var statearr_9232_9291 = state_9152__$1;
(statearr_9232_9291[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__8416__auto___9237,cs,m,dchan,dctr,done))
;
return ((function (switch__8309__auto__,c__8416__auto___9237,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8310__auto__ = null;
var cljs$core$async$mult_$_state_machine__8310__auto____0 = (function (){
var statearr_9233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9233[(0)] = cljs$core$async$mult_$_state_machine__8310__auto__);

(statearr_9233[(1)] = (1));

return statearr_9233;
});
var cljs$core$async$mult_$_state_machine__8310__auto____1 = (function (state_9152){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_9152);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e9234){if((e9234 instanceof Object)){
var ex__8313__auto__ = e9234;
var statearr_9235_9292 = state_9152;
(statearr_9235_9292[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9152);

return cljs.core.cst$kw$recur;
} else {
throw e9234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9293 = state_9152;
state_9152 = G__9293;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8310__auto__ = function(state_9152){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8310__auto____1.call(this,state_9152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8310__auto____0;
cljs$core$async$mult_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8310__auto____1;
return cljs$core$async$mult_$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___9237,cs,m,dchan,dctr,done))
})();
var state__8418__auto__ = (function (){var statearr_9236 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_9236[(6)] = c__8416__auto___9237);

return statearr_9236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___9237,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__9295 = arguments.length;
switch (G__9295) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___9307 = arguments.length;
var i__4642__auto___9308 = (0);
while(true){
if((i__4642__auto___9308 < len__4641__auto___9307)){
args__4647__auto__.push((arguments[i__4642__auto___9308]));

var G__9309 = (i__4642__auto___9308 + (1));
i__4642__auto___9308 = G__9309;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9301){
var map__9302 = p__9301;
var map__9302__$1 = (((((!((map__9302 == null))))?(((((map__9302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9302):map__9302);
var opts = map__9302__$1;
var statearr_9304_9310 = state;
(statearr_9304_9310[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__9302,map__9302__$1,opts){
return (function (val){
var statearr_9305_9311 = state;
(statearr_9305_9311[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__9302,map__9302__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_9306_9312 = state;
(statearr_9306_9312[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9297){
var G__9298 = cljs.core.first(seq9297);
var seq9297__$1 = cljs.core.next(seq9297);
var G__9299 = cljs.core.first(seq9297__$1);
var seq9297__$2 = cljs.core.next(seq9297__$1);
var G__9300 = cljs.core.first(seq9297__$2);
var seq9297__$3 = cljs.core.next(seq9297__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9298,G__9299,G__9300,seq9297__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9313 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9314){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9314 = meta9314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9315,meta9314__$1){
var self__ = this;
var _9315__$1 = this;
return (new cljs.core.async.t_cljs$core$async9313(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9315){
var self__ = this;
var _9315__$1 = this;
return self__.meta9314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta9314], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9313";

cljs.core.async.t_cljs$core$async9313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async9313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9313.
 */
cljs.core.async.__GT_t_cljs$core$async9313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9314){
return (new cljs.core.async.t_cljs$core$async9313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9313(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8416__auto___9477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___9477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___9477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9417){
var state_val_9418 = (state_9417[(1)]);
if((state_val_9418 === (7))){
var inst_9332 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
var statearr_9419_9478 = state_9417__$1;
(statearr_9419_9478[(2)] = inst_9332);

(statearr_9419_9478[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (20))){
var inst_9344 = (state_9417[(7)]);
var state_9417__$1 = state_9417;
var statearr_9420_9479 = state_9417__$1;
(statearr_9420_9479[(2)] = inst_9344);

(statearr_9420_9479[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (27))){
var state_9417__$1 = state_9417;
var statearr_9421_9480 = state_9417__$1;
(statearr_9421_9480[(2)] = null);

(statearr_9421_9480[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (1))){
var inst_9319 = (state_9417[(8)]);
var inst_9319__$1 = calc_state();
var inst_9321 = (inst_9319__$1 == null);
var inst_9322 = cljs.core.not(inst_9321);
var state_9417__$1 = (function (){var statearr_9422 = state_9417;
(statearr_9422[(8)] = inst_9319__$1);

return statearr_9422;
})();
if(inst_9322){
var statearr_9423_9481 = state_9417__$1;
(statearr_9423_9481[(1)] = (2));

} else {
var statearr_9424_9482 = state_9417__$1;
(statearr_9424_9482[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (24))){
var inst_9377 = (state_9417[(9)]);
var inst_9391 = (state_9417[(10)]);
var inst_9368 = (state_9417[(11)]);
var inst_9391__$1 = (inst_9368.cljs$core$IFn$_invoke$arity$1 ? inst_9368.cljs$core$IFn$_invoke$arity$1(inst_9377) : inst_9368.call(null,inst_9377));
var state_9417__$1 = (function (){var statearr_9425 = state_9417;
(statearr_9425[(10)] = inst_9391__$1);

return statearr_9425;
})();
if(cljs.core.truth_(inst_9391__$1)){
var statearr_9426_9483 = state_9417__$1;
(statearr_9426_9483[(1)] = (29));

} else {
var statearr_9427_9484 = state_9417__$1;
(statearr_9427_9484[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (4))){
var inst_9335 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
if(cljs.core.truth_(inst_9335)){
var statearr_9428_9485 = state_9417__$1;
(statearr_9428_9485[(1)] = (8));

} else {
var statearr_9429_9486 = state_9417__$1;
(statearr_9429_9486[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (15))){
var inst_9362 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
if(cljs.core.truth_(inst_9362)){
var statearr_9430_9487 = state_9417__$1;
(statearr_9430_9487[(1)] = (19));

} else {
var statearr_9431_9488 = state_9417__$1;
(statearr_9431_9488[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (21))){
var inst_9367 = (state_9417[(12)]);
var inst_9367__$1 = (state_9417[(2)]);
var inst_9368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9367__$1,cljs.core.cst$kw$solos);
var inst_9369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9367__$1,cljs.core.cst$kw$mutes);
var inst_9370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9367__$1,cljs.core.cst$kw$reads);
var state_9417__$1 = (function (){var statearr_9432 = state_9417;
(statearr_9432[(13)] = inst_9369);

(statearr_9432[(12)] = inst_9367__$1);

(statearr_9432[(11)] = inst_9368);

return statearr_9432;
})();
return cljs.core.async.ioc_alts_BANG_(state_9417__$1,(22),inst_9370);
} else {
if((state_val_9418 === (31))){
var inst_9399 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
if(cljs.core.truth_(inst_9399)){
var statearr_9433_9489 = state_9417__$1;
(statearr_9433_9489[(1)] = (32));

} else {
var statearr_9434_9490 = state_9417__$1;
(statearr_9434_9490[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (32))){
var inst_9376 = (state_9417[(14)]);
var state_9417__$1 = state_9417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9417__$1,(35),out,inst_9376);
} else {
if((state_val_9418 === (33))){
var inst_9367 = (state_9417[(12)]);
var inst_9344 = inst_9367;
var state_9417__$1 = (function (){var statearr_9435 = state_9417;
(statearr_9435[(7)] = inst_9344);

return statearr_9435;
})();
var statearr_9436_9491 = state_9417__$1;
(statearr_9436_9491[(2)] = null);

(statearr_9436_9491[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (13))){
var inst_9344 = (state_9417[(7)]);
var inst_9351 = inst_9344.cljs$lang$protocol_mask$partition0$;
var inst_9352 = (inst_9351 & (64));
var inst_9353 = inst_9344.cljs$core$ISeq$;
var inst_9354 = (cljs.core.PROTOCOL_SENTINEL === inst_9353);
var inst_9355 = ((inst_9352) || (inst_9354));
var state_9417__$1 = state_9417;
if(cljs.core.truth_(inst_9355)){
var statearr_9437_9492 = state_9417__$1;
(statearr_9437_9492[(1)] = (16));

} else {
var statearr_9438_9493 = state_9417__$1;
(statearr_9438_9493[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (22))){
var inst_9377 = (state_9417[(9)]);
var inst_9376 = (state_9417[(14)]);
var inst_9375 = (state_9417[(2)]);
var inst_9376__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9375,(0),null);
var inst_9377__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9375,(1),null);
var inst_9378 = (inst_9376__$1 == null);
var inst_9379 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9377__$1,change);
var inst_9380 = ((inst_9378) || (inst_9379));
var state_9417__$1 = (function (){var statearr_9439 = state_9417;
(statearr_9439[(9)] = inst_9377__$1);

(statearr_9439[(14)] = inst_9376__$1);

return statearr_9439;
})();
if(cljs.core.truth_(inst_9380)){
var statearr_9440_9494 = state_9417__$1;
(statearr_9440_9494[(1)] = (23));

} else {
var statearr_9441_9495 = state_9417__$1;
(statearr_9441_9495[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (36))){
var inst_9367 = (state_9417[(12)]);
var inst_9344 = inst_9367;
var state_9417__$1 = (function (){var statearr_9442 = state_9417;
(statearr_9442[(7)] = inst_9344);

return statearr_9442;
})();
var statearr_9443_9496 = state_9417__$1;
(statearr_9443_9496[(2)] = null);

(statearr_9443_9496[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (29))){
var inst_9391 = (state_9417[(10)]);
var state_9417__$1 = state_9417;
var statearr_9444_9497 = state_9417__$1;
(statearr_9444_9497[(2)] = inst_9391);

(statearr_9444_9497[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (6))){
var state_9417__$1 = state_9417;
var statearr_9445_9498 = state_9417__$1;
(statearr_9445_9498[(2)] = false);

(statearr_9445_9498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (28))){
var inst_9387 = (state_9417[(2)]);
var inst_9388 = calc_state();
var inst_9344 = inst_9388;
var state_9417__$1 = (function (){var statearr_9446 = state_9417;
(statearr_9446[(7)] = inst_9344);

(statearr_9446[(15)] = inst_9387);

return statearr_9446;
})();
var statearr_9447_9499 = state_9417__$1;
(statearr_9447_9499[(2)] = null);

(statearr_9447_9499[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (25))){
var inst_9413 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
var statearr_9448_9500 = state_9417__$1;
(statearr_9448_9500[(2)] = inst_9413);

(statearr_9448_9500[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (34))){
var inst_9411 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
var statearr_9449_9501 = state_9417__$1;
(statearr_9449_9501[(2)] = inst_9411);

(statearr_9449_9501[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (17))){
var state_9417__$1 = state_9417;
var statearr_9450_9502 = state_9417__$1;
(statearr_9450_9502[(2)] = false);

(statearr_9450_9502[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (3))){
var state_9417__$1 = state_9417;
var statearr_9451_9503 = state_9417__$1;
(statearr_9451_9503[(2)] = false);

(statearr_9451_9503[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (12))){
var inst_9415 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9417__$1,inst_9415);
} else {
if((state_val_9418 === (2))){
var inst_9319 = (state_9417[(8)]);
var inst_9324 = inst_9319.cljs$lang$protocol_mask$partition0$;
var inst_9325 = (inst_9324 & (64));
var inst_9326 = inst_9319.cljs$core$ISeq$;
var inst_9327 = (cljs.core.PROTOCOL_SENTINEL === inst_9326);
var inst_9328 = ((inst_9325) || (inst_9327));
var state_9417__$1 = state_9417;
if(cljs.core.truth_(inst_9328)){
var statearr_9452_9504 = state_9417__$1;
(statearr_9452_9504[(1)] = (5));

} else {
var statearr_9453_9505 = state_9417__$1;
(statearr_9453_9505[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (23))){
var inst_9376 = (state_9417[(14)]);
var inst_9382 = (inst_9376 == null);
var state_9417__$1 = state_9417;
if(cljs.core.truth_(inst_9382)){
var statearr_9454_9506 = state_9417__$1;
(statearr_9454_9506[(1)] = (26));

} else {
var statearr_9455_9507 = state_9417__$1;
(statearr_9455_9507[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (35))){
var inst_9402 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
if(cljs.core.truth_(inst_9402)){
var statearr_9456_9508 = state_9417__$1;
(statearr_9456_9508[(1)] = (36));

} else {
var statearr_9457_9509 = state_9417__$1;
(statearr_9457_9509[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (19))){
var inst_9344 = (state_9417[(7)]);
var inst_9364 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9344);
var state_9417__$1 = state_9417;
var statearr_9458_9510 = state_9417__$1;
(statearr_9458_9510[(2)] = inst_9364);

(statearr_9458_9510[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (11))){
var inst_9344 = (state_9417[(7)]);
var inst_9348 = (inst_9344 == null);
var inst_9349 = cljs.core.not(inst_9348);
var state_9417__$1 = state_9417;
if(inst_9349){
var statearr_9459_9511 = state_9417__$1;
(statearr_9459_9511[(1)] = (13));

} else {
var statearr_9460_9512 = state_9417__$1;
(statearr_9460_9512[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (9))){
var inst_9319 = (state_9417[(8)]);
var state_9417__$1 = state_9417;
var statearr_9461_9513 = state_9417__$1;
(statearr_9461_9513[(2)] = inst_9319);

(statearr_9461_9513[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (5))){
var state_9417__$1 = state_9417;
var statearr_9462_9514 = state_9417__$1;
(statearr_9462_9514[(2)] = true);

(statearr_9462_9514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (14))){
var state_9417__$1 = state_9417;
var statearr_9463_9515 = state_9417__$1;
(statearr_9463_9515[(2)] = false);

(statearr_9463_9515[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (26))){
var inst_9377 = (state_9417[(9)]);
var inst_9384 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_9377);
var state_9417__$1 = state_9417;
var statearr_9464_9516 = state_9417__$1;
(statearr_9464_9516[(2)] = inst_9384);

(statearr_9464_9516[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (16))){
var state_9417__$1 = state_9417;
var statearr_9465_9517 = state_9417__$1;
(statearr_9465_9517[(2)] = true);

(statearr_9465_9517[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (38))){
var inst_9407 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
var statearr_9466_9518 = state_9417__$1;
(statearr_9466_9518[(2)] = inst_9407);

(statearr_9466_9518[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (30))){
var inst_9377 = (state_9417[(9)]);
var inst_9369 = (state_9417[(13)]);
var inst_9368 = (state_9417[(11)]);
var inst_9394 = cljs.core.empty_QMARK_(inst_9368);
var inst_9395 = (inst_9369.cljs$core$IFn$_invoke$arity$1 ? inst_9369.cljs$core$IFn$_invoke$arity$1(inst_9377) : inst_9369.call(null,inst_9377));
var inst_9396 = cljs.core.not(inst_9395);
var inst_9397 = ((inst_9394) && (inst_9396));
var state_9417__$1 = state_9417;
var statearr_9467_9519 = state_9417__$1;
(statearr_9467_9519[(2)] = inst_9397);

(statearr_9467_9519[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (10))){
var inst_9319 = (state_9417[(8)]);
var inst_9340 = (state_9417[(2)]);
var inst_9341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9340,cljs.core.cst$kw$solos);
var inst_9342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9340,cljs.core.cst$kw$mutes);
var inst_9343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9340,cljs.core.cst$kw$reads);
var inst_9344 = inst_9319;
var state_9417__$1 = (function (){var statearr_9468 = state_9417;
(statearr_9468[(7)] = inst_9344);

(statearr_9468[(16)] = inst_9341);

(statearr_9468[(17)] = inst_9342);

(statearr_9468[(18)] = inst_9343);

return statearr_9468;
})();
var statearr_9469_9520 = state_9417__$1;
(statearr_9469_9520[(2)] = null);

(statearr_9469_9520[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (18))){
var inst_9359 = (state_9417[(2)]);
var state_9417__$1 = state_9417;
var statearr_9470_9521 = state_9417__$1;
(statearr_9470_9521[(2)] = inst_9359);

(statearr_9470_9521[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (37))){
var state_9417__$1 = state_9417;
var statearr_9471_9522 = state_9417__$1;
(statearr_9471_9522[(2)] = null);

(statearr_9471_9522[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9418 === (8))){
var inst_9319 = (state_9417[(8)]);
var inst_9337 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9319);
var state_9417__$1 = state_9417;
var statearr_9472_9523 = state_9417__$1;
(statearr_9472_9523[(2)] = inst_9337);

(statearr_9472_9523[(1)] = (10));


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
}
}
});})(c__8416__auto___9477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8309__auto__,c__8416__auto___9477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8310__auto__ = null;
var cljs$core$async$mix_$_state_machine__8310__auto____0 = (function (){
var statearr_9473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9473[(0)] = cljs$core$async$mix_$_state_machine__8310__auto__);

(statearr_9473[(1)] = (1));

return statearr_9473;
});
var cljs$core$async$mix_$_state_machine__8310__auto____1 = (function (state_9417){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_9417);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e9474){if((e9474 instanceof Object)){
var ex__8313__auto__ = e9474;
var statearr_9475_9524 = state_9417;
(statearr_9475_9524[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9417);

return cljs.core.cst$kw$recur;
} else {
throw e9474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9525 = state_9417;
state_9417 = G__9525;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8310__auto__ = function(state_9417){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8310__auto____1.call(this,state_9417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8310__auto____0;
cljs$core$async$mix_$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8310__auto____1;
return cljs$core$async$mix_$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___9477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8418__auto__ = (function (){var statearr_9476 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_9476[(6)] = c__8416__auto___9477);

return statearr_9476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___9477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__9527 = arguments.length;
switch (G__9527) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__9531 = arguments.length;
switch (G__9531) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__9529_SHARP_){
if(cljs.core.truth_((p1__9529_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9529_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__9529_SHARP_.call(null,topic)))){
return p1__9529_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9529_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9532 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9533){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9533 = meta9533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9534,meta9533__$1){
var self__ = this;
var _9534__$1 = this;
return (new cljs.core.async.t_cljs$core$async9532(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9533__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9534){
var self__ = this;
var _9534__$1 = this;
return self__.meta9533;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta9533], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9532";

cljs.core.async.t_cljs$core$async9532.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async9532");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9532.
 */
cljs.core.async.__GT_t_cljs$core$async9532 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9533){
return (new cljs.core.async.t_cljs$core$async9532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9533));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9532(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8416__auto___9652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___9652,mults,ensure_mult,p){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___9652,mults,ensure_mult,p){
return (function (state_9606){
var state_val_9607 = (state_9606[(1)]);
if((state_val_9607 === (7))){
var inst_9602 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
var statearr_9608_9653 = state_9606__$1;
(statearr_9608_9653[(2)] = inst_9602);

(statearr_9608_9653[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (20))){
var state_9606__$1 = state_9606;
var statearr_9609_9654 = state_9606__$1;
(statearr_9609_9654[(2)] = null);

(statearr_9609_9654[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (1))){
var state_9606__$1 = state_9606;
var statearr_9610_9655 = state_9606__$1;
(statearr_9610_9655[(2)] = null);

(statearr_9610_9655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (24))){
var inst_9585 = (state_9606[(7)]);
var inst_9594 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_9585);
var state_9606__$1 = state_9606;
var statearr_9611_9656 = state_9606__$1;
(statearr_9611_9656[(2)] = inst_9594);

(statearr_9611_9656[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (4))){
var inst_9537 = (state_9606[(8)]);
var inst_9537__$1 = (state_9606[(2)]);
var inst_9538 = (inst_9537__$1 == null);
var state_9606__$1 = (function (){var statearr_9612 = state_9606;
(statearr_9612[(8)] = inst_9537__$1);

return statearr_9612;
})();
if(cljs.core.truth_(inst_9538)){
var statearr_9613_9657 = state_9606__$1;
(statearr_9613_9657[(1)] = (5));

} else {
var statearr_9614_9658 = state_9606__$1;
(statearr_9614_9658[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (15))){
var inst_9579 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
var statearr_9615_9659 = state_9606__$1;
(statearr_9615_9659[(2)] = inst_9579);

(statearr_9615_9659[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (21))){
var inst_9599 = (state_9606[(2)]);
var state_9606__$1 = (function (){var statearr_9616 = state_9606;
(statearr_9616[(9)] = inst_9599);

return statearr_9616;
})();
var statearr_9617_9660 = state_9606__$1;
(statearr_9617_9660[(2)] = null);

(statearr_9617_9660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (13))){
var inst_9561 = (state_9606[(10)]);
var inst_9563 = cljs.core.chunked_seq_QMARK_(inst_9561);
var state_9606__$1 = state_9606;
if(inst_9563){
var statearr_9618_9661 = state_9606__$1;
(statearr_9618_9661[(1)] = (16));

} else {
var statearr_9619_9662 = state_9606__$1;
(statearr_9619_9662[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (22))){
var inst_9591 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
if(cljs.core.truth_(inst_9591)){
var statearr_9620_9663 = state_9606__$1;
(statearr_9620_9663[(1)] = (23));

} else {
var statearr_9621_9664 = state_9606__$1;
(statearr_9621_9664[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (6))){
var inst_9587 = (state_9606[(11)]);
var inst_9585 = (state_9606[(7)]);
var inst_9537 = (state_9606[(8)]);
var inst_9585__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_9537) : topic_fn.call(null,inst_9537));
var inst_9586 = cljs.core.deref(mults);
var inst_9587__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9586,inst_9585__$1);
var state_9606__$1 = (function (){var statearr_9622 = state_9606;
(statearr_9622[(11)] = inst_9587__$1);

(statearr_9622[(7)] = inst_9585__$1);

return statearr_9622;
})();
if(cljs.core.truth_(inst_9587__$1)){
var statearr_9623_9665 = state_9606__$1;
(statearr_9623_9665[(1)] = (19));

} else {
var statearr_9624_9666 = state_9606__$1;
(statearr_9624_9666[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (25))){
var inst_9596 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
var statearr_9625_9667 = state_9606__$1;
(statearr_9625_9667[(2)] = inst_9596);

(statearr_9625_9667[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (17))){
var inst_9561 = (state_9606[(10)]);
var inst_9570 = cljs.core.first(inst_9561);
var inst_9571 = cljs.core.async.muxch_STAR_(inst_9570);
var inst_9572 = cljs.core.async.close_BANG_(inst_9571);
var inst_9573 = cljs.core.next(inst_9561);
var inst_9547 = inst_9573;
var inst_9548 = null;
var inst_9549 = (0);
var inst_9550 = (0);
var state_9606__$1 = (function (){var statearr_9626 = state_9606;
(statearr_9626[(12)] = inst_9547);

(statearr_9626[(13)] = inst_9549);

(statearr_9626[(14)] = inst_9550);

(statearr_9626[(15)] = inst_9548);

(statearr_9626[(16)] = inst_9572);

return statearr_9626;
})();
var statearr_9627_9668 = state_9606__$1;
(statearr_9627_9668[(2)] = null);

(statearr_9627_9668[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (3))){
var inst_9604 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9606__$1,inst_9604);
} else {
if((state_val_9607 === (12))){
var inst_9581 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
var statearr_9628_9669 = state_9606__$1;
(statearr_9628_9669[(2)] = inst_9581);

(statearr_9628_9669[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (2))){
var state_9606__$1 = state_9606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9606__$1,(4),ch);
} else {
if((state_val_9607 === (23))){
var state_9606__$1 = state_9606;
var statearr_9629_9670 = state_9606__$1;
(statearr_9629_9670[(2)] = null);

(statearr_9629_9670[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (19))){
var inst_9587 = (state_9606[(11)]);
var inst_9537 = (state_9606[(8)]);
var inst_9589 = cljs.core.async.muxch_STAR_(inst_9587);
var state_9606__$1 = state_9606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9606__$1,(22),inst_9589,inst_9537);
} else {
if((state_val_9607 === (11))){
var inst_9547 = (state_9606[(12)]);
var inst_9561 = (state_9606[(10)]);
var inst_9561__$1 = cljs.core.seq(inst_9547);
var state_9606__$1 = (function (){var statearr_9630 = state_9606;
(statearr_9630[(10)] = inst_9561__$1);

return statearr_9630;
})();
if(inst_9561__$1){
var statearr_9631_9671 = state_9606__$1;
(statearr_9631_9671[(1)] = (13));

} else {
var statearr_9632_9672 = state_9606__$1;
(statearr_9632_9672[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (9))){
var inst_9583 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
var statearr_9633_9673 = state_9606__$1;
(statearr_9633_9673[(2)] = inst_9583);

(statearr_9633_9673[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (5))){
var inst_9544 = cljs.core.deref(mults);
var inst_9545 = cljs.core.vals(inst_9544);
var inst_9546 = cljs.core.seq(inst_9545);
var inst_9547 = inst_9546;
var inst_9548 = null;
var inst_9549 = (0);
var inst_9550 = (0);
var state_9606__$1 = (function (){var statearr_9634 = state_9606;
(statearr_9634[(12)] = inst_9547);

(statearr_9634[(13)] = inst_9549);

(statearr_9634[(14)] = inst_9550);

(statearr_9634[(15)] = inst_9548);

return statearr_9634;
})();
var statearr_9635_9674 = state_9606__$1;
(statearr_9635_9674[(2)] = null);

(statearr_9635_9674[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (14))){
var state_9606__$1 = state_9606;
var statearr_9639_9675 = state_9606__$1;
(statearr_9639_9675[(2)] = null);

(statearr_9639_9675[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (16))){
var inst_9561 = (state_9606[(10)]);
var inst_9565 = cljs.core.chunk_first(inst_9561);
var inst_9566 = cljs.core.chunk_rest(inst_9561);
var inst_9567 = cljs.core.count(inst_9565);
var inst_9547 = inst_9566;
var inst_9548 = inst_9565;
var inst_9549 = inst_9567;
var inst_9550 = (0);
var state_9606__$1 = (function (){var statearr_9640 = state_9606;
(statearr_9640[(12)] = inst_9547);

(statearr_9640[(13)] = inst_9549);

(statearr_9640[(14)] = inst_9550);

(statearr_9640[(15)] = inst_9548);

return statearr_9640;
})();
var statearr_9641_9676 = state_9606__$1;
(statearr_9641_9676[(2)] = null);

(statearr_9641_9676[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (10))){
var inst_9547 = (state_9606[(12)]);
var inst_9549 = (state_9606[(13)]);
var inst_9550 = (state_9606[(14)]);
var inst_9548 = (state_9606[(15)]);
var inst_9555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9548,inst_9550);
var inst_9556 = cljs.core.async.muxch_STAR_(inst_9555);
var inst_9557 = cljs.core.async.close_BANG_(inst_9556);
var inst_9558 = (inst_9550 + (1));
var tmp9636 = inst_9547;
var tmp9637 = inst_9549;
var tmp9638 = inst_9548;
var inst_9547__$1 = tmp9636;
var inst_9548__$1 = tmp9638;
var inst_9549__$1 = tmp9637;
var inst_9550__$1 = inst_9558;
var state_9606__$1 = (function (){var statearr_9642 = state_9606;
(statearr_9642[(12)] = inst_9547__$1);

(statearr_9642[(13)] = inst_9549__$1);

(statearr_9642[(17)] = inst_9557);

(statearr_9642[(14)] = inst_9550__$1);

(statearr_9642[(15)] = inst_9548__$1);

return statearr_9642;
})();
var statearr_9643_9677 = state_9606__$1;
(statearr_9643_9677[(2)] = null);

(statearr_9643_9677[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (18))){
var inst_9576 = (state_9606[(2)]);
var state_9606__$1 = state_9606;
var statearr_9644_9678 = state_9606__$1;
(statearr_9644_9678[(2)] = inst_9576);

(statearr_9644_9678[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9607 === (8))){
var inst_9549 = (state_9606[(13)]);
var inst_9550 = (state_9606[(14)]);
var inst_9552 = (inst_9550 < inst_9549);
var inst_9553 = inst_9552;
var state_9606__$1 = state_9606;
if(cljs.core.truth_(inst_9553)){
var statearr_9645_9679 = state_9606__$1;
(statearr_9645_9679[(1)] = (10));

} else {
var statearr_9646_9680 = state_9606__$1;
(statearr_9646_9680[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__8416__auto___9652,mults,ensure_mult,p))
;
return ((function (switch__8309__auto__,c__8416__auto___9652,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_9647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9647[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_9647[(1)] = (1));

return statearr_9647;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_9606){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_9606);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e9648){if((e9648 instanceof Object)){
var ex__8313__auto__ = e9648;
var statearr_9649_9681 = state_9606;
(statearr_9649_9681[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9606);

return cljs.core.cst$kw$recur;
} else {
throw e9648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9682 = state_9606;
state_9606 = G__9682;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_9606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_9606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___9652,mults,ensure_mult,p))
})();
var state__8418__auto__ = (function (){var statearr_9650 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_9650[(6)] = c__8416__auto___9652);

return statearr_9650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___9652,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__9684 = arguments.length;
switch (G__9684) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__9687 = arguments.length;
switch (G__9687) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__9690 = arguments.length;
switch (G__9690) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__8416__auto___9757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___9757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___9757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9729){
var state_val_9730 = (state_9729[(1)]);
if((state_val_9730 === (7))){
var state_9729__$1 = state_9729;
var statearr_9731_9758 = state_9729__$1;
(statearr_9731_9758[(2)] = null);

(statearr_9731_9758[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (1))){
var state_9729__$1 = state_9729;
var statearr_9732_9759 = state_9729__$1;
(statearr_9732_9759[(2)] = null);

(statearr_9732_9759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (4))){
var inst_9693 = (state_9729[(7)]);
var inst_9695 = (inst_9693 < cnt);
var state_9729__$1 = state_9729;
if(cljs.core.truth_(inst_9695)){
var statearr_9733_9760 = state_9729__$1;
(statearr_9733_9760[(1)] = (6));

} else {
var statearr_9734_9761 = state_9729__$1;
(statearr_9734_9761[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (15))){
var inst_9725 = (state_9729[(2)]);
var state_9729__$1 = state_9729;
var statearr_9735_9762 = state_9729__$1;
(statearr_9735_9762[(2)] = inst_9725);

(statearr_9735_9762[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (13))){
var inst_9718 = cljs.core.async.close_BANG_(out);
var state_9729__$1 = state_9729;
var statearr_9736_9763 = state_9729__$1;
(statearr_9736_9763[(2)] = inst_9718);

(statearr_9736_9763[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (6))){
var state_9729__$1 = state_9729;
var statearr_9737_9764 = state_9729__$1;
(statearr_9737_9764[(2)] = null);

(statearr_9737_9764[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (3))){
var inst_9727 = (state_9729[(2)]);
var state_9729__$1 = state_9729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9729__$1,inst_9727);
} else {
if((state_val_9730 === (12))){
var inst_9715 = (state_9729[(8)]);
var inst_9715__$1 = (state_9729[(2)]);
var inst_9716 = cljs.core.some(cljs.core.nil_QMARK_,inst_9715__$1);
var state_9729__$1 = (function (){var statearr_9738 = state_9729;
(statearr_9738[(8)] = inst_9715__$1);

return statearr_9738;
})();
if(cljs.core.truth_(inst_9716)){
var statearr_9739_9765 = state_9729__$1;
(statearr_9739_9765[(1)] = (13));

} else {
var statearr_9740_9766 = state_9729__$1;
(statearr_9740_9766[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (2))){
var inst_9692 = cljs.core.reset_BANG_(dctr,cnt);
var inst_9693 = (0);
var state_9729__$1 = (function (){var statearr_9741 = state_9729;
(statearr_9741[(7)] = inst_9693);

(statearr_9741[(9)] = inst_9692);

return statearr_9741;
})();
var statearr_9742_9767 = state_9729__$1;
(statearr_9742_9767[(2)] = null);

(statearr_9742_9767[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (11))){
var inst_9693 = (state_9729[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_9729,(10),Object,null,(9));
var inst_9702 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_9693) : chs__$1.call(null,inst_9693));
var inst_9703 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_9693) : done.call(null,inst_9693));
var inst_9704 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_9702,inst_9703);
var state_9729__$1 = state_9729;
var statearr_9743_9768 = state_9729__$1;
(statearr_9743_9768[(2)] = inst_9704);


cljs.core.async.impl.ioc_helpers.process_exception(state_9729__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (9))){
var inst_9693 = (state_9729[(7)]);
var inst_9706 = (state_9729[(2)]);
var inst_9707 = (inst_9693 + (1));
var inst_9693__$1 = inst_9707;
var state_9729__$1 = (function (){var statearr_9744 = state_9729;
(statearr_9744[(7)] = inst_9693__$1);

(statearr_9744[(10)] = inst_9706);

return statearr_9744;
})();
var statearr_9745_9769 = state_9729__$1;
(statearr_9745_9769[(2)] = null);

(statearr_9745_9769[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (5))){
var inst_9713 = (state_9729[(2)]);
var state_9729__$1 = (function (){var statearr_9746 = state_9729;
(statearr_9746[(11)] = inst_9713);

return statearr_9746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9729__$1,(12),dchan);
} else {
if((state_val_9730 === (14))){
var inst_9715 = (state_9729[(8)]);
var inst_9720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_9715);
var state_9729__$1 = state_9729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9729__$1,(16),out,inst_9720);
} else {
if((state_val_9730 === (16))){
var inst_9722 = (state_9729[(2)]);
var state_9729__$1 = (function (){var statearr_9747 = state_9729;
(statearr_9747[(12)] = inst_9722);

return statearr_9747;
})();
var statearr_9748_9770 = state_9729__$1;
(statearr_9748_9770[(2)] = null);

(statearr_9748_9770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (10))){
var inst_9697 = (state_9729[(2)]);
var inst_9698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_9729__$1 = (function (){var statearr_9749 = state_9729;
(statearr_9749[(13)] = inst_9697);

return statearr_9749;
})();
var statearr_9750_9771 = state_9729__$1;
(statearr_9750_9771[(2)] = inst_9698);


cljs.core.async.impl.ioc_helpers.process_exception(state_9729__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9730 === (8))){
var inst_9711 = (state_9729[(2)]);
var state_9729__$1 = state_9729;
var statearr_9751_9772 = state_9729__$1;
(statearr_9751_9772[(2)] = inst_9711);

(statearr_9751_9772[(1)] = (5));


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
});})(c__8416__auto___9757,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8309__auto__,c__8416__auto___9757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_9752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9752[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_9752[(1)] = (1));

return statearr_9752;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_9729){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_9729);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e9753){if((e9753 instanceof Object)){
var ex__8313__auto__ = e9753;
var statearr_9754_9773 = state_9729;
(statearr_9754_9773[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9729);

return cljs.core.cst$kw$recur;
} else {
throw e9753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9774 = state_9729;
state_9729 = G__9774;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_9729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_9729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___9757,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8418__auto__ = (function (){var statearr_9755 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_9755[(6)] = c__8416__auto___9757);

return statearr_9755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___9757,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__9777 = arguments.length;
switch (G__9777) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8416__auto___9831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___9831,out){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___9831,out){
return (function (state_9809){
var state_val_9810 = (state_9809[(1)]);
if((state_val_9810 === (7))){
var inst_9789 = (state_9809[(7)]);
var inst_9788 = (state_9809[(8)]);
var inst_9788__$1 = (state_9809[(2)]);
var inst_9789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9788__$1,(0),null);
var inst_9790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9788__$1,(1),null);
var inst_9791 = (inst_9789__$1 == null);
var state_9809__$1 = (function (){var statearr_9811 = state_9809;
(statearr_9811[(7)] = inst_9789__$1);

(statearr_9811[(9)] = inst_9790);

(statearr_9811[(8)] = inst_9788__$1);

return statearr_9811;
})();
if(cljs.core.truth_(inst_9791)){
var statearr_9812_9832 = state_9809__$1;
(statearr_9812_9832[(1)] = (8));

} else {
var statearr_9813_9833 = state_9809__$1;
(statearr_9813_9833[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9810 === (1))){
var inst_9778 = cljs.core.vec(chs);
var inst_9779 = inst_9778;
var state_9809__$1 = (function (){var statearr_9814 = state_9809;
(statearr_9814[(10)] = inst_9779);

return statearr_9814;
})();
var statearr_9815_9834 = state_9809__$1;
(statearr_9815_9834[(2)] = null);

(statearr_9815_9834[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9810 === (4))){
var inst_9779 = (state_9809[(10)]);
var state_9809__$1 = state_9809;
return cljs.core.async.ioc_alts_BANG_(state_9809__$1,(7),inst_9779);
} else {
if((state_val_9810 === (6))){
var inst_9805 = (state_9809[(2)]);
var state_9809__$1 = state_9809;
var statearr_9816_9835 = state_9809__$1;
(statearr_9816_9835[(2)] = inst_9805);

(statearr_9816_9835[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9810 === (3))){
var inst_9807 = (state_9809[(2)]);
var state_9809__$1 = state_9809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9809__$1,inst_9807);
} else {
if((state_val_9810 === (2))){
var inst_9779 = (state_9809[(10)]);
var inst_9781 = cljs.core.count(inst_9779);
var inst_9782 = (inst_9781 > (0));
var state_9809__$1 = state_9809;
if(cljs.core.truth_(inst_9782)){
var statearr_9818_9836 = state_9809__$1;
(statearr_9818_9836[(1)] = (4));

} else {
var statearr_9819_9837 = state_9809__$1;
(statearr_9819_9837[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9810 === (11))){
var inst_9779 = (state_9809[(10)]);
var inst_9798 = (state_9809[(2)]);
var tmp9817 = inst_9779;
var inst_9779__$1 = tmp9817;
var state_9809__$1 = (function (){var statearr_9820 = state_9809;
(statearr_9820[(11)] = inst_9798);

(statearr_9820[(10)] = inst_9779__$1);

return statearr_9820;
})();
var statearr_9821_9838 = state_9809__$1;
(statearr_9821_9838[(2)] = null);

(statearr_9821_9838[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9810 === (9))){
var inst_9789 = (state_9809[(7)]);
var state_9809__$1 = state_9809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9809__$1,(11),out,inst_9789);
} else {
if((state_val_9810 === (5))){
var inst_9803 = cljs.core.async.close_BANG_(out);
var state_9809__$1 = state_9809;
var statearr_9822_9839 = state_9809__$1;
(statearr_9822_9839[(2)] = inst_9803);

(statearr_9822_9839[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9810 === (10))){
var inst_9801 = (state_9809[(2)]);
var state_9809__$1 = state_9809;
var statearr_9823_9840 = state_9809__$1;
(statearr_9823_9840[(2)] = inst_9801);

(statearr_9823_9840[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9810 === (8))){
var inst_9789 = (state_9809[(7)]);
var inst_9790 = (state_9809[(9)]);
var inst_9788 = (state_9809[(8)]);
var inst_9779 = (state_9809[(10)]);
var inst_9793 = (function (){var cs = inst_9779;
var vec__9784 = inst_9788;
var v = inst_9789;
var c = inst_9790;
return ((function (cs,vec__9784,v,c,inst_9789,inst_9790,inst_9788,inst_9779,state_val_9810,c__8416__auto___9831,out){
return (function (p1__9775_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__9775_SHARP_);
});
;})(cs,vec__9784,v,c,inst_9789,inst_9790,inst_9788,inst_9779,state_val_9810,c__8416__auto___9831,out))
})();
var inst_9794 = cljs.core.filterv(inst_9793,inst_9779);
var inst_9779__$1 = inst_9794;
var state_9809__$1 = (function (){var statearr_9824 = state_9809;
(statearr_9824[(10)] = inst_9779__$1);

return statearr_9824;
})();
var statearr_9825_9841 = state_9809__$1;
(statearr_9825_9841[(2)] = null);

(statearr_9825_9841[(1)] = (2));


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
});})(c__8416__auto___9831,out))
;
return ((function (switch__8309__auto__,c__8416__auto___9831,out){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_9826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9826[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_9826[(1)] = (1));

return statearr_9826;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_9809){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_9809);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e9827){if((e9827 instanceof Object)){
var ex__8313__auto__ = e9827;
var statearr_9828_9842 = state_9809;
(statearr_9828_9842[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9809);

return cljs.core.cst$kw$recur;
} else {
throw e9827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9843 = state_9809;
state_9809 = G__9843;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_9809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_9809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___9831,out))
})();
var state__8418__auto__ = (function (){var statearr_9829 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_9829[(6)] = c__8416__auto___9831);

return statearr_9829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___9831,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__9845 = arguments.length;
switch (G__9845) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8416__auto___9890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___9890,out){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___9890,out){
return (function (state_9869){
var state_val_9870 = (state_9869[(1)]);
if((state_val_9870 === (7))){
var inst_9851 = (state_9869[(7)]);
var inst_9851__$1 = (state_9869[(2)]);
var inst_9852 = (inst_9851__$1 == null);
var inst_9853 = cljs.core.not(inst_9852);
var state_9869__$1 = (function (){var statearr_9871 = state_9869;
(statearr_9871[(7)] = inst_9851__$1);

return statearr_9871;
})();
if(inst_9853){
var statearr_9872_9891 = state_9869__$1;
(statearr_9872_9891[(1)] = (8));

} else {
var statearr_9873_9892 = state_9869__$1;
(statearr_9873_9892[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (1))){
var inst_9846 = (0);
var state_9869__$1 = (function (){var statearr_9874 = state_9869;
(statearr_9874[(8)] = inst_9846);

return statearr_9874;
})();
var statearr_9875_9893 = state_9869__$1;
(statearr_9875_9893[(2)] = null);

(statearr_9875_9893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (4))){
var state_9869__$1 = state_9869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9869__$1,(7),ch);
} else {
if((state_val_9870 === (6))){
var inst_9864 = (state_9869[(2)]);
var state_9869__$1 = state_9869;
var statearr_9876_9894 = state_9869__$1;
(statearr_9876_9894[(2)] = inst_9864);

(statearr_9876_9894[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (3))){
var inst_9866 = (state_9869[(2)]);
var inst_9867 = cljs.core.async.close_BANG_(out);
var state_9869__$1 = (function (){var statearr_9877 = state_9869;
(statearr_9877[(9)] = inst_9866);

return statearr_9877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9869__$1,inst_9867);
} else {
if((state_val_9870 === (2))){
var inst_9846 = (state_9869[(8)]);
var inst_9848 = (inst_9846 < n);
var state_9869__$1 = state_9869;
if(cljs.core.truth_(inst_9848)){
var statearr_9878_9895 = state_9869__$1;
(statearr_9878_9895[(1)] = (4));

} else {
var statearr_9879_9896 = state_9869__$1;
(statearr_9879_9896[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (11))){
var inst_9846 = (state_9869[(8)]);
var inst_9856 = (state_9869[(2)]);
var inst_9857 = (inst_9846 + (1));
var inst_9846__$1 = inst_9857;
var state_9869__$1 = (function (){var statearr_9880 = state_9869;
(statearr_9880[(10)] = inst_9856);

(statearr_9880[(8)] = inst_9846__$1);

return statearr_9880;
})();
var statearr_9881_9897 = state_9869__$1;
(statearr_9881_9897[(2)] = null);

(statearr_9881_9897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (9))){
var state_9869__$1 = state_9869;
var statearr_9882_9898 = state_9869__$1;
(statearr_9882_9898[(2)] = null);

(statearr_9882_9898[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (5))){
var state_9869__$1 = state_9869;
var statearr_9883_9899 = state_9869__$1;
(statearr_9883_9899[(2)] = null);

(statearr_9883_9899[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (10))){
var inst_9861 = (state_9869[(2)]);
var state_9869__$1 = state_9869;
var statearr_9884_9900 = state_9869__$1;
(statearr_9884_9900[(2)] = inst_9861);

(statearr_9884_9900[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9870 === (8))){
var inst_9851 = (state_9869[(7)]);
var state_9869__$1 = state_9869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9869__$1,(11),out,inst_9851);
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
});})(c__8416__auto___9890,out))
;
return ((function (switch__8309__auto__,c__8416__auto___9890,out){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_9885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9885[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_9885[(1)] = (1));

return statearr_9885;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_9869){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_9869);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e9886){if((e9886 instanceof Object)){
var ex__8313__auto__ = e9886;
var statearr_9887_9901 = state_9869;
(statearr_9887_9901[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9869);

return cljs.core.cst$kw$recur;
} else {
throw e9886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9902 = state_9869;
state_9869 = G__9902;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_9869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_9869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___9890,out))
})();
var state__8418__auto__ = (function (){var statearr_9888 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_9888[(6)] = c__8416__auto___9890);

return statearr_9888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___9890,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9904 = (function (f,ch,meta9905){
this.f = f;
this.ch = ch;
this.meta9905 = meta9905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9906,meta9905__$1){
var self__ = this;
var _9906__$1 = this;
return (new cljs.core.async.t_cljs$core$async9904(self__.f,self__.ch,meta9905__$1));
});

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9906){
var self__ = this;
var _9906__$1 = this;
return self__.meta9905;
});

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9907 = (function (f,ch,meta9905,_,fn1,meta9908){
this.f = f;
this.ch = ch;
this.meta9905 = meta9905;
this._ = _;
this.fn1 = fn1;
this.meta9908 = meta9908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9909,meta9908__$1){
var self__ = this;
var _9909__$1 = this;
return (new cljs.core.async.t_cljs$core$async9907(self__.f,self__.ch,self__.meta9905,self__._,self__.fn1,meta9908__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9909){
var self__ = this;
var _9909__$1 = this;
return self__.meta9908;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9903_SHARP_){
var G__9910 = (((p1__9903_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9903_SHARP_) : self__.f.call(null,p1__9903_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__9910) : f1.call(null,G__9910));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9907.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9905,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async9904], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta9908], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9907";

cljs.core.async.t_cljs$core$async9907.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async9907");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9907.
 */
cljs.core.async.__GT_t_cljs$core$async9907 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9907(f__$1,ch__$1,meta9905__$1,___$2,fn1__$1,meta9908){
return (new cljs.core.async.t_cljs$core$async9907(f__$1,ch__$1,meta9905__$1,___$2,fn1__$1,meta9908));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9907(self__.f,self__.ch,self__.meta9905,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__9911 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__9911) : self__.f.call(null,G__9911));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9905], null);
});

cljs.core.async.t_cljs$core$async9904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9904";

cljs.core.async.t_cljs$core$async9904.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async9904");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9904.
 */
cljs.core.async.__GT_t_cljs$core$async9904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9904(f__$1,ch__$1,meta9905){
return (new cljs.core.async.t_cljs$core$async9904(f__$1,ch__$1,meta9905));
});

}

return (new cljs.core.async.t_cljs$core$async9904(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9912 = (function (f,ch,meta9913){
this.f = f;
this.ch = ch;
this.meta9913 = meta9913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9914,meta9913__$1){
var self__ = this;
var _9914__$1 = this;
return (new cljs.core.async.t_cljs$core$async9912(self__.f,self__.ch,meta9913__$1));
});

cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9914){
var self__ = this;
var _9914__$1 = this;
return self__.meta9913;
});

cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async9912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9913], null);
});

cljs.core.async.t_cljs$core$async9912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9912";

cljs.core.async.t_cljs$core$async9912.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async9912");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9912.
 */
cljs.core.async.__GT_t_cljs$core$async9912 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9912(f__$1,ch__$1,meta9913){
return (new cljs.core.async.t_cljs$core$async9912(f__$1,ch__$1,meta9913));
});

}

return (new cljs.core.async.t_cljs$core$async9912(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9915 = (function (p,ch,meta9916){
this.p = p;
this.ch = ch;
this.meta9916 = meta9916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9917,meta9916__$1){
var self__ = this;
var _9917__$1 = this;
return (new cljs.core.async.t_cljs$core$async9915(self__.p,self__.ch,meta9916__$1));
});

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9917){
var self__ = this;
var _9917__$1 = this;
return self__.meta9916;
});

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9916], null);
});

cljs.core.async.t_cljs$core$async9915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9915";

cljs.core.async.t_cljs$core$async9915.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async9915");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9915.
 */
cljs.core.async.__GT_t_cljs$core$async9915 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9915(p__$1,ch__$1,meta9916){
return (new cljs.core.async.t_cljs$core$async9915(p__$1,ch__$1,meta9916));
});

}

return (new cljs.core.async.t_cljs$core$async9915(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__9919 = arguments.length;
switch (G__9919) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8416__auto___9959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___9959,out){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___9959,out){
return (function (state_9940){
var state_val_9941 = (state_9940[(1)]);
if((state_val_9941 === (7))){
var inst_9936 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
var statearr_9942_9960 = state_9940__$1;
(statearr_9942_9960[(2)] = inst_9936);

(statearr_9942_9960[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (1))){
var state_9940__$1 = state_9940;
var statearr_9943_9961 = state_9940__$1;
(statearr_9943_9961[(2)] = null);

(statearr_9943_9961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (4))){
var inst_9922 = (state_9940[(7)]);
var inst_9922__$1 = (state_9940[(2)]);
var inst_9923 = (inst_9922__$1 == null);
var state_9940__$1 = (function (){var statearr_9944 = state_9940;
(statearr_9944[(7)] = inst_9922__$1);

return statearr_9944;
})();
if(cljs.core.truth_(inst_9923)){
var statearr_9945_9962 = state_9940__$1;
(statearr_9945_9962[(1)] = (5));

} else {
var statearr_9946_9963 = state_9940__$1;
(statearr_9946_9963[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (6))){
var inst_9922 = (state_9940[(7)]);
var inst_9927 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9922) : p.call(null,inst_9922));
var state_9940__$1 = state_9940;
if(cljs.core.truth_(inst_9927)){
var statearr_9947_9964 = state_9940__$1;
(statearr_9947_9964[(1)] = (8));

} else {
var statearr_9948_9965 = state_9940__$1;
(statearr_9948_9965[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (3))){
var inst_9938 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9940__$1,inst_9938);
} else {
if((state_val_9941 === (2))){
var state_9940__$1 = state_9940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9940__$1,(4),ch);
} else {
if((state_val_9941 === (11))){
var inst_9930 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
var statearr_9949_9966 = state_9940__$1;
(statearr_9949_9966[(2)] = inst_9930);

(statearr_9949_9966[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (9))){
var state_9940__$1 = state_9940;
var statearr_9950_9967 = state_9940__$1;
(statearr_9950_9967[(2)] = null);

(statearr_9950_9967[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (5))){
var inst_9925 = cljs.core.async.close_BANG_(out);
var state_9940__$1 = state_9940;
var statearr_9951_9968 = state_9940__$1;
(statearr_9951_9968[(2)] = inst_9925);

(statearr_9951_9968[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (10))){
var inst_9933 = (state_9940[(2)]);
var state_9940__$1 = (function (){var statearr_9952 = state_9940;
(statearr_9952[(8)] = inst_9933);

return statearr_9952;
})();
var statearr_9953_9969 = state_9940__$1;
(statearr_9953_9969[(2)] = null);

(statearr_9953_9969[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9941 === (8))){
var inst_9922 = (state_9940[(7)]);
var state_9940__$1 = state_9940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9940__$1,(11),out,inst_9922);
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
});})(c__8416__auto___9959,out))
;
return ((function (switch__8309__auto__,c__8416__auto___9959,out){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_9954 = [null,null,null,null,null,null,null,null,null];
(statearr_9954[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_9954[(1)] = (1));

return statearr_9954;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_9940){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_9940);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e9955){if((e9955 instanceof Object)){
var ex__8313__auto__ = e9955;
var statearr_9956_9970 = state_9940;
(statearr_9956_9970[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9940);

return cljs.core.cst$kw$recur;
} else {
throw e9955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__9971 = state_9940;
state_9940 = G__9971;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_9940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_9940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___9959,out))
})();
var state__8418__auto__ = (function (){var statearr_9957 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_9957[(6)] = c__8416__auto___9959);

return statearr_9957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___9959,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__9973 = arguments.length;
switch (G__9973) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto__){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto__){
return (function (state_10036){
var state_val_10037 = (state_10036[(1)]);
if((state_val_10037 === (7))){
var inst_10032 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
var statearr_10038_10076 = state_10036__$1;
(statearr_10038_10076[(2)] = inst_10032);

(statearr_10038_10076[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (20))){
var inst_10002 = (state_10036[(7)]);
var inst_10013 = (state_10036[(2)]);
var inst_10014 = cljs.core.next(inst_10002);
var inst_9988 = inst_10014;
var inst_9989 = null;
var inst_9990 = (0);
var inst_9991 = (0);
var state_10036__$1 = (function (){var statearr_10039 = state_10036;
(statearr_10039[(8)] = inst_10013);

(statearr_10039[(9)] = inst_9989);

(statearr_10039[(10)] = inst_9988);

(statearr_10039[(11)] = inst_9991);

(statearr_10039[(12)] = inst_9990);

return statearr_10039;
})();
var statearr_10040_10077 = state_10036__$1;
(statearr_10040_10077[(2)] = null);

(statearr_10040_10077[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (1))){
var state_10036__$1 = state_10036;
var statearr_10041_10078 = state_10036__$1;
(statearr_10041_10078[(2)] = null);

(statearr_10041_10078[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (4))){
var inst_9977 = (state_10036[(13)]);
var inst_9977__$1 = (state_10036[(2)]);
var inst_9978 = (inst_9977__$1 == null);
var state_10036__$1 = (function (){var statearr_10042 = state_10036;
(statearr_10042[(13)] = inst_9977__$1);

return statearr_10042;
})();
if(cljs.core.truth_(inst_9978)){
var statearr_10043_10079 = state_10036__$1;
(statearr_10043_10079[(1)] = (5));

} else {
var statearr_10044_10080 = state_10036__$1;
(statearr_10044_10080[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (15))){
var state_10036__$1 = state_10036;
var statearr_10048_10081 = state_10036__$1;
(statearr_10048_10081[(2)] = null);

(statearr_10048_10081[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (21))){
var state_10036__$1 = state_10036;
var statearr_10049_10082 = state_10036__$1;
(statearr_10049_10082[(2)] = null);

(statearr_10049_10082[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (13))){
var inst_9989 = (state_10036[(9)]);
var inst_9988 = (state_10036[(10)]);
var inst_9991 = (state_10036[(11)]);
var inst_9990 = (state_10036[(12)]);
var inst_9998 = (state_10036[(2)]);
var inst_9999 = (inst_9991 + (1));
var tmp10045 = inst_9989;
var tmp10046 = inst_9988;
var tmp10047 = inst_9990;
var inst_9988__$1 = tmp10046;
var inst_9989__$1 = tmp10045;
var inst_9990__$1 = tmp10047;
var inst_9991__$1 = inst_9999;
var state_10036__$1 = (function (){var statearr_10050 = state_10036;
(statearr_10050[(9)] = inst_9989__$1);

(statearr_10050[(10)] = inst_9988__$1);

(statearr_10050[(11)] = inst_9991__$1);

(statearr_10050[(12)] = inst_9990__$1);

(statearr_10050[(14)] = inst_9998);

return statearr_10050;
})();
var statearr_10051_10083 = state_10036__$1;
(statearr_10051_10083[(2)] = null);

(statearr_10051_10083[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (22))){
var state_10036__$1 = state_10036;
var statearr_10052_10084 = state_10036__$1;
(statearr_10052_10084[(2)] = null);

(statearr_10052_10084[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (6))){
var inst_9977 = (state_10036[(13)]);
var inst_9986 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9977) : f.call(null,inst_9977));
var inst_9987 = cljs.core.seq(inst_9986);
var inst_9988 = inst_9987;
var inst_9989 = null;
var inst_9990 = (0);
var inst_9991 = (0);
var state_10036__$1 = (function (){var statearr_10053 = state_10036;
(statearr_10053[(9)] = inst_9989);

(statearr_10053[(10)] = inst_9988);

(statearr_10053[(11)] = inst_9991);

(statearr_10053[(12)] = inst_9990);

return statearr_10053;
})();
var statearr_10054_10085 = state_10036__$1;
(statearr_10054_10085[(2)] = null);

(statearr_10054_10085[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (17))){
var inst_10002 = (state_10036[(7)]);
var inst_10006 = cljs.core.chunk_first(inst_10002);
var inst_10007 = cljs.core.chunk_rest(inst_10002);
var inst_10008 = cljs.core.count(inst_10006);
var inst_9988 = inst_10007;
var inst_9989 = inst_10006;
var inst_9990 = inst_10008;
var inst_9991 = (0);
var state_10036__$1 = (function (){var statearr_10055 = state_10036;
(statearr_10055[(9)] = inst_9989);

(statearr_10055[(10)] = inst_9988);

(statearr_10055[(11)] = inst_9991);

(statearr_10055[(12)] = inst_9990);

return statearr_10055;
})();
var statearr_10056_10086 = state_10036__$1;
(statearr_10056_10086[(2)] = null);

(statearr_10056_10086[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (3))){
var inst_10034 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10036__$1,inst_10034);
} else {
if((state_val_10037 === (12))){
var inst_10022 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
var statearr_10057_10087 = state_10036__$1;
(statearr_10057_10087[(2)] = inst_10022);

(statearr_10057_10087[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (2))){
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10036__$1,(4),in$);
} else {
if((state_val_10037 === (23))){
var inst_10030 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
var statearr_10058_10088 = state_10036__$1;
(statearr_10058_10088[(2)] = inst_10030);

(statearr_10058_10088[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (19))){
var inst_10017 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
var statearr_10059_10089 = state_10036__$1;
(statearr_10059_10089[(2)] = inst_10017);

(statearr_10059_10089[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (11))){
var inst_9988 = (state_10036[(10)]);
var inst_10002 = (state_10036[(7)]);
var inst_10002__$1 = cljs.core.seq(inst_9988);
var state_10036__$1 = (function (){var statearr_10060 = state_10036;
(statearr_10060[(7)] = inst_10002__$1);

return statearr_10060;
})();
if(inst_10002__$1){
var statearr_10061_10090 = state_10036__$1;
(statearr_10061_10090[(1)] = (14));

} else {
var statearr_10062_10091 = state_10036__$1;
(statearr_10062_10091[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (9))){
var inst_10024 = (state_10036[(2)]);
var inst_10025 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_10036__$1 = (function (){var statearr_10063 = state_10036;
(statearr_10063[(15)] = inst_10024);

return statearr_10063;
})();
if(cljs.core.truth_(inst_10025)){
var statearr_10064_10092 = state_10036__$1;
(statearr_10064_10092[(1)] = (21));

} else {
var statearr_10065_10093 = state_10036__$1;
(statearr_10065_10093[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (5))){
var inst_9980 = cljs.core.async.close_BANG_(out);
var state_10036__$1 = state_10036;
var statearr_10066_10094 = state_10036__$1;
(statearr_10066_10094[(2)] = inst_9980);

(statearr_10066_10094[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (14))){
var inst_10002 = (state_10036[(7)]);
var inst_10004 = cljs.core.chunked_seq_QMARK_(inst_10002);
var state_10036__$1 = state_10036;
if(inst_10004){
var statearr_10067_10095 = state_10036__$1;
(statearr_10067_10095[(1)] = (17));

} else {
var statearr_10068_10096 = state_10036__$1;
(statearr_10068_10096[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (16))){
var inst_10020 = (state_10036[(2)]);
var state_10036__$1 = state_10036;
var statearr_10069_10097 = state_10036__$1;
(statearr_10069_10097[(2)] = inst_10020);

(statearr_10069_10097[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10037 === (10))){
var inst_9989 = (state_10036[(9)]);
var inst_9991 = (state_10036[(11)]);
var inst_9996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9989,inst_9991);
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10036__$1,(13),out,inst_9996);
} else {
if((state_val_10037 === (18))){
var inst_10002 = (state_10036[(7)]);
var inst_10011 = cljs.core.first(inst_10002);
var state_10036__$1 = state_10036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10036__$1,(20),out,inst_10011);
} else {
if((state_val_10037 === (8))){
var inst_9991 = (state_10036[(11)]);
var inst_9990 = (state_10036[(12)]);
var inst_9993 = (inst_9991 < inst_9990);
var inst_9994 = inst_9993;
var state_10036__$1 = state_10036;
if(cljs.core.truth_(inst_9994)){
var statearr_10070_10098 = state_10036__$1;
(statearr_10070_10098[(1)] = (10));

} else {
var statearr_10071_10099 = state_10036__$1;
(statearr_10071_10099[(1)] = (11));

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
}
}
}
}
}
});})(c__8416__auto__))
;
return ((function (switch__8309__auto__,c__8416__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8310__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8310__auto____0 = (function (){
var statearr_10072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10072[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8310__auto__);

(statearr_10072[(1)] = (1));

return statearr_10072;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8310__auto____1 = (function (state_10036){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_10036);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e10073){if((e10073 instanceof Object)){
var ex__8313__auto__ = e10073;
var statearr_10074_10100 = state_10036;
(statearr_10074_10100[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10036);

return cljs.core.cst$kw$recur;
} else {
throw e10073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__10101 = state_10036;
state_10036 = G__10101;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8310__auto__ = function(state_10036){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8310__auto____1.call(this,state_10036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8310__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8310__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto__))
})();
var state__8418__auto__ = (function (){var statearr_10075 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_10075[(6)] = c__8416__auto__);

return statearr_10075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto__))
);

return c__8416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__10103 = arguments.length;
switch (G__10103) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__10106 = arguments.length;
switch (G__10106) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__10109 = arguments.length;
switch (G__10109) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8416__auto___10156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___10156,out){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___10156,out){
return (function (state_10133){
var state_val_10134 = (state_10133[(1)]);
if((state_val_10134 === (7))){
var inst_10128 = (state_10133[(2)]);
var state_10133__$1 = state_10133;
var statearr_10135_10157 = state_10133__$1;
(statearr_10135_10157[(2)] = inst_10128);

(statearr_10135_10157[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10134 === (1))){
var inst_10110 = null;
var state_10133__$1 = (function (){var statearr_10136 = state_10133;
(statearr_10136[(7)] = inst_10110);

return statearr_10136;
})();
var statearr_10137_10158 = state_10133__$1;
(statearr_10137_10158[(2)] = null);

(statearr_10137_10158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10134 === (4))){
var inst_10113 = (state_10133[(8)]);
var inst_10113__$1 = (state_10133[(2)]);
var inst_10114 = (inst_10113__$1 == null);
var inst_10115 = cljs.core.not(inst_10114);
var state_10133__$1 = (function (){var statearr_10138 = state_10133;
(statearr_10138[(8)] = inst_10113__$1);

return statearr_10138;
})();
if(inst_10115){
var statearr_10139_10159 = state_10133__$1;
(statearr_10139_10159[(1)] = (5));

} else {
var statearr_10140_10160 = state_10133__$1;
(statearr_10140_10160[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10134 === (6))){
var state_10133__$1 = state_10133;
var statearr_10141_10161 = state_10133__$1;
(statearr_10141_10161[(2)] = null);

(statearr_10141_10161[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10134 === (3))){
var inst_10130 = (state_10133[(2)]);
var inst_10131 = cljs.core.async.close_BANG_(out);
var state_10133__$1 = (function (){var statearr_10142 = state_10133;
(statearr_10142[(9)] = inst_10130);

return statearr_10142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10133__$1,inst_10131);
} else {
if((state_val_10134 === (2))){
var state_10133__$1 = state_10133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10133__$1,(4),ch);
} else {
if((state_val_10134 === (11))){
var inst_10113 = (state_10133[(8)]);
var inst_10122 = (state_10133[(2)]);
var inst_10110 = inst_10113;
var state_10133__$1 = (function (){var statearr_10143 = state_10133;
(statearr_10143[(10)] = inst_10122);

(statearr_10143[(7)] = inst_10110);

return statearr_10143;
})();
var statearr_10144_10162 = state_10133__$1;
(statearr_10144_10162[(2)] = null);

(statearr_10144_10162[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10134 === (9))){
var inst_10113 = (state_10133[(8)]);
var state_10133__$1 = state_10133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10133__$1,(11),out,inst_10113);
} else {
if((state_val_10134 === (5))){
var inst_10110 = (state_10133[(7)]);
var inst_10113 = (state_10133[(8)]);
var inst_10117 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10113,inst_10110);
var state_10133__$1 = state_10133;
if(inst_10117){
var statearr_10146_10163 = state_10133__$1;
(statearr_10146_10163[(1)] = (8));

} else {
var statearr_10147_10164 = state_10133__$1;
(statearr_10147_10164[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10134 === (10))){
var inst_10125 = (state_10133[(2)]);
var state_10133__$1 = state_10133;
var statearr_10148_10165 = state_10133__$1;
(statearr_10148_10165[(2)] = inst_10125);

(statearr_10148_10165[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10134 === (8))){
var inst_10110 = (state_10133[(7)]);
var tmp10145 = inst_10110;
var inst_10110__$1 = tmp10145;
var state_10133__$1 = (function (){var statearr_10149 = state_10133;
(statearr_10149[(7)] = inst_10110__$1);

return statearr_10149;
})();
var statearr_10150_10166 = state_10133__$1;
(statearr_10150_10166[(2)] = null);

(statearr_10150_10166[(1)] = (2));


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
});})(c__8416__auto___10156,out))
;
return ((function (switch__8309__auto__,c__8416__auto___10156,out){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_10151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10151[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_10151[(1)] = (1));

return statearr_10151;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_10133){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_10133);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e10152){if((e10152 instanceof Object)){
var ex__8313__auto__ = e10152;
var statearr_10153_10167 = state_10133;
(statearr_10153_10167[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10133);

return cljs.core.cst$kw$recur;
} else {
throw e10152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__10168 = state_10133;
state_10133 = G__10168;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_10133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_10133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___10156,out))
})();
var state__8418__auto__ = (function (){var statearr_10154 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_10154[(6)] = c__8416__auto___10156);

return statearr_10154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___10156,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__10170 = arguments.length;
switch (G__10170) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8416__auto___10236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___10236,out){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___10236,out){
return (function (state_10208){
var state_val_10209 = (state_10208[(1)]);
if((state_val_10209 === (7))){
var inst_10204 = (state_10208[(2)]);
var state_10208__$1 = state_10208;
var statearr_10210_10237 = state_10208__$1;
(statearr_10210_10237[(2)] = inst_10204);

(statearr_10210_10237[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (1))){
var inst_10171 = (new Array(n));
var inst_10172 = inst_10171;
var inst_10173 = (0);
var state_10208__$1 = (function (){var statearr_10211 = state_10208;
(statearr_10211[(7)] = inst_10173);

(statearr_10211[(8)] = inst_10172);

return statearr_10211;
})();
var statearr_10212_10238 = state_10208__$1;
(statearr_10212_10238[(2)] = null);

(statearr_10212_10238[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (4))){
var inst_10176 = (state_10208[(9)]);
var inst_10176__$1 = (state_10208[(2)]);
var inst_10177 = (inst_10176__$1 == null);
var inst_10178 = cljs.core.not(inst_10177);
var state_10208__$1 = (function (){var statearr_10213 = state_10208;
(statearr_10213[(9)] = inst_10176__$1);

return statearr_10213;
})();
if(inst_10178){
var statearr_10214_10239 = state_10208__$1;
(statearr_10214_10239[(1)] = (5));

} else {
var statearr_10215_10240 = state_10208__$1;
(statearr_10215_10240[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (15))){
var inst_10198 = (state_10208[(2)]);
var state_10208__$1 = state_10208;
var statearr_10216_10241 = state_10208__$1;
(statearr_10216_10241[(2)] = inst_10198);

(statearr_10216_10241[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (13))){
var state_10208__$1 = state_10208;
var statearr_10217_10242 = state_10208__$1;
(statearr_10217_10242[(2)] = null);

(statearr_10217_10242[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (6))){
var inst_10173 = (state_10208[(7)]);
var inst_10194 = (inst_10173 > (0));
var state_10208__$1 = state_10208;
if(cljs.core.truth_(inst_10194)){
var statearr_10218_10243 = state_10208__$1;
(statearr_10218_10243[(1)] = (12));

} else {
var statearr_10219_10244 = state_10208__$1;
(statearr_10219_10244[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (3))){
var inst_10206 = (state_10208[(2)]);
var state_10208__$1 = state_10208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10208__$1,inst_10206);
} else {
if((state_val_10209 === (12))){
var inst_10172 = (state_10208[(8)]);
var inst_10196 = cljs.core.vec(inst_10172);
var state_10208__$1 = state_10208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10208__$1,(15),out,inst_10196);
} else {
if((state_val_10209 === (2))){
var state_10208__$1 = state_10208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10208__$1,(4),ch);
} else {
if((state_val_10209 === (11))){
var inst_10188 = (state_10208[(2)]);
var inst_10189 = (new Array(n));
var inst_10172 = inst_10189;
var inst_10173 = (0);
var state_10208__$1 = (function (){var statearr_10220 = state_10208;
(statearr_10220[(7)] = inst_10173);

(statearr_10220[(8)] = inst_10172);

(statearr_10220[(10)] = inst_10188);

return statearr_10220;
})();
var statearr_10221_10245 = state_10208__$1;
(statearr_10221_10245[(2)] = null);

(statearr_10221_10245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (9))){
var inst_10172 = (state_10208[(8)]);
var inst_10186 = cljs.core.vec(inst_10172);
var state_10208__$1 = state_10208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10208__$1,(11),out,inst_10186);
} else {
if((state_val_10209 === (5))){
var inst_10173 = (state_10208[(7)]);
var inst_10172 = (state_10208[(8)]);
var inst_10176 = (state_10208[(9)]);
var inst_10181 = (state_10208[(11)]);
var inst_10180 = (inst_10172[inst_10173] = inst_10176);
var inst_10181__$1 = (inst_10173 + (1));
var inst_10182 = (inst_10181__$1 < n);
var state_10208__$1 = (function (){var statearr_10222 = state_10208;
(statearr_10222[(12)] = inst_10180);

(statearr_10222[(11)] = inst_10181__$1);

return statearr_10222;
})();
if(cljs.core.truth_(inst_10182)){
var statearr_10223_10246 = state_10208__$1;
(statearr_10223_10246[(1)] = (8));

} else {
var statearr_10224_10247 = state_10208__$1;
(statearr_10224_10247[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (14))){
var inst_10201 = (state_10208[(2)]);
var inst_10202 = cljs.core.async.close_BANG_(out);
var state_10208__$1 = (function (){var statearr_10226 = state_10208;
(statearr_10226[(13)] = inst_10201);

return statearr_10226;
})();
var statearr_10227_10248 = state_10208__$1;
(statearr_10227_10248[(2)] = inst_10202);

(statearr_10227_10248[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (10))){
var inst_10192 = (state_10208[(2)]);
var state_10208__$1 = state_10208;
var statearr_10228_10249 = state_10208__$1;
(statearr_10228_10249[(2)] = inst_10192);

(statearr_10228_10249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10209 === (8))){
var inst_10172 = (state_10208[(8)]);
var inst_10181 = (state_10208[(11)]);
var tmp10225 = inst_10172;
var inst_10172__$1 = tmp10225;
var inst_10173 = inst_10181;
var state_10208__$1 = (function (){var statearr_10229 = state_10208;
(statearr_10229[(7)] = inst_10173);

(statearr_10229[(8)] = inst_10172__$1);

return statearr_10229;
})();
var statearr_10230_10250 = state_10208__$1;
(statearr_10230_10250[(2)] = null);

(statearr_10230_10250[(1)] = (2));


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
});})(c__8416__auto___10236,out))
;
return ((function (switch__8309__auto__,c__8416__auto___10236,out){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_10231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10231[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_10231[(1)] = (1));

return statearr_10231;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_10208){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_10208);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e10232){if((e10232 instanceof Object)){
var ex__8313__auto__ = e10232;
var statearr_10233_10251 = state_10208;
(statearr_10233_10251[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10208);

return cljs.core.cst$kw$recur;
} else {
throw e10232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__10252 = state_10208;
state_10208 = G__10252;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_10208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_10208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___10236,out))
})();
var state__8418__auto__ = (function (){var statearr_10234 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_10234[(6)] = c__8416__auto___10236);

return statearr_10234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___10236,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__10254 = arguments.length;
switch (G__10254) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8416__auto___10324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8416__auto___10324,out){
return (function (){
var f__8417__auto__ = (function (){var switch__8309__auto__ = ((function (c__8416__auto___10324,out){
return (function (state_10296){
var state_val_10297 = (state_10296[(1)]);
if((state_val_10297 === (7))){
var inst_10292 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10298_10325 = state_10296__$1;
(statearr_10298_10325[(2)] = inst_10292);

(statearr_10298_10325[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (1))){
var inst_10255 = [];
var inst_10256 = inst_10255;
var inst_10257 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_10296__$1 = (function (){var statearr_10299 = state_10296;
(statearr_10299[(7)] = inst_10257);

(statearr_10299[(8)] = inst_10256);

return statearr_10299;
})();
var statearr_10300_10326 = state_10296__$1;
(statearr_10300_10326[(2)] = null);

(statearr_10300_10326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (4))){
var inst_10260 = (state_10296[(9)]);
var inst_10260__$1 = (state_10296[(2)]);
var inst_10261 = (inst_10260__$1 == null);
var inst_10262 = cljs.core.not(inst_10261);
var state_10296__$1 = (function (){var statearr_10301 = state_10296;
(statearr_10301[(9)] = inst_10260__$1);

return statearr_10301;
})();
if(inst_10262){
var statearr_10302_10327 = state_10296__$1;
(statearr_10302_10327[(1)] = (5));

} else {
var statearr_10303_10328 = state_10296__$1;
(statearr_10303_10328[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (15))){
var inst_10286 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10304_10329 = state_10296__$1;
(statearr_10304_10329[(2)] = inst_10286);

(statearr_10304_10329[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (13))){
var state_10296__$1 = state_10296;
var statearr_10305_10330 = state_10296__$1;
(statearr_10305_10330[(2)] = null);

(statearr_10305_10330[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (6))){
var inst_10256 = (state_10296[(8)]);
var inst_10281 = inst_10256.length;
var inst_10282 = (inst_10281 > (0));
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10282)){
var statearr_10306_10331 = state_10296__$1;
(statearr_10306_10331[(1)] = (12));

} else {
var statearr_10307_10332 = state_10296__$1;
(statearr_10307_10332[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (3))){
var inst_10294 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10296__$1,inst_10294);
} else {
if((state_val_10297 === (12))){
var inst_10256 = (state_10296[(8)]);
var inst_10284 = cljs.core.vec(inst_10256);
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10296__$1,(15),out,inst_10284);
} else {
if((state_val_10297 === (2))){
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10296__$1,(4),ch);
} else {
if((state_val_10297 === (11))){
var inst_10260 = (state_10296[(9)]);
var inst_10264 = (state_10296[(10)]);
var inst_10274 = (state_10296[(2)]);
var inst_10275 = [];
var inst_10276 = inst_10275.push(inst_10260);
var inst_10256 = inst_10275;
var inst_10257 = inst_10264;
var state_10296__$1 = (function (){var statearr_10308 = state_10296;
(statearr_10308[(7)] = inst_10257);

(statearr_10308[(11)] = inst_10276);

(statearr_10308[(8)] = inst_10256);

(statearr_10308[(12)] = inst_10274);

return statearr_10308;
})();
var statearr_10309_10333 = state_10296__$1;
(statearr_10309_10333[(2)] = null);

(statearr_10309_10333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (9))){
var inst_10256 = (state_10296[(8)]);
var inst_10272 = cljs.core.vec(inst_10256);
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10296__$1,(11),out,inst_10272);
} else {
if((state_val_10297 === (5))){
var inst_10257 = (state_10296[(7)]);
var inst_10260 = (state_10296[(9)]);
var inst_10264 = (state_10296[(10)]);
var inst_10264__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10260) : f.call(null,inst_10260));
var inst_10265 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10264__$1,inst_10257);
var inst_10266 = cljs.core.keyword_identical_QMARK_(inst_10257,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_10267 = ((inst_10265) || (inst_10266));
var state_10296__$1 = (function (){var statearr_10310 = state_10296;
(statearr_10310[(10)] = inst_10264__$1);

return statearr_10310;
})();
if(cljs.core.truth_(inst_10267)){
var statearr_10311_10334 = state_10296__$1;
(statearr_10311_10334[(1)] = (8));

} else {
var statearr_10312_10335 = state_10296__$1;
(statearr_10312_10335[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (14))){
var inst_10289 = (state_10296[(2)]);
var inst_10290 = cljs.core.async.close_BANG_(out);
var state_10296__$1 = (function (){var statearr_10314 = state_10296;
(statearr_10314[(13)] = inst_10289);

return statearr_10314;
})();
var statearr_10315_10336 = state_10296__$1;
(statearr_10315_10336[(2)] = inst_10290);

(statearr_10315_10336[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (10))){
var inst_10279 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10316_10337 = state_10296__$1;
(statearr_10316_10337[(2)] = inst_10279);

(statearr_10316_10337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10297 === (8))){
var inst_10260 = (state_10296[(9)]);
var inst_10256 = (state_10296[(8)]);
var inst_10264 = (state_10296[(10)]);
var inst_10269 = inst_10256.push(inst_10260);
var tmp10313 = inst_10256;
var inst_10256__$1 = tmp10313;
var inst_10257 = inst_10264;
var state_10296__$1 = (function (){var statearr_10317 = state_10296;
(statearr_10317[(7)] = inst_10257);

(statearr_10317[(14)] = inst_10269);

(statearr_10317[(8)] = inst_10256__$1);

return statearr_10317;
})();
var statearr_10318_10338 = state_10296__$1;
(statearr_10318_10338[(2)] = null);

(statearr_10318_10338[(1)] = (2));


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
});})(c__8416__auto___10324,out))
;
return ((function (switch__8309__auto__,c__8416__auto___10324,out){
return (function() {
var cljs$core$async$state_machine__8310__auto__ = null;
var cljs$core$async$state_machine__8310__auto____0 = (function (){
var statearr_10319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10319[(0)] = cljs$core$async$state_machine__8310__auto__);

(statearr_10319[(1)] = (1));

return statearr_10319;
});
var cljs$core$async$state_machine__8310__auto____1 = (function (state_10296){
while(true){
var ret_value__8311__auto__ = (function (){try{while(true){
var result__8312__auto__ = switch__8309__auto__(state_10296);
if(cljs.core.keyword_identical_QMARK_(result__8312__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8312__auto__;
}
break;
}
}catch (e10320){if((e10320 instanceof Object)){
var ex__8313__auto__ = e10320;
var statearr_10321_10339 = state_10296;
(statearr_10321_10339[(5)] = ex__8313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10296);

return cljs.core.cst$kw$recur;
} else {
throw e10320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8311__auto__,cljs.core.cst$kw$recur)){
var G__10340 = state_10296;
state_10296 = G__10340;
continue;
} else {
return ret_value__8311__auto__;
}
break;
}
});
cljs$core$async$state_machine__8310__auto__ = function(state_10296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8310__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8310__auto____1.call(this,state_10296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8310__auto____0;
cljs$core$async$state_machine__8310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8310__auto____1;
return cljs$core$async$state_machine__8310__auto__;
})()
;})(switch__8309__auto__,c__8416__auto___10324,out))
})();
var state__8418__auto__ = (function (){var statearr_10322 = (f__8417__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8417__auto__.cljs$core$IFn$_invoke$arity$0() : f__8417__auto__.call(null));
(statearr_10322[(6)] = c__8416__auto___10324);

return statearr_10322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8418__auto__);
});})(c__8416__auto___10324,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

