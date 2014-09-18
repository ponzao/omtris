// Compiled by ClojureScript 0.0-2234
goog.provide('omtris.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('goog.events');
goog.require('clojure.data');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('goog.events');
omtris.core.str__GT_piece = (function str__GT_piece(s){return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,(function (p1__9271_SHARP_){if(cljs.core._EQ_.call(null,"x",p1__9271_SHARP_))
{return new cljs.core.Keyword(null,"x","x",1013904362);
} else
{return null;
}
})),s);
});
omtris.core.pieces = cljs.core.map.call(null,omtris.core.str__GT_piece,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xx","xx"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" x "," x ","xx "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" x "," x "," xx"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" x "," xx"," x "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" x  "," x  "," x  "," x  "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xx  "," xx ","    "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" xx ","xx  ","    "], null)], null));
omtris.core.random_piece = (function random_piece(){return cljs.core.rand_nth.call(null,omtris.core.pieces);
});
omtris.core.move_left = (function move_left(piece){return cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1120749826),0], null),cljs.core.dec);
});
omtris.core.move_right = (function move_right(piece){return cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1120749826),0], null),cljs.core.inc);
});
omtris.core.move_down = (function move_down(piece){return cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1120749826),1], null),cljs.core.inc);
});
omtris.core.move_up = (function move_up(piece){return cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1120749826),1], null),cljs.core.dec);
});
omtris.core.transpose = (function transpose(grid){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),grid);
});
omtris.core.rotate_left = (function rotate_left(piece){return cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",1017085624)], null),cljs.core.comp.call(null,omtris.core.transpose,omtris.core.transpose,omtris.core.transpose));
});
omtris.core.rotate_right = (function rotate_right(piece){return cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",1017085624)], null),omtris.core.transpose);
});
omtris.core.reserved_points = (function reserved_points(grid){return cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (y,xs){return cljs.core.map_indexed.call(null,(function (x,value){if(cljs.core.truth_(value))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else
{return null;
}
}),xs);
}),grid))));
});
omtris.core.insert_piece = (function insert_piece(grid,piece){var reserved_piece_points = cljs.core.set.call(null,cljs.core.map.call(null,(function (p__9276){var vec__9277 = p__9276;var x = cljs.core.nth.call(null,vec__9277,0,null);var y = cljs.core.nth.call(null,vec__9277,1,null);var point = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(piece);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + cljs.core.first.call(null,point)),(y + cljs.core.second.call(null,point))], null);
}),omtris.core.reserved_points.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(piece))));return cljs.core.reduce.call(null,((function (reserved_piece_points){
return (function (acc,p__9278){var vec__9279 = p__9278;var x = cljs.core.nth.call(null,vec__9279,0,null);var y = cljs.core.nth.call(null,vec__9279,1,null);return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),new cljs.core.Keyword(null,"x","x",1013904362));
});})(reserved_piece_points))
,grid,reserved_piece_points);
});
omtris.core.blocked_QMARK_ = (function blocked_QMARK_(grid,piece){var reserved_piece_points = cljs.core.set.call(null,cljs.core.map.call(null,(function (p__9282){var vec__9283 = p__9282;var x = cljs.core.nth.call(null,vec__9283,0,null);var y = cljs.core.nth.call(null,vec__9283,1,null);var point = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(piece);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + cljs.core.first.call(null,point)),(y + cljs.core.second.call(null,point))], null);
}),omtris.core.reserved_points.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(piece))));var or__3538__auto__ = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core.some,cljs.core.neg_QMARK_),reserved_piece_points);if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._LT__EQ_,12),cljs.core.map.call(null,cljs.core.first,reserved_piece_points));if(cljs.core.truth_(or__3538__auto____$1))
{return or__3538__auto____$1;
} else
{var or__3538__auto____$2 = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._LT__EQ_,16),cljs.core.map.call(null,cljs.core.second,reserved_piece_points));if(cljs.core.truth_(or__3538__auto____$2))
{return or__3538__auto____$2;
} else
{return cljs.core.some.call(null,reserved_piece_points,omtris.core.reserved_points.call(null,grid));
}
}
}
});
omtris.core.indexed_seq = cljs.core.partial.call(null,cljs.core.map_indexed,cljs.core.vector);
omtris.core.complete_rows = (function complete_rows(grid){var complete_row_QMARK_ = cljs.core.partial.call(null,cljs.core.every_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),null], null), null));return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.comp.call(null,complete_row_QMARK_,cljs.core.second),omtris.core.indexed_seq.call(null,grid))));
});
/**
* @param {...*} var_args
*/
omtris.core.vec_remove = (function() { 
var vec_remove__delegate = function (coll,xs){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get,coll),cljs.core.remove.call(null,cljs.core.set.call(null,xs),cljs.core.range.call(null,0,cljs.core.count.call(null,coll)))));
};
var vec_remove = function (coll,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return vec_remove__delegate.call(this,coll,xs);};
vec_remove.cljs$lang$maxFixedArity = 1;
vec_remove.cljs$lang$applyTo = (function (arglist__9284){
var coll = cljs.core.first(arglist__9284);
var xs = cljs.core.rest(arglist__9284);
return vec_remove__delegate(coll,xs);
});
vec_remove.cljs$core$IFn$_invoke$arity$variadic = vec_remove__delegate;
return vec_remove;
})()
;
omtris.core.initial_state = (function initial_state(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",1017085624),cljs.core.vec.call(null,cljs.core.repeat.call(null,16,cljs.core.vec.call(null,cljs.core.repeat.call(null,12,null)))),new cljs.core.Keyword(null,"piece","piece",1120566880),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",1017085624),omtris.core.random_piece.call(null),new cljs.core.Keyword(null,"point","point",1120749826),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,0], null)], null)], null);
});
omtris.core.tick = (function tick(p__9285){var map__9287 = p__9285;var map__9287__$1 = ((cljs.core.seq_QMARK_.call(null,map__9287))?cljs.core.apply.call(null,cljs.core.hash_map,map__9287):map__9287);var world = map__9287__$1;var grid = cljs.core.get.call(null,map__9287__$1,new cljs.core.Keyword(null,"grid","grid",1017085624));var piece = cljs.core.get.call(null,map__9287__$1,new cljs.core.Keyword(null,"piece","piece",1120566880));if(cljs.core.not.call(null,piece))
{return world;
} else
{var piece__$1 = cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1120749826),1], null),cljs.core.inc);if(cljs.core.truth_(omtris.core.blocked_QMARK_.call(null,grid,piece__$1)))
{var grid__$1 = omtris.core.insert_piece.call(null,grid,new cljs.core.Keyword(null,"piece","piece",1120566880).cljs$core$IFn$_invoke$arity$1(world));var rows = omtris.core.complete_rows.call(null,grid__$1);var new_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",1017085624),((cljs.core.seq.call(null,rows))?cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,rows),cljs.core.vec.call(null,cljs.core.repeat.call(null,12,null))),cljs.core.apply.call(null,omtris.core.vec_remove,grid__$1,rows))):grid__$1),new cljs.core.Keyword(null,"piece","piece",1120566880),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",1017085624),omtris.core.random_piece.call(null),new cljs.core.Keyword(null,"point","point",1120749826),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,0], null)], null)], null);if(cljs.core.truth_(omtris.core.blocked_QMARK_.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"piece","piece",1120566880).cljs$core$IFn$_invoke$arity$1(new_state))))
{return omtris.core.initial_state.call(null);
} else
{return new_state;
}
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",1017085624),grid,new cljs.core.Keyword(null,"piece","piece",1120566880),piece__$1], null);
}
}
});
omtris.core.piece_locs = (function piece_locs(p__9288){var map__9291 = p__9288;var map__9291__$1 = ((cljs.core.seq_QMARK_.call(null,map__9291))?cljs.core.apply.call(null,cljs.core.hash_map,map__9291):map__9291);var grid = cljs.core.get.call(null,map__9291__$1,new cljs.core.Keyword(null,"grid","grid",1017085624));var point = cljs.core.get.call(null,map__9291__$1,new cljs.core.Keyword(null,"point","point",1120749826));var vec__9292 = point;var x_offset = cljs.core.nth.call(null,vec__9292,0,null);var y_offset = cljs.core.nth.call(null,vec__9292,1,null);return cljs.core.apply.call(null,cljs.core.concat,cljs.core.keep_indexed.call(null,((function (vec__9292,x_offset,y_offset,map__9291,map__9291__$1,grid,point){
return (function (y,xs){return cljs.core.seq.call(null,cljs.core.keep_indexed.call(null,((function (vec__9292,x_offset,y_offset,map__9291,map__9291__$1,grid,point){
return (function (x,value){if(cljs.core.truth_(value))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y_offset + y),(x_offset + x)], null);
} else
{return null;
}
});})(vec__9292,x_offset,y_offset,map__9291,map__9291__$1,grid,point))
,xs));
});})(vec__9292,x_offset,y_offset,map__9291,map__9291__$1,grid,point))
,grid));
});
omtris.core.grid = (function grid(p__9293){var map__9297 = p__9293;var map__9297__$1 = ((cljs.core.seq_QMARK_.call(null,map__9297))?cljs.core.apply.call(null,cljs.core.hash_map,map__9297):map__9297);var piece = cljs.core.get.call(null,map__9297__$1,new cljs.core.Keyword(null,"piece","piece",1120566880));var grid__$1 = cljs.core.get.call(null,map__9297__$1,new cljs.core.Keyword(null,"grid","grid",1017085624));var grid__$2 = cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,((function (map__9297,map__9297__$1,piece,grid__$1){
return (function (value){if(cljs.core.truth_(value))
{return new cljs.core.Keyword(null,"reserved","reserved",663518874);
} else
{return null;
}
});})(map__9297,map__9297__$1,piece,grid__$1))
),grid__$1);return cljs.core.reduce.call(null,((function (grid__$2,map__9297,map__9297__$1,piece,grid__$1){
return (function (acc,p__9298){var vec__9299 = p__9298;var x = cljs.core.nth.call(null,vec__9299,0,null);var y = cljs.core.nth.call(null,vec__9299,1,null);return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"dynamic","dynamic",3138671537));
});})(grid__$2,map__9297,map__9297__$1,piece,grid__$1))
,grid__$2,omtris.core.piece_locs.call(null,piece));
});
omtris.core.app_state = cljs.core.atom.call(null,omtris.core.initial_state.call(null));
omtris.core.game_view = (function game_view(app,owner){if(typeof omtris.core.t9303 !== 'undefined')
{} else
{
/**
* @constructor
*/
omtris.core.t9303 = (function (owner,app,game_view,meta9304){
this.owner = owner;
this.app = app;
this.game_view = game_view;
this.meta9304 = meta9304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omtris.core.t9303.cljs$lang$type = true;
omtris.core.t9303.cljs$lang$ctorStr = "omtris.core/t9303";
omtris.core.t9303.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"omtris.core/t9303");
});
omtris.core.t9303.prototype.om$core$IRenderState$ = true;
omtris.core.t9303.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var grid = omtris.core.grid.call(null,cljs.core.deref.call(null,omtris.core.app_state));return React.DOM.div({"id": "tetris"},cljs.core.apply.call(null,om.dom.table,null,cljs.core.map.call(null,((function (grid,___$1){
return (function (row){return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (grid,___$1){
return (function (value){return React.DOM.td({"className": (cljs.core.truth_(value)?cljs.core.name.call(null,value):null)});
});})(grid,___$1))
,row));
});})(grid,___$1))
,grid)));
});
omtris.core.t9303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9305){var self__ = this;
var _9305__$1 = this;return self__.meta9304;
});
omtris.core.t9303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9305,meta9304__$1){var self__ = this;
var _9305__$1 = this;return (new omtris.core.t9303(self__.owner,self__.app,self__.game_view,meta9304__$1));
});
omtris.core.__GT_t9303 = (function __GT_t9303(owner__$1,app__$1,game_view__$1,meta9304){return (new omtris.core.t9303(owner__$1,app__$1,game_view__$1,meta9304));
});
}
return (new omtris.core.t9303(owner,app,game_view,null));
});
omtris.core.key_mappings = new cljs.core.PersistentArrayMap(null, 4, [73,omtris.core.rotate_right,74,omtris.core.move_left,75,omtris.core.move_down,76,omtris.core.move_right], null);
omtris.core.w = goog.dom.getWindow();
goog.events.listen(omtris.core.w,"keydown",(function (evt){var f = omtris.core.key_mappings.call(null,evt.keyCode);return cljs.core.swap_BANG_.call(null,omtris.core.app_state,((function (f){
return (function (p__9306){while(true){
var map__9307 = p__9306;var map__9307__$1 = ((cljs.core.seq_QMARK_.call(null,map__9307))?cljs.core.apply.call(null,cljs.core.hash_map,map__9307):map__9307);var state = map__9307__$1;var grid = cljs.core.get.call(null,map__9307__$1,new cljs.core.Keyword(null,"grid","grid",1017085624));var piece = cljs.core.get.call(null,map__9307__$1,new cljs.core.Keyword(null,"piece","piece",1120566880));var piece__$1 = f.call(null,piece);if((cljs.core.not.call(null,omtris.core.blocked_QMARK_.call(null,grid,piece__$1))) && (cljs.core._EQ_.call(null,f,omtris.core.move_down)))
{{
var G__9308 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1120566880),piece__$1,new cljs.core.Keyword(null,"grid","grid",1017085624),grid], null);
p__9306 = G__9308;
continue;
}
} else
{if(cljs.core.truth_(omtris.core.blocked_QMARK_.call(null,grid,piece__$1)))
{return state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1120566880),piece__$1,new cljs.core.Keyword(null,"grid","grid",1017085624),grid], null);
} else
{return null;
}
}
}
break;
}
});})(f))
);
}));
omtris.core.w.setInterval((function (){return cljs.core.swap_BANG_.call(null,omtris.core.app_state,omtris.core.tick);
}),1000);
om.core.root.call(null,omtris.core.game_view,omtris.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tetris")], null));

//# sourceMappingURL=core.js.map