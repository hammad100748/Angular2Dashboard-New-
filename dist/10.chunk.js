webpackJsonpac__name_([10],{

/***/ "./node_modules/messenger/build/js/messenger-theme-flat.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function() {
  var $, FlatMessage, spinner_template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = jQuery;

  spinner_template = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';

  FlatMessage = (function(_super) {

    __extends(FlatMessage, _super);

    function FlatMessage() {
      return FlatMessage.__super__.constructor.apply(this, arguments);
    }

    FlatMessage.prototype.template = function(opts) {
      var $message;
      $message = FlatMessage.__super__.template.apply(this, arguments);
      $message.append($(spinner_template));
      return $message;
    };

    return FlatMessage;

  })(window.Messenger.Message);

  window.Messenger.themes.flat = {
    Message: FlatMessage
  };

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/messenger/build/js/messenger.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! messenger 1.4.2 */
/*
 * This file begins the output concatenated into messenger.js
 *
 * It establishes the Messenger object while preserving whatever it was before
 * (for noConflict), and making it a callable function.
 */

(function(){
    var _prevMessenger = window.Messenger;
    var localMessenger;

    localMessenger = window.Messenger = function(){
        return localMessenger._call.apply(this, arguments);
    }

    window.Messenger.noConflict = function(){
        window.Messenger = _prevMessenger;

        return localMessenger;
    }
})();

/*
 * This file contains shims for when Underscore and Backbone
 * are not included.
 *
 * Portions taken from Underscore.js and Backbone.js
 * Both of which are Copyright (c) 2009-2013 Jeremy Ashkenas, DocumentCloud
 */
window.Messenger._ = (function() {
    if (window._)
        return window._

    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var push             = ArrayProto.push,
            slice            = ArrayProto.slice,
            concat           = ArrayProto.concat,
            toString         = ObjProto.toString,
            hasOwnProperty   = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeForEach      = ArrayProto.forEach,
        nativeMap          = ArrayProto.map,
        nativeReduce       = ArrayProto.reduce,
        nativeReduceRight  = ArrayProto.reduceRight,
        nativeFilter       = ArrayProto.filter,
        nativeEvery        = ArrayProto.every,
        nativeSome         = ArrayProto.some,
        nativeIndexOf      = ArrayProto.indexOf,
        nativeLastIndexOf  = ArrayProto.lastIndexOf,
        nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind;

    // Create a safe reference to the Underscore object for use below.
    var _ = {};

    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};
  
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            for (var key in obj) {
                if (_.has(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };

    _.result = function(object, property) {
        if (object == null) return null;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };

    _.once = function(func) {
        var ran = false, memo;
        return function() {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };

    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results[results.length] = value;
        });
        return results;
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
    each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
        _['is' + name] = function(obj) {
            return toString.call(obj) == '[object ' + name + ']';
        };
    });

    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    if (obj[prop] == null) obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };

    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
        return keys;
    };

    _.bind = function(func, context) {
        if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        var args = slice.call(arguments, 2);
        return function() {
            return func.apply(context, args.concat(slice.call(arguments)));
        };
    };

    _.isObject = function(obj) {
        return obj === Object(obj);
    };

    return _;
})();

window.Messenger.Events = (function() {
    if (window.Backbone && Backbone.Events) {
        return Backbone.Events;
    }

    var eventsShim = function() {
        var eventSplitter = /\s+/;

        var eventsApi = function(obj, action, name, rest) {
            if (!name) return true;
            if (typeof name === 'object') {
                for (var key in name) {
                    obj[action].apply(obj, [key, name[key]].concat(rest));
                }
            } else if (eventSplitter.test(name)) {
                var names = name.split(eventSplitter);
                for (var i = 0, l = names.length; i < l; i++) {
                    obj[action].apply(obj, [names[i]].concat(rest));
                }
            } else {
                return true;
            }
        };

        var triggerEvents = function(events, args) {
            var ev, i = -1, l = events.length;
            switch (args.length) {
            case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx);
            return;
            case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0]);
            return;
            case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1]);
            return;
            case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1], args[2]);
            return;
            default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
            }
        };

        var Events = {

            on: function(name, callback, context) {
                if (!(eventsApi(this, 'on', name, [callback, context]) && callback)) return this;
                this._events || (this._events = {});
                var list = this._events[name] || (this._events[name] = []);
                list.push({callback: callback, context: context, ctx: context || this});
                return this;
            },

            once: function(name, callback, context) {
                if (!(eventsApi(this, 'once', name, [callback, context]) && callback)) return this;
                var self = this;
                var once = _.once(function() {
                    self.off(name, once);
                    callback.apply(this, arguments);
                });
                once._callback = callback;
                this.on(name, once, context);
                return this;
            },

            off: function(name, callback, context) {
                var list, ev, events, names, i, l, j, k;
                if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
                if (!name && !callback && !context) {
                    this._events = {};
                    return this;
                }

                names = name ? [name] : _.keys(this._events);
                for (i = 0, l = names.length; i < l; i++) {
                    name = names[i];
                    if (list = this._events[name]) {
                        events = [];
                        if (callback || context) {
                            for (j = 0, k = list.length; j < k; j++) {
                                ev = list[j];
                                if ((callback && callback !== ev.callback &&
                                                                 callback !== ev.callback._callback) ||
                                        (context && context !== ev.context)) {
                                    events.push(ev);
                                }
                            }
                        }
                        this._events[name] = events;
                    }
                }

                return this;
            },

            trigger: function(name) {
                if (!this._events) return this;
                var args = Array.prototype.slice.call(arguments, 1);
                if (!eventsApi(this, 'trigger', name, args)) return this;
                var events = this._events[name];
                var allEvents = this._events.all;
                if (events) triggerEvents(events, args);
                if (allEvents) triggerEvents(allEvents, arguments);
                return this;
            },

            listenTo: function(obj, name, callback) {
                var listeners = this._listeners || (this._listeners = {});
                var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
                listeners[id] = obj;
                obj.on(name, typeof name === 'object' ? this : callback, this);
                return this;
            },

            stopListening: function(obj, name, callback) {
                var listeners = this._listeners;
                if (!listeners) return;
                if (obj) {
                    obj.off(name, typeof name === 'object' ? this : callback, this);
                    if (!name && !callback) delete listeners[obj._listenerId];
                } else {
                    if (typeof name === 'object') callback = this;
                    for (var id in listeners) {
                        listeners[id].off(name, callback, this);
                    }
                    this._listeners = {};
                }
                return this;
            }
        };

        Events.bind   = Events.on;
        Events.unbind = Events.off;
        return Events;
    };
    return eventsShim();
})();

(function() {
  var $, ActionMessenger, BaseView, Events, RetryingMessage, _, _Message, _Messenger, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  _ = (_ref = window._) != null ? _ref : window.Messenger._;

  Events = (_ref1 = typeof Backbone !== "undefined" && Backbone !== null ? Backbone.Events : void 0) != null ? _ref1 : window.Messenger.Events;

  BaseView = (function() {

    function BaseView(options) {
      $.extend(this, Events);
      if (_.isObject(options)) {
        if (options.el) {
          this.setElement(options.el);
        }
        this.model = options.model;
      }
      this.initialize.apply(this, arguments);
    }

    BaseView.prototype.setElement = function(el) {
      this.$el = $(el);
      return this.el = this.$el[0];
    };

    BaseView.prototype.delegateEvents = function(events) {
      var delegateEventSplitter, eventName, key, match, method, selector, _results;
      if (!(events || (events = _.result(this, "events")))) {
        return;
      }
      this.undelegateEvents();
      delegateEventSplitter = /^(\S+)\s*(.*)$/;
      _results = [];
      for (key in events) {
        method = events[key];
        if (!_.isFunction(method)) {
          method = this[events[key]];
        }
        if (!method) {
          throw new Error("Method \"" + events[key] + "\" does not exist");
        }
        match = key.match(delegateEventSplitter);
        eventName = match[1];
        selector = match[2];
        method = _.bind(method, this);
        eventName += ".delegateEvents" + this.cid;
        if (selector === '') {
          _results.push(this.jqon(eventName, method));
        } else {
          _results.push(this.jqon(eventName, selector, method));
        }
      }
      return _results;
    };

    BaseView.prototype.jqon = function(eventName, selector, method) {
      var _ref2;
      if (this.$el.on != null) {
        return (_ref2 = this.$el).on.apply(_ref2, arguments);
      } else {
        if (!(method != null)) {
          method = selector;
          selector = void 0;
        }
        if (selector != null) {
          return this.$el.delegate(selector, eventName, method);
        } else {
          return this.$el.bind(eventName, method);
        }
      }
    };

    BaseView.prototype.jqoff = function(eventName) {
      var _ref2;
      if (this.$el.off != null) {
        return (_ref2 = this.$el).off.apply(_ref2, arguments);
      } else {
        this.$el.undelegate();
        return this.$el.unbind(eventName);
      }
    };

    BaseView.prototype.undelegateEvents = function() {
      return this.jqoff(".delegateEvents" + this.cid);
    };

    BaseView.prototype.remove = function() {
      this.undelegateEvents();
      return this.$el.remove();
    };

    return BaseView;

  })();

  _Message = (function(_super) {

    __extends(_Message, _super);

    function _Message() {
      return _Message.__super__.constructor.apply(this, arguments);
    }

    _Message.prototype.defaults = {
      hideAfter: 10,
      scroll: true,
      closeButtonText: "&times;",
      escapeText: false
    };

    _Message.prototype.initialize = function(opts) {
      if (opts == null) {
        opts = {};
      }
      this.shown = false;
      this.rendered = false;
      this.messenger = opts.messenger;
      return this.options = $.extend({}, this.options, opts, this.defaults);
    };

    _Message.prototype.show = function() {
      var wasShown;
      if (!this.rendered) {
        this.render();
      }
      this.$message.removeClass('messenger-hidden');
      wasShown = this.shown;
      this.shown = true;
      if (!wasShown) {
        return this.trigger('show');
      }
    };

    _Message.prototype.hide = function() {
      var wasShown;
      if (!this.rendered) {
        return;
      }
      this.$message.addClass('messenger-hidden');
      wasShown = this.shown;
      this.shown = false;
      if (wasShown) {
        return this.trigger('hide');
      }
    };

    _Message.prototype.cancel = function() {
      return this.hide();
    };

    _Message.prototype.update = function(opts) {
      var _ref2,
        _this = this;
      if (_.isString(opts)) {
        opts = {
          message: opts
        };
      }
      $.extend(this.options, opts);
      this.lastUpdate = new Date();
      this.rendered = false;
      this.events = (_ref2 = this.options.events) != null ? _ref2 : {};
      this.render();
      this.actionsToEvents();
      this.delegateEvents();
      this.checkClickable();
      if (this.options.hideAfter) {
        this.$message.addClass('messenger-will-hide-after');
        if (this._hideTimeout != null) {
          clearTimeout(this._hideTimeout);
        }
        this._hideTimeout = setTimeout(function() {
          return _this.hide();
        }, this.options.hideAfter * 1000);
      } else {
        this.$message.removeClass('messenger-will-hide-after');
      }
      if (this.options.hideOnNavigate) {
        this.$message.addClass('messenger-will-hide-on-navigate');
        if ((typeof Backbone !== "undefined" && Backbone !== null ? Backbone.history : void 0) != null) {
          Backbone.history.on('route', function() {
            return _this.hide();
          });
        }
      } else {
        this.$message.removeClass('messenger-will-hide-on-navigate');
      }
      return this.trigger('update', this);
    };

    _Message.prototype.scrollTo = function() {
      if (!this.options.scroll) {
        return;
      }
      return $.scrollTo(this.$el, {
        duration: 400,
        offset: {
          left: 0,
          top: -20
        }
      });
    };

    _Message.prototype.timeSinceUpdate = function() {
      if (this.lastUpdate) {
        return (new Date) - this.lastUpdate;
      } else {
        return null;
      }
    };

    _Message.prototype.actionsToEvents = function() {
      var act, name, _ref2, _results,
        _this = this;
      _ref2 = this.options.actions;
      _results = [];
      for (name in _ref2) {
        act = _ref2[name];
        _results.push(this.events["click [data-action=\"" + name + "\"] a"] = (function(act) {
          return function(e) {
            e.preventDefault();
            e.stopPropagation();
            _this.trigger("action:" + name, act, e);
            return act.action.call(_this, e, _this);
          };
        })(act));
      }
      return _results;
    };

    _Message.prototype.checkClickable = function() {
      var evt, name, _ref2, _results;
      _ref2 = this.events;
      _results = [];
      for (name in _ref2) {
        evt = _ref2[name];
        if (name === 'click') {
          _results.push(this.$message.addClass('messenger-clickable'));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    _Message.prototype.undelegateEvents = function() {
      var _ref2;
      _Message.__super__.undelegateEvents.apply(this, arguments);
      return (_ref2 = this.$message) != null ? _ref2.removeClass('messenger-clickable') : void 0;
    };

    _Message.prototype.parseActions = function() {
      var act, actions, n_act, name, _ref2, _ref3;
      actions = [];
      _ref2 = this.options.actions;
      for (name in _ref2) {
        act = _ref2[name];
        n_act = $.extend({}, act);
        n_act.name = name;
        if ((_ref3 = n_act.label) == null) {
          n_act.label = name;
        }
        actions.push(n_act);
      }
      return actions;
    };

    _Message.prototype.template = function(opts) {
      var $action, $actions, $cancel, $link, $message, $text, action, _i, _len, _ref2,
        _this = this;
      $message = $("<div class='messenger-message message alert " + opts.type + " message-" + opts.type + " alert-" + opts.type + "'>");
      if (opts.showCloseButton) {
        $cancel = $('<button type="button" class="messenger-close" data-dismiss="alert">');
        $cancel.html(opts.closeButtonText);
        $cancel.click(function() {
          _this.cancel();
          return true;
        });
        $message.append($cancel);
      }
      if (opts.escapeText) {
        $text = $('<div class="messenger-message-inner"></div>').text(opts.message);
      } else {
        $text = $("<div class=\"messenger-message-inner\">" + opts.message + "</div>");
      }
      $message.append($text);
      if (opts.actions.length) {
        $actions = $('<div class="messenger-actions">');
      }
      _ref2 = opts.actions;
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        action = _ref2[_i];
        $action = $('<span>');
        $action.attr('data-action', "" + action.name);
        $link = $('<a>');
        $link.html(action.label);
        $action.append($('<span class="messenger-phrase">'));
        $action.append($link);
        $actions.append($action);
      }
      $message.append($actions);
      return $message;
    };

    _Message.prototype.render = function() {
      var opts;
      if (this.rendered) {
        return;
      }
      if (!this._hasSlot) {
        this.setElement(this.messenger._reserveMessageSlot(this));
        this._hasSlot = true;
      }
      opts = $.extend({}, this.options, {
        actions: this.parseActions()
      });
      this.$message = $(this.template(opts));
      this.$el.html(this.$message);
      this.shown = true;
      this.rendered = true;
      return this.trigger('render');
    };

    return _Message;

  })(BaseView);

  RetryingMessage = (function(_super) {

    __extends(RetryingMessage, _super);

    function RetryingMessage() {
      return RetryingMessage.__super__.constructor.apply(this, arguments);
    }

    RetryingMessage.prototype.initialize = function() {
      RetryingMessage.__super__.initialize.apply(this, arguments);
      return this._timers = {};
    };

    RetryingMessage.prototype.cancel = function() {
      this.clearTimers();
      this.hide();
      if ((this._actionInstance != null) && (this._actionInstance.abort != null)) {
        return this._actionInstance.abort();
      }
    };

    RetryingMessage.prototype.clearTimers = function() {
      var name, timer, _ref2, _ref3;
      _ref2 = this._timers;
      for (name in _ref2) {
        timer = _ref2[name];
        clearTimeout(timer);
      }
      this._timers = {};
      return (_ref3 = this.$message) != null ? _ref3.removeClass('messenger-retry-soon messenger-retry-later') : void 0;
    };

    RetryingMessage.prototype.render = function() {
      var action, name, _ref2, _results;
      RetryingMessage.__super__.render.apply(this, arguments);
      this.clearTimers();
      _ref2 = this.options.actions;
      _results = [];
      for (name in _ref2) {
        action = _ref2[name];
        if (action.auto) {
          _results.push(this.startCountdown(name, action));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    RetryingMessage.prototype.renderPhrase = function(action, time) {
      var phrase;
      phrase = action.phrase.replace('TIME', this.formatTime(time));
      return phrase;
    };

    RetryingMessage.prototype.formatTime = function(time) {
      var pluralize;
      pluralize = function(num, str) {
        num = Math.floor(num);
        if (num !== 1) {
          str = str + 's';
        }
        return 'in ' + num + ' ' + str;
      };
      if (Math.floor(time) === 0) {
        return 'now...';
      }
      if (time < 60) {
        return pluralize(time, 'second');
      }
      time /= 60;
      if (time < 60) {
        return pluralize(time, 'minute');
      }
      time /= 60;
      return pluralize(time, 'hour');
    };

    RetryingMessage.prototype.startCountdown = function(name, action) {
      var $phrase, remaining, tick, _ref2,
        _this = this;
      if (this._timers[name] != null) {
        return;
      }
      $phrase = this.$message.find("[data-action='" + name + "'] .messenger-phrase");
      remaining = (_ref2 = action.delay) != null ? _ref2 : 3;
      if (remaining <= 10) {
        this.$message.removeClass('messenger-retry-later');
        this.$message.addClass('messenger-retry-soon');
      } else {
        this.$message.removeClass('messenger-retry-soon');
        this.$message.addClass('messenger-retry-later');
      }
      tick = function() {
        var delta;
        $phrase.text(_this.renderPhrase(action, remaining));
        if (remaining > 0) {
          delta = Math.min(remaining, 1);
          remaining -= delta;
          return _this._timers[name] = setTimeout(tick, delta * 1000);
        } else {
          _this.$message.removeClass('messenger-retry-soon messenger-retry-later');
          delete _this._timers[name];
          return action.action();
        }
      };
      return tick();
    };

    return RetryingMessage;

  })(_Message);

  _Messenger = (function(_super) {

    __extends(_Messenger, _super);

    function _Messenger() {
      return _Messenger.__super__.constructor.apply(this, arguments);
    }

    _Messenger.prototype.tagName = 'ul';

    _Messenger.prototype.className = 'messenger';

    _Messenger.prototype.messageDefaults = {
      type: 'info'
    };

    _Messenger.prototype.initialize = function(options) {
      this.options = options != null ? options : {};
      this.history = [];
      return this.messageDefaults = $.extend({}, this.messageDefaults, this.options.messageDefaults);
    };

    _Messenger.prototype.render = function() {
      return this.updateMessageSlotClasses();
    };

    _Messenger.prototype.findById = function(id) {
      return _.filter(this.history, function(rec) {
        return rec.msg.options.id === id;
      });
    };

    _Messenger.prototype._reserveMessageSlot = function(msg) {
      var $slot, dmsg,
        _this = this;
      $slot = $('<li>');
      $slot.addClass('messenger-message-slot');
      this.$el.prepend($slot);
      this.history.push({
        msg: msg,
        $slot: $slot
      });
      this._enforceIdConstraint(msg);
      msg.on('update', function() {
        return _this._enforceIdConstraint(msg);
      });
      while (this.options.maxMessages && this.history.length > this.options.maxMessages) {
        dmsg = this.history.shift();
        dmsg.msg.remove();
        dmsg.$slot.remove();
      }
      return $slot;
    };

    _Messenger.prototype._enforceIdConstraint = function(msg) {
      var entry, _i, _len, _msg, _ref2;
      if (msg.options.id == null) {
        return;
      }
      _ref2 = this.history;
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        entry = _ref2[_i];
        _msg = entry.msg;
        if ((_msg.options.id != null) && _msg.options.id === msg.options.id && msg !== _msg) {
          if (msg.options.singleton) {
            msg.hide();
            return;
          } else {
            _msg.hide();
          }
        }
      }
    };

    _Messenger.prototype.newMessage = function(opts) {
      var msg, _ref2, _ref3, _ref4,
        _this = this;
      if (opts == null) {
        opts = {};
      }
      opts.messenger = this;
      _Message = (_ref2 = (_ref3 = Messenger.themes[(_ref4 = opts.theme) != null ? _ref4 : this.options.theme]) != null ? _ref3.Message : void 0) != null ? _ref2 : RetryingMessage;
      msg = new _Message(opts);
      msg.on('show', function() {
        if (opts.scrollTo && _this.$el.css('position') !== 'fixed') {
          return msg.scrollTo();
        }
      });
      msg.on('hide show render', this.updateMessageSlotClasses, this);
      return msg;
    };

    _Messenger.prototype.updateMessageSlotClasses = function() {
      var anyShown, last, rec, willBeFirst, _i, _len, _ref2;
      willBeFirst = true;
      last = null;
      anyShown = false;
      _ref2 = this.history;
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        rec = _ref2[_i];
        rec.$slot.removeClass('messenger-first messenger-last messenger-shown');
        if (rec.msg.shown && rec.msg.rendered) {
          rec.$slot.addClass('messenger-shown');
          anyShown = true;
          last = rec;
          if (willBeFirst) {
            willBeFirst = false;
            rec.$slot.addClass('messenger-first');
          }
        }
      }
      if (last != null) {
        last.$slot.addClass('messenger-last');
      }
      return this.$el["" + (anyShown ? 'remove' : 'add') + "Class"]('messenger-empty');
    };

    _Messenger.prototype.hideAll = function() {
      var rec, _i, _len, _ref2, _results;
      _ref2 = this.history;
      _results = [];
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        rec = _ref2[_i];
        _results.push(rec.msg.hide());
      }
      return _results;
    };

    _Messenger.prototype.post = function(opts) {
      var msg;
      if (_.isString(opts)) {
        opts = {
          message: opts
        };
      }
      opts = $.extend(true, {}, this.messageDefaults, opts);
      msg = this.newMessage(opts);
      msg.update(opts);
      return msg;
    };

    return _Messenger;

  })(BaseView);

  ActionMessenger = (function(_super) {

    __extends(ActionMessenger, _super);

    function ActionMessenger() {
      return ActionMessenger.__super__.constructor.apply(this, arguments);
    }

    ActionMessenger.prototype.doDefaults = {
      progressMessage: null,
      successMessage: null,
      errorMessage: "Error connecting to the server.",
      showSuccessWithoutError: true,
      retry: {
        auto: true,
        allow: true
      },
      action: $.ajax
    };

    ActionMessenger.prototype.hookBackboneAjax = function(msgr_opts) {
      var _ajax,
        _this = this;
      if (msgr_opts == null) {
        msgr_opts = {};
      }
      if (!(window.Backbone != null)) {
        throw 'Expected Backbone to be defined';
      }
      msgr_opts = _.defaults(msgr_opts, {
        id: 'BACKBONE_ACTION',
        errorMessage: false,
        successMessage: "Request completed successfully.",
        showSuccessWithoutError: false
      });
      _ajax = function(options) {
        var sync_msgr_opts;
        sync_msgr_opts = _.extend({}, msgr_opts, options.messenger);
        return _this["do"](sync_msgr_opts, options);
      };
      if (Backbone.ajax != null) {
        if (Backbone.ajax._withoutMessenger) {
          Backbone.ajax = Backbone.ajax._withoutMessenger;
        }
        if (!(msgr_opts.action != null) || msgr_opts.action === this.doDefaults.action) {
          msgr_opts.action = Backbone.ajax;
        }
        _ajax._withoutMessenger = Backbone.ajax;
        return Backbone.ajax = _ajax;
      } else {
        return Backbone.sync = _.wrap(Backbone.sync, function() {
          var args, _old_ajax, _old_sync;
          _old_sync = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          _old_ajax = $.ajax;
          $.ajax = _ajax;
          _old_sync.call.apply(_old_sync, [this].concat(__slice.call(args)));
          return $.ajax = _old_ajax;
        });
      }
    };

    ActionMessenger.prototype._getHandlerResponse = function(returnVal) {
      if (returnVal === false) {
        return false;
      }
      if (returnVal === true || !(returnVal != null)) {
        return true;
      }
      return returnVal;
    };

    ActionMessenger.prototype._parseEvents = function(events) {
      var desc, firstSpace, func, label, out, type, _ref2;
      if (events == null) {
        events = {};
      }
      out = {};
      for (label in events) {
        func = events[label];
        firstSpace = label.indexOf(' ');
        type = label.substring(0, firstSpace);
        desc = label.substring(firstSpace + 1);
        if ((_ref2 = out[type]) == null) {
          out[type] = {};
        }
        out[type][desc] = func;
      }
      return out;
    };

    ActionMessenger.prototype._normalizeResponse = function() {
      var data, elem, resp, type, xhr, _i, _len;
      resp = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      type = null;
      xhr = null;
      data = null;
      for (_i = 0, _len = resp.length; _i < _len; _i++) {
        elem = resp[_i];
        if (elem === 'success' || elem === 'timeout' || elem === 'abort') {
          type = elem;
        } else if (((elem != null ? elem.readyState : void 0) != null) && ((elem != null ? elem.responseText : void 0) != null)) {
          xhr = elem;
        } else if (_.isObject(elem)) {
          data = elem;
        }
      }
      return [type, data, xhr];
    };

    ActionMessenger.prototype.run = function() {
      var args, events, getMessageText, handler, handlers, m_opts, msg, old, opts, type, _ref2,
        _this = this;
      m_opts = arguments[0], opts = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      if (opts == null) {
        opts = {};
      }
      m_opts = $.extend(true, {}, this.messageDefaults, this.doDefaults, m_opts != null ? m_opts : {});
      events = this._parseEvents(m_opts.events);
      getMessageText = function(type, xhr) {
        var message;
        message = m_opts[type + 'Message'];
        if (_.isFunction(message)) {
          return message.call(_this, type, xhr);
        }
        return message;
      };
      msg = (_ref2 = m_opts.messageInstance) != null ? _ref2 : this.newMessage(m_opts);
      if (m_opts.id != null) {
        msg.options.id = m_opts.id;
      }
      if (m_opts.progressMessage != null) {
        msg.update($.extend({}, m_opts, {
          message: getMessageText('progress', null),
          type: 'info'
        }));
      }
      handlers = {};
      _.each(['error', 'success'], function(type) {
        var originalHandler;
        originalHandler = opts[type];
        return handlers[type] = function() {
          var data, defaultOpts, handlerResp, msgOpts, reason, resp, responseOpts, xhr, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
          resp = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          _ref3 = _this._normalizeResponse.apply(_this, resp), reason = _ref3[0], data = _ref3[1], xhr = _ref3[2];
          if (type === 'success' && !(msg.errorCount != null) && m_opts.showSuccessWithoutError === false) {
            m_opts['successMessage'] = null;
          }
          if (type === 'error') {
            if ((_ref4 = m_opts.errorCount) == null) {
              m_opts.errorCount = 0;
            }
            m_opts.errorCount += 1;
          }
          handlerResp = m_opts.returnsPromise ? resp[0] : typeof originalHandler === "function" ? originalHandler.apply(null, resp) : void 0;
          responseOpts = _this._getHandlerResponse(handlerResp);
          if (_.isString(responseOpts)) {
            responseOpts = {
              message: responseOpts
            };
          }
          if (type === 'error' && ((xhr != null ? xhr.status : void 0) === 0 || reason === 'abort')) {
            msg.hide();
            return;
          }
          if (type === 'error' && ((m_opts.ignoredErrorCodes != null) && (_ref5 = xhr != null ? xhr.status : void 0, __indexOf.call(m_opts.ignoredErrorCodes, _ref5) >= 0))) {
            msg.hide();
            return;
          }
          defaultOpts = {
            message: getMessageText(type, xhr),
            type: type,
            events: (_ref6 = events[type]) != null ? _ref6 : {},
            hideOnNavigate: type === 'success'
          };
          msgOpts = $.extend({}, m_opts, defaultOpts, responseOpts);
          if (typeof ((_ref7 = msgOpts.retry) != null ? _ref7.allow : void 0) === 'number') {
            msgOpts.retry.allow--;
          }
          if (type === 'error' && (xhr != null ? xhr.status : void 0) >= 500 && ((_ref8 = msgOpts.retry) != null ? _ref8.allow : void 0)) {
            if (msgOpts.retry.delay == null) {
              if (msgOpts.errorCount < 4) {
                msgOpts.retry.delay = 10;
              } else {
                msgOpts.retry.delay = 5 * 60;
              }
            }
            if (msgOpts.hideAfter) {
              if ((_ref9 = msgOpts._hideAfter) == null) {
                msgOpts._hideAfter = msgOpts.hideAfter;
              }
              msgOpts.hideAfter = msgOpts._hideAfter + msgOpts.retry.delay;
            }
            msgOpts._retryActions = true;
            msgOpts.actions = {
              retry: {
                label: 'retry now',
                phrase: 'Retrying TIME',
                auto: msgOpts.retry.auto,
                delay: msgOpts.retry.delay,
                action: function() {
                  msgOpts.messageInstance = msg;
                  return setTimeout(function() {
                    return _this["do"].apply(_this, [msgOpts, opts].concat(__slice.call(args)));
                  }, 0);
                }
              },
              cancel: {
                action: function() {
                  return msg.cancel();
                }
              }
            };
          } else if (msgOpts._retryActions) {
            delete msgOpts.actions.retry;
            delete msgOpts.actions.cancel;
            delete m_opts._retryActions;
          }
          msg.update(msgOpts);
          if (responseOpts && msgOpts.message) {
            Messenger(_.extend({}, _this.options, {
              instance: _this
            }));
            return msg.show();
          } else {
            return msg.hide();
          }
        };
      });
      if (!m_opts.returnsPromise) {
        for (type in handlers) {
          handler = handlers[type];
          old = opts[type];
          opts[type] = handler;
        }
      }
      msg._actionInstance = m_opts.action.apply(m_opts, [opts].concat(__slice.call(args)));
      if (m_opts.returnsPromise) {
        msg._actionInstance.then(handlers.success, handlers.error);
      }
      return msg;
    };

    ActionMessenger.prototype["do"] = ActionMessenger.prototype.run;

    ActionMessenger.prototype.ajax = function() {
      var args, m_opts;
      m_opts = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      m_opts.action = $.ajax;
      return this.run.apply(this, [m_opts].concat(__slice.call(args)));
    };

    ActionMessenger.prototype.expectPromise = function(action, m_opts) {
      m_opts = _.extend({}, m_opts, {
        action: action,
        returnsPromise: true
      });
      return this.run(m_opts);
    };

    ActionMessenger.prototype.error = function(m_opts) {
      if (m_opts == null) {
        m_opts = {};
      }
      if (typeof m_opts === 'string') {
        m_opts = {
          message: m_opts
        };
      }
      m_opts.type = 'error';
      return this.post(m_opts);
    };

    ActionMessenger.prototype.info = function(m_opts) {
      if (m_opts == null) {
        m_opts = {};
      }
      if (typeof m_opts === 'string') {
        m_opts = {
          message: m_opts
        };
      }
      m_opts.type = 'info';
      return this.post(m_opts);
    };

    ActionMessenger.prototype.success = function(m_opts) {
      if (m_opts == null) {
        m_opts = {};
      }
      if (typeof m_opts === 'string') {
        m_opts = {
          message: m_opts
        };
      }
      m_opts.type = 'success';
      return this.post(m_opts);
    };

    return ActionMessenger;

  })(_Messenger);

  $.fn.messenger = function() {
    var $el, args, func, instance, opts, _ref2, _ref3, _ref4;
    func = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (func == null) {
      func = {};
    }
    $el = this;
    if (!(func != null) || !_.isString(func)) {
      opts = func;
      if (!($el.data('messenger') != null)) {
        _Messenger = (_ref2 = (_ref3 = Messenger.themes[opts.theme]) != null ? _ref3.Messenger : void 0) != null ? _ref2 : ActionMessenger;
        $el.data('messenger', instance = new _Messenger($.extend({
          el: $el
        }, opts)));
        instance.render();
      }
      return $el.data('messenger');
    } else {
      return (_ref4 = $el.data('messenger'))[func].apply(_ref4, args);
    }
  };

  window.Messenger._call = function(opts) {
    var $el, $parent, choosen_loc, chosen_loc, classes, defaultOpts, inst, loc, locations, _i, _len;
    defaultOpts = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'future',
      maxMessages: 9,
      parentLocations: ['body']
    };
    opts = $.extend(defaultOpts, $._messengerDefaults, Messenger.options, opts);
    if (opts.theme != null) {
      opts.extraClasses += " messenger-theme-" + opts.theme;
    }
    inst = opts.instance || Messenger.instance;
    if (opts.instance == null) {
      locations = opts.parentLocations;
      $parent = null;
      choosen_loc = null;
      for (_i = 0, _len = locations.length; _i < _len; _i++) {
        loc = locations[_i];
        $parent = $(loc);
        if ($parent.length) {
          chosen_loc = loc;
          break;
        }
      }
      if (!inst) {
        $el = $('<ul>');
        $parent.prepend($el);
        inst = $el.messenger(opts);
        inst._location = chosen_loc;
        Messenger.instance = inst;
      } else if (!$(inst._location).is($(chosen_loc))) {
        inst.$el.detach();
        $parent.prepend(inst.$el);
      }
    }
    if (inst._addedClasses != null) {
      inst.$el.removeClass(inst._addedClasses);
    }
    inst.$el.addClass(classes = "" + inst.className + " " + opts.extraClasses);
    inst._addedClasses = classes;
    return inst;
  };

  $.extend(Messenger, {
    Message: RetryingMessage,
    Messenger: ActionMessenger,
    themes: (_ref2 = Messenger.themes) != null ? _ref2 : {}
  });

  $.globalMessenger = window.Messenger = Messenger;

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/layout/widget/widget.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Widget = (function () {
    function Widget(el) {
        this.$el = jQuery(el.nativeElement);
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
        /*
         When widget is closed remove its parent if it is .col-*
         */
        jQuery(document).on('close.widgster', function (e) {
            var $colWrap = jQuery(e.target)
                .closest('.content > .row > [class*="col-"]:not(.widget-container)');
            // remove colWrap only if there are no more widgets inside
            if (!$colWrap.find('.widget').not(e.target).length) {
                $colWrap.remove();
            }
        });
    }
    Widget.prototype.ngOnInit = function () {
        this.$el.widgster();
    };
    Widget = __decorate([
        core_1.Directive({
            selector: '[widget]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], Widget);
    return Widget;
    var _a;
}());
exports.Widget = Widget;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/layout/widget/widget.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var widget_directive_1 = __webpack_require__("./src/app/layout/widget/widget.directive.ts");
var WidgetModule = (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [widget_directive_1.Widget],
            exports: [widget_directive_1.Widget]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetModule);
    return WidgetModule;
}());
exports.WidgetModule = WidgetModule;


/***/ },

/***/ "./src/app/ui/accordion/accordion.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Accordion = (function () {
    function Accordion() {
    }
    Accordion = __decorate([
        core_1.Component({
            selector: '[accordion]',
            template: __webpack_require__("./src/app/ui/accordion/accordion.template.html"),
            styles: [__webpack_require__("./src/app/ui/accordion/accordion.style.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], Accordion);
    return Accordion;
}());
exports.Accordion = Accordion;


/***/ },

/***/ "./src/app/ui/accordion/accordion.style.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./src/app/ui/accordion/accordion.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Accordion\n  <small>Simple and toggle accordion</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-lg-6 col-xs-12\">\n    <h4><strong>Simple</strong> Accordion</h4>\n    <accordion [closeOthers]=\"true\" class=\"mb-lg show\" id=\"accordion\">\n      <accordion-group isOpen=\"true\">\n        <div accordion-heading>\n          Collapsible Group Item\n        </div>\n        <div>\n          <strong>Light Blue</strong> - is a next generation admin template based on the latest Metro design. There are few reasons we want to tell you, why we have created it:\n          We didn't like the darkness of most of admin templates, so we created this light one. We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.\n          We searched for a solution of how to make widgets look like real widgets, so we decided that deep background - is what makes widgets look real.\n          <br>\n          <em>- Some One</em>\n        </div>\n      </accordion-group>\n      <accordion-group>\n        <div accordion-heading>\n          Normal text Insertion\n        </div>\n        <div>\n          Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually. Everyone knows what is lore ipsum - it is\n          easy to understand if text is lore ipsum. You'll automatically skip - because you know - it's just non-informative stub. But what if there some text like this one? You start to read it!\n          But the goal of this text is different. So a bit of Lore Ipsum is always great practice.\n        </div>\n      </accordion-group>\n      <accordion-group>\n        <div accordion-heading>\n          Check It\n        </div>\n        <div>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin\n        </div>\n      </accordion-group>\n    </accordion>\n  </div>\n  <div class=\"col-lg-6 col-xs-12\">\n    <h4><strong>Toggle</strong> Accordion</h4>\n    <accordion [closeOthers]=\"false\" class=\"mb-lg show\" id=\"accordion2\">\n      <accordion-group>\n        <div accordion-heading>\n          Collapsible Group Item\n        </div>\n        <strong>Light Blue</strong> - is a next generation admin template based on the latest Metro design. There are few reasons we want to tell you, why we have created it:\n        We didn't like the darkness of most of admin templates, so we created this light one. We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.\n        We searched for a solution of how to make widgets look like real widgets, so we decided that deep background - is what makes widgets look real.\n        <br>\n        <em>- Some One</em>\n      </accordion-group>\n      <accordion-group>\n        <div accordion-heading>\n          Random from the Web\n        </div>\n        <p>Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very\n          controversial point. I think the opposite actually. Everyone knows what is lore ipsum\n          - it is easy to understand if text is lore ipsum. You'll automatically skip -\n          because you know - it's just non-informative stub. But what if there some text like\n          this one? You start to read it! But the goal of this text is different. The goal is\n          the example. So a bit of Lore Ipsum is always very good practice. Keep it in mind!\n          <br>\n          Awesome text that <strong>stands out</strong>\n        </p>\n      </accordion-group>\n      <accordion-group>\n        <div accordion-heading>\n          Check It\n        </div>\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin\n      </accordion-group>\n    </accordion>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/ui/buttons/buttons.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Buttons = (function () {
    function Buttons() {
    }
    Buttons = __decorate([
        core_1.Component({
            selector: '[buttons]',
            template: __webpack_require__("./src/app/ui/buttons/buttons.template.html"),
            styles: [__webpack_require__("./src/app/ui/buttons/buttons.style.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], Buttons);
    return Buttons;
}());
exports.Buttons = Buttons;


/***/ },

/***/ "./src/app/ui/buttons/buttons.style.scss":
/***/ function(module, exports) {

module.exports = "/*!\n * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)\n *\n * Copyright 2012 Stefan Petre\n * Improvements by Andrew Rowls\n * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)\n */\n.datepicker {\n  border-radius: 4px;\n  direction: ltr; }\n\n.datepicker-inline {\n  width: 220px; }\n\n.datepicker.datepicker-rtl {\n  direction: rtl; }\n\n.datepicker.datepicker-rtl table tr td span {\n  float: right; }\n\n.datepicker-dropdown {\n  top: 0;\n  left: 0;\n  padding: 4px; }\n\n.datepicker-dropdown:before {\n  content: '';\n  display: inline-block;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(0, 0, 0, 0.15);\n  border-top: 0;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  position: absolute; }\n\n.datepicker-dropdown:after {\n  content: '';\n  display: inline-block;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-top: 0;\n  position: absolute; }\n\n.datepicker-dropdown.datepicker-orient-left:before {\n  left: 6px; }\n\n.datepicker-dropdown.datepicker-orient-left:after {\n  left: 7px; }\n\n.datepicker-dropdown.datepicker-orient-right:before {\n  right: 6px; }\n\n.datepicker-dropdown.datepicker-orient-right:after {\n  right: 7px; }\n\n.datepicker-dropdown.datepicker-orient-bottom:before {\n  top: -7px; }\n\n.datepicker-dropdown.datepicker-orient-bottom:after {\n  top: -6px; }\n\n.datepicker-dropdown.datepicker-orient-top:before {\n  bottom: -7px;\n  border-bottom: 0;\n  border-top: 7px solid rgba(0, 0, 0, 0.15); }\n\n.datepicker-dropdown.datepicker-orient-top:after {\n  bottom: -6px;\n  border-bottom: 0;\n  border-top: 6px solid #fff; }\n\n.datepicker table {\n  margin: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.datepicker table tr td, .datepicker table tr th {\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  border: none; }\n\n.table-striped .datepicker table tr td, .table-striped .datepicker table tr th {\n  background-color: transparent; }\n\n.datepicker table tr td.new, .datepicker table tr td.old {\n  color: #777; }\n\n.datepicker table tr td.day:hover, .datepicker table tr td.focused {\n  background: #eee;\n  cursor: pointer; }\n\n.datepicker table tr td.disabled, .datepicker table tr td.disabled:hover {\n  background: 0 0;\n  color: #777;\n  cursor: default; }\n\n.datepicker table tr td.highlighted {\n  color: #000;\n  background-color: #d9edf7;\n  border-color: #85c5e5;\n  border-radius: 0; }\n\n.datepicker table tr td.highlighted.focus, .datepicker table tr td.highlighted:focus {\n  color: #000;\n  background-color: #afd9ee;\n  border-color: #298fc2; }\n\n.datepicker table tr td.highlighted:hover {\n  color: #000;\n  background-color: #afd9ee;\n  border-color: #52addb; }\n\n.datepicker table tr td.highlighted.active, .datepicker table tr td.highlighted:active {\n  color: #000;\n  background-color: #afd9ee;\n  border-color: #52addb; }\n\n.datepicker table tr td.highlighted.active.focus, .datepicker table tr td.highlighted.active:focus, .datepicker table tr td.highlighted.active:hover, .datepicker table tr td.highlighted:active.focus, .datepicker table tr td.highlighted:active:focus, .datepicker table tr td.highlighted:active:hover {\n  color: #000;\n  background-color: #91cbe8;\n  border-color: #298fc2; }\n\n.datepicker table tr td.highlighted.disabled.focus, .datepicker table tr td.highlighted.disabled:focus, .datepicker table tr td.highlighted.disabled:hover, .datepicker table tr td.highlighted[disabled].focus, .datepicker table tr td.highlighted[disabled]:focus, .datepicker table tr td.highlighted[disabled]:hover, fieldset[disabled] .datepicker table tr td.highlighted.focus, fieldset[disabled] .datepicker table tr td.highlighted:focus, fieldset[disabled] .datepicker table tr td.highlighted:hover {\n  background-color: #d9edf7;\n  border-color: #85c5e5; }\n\n.datepicker table tr td.highlighted.focused {\n  background: #afd9ee; }\n\n.datepicker table tr td.highlighted.disabled, .datepicker table tr td.highlighted.disabled:active {\n  background: #d9edf7;\n  color: #777; }\n\n.datepicker table tr td.today {\n  color: #000;\n  background-color: #ffdb99;\n  border-color: #ffb733; }\n\n.datepicker table tr td.today.focus, .datepicker table tr td.today:focus {\n  color: #000;\n  background-color: #ffc966;\n  border-color: #b37400; }\n\n.datepicker table tr td.today:hover {\n  color: #000;\n  background-color: #ffc966;\n  border-color: #f59e00; }\n\n.datepicker table tr td.today.active, .datepicker table tr td.today:active {\n  color: #000;\n  background-color: #ffc966;\n  border-color: #f59e00; }\n\n.datepicker table tr td.today.active.focus, .datepicker table tr td.today.active:focus, .datepicker table tr td.today.active:hover, .datepicker table tr td.today:active.focus, .datepicker table tr td.today:active:focus, .datepicker table tr td.today:active:hover {\n  color: #000;\n  background-color: #ffbc42;\n  border-color: #b37400; }\n\n.datepicker table tr td.today.disabled.focus, .datepicker table tr td.today.disabled:focus, .datepicker table tr td.today.disabled:hover, .datepicker table tr td.today[disabled].focus, .datepicker table tr td.today[disabled]:focus, .datepicker table tr td.today[disabled]:hover, fieldset[disabled] .datepicker table tr td.today.focus, fieldset[disabled] .datepicker table tr td.today:focus, fieldset[disabled] .datepicker table tr td.today:hover {\n  background-color: #ffdb99;\n  border-color: #ffb733; }\n\n.datepicker table tr td.today.focused {\n  background: #ffc966; }\n\n.datepicker table tr td.today.disabled, .datepicker table tr td.today.disabled:active {\n  background: #ffdb99;\n  color: #777; }\n\n.datepicker table tr td.range {\n  color: #000;\n  background-color: #eee;\n  border-color: #bbb;\n  border-radius: 0; }\n\n.datepicker table tr td.range.focus, .datepicker table tr td.range:focus {\n  color: #000;\n  background-color: #d5d5d5;\n  border-color: #7c7c7c; }\n\n.datepicker table tr td.range:hover {\n  color: #000;\n  background-color: #d5d5d5;\n  border-color: #9d9d9d; }\n\n.datepicker table tr td.range.active, .datepicker table tr td.range:active {\n  color: #000;\n  background-color: #d5d5d5;\n  border-color: #9d9d9d; }\n\n.datepicker table tr td.range.active.focus, .datepicker table tr td.range.active:focus, .datepicker table tr td.range.active:hover, .datepicker table tr td.range:active.focus, .datepicker table tr td.range:active:focus, .datepicker table tr td.range:active:hover {\n  color: #000;\n  background-color: #c3c3c3;\n  border-color: #7c7c7c; }\n\n.datepicker table tr td.range.disabled.focus, .datepicker table tr td.range.disabled:focus, .datepicker table tr td.range.disabled:hover, .datepicker table tr td.range[disabled].focus, .datepicker table tr td.range[disabled]:focus, .datepicker table tr td.range[disabled]:hover, fieldset[disabled] .datepicker table tr td.range.focus, fieldset[disabled] .datepicker table tr td.range:focus, fieldset[disabled] .datepicker table tr td.range:hover {\n  background-color: #eee;\n  border-color: #bbb; }\n\n.datepicker table tr td.range.focused {\n  background: #d5d5d5; }\n\n.datepicker table tr td.range.disabled, .datepicker table tr td.range.disabled:active {\n  background: #eee;\n  color: #777; }\n\n.datepicker table tr td.range.highlighted {\n  color: #000;\n  background-color: #e4eef3;\n  border-color: #9dc1d3; }\n\n.datepicker table tr td.range.highlighted.focus, .datepicker table tr td.range.highlighted:focus {\n  color: #000;\n  background-color: #c1d7e3;\n  border-color: #4b88a6; }\n\n.datepicker table tr td.range.highlighted:hover {\n  color: #000;\n  background-color: #c1d7e3;\n  border-color: #73a6c0; }\n\n.datepicker table tr td.range.highlighted.active, .datepicker table tr td.range.highlighted:active {\n  color: #000;\n  background-color: #c1d7e3;\n  border-color: #73a6c0; }\n\n.datepicker table tr td.range.highlighted.active.focus, .datepicker table tr td.range.highlighted.active:focus, .datepicker table tr td.range.highlighted.active:hover, .datepicker table tr td.range.highlighted:active.focus, .datepicker table tr td.range.highlighted:active:focus, .datepicker table tr td.range.highlighted:active:hover {\n  color: #000;\n  background-color: #a8c8d8;\n  border-color: #4b88a6; }\n\n.datepicker table tr td.range.highlighted.disabled.focus, .datepicker table tr td.range.highlighted.disabled:focus, .datepicker table tr td.range.highlighted.disabled:hover, .datepicker table tr td.range.highlighted[disabled].focus, .datepicker table tr td.range.highlighted[disabled]:focus, .datepicker table tr td.range.highlighted[disabled]:hover, fieldset[disabled] .datepicker table tr td.range.highlighted.focus, fieldset[disabled] .datepicker table tr td.range.highlighted:focus, fieldset[disabled] .datepicker table tr td.range.highlighted:hover {\n  background-color: #e4eef3;\n  border-color: #9dc1d3; }\n\n.datepicker table tr td.range.highlighted.focused {\n  background: #c1d7e3; }\n\n.datepicker table tr td.range.highlighted.disabled, .datepicker table tr td.range.highlighted.disabled:active {\n  background: #e4eef3;\n  color: #777; }\n\n.datepicker table tr td.range.today {\n  color: #000;\n  background-color: #f7ca77;\n  border-color: #f1a417; }\n\n.datepicker table tr td.range.today.focus, .datepicker table tr td.range.today:focus {\n  color: #000;\n  background-color: #f4b747;\n  border-color: #815608; }\n\n.datepicker table tr td.range.today:hover {\n  color: #000;\n  background-color: #f4b747;\n  border-color: #bf800c; }\n\n.datepicker table tr td.range.today.active, .datepicker table tr td.range.today:active {\n  color: #000;\n  background-color: #f4b747;\n  border-color: #bf800c; }\n\n.datepicker table tr td.range.today.active.focus, .datepicker table tr td.range.today.active:focus, .datepicker table tr td.range.today.active:hover, .datepicker table tr td.range.today:active.focus, .datepicker table tr td.range.today:active:focus, .datepicker table tr td.range.today:active:hover {\n  color: #000;\n  background-color: #f2aa25;\n  border-color: #815608; }\n\n.datepicker table tr td.range.today.disabled.focus, .datepicker table tr td.range.today.disabled:focus, .datepicker table tr td.range.today.disabled:hover, .datepicker table tr td.range.today[disabled].focus, .datepicker table tr td.range.today[disabled]:focus, .datepicker table tr td.range.today[disabled]:hover, fieldset[disabled] .datepicker table tr td.range.today.focus, fieldset[disabled] .datepicker table tr td.range.today:focus, fieldset[disabled] .datepicker table tr td.range.today:hover {\n  background-color: #f7ca77;\n  border-color: #f1a417; }\n\n.datepicker table tr td.range.today.disabled, .datepicker table tr td.range.today.disabled:active {\n  background: #f7ca77;\n  color: #777; }\n\n.datepicker table tr td.selected, .datepicker table tr td.selected.highlighted {\n  color: #fff;\n  background-color: #777;\n  border-color: #555;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); }\n\n.datepicker table tr td.selected.focus, .datepicker table tr td.selected.highlighted.focus, .datepicker table tr td.selected.highlighted:focus, .datepicker table tr td.selected:focus {\n  color: #fff;\n  background-color: #5e5e5e;\n  border-color: #161616; }\n\n.datepicker table tr td.selected.highlighted:hover, .datepicker table tr td.selected:hover {\n  color: #fff;\n  background-color: #5e5e5e;\n  border-color: #373737; }\n\n.datepicker table tr td.selected.active, .datepicker table tr td.selected.highlighted.active, .datepicker table tr td.selected.highlighted:active, .datepicker table tr td.selected:active {\n  color: #fff;\n  background-color: #5e5e5e;\n  border-color: #373737; }\n\n.datepicker table tr td.selected.active.focus, .datepicker table tr td.selected.active:focus, .datepicker table tr td.selected.active:hover, .datepicker table tr td.selected.highlighted.active.focus, .datepicker table tr td.selected.highlighted.active:focus, .datepicker table tr td.selected.highlighted.active:hover, .datepicker table tr td.selected.highlighted:active.focus, .datepicker table tr td.selected.highlighted:active:focus, .datepicker table tr td.selected.highlighted:active:hover, .datepicker table tr td.selected:active.focus, .datepicker table tr td.selected:active:focus, .datepicker table tr td.selected:active:hover {\n  color: #fff;\n  background-color: #4c4c4c;\n  border-color: #161616; }\n\n.datepicker table tr td.selected.disabled.focus, .datepicker table tr td.selected.disabled:focus, .datepicker table tr td.selected.disabled:hover, .datepicker table tr td.selected.highlighted.disabled.focus, .datepicker table tr td.selected.highlighted.disabled:focus, .datepicker table tr td.selected.highlighted.disabled:hover, .datepicker table tr td.selected.highlighted[disabled].focus, .datepicker table tr td.selected.highlighted[disabled]:focus, .datepicker table tr td.selected.highlighted[disabled]:hover, .datepicker table tr td.selected[disabled].focus, .datepicker table tr td.selected[disabled]:focus, .datepicker table tr td.selected[disabled]:hover, fieldset[disabled] .datepicker table tr td.selected.focus, fieldset[disabled] .datepicker table tr td.selected.highlighted.focus, fieldset[disabled] .datepicker table tr td.selected.highlighted:focus, fieldset[disabled] .datepicker table tr td.selected.highlighted:hover, fieldset[disabled] .datepicker table tr td.selected:focus, fieldset[disabled] .datepicker table tr td.selected:hover {\n  background-color: #777;\n  border-color: #555; }\n\n.datepicker table tr td.active, .datepicker table tr td.active.highlighted {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); }\n\n.datepicker table tr td.active.focus, .datepicker table tr td.active.highlighted.focus, .datepicker table tr td.active.highlighted:focus, .datepicker table tr td.active:focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40; }\n\n.datepicker table tr td.active.highlighted:hover, .datepicker table tr td.active:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74; }\n\n.datepicker table tr td.active.active, .datepicker table tr td.active.highlighted.active, .datepicker table tr td.active.highlighted:active, .datepicker table tr td.active:active {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74; }\n\n.datepicker table tr td.active.active.focus, .datepicker table tr td.active.active:focus, .datepicker table tr td.active.active:hover, .datepicker table tr td.active.highlighted.active.focus, .datepicker table tr td.active.highlighted.active:focus, .datepicker table tr td.active.highlighted.active:hover, .datepicker table tr td.active.highlighted:active.focus, .datepicker table tr td.active.highlighted:active:focus, .datepicker table tr td.active.highlighted:active:hover, .datepicker table tr td.active:active.focus, .datepicker table tr td.active:active:focus, .datepicker table tr td.active:active:hover {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40; }\n\n.datepicker table tr td.active.disabled.focus, .datepicker table tr td.active.disabled:focus, .datepicker table tr td.active.disabled:hover, .datepicker table tr td.active.highlighted.disabled.focus, .datepicker table tr td.active.highlighted.disabled:focus, .datepicker table tr td.active.highlighted.disabled:hover, .datepicker table tr td.active.highlighted[disabled].focus, .datepicker table tr td.active.highlighted[disabled]:focus, .datepicker table tr td.active.highlighted[disabled]:hover, .datepicker table tr td.active[disabled].focus, .datepicker table tr td.active[disabled]:focus, .datepicker table tr td.active[disabled]:hover, fieldset[disabled] .datepicker table tr td.active.focus, fieldset[disabled] .datepicker table tr td.active.highlighted.focus, fieldset[disabled] .datepicker table tr td.active.highlighted:focus, fieldset[disabled] .datepicker table tr td.active.highlighted:hover, fieldset[disabled] .datepicker table tr td.active:focus, fieldset[disabled] .datepicker table tr td.active:hover {\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n\n.datepicker table tr td span {\n  display: block;\n  width: 23%;\n  height: 54px;\n  line-height: 54px;\n  float: left;\n  margin: 1%;\n  cursor: pointer;\n  border-radius: 4px; }\n\n.datepicker table tr td span.focused, .datepicker table tr td span:hover {\n  background: #eee; }\n\n.datepicker table tr td span.disabled, .datepicker table tr td span.disabled:hover {\n  background: 0 0;\n  color: #777;\n  cursor: default; }\n\n.datepicker table tr td span.active, .datepicker table tr td span.active.disabled, .datepicker table tr td span.active.disabled:hover, .datepicker table tr td span.active:hover {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); }\n\n.datepicker table tr td span.active.disabled.focus, .datepicker table tr td span.active.disabled:focus, .datepicker table tr td span.active.disabled:hover.focus, .datepicker table tr td span.active.disabled:hover:focus, .datepicker table tr td span.active.focus, .datepicker table tr td span.active:focus, .datepicker table tr td span.active:hover.focus, .datepicker table tr td span.active:hover:focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40; }\n\n.datepicker table tr td span.active.disabled:hover, .datepicker table tr td span.active.disabled:hover:hover, .datepicker table tr td span.active:hover, .datepicker table tr td span.active:hover:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74; }\n\n.datepicker table tr td span.active.active, .datepicker table tr td span.active.disabled.active, .datepicker table tr td span.active.disabled:active, .datepicker table tr td span.active.disabled:hover.active, .datepicker table tr td span.active.disabled:hover:active, .datepicker table tr td span.active:active, .datepicker table tr td span.active:hover.active, .datepicker table tr td span.active:hover:active {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74; }\n\n.datepicker table tr td span.active.active.focus, .datepicker table tr td span.active.active:focus, .datepicker table tr td span.active.active:hover, .datepicker table tr td span.active.disabled.active.focus, .datepicker table tr td span.active.disabled.active:focus, .datepicker table tr td span.active.disabled.active:hover, .datepicker table tr td span.active.disabled:active.focus, .datepicker table tr td span.active.disabled:active:focus, .datepicker table tr td span.active.disabled:active:hover, .datepicker table tr td span.active.disabled:hover.active.focus, .datepicker table tr td span.active.disabled:hover.active:focus, .datepicker table tr td span.active.disabled:hover.active:hover, .datepicker table tr td span.active.disabled:hover:active.focus, .datepicker table tr td span.active.disabled:hover:active:focus, .datepicker table tr td span.active.disabled:hover:active:hover, .datepicker table tr td span.active:active.focus, .datepicker table tr td span.active:active:focus, .datepicker table tr td span.active:active:hover, .datepicker table tr td span.active:hover.active.focus, .datepicker table tr td span.active:hover.active:focus, .datepicker table tr td span.active:hover.active:hover, .datepicker table tr td span.active:hover:active.focus, .datepicker table tr td span.active:hover:active:focus, .datepicker table tr td span.active:hover:active:hover {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40; }\n\n.datepicker table tr td span.active.disabled.disabled.focus, .datepicker table tr td span.active.disabled.disabled:focus, .datepicker table tr td span.active.disabled.disabled:hover, .datepicker table tr td span.active.disabled.focus, .datepicker table tr td span.active.disabled:focus, .datepicker table tr td span.active.disabled:hover, .datepicker table tr td span.active.disabled:hover.disabled.focus, .datepicker table tr td span.active.disabled:hover.disabled:focus, .datepicker table tr td span.active.disabled:hover.disabled:hover, .datepicker table tr td span.active.disabled:hover[disabled].focus, .datepicker table tr td span.active.disabled:hover[disabled]:focus, .datepicker table tr td span.active.disabled:hover[disabled]:hover, .datepicker table tr td span.active.disabled[disabled].focus, .datepicker table tr td span.active.disabled[disabled]:focus, .datepicker table tr td span.active.disabled[disabled]:hover, .datepicker table tr td span.active:hover.disabled.focus, .datepicker table tr td span.active:hover.disabled:focus, .datepicker table tr td span.active:hover.disabled:hover, .datepicker table tr td span.active:hover[disabled].focus, .datepicker table tr td span.active:hover[disabled]:focus, .datepicker table tr td span.active:hover[disabled]:hover, .datepicker table tr td span.active[disabled].focus, .datepicker table tr td span.active[disabled]:focus, .datepicker table tr td span.active[disabled]:hover, fieldset[disabled] .datepicker table tr td span.active.disabled.focus, fieldset[disabled] .datepicker table tr td span.active.disabled:focus, fieldset[disabled] .datepicker table tr td span.active.disabled:hover, fieldset[disabled] .datepicker table tr td span.active.disabled:hover.focus, fieldset[disabled] .datepicker table tr td span.active.disabled:hover:focus, fieldset[disabled] .datepicker table tr td span.active.disabled:hover:hover, fieldset[disabled] .datepicker table tr td span.active.focus, fieldset[disabled] .datepicker table tr td span.active:focus, fieldset[disabled] .datepicker table tr td span.active:hover, fieldset[disabled] .datepicker table tr td span.active:hover.focus, fieldset[disabled] .datepicker table tr td span.active:hover:focus, fieldset[disabled] .datepicker table tr td span.active:hover:hover {\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n\n.datepicker table tr td span.new, .datepicker table tr td span.old {\n  color: #777; }\n\n.datepicker .datepicker-switch {\n  width: 145px; }\n\n.datepicker .datepicker-switch, .datepicker .next, .datepicker .prev, .datepicker tfoot tr th {\n  cursor: pointer; }\n\n.datepicker .datepicker-switch:hover, .datepicker .next:hover, .datepicker .prev:hover, .datepicker tfoot tr th:hover {\n  background: #eee; }\n\n.datepicker .cw {\n  font-size: 10px;\n  width: 12px;\n  padding: 0 2px 0 5px;\n  vertical-align: middle; }\n\n.input-group.date .input-group-addon {\n  cursor: pointer; }\n\n.input-daterange {\n  width: 100%; }\n\n.input-daterange input {\n  text-align: center; }\n\n.input-daterange input:first-child {\n  border-radius: 3px 0 0 3px; }\n\n.input-daterange input:last-child {\n  border-radius: 0 3px 3px 0; }\n\n.input-daterange .input-group-addon {\n  width: auto;\n  min-width: 16px;\n  padding: 4px 5px;\n  line-height: 1.42857143;\n  text-shadow: 0 1px 0 #fff;\n  border-width: 1px 0;\n  margin-left: -5px;\n  margin-right: -5px; }\n\n/*# sourceMappingURL=bootstrap-datepicker3.min.css.map */\n/*!\n * Timepicker Component for Twitter Bootstrap\n *\n * Copyright 2013 Joris de Wit\n *\n * Contributors https://github.com/jdewit/bootstrap-timepicker/graphs/contributors\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n */\n.bootstrap-timepicker {\n  position: relative; }\n\n.bootstrap-timepicker.pull-right .bootstrap-timepicker-widget.dropdown-menu {\n  left: auto;\n  right: 0; }\n\n.bootstrap-timepicker.pull-right .bootstrap-timepicker-widget.dropdown-menu:before {\n  left: auto;\n  right: 12px; }\n\n.bootstrap-timepicker.pull-right .bootstrap-timepicker-widget.dropdown-menu:after {\n  left: auto;\n  right: 13px; }\n\n.bootstrap-timepicker .input-group-addon {\n  cursor: pointer; }\n\n.bootstrap-timepicker .input-group-addon i {\n  display: inline-block;\n  width: 16px;\n  height: 16px; }\n\n.bootstrap-timepicker-widget.dropdown-menu {\n  padding: 4px; }\n\n.bootstrap-timepicker-widget.dropdown-menu.open {\n  display: inline-block; }\n\n.bootstrap-timepicker-widget.dropdown-menu:before {\n  border-bottom: 7px solid rgba(0, 0, 0, 0.2);\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  content: \"\";\n  display: inline-block;\n  position: absolute; }\n\n.bootstrap-timepicker-widget.dropdown-menu:after {\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \"\";\n  display: inline-block;\n  position: absolute; }\n\n.bootstrap-timepicker-widget.timepicker-orient-left:before {\n  left: 6px; }\n\n.bootstrap-timepicker-widget.timepicker-orient-left:after {\n  left: 7px; }\n\n.bootstrap-timepicker-widget.timepicker-orient-right:before {\n  right: 6px; }\n\n.bootstrap-timepicker-widget.timepicker-orient-right:after {\n  right: 7px; }\n\n.bootstrap-timepicker-widget.timepicker-orient-top:before {\n  top: -7px; }\n\n.bootstrap-timepicker-widget.timepicker-orient-top:after {\n  top: -6px; }\n\n.bootstrap-timepicker-widget.timepicker-orient-bottom:before {\n  bottom: -7px;\n  border-bottom: 0;\n  border-top: 7px solid #999; }\n\n.bootstrap-timepicker-widget.timepicker-orient-bottom:after {\n  bottom: -6px;\n  border-bottom: 0;\n  border-top: 6px solid #fff; }\n\n.bootstrap-timepicker-widget a.btn, .bootstrap-timepicker-widget input {\n  border-radius: 4px; }\n\n.bootstrap-timepicker-widget table {\n  width: 100%;\n  margin: 0; }\n\n.bootstrap-timepicker-widget table td {\n  text-align: center;\n  height: 30px;\n  margin: 0;\n  padding: 2px; }\n\n.bootstrap-timepicker-widget table td:not(.separator) {\n  min-width: 30px; }\n\n.bootstrap-timepicker-widget table td span {\n  width: 100%; }\n\n.bootstrap-timepicker-widget table td a {\n  border: 1px transparent solid;\n  width: 100%;\n  display: inline-block;\n  margin: 0;\n  padding: 8px 0;\n  outline: 0;\n  color: #333; }\n\n.bootstrap-timepicker-widget table td a:hover {\n  text-decoration: none;\n  background-color: #eee;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  border-color: #ddd; }\n\n.bootstrap-timepicker-widget table td a i {\n  margin-top: 2px;\n  font-size: 18px; }\n\n.bootstrap-timepicker-widget table td input {\n  width: 25px;\n  margin: 0;\n  text-align: center; }\n\n.bootstrap-timepicker-widget .modal-content {\n  padding: 4px; }\n\n@media (min-width: 767px) {\n  .bootstrap-timepicker-widget.modal {\n    width: 200px;\n    margin-left: -100px; } }\n\n@media (max-width: 767px) {\n  .bootstrap-timepicker {\n    width: 100%; }\n  .bootstrap-timepicker .dropdown-menu {\n    width: 100%; } }\n\n/*!\n * Bootstrap-select v1.11.2 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2016 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */\nselect.bs-select-hidden,\nselect.selectpicker {\n  display: none !important; }\n\n.bootstrap-select {\n  width: 220px \\0;\n  /*IE9 and below*/ }\n\n.bootstrap-select > .dropdown-toggle {\n  width: 100%;\n  padding-right: 25px;\n  z-index: 1; }\n\n.bootstrap-select > .dropdown-toggle.bs-placeholder,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999; }\n\n.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none; }\n\n.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2; }\n\n.has-error .bootstrap-select .dropdown-toggle,\n.error .bootstrap-select .dropdown-toggle {\n  border-color: #b94a48; }\n\n.bootstrap-select.fit-width {\n  width: auto !important; }\n\n.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 220px; }\n\n.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px; }\n\n.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none; }\n\n.bootstrap-select.form-control:not([class*=\"col-\"]) {\n  width: 100%; }\n\n.bootstrap-select.form-control.input-group-btn {\n  z-index: auto; }\n\n.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.bootstrap-select.btn-group:not(.input-group-btn),\n.bootstrap-select.btn-group[class*=\"col-\"] {\n  float: none;\n  display: inline-block;\n  margin-left: 0; }\n\n.bootstrap-select.btn-group.dropdown-menu-right,\n.bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right,\n.row .bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right {\n  float: right; }\n\n.form-inline .bootstrap-select.btn-group,\n.form-horizontal .bootstrap-select.btn-group,\n.form-group .bootstrap-select.btn-group {\n  margin-bottom: 0; }\n\n.form-group-lg .bootstrap-select.btn-group.form-control,\n.form-group-sm .bootstrap-select.btn-group.form-control {\n  padding: 0; }\n\n.form-inline .bootstrap-select.btn-group .form-control {\n  width: 100%; }\n\n.bootstrap-select.btn-group.disabled,\n.bootstrap-select.btn-group > .disabled {\n  cursor: not-allowed; }\n\n.bootstrap-select.btn-group.disabled:focus,\n.bootstrap-select.btn-group > .disabled:focus {\n  outline: none !important; }\n\n.bootstrap-select.btn-group.bs-container {\n  position: absolute;\n  height: 0 !important;\n  padding: 0 !important; }\n\n.bootstrap-select.btn-group.bs-container .dropdown-menu {\n  z-index: 1060; }\n\n.bootstrap-select.btn-group .dropdown-toggle .filter-option {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  text-align: left; }\n\n.bootstrap-select.btn-group .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle; }\n\n.bootstrap-select.btn-group[class*=\"col-\"] .dropdown-toggle {\n  width: 100%; }\n\n.bootstrap-select.btn-group .dropdown-menu {\n  min-width: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.bootstrap-select.btn-group .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.bootstrap-select.btn-group .dropdown-menu li {\n  position: relative; }\n\n.bootstrap-select.btn-group .dropdown-menu li.active small {\n  color: #fff; }\n\n.bootstrap-select.btn-group .dropdown-menu li.disabled a {\n  cursor: not-allowed; }\n\n.bootstrap-select.btn-group .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.bootstrap-select.btn-group .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em; }\n\n.bootstrap-select.btn-group .dropdown-menu li a span.check-mark {\n  display: none; }\n\n.bootstrap-select.btn-group .dropdown-menu li a span.text {\n  display: inline-block; }\n\n.bootstrap-select.btn-group .dropdown-menu li small {\n  padding-left: 0.5em; }\n\n.bootstrap-select.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.bootstrap-select.btn-group .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap; }\n\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option {\n  position: static; }\n\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px; }\n\n.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px; }\n\n.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px; }\n\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle {\n  z-index: 1061; }\n\n.bootstrap-select.show-menu-arrow .dropdown-toggle:before {\n  content: '';\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none; }\n\n.bootstrap-select.show-menu-arrow .dropdown-toggle:after {\n  content: '';\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none; }\n\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before {\n  bottom: auto;\n  top: -3px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0; }\n\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after {\n  bottom: auto;\n  top: -3px;\n  border-top: 6px solid white;\n  border-bottom: 0; }\n\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before {\n  right: 12px;\n  left: auto; }\n\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after {\n  right: 13px;\n  left: auto; }\n\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:before,\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:after {\n  display: block; }\n\n.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px; }\n\n.bs-actionsbox {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.bs-actionsbox .btn-group button {\n  width: 50%; }\n\n.bs-donebutton {\n  float: left;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.bs-donebutton .btn-group button {\n  width: 100%; }\n\n.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px; }\n\n.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none; }\n\n/*# sourceMappingURL=bootstrap-select.css.map */\n.select2-container {\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle; }\n  .select2-container .select2-selection--single {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: block;\n    height: 28px;\n    user-select: none;\n    -webkit-user-select: none; }\n    .select2-container .select2-selection--single .select2-selection__rendered {\n      display: block;\n      padding-left: 8px;\n      padding-right: 20px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    .select2-container .select2-selection--single .select2-selection__clear {\n      position: relative; }\n  .select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered {\n    padding-right: 8px;\n    padding-left: 20px; }\n  .select2-container .select2-selection--multiple {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: block;\n    min-height: 32px;\n    user-select: none;\n    -webkit-user-select: none; }\n    .select2-container .select2-selection--multiple .select2-selection__rendered {\n      display: inline-block;\n      overflow: hidden;\n      padding-left: 8px;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .select2-container .select2-search--inline {\n    float: left; }\n    .select2-container .select2-search--inline .select2-search__field {\n      box-sizing: border-box;\n      border: none;\n      font-size: 100%;\n      margin-top: 5px;\n      padding: 0; }\n      .select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {\n        -webkit-appearance: none; }\n\n.select2-dropdown {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  left: -100000px;\n  width: 100%;\n  z-index: 1051; }\n\n.select2-results {\n  display: block; }\n\n.select2-results__options {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.select2-results__option {\n  padding: 6px;\n  user-select: none;\n  -webkit-user-select: none; }\n  .select2-results__option[aria-selected] {\n    cursor: pointer; }\n\n.select2-container--open .select2-dropdown {\n  left: 0; }\n\n.select2-container--open .select2-dropdown--above {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.select2-container--open .select2-dropdown--below {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.select2-search--dropdown {\n  display: block;\n  padding: 4px; }\n  .select2-search--dropdown .select2-search__field {\n    padding: 4px;\n    width: 100%;\n    box-sizing: border-box; }\n    .select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {\n      -webkit-appearance: none; }\n  .select2-search--dropdown.select2-search--hide {\n    display: none; }\n\n.select2-close-mask {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  min-width: 100%;\n  height: auto;\n  width: auto;\n  opacity: 0;\n  z-index: 99;\n  background-color: #fff;\n  filter: alpha(opacity=0); }\n\n.select2-hidden-accessible {\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important; }\n\n.select2-container--default .select2-selection--single {\n  background-color: #fff;\n  border: 1px solid #aaa;\n  border-radius: 4px; }\n  .select2-container--default .select2-selection--single .select2-selection__rendered {\n    color: #444;\n    line-height: 28px; }\n  .select2-container--default .select2-selection--single .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold; }\n  .select2-container--default .select2-selection--single .select2-selection__placeholder {\n    color: #999; }\n  .select2-container--default .select2-selection--single .select2-selection__arrow {\n    height: 26px;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    width: 20px; }\n    .select2-container--default .select2-selection--single .select2-selection__arrow b {\n      border-color: #888 transparent transparent transparent;\n      border-style: solid;\n      border-width: 5px 4px 0 4px;\n      height: 0;\n      left: 50%;\n      margin-left: -4px;\n      margin-top: -2px;\n      position: absolute;\n      top: 50%;\n      width: 0; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--single .select2-selection__clear {\n  float: left; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow {\n  left: 1px;\n  right: auto; }\n\n.select2-container--default.select2-container--disabled .select2-selection--single {\n  background-color: #eee;\n  cursor: default; }\n  .select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear {\n    display: none; }\n\n.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {\n  border-color: transparent transparent #888 transparent;\n  border-width: 0 4px 5px 4px; }\n\n.select2-container--default .select2-selection--multiple {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  cursor: text; }\n  .select2-container--default .select2-selection--multiple .select2-selection__rendered {\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    padding: 0 5px;\n    width: 100%; }\n    .select2-container--default .select2-selection--multiple .select2-selection__rendered li {\n      list-style: none; }\n  .select2-container--default .select2-selection--multiple .select2-selection__placeholder {\n    color: #999;\n    margin-top: 5px;\n    float: left; }\n  .select2-container--default .select2-selection--multiple .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-right: 10px; }\n  .select2-container--default .select2-selection--multiple .select2-selection__choice {\n    background-color: #e4e4e4;\n    border: 1px solid #aaa;\n    border-radius: 4px;\n    cursor: default;\n    float: left;\n    margin-right: 5px;\n    margin-top: 5px;\n    padding: 0 5px; }\n  .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {\n    color: #999;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: bold;\n    margin-right: 2px; }\n    .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {\n      color: #333; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice, .select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__placeholder, .select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-search--inline {\n  float: right; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice {\n  margin-left: 5px;\n  margin-right: auto; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__remove {\n  margin-left: 2px;\n  margin-right: auto; }\n\n.select2-container--default.select2-container--focus .select2-selection--multiple {\n  border: solid black 1px;\n  outline: 0; }\n\n.select2-container--default.select2-container--disabled .select2-selection--multiple {\n  background-color: #eee;\n  cursor: default; }\n\n.select2-container--default.select2-container--disabled .select2-selection__choice__remove {\n  display: none; }\n\n.select2-container--default.select2-container--open.select2-container--above .select2-selection--single, .select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.select2-container--default.select2-container--open.select2-container--below .select2-selection--single, .select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.select2-container--default .select2-search--dropdown .select2-search__field {\n  border: 1px solid #aaa; }\n\n.select2-container--default .select2-search--inline .select2-search__field {\n  background: transparent;\n  border: none;\n  outline: 0;\n  box-shadow: none;\n  -webkit-appearance: textfield; }\n\n.select2-container--default .select2-results > .select2-results__options {\n  max-height: 200px;\n  overflow-y: auto; }\n\n.select2-container--default .select2-results__option[role=group] {\n  padding: 0; }\n\n.select2-container--default .select2-results__option[aria-disabled=true] {\n  color: #999; }\n\n.select2-container--default .select2-results__option[aria-selected=true] {\n  background-color: #ddd; }\n\n.select2-container--default .select2-results__option .select2-results__option {\n  padding-left: 1em; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__group {\n    padding-left: 0; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__option {\n    margin-left: -1em;\n    padding-left: 2em; }\n    .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n      margin-left: -2em;\n      padding-left: 3em; }\n      .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n        margin-left: -3em;\n        padding-left: 4em; }\n        .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n          margin-left: -4em;\n          padding-left: 5em; }\n          .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n            margin-left: -5em;\n            padding-left: 6em; }\n\n.select2-container--default .select2-results__option--highlighted[aria-selected] {\n  background-color: #5897fb;\n  color: white; }\n\n.select2-container--default .select2-results__group {\n  cursor: default;\n  display: block;\n  padding: 6px; }\n\n.select2-container--classic .select2-selection--single {\n  background-color: #f7f7f7;\n  border: 1px solid #aaa;\n  border-radius: 0.25rem;\n  outline: 0;\n  background-image: -webkit-linear-gradient(top, white 50%, #eeeeee 100%);\n  background-image: -o-linear-gradient(top, white 50%, #eeeeee 100%);\n  background-image: linear-gradient(to bottom, white 50%, #eeeeee 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0); }\n  .select2-container--classic .select2-selection--single:focus {\n    border: 1px solid #5897fb; }\n  .select2-container--classic .select2-selection--single .select2-selection__rendered {\n    color: #444;\n    line-height: 28px; }\n  .select2-container--classic .select2-selection--single .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold;\n    margin-right: 10px; }\n  .select2-container--classic .select2-selection--single .select2-selection__placeholder {\n    color: #999; }\n  .select2-container--classic .select2-selection--single .select2-selection__arrow {\n    background-color: #ddd;\n    border: none;\n    border-left: 1px solid #aaa;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    height: 26px;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    width: 20px;\n    background-image: -webkit-linear-gradient(top, #eeeeee 50%, #cccccc 100%);\n    background-image: -o-linear-gradient(top, #eeeeee 50%, #cccccc 100%);\n    background-image: linear-gradient(to bottom, #eeeeee 50%, #cccccc 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFCCCCCC', GradientType=0); }\n    .select2-container--classic .select2-selection--single .select2-selection__arrow b {\n      border-color: #888 transparent transparent transparent;\n      border-style: solid;\n      border-width: 5px 4px 0 4px;\n      height: 0;\n      left: 50%;\n      margin-left: -4px;\n      margin-top: -2px;\n      position: absolute;\n      top: 50%;\n      width: 0; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--single .select2-selection__clear {\n  float: left; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow {\n  border: none;\n  border-right: 1px solid #aaa;\n  border-radius: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  left: 1px;\n  right: auto; }\n\n.select2-container--classic.select2-container--open .select2-selection--single {\n  border: 1px solid #5897fb; }\n  .select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow {\n    background: transparent;\n    border: none; }\n    .select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow b {\n      border-color: transparent transparent #888 transparent;\n      border-width: 0 4px 5px 4px; }\n\n.select2-container--classic.select2-container--open.select2-container--above .select2-selection--single {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  background-image: -webkit-linear-gradient(top, white 0%, #eeeeee 50%);\n  background-image: -o-linear-gradient(top, white 0%, #eeeeee 50%);\n  background-image: linear-gradient(to bottom, white 0%, #eeeeee 50%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0); }\n\n.select2-container--classic.select2-container--open.select2-container--below .select2-selection--single {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  background-image: -webkit-linear-gradient(top, #eeeeee 50%, white 100%);\n  background-image: -o-linear-gradient(top, #eeeeee 50%, white 100%);\n  background-image: linear-gradient(to bottom, #eeeeee 50%, white 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFFFFFFF', GradientType=0); }\n\n.select2-container--classic .select2-selection--multiple {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 0.25rem;\n  cursor: text;\n  outline: 0; }\n  .select2-container--classic .select2-selection--multiple:focus {\n    border: 1px solid #5897fb; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__rendered {\n    list-style: none;\n    margin: 0;\n    padding: 0 5px; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__clear {\n    display: none; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__choice {\n    background-color: #e4e4e4;\n    border: 1px solid #aaa;\n    border-radius: 0.25rem;\n    cursor: default;\n    float: left;\n    margin-right: 5px;\n    margin-top: 5px;\n    padding: 0 5px; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__choice__remove {\n    color: #888;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: bold;\n    margin-right: 2px; }\n    .select2-container--classic .select2-selection--multiple .select2-selection__choice__remove:hover {\n      color: #555; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice {\n  float: right; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice {\n  margin-left: 5px;\n  margin-right: auto; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__remove {\n  margin-left: 2px;\n  margin-right: auto; }\n\n.select2-container--classic.select2-container--open .select2-selection--multiple {\n  border: 1px solid #5897fb; }\n\n.select2-container--classic.select2-container--open.select2-container--above .select2-selection--multiple {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.select2-container--classic.select2-container--open.select2-container--below .select2-selection--multiple {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.select2-container--classic .select2-search--dropdown .select2-search__field {\n  border: 1px solid #aaa;\n  outline: 0; }\n\n.select2-container--classic .select2-search--inline .select2-search__field {\n  outline: 0;\n  box-shadow: none; }\n\n.select2-container--classic .select2-dropdown {\n  background-color: white;\n  border: 1px solid transparent; }\n\n.select2-container--classic .select2-dropdown--above {\n  border-bottom: none; }\n\n.select2-container--classic .select2-dropdown--below {\n  border-top: none; }\n\n.select2-container--classic .select2-results > .select2-results__options {\n  max-height: 200px;\n  overflow-y: auto; }\n\n.select2-container--classic .select2-results__option[role=group] {\n  padding: 0; }\n\n.select2-container--classic .select2-results__option[aria-disabled=true] {\n  color: grey; }\n\n.select2-container--classic .select2-results__option--highlighted[aria-selected] {\n  background-color: #3875d7;\n  color: white; }\n\n.select2-container--classic .select2-results__group {\n  cursor: default;\n  display: block;\n  padding: 6px; }\n\n.select2-container--classic.select2-container--open .select2-dropdown {\n  border-color: #5897fb; }\n\n/*! Select2 Bootstrap Theme v0.1.0-beta.9 | MIT License | github.com/select2/select2-bootstrap-theme */\n.select2-container--bootstrap {\n  display: block;\n  /*------------------------------------*      #COMMON STYLES\n  \\*------------------------------------*/\n  /**\n   * Search field in the Select2 dropdown.\n   */\n  /**\n   * No outline for all search fields - in the dropdown\n   * and inline in multi Select2s.\n   */\n  /**\n   * Adjust Select2's choices hover and selected styles to match\n   * Bootstrap 3's default dropdown styles.\n   *\n   * @see http://getbootstrap.com/components/#dropdowns\n   */\n  /**\n   * Clear the selection.\n   */\n  /**\n   * Address disabled Select2 styles.\n   *\n   * @see https://select2.github.io/examples.html#disabled\n   * @see http://getbootstrap.com/css/#forms-control-disabled\n   */\n  /*------------------------------------*      #DROPDOWN\n  \\*------------------------------------*/\n  /**\n   * Dropdown border color and box-shadow.\n   */\n  /**\n   * Limit the dropdown height.\n   */\n  /*------------------------------------*      #SINGLE SELECT2\n  \\*------------------------------------*/\n  /*------------------------------------*    #MULTIPLE SELECT2\n  \\*------------------------------------*/\n  /**\n   * Address Bootstrap control sizing classes\n   *\n   * 1. Reset Bootstrap defaults.\n   * 2. Adjust the dropdown arrow button icon position.\n   *\n   * @see http://getbootstrap.com/css/#forms-control-sizes\n   */\n  /* 1 */\n  /*------------------------------------*    #RTL SUPPORT\n  \\*------------------------------------*/ }\n  .select2-container--bootstrap .select2-selection {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    color: #555;\n    font-size: 1rem;\n    outline: 0; }\n    .select2-container--bootstrap .select2-selection.form-control {\n      border-radius: 0.25rem; }\n  .select2-container--bootstrap .select2-search--dropdown .select2-search__field {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 0.25rem;\n    color: #555;\n    font-size: 1rem; }\n  .select2-container--bootstrap .select2-search__field {\n    outline: 0;\n    /* Firefox 18- */\n    /**\n     * Firefox 19+\n     *\n     * @see http://stackoverflow.com/questions/24236240/color-for-styled-placeholder-text-is-muted-in-firefox\n     */ }\n    .select2-container--bootstrap .select2-search__field::-webkit-input-placeholder {\n      color: #999; }\n    .select2-container--bootstrap .select2-search__field:-moz-placeholder {\n      color: #999; }\n    .select2-container--bootstrap .select2-search__field::-moz-placeholder {\n      color: #999;\n      opacity: 1; }\n    .select2-container--bootstrap .select2-search__field:-ms-input-placeholder {\n      color: #999; }\n  .select2-container--bootstrap .select2-results__option {\n    padding: 0.385rem 12px;\n    /**\n     * Disabled results.\n     *\n     * @see https://select2.github.io/examples.html#disabled-results\n     */\n    /**\n     * Hover state.\n     */\n    /**\n     * Selected state.\n     */ }\n    .select2-container--bootstrap .select2-results__option[role=group] {\n      padding: 0; }\n    .select2-container--bootstrap .select2-results__option[aria-disabled=true] {\n      color: #999999;\n      cursor: not-allowed; }\n    .select2-container--bootstrap .select2-results__option[aria-selected=true] {\n      background-color: #4e91ce;\n      color: #ffffff; }\n    .select2-container--bootstrap .select2-results__option--highlighted[aria-selected] {\n      background-color: #4e91ce;\n      color: #fff; }\n    .select2-container--bootstrap .select2-results__option .select2-results__option {\n      padding: 0.385rem 12px; }\n      .select2-container--bootstrap .select2-results__option .select2-results__option .select2-results__group {\n        padding-left: 0; }\n      .select2-container--bootstrap .select2-results__option .select2-results__option .select2-results__option {\n        margin-left: -12px;\n        padding-left: 24px; }\n        .select2-container--bootstrap .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n          margin-left: -24px;\n          padding-left: 36px; }\n          .select2-container--bootstrap .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n            margin-left: -36px;\n            padding-left: 48px; }\n            .select2-container--bootstrap .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n              margin-left: -48px;\n              padding-left: 60px; }\n              .select2-container--bootstrap .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n                margin-left: -60px;\n                padding-left: 72px; }\n  .select2-container--bootstrap .select2-results__group {\n    color: #999999;\n    display: block;\n    padding: 0.385rem 12px;\n    font-size: 0.92rem;\n    line-height: 1.42857;\n    white-space: nowrap; }\n  .select2-container--bootstrap.select2-container--focus .select2-selection, .select2-container--bootstrap.select2-container--open .select2-selection {\n    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n    border-color: #66afe9; }\n  .select2-container--bootstrap.select2-container--open {\n    /**\n     * Make the dropdown arrow point up while the dropdown is visible.\n     */\n    /**\n     * Handle border radii of the container when the dropdown is showing.\n     */ }\n    .select2-container--bootstrap.select2-container--open .select2-selection .select2-selection__arrow b {\n      border-color: transparent transparent #999 transparent;\n      border-width: 0 4px 4px 4px; }\n    .select2-container--bootstrap.select2-container--open.select2-container--below .select2-selection {\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0;\n      border-bottom-color: transparent; }\n    .select2-container--bootstrap.select2-container--open.select2-container--above .select2-selection {\n      border-top-right-radius: 0;\n      border-top-left-radius: 0;\n      border-top-color: transparent; }\n  .select2-container--bootstrap .select2-selection__clear {\n    color: #999;\n    cursor: pointer;\n    float: right;\n    font-weight: bold;\n    margin-right: 10px; }\n    .select2-container--bootstrap .select2-selection__clear:hover {\n      color: #666; }\n  .select2-container--bootstrap.select2-container--disabled .select2-selection {\n    border-color: #ccc; }\n  .select2-container--bootstrap.select2-container--disabled .select2-selection,\n  .select2-container--bootstrap.select2-container--disabled .select2-search__field {\n    cursor: not-allowed; }\n  .select2-container--bootstrap.select2-container--disabled .select2-selection,\n  .select2-container--bootstrap.select2-container--disabled .select2-selection--multiple .select2-selection__choice {\n    background-color: #eeeeee; }\n  .select2-container--bootstrap.select2-container--disabled .select2-selection__clear,\n  .select2-container--bootstrap.select2-container--disabled .select2-selection--multiple .select2-selection__choice__remove {\n    display: none; }\n  .select2-container--bootstrap .select2-dropdown {\n    border-color: #66afe9;\n    overflow-x: hidden;\n    margin-top: -1px; }\n    .select2-container--bootstrap .select2-dropdown--above {\n      margin-top: 1px; }\n  .select2-container--bootstrap .select2-results > .select2-results__options {\n    max-height: 200px;\n    overflow-y: auto; }\n  .select2-container--bootstrap .select2-selection--single {\n    height: 35px;\n    line-height: 1.42857;\n    padding: 0.385rem 24px 0.385rem 12px;\n    /**\n     * Adjust the single Select2's dropdown arrow button appearance.\n     */ }\n    .select2-container--bootstrap .select2-selection--single .select2-selection__arrow {\n      position: absolute;\n      bottom: 0;\n      right: 12px;\n      top: 0;\n      width: 4px; }\n      .select2-container--bootstrap .select2-selection--single .select2-selection__arrow b {\n        border-color: #999 transparent transparent transparent;\n        border-style: solid;\n        border-width: 4px 4px 0 4px;\n        height: 0;\n        left: 0;\n        margin-left: -4px;\n        margin-top: -2px;\n        position: absolute;\n        top: 50%;\n        width: 0; }\n    .select2-container--bootstrap .select2-selection--single .select2-selection__rendered {\n      color: #555;\n      padding: 0; }\n    .select2-container--bootstrap .select2-selection--single .select2-selection__placeholder {\n      color: #999; }\n  .select2-container--bootstrap .select2-selection--multiple {\n    min-height: 35px;\n    padding: 0;\n    height: auto;\n    /**\n     * Make Multi Select2's choices match Bootstrap 3's default button styles.\n     */\n    /**\n     * Minus 2px borders.\n     */\n    /**\n     * Clear the selection.\n     */ }\n    .select2-container--bootstrap .select2-selection--multiple .select2-selection__rendered {\n      box-sizing: border-box;\n      display: block;\n      line-height: 1.42857;\n      list-style: none;\n      margin: 0;\n      overflow: hidden;\n      padding: 0;\n      width: 100%;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    .select2-container--bootstrap .select2-selection--multiple .select2-selection__placeholder {\n      color: #999;\n      float: left;\n      margin-top: 5px; }\n    .select2-container--bootstrap .select2-selection--multiple .select2-selection__choice {\n      color: #555;\n      background: #666;\n      border: 1px solid transparent;\n      border-radius: 0.25rem;\n      cursor: default;\n      float: left;\n      margin: -0.615rem 0 0 6px;\n      padding: 0 0.385rem; }\n    .select2-container--bootstrap .select2-selection--multiple .select2-search--inline .select2-search__field {\n      background: transparent;\n      padding: 0 12px;\n      height: 33px;\n      line-height: 1.42857;\n      margin-top: 0;\n      min-width: 5em; }\n    .select2-container--bootstrap .select2-selection--multiple .select2-selection__choice__remove {\n      color: #999;\n      cursor: pointer;\n      display: inline-block;\n      font-weight: bold;\n      margin-right: 0.1925rem; }\n      .select2-container--bootstrap .select2-selection--multiple .select2-selection__choice__remove:hover {\n        color: #666; }\n    .select2-container--bootstrap .select2-selection--multiple .select2-selection__clear {\n      margin-top: 0.385rem; }\n  .select2-container--bootstrap .select2-selection--single.input-sm,\n  .input-group-sm .select2-container--bootstrap .select2-selection--single,\n  .form-group-sm .select2-container--bootstrap .select2-selection--single {\n    border-radius: 0.2rem;\n    font-size: 0.92rem;\n    height: 2.15385rem;\n    line-height: 1.5;\n    padding: 0.31rem 22px 0.31rem 10px;\n    /* 2 */ }\n    .select2-container--bootstrap .select2-selection--single.input-sm .select2-selection__arrow b,\n    .input-group-sm .select2-container--bootstrap .select2-selection--single .select2-selection__arrow b,\n    .form-group-sm .select2-container--bootstrap .select2-selection--single .select2-selection__arrow b {\n      margin-left: -0.31rem; }\n  .select2-container--bootstrap .select2-selection--multiple.input-sm,\n  .input-group-sm .select2-container--bootstrap .select2-selection--multiple,\n  .form-group-sm .select2-container--bootstrap .select2-selection--multiple {\n    min-height: 2.15385rem;\n    border-radius: 0.2rem; }\n    .select2-container--bootstrap .select2-selection--multiple.input-sm .select2-selection__choice,\n    .input-group-sm .select2-container--bootstrap .select2-selection--multiple .select2-selection__choice,\n    .form-group-sm .select2-container--bootstrap .select2-selection--multiple .select2-selection__choice {\n      font-size: 0.92rem;\n      line-height: 1.5;\n      margin: -0.69rem 0 0 5px;\n      padding: 0 0.31rem; }\n    .select2-container--bootstrap .select2-selection--multiple.input-sm .select2-search--inline .select2-search__field,\n    .input-group-sm .select2-container--bootstrap .select2-selection--multiple .select2-search--inline .select2-search__field,\n    .form-group-sm .select2-container--bootstrap .select2-selection--multiple .select2-search--inline .select2-search__field {\n      padding: 0 10px;\n      font-size: 0.92rem;\n      height: 0.15385rem;\n      line-height: 1.5; }\n    .select2-container--bootstrap .select2-selection--multiple.input-sm .select2-selection__clear,\n    .input-group-sm .select2-container--bootstrap .select2-selection--multiple .select2-selection__clear,\n    .form-group-sm .select2-container--bootstrap .select2-selection--multiple .select2-selection__clear {\n      margin-top: 0.31rem; }\n  .select2-container--bootstrap .select2-selection--single.input-lg,\n  .input-group-lg .select2-container--bootstrap .select2-selection--single,\n  .form-group-lg .select2-container--bootstrap .select2-selection--single {\n    border-radius: 0.3rem;\n    font-size: 1.25rem;\n    height: 3.35635rem;\n    line-height: 1.33;\n    padding: 0.77rem 28px 0.77rem 16px;\n    /* 1 */ }\n    .select2-container--bootstrap .select2-selection--single.input-lg .select2-selection__arrow,\n    .input-group-lg .select2-container--bootstrap .select2-selection--single .select2-selection__arrow,\n    .form-group-lg .select2-container--bootstrap .select2-selection--single .select2-selection__arrow {\n      width: 4px; }\n      .select2-container--bootstrap .select2-selection--single.input-lg .select2-selection__arrow b,\n      .input-group-lg .select2-container--bootstrap .select2-selection--single .select2-selection__arrow b,\n      .form-group-lg .select2-container--bootstrap .select2-selection--single .select2-selection__arrow b {\n        border-width: 4px 4px 0 4px;\n        margin-left: -4px;\n        margin-left: -0.77rem;\n        margin-top: -2px; }\n  .select2-container--bootstrap .select2-selection--multiple.input-lg,\n  .input-group-lg .select2-container--bootstrap .select2-selection--multiple,\n  .form-group-lg .select2-container--bootstrap .select2-selection--multiple {\n    min-height: 3.35635rem;\n    border-radius: 0.3rem; }\n    .select2-container--bootstrap .select2-selection--multiple.input-lg .select2-selection__choice,\n    .input-group-lg .select2-container--bootstrap .select2-selection--multiple .select2-selection__choice,\n    .form-group-lg .select2-container--bootstrap .select2-selection--multiple .select2-selection__choice {\n      font-size: 1.25rem;\n      line-height: 1.33;\n      border-radius: 0.25rem;\n      margin: -0.23rem 0 0 8px;\n      padding: 0 0.77rem; }\n    .select2-container--bootstrap .select2-selection--multiple.input-lg .select2-search--inline .select2-search__field,\n    .input-group-lg .select2-container--bootstrap .select2-selection--multiple .select2-search--inline .select2-search__field,\n    .form-group-lg .select2-container--bootstrap .select2-selection--multiple .select2-search--inline .select2-search__field {\n      padding: 0 16px;\n      font-size: 1.25rem;\n      height: 1.35635rem;\n      line-height: 1.33; }\n    .select2-container--bootstrap .select2-selection--multiple.input-lg .select2-selection__clear,\n    .input-group-lg .select2-container--bootstrap .select2-selection--multiple .select2-selection__clear,\n    .form-group-lg .select2-container--bootstrap .select2-selection--multiple .select2-selection__clear {\n      margin-top: 0.77rem; }\n  .select2-container--bootstrap .select2-selection.input-lg.select2-container--open .select2-selection--single {\n    /**\n     * Make the dropdown arrow point up while the dropdown is visible.\n     */ }\n    .select2-container--bootstrap .select2-selection.input-lg.select2-container--open .select2-selection--single .select2-selection__arrow b {\n      border-color: transparent transparent #999 transparent;\n      border-width: 0 4px 4px 4px; }\n  .input-group-lg .select2-container--bootstrap .select2-selection.select2-container--open .select2-selection--single {\n    /**\n     * Make the dropdown arrow point up while the dropdown is visible.\n     */ }\n    .input-group-lg .select2-container--bootstrap .select2-selection.select2-container--open .select2-selection--single .select2-selection__arrow b {\n      border-color: transparent transparent #999 transparent;\n      border-width: 0 4px 4px 4px; }\n  .select2-container--bootstrap[dir=\"rtl\"] {\n    /**\n     * Single Select2\n     *\n     * 1. Makes sure that .select2-selection__placeholder is positioned\n     *    correctly.\n     */\n    /**\n     * Multiple Select2\n     */ }\n    .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--single {\n      padding-left: 24px;\n      padding-right: 12px; }\n      .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered {\n        padding-right: 0;\n        padding-left: 0;\n        text-align: right;\n        /* 1 */ }\n      .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--single .select2-selection__clear {\n        float: left; }\n      .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow {\n        left: 12px;\n        right: auto; }\n        .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow b {\n          margin-left: 0; }\n    .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice,\n    .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--multiple .select2-selection__placeholder {\n      float: right; }\n    .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice {\n      margin-left: 0;\n      margin-right: 6px; }\n    .select2-container--bootstrap[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__remove {\n      margin-left: 2px;\n      margin-right: auto; }\n\n/*------------------------------------*  #ADDITIONAL GOODIES\n\\*------------------------------------*/\n/**\n * Address Bootstrap's validation states\n *\n * If a Select2 widget parent has one of Bootstrap's validation state modifier\n * classes, adjust Select2's border colors and focus states accordingly.\n * You may apply said classes to the Select2 dropdown (body > .select2-container)\n * via JavaScript match Bootstraps' to make its styles match.\n *\n * @see http://getbootstrap.com/css/#forms-control-validation\n */\n.has-warning .select2-dropdown,\n.has-warning .select2-selection {\n  border-color: #ffffff; }\n\n.has-warning .select2-container--focus .select2-selection,\n.has-warning .select2-container--open .select2-selection {\n  border-color: #e6e6e6; }\n\n.has-warning.select2-drop-active {\n  border-color: #e6e6e6; }\n  .has-warning.select2-drop-active.select2-drop.select2-drop-above {\n    border-top-color: #e6e6e6; }\n\n.has-error .select2-dropdown,\n.has-error .select2-selection {\n  border-color: #ffffff; }\n\n.has-error .select2-container--focus .select2-selection,\n.has-error .select2-container--open .select2-selection {\n  border-color: #e6e6e6; }\n\n.has-error.select2-drop-active {\n  border-color: #e6e6e6; }\n  .has-error.select2-drop-active.select2-drop.select2-drop-above {\n    border-top-color: #e6e6e6; }\n\n.has-success .select2-dropdown,\n.has-success .select2-selection {\n  border-color: #ffffff; }\n\n.has-success .select2-container--focus .select2-selection,\n.has-success .select2-container--open .select2-selection {\n  border-color: #e6e6e6; }\n\n.has-success.select2-drop-active {\n  border-color: #e6e6e6; }\n  .has-success.select2-drop-active.select2-drop.select2-drop-above {\n    border-top-color: #e6e6e6; }\n\n/**\n * Select2 widgets in Bootstrap Input Groups\n *\n * When Select2 widgets are combined with other elements using Bootstraps\n * \"Input Group\" component, we don't want specific edges of the Select2\n * container to have a border-radius.\n *\n * Use .select2-bootstrap-prepend and .select2-bootstrap-append on\n * a Bootstrap 3 .input-group to let the contained Select2 widget know which\n * edges should not be rounded as they are directly followed by another element.\n *\n * @see http://getbootstrap.com/components/#input-groups\n */\n/**\n * Mimick Bootstraps .input-group .form-control styles.\n *\n * @see https://github.com/twbs/bootstrap/blob/master/less/input-groups.less\n */\n.input-group .select2-container--bootstrap {\n  display: table;\n  table-layout: fixed;\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  /**\n   * Adjust z-index like Bootstrap does to show the focus-box-shadow\n   * above appended buttons in .input-group and .form-group.\n   */ }\n  .input-group .select2-container--bootstrap.select2-container--open, .input-group .select2-container--bootstrap.select2-container--focus {\n    z-index: 3; }\n\n.input-group.select2-bootstrap-prepend .select2-container--bootstrap .select2-selection {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group.select2-bootstrap-append .select2-container--bootstrap .select2-selection {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n/**\n * Adjust alignment of Bootstrap buttons in Bootstrap Input Groups to address\n * Multi Select2's height which - depending on how many elements have been selected -\n * may grow taller than its initial size.\n *\n * @see http://getbootstrap.com/components/#input-groups\n */\n.select2-bootstrap-append .select2-container--bootstrap,\n.select2-bootstrap-append .input-group-btn,\n.select2-bootstrap-append .input-group-btn .btn,\n.select2-bootstrap-prepend .select2-container--bootstrap,\n.select2-bootstrap-prepend .input-group-btn,\n.select2-bootstrap-prepend .input-group-btn .btn {\n  vertical-align: top; }\n\n/**\n * Temporary fix for https://github.com/select2/select2-bootstrap-theme/issues/9\n *\n * Provides `!important` for certain properties of the class applied to the\n * original `<select>` element to hide it.\n *\n * @see https://github.com/select2/select2/pull/3301\n * @see https://github.com/fk/select2/commit/31830c7b32cb3d8e1b12d5b434dee40a6e753ada\n */\n.form-control.select2-hidden-accessible {\n  position: absolute !important;\n  width: 1px !important; }\n\n/**\n * Display override for inline forms\n */\n.form-inline .select2-container--bootstrap {\n  display: inline-block; }\n\n.widget > header h4 {\n  font-size: 14px; }\n\n.btn-xs {\n  padding: 0 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.dropdown-toggle {\n  padding-left: 10px; }\n  .dropdown-toggle:after {\n    margin-right: 0;\n    margin-left: 0; }\n"

/***/ },

/***/ "./src/app/ui/buttons/buttons.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Buttons\n  <small>Buttons, states and more</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <section widget class=\"widget\">\n      <header>\n        <h4>\n          <i class=\"fa fa-star\"></i>\n          Default buttons\n          <small>\n            Classes on hover\n          </small>\n        </h4>\n      </header>\n      <div class=\"widget-body text-xs-center\">\n        <div class=\"well\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-default\"\n                      tooltipPlacement=\"top\"\n                      tooltip=\".btn .btn-default\">\n                Default\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-primary\"\n                      tooltipPlacement=\"top\"\n                      tooltip=\".btn .btn-primary\">\n                Primary\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-info\"\n                      tooltipPlacement=\"top\"\n                      tooltip=\".btn .btn-info\">\n                &nbsp;Info&nbsp;\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"well\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-success\"\n                      tooltipPlacement=\"top\"\n                      tooltip=\".btn .btn-success\">\n                Success\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-warning\"\n                      tooltipPlacement=\"top\"\n                      tooltip=\".btn .btn-warning\">\n                Warning\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-danger\"\n                      tooltipPlacement=\"top\"\n                      tooltip=\".btn .btn-danger\">\n                Danger\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"well\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-inverse\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-inverse\">\n                Inverse\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section widget class=\"widget\">\n      <header>\n        <h4>\n          <i class=\"fa fa-star\"></i>\n          Small ones\n        </h4>\n      </header>\n      <div class=\"widget-body text-xs-center\">\n        <div class=\"well well-sm well-white\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-default btn-sm\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-default .btn-sm\">\n                Default\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-primary btn-sm\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-primary .btn-sm\">\n                Primary\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-info btn-sm\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-info .btn-sm\">\n                &nbsp;Info&nbsp;\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"well well-sm well-white\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-success btn-sm\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-success .btn-sm\">\n                Success\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-warning btn-sm\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-warning .btn-sm\">\n                Warning\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-danger btn-sm\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-danger .btn-sm\">\n                Danger\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"well well-sm well-white\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\"></div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-inverse btn-sm\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-inverse .btn-sm\">\n                Inverse\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section widget class=\"widget\">\n      <header>\n        <h4>\n          <i class=\"fa fa-star\"></i>\n          Large ones\n        </h4>\n      </header>\n      <div class=\"widget-body text-xs-center\">\n        <div class=\"well\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-default btn-lg\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-default .btn-lg\">\n                Default\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-primary btn-lg\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-primary .btn-lg\">\n                Primary\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-info btn-lg\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-info .btn-lg\">\n                &nbsp;Info&nbsp;\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"well\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-success btn-lg\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-success .btn-lg\">\n                Success\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-warning btn-lg\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-warning .btn-lg\">\n                Warning\n              </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-danger btn-lg\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-danger .btn-lg\">\n                Danger\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"well\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-xs-4\"></div>\n            <div class=\"col-sm-4 col-md-4 col-xs-4\">\n              <button type=\"button\" class=\"btn btn-inverse btn-lg\"\n                      tooltipPlacement=\"top\" tooltip=\".btn .btn-inverse .btn-lg\">\n                Inverse\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"col-lg-6\">\n    <section widget class=\"widget\">\n      <header>\n        <h4>\n          <i class=\"fa fa-cogs\"></i>\n          Options\n        </h4>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"well well-sm\">\n          <blockquote class=\"blockquote blockquote-sm\">Disabled state</blockquote>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-md-12\">\n              <button type=\"button\"\n                      class=\"btn btn-default\"\n                      disabled=\"disabled\">\n                Default\n              </button>\n              <button type=\"button\"\n                      class=\"btn btn-primary\"\n                      disabled=\"disabled\">\n                Primary\n              </button>\n              <button type=\"button\"\n                      class=\"btn btn-info\"\n                      disabled=\"disabled\">\n                &nbsp; Info &nbsp;\n              </button>\n              <button type=\"button\"\n                      class=\"btn btn-inverse\"\n                      disabled=\"disabled\">\n                Inverse\n              </button>\n\n            </div>\n          </div>\n          <div class=\"row text-xs-center\">\n            <div class=\"col-md-12\">\n              <button type=\"button\"\n                      class=\"btn btn-success\"\n                      disabled=\"disabled\">\n                Success\n              </button>\n              <button type=\"button\"\n                      class=\"btn btn-warning\"\n                      disabled=\"disabled\">\n                Warning\n              </button>\n              <button type=\"button\"\n                      class=\"btn btn-danger\"\n                      disabled=\"disabled\">\n                Danger\n              </button>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"well well-sm\">\n          <blockquote class=\"blockquote blockquote-sm\">Button groups</blockquote>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-md-12\">\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-primary\">\n                  One\n                </button>\n                <button type=\"button\" class=\"btn btn-primary\">\n                  Two\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row text-xs-center\">\n            <div class=\"col-md-12\">\n              <button type=\"button\"\n                      class=\"btn btn-success\">\n                <i class=\"fa fa-align-left\"></i>\n              </button>\n              <button type=\"button\"\n                      class=\"btn btn-warning\">\n                <i class=\"fa fa-align-center\"></i>\n              </button>\n              <button type=\"button\"\n                      class=\"btn btn-danger\">\n                <i class=\"fa fa-align-right\"></i>\n              </button>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"well well-sm\">\n          <blockquote class=\"blockquote blockquote-sm\">Button dropdown menus</blockquote>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-md-12\">\n              <div class=\"btn-group\">\n                <button class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">\n                  &nbsp; One &nbsp;\n                  <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div class=\"btn-group\">\n                <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                  &nbsp; Two &nbsp;\n                  <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div class=\"btn-group\">\n                <button class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\">\n                  &nbsp; Three &nbsp;\n                  <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"well well-sm\">\n          <blockquote class=\"blockquote blockquote-sm\">Segmented dropdowns</blockquote>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-md-12 col-xs-12\">\n              <div class=\"btn-group\">\n                <button class=\"btn btn-default btn-lg\">Gray</button>\n                <button class=\"btn btn-default btn-lg dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div class=\"btn-group\">\n                <button class=\"btn btn-inverse\">White</button>\n                <button class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div class=\"btn-group\">\n                <button class=\"btn btn-info btn-sm\">Blue</button>\n                <button class=\"btn btn-info btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div class=\"btn-group\">\n                <button class=\"btn btn-primary btn-xs\">Teal</button>\n                <button class=\"btn btn-primary btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"fa fa-caret-down\"></i>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n                  <li class=\"dropdown-divider\"></li>\n                  <li><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"well well-sm\">\n          <blockquote class=\"blockquote blockquote-sm\">Checkboxes</blockquote>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-md-12\">\n              <div class=\"btn-group\" data-toggle=\"buttons\">\n                <label class=\"btn btn-default\">\n                  <input type=\"checkbox\"> Left way\n                </label>\n                <label class=\"btn btn-default\">\n                  <input type=\"checkbox\"> Middle way\n                </label>\n                <label class=\"btn btn-default\">\n                  <input type=\"checkbox\"> Right way\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"well well-sm\">\n          <blockquote class=\"blockquote blockquote-sm\">Radio</blockquote>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-md-12\">\n              <div class=\"btn-group\" data-toggle=\"buttons\">\n                <label class=\"btn btn-success\">\n                  <input type=\"radio\" name=\"options\" id=\"option1\"> Left way\n                </label>\n                <label class=\"btn btn-success\">\n                  <input type=\"radio\" name=\"options\" id=\"option2\"> Middle way\n                </label>\n                <label class=\"btn btn-success active\">\n                  <input type=\"radio\" name=\"options\" id=\"option3\"> Right way\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"well well-sm\">\n          <blockquote class=\"blockquote blockquote-sm\">Block level buttons</blockquote>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-xs-10 col-md-8 offset-md-2 offset-xs-1\">\n              <button class=\"btn btn-lg btn-warning btn-block\">\n                Block level\n              </button>\n            </div>\n          </div>\n          <div class=\"row margin-bottom text-xs-center\">\n            <div class=\"col-xs-10 col-md-8 offset-md-2 offset-xs-1\">\n              <button class=\"btn btn-lg btn-danger btn-block\">\n                Block level\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/ui/dialogs/dialogs.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Dialogs = (function () {
    function Dialogs() {
    }
    Dialogs.prototype.ngOnInit = function () {
        jQuery('[data-toggle="popover"]').popover();
    };
    Dialogs = __decorate([
        core_1.Component({
            selector: '[dialogs]',
            template: __webpack_require__("./src/app/ui/dialogs/dialogs.template.html"),
            styles: [__webpack_require__("./src/app/ui/dialogs/dialogs.style.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], Dialogs);
    return Dialogs;
}());
exports.Dialogs = Dialogs;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/ui/dialogs/dialogs.style.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./src/app/ui/dialogs/dialogs.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Dialogs\n  <small>Normal & blocking dialog</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-md-5 col-md-offset-1\">\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-magic\"></i>\n          Dialogs\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n          <div class=\"modal\" style=\"position: relative; top: auto; right: auto; left: auto; bottom: auto; z-index: 1; display: block; overflow: hidden;\">\n          <div class=\"modal-dialog\" style=\"width: auto; padding: 0;\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                <h4 class=\"modal-title\">Modal title</h4>\n              </div>\n              <div class=\"modal-body\">\n                <p>One fine body…</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n            <!-- /.modal-content -->\n          </div>\n          <!-- /.modal-dialog -->\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"col-md-5\">\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-bolt\"></i>\n          Live Demo\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\"\n                  data-toggle=\"modal\" data-target=\"#myModal\">Launch modal</button>\n          <div id=\"myModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Modal Heading</h4>\n              </div>\n              <div class=\"modal-body\">\n                <h4>Text in a modal</h4>\n                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n\n                <h4>Popover in a modal</h4>\n                  <p>This <button class=\"btn btn-default popover-test\" data-toggle=\"popover\" data-content=\"And here's some amazing content. It's very engaging. right?\" data-original-title=\"A Title\">button</button> should trigger a popover on click.</p>\n\n                <h4>Tooltips in a modal</h4>\n                  <p><a href=\"#\" class=\"tooltip-test\" tooltip=\"Tooltip\" tooltipPlacement=\"top\">This link</a> and <a href=\"#\" class=\"tooltip-test\" tooltip=\"Tooltip\" tooltipPlacement=\"top\">that link</a> should have tooltips on hover.</p>\n\n                <hr>\n\n                <h4>Blah blah blah text</h4>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n\n            </div>\n            <!-- /.modal-content -->\n          </div>\n          <!-- /.modal-dialog -->\n        </div>\n      </div>\n    </section>\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-ban\"></i>\n          Blocking one\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <button type=\"button\" class=\"btn btn-warning btn-lg btn-block\"\n                  data-toggle=\"modal\" data-target=\"#myModal2\" data-backdrop=\"static\">Launch blocking modal</button>\n          <div id=\"myModal2\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel2\">Modal Heading</h4>\n              </div>\n              <div class=\"modal-body\">\n                <h4>Text in a modal</h4>\n                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n\n                <h4>Popover in a modal</h4>\n                  <p>This <a href=\"#\" role=\"button\" class=\"btn btn-default popover-test\" title=\"\" data-content=\"And here's some amazing content. It's very engaging. right?\" data-original-title=\"A Title\">button</a> should trigger a popover on click.</p>\n\n                <h4>Tooltips in a modal</h4>\n                  <p><a href=\"#\" class=\"tooltip-test\" title=\"\" data-original-title=\"Tooltip\">This link</a> and <a href=\"#\" class=\"tooltip-test\" title=\"\" data-original-title=\"Tooltip\">that link</a> should have tooltips on hover.</p>\n\n                <hr>\n\n                <h4>Blah blah blah text</h4>\n                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n\n            </div>\n            <!-- /.modal-content -->\n          </div>\n          <!-- /.modal-dialog -->\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/ui/icons/icons.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Icons = (function () {
    function Icons() {
    }
    Icons = __decorate([
        core_1.Component({
            selector: '[icons]',
            template: __webpack_require__("./src/app/ui/icons/icons.template.html"),
            styles: [__webpack_require__("./src/app/ui/icons/icons.style.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Icons);
    return Icons;
}());
exports.Icons = Icons;


/***/ },

/***/ "./src/app/ui/icons/icons.style.scss":
/***/ function(module, exports) {

module.exports = "/* Using [component name] on selectors, when --ViewEncapsulation-- is None */\ndiv[icons] .nav-tabs .nav-link.active {\n  color: #f8f8f8;\n  cursor: default; }\n  div[icons] .nav-tabs .nav-link.active:hover, div[icons] .nav-tabs .nav-link.active:focus {\n    border-color: transparent;\n    color: #f8f8f8;\n    background-color: rgba(51, 51, 51, 0.4); }\n\ndiv[icons] .nav-tabs .nav-link:not(.active):hover {\n  background: rgba(26, 26, 26, 0.4); }\n\ndiv[icons] .tag, div[icons] .label {\n  padding: 1px 4px; }\n\n/***********************************/\n/**           ICON LIST           **/\n/***********************************/\ndiv[icons] h3 {\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem; }\n\ndiv[icons] .icon-list {\n  margin-top: 1rem; }\n\ndiv[icons] .icon-list-item {\n  height: 32px;\n  font-size: 14px;\n  line-height: 32px; }\n  div[icons] .icon-list-item > a {\n    color: #f8f8f8;\n    text-decoration: none; }\n  div[icons] .icon-list-item .glyphicon,\n  div[icons] .icon-list-item .fa {\n    width: 32px;\n    margin-right: 10px; }\n  div[icons] .icon-list-item .glyphicon {\n    top: 10px; }\n  div[icons] .icon-list-item:hover .glyphicon,\n  div[icons] .icon-list-item:hover .fa {\n    font-size: 28px;\n    top: 2px; }\n  div[icons] .icon-list-item:hover .fa {\n    vertical-align: -5px; }\n  div[icons] .icon-list-item:hover .glyphicon {\n    vertical-align: -6px; }\n"

/***/ },

/***/ "./src/app/ui/icons/icons.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Icons <small>Large set of built-in icons</small></h2>\n\n<tabset class=\"tab-content mb-lg widget widget-tabs\">\n  <tab heading=\"Glypicons\" class=\"widget-body\" customClass=\"test-class\">\n    <h3>Built-in <span class=\"fw-semi-bold\">Glyphicons</span></h3>\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-asterisk\"></span>asterisk</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-plus\"></span>plus</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-euro\"></span>euro</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-minus\"></span>minus</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-cloud\"></span>cloud</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-envelope\"></span>envelope</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-pencil\"></span>pencil</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glass\"></span>glass</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-music\"></span>music</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-search\"></span>search</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-heart\"></span>heart</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-star\"></span>star</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-star-empty\"></span>star-empty</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-user\"></span>user</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-film\"></span>film</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-th-large\"></span>th-large</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-th\"></span>th</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-th-list\"></span>th-list</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-ok\"></span>ok</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-remove\"></span>remove</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-zoom-in\"></span>zoom-in</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-zoom-out\"></span>zoom-out</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-off\"></span>off</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-signal\"></span>signal</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-cog\"></span>cog</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-trash\"></span>trash</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-home\"></span>home</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-file\"></span>file</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-time\"></span>time</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-road\"></span>road</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-download-alt\"></span>download-alt</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-download\"></span>download</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-upload\"></span>upload</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-inbox\"></span>inbox</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-play-circle\"></span>play-circle</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-repeat\"></span>repeat</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-refresh\"></span>refresh</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-list-alt\"></span>list-alt</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-lock\"></span>lock</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-flag\"></span>flag</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-headphones\"></span>headphones</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-volume-off\"></span>volume-off</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-volume-down\"></span>volume-down</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-volume-up\"></span>volume-up</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-qrcode\"></span>qrcode</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-barcode\"></span>barcode</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-tag\"></span>tag</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-tags\"></span>tags</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-book\"></span>book</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-bookmark\"></span>bookmark</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-print\"></span>print</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-camera\"></span>camera</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-font\"></span>font</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-bold\"></span>bold</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-italic\"></span>italic</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-text-height\"></span>text-height</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-text-width\"></span>text-width</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-align-left\"></span>align-left</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-align-center\"></span>align-center</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-align-right\"></span>align-right</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-align-justify\"></span>align-justify</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-list\"></span>list</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-indent-left\"></span>indent-left</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-indent-right\"></span>indent-right</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-facetime-video\"></span>facetime-video</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-picture\"></span>picture</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-map-marker\"></span>map-marker</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-adjust\"></span>adjust</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-tint\"></span>tint</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-edit\"></span>edit</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-share\"></span>share</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-check\"></span>check</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-move\"></span>move</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-step-backward\"></span>step-backward</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-fast-backward\"></span>fast-backward</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-backward\"></span>backward</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-play\"></span>play</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-pause\"></span>pause</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-stop\"></span>stop</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-forward\"></span>forward</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-fast-forward\"></span>fast-forward</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-step-forward\"></span>step-forward</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-eject\"></span>eject</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-chevron-left\"></span>chevron-left</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-chevron-right\"></span>chevron-right</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-plus-sign\"></span>plus-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-minus-sign\"></span>minus-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-remove-sign\"></span>remove-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-ok-sign\"></span>ok-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-question-sign\"></span>question-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-info-sign\"></span>info-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-screenshot\"></span>screenshot</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-remove-circle\"></span>remove-circle</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-ok-circle\"></span>ok-circle</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-ban-circle\"></span>ban-circle</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-arrow-left\"></span>arrow-left</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-arrow-right\"></span>arrow-right</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-arrow-up\"></span>arrow-up</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-arrow-down\"></span>arrow-down</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-share-alt\"></span>share-alt</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-resize-full\"></span>resize-full</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-resize-small\"></span>resize-small</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span>exclamation-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-gift\"></span>gift</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-leaf\"></span>leaf</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-fire\"></span>fire</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-eye-open\"></span>eye-open</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-eye-close\"></span>eye-close</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-warning-sign\"></span>warning-sign</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-plane\"></span>plane</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-calendar\"></span>calendar</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-random\"></span>random</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-comment\"></span>comment</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-magnet\"></span>magnet</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-chevron-up\"></span>chevron-up</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-chevron-down\"></span>chevron-down</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-retweet\"></span>retweet</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>shopping-cart</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-folder-close\"></span>folder-close</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-folder-open\"></span>folder-open</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-resize-vertical\"></span>resize-vertical</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-resize-horizontal\"></span>resize-horizontal</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-hdd\"></span>hdd</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-bullhorn\"></span>bullhorn</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-bell\"></span>bell</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-certificate\"></span>certificate</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-thumbs-up\"></span>thumbs-up</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-thumbs-down\"></span>thumbs-down</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-hand-right\"></span>hand-right</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-hand-left\"></span>hand-left</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-hand-top\"></span>hand-up</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-hand-down\"></span>hand-down</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-circle-arrow-right\"></span>circle-arrow-right</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>circle-arrow-left</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-circle-arrow-top\"></span>circle-arrow-up</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-circle-arrow-down\"></span>circle-arrow-down</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-globe\"></span>globe</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-wrench\"></span>wrench</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-tasks\"></span>tasks</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-filter\"></span>filter</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-briefcase\"></span>briefcase</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-fullscreen\"></span>fullscreen</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-dashboard\"></span>dashboard</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-paperclip\"></span>paperclip</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-heart-empty\"></span>heart-empty</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-link\"></span>link</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-phone\"></span>phone</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-glyph-pushpin\"></span>pushpin</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-usd\"></span>usd</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-gbp\"></span>gbp</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-sort\"></span>sort</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-sort-by-alphabet\"></span>sort-by-alphabet</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-sort-by-alphabet-alt\"></span>sort-by-alphabet-alt</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-sort-by-order\"></span>sort-by-order</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-sort-by-order-alt\"></span>sort-by-order-alt</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-sort-by-attributes\"></span>sort-by-attributes</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-sort-by-attributes-alt\"></span>sort-by-attributes-alt</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-unchecked\"></span>unchecked</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-expand\"></span>expand</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-collapse\"></span>collapse-down</div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><span class=\"glyphicon glyphicon-collapse-top\"></span>collapse-up</div>\n    </div>\n  </tab>\n  <tab class=\"widget-body\">\n    <template tabHeading>\n      FA 4.6.3 <span class=\"tag tag-danger\">new</span>\n    </template>\n    <h3>Awesome <span class=\"fw-semi-bold\">Font Awesome</span></h3>\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bed\"><i class=\"fa fa-bed\"></i> bed</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/university\"><i class=\"fa fa-bank\"></i> bank <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/behance\"><i class=\"fa fa-behance\"></i> behance</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/behance-square\"><i class=\"fa fa-behance-square\"></i> behance-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bomb\"><i class=\"fa fa-bomb\"></i> bomb</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/building\"><i class=\"fa fa-building\"></i> building</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/taxi\"><i class=\"fa fa-cab\"></i> cab <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/car\"><i class=\"fa fa-car\"></i> car</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/child\"><i class=\"fa fa-child\"></i> child</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle-o-notch\"><i class=\"fa fa-circle-o-notch\"></i> circle-o-notch</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle-thin\"><i class=\"fa fa-circle-thin\"></i> circle-thin</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/codepen\"><i class=\"fa fa-codepen\"></i> codepen</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cube\"><i class=\"fa fa-cube\"></i> cube</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cubes\"><i class=\"fa fa-cubes\"></i> cubes</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/database\"><i class=\"fa fa-database\"></i> database</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/delicious\"><i class=\"fa fa-delicious\"></i> delicious</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/deviantart\"><i class=\"fa fa-deviantart\"></i> deviantart</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/digg\"><i class=\"fa fa-digg\"></i> digg</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/drupal\"><i class=\"fa fa-drupal\"></i> drupal</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/empire\"><i class=\"fa fa-empire\"></i> empire</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/envelope-square\"><i class=\"fa fa-envelope-square\"></i> envelope-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/fax\"><i class=\"fa fa-fax\"></i> fax</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-archive-o\"><i class=\"fa fa-file-archive-o\"></i> file-archive-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-audio-o\"><i class=\"fa fa-file-audio-o\"></i> file-audio-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-code-o\"><i class=\"fa fa-file-code-o\"></i> file-code-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-excel-o\"><i class=\"fa fa-file-excel-o\"></i> file-excel-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-image-o\"></i> file-image-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-video-o\"><i class=\"fa fa-file-movie-o\"></i> file-movie-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-pdf-o\"><i class=\"fa fa-file-pdf-o\"></i> file-pdf-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-photo-o\"></i> file-photo-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-picture-o\"></i> file-picture-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-powerpoint-o\"><i class=\"fa fa-file-powerpoint-o\"></i> file-powerpoint-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-audio-o\"><i class=\"fa fa-file-sound-o\"></i> file-sound-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-video-o\"><i class=\"fa fa-file-video-o\"></i> file-video-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-word-o\"><i class=\"fa fa-file-word-o\"></i> file-word-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-archive-o\"><i class=\"fa fa-file-zip-o\"></i> file-zip-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/empire\"><i class=\"fa fa-ge\"></i> ge <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/git\"><i class=\"fa fa-git\"></i> git</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/git-square\"><i class=\"fa fa-git-square\"></i> git-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/google\"><i class=\"fa fa-google\"></i> google</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/graduation-cap\"><i class=\"fa fa-graduation-cap\"></i> graduation-cap</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/hacker-news\"><i class=\"fa fa-hacker-news\"></i> hacker-news</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/header\"><i class=\"fa fa-header\"></i> header</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/history\"><i class=\"fa fa-history\"></i> history</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/university\"><i class=\"fa fa-institution\"></i> institution <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/joomla\"><i class=\"fa fa-joomla\"></i> joomla</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/jsfiddle\"><i class=\"fa fa-jsfiddle\"></i> jsfiddle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/language\"><i class=\"fa fa-language\"></i> language</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-life-bouy\"></i> life-bouy <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-life-ring\"></i> life-ring</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-life-saver\"></i> life-saver <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/graduation-cap\"><i class=\"fa fa-mortar-board\"></i> mortar-board <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/openid\"><i class=\"fa fa-openid\"></i> openid</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane\"><i class=\"fa fa-paper-plane\"></i> paper-plane</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane-o\"><i class=\"fa fa-paper-plane-o\"></i> paper-plane-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paragraph\"><i class=\"fa fa-paragraph\"></i> paragraph</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paw\"><i class=\"fa fa-paw\"></i> paw</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pied-piper\"><i class=\"fa fa-pied-piper\"></i> pied-piper</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pied-piper-alt\"><i class=\"fa fa-pied-piper-alt\"></i> pied-piper-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pied-piper\"><i class=\"fa fa-pied-piper-square\"></i> pied-piper-square <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/qq\"><i class=\"fa fa-qq\"></i> qq</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rebel\"><i class=\"fa fa-ra\"></i> ra <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rebel\"><i class=\"fa fa-rebel\"></i> rebel</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/recycle\"><i class=\"fa fa-recycle\"></i> recycle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reddit\"><i class=\"fa fa-reddit\"></i> reddit</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reddit-square\"><i class=\"fa fa-reddit-square\"></i> reddit-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane\"><i class=\"fa fa-send\"></i> send <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane-o\"><i class=\"fa fa-send-o\"></i> send-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-alt\"><i class=\"fa fa-share-alt\"></i> share-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-alt-square\"><i class=\"fa fa-share-alt-square\"></i> share-alt-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/slack\"><i class=\"fa fa-slack\"></i> slack</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sliders\"><i class=\"fa fa-sliders\"></i> sliders</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/soundcloud\"><i class=\"fa fa-soundcloud\"></i> soundcloud</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/space-shuttle\"><i class=\"fa fa-space-shuttle\"></i> space-shuttle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/spoon\"><i class=\"fa fa-spoon\"></i> spoon</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/spotify\"><i class=\"fa fa-spotify\"></i> spotify</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/steam\"><i class=\"fa fa-steam\"></i> steam</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/steam-square\"><i class=\"fa fa-steam-square\"></i> steam-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stumbleupon\"><i class=\"fa fa-stumbleupon\"></i> stumbleupon</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stumbleupon-circle\"><i class=\"fa fa-stumbleupon-circle\"></i> stumbleupon-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-support\"></i> support <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/taxi\"><i class=\"fa fa-taxi\"></i> taxi</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tencent-weibo\"><i class=\"fa fa-tencent-weibo\"></i> tencent-weibo</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tree\"><i class=\"fa fa-tree\"></i> tree</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/university\"><i class=\"fa fa-university\"></i> university</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/vine\"><i class=\"fa fa-vine\"></i> vine</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/weixin\"><i class=\"fa fa-wechat\"></i> wechat <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/weixin\"><i class=\"fa fa-weixin\"></i> weixin</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/wordpress\"><i class=\"fa fa-wordpress\"></i> wordpress</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/yahoo\"><i class=\"fa fa-yahoo\"></i> yahoo</a></div>\n\n    </div>\n  </tab>\n  <tab heading=\"Web Application\" class=\"widget-body\">\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/adjust\"><i class=\"fa fa-adjust\"></i> adjust</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/anchor\"><i class=\"fa fa-anchor\"></i> anchor</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/archive\"><i class=\"fa fa-archive\"></i> archive</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/arrows\"><i class=\"fa fa-arrows\"></i> arrows</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/arrows-h\"><i class=\"fa fa-arrows-h\"></i> arrows-h</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/arrows-v\"><i class=\"fa fa-arrows-v\"></i> arrows-v</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/asterisk\"><i class=\"fa fa-asterisk\"></i> asterisk</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/car\"><i class=\"fa fa-automobile\"></i> automobile <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/ban\"><i class=\"fa fa-ban\"></i> ban</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/university\"><i class=\"fa fa-bank\"></i> bank <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bar-chart-o\"><i class=\"fa fa-bar-chart-o\"></i> bar-chart-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/barcode\"><i class=\"fa fa-barcode\"></i> barcode</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bars\"><i class=\"fa fa-bars\"></i> bars</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/beer\"><i class=\"fa fa-beer\"></i> beer</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bell\"><i class=\"fa fa-bell\"></i> bell</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bell-o\"><i class=\"fa fa-bell-o\"></i> bell-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bolt\"><i class=\"fa fa-bolt\"></i> bolt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bomb\"><i class=\"fa fa-bomb\"></i> bomb</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/book\"><i class=\"fa fa-book\"></i> book</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bookmark\"><i class=\"fa fa-bookmark\"></i> bookmark</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bookmark-o\"><i class=\"fa fa-bookmark-o\"></i> bookmark-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/briefcase\"><i class=\"fa fa-briefcase\"></i> briefcase</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bug\"><i class=\"fa fa-bug\"></i> bug</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/building\"><i class=\"fa fa-building\"></i> building</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/building-o\"><i class=\"fa fa-building-o\"></i> building-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bullhorn\"><i class=\"fa fa-bullhorn\"></i> bullhorn</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bullseye\"><i class=\"fa fa-bullseye\"></i> bullseye</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/taxi\"><i class=\"fa fa-cab\"></i> cab <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/calendar\"><i class=\"fa fa-calendar\"></i> calendar</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/calendar-o\"><i class=\"fa fa-calendar-o\"></i> calendar-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/camera\"><i class=\"fa fa-camera\"></i> camera</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/camera-retro\"><i class=\"fa fa-camera-retro\"></i> camera-retro</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/car\"><i class=\"fa fa-car\"></i> car</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-down\"><i class=\"fa fa-caret-square-o-down\"></i> caret-square-o-down</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-left\"><i class=\"fa fa-caret-square-o-left\"></i> caret-square-o-left</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-right\"><i class=\"fa fa-caret-square-o-right\"></i> caret-square-o-right</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-up\"><i class=\"fa fa-caret-square-o-up\"></i> caret-square-o-up</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/certificate\"><i class=\"fa fa-certificate\"></i> certificate</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/check\"><i class=\"fa fa-check\"></i> check</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/check-circle\"><i class=\"fa fa-check-circle\"></i> check-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/check-circle-o\"><i class=\"fa fa-check-circle-o\"></i> check-circle-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/check-square\"><i class=\"fa fa-check-square\"></i> check-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/check-square-o\"><i class=\"fa fa-check-square-o\"></i> check-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/child\"><i class=\"fa fa-child\"></i> child</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle\"><i class=\"fa fa-circle\"></i> circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle-o\"><i class=\"fa fa-circle-o\"></i> circle-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle-o-notch\"><i class=\"fa fa-circle-o-notch\"></i> circle-o-notch</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle-thin\"><i class=\"fa fa-circle-thin\"></i> circle-thin</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/clock-o\"><i class=\"fa fa-clock-o\"></i> clock-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cloud\"><i class=\"fa fa-cloud\"></i> cloud</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cloud-download\"><i class=\"fa fa-cloud-download\"></i> cloud-download</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cloud-upload\"><i class=\"fa fa-cloud-upload\"></i> cloud-upload</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/code\"><i class=\"fa fa-code\"></i> code</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/code-fork\"><i class=\"fa fa-code-fork\"></i> code-fork</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/coffee\"><i class=\"fa fa-coffee\"></i> coffee</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cog\"><i class=\"fa fa-cog\"></i> cog</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cogs\"><i class=\"fa fa-cogs\"></i> cogs</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/comment\"><i class=\"fa fa-comment\"></i> comment</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/comment-o\"><i class=\"fa fa-comment-o\"></i> comment-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/comments\"><i class=\"fa fa-comments\"></i> comments</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/comments-o\"><i class=\"fa fa-comments-o\"></i> comments-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/compass\"><i class=\"fa fa-compass\"></i> compass</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/credit-card\"><i class=\"fa fa-credit-card\"></i> credit-card</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/crop\"><i class=\"fa fa-crop\"></i> crop</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/crosshairs\"><i class=\"fa fa-crosshairs\"></i> crosshairs</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cube\"><i class=\"fa fa-cube\"></i> cube</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cubes\"><i class=\"fa fa-cubes\"></i> cubes</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cutlery\"><i class=\"fa fa-cutlery\"></i> cutlery</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tachometer\"><i class=\"fa fa-dashboard\"></i> dashboard <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/database\"><i class=\"fa fa-database\"></i> database</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/desktop\"><i class=\"fa fa-desktop\"></i> desktop</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/dot-circle-o\"><i class=\"fa fa-dot-circle-o\"></i> dot-circle-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/download\"><i class=\"fa fa-download\"></i> download</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pencil-square-o\"><i class=\"fa fa-edit\"></i> edit <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/ellipsis-h\"><i class=\"fa fa-ellipsis-h\"></i> ellipsis-h</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/ellipsis-v\"><i class=\"fa fa-ellipsis-v\"></i> ellipsis-v</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/envelope\"><i class=\"fa fa-envelope\"></i> envelope</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/envelope-o\"><i class=\"fa fa-envelope-o\"></i> envelope-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/envelope-square\"><i class=\"fa fa-envelope-square\"></i> envelope-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/eraser\"><i class=\"fa fa-eraser\"></i> eraser</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/exchange\"><i class=\"fa fa-exchange\"></i> exchange</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/exclamation\"><i class=\"fa fa-exclamation\"></i> exclamation</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/exclamation-circle\"><i class=\"fa fa-exclamation-circle\"></i> exclamation-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/exclamation-triangle\"><i class=\"fa fa-exclamation-triangle\"></i> exclamation-triangle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/external-link\"><i class=\"fa fa-external-link\"></i> external-link</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/external-link-square\"><i class=\"fa fa-external-link-square\"></i> external-link-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/eye\"><i class=\"fa fa-eye\"></i> eye</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/eye-slash\"><i class=\"fa fa-eye-slash\"></i> eye-slash</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/fax\"><i class=\"fa fa-fax\"></i> fax</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/female\"><i class=\"fa fa-female\"></i> female</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/fighter-jet\"><i class=\"fa fa-fighter-jet\"></i> fighter-jet</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-archive-o\"><i class=\"fa fa-file-archive-o\"></i> file-archive-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-audio-o\"><i class=\"fa fa-file-audio-o\"></i> file-audio-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-code-o\"><i class=\"fa fa-file-code-o\"></i> file-code-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-excel-o\"><i class=\"fa fa-file-excel-o\"></i> file-excel-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-image-o\"></i> file-image-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-video-o\"><i class=\"fa fa-file-movie-o\"></i> file-movie-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-pdf-o\"><i class=\"fa fa-file-pdf-o\"></i> file-pdf-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-photo-o\"></i> file-photo-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-picture-o\"></i> file-picture-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-powerpoint-o\"><i class=\"fa fa-file-powerpoint-o\"></i> file-powerpoint-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-audio-o\"><i class=\"fa fa-file-sound-o\"></i> file-sound-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-video-o\"><i class=\"fa fa-file-video-o\"></i> file-video-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-word-o\"><i class=\"fa fa-file-word-o\"></i> file-word-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-archive-o\"><i class=\"fa fa-file-zip-o\"></i> file-zip-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/film\"><i class=\"fa fa-film\"></i> film</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/filter\"><i class=\"fa fa-filter\"></i> filter</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/fire\"><i class=\"fa fa-fire\"></i> fire</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/fire-extinguisher\"><i class=\"fa fa-fire-extinguisher\"></i> fire-extinguisher</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/flag\"><i class=\"fa fa-flag\"></i> flag</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/flag-checkered\"><i class=\"fa fa-flag-checkered\"></i> flag-checkered</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/flag-o\"><i class=\"fa fa-flag-o\"></i> flag-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bolt\"><i class=\"fa fa-flash\"></i> flash <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/flask\"><i class=\"fa fa-flask\"></i> flask</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/folder\"><i class=\"fa fa-folder\"></i> folder</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/folder-o\"><i class=\"fa fa-folder-o\"></i> folder-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/folder-open\"><i class=\"fa fa-folder-open\"></i> folder-open</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/folder-open-o\"><i class=\"fa fa-folder-open-o\"></i> folder-open-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/frown-o\"><i class=\"fa fa-frown-o\"></i> frown-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/gamepad\"><i class=\"fa fa-gamepad\"></i> gamepad</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/gavel\"><i class=\"fa fa-gavel\"></i> gavel</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cog\"><i class=\"fa fa-gear\"></i> gear <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cogs\"><i class=\"fa fa-gears\"></i> gears <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/gift\"><i class=\"fa fa-gift\"></i> gift</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/glass\"><i class=\"fa fa-glass\"></i> glass</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/globe\"><i class=\"fa fa-globe\"></i> globe</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/graduation-cap\"><i class=\"fa fa-graduation-cap\"></i> graduation-cap</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/users\"><i class=\"fa fa-group\"></i> group <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/hdd-o\"><i class=\"fa fa-hdd-o\"></i> hdd-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/headphones\"><i class=\"fa fa-headphones\"></i> headphones</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/heart\"><i class=\"fa fa-heart\"></i> heart</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/heart-o\"><i class=\"fa fa-heart-o\"></i> heart-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/history\"><i class=\"fa fa-history\"></i> history</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/home\"><i class=\"fa fa-home\"></i> home</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/picture-o\"><i class=\"fa fa-image\"></i> image <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/inbox\"><i class=\"fa fa-inbox\"></i> inbox</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/info\"><i class=\"fa fa-info\"></i> info</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/info-circle\"><i class=\"fa fa-info-circle\"></i> info-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/university\"><i class=\"fa fa-institution\"></i> institution <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/key\"><i class=\"fa fa-key\"></i> key</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/keyboard-o\"><i class=\"fa fa-keyboard-o\"></i> keyboard-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/language\"><i class=\"fa fa-language\"></i> language</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/laptop\"><i class=\"fa fa-laptop\"></i> laptop</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/leaf\"><i class=\"fa fa-leaf\"></i> leaf</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/gavel\"><i class=\"fa fa-legal\"></i> legal <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/lemon-o\"><i class=\"fa fa-lemon-o\"></i> lemon-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/level-down\"><i class=\"fa fa-level-down\"></i> level-down</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/level-up\"><i class=\"fa fa-level-up\"></i> level-up</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-life-bouy\"></i> life-bouy <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-life-ring\"></i> life-ring</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-life-saver\"></i> life-saver <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/lightbulb-o\"><i class=\"fa fa-lightbulb-o\"></i> lightbulb-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/location-arrow\"><i class=\"fa fa-location-arrow\"></i> location-arrow</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/lock\"><i class=\"fa fa-lock\"></i> lock</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/magic\"><i class=\"fa fa-magic\"></i> magic</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/magnet\"><i class=\"fa fa-magnet\"></i> magnet</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share\"><i class=\"fa fa-mail-forward\"></i> mail-forward <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reply\"><i class=\"fa fa-mail-reply\"></i> mail-reply <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reply-all\"><i class=\"fa fa-mail-reply-all\"></i> mail-reply-all <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/male\"><i class=\"fa fa-male\"></i> male</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/map-marker\"><i class=\"fa fa-map-marker\"></i> map-marker</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/meh-o\"><i class=\"fa fa-meh-o\"></i> meh-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/microphone\"><i class=\"fa fa-microphone\"></i> microphone</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/microphone-slash\"><i class=\"fa fa-microphone-slash\"></i> microphone-slash</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/minus\"><i class=\"fa fa-minus\"></i> minus</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/minus-circle\"><i class=\"fa fa-minus-circle\"></i> minus-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/minus-square\"><i class=\"fa fa-minus-square\"></i> minus-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/minus-square-o\"><i class=\"fa fa-minus-square-o\"></i> minus-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/mobile\"><i class=\"fa fa-mobile\"></i> mobile</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/mobile\"><i class=\"fa fa-mobile-phone\"></i> mobile-phone <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/money\"><i class=\"fa fa-money\"></i> money</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/moon-o\"><i class=\"fa fa-moon-o\"></i> moon-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/graduation-cap\"><i class=\"fa fa-mortar-board\"></i> mortar-board <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/music\"><i class=\"fa fa-music\"></i> music</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bars\"><i class=\"fa fa-navicon\"></i> navicon <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane\"><i class=\"fa fa-paper-plane\"></i> paper-plane</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane-o\"><i class=\"fa fa-paper-plane-o\"></i> paper-plane-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paw\"><i class=\"fa fa-paw\"></i> paw</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pencil\"><i class=\"fa fa-pencil\"></i> pencil</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pencil-square\"><i class=\"fa fa-pencil-square\"></i> pencil-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pencil-square-o\"><i class=\"fa fa-pencil-square-o\"></i> pencil-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/phone\"><i class=\"fa fa-phone\"></i> phone</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/phone-square\"><i class=\"fa fa-phone-square\"></i> phone-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/picture-o\"><i class=\"fa fa-photo\"></i> photo <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/picture-o\"><i class=\"fa fa-picture-o\"></i> picture-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plane\"><i class=\"fa fa-plane\"></i> plane</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plus\"><i class=\"fa fa-plus\"></i> plus</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plus-circle\"><i class=\"fa fa-plus-circle\"></i> plus-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plus-square\"><i class=\"fa fa-plus-square\"></i> plus-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plus-square-o\"><i class=\"fa fa-plus-square-o\"></i> plus-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/power-off\"><i class=\"fa fa-power-off\"></i> power-off</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/print\"><i class=\"fa fa-print\"></i> print</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/puzzle-piece\"><i class=\"fa fa-puzzle-piece\"></i> puzzle-piece</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/qrcode\"><i class=\"fa fa-qrcode\"></i> qrcode</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/question\"><i class=\"fa fa-question\"></i> question</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/question-circle\"><i class=\"fa fa-question-circle\"></i> question-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/quote-left\"><i class=\"fa fa-quote-left\"></i> quote-left</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/quote-right\"><i class=\"fa fa-quote-right\"></i> quote-right</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/random\"><i class=\"fa fa-random\"></i> random</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/recycle\"><i class=\"fa fa-recycle\"></i> recycle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/refresh\"><i class=\"fa fa-refresh\"></i> refresh</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bars\"><i class=\"fa fa-reorder\"></i> reorder <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reply\"><i class=\"fa fa-reply\"></i> reply</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reply-all\"><i class=\"fa fa-reply-all\"></i> reply-all</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/retweet\"><i class=\"fa fa-retweet\"></i> retweet</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/road\"><i class=\"fa fa-road\"></i> road</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rocket\"><i class=\"fa fa-rocket\"></i> rocket</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rss\"><i class=\"fa fa-rss\"></i> rss</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rss-square\"><i class=\"fa fa-rss-square\"></i> rss-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/search\"><i class=\"fa fa-search\"></i> search</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/search-minus\"><i class=\"fa fa-search-minus\"></i> search-minus</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/search-plus\"><i class=\"fa fa-search-plus\"></i> search-plus</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane\"><i class=\"fa fa-send\"></i> send <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paper-plane-o\"><i class=\"fa fa-send-o\"></i> send-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share\"><i class=\"fa fa-share\"></i> share</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-alt\"><i class=\"fa fa-share-alt\"></i> share-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-alt-square\"><i class=\"fa fa-share-alt-square\"></i> share-alt-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-square\"><i class=\"fa fa-share-square\"></i> share-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-square-o\"><i class=\"fa fa-share-square-o\"></i> share-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/shield\"><i class=\"fa fa-shield\"></i> shield</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/shopping-cart\"><i class=\"fa fa-shopping-cart\"></i> shopping-cart</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sign-in\"><i class=\"fa fa-sign-in\"></i> sign-in</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sign-out\"><i class=\"fa fa-sign-out\"></i> sign-out</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/signal\"><i class=\"fa fa-signal\"></i> signal</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sitemap\"><i class=\"fa fa-sitemap\"></i> sitemap</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sliders\"><i class=\"fa fa-sliders\"></i> sliders</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/smile-o\"><i class=\"fa fa-smile-o\"></i> smile-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort\"><i class=\"fa fa-sort\"></i> sort</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-alpha-asc\"><i class=\"fa fa-sort-alpha-asc\"></i> sort-alpha-asc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-alpha-desc\"><i class=\"fa fa-sort-alpha-desc\"></i> sort-alpha-desc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-amount-asc\"><i class=\"fa fa-sort-amount-asc\"></i> sort-amount-asc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-amount-desc\"><i class=\"fa fa-sort-amount-desc\"></i> sort-amount-desc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-asc\"><i class=\"fa fa-sort-asc\"></i> sort-asc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-desc\"><i class=\"fa fa-sort-desc\"></i> sort-desc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-desc\"><i class=\"fa fa-sort-down\"></i> sort-down <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-numeric-asc\"><i class=\"fa fa-sort-numeric-asc\"></i> sort-numeric-asc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-numeric-desc\"><i class=\"fa fa-sort-numeric-desc\"></i> sort-numeric-desc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort-asc\"><i class=\"fa fa-sort-up\"></i> sort-up <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/space-shuttle\"><i class=\"fa fa-space-shuttle\"></i> space-shuttle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/spinner\"><i class=\"fa fa-spinner\"></i> spinner</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/spoon\"><i class=\"fa fa-spoon\"></i> spoon</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/square\"><i class=\"fa fa-square\"></i> square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/square-o\"><i class=\"fa fa-square-o\"></i> square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/star\"><i class=\"fa fa-star\"></i> star</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/star-half\"><i class=\"fa fa-star-half\"></i> star-half</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/star-half-o\"><i class=\"fa fa-star-half-empty\"></i> star-half-empty <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/star-half-o\"><i class=\"fa fa-star-half-full\"></i> star-half-full <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/star-half-o\"><i class=\"fa fa-star-half-o\"></i> star-half-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/star-o\"><i class=\"fa fa-star-o\"></i> star-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/suitcase\"><i class=\"fa fa-suitcase\"></i> suitcase</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sun-o\"><i class=\"fa fa-sun-o\"></i> sun-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/life-ring\"><i class=\"fa fa-support\"></i> support <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tablet\"><i class=\"fa fa-tablet\"></i> tablet</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tachometer\"><i class=\"fa fa-tachometer\"></i> tachometer</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tag\"><i class=\"fa fa-tag\"></i> tag</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tags\"><i class=\"fa fa-tags\"></i> tags</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tasks\"><i class=\"fa fa-tasks\"></i> tasks</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/taxi\"><i class=\"fa fa-taxi\"></i> taxi</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/terminal\"><i class=\"fa fa-terminal\"></i> terminal</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/thumb-tack\"><i class=\"fa fa-thumb-tack\"></i> thumb-tack</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/thumbs-down\"><i class=\"fa fa-thumbs-down\"></i> thumbs-down</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/thumbs-o-down\"><i class=\"fa fa-thumbs-o-down\"></i> thumbs-o-down</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/thumbs-o-up\"><i class=\"fa fa-thumbs-o-up\"></i> thumbs-o-up</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/thumbs-up\"><i class=\"fa fa-thumbs-up\"></i> thumbs-up</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/ticket\"><i class=\"fa fa-ticket\"></i> ticket</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/times\"><i class=\"fa fa-times\"></i> times</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/times-circle\"><i class=\"fa fa-times-circle\"></i> times-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/times-circle-o\"><i class=\"fa fa-times-circle-o\"></i> times-circle-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tint\"><i class=\"fa fa-tint\"></i> tint</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-down\"><i class=\"fa fa-toggle-down\"></i> toggle-down <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-left\"><i class=\"fa fa-toggle-left\"></i> toggle-left <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-right\"><i class=\"fa fa-toggle-right\"></i> toggle-right <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/caret-square-o-up\"><i class=\"fa fa-toggle-up\"></i> toggle-up <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/trash-o\"><i class=\"fa fa-trash-o\"></i> trash-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tree\"><i class=\"fa fa-tree\"></i> tree</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/trophy\"><i class=\"fa fa-trophy\"></i> trophy</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/truck\"><i class=\"fa fa-truck\"></i> truck</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/umbrella\"><i class=\"fa fa-umbrella\"></i> umbrella</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/university\"><i class=\"fa fa-university\"></i> university</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/unlock\"><i class=\"fa fa-unlock\"></i> unlock</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/unlock-alt\"><i class=\"fa fa-unlock-alt\"></i> unlock-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/sort\"><i class=\"fa fa-unsorted\"></i> unsorted <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/upload\"><i class=\"fa fa-upload\"></i> upload</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/user\"><i class=\"fa fa-user\"></i> user</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/users\"><i class=\"fa fa-users\"></i> users</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/video-camera\"><i class=\"fa fa-video-camera\"></i> video-camera</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/volume-down\"><i class=\"fa fa-volume-down\"></i> volume-down</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/volume-off\"><i class=\"fa fa-volume-off\"></i> volume-off</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/volume-up\"><i class=\"fa fa-volume-up\"></i> volume-up</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/exclamation-triangle\"><i class=\"fa fa-warning\"></i> warning <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/wheelchair\"><i class=\"fa fa-wheelchair\"></i> wheelchair</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/wrench\"><i class=\"fa fa-wrench\"></i> wrench</a></div>\n\n    </div>\n  </tab>\n  <tab heading=\"Spinner\" class=\"widget-body\">\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle-o-notch\"><i class=\"fa fa-circle-o-notch\"></i> circle-o-notch</a></div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cog\"><i class=\"fa fa-cog\"></i> cog</a></div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/cog\"><i class=\"fa fa-gear\"></i> gear <span class=\"text-muted\">(alias)</span></a></div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/refresh\"><i class=\"fa fa-refresh\"></i> refresh</a></div>\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/spinner\"><i class=\"fa fa-spinner\"></i> spinner</a></div>\n    </div>\n  </tab>\n  <tab heading=\"Text Editor\" class=\"widget-body\">\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/align-center\"><i class=\"fa fa-align-center\"></i> align-center</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/align-justify\"><i class=\"fa fa-align-justify\"></i> align-justify</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/align-left\"><i class=\"fa fa-align-left\"></i> align-left</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/align-right\"><i class=\"fa fa-align-right\"></i> align-right</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bold\"><i class=\"fa fa-bold\"></i> bold</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/link\"><i class=\"fa fa-chain\"></i> chain <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/chain-broken\"><i class=\"fa fa-chain-broken\"></i> chain-broken</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/clipboard\"><i class=\"fa fa-clipboard\"></i> clipboard</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/columns\"><i class=\"fa fa-columns\"></i> columns</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/files-o\"><i class=\"fa fa-copy\"></i> copy <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/scissors\"><i class=\"fa fa-cut\"></i> cut <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/outdent\"><i class=\"fa fa-dedent\"></i> dedent <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/eraser\"><i class=\"fa fa-eraser\"></i> eraser</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file\"><i class=\"fa fa-file\"></i> file</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-o\"><i class=\"fa fa-file-o\"></i> file-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-text\"><i class=\"fa fa-file-text\"></i> file-text</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-text-o\"><i class=\"fa fa-file-text-o\"></i> file-text-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/files-o\"><i class=\"fa fa-files-o\"></i> files-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/floppy-o\"><i class=\"fa fa-floppy-o\"></i> floppy-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/font\"><i class=\"fa fa-font\"></i> font</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/header\"><i class=\"fa fa-header\"></i> header</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/indent\"><i class=\"fa fa-indent\"></i> indent</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/italic\"><i class=\"fa fa-italic\"></i> italic</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/link\"><i class=\"fa fa-link\"></i> link</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/list\"><i class=\"fa fa-list\"></i> list</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/list-alt\"><i class=\"fa fa-list-alt\"></i> list-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/list-ol\"><i class=\"fa fa-list-ol\"></i> list-ol</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/list-ul\"><i class=\"fa fa-list-ul\"></i> list-ul</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/outdent\"><i class=\"fa fa-outdent\"></i> outdent</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paperclip\"><i class=\"fa fa-paperclip\"></i> paperclip</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/paragraph\"><i class=\"fa fa-paragraph\"></i> paragraph</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/clipboard\"><i class=\"fa fa-paste\"></i> paste <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/repeat\"><i class=\"fa fa-repeat\"></i> repeat</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/undo\"><i class=\"fa fa-rotate-left\"></i> rotate-left <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/repeat\"><i class=\"fa fa-rotate-right\"></i> rotate-right <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/floppy-o\"><i class=\"fa fa-save\"></i> save <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/scissors\"><i class=\"fa fa-scissors\"></i> scissors</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/strikethrough\"><i class=\"fa fa-strikethrough\"></i> strikethrough</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/subscript\"><i class=\"fa fa-subscript\"></i> subscript</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/superscript\"><i class=\"fa fa-superscript\"></i> superscript</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/table\"><i class=\"fa fa-table\"></i> table</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/text-height\"><i class=\"fa fa-text-height\"></i> text-height</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/text-width\"><i class=\"fa fa-text-width\"></i> text-width</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/th\"><i class=\"fa fa-th\"></i> th</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/th-large\"><i class=\"fa fa-th-large\"></i> th-large</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/th-list\"><i class=\"fa fa-th-list\"></i> th-list</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/underline\"><i class=\"fa fa-underline\"></i> underline</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/undo\"><i class=\"fa fa-undo\"></i> undo</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/chain-broken\"><i class=\"fa fa-unlink\"></i> unlink <span class=\"text-muted\">(alias)</span></a></div>\n\n    </div>\n  </tab>\n  <tab heading=\"Brand\" class=\"widget-body\">\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/adn\"><i class=\"fa fa-adn\"></i> adn</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/android\"><i class=\"fa fa-android\"></i> android</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/apple\"><i class=\"fa fa-apple\"></i> apple</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/behance\"><i class=\"fa fa-behance\"></i> behance</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/behance-square\"><i class=\"fa fa-behance-square\"></i> behance-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bitbucket\"><i class=\"fa fa-bitbucket\"></i> bitbucket</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/bitbucket-square\"><i class=\"fa fa-bitbucket-square\"></i> bitbucket-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/btc\"><i class=\"fa fa-bitcoin\"></i> bitcoin <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/btc\"><i class=\"fa fa-btc\"></i> btc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/codepen\"><i class=\"fa fa-codepen\"></i> codepen</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/css3\"><i class=\"fa fa-css3\"></i> css3</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/delicious\"><i class=\"fa fa-delicious\"></i> delicious</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/deviantart\"><i class=\"fa fa-deviantart\"></i> deviantart</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/digg\"><i class=\"fa fa-digg\"></i> digg</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/dribbble\"><i class=\"fa fa-dribbble\"></i> dribbble</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/dropbox\"><i class=\"fa fa-dropbox\"></i> dropbox</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/drupal\"><i class=\"fa fa-drupal\"></i> drupal</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/empire\"><i class=\"fa fa-empire\"></i> empire</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/facebook\"><i class=\"fa fa-facebook\"></i> facebook</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/facebook-square\"><i class=\"fa fa-facebook-square\"></i> facebook-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/flickr\"><i class=\"fa fa-flickr\"></i> flickr</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/foursquare\"><i class=\"fa fa-foursquare\"></i> foursquare</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/empire\"><i class=\"fa fa-ge\"></i> ge <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/git\"><i class=\"fa fa-git\"></i> git</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/git-square\"><i class=\"fa fa-git-square\"></i> git-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/github\"><i class=\"fa fa-github\"></i> github</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/github-alt\"><i class=\"fa fa-github-alt\"></i> github-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/github-square\"><i class=\"fa fa-github-square\"></i> github-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/gittip\"><i class=\"fa fa-gittip\"></i> gittip</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/google\"><i class=\"fa fa-google\"></i> google</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/google-plus\"><i class=\"fa fa-google-plus\"></i> google-plus</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/google-plus-square\"><i class=\"fa fa-google-plus-square\"></i> google-plus-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/hacker-news\"><i class=\"fa fa-hacker-news\"></i> hacker-news</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/html5\"><i class=\"fa fa-html5\"></i> html5</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/instagram\"><i class=\"fa fa-instagram\"></i> instagram</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/joomla\"><i class=\"fa fa-joomla\"></i> joomla</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/jsfiddle\"><i class=\"fa fa-jsfiddle\"></i> jsfiddle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/linkedin\"><i class=\"fa fa-linkedin\"></i> linkedin</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/linkedin-square\"><i class=\"fa fa-linkedin-square\"></i> linkedin-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/linux\"><i class=\"fa fa-linux\"></i> linux</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/maxcdn\"><i class=\"fa fa-maxcdn\"></i> maxcdn</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/openid\"><i class=\"fa fa-openid\"></i> openid</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pagelines\"><i class=\"fa fa-pagelines\"></i> pagelines</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pied-piper\"><i class=\"fa fa-pied-piper\"></i> pied-piper</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pied-piper-alt\"><i class=\"fa fa-pied-piper-alt\"></i> pied-piper-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pied-piper\"><i class=\"fa fa-pied-piper-square\"></i> pied-piper-square <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pinterest\"><i class=\"fa fa-pinterest\"></i> pinterest</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pinterest-square\"><i class=\"fa fa-pinterest-square\"></i> pinterest-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/qq\"><i class=\"fa fa-qq\"></i> qq</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rebel\"><i class=\"fa fa-ra\"></i> ra <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rebel\"><i class=\"fa fa-rebel\"></i> rebel</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reddit\"><i class=\"fa fa-reddit\"></i> reddit</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/reddit-square\"><i class=\"fa fa-reddit-square\"></i> reddit-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/renren\"><i class=\"fa fa-renren\"></i> renren</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-alt\"><i class=\"fa fa-share-alt\"></i> share-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/share-alt-square\"><i class=\"fa fa-share-alt-square\"></i> share-alt-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/skype\"><i class=\"fa fa-skype\"></i> skype</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/slack\"><i class=\"fa fa-slack\"></i> slack</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/soundcloud\"><i class=\"fa fa-soundcloud\"></i> soundcloud</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/spotify\"><i class=\"fa fa-spotify\"></i> spotify</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stack-exchange\"><i class=\"fa fa-stack-exchange\"></i> stack-exchange</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stack-overflow\"><i class=\"fa fa-stack-overflow\"></i> stack-overflow</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/steam\"><i class=\"fa fa-steam\"></i> steam</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/steam-square\"><i class=\"fa fa-steam-square\"></i> steam-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stumbleupon\"><i class=\"fa fa-stumbleupon\"></i> stumbleupon</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stumbleupon-circle\"><i class=\"fa fa-stumbleupon-circle\"></i> stumbleupon-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tencent-weibo\"><i class=\"fa fa-tencent-weibo\"></i> tencent-weibo</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/trello\"><i class=\"fa fa-trello\"></i> trello</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tumblr\"><i class=\"fa fa-tumblr\"></i> tumblr</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/tumblr-square\"><i class=\"fa fa-tumblr-square\"></i> tumblr-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/twitter\"><i class=\"fa fa-twitter\"></i> twitter</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/twitter-square\"><i class=\"fa fa-twitter-square\"></i> twitter-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/vimeo-square\"><i class=\"fa fa-vimeo-square\"></i> vimeo-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/vine\"><i class=\"fa fa-vine\"></i> vine</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/vk\"><i class=\"fa fa-vk\"></i> vk</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/weixin\"><i class=\"fa fa-wechat\"></i> wechat <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/weibo\"><i class=\"fa fa-weibo\"></i> weibo</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/weixin\"><i class=\"fa fa-weixin\"></i> weixin</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/windows\"><i class=\"fa fa-windows\"></i> windows</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/wordpress\"><i class=\"fa fa-wordpress\"></i> wordpress</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/xing\"><i class=\"fa fa-xing\"></i> xing</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/xing-square\"><i class=\"fa fa-xing-square\"></i> xing-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/yahoo\"><i class=\"fa fa-yahoo\"></i> yahoo</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/youtube\"><i class=\"fa fa-youtube\"></i> youtube</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/youtube-play\"><i class=\"fa fa-youtube-play\"></i> youtube-play</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/youtube-square\"><i class=\"fa fa-youtube-square\"></i> youtube-square</a></div>\n\n    </div>\n  </tab>\n  <tab heading=\"Other\" class=\"widget-body\">\n    <h3>File Type <span class=\"fw-semi-bold\">Icons</span></h3>\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file\"><i class=\"fa fa-file\"></i> file</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-archive-o\"><i class=\"fa fa-file-archive-o\"></i> file-archive-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-audio-o\"><i class=\"fa fa-file-audio-o\"></i> file-audio-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-code-o\"><i class=\"fa fa-file-code-o\"></i> file-code-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-excel-o\"><i class=\"fa fa-file-excel-o\"></i> file-excel-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-image-o\"></i> file-image-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-video-o\"><i class=\"fa fa-file-movie-o\"></i> file-movie-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-o\"><i class=\"fa fa-file-o\"></i> file-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-pdf-o\"><i class=\"fa fa-file-pdf-o\"></i> file-pdf-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-photo-o\"></i> file-photo-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-image-o\"><i class=\"fa fa-file-picture-o\"></i> file-picture-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-powerpoint-o\"><i class=\"fa fa-file-powerpoint-o\"></i> file-powerpoint-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-audio-o\"><i class=\"fa fa-file-sound-o\"></i> file-sound-o <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-text\"><i class=\"fa fa-file-text\"></i> file-text</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-text-o\"><i class=\"fa fa-file-text-o\"></i> file-text-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-video-o\"><i class=\"fa fa-file-video-o\"></i> file-video-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-word-o\"><i class=\"fa fa-file-word-o\"></i> file-word-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/file-archive-o\"><i class=\"fa fa-file-zip-o\"></i> file-zip-o <span class=\"text-muted\">(alias)</span></a></div>\n\n    </div>\n    <h3>Form Control <span class=\"fw-semi-bold\">Icons</span></h3>\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/check-square\"><i class=\"fa fa-check-square\"></i> check-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/check-square-o\"><i class=\"fa fa-check-square-o\"></i> check-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle\"><i class=\"fa fa-circle\"></i> circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/circle-o\"><i class=\"fa fa-circle-o\"></i> circle-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/dot-circle-o\"><i class=\"fa fa-dot-circle-o\"></i> dot-circle-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/minus-square\"><i class=\"fa fa-minus-square\"></i> minus-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/minus-square-o\"><i class=\"fa fa-minus-square-o\"></i> minus-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plus-square\"><i class=\"fa fa-plus-square\"></i> plus-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plus-square-o\"><i class=\"fa fa-plus-square-o\"></i> plus-square-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/square\"><i class=\"fa fa-square\"></i> square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/square-o\"><i class=\"fa fa-square-o\"></i> square-o</a></div>\n\n    </div>\n    <h3>Currency <span class=\"fw-semi-bold\">Icons</span></h3>\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/btc\"><i class=\"fa fa-bitcoin\"></i> bitcoin <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/btc\"><i class=\"fa fa-btc\"></i> btc</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/jpy\"><i class=\"fa fa-cny\"></i> cny <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/usd\"><i class=\"fa fa-dollar\"></i> dollar <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/eur\"><i class=\"fa fa-eur\"></i> eur</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/eur\"><i class=\"fa fa-euro\"></i> euro <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/gbp\"><i class=\"fa fa-gbp\"></i> gbp</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/inr\"><i class=\"fa fa-inr\"></i> inr</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/jpy\"><i class=\"fa fa-jpy\"></i> jpy</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/krw\"><i class=\"fa fa-krw\"></i> krw</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/money\"><i class=\"fa fa-money\"></i> money</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/jpy\"><i class=\"fa fa-rmb\"></i> rmb <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rub\"><i class=\"fa fa-rouble\"></i> rouble <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rub\"><i class=\"fa fa-rub\"></i> rub</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/rub\"><i class=\"fa fa-ruble\"></i> ruble <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/inr\"><i class=\"fa fa-rupee\"></i> rupee <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/try\"><i class=\"fa fa-try\"></i> try</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/try\"><i class=\"fa fa-turkish-lira\"></i> turkish-lira <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/usd\"><i class=\"fa fa-usd\"></i> usd</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/krw\"><i class=\"fa fa-won\"></i> won <span class=\"text-muted\">(alias)</span></a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/jpy\"><i class=\"fa fa-yen\"></i> yen <span class=\"text-muted\">(alias)</span></a></div>\n\n    </div>\n    <h3>Video Player <span class=\"fw-semi-bold\">Icons</span></h3>\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/arrows-alt\"><i class=\"fa fa-arrows-alt\"></i> arrows-alt</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/backward\"><i class=\"fa fa-backward\"></i> backward</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/compress\"><i class=\"fa fa-compress\"></i> compress</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/eject\"><i class=\"fa fa-eject\"></i> eject</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/expand\"><i class=\"fa fa-expand\"></i> expand</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/fast-backward\"><i class=\"fa fa-fast-backward\"></i> fast-backward</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/fast-forward\"><i class=\"fa fa-fast-forward\"></i> fast-forward</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/forward\"><i class=\"fa fa-forward\"></i> forward</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/pause\"><i class=\"fa fa-pause\"></i> pause</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/play\"><i class=\"fa fa-play\"></i> play</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/play-circle\"><i class=\"fa fa-play-circle\"></i> play-circle</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/play-circle-o\"><i class=\"fa fa-play-circle-o\"></i> play-circle-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/step-backward\"><i class=\"fa fa-step-backward\"></i> step-backward</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/step-forward\"><i class=\"fa fa-step-forward\"></i> step-forward</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stop\"><i class=\"fa fa-stop\"></i> stop</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/youtube-play\"><i class=\"fa fa-youtube-play\"></i> youtube-play</a></div>\n\n    </div>\n    <h3>Medical <span class=\"fw-semi-bold\">Icons</span></h3>\n    <div class=\"row icon-list\">\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/ambulance\"><i class=\"fa fa-ambulance\"></i> ambulance</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/h-square\"><i class=\"fa fa-h-square\"></i> h-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/hospital-o\"><i class=\"fa fa-hospital-o\"></i> hospital-o</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/medkit\"><i class=\"fa fa-medkit\"></i> medkit</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/plus-square\"><i class=\"fa fa-plus-square\"></i> plus-square</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/stethoscope\"><i class=\"fa fa-stethoscope\"></i> stethoscope</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/user-md\"><i class=\"fa fa-user-md\"></i> user-md</a></div>\n\n      <div class=\"icon-list-item col-lg-3 col-md-4 col-xs-12\"><a href=\"../icon/wheelchair\"><i class=\"fa fa-wheelchair\"></i> wheelchair</a></div>\n\n    </div>\n  </tab>\n</tabset>\n"

/***/ },

/***/ "./src/app/ui/notifications/messenger/messenger.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var MessengerDemo = (function () {
    function MessengerDemo() {
    }
    MessengerDemo.prototype.initializationCode = function () {
        /* tslint:disable */
        (function () {
            var $, flatMessage, spinnerTemplate, LocationSelector, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) { for (var key in parent) {
                if (__hasProp.call(parent, key)) {
                    child[key] = parent[key];
                }
            } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
            LocationSelector = function ($el) {
                this.$el = $el;
                this.$el.on('click', '.bit', this.handleClick.bind(this));
            };
            LocationSelector.prototype.className = 'location-selector';
            LocationSelector.prototype.handleClick = function (e) {
                var $bit;
                $bit = jQuery(e.target);
                return this.$el.trigger('update', [$bit.attr('data-position').split(' ')]);
            };
            jQuery.fn.locationSelector = function () {
                var loc;
                loc = new LocationSelector(this);
                jQuery(this).addClass(loc.className);
                return jQuery(this);
            };
            spinnerTemplate = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';
            /* tslint:enable */
            flatMessage = (function (_super) {
                __extends(flatMessage, _super);
                function flatMessage() {
                    /* tslint:disable */
                    return flatMessage['__super__'].constructor.apply(this, arguments);
                    /* tslint:enable */
                }
                flatMessage.prototype.template = function (opts) {
                    var $message;
                    /* tslint:disable */
                    $message = flatMessage['__super__'].template.apply(this, arguments);
                    /* tslint:enable */
                    $message.append(jQuery(spinnerTemplate));
                    return $message;
                };
                return flatMessage;
                /* tslint:disable */
            })(window['Messenger'].Message);
            window['Messenger'].themes.air = {
                Message: flatMessage
            };
            /* tslint:enable */
        }).call(window);
    };
    MessengerDemo.prototype.render = function () {
        this.initializationCode();
        var theme = 'air';
        jQuery.globalMessenger({ theme: theme });
        Messenger.options = { theme: theme };
        Messenger().post('Thanks for checking out Messenger!');
        var loc = ['bottom', 'right'];
        var $lsel = jQuery('.location-selector');
        var update = function () {
            var classes = 'messenger-fixed';
            for (var i = 0; i < loc.length; i++) {
                classes += ' messenger-on-' + loc[i];
            }
            jQuery.globalMessenger({ extraClasses: classes, theme: theme });
            Messenger.options = { extraClasses: classes, theme: theme };
        };
        update();
        $lsel.locationSelector()
            .on('update', function (e, pos) {
            loc = pos;
            update();
        });
        jQuery('#show-error-message').on('click', function () {
            var i;
            i = 0;
            Messenger().run({
                errorMessage: 'Error destroying alien planet',
                successMessage: 'Alien planet destroyed!',
                action: function (opts) {
                    if (++i < 3) {
                        return opts.error({
                            status: 500,
                            readyState: 0,
                            responseText: 0
                        });
                    }
                    else {
                        return opts.success();
                    }
                }
            });
            return false;
        });
        jQuery('#show-info-message').on('click', function () {
            var msg = Messenger().post({
                message: 'Launching thermonuclear war...',
                actions: {
                    cancel: {
                        label: 'cancel launch',
                        action: function () {
                            return msg.update({
                                message: 'Thermonuclear war averted',
                                type: 'success',
                                actions: false
                            });
                        }
                    }
                }
            });
            return false;
        });
        jQuery('#show-success-message').on('click', function () {
            Messenger().post({
                message: 'Showing success message was successful!',
                type: 'success',
                showCloseButton: true
            });
            return false;
        });
    };
    MessengerDemo.prototype.ngOnInit = function () {
        this.render();
    };
    MessengerDemo = __decorate([
        core_1.Directive({
            selector: '[messenger-demo]'
        }), 
        __metadata('design:paramtypes', [])
    ], MessengerDemo);
    return MessengerDemo;
}());
exports.MessengerDemo = MessengerDemo;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/ui/notifications/notifications.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Notifications = (function () {
    function Notifications() {
    }
    Notifications = __decorate([
        core_1.Component({
            selector: '[notifications]',
            template: __webpack_require__("./src/app/ui/notifications/notifications.template.html"),
            styles: [__webpack_require__("./src/app/ui/notifications/notifications.style.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Notifications);
    return Notifications;
}());
exports.Notifications = Notifications;


/***/ },

/***/ "./src/app/ui/notifications/notifications.style.scss":
/***/ function(module, exports) {

module.exports = "/* line 4, ../../src/sass/messenger.sass */\nul.messenger {\n  margin: 0;\n  padding: 0; }\n\n/* line 8, ../../src/sass/messenger.sass */\nul.messenger > li {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n/* line 14, ../../src/sass/messenger.sass */\nul.messenger.messenger-empty {\n  display: none; }\n\n/* line 17, ../../src/sass/messenger.sass */\nul.messenger .messenger-message {\n  overflow: hidden;\n  *zoom: 1; }\n\n/* line 20, ../../src/sass/messenger.sass */\nul.messenger .messenger-message.messenger-hidden {\n  display: none; }\n\n/* line 23, ../../src/sass/messenger.sass */\nul.messenger .messenger-message .messenger-phrase, ul.messenger .messenger-message .messenger-actions a {\n  padding-right: 5px; }\n\n/* line 26, ../../src/sass/messenger.sass */\nul.messenger .messenger-message .messenger-actions {\n  float: right; }\n\n/* line 29, ../../src/sass/messenger.sass */\nul.messenger .messenger-message .messenger-actions a {\n  cursor: pointer;\n  text-decoration: underline; }\n\n/* line 33, ../../src/sass/messenger.sass */\nul.messenger .messenger-message ul, ul.messenger .messenger-message ol {\n  margin: 10px 18px 0; }\n\n/* line 36, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed {\n  position: fixed;\n  z-index: 10000; }\n\n/* line 40, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed .messenger-message {\n  min-width: 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n/* line 45, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed .message .messenger-actions {\n  float: left; }\n\n/* line 48, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed.messenger-on-top {\n  top: 20px; }\n\n/* line 51, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed.messenger-on-bottom {\n  bottom: 20px; }\n\n/* line 54, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed.messenger-on-top, ul.messenger.messenger-fixed.messenger-on-bottom {\n  left: 50%;\n  width: 800px;\n  margin-left: -400px; }\n\n@media (max-width: 960px) {\n  /* line 54, ../../src/sass/messenger.sass */\n  ul.messenger.messenger-fixed.messenger-on-top, ul.messenger.messenger-fixed.messenger-on-bottom {\n    left: 10%;\n    width: 80%;\n    margin-left: 0px; } }\n\n/* line 64, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed.messenger-on-top.messenger-on-right, ul.messenger.messenger-fixed.messenger-on-bottom.messenger-on-right {\n  right: 20px;\n  left: auto; }\n\n/* line 68, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed.messenger-on-top.messenger-on-left, ul.messenger.messenger-fixed.messenger-on-bottom.messenger-on-left {\n  left: 20px;\n  margin-left: 0px; }\n\n/* line 72, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed.messenger-on-right, ul.messenger.messenger-fixed.messenger-on-left {\n  width: 350px; }\n\n/* line 75, ../../src/sass/messenger.sass */\nul.messenger.messenger-fixed.messenger-on-right .messenger-actions, ul.messenger.messenger-fixed.messenger-on-left .messenger-actions {\n  float: left; }\n\n/* line 78, ../../src/sass/messenger.sass */\nul.messenger .messenger-spinner {\n  display: none; }\n\n/* line 81, ../../src/sass/messenger.sass */\nul.messenger .messenger-clickable {\n  cursor: pointer; }\n\n@-webkit-keyframes ui-spinner-rotate-right {\n  /* line 66, ../../src/sass/messenger-spinner.scss */\n  0% {\n    -webkit-transform: rotate(0deg); }\n  /* line 67, ../../src/sass/messenger-spinner.scss */\n  25% {\n    -webkit-transform: rotate(180deg); }\n  /* line 68, ../../src/sass/messenger-spinner.scss */\n  50% {\n    -webkit-transform: rotate(180deg); }\n  /* line 69, ../../src/sass/messenger-spinner.scss */\n  75% {\n    -webkit-transform: rotate(360deg); }\n  /* line 70, ../../src/sass/messenger-spinner.scss */\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes ui-spinner-rotate-left {\n  /* line 74, ../../src/sass/messenger-spinner.scss */\n  0% {\n    -webkit-transform: rotate(0deg); }\n  /* line 75, ../../src/sass/messenger-spinner.scss */\n  25% {\n    -webkit-transform: rotate(0deg); }\n  /* line 76, ../../src/sass/messenger-spinner.scss */\n  50% {\n    -webkit-transform: rotate(180deg); }\n  /* line 77, ../../src/sass/messenger-spinner.scss */\n  75% {\n    -webkit-transform: rotate(180deg); }\n  /* line 78, ../../src/sass/messenger-spinner.scss */\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@-moz-keyframes ui-spinner-rotate-right {\n  /* line 82, ../../src/sass/messenger-spinner.scss */\n  0% {\n    -moz-transform: rotate(0deg); }\n  /* line 83, ../../src/sass/messenger-spinner.scss */\n  25% {\n    -moz-transform: rotate(180deg); }\n  /* line 84, ../../src/sass/messenger-spinner.scss */\n  50% {\n    -moz-transform: rotate(180deg); }\n  /* line 85, ../../src/sass/messenger-spinner.scss */\n  75% {\n    -moz-transform: rotate(360deg); }\n  /* line 86, ../../src/sass/messenger-spinner.scss */\n  100% {\n    -moz-transform: rotate(360deg); } }\n\n@-moz-keyframes ui-spinner-rotate-left {\n  /* line 90, ../../src/sass/messenger-spinner.scss */\n  0% {\n    -moz-transform: rotate(0deg); }\n  /* line 91, ../../src/sass/messenger-spinner.scss */\n  25% {\n    -moz-transform: rotate(0deg); }\n  /* line 92, ../../src/sass/messenger-spinner.scss */\n  50% {\n    -moz-transform: rotate(180deg); }\n  /* line 93, ../../src/sass/messenger-spinner.scss */\n  75% {\n    -moz-transform: rotate(180deg); }\n  /* line 94, ../../src/sass/messenger-spinner.scss */\n  100% {\n    -moz-transform: rotate(360deg); } }\n\n@keyframes ui-spinner-rotate-right {\n  /* line 98, ../../src/sass/messenger-spinner.scss */\n  0% {\n    transform: rotate(0deg); }\n  /* line 99, ../../src/sass/messenger-spinner.scss */\n  25% {\n    transform: rotate(180deg); }\n  /* line 100, ../../src/sass/messenger-spinner.scss */\n  50% {\n    transform: rotate(180deg); }\n  /* line 101, ../../src/sass/messenger-spinner.scss */\n  75% {\n    transform: rotate(360deg); }\n  /* line 102, ../../src/sass/messenger-spinner.scss */\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes ui-spinner-rotate-left {\n  /* line 106, ../../src/sass/messenger-spinner.scss */\n  0% {\n    transform: rotate(0deg); }\n  /* line 107, ../../src/sass/messenger-spinner.scss */\n  25% {\n    transform: rotate(0deg); }\n  /* line 108, ../../src/sass/messenger-spinner.scss */\n  50% {\n    transform: rotate(180deg); }\n  /* line 109, ../../src/sass/messenger-spinner.scss */\n  75% {\n    transform: rotate(180deg); }\n  /* line 110, ../../src/sass/messenger-spinner.scss */\n  100% {\n    transform: rotate(360deg); } }\n\n/* line 118, ../../src/sass/messenger-spinner.scss */\n.messenger-spinner {\n  position: relative;\n  border-radius: 100%; }\n\n/* line 122, ../../src/sass/messenger-spinner.scss */\nul.messenger.messenger-spinner-active .messenger-spinner .messenger-spinner {\n  display: block; }\n\n/* line 126, ../../src/sass/messenger-spinner.scss */\n.messenger-spinner .messenger-spinner-side {\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute; }\n\n/* line 132, ../../src/sass/messenger-spinner.scss */\n.messenger-spinner .messenger-spinner-side .messenger-spinner-fill {\n  border-radius: 999px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -moz-animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -moz-animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear; }\n\n/* line 142, ../../src/sass/messenger-spinner.scss */\n.messenger-spinner .messenger-spinner-side-left {\n  left: 0; }\n\n/* line 145, ../../src/sass/messenger-spinner.scss */\n.messenger-spinner .messenger-spinner-side-left .messenger-spinner-fill {\n  left: 100%;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  -moz-animation-name: ui-spinner-rotate-left;\n  -webkit-animation-name: ui-spinner-rotate-left;\n  animation-name: ui-spinner-rotate-left;\n  -moz-transform-origin: 0 50% 50%;\n  -ms-transform-origin: 0 50% 50%;\n  -webkit-transform-origin: 0 50% 50%;\n  transform-origin: 0 50% 50%; }\n\n/* line 154, ../../src/sass/messenger-spinner.scss */\n.messenger-spinner .messenger-spinner-side-right {\n  left: 50%; }\n\n/* line 157, ../../src/sass/messenger-spinner.scss */\n.messenger-spinner .messenger-spinner-side-right .messenger-spinner-fill {\n  left: -100%;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  -moz-animation-name: ui-spinner-rotate-right;\n  -webkit-animation-name: ui-spinner-rotate-right;\n  animation-name: ui-spinner-rotate-right;\n  -moz-transform-origin: 100% 50% 50%;\n  -ms-transform-origin: 100% 50% 50%;\n  -webkit-transform-origin: 100% 50% 50%;\n  transform-origin: 100% 50% 50%; }\n\n@-webkit-keyframes ui-spinner-rotate-right {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  25% {\n    -webkit-transform: rotate(180deg); }\n  50% {\n    -webkit-transform: rotate(180deg); }\n  75% {\n    -webkit-transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes ui-spinner-rotate-left {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  25% {\n    -webkit-transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(180deg); }\n  75% {\n    -webkit-transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@-moz-keyframes ui-spinner-rotate-right {\n  0% {\n    -moz-transform: rotate(0deg); }\n  25% {\n    -moz-transform: rotate(180deg); }\n  50% {\n    -moz-transform: rotate(180deg); }\n  75% {\n    -moz-transform: rotate(360deg); }\n  100% {\n    -moz-transform: rotate(360deg); } }\n\n@-moz-keyframes ui-spinner-rotate-left {\n  0% {\n    -moz-transform: rotate(0deg); }\n  25% {\n    -moz-transform: rotate(0deg); }\n  50% {\n    -moz-transform: rotate(180deg); }\n  75% {\n    -moz-transform: rotate(180deg); }\n  100% {\n    -moz-transform: rotate(360deg); } }\n\n@keyframes ui-spinner-rotate-right {\n  0% {\n    transform: rotate(0deg); }\n  25% {\n    transform: rotate(180deg); }\n  50% {\n    transform: rotate(180deg); }\n  75% {\n    transform: rotate(360deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes ui-spinner-rotate-left {\n  0% {\n    transform: rotate(0deg); }\n  25% {\n    transform: rotate(0deg); }\n  50% {\n    transform: rotate(180deg); }\n  75% {\n    transform: rotate(180deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.messenger-spinner {\n  position: relative;\n  border-radius: 100%; }\n  ul.messenger.messenger-spinner-active .messenger-spinner .messenger-spinner {\n    display: block; }\n  .messenger-spinner .messenger-spinner-side {\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    position: absolute; }\n    .messenger-spinner .messenger-spinner-side .messenger-spinner-fill {\n      border-radius: 999px;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear; }\n  .messenger-spinner .messenger-spinner-side-left {\n    left: 0; }\n    .messenger-spinner .messenger-spinner-side-left .messenger-spinner-fill {\n      left: 100%;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n      animation-name: ui-spinner-rotate-left;\n      transform-origin: 0 50%; }\n  .messenger-spinner .messenger-spinner-side-right {\n    left: 50%; }\n    .messenger-spinner .messenger-spinner-side-right .messenger-spinner-fill {\n      left: -100%;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      animation-name: ui-spinner-rotate-right;\n      transform-origin: 100% 50%; }\n\nul.messenger-theme-air {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none; }\n  ul.messenger-theme-air .messenger-message {\n    transition: background-color 0.4s;\n    border-radius: 5px;\n    border-color: transparent;\n    background-color: rgba(52, 52, 52, 0.4);\n    position: relative;\n    margin-bottom: 1em;\n    color: #f8f8f8;\n    font-weight: 500;\n    padding: 10px 30px 11px 46px; }\n    ul.messenger-theme-air .messenger-message:hover {\n      background-color: rgba(51, 51, 51, 0.4); }\n    ul.messenger-theme-air .messenger-message .messenger-close {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      color: #888888;\n      opacity: 1;\n      font-weight: bold;\n      display: block;\n      font-size: 20px;\n      line-height: 20px;\n      padding: 8px 10px 7px 7px;\n      cursor: pointer;\n      background: transparent;\n      border: 0;\n      -webkit-appearance: none; }\n      ul.messenger-theme-air .messenger-message .messenger-close:hover {\n        color: #444444; }\n      ul.messenger-theme-air .messenger-message .messenger-close:active {\n        color: #222222; }\n    ul.messenger-theme-air .messenger-message .messenger-actions {\n      float: none;\n      margin-top: 10px; }\n      ul.messenger-theme-air .messenger-message .messenger-actions a {\n        transition: background-color .3s;\n        border-radius: 4px;\n        text-decoration: none;\n        display: inline-block;\n        color: #f8f8f8;\n        margin-right: 10px;\n        padding: 3px 10px 5px;\n        text-transform: capitalize;\n        background-color: rgba(51, 51, 51, 0.3); }\n        ul.messenger-theme-air .messenger-message .messenger-actions a:hover {\n          color: #f8f8f8;\n          background-color: rgba(26, 26, 26, 0.3); }\n        ul.messenger-theme-air .messenger-message .messenger-actions a:active {\n          color: #f8f8f8; }\n      ul.messenger-theme-air .messenger-message .messenger-actions .messenger-phrase {\n        display: none; }\n    ul.messenger-theme-air .messenger-message .messenger-message-inner:before {\n      border-radius: 50%;\n      position: absolute;\n      left: 17px;\n      display: block;\n      content: \" \";\n      top: 50%;\n      margin-top: -8px;\n      height: 13px;\n      width: 13px;\n      z-index: 20; }\n    ul.messenger-theme-air .messenger-message.alert-success .messenger-message-inner:before {\n      background-color: #5fca4a; }\n    ul.messenger-theme-air .messenger-message.alert-error.messenger-retry-soon .messenger-spinner {\n      width: 22px;\n      height: 22px;\n      background: transparent; }\n      ul.messenger-theme-air .messenger-message.alert-error.messenger-retry-soon .messenger-spinner .messenger-spinner-side .messenger-spinner-fill {\n        background: #ffffff;\n        animation-duration: 20s;\n        opacity: 1; }\n      ul.messenger-theme-air .messenger-message.alert-error.messenger-retry-soon .messenger-spinner:after {\n        content: \"\";\n        background: transparent;\n        position: absolute;\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        top: 2px;\n        left: 2px;\n        display: block; }\n    ul.messenger-theme-air .messenger-message.alert-error.messenger-retry-later .messenger-spinner {\n      width: 22px;\n      height: 22px;\n      background: transparent; }\n      ul.messenger-theme-air .messenger-message.alert-error.messenger-retry-later .messenger-spinner .messenger-spinner-side .messenger-spinner-fill {\n        background: #ffffff;\n        animation-duration: 600s;\n        opacity: 1; }\n      ul.messenger-theme-air .messenger-message.alert-error.messenger-retry-later .messenger-spinner:after {\n        content: \"\";\n        background: transparent;\n        position: absolute;\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        top: 2px;\n        left: 2px;\n        display: block; }\n    ul.messenger-theme-air .messenger-message.alert-error .messenger-message-inner:before {\n      background-color: #dd6a45; }\n    ul.messenger-theme-air .messenger-message.alert-info .messenger-message-inner:before {\n      background-color: #61c4b8; }\n  ul.messenger-theme-air .messenger-spinner {\n    display: block;\n    position: absolute;\n    left: 12px;\n    top: 50%;\n    margin-top: -12px;\n    z-index: 999;\n    height: 22px;\n    width: 22px;\n    z-index: 10; }\n\npre.form-actions {\n  padding: 8.5px;\n  word-break: break-all;\n  word-wrap: break-word;\n  overflow: hidden; }\n  pre.form-actions code {\n    white-space: pre-wrap; }\n"

/***/ },

/***/ "./src/app/ui/notifications/notifications.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Notifications\n  <small>Transactional messages in your app</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <section class=\"widget\" messenger-demo widget>\n      <header>\n        <h5>\n          Messenger\n        </h5>\n        <div class=\"widget-controls\">\n          <a title=\"Properties\" href=\"#\"><i class=\"glyphicon glyphicon-cog\"></i></a>\n          <a data-widgster=\"expand\" title=\"Expand\" href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i></a>\n          <a data-widgster=\"collapse\" title=\"Collapse\" href=\"#\"><i class=\"glyphicon glyphicon-minus\"></i></a>\n          <a data-widgster=\"close\" title=\"Close\" href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n        </div>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-xs-11\">\n            <h4 class=\"mt-1\">Layout options</h4>\n            <p>There are few position options available for notifications. You can click any of them\n              to change notifications position:</p>\n            <div class=\"location-selector\">\n              <div class=\"bit top left\" data-position=\"top left\"></div>\n              <div class=\"bit top right\" data-position=\"top right\"></div>\n              <div class=\"bit top\" data-position=\"top\"></div>\n              <div class=\"bit bottom left\" data-position=\"bottom left\"></div>\n              <div class=\"bit bottom right\" data-position=\"bottom right\"></div>\n              <div class=\"bit bottom\" data-position=\"bottom\"></div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-xs-11\">\n            <h4 class=\"mt-1\">Notification Types</h4>\n            <p>Different types of notifications for lost of use cases. Custom classes are also supported.</p>\n            <p><a class=\"btn btn-info\" id=\"show-info-message\" href=\"#\">Info Message</a></p>\n            <p><a class=\"btn btn-danger\" id=\"show-error-message\" href=\"#\">Error + Retry Message</a></p>\n            <p><a class=\"btn btn-success\" id=\"show-success-message\" href=\"#\">Success Message</a></p>\n          </div>\n          <div class=\"col-lg-4 col-xs-11\">\n            <h4 class=\"mt-1\">Dead Simple Usage</h4>\n            <p>Just few lines of code to instantiate a notifications object. Does not require passing any options:</p>\n            <pre class=\"form-actions\"><code>Messenger().post(\"Thanks for checking out Messenger!\");</code></pre>\n            <p>More complex example:</p>\n            <pre class=\"form-actions\">\n<code>{{\"Messenger().post({\\n\" +\n  \"    message: 'There was an explosion while processing your request.',\\n\" +\n  \"    type: 'error',\\n\" +\n  \"    showCloseButton: true\\n\" +\n\"});\"}}</code>\n            </pre>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n\n"

/***/ },

/***/ "./src/app/ui/tabs/tabs.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Tabs = (function () {
    function Tabs() {
    }
    Tabs.prototype.ngOnInit = function () {
        jQuery('.nav-tabs').on('shown.bs.tab', 'a', function (e) {
            if (e.relatedTarget) {
                jQuery(e.relatedTarget).removeClass('active');
            }
        });
    };
    Tabs = __decorate([
        core_1.Component({
            selector: '[tabs]',
            template: __webpack_require__("./src/app/ui/tabs/tabs.template.html"),
            styles: [__webpack_require__("./src/app/ui/tabs/tabs.style.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/ui/tabs/tabs.style.scss":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./src/app/ui/tabs/tabs.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Tabs\n  <small>Tabs-enabled widget and more</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-md-6 offset-md-2\">\n    <section widget class=\"widget widget-tabs\">\n      <header>\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#stats\" data-toggle=\"tab\">Red</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#report\" data-toggle=\"tab\">Orange</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Dropdown <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <div class=\"dropdown-menu\">\n              <a class=\"dropdown-item\" id=\"dropdown1-tab\" href=\"#dropdown1\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"dropdown1\" aria-expanded=\"false\">Green</a>\n              <a class=\"dropdown-item\" id=\"dropdown2-tab\" href=\"#dropdown2\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"dropdown2\" aria-expanded=\"false\">Blue</a>\n            </div>\n          </li>\n        </ul>\n      </header>\n      <div class=\"widget-body tab-content\">\n        <div id=\"stats\" class=\"tab-pane active clearfix\">\n          <h2>Tabs-enabled widget</h2>\n          <p>You will never know exactly how something will go until you try it.</p>\n          <p>You can think three hundred times and still have no precise result. If you see\n            attractive girl all you need to do is to go and ask her to give you her phone. You don’t\n            need to think about HOW it can turn out. All you have to do is to GO and DO IT. It\n            should be super-fast and easy. No hesitation. You ask me: “What to do with these\n            fearful thoughts preventing me from doing that?” The answer is to ignore them, because\n            they can’t disappear immediately.</p>\n            <p>The same thing is for startups and ideas. If you have an idea right away after it appears in your mind you should go and make a first step to implement it. </p>\n          <div class=\"float-xs-right\">\n            <button class=\"btn btn-inverse\">Cancel</button>\n            <button class=\"btn btn-primary\">Some button</button>\n          </div>\n        </div>\n        <div id=\"report\" class=\"tab-pane\">\n          <div style=\"font-size: 200px; text-align: center; color: #56bc76; height: 280px;\">\n            <i class=\"fa fa-picture-o\"></i>\n          </div>\n        </div>\n        <div id=\"dropdown1\" class=\"tab-pane\">\n          <p>The same thing is for startups and ideas. If you have an idea right away after it appears\n            in your mind you should go and make a first step to implement it. If you will think too\n            much it will sink in the swamp of never implemented plans and ideas or will just go away\n            or will be implemented by someone else.</p>\n          <p><strong>5 months of doing everything to achieve nothing.</strong></p>\n          <p>I had an idea named Great Work. It was a service aimed to help people find their passion.\n            Yes I know it sound crazy and super naïve but I worked on that. I started to work on\n            planning, graphics, presentations, pictures, descriptions, articles, investments and so\n            on. I worked on everything but not the project itself</p>\n          <div>\n            <button class=\"btn btn-danger\">Some button</button>\n            <button class=\"btn btn-default\">Cancel</button>\n          </div>\n        </div>\n        <div id=\"dropdown2\" class=\"tab-pane\">\n            <p>I realized really simple thing recently. Try is million times better than think. The real world is much more representative than any models either they are built in mind or on the shit of paper.</p>\n          <div>\n            <button class=\"btn btn-warning btn-block\">Some button</button>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-arrow-down\"></i>\n          Tabs inside of the body\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <ul id=\"myTab\" class=\"nav nav-tabs\">\n          <li class=\"nav-item\">\n            <a href=\"#home\" class=\"nav-link\" data-toggle=\"tab\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#profile\" class=\"nav-link active\" data-toggle=\"tab\">Profile</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n            <div class=\"dropdown-menu\">\n              <a href=\"#dropdown3\" class=\"dropdown-item\" data-toggle=\"tab\">@fat</a>\n              <a href=\"#dropdown4\" class=\"dropdown-item\" data-toggle=\"tab\">@mdo</a>\n            </div>\n          </li>\n        </ul>\n        <div id=\"myTabContent\" class=\"tab-content\">\n          <div class=\"tab-pane fade\" id=\"home\">\n              <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n          </div>\n          <div class=\"tab-pane fade in active\" id=\"profile\">\n              <p>Light Blue - is a next generation admin template based on the latest Metro design. There are few reasons we want to tell you, why we have created it:\n                We didn't like the darkness of most of admin templates, so we created this light one. We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.\n                We searched for a solution of how to make widgets look like real widgets, so we decided that deep background - is what makes widgets look real.</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"dropdown3\">\n              <p>Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"dropdown4\">\n              <p>They sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"col-md-6\">\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-arrow-up\"></i>\n          Tabs on the bottom\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"tabbable tabs-below\">\n          <div id=\"myTabContentbottom\" class=\"tab-content\">\n            <div class=\"tab-pane fade\" id=\"home-bottom\">\n                <p>Light Blue - is a next generation admin template based on the latest Metro design. There are few reasons we want to tell you, why we have created it:\n                  We didn't like the darkness of most of admin templates, so we created this light one. We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.\n                  We searched for a solution of how to make widgets look like real widgets, so we decided that deep background - is what makes widgets look real.</p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"profile-bottom\">\n                <p>Food truck fixie locavore, single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown.</p>\n            </div>\n            <div class=\"tab-pane fade in active\" id=\"dropdown3-bottom\">\n                <p>Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually. Everyone knows what is lore ipsum - it is\n                  easy to understand if text is lore ipsum. You'll automatically skip - because you know - it's just non-informative stub. But what if there some text like this one? You start to read it!\n                But the goal of this text is different. So a bit of Lore Ipsum is always great practice</p>\n            </div>\n          </div>\n          <ul id=\"myTabbottom\" class=\"nav nav-tabs \">\n            <li class=\"nav-item\">\n              <a href=\"#home-bottom\" class=\"nav-link\" data-toggle=\"tab\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#profile-bottom\" class=\"nav-link\" data-toggle=\"tab\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#dropdown3-bottom\" class=\"nav-link active\" data-toggle=\"tab\">Search</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-arrow-right\"></i>\n          Tabs on the left\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"tabbable tabs-left\">\n          <ul id=\"myTabLeft\" class=\"nav nav-tabs\">\n            <li class=\"nav-item\">\n              <a href=\"#home-left\" class=\"nav-link\" data-toggle=\"tab\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#profile-left\" class=\"nav-link active\" data-toggle=\"tab\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#dropdown3-left\" class=\"nav-link\" data-toggle=\"tab\">Search</a>\n            </li>\n          </ul>\n          <div id=\"myTabContentLeft\" class=\"tab-content\">\n            <div class=\"tab-pane fade\" id=\"home-left\">\n                <p>Light Blue - is a next generation admin template based on the latest Metro design. There are few reasons we want to tell you, why we have created it:\n                  We didn't like the darkness of most of admin templates, so we created this light one. We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.\n                  We searched for a solution of how to make widgets look like real widgets, so we decided that deep background - is what makes widgets look real.</p>\n            </div>\n            <div class=\"tab-pane fade in active\" id=\"profile-left\">\n                <p>Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually. Everyone knows what is lore ipsum - it is\n                  easy to understand if text is lore ipsum. You'll automatically skip - because you know - it's just non-informative stub. But what if there some text like this one? You start to read it!\n                But the goal of this text is different. So a bit of Lore Ipsum is always great practice</p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"dropdown3-left\">\n                <p>Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"col-md-6\">\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-arrow-left\"></i>\n          Tabs on the right\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"tabbable tabs-right\">\n          <ul id=\"myTabright\" class=\"nav nav-tabs\">\n            <li class=\"nav-item\">\n              <a href=\"#home-right\" class=\"nav-link\" data-toggle=\"tab\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#profile-right\" class=\"nav-link active\" data-toggle=\"tab\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#dropdown3-right\" class=\"nav-link\" data-toggle=\"tab\">Search</a>\n            </li>\n          </ul>\n          <div id=\"myTabContentright\" class=\"tab-content\">\n            <div class=\"tab-pane fade\" id=\"home-right\">\n                <p>Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I think the opposite actually. Everyone knows what is lore ipsum - it is\n                  easy to understand if text is lore ipsum. You'll automatically skip - because you know - it's just non-informative stub. But what if there some text like this one? You start to read it!\n                But the goal of this text is different. So a bit of Lore Ipsum is always great practice.</p>\n            </div>\n            <div class=\"tab-pane fade in active\" id=\"profile-right\">\n                <p>Light Blue - is a next generation admin template based on the latest Metro design. There are few reasons we want to tell you, why we have created it:\n                  We didn't like the darkness of most of admin templates, so we created this light one. We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.\n                  We searched for a solution of how to make widgets look like real widgets, so we decided that deep background - is what makes widgets look real.</p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"dropdown3-right\">\n                <p>Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/ui/ui.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__("./node_modules/messenger/build/js/messenger.js");
__webpack_require__("./node_modules/messenger/build/js/messenger-theme-flat.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var buttons_component_1 = __webpack_require__("./src/app/ui/buttons/buttons.component.ts");
var dialogs_component_1 = __webpack_require__("./src/app/ui/dialogs/dialogs.component.ts");
var icons_component_1 = __webpack_require__("./src/app/ui/icons/icons.component.ts");
var tabs_component_1 = __webpack_require__("./src/app/ui/tabs/tabs.component.ts");
var notifications_component_1 = __webpack_require__("./src/app/ui/notifications/notifications.component.ts");
var accordion_component_1 = __webpack_require__("./src/app/ui/accordion/accordion.component.ts");
var ng2_bootstrap_1 = __webpack_require__("./node_modules/ng2-bootstrap/ng2-bootstrap.js");
var ng2_bootstrap_2 = __webpack_require__("./node_modules/ng2-bootstrap/ng2-bootstrap.js");
var messenger_directive_1 = __webpack_require__("./src/app/ui/notifications/messenger/messenger.directive.ts");
var widget_module_1 = __webpack_require__("./src/app/layout/widget/widget.module.ts");
console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
exports.routes = [
    { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    { path: 'buttons', component: buttons_component_1.Buttons },
    { path: 'dialogs', component: dialogs_component_1.Dialogs },
    { path: 'icons', component: icons_component_1.Icons },
    { path: 'tabs', component: tabs_component_1.Tabs },
    { path: 'notifications', component: notifications_component_1.Notifications },
    { path: 'accordion', component: accordion_component_1.Accordion },
];
var UiModule = (function () {
    function UiModule() {
    }
    UiModule.routes = exports.routes;
    UiModule = __decorate([
        core_1.NgModule({
            declarations: [
                // Components / Directives/ Pipes
                buttons_component_1.Buttons,
                dialogs_component_1.Dialogs,
                icons_component_1.Icons,
                tabs_component_1.Tabs,
                accordion_component_1.Accordion,
                notifications_component_1.Notifications,
                messenger_directive_1.MessengerDemo
            ],
            imports: [
                common_1.CommonModule,
                widget_module_1.WidgetModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
                ng2_bootstrap_1.TooltipModule, ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_2.TabsModule, ng2_bootstrap_2.AccordionModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UiModule);
    return UiModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UiModule;


/***/ }

});
//# sourceMappingURL=10.map