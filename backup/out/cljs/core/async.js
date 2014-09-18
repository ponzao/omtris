// Compiled by ClojureScript 0.0-2234
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10666 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10666 = (function (f,fn_handler,meta10667){
this.f = f;
this.fn_handler = fn_handler;
this.meta10667 = meta10667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10666.cljs$lang$type = true;
cljs.core.async.t10666.cljs$lang$ctorStr = "cljs.core.async/t10666";
cljs.core.async.t10666.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10666");
});
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10668){var self__ = this;
var _10668__$1 = this;return self__.meta10667;
});
cljs.core.async.t10666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10668,meta10667__$1){var self__ = this;
var _10668__$1 = this;return (new cljs.core.async.t10666(self__.f,self__.fn_handler,meta10667__$1));
});
cljs.core.async.__GT_t10666 = (function __GT_t10666(f__$1,fn_handler__$1,meta10667){return (new cljs.core.async.t10666(f__$1,fn_handler__$1,meta10667));
});
}
return (new cljs.core.async.t10666(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10670 = buff;if(G__10670)
{var bit__4188__auto__ = null;if(cljs.core.truth_((function (){var or__3538__auto__ = bit__4188__auto__;if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{return G__10670.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10670.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10670);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10670);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10671 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10671);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10671,ret){
return (function (){return fn1.call(null,val_10671);
});})(val_10671,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3526__auto__ = ret;if(cljs.core.truth_(and__3526__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3526__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4394__auto___10672 = n;var x_10673 = 0;while(true){
if((x_10673 < n__4394__auto___10672))
{(a[x_10673] = 0);
{
var G__10674 = (x_10673 + 1);
x_10673 = G__10674;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10675 = (i + 1);
i = G__10675;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10679 = (function (flag,alt_flag,meta10680){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10680 = meta10680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10679.cljs$lang$type = true;
cljs.core.async.t10679.cljs$lang$ctorStr = "cljs.core.async/t10679";
cljs.core.async.t10679.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10679");
});})(flag))
;
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10681){var self__ = this;
var _10681__$1 = this;return self__.meta10680;
});})(flag))
;
cljs.core.async.t10679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10681,meta10680__$1){var self__ = this;
var _10681__$1 = this;return (new cljs.core.async.t10679(self__.flag,self__.alt_flag,meta10680__$1));
});})(flag))
;
cljs.core.async.__GT_t10679 = ((function (flag){
return (function __GT_t10679(flag__$1,alt_flag__$1,meta10680){return (new cljs.core.async.t10679(flag__$1,alt_flag__$1,meta10680));
});})(flag))
;
}
return (new cljs.core.async.t10679(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10685 = (function (cb,flag,alt_handler,meta10686){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10686 = meta10686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10685.cljs$lang$type = true;
cljs.core.async.t10685.cljs$lang$ctorStr = "cljs.core.async/t10685";
cljs.core.async.t10685.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10685");
});
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10687){var self__ = this;
var _10687__$1 = this;return self__.meta10686;
});
cljs.core.async.t10685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10687,meta10686__$1){var self__ = this;
var _10687__$1 = this;return (new cljs.core.async.t10685(self__.cb,self__.flag,self__.alt_handler,meta10686__$1));
});
cljs.core.async.__GT_t10685 = (function __GT_t10685(cb__$1,flag__$1,alt_handler__$1,meta10686){return (new cljs.core.async.t10685(cb__$1,flag__$1,alt_handler__$1,meta10686));
});
}
return (new cljs.core.async.t10685(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10688_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10688_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3538__auto__ = wport;if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10689 = (i + 1);
i = G__10689;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3538__auto__ = ret;if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3526__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3526__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3526__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10690){var map__10692 = p__10690;var map__10692__$1 = ((cljs.core.seq_QMARK_.call(null,map__10692))?cljs.core.apply.call(null,cljs.core.hash_map,map__10692):map__10692);var opts = map__10692__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10690 = null;if (arguments.length > 1) {
  p__10690 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10690);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10693){
var ports = cljs.core.first(arglist__10693);
var p__10690 = cljs.core.rest(arglist__10693);
return alts_BANG___delegate(ports,p__10690);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10701 = (function (ch,f,map_LT_,meta10702){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10702 = meta10702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10701.cljs$lang$type = true;
cljs.core.async.t10701.cljs$lang$ctorStr = "cljs.core.async/t10701";
cljs.core.async.t10701.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10701");
});
cljs.core.async.t10701.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10701.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10701.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10701.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10704 = (function (fn1,_,meta10702,ch,f,map_LT_,meta10705){
this.fn1 = fn1;
this._ = _;
this.meta10702 = meta10702;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10705 = meta10705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10704.cljs$lang$type = true;
cljs.core.async.t10704.cljs$lang$ctorStr = "cljs.core.async/t10704";
cljs.core.async.t10704.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10704");
});})(___$1))
;
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10694_SHARP_){return f1.call(null,(((p1__10694_SHARP_ == null))?null:self__.f.call(null,p1__10694_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10706){var self__ = this;
var _10706__$1 = this;return self__.meta10705;
});})(___$1))
;
cljs.core.async.t10704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10706,meta10705__$1){var self__ = this;
var _10706__$1 = this;return (new cljs.core.async.t10704(self__.fn1,self__._,self__.meta10702,self__.ch,self__.f,self__.map_LT_,meta10705__$1));
});})(___$1))
;
cljs.core.async.__GT_t10704 = ((function (___$1){
return (function __GT_t10704(fn1__$1,___$2,meta10702__$1,ch__$2,f__$2,map_LT___$2,meta10705){return (new cljs.core.async.t10704(fn1__$1,___$2,meta10702__$1,ch__$2,f__$2,map_LT___$2,meta10705));
});})(___$1))
;
}
return (new cljs.core.async.t10704(fn1,___$1,self__.meta10702,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3526__auto__ = ret;if(cljs.core.truth_(and__3526__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3526__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10701.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10701.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10703){var self__ = this;
var _10703__$1 = this;return self__.meta10702;
});
cljs.core.async.t10701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10703,meta10702__$1){var self__ = this;
var _10703__$1 = this;return (new cljs.core.async.t10701(self__.ch,self__.f,self__.map_LT_,meta10702__$1));
});
cljs.core.async.__GT_t10701 = (function __GT_t10701(ch__$1,f__$1,map_LT___$1,meta10702){return (new cljs.core.async.t10701(ch__$1,f__$1,map_LT___$1,meta10702));
});
}
return (new cljs.core.async.t10701(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10710 = (function (ch,f,map_GT_,meta10711){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10711 = meta10711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10710.cljs$lang$type = true;
cljs.core.async.t10710.cljs$lang$ctorStr = "cljs.core.async/t10710";
cljs.core.async.t10710.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10710");
});
cljs.core.async.t10710.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10710.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10710.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10712){var self__ = this;
var _10712__$1 = this;return self__.meta10711;
});
cljs.core.async.t10710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10712,meta10711__$1){var self__ = this;
var _10712__$1 = this;return (new cljs.core.async.t10710(self__.ch,self__.f,self__.map_GT_,meta10711__$1));
});
cljs.core.async.__GT_t10710 = (function __GT_t10710(ch__$1,f__$1,map_GT___$1,meta10711){return (new cljs.core.async.t10710(ch__$1,f__$1,map_GT___$1,meta10711));
});
}
return (new cljs.core.async.t10710(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10716 = (function (ch,p,filter_GT_,meta10717){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10717 = meta10717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10716.cljs$lang$type = true;
cljs.core.async.t10716.cljs$lang$ctorStr = "cljs.core.async/t10716";
cljs.core.async.t10716.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10716");
});
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10716.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10718){var self__ = this;
var _10718__$1 = this;return self__.meta10717;
});
cljs.core.async.t10716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10718,meta10717__$1){var self__ = this;
var _10718__$1 = this;return (new cljs.core.async.t10716(self__.ch,self__.p,self__.filter_GT_,meta10717__$1));
});
cljs.core.async.__GT_t10716 = (function __GT_t10716(ch__$1,p__$1,filter_GT___$1,meta10717){return (new cljs.core.async.t10716(ch__$1,p__$1,filter_GT___$1,meta10717));
});
}
return (new cljs.core.async.t10716(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6316__auto___10801 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___10801,out){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___10801,out){
return (function (state_10780){var state_val_10781 = (state_10780[1]);if((state_val_10781 === 1))
{var state_10780__$1 = state_10780;var statearr_10782_10802 = state_10780__$1;(statearr_10782_10802[2] = null);
(statearr_10782_10802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10781 === 2))
{var state_10780__$1 = state_10780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10780__$1,4,ch);
} else
{if((state_val_10781 === 3))
{var inst_10778 = (state_10780[2]);var state_10780__$1 = state_10780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10780__$1,inst_10778);
} else
{if((state_val_10781 === 4))
{var inst_10762 = (state_10780[7]);var inst_10762__$1 = (state_10780[2]);var inst_10763 = (inst_10762__$1 == null);var state_10780__$1 = (function (){var statearr_10783 = state_10780;(statearr_10783[7] = inst_10762__$1);
return statearr_10783;
})();if(cljs.core.truth_(inst_10763))
{var statearr_10784_10803 = state_10780__$1;(statearr_10784_10803[1] = 5);
} else
{var statearr_10785_10804 = state_10780__$1;(statearr_10785_10804[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10781 === 5))
{var inst_10765 = cljs.core.async.close_BANG_.call(null,out);var state_10780__$1 = state_10780;var statearr_10786_10805 = state_10780__$1;(statearr_10786_10805[2] = inst_10765);
(statearr_10786_10805[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10781 === 6))
{var inst_10762 = (state_10780[7]);var inst_10767 = p.call(null,inst_10762);var state_10780__$1 = state_10780;if(cljs.core.truth_(inst_10767))
{var statearr_10787_10806 = state_10780__$1;(statearr_10787_10806[1] = 8);
} else
{var statearr_10788_10807 = state_10780__$1;(statearr_10788_10807[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10781 === 7))
{var inst_10776 = (state_10780[2]);var state_10780__$1 = state_10780;var statearr_10789_10808 = state_10780__$1;(statearr_10789_10808[2] = inst_10776);
(statearr_10789_10808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10781 === 8))
{var inst_10762 = (state_10780[7]);var state_10780__$1 = state_10780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10780__$1,11,out,inst_10762);
} else
{if((state_val_10781 === 9))
{var state_10780__$1 = state_10780;var statearr_10790_10809 = state_10780__$1;(statearr_10790_10809[2] = null);
(statearr_10790_10809[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10781 === 10))
{var inst_10773 = (state_10780[2]);var state_10780__$1 = (function (){var statearr_10791 = state_10780;(statearr_10791[8] = inst_10773);
return statearr_10791;
})();var statearr_10792_10810 = state_10780__$1;(statearr_10792_10810[2] = null);
(statearr_10792_10810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10781 === 11))
{var inst_10770 = (state_10780[2]);var state_10780__$1 = state_10780;var statearr_10793_10811 = state_10780__$1;(statearr_10793_10811[2] = inst_10770);
(statearr_10793_10811[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___10801,out))
;return ((function (switch__6301__auto__,c__6316__auto___10801,out){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_10797 = [null,null,null,null,null,null,null,null,null];(statearr_10797[0] = state_machine__6302__auto__);
(statearr_10797[1] = 1);
return statearr_10797;
});
var state_machine__6302__auto____1 = (function (state_10780){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_10780);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e10798){if((e10798 instanceof Object))
{var ex__6305__auto__ = e10798;var statearr_10799_10812 = state_10780;(statearr_10799_10812[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10813 = state_10780;
state_10780 = G__10813;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_10780){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_10780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___10801,out))
})();var state__6318__auto__ = (function (){var statearr_10800 = f__6317__auto__.call(null);(statearr_10800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___10801);
return statearr_10800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___10801,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6316__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto__){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto__){
return (function (state_10965){var state_val_10966 = (state_10965[1]);if((state_val_10966 === 1))
{var state_10965__$1 = state_10965;var statearr_10967_11004 = state_10965__$1;(statearr_10967_11004[2] = null);
(statearr_10967_11004[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 2))
{var state_10965__$1 = state_10965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10965__$1,4,in$);
} else
{if((state_val_10966 === 3))
{var inst_10963 = (state_10965[2]);var state_10965__$1 = state_10965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10965__$1,inst_10963);
} else
{if((state_val_10966 === 4))
{var inst_10911 = (state_10965[7]);var inst_10911__$1 = (state_10965[2]);var inst_10912 = (inst_10911__$1 == null);var state_10965__$1 = (function (){var statearr_10968 = state_10965;(statearr_10968[7] = inst_10911__$1);
return statearr_10968;
})();if(cljs.core.truth_(inst_10912))
{var statearr_10969_11005 = state_10965__$1;(statearr_10969_11005[1] = 5);
} else
{var statearr_10970_11006 = state_10965__$1;(statearr_10970_11006[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 5))
{var inst_10914 = cljs.core.async.close_BANG_.call(null,out);var state_10965__$1 = state_10965;var statearr_10971_11007 = state_10965__$1;(statearr_10971_11007[2] = inst_10914);
(statearr_10971_11007[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 6))
{var inst_10911 = (state_10965[7]);var inst_10916 = f.call(null,inst_10911);var inst_10921 = cljs.core.seq.call(null,inst_10916);var inst_10922 = inst_10921;var inst_10923 = null;var inst_10924 = 0;var inst_10925 = 0;var state_10965__$1 = (function (){var statearr_10972 = state_10965;(statearr_10972[8] = inst_10922);
(statearr_10972[9] = inst_10924);
(statearr_10972[10] = inst_10923);
(statearr_10972[11] = inst_10925);
return statearr_10972;
})();var statearr_10973_11008 = state_10965__$1;(statearr_10973_11008[2] = null);
(statearr_10973_11008[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 7))
{var inst_10961 = (state_10965[2]);var state_10965__$1 = state_10965;var statearr_10974_11009 = state_10965__$1;(statearr_10974_11009[2] = inst_10961);
(statearr_10974_11009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 8))
{var inst_10924 = (state_10965[9]);var inst_10925 = (state_10965[11]);var inst_10927 = (inst_10925 < inst_10924);var inst_10928 = inst_10927;var state_10965__$1 = state_10965;if(cljs.core.truth_(inst_10928))
{var statearr_10975_11010 = state_10965__$1;(statearr_10975_11010[1] = 10);
} else
{var statearr_10976_11011 = state_10965__$1;(statearr_10976_11011[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 9))
{var inst_10958 = (state_10965[2]);var state_10965__$1 = (function (){var statearr_10977 = state_10965;(statearr_10977[12] = inst_10958);
return statearr_10977;
})();var statearr_10978_11012 = state_10965__$1;(statearr_10978_11012[2] = null);
(statearr_10978_11012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 10))
{var inst_10923 = (state_10965[10]);var inst_10925 = (state_10965[11]);var inst_10930 = cljs.core._nth.call(null,inst_10923,inst_10925);var state_10965__$1 = state_10965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10965__$1,13,out,inst_10930);
} else
{if((state_val_10966 === 11))
{var inst_10936 = (state_10965[13]);var inst_10922 = (state_10965[8]);var inst_10936__$1 = cljs.core.seq.call(null,inst_10922);var state_10965__$1 = (function (){var statearr_10982 = state_10965;(statearr_10982[13] = inst_10936__$1);
return statearr_10982;
})();if(inst_10936__$1)
{var statearr_10983_11013 = state_10965__$1;(statearr_10983_11013[1] = 14);
} else
{var statearr_10984_11014 = state_10965__$1;(statearr_10984_11014[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 12))
{var inst_10956 = (state_10965[2]);var state_10965__$1 = state_10965;var statearr_10985_11015 = state_10965__$1;(statearr_10985_11015[2] = inst_10956);
(statearr_10985_11015[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 13))
{var inst_10922 = (state_10965[8]);var inst_10924 = (state_10965[9]);var inst_10923 = (state_10965[10]);var inst_10925 = (state_10965[11]);var inst_10932 = (state_10965[2]);var inst_10933 = (inst_10925 + 1);var tmp10979 = inst_10922;var tmp10980 = inst_10924;var tmp10981 = inst_10923;var inst_10922__$1 = tmp10979;var inst_10923__$1 = tmp10981;var inst_10924__$1 = tmp10980;var inst_10925__$1 = inst_10933;var state_10965__$1 = (function (){var statearr_10986 = state_10965;(statearr_10986[14] = inst_10932);
(statearr_10986[8] = inst_10922__$1);
(statearr_10986[9] = inst_10924__$1);
(statearr_10986[10] = inst_10923__$1);
(statearr_10986[11] = inst_10925__$1);
return statearr_10986;
})();var statearr_10987_11016 = state_10965__$1;(statearr_10987_11016[2] = null);
(statearr_10987_11016[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 14))
{var inst_10936 = (state_10965[13]);var inst_10938 = cljs.core.chunked_seq_QMARK_.call(null,inst_10936);var state_10965__$1 = state_10965;if(inst_10938)
{var statearr_10988_11017 = state_10965__$1;(statearr_10988_11017[1] = 17);
} else
{var statearr_10989_11018 = state_10965__$1;(statearr_10989_11018[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 15))
{var state_10965__$1 = state_10965;var statearr_10990_11019 = state_10965__$1;(statearr_10990_11019[2] = null);
(statearr_10990_11019[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 16))
{var inst_10954 = (state_10965[2]);var state_10965__$1 = state_10965;var statearr_10991_11020 = state_10965__$1;(statearr_10991_11020[2] = inst_10954);
(statearr_10991_11020[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 17))
{var inst_10936 = (state_10965[13]);var inst_10940 = cljs.core.chunk_first.call(null,inst_10936);var inst_10941 = cljs.core.chunk_rest.call(null,inst_10936);var inst_10942 = cljs.core.count.call(null,inst_10940);var inst_10922 = inst_10941;var inst_10923 = inst_10940;var inst_10924 = inst_10942;var inst_10925 = 0;var state_10965__$1 = (function (){var statearr_10992 = state_10965;(statearr_10992[8] = inst_10922);
(statearr_10992[9] = inst_10924);
(statearr_10992[10] = inst_10923);
(statearr_10992[11] = inst_10925);
return statearr_10992;
})();var statearr_10993_11021 = state_10965__$1;(statearr_10993_11021[2] = null);
(statearr_10993_11021[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 18))
{var inst_10936 = (state_10965[13]);var inst_10945 = cljs.core.first.call(null,inst_10936);var state_10965__$1 = state_10965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10965__$1,20,out,inst_10945);
} else
{if((state_val_10966 === 19))
{var inst_10951 = (state_10965[2]);var state_10965__$1 = state_10965;var statearr_10994_11022 = state_10965__$1;(statearr_10994_11022[2] = inst_10951);
(statearr_10994_11022[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10966 === 20))
{var inst_10936 = (state_10965[13]);var inst_10947 = (state_10965[2]);var inst_10948 = cljs.core.next.call(null,inst_10936);var inst_10922 = inst_10948;var inst_10923 = null;var inst_10924 = 0;var inst_10925 = 0;var state_10965__$1 = (function (){var statearr_10995 = state_10965;(statearr_10995[15] = inst_10947);
(statearr_10995[8] = inst_10922);
(statearr_10995[9] = inst_10924);
(statearr_10995[10] = inst_10923);
(statearr_10995[11] = inst_10925);
return statearr_10995;
})();var statearr_10996_11023 = state_10965__$1;(statearr_10996_11023[2] = null);
(statearr_10996_11023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto__))
;return ((function (switch__6301__auto__,c__6316__auto__){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_11000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11000[0] = state_machine__6302__auto__);
(statearr_11000[1] = 1);
return statearr_11000;
});
var state_machine__6302__auto____1 = (function (state_10965){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_10965);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e11001){if((e11001 instanceof Object))
{var ex__6305__auto__ = e11001;var statearr_11002_11024 = state_10965;(statearr_11002_11024[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11025 = state_10965;
state_10965 = G__11025;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_10965){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_10965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto__))
})();var state__6318__auto__ = (function (){var statearr_11003 = f__6317__auto__.call(null);(statearr_11003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto__);
return statearr_11003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto__))
);
return c__6316__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6316__auto___11106 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___11106){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___11106){
return (function (state_11085){var state_val_11086 = (state_11085[1]);if((state_val_11086 === 1))
{var state_11085__$1 = state_11085;var statearr_11087_11107 = state_11085__$1;(statearr_11087_11107[2] = null);
(statearr_11087_11107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11086 === 2))
{var state_11085__$1 = state_11085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11085__$1,4,from);
} else
{if((state_val_11086 === 3))
{var inst_11083 = (state_11085[2]);var state_11085__$1 = state_11085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11085__$1,inst_11083);
} else
{if((state_val_11086 === 4))
{var inst_11068 = (state_11085[7]);var inst_11068__$1 = (state_11085[2]);var inst_11069 = (inst_11068__$1 == null);var state_11085__$1 = (function (){var statearr_11088 = state_11085;(statearr_11088[7] = inst_11068__$1);
return statearr_11088;
})();if(cljs.core.truth_(inst_11069))
{var statearr_11089_11108 = state_11085__$1;(statearr_11089_11108[1] = 5);
} else
{var statearr_11090_11109 = state_11085__$1;(statearr_11090_11109[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11086 === 5))
{var state_11085__$1 = state_11085;if(cljs.core.truth_(close_QMARK_))
{var statearr_11091_11110 = state_11085__$1;(statearr_11091_11110[1] = 8);
} else
{var statearr_11092_11111 = state_11085__$1;(statearr_11092_11111[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11086 === 6))
{var inst_11068 = (state_11085[7]);var state_11085__$1 = state_11085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11085__$1,11,to,inst_11068);
} else
{if((state_val_11086 === 7))
{var inst_11081 = (state_11085[2]);var state_11085__$1 = state_11085;var statearr_11093_11112 = state_11085__$1;(statearr_11093_11112[2] = inst_11081);
(statearr_11093_11112[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11086 === 8))
{var inst_11072 = cljs.core.async.close_BANG_.call(null,to);var state_11085__$1 = state_11085;var statearr_11094_11113 = state_11085__$1;(statearr_11094_11113[2] = inst_11072);
(statearr_11094_11113[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11086 === 9))
{var state_11085__$1 = state_11085;var statearr_11095_11114 = state_11085__$1;(statearr_11095_11114[2] = null);
(statearr_11095_11114[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11086 === 10))
{var inst_11075 = (state_11085[2]);var state_11085__$1 = state_11085;var statearr_11096_11115 = state_11085__$1;(statearr_11096_11115[2] = inst_11075);
(statearr_11096_11115[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11086 === 11))
{var inst_11078 = (state_11085[2]);var state_11085__$1 = (function (){var statearr_11097 = state_11085;(statearr_11097[8] = inst_11078);
return statearr_11097;
})();var statearr_11098_11116 = state_11085__$1;(statearr_11098_11116[2] = null);
(statearr_11098_11116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___11106))
;return ((function (switch__6301__auto__,c__6316__auto___11106){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_11102 = [null,null,null,null,null,null,null,null,null];(statearr_11102[0] = state_machine__6302__auto__);
(statearr_11102[1] = 1);
return statearr_11102;
});
var state_machine__6302__auto____1 = (function (state_11085){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_11085);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e11103){if((e11103 instanceof Object))
{var ex__6305__auto__ = e11103;var statearr_11104_11117 = state_11085;(statearr_11104_11117[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11085);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11118 = state_11085;
state_11085 = G__11118;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_11085){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_11085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___11106))
})();var state__6318__auto__ = (function (){var statearr_11105 = f__6317__auto__.call(null);(statearr_11105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___11106);
return statearr_11105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___11106))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6316__auto___11205 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___11205,tc,fc){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___11205,tc,fc){
return (function (state_11183){var state_val_11184 = (state_11183[1]);if((state_val_11184 === 1))
{var state_11183__$1 = state_11183;var statearr_11185_11206 = state_11183__$1;(statearr_11185_11206[2] = null);
(statearr_11185_11206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 2))
{var state_11183__$1 = state_11183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11183__$1,4,ch);
} else
{if((state_val_11184 === 3))
{var inst_11181 = (state_11183[2]);var state_11183__$1 = state_11183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11183__$1,inst_11181);
} else
{if((state_val_11184 === 4))
{var inst_11164 = (state_11183[7]);var inst_11164__$1 = (state_11183[2]);var inst_11165 = (inst_11164__$1 == null);var state_11183__$1 = (function (){var statearr_11186 = state_11183;(statearr_11186[7] = inst_11164__$1);
return statearr_11186;
})();if(cljs.core.truth_(inst_11165))
{var statearr_11187_11207 = state_11183__$1;(statearr_11187_11207[1] = 5);
} else
{var statearr_11188_11208 = state_11183__$1;(statearr_11188_11208[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 5))
{var inst_11167 = cljs.core.async.close_BANG_.call(null,tc);var inst_11168 = cljs.core.async.close_BANG_.call(null,fc);var state_11183__$1 = (function (){var statearr_11189 = state_11183;(statearr_11189[8] = inst_11167);
return statearr_11189;
})();var statearr_11190_11209 = state_11183__$1;(statearr_11190_11209[2] = inst_11168);
(statearr_11190_11209[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 6))
{var inst_11164 = (state_11183[7]);var inst_11170 = p.call(null,inst_11164);var state_11183__$1 = state_11183;if(cljs.core.truth_(inst_11170))
{var statearr_11191_11210 = state_11183__$1;(statearr_11191_11210[1] = 9);
} else
{var statearr_11192_11211 = state_11183__$1;(statearr_11192_11211[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 7))
{var inst_11179 = (state_11183[2]);var state_11183__$1 = state_11183;var statearr_11193_11212 = state_11183__$1;(statearr_11193_11212[2] = inst_11179);
(statearr_11193_11212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 8))
{var inst_11176 = (state_11183[2]);var state_11183__$1 = (function (){var statearr_11194 = state_11183;(statearr_11194[9] = inst_11176);
return statearr_11194;
})();var statearr_11195_11213 = state_11183__$1;(statearr_11195_11213[2] = null);
(statearr_11195_11213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 9))
{var state_11183__$1 = state_11183;var statearr_11196_11214 = state_11183__$1;(statearr_11196_11214[2] = tc);
(statearr_11196_11214[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 10))
{var state_11183__$1 = state_11183;var statearr_11197_11215 = state_11183__$1;(statearr_11197_11215[2] = fc);
(statearr_11197_11215[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11184 === 11))
{var inst_11164 = (state_11183[7]);var inst_11174 = (state_11183[2]);var state_11183__$1 = state_11183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11183__$1,8,inst_11174,inst_11164);
} else
{return null;
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
});})(c__6316__auto___11205,tc,fc))
;return ((function (switch__6301__auto__,c__6316__auto___11205,tc,fc){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_11201 = [null,null,null,null,null,null,null,null,null,null];(statearr_11201[0] = state_machine__6302__auto__);
(statearr_11201[1] = 1);
return statearr_11201;
});
var state_machine__6302__auto____1 = (function (state_11183){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_11183);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e11202){if((e11202 instanceof Object))
{var ex__6305__auto__ = e11202;var statearr_11203_11216 = state_11183;(statearr_11203_11216[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11183);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11217 = state_11183;
state_11183 = G__11217;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_11183){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_11183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___11205,tc,fc))
})();var state__6318__auto__ = (function (){var statearr_11204 = f__6317__auto__.call(null);(statearr_11204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___11205);
return statearr_11204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___11205,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6316__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto__){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto__){
return (function (state_11264){var state_val_11265 = (state_11264[1]);if((state_val_11265 === 7))
{var inst_11260 = (state_11264[2]);var state_11264__$1 = state_11264;var statearr_11266_11282 = state_11264__$1;(statearr_11266_11282[2] = inst_11260);
(statearr_11266_11282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11265 === 6))
{var inst_11253 = (state_11264[7]);var inst_11250 = (state_11264[8]);var inst_11257 = f.call(null,inst_11250,inst_11253);var inst_11250__$1 = inst_11257;var state_11264__$1 = (function (){var statearr_11267 = state_11264;(statearr_11267[8] = inst_11250__$1);
return statearr_11267;
})();var statearr_11268_11283 = state_11264__$1;(statearr_11268_11283[2] = null);
(statearr_11268_11283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11265 === 5))
{var inst_11250 = (state_11264[8]);var state_11264__$1 = state_11264;var statearr_11269_11284 = state_11264__$1;(statearr_11269_11284[2] = inst_11250);
(statearr_11269_11284[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11265 === 4))
{var inst_11253 = (state_11264[7]);var inst_11253__$1 = (state_11264[2]);var inst_11254 = (inst_11253__$1 == null);var state_11264__$1 = (function (){var statearr_11270 = state_11264;(statearr_11270[7] = inst_11253__$1);
return statearr_11270;
})();if(cljs.core.truth_(inst_11254))
{var statearr_11271_11285 = state_11264__$1;(statearr_11271_11285[1] = 5);
} else
{var statearr_11272_11286 = state_11264__$1;(statearr_11272_11286[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11265 === 3))
{var inst_11262 = (state_11264[2]);var state_11264__$1 = state_11264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11264__$1,inst_11262);
} else
{if((state_val_11265 === 2))
{var state_11264__$1 = state_11264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11264__$1,4,ch);
} else
{if((state_val_11265 === 1))
{var inst_11250 = init;var state_11264__$1 = (function (){var statearr_11273 = state_11264;(statearr_11273[8] = inst_11250);
return statearr_11273;
})();var statearr_11274_11287 = state_11264__$1;(statearr_11274_11287[2] = null);
(statearr_11274_11287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6316__auto__))
;return ((function (switch__6301__auto__,c__6316__auto__){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_11278 = [null,null,null,null,null,null,null,null,null];(statearr_11278[0] = state_machine__6302__auto__);
(statearr_11278[1] = 1);
return statearr_11278;
});
var state_machine__6302__auto____1 = (function (state_11264){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_11264);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e11279){if((e11279 instanceof Object))
{var ex__6305__auto__ = e11279;var statearr_11280_11288 = state_11264;(statearr_11280_11288[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11289 = state_11264;
state_11264 = G__11289;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_11264){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_11264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto__))
})();var state__6318__auto__ = (function (){var statearr_11281 = f__6317__auto__.call(null);(statearr_11281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto__);
return statearr_11281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto__))
);
return c__6316__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6316__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto__){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto__){
return (function (state_11351){var state_val_11352 = (state_11351[1]);if((state_val_11352 === 1))
{var inst_11331 = cljs.core.seq.call(null,coll);var inst_11332 = inst_11331;var state_11351__$1 = (function (){var statearr_11353 = state_11351;(statearr_11353[7] = inst_11332);
return statearr_11353;
})();var statearr_11354_11372 = state_11351__$1;(statearr_11354_11372[2] = null);
(statearr_11354_11372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 2))
{var inst_11332 = (state_11351[7]);var state_11351__$1 = state_11351;if(cljs.core.truth_(inst_11332))
{var statearr_11355_11373 = state_11351__$1;(statearr_11355_11373[1] = 4);
} else
{var statearr_11356_11374 = state_11351__$1;(statearr_11356_11374[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 3))
{var inst_11349 = (state_11351[2]);var state_11351__$1 = state_11351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11351__$1,inst_11349);
} else
{if((state_val_11352 === 4))
{var inst_11332 = (state_11351[7]);var inst_11335 = cljs.core.first.call(null,inst_11332);var state_11351__$1 = state_11351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11351__$1,7,ch,inst_11335);
} else
{if((state_val_11352 === 5))
{var state_11351__$1 = state_11351;if(cljs.core.truth_(close_QMARK_))
{var statearr_11357_11375 = state_11351__$1;(statearr_11357_11375[1] = 8);
} else
{var statearr_11358_11376 = state_11351__$1;(statearr_11358_11376[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 6))
{var inst_11347 = (state_11351[2]);var state_11351__$1 = state_11351;var statearr_11359_11377 = state_11351__$1;(statearr_11359_11377[2] = inst_11347);
(statearr_11359_11377[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 7))
{var inst_11332 = (state_11351[7]);var inst_11337 = (state_11351[2]);var inst_11338 = cljs.core.next.call(null,inst_11332);var inst_11332__$1 = inst_11338;var state_11351__$1 = (function (){var statearr_11360 = state_11351;(statearr_11360[8] = inst_11337);
(statearr_11360[7] = inst_11332__$1);
return statearr_11360;
})();var statearr_11361_11378 = state_11351__$1;(statearr_11361_11378[2] = null);
(statearr_11361_11378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 8))
{var inst_11342 = cljs.core.async.close_BANG_.call(null,ch);var state_11351__$1 = state_11351;var statearr_11362_11379 = state_11351__$1;(statearr_11362_11379[2] = inst_11342);
(statearr_11362_11379[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 9))
{var state_11351__$1 = state_11351;var statearr_11363_11380 = state_11351__$1;(statearr_11363_11380[2] = null);
(statearr_11363_11380[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11352 === 10))
{var inst_11345 = (state_11351[2]);var state_11351__$1 = state_11351;var statearr_11364_11381 = state_11351__$1;(statearr_11364_11381[2] = inst_11345);
(statearr_11364_11381[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto__))
;return ((function (switch__6301__auto__,c__6316__auto__){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_11368 = [null,null,null,null,null,null,null,null,null];(statearr_11368[0] = state_machine__6302__auto__);
(statearr_11368[1] = 1);
return statearr_11368;
});
var state_machine__6302__auto____1 = (function (state_11351){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_11351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e11369){if((e11369 instanceof Object))
{var ex__6305__auto__ = e11369;var statearr_11370_11382 = state_11351;(statearr_11370_11382[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11351);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11383 = state_11351;
state_11351 = G__11383;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_11351){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_11351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto__))
})();var state__6318__auto__ = (function (){var statearr_11371 = f__6317__auto__.call(null);(statearr_11371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto__);
return statearr_11371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto__))
);
return c__6316__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11385 = {};return obj11385;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3526__auto__ = _;if(and__3526__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4165__auto__ = (((_ == null))?null:_);return (function (){var or__3538__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11387 = {};return obj11387;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11611 = (function (cs,ch,mult,meta11612){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11612 = meta11612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11611.cljs$lang$type = true;
cljs.core.async.t11611.cljs$lang$ctorStr = "cljs.core.async/t11611";
cljs.core.async.t11611.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t11611");
});})(cs))
;
cljs.core.async.t11611.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11611.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11611.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11611.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11611.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11613){var self__ = this;
var _11613__$1 = this;return self__.meta11612;
});})(cs))
;
cljs.core.async.t11611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11613,meta11612__$1){var self__ = this;
var _11613__$1 = this;return (new cljs.core.async.t11611(self__.cs,self__.ch,self__.mult,meta11612__$1));
});})(cs))
;
cljs.core.async.__GT_t11611 = ((function (cs){
return (function __GT_t11611(cs__$1,ch__$1,mult__$1,meta11612){return (new cljs.core.async.t11611(cs__$1,ch__$1,mult__$1,meta11612));
});})(cs))
;
}
return (new cljs.core.async.t11611(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6316__auto___11834 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___11834,cs,m,dchan,dctr,done){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___11834,cs,m,dchan,dctr,done){
return (function (state_11748){var state_val_11749 = (state_11748[1]);if((state_val_11749 === 32))
{var inst_11692 = (state_11748[7]);var inst_11616 = (state_11748[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11748,31,Object,null,30);var inst_11699 = cljs.core.async.put_BANG_.call(null,inst_11692,inst_11616,done);var state_11748__$1 = state_11748;var statearr_11750_11835 = state_11748__$1;(statearr_11750_11835[2] = inst_11699);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 1))
{var state_11748__$1 = state_11748;var statearr_11751_11836 = state_11748__$1;(statearr_11751_11836[2] = null);
(statearr_11751_11836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 33))
{var inst_11705 = (state_11748[9]);var inst_11707 = cljs.core.chunked_seq_QMARK_.call(null,inst_11705);var state_11748__$1 = state_11748;if(inst_11707)
{var statearr_11752_11837 = state_11748__$1;(statearr_11752_11837[1] = 36);
} else
{var statearr_11753_11838 = state_11748__$1;(statearr_11753_11838[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 2))
{var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11748__$1,4,ch);
} else
{if((state_val_11749 === 34))
{var state_11748__$1 = state_11748;var statearr_11754_11839 = state_11748__$1;(statearr_11754_11839[2] = null);
(statearr_11754_11839[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 3))
{var inst_11746 = (state_11748[2]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11748__$1,inst_11746);
} else
{if((state_val_11749 === 35))
{var inst_11730 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11755_11840 = state_11748__$1;(statearr_11755_11840[2] = inst_11730);
(statearr_11755_11840[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 4))
{var inst_11616 = (state_11748[8]);var inst_11616__$1 = (state_11748[2]);var inst_11617 = (inst_11616__$1 == null);var state_11748__$1 = (function (){var statearr_11756 = state_11748;(statearr_11756[8] = inst_11616__$1);
return statearr_11756;
})();if(cljs.core.truth_(inst_11617))
{var statearr_11757_11841 = state_11748__$1;(statearr_11757_11841[1] = 5);
} else
{var statearr_11758_11842 = state_11748__$1;(statearr_11758_11842[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 36))
{var inst_11705 = (state_11748[9]);var inst_11709 = cljs.core.chunk_first.call(null,inst_11705);var inst_11710 = cljs.core.chunk_rest.call(null,inst_11705);var inst_11711 = cljs.core.count.call(null,inst_11709);var inst_11684 = inst_11710;var inst_11685 = inst_11709;var inst_11686 = inst_11711;var inst_11687 = 0;var state_11748__$1 = (function (){var statearr_11759 = state_11748;(statearr_11759[10] = inst_11687);
(statearr_11759[11] = inst_11686);
(statearr_11759[12] = inst_11685);
(statearr_11759[13] = inst_11684);
return statearr_11759;
})();var statearr_11760_11843 = state_11748__$1;(statearr_11760_11843[2] = null);
(statearr_11760_11843[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 5))
{var inst_11623 = cljs.core.deref.call(null,cs);var inst_11624 = cljs.core.seq.call(null,inst_11623);var inst_11625 = inst_11624;var inst_11626 = null;var inst_11627 = 0;var inst_11628 = 0;var state_11748__$1 = (function (){var statearr_11761 = state_11748;(statearr_11761[14] = inst_11626);
(statearr_11761[15] = inst_11625);
(statearr_11761[16] = inst_11628);
(statearr_11761[17] = inst_11627);
return statearr_11761;
})();var statearr_11762_11844 = state_11748__$1;(statearr_11762_11844[2] = null);
(statearr_11762_11844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 37))
{var inst_11705 = (state_11748[9]);var inst_11714 = cljs.core.first.call(null,inst_11705);var state_11748__$1 = (function (){var statearr_11763 = state_11748;(statearr_11763[18] = inst_11714);
return statearr_11763;
})();var statearr_11764_11845 = state_11748__$1;(statearr_11764_11845[2] = null);
(statearr_11764_11845[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 6))
{var inst_11676 = (state_11748[19]);var inst_11675 = cljs.core.deref.call(null,cs);var inst_11676__$1 = cljs.core.keys.call(null,inst_11675);var inst_11677 = cljs.core.count.call(null,inst_11676__$1);var inst_11678 = cljs.core.reset_BANG_.call(null,dctr,inst_11677);var inst_11683 = cljs.core.seq.call(null,inst_11676__$1);var inst_11684 = inst_11683;var inst_11685 = null;var inst_11686 = 0;var inst_11687 = 0;var state_11748__$1 = (function (){var statearr_11765 = state_11748;(statearr_11765[10] = inst_11687);
(statearr_11765[11] = inst_11686);
(statearr_11765[19] = inst_11676__$1);
(statearr_11765[12] = inst_11685);
(statearr_11765[13] = inst_11684);
(statearr_11765[20] = inst_11678);
return statearr_11765;
})();var statearr_11766_11846 = state_11748__$1;(statearr_11766_11846[2] = null);
(statearr_11766_11846[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 38))
{var inst_11727 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11767_11847 = state_11748__$1;(statearr_11767_11847[2] = inst_11727);
(statearr_11767_11847[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 7))
{var inst_11744 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11768_11848 = state_11748__$1;(statearr_11768_11848[2] = inst_11744);
(statearr_11768_11848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 39))
{var inst_11705 = (state_11748[9]);var inst_11723 = (state_11748[2]);var inst_11724 = cljs.core.next.call(null,inst_11705);var inst_11684 = inst_11724;var inst_11685 = null;var inst_11686 = 0;var inst_11687 = 0;var state_11748__$1 = (function (){var statearr_11769 = state_11748;(statearr_11769[10] = inst_11687);
(statearr_11769[21] = inst_11723);
(statearr_11769[11] = inst_11686);
(statearr_11769[12] = inst_11685);
(statearr_11769[13] = inst_11684);
return statearr_11769;
})();var statearr_11770_11849 = state_11748__$1;(statearr_11770_11849[2] = null);
(statearr_11770_11849[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 8))
{var inst_11628 = (state_11748[16]);var inst_11627 = (state_11748[17]);var inst_11630 = (inst_11628 < inst_11627);var inst_11631 = inst_11630;var state_11748__$1 = state_11748;if(cljs.core.truth_(inst_11631))
{var statearr_11771_11850 = state_11748__$1;(statearr_11771_11850[1] = 10);
} else
{var statearr_11772_11851 = state_11748__$1;(statearr_11772_11851[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 40))
{var inst_11714 = (state_11748[18]);var inst_11715 = (state_11748[2]);var inst_11716 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11717 = cljs.core.async.untap_STAR_.call(null,m,inst_11714);var state_11748__$1 = (function (){var statearr_11773 = state_11748;(statearr_11773[22] = inst_11716);
(statearr_11773[23] = inst_11715);
return statearr_11773;
})();var statearr_11774_11852 = state_11748__$1;(statearr_11774_11852[2] = inst_11717);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 9))
{var inst_11673 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11775_11853 = state_11748__$1;(statearr_11775_11853[2] = inst_11673);
(statearr_11775_11853[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 41))
{var inst_11714 = (state_11748[18]);var inst_11616 = (state_11748[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11748,40,Object,null,39);var inst_11721 = cljs.core.async.put_BANG_.call(null,inst_11714,inst_11616,done);var state_11748__$1 = state_11748;var statearr_11776_11854 = state_11748__$1;(statearr_11776_11854[2] = inst_11721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 10))
{var inst_11626 = (state_11748[14]);var inst_11628 = (state_11748[16]);var inst_11634 = cljs.core._nth.call(null,inst_11626,inst_11628);var inst_11635 = cljs.core.nth.call(null,inst_11634,0,null);var inst_11636 = cljs.core.nth.call(null,inst_11634,1,null);var state_11748__$1 = (function (){var statearr_11777 = state_11748;(statearr_11777[24] = inst_11635);
return statearr_11777;
})();if(cljs.core.truth_(inst_11636))
{var statearr_11778_11855 = state_11748__$1;(statearr_11778_11855[1] = 13);
} else
{var statearr_11779_11856 = state_11748__$1;(statearr_11779_11856[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 42))
{var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11748__$1,45,dchan);
} else
{if((state_val_11749 === 11))
{var inst_11625 = (state_11748[15]);var inst_11645 = (state_11748[25]);var inst_11645__$1 = cljs.core.seq.call(null,inst_11625);var state_11748__$1 = (function (){var statearr_11780 = state_11748;(statearr_11780[25] = inst_11645__$1);
return statearr_11780;
})();if(inst_11645__$1)
{var statearr_11781_11857 = state_11748__$1;(statearr_11781_11857[1] = 16);
} else
{var statearr_11782_11858 = state_11748__$1;(statearr_11782_11858[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 43))
{var state_11748__$1 = state_11748;var statearr_11783_11859 = state_11748__$1;(statearr_11783_11859[2] = null);
(statearr_11783_11859[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 12))
{var inst_11671 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11784_11860 = state_11748__$1;(statearr_11784_11860[2] = inst_11671);
(statearr_11784_11860[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 44))
{var inst_11741 = (state_11748[2]);var state_11748__$1 = (function (){var statearr_11785 = state_11748;(statearr_11785[26] = inst_11741);
return statearr_11785;
})();var statearr_11786_11861 = state_11748__$1;(statearr_11786_11861[2] = null);
(statearr_11786_11861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 13))
{var inst_11635 = (state_11748[24]);var inst_11638 = cljs.core.async.close_BANG_.call(null,inst_11635);var state_11748__$1 = state_11748;var statearr_11787_11862 = state_11748__$1;(statearr_11787_11862[2] = inst_11638);
(statearr_11787_11862[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 45))
{var inst_11738 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11791_11863 = state_11748__$1;(statearr_11791_11863[2] = inst_11738);
(statearr_11791_11863[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 14))
{var state_11748__$1 = state_11748;var statearr_11792_11864 = state_11748__$1;(statearr_11792_11864[2] = null);
(statearr_11792_11864[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 15))
{var inst_11626 = (state_11748[14]);var inst_11625 = (state_11748[15]);var inst_11628 = (state_11748[16]);var inst_11627 = (state_11748[17]);var inst_11641 = (state_11748[2]);var inst_11642 = (inst_11628 + 1);var tmp11788 = inst_11626;var tmp11789 = inst_11625;var tmp11790 = inst_11627;var inst_11625__$1 = tmp11789;var inst_11626__$1 = tmp11788;var inst_11627__$1 = tmp11790;var inst_11628__$1 = inst_11642;var state_11748__$1 = (function (){var statearr_11793 = state_11748;(statearr_11793[14] = inst_11626__$1);
(statearr_11793[15] = inst_11625__$1);
(statearr_11793[16] = inst_11628__$1);
(statearr_11793[17] = inst_11627__$1);
(statearr_11793[27] = inst_11641);
return statearr_11793;
})();var statearr_11794_11865 = state_11748__$1;(statearr_11794_11865[2] = null);
(statearr_11794_11865[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 16))
{var inst_11645 = (state_11748[25]);var inst_11647 = cljs.core.chunked_seq_QMARK_.call(null,inst_11645);var state_11748__$1 = state_11748;if(inst_11647)
{var statearr_11795_11866 = state_11748__$1;(statearr_11795_11866[1] = 19);
} else
{var statearr_11796_11867 = state_11748__$1;(statearr_11796_11867[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 17))
{var state_11748__$1 = state_11748;var statearr_11797_11868 = state_11748__$1;(statearr_11797_11868[2] = null);
(statearr_11797_11868[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 18))
{var inst_11669 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11798_11869 = state_11748__$1;(statearr_11798_11869[2] = inst_11669);
(statearr_11798_11869[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 19))
{var inst_11645 = (state_11748[25]);var inst_11649 = cljs.core.chunk_first.call(null,inst_11645);var inst_11650 = cljs.core.chunk_rest.call(null,inst_11645);var inst_11651 = cljs.core.count.call(null,inst_11649);var inst_11625 = inst_11650;var inst_11626 = inst_11649;var inst_11627 = inst_11651;var inst_11628 = 0;var state_11748__$1 = (function (){var statearr_11799 = state_11748;(statearr_11799[14] = inst_11626);
(statearr_11799[15] = inst_11625);
(statearr_11799[16] = inst_11628);
(statearr_11799[17] = inst_11627);
return statearr_11799;
})();var statearr_11800_11870 = state_11748__$1;(statearr_11800_11870[2] = null);
(statearr_11800_11870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 20))
{var inst_11645 = (state_11748[25]);var inst_11655 = cljs.core.first.call(null,inst_11645);var inst_11656 = cljs.core.nth.call(null,inst_11655,0,null);var inst_11657 = cljs.core.nth.call(null,inst_11655,1,null);var state_11748__$1 = (function (){var statearr_11801 = state_11748;(statearr_11801[28] = inst_11656);
return statearr_11801;
})();if(cljs.core.truth_(inst_11657))
{var statearr_11802_11871 = state_11748__$1;(statearr_11802_11871[1] = 22);
} else
{var statearr_11803_11872 = state_11748__$1;(statearr_11803_11872[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 21))
{var inst_11666 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11804_11873 = state_11748__$1;(statearr_11804_11873[2] = inst_11666);
(statearr_11804_11873[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 22))
{var inst_11656 = (state_11748[28]);var inst_11659 = cljs.core.async.close_BANG_.call(null,inst_11656);var state_11748__$1 = state_11748;var statearr_11805_11874 = state_11748__$1;(statearr_11805_11874[2] = inst_11659);
(statearr_11805_11874[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 23))
{var state_11748__$1 = state_11748;var statearr_11806_11875 = state_11748__$1;(statearr_11806_11875[2] = null);
(statearr_11806_11875[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 24))
{var inst_11645 = (state_11748[25]);var inst_11662 = (state_11748[2]);var inst_11663 = cljs.core.next.call(null,inst_11645);var inst_11625 = inst_11663;var inst_11626 = null;var inst_11627 = 0;var inst_11628 = 0;var state_11748__$1 = (function (){var statearr_11807 = state_11748;(statearr_11807[14] = inst_11626);
(statearr_11807[15] = inst_11625);
(statearr_11807[16] = inst_11628);
(statearr_11807[17] = inst_11627);
(statearr_11807[29] = inst_11662);
return statearr_11807;
})();var statearr_11808_11876 = state_11748__$1;(statearr_11808_11876[2] = null);
(statearr_11808_11876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 25))
{var inst_11687 = (state_11748[10]);var inst_11686 = (state_11748[11]);var inst_11689 = (inst_11687 < inst_11686);var inst_11690 = inst_11689;var state_11748__$1 = state_11748;if(cljs.core.truth_(inst_11690))
{var statearr_11809_11877 = state_11748__$1;(statearr_11809_11877[1] = 27);
} else
{var statearr_11810_11878 = state_11748__$1;(statearr_11810_11878[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 26))
{var inst_11676 = (state_11748[19]);var inst_11734 = (state_11748[2]);var inst_11735 = cljs.core.seq.call(null,inst_11676);var state_11748__$1 = (function (){var statearr_11811 = state_11748;(statearr_11811[30] = inst_11734);
return statearr_11811;
})();if(inst_11735)
{var statearr_11812_11879 = state_11748__$1;(statearr_11812_11879[1] = 42);
} else
{var statearr_11813_11880 = state_11748__$1;(statearr_11813_11880[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 27))
{var inst_11687 = (state_11748[10]);var inst_11685 = (state_11748[12]);var inst_11692 = cljs.core._nth.call(null,inst_11685,inst_11687);var state_11748__$1 = (function (){var statearr_11814 = state_11748;(statearr_11814[7] = inst_11692);
return statearr_11814;
})();var statearr_11815_11881 = state_11748__$1;(statearr_11815_11881[2] = null);
(statearr_11815_11881[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 28))
{var inst_11705 = (state_11748[9]);var inst_11684 = (state_11748[13]);var inst_11705__$1 = cljs.core.seq.call(null,inst_11684);var state_11748__$1 = (function (){var statearr_11819 = state_11748;(statearr_11819[9] = inst_11705__$1);
return statearr_11819;
})();if(inst_11705__$1)
{var statearr_11820_11882 = state_11748__$1;(statearr_11820_11882[1] = 33);
} else
{var statearr_11821_11883 = state_11748__$1;(statearr_11821_11883[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 29))
{var inst_11732 = (state_11748[2]);var state_11748__$1 = state_11748;var statearr_11822_11884 = state_11748__$1;(statearr_11822_11884[2] = inst_11732);
(statearr_11822_11884[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 30))
{var inst_11687 = (state_11748[10]);var inst_11686 = (state_11748[11]);var inst_11685 = (state_11748[12]);var inst_11684 = (state_11748[13]);var inst_11701 = (state_11748[2]);var inst_11702 = (inst_11687 + 1);var tmp11816 = inst_11686;var tmp11817 = inst_11685;var tmp11818 = inst_11684;var inst_11684__$1 = tmp11818;var inst_11685__$1 = tmp11817;var inst_11686__$1 = tmp11816;var inst_11687__$1 = inst_11702;var state_11748__$1 = (function (){var statearr_11823 = state_11748;(statearr_11823[10] = inst_11687__$1);
(statearr_11823[11] = inst_11686__$1);
(statearr_11823[12] = inst_11685__$1);
(statearr_11823[13] = inst_11684__$1);
(statearr_11823[31] = inst_11701);
return statearr_11823;
})();var statearr_11824_11885 = state_11748__$1;(statearr_11824_11885[2] = null);
(statearr_11824_11885[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11749 === 31))
{var inst_11692 = (state_11748[7]);var inst_11693 = (state_11748[2]);var inst_11694 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11695 = cljs.core.async.untap_STAR_.call(null,m,inst_11692);var state_11748__$1 = (function (){var statearr_11825 = state_11748;(statearr_11825[32] = inst_11693);
(statearr_11825[33] = inst_11694);
return statearr_11825;
})();var statearr_11826_11886 = state_11748__$1;(statearr_11826_11886[2] = inst_11695);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___11834,cs,m,dchan,dctr,done))
;return ((function (switch__6301__auto__,c__6316__auto___11834,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_11830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11830[0] = state_machine__6302__auto__);
(statearr_11830[1] = 1);
return statearr_11830;
});
var state_machine__6302__auto____1 = (function (state_11748){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_11748);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e11831){if((e11831 instanceof Object))
{var ex__6305__auto__ = e11831;var statearr_11832_11887 = state_11748;(statearr_11832_11887[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11888 = state_11748;
state_11748 = G__11888;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_11748){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_11748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___11834,cs,m,dchan,dctr,done))
})();var state__6318__auto__ = (function (){var statearr_11833 = f__6317__auto__.call(null);(statearr_11833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___11834);
return statearr_11833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___11834,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11890 = {};return obj11890;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12000 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12000 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12001){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12001 = meta12001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12000.cljs$lang$type = true;
cljs.core.async.t12000.cljs$lang$ctorStr = "cljs.core.async/t12000";
cljs.core.async.t12000.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t12000");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12000.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12002){var self__ = this;
var _12002__$1 = this;return self__.meta12001;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12002,meta12001__$1){var self__ = this;
var _12002__$1 = this;return (new cljs.core.async.t12000(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12001__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12000 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12000(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12001){return (new cljs.core.async.t12000(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12001));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12000(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6316__auto___12109 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___12109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___12109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12067){var state_val_12068 = (state_12067[1]);if((state_val_12068 === 1))
{var inst_12006 = (state_12067[7]);var inst_12006__$1 = calc_state.call(null);var inst_12007 = cljs.core.seq_QMARK_.call(null,inst_12006__$1);var state_12067__$1 = (function (){var statearr_12069 = state_12067;(statearr_12069[7] = inst_12006__$1);
return statearr_12069;
})();if(inst_12007)
{var statearr_12070_12110 = state_12067__$1;(statearr_12070_12110[1] = 2);
} else
{var statearr_12071_12111 = state_12067__$1;(statearr_12071_12111[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 2))
{var inst_12006 = (state_12067[7]);var inst_12009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12006);var state_12067__$1 = state_12067;var statearr_12072_12112 = state_12067__$1;(statearr_12072_12112[2] = inst_12009);
(statearr_12072_12112[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 3))
{var inst_12006 = (state_12067[7]);var state_12067__$1 = state_12067;var statearr_12073_12113 = state_12067__$1;(statearr_12073_12113[2] = inst_12006);
(statearr_12073_12113[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 4))
{var inst_12006 = (state_12067[7]);var inst_12012 = (state_12067[2]);var inst_12013 = cljs.core.get.call(null,inst_12012,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12014 = cljs.core.get.call(null,inst_12012,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12015 = cljs.core.get.call(null,inst_12012,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12016 = inst_12006;var state_12067__$1 = (function (){var statearr_12074 = state_12067;(statearr_12074[8] = inst_12016);
(statearr_12074[9] = inst_12015);
(statearr_12074[10] = inst_12014);
(statearr_12074[11] = inst_12013);
return statearr_12074;
})();var statearr_12075_12114 = state_12067__$1;(statearr_12075_12114[2] = null);
(statearr_12075_12114[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 5))
{var inst_12016 = (state_12067[8]);var inst_12019 = cljs.core.seq_QMARK_.call(null,inst_12016);var state_12067__$1 = state_12067;if(inst_12019)
{var statearr_12076_12115 = state_12067__$1;(statearr_12076_12115[1] = 7);
} else
{var statearr_12077_12116 = state_12067__$1;(statearr_12077_12116[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 6))
{var inst_12065 = (state_12067[2]);var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12067__$1,inst_12065);
} else
{if((state_val_12068 === 7))
{var inst_12016 = (state_12067[8]);var inst_12021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12016);var state_12067__$1 = state_12067;var statearr_12078_12117 = state_12067__$1;(statearr_12078_12117[2] = inst_12021);
(statearr_12078_12117[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 8))
{var inst_12016 = (state_12067[8]);var state_12067__$1 = state_12067;var statearr_12079_12118 = state_12067__$1;(statearr_12079_12118[2] = inst_12016);
(statearr_12079_12118[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 9))
{var inst_12024 = (state_12067[12]);var inst_12024__$1 = (state_12067[2]);var inst_12025 = cljs.core.get.call(null,inst_12024__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12026 = cljs.core.get.call(null,inst_12024__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12027 = cljs.core.get.call(null,inst_12024__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12067__$1 = (function (){var statearr_12080 = state_12067;(statearr_12080[13] = inst_12027);
(statearr_12080[14] = inst_12026);
(statearr_12080[12] = inst_12024__$1);
return statearr_12080;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12067__$1,10,inst_12025);
} else
{if((state_val_12068 === 10))
{var inst_12031 = (state_12067[15]);var inst_12032 = (state_12067[16]);var inst_12030 = (state_12067[2]);var inst_12031__$1 = cljs.core.nth.call(null,inst_12030,0,null);var inst_12032__$1 = cljs.core.nth.call(null,inst_12030,1,null);var inst_12033 = (inst_12031__$1 == null);var inst_12034 = cljs.core._EQ_.call(null,inst_12032__$1,change);var inst_12035 = (inst_12033) || (inst_12034);var state_12067__$1 = (function (){var statearr_12081 = state_12067;(statearr_12081[15] = inst_12031__$1);
(statearr_12081[16] = inst_12032__$1);
return statearr_12081;
})();if(cljs.core.truth_(inst_12035))
{var statearr_12082_12119 = state_12067__$1;(statearr_12082_12119[1] = 11);
} else
{var statearr_12083_12120 = state_12067__$1;(statearr_12083_12120[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 11))
{var inst_12031 = (state_12067[15]);var inst_12037 = (inst_12031 == null);var state_12067__$1 = state_12067;if(cljs.core.truth_(inst_12037))
{var statearr_12084_12121 = state_12067__$1;(statearr_12084_12121[1] = 14);
} else
{var statearr_12085_12122 = state_12067__$1;(statearr_12085_12122[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 12))
{var inst_12032 = (state_12067[16]);var inst_12027 = (state_12067[13]);var inst_12046 = (state_12067[17]);var inst_12046__$1 = inst_12027.call(null,inst_12032);var state_12067__$1 = (function (){var statearr_12086 = state_12067;(statearr_12086[17] = inst_12046__$1);
return statearr_12086;
})();if(cljs.core.truth_(inst_12046__$1))
{var statearr_12087_12123 = state_12067__$1;(statearr_12087_12123[1] = 17);
} else
{var statearr_12088_12124 = state_12067__$1;(statearr_12088_12124[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 13))
{var inst_12063 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12089_12125 = state_12067__$1;(statearr_12089_12125[2] = inst_12063);
(statearr_12089_12125[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 14))
{var inst_12032 = (state_12067[16]);var inst_12039 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12032);var state_12067__$1 = state_12067;var statearr_12090_12126 = state_12067__$1;(statearr_12090_12126[2] = inst_12039);
(statearr_12090_12126[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 15))
{var state_12067__$1 = state_12067;var statearr_12091_12127 = state_12067__$1;(statearr_12091_12127[2] = null);
(statearr_12091_12127[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 16))
{var inst_12042 = (state_12067[2]);var inst_12043 = calc_state.call(null);var inst_12016 = inst_12043;var state_12067__$1 = (function (){var statearr_12092 = state_12067;(statearr_12092[18] = inst_12042);
(statearr_12092[8] = inst_12016);
return statearr_12092;
})();var statearr_12093_12128 = state_12067__$1;(statearr_12093_12128[2] = null);
(statearr_12093_12128[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 17))
{var inst_12046 = (state_12067[17]);var state_12067__$1 = state_12067;var statearr_12094_12129 = state_12067__$1;(statearr_12094_12129[2] = inst_12046);
(statearr_12094_12129[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 18))
{var inst_12032 = (state_12067[16]);var inst_12027 = (state_12067[13]);var inst_12026 = (state_12067[14]);var inst_12049 = cljs.core.empty_QMARK_.call(null,inst_12027);var inst_12050 = inst_12026.call(null,inst_12032);var inst_12051 = cljs.core.not.call(null,inst_12050);var inst_12052 = (inst_12049) && (inst_12051);var state_12067__$1 = state_12067;var statearr_12095_12130 = state_12067__$1;(statearr_12095_12130[2] = inst_12052);
(statearr_12095_12130[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 19))
{var inst_12054 = (state_12067[2]);var state_12067__$1 = state_12067;if(cljs.core.truth_(inst_12054))
{var statearr_12096_12131 = state_12067__$1;(statearr_12096_12131[1] = 20);
} else
{var statearr_12097_12132 = state_12067__$1;(statearr_12097_12132[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 20))
{var inst_12031 = (state_12067[15]);var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12067__$1,23,out,inst_12031);
} else
{if((state_val_12068 === 21))
{var state_12067__$1 = state_12067;var statearr_12098_12133 = state_12067__$1;(statearr_12098_12133[2] = null);
(statearr_12098_12133[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 22))
{var inst_12024 = (state_12067[12]);var inst_12060 = (state_12067[2]);var inst_12016 = inst_12024;var state_12067__$1 = (function (){var statearr_12099 = state_12067;(statearr_12099[19] = inst_12060);
(statearr_12099[8] = inst_12016);
return statearr_12099;
})();var statearr_12100_12134 = state_12067__$1;(statearr_12100_12134[2] = null);
(statearr_12100_12134[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12068 === 23))
{var inst_12057 = (state_12067[2]);var state_12067__$1 = state_12067;var statearr_12101_12135 = state_12067__$1;(statearr_12101_12135[2] = inst_12057);
(statearr_12101_12135[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___12109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6301__auto__,c__6316__auto___12109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_12105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12105[0] = state_machine__6302__auto__);
(statearr_12105[1] = 1);
return statearr_12105;
});
var state_machine__6302__auto____1 = (function (state_12067){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_12067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e12106){if((e12106 instanceof Object))
{var ex__6305__auto__ = e12106;var statearr_12107_12136 = state_12067;(statearr_12107_12136[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12137 = state_12067;
state_12067 = G__12137;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_12067){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_12067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___12109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6318__auto__ = (function (){var statearr_12108 = f__6317__auto__.call(null);(statearr_12108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___12109);
return statearr_12108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___12109,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12139 = {};return obj12139;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3538__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3538__auto__,mults){
return (function (p1__12140_SHARP_){if(cljs.core.truth_(p1__12140_SHARP_.call(null,topic)))
{return p1__12140_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12140_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3538__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12265 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12265 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12266){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12266 = meta12266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12265.cljs$lang$type = true;
cljs.core.async.t12265.cljs$lang$ctorStr = "cljs.core.async/t12265";
cljs.core.async.t12265.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t12265");
});})(mults,ensure_mult))
;
cljs.core.async.t12265.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12265.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12265.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12265.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12267){var self__ = this;
var _12267__$1 = this;return self__.meta12266;
});})(mults,ensure_mult))
;
cljs.core.async.t12265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12267,meta12266__$1){var self__ = this;
var _12267__$1 = this;return (new cljs.core.async.t12265(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12266__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12265 = ((function (mults,ensure_mult){
return (function __GT_t12265(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12266){return (new cljs.core.async.t12265(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12266));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12265(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6316__auto___12389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___12389,mults,ensure_mult,p){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___12389,mults,ensure_mult,p){
return (function (state_12341){var state_val_12342 = (state_12341[1]);if((state_val_12342 === 1))
{var state_12341__$1 = state_12341;var statearr_12343_12390 = state_12341__$1;(statearr_12343_12390[2] = null);
(statearr_12343_12390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 2))
{var state_12341__$1 = state_12341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12341__$1,4,ch);
} else
{if((state_val_12342 === 3))
{var inst_12339 = (state_12341[2]);var state_12341__$1 = state_12341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12341__$1,inst_12339);
} else
{if((state_val_12342 === 4))
{var inst_12270 = (state_12341[7]);var inst_12270__$1 = (state_12341[2]);var inst_12271 = (inst_12270__$1 == null);var state_12341__$1 = (function (){var statearr_12344 = state_12341;(statearr_12344[7] = inst_12270__$1);
return statearr_12344;
})();if(cljs.core.truth_(inst_12271))
{var statearr_12345_12391 = state_12341__$1;(statearr_12345_12391[1] = 5);
} else
{var statearr_12346_12392 = state_12341__$1;(statearr_12346_12392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 5))
{var inst_12277 = cljs.core.deref.call(null,mults);var inst_12278 = cljs.core.vals.call(null,inst_12277);var inst_12279 = cljs.core.seq.call(null,inst_12278);var inst_12280 = inst_12279;var inst_12281 = null;var inst_12282 = 0;var inst_12283 = 0;var state_12341__$1 = (function (){var statearr_12347 = state_12341;(statearr_12347[8] = inst_12281);
(statearr_12347[9] = inst_12280);
(statearr_12347[10] = inst_12283);
(statearr_12347[11] = inst_12282);
return statearr_12347;
})();var statearr_12348_12393 = state_12341__$1;(statearr_12348_12393[2] = null);
(statearr_12348_12393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 6))
{var inst_12318 = (state_12341[12]);var inst_12270 = (state_12341[7]);var inst_12320 = (state_12341[13]);var inst_12318__$1 = topic_fn.call(null,inst_12270);var inst_12319 = cljs.core.deref.call(null,mults);var inst_12320__$1 = cljs.core.get.call(null,inst_12319,inst_12318__$1);var state_12341__$1 = (function (){var statearr_12349 = state_12341;(statearr_12349[12] = inst_12318__$1);
(statearr_12349[13] = inst_12320__$1);
return statearr_12349;
})();if(cljs.core.truth_(inst_12320__$1))
{var statearr_12350_12394 = state_12341__$1;(statearr_12350_12394[1] = 19);
} else
{var statearr_12351_12395 = state_12341__$1;(statearr_12351_12395[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 7))
{var inst_12337 = (state_12341[2]);var state_12341__$1 = state_12341;var statearr_12352_12396 = state_12341__$1;(statearr_12352_12396[2] = inst_12337);
(statearr_12352_12396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 8))
{var inst_12283 = (state_12341[10]);var inst_12282 = (state_12341[11]);var inst_12285 = (inst_12283 < inst_12282);var inst_12286 = inst_12285;var state_12341__$1 = state_12341;if(cljs.core.truth_(inst_12286))
{var statearr_12356_12397 = state_12341__$1;(statearr_12356_12397[1] = 10);
} else
{var statearr_12357_12398 = state_12341__$1;(statearr_12357_12398[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 9))
{var inst_12316 = (state_12341[2]);var state_12341__$1 = state_12341;var statearr_12358_12399 = state_12341__$1;(statearr_12358_12399[2] = inst_12316);
(statearr_12358_12399[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 10))
{var inst_12281 = (state_12341[8]);var inst_12280 = (state_12341[9]);var inst_12283 = (state_12341[10]);var inst_12282 = (state_12341[11]);var inst_12288 = cljs.core._nth.call(null,inst_12281,inst_12283);var inst_12289 = cljs.core.async.muxch_STAR_.call(null,inst_12288);var inst_12290 = cljs.core.async.close_BANG_.call(null,inst_12289);var inst_12291 = (inst_12283 + 1);var tmp12353 = inst_12281;var tmp12354 = inst_12280;var tmp12355 = inst_12282;var inst_12280__$1 = tmp12354;var inst_12281__$1 = tmp12353;var inst_12282__$1 = tmp12355;var inst_12283__$1 = inst_12291;var state_12341__$1 = (function (){var statearr_12359 = state_12341;(statearr_12359[14] = inst_12290);
(statearr_12359[8] = inst_12281__$1);
(statearr_12359[9] = inst_12280__$1);
(statearr_12359[10] = inst_12283__$1);
(statearr_12359[11] = inst_12282__$1);
return statearr_12359;
})();var statearr_12360_12400 = state_12341__$1;(statearr_12360_12400[2] = null);
(statearr_12360_12400[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 11))
{var inst_12280 = (state_12341[9]);var inst_12294 = (state_12341[15]);var inst_12294__$1 = cljs.core.seq.call(null,inst_12280);var state_12341__$1 = (function (){var statearr_12361 = state_12341;(statearr_12361[15] = inst_12294__$1);
return statearr_12361;
})();if(inst_12294__$1)
{var statearr_12362_12401 = state_12341__$1;(statearr_12362_12401[1] = 13);
} else
{var statearr_12363_12402 = state_12341__$1;(statearr_12363_12402[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 12))
{var inst_12314 = (state_12341[2]);var state_12341__$1 = state_12341;var statearr_12364_12403 = state_12341__$1;(statearr_12364_12403[2] = inst_12314);
(statearr_12364_12403[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 13))
{var inst_12294 = (state_12341[15]);var inst_12296 = cljs.core.chunked_seq_QMARK_.call(null,inst_12294);var state_12341__$1 = state_12341;if(inst_12296)
{var statearr_12365_12404 = state_12341__$1;(statearr_12365_12404[1] = 16);
} else
{var statearr_12366_12405 = state_12341__$1;(statearr_12366_12405[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 14))
{var state_12341__$1 = state_12341;var statearr_12367_12406 = state_12341__$1;(statearr_12367_12406[2] = null);
(statearr_12367_12406[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 15))
{var inst_12312 = (state_12341[2]);var state_12341__$1 = state_12341;var statearr_12368_12407 = state_12341__$1;(statearr_12368_12407[2] = inst_12312);
(statearr_12368_12407[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 16))
{var inst_12294 = (state_12341[15]);var inst_12298 = cljs.core.chunk_first.call(null,inst_12294);var inst_12299 = cljs.core.chunk_rest.call(null,inst_12294);var inst_12300 = cljs.core.count.call(null,inst_12298);var inst_12280 = inst_12299;var inst_12281 = inst_12298;var inst_12282 = inst_12300;var inst_12283 = 0;var state_12341__$1 = (function (){var statearr_12369 = state_12341;(statearr_12369[8] = inst_12281);
(statearr_12369[9] = inst_12280);
(statearr_12369[10] = inst_12283);
(statearr_12369[11] = inst_12282);
return statearr_12369;
})();var statearr_12370_12408 = state_12341__$1;(statearr_12370_12408[2] = null);
(statearr_12370_12408[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 17))
{var inst_12294 = (state_12341[15]);var inst_12303 = cljs.core.first.call(null,inst_12294);var inst_12304 = cljs.core.async.muxch_STAR_.call(null,inst_12303);var inst_12305 = cljs.core.async.close_BANG_.call(null,inst_12304);var inst_12306 = cljs.core.next.call(null,inst_12294);var inst_12280 = inst_12306;var inst_12281 = null;var inst_12282 = 0;var inst_12283 = 0;var state_12341__$1 = (function (){var statearr_12371 = state_12341;(statearr_12371[16] = inst_12305);
(statearr_12371[8] = inst_12281);
(statearr_12371[9] = inst_12280);
(statearr_12371[10] = inst_12283);
(statearr_12371[11] = inst_12282);
return statearr_12371;
})();var statearr_12372_12409 = state_12341__$1;(statearr_12372_12409[2] = null);
(statearr_12372_12409[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 18))
{var inst_12309 = (state_12341[2]);var state_12341__$1 = state_12341;var statearr_12373_12410 = state_12341__$1;(statearr_12373_12410[2] = inst_12309);
(statearr_12373_12410[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 19))
{var state_12341__$1 = state_12341;var statearr_12374_12411 = state_12341__$1;(statearr_12374_12411[2] = null);
(statearr_12374_12411[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 20))
{var state_12341__$1 = state_12341;var statearr_12375_12412 = state_12341__$1;(statearr_12375_12412[2] = null);
(statearr_12375_12412[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 21))
{var inst_12334 = (state_12341[2]);var state_12341__$1 = (function (){var statearr_12376 = state_12341;(statearr_12376[17] = inst_12334);
return statearr_12376;
})();var statearr_12377_12413 = state_12341__$1;(statearr_12377_12413[2] = null);
(statearr_12377_12413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 22))
{var inst_12331 = (state_12341[2]);var state_12341__$1 = state_12341;var statearr_12378_12414 = state_12341__$1;(statearr_12378_12414[2] = inst_12331);
(statearr_12378_12414[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 23))
{var inst_12318 = (state_12341[12]);var inst_12322 = (state_12341[2]);var inst_12323 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12318);var state_12341__$1 = (function (){var statearr_12379 = state_12341;(statearr_12379[18] = inst_12322);
return statearr_12379;
})();var statearr_12380_12415 = state_12341__$1;(statearr_12380_12415[2] = inst_12323);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12341__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12342 === 24))
{var inst_12270 = (state_12341[7]);var inst_12320 = (state_12341[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12341,23,Object,null,22);var inst_12327 = cljs.core.async.muxch_STAR_.call(null,inst_12320);var state_12341__$1 = state_12341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12341__$1,25,inst_12327,inst_12270);
} else
{if((state_val_12342 === 25))
{var inst_12329 = (state_12341[2]);var state_12341__$1 = state_12341;var statearr_12381_12416 = state_12341__$1;(statearr_12381_12416[2] = inst_12329);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12341__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___12389,mults,ensure_mult,p))
;return ((function (switch__6301__auto__,c__6316__auto___12389,mults,ensure_mult,p){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_12385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12385[0] = state_machine__6302__auto__);
(statearr_12385[1] = 1);
return statearr_12385;
});
var state_machine__6302__auto____1 = (function (state_12341){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_12341);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e12386){if((e12386 instanceof Object))
{var ex__6305__auto__ = e12386;var statearr_12387_12417 = state_12341;(statearr_12387_12417[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12341);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12418 = state_12341;
state_12341 = G__12418;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_12341){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_12341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___12389,mults,ensure_mult,p))
})();var state__6318__auto__ = (function (){var statearr_12388 = f__6317__auto__.call(null);(statearr_12388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___12389);
return statearr_12388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___12389,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6316__auto___12555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___12555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___12555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12525){var state_val_12526 = (state_12525[1]);if((state_val_12526 === 1))
{var state_12525__$1 = state_12525;var statearr_12527_12556 = state_12525__$1;(statearr_12527_12556[2] = null);
(statearr_12527_12556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 2))
{var inst_12488 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12489 = 0;var state_12525__$1 = (function (){var statearr_12528 = state_12525;(statearr_12528[7] = inst_12489);
(statearr_12528[8] = inst_12488);
return statearr_12528;
})();var statearr_12529_12557 = state_12525__$1;(statearr_12529_12557[2] = null);
(statearr_12529_12557[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 3))
{var inst_12523 = (state_12525[2]);var state_12525__$1 = state_12525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12525__$1,inst_12523);
} else
{if((state_val_12526 === 4))
{var inst_12489 = (state_12525[7]);var inst_12491 = (inst_12489 < cnt);var state_12525__$1 = state_12525;if(cljs.core.truth_(inst_12491))
{var statearr_12530_12558 = state_12525__$1;(statearr_12530_12558[1] = 6);
} else
{var statearr_12531_12559 = state_12525__$1;(statearr_12531_12559[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 5))
{var inst_12509 = (state_12525[2]);var state_12525__$1 = (function (){var statearr_12532 = state_12525;(statearr_12532[9] = inst_12509);
return statearr_12532;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12525__$1,12,dchan);
} else
{if((state_val_12526 === 6))
{var state_12525__$1 = state_12525;var statearr_12533_12560 = state_12525__$1;(statearr_12533_12560[2] = null);
(statearr_12533_12560[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 7))
{var state_12525__$1 = state_12525;var statearr_12534_12561 = state_12525__$1;(statearr_12534_12561[2] = null);
(statearr_12534_12561[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 8))
{var inst_12507 = (state_12525[2]);var state_12525__$1 = state_12525;var statearr_12535_12562 = state_12525__$1;(statearr_12535_12562[2] = inst_12507);
(statearr_12535_12562[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 9))
{var inst_12489 = (state_12525[7]);var inst_12502 = (state_12525[2]);var inst_12503 = (inst_12489 + 1);var inst_12489__$1 = inst_12503;var state_12525__$1 = (function (){var statearr_12536 = state_12525;(statearr_12536[10] = inst_12502);
(statearr_12536[7] = inst_12489__$1);
return statearr_12536;
})();var statearr_12537_12563 = state_12525__$1;(statearr_12537_12563[2] = null);
(statearr_12537_12563[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 10))
{var inst_12493 = (state_12525[2]);var inst_12494 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12525__$1 = (function (){var statearr_12538 = state_12525;(statearr_12538[11] = inst_12493);
return statearr_12538;
})();var statearr_12539_12564 = state_12525__$1;(statearr_12539_12564[2] = inst_12494);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 11))
{var inst_12489 = (state_12525[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12525,10,Object,null,9);var inst_12498 = chs__$1.call(null,inst_12489);var inst_12499 = done.call(null,inst_12489);var inst_12500 = cljs.core.async.take_BANG_.call(null,inst_12498,inst_12499);var state_12525__$1 = state_12525;var statearr_12540_12565 = state_12525__$1;(statearr_12540_12565[2] = inst_12500);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 12))
{var inst_12511 = (state_12525[12]);var inst_12511__$1 = (state_12525[2]);var inst_12512 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12511__$1);var state_12525__$1 = (function (){var statearr_12541 = state_12525;(statearr_12541[12] = inst_12511__$1);
return statearr_12541;
})();if(cljs.core.truth_(inst_12512))
{var statearr_12542_12566 = state_12525__$1;(statearr_12542_12566[1] = 13);
} else
{var statearr_12543_12567 = state_12525__$1;(statearr_12543_12567[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 13))
{var inst_12514 = cljs.core.async.close_BANG_.call(null,out);var state_12525__$1 = state_12525;var statearr_12544_12568 = state_12525__$1;(statearr_12544_12568[2] = inst_12514);
(statearr_12544_12568[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 14))
{var inst_12511 = (state_12525[12]);var inst_12516 = cljs.core.apply.call(null,f,inst_12511);var state_12525__$1 = state_12525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12525__$1,16,out,inst_12516);
} else
{if((state_val_12526 === 15))
{var inst_12521 = (state_12525[2]);var state_12525__$1 = state_12525;var statearr_12545_12569 = state_12525__$1;(statearr_12545_12569[2] = inst_12521);
(statearr_12545_12569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12526 === 16))
{var inst_12518 = (state_12525[2]);var state_12525__$1 = (function (){var statearr_12546 = state_12525;(statearr_12546[13] = inst_12518);
return statearr_12546;
})();var statearr_12547_12570 = state_12525__$1;(statearr_12547_12570[2] = null);
(statearr_12547_12570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___12555,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6301__auto__,c__6316__auto___12555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_12551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12551[0] = state_machine__6302__auto__);
(statearr_12551[1] = 1);
return statearr_12551;
});
var state_machine__6302__auto____1 = (function (state_12525){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_12525);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e12552){if((e12552 instanceof Object))
{var ex__6305__auto__ = e12552;var statearr_12553_12571 = state_12525;(statearr_12553_12571[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12572 = state_12525;
state_12525 = G__12572;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_12525){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_12525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___12555,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6318__auto__ = (function (){var statearr_12554 = f__6317__auto__.call(null);(statearr_12554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___12555);
return statearr_12554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___12555,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6316__auto___12680 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___12680,out){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___12680,out){
return (function (state_12656){var state_val_12657 = (state_12656[1]);if((state_val_12657 === 1))
{var inst_12627 = cljs.core.vec.call(null,chs);var inst_12628 = inst_12627;var state_12656__$1 = (function (){var statearr_12658 = state_12656;(statearr_12658[7] = inst_12628);
return statearr_12658;
})();var statearr_12659_12681 = state_12656__$1;(statearr_12659_12681[2] = null);
(statearr_12659_12681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12657 === 2))
{var inst_12628 = (state_12656[7]);var inst_12630 = cljs.core.count.call(null,inst_12628);var inst_12631 = (inst_12630 > 0);var state_12656__$1 = state_12656;if(cljs.core.truth_(inst_12631))
{var statearr_12660_12682 = state_12656__$1;(statearr_12660_12682[1] = 4);
} else
{var statearr_12661_12683 = state_12656__$1;(statearr_12661_12683[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12657 === 3))
{var inst_12654 = (state_12656[2]);var state_12656__$1 = state_12656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12656__$1,inst_12654);
} else
{if((state_val_12657 === 4))
{var inst_12628 = (state_12656[7]);var state_12656__$1 = state_12656;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12656__$1,7,inst_12628);
} else
{if((state_val_12657 === 5))
{var inst_12650 = cljs.core.async.close_BANG_.call(null,out);var state_12656__$1 = state_12656;var statearr_12662_12684 = state_12656__$1;(statearr_12662_12684[2] = inst_12650);
(statearr_12662_12684[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12657 === 6))
{var inst_12652 = (state_12656[2]);var state_12656__$1 = state_12656;var statearr_12663_12685 = state_12656__$1;(statearr_12663_12685[2] = inst_12652);
(statearr_12663_12685[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12657 === 7))
{var inst_12635 = (state_12656[8]);var inst_12636 = (state_12656[9]);var inst_12635__$1 = (state_12656[2]);var inst_12636__$1 = cljs.core.nth.call(null,inst_12635__$1,0,null);var inst_12637 = cljs.core.nth.call(null,inst_12635__$1,1,null);var inst_12638 = (inst_12636__$1 == null);var state_12656__$1 = (function (){var statearr_12664 = state_12656;(statearr_12664[10] = inst_12637);
(statearr_12664[8] = inst_12635__$1);
(statearr_12664[9] = inst_12636__$1);
return statearr_12664;
})();if(cljs.core.truth_(inst_12638))
{var statearr_12665_12686 = state_12656__$1;(statearr_12665_12686[1] = 8);
} else
{var statearr_12666_12687 = state_12656__$1;(statearr_12666_12687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12657 === 8))
{var inst_12637 = (state_12656[10]);var inst_12628 = (state_12656[7]);var inst_12635 = (state_12656[8]);var inst_12636 = (state_12656[9]);var inst_12640 = (function (){var c = inst_12637;var v = inst_12636;var vec__12633 = inst_12635;var cs = inst_12628;return ((function (c,v,vec__12633,cs,inst_12637,inst_12628,inst_12635,inst_12636,state_val_12657,c__6316__auto___12680,out){
return (function (p1__12573_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12573_SHARP_);
});
;})(c,v,vec__12633,cs,inst_12637,inst_12628,inst_12635,inst_12636,state_val_12657,c__6316__auto___12680,out))
})();var inst_12641 = cljs.core.filterv.call(null,inst_12640,inst_12628);var inst_12628__$1 = inst_12641;var state_12656__$1 = (function (){var statearr_12667 = state_12656;(statearr_12667[7] = inst_12628__$1);
return statearr_12667;
})();var statearr_12668_12688 = state_12656__$1;(statearr_12668_12688[2] = null);
(statearr_12668_12688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12657 === 9))
{var inst_12636 = (state_12656[9]);var state_12656__$1 = state_12656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12656__$1,11,out,inst_12636);
} else
{if((state_val_12657 === 10))
{var inst_12648 = (state_12656[2]);var state_12656__$1 = state_12656;var statearr_12670_12689 = state_12656__$1;(statearr_12670_12689[2] = inst_12648);
(statearr_12670_12689[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12657 === 11))
{var inst_12628 = (state_12656[7]);var inst_12645 = (state_12656[2]);var tmp12669 = inst_12628;var inst_12628__$1 = tmp12669;var state_12656__$1 = (function (){var statearr_12671 = state_12656;(statearr_12671[11] = inst_12645);
(statearr_12671[7] = inst_12628__$1);
return statearr_12671;
})();var statearr_12672_12690 = state_12656__$1;(statearr_12672_12690[2] = null);
(statearr_12672_12690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___12680,out))
;return ((function (switch__6301__auto__,c__6316__auto___12680,out){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_12676 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12676[0] = state_machine__6302__auto__);
(statearr_12676[1] = 1);
return statearr_12676;
});
var state_machine__6302__auto____1 = (function (state_12656){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_12656);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e12677){if((e12677 instanceof Object))
{var ex__6305__auto__ = e12677;var statearr_12678_12691 = state_12656;(statearr_12678_12691[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12656);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12692 = state_12656;
state_12656 = G__12692;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_12656){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_12656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___12680,out))
})();var state__6318__auto__ = (function (){var statearr_12679 = f__6317__auto__.call(null);(statearr_12679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___12680);
return statearr_12679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___12680,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6316__auto___12785 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___12785,out){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___12785,out){
return (function (state_12762){var state_val_12763 = (state_12762[1]);if((state_val_12763 === 1))
{var inst_12739 = 0;var state_12762__$1 = (function (){var statearr_12764 = state_12762;(statearr_12764[7] = inst_12739);
return statearr_12764;
})();var statearr_12765_12786 = state_12762__$1;(statearr_12765_12786[2] = null);
(statearr_12765_12786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 2))
{var inst_12739 = (state_12762[7]);var inst_12741 = (inst_12739 < n);var state_12762__$1 = state_12762;if(cljs.core.truth_(inst_12741))
{var statearr_12766_12787 = state_12762__$1;(statearr_12766_12787[1] = 4);
} else
{var statearr_12767_12788 = state_12762__$1;(statearr_12767_12788[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 3))
{var inst_12759 = (state_12762[2]);var inst_12760 = cljs.core.async.close_BANG_.call(null,out);var state_12762__$1 = (function (){var statearr_12768 = state_12762;(statearr_12768[8] = inst_12759);
return statearr_12768;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12762__$1,inst_12760);
} else
{if((state_val_12763 === 4))
{var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12762__$1,7,ch);
} else
{if((state_val_12763 === 5))
{var state_12762__$1 = state_12762;var statearr_12769_12789 = state_12762__$1;(statearr_12769_12789[2] = null);
(statearr_12769_12789[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 6))
{var inst_12757 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12770_12790 = state_12762__$1;(statearr_12770_12790[2] = inst_12757);
(statearr_12770_12790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 7))
{var inst_12744 = (state_12762[9]);var inst_12744__$1 = (state_12762[2]);var inst_12745 = (inst_12744__$1 == null);var inst_12746 = cljs.core.not.call(null,inst_12745);var state_12762__$1 = (function (){var statearr_12771 = state_12762;(statearr_12771[9] = inst_12744__$1);
return statearr_12771;
})();if(inst_12746)
{var statearr_12772_12791 = state_12762__$1;(statearr_12772_12791[1] = 8);
} else
{var statearr_12773_12792 = state_12762__$1;(statearr_12773_12792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 8))
{var inst_12744 = (state_12762[9]);var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12762__$1,11,out,inst_12744);
} else
{if((state_val_12763 === 9))
{var state_12762__$1 = state_12762;var statearr_12774_12793 = state_12762__$1;(statearr_12774_12793[2] = null);
(statearr_12774_12793[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 10))
{var inst_12754 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12775_12794 = state_12762__$1;(statearr_12775_12794[2] = inst_12754);
(statearr_12775_12794[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12763 === 11))
{var inst_12739 = (state_12762[7]);var inst_12749 = (state_12762[2]);var inst_12750 = (inst_12739 + 1);var inst_12739__$1 = inst_12750;var state_12762__$1 = (function (){var statearr_12776 = state_12762;(statearr_12776[7] = inst_12739__$1);
(statearr_12776[10] = inst_12749);
return statearr_12776;
})();var statearr_12777_12795 = state_12762__$1;(statearr_12777_12795[2] = null);
(statearr_12777_12795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___12785,out))
;return ((function (switch__6301__auto__,c__6316__auto___12785,out){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_12781 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12781[0] = state_machine__6302__auto__);
(statearr_12781[1] = 1);
return statearr_12781;
});
var state_machine__6302__auto____1 = (function (state_12762){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_12762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e12782){if((e12782 instanceof Object))
{var ex__6305__auto__ = e12782;var statearr_12783_12796 = state_12762;(statearr_12783_12796[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12797 = state_12762;
state_12762 = G__12797;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_12762){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_12762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___12785,out))
})();var state__6318__auto__ = (function (){var statearr_12784 = f__6317__auto__.call(null);(statearr_12784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___12785);
return statearr_12784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___12785,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6316__auto___12894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___12894,out){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___12894,out){
return (function (state_12869){var state_val_12870 = (state_12869[1]);if((state_val_12870 === 1))
{var inst_12846 = null;var state_12869__$1 = (function (){var statearr_12871 = state_12869;(statearr_12871[7] = inst_12846);
return statearr_12871;
})();var statearr_12872_12895 = state_12869__$1;(statearr_12872_12895[2] = null);
(statearr_12872_12895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12870 === 2))
{var state_12869__$1 = state_12869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12869__$1,4,ch);
} else
{if((state_val_12870 === 3))
{var inst_12866 = (state_12869[2]);var inst_12867 = cljs.core.async.close_BANG_.call(null,out);var state_12869__$1 = (function (){var statearr_12873 = state_12869;(statearr_12873[8] = inst_12866);
return statearr_12873;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12869__$1,inst_12867);
} else
{if((state_val_12870 === 4))
{var inst_12849 = (state_12869[9]);var inst_12849__$1 = (state_12869[2]);var inst_12850 = (inst_12849__$1 == null);var inst_12851 = cljs.core.not.call(null,inst_12850);var state_12869__$1 = (function (){var statearr_12874 = state_12869;(statearr_12874[9] = inst_12849__$1);
return statearr_12874;
})();if(inst_12851)
{var statearr_12875_12896 = state_12869__$1;(statearr_12875_12896[1] = 5);
} else
{var statearr_12876_12897 = state_12869__$1;(statearr_12876_12897[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12870 === 5))
{var inst_12846 = (state_12869[7]);var inst_12849 = (state_12869[9]);var inst_12853 = cljs.core._EQ_.call(null,inst_12849,inst_12846);var state_12869__$1 = state_12869;if(inst_12853)
{var statearr_12877_12898 = state_12869__$1;(statearr_12877_12898[1] = 8);
} else
{var statearr_12878_12899 = state_12869__$1;(statearr_12878_12899[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12870 === 6))
{var state_12869__$1 = state_12869;var statearr_12880_12900 = state_12869__$1;(statearr_12880_12900[2] = null);
(statearr_12880_12900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12870 === 7))
{var inst_12864 = (state_12869[2]);var state_12869__$1 = state_12869;var statearr_12881_12901 = state_12869__$1;(statearr_12881_12901[2] = inst_12864);
(statearr_12881_12901[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12870 === 8))
{var inst_12846 = (state_12869[7]);var tmp12879 = inst_12846;var inst_12846__$1 = tmp12879;var state_12869__$1 = (function (){var statearr_12882 = state_12869;(statearr_12882[7] = inst_12846__$1);
return statearr_12882;
})();var statearr_12883_12902 = state_12869__$1;(statearr_12883_12902[2] = null);
(statearr_12883_12902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12870 === 9))
{var inst_12849 = (state_12869[9]);var state_12869__$1 = state_12869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12869__$1,11,out,inst_12849);
} else
{if((state_val_12870 === 10))
{var inst_12861 = (state_12869[2]);var state_12869__$1 = state_12869;var statearr_12884_12903 = state_12869__$1;(statearr_12884_12903[2] = inst_12861);
(statearr_12884_12903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12870 === 11))
{var inst_12849 = (state_12869[9]);var inst_12858 = (state_12869[2]);var inst_12846 = inst_12849;var state_12869__$1 = (function (){var statearr_12885 = state_12869;(statearr_12885[7] = inst_12846);
(statearr_12885[10] = inst_12858);
return statearr_12885;
})();var statearr_12886_12904 = state_12869__$1;(statearr_12886_12904[2] = null);
(statearr_12886_12904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___12894,out))
;return ((function (switch__6301__auto__,c__6316__auto___12894,out){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_12890 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12890[0] = state_machine__6302__auto__);
(statearr_12890[1] = 1);
return statearr_12890;
});
var state_machine__6302__auto____1 = (function (state_12869){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_12869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e12891){if((e12891 instanceof Object))
{var ex__6305__auto__ = e12891;var statearr_12892_12905 = state_12869;(statearr_12892_12905[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12869);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12906 = state_12869;
state_12869 = G__12906;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_12869){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_12869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___12894,out))
})();var state__6318__auto__ = (function (){var statearr_12893 = f__6317__auto__.call(null);(statearr_12893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___12894);
return statearr_12893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___12894,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6316__auto___13041 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___13041,out){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___13041,out){
return (function (state_13011){var state_val_13012 = (state_13011[1]);if((state_val_13012 === 1))
{var inst_12974 = (new Array(n));var inst_12975 = inst_12974;var inst_12976 = 0;var state_13011__$1 = (function (){var statearr_13013 = state_13011;(statearr_13013[7] = inst_12975);
(statearr_13013[8] = inst_12976);
return statearr_13013;
})();var statearr_13014_13042 = state_13011__$1;(statearr_13014_13042[2] = null);
(statearr_13014_13042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 2))
{var state_13011__$1 = state_13011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13011__$1,4,ch);
} else
{if((state_val_13012 === 3))
{var inst_13009 = (state_13011[2]);var state_13011__$1 = state_13011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13011__$1,inst_13009);
} else
{if((state_val_13012 === 4))
{var inst_12979 = (state_13011[9]);var inst_12979__$1 = (state_13011[2]);var inst_12980 = (inst_12979__$1 == null);var inst_12981 = cljs.core.not.call(null,inst_12980);var state_13011__$1 = (function (){var statearr_13015 = state_13011;(statearr_13015[9] = inst_12979__$1);
return statearr_13015;
})();if(inst_12981)
{var statearr_13016_13043 = state_13011__$1;(statearr_13016_13043[1] = 5);
} else
{var statearr_13017_13044 = state_13011__$1;(statearr_13017_13044[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 5))
{var inst_12984 = (state_13011[10]);var inst_12975 = (state_13011[7]);var inst_12976 = (state_13011[8]);var inst_12979 = (state_13011[9]);var inst_12983 = (inst_12975[inst_12976] = inst_12979);var inst_12984__$1 = (inst_12976 + 1);var inst_12985 = (inst_12984__$1 < n);var state_13011__$1 = (function (){var statearr_13018 = state_13011;(statearr_13018[10] = inst_12984__$1);
(statearr_13018[11] = inst_12983);
return statearr_13018;
})();if(cljs.core.truth_(inst_12985))
{var statearr_13019_13045 = state_13011__$1;(statearr_13019_13045[1] = 8);
} else
{var statearr_13020_13046 = state_13011__$1;(statearr_13020_13046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 6))
{var inst_12976 = (state_13011[8]);var inst_12997 = (inst_12976 > 0);var state_13011__$1 = state_13011;if(cljs.core.truth_(inst_12997))
{var statearr_13022_13047 = state_13011__$1;(statearr_13022_13047[1] = 12);
} else
{var statearr_13023_13048 = state_13011__$1;(statearr_13023_13048[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 7))
{var inst_13007 = (state_13011[2]);var state_13011__$1 = state_13011;var statearr_13024_13049 = state_13011__$1;(statearr_13024_13049[2] = inst_13007);
(statearr_13024_13049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 8))
{var inst_12984 = (state_13011[10]);var inst_12975 = (state_13011[7]);var tmp13021 = inst_12975;var inst_12975__$1 = tmp13021;var inst_12976 = inst_12984;var state_13011__$1 = (function (){var statearr_13025 = state_13011;(statearr_13025[7] = inst_12975__$1);
(statearr_13025[8] = inst_12976);
return statearr_13025;
})();var statearr_13026_13050 = state_13011__$1;(statearr_13026_13050[2] = null);
(statearr_13026_13050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 9))
{var inst_12975 = (state_13011[7]);var inst_12989 = cljs.core.vec.call(null,inst_12975);var state_13011__$1 = state_13011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13011__$1,11,out,inst_12989);
} else
{if((state_val_13012 === 10))
{var inst_12995 = (state_13011[2]);var state_13011__$1 = state_13011;var statearr_13027_13051 = state_13011__$1;(statearr_13027_13051[2] = inst_12995);
(statearr_13027_13051[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 11))
{var inst_12991 = (state_13011[2]);var inst_12992 = (new Array(n));var inst_12975 = inst_12992;var inst_12976 = 0;var state_13011__$1 = (function (){var statearr_13028 = state_13011;(statearr_13028[12] = inst_12991);
(statearr_13028[7] = inst_12975);
(statearr_13028[8] = inst_12976);
return statearr_13028;
})();var statearr_13029_13052 = state_13011__$1;(statearr_13029_13052[2] = null);
(statearr_13029_13052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 12))
{var inst_12975 = (state_13011[7]);var inst_12999 = cljs.core.vec.call(null,inst_12975);var state_13011__$1 = state_13011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13011__$1,15,out,inst_12999);
} else
{if((state_val_13012 === 13))
{var state_13011__$1 = state_13011;var statearr_13030_13053 = state_13011__$1;(statearr_13030_13053[2] = null);
(statearr_13030_13053[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 14))
{var inst_13004 = (state_13011[2]);var inst_13005 = cljs.core.async.close_BANG_.call(null,out);var state_13011__$1 = (function (){var statearr_13031 = state_13011;(statearr_13031[13] = inst_13004);
return statearr_13031;
})();var statearr_13032_13054 = state_13011__$1;(statearr_13032_13054[2] = inst_13005);
(statearr_13032_13054[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13012 === 15))
{var inst_13001 = (state_13011[2]);var state_13011__$1 = state_13011;var statearr_13033_13055 = state_13011__$1;(statearr_13033_13055[2] = inst_13001);
(statearr_13033_13055[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___13041,out))
;return ((function (switch__6301__auto__,c__6316__auto___13041,out){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_13037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13037[0] = state_machine__6302__auto__);
(statearr_13037[1] = 1);
return statearr_13037;
});
var state_machine__6302__auto____1 = (function (state_13011){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_13011);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e13038){if((e13038 instanceof Object))
{var ex__6305__auto__ = e13038;var statearr_13039_13056 = state_13011;(statearr_13039_13056[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13057 = state_13011;
state_13011 = G__13057;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_13011){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_13011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___13041,out))
})();var state__6318__auto__ = (function (){var statearr_13040 = f__6317__auto__.call(null);(statearr_13040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___13041);
return statearr_13040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___13041,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6316__auto___13200 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6316__auto___13200,out){
return (function (){var f__6317__auto__ = (function (){var switch__6301__auto__ = ((function (c__6316__auto___13200,out){
return (function (state_13170){var state_val_13171 = (state_13170[1]);if((state_val_13171 === 1))
{var inst_13129 = [];var inst_13130 = inst_13129;var inst_13131 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13170__$1 = (function (){var statearr_13172 = state_13170;(statearr_13172[7] = inst_13131);
(statearr_13172[8] = inst_13130);
return statearr_13172;
})();var statearr_13173_13201 = state_13170__$1;(statearr_13173_13201[2] = null);
(statearr_13173_13201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 2))
{var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13170__$1,4,ch);
} else
{if((state_val_13171 === 3))
{var inst_13168 = (state_13170[2]);var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13170__$1,inst_13168);
} else
{if((state_val_13171 === 4))
{var inst_13134 = (state_13170[9]);var inst_13134__$1 = (state_13170[2]);var inst_13135 = (inst_13134__$1 == null);var inst_13136 = cljs.core.not.call(null,inst_13135);var state_13170__$1 = (function (){var statearr_13174 = state_13170;(statearr_13174[9] = inst_13134__$1);
return statearr_13174;
})();if(inst_13136)
{var statearr_13175_13202 = state_13170__$1;(statearr_13175_13202[1] = 5);
} else
{var statearr_13176_13203 = state_13170__$1;(statearr_13176_13203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 5))
{var inst_13134 = (state_13170[9]);var inst_13131 = (state_13170[7]);var inst_13138 = (state_13170[10]);var inst_13138__$1 = f.call(null,inst_13134);var inst_13139 = cljs.core._EQ_.call(null,inst_13138__$1,inst_13131);var inst_13140 = cljs.core.keyword_identical_QMARK_.call(null,inst_13131,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13141 = (inst_13139) || (inst_13140);var state_13170__$1 = (function (){var statearr_13177 = state_13170;(statearr_13177[10] = inst_13138__$1);
return statearr_13177;
})();if(cljs.core.truth_(inst_13141))
{var statearr_13178_13204 = state_13170__$1;(statearr_13178_13204[1] = 8);
} else
{var statearr_13179_13205 = state_13170__$1;(statearr_13179_13205[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 6))
{var inst_13130 = (state_13170[8]);var inst_13155 = inst_13130.length;var inst_13156 = (inst_13155 > 0);var state_13170__$1 = state_13170;if(cljs.core.truth_(inst_13156))
{var statearr_13181_13206 = state_13170__$1;(statearr_13181_13206[1] = 12);
} else
{var statearr_13182_13207 = state_13170__$1;(statearr_13182_13207[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 7))
{var inst_13166 = (state_13170[2]);var state_13170__$1 = state_13170;var statearr_13183_13208 = state_13170__$1;(statearr_13183_13208[2] = inst_13166);
(statearr_13183_13208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 8))
{var inst_13134 = (state_13170[9]);var inst_13130 = (state_13170[8]);var inst_13138 = (state_13170[10]);var inst_13143 = inst_13130.push(inst_13134);var tmp13180 = inst_13130;var inst_13130__$1 = tmp13180;var inst_13131 = inst_13138;var state_13170__$1 = (function (){var statearr_13184 = state_13170;(statearr_13184[7] = inst_13131);
(statearr_13184[8] = inst_13130__$1);
(statearr_13184[11] = inst_13143);
return statearr_13184;
})();var statearr_13185_13209 = state_13170__$1;(statearr_13185_13209[2] = null);
(statearr_13185_13209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 9))
{var inst_13130 = (state_13170[8]);var inst_13146 = cljs.core.vec.call(null,inst_13130);var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13170__$1,11,out,inst_13146);
} else
{if((state_val_13171 === 10))
{var inst_13153 = (state_13170[2]);var state_13170__$1 = state_13170;var statearr_13186_13210 = state_13170__$1;(statearr_13186_13210[2] = inst_13153);
(statearr_13186_13210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 11))
{var inst_13134 = (state_13170[9]);var inst_13138 = (state_13170[10]);var inst_13148 = (state_13170[2]);var inst_13149 = [];var inst_13150 = inst_13149.push(inst_13134);var inst_13130 = inst_13149;var inst_13131 = inst_13138;var state_13170__$1 = (function (){var statearr_13187 = state_13170;(statearr_13187[12] = inst_13150);
(statearr_13187[7] = inst_13131);
(statearr_13187[13] = inst_13148);
(statearr_13187[8] = inst_13130);
return statearr_13187;
})();var statearr_13188_13211 = state_13170__$1;(statearr_13188_13211[2] = null);
(statearr_13188_13211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 12))
{var inst_13130 = (state_13170[8]);var inst_13158 = cljs.core.vec.call(null,inst_13130);var state_13170__$1 = state_13170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13170__$1,15,out,inst_13158);
} else
{if((state_val_13171 === 13))
{var state_13170__$1 = state_13170;var statearr_13189_13212 = state_13170__$1;(statearr_13189_13212[2] = null);
(statearr_13189_13212[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 14))
{var inst_13163 = (state_13170[2]);var inst_13164 = cljs.core.async.close_BANG_.call(null,out);var state_13170__$1 = (function (){var statearr_13190 = state_13170;(statearr_13190[14] = inst_13163);
return statearr_13190;
})();var statearr_13191_13213 = state_13170__$1;(statearr_13191_13213[2] = inst_13164);
(statearr_13191_13213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13171 === 15))
{var inst_13160 = (state_13170[2]);var state_13170__$1 = state_13170;var statearr_13192_13214 = state_13170__$1;(statearr_13192_13214[2] = inst_13160);
(statearr_13192_13214[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});})(c__6316__auto___13200,out))
;return ((function (switch__6301__auto__,c__6316__auto___13200,out){
return (function() {
var state_machine__6302__auto__ = null;
var state_machine__6302__auto____0 = (function (){var statearr_13196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13196[0] = state_machine__6302__auto__);
(statearr_13196[1] = 1);
return statearr_13196;
});
var state_machine__6302__auto____1 = (function (state_13170){while(true){
var ret_value__6303__auto__ = (function (){try{while(true){
var result__6304__auto__ = switch__6301__auto__.call(null,state_13170);if(cljs.core.keyword_identical_QMARK_.call(null,result__6304__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6304__auto__;
}
break;
}
}catch (e13197){if((e13197 instanceof Object))
{var ex__6305__auto__ = e13197;var statearr_13198_13215 = state_13170;(statearr_13198_13215[5] = ex__6305__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6303__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13216 = state_13170;
state_13170 = G__13216;
continue;
}
} else
{return ret_value__6303__auto__;
}
break;
}
});
state_machine__6302__auto__ = function(state_13170){
switch(arguments.length){
case 0:
return state_machine__6302__auto____0.call(this);
case 1:
return state_machine__6302__auto____1.call(this,state_13170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6302__auto____0;
state_machine__6302__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6302__auto____1;
return state_machine__6302__auto__;
})()
;})(switch__6301__auto__,c__6316__auto___13200,out))
})();var state__6318__auto__ = (function (){var statearr_13199 = f__6317__auto__.call(null);(statearr_13199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6316__auto___13200);
return statearr_13199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6318__auto__);
});})(c__6316__auto___13200,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map