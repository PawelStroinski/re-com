// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4347__auto__ = (((obj == null))?null:obj);
var m__4348__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4348__auto__.call(null,obj));
} else {
var m__4348__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__4348__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__11160 = millis;
if((G__11160 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__11160) : goog.date.UtcDateTime.fromTimestamp.call(null,G__11160));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4434__auto__ = (function cljs_time$coerce$from_string_$_iter__11161(s__11162){
return (new cljs.core.LazySeq(null,(function (){
var s__11162__$1 = s__11162;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11162__$1);
if(temp__5720__auto__){
var s__11162__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11162__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__11162__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__11164 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__11163 = (0);
while(true){
if((i__11163 < size__4433__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__11163);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11165){if((e11165 instanceof Error)){
var _ = e11165;
return null;
} else {
throw e11165;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__11164,d);

var G__11167 = (i__11163 + (1));
i__11163 = G__11167;
continue;
} else {
var G__11168 = (i__11163 + (1));
i__11163 = G__11168;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11164),cljs_time$coerce$from_string_$_iter__11161(cljs.core.chunk_rest(s__11162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11164),null);
}
} else {
var f = cljs.core.first(s__11162__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11166){if((e11166 instanceof Error)){
var _ = e11166;
return null;
} else {
throw e11166;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__11161(cljs.core.rest(s__11162__$2)));
} else {
var G__11169 = cljs.core.rest(s__11162__$2);
s__11162__$1 = G__11169;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__11170 = date;
var G__11170__$1 = (((G__11170 == null))?null:G__11170.getTime());
if((G__11170__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__11170__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__11171 = obj;
var G__11171__$1 = (((G__11171 == null))?null:cljs_time.coerce.to_date_time(G__11171));
if((G__11171__$1 == null)){
return null;
} else {
return G__11171__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4036__auto__ = millis;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4036__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__11172 = obj;
var G__11172__$1 = (((G__11172 == null))?null:cljs_time.coerce.to_date_time(G__11172));
var G__11172__$2 = (((G__11172__$1 == null))?null:G__11172__$1.getTime());
if((G__11172__$2 == null)){
return null;
} else {
return (new Date(G__11172__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__11173 = obj;
var G__11173__$1 = (((G__11173 == null))?null:cljs_time.coerce.to_date_time(G__11173));
if((G__11173__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__11173__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5718__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var dt = temp__5718__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5718__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var dt = temp__5718__auto__;
var G__11174 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__11174.setHours(dt.getHours());

G__11174.setMinutes(dt.getMinutes());

G__11174.setSeconds(dt.getSeconds());

G__11174.setMilliseconds(dt.getMilliseconds());

return G__11174;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__11175_11184 = cljs_time.coerce.to_date_time;
var G__11176_11185 = "null";
var G__11177_11186 = ((function (G__11175_11184,G__11176_11185){
return (function (_){
return null;
});})(G__11175_11184,G__11176_11185))
;
goog.object.set(G__11175_11184,G__11176_11185,G__11177_11186);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__11178_11187 = cljs_time.coerce.to_date_time;
var G__11179_11188 = "number";
var G__11180_11189 = ((function (G__11178_11187,G__11179_11188){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__11178_11187,G__11179_11188))
;
goog.object.set(G__11178_11187,G__11179_11188,G__11180_11189);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__11181_11190 = cljs_time.coerce.to_date_time;
var G__11182_11191 = "string";
var G__11183_11192 = ((function (G__11181_11190,G__11182_11191){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__11181_11190,G__11182_11191))
;
goog.object.set(G__11181_11190,G__11182_11191,G__11183_11192);
