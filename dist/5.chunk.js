webpackJsonpac__name_([5],{

/***/ "./node_modules/angular2-google-maps/core/core-module.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var google_map_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map.js");
var google_map_circle_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-circle.js");
var google_map_info_window_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-info-window.js");
var google_map_marker_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-marker.js");
var google_map_polyline_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline.js");
var google_map_polyline_point_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js");
var lazy_maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js");
var lazy_maps_api_loader_2 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js");
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
var browser_globals_1 = __webpack_require__("./node_modules/angular2-google-maps/core/utils/browser-globals.js");
var CORE_DIRECTIVES = [
    google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker, google_map_info_window_1.SebmGoogleMapInfoWindow, google_map_circle_1.SebmGoogleMapCircle,
    google_map_polyline_1.SebmGoogleMapPolyline, google_map_polyline_point_1.SebmGoogleMapPolylinePoint
];
/**
 * The angular2-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        var providers = browser_globals_1.BROWSER_GLOBALS_PROVIDERS.concat([{ provide: maps_api_loader_1.MapsAPILoader, useClass: lazy_maps_api_loader_1.LazyMapsAPILoader }]);
        if (lazyMapsAPILoaderConfig) {
            providers.push(lazy_maps_api_loader_2.provideLazyMapsAPILoaderConfig(lazyMapsAPILoaderConfig));
        }
        return {
            ngModule: AgmCoreModule,
            providers: providers,
        };
    };
    AgmCoreModule = __decorate([
        core_1.NgModule({ declarations: CORE_DIRECTIVES, exports: CORE_DIRECTIVES }), 
        __metadata('design:paramtypes', [])
    ], AgmCoreModule);
    return AgmCoreModule;
}());
exports.AgmCoreModule = AgmCoreModule;

//# sourceMappingURL=core-module.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var google_map_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map.js");
exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
var google_map_circle_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-circle.js");
exports.SebmGoogleMapCircle = google_map_circle_1.SebmGoogleMapCircle;
var google_map_info_window_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-info-window.js");
exports.SebmGoogleMapInfoWindow = google_map_info_window_1.SebmGoogleMapInfoWindow;
var google_map_marker_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-marker.js");
exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
var google_map_polyline_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline.js");
exports.SebmGoogleMapPolyline = google_map_polyline_1.SebmGoogleMapPolyline;
var google_map_polyline_point_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js");
exports.SebmGoogleMapPolylinePoint = google_map_polyline_point_1.SebmGoogleMapPolylinePoint;

//# sourceMappingURL=directives.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-circle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var circle_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/circle-manager.js");
var SebmGoogleMapCircle = (function () {
    function SebmGoogleMapCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new core_1.EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new core_1.EventEmitter();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new core_1.EventEmitter();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new core_1.EventEmitter();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new core_1.EventEmitter();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new core_1.EventEmitter();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    SebmGoogleMapCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    SebmGoogleMapCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    SebmGoogleMapCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    SebmGoogleMapCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    SebmGoogleMapCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex'
    ];
    SebmGoogleMapCircle = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-circle',
            inputs: [
                'latitude', 'longitude', 'clickable', 'draggable: circleDraggable', 'editable', 'fillColor',
                'fillOpacity', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
                'visible', 'zIndex'
            ],
            outputs: [
                'centerChange', 'circleClick', 'circleDblClick', 'drag', 'dragEnd', 'dragStart', 'mouseDown',
                'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'radiusChange', 'rightClick'
            ]
        }), 
        __metadata('design:paramtypes', [circle_manager_1.CircleManager])
    ], SebmGoogleMapCircle);
    return SebmGoogleMapCircle;
}());
exports.SebmGoogleMapCircle = SebmGoogleMapCircle;

//# sourceMappingURL=google-map-circle.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-info-window.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var info_window_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js");
var infoWindowId = 0;
/**
 * SebmGoogleMapInfoWindow renders a info window inside a {@link SebmGoogleMapMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import {Component} from 'angular2/core';
 * import {SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow} from
 * 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <sebm-google-map-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </sebm-google-map-info-window>
 *      </sebm-google-map-marker>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapInfoWindow = (function () {
    function SebmGoogleMapInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new core_1.EventEmitter();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    SebmGoogleMapInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.sebm-google-map-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
    };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    SebmGoogleMapInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this._infoWindowManager.open(this) : this._infoWindowManager.close(this);
    };
    SebmGoogleMapInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    SebmGoogleMapInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    SebmGoogleMapInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(void 0); });
    };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.toString = function () { return 'SebmGoogleMapInfoWindow-' + this._id.toString(); };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    SebmGoogleMapInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    SebmGoogleMapInfoWindow = __decorate([
        core_1.Component({
            selector: 'sebm-google-map-info-window',
            inputs: ['latitude', 'longitude', 'disableAutoPan', 'isOpen', 'zIndex', 'maxWidth'],
            outputs: ['infoWindowClose'],
            template: "<div class='sebm-google-map-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [info_window_manager_1.InfoWindowManager, core_1.ElementRef])
    ], SebmGoogleMapInfoWindow);
    return SebmGoogleMapInfoWindow;
}());
exports.SebmGoogleMapInfoWindow = SebmGoogleMapInfoWindow;

//# sourceMappingURL=google-map-info-window.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-marker.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
var google_map_info_window_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-info-window.js");
var markerId = 0;
/**
 * SebmGoogleMapMarker renders a map marker inside a {@link SebmGoogleMap}.
 *
 * ### Example
 * ```typescript
 * import {Component} from 'angular2/core';
 * import {SebmGoogleMap, SebmGoogleMapMarker} from 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGoogleMapMarker],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </sebm-google-map-marker>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapMarker = (function () {
    function SebmGoogleMapMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new core_1.EventEmitter();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    SebmGoogleMapMarker.prototype.ngAfterContentInit = function () {
        if (this._infoWindow != null) {
            this._infoWindow.hostMarker = this;
        }
    };
    /** @internal */
    SebmGoogleMapMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
    };
    SebmGoogleMapMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow && _this._infoWindow != null) {
                _this._infoWindow.open();
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
    };
    /** @internal */
    SebmGoogleMapMarker.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapMarker.prototype.toString = function () { return 'SebmGoogleMapMarker-' + this._id.toString(); };
    /** @internal */
    SebmGoogleMapMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        core_1.ContentChild(google_map_info_window_1.SebmGoogleMapInfoWindow), 
        __metadata('design:type', google_map_info_window_1.SebmGoogleMapInfoWindow)
    ], SebmGoogleMapMarker.prototype, "_infoWindow", void 0);
    SebmGoogleMapMarker = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-marker',
            inputs: [
                'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                'openInfoWindow', 'fitBounds', 'opacity', 'visible', 'zIndex'
            ],
            outputs: ['markerClick', 'dragEnd']
        }), 
        __metadata('design:paramtypes', [marker_manager_1.MarkerManager])
    ], SebmGoogleMapMarker);
    return SebmGoogleMapMarker;
}());
exports.SebmGoogleMapMarker = SebmGoogleMapMarker;

//# sourceMappingURL=google-map-marker.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
/**
 * SebmGoogleMapPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var SebmGoogleMapPolylinePoint = (function () {
    function SebmGoogleMapPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new core_1.EventEmitter();
    }
    SebmGoogleMapPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SebmGoogleMapPolylinePoint.prototype, "latitude", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SebmGoogleMapPolylinePoint.prototype, "longitude", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SebmGoogleMapPolylinePoint.prototype, "positionChanged", void 0);
    SebmGoogleMapPolylinePoint = __decorate([
        core_1.Directive({ selector: 'sebm-google-map-polyline-point' }), 
        __metadata('design:paramtypes', [])
    ], SebmGoogleMapPolylinePoint);
    return SebmGoogleMapPolylinePoint;
}());
exports.SebmGoogleMapPolylinePoint = SebmGoogleMapPolylinePoint;

//# sourceMappingURL=google-map-polyline-point.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-polyline.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var polyline_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js");
var google_map_polyline_point_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js");
var polylineId = 0;
/**
 * SebmGoogleMapPolyline renders a polyline on a {@link SebmGoogleMap}
 *
 * ### Example
 * ```typescript
 * import {Component} from 'angular2/core';
 * import {SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint} from
 * 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-polyline>
 *          <sebm-google-map-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </sebm-google-map-polyline-point>
 *          <sebm-google-map-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </sebm-google-map-polyline-point>
 *      </sebm-google-map-polyline>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapPolyline = (function () {
    function SebmGoogleMapPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new core_1.EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new core_1.EventEmitter();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new core_1.EventEmitter();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new core_1.EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new core_1.EventEmitter();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new core_1.EventEmitter();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    SebmGoogleMapPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._points.length) {
            this._points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this._points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    SebmGoogleMapPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    SebmGoogleMapPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    SebmGoogleMapPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    SebmGoogleMapPolyline.prototype._getPoints = function () {
        if (this._points) {
            return this._points.toArray();
        }
        return [];
    };
    /** @internal */
    SebmGoogleMapPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SebmGoogleMapPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    __decorate([
        core_1.ContentChildren(google_map_polyline_point_1.SebmGoogleMapPolylinePoint), 
        __metadata('design:type', core_1.QueryList)
    ], SebmGoogleMapPolyline.prototype, "_points", void 0);
    SebmGoogleMapPolyline = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-polyline',
            inputs: [
                'clickable', 'draggable: polylineDraggable', 'editable', 'geodesic', 'strokeColor',
                'strokeWeight', 'strokeOpacity', 'visible', 'zIndex'
            ],
            outputs: [
                'lineClick', 'lineDblClick', 'lineDrag', 'lineDragEnd', 'lineMouseDown', 'lineMouseMove',
                'lineMouseOut', 'lineMouseOver', 'lineMouseUp', 'lineRightClick'
            ]
        }), 
        __metadata('design:paramtypes', [polyline_manager_1.PolylineManager])
    ], SebmGoogleMapPolyline);
    return SebmGoogleMapPolyline;
}());
exports.SebmGoogleMapPolyline = SebmGoogleMapPolyline;

//# sourceMappingURL=google-map-polyline.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var circle_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/circle-manager.js");
var info_window_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js");
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
var polyline_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js");
/**
 * SebMGoogleMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the CSS
 * class `sebm-google-map-container`.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {SebmGoogleMap} from 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMap = (function () {
    function SebmGoogleMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new core_1.EventEmitter();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new core_1.EventEmitter();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new core_1.EventEmitter();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new core_1.EventEmitter();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new core_1.EventEmitter();
    }
    /** @internal */
    SebmGoogleMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.sebm-google-map-container-inner');
        this._initMapInstance(container);
    };
    SebmGoogleMap.prototype._initMapInstance = function (el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            disableDefaultUI: this.disableDefaultUI,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            zoomControl: this.zoomControl,
            styles: this.styles,
            streetViewControl: this.streetViewControl,
            scaleControl: this.scaleControl,
            mapTypeControl: this.mapTypeControl
        });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleIdleEvent();
    };
    /** @internal */
    SebmGoogleMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    SebmGoogleMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    SebmGoogleMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * Returns a promise that gets resolved after the event was triggered.
     */
    SebmGoogleMap.prototype.triggerResize = function () {
        var _this = this;
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () { return _this._mapsWrapper.triggerMapEvent('resize').then(function () { return resolve(); }); });
        });
    };
    SebmGoogleMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    SebmGoogleMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    SebmGoogleMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
     * Map option attributes that can change over time
     */
    SebmGoogleMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'styles', 'streetViewControl', 'zoom', 'mapTypeControl'
    ];
    SebmGoogleMap = __decorate([
        core_1.Component({
            selector: 'sebm-google-map',
            providers: [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager, info_window_manager_1.InfoWindowManager, circle_manager_1.CircleManager, polyline_manager_1.PolylineManager],
            inputs: [
                'longitude', 'latitude', 'zoom', 'draggable: mapDraggable', 'disableDoubleClickZoom',
                'disableDefaultUI', 'scrollwheel', 'backgroundColor', 'draggableCursor', 'draggingCursor',
                'keyboardShortcuts', 'zoomControl', 'styles', 'usePanning', 'streetViewControl', 'fitBounds',
                'scaleControl', 'mapTypeControl'
            ],
            outputs: [
                'mapClick', 'mapRightClick', 'mapDblClick', 'centerChange', 'idle', 'boundsChange', 'zoomChange'
            ],
            host: { '[class.sebm-google-map-container]': 'true' },
            styles: ["\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .sebm-google-map-content {\n      display:none;\n    }\n  "],
            template: "\n    <div class='sebm-google-map-container-inner'></div>\n    <div class='sebm-google-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, google_maps_api_wrapper_1.GoogleMapsAPIWrapper])
    ], SebmGoogleMap);
    return SebmGoogleMap;
}());
exports.SebmGoogleMap = SebmGoogleMap;

//# sourceMappingURL=google-map.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// main modules
__export(__webpack_require__("./node_modules/angular2-google-maps/core/directives.js"));
__export(__webpack_require__("./node_modules/angular2-google-maps/core/services.js"));
// Google Maps types
// core module
__export(__webpack_require__("./node_modules/angular2-google-maps/core/core-module.js"));

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
exports.GoogleMapsAPIWrapper = google_maps_api_wrapper_1.GoogleMapsAPIWrapper;
var circle_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/circle-manager.js");
exports.CircleManager = circle_manager_1.CircleManager;
var info_window_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js");
exports.InfoWindowManager = info_window_manager_1.InfoWindowManager;
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
exports.MarkerManager = marker_manager_1.MarkerManager;
var polyline_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js");
exports.PolylineManager = polyline_manager_1.PolylineManager;
var lazy_maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js");
exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
exports.LazyMapsAPILoaderConfig = lazy_maps_api_loader_1.LazyMapsAPILoaderConfig;
exports.provideLazyMapsAPILoaderConfig = lazy_maps_api_loader_1.provideLazyMapsAPILoaderConfig;
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
var noop_maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/noop-maps-api-loader.js");
exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;

//# sourceMappingURL=services.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._loader.load().then(function () {
            var map = new google.maps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
        if (options === void 0) { options = {}; }
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [maps_api_loader_1.MapsAPILoader, core_1.NgZone])
    ], GoogleMapsAPIWrapper);
    return GoogleMapsAPIWrapper;
}());
exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;

//# sourceMappingURL=google-maps-api-wrapper.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/circle-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var CircleManager = (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    ;
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    ;
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    ;
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    ;
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    ;
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    ;
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    ;
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    ;
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    ;
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone])
    ], CircleManager);
    return CircleManager;
}());
exports.CircleManager = CircleManager;

//# sourceMappingURL=circle-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
var InfoWindowManager = (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    InfoWindowManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone, marker_manager_1.MarkerManager])
    ], InfoWindowManager);
    return InfoWindowManager;
}());
exports.InfoWindowManager = InfoWindowManager;

//# sourceMappingURL=info-window-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/marker-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var MarkerManager = (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone])
    ], MarkerManager);
    return MarkerManager;
}());
exports.MarkerManager = MarkerManager;

//# sourceMappingURL=marker-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var PolylineManager = (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone])
    ], PolylineManager);
    return PolylineManager;
}());
exports.PolylineManager = PolylineManager;

//# sourceMappingURL=polyline-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var browser_globals_1 = __webpack_require__("./node_modules/angular2-google-maps/core/utils/browser-globals.js");
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
var GoogleMapsScriptProtocol = exports.GoogleMapsScriptProtocol;
/**
 * Configuration for {@link LazyMapsAPILoader}.
 * See {@link LazyMapsAPILoaderConfig} for instance attribute descriptions.
 */
var LazyMapsAPILoaderConfig = (function () {
    function LazyMapsAPILoaderConfig() {
        this.apiKey = null;
        this.clientId = null;
        this.channel = null;
        this.apiVersion = '3';
        this.hostAndPath = 'maps.googleapis.com/maps/api/js';
        this.protocol = GoogleMapsScriptProtocol.HTTPS;
        this.libraries = [];
        this.region = null;
        this.language = null;
    }
    return LazyMapsAPILoaderConfig;
}());
exports.LazyMapsAPILoaderConfig = LazyMapsAPILoaderConfig;
var DEFAULT_CONFIGURATION = new LazyMapsAPILoaderConfig();
var LazyMapsAPILoader = (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        _super.call(this);
        this._config = config || DEFAULT_CONFIGURATION;
        this._window = w;
        this._document = d;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        script.src = this._getScriptSrc(callbackName);
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._window[callbackName] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        this._document.body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || DEFAULT_CONFIGURATION.protocol;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || DEFAULT_CONFIGURATION.hostAndPath;
        var queryParams = {
            v: this._config.apiVersion || DEFAULT_CONFIGURATION.apiVersion,
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()),
        __param(1, core_1.Inject(browser_globals_1.WINDOW_GLOBAL)),
        __param(2, core_1.Inject(browser_globals_1.DOCUMENT_GLOBAL)), 
        __metadata('design:paramtypes', [LazyMapsAPILoaderConfig, Window, Document])
    ], LazyMapsAPILoader);
    return LazyMapsAPILoader;
}(maps_api_loader_1.MapsAPILoader));
exports.LazyMapsAPILoader = LazyMapsAPILoader;
/**
 * Creates a provider for a {@link LazyMapsAPILoaderConfig})
 */
function provideLazyMapsAPILoaderConfig(confLiteral) {
    return {
        provide: LazyMapsAPILoaderConfig,
        useFactory: function () {
            var config = new LazyMapsAPILoaderConfig();
            // todo(sebastian): deprecate LazyMapsAPILoader class
            config.apiKey = confLiteral.apiKey || DEFAULT_CONFIGURATION.apiKey;
            config.apiVersion = confLiteral.apiVersion || DEFAULT_CONFIGURATION.apiVersion;
            config.channel = confLiteral.channel || DEFAULT_CONFIGURATION.channel;
            config.clientId = confLiteral.clientId || DEFAULT_CONFIGURATION.clientId;
            config.hostAndPath = confLiteral.hostAndPath || DEFAULT_CONFIGURATION.hostAndPath;
            config.language = confLiteral.language || DEFAULT_CONFIGURATION.language;
            config.libraries = confLiteral.libraries || DEFAULT_CONFIGURATION.libraries;
            config.protocol = config.protocol || DEFAULT_CONFIGURATION.protocol;
            config.region = config.region || DEFAULT_CONFIGURATION.region;
            return config;
        }
    };
}
exports.provideLazyMapsAPILoaderConfig = provideLazyMapsAPILoaderConfig;

//# sourceMappingURL=lazy-maps-api-loader.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var MapsAPILoader = (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapsAPILoader);
    return MapsAPILoader;
}());
exports.MapsAPILoader = MapsAPILoader;

//# sourceMappingURL=maps-api-loader.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/maps-api-loader/noop-maps-api-loader.js":
/***/ function(module, exports) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    ;
    return NoOpMapsAPILoader;
}());
exports.NoOpMapsAPILoader = NoOpMapsAPILoader;

//# sourceMappingURL=noop-maps-api-loader.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/utils/browser-globals.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
exports.WINDOW_GLOBAL = new core_1.OpaqueToken('angular2-google-maps window_global');
exports.DOCUMENT_GLOBAL = new core_1.OpaqueToken('angular2-google-maps document_global');
exports.BROWSER_GLOBALS_PROVIDERS = [{ provide: exports.WINDOW_GLOBAL, useValue: window }, { provide: exports.DOCUMENT_GLOBAL, useValue: document }];

//# sourceMappingURL=browser-globals.js.map


/***/ },

/***/ "./node_modules/fullcalendar/dist/fullcalendar.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * FullCalendar v3.0.1
 * Docs & License: http://fullcalendar.io/
 * (c) 2016 Adam Shaw
 */

(function(factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/moment/moment.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof exports === 'object') { // Node/CommonJS
		module.exports = factory(require('jquery'), require('moment'));
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {

;;

var FC = $.fullCalendar = {
	version: "3.0.1",
	internalApiVersion: 6
};
var fcViews = FC.views = {};


$.fn.fullCalendar = function(options) {
	var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
	var res = this; // what this function will return (this jQuery object by default)

	this.each(function(i, _element) { // loop each DOM element involved
		var element = $(_element);
		var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
		var singleRes; // the returned value of this single method call

		// a method call
		if (typeof options === 'string') {
			if (calendar && $.isFunction(calendar[options])) {
				singleRes = calendar[options].apply(calendar, args);
				if (!i) {
					res = singleRes; // record the first method call result
				}
				if (options === 'destroy') { // for the destroy method, must remove Calendar object data
					element.removeData('fullCalendar');
				}
			}
		}
		// a new calendar initialization
		else if (!calendar) { // don't initialize twice
			calendar = new Calendar(element, options);
			element.data('fullCalendar', calendar);
			calendar.render();
		}
	});
	
	return res;
};


var complexOptions = [ // names of options that are objects whose properties should be combined
	'header',
	'buttonText',
	'buttonIcons',
	'themeButtonIcons'
];


// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
	return mergeProps(optionObjs, complexOptions);
}

;;

// exports
FC.intersectRanges = intersectRanges;
FC.applyAll = applyAll;
FC.debounce = debounce;
FC.isInt = isInt;
FC.htmlEscape = htmlEscape;
FC.cssToStr = cssToStr;
FC.proxy = proxy;
FC.capitaliseFirstLetter = capitaliseFirstLetter;


/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/


// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEls, scrollbarWidths) {
	if (scrollbarWidths.left) {
		rowEls.css({
			'border-left-width': 1,
			'margin-left': scrollbarWidths.left - 1
		});
	}
	if (scrollbarWidths.right) {
		rowEls.css({
			'border-right-width': 1,
			'margin-right': scrollbarWidths.right - 1
		});
	}
}


// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEls) {
	rowEls.css({
		'margin-left': '',
		'margin-right': '',
		'border-left-width': '',
		'border-right-width': ''
	});
}


// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
	$('body').addClass('fc-not-allowed');
}


// Returns the mouse cursor to its original look
function enableCursor() {
	$('body').removeClass('fc-not-allowed');
}


// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and 
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {

	// *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
	// and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.

	var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
	var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
	var flexEls = []; // elements that are allowed to expand. array of DOM nodes
	var flexOffsets = []; // amount of vertical space it takes up
	var flexHeights = []; // actual css height
	var usedHeight = 0;

	undistributeHeight(els); // give all elements their natural height

	// find elements that are below the recommended height (expandable).
	// important to query for heights in a single first pass (to avoid reflow oscillation).
	els.each(function(i, el) {
		var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = $(el).outerHeight(true);

		if (naturalOffset < minOffset) {
			flexEls.push(el);
			flexOffsets.push(naturalOffset);
			flexHeights.push($(el).height());
		}
		else {
			// this element stretches past recommended height (non-expandable). mark the space as occupied.
			usedHeight += naturalOffset;
		}
	});

	// readjust the recommended height to only consider the height available to non-maxed-out rows.
	if (shouldRedistribute) {
		availableHeight -= usedHeight;
		minOffset1 = Math.floor(availableHeight / flexEls.length);
		minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
	}

	// assign heights to all expandable elements
	$(flexEls).each(function(i, el) {
		var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = flexOffsets[i];
		var naturalHeight = flexHeights[i];
		var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding

		if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
			$(el).height(newHeight);
		}
	});
}


// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
	els.height('');
}


// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
	var maxInnerWidth = 0;

	els.find('> *').each(function(i, innerEl) {
		var innerWidth = $(innerEl).outerWidth();
		if (innerWidth > maxInnerWidth) {
			maxInnerWidth = innerWidth;
		}
	});

	maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance

	els.width(maxInnerWidth);

	return maxInnerWidth;
}


// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
	var both = outerEl.add(innerEl);
	var diff;

	// effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
	both.css({
		position: 'relative', // cause a reflow, which will force fresh dimension recalculation
		left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
	});
	diff = outerEl.outerHeight() - innerEl.outerHeight(); // grab the dimensions
	both.css({ position: '', left: '' }); // undo hack

	return diff;
}


/* Element Geom Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.getOuterRect = getOuterRect;
FC.getClientRect = getClientRect;
FC.getContentRect = getContentRect;
FC.getScrollbarWidths = getScrollbarWidths;


// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
function getScrollParent(el) {
	var position = el.css('position'),
		scrollParent = el.parents().filter(function() {
			var parent = $(this);
			return (/(auto|scroll)/).test(
				parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x')
			);
		}).eq(0);

	return position === 'fixed' || !scrollParent.length ? $(el[0].ownerDocument || document) : scrollParent;
}


// Queries the outer bounding area of a jQuery element.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getOuterRect(el, origin) {
	var offset = el.offset();
	var left = offset.left - (origin ? origin.left : 0);
	var top = offset.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.outerWidth(),
		top: top,
		bottom: top + el.outerHeight()
	};
}


// Queries the area within the margin/border/scrollbars of a jQuery element. Does not go within the padding.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getClientRect(el, origin) {
	var offset = el.offset();
	var scrollbarWidths = getScrollbarWidths(el);
	var left = offset.left + getCssFloat(el, 'border-left-width') + scrollbarWidths.left - (origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + scrollbarWidths.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el[0].clientWidth, // clientWidth includes padding but NOT scrollbars
		top: top,
		bottom: top + el[0].clientHeight // clientHeight includes padding but NOT scrollbars
	};
}


// Queries the area within the margin/border/padding of a jQuery element. Assumed not to have scrollbars.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getContentRect(el, origin) {
	var offset = el.offset(); // just outside of border, margin not included
	var left = offset.left + getCssFloat(el, 'border-left-width') + getCssFloat(el, 'padding-left') -
		(origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + getCssFloat(el, 'padding-top') -
		(origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.width(),
		top: top,
		bottom: top + el.height()
	};
}


// Returns the computed left/right/top/bottom scrollbar widths for the given jQuery element.
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getScrollbarWidths(el) {
	var leftRightWidth = el.innerWidth() - el[0].clientWidth; // the paddings cancel out, leaving the scrollbars
	var widths = {
		left: 0,
		right: 0,
		top: 0,
		bottom: el.innerHeight() - el[0].clientHeight // the paddings cancel out, leaving the bottom scrollbar
	};

	if (getIsLeftRtlScrollbars() && el.css('direction') == 'rtl') { // is the scrollbar on the left side?
		widths.left = leftRightWidth;
	}
	else {
		widths.right = leftRightWidth;
	}

	return widths;
}


// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side

var _isLeftRtlScrollbars = null;

function getIsLeftRtlScrollbars() { // responsible for caching the computation
	if (_isLeftRtlScrollbars === null) {
		_isLeftRtlScrollbars = computeIsLeftRtlScrollbars();
	}
	return _isLeftRtlScrollbars;
}

function computeIsLeftRtlScrollbars() { // creates an offscreen test element, then removes it
	var el = $('<div><div/></div>')
		.css({
			position: 'absolute',
			top: -1000,
			left: 0,
			border: 0,
			padding: 0,
			overflow: 'scroll',
			direction: 'rtl'
		})
		.appendTo('body');
	var innerEl = el.children();
	var res = innerEl.offset().left > el.offset().left; // is the inner div shifted to accommodate a left scrollbar?
	el.remove();
	return res;
}


// Retrieves a jQuery element's computed CSS value as a floating-point number.
// If the queried value is non-numeric (ex: IE can return "medium" for border width), will just return zero.
function getCssFloat(el, prop) {
	return parseFloat(el.css(prop)) || 0;
}


/* Mouse / Touch Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.preventDefault = preventDefault;


// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
	return ev.which == 1 && !ev.ctrlKey;
}


function getEvX(ev) {
	if (ev.pageX !== undefined) {
		return ev.pageX;
	}
	var touches = ev.originalEvent.touches;
	if (touches) {
		return touches[0].pageX;
	}
}


function getEvY(ev) {
	if (ev.pageY !== undefined) {
		return ev.pageY;
	}
	var touches = ev.originalEvent.touches;
	if (touches) {
		return touches[0].pageY;
	}
}


function getEvIsTouch(ev) {
	return /^touch/.test(ev.type);
}


function preventSelection(el) {
	el.addClass('fc-unselectable')
		.on('selectstart', preventDefault);
}


// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
	ev.preventDefault();
}


// attach a handler to get called when ANY scroll action happens on the page.
// this was impossible to do with normal on/off because 'scroll' doesn't bubble.
// http://stackoverflow.com/a/32954565/96342
// returns `true` on success.
function bindAnyScroll(handler) {
	if (window.addEventListener) {
		window.addEventListener('scroll', handler, true); // useCapture=true
		return true;
	}
	return false;
}


// undoes bindAnyScroll. must pass in the original function.
// returns `true` on success.
function unbindAnyScroll(handler) {
	if (window.removeEventListener) {
		window.removeEventListener('scroll', handler, true); // useCapture=true
		return true;
	}
	return false;
}


/* General Geometry Utils
----------------------------------------------------------------------------------------------------------------------*/

FC.intersectRects = intersectRects;

// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
	var res = {
		left: Math.max(rect1.left, rect2.left),
		right: Math.min(rect1.right, rect2.right),
		top: Math.max(rect1.top, rect2.top),
		bottom: Math.min(rect1.bottom, rect2.bottom)
	};

	if (res.left < res.right && res.top < res.bottom) {
		return res;
	}
	return false;
}


// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
	return {
		left: Math.min(Math.max(point.left, rect.left), rect.right),
		top: Math.min(Math.max(point.top, rect.top), rect.bottom)
	};
}


// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
	return {
		left: (rect.left + rect.right) / 2,
		top: (rect.top + rect.bottom) / 2
	};
}


// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
	return {
		left: point1.left - point2.left,
		top: point1.top - point2.top
	};
}


/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/

FC.parseFieldSpecs = parseFieldSpecs;
FC.compareByFieldSpecs = compareByFieldSpecs;
FC.compareByFieldSpec = compareByFieldSpec;
FC.flexibleCompare = flexibleCompare;


function parseFieldSpecs(input) {
	var specs = [];
	var tokens = [];
	var i, token;

	if (typeof input === 'string') {
		tokens = input.split(/\s*,\s*/);
	}
	else if (typeof input === 'function') {
		tokens = [ input ];
	}
	else if ($.isArray(input)) {
		tokens = input;
	}

	for (i = 0; i < tokens.length; i++) {
		token = tokens[i];

		if (typeof token === 'string') {
			specs.push(
				token.charAt(0) == '-' ?
					{ field: token.substring(1), order: -1 } :
					{ field: token, order: 1 }
			);
		}
		else if (typeof token === 'function') {
			specs.push({ func: token });
		}
	}

	return specs;
}


function compareByFieldSpecs(obj1, obj2, fieldSpecs) {
	var i;
	var cmp;

	for (i = 0; i < fieldSpecs.length; i++) {
		cmp = compareByFieldSpec(obj1, obj2, fieldSpecs[i]);
		if (cmp) {
			return cmp;
		}
	}

	return 0;
}


function compareByFieldSpec(obj1, obj2, fieldSpec) {
	if (fieldSpec.func) {
		return fieldSpec.func(obj1, obj2);
	}
	return flexibleCompare(obj1[fieldSpec.field], obj2[fieldSpec.field]) *
		(fieldSpec.order || 1);
}


function flexibleCompare(a, b) {
	if (!a && !b) {
		return 0;
	}
	if (b == null) {
		return -1;
	}
	if (a == null) {
		return 1;
	}
	if ($.type(a) === 'string' || $.type(b) === 'string') {
		return String(a).localeCompare(String(b));
	}
	return a - b;
}


/* FullCalendar-specific Misc Utilities
----------------------------------------------------------------------------------------------------------------------*/


// Computes the intersection of the two ranges. Will return fresh date clones in a range.
// Returns undefined if no intersection.
// Expects all dates to be normalized to the same timezone beforehand.
// TODO: move to date section?
function intersectRanges(subjectRange, constraintRange) {
	var subjectStart = subjectRange.start;
	var subjectEnd = subjectRange.end;
	var constraintStart = constraintRange.start;
	var constraintEnd = constraintRange.end;
	var segStart, segEnd;
	var isStart, isEnd;

	if (subjectEnd > constraintStart && subjectStart < constraintEnd) { // in bounds at all?

		if (subjectStart >= constraintStart) {
			segStart = subjectStart.clone();
			isStart = true;
		}
		else {
			segStart = constraintStart.clone();
			isStart =  false;
		}

		if (subjectEnd <= constraintEnd) {
			segEnd = subjectEnd.clone();
			isEnd = true;
		}
		else {
			segEnd = constraintEnd.clone();
			isEnd = false;
		}

		return {
			start: segStart,
			end: segEnd,
			isStart: isStart,
			isEnd: isEnd
		};
	}
}


/* Date Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.computeIntervalUnit = computeIntervalUnit;
FC.divideRangeByDuration = divideRangeByDuration;
FC.divideDurationByDuration = divideDurationByDuration;
FC.multiplyDuration = multiplyDuration;
FC.durationHasTime = durationHasTime;

var dayIDs = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
var intervalUnits = [ 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond' ];


// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
// Moments will have their timezones normalized.
function diffDayTime(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days'),
		ms: a.time() - b.time() // time-of-day from day start. disregards timezone
	});
}


// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
function diffDay(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days')
	});
}


// Diffs two moments, producing a duration, made of a whole-unit-increment of the given unit. Uses rounding.
function diffByUnit(a, b, unit) {
	return moment.duration(
		Math.round(a.diff(b, unit, true)), // returnFloat=true
		unit
	);
}


// Computes the unit name of the largest whole-unit period of time.
// For example, 48 hours will be "days" whereas 49 hours will be "hours".
// Accepts start/end, a range object, or an original duration object.
function computeIntervalUnit(start, end) {
	var i, unit;
	var val;

	for (i = 0; i < intervalUnits.length; i++) {
		unit = intervalUnits[i];
		val = computeRangeAs(unit, start, end);

		if (val >= 1 && isInt(val)) {
			break;
		}
	}

	return unit; // will be "milliseconds" if nothing else matches
}


// Computes the number of units (like "hours") in the given range.
// Range can be a {start,end} object, separate start/end args, or a Duration.
// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
// of month-diffing logic (which tends to vary from version to version).
function computeRangeAs(unit, start, end) {

	if (end != null) { // given start, end
		return end.diff(start, unit, true);
	}
	else if (moment.isDuration(start)) { // given duration
		return start.as(unit);
	}
	else { // given { start, end } range object
		return start.end.diff(start.start, unit, true);
	}
}


// Intelligently divides a range (specified by a start/end params) by a duration
function divideRangeByDuration(start, end, dur) {
	var months;

	if (durationHasTime(dur)) {
		return (end - start) / dur;
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return end.diff(start, 'months', true) / months;
	}
	return end.diff(start, 'days', true) / dur.asDays();
}


// Intelligently divides one duration by another
function divideDurationByDuration(dur1, dur2) {
	var months1, months2;

	if (durationHasTime(dur1) || durationHasTime(dur2)) {
		return dur1 / dur2;
	}
	months1 = dur1.asMonths();
	months2 = dur2.asMonths();
	if (
		Math.abs(months1) >= 1 && isInt(months1) &&
		Math.abs(months2) >= 1 && isInt(months2)
	) {
		return months1 / months2;
	}
	return dur1.asDays() / dur2.asDays();
}


// Intelligently multiplies a duration by a number
function multiplyDuration(dur, n) {
	var months;

	if (durationHasTime(dur)) {
		return moment.duration(dur * n);
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return moment.duration({ months: months * n });
	}
	return moment.duration({ days: dur.asDays() * n });
}


// Returns a boolean about whether the given duration has any time parts (hours/minutes/seconds/ms)
function durationHasTime(dur) {
	return Boolean(dur.hours() || dur.minutes() || dur.seconds() || dur.milliseconds());
}


function isNativeDate(input) {
	return  Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
}


// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
function isTimeString(str) {
	return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
}


/* Logging and Debug
----------------------------------------------------------------------------------------------------------------------*/

FC.log = function() {
	var console = window.console;

	if (console && console.log) {
		return console.log.apply(console, arguments);
	}
};

FC.warn = function() {
	var console = window.console;

	if (console && console.warn) {
		return console.warn.apply(console, arguments);
	}
	else {
		return FC.log.apply(FC, arguments);
	}
};


/* General Utilities
----------------------------------------------------------------------------------------------------------------------*/

var hasOwnPropMethod = {}.hasOwnProperty;


// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
	var dest = {};
	var i, name;
	var complexObjs;
	var j, val;
	var props;

	if (complexProps) {
		for (i = 0; i < complexProps.length; i++) {
			name = complexProps[i];
			complexObjs = [];

			// collect the trailing object values, stopping when a non-object is discovered
			for (j = propObjs.length - 1; j >= 0; j--) {
				val = propObjs[j][name];

				if (typeof val === 'object') {
					complexObjs.unshift(val);
				}
				else if (val !== undefined) {
					dest[name] = val; // if there were no objects, this value will be used
					break;
				}
			}

			// if the trailing values were objects, use the merged value
			if (complexObjs.length) {
				dest[name] = mergeProps(complexObjs);
			}
		}
	}

	// copy values into the destination, going from last to first
	for (i = propObjs.length - 1; i >= 0; i--) {
		props = propObjs[i];

		for (name in props) {
			if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
				dest[name] = props[name];
			}
		}
	}

	return dest;
}


// Create an object that has the given prototype. Just like Object.create
function createObject(proto) {
	var f = function() {};
	f.prototype = proto;
	return new f();
}


function copyOwnProps(src, dest) {
	for (var name in src) {
		if (hasOwnProp(src, name)) {
			dest[name] = src[name];
		}
	}
}


function hasOwnProp(obj, name) {
	return hasOwnPropMethod.call(obj, name);
}


// Is the given value a non-object non-function value?
function isAtomic(val) {
	return /undefined|null|boolean|number|string/.test($.type(val));
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}


function htmlEscape(s) {
	return (s + '').replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function stripHtmlEntities(text) {
	return text.replace(/&.*?;/g, '');
}


// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
	var statements = [];

	$.each(cssProps, function(name, val) {
		if (val != null) {
			statements.push(name + ':' + val);
		}
	});

	return statements.join(';');
}


// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
	var parts = [];

	$.each(attrs, function(name, val) {
		if (val != null) {
			parts.push(name + '="' + htmlEscape(val) + '"');
		}
	});

	return parts.join(' ');
}


function capitaliseFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


function compareNumbers(a, b) { // for .sort()
	return a - b;
}


function isInt(n) {
	return n % 1 === 0;
}


// Returns a method bound to the given object context.
// Just like one of the jQuery.proxy signatures, but without the undesired behavior of treating the same method with
// different contexts as identical when binding/unbinding events.
function proxy(obj, methodName) {
	var method = obj[methodName];

	return function() {
		return method.apply(obj, arguments);
	};
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;

	var later = function() {
		var last = +new Date() - timestamp;
		if (last < wait) {
			timeout = setTimeout(later, wait - last);
		}
		else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				context = args = null;
			}
		}
	};

	return function() {
		context = this;
		args = arguments;
		timestamp = +new Date();
		var callNow = immediate && !timeout;
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}
		return result;
	};
}


// HACK around jQuery's now A+ promises: execute callback synchronously if already resolved.
// thenFunc shouldn't accept args.
// similar to whenResources in Scheduler plugin.
function syncThen(promise, thenFunc) {
	// not a promise, or an already-resolved promise?
	if (!promise || !promise.then || promise.state() === 'resolved') {
		return $.when(thenFunc()); // resolve immediately
	}
	else if (thenFunc) {
		return promise.then(thenFunc);
	}
}

;;

/*
GENERAL NOTE on moments throughout the *entire rest* of the codebase:
All moments are assumed to be ambiguously-zoned unless otherwise noted,
with the NOTABLE EXCEOPTION of start/end dates that live on *Event Objects*.
Ambiguously-TIMED moments are assumed to be ambiguously-zoned by nature.
*/

var ambigDateOfMonthRegex = /^\s*\d{4}-\d\d$/;
var ambigTimeOrZoneRegex =
	/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
var newMomentProto = moment.fn; // where we will attach our new methods
var oldMomentProto = $.extend({}, newMomentProto); // copy of original moment methods

// tell momentjs to transfer these properties upon clone
var momentProperties = moment.momentProperties;
momentProperties.push('_fullCalendar');
momentProperties.push('_ambigTime');
momentProperties.push('_ambigZone');


// Creating
// -------------------------------------------------------------------------------------------------

// Creates a new moment, similar to the vanilla moment(...) constructor, but with
// extra features (ambiguous time, enhanced formatting). When given an existing moment,
// it will function as a clone (and retain the zone of the moment). Anything else will
// result in a moment in the local zone.
FC.moment = function() {
	return makeMoment(arguments);
};

// Sames as FC.moment, but forces the resulting moment to be in the UTC timezone.
FC.moment.utc = function() {
	var mom = makeMoment(arguments, true);

	// Force it into UTC because makeMoment doesn't guarantee it
	// (if given a pre-existing moment for example)
	if (mom.hasTime()) { // don't give ambiguously-timed moments a UTC zone
		mom.utc();
	}

	return mom;
};

// Same as FC.moment, but when given an ISO8601 string, the timezone offset is preserved.
// ISO8601 strings with no timezone offset will become ambiguously zoned.
FC.moment.parseZone = function() {
	return makeMoment(arguments, true, true);
};

// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
// native Date, or called with no arguments (the current time), the resulting moment will be local.
// Anything else needs to be "parsed" (a string or an array), and will be affected by:
//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
//    parseZone - if there is zone information, should we force the zone of the moment?
function makeMoment(args, parseAsUTC, parseZone) {
	var input = args[0];
	var isSingleString = args.length == 1 && typeof input === 'string';
	var isAmbigTime;
	var isAmbigZone;
	var ambigMatch;
	var mom;

	if (moment.isMoment(input) || isNativeDate(input) || input === undefined) {
		mom = moment.apply(null, args);
	}
	else { // "parsing" is required
		isAmbigTime = false;
		isAmbigZone = false;

		if (isSingleString) {
			if (ambigDateOfMonthRegex.test(input)) {
				// accept strings like '2014-05', but convert to the first of the month
				input += '-01';
				args = [ input ]; // for when we pass it on to moment's constructor
				isAmbigTime = true;
				isAmbigZone = true;
			}
			else if ((ambigMatch = ambigTimeOrZoneRegex.exec(input))) {
				isAmbigTime = !ambigMatch[5]; // no time part?
				isAmbigZone = true;
			}
		}
		else if ($.isArray(input)) {
			// arrays have no timezone information, so assume ambiguous zone
			isAmbigZone = true;
		}
		// otherwise, probably a string with a format

		if (parseAsUTC || isAmbigTime) {
			mom = moment.utc.apply(moment, args);
		}
		else {
			mom = moment.apply(null, args);
		}

		if (isAmbigTime) {
			mom._ambigTime = true;
			mom._ambigZone = true; // ambiguous time always means ambiguous zone
		}
		else if (parseZone) { // let's record the inputted zone somehow
			if (isAmbigZone) {
				mom._ambigZone = true;
			}
			else if (isSingleString) {
				mom.utcOffset(input); // if not a valid zone, will assign UTC
			}
		}
	}

	mom._fullCalendar = true; // flag for extended functionality

	return mom;
}


// Week Number
// -------------------------------------------------------------------------------------------------


// Returns the week number, considering the locale's custom week number calcuation
// `weeks` is an alias for `week`
newMomentProto.week = newMomentProto.weeks = function(input) {
	var weekCalc = this._locale._fullCalendar_weekCalc;

	if (input == null && typeof weekCalc === 'function') { // custom function only works for getter
		return weekCalc(this);
	}
	else if (weekCalc === 'ISO') {
		return oldMomentProto.isoWeek.apply(this, arguments); // ISO getter/setter
	}

	return oldMomentProto.week.apply(this, arguments); // local getter/setter
};


// Time-of-day
// -------------------------------------------------------------------------------------------------

// GETTER
// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
// If the moment has an ambiguous time, a duration of 00:00 will be returned.
//
// SETTER
// You can supply a Duration, a Moment, or a Duration-like argument.
// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
newMomentProto.time = function(time) {

	// Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
	// `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
	if (!this._fullCalendar) {
		return oldMomentProto.time.apply(this, arguments);
	}

	if (time == null) { // getter
		return moment.duration({
			hours: this.hours(),
			minutes: this.minutes(),
			seconds: this.seconds(),
			milliseconds: this.milliseconds()
		});
	}
	else { // setter

		this._ambigTime = false; // mark that the moment now has a time

		if (!moment.isDuration(time) && !moment.isMoment(time)) {
			time = moment.duration(time);
		}

		// The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
		// Only for Duration times, not Moment times.
		var dayHours = 0;
		if (moment.isDuration(time)) {
			dayHours = Math.floor(time.asDays()) * 24;
		}

		// We need to set the individual fields.
		// Can't use startOf('day') then add duration. In case of DST at start of day.
		return this.hours(dayHours + time.hours())
			.minutes(time.minutes())
			.seconds(time.seconds())
			.milliseconds(time.milliseconds());
	}
};

// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
// but preserving its YMD. A moment with a stripped time will display no time
// nor timezone offset when .format() is called.
newMomentProto.stripTime = function() {

	if (!this._ambigTime) {

		this.utc(true); // keepLocalTime=true (for keeping *date* value)

		// set time to zero
		this.set({
			hours: 0,
			minutes: 0,
			seconds: 0,
			ms: 0
		});

		// Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears all ambig flags.
		this._ambigTime = true;
		this._ambigZone = true; // if ambiguous time, also ambiguous timezone offset
	}

	return this; // for chaining
};

// Returns if the moment has a non-ambiguous time (boolean)
newMomentProto.hasTime = function() {
	return !this._ambigTime;
};


// Timezone
// -------------------------------------------------------------------------------------------------

// Converts the moment to UTC, stripping out its timezone offset, but preserving its
// YMD and time-of-day. A moment with a stripped timezone offset will display no
// timezone offset when .format() is called.
newMomentProto.stripZone = function() {
	var wasAmbigTime;

	if (!this._ambigZone) {

		wasAmbigTime = this._ambigTime;

		this.utc(true); // keepLocalTime=true (for keeping date and time values)

		// the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
		this._ambigTime = wasAmbigTime || false;

		// Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears the ambig flags.
		this._ambigZone = true;
	}

	return this; // for chaining
};

// Returns of the moment has a non-ambiguous timezone offset (boolean)
newMomentProto.hasZone = function() {
	return !this._ambigZone;
};


// implicitly marks a zone
newMomentProto.local = function(keepLocalTime) {

	// for when converting from ambiguously-zoned to local,
	// keep the time values when converting from UTC -> local
	oldMomentProto.local.call(this, this._ambigZone || keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this; // for chaining
};


// implicitly marks a zone
newMomentProto.utc = function(keepLocalTime) {

	oldMomentProto.utc.call(this, keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this;
};


// implicitly marks a zone (will probably get called upon .utc() and .local())
newMomentProto.utcOffset = function(tzo) {

	if (tzo != null) { // setter
		// these assignments needs to happen before the original zone method is called.
		// I forget why, something to do with a browser crash.
		this._ambigTime = false;
		this._ambigZone = false;
	}

	return oldMomentProto.utcOffset.apply(this, arguments);
};


// Formatting
// -------------------------------------------------------------------------------------------------

newMomentProto.format = function() {
	if (this._fullCalendar && arguments[0]) { // an enhanced moment? and a format string provided?
		return formatDate(this, arguments[0]); // our extended formatting
	}
	if (this._ambigTime) {
		return oldMomentFormat(this, 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(this, 'YYYY-MM-DD[T]HH:mm:ss');
	}
	return oldMomentProto.format.apply(this, arguments);
};

newMomentProto.toISOString = function() {
	if (this._ambigTime) {
		return oldMomentFormat(this, 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(this, 'YYYY-MM-DD[T]HH:mm:ss');
	}
	return oldMomentProto.toISOString.apply(this, arguments);
};

;;

// Single Date Formatting
// -------------------------------------------------------------------------------------------------


// call this if you want Moment's original format method to be used
function oldMomentFormat(mom, formatStr) {
	return oldMomentProto.format.call(mom, formatStr); // oldMomentProto defined in moment-ext.js
}


// Formats `date` with a Moment formatting string, but allow our non-zero areas and
// additional token.
function formatDate(date, formatStr) {
	return formatDateWithChunks(date, getFormatStringChunks(formatStr));
}


function formatDateWithChunks(date, chunks) {
	var s = '';
	var i;

	for (i=0; i<chunks.length; i++) {
		s += formatDateWithChunk(date, chunks[i]);
	}

	return s;
}


// addition formatting tokens we want recognized
var tokenOverrides = {
	t: function(date) { // "a" or "p"
		return oldMomentFormat(date, 'a').charAt(0);
	},
	T: function(date) { // "A" or "P"
		return oldMomentFormat(date, 'A').charAt(0);
	}
};


function formatDateWithChunk(date, chunk) {
	var token;
	var maybeStr;

	if (typeof chunk === 'string') { // a literal string
		return chunk;
	}
	else if ((token = chunk.token)) { // a token, like "YYYY"
		if (tokenOverrides[token]) {
			return tokenOverrides[token](date); // use our custom token
		}
		return oldMomentFormat(date, token);
	}
	else if (chunk.maybe) { // a grouping of other chunks that must be non-zero
		maybeStr = formatDateWithChunks(date, chunk.maybe);
		if (maybeStr.match(/[1-9]/)) {
			return maybeStr;
		}
	}

	return '';
}


// Date Range Formatting
// -------------------------------------------------------------------------------------------------
// TODO: make it work with timezone offset

// Using a formatting string meant for a single date, generate a range string, like
// "Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
// If the dates are the same as far as the format string is concerned, just return a single
// rendering of one date, without any separator.
function formatRange(date1, date2, formatStr, separator, isRTL) {
	var localeData;

	date1 = FC.moment.parseZone(date1);
	date2 = FC.moment.parseZone(date2);

	localeData = date1.localeData();

	// Expand localized format strings, like "LL" -> "MMMM D YYYY"
	formatStr = localeData.longDateFormat(formatStr) || formatStr;
	// BTW, this is not important for `formatDate` because it is impossible to put custom tokens
	// or non-zero areas in Moment's localized format strings.

	separator = separator || ' - ';

	return formatRangeWithChunks(
		date1,
		date2,
		getFormatStringChunks(formatStr),
		separator,
		isRTL
	);
}
FC.formatRange = formatRange; // expose


function formatRangeWithChunks(date1, date2, chunks, separator, isRTL) {
	var unzonedDate1 = date1.clone().stripZone(); // for formatSimilarChunk
	var unzonedDate2 = date2.clone().stripZone(); // "
	var chunkStr; // the rendering of the chunk
	var leftI;
	var leftStr = '';
	var rightI;
	var rightStr = '';
	var middleI;
	var middleStr1 = '';
	var middleStr2 = '';
	var middleStr = '';

	// Start at the leftmost side of the formatting string and continue until you hit a token
	// that is not the same between dates.
	for (leftI=0; leftI<chunks.length; leftI++) {
		chunkStr = formatSimilarChunk(date1, date2, unzonedDate1, unzonedDate2, chunks[leftI]);
		if (chunkStr === false) {
			break;
		}
		leftStr += chunkStr;
	}

	// Similarly, start at the rightmost side of the formatting string and move left
	for (rightI=chunks.length-1; rightI>leftI; rightI--) {
		chunkStr = formatSimilarChunk(date1, date2, unzonedDate1, unzonedDate2,  chunks[rightI]);
		if (chunkStr === false) {
			break;
		}
		rightStr = chunkStr + rightStr;
	}

	// The area in the middle is different for both of the dates.
	// Collect them distinctly so we can jam them together later.
	for (middleI=leftI; middleI<=rightI; middleI++) {
		middleStr1 += formatDateWithChunk(date1, chunks[middleI]);
		middleStr2 += formatDateWithChunk(date2, chunks[middleI]);
	}

	if (middleStr1 || middleStr2) {
		if (isRTL) {
			middleStr = middleStr2 + separator + middleStr1;
		}
		else {
			middleStr = middleStr1 + separator + middleStr2;
		}
	}

	return leftStr + middleStr + rightStr;
}


var similarUnitMap = {
	Y: 'year',
	M: 'month',
	D: 'day', // day of month
	d: 'day', // day of week
	// prevents a separator between anything time-related...
	A: 'second', // AM/PM
	a: 'second', // am/pm
	T: 'second', // A/P
	t: 'second', // a/p
	H: 'second', // hour (24)
	h: 'second', // hour (12)
	m: 'second', // minute
	s: 'second' // second
};
// TODO: week maybe?


// Given a formatting chunk, and given that both dates are similar in the regard the
// formatting chunk is concerned, format date1 against `chunk`. Otherwise, return `false`.
function formatSimilarChunk(date1, date2, unzonedDate1, unzonedDate2, chunk) {
	var token;
	var unit;

	if (typeof chunk === 'string') { // a literal string
		return chunk;
	}
	else if ((token = chunk.token)) {
		unit = similarUnitMap[token.charAt(0)];

		// are the dates the same for this unit of measurement?
		// use the unzoned dates for this calculation because unreliable when near DST (bug #2396)
		if (unit && unzonedDate1.isSame(unzonedDate2, unit)) {
			return oldMomentFormat(date1, token); // would be the same if we used `date2`
			// BTW, don't support custom tokens
		}
	}

	return false; // the chunk is NOT the same for the two dates
	// BTW, don't support splitting on non-zero areas
}


// Chunking Utils
// -------------------------------------------------------------------------------------------------


var formatStringChunkCache = {};


function getFormatStringChunks(formatStr) {
	if (formatStr in formatStringChunkCache) {
		return formatStringChunkCache[formatStr];
	}
	return (formatStringChunkCache[formatStr] = chunkFormatString(formatStr));
}


// Break the formatting string into an array of chunks
function chunkFormatString(formatStr) {
	var chunks = [];
	var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; // TODO: more descrimination
	var match;

	while ((match = chunker.exec(formatStr))) {
		if (match[1]) { // a literal string inside [ ... ]
			chunks.push(match[1]);
		}
		else if (match[2]) { // non-zero formatting inside ( ... )
			chunks.push({ maybe: chunkFormatString(match[2]) });
		}
		else if (match[3]) { // a formatting token
			chunks.push({ token: match[3] });
		}
		else if (match[5]) { // an unenclosed literal string
			chunks.push(match[5]);
		}
	}

	return chunks;
}


// Misc Utils
// -------------------------------------------------------------------------------------------------


// granularity only goes up until day
// TODO: unify with similarUnitMap
var tokenGranularities = {
	Y: { value: 1, unit: 'year' },
	M: { value: 2, unit: 'month' },
	W: { value: 3, unit: 'week' },
	w: { value: 3, unit: 'week' },
	D: { value: 4, unit: 'day' }, // day of month
	d: { value: 4, unit: 'day' } // day of week
};

// returns a unit string, either 'year', 'month', 'day', or null
// for the most granular formatting token in the string.
FC.queryMostGranularFormatUnit = function(formatStr) {
	var chunks = getFormatStringChunks(formatStr);
	var i, chunk;
	var candidate;
	var best;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];
		if (chunk.token) {
			candidate = tokenGranularities[chunk.token.charAt(0)];
			if (candidate) {
				if (!best || candidate.value > best.value) {
					best = candidate;
				}
			}
		}
	}

	if (best) {
		return best.unit;
	}

	return null;
};

;;

FC.Class = Class; // export

// Class that all other classes will inherit from
function Class() { }


// Called on a class to create a subclass.
// Last argument contains instance methods. Any argument before the last are considered mixins.
Class.extend = function() {
	var len = arguments.length;
	var i;
	var members;

	for (i = 0; i < len; i++) {
		members = arguments[i];
		if (i < len - 1) { // not the last argument?
			mixIntoClass(this, members);
		}
	}

	return extendClass(this, members || {}); // members will be undefined if no arguments
};


// Adds new member variables/methods to the class's prototype.
// Can be called with another class, or a plain object hash containing new members.
Class.mixin = function(members) {
	mixIntoClass(this, members);
};


function extendClass(superClass, members) {
	var subClass;

	// ensure a constructor for the subclass, forwarding all arguments to the super-constructor if it doesn't exist
	if (hasOwnProp(members, 'constructor')) {
		subClass = members.constructor;
	}
	if (typeof subClass !== 'function') {
		subClass = members.constructor = function() {
			superClass.apply(this, arguments);
		};
	}

	// build the base prototype for the subclass, which is an new object chained to the superclass's prototype
	subClass.prototype = createObject(superClass.prototype);

	// copy each member variable/method onto the the subclass's prototype
	copyOwnProps(members, subClass.prototype);

	// copy over all class variables/methods to the subclass, such as `extend` and `mixin`
	copyOwnProps(superClass, subClass);

	return subClass;
}


function mixIntoClass(theClass, members) {
	copyOwnProps(members, theClass.prototype);
}
;;

var EmitterMixin = FC.EmitterMixin = {

	// jQuery-ification via $(this) allows a non-DOM object to have
	// the same event handling capabilities (including namespaces).


	on: function(types, handler) {

		// handlers are always called with an "event" object as their first param.
		// sneak the `this` context and arguments into the extra parameter object
		// and forward them on to the original handler.
		var intercept = function(ev, extra) {
			return handler.apply(
				extra.context || this,
				extra.args || []
			);
		};

		// mimick jQuery's internal "proxy" system (risky, I know)
		// causing all functions with the same .guid to appear to be the same.
		// https://github.com/jquery/jquery/blob/2.2.4/src/core.js#L448
		// this is needed for calling .off with the original non-intercept handler.
		if (!handler.guid) {
			handler.guid = $.guid++;
		}
		intercept.guid = handler.guid;

		$(this).on(types, intercept);

		return this; // for chaining
	},


	off: function(types, handler) {
		$(this).off(types, handler);

		return this; // for chaining
	},


	trigger: function(types) {
		var args = Array.prototype.slice.call(arguments, 1); // arguments after the first

		// pass in "extra" info to the intercept
		$(this).triggerHandler(types, { args: args });

		return this; // for chaining
	},


	triggerWith: function(types, context, args) {

		// `triggerHandler` is less reliant on the DOM compared to `trigger`.
		// pass in "extra" info to the intercept.
		$(this).triggerHandler(types, { context: context, args: args });

		return this; // for chaining
	}

};

;;

/*
Utility methods for easily listening to events on another object,
and more importantly, easily unlistening from them.
*/
var ListenerMixin = FC.ListenerMixin = (function() {
	var guid = 0;
	var ListenerMixin = {

		listenerId: null,

		/*
		Given an `other` object that has on/off methods, bind the given `callback` to an event by the given name.
		The `callback` will be called with the `this` context of the object that .listenTo is being called on.
		Can be called:
			.listenTo(other, eventName, callback)
		OR
			.listenTo(other, {
				eventName1: callback1,
				eventName2: callback2
			})
		*/
		listenTo: function(other, arg, callback) {
			if (typeof arg === 'object') { // given dictionary of callbacks
				for (var eventName in arg) {
					if (arg.hasOwnProperty(eventName)) {
						this.listenTo(other, eventName, arg[eventName]);
					}
				}
			}
			else if (typeof arg === 'string') {
				other.on(
					arg + '.' + this.getListenerNamespace(), // use event namespacing to identify this object
					$.proxy(callback, this) // always use `this` context
						// the usually-undesired jQuery guid behavior doesn't matter,
						// because we always unbind via namespace
				);
			}
		},

		/*
		Causes the current object to stop listening to events on the `other` object.
		`eventName` is optional. If omitted, will stop listening to ALL events on `other`.
		*/
		stopListeningTo: function(other, eventName) {
			other.off((eventName || '') + '.' + this.getListenerNamespace());
		},

		/*
		Returns a string, unique to this object, to be used for event namespacing
		*/
		getListenerNamespace: function() {
			if (this.listenerId == null) {
				this.listenerId = guid++;
			}
			return '_listener' + this.listenerId;
		}

	};
	return ListenerMixin;
})();
;;

// simple class for toggle a `isIgnoringMouse` flag on delay
// initMouseIgnoring must first be called, with a millisecond delay setting.
var MouseIgnorerMixin = {

	isIgnoringMouse: false, // bool
	delayUnignoreMouse: null, // method


	initMouseIgnoring: function(delay) {
		this.delayUnignoreMouse = debounce(proxy(this, 'unignoreMouse'), delay || 1000);
	},


	// temporarily ignore mouse actions on segments
	tempIgnoreMouse: function() {
		this.isIgnoringMouse = true;
		this.delayUnignoreMouse();
	},


	// delayUnignoreMouse eventually calls this
	unignoreMouse: function() {
		this.isIgnoringMouse = false;
	}

};

;;

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
	- className (string)
	- content (HTML string or jQuery element set)
	- parentEl
	- top
	- left
	- right (the x coord of where the right edge should be. not a "CSS" right)
	- autoHide (boolean)
	- show (callback)
	- hide (callback)
*/

var Popover = Class.extend(ListenerMixin, {

	isHidden: true,
	options: null,
	el: null, // the container element for the popover. generated by this object
	margin: 10, // the space required between the popover and the edges of the scroll container


	constructor: function(options) {
		this.options = options || {};
	},


	// Shows the popover on the specified position. Renders it if not already
	show: function() {
		if (this.isHidden) {
			if (!this.el) {
				this.render();
			}
			this.el.show();
			this.position();
			this.isHidden = false;
			this.trigger('show');
		}
	},


	// Hides the popover, through CSS, but does not remove it from the DOM
	hide: function() {
		if (!this.isHidden) {
			this.el.hide();
			this.isHidden = true;
			this.trigger('hide');
		}
	},


	// Creates `this.el` and renders content inside of it
	render: function() {
		var _this = this;
		var options = this.options;

		this.el = $('<div class="fc-popover"/>')
			.addClass(options.className || '')
			.css({
				// position initially to the top left to avoid creating scrollbars
				top: 0,
				left: 0
			})
			.append(options.content)
			.appendTo(options.parentEl);

		// when a click happens on anything inside with a 'fc-close' className, hide the popover
		this.el.on('click', '.fc-close', function() {
			_this.hide();
		});

		if (options.autoHide) {
			this.listenTo($(document), 'mousedown', this.documentMousedown);
		}
	},


	// Triggered when the user clicks *anywhere* in the document, for the autoHide feature
	documentMousedown: function(ev) {
		// only hide the popover if the click happened outside the popover
		if (this.el && !$(ev.target).closest(this.el).length) {
			this.hide();
		}
	},


	// Hides and unregisters any handlers
	removeElement: function() {
		this.hide();

		if (this.el) {
			this.el.remove();
			this.el = null;
		}

		this.stopListeningTo($(document), 'mousedown');
	},


	// Positions the popover optimally, using the top/left/right options
	position: function() {
		var options = this.options;
		var origin = this.el.offsetParent().offset();
		var width = this.el.outerWidth();
		var height = this.el.outerHeight();
		var windowEl = $(window);
		var viewportEl = getScrollParent(this.el);
		var viewportTop;
		var viewportLeft;
		var viewportOffset;
		var top; // the "position" (not "offset") values for the popover
		var left; //

		// compute top and left
		top = options.top || 0;
		if (options.left !== undefined) {
			left = options.left;
		}
		else if (options.right !== undefined) {
			left = options.right - width; // derive the left value from the right value
		}
		else {
			left = 0;
		}

		if (viewportEl.is(window) || viewportEl.is(document)) { // normalize getScrollParent's result
			viewportEl = windowEl;
			viewportTop = 0; // the window is always at the top left
			viewportLeft = 0; // (and .offset() won't work if called here)
		}
		else {
			viewportOffset = viewportEl.offset();
			viewportTop = viewportOffset.top;
			viewportLeft = viewportOffset.left;
		}

		// if the window is scrolled, it causes the visible area to be further down
		viewportTop += windowEl.scrollTop();
		viewportLeft += windowEl.scrollLeft();

		// constrain to the view port. if constrained by two edges, give precedence to top/left
		if (options.viewportConstrain !== false) {
			top = Math.min(top, viewportTop + viewportEl.outerHeight() - height - this.margin);
			top = Math.max(top, viewportTop + this.margin);
			left = Math.min(left, viewportLeft + viewportEl.outerWidth() - width - this.margin);
			left = Math.max(left, viewportLeft + this.margin);
		}

		this.el.css({
			top: top - origin.top,
			left: left - origin.left
		});
	},


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	// TODO: better code reuse for this. Repeat code
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}

});

;;

/*
A cache for the left/right/top/bottom/width/height values for one or more elements.
Works with both offset (from topleft document) and position (from offsetParent).

options:
- els
- isHorizontal
- isVertical
*/
var CoordCache = FC.CoordCache = Class.extend({

	els: null, // jQuery set (assumed to be siblings)
	forcedOffsetParentEl: null, // options can override the natural offsetParent
	origin: null, // {left,top} position of offsetParent of els
	boundingRect: null, // constrain cordinates to this rectangle. {left,right,top,bottom} or null
	isHorizontal: false, // whether to query for left/right/width
	isVertical: false, // whether to query for top/bottom/height

	// arrays of coordinates (offsets from topleft of document)
	lefts: null,
	rights: null,
	tops: null,
	bottoms: null,


	constructor: function(options) {
		this.els = $(options.els);
		this.isHorizontal = options.isHorizontal;
		this.isVertical = options.isVertical;
		this.forcedOffsetParentEl = options.offsetParent ? $(options.offsetParent) : null;
	},


	// Queries the els for coordinates and stores them.
	// Call this method before using and of the get* methods below.
	build: function() {
		var offsetParentEl = this.forcedOffsetParentEl || this.els.eq(0).offsetParent();

		this.origin = offsetParentEl.offset();
		this.boundingRect = this.queryBoundingRect();

		if (this.isHorizontal) {
			this.buildElHorizontals();
		}
		if (this.isVertical) {
			this.buildElVerticals();
		}
	},


	// Destroys all internal data about coordinates, freeing memory
	clear: function() {
		this.origin = null;
		this.boundingRect = null;
		this.lefts = null;
		this.rights = null;
		this.tops = null;
		this.bottoms = null;
	},


	// When called, if coord caches aren't built, builds them
	ensureBuilt: function() {
		if (!this.origin) {
			this.build();
		}
	},


	// Populates the left/right internal coordinate arrays
	buildElHorizontals: function() {
		var lefts = [];
		var rights = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var left = el.offset().left;
			var width = el.outerWidth();

			lefts.push(left);
			rights.push(left + width);
		});

		this.lefts = lefts;
		this.rights = rights;
	},


	// Populates the top/bottom internal coordinate arrays
	buildElVerticals: function() {
		var tops = [];
		var bottoms = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var top = el.offset().top;
			var height = el.outerHeight();

			tops.push(top);
			bottoms.push(top + height);
		});

		this.tops = tops;
		this.bottoms = bottoms;
	},


	// Given a left offset (from document left), returns the index of the el that it horizontally intersects.
	// If no intersection is made, returns undefined.
	getHorizontalIndex: function(leftOffset) {
		this.ensureBuilt();

		var lefts = this.lefts;
		var rights = this.rights;
		var len = lefts.length;
		var i;

		for (i = 0; i < len; i++) {
			if (leftOffset >= lefts[i] && leftOffset < rights[i]) {
				return i;
			}
		}
	},


	// Given a top offset (from document top), returns the index of the el that it vertically intersects.
	// If no intersection is made, returns undefined.
	getVerticalIndex: function(topOffset) {
		this.ensureBuilt();

		var tops = this.tops;
		var bottoms = this.bottoms;
		var len = tops.length;
		var i;

		for (i = 0; i < len; i++) {
			if (topOffset >= tops[i] && topOffset < bottoms[i]) {
				return i;
			}
		}
	},


	// Gets the left offset (from document left) of the element at the given index
	getLeftOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex];
	},


	// Gets the left position (from offsetParent left) of the element at the given index
	getLeftPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex] - this.origin.left;
	},


	// Gets the right offset (from document left) of the element at the given index.
	// This value is NOT relative to the document's right edge, like the CSS concept of "right" would be.
	getRightOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex];
	},


	// Gets the right position (from offsetParent left) of the element at the given index.
	// This value is NOT relative to the offsetParent's right edge, like the CSS concept of "right" would be.
	getRightPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.origin.left;
	},


	// Gets the width of the element at the given index
	getWidth: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.lefts[leftIndex];
	},


	// Gets the top offset (from document top) of the element at the given index
	getTopOffset: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex];
	},


	// Gets the top position (from offsetParent top) of the element at the given position
	getTopPosition: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex] - this.origin.top;
	},

	// Gets the bottom offset (from the document top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomOffset: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex];
	},


	// Gets the bottom position (from the offsetParent top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomPosition: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.origin.top;
	},


	// Gets the height of the element at the given index
	getHeight: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.tops[topIndex];
	},


	// Bounding Rect
	// TODO: decouple this from CoordCache

	// Compute and return what the elements' bounding rectangle is, from the user's perspective.
	// Right now, only returns a rectangle if constrained by an overflow:scroll element.
	queryBoundingRect: function() {
		var scrollParentEl = getScrollParent(this.els.eq(0));

		if (!scrollParentEl.is(document)) {
			return getClientRect(scrollParentEl);
		}
	},

	isPointInBounds: function(leftOffset, topOffset) {
		return this.isLeftInBounds(leftOffset) && this.isTopInBounds(topOffset);
	},

	isLeftInBounds: function(leftOffset) {
		return !this.boundingRect || (leftOffset >= this.boundingRect.left && leftOffset < this.boundingRect.right);
	},

	isTopInBounds: function(topOffset) {
		return !this.boundingRect || (topOffset >= this.boundingRect.top && topOffset < this.boundingRect.bottom);
	}

});

;;

/* Tracks a drag's mouse movement, firing various handlers
----------------------------------------------------------------------------------------------------------------------*/
// TODO: use Emitter

var DragListener = FC.DragListener = Class.extend(ListenerMixin, MouseIgnorerMixin, {

	options: null,
	subjectEl: null,

	// coordinates of the initial mousedown
	originX: null,
	originY: null,

	// the wrapping element that scrolls, or MIGHT scroll if there's overflow.
	// TODO: do this for wrappers that have overflow:hidden as well.
	scrollEl: null,

	isInteracting: false,
	isDistanceSurpassed: false,
	isDelayEnded: false,
	isDragging: false,
	isTouch: false,

	delay: null,
	delayTimeoutId: null,
	minDistance: null,

	handleTouchScrollProxy: null, // calls handleTouchScroll, always bound to `this`


	constructor: function(options) {
		this.options = options || {};
		this.handleTouchScrollProxy = proxy(this, 'handleTouchScroll');
		this.initMouseIgnoring(500);
	},


	// Interaction (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	startInteraction: function(ev, extraOptions) {
		var isTouch = getEvIsTouch(ev);

		if (ev.type === 'mousedown') {
			if (this.isIgnoringMouse) {
				return;
			}
			else if (!isPrimaryMouseButton(ev)) {
				return;
			}
			else {
				ev.preventDefault(); // prevents native selection in most browsers
			}
		}

		if (!this.isInteracting) {

			// process options
			extraOptions = extraOptions || {};
			this.delay = firstDefined(extraOptions.delay, this.options.delay, 0);
			this.minDistance = firstDefined(extraOptions.distance, this.options.distance, 0);
			this.subjectEl = this.options.subjectEl;

			this.isInteracting = true;
			this.isTouch = isTouch;
			this.isDelayEnded = false;
			this.isDistanceSurpassed = false;

			this.originX = getEvX(ev);
			this.originY = getEvY(ev);
			this.scrollEl = getScrollParent($(ev.target));

			this.bindHandlers();
			this.initAutoScroll();
			this.handleInteractionStart(ev);
			this.startDelay(ev);

			if (!this.minDistance) {
				this.handleDistanceSurpassed(ev);
			}
		}
	},


	handleInteractionStart: function(ev) {
		this.trigger('interactionStart', ev);
	},


	endInteraction: function(ev, isCancelled) {
		if (this.isInteracting) {
			this.endDrag(ev);

			if (this.delayTimeoutId) {
				clearTimeout(this.delayTimeoutId);
				this.delayTimeoutId = null;
			}

			this.destroyAutoScroll();
			this.unbindHandlers();

			this.isInteracting = false;
			this.handleInteractionEnd(ev, isCancelled);

			// a touchstart+touchend on the same element will result in the following addition simulated events:
			// mouseover + mouseout + click
			// let's ignore these bogus events
			if (this.isTouch) {
				this.tempIgnoreMouse();
			}
		}
	},


	handleInteractionEnd: function(ev, isCancelled) {
		this.trigger('interactionEnd', ev, isCancelled || false);
	},


	// Binding To DOM
	// -----------------------------------------------------------------------------------------------------------------


	bindHandlers: function() {
		var _this = this;
		var touchStartIgnores = 1;

		if (this.isTouch) {
			this.listenTo($(document), {
				touchmove: this.handleTouchMove,
				touchend: this.endInteraction,
				touchcancel: this.endInteraction,

				// Sometimes touchend doesn't fire
				// (can't figure out why. touchcancel doesn't fire either. has to do with scrolling?)
				// If another touchstart happens, we know it's bogus, so cancel the drag.
				// touchend will continue to be broken until user does a shorttap/scroll, but this is best we can do.
				touchstart: function(ev) {
					if (touchStartIgnores) { // bindHandlers is called from within a touchstart,
						touchStartIgnores--; // and we don't want this to fire immediately, so ignore.
					}
					else {
						_this.endInteraction(ev, true); // isCancelled=true
					}
				}
			});

			// listen to ALL scroll actions on the page
			if (
				!bindAnyScroll(this.handleTouchScrollProxy) && // hopefully this works and short-circuits the rest
				this.scrollEl // otherwise, attach a single handler to this
			) {
				this.listenTo(this.scrollEl, 'scroll', this.handleTouchScroll);
			}
		}
		else {
			this.listenTo($(document), {
				mousemove: this.handleMouseMove,
				mouseup: this.endInteraction
			});
		}

		this.listenTo($(document), {
			selectstart: preventDefault, // don't allow selection while dragging
			contextmenu: preventDefault // long taps would open menu on Chrome dev tools
		});
	},


	unbindHandlers: function() {
		this.stopListeningTo($(document));

		// unbind scroll listening
		unbindAnyScroll(this.handleTouchScrollProxy);
		if (this.scrollEl) {
			this.stopListeningTo(this.scrollEl, 'scroll');
		}
	},


	// Drag (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	// extraOptions ignored if drag already started
	startDrag: function(ev, extraOptions) {
		this.startInteraction(ev, extraOptions); // ensure interaction began

		if (!this.isDragging) {
			this.isDragging = true;
			this.handleDragStart(ev);
		}
	},


	handleDragStart: function(ev) {
		this.trigger('dragStart', ev);
	},


	handleMove: function(ev) {
		var dx = getEvX(ev) - this.originX;
		var dy = getEvY(ev) - this.originY;
		var minDistance = this.minDistance;
		var distanceSq; // current distance from the origin, squared

		if (!this.isDistanceSurpassed) {
			distanceSq = dx * dx + dy * dy;
			if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
				this.handleDistanceSurpassed(ev);
			}
		}

		if (this.isDragging) {
			this.handleDrag(dx, dy, ev);
		}
	},


	// Called while the mouse is being moved and when we know a legitimate drag is taking place
	handleDrag: function(dx, dy, ev) {
		this.trigger('drag', dx, dy, ev);
		this.updateAutoScroll(ev); // will possibly cause scrolling
	},


	endDrag: function(ev) {
		if (this.isDragging) {
			this.isDragging = false;
			this.handleDragEnd(ev);
		}
	},


	handleDragEnd: function(ev) {
		this.trigger('dragEnd', ev);
	},


	// Delay
	// -----------------------------------------------------------------------------------------------------------------


	startDelay: function(initialEv) {
		var _this = this;

		if (this.delay) {
			this.delayTimeoutId = setTimeout(function() {
				_this.handleDelayEnd(initialEv);
			}, this.delay);
		}
		else {
			this.handleDelayEnd(initialEv);
		}
	},


	handleDelayEnd: function(initialEv) {
		this.isDelayEnded = true;

		if (this.isDistanceSurpassed) {
			this.startDrag(initialEv);
		}
	},


	// Distance
	// -----------------------------------------------------------------------------------------------------------------


	handleDistanceSurpassed: function(ev) {
		this.isDistanceSurpassed = true;

		if (this.isDelayEnded) {
			this.startDrag(ev);
		}
	},


	// Mouse / Touch
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchMove: function(ev) {
		// prevent inertia and touchmove-scrolling while dragging
		if (this.isDragging) {
			ev.preventDefault();
		}

		this.handleMove(ev);
	},


	handleMouseMove: function(ev) {
		this.handleMove(ev);
	},


	// Scrolling (unrelated to auto-scroll)
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchScroll: function(ev) {
		// if the drag is being initiated by touch, but a scroll happens before
		// the drag-initiating delay is over, cancel the drag
		if (!this.isDragging) {
			this.endInteraction(ev, true); // isCancelled=true
		}
	},


	// Utils
	// -----------------------------------------------------------------------------------------------------------------


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		// makes _methods callable by event name. TODO: kill this
		if (this['_' + name]) {
			this['_' + name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}


});

;;
/*
this.scrollEl is set in DragListener
*/
DragListener.mixin({

	isAutoScroll: false,

	scrollBounds: null, // { top, bottom, left, right }
	scrollTopVel: null, // pixels per second
	scrollLeftVel: null, // pixels per second
	scrollIntervalId: null, // ID of setTimeout for scrolling animation loop

	// defaults
	scrollSensitivity: 30, // pixels from edge for scrolling to start
	scrollSpeed: 200, // pixels per second, at maximum speed
	scrollIntervalMs: 50, // millisecond wait between scroll increment


	initAutoScroll: function() {
		var scrollEl = this.scrollEl;

		this.isAutoScroll =
			this.options.scroll &&
			scrollEl &&
			!scrollEl.is(window) &&
			!scrollEl.is(document);

		if (this.isAutoScroll) {
			// debounce makes sure rapid calls don't happen
			this.listenTo(scrollEl, 'scroll', debounce(this.handleDebouncedScroll, 100));
		}
	},


	destroyAutoScroll: function() {
		this.endAutoScroll(); // kill any animation loop

		// remove the scroll handler if there is a scrollEl
		if (this.isAutoScroll) {
			this.stopListeningTo(this.scrollEl, 'scroll'); // will probably get removed by unbindHandlers too :(
		}
	},


	// Computes and stores the bounding rectangle of scrollEl
	computeScrollBounds: function() {
		if (this.isAutoScroll) {
			this.scrollBounds = getOuterRect(this.scrollEl);
			// TODO: use getClientRect in future. but prevents auto scrolling when on top of scrollbars
		}
	},


	// Called when the dragging is in progress and scrolling should be updated
	updateAutoScroll: function(ev) {
		var sensitivity = this.scrollSensitivity;
		var bounds = this.scrollBounds;
		var topCloseness, bottomCloseness;
		var leftCloseness, rightCloseness;
		var topVel = 0;
		var leftVel = 0;

		if (bounds) { // only scroll if scrollEl exists

			// compute closeness to edges. valid range is from 0.0 - 1.0
			topCloseness = (sensitivity - (getEvY(ev) - bounds.top)) / sensitivity;
			bottomCloseness = (sensitivity - (bounds.bottom - getEvY(ev))) / sensitivity;
			leftCloseness = (sensitivity - (getEvX(ev) - bounds.left)) / sensitivity;
			rightCloseness = (sensitivity - (bounds.right - getEvX(ev))) / sensitivity;

			// translate vertical closeness into velocity.
			// mouse must be completely in bounds for velocity to happen.
			if (topCloseness >= 0 && topCloseness <= 1) {
				topVel = topCloseness * this.scrollSpeed * -1; // negative. for scrolling up
			}
			else if (bottomCloseness >= 0 && bottomCloseness <= 1) {
				topVel = bottomCloseness * this.scrollSpeed;
			}

			// translate horizontal closeness into velocity
			if (leftCloseness >= 0 && leftCloseness <= 1) {
				leftVel = leftCloseness * this.scrollSpeed * -1; // negative. for scrolling left
			}
			else if (rightCloseness >= 0 && rightCloseness <= 1) {
				leftVel = rightCloseness * this.scrollSpeed;
			}
		}

		this.setScrollVel(topVel, leftVel);
	},


	// Sets the speed-of-scrolling for the scrollEl
	setScrollVel: function(topVel, leftVel) {

		this.scrollTopVel = topVel;
		this.scrollLeftVel = leftVel;

		this.constrainScrollVel(); // massages into realistic values

		// if there is non-zero velocity, and an animation loop hasn't already started, then START
		if ((this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId) {
			this.scrollIntervalId = setInterval(
				proxy(this, 'scrollIntervalFunc'), // scope to `this`
				this.scrollIntervalMs
			);
		}
	},


	// Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
	constrainScrollVel: function() {
		var el = this.scrollEl;

		if (this.scrollTopVel < 0) { // scrolling up?
			if (el.scrollTop() <= 0) { // already scrolled all the way up?
				this.scrollTopVel = 0;
			}
		}
		else if (this.scrollTopVel > 0) { // scrolling down?
			if (el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) { // already scrolled all the way down?
				this.scrollTopVel = 0;
			}
		}

		if (this.scrollLeftVel < 0) { // scrolling left?
			if (el.scrollLeft() <= 0) { // already scrolled all the left?
				this.scrollLeftVel = 0;
			}
		}
		else if (this.scrollLeftVel > 0) { // scrolling right?
			if (el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) { // already scrolled all the way right?
				this.scrollLeftVel = 0;
			}
		}
	},


	// This function gets called during every iteration of the scrolling animation loop
	scrollIntervalFunc: function() {
		var el = this.scrollEl;
		var frac = this.scrollIntervalMs / 1000; // considering animation frequency, what the vel should be mult'd by

		// change the value of scrollEl's scroll
		if (this.scrollTopVel) {
			el.scrollTop(el.scrollTop() + this.scrollTopVel * frac);
		}
		if (this.scrollLeftVel) {
			el.scrollLeft(el.scrollLeft() + this.scrollLeftVel * frac);
		}

		this.constrainScrollVel(); // since the scroll values changed, recompute the velocities

		// if scrolled all the way, which causes the vels to be zero, stop the animation loop
		if (!this.scrollTopVel && !this.scrollLeftVel) {
			this.endAutoScroll();
		}
	},


	// Kills any existing scrolling animation loop
	endAutoScroll: function() {
		if (this.scrollIntervalId) {
			clearInterval(this.scrollIntervalId);
			this.scrollIntervalId = null;

			this.handleScrollEnd();
		}
	},


	// Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
	handleDebouncedScroll: function() {
		// recompute all coordinates, but *only* if this is *not* part of our scrolling animation
		if (!this.scrollIntervalId) {
			this.handleScrollEnd();
		}
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
	}

});
;;

/* Tracks mouse movements over a component and raises events about which hit the mouse is over.
------------------------------------------------------------------------------------------------------------------------
options:
- subjectEl
- subjectCenter
*/

var HitDragListener = DragListener.extend({

	component: null, // converts coordinates to hits
		// methods: prepareHits, releaseHits, queryHit

	origHit: null, // the hit the mouse was over when listening started
	hit: null, // the hit the mouse is over
	coordAdjust: null, // delta that will be added to the mouse coordinates when computing collisions


	constructor: function(component, options) {
		DragListener.call(this, options); // call the super-constructor

		this.component = component;
	},


	// Called when drag listening starts (but a real drag has not necessarily began).
	// ev might be undefined if dragging was started manually.
	handleInteractionStart: function(ev) {
		var subjectEl = this.subjectEl;
		var subjectRect;
		var origPoint;
		var point;

		this.computeCoords();

		if (ev) {
			origPoint = { left: getEvX(ev), top: getEvY(ev) };
			point = origPoint;

			// constrain the point to bounds of the element being dragged
			if (subjectEl) {
				subjectRect = getOuterRect(subjectEl); // used for centering as well
				point = constrainPoint(point, subjectRect);
			}

			this.origHit = this.queryHit(point.left, point.top);

			// treat the center of the subject as the collision point?
			if (subjectEl && this.options.subjectCenter) {

				// only consider the area the subject overlaps the hit. best for large subjects.
				// TODO: skip this if hit didn't supply left/right/top/bottom
				if (this.origHit) {
					subjectRect = intersectRects(this.origHit, subjectRect) ||
						subjectRect; // in case there is no intersection
				}

				point = getRectCenter(subjectRect);
			}

			this.coordAdjust = diffPoints(point, origPoint); // point - origPoint
		}
		else {
			this.origHit = null;
			this.coordAdjust = null;
		}

		// call the super-method. do it after origHit has been computed
		DragListener.prototype.handleInteractionStart.apply(this, arguments);
	},


	// Recomputes the drag-critical positions of elements
	computeCoords: function() {
		this.component.prepareHits();
		this.computeScrollBounds(); // why is this here??????
	},


	// Called when the actual drag has started
	handleDragStart: function(ev) {
		var hit;

		DragListener.prototype.handleDragStart.apply(this, arguments); // call the super-method

		// might be different from this.origHit if the min-distance is large
		hit = this.queryHit(getEvX(ev), getEvY(ev));

		// report the initial hit the mouse is over
		// especially important if no min-distance and drag starts immediately
		if (hit) {
			this.handleHitOver(hit);
		}
	},


	// Called when the drag moves
	handleDrag: function(dx, dy, ev) {
		var hit;

		DragListener.prototype.handleDrag.apply(this, arguments); // call the super-method

		hit = this.queryHit(getEvX(ev), getEvY(ev));

		if (!isHitsEqual(hit, this.hit)) { // a different hit than before?
			if (this.hit) {
				this.handleHitOut();
			}
			if (hit) {
				this.handleHitOver(hit);
			}
		}
	},


	// Called when dragging has been stopped
	handleDragEnd: function() {
		this.handleHitDone();
		DragListener.prototype.handleDragEnd.apply(this, arguments); // call the super-method
	},


	// Called when a the mouse has just moved over a new hit
	handleHitOver: function(hit) {
		var isOrig = isHitsEqual(hit, this.origHit);

		this.hit = hit;

		this.trigger('hitOver', this.hit, isOrig, this.origHit);
	},


	// Called when the mouse has just moved out of a hit
	handleHitOut: function() {
		if (this.hit) {
			this.trigger('hitOut', this.hit);
			this.handleHitDone();
			this.hit = null;
		}
	},


	// Called after a hitOut. Also called before a dragStop
	handleHitDone: function() {
		if (this.hit) {
			this.trigger('hitDone', this.hit);
		}
	},


	// Called when the interaction ends, whether there was a real drag or not
	handleInteractionEnd: function() {
		DragListener.prototype.handleInteractionEnd.apply(this, arguments); // call the super-method

		this.origHit = null;
		this.hit = null;

		this.component.releaseHits();
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
		DragListener.prototype.handleScrollEnd.apply(this, arguments); // call the super-method

		this.computeCoords(); // hits' absolute positions will be in new places. recompute
	},


	// Gets the hit underneath the coordinates for the given mouse event
	queryHit: function(left, top) {

		if (this.coordAdjust) {
			left += this.coordAdjust.left;
			top += this.coordAdjust.top;
		}

		return this.component.queryHit(left, top);
	}

});


// Returns `true` if the hits are identically equal. `false` otherwise. Must be from the same component.
// Two null values will be considered equal, as two "out of the component" states are the same.
function isHitsEqual(hit0, hit1) {

	if (!hit0 && !hit1) {
		return true;
	}

	if (hit0 && hit1) {
		return hit0.component === hit1.component &&
			isHitPropsWithin(hit0, hit1) &&
			isHitPropsWithin(hit1, hit0); // ensures all props are identical
	}

	return false;
}


// Returns true if all of subHit's non-standard properties are within superHit
function isHitPropsWithin(subHit, superHit) {
	for (var propName in subHit) {
		if (!/^(component|left|right|top|bottom)$/.test(propName)) {
			if (subHit[propName] !== superHit[propName]) {
				return false;
			}
		}
	}
	return true;
}

;;

/* Creates a clone of an element and lets it track the mouse as it moves
----------------------------------------------------------------------------------------------------------------------*/

var MouseFollower = Class.extend(ListenerMixin, {

	options: null,

	sourceEl: null, // the element that will be cloned and made to look like it is dragging
	el: null, // the clone of `sourceEl` that will track the mouse
	parentEl: null, // the element that `el` (the clone) will be attached to

	// the initial position of el, relative to the offset parent. made to match the initial offset of sourceEl
	top0: null,
	left0: null,

	// the absolute coordinates of the initiating touch/mouse action
	y0: null,
	x0: null,

	// the number of pixels the mouse has moved from its initial position
	topDelta: null,
	leftDelta: null,

	isFollowing: false,
	isHidden: false,
	isAnimating: false, // doing the revert animation?

	constructor: function(sourceEl, options) {
		this.options = options = options || {};
		this.sourceEl = sourceEl;
		this.parentEl = options.parentEl ? $(options.parentEl) : sourceEl.parent(); // default to sourceEl's parent
	},


	// Causes the element to start following the mouse
	start: function(ev) {
		if (!this.isFollowing) {
			this.isFollowing = true;

			this.y0 = getEvY(ev);
			this.x0 = getEvX(ev);
			this.topDelta = 0;
			this.leftDelta = 0;

			if (!this.isHidden) {
				this.updatePosition();
			}

			if (getEvIsTouch(ev)) {
				this.listenTo($(document), 'touchmove', this.handleMove);
			}
			else {
				this.listenTo($(document), 'mousemove', this.handleMove);
			}
		}
	},


	// Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
	// `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
	stop: function(shouldRevert, callback) {
		var _this = this;
		var revertDuration = this.options.revertDuration;

		function complete() { // might be called by .animate(), which might change `this` context
			_this.isAnimating = false;
			_this.removeElement();

			_this.top0 = _this.left0 = null; // reset state for future updatePosition calls

			if (callback) {
				callback();
			}
		}

		if (this.isFollowing && !this.isAnimating) { // disallow more than one stop animation at a time
			this.isFollowing = false;

			this.stopListeningTo($(document));

			if (shouldRevert && revertDuration && !this.isHidden) { // do a revert animation?
				this.isAnimating = true;
				this.el.animate({
					top: this.top0,
					left: this.left0
				}, {
					duration: revertDuration,
					complete: complete
				});
			}
			else {
				complete();
			}
		}
	},


	// Gets the tracking element. Create it if necessary
	getEl: function() {
		var el = this.el;

		if (!el) {
			el = this.el = this.sourceEl.clone()
				.addClass(this.options.additionalClass || '')
				.css({
					position: 'absolute',
					visibility: '', // in case original element was hidden (commonly through hideEvents())
					display: this.isHidden ? 'none' : '', // for when initially hidden
					margin: 0,
					right: 'auto', // erase and set width instead
					bottom: 'auto', // erase and set height instead
					width: this.sourceEl.width(), // explicit height in case there was a 'right' value
					height: this.sourceEl.height(), // explicit width in case there was a 'bottom' value
					opacity: this.options.opacity || '',
					zIndex: this.options.zIndex
				});

			// we don't want long taps or any mouse interaction causing selection/menus.
			// would use preventSelection(), but that prevents selectstart, causing problems.
			el.addClass('fc-unselectable');

			el.appendTo(this.parentEl);
		}

		return el;
	},


	// Removes the tracking element if it has already been created
	removeElement: function() {
		if (this.el) {
			this.el.remove();
			this.el = null;
		}
	},


	// Update the CSS position of the tracking element
	updatePosition: function() {
		var sourceOffset;
		var origin;

		this.getEl(); // ensure this.el

		// make sure origin info was computed
		if (this.top0 === null) {
			sourceOffset = this.sourceEl.offset();
			origin = this.el.offsetParent().offset();
			this.top0 = sourceOffset.top - origin.top;
			this.left0 = sourceOffset.left - origin.left;
		}

		this.el.css({
			top: this.top0 + this.topDelta,
			left: this.left0 + this.leftDelta
		});
	},


	// Gets called when the user moves the mouse
	handleMove: function(ev) {
		this.topDelta = getEvY(ev) - this.y0;
		this.leftDelta = getEvX(ev) - this.x0;

		if (!this.isHidden) {
			this.updatePosition();
		}
	},


	// Temporarily makes the tracking element invisible. Can be called before following starts
	hide: function() {
		if (!this.isHidden) {
			this.isHidden = true;
			if (this.el) {
				this.el.hide();
			}
		}
	},


	// Show the tracking element after it has been temporarily hidden
	show: function() {
		if (this.isHidden) {
			this.isHidden = false;
			this.updatePosition();
			this.getEl().show();
		}
	}

});

;;

/* An abstract class comprised of a "grid" of areas that each represent a specific datetime
----------------------------------------------------------------------------------------------------------------------*/

var Grid = FC.Grid = Class.extend(ListenerMixin, MouseIgnorerMixin, {

	// self-config, overridable by subclasses
	hasDayInteractions: true, // can user click/select ranges of time?

	view: null, // a View object
	isRTL: null, // shortcut to the view's isRTL option

	start: null,
	end: null,

	el: null, // the containing element
	elsByFill: null, // a hash of jQuery element sets used for rendering each fill. Keyed by fill name.

	// derived from options
	eventTimeFormat: null,
	displayEventTime: null,
	displayEventEnd: null,

	minResizeDuration: null, // TODO: hack. set by subclasses. minumum event resize duration

	// if defined, holds the unit identified (ex: "year" or "month") that determines the level of granularity
	// of the date areas. if not defined, assumes to be day and time granularity.
	// TODO: port isTimeScale into same system?
	largeUnit: null,

	dayDragListener: null,
	segDragListener: null,
	segResizeListener: null,
	externalDragListener: null,


	constructor: function(view) {
		this.view = view;
		this.isRTL = view.opt('isRTL');
		this.elsByFill = {};

		this.dayDragListener = this.buildDayDragListener();
		this.initMouseIgnoring();
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Generates the format string used for event time text, if not explicitly defined by 'timeFormat'
	computeEventTimeFormat: function() {
		return this.view.opt('smallTimeFormat');
	},


	// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventTime'.
	// Only applies to non-all-day events.
	computeDisplayEventTime: function() {
		return true;
	},


	// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventEnd'
	computeDisplayEventEnd: function() {
		return true;
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	// Tells the grid about what period of time to display.
	// Any date-related internal data should be generated.
	setRange: function(range) {
		this.start = range.start.clone();
		this.end = range.end.clone();

		this.rangeUpdated();
		this.processRangeOptions();
	},


	// Called when internal variables that rely on the range should be updated
	rangeUpdated: function() {
	},


	// Updates values that rely on options and also relate to range
	processRangeOptions: function() {
		var view = this.view;
		var displayEventTime;
		var displayEventEnd;

		this.eventTimeFormat =
			view.opt('eventTimeFormat') ||
			view.opt('timeFormat') || // deprecated
			this.computeEventTimeFormat();

		displayEventTime = view.opt('displayEventTime');
		if (displayEventTime == null) {
			displayEventTime = this.computeDisplayEventTime(); // might be based off of range
		}

		displayEventEnd = view.opt('displayEventEnd');
		if (displayEventEnd == null) {
			displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
		}

		this.displayEventTime = displayEventTime;
		this.displayEventEnd = displayEventEnd;
	},


	// Converts a span (has unzoned start/end and any other grid-specific location information)
	// into an array of segments (pieces of events whose format is decided by the grid).
	spanToSegs: function(span) {
		// subclasses must implement
	},


	// Diffs the two dates, returning a duration, based on granularity of the grid
	// TODO: port isTimeScale into this system?
	diffDates: function(a, b) {
		if (this.largeUnit) {
			return diffByUnit(a, b, this.largeUnit);
		}
		else {
			return diffDayTime(a, b);
		}
	},


	/* Hit Area
	------------------------------------------------------------------------------------------------------------------*/


	// Called before one or more queryHit calls might happen. Should prepare any cached coordinates for queryHit
	prepareHits: function() {
	},


	// Called when queryHit calls have subsided. Good place to clear any coordinate caches.
	releaseHits: function() {
	},


	// Given coordinates from the topleft of the document, return data about the date-related area underneath.
	// Can return an object with arbitrary properties (although top/right/left/bottom are encouraged).
	// Must have a `grid` property, a reference to this current grid. TODO: avoid this
	// The returned object will be processed by getHitSpan and getHitEl.
	queryHit: function(leftOffset, topOffset) {
	},


	// Given position-level information about a date-related area within the grid,
	// should return an object with at least a start/end date. Can provide other information as well.
	getHitSpan: function(hit) {
	},


	// Given position-level information about a date-related area within the grid,
	// should return a jQuery element that best represents it. passed to dayClick callback.
	getHitEl: function(hit) {
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Sets the container element that the grid should render inside of.
	// Does other DOM-related initializations.
	setElement: function(el) {
		this.el = el;

		if (this.hasDayInteractions) {
			preventSelection(el);

			this.bindDayHandler('touchstart', this.dayTouchStart);
			this.bindDayHandler('mousedown', this.dayMousedown);
		}

		// attach event-element-related handlers. in Grid.events
		// same garbage collection note as above.
		this.bindSegHandlers();

		this.bindGlobalHandlers();
	},


	bindDayHandler: function(name, handler) {
		var _this = this;

		// attach a handler to the grid's root element.
		// jQuery will take care of unregistering them when removeElement gets called.
		this.el.on(name, function(ev) {
			if (
				!$(ev.target).is(
					_this.segSelector + ',' + // directly on an event element
					_this.segSelector + ' *,' + // within an event element
					'.fc-more,' + // a "more.." link
					'a[data-goto]' // a clickable nav link
				)
			) {
				return handler.call(_this, ev);
			}
		});
	},


	// Removes the grid's container element from the DOM. Undoes any other DOM-related attachments.
	// DOES NOT remove any content beforehand (doesn't clear events or call unrenderDates), unlike View
	removeElement: function() {
		this.unbindGlobalHandlers();
		this.clearDragListeners();

		this.el.remove();

		// NOTE: we don't null-out this.el for the same reasons we don't do it within View::removeElement
	},


	// Renders the basic structure of grid view before any content is rendered
	renderSkeleton: function() {
		// subclasses should implement
	},


	// Renders the grid's date-related content (like areas that represent days/times).
	// Assumes setRange has already been called and the skeleton has already been rendered.
	renderDates: function() {
		// subclasses should implement
	},


	// Unrenders the grid's date-related content
	unrenderDates: function() {
		// subclasses should implement
	},


	/* Handlers
	------------------------------------------------------------------------------------------------------------------*/


	// Binds DOM handlers to elements that reside outside the grid, such as the document
	bindGlobalHandlers: function() {
		this.listenTo($(document), {
			dragstart: this.externalDragStart, // jqui
			sortstart: this.externalDragStart // jqui
		});
	},


	// Unbinds DOM handlers from elements that reside outside the grid
	unbindGlobalHandlers: function() {
		this.stopListeningTo($(document));
	},


	// Process a mousedown on an element that represents a day. For day clicking and selecting.
	dayMousedown: function(ev) {
		if (!this.isIgnoringMouse) {
			this.dayDragListener.startInteraction(ev, {
				//distance: 5, // needs more work if we want dayClick to fire correctly
			});
		}
	},


	dayTouchStart: function(ev) {
		var view = this.view;

		// HACK to prevent a user's clickaway for unselecting a range or an event
		// from causing a dayClick.
		if (view.isSelected || view.selectedEvent) {
			this.tempIgnoreMouse();
		}

		this.dayDragListener.startInteraction(ev, {
			delay: this.view.opt('longPressDelay')
		});
	},


	// Creates a listener that tracks the user's drag across day elements.
	// For day clicking and selecting.
	buildDayDragListener: function() {
		var _this = this;
		var view = this.view;
		var isSelectable = view.opt('selectable');
		var dayClickHit; // null if invalid dayClick
		var selectionSpan; // null if invalid selection

		// this listener tracks a mousedown on a day element, and a subsequent drag.
		// if the drag ends on the same day, it is a 'dayClick'.
		// if 'selectable' is enabled, this listener also detects selections.
		var dragListener = new HitDragListener(this, {
			scroll: view.opt('dragScroll'),
			interactionStart: function() {
				dayClickHit = dragListener.origHit; // for dayClick, where no dragging happens
				selectionSpan = null;
			},
			dragStart: function() {
				view.unselect(); // since we could be rendering a new selection, we want to clear any old one
			},
			hitOver: function(hit, isOrig, origHit) {
				if (origHit) { // click needs to have started on a hit

					// if user dragged to another cell at any point, it can no longer be a dayClick
					if (!isOrig) {
						dayClickHit = null;
					}

					if (isSelectable) {
						selectionSpan = _this.computeSelection(
							_this.getHitSpan(origHit),
							_this.getHitSpan(hit)
						);
						if (selectionSpan) {
							_this.renderSelection(selectionSpan);
						}
						else if (selectionSpan === false) {
							disableCursor();
						}
					}
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				dayClickHit = null;
				selectionSpan = null;
				_this.unrenderSelection();
			},
			hitDone: function() { // called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev, isCancelled) {
				if (!isCancelled) {
					if (
						dayClickHit &&
						!_this.isIgnoringMouse // see hack in dayTouchStart
					) {
						view.triggerDayClick(
							_this.getHitSpan(dayClickHit),
							_this.getHitEl(dayClickHit),
							ev
						);
					}
					if (selectionSpan) {
						// the selection will already have been rendered. just report it
						view.reportSelection(selectionSpan, ev);
					}
				}
			}
		});

		return dragListener;
	},


	// Kills all in-progress dragging.
	// Useful for when public API methods that result in re-rendering are invoked during a drag.
	// Also useful for when touch devices misbehave and don't fire their touchend.
	clearDragListeners: function() {
		this.dayDragListener.endInteraction();

		if (this.segDragListener) {
			this.segDragListener.endInteraction(); // will clear this.segDragListener
		}
		if (this.segResizeListener) {
			this.segResizeListener.endInteraction(); // will clear this.segResizeListener
		}
		if (this.externalDragListener) {
			this.externalDragListener.endInteraction(); // will clear this.externalDragListener
		}
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: should probably move this to Grid.events, like we did event dragging / resizing


	// Renders a mock event at the given event location, which contains zoned start/end properties.
	// Returns all mock event elements.
	renderEventLocationHelper: function(eventLocation, sourceSeg) {
		var fakeEvent = this.fabricateHelperEvent(eventLocation, sourceSeg);

		return this.renderHelper(fakeEvent, sourceSeg); // do the actual rendering
	},


	// Builds a fake event given zoned event date properties and a segment is should be inspired from.
	// The range's end can be null, in which case the mock event that is rendered will have a null end time.
	// `sourceSeg` is the internal segment object involved in the drag. If null, something external is dragging.
	fabricateHelperEvent: function(eventLocation, sourceSeg) {
		var fakeEvent = sourceSeg ? createObject(sourceSeg.event) : {}; // mask the original event object if possible

		fakeEvent.start = eventLocation.start.clone();
		fakeEvent.end = eventLocation.end ? eventLocation.end.clone() : null;
		fakeEvent.allDay = null; // force it to be freshly computed by normalizeEventDates
		this.view.calendar.normalizeEventDates(fakeEvent);

		// this extra className will be useful for differentiating real events from mock events in CSS
		fakeEvent.className = (fakeEvent.className || []).concat('fc-helper');

		// if something external is being dragged in, don't render a resizer
		if (!sourceSeg) {
			fakeEvent.editable = false;
		}

		return fakeEvent;
	},


	// Renders a mock event. Given zoned event date properties.
	// Must return all mock event elements.
	renderHelper: function(eventLocation, sourceSeg) {
		// subclasses must implement
	},


	// Unrenders a mock event
	unrenderHelper: function() {
		// subclasses must implement
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection. Will highlight by default but can be overridden by subclasses.
	// Given a span (unzoned start/end and other misc data)
	renderSelection: function(span) {
		this.renderHighlight(span);
	},


	// Unrenders any visual indications of a selection. Will unrender a highlight by default.
	unrenderSelection: function() {
		this.unrenderHighlight();
	},


	// Given the first and last date-spans of a selection, returns another date-span object.
	// Subclasses can override and provide additional data in the span object. Will be passed to renderSelection().
	// Will return false if the selection is invalid and this should be indicated to the user.
	// Will return null/undefined if a selection invalid but no error should be reported.
	computeSelection: function(span0, span1) {
		var span = this.computeSelectionSpan(span0, span1);

		if (span && !this.view.calendar.isSelectionSpanAllowed(span)) {
			return false;
		}

		return span;
	},


	// Given two spans, must return the combination of the two.
	// TODO: do this separation of concerns (combining VS validation) for event dnd/resize too.
	computeSelectionSpan: function(span0, span1) {
		var dates = [ span0.start, span0.end, span1.start, span1.end ];

		dates.sort(compareNumbers); // sorts chronologically. works with Moments

		return { start: dates[0].clone(), end: dates[3].clone() };
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	// Renders an emphasis on the given date range. Given a span (unzoned start/end and other misc data)
	renderHighlight: function(span) {
		this.renderFill('highlight', this.spanToSegs(span));
	},


	// Unrenders the emphasis on a date range
	unrenderHighlight: function() {
		this.unrenderFill('highlight');
	},


	// Generates an array of classNames for rendering the highlight. Used by the fill system.
	highlightSegClasses: function() {
		return [ 'fc-highlight' ];
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessHours: function() {
	},


	unrenderBusinessHours: function() {
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
	},


	renderNowIndicator: function(date) {
	},


	unrenderNowIndicator: function() {
	},


	/* Fill System (highlight, background events, business hours)
	--------------------------------------------------------------------------------------------------------------------
	TODO: remove this system. like we did in TimeGrid
	*/


	// Renders a set of rectangles over the given segments of time.
	// MUST RETURN a subset of segs, the segs that were actually rendered.
	// Responsible for populating this.elsByFill. TODO: better API for expressing this requirement
	renderFill: function(type, segs) {
		// subclasses must implement
	},


	// Unrenders a specific type of fill that is currently rendered on the grid
	unrenderFill: function(type) {
		var el = this.elsByFill[type];

		if (el) {
			el.remove();
			delete this.elsByFill[type];
		}
	},


	// Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
	// Only returns segments that successfully rendered.
	// To be harnessed by renderFill (implemented by subclasses).
	// Analagous to renderFgSegEls.
	renderFillSegEls: function(type, segs) {
		var _this = this;
		var segElMethod = this[type + 'SegEl'];
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) {

			// build a large concatenation of segment HTML
			for (i = 0; i < segs.length; i++) {
				html += this.fillSegHtml(type, segs[i]);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = $(node);

				// allow custom filter methods per-type
				if (segElMethod) {
					el = segElMethod.call(_this, seg, el);
				}

				if (el) { // custom filters did not cancel the render
					el = $(el); // allow custom filter to return raw DOM node

					// correct element type? (would be bad if a non-TD were inserted into a table for example)
					if (el.is(_this.fillSegTag)) {
						seg.el = el;
						renderedSegs.push(seg);
					}
				}
			});
		}

		return renderedSegs;
	},


	fillSegTag: 'div', // subclasses can override


	// Builds the HTML needed for one fill segment. Generic enough to work with different types.
	fillSegHtml: function(type, seg) {

		// custom hooks per-type
		var classesMethod = this[type + 'SegClasses'];
		var cssMethod = this[type + 'SegCss'];

		var classes = classesMethod ? classesMethod.call(this, seg) : [];
		var css = cssToStr(cssMethod ? cssMethod.call(this, seg) : {});

		return '<' + this.fillSegTag +
			(classes.length ? ' class="' + classes.join(' ') + '"' : '') +
			(css ? ' style="' + css + '"' : '') +
			' />';
	},



	/* Generic rendering utilities for subclasses
	------------------------------------------------------------------------------------------------------------------*/


	// Computes HTML classNames for a single-day element
	getDayClasses: function(date) {
		var view = this.view;
		var today = view.calendar.getNow();
		var classes = [ 'fc-' + dayIDs[date.day()] ];

		if (
			view.intervalDuration.as('months') == 1 &&
			date.month() != view.intervalStart.month()
		) {
			classes.push('fc-other-month');
		}

		if (date.isSame(today, 'day')) {
			classes.push(
				'fc-today',
				view.highlightStateClass
			);
		}
		else if (date < today) {
			classes.push('fc-past');
		}
		else {
			classes.push('fc-future');
		}

		return classes;
	}

});

;;

/* Event-rendering and event-interaction methods for the abstract Grid class
----------------------------------------------------------------------------------------------------------------------*/

Grid.mixin({

	// self-config, overridable by subclasses
	segSelector: '.fc-event-container > *', // what constitutes an event element?

	mousedOverSeg: null, // the segment object the user's mouse is over. null if over nothing
	isDraggingSeg: false, // is a segment being dragged? boolean
	isResizingSeg: false, // is a segment being resized? boolean
	isDraggingExternal: false, // jqui-dragging an external element? boolean
	segs: null, // the *event* segments currently rendered in the grid. TODO: rename to `eventSegs`


	// Renders the given events onto the grid
	renderEvents: function(events) {
		var bgEvents = [];
		var fgEvents = [];
		var i;

		for (i = 0; i < events.length; i++) {
			(isBgEvent(events[i]) ? bgEvents : fgEvents).push(events[i]);
		}

		this.segs = [].concat( // record all segs
			this.renderBgEvents(bgEvents),
			this.renderFgEvents(fgEvents)
		);
	},


	renderBgEvents: function(events) {
		var segs = this.eventsToSegs(events);

		// renderBgSegs might return a subset of segs, segs that were actually rendered
		return this.renderBgSegs(segs) || segs;
	},


	renderFgEvents: function(events) {
		var segs = this.eventsToSegs(events);

		// renderFgSegs might return a subset of segs, segs that were actually rendered
		return this.renderFgSegs(segs) || segs;
	},


	// Unrenders all events currently rendered on the grid
	unrenderEvents: function() {
		this.handleSegMouseout(); // trigger an eventMouseout if user's mouse is over an event
		this.clearDragListeners();

		this.unrenderFgSegs();
		this.unrenderBgSegs();

		this.segs = null;
	},


	// Retrieves all rendered segment objects currently rendered on the grid
	getEventSegs: function() {
		return this.segs || [];
	},


	/* Foreground Segment Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Renders foreground event segments onto the grid. May return a subset of segs that were rendered.
	renderFgSegs: function(segs) {
		// subclasses must implement
	},


	// Unrenders all currently rendered foreground segments
	unrenderFgSegs: function() {
		// subclasses must implement
	},


	// Renders and assigns an `el` property for each foreground event segment.
	// Only returns segments that successfully rendered.
	// A utility that subclasses may use.
	renderFgSegEls: function(segs, disableResizing) {
		var view = this.view;
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) { // don't build an empty html string

			// build a large concatenation of event segment HTML
			for (i = 0; i < segs.length; i++) {
				html += this.fgSegHtml(segs[i], disableResizing);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = view.resolveEventEl(seg.event, $(node));

				if (el) {
					el.data('fc-seg', seg); // used by handlers
					seg.el = el;
					renderedSegs.push(seg);
				}
			});
		}

		return renderedSegs;
	},


	// Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
	fgSegHtml: function(seg, disableResizing) {
		// subclasses should implement
	},


	/* Background Segment Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the given background event segments onto the grid.
	// Returns a subset of the segs that were actually rendered.
	renderBgSegs: function(segs) {
		return this.renderFill('bgEvent', segs);
	},


	// Unrenders all the currently rendered background event segments
	unrenderBgSegs: function() {
		this.unrenderFill('bgEvent');
	},


	// Renders a background event element, given the default rendering. Called by the fill system.
	bgEventSegEl: function(seg, el) {
		return this.view.resolveEventEl(seg.event, el); // will filter through eventRender
	},


	// Generates an array of classNames to be used for the default rendering of a background event.
	// Called by fillSegHtml.
	bgEventSegClasses: function(seg) {
		var event = seg.event;
		var source = event.source || {};

		return [ 'fc-bgevent' ].concat(
			event.className,
			source.className || []
		);
	},


	// Generates a semicolon-separated CSS string to be used for the default rendering of a background event.
	// Called by fillSegHtml.
	bgEventSegCss: function(seg) {
		return {
			'background-color': this.getSegSkinCss(seg)['background-color']
		};
	},


	// Generates an array of classNames to be used for the rendering business hours overlay. Called by the fill system.
	// Called by fillSegHtml.
	businessHoursSegClasses: function(seg) {
		return [ 'fc-nonbusiness', 'fc-bgevent' ];
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	// Compute business hour segs for the grid's current date range.
	// Caller must ask if whole-day business hours are needed.
	buildBusinessHourSegs: function(wholeDay) {
		var events = this.view.calendar.getCurrentBusinessHourEvents(wholeDay);

		// HACK. Eventually refactor business hours "events" system.
		// If no events are given, but businessHours is activated, this means the entire visible range should be
		// marked as *not* business-hours, via inverse-background rendering.
		if (
			!events.length &&
			this.view.calendar.options.businessHours // don't access view option. doesn't update with dynamic options
		) {
			events = [
				$.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, {
					start: this.view.end, // guaranteed out-of-range
					end: this.view.end,   // "
					dow: null
				})
			];
		}

		return this.eventsToSegs(events);
	},


	/* Handlers
	------------------------------------------------------------------------------------------------------------------*/


	// Attaches event-element-related handlers for *all* rendered event segments of the view.
	bindSegHandlers: function() {
		this.bindSegHandlersToEl(this.el);
	},


	// Attaches event-element-related handlers to an arbitrary container element. leverages bubbling.
	bindSegHandlersToEl: function(el) {
		this.bindSegHandlerToEl(el, 'touchstart', this.handleSegTouchStart);
		this.bindSegHandlerToEl(el, 'touchend', this.handleSegTouchEnd);
		this.bindSegHandlerToEl(el, 'mouseenter', this.handleSegMouseover);
		this.bindSegHandlerToEl(el, 'mouseleave', this.handleSegMouseout);
		this.bindSegHandlerToEl(el, 'mousedown', this.handleSegMousedown);
		this.bindSegHandlerToEl(el, 'click', this.handleSegClick);
	},


	// Executes a handler for any a user-interaction on a segment.
	// Handler gets called with (seg, ev), and with the `this` context of the Grid
	bindSegHandlerToEl: function(el, name, handler) {
		var _this = this;

		el.on(name, this.segSelector, function(ev) {
			var seg = $(this).data('fc-seg'); // grab segment data. put there by View::renderEvents

			// only call the handlers if there is not a drag/resize in progress
			if (seg && !_this.isDraggingSeg && !_this.isResizingSeg) {
				return handler.call(_this, seg, ev); // context will be the Grid
			}
		});
	},


	handleSegClick: function(seg, ev) {
		var res = this.view.trigger('eventClick', seg.el[0], seg.event, ev); // can return `false` to cancel
		if (res === false) {
			ev.preventDefault();
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused over
	handleSegMouseover: function(seg, ev) {
		if (
			!this.isIgnoringMouse &&
			!this.mousedOverSeg
		) {
			this.mousedOverSeg = seg;
			if (this.view.isEventResizable(seg.event)) {
				seg.el.addClass('fc-allow-mouse-resize');
			}
			this.view.trigger('eventMouseover', seg.el[0], seg.event, ev);
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused out.
	// Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
	handleSegMouseout: function(seg, ev) {
		ev = ev || {}; // if given no args, make a mock mouse event

		if (this.mousedOverSeg) {
			seg = seg || this.mousedOverSeg; // if given no args, use the currently moused-over segment
			this.mousedOverSeg = null;
			if (this.view.isEventResizable(seg.event)) {
				seg.el.removeClass('fc-allow-mouse-resize');
			}
			this.view.trigger('eventMouseout', seg.el[0], seg.event, ev);
		}
	},


	handleSegMousedown: function(seg, ev) {
		var isResizing = this.startSegResize(seg, ev, { distance: 5 });

		if (!isResizing && this.view.isEventDraggable(seg.event)) {
			this.buildSegDragListener(seg)
				.startInteraction(ev, {
					distance: 5
				});
		}
	},


	handleSegTouchStart: function(seg, ev) {
		var view = this.view;
		var event = seg.event;
		var isSelected = view.isEventSelected(event);
		var isDraggable = view.isEventDraggable(event);
		var isResizable = view.isEventResizable(event);
		var isResizing = false;
		var dragListener;

		if (isSelected && isResizable) {
			// only allow resizing of the event is selected
			isResizing = this.startSegResize(seg, ev);
		}

		if (!isResizing && (isDraggable || isResizable)) { // allowed to be selected?

			dragListener = isDraggable ?
				this.buildSegDragListener(seg) :
				this.buildSegSelectListener(seg); // seg isn't draggable, but still needs to be selected

			dragListener.startInteraction(ev, { // won't start if already started
				delay: isSelected ? 0 : this.view.opt('longPressDelay') // do delay if not already selected
			});
		}

		// a long tap simulates a mouseover. ignore this bogus mouseover.
		this.tempIgnoreMouse();
	},


	handleSegTouchEnd: function(seg, ev) {
		// touchstart+touchend = click, which simulates a mouseover.
		// ignore this bogus mouseover.
		this.tempIgnoreMouse();
	},


	// returns boolean whether resizing actually started or not.
	// assumes the seg allows resizing.
	// `dragOptions` are optional.
	startSegResize: function(seg, ev, dragOptions) {
		if ($(ev.target).is('.fc-resizer')) {
			this.buildSegResizeListener(seg, $(ev.target).is('.fc-start-resizer'))
				.startInteraction(ev, dragOptions);
			return true;
		}
		return false;
	},



	/* Event Dragging
	------------------------------------------------------------------------------------------------------------------*/


	// Builds a listener that will track user-dragging on an event segment.
	// Generic enough to work with any type of Grid.
	// Has side effect of setting/unsetting `segDragListener`
	buildSegDragListener: function(seg) {
		var _this = this;
		var view = this.view;
		var calendar = view.calendar;
		var el = seg.el;
		var event = seg.event;
		var isDragging;
		var mouseFollower; // A clone of the original element that will move with the mouse
		var dropLocation; // zoned event date properties

		if (this.segDragListener) {
			return this.segDragListener;
		}

		// Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
		// of the view.
		var dragListener = this.segDragListener = new HitDragListener(view, {
			scroll: view.opt('dragScroll'),
			subjectEl: el,
			subjectCenter: true,
			interactionStart: function(ev) {
				seg.component = _this; // for renderDrag
				isDragging = false;
				mouseFollower = new MouseFollower(seg.el, {
					additionalClass: 'fc-dragging',
					parentEl: view.el,
					opacity: dragListener.isTouch ? null : view.opt('dragOpacity'),
					revertDuration: view.opt('dragRevertDuration'),
					zIndex: 2 // one above the .fc-view
				});
				mouseFollower.hide(); // don't show until we know this is a real drag
				mouseFollower.start(ev);
			},
			dragStart: function(ev) {
				if (dragListener.isTouch && !view.isEventSelected(event)) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEvent(event);
				}
				isDragging = true;
				_this.handleSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
				_this.segDragStart(seg, ev);
				view.hideEvent(event); // hide all event segments. our mouseFollower will take over
			},
			hitOver: function(hit, isOrig, origHit) {
				var dragHelperEls;

				// starting hit could be forced (DayGrid.limit)
				if (seg.hit) {
					origHit = seg.hit;
				}

				// since we are querying the parent view, might not belong to this grid
				dropLocation = _this.computeEventDrop(
					origHit.component.getHitSpan(origHit),
					hit.component.getHitSpan(hit),
					event
				);

				if (dropLocation && !calendar.isEventSpanAllowed(_this.eventToSpan(dropLocation), event)) {
					disableCursor();
					dropLocation = null;
				}

				// if a valid drop location, have the subclass render a visual indication
				if (dropLocation && (dragHelperEls = view.renderDrag(dropLocation, seg))) {

					dragHelperEls.addClass('fc-dragging');
					if (!dragListener.isTouch) {
						_this.applyDragOpacity(dragHelperEls);
					}

					mouseFollower.hide(); // if the subclass is already using a mock event "helper", hide our own
				}
				else {
					mouseFollower.show(); // otherwise, have the helper follow the mouse (no snapping)
				}

				if (isOrig) {
					dropLocation = null; // needs to have moved hits to be a valid drop
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				view.unrenderDrag(); // unrender whatever was done in renderDrag
				mouseFollower.show(); // show in case we are moving out of all hits
				dropLocation = null;
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev) {
				delete seg.component; // prevent side effects

				// do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
				mouseFollower.stop(!dropLocation, function() {
					if (isDragging) {
						view.unrenderDrag();
						view.showEvent(event);
						_this.segDragStop(seg, ev);
					}
					if (dropLocation) {
						view.reportEventDrop(event, dropLocation, this.largeUnit, el, ev);
					}
				});
				_this.segDragListener = null;
			}
		});

		return dragListener;
	},


	// seg isn't draggable, but let's use a generic DragListener
	// simply for the delay, so it can be selected.
	// Has side effect of setting/unsetting `segDragListener`
	buildSegSelectListener: function(seg) {
		var _this = this;
		var view = this.view;
		var event = seg.event;

		if (this.segDragListener) {
			return this.segDragListener;
		}

		var dragListener = this.segDragListener = new DragListener({
			dragStart: function(ev) {
				if (dragListener.isTouch && !view.isEventSelected(event)) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEvent(event);
				}
			},
			interactionEnd: function(ev) {
				_this.segDragListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment dragging starts
	segDragStart: function(seg, ev) {
		this.isDraggingSeg = true;
		this.view.trigger('eventDragStart', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Called after event segment dragging stops
	segDragStop: function(seg, ev) {
		this.isDraggingSeg = false;
		this.view.trigger('eventDragStop', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Given the spans an event drag began, and the span event was dropped, calculates the new zoned start/end/allDay
	// values for the event. Subclasses may override and set additional properties to be used by renderDrag.
	// A falsy returned value indicates an invalid drop.
	// DOES NOT consider overlap/constraint.
	computeEventDrop: function(startSpan, endSpan, event) {
		var calendar = this.view.calendar;
		var dragStart = startSpan.start;
		var dragEnd = endSpan.start;
		var delta;
		var dropLocation; // zoned event date properties

		if (dragStart.hasTime() === dragEnd.hasTime()) {
			delta = this.diffDates(dragEnd, dragStart);

			// if an all-day event was in a timed area and it was dragged to a different time,
			// guarantee an end and adjust start/end to have times
			if (event.allDay && durationHasTime(delta)) {
				dropLocation = {
					start: event.start.clone(),
					end: calendar.getEventEnd(event), // will be an ambig day
					allDay: false // for normalizeEventTimes
				};
				calendar.normalizeEventTimes(dropLocation);
			}
			// othewise, work off existing values
			else {
				dropLocation = pluckEventDateProps(event);
			}

			dropLocation.start.add(delta);
			if (dropLocation.end) {
				dropLocation.end.add(delta);
			}
		}
		else {
			// if switching from day <-> timed, start should be reset to the dropped date, and the end cleared
			dropLocation = {
				start: dragEnd.clone(),
				end: null, // end should be cleared
				allDay: !dragEnd.hasTime()
			};
		}

		return dropLocation;
	},


	// Utility for apply dragOpacity to a jQuery set
	applyDragOpacity: function(els) {
		var opacity = this.view.opt('dragOpacity');

		if (opacity != null) {
			els.css('opacity', opacity);
		}
	},


	/* External Element Dragging
	------------------------------------------------------------------------------------------------------------------*/


	// Called when a jQuery UI drag is initiated anywhere in the DOM
	externalDragStart: function(ev, ui) {
		var view = this.view;
		var el;
		var accept;

		if (view.opt('droppable')) { // only listen if this setting is on
			el = $((ui ? ui.item : null) || ev.target);

			// Test that the dragged element passes the dropAccept selector or filter function.
			// FYI, the default is "*" (matches all)
			accept = view.opt('dropAccept');
			if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {
				if (!this.isDraggingExternal) { // prevent double-listening if fired twice
					this.listenToExternalDrag(el, ev, ui);
				}
			}
		}
	},


	// Called when a jQuery UI drag starts and it needs to be monitored for dropping
	listenToExternalDrag: function(el, ev, ui) {
		var _this = this;
		var calendar = this.view.calendar;
		var meta = getDraggedElMeta(el); // extra data about event drop, including possible event to create
		var dropLocation; // a null value signals an unsuccessful drag

		// listener that tracks mouse movement over date-associated pixel regions
		var dragListener = _this.externalDragListener = new HitDragListener(this, {
			interactionStart: function() {
				_this.isDraggingExternal = true;
			},
			hitOver: function(hit) {
				dropLocation = _this.computeExternalDrop(
					hit.component.getHitSpan(hit), // since we are querying the parent view, might not belong to this grid
					meta
				);

				if ( // invalid hit?
					dropLocation &&
					!calendar.isExternalSpanAllowed(_this.eventToSpan(dropLocation), dropLocation, meta.eventProps)
				) {
					disableCursor();
					dropLocation = null;
				}

				if (dropLocation) {
					_this.renderDrag(dropLocation); // called without a seg parameter
				}
			},
			hitOut: function() {
				dropLocation = null; // signal unsuccessful
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
				_this.unrenderDrag();
			},
			interactionEnd: function(ev) {
				if (dropLocation) { // element was dropped on a valid hit
					_this.view.reportExternalDrop(meta, dropLocation, el, ev, ui);
				}
				_this.isDraggingExternal = false;
				_this.externalDragListener = null;
			}
		});

		dragListener.startDrag(ev); // start listening immediately
	},


	// Given a hit to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
	// returns the zoned start/end dates for the event that would result from the hypothetical drop. end might be null.
	// Returning a null value signals an invalid drop hit.
	// DOES NOT consider overlap/constraint.
	computeExternalDrop: function(span, meta) {
		var calendar = this.view.calendar;
		var dropLocation = {
			start: calendar.applyTimezone(span.start), // simulate a zoned event start date
			end: null
		};

		// if dropped on an all-day span, and element's metadata specified a time, set it
		if (meta.startTime && !dropLocation.start.hasTime()) {
			dropLocation.start.time(meta.startTime);
		}

		if (meta.duration) {
			dropLocation.end = dropLocation.start.clone().add(meta.duration);
		}

		return dropLocation;
	},



	/* Drag Rendering (for both events and an external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event or external element being dragged.
	// `dropLocation` contains hypothetical start/end/allDay values the event would have if dropped. end can be null.
	// `seg` is the internal segment object that is being dragged. If dragging an external element, `seg` is null.
	// A truthy returned value indicates this method has rendered a helper element.
	// Must return elements used for any mock events.
	renderDrag: function(dropLocation, seg) {
		// subclasses must implement
	},


	// Unrenders a visual indication of an event or external element being dragged
	unrenderDrag: function() {
		// subclasses must implement
	},


	/* Resizing
	------------------------------------------------------------------------------------------------------------------*/


	// Creates a listener that tracks the user as they resize an event segment.
	// Generic enough to work with any type of Grid.
	buildSegResizeListener: function(seg, isStart) {
		var _this = this;
		var view = this.view;
		var calendar = view.calendar;
		var el = seg.el;
		var event = seg.event;
		var eventEnd = calendar.getEventEnd(event);
		var isDragging;
		var resizeLocation; // zoned event date properties. falsy if invalid resize

		// Tracks mouse movement over the *grid's* coordinate map
		var dragListener = this.segResizeListener = new HitDragListener(this, {
			scroll: view.opt('dragScroll'),
			subjectEl: el,
			interactionStart: function() {
				isDragging = false;
			},
			dragStart: function(ev) {
				isDragging = true;
				_this.handleSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
				_this.segResizeStart(seg, ev);
			},
			hitOver: function(hit, isOrig, origHit) {
				var origHitSpan = _this.getHitSpan(origHit);
				var hitSpan = _this.getHitSpan(hit);

				resizeLocation = isStart ?
					_this.computeEventStartResize(origHitSpan, hitSpan, event) :
					_this.computeEventEndResize(origHitSpan, hitSpan, event);

				if (resizeLocation) {
					if (!calendar.isEventSpanAllowed(_this.eventToSpan(resizeLocation), event)) {
						disableCursor();
						resizeLocation = null;
					}
					// no change? (FYI, event dates might have zones)
					else if (
						resizeLocation.start.isSame(event.start.clone().stripZone()) &&
						resizeLocation.end.isSame(eventEnd.clone().stripZone())
					) {
						resizeLocation = null;
					}
				}

				if (resizeLocation) {
					view.hideEvent(event);
					_this.renderEventResize(resizeLocation, seg);
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				resizeLocation = null;
			},
			hitDone: function() { // resets the rendering to show the original event
				_this.unrenderEventResize();
				view.showEvent(event);
				enableCursor();
			},
			interactionEnd: function(ev) {
				if (isDragging) {
					_this.segResizeStop(seg, ev);
				}
				if (resizeLocation) { // valid date to resize to?
					view.reportEventResize(event, resizeLocation, this.largeUnit, el, ev);
				}
				_this.segResizeListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment resizing starts
	segResizeStart: function(seg, ev) {
		this.isResizingSeg = true;
		this.view.trigger('eventResizeStart', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Called after event segment resizing stops
	segResizeStop: function(seg, ev) {
		this.isResizingSeg = false;
		this.view.trigger('eventResizeStop', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Returns new date-information for an event segment being resized from its start
	computeEventStartResize: function(startSpan, endSpan, event) {
		return this.computeEventResize('start', startSpan, endSpan, event);
	},


	// Returns new date-information for an event segment being resized from its end
	computeEventEndResize: function(startSpan, endSpan, event) {
		return this.computeEventResize('end', startSpan, endSpan, event);
	},


	// Returns new zoned date information for an event segment being resized from its start OR end
	// `type` is either 'start' or 'end'.
	// DOES NOT consider overlap/constraint.
	computeEventResize: function(type, startSpan, endSpan, event) {
		var calendar = this.view.calendar;
		var delta = this.diffDates(endSpan[type], startSpan[type]);
		var resizeLocation; // zoned event date properties
		var defaultDuration;

		// build original values to work from, guaranteeing a start and end
		resizeLocation = {
			start: event.start.clone(),
			end: calendar.getEventEnd(event),
			allDay: event.allDay
		};

		// if an all-day event was in a timed area and was resized to a time, adjust start/end to have times
		if (resizeLocation.allDay && durationHasTime(delta)) {
			resizeLocation.allDay = false;
			calendar.normalizeEventTimes(resizeLocation);
		}

		resizeLocation[type].add(delta); // apply delta to start or end

		// if the event was compressed too small, find a new reasonable duration for it
		if (!resizeLocation.start.isBefore(resizeLocation.end)) {

			defaultDuration =
				this.minResizeDuration || // TODO: hack
				(event.allDay ?
					calendar.defaultAllDayEventDuration :
					calendar.defaultTimedEventDuration);

			if (type == 'start') { // resizing the start?
				resizeLocation.start = resizeLocation.end.clone().subtract(defaultDuration);
			}
			else { // resizing the end?
				resizeLocation.end = resizeLocation.start.clone().add(defaultDuration);
			}
		}

		return resizeLocation;
	},


	// Renders a visual indication of an event being resized.
	// `range` has the updated dates of the event. `seg` is the original segment object involved in the drag.
	// Must return elements used for any mock events.
	renderEventResize: function(range, seg) {
		// subclasses must implement
	},


	// Unrenders a visual indication of an event being resized.
	unrenderEventResize: function() {
		// subclasses must implement
	},


	/* Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Compute the text that should be displayed on an event's element.
	// `range` can be the Event object itself, or something range-like, with at least a `start`.
	// If event times are disabled, or the event has no time, will return a blank string.
	// If not specified, formatStr will default to the eventTimeFormat setting,
	// and displayEnd will default to the displayEventEnd setting.
	getEventTimeText: function(range, formatStr, displayEnd) {

		if (formatStr == null) {
			formatStr = this.eventTimeFormat;
		}

		if (displayEnd == null) {
			displayEnd = this.displayEventEnd;
		}

		if (this.displayEventTime && range.start.hasTime()) {
			if (displayEnd && range.end) {
				return this.view.formatRange(range, formatStr);
			}
			else {
				return range.start.format(formatStr);
			}
		}

		return '';
	},


	// Generic utility for generating the HTML classNames for an event segment's element
	getSegClasses: function(seg, isDraggable, isResizable) {
		var view = this.view;
		var classes = [
			'fc-event',
			seg.isStart ? 'fc-start' : 'fc-not-start',
			seg.isEnd ? 'fc-end' : 'fc-not-end'
		].concat(this.getSegCustomClasses(seg));

		if (isDraggable) {
			classes.push('fc-draggable');
		}
		if (isResizable) {
			classes.push('fc-resizable');
		}

		// event is currently selected? attach a className.
		if (view.isEventSelected(seg.event)) {
			classes.push('fc-selected');
		}

		return classes;
	},


	// List of classes that were defined by the caller of the API in some way
	getSegCustomClasses: function(seg) {
		var event = seg.event;

		return [].concat(
			event.className, // guaranteed to be an array
			event.source ? event.source.className : []
		);
	},


	// Utility for generating event skin-related CSS properties
	getSegSkinCss: function(seg) {
		return {
			'background-color': this.getSegBackgroundColor(seg),
			'border-color': this.getSegBorderColor(seg),
			color: this.getSegTextColor(seg)
		};
	},


	// Queries for caller-specified color, then falls back to default
	getSegBackgroundColor: function(seg) {
		return seg.event.backgroundColor ||
			seg.event.color ||
			this.getSegDefaultBackgroundColor(seg);
	},


	getSegDefaultBackgroundColor: function(seg) {
		var source = seg.event.source || {};

		return source.backgroundColor ||
			source.color ||
			this.view.opt('eventBackgroundColor') ||
			this.view.opt('eventColor');
	},


	// Queries for caller-specified color, then falls back to default
	getSegBorderColor: function(seg) {
		return seg.event.borderColor ||
			seg.event.color ||
			this.getSegDefaultBorderColor(seg);
	},


	getSegDefaultBorderColor: function(seg) {
		var source = seg.event.source || {};

		return source.borderColor ||
			source.color ||
			this.view.opt('eventBorderColor') ||
			this.view.opt('eventColor');
	},


	// Queries for caller-specified color, then falls back to default
	getSegTextColor: function(seg) {
		return seg.event.textColor ||
			this.getSegDefaultTextColor(seg);
	},


	getSegDefaultTextColor: function(seg) {
		var source = seg.event.source || {};

		return source.textColor ||
			this.view.opt('eventTextColor');
	},


	/* Converting events -> eventRange -> eventSpan -> eventSegs
	------------------------------------------------------------------------------------------------------------------*/


	// Generates an array of segments for the given single event
	// Can accept an event "location" as well (which only has start/end and no allDay)
	eventToSegs: function(event) {
		return this.eventsToSegs([ event ]);
	},


	eventToSpan: function(event) {
		return this.eventToSpans(event)[0];
	},


	// Generates spans (always unzoned) for the given event.
	// Does not do any inverting for inverse-background events.
	// Can accept an event "location" as well (which only has start/end and no allDay)
	eventToSpans: function(event) {
		var range = this.eventToRange(event);
		return this.eventRangeToSpans(range, event);
	},



	// Converts an array of event objects into an array of event segment objects.
	// A custom `segSliceFunc` may be given for arbitrarily slicing up events.
	// Doesn't guarantee an order for the resulting array.
	eventsToSegs: function(allEvents, segSliceFunc) {
		var _this = this;
		var eventsById = groupEventsById(allEvents);
		var segs = [];

		$.each(eventsById, function(id, events) {
			var ranges = [];
			var i;

			for (i = 0; i < events.length; i++) {
				ranges.push(_this.eventToRange(events[i]));
			}

			// inverse-background events (utilize only the first event in calculations)
			if (isInverseBgEvent(events[0])) {
				ranges = _this.invertRanges(ranges);

				for (i = 0; i < ranges.length; i++) {
					segs.push.apply(segs, // append to
						_this.eventRangeToSegs(ranges[i], events[0], segSliceFunc));
				}
			}
			// normal event ranges
			else {
				for (i = 0; i < ranges.length; i++) {
					segs.push.apply(segs, // append to
						_this.eventRangeToSegs(ranges[i], events[i], segSliceFunc));
				}
			}
		});

		return segs;
	},


	// Generates the unzoned start/end dates an event appears to occupy
	// Can accept an event "location" as well (which only has start/end and no allDay)
	eventToRange: function(event) {
		var calendar = this.view.calendar;
		var start = event.start.clone().stripZone();
		var end = (
				event.end ?
					event.end.clone() :
					// derive the end from the start and allDay. compute allDay if necessary
					calendar.getDefaultEventEnd(
						event.allDay != null ?
							event.allDay :
							!event.start.hasTime(),
						event.start
					)
			).stripZone();

		// hack: dynamic locale change forgets to upate stored event localed
		calendar.localizeMoment(start);
		calendar.localizeMoment(end);

		return { start: start, end: end };
	},


	// Given an event's range (unzoned start/end), and the event itself,
	// slice into segments (using the segSliceFunc function if specified)
	eventRangeToSegs: function(range, event, segSliceFunc) {
		var spans = this.eventRangeToSpans(range, event);
		var segs = [];
		var i;

		for (i = 0; i < spans.length; i++) {
			segs.push.apply(segs, // append to
				this.eventSpanToSegs(spans[i], event, segSliceFunc));
		}

		return segs;
	},


	// Given an event's unzoned date range, return an array of "span" objects.
	// Subclasses can override.
	eventRangeToSpans: function(range, event) {
		return [ $.extend({}, range) ]; // copy into a single-item array
	},


	// Given an event's span (unzoned start/end and other misc data), and the event itself,
	// slices into segments and attaches event-derived properties to them.
	eventSpanToSegs: function(span, event, segSliceFunc) {
		var segs = segSliceFunc ? segSliceFunc(span) : this.spanToSegs(span);
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.event = event;
			seg.eventStartMS = +span.start; // TODO: not the best name after making spans unzoned
			seg.eventDurationMS = span.end - span.start;
		}

		return segs;
	},


	// Produces a new array of range objects that will cover all the time NOT covered by the given ranges.
	// SIDE EFFECT: will mutate the given array and will use its date references.
	invertRanges: function(ranges) {
		var view = this.view;
		var viewStart = view.start.clone(); // need a copy
		var viewEnd = view.end.clone(); // need a copy
		var inverseRanges = [];
		var start = viewStart; // the end of the previous range. the start of the new range
		var i, range;

		// ranges need to be in order. required for our date-walking algorithm
		ranges.sort(compareRanges);

		for (i = 0; i < ranges.length; i++) {
			range = ranges[i];

			// add the span of time before the event (if there is any)
			if (range.start > start) { // compare millisecond time (skip any ambig logic)
				inverseRanges.push({
					start: start,
					end: range.start
				});
			}

			start = range.end;
		}

		// add the span of time after the last event (if there is any)
		if (start < viewEnd) { // compare millisecond time (skip any ambig logic)
			inverseRanges.push({
				start: start,
				end: viewEnd
			});
		}

		return inverseRanges;
	},


	sortEventSegs: function(segs) {
		segs.sort(proxy(this, 'compareEventSegs'));
	},


	// A cmp function for determining which segments should take visual priority
	compareEventSegs: function(seg1, seg2) {
		return seg1.eventStartMS - seg2.eventStartMS || // earlier events go first
			seg2.eventDurationMS - seg1.eventDurationMS || // tie? longer events go first
			seg2.event.allDay - seg1.event.allDay || // tie? put all-day events first (booleans cast to 0/1)
			compareByFieldSpecs(seg1.event, seg2.event, this.view.eventOrderSpecs);
	}

});


/* Utilities
----------------------------------------------------------------------------------------------------------------------*/


function pluckEventDateProps(event) {
	return {
		start: event.start.clone(),
		end: event.end ? event.end.clone() : null,
		allDay: event.allDay // keep it the same
	};
}
FC.pluckEventDateProps = pluckEventDateProps;


function isBgEvent(event) { // returns true if background OR inverse-background
	var rendering = getEventRendering(event);
	return rendering === 'background' || rendering === 'inverse-background';
}
FC.isBgEvent = isBgEvent; // export


function isInverseBgEvent(event) {
	return getEventRendering(event) === 'inverse-background';
}


function getEventRendering(event) {
	return firstDefined((event.source || {}).rendering, event.rendering);
}


function groupEventsById(events) {
	var eventsById = {};
	var i, event;

	for (i = 0; i < events.length; i++) {
		event = events[i];
		(eventsById[event._id] || (eventsById[event._id] = [])).push(event);
	}

	return eventsById;
}


// A cmp function for determining which non-inverted "ranges" (see above) happen earlier
function compareRanges(range1, range2) {
	return range1.start - range2.start; // earlier ranges go first
}


/* External-Dragging-Element Data
----------------------------------------------------------------------------------------------------------------------*/

// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
FC.dataAttrPrefix = '';

// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
// to be used for Event Object creation.
// A defined `.eventProps`, even when empty, indicates that an event should be created.
function getDraggedElMeta(el) {
	var prefix = FC.dataAttrPrefix;
	var eventProps; // properties for creating the event, not related to date/time
	var startTime; // a Duration
	var duration;
	var stick;

	if (prefix) { prefix += '-'; }
	eventProps = el.data(prefix + 'event') || null;

	if (eventProps) {
		if (typeof eventProps === 'object') {
			eventProps = $.extend({}, eventProps); // make a copy
		}
		else { // something like 1 or true. still signal event creation
			eventProps = {};
		}

		// pluck special-cased date/time properties
		startTime = eventProps.start;
		if (startTime == null) { startTime = eventProps.time; } // accept 'time' as well
		duration = eventProps.duration;
		stick = eventProps.stick;
		delete eventProps.start;
		delete eventProps.time;
		delete eventProps.duration;
		delete eventProps.stick;
	}

	// fallback to standalone attribute values for each of the date/time properties
	if (startTime == null) { startTime = el.data(prefix + 'start'); }
	if (startTime == null) { startTime = el.data(prefix + 'time'); } // accept 'time' as well
	if (duration == null) { duration = el.data(prefix + 'duration'); }
	if (stick == null) { stick = el.data(prefix + 'stick'); }

	// massage into correct data types
	startTime = startTime != null ? moment.duration(startTime) : null;
	duration = duration != null ? moment.duration(duration) : null;
	stick = Boolean(stick);

	return { eventProps: eventProps, startTime: startTime, duration: duration, stick: stick };
}


;;

/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin = FC.DayTableMixin = {

	breakOnWeeks: false, // should create a new row for each week?
	dayDates: null, // whole-day dates for each column. left to right
	dayIndices: null, // for each day from start, the offset
	daysPerRow: null,
	rowCnt: null,
	colCnt: null,
	colHeadFormat: null,


	// Populates internal variables used for date calculation and rendering
	updateDayTable: function() {
		var view = this.view;
		var date = this.start.clone();
		var dayIndex = -1;
		var dayIndices = [];
		var dayDates = [];
		var daysPerRow;
		var firstDay;
		var rowCnt;

		while (date.isBefore(this.end)) { // loop each day from start to end
			if (view.isHiddenDay(date)) {
				dayIndices.push(dayIndex + 0.5); // mark that it's between indices
			}
			else {
				dayIndex++;
				dayIndices.push(dayIndex);
				dayDates.push(date.clone());
			}
			date.add(1, 'days');
		}

		if (this.breakOnWeeks) {
			// count columns until the day-of-week repeats
			firstDay = dayDates[0].day();
			for (daysPerRow = 1; daysPerRow < dayDates.length; daysPerRow++) {
				if (dayDates[daysPerRow].day() == firstDay) {
					break;
				}
			}
			rowCnt = Math.ceil(dayDates.length / daysPerRow);
		}
		else {
			rowCnt = 1;
			daysPerRow = dayDates.length;
		}

		this.dayDates = dayDates;
		this.dayIndices = dayIndices;
		this.daysPerRow = daysPerRow;
		this.rowCnt = rowCnt;
		
		this.updateDayTableCols();
	},


	// Computes and assigned the colCnt property and updates any options that may be computed from it
	updateDayTableCols: function() {
		this.colCnt = this.computeColCnt();
		this.colHeadFormat = this.view.opt('columnFormat') || this.computeColHeadFormat();
	},


	// Determines how many columns there should be in the table
	computeColCnt: function() {
		return this.daysPerRow;
	},


	// Computes the ambiguously-timed moment for the given cell
	getCellDate: function(row, col) {
		return this.dayDates[
				this.getCellDayIndex(row, col)
			].clone();
	},


	// Computes the ambiguously-timed date range for the given cell
	getCellRange: function(row, col) {
		var start = this.getCellDate(row, col);
		var end = start.clone().add(1, 'days');

		return { start: start, end: end };
	},


	// Returns the number of day cells, chronologically, from the first of the grid (0-based)
	getCellDayIndex: function(row, col) {
		return row * this.daysPerRow + this.getColDayIndex(col);
	},


	// Returns the numner of day cells, chronologically, from the first cell in *any given row*
	getColDayIndex: function(col) {
		if (this.isRTL) {
			return this.colCnt - 1 - col;
		}
		else {
			return col;
		}
	},


	// Given a date, returns its chronolocial cell-index from the first cell of the grid.
	// If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
	// If before the first offset, returns a negative number.
	// If after the last offset, returns an offset past the last cell offset.
	// Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
	getDateDayIndex: function(date) {
		var dayIndices = this.dayIndices;
		var dayOffset = date.diff(this.start, 'days');

		if (dayOffset < 0) {
			return dayIndices[0] - 1;
		}
		else if (dayOffset >= dayIndices.length) {
			return dayIndices[dayIndices.length - 1] + 1;
		}
		else {
			return dayIndices[dayOffset];
		}
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Computes a default column header formatting string if `colFormat` is not explicitly defined
	computeColHeadFormat: function() {
		// if more than one week row, or if there are a lot of columns with not much space,
		// put just the day numbers will be in each cell
		if (this.rowCnt > 1 || this.colCnt > 10) {
			return 'ddd'; // "Sat"
		}
		// multiple days, so full single date string WON'T be in title text
		else if (this.colCnt > 1) {
			return this.view.opt('dayOfMonthFormat'); // "Sat 12/10"
		}
		// single day, so full single date string will probably be in title text
		else {
			return 'dddd'; // "Saturday"
		}
	},


	/* Slicing
	------------------------------------------------------------------------------------------------------------------*/


	// Slices up a date range into a segment for every week-row it intersects with
	sliceRangeByRow: function(range) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(range); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			// intersect segment's offset range with the row's
			segFirst = Math.max(rangeFirst, rowFirst);
			segLast = Math.min(rangeLast, rowLast);

			// deal with in-between indices
			segFirst = Math.ceil(segFirst); // in-between starts round to next cell
			segLast = Math.floor(segLast); // in-between ends round to prev cell

			if (segFirst <= segLast) { // was there any intersection with the current row?
				segs.push({
					row: row,

					// normalize to start of row
					firstRowDayIndex: segFirst - rowFirst,
					lastRowDayIndex: segLast - rowFirst,

					// must be matching integers to be the segment's start/end
					isStart: segFirst === rangeFirst,
					isEnd: segLast === rangeLast
				});
			}
		}

		return segs;
	},


	// Slices up a date range into a segment for every day-cell it intersects with.
	// TODO: make more DRY with sliceRangeByRow somehow.
	sliceRangeByDay: function(range) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(range); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var i;
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			for (i = rowFirst; i <= rowLast; i++) {

				// intersect segment's offset range with the row's
				segFirst = Math.max(rangeFirst, i);
				segLast = Math.min(rangeLast, i);

				// deal with in-between indices
				segFirst = Math.ceil(segFirst); // in-between starts round to next cell
				segLast = Math.floor(segLast); // in-between ends round to prev cell

				if (segFirst <= segLast) { // was there any intersection with the current row?
					segs.push({
						row: row,

						// normalize to start of row
						firstRowDayIndex: segFirst - rowFirst,
						lastRowDayIndex: segLast - rowFirst,

						// must be matching integers to be the segment's start/end
						isStart: segFirst === rangeFirst,
						isEnd: segLast === rangeLast
					});
				}
			}
		}

		return segs;
	},


	/* Header Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderHeadHtml: function() {
		var view = this.view;

		return '' +
			'<div class="fc-row ' + view.widgetHeaderClass + '">' +
				'<table>' +
					'<thead>' +
						this.renderHeadTrHtml() +
					'</thead>' +
				'</table>' +
			'</div>';
	},


	renderHeadIntroHtml: function() {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderHeadTrHtml: function() {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderHeadIntroHtml()) +
				this.renderHeadDateCellsHtml() +
				(this.isRTL ? this.renderHeadIntroHtml() : '') +
			'</tr>';
	},


	renderHeadDateCellsHtml: function() {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(0, col);
			htmls.push(this.renderHeadDateCellHtml(date));
		}

		return htmls.join('');
	},


	// TODO: when internalApiVersion, accept an object for HTML attributes
	// (colspan should be no different)
	renderHeadDateCellHtml: function(date, colspan, otherAttrs) {
		var view = this.view;

		return '' +
			'<th class="fc-day-header ' + view.widgetHeaderClass + ' fc-' + dayIDs[date.day()] + '"' +
				(this.rowCnt === 1 ?
					' data-date="' + date.format('YYYY-MM-DD') + '"' :
					'') +
				(colspan > 1 ?
					' colspan="' + colspan + '"' :
					'') +
				(otherAttrs ?
					' ' + otherAttrs :
					'') +
				'>' +
				// don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
				view.buildGotoAnchorHtml(
					{ date: date, forceOff: this.rowCnt > 1 || this.colCnt === 1 },
					htmlEscape(date.format(this.colHeadFormat)) // inner HTML
				) +
			'</th>';
	},


	/* Background Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderBgTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderBgIntroHtml(row)) +
				this.renderBgCellsHtml(row) +
				(this.isRTL ? this.renderBgIntroHtml(row) : '') +
			'</tr>';
	},


	renderBgIntroHtml: function(row) {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderBgCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderBgCellHtml(date));
		}

		return htmls.join('');
	},


	renderBgCellHtml: function(date, otherAttrs) {
		var view = this.view;
		var classes = this.getDayClasses(date);

		classes.unshift('fc-day', view.widgetContentClass);

		return '<td class="' + classes.join(' ') + '"' +
			' data-date="' + date.format('YYYY-MM-DD') + '"' + // if date has a time, won't format it
			(otherAttrs ?
				' ' + otherAttrs :
				'') +
			'></td>';
	},


	/* Generic
	------------------------------------------------------------------------------------------------------------------*/


	// Generates the default HTML intro for any row. User classes should override
	renderIntroHtml: function() {
	},


	// TODO: a generic method for dealing with <tr>, RTL, intro
	// when increment internalApiVersion
	// wrapTr (scheduler)


	/* Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Applies the generic "intro" and "outro" HTML to the given cells.
	// Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
	bookendCells: function(trEl) {
		var introHtml = this.renderIntroHtml();

		if (introHtml) {
			if (this.isRTL) {
				trEl.append(introHtml);
			}
			else {
				trEl.prepend(introHtml);
			}
		}
	}

};

;;

/* A component that renders a grid of whole-days that runs horizontally. There can be multiple rows, one per week.
----------------------------------------------------------------------------------------------------------------------*/

var DayGrid = FC.DayGrid = Grid.extend(DayTableMixin, {

	numbersVisible: false, // should render a row for day/week numbers? set by outside view. TODO: make internal
	bottomCoordPadding: 0, // hack for extending the hit area for the last row of the coordinate grid

	rowEls: null, // set of fake row elements
	cellEls: null, // set of whole-day elements comprising the row's background
	helperEls: null, // set of cell skeleton elements for rendering the mock event "helper"

	rowCoordCache: null,
	colCoordCache: null,


	// Renders the rows and columns into the component's `this.el`, which should already be assigned.
	// isRigid determins whether the individual rows should ignore the contents and be a constant height.
	// Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
	renderDates: function(isRigid) {
		var view = this.view;
		var rowCnt = this.rowCnt;
		var colCnt = this.colCnt;
		var html = '';
		var row;
		var col;

		for (row = 0; row < rowCnt; row++) {
			html += this.renderDayRowHtml(row, isRigid);
		}
		this.el.html(html);

		this.rowEls = this.el.find('.fc-row');
		this.cellEls = this.el.find('.fc-day');

		this.rowCoordCache = new CoordCache({
			els: this.rowEls,
			isVertical: true
		});
		this.colCoordCache = new CoordCache({
			els: this.cellEls.slice(0, this.colCnt), // only the first row
			isHorizontal: true
		});

		// trigger dayRender with each cell's element
		for (row = 0; row < rowCnt; row++) {
			for (col = 0; col < colCnt; col++) {
				view.trigger(
					'dayRender',
					null,
					this.getCellDate(row, col),
					this.getCellEl(row, col)
				);
			}
		}
	},


	unrenderDates: function() {
		this.removeSegPopover();
	},


	renderBusinessHours: function() {
		var segs = this.buildBusinessHourSegs(true); // wholeDay=true
		this.renderFill('businessHours', segs, 'bgevent');
	},


	unrenderBusinessHours: function() {
		this.unrenderFill('businessHours');
	},


	// Generates the HTML for a single row, which is a div that wraps a table.
	// `row` is the row number.
	renderDayRowHtml: function(row, isRigid) {
		var view = this.view;
		var classes = [ 'fc-row', 'fc-week', view.widgetContentClass ];

		if (isRigid) {
			classes.push('fc-rigid');
		}

		return '' +
			'<div class="' + classes.join(' ') + '">' +
				'<div class="fc-bg">' +
					'<table>' +
						this.renderBgTrHtml(row) +
					'</table>' +
				'</div>' +
				'<div class="fc-content-skeleton">' +
					'<table>' +
						(this.numbersVisible ?
							'<thead>' +
								this.renderNumberTrHtml(row) +
							'</thead>' :
							''
							) +
					'</table>' +
				'</div>' +
			'</div>';
	},


	/* Grid Number Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderNumberTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderNumberIntroHtml(row)) +
				this.renderNumberCellsHtml(row) +
				(this.isRTL ? this.renderNumberIntroHtml(row) : '') +
			'</tr>';
	},


	renderNumberIntroHtml: function(row) {
		return this.renderIntroHtml();
	},


	renderNumberCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderNumberCellHtml(date));
		}

		return htmls.join('');
	},


	// Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
	// The number row will only exist if either day numbers or week numbers are turned on.
	renderNumberCellHtml: function(date) {
		var html = '';
		var classes;
		var weekCalcFirstDoW;

		if (!this.view.dayNumbersVisible && !this.view.cellWeekNumbersVisible) {
			// no numbers in day cell (week number must be along the side)
			return '<td/>'; //  will create an empty space above events :(
		}

		classes = this.getDayClasses(date);
		classes.unshift('fc-day-top');

		if (this.view.cellWeekNumbersVisible) {
			// To determine the day of week number change under ISO, we cannot
			// rely on moment.js methods such as firstDayOfWeek() or weekday(),
			// because they rely on the locale's dow (possibly overridden by
			// our firstDay option), which may not be Monday. We cannot change
			// dow, because that would affect the calendar start day as well.
			if (date._locale._fullCalendar_weekCalc === 'ISO') {
				weekCalcFirstDoW = 1;  // Monday by ISO 8601 definition
			}
			else {
				weekCalcFirstDoW = date._locale.firstDayOfWeek();
			}
		}

		html += '<td class="' + classes.join(' ') + '" data-date="' + date.format() + '">';

		if (this.view.cellWeekNumbersVisible && (date.day() == weekCalcFirstDoW)) {
			html += this.view.buildGotoAnchorHtml(
				{ date: date, type: 'week' },
				{ 'class': 'fc-week-number' },
				date.format('w') // inner HTML
			);
		}

		if (this.view.dayNumbersVisible) {
			html += this.view.buildGotoAnchorHtml(
				date,
				{ 'class': 'fc-day-number' },
				date.date() // inner HTML
			);
		}

		html += '</td>';

		return html;
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.view.opt('extraSmallTimeFormat'); // like "6p" or "6:30p"
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return this.colCnt == 1; // we'll likely have space if there's only one day
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	rangeUpdated: function() {
		this.updateDayTable();
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	spanToSegs: function(span) {
		var segs = this.sliceRangeByRow(span);
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			if (this.isRTL) {
				seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
				seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
			}
			else {
				seg.leftCol = seg.firstRowDayIndex;
				seg.rightCol = seg.lastRowDayIndex;
			}
		}

		return segs;
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.rowCoordCache.build();
		this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		this.rowCoordCache.clear();
	},


	queryHit: function(leftOffset, topOffset) {
		if (this.colCoordCache.isLeftInBounds(leftOffset) && this.rowCoordCache.isTopInBounds(topOffset)) {
			var col = this.colCoordCache.getHorizontalIndex(leftOffset);
			var row = this.rowCoordCache.getVerticalIndex(topOffset);

			if (row != null && col != null) {
				return this.getCellHit(row, col);
			}
		}
	},


	getHitSpan: function(hit) {
		return this.getCellRange(hit.row, hit.col);
	},


	getHitEl: function(hit) {
		return this.getCellEl(hit.row, hit.col);
	},


	/* Cell System
	------------------------------------------------------------------------------------------------------------------*/
	// FYI: the first column is the leftmost column, regardless of date


	getCellHit: function(row, col) {
		return {
			row: row,
			col: col,
			component: this, // needed unfortunately :(
			left: this.colCoordCache.getLeftOffset(col),
			right: this.colCoordCache.getRightOffset(col),
			top: this.rowCoordCache.getTopOffset(row),
			bottom: this.rowCoordCache.getBottomOffset(row)
		};
	},


	getCellEl: function(row, col) {
		return this.cellEls.eq(row * this.colCnt + col);
	},


	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move to DayGrid.event, similar to what we did with Grid's drag methods


	// Renders a visual indication of an event or external element being dragged.
	// `eventLocation` has zoned start and end (optional)
	renderDrag: function(eventLocation, seg) {

		// always render a highlight underneath
		this.renderHighlight(this.eventToSpan(eventLocation));

		// if a segment from the same calendar but another component is being dragged, render a helper event
		if (seg && seg.component !== this) {
			return this.renderEventLocationHelper(eventLocation, seg); // returns mock event elements
		}
	},


	// Unrenders any visual indication of a hovering event
	unrenderDrag: function() {
		this.unrenderHighlight();
		this.unrenderHelper();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventLocation, seg) {
		this.renderHighlight(this.eventToSpan(eventLocation));
		return this.renderEventLocationHelper(eventLocation, seg); // returns mock event elements
	},


	// Unrenders a visual indication of an event being resized
	unrenderEventResize: function() {
		this.unrenderHighlight();
		this.unrenderHelper();
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
	renderHelper: function(event, sourceSeg) {
		var helperNodes = [];
		var segs = this.eventToSegs(event);
		var rowStructs;

		segs = this.renderFgSegEls(segs); // assigns each seg's el and returns a subset of segs that were rendered
		rowStructs = this.renderSegRows(segs);

		// inject each new event skeleton into each associated row
		this.rowEls.each(function(row, rowNode) {
			var rowEl = $(rowNode); // the .fc-row
			var skeletonEl = $('<div class="fc-helper-skeleton"><table/></div>'); // will be absolutely positioned
			var skeletonTop;

			// If there is an original segment, match the top position. Otherwise, put it at the row's top level
			if (sourceSeg && sourceSeg.row === row) {
				skeletonTop = sourceSeg.el.position().top;
			}
			else {
				skeletonTop = rowEl.find('.fc-content-skeleton tbody').position().top;
			}

			skeletonEl.css('top', skeletonTop)
				.find('table')
					.append(rowStructs[row].tbodyEl);

			rowEl.append(skeletonEl);
			helperNodes.push(skeletonEl[0]);
		});

		return ( // must return the elements rendered
			this.helperEls = $(helperNodes) // array -> jQuery set
		);
	},


	// Unrenders any visual indication of a mock helper event
	unrenderHelper: function() {
		if (this.helperEls) {
			this.helperEls.remove();
			this.helperEls = null;
		}
	},


	/* Fill System (highlight, background events, business hours)
	------------------------------------------------------------------------------------------------------------------*/


	fillSegTag: 'td', // override the default tag name


	// Renders a set of rectangles over the given segments of days.
	// Only returns segments that successfully rendered.
	renderFill: function(type, segs, className) {
		var nodes = [];
		var i, seg;
		var skeletonEl;

		segs = this.renderFillSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			skeletonEl = this.renderFillRow(type, seg, className);
			this.rowEls.eq(seg.row).append(skeletonEl);
			nodes.push(skeletonEl[0]);
		}

		this.elsByFill[type] = $(nodes);

		return segs;
	},


	// Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
	renderFillRow: function(type, seg, className) {
		var colCnt = this.colCnt;
		var startCol = seg.leftCol;
		var endCol = seg.rightCol + 1;
		var skeletonEl;
		var trEl;

		className = className || type.toLowerCase();

		skeletonEl = $(
			'<div class="fc-' + className + '-skeleton">' +
				'<table><tr/></table>' +
			'</div>'
		);
		trEl = skeletonEl.find('tr');

		if (startCol > 0) {
			trEl.append('<td colspan="' + startCol + '"/>');
		}

		trEl.append(
			seg.el.attr('colspan', endCol - startCol)
		);

		if (endCol < colCnt) {
			trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
		}

		this.bookendCells(trEl);

		return skeletonEl;
	}

});

;;

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/

DayGrid.mixin({

	rowStructs: null, // an array of objects, each holding information about a row's foreground event-rendering


	// Unrenders all events currently rendered on the grid
	unrenderEvents: function() {
		this.removeSegPopover(); // removes the "more.." events popover
		Grid.prototype.unrenderEvents.apply(this, arguments); // calls the super-method
	},


	// Retrieves all rendered segment objects currently rendered on the grid
	getEventSegs: function() {
		return Grid.prototype.getEventSegs.call(this) // get the segments from the super-method
			.concat(this.popoverSegs || []); // append the segments from the "more..." popover
	},


	// Renders the given background event segments onto the grid
	renderBgSegs: function(segs) {

		// don't render timed background events
		var allDaySegs = $.grep(segs, function(seg) {
			return seg.event.allDay;
		});

		return Grid.prototype.renderBgSegs.call(this, allDaySegs); // call the super-method
	},


	// Renders the given foreground event segments onto the grid
	renderFgSegs: function(segs) {
		var rowStructs;

		// render an `.el` on each seg
		// returns a subset of the segs. segs that were actually rendered
		segs = this.renderFgSegEls(segs);

		rowStructs = this.rowStructs = this.renderSegRows(segs);

		// append to each row's content skeleton
		this.rowEls.each(function(i, rowNode) {
			$(rowNode).find('.fc-content-skeleton > table').append(
				rowStructs[i].tbodyEl
			);
		});

		return segs; // return only the segs that were actually rendered
	},


	// Unrenders all currently rendered foreground event segments
	unrenderFgSegs: function() {
		var rowStructs = this.rowStructs || [];
		var rowStruct;

		while ((rowStruct = rowStructs.pop())) {
			rowStruct.tbodyEl.remove();
		}

		this.rowStructs = null;
	},


	// Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
	// Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
	// PRECONDITION: each segment shoud already have a rendered and assigned `.el`
	renderSegRows: function(segs) {
		var rowStructs = [];
		var segRows;
		var row;

		segRows = this.groupSegRows(segs); // group into nested arrays

		// iterate each row of segment groupings
		for (row = 0; row < segRows.length; row++) {
			rowStructs.push(
				this.renderSegRow(row, segRows[row])
			);
		}

		return rowStructs;
	},


	// Builds the HTML to be used for the default element for an individual segment
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var event = seg.event;
		var isDraggable = view.isEventDraggable(event);
		var isResizableFromStart = !disableResizing && event.allDay &&
			seg.isStart && view.isEventResizableFromStart(event);
		var isResizableFromEnd = !disableResizing && event.allDay &&
			seg.isEnd && view.isEventResizableFromEnd(event);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSegSkinCss(seg));
		var timeHtml = '';
		var timeText;
		var titleHtml;

		classes.unshift('fc-day-grid-event', 'fc-h-event');

		// Only display a timed events time if it is the starting segment
		if (seg.isStart) {
			timeText = this.getEventTimeText(event);
			if (timeText) {
				timeHtml = '<span class="fc-time">' + htmlEscape(timeText) + '</span>';
			}
		}

		titleHtml =
			'<span class="fc-title">' +
				(htmlEscape(event.title || '') || '&nbsp;') + // we always want one line of height
			'</span>';
		
		return '<a class="' + classes.join(' ') + '"' +
				(event.url ?
					' href="' + htmlEscape(event.url) + '"' :
					''
					) +
				(skinCss ?
					' style="' + skinCss + '"' :
					''
					) +
			'>' +
				'<div class="fc-content">' +
					(this.isRTL ?
						titleHtml + ' ' + timeHtml : // put a natural space in between
						timeHtml + ' ' + titleHtml   //
						) +
				'</div>' +
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	},


	// Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
	// the segments. Returns object with a bunch of internal data about how the render was calculated.
	// NOTE: modifies rowSegs
	renderSegRow: function(row, rowSegs) {
		var colCnt = this.colCnt;
		var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
		var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
		var tbody = $('<tbody/>');
		var segMatrix = []; // lookup for which segments are rendered into which level+col cells
		var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
		var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
		var i, levelSegs;
		var col;
		var tr;
		var j, seg;
		var td;

		// populates empty cells from the current column (`col`) to `endCol`
		function emptyCellsUntil(endCol) {
			while (col < endCol) {
				// try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
				td = (loneCellMatrix[i - 1] || [])[col];
				if (td) {
					td.attr(
						'rowspan',
						parseInt(td.attr('rowspan') || 1, 10) + 1
					);
				}
				else {
					td = $('<td/>');
					tr.append(td);
				}
				cellMatrix[i][col] = td;
				loneCellMatrix[i][col] = td;
				col++;
			}
		}

		for (i = 0; i < levelCnt; i++) { // iterate through all levels
			levelSegs = segLevels[i];
			col = 0;
			tr = $('<tr/>');

			segMatrix.push([]);
			cellMatrix.push([]);
			loneCellMatrix.push([]);

			// levelCnt might be 1 even though there are no actual levels. protect against this.
			// this single empty row is useful for styling.
			if (levelSegs) {
				for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
					seg = levelSegs[j];

					emptyCellsUntil(seg.leftCol);

					// create a container that occupies or more columns. append the event element.
					td = $('<td class="fc-event-container"/>').append(seg.el);
					if (seg.leftCol != seg.rightCol) {
						td.attr('colspan', seg.rightCol - seg.leftCol + 1);
					}
					else { // a single-column segment
						loneCellMatrix[i][col] = td;
					}

					while (col <= seg.rightCol) {
						cellMatrix[i][col] = td;
						segMatrix[i][col] = seg;
						col++;
					}

					tr.append(td);
				}
			}

			emptyCellsUntil(colCnt); // finish off the row
			this.bookendCells(tr);
			tbody.append(tr);
		}

		return { // a "rowStruct"
			row: row, // the row number
			tbodyEl: tbody,
			cellMatrix: cellMatrix,
			segMatrix: segMatrix,
			segLevels: segLevels,
			segs: rowSegs
		};
	},


	// Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
	// NOTE: modifies segs
	buildSegLevels: function(segs) {
		var levels = [];
		var i, seg;
		var j;

		// Give preference to elements with certain criteria, so they have
		// a chance to be closer to the top.
		this.sortEventSegs(segs);
		
		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			// loop through levels, starting with the topmost, until the segment doesn't collide with other segments
			for (j = 0; j < levels.length; j++) {
				if (!isDaySegCollision(seg, levels[j])) {
					break;
				}
			}
			// `j` now holds the desired subrow index
			seg.level = j;

			// create new level array if needed and append segment
			(levels[j] || (levels[j] = [])).push(seg);
		}

		// order segments left-to-right. very important if calendar is RTL
		for (j = 0; j < levels.length; j++) {
			levels[j].sort(compareDaySegCols);
		}

		return levels;
	},


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
	groupSegRows: function(segs) {
		var segRows = [];
		var i;

		for (i = 0; i < this.rowCnt; i++) {
			segRows.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segRows[segs[i].row].push(segs[i]);
		}

		return segRows;
	}

});


// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
	var i, otherSeg;

	for (i = 0; i < otherSegs.length; i++) {
		otherSeg = otherSegs[i];

		if (
			otherSeg.leftCol <= seg.rightCol &&
			otherSeg.rightCol >= seg.leftCol
		) {
			return true;
		}
	}

	return false;
}


// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
	return a.leftCol - b.leftCol;
}

;;

/* Methods relate to limiting the number events for a given day on a DayGrid
----------------------------------------------------------------------------------------------------------------------*/
// NOTE: all the segs being passed around in here are foreground segs

DayGrid.mixin({

	segPopover: null, // the Popover that holds events that can't fit in a cell. null when not visible
	popoverSegs: null, // an array of segment objects that the segPopover holds. null when not visible


	removeSegPopover: function() {
		if (this.segPopover) {
			this.segPopover.hide(); // in handler, will call segPopover's removeElement
		}
	},


	// Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
	// `levelLimit` can be false (don't limit), a number, or true (should be computed).
	limitRows: function(levelLimit) {
		var rowStructs = this.rowStructs || [];
		var row; // row #
		var rowLevelLimit;

		for (row = 0; row < rowStructs.length; row++) {
			this.unlimitRow(row);

			if (!levelLimit) {
				rowLevelLimit = false;
			}
			else if (typeof levelLimit === 'number') {
				rowLevelLimit = levelLimit;
			}
			else {
				rowLevelLimit = this.computeRowLevelLimit(row);
			}

			if (rowLevelLimit !== false) {
				this.limitRow(row, rowLevelLimit);
			}
		}
	},


	// Computes the number of levels a row will accomodate without going outside its bounds.
	// Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
	// `row` is the row number.
	computeRowLevelLimit: function(row) {
		var rowEl = this.rowEls.eq(row); // the containing "fake" row div
		var rowHeight = rowEl.height(); // TODO: cache somehow?
		var trEls = this.rowStructs[row].tbodyEl.children();
		var i, trEl;
		var trHeight;

		function iterInnerHeights(i, childNode) {
			trHeight = Math.max(trHeight, $(childNode).outerHeight());
		}

		// Reveal one level <tr> at a time and stop when we find one out of bounds
		for (i = 0; i < trEls.length; i++) {
			trEl = trEls.eq(i).removeClass('fc-limited'); // reset to original state (reveal)

			// with rowspans>1 and IE8, trEl.outerHeight() would return the height of the largest cell,
			// so instead, find the tallest inner content element.
			trHeight = 0;
			trEl.find('> td > :first-child').each(iterInnerHeights);

			if (trEl.position().top + trHeight > rowHeight) {
				return i;
			}
		}

		return false; // should not limit at all
	},


	// Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
	// `row` is the row number.
	// `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
	limitRow: function(row, levelLimit) {
		var _this = this;
		var rowStruct = this.rowStructs[row];
		var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
		var col = 0; // col #, left-to-right (not chronologically)
		var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
		var cellMatrix; // a matrix (by level, then column) of all <td> jQuery elements in the row
		var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
		var i, seg;
		var segsBelow; // array of segment objects below `seg` in the current `col`
		var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
		var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
		var td, rowspan;
		var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
		var j;
		var moreTd, moreWrap, moreLink;

		// Iterates through empty level cells and places "more" links inside if need be
		function emptyCellsUntil(endCol) { // goes from current `col` to `endCol`
			while (col < endCol) {
				segsBelow = _this.getCellSegs(row, col, levelLimit);
				if (segsBelow.length) {
					td = cellMatrix[levelLimit - 1][col];
					moreLink = _this.renderMoreLink(row, col, segsBelow);
					moreWrap = $('<div/>').append(moreLink);
					td.append(moreWrap);
					moreNodes.push(moreWrap[0]);
				}
				col++;
			}
		}

		if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
			levelSegs = rowStruct.segLevels[levelLimit - 1];
			cellMatrix = rowStruct.cellMatrix;

			limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit) // get level <tr> elements past the limit
				.addClass('fc-limited').get(); // hide elements and get a simple DOM-nodes array

			// iterate though segments in the last allowable level
			for (i = 0; i < levelSegs.length; i++) {
				seg = levelSegs[i];
				emptyCellsUntil(seg.leftCol); // process empty cells before the segment

				// determine *all* segments below `seg` that occupy the same columns
				colSegsBelow = [];
				totalSegsBelow = 0;
				while (col <= seg.rightCol) {
					segsBelow = this.getCellSegs(row, col, levelLimit);
					colSegsBelow.push(segsBelow);
					totalSegsBelow += segsBelow.length;
					col++;
				}

				if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
					td = cellMatrix[levelLimit - 1][seg.leftCol]; // the segment's parent cell
					rowspan = td.attr('rowspan') || 1;
					segMoreNodes = [];

					// make a replacement <td> for each column the segment occupies. will be one for each colspan
					for (j = 0; j < colSegsBelow.length; j++) {
						moreTd = $('<td class="fc-more-cell"/>').attr('rowspan', rowspan);
						segsBelow = colSegsBelow[j];
						moreLink = this.renderMoreLink(
							row,
							seg.leftCol + j,
							[ seg ].concat(segsBelow) // count seg as hidden too
						);
						moreWrap = $('<div/>').append(moreLink);
						moreTd.append(moreWrap);
						segMoreNodes.push(moreTd[0]);
						moreNodes.push(moreTd[0]);
					}

					td.addClass('fc-limited').after($(segMoreNodes)); // hide original <td> and inject replacements
					limitedNodes.push(td[0]);
				}
			}

			emptyCellsUntil(this.colCnt); // finish off the level
			rowStruct.moreEls = $(moreNodes); // for easy undoing later
			rowStruct.limitedEls = $(limitedNodes); // for easy undoing later
		}
	},


	// Reveals all levels and removes all "more"-related elements for a grid's row.
	// `row` is a row number.
	unlimitRow: function(row) {
		var rowStruct = this.rowStructs[row];

		if (rowStruct.moreEls) {
			rowStruct.moreEls.remove();
			rowStruct.moreEls = null;
		}

		if (rowStruct.limitedEls) {
			rowStruct.limitedEls.removeClass('fc-limited');
			rowStruct.limitedEls = null;
		}
	},


	// Renders an <a> element that represents hidden event element for a cell.
	// Responsible for attaching click handler as well.
	renderMoreLink: function(row, col, hiddenSegs) {
		var _this = this;
		var view = this.view;

		return $('<a class="fc-more"/>')
			.text(
				this.getMoreLinkText(hiddenSegs.length)
			)
			.on('click', function(ev) {
				var clickOption = view.opt('eventLimitClick');
				var date = _this.getCellDate(row, col);
				var moreEl = $(this);
				var dayEl = _this.getCellEl(row, col);
				var allSegs = _this.getCellSegs(row, col);

				// rescope the segments to be within the cell's date
				var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
				var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);

				if (typeof clickOption === 'function') {
					// the returned value can be an atomic option
					clickOption = view.trigger('eventLimitClick', null, {
						date: date,
						dayEl: dayEl,
						moreEl: moreEl,
						segs: reslicedAllSegs,
						hiddenSegs: reslicedHiddenSegs
					}, ev);
				}

				if (clickOption === 'popover') {
					_this.showSegPopover(row, col, moreEl, reslicedAllSegs);
				}
				else if (typeof clickOption === 'string') { // a view name
					view.calendar.zoomTo(date, clickOption);
				}
			});
	},


	// Reveals the popover that displays all events within a cell
	showSegPopover: function(row, col, moreLink, segs) {
		var _this = this;
		var view = this.view;
		var moreWrap = moreLink.parent(); // the <div> wrapper around the <a>
		var topEl; // the element we want to match the top coordinate of
		var options;

		if (this.rowCnt == 1) {
			topEl = view.el; // will cause the popover to cover any sort of header
		}
		else {
			topEl = this.rowEls.eq(row); // will align with top of row
		}

		options = {
			className: 'fc-more-popover',
			content: this.renderSegPopoverContent(row, col, segs),
			parentEl: this.view.el, // attach to root of view. guarantees outside of scrollbars.
			top: topEl.offset().top,
			autoHide: true, // when the user clicks elsewhere, hide the popover
			viewportConstrain: view.opt('popoverViewportConstrain'),
			hide: function() {
				// kill everything when the popover is hidden
				_this.segPopover.removeElement();
				_this.segPopover = null;
				_this.popoverSegs = null;
			}
		};

		// Determine horizontal coordinate.
		// We use the moreWrap instead of the <td> to avoid border confusion.
		if (this.isRTL) {
			options.right = moreWrap.offset().left + moreWrap.outerWidth() + 1; // +1 to be over cell border
		}
		else {
			options.left = moreWrap.offset().left - 1; // -1 to be over cell border
		}

		this.segPopover = new Popover(options);
		this.segPopover.show();

		// the popover doesn't live within the grid's container element, and thus won't get the event
		// delegated-handlers for free. attach event-related handlers to the popover.
		this.bindSegHandlersToEl(this.segPopover.el);
	},


	// Builds the inner DOM contents of the segment popover
	renderSegPopoverContent: function(row, col, segs) {
		var view = this.view;
		var isTheme = view.opt('theme');
		var title = this.getCellDate(row, col).format(view.opt('dayPopoverFormat'));
		var content = $(
			'<div class="fc-header ' + view.widgetHeaderClass + '">' +
				'<span class="fc-close ' +
					(isTheme ? 'ui-icon ui-icon-closethick' : 'fc-icon fc-icon-x') +
				'"></span>' +
				'<span class="fc-title">' +
					htmlEscape(title) +
				'</span>' +
				'<div class="fc-clear"/>' +
			'</div>' +
			'<div class="fc-body ' + view.widgetContentClass + '">' +
				'<div class="fc-event-container"></div>' +
			'</div>'
		);
		var segContainer = content.find('.fc-event-container');
		var i;

		// render each seg's `el` and only return the visible segs
		segs = this.renderFgSegEls(segs, true); // disableResizing=true
		this.popoverSegs = segs;

		for (i = 0; i < segs.length; i++) {

			// because segments in the popover are not part of a grid coordinate system, provide a hint to any
			// grids that want to do drag-n-drop about which cell it came from
			this.prepareHits();
			segs[i].hit = this.getCellHit(row, col);
			this.releaseHits();

			segContainer.append(segs[i].el);
		}

		return content;
	},


	// Given the events within an array of segment objects, reslice them to be in a single day
	resliceDaySegs: function(segs, dayDate) {

		// build an array of the original events
		var events = $.map(segs, function(seg) {
			return seg.event;
		});

		var dayStart = dayDate.clone();
		var dayEnd = dayStart.clone().add(1, 'days');
		var dayRange = { start: dayStart, end: dayEnd };

		// slice the events with a custom slicing function
		segs = this.eventsToSegs(
			events,
			function(range) {
				var seg = intersectRanges(range, dayRange); // undefind if no intersection
				return seg ? [ seg ] : []; // must return an array of segments
			}
		);

		// force an order because eventsToSegs doesn't guarantee one
		this.sortEventSegs(segs);

		return segs;
	},


	// Generates the text that should be inside a "more" link, given the number of events it represents
	getMoreLinkText: function(num) {
		var opt = this.view.opt('eventLimitText');

		if (typeof opt === 'function') {
			return opt(num);
		}
		else {
			return '+' + num + ' ' + opt;
		}
	},


	// Returns segments within a given cell.
	// If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
	getCellSegs: function(row, col, startLevel) {
		var segMatrix = this.rowStructs[row].segMatrix;
		var level = startLevel || 0;
		var segs = [];
		var seg;

		while (level < segMatrix.length) {
			seg = segMatrix[level][col];
			if (seg) {
				segs.push(seg);
			}
			level++;
		}

		return segs;
	}

});

;;

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// We mixin DayTable, even though there is only a single row of days

var TimeGrid = FC.TimeGrid = Grid.extend(DayTableMixin, {

	slotDuration: null, // duration of a "slot", a distinct time segment on given day, visualized by lines
	snapDuration: null, // granularity of time for dragging and selecting
	snapsPerSlot: null,
	minTime: null, // Duration object that denotes the first visible time of any given day
	maxTime: null, // Duration object that denotes the exclusive visible end time of any given day
	labelFormat: null, // formatting string for times running along vertical axis
	labelInterval: null, // duration of how often a label should be displayed for a slot

	colEls: null, // cells elements in the day-row background
	slatContainerEl: null, // div that wraps all the slat rows
	slatEls: null, // elements running horizontally across all columns
	nowIndicatorEls: null,

	colCoordCache: null,
	slatCoordCache: null,


	constructor: function() {
		Grid.apply(this, arguments); // call the super-constructor

		this.processOptions();
	},


	// Renders the time grid into `this.el`, which should already be assigned.
	// Relies on the view's colCnt. In the future, this component should probably be self-sufficient.
	renderDates: function() {
		this.el.html(this.renderHtml());
		this.colEls = this.el.find('.fc-day');
		this.slatContainerEl = this.el.find('.fc-slats');
		this.slatEls = this.slatContainerEl.find('tr');

		this.colCoordCache = new CoordCache({
			els: this.colEls,
			isHorizontal: true
		});
		this.slatCoordCache = new CoordCache({
			els: this.slatEls,
			isVertical: true
		});

		this.renderContentSkeleton();
	},


	// Renders the basic HTML skeleton for the grid
	renderHtml: function() {
		return '' +
			'<div class="fc-bg">' +
				'<table>' +
					this.renderBgTrHtml(0) + // row=0
				'</table>' +
			'</div>' +
			'<div class="fc-slats">' +
				'<table>' +
					this.renderSlatRowHtml() +
				'</table>' +
			'</div>';
	},


	// Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
	renderSlatRowHtml: function() {
		var view = this.view;
		var isRTL = this.isRTL;
		var html = '';
		var slotTime = moment.duration(+this.minTime); // wish there was .clone() for durations
		var slotDate; // will be on the view's first day, but we only care about its time
		var isLabeled;
		var axisHtml;

		// Calculate the time for each slot
		while (slotTime < this.maxTime) {
			slotDate = this.start.clone().time(slotTime);
			isLabeled = isInt(divideDurationByDuration(slotTime, this.labelInterval));

			axisHtml =
				'<td class="fc-axis fc-time ' + view.widgetContentClass + '" ' + view.axisStyleAttr() + '>' +
					(isLabeled ?
						'<span>' + // for matchCellWidths
							htmlEscape(slotDate.format(this.labelFormat)) +
						'</span>' :
						''
						) +
				'</td>';

			html +=
				'<tr data-time="' + slotDate.format('HH:mm:ss') + '"' +
					(isLabeled ? '' : ' class="fc-minor"') +
					'>' +
					(!isRTL ? axisHtml : '') +
					'<td class="' + view.widgetContentClass + '"/>' +
					(isRTL ? axisHtml : '') +
				"</tr>";

			slotTime.add(this.slotDuration);
		}

		return html;
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Parses various options into properties of this object
	processOptions: function() {
		var view = this.view;
		var slotDuration = view.opt('slotDuration');
		var snapDuration = view.opt('snapDuration');
		var input;

		slotDuration = moment.duration(slotDuration);
		snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;

		this.slotDuration = slotDuration;
		this.snapDuration = snapDuration;
		this.snapsPerSlot = slotDuration / snapDuration; // TODO: ensure an integer multiple?

		this.minResizeDuration = snapDuration; // hack

		this.minTime = moment.duration(view.opt('minTime'));
		this.maxTime = moment.duration(view.opt('maxTime'));

		// might be an array value (for TimelineView).
		// if so, getting the most granular entry (the last one probably).
		input = view.opt('slotLabelFormat');
		if ($.isArray(input)) {
			input = input[input.length - 1];
		}

		this.labelFormat =
			input ||
			view.opt('smallTimeFormat'); // the computed default

		input = view.opt('slotLabelInterval');
		this.labelInterval = input ?
			moment.duration(input) :
			this.computeLabelInterval(slotDuration);
	},


	// Computes an automatic value for slotLabelInterval
	computeLabelInterval: function(slotDuration) {
		var i;
		var labelInterval;
		var slotsPerLabel;

		// find the smallest stock label interval that results in more than one slots-per-label
		for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
			labelInterval = moment.duration(AGENDA_STOCK_SUB_DURATIONS[i]);
			slotsPerLabel = divideDurationByDuration(labelInterval, slotDuration);
			if (isInt(slotsPerLabel) && slotsPerLabel > 1) {
				return labelInterval;
			}
		}

		return moment.duration(slotDuration); // fall back. clone
	},


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.view.opt('noMeridiemTimeFormat'); // like "6:30" (no AM/PM)
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return true;
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.slatCoordCache.build();
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		// NOTE: don't clear slatCoordCache because we rely on it for computeTimeTop
	},


	queryHit: function(leftOffset, topOffset) {
		var snapsPerSlot = this.snapsPerSlot;
		var colCoordCache = this.colCoordCache;
		var slatCoordCache = this.slatCoordCache;

		if (colCoordCache.isLeftInBounds(leftOffset) && slatCoordCache.isTopInBounds(topOffset)) {
			var colIndex = colCoordCache.getHorizontalIndex(leftOffset);
			var slatIndex = slatCoordCache.getVerticalIndex(topOffset);

			if (colIndex != null && slatIndex != null) {
				var slatTop = slatCoordCache.getTopOffset(slatIndex);
				var slatHeight = slatCoordCache.getHeight(slatIndex);
				var partial = (topOffset - slatTop) / slatHeight; // floating point number between 0 and 1
				var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
				var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
				var snapTop = slatTop + (localSnapIndex / snapsPerSlot) * slatHeight;
				var snapBottom = slatTop + ((localSnapIndex + 1) / snapsPerSlot) * slatHeight;

				return {
					col: colIndex,
					snap: snapIndex,
					component: this, // needed unfortunately :(
					left: colCoordCache.getLeftOffset(colIndex),
					right: colCoordCache.getRightOffset(colIndex),
					top: snapTop,
					bottom: snapBottom
				};
			}
		}
	},


	getHitSpan: function(hit) {
		var start = this.getCellDate(0, hit.col); // row=0
		var time = this.computeSnapTime(hit.snap); // pass in the snap-index
		var end;

		start.time(time);
		end = start.clone().add(this.snapDuration);

		return { start: start, end: end };
	},


	getHitEl: function(hit) {
		return this.colEls.eq(hit.col);
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	rangeUpdated: function() {
		this.updateDayTable();
	},


	// Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
	computeSnapTime: function(snapIndex) {
		return moment.duration(this.minTime + this.snapDuration * snapIndex);
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	spanToSegs: function(span) {
		var segs = this.sliceRangeByTimes(span);
		var i;

		for (i = 0; i < segs.length; i++) {
			if (this.isRTL) {
				segs[i].col = this.daysPerRow - 1 - segs[i].dayIndex;
			}
			else {
				segs[i].col = segs[i].dayIndex;
			}
		}

		return segs;
	},


	sliceRangeByTimes: function(range) {
		var segs = [];
		var seg;
		var dayIndex;
		var dayDate;
		var dayRange;

		for (dayIndex = 0; dayIndex < this.daysPerRow; dayIndex++) {
			dayDate = this.dayDates[dayIndex].clone(); // TODO: better API for this?
			dayRange = {
				start: dayDate.clone().time(this.minTime),
				end: dayDate.clone().time(this.maxTime)
			};
			seg = intersectRanges(range, dayRange); // both will be ambig timezone
			if (seg) {
				seg.dayIndex = dayIndex;
				segs.push(seg);
			}
		}

		return segs;
	},


	/* Coordinates
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(isResize) { // NOT a standard Grid method
		this.slatCoordCache.build();

		if (isResize) {
			this.updateSegVerticals(
				[].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || [])
			);
		}
	},


	getTotalSlatHeight: function() {
		return this.slatContainerEl.outerHeight();
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given date.
	// A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
	computeDateTop: function(date, startOfDayDate) {
		return this.computeTimeTop(
			moment.duration(
				date - startOfDayDate.clone().stripTime()
			)
		);
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
	computeTimeTop: function(time) {
		var len = this.slatEls.length;
		var slatCoverage = (time - this.minTime) / this.slotDuration; // floating-point value of # of slots covered
		var slatIndex;
		var slatRemainder;

		// compute a floating-point number for how many slats should be progressed through.
		// from 0 to number of slats (inclusive)
		// constrained because minTime/maxTime might be customized.
		slatCoverage = Math.max(0, slatCoverage);
		slatCoverage = Math.min(len, slatCoverage);

		// an integer index of the furthest whole slat
		// from 0 to number slats (*exclusive*, so len-1)
		slatIndex = Math.floor(slatCoverage);
		slatIndex = Math.min(slatIndex, len - 1);

		// how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
		// could be 1.0 if slatCoverage is covering *all* the slots
		slatRemainder = slatCoverage - slatIndex;

		return this.slatCoordCache.getTopPosition(slatIndex) +
			this.slatCoordCache.getHeight(slatIndex) * slatRemainder;
	},



	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being dragged over the specified date(s).
	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(eventLocation, seg) {

		if (seg) { // if there is event information for this drag, render a helper event

			// returns mock event elements
			// signal that a helper has been rendered
			return this.renderEventLocationHelper(eventLocation, seg);
		}
		else {
			// otherwise, just render a highlight
			this.renderHighlight(this.eventToSpan(eventLocation));
		}
	},


	// Unrenders any visual indication of an event being dragged
	unrenderDrag: function() {
		this.unrenderHelper();
		this.unrenderHighlight();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventLocation, seg) {
		return this.renderEventLocationHelper(eventLocation, seg); // returns mock event elements
	},


	// Unrenders any visual indication of an event being resized
	unrenderEventResize: function() {
		this.unrenderHelper();
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a mock "helper" event. `sourceSeg` is the original segment object and might be null (an external drag)
	renderHelper: function(event, sourceSeg) {
		return this.renderHelperSegs(this.eventToSegs(event), sourceSeg); // returns mock event elements
	},


	// Unrenders any mock helper event
	unrenderHelper: function() {
		this.unrenderHelperSegs();
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessHours: function() {
		this.renderBusinessSegs(
			this.buildBusinessHourSegs()
		);
	},


	unrenderBusinessHours: function() {
		this.unrenderBusinessSegs();
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return 'minute'; // will refresh on the minute
	},


	renderNowIndicator: function(date) {
		// seg system might be overkill, but it handles scenario where line needs to be rendered
		//  more than once because of columns with the same date (resources columns for example)
		var segs = this.spanToSegs({ start: date, end: date });
		var top = this.computeDateTop(date, date);
		var nodes = [];
		var i;

		// render lines within the columns
		for (i = 0; i < segs.length; i++) {
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>')
				.css('top', top)
				.appendTo(this.colContainerEls.eq(segs[i].col))[0]);
		}

		// render an arrow over the axis
		if (segs.length > 0) { // is the current time in view?
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>')
				.css('top', top)
				.appendTo(this.el.find('.fc-content-skeleton'))[0]);
		}

		this.nowIndicatorEls = $(nodes);
	},


	unrenderNowIndicator: function() {
		if (this.nowIndicatorEls) {
			this.nowIndicatorEls.remove();
			this.nowIndicatorEls = null;
		}
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
	renderSelection: function(span) {
		if (this.view.opt('selectHelper')) { // this setting signals that a mock helper event should be rendered

			// normally acceps an eventLocation, span has a start/end, which is good enough
			this.renderEventLocationHelper(span);
		}
		else {
			this.renderHighlight(span);
		}
	},


	// Unrenders any visual indication of a selection
	unrenderSelection: function() {
		this.unrenderHelper();
		this.unrenderHighlight();
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	renderHighlight: function(span) {
		this.renderHighlightSegs(this.spanToSegs(span));
	},


	unrenderHighlight: function() {
		this.unrenderHighlightSegs();
	}

});

;;

/* Methods for rendering SEGMENTS, pieces of content that live on the view
 ( this file is no longer just for events )
----------------------------------------------------------------------------------------------------------------------*/

TimeGrid.mixin({

	colContainerEls: null, // containers for each column

	// inner-containers for each column where different types of segs live
	fgContainerEls: null,
	bgContainerEls: null,
	helperContainerEls: null,
	highlightContainerEls: null,
	businessContainerEls: null,

	// arrays of different types of displayed segments
	fgSegs: null,
	bgSegs: null,
	helperSegs: null,
	highlightSegs: null,
	businessSegs: null,


	// Renders the DOM that the view's content will live in
	renderContentSkeleton: function() {
		var cellHtml = '';
		var i;
		var skeletonEl;

		for (i = 0; i < this.colCnt; i++) {
			cellHtml +=
				'<td>' +
					'<div class="fc-content-col">' +
						'<div class="fc-event-container fc-helper-container"></div>' +
						'<div class="fc-event-container"></div>' +
						'<div class="fc-highlight-container"></div>' +
						'<div class="fc-bgevent-container"></div>' +
						'<div class="fc-business-container"></div>' +
					'</div>' +
				'</td>';
		}

		skeletonEl = $(
			'<div class="fc-content-skeleton">' +
				'<table>' +
					'<tr>' + cellHtml + '</tr>' +
				'</table>' +
			'</div>'
		);

		this.colContainerEls = skeletonEl.find('.fc-content-col');
		this.helperContainerEls = skeletonEl.find('.fc-helper-container');
		this.fgContainerEls = skeletonEl.find('.fc-event-container:not(.fc-helper-container)');
		this.bgContainerEls = skeletonEl.find('.fc-bgevent-container');
		this.highlightContainerEls = skeletonEl.find('.fc-highlight-container');
		this.businessContainerEls = skeletonEl.find('.fc-business-container');

		this.bookendCells(skeletonEl.find('tr')); // TODO: do this on string level
		this.el.append(skeletonEl);
	},


	/* Foreground Events
	------------------------------------------------------------------------------------------------------------------*/


	renderFgSegs: function(segs) {
		segs = this.renderFgSegsIntoContainers(segs, this.fgContainerEls);
		this.fgSegs = segs;
		return segs; // needed for Grid::renderEvents
	},


	unrenderFgSegs: function() {
		this.unrenderNamedSegs('fgSegs');
	},


	/* Foreground Helper Events
	------------------------------------------------------------------------------------------------------------------*/


	renderHelperSegs: function(segs, sourceSeg) {
		var helperEls = [];
		var i, seg;
		var sourceEl;

		segs = this.renderFgSegsIntoContainers(segs, this.helperContainerEls);

		// Try to make the segment that is in the same row as sourceSeg look the same
		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			if (sourceSeg && sourceSeg.col === seg.col) {
				sourceEl = sourceSeg.el;
				seg.el.css({
					left: sourceEl.css('left'),
					right: sourceEl.css('right'),
					'margin-left': sourceEl.css('margin-left'),
					'margin-right': sourceEl.css('margin-right')
				});
			}
			helperEls.push(seg.el[0]);
		}

		this.helperSegs = segs;

		return $(helperEls); // must return rendered helpers
	},


	unrenderHelperSegs: function() {
		this.unrenderNamedSegs('helperSegs');
	},


	/* Background Events
	------------------------------------------------------------------------------------------------------------------*/


	renderBgSegs: function(segs) {
		segs = this.renderFillSegEls('bgEvent', segs); // TODO: old fill system
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.bgContainerEls);
		this.bgSegs = segs;
		return segs; // needed for Grid::renderEvents
	},


	unrenderBgSegs: function() {
		this.unrenderNamedSegs('bgSegs');
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	renderHighlightSegs: function(segs) {
		segs = this.renderFillSegEls('highlight', segs); // TODO: old fill system
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.highlightContainerEls);
		this.highlightSegs = segs;
	},


	unrenderHighlightSegs: function() {
		this.unrenderNamedSegs('highlightSegs');
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessSegs: function(segs) {
		segs = this.renderFillSegEls('businessHours', segs); // TODO: old fill system
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.businessContainerEls);
		this.businessSegs = segs;
	},


	unrenderBusinessSegs: function() {
		this.unrenderNamedSegs('businessSegs');
	},


	/* Seg Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
	groupSegsByCol: function(segs) {
		var segsByCol = [];
		var i;

		for (i = 0; i < this.colCnt; i++) {
			segsByCol.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segsByCol[segs[i].col].push(segs[i]);
		}

		return segsByCol;
	},


	// Given segments grouped by column, insert the segments' elements into a parallel array of container
	// elements, each living within a column.
	attachSegsByCol: function(segsByCol, containerEls) {
		var col;
		var segs;
		var i;

		for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
			segs = segsByCol[col];

			for (i = 0; i < segs.length; i++) {
				containerEls.eq(col).append(segs[i].el);
			}
		}
	},


	// Given the name of a property of `this` object, assumed to be an array of segments,
	// loops through each segment and removes from DOM. Will null-out the property afterwards.
	unrenderNamedSegs: function(propName) {
		var segs = this[propName];
		var i;

		if (segs) {
			for (i = 0; i < segs.length; i++) {
				segs[i].el.remove();
			}
			this[propName] = null;
		}
	},



	/* Foreground Event Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given an array of foreground segments, render a DOM element for each, computes position,
	// and attaches to the column inner-container elements.
	renderFgSegsIntoContainers: function(segs, containerEls) {
		var segsByCol;
		var col;

		segs = this.renderFgSegEls(segs); // will call fgSegHtml
		segsByCol = this.groupSegsByCol(segs);

		for (col = 0; col < this.colCnt; col++) {
			this.updateFgSegCoords(segsByCol[col]);
		}

		this.attachSegsByCol(segsByCol, containerEls);

		return segs;
	},


	// Renders the HTML for a single event segment's default rendering
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var event = seg.event;
		var isDraggable = view.isEventDraggable(event);
		var isResizableFromStart = !disableResizing && seg.isStart && view.isEventResizableFromStart(event);
		var isResizableFromEnd = !disableResizing && seg.isEnd && view.isEventResizableFromEnd(event);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSegSkinCss(seg));
		var timeText;
		var fullTimeText; // more verbose time text. for the print stylesheet
		var startTimeText; // just the start time text

		classes.unshift('fc-time-grid-event', 'fc-v-event');

		if (view.isMultiDayEvent(event)) { // if the event appears to span more than one day...
			// Don't display time text on segments that run entirely through a day.
			// That would appear as midnight-midnight and would look dumb.
			// Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
			if (seg.isStart || seg.isEnd) {
				timeText = this.getEventTimeText(seg);
				fullTimeText = this.getEventTimeText(seg, 'LT');
				startTimeText = this.getEventTimeText(seg, null, false); // displayEnd=false
			}
		} else {
			// Display the normal time text for the *event's* times
			timeText = this.getEventTimeText(event);
			fullTimeText = this.getEventTimeText(event, 'LT');
			startTimeText = this.getEventTimeText(event, null, false); // displayEnd=false
		}

		return '<a class="' + classes.join(' ') + '"' +
			(event.url ?
				' href="' + htmlEscape(event.url) + '"' :
				''
				) +
			(skinCss ?
				' style="' + skinCss + '"' :
				''
				) +
			'>' +
				'<div class="fc-content">' +
					(timeText ?
						'<div class="fc-time"' +
						' data-start="' + htmlEscape(startTimeText) + '"' +
						' data-full="' + htmlEscape(fullTimeText) + '"' +
						'>' +
							'<span>' + htmlEscape(timeText) + '</span>' +
						'</div>' :
						''
						) +
					(event.title ?
						'<div class="fc-title">' +
							htmlEscape(event.title) +
						'</div>' :
						''
						) +
				'</div>' +
				'<div class="fc-bg"/>' +
				/* TODO: write CSS for this
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				*/
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	},


	/* Seg Position Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes the CSS top/bottom coordinates for each segment element.
	// Works when called after initial render, after a window resize/zoom for example.
	updateSegVerticals: function(segs) {
		this.computeSegVerticals(segs);
		this.assignSegVerticals(segs);
	},


	// For each segment in an array, computes and assigns its top and bottom properties
	computeSegVerticals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.top = this.computeDateTop(seg.start, seg.start);
			seg.bottom = this.computeDateTop(seg.end, seg.start);
		}
	},


	// Given segments that already have their top/bottom properties computed, applies those values to
	// the segments' elements.
	assignSegVerticals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateSegVerticalCss(seg));
		}
	},


	// Generates an object with CSS properties for the top/bottom coordinates of a segment element
	generateSegVerticalCss: function(seg) {
		return {
			top: seg.top,
			bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
		};
	},


	/* Foreground Event Positioning Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given segments that are assumed to all live in the *same column*,
	// compute their verical/horizontal coordinates and assign to their elements.
	updateFgSegCoords: function(segs) {
		this.computeSegVerticals(segs); // horizontals relies on this
		this.computeFgSegHorizontals(segs); // compute horizontal coordinates, z-index's, and reorder the array
		this.assignSegVerticals(segs);
		this.assignFgSegHorizontals(segs);
	},


	// Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
	// NOTE: Also reorders the given array by date!
	computeFgSegHorizontals: function(segs) {
		var levels;
		var level0;
		var i;

		this.sortEventSegs(segs); // order by certain criteria
		levels = buildSlotSegLevels(segs);
		computeForwardSlotSegs(levels);

		if ((level0 = levels[0])) {

			for (i = 0; i < level0.length; i++) {
				computeSlotSegPressures(level0[i]);
			}

			for (i = 0; i < level0.length; i++) {
				this.computeFgSegForwardBack(level0[i], 0, 0);
			}
		}
	},


	// Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
	// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
	// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
	//
	// The segment might be part of a "series", which means consecutive segments with the same pressure
	// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
	// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
	// coordinate of the first segment in the series.
	computeFgSegForwardBack: function(seg, seriesBackwardPressure, seriesBackwardCoord) {
		var forwardSegs = seg.forwardSegs;
		var i;

		if (seg.forwardCoord === undefined) { // not already computed

			if (!forwardSegs.length) {

				// if there are no forward segments, this segment should butt up against the edge
				seg.forwardCoord = 1;
			}
			else {

				// sort highest pressure first
				this.sortForwardSegs(forwardSegs);

				// this segment's forwardCoord will be calculated from the backwardCoord of the
				// highest-pressure forward segment.
				this.computeFgSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
				seg.forwardCoord = forwardSegs[0].backwardCoord;
			}

			// calculate the backwardCoord from the forwardCoord. consider the series
			seg.backwardCoord = seg.forwardCoord -
				(seg.forwardCoord - seriesBackwardCoord) / // available width for series
				(seriesBackwardPressure + 1); // # of segments in the series

			// use this segment's coordinates to computed the coordinates of the less-pressurized
			// forward segments
			for (i=0; i<forwardSegs.length; i++) {
				this.computeFgSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
			}
		}
	},


	sortForwardSegs: function(forwardSegs) {
		forwardSegs.sort(proxy(this, 'compareForwardSegs'));
	},


	// A cmp function for determining which forward segment to rely on more when computing coordinates.
	compareForwardSegs: function(seg1, seg2) {
		// put higher-pressure first
		return seg2.forwardPressure - seg1.forwardPressure ||
			// put segments that are closer to initial edge first (and favor ones with no coords yet)
			(seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
			// do normal sorting...
			this.compareEventSegs(seg1, seg2);
	},


	// Given foreground event segments that have already had their position coordinates computed,
	// assigns position-related CSS values to their elements.
	assignFgSegHorizontals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateFgSegHorizontalCss(seg));

			// if the height is short, add a className for alternate styling
			if (seg.bottom - seg.top < 30) {
				seg.el.addClass('fc-short');
			}
		}
	},


	// Generates an object with CSS properties/values that should be applied to an event segment element.
	// Contains important positioning-related properties that should be applied to any event element, customized or not.
	generateFgSegHorizontalCss: function(seg) {
		var shouldOverlap = this.view.opt('slotEventOverlap');
		var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
		var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
		var props = this.generateSegVerticalCss(seg); // get top/bottom first
		var left; // amount of space from left edge, a fraction of the total width
		var right; // amount of space from right edge, a fraction of the total width

		if (shouldOverlap) {
			// double the width, but don't go beyond the maximum forward coordinate (1.0)
			forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
		}

		if (this.isRTL) {
			left = 1 - forwardCoord;
			right = backwardCoord;
		}
		else {
			left = backwardCoord;
			right = 1 - forwardCoord;
		}

		props.zIndex = seg.level + 1; // convert from 0-base to 1-based
		props.left = left * 100 + '%';
		props.right = right * 100 + '%';

		if (shouldOverlap && seg.forwardPressure) {
			// add padding to the edge so that forward stacked events don't cover the resizer's icon
			props[this.isRTL ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
		}

		return props;
	}

});


// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
	var levels = [];
	var i, seg;
	var j;

	for (i=0; i<segs.length; i++) {
		seg = segs[i];

		// go through all the levels and stop on the first level where there are no collisions
		for (j=0; j<levels.length; j++) {
			if (!computeSlotSegCollisions(seg, levels[j]).length) {
				break;
			}
		}

		seg.level = j;

		(levels[j] || (levels[j] = [])).push(seg);
	}

	return levels;
}


// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
	var i, level;
	var j, seg;
	var k;

	for (i=0; i<levels.length; i++) {
		level = levels[i];

		for (j=0; j<level.length; j++) {
			seg = level[j];

			seg.forwardSegs = [];
			for (k=i+1; k<levels.length; k++) {
				computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
			}
		}
	}
}


// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
	var forwardSegs = seg.forwardSegs;
	var forwardPressure = 0;
	var i, forwardSeg;

	if (seg.forwardPressure === undefined) { // not already computed

		for (i=0; i<forwardSegs.length; i++) {
			forwardSeg = forwardSegs[i];

			// figure out the child's maximum forward path
			computeSlotSegPressures(forwardSeg);

			// either use the existing maximum, or use the child's forward pressure
			// plus one (for the forwardSeg itself)
			forwardPressure = Math.max(
				forwardPressure,
				1 + forwardSeg.forwardPressure
			);
		}

		seg.forwardPressure = forwardPressure;
	}
}


// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
	results = results || [];

	for (var i=0; i<otherSegs.length; i++) {
		if (isSlotSegCollision(seg, otherSegs[i])) {
			results.push(otherSegs[i]);
		}
	}

	return results;
}


// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
	return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}

;;

/* An abstract class from which other views inherit from
----------------------------------------------------------------------------------------------------------------------*/

var View = FC.View = Class.extend(EmitterMixin, ListenerMixin, {

	type: null, // subclass' view name (string)
	name: null, // deprecated. use `type` instead
	title: null, // the text that will be displayed in the header's title

	calendar: null, // owner Calendar object
	options: null, // hash containing all options. already merged with view-specific-options
	el: null, // the view's containing element. set by Calendar

	displaying: null, // a promise representing the state of rendering. null if no render requested
	isSkeletonRendered: false,
	isEventsRendered: false,

	// range the view is actually displaying (moments)
	start: null,
	end: null, // exclusive

	// range the view is formally responsible for (moments)
	// may be different from start/end. for example, a month view might have 1st-31st, excluding padded dates
	intervalStart: null,
	intervalEnd: null, // exclusive
	intervalDuration: null,
	intervalUnit: null, // name of largest unit being displayed, like "month" or "week"

	isRTL: false,
	isSelected: false, // boolean whether a range of time is user-selected or not
	selectedEvent: null,

	eventOrderSpecs: null, // criteria for ordering events when they have same date/time

	// classNames styled by jqui themes
	widgetHeaderClass: null,
	widgetContentClass: null,
	highlightStateClass: null,

	// for date utils, computed from options
	nextDayThreshold: null,
	isHiddenDayHash: null,

	// now indicator
	isNowIndicatorRendered: null,
	initialNowDate: null, // result first getNow call
	initialNowQueriedMs: null, // ms time the getNow was called
	nowIndicatorTimeoutID: null, // for refresh timing of now indicator
	nowIndicatorIntervalID: null, // "


	constructor: function(calendar, type, options, intervalDuration) {

		this.calendar = calendar;
		this.type = this.name = type; // .name is deprecated
		this.options = options;
		this.intervalDuration = intervalDuration || moment.duration(1, 'day');

		this.nextDayThreshold = moment.duration(this.opt('nextDayThreshold'));
		this.initThemingProps();
		this.initHiddenDays();
		this.isRTL = this.opt('isRTL');

		this.eventOrderSpecs = parseFieldSpecs(this.opt('eventOrder'));

		this.initialize();
	},


	// A good place for subclasses to initialize member variables
	initialize: function() {
		// subclasses can implement
	},


	// Retrieves an option with the given name
	opt: function(name) {
		return this.options[name];
	},


	// Triggers handlers that are view-related. Modifies args before passing to calendar.
	trigger: function(name, thisObj) { // arguments beyond thisObj are passed along
		var calendar = this.calendar;

		return calendar.trigger.apply(
			calendar,
			[name, thisObj || this].concat(
				Array.prototype.slice.call(arguments, 2), // arguments beyond thisObj
				[ this ] // always make the last argument a reference to the view. TODO: deprecate
			)
		);
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	// Updates all internal dates to center around the given current unzoned date.
	setDate: function(date) {
		this.setRange(this.computeRange(date));
	},


	// Updates all internal dates for displaying the given unzoned range.
	setRange: function(range) {
		$.extend(this, range); // assigns every property to this object's member variables
		this.updateTitle();
	},


	// Given a single current unzoned date, produce information about what range to display.
	// Subclasses can override. Must return all properties.
	computeRange: function(date) {
		var intervalUnit = computeIntervalUnit(this.intervalDuration);
		var intervalStart = date.clone().startOf(intervalUnit);
		var intervalEnd = intervalStart.clone().add(this.intervalDuration);
		var start, end;

		// normalize the range's time-ambiguity
		if (/year|month|week|day/.test(intervalUnit)) { // whole-days?
			intervalStart.stripTime();
			intervalEnd.stripTime();
		}
		else { // needs to have a time?
			if (!intervalStart.hasTime()) {
				intervalStart = this.calendar.time(0); // give 00:00 time
			}
			if (!intervalEnd.hasTime()) {
				intervalEnd = this.calendar.time(0); // give 00:00 time
			}
		}

		start = intervalStart.clone();
		start = this.skipHiddenDays(start);
		end = intervalEnd.clone();
		end = this.skipHiddenDays(end, -1, true); // exclusively move backwards

		return {
			intervalUnit: intervalUnit,
			intervalStart: intervalStart,
			intervalEnd: intervalEnd,
			start: start,
			end: end
		};
	},


	// Computes the new date when the user hits the prev button, given the current date
	computePrevDate: function(date) {
		return this.massageCurrentDate(
			date.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1
		);
	},


	// Computes the new date when the user hits the next button, given the current date
	computeNextDate: function(date) {
		return this.massageCurrentDate(
			date.clone().startOf(this.intervalUnit).add(this.intervalDuration)
		);
	},


	// Given an arbitrarily calculated current date of the calendar, returns a date that is ensured to be completely
	// visible. `direction` is optional and indicates which direction the current date was being
	// incremented or decremented (1 or -1).
	massageCurrentDate: function(date, direction) {
		if (this.intervalDuration.as('days') <= 1) { // if the view displays a single day or smaller
			if (this.isHiddenDay(date)) {
				date = this.skipHiddenDays(date, direction);
				date.startOf('day');
			}
		}

		return date;
	},


	/* Title and Date Formatting
	------------------------------------------------------------------------------------------------------------------*/


	// Sets the view's title property to the most updated computed value
	updateTitle: function() {
		this.title = this.computeTitle();
	},


	// Computes what the title at the top of the calendar should be for this view
	computeTitle: function() {
		return this.formatRange(
			{
				// in case intervalStart/End has a time, make sure timezone is correct
				start: this.calendar.applyTimezone(this.intervalStart),
				end: this.calendar.applyTimezone(this.intervalEnd)
			},
			this.opt('titleFormat') || this.computeTitleFormat(),
			this.opt('titleRangeSeparator')
		);
	},


	// Generates the format string that should be used to generate the title for the current date range.
	// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
	computeTitleFormat: function() {
		if (this.intervalUnit == 'year') {
			return 'YYYY';
		}
		else if (this.intervalUnit == 'month') {
			return this.opt('monthYearFormat'); // like "September 2014"
		}
		else if (this.intervalDuration.as('days') > 1) {
			return 'll'; // multi-day range. shorter, like "Sep 9 - 10 2014"
		}
		else {
			return 'LL'; // one day. longer, like "September 9 2014"
		}
	},


	// Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
	// Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
	// The timezones of the dates within `range` will be respected.
	formatRange: function(range, formatStr, separator) {
		var end = range.end;

		if (!end.hasTime()) { // all-day?
			end = end.clone().subtract(1); // convert to inclusive. last ms of previous day
		}

		return formatRange(range.start, end, formatStr, separator, this.opt('isRTL'));
	},


	getAllDayHtml: function() {
		return this.opt('allDayHtml') || htmlEscape(this.opt('allDayText'));
	},


	/* Navigation
	------------------------------------------------------------------------------------------------------------------*/


	// Generates HTML for an anchor to another view into the calendar.
	// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
	// `gotoOptions` can either be a moment input, or an object with the form:
	// { date, type, forceOff }
	// `type` is a view-type like "day" or "week". default value is "day".
	// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
	buildGotoAnchorHtml: function(gotoOptions, attrs, innerHtml) {
		var date, type, forceOff;
		var finalOptions;

		if ($.isPlainObject(gotoOptions)) {
			date = gotoOptions.date;
			type = gotoOptions.type;
			forceOff = gotoOptions.forceOff;
		}
		else {
			date = gotoOptions; // a single moment input
		}
		date = FC.moment(date); // if a string, parse it

		finalOptions = { // for serialization into the link
			date: date.format('YYYY-MM-DD'),
			type: type || 'day'
		};

		if (typeof attrs === 'string') {
			innerHtml = attrs;
			attrs = null;
		}

		attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
		innerHtml = innerHtml || '';

		if (!forceOff && this.opt('navLinks')) {
			return '<a' + attrs +
				' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
				innerHtml +
				'</a>';
		}
		else {
			return '<span' + attrs + '>' +
				innerHtml +
				'</span>';
		}
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Sets the container element that the view should render inside of.
	// Does other DOM-related initializations.
	setElement: function(el) {
		this.el = el;
		this.bindGlobalHandlers();
	},


	// Removes the view's container element from the DOM, clearing any content beforehand.
	// Undoes any other DOM-related attachments.
	removeElement: function() {
		this.clear(); // clears all content

		// clean up the skeleton
		if (this.isSkeletonRendered) {
			this.unrenderSkeleton();
			this.isSkeletonRendered = false;
		}

		this.unbindGlobalHandlers();

		this.el.remove();

		// NOTE: don't null-out this.el in case the View was destroyed within an API callback.
		// We don't null-out the View's other jQuery element references upon destroy,
		//  so we shouldn't kill this.el either.
	},


	// Does everything necessary to display the view centered around the given unzoned date.
	// Does every type of rendering EXCEPT rendering events.
	// Is asychronous and returns a promise.
	display: function(date, explicitScrollState) {
		var _this = this;
		var prevScrollState = null;

		if (explicitScrollState != null && this.displaying) { // don't need prevScrollState if explicitScrollState
			prevScrollState = this.queryScroll();
		}

		this.calendar.freezeContentHeight();

		return syncThen(this.clear(), function() { // clear the content first
			return (
				_this.displaying =
					syncThen(_this.displayView(date), function() { // displayView might return a promise

						// caller of display() wants a specific scroll state?
						if (explicitScrollState != null) {
							// we make an assumption that this is NOT the initial render,
							// and thus don't need forceScroll (is inconveniently asynchronous)
							_this.setScroll(explicitScrollState);
						}
						else {
							_this.forceScroll(_this.computeInitialScroll(prevScrollState));
						}

						_this.calendar.unfreezeContentHeight();
						_this.triggerRender();
					})
			);
		});
	},


	// Does everything necessary to clear the content of the view.
	// Clears dates and events. Does not clear the skeleton.
	// Is asychronous and returns a promise.
	clear: function() {
		var _this = this;
		var displaying = this.displaying;

		if (displaying) { // previously displayed, or in the process of being displayed?
			return syncThen(displaying, function() { // wait for the display to finish
				_this.displaying = null;
				_this.clearEvents();
				return _this.clearView(); // might return a promise. chain it
			});
		}
		else {
			return $.when(); // an immediately-resolved promise
		}
	},


	// Displays the view's non-event content, such as date-related content or anything required by events.
	// Renders the view's non-content skeleton if necessary.
	// Can be asynchronous and return a promise.
	displayView: function(date) {
		if (!this.isSkeletonRendered) {
			this.renderSkeleton();
			this.isSkeletonRendered = true;
		}
		if (date) {
			this.setDate(date);
		}
		if (this.render) {
			this.render(); // TODO: deprecate
		}
		this.renderDates();
		this.updateSize();
		this.renderBusinessHours(); // might need coordinates, so should go after updateSize()
		this.startNowIndicator();
	},


	// Unrenders the view content that was rendered in displayView.
	// Can be asynchronous and return a promise.
	clearView: function() {
		this.unselect();
		this.stopNowIndicator();
		this.triggerUnrender();
		this.unrenderBusinessHours();
		this.unrenderDates();
		if (this.destroy) {
			this.destroy(); // TODO: deprecate
		}
	},


	// Renders the basic structure of the view before any content is rendered
	renderSkeleton: function() {
		// subclasses should implement
	},


	// Unrenders the basic structure of the view
	unrenderSkeleton: function() {
		// subclasses should implement
	},


	// Renders the view's date-related content.
	// Assumes setRange has already been called and the skeleton has already been rendered.
	renderDates: function() {
		// subclasses should implement
	},


	// Unrenders the view's date-related content
	unrenderDates: function() {
		// subclasses should override
	},


	// Signals that the view's content has been rendered
	triggerRender: function() {
		this.trigger('viewRender', this, this, this.el);
	},


	// Signals that the view's content is about to be unrendered
	triggerUnrender: function() {
		this.trigger('viewDestroy', this, this, this.el);
	},


	// Binds DOM handlers to elements that reside outside the view container, such as the document
	bindGlobalHandlers: function() {
		this.listenTo($(document), 'mousedown', this.handleDocumentMousedown);
		this.listenTo($(document), 'touchstart', this.processUnselect);
	},


	// Unbinds DOM handlers from elements that reside outside the view container
	unbindGlobalHandlers: function() {
		this.stopListeningTo($(document));
	},


	// Initializes internal variables related to theming
	initThemingProps: function() {
		var tm = this.opt('theme') ? 'ui' : 'fc';

		this.widgetHeaderClass = tm + '-widget-header';
		this.widgetContentClass = tm + '-widget-content';
		this.highlightStateClass = tm + '-state-highlight';
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	// Renders business-hours onto the view. Assumes updateSize has already been called.
	renderBusinessHours: function() {
		// subclasses should implement
	},


	// Unrenders previously-rendered business-hours
	unrenderBusinessHours: function() {
		// subclasses should implement
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	// Immediately render the current time indicator and begins re-rendering it at an interval,
	// which is defined by this.getNowIndicatorUnit().
	// TODO: somehow do this for the current whole day's background too
	startNowIndicator: function() {
		var _this = this;
		var unit;
		var update;
		var delay; // ms wait value

		if (this.opt('nowIndicator')) {
			unit = this.getNowIndicatorUnit();
			if (unit) {
				update = proxy(this, 'updateNowIndicator'); // bind to `this`

				this.initialNowDate = this.calendar.getNow();
				this.initialNowQueriedMs = +new Date();
				this.renderNowIndicator(this.initialNowDate);
				this.isNowIndicatorRendered = true;

				// wait until the beginning of the next interval
				delay = this.initialNowDate.clone().startOf(unit).add(1, unit) - this.initialNowDate;
				this.nowIndicatorTimeoutID = setTimeout(function() {
					_this.nowIndicatorTimeoutID = null;
					update();
					delay = +moment.duration(1, unit);
					delay = Math.max(100, delay); // prevent too frequent
					_this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
				}, delay);
			}
		}
	},


	// rerenders the now indicator, computing the new current time from the amount of time that has passed
	// since the initial getNow call.
	updateNowIndicator: function() {
		if (this.isNowIndicatorRendered) {
			this.unrenderNowIndicator();
			this.renderNowIndicator(
				this.initialNowDate.clone().add(new Date() - this.initialNowQueriedMs) // add ms
			);
		}
	},


	// Immediately unrenders the view's current time indicator and stops any re-rendering timers.
	// Won't cause side effects if indicator isn't rendered.
	stopNowIndicator: function() {
		if (this.isNowIndicatorRendered) {

			if (this.nowIndicatorTimeoutID) {
				clearTimeout(this.nowIndicatorTimeoutID);
				this.nowIndicatorTimeoutID = null;
			}
			if (this.nowIndicatorIntervalID) {
				clearTimeout(this.nowIndicatorIntervalID);
				this.nowIndicatorIntervalID = null;
			}

			this.unrenderNowIndicator();
			this.isNowIndicatorRendered = false;
		}
	},


	// Returns a string unit, like 'second' or 'minute' that defined how often the current time indicator
	// should be refreshed. If something falsy is returned, no time indicator is rendered at all.
	getNowIndicatorUnit: function() {
		// subclasses should implement
	},


	// Renders a current time indicator at the given datetime
	renderNowIndicator: function(date) {
		// subclasses should implement
	},


	// Undoes the rendering actions from renderNowIndicator
	unrenderNowIndicator: function() {
		// subclasses should implement
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes anything dependant upon sizing of the container element of the grid
	updateSize: function(isResize) {
		var scrollState;

		if (isResize) {
			scrollState = this.queryScroll();
		}

		this.updateHeight(isResize);
		this.updateWidth(isResize);
		this.updateNowIndicator();

		if (isResize) {
			this.setScroll(scrollState);
		}
	},


	// Refreshes the horizontal dimensions of the calendar
	updateWidth: function(isResize) {
		// subclasses should implement
	},


	// Refreshes the vertical dimensions of the calendar
	updateHeight: function(isResize) {
		var calendar = this.calendar; // we poll the calendar for height information

		this.setHeight(
			calendar.getSuggestedViewHeight(),
			calendar.isHeightAuto()
		);
	},


	// Updates the vertical dimensions of the calendar to the specified height.
	// if `isAuto` is set to true, height becomes merely a suggestion and the view should use its "natural" height.
	setHeight: function(height, isAuto) {
		// subclasses should implement
	},


	/* Scroller
	------------------------------------------------------------------------------------------------------------------*/


	// Computes the initial pre-configured scroll state prior to allowing the user to change it.
	// Given the scroll state from the previous rendering. If first time rendering, given null.
	computeInitialScroll: function(previousScrollState) {
		return 0;
	},


	// Retrieves the view's current natural scroll state. Can return an arbitrary format.
	queryScroll: function() {
		// subclasses must implement
	},


	// Sets the view's scroll state. Will accept the same format computeInitialScroll and queryScroll produce.
	setScroll: function(scrollState) {
		// subclasses must implement
	},


	// Sets the scroll state, making sure to overcome any predefined scroll value the browser has in mind
	forceScroll: function(scrollState) {
		var _this = this;

		this.setScroll(scrollState);
		setTimeout(function() {
			_this.setScroll(scrollState);
		}, 0);
	},


	/* Event Elements / Segments
	------------------------------------------------------------------------------------------------------------------*/


	// Does everything necessary to display the given events onto the current view
	displayEvents: function(events) {
		var scrollState = this.queryScroll();

		this.clearEvents();
		this.renderEvents(events);
		this.isEventsRendered = true;
		this.setScroll(scrollState);
		this.triggerEventRender();
	},


	// Does everything necessary to clear the view's currently-rendered events
	clearEvents: function() {
		var scrollState;

		if (this.isEventsRendered) {

			// TODO: optimize: if we know this is part of a displayEvents call, don't queryScroll/setScroll
			scrollState = this.queryScroll();

			this.triggerEventUnrender();
			if (this.destroyEvents) {
				this.destroyEvents(); // TODO: deprecate
			}
			this.unrenderEvents();
			this.setScroll(scrollState);
			this.isEventsRendered = false;
		}
	},


	// Renders the events onto the view.
	renderEvents: function(events) {
		// subclasses should implement
	},


	// Removes event elements from the view.
	unrenderEvents: function() {
		// subclasses should implement
	},


	// Signals that all events have been rendered
	triggerEventRender: function() {
		this.renderedEventSegEach(function(seg) {
			this.trigger('eventAfterRender', seg.event, seg.event, seg.el);
		});
		this.trigger('eventAfterAllRender');
	},


	// Signals that all event elements are about to be removed
	triggerEventUnrender: function() {
		this.renderedEventSegEach(function(seg) {
			this.trigger('eventDestroy', seg.event, seg.event, seg.el);
		});
	},


	// Given an event and the default element used for rendering, returns the element that should actually be used.
	// Basically runs events and elements through the eventRender hook.
	resolveEventEl: function(event, el) {
		var custom = this.trigger('eventRender', event, event, el);

		if (custom === false) { // means don't render at all
			el = null;
		}
		else if (custom && custom !== true) {
			el = $(custom);
		}

		return el;
	},


	// Hides all rendered event segments linked to the given event
	showEvent: function(event) {
		this.renderedEventSegEach(function(seg) {
			seg.el.css('visibility', '');
		}, event);
	},


	// Shows all rendered event segments linked to the given event
	hideEvent: function(event) {
		this.renderedEventSegEach(function(seg) {
			seg.el.css('visibility', 'hidden');
		}, event);
	},


	// Iterates through event segments that have been rendered (have an el). Goes through all by default.
	// If the optional `event` argument is specified, only iterates through segments linked to that event.
	// The `this` value of the callback function will be the view.
	renderedEventSegEach: function(func, event) {
		var segs = this.getEventSegs();
		var i;

		for (i = 0; i < segs.length; i++) {
			if (!event || segs[i].event._id === event._id) {
				if (segs[i].el) {
					func.call(this, segs[i]);
				}
			}
		}
	},


	// Retrieves all the rendered segment objects for the view
	getEventSegs: function() {
		// subclasses must implement
		return [];
	},


	/* Event Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	// Computes if the given event is allowed to be dragged by the user
	isEventDraggable: function(event) {
		return this.isEventStartEditable(event);
	},


	isEventStartEditable: function(event) {
		return firstDefined(
			event.startEditable,
			(event.source || {}).startEditable,
			this.opt('eventStartEditable'),
			this.isEventGenerallyEditable(event)
		);
	},


	isEventGenerallyEditable: function(event) {
		return firstDefined(
			event.editable,
			(event.source || {}).editable,
			this.opt('editable')
		);
	},


	// Must be called when an event in the view is dropped onto new location.
	// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
	reportEventDrop: function(event, dropLocation, largeUnit, el, ev) {
		var calendar = this.calendar;
		var mutateResult = calendar.mutateEvent(event, dropLocation, largeUnit);
		var undoFunc = function() {
			mutateResult.undo();
			calendar.reportEventChange();
		};

		this.triggerEventDrop(event, mutateResult.dateDelta, undoFunc, el, ev);
		calendar.reportEventChange(); // will rerender events
	},


	// Triggers event-drop handlers that have subscribed via the API
	triggerEventDrop: function(event, dateDelta, undoFunc, el, ev) {
		this.trigger('eventDrop', el[0], event, dateDelta, undoFunc, ev, {}); // {} = jqui dummy
	},


	/* External Element Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	// Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
	// `meta` is the parsed data that has been embedded into the dragging event.
	// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
	reportExternalDrop: function(meta, dropLocation, el, ev, ui) {
		var eventProps = meta.eventProps;
		var eventInput;
		var event;

		// Try to build an event object and render it. TODO: decouple the two
		if (eventProps) {
			eventInput = $.extend({}, eventProps, dropLocation);
			event = this.calendar.renderEvent(eventInput, meta.stick)[0]; // renderEvent returns an array
		}

		this.triggerExternalDrop(event, dropLocation, el, ev, ui);
	},


	// Triggers external-drop handlers that have subscribed via the API
	triggerExternalDrop: function(event, dropLocation, el, ev, ui) {

		// trigger 'drop' regardless of whether element represents an event
		this.trigger('drop', el[0], dropLocation.start, ev, ui);

		if (event) {
			this.trigger('eventReceive', null, event); // signal an external event landed
		}
	},


	/* Drag-n-Drop Rendering (for both events and external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a event or external-element drag over the given drop zone.
	// If an external-element, seg will be `null`.
	// Must return elements used for any mock events.
	renderDrag: function(dropLocation, seg) {
		// subclasses must implement
	},


	// Unrenders a visual indication of an event or external-element being dragged.
	unrenderDrag: function() {
		// subclasses must implement
	},


	/* Event Resizing
	------------------------------------------------------------------------------------------------------------------*/


	// Computes if the given event is allowed to be resized from its starting edge
	isEventResizableFromStart: function(event) {
		return this.opt('eventResizableFromStart') && this.isEventResizable(event);
	},


	// Computes if the given event is allowed to be resized from its ending edge
	isEventResizableFromEnd: function(event) {
		return this.isEventResizable(event);
	},


	// Computes if the given event is allowed to be resized by the user at all
	isEventResizable: function(event) {
		var source = event.source || {};

		return firstDefined(
			event.durationEditable,
			source.durationEditable,
			this.opt('eventDurationEditable'),
			event.editable,
			source.editable,
			this.opt('editable')
		);
	},


	// Must be called when an event in the view has been resized to a new length
	reportEventResize: function(event, resizeLocation, largeUnit, el, ev) {
		var calendar = this.calendar;
		var mutateResult = calendar.mutateEvent(event, resizeLocation, largeUnit);
		var undoFunc = function() {
			mutateResult.undo();
			calendar.reportEventChange();
		};

		this.triggerEventResize(event, mutateResult.durationDelta, undoFunc, el, ev);
		calendar.reportEventChange(); // will rerender events
	},


	// Triggers event-resize handlers that have subscribed via the API
	triggerEventResize: function(event, durationDelta, undoFunc, el, ev) {
		this.trigger('eventResize', el[0], event, durationDelta, undoFunc, ev, {}); // {} = jqui dummy
	},


	/* Selection (time range)
	------------------------------------------------------------------------------------------------------------------*/


	// Selects a date span on the view. `start` and `end` are both Moments.
	// `ev` is the native mouse event that begin the interaction.
	select: function(span, ev) {
		this.unselect(ev);
		this.renderSelection(span);
		this.reportSelection(span, ev);
	},


	// Renders a visual indication of the selection
	renderSelection: function(span) {
		// subclasses should implement
	},


	// Called when a new selection is made. Updates internal state and triggers handlers.
	reportSelection: function(span, ev) {
		this.isSelected = true;
		this.triggerSelect(span, ev);
	},


	// Triggers handlers to 'select'
	triggerSelect: function(span, ev) {
		this.trigger(
			'select',
			null,
			this.calendar.applyTimezone(span.start), // convert to calendar's tz for external API
			this.calendar.applyTimezone(span.end), // "
			ev
		);
	},


	// Undoes a selection. updates in the internal state and triggers handlers.
	// `ev` is the native mouse event that began the interaction.
	unselect: function(ev) {
		if (this.isSelected) {
			this.isSelected = false;
			if (this.destroySelection) {
				this.destroySelection(); // TODO: deprecate
			}
			this.unrenderSelection();
			this.trigger('unselect', null, ev);
		}
	},


	// Unrenders a visual indication of selection
	unrenderSelection: function() {
		// subclasses should implement
	},


	/* Event Selection
	------------------------------------------------------------------------------------------------------------------*/


	selectEvent: function(event) {
		if (!this.selectedEvent || this.selectedEvent !== event) {
			this.unselectEvent();
			this.renderedEventSegEach(function(seg) {
				seg.el.addClass('fc-selected');
			}, event);
			this.selectedEvent = event;
		}
	},


	unselectEvent: function() {
		if (this.selectedEvent) {
			this.renderedEventSegEach(function(seg) {
				seg.el.removeClass('fc-selected');
			}, this.selectedEvent);
			this.selectedEvent = null;
		}
	},


	isEventSelected: function(event) {
		// event references might change on refetchEvents(), while selectedEvent doesn't,
		// so compare IDs
		return this.selectedEvent && this.selectedEvent._id === event._id;
	},


	/* Mouse / Touch Unselecting (time range & event unselection)
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move consistently to down/start or up/end?
	// TODO: don't kill previous selection if touch scrolling


	handleDocumentMousedown: function(ev) {
		if (isPrimaryMouseButton(ev)) {
			this.processUnselect(ev);
		}
	},


	processUnselect: function(ev) {
		this.processRangeUnselect(ev);
		this.processEventUnselect(ev);
	},


	processRangeUnselect: function(ev) {
		var ignore;

		// is there a time-range selection?
		if (this.isSelected && this.opt('unselectAuto')) {
			// only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
			ignore = this.opt('unselectCancel');
			if (!ignore || !$(ev.target).closest(ignore).length) {
				this.unselect(ev);
			}
		}
	},


	processEventUnselect: function(ev) {
		if (this.selectedEvent) {
			if (!$(ev.target).closest('.fc-selected').length) {
				this.unselectEvent();
			}
		}
	},


	/* Day Click
	------------------------------------------------------------------------------------------------------------------*/


	// Triggers handlers to 'dayClick'
	// Span has start/end of the clicked area. Only the start is useful.
	triggerDayClick: function(span, dayEl, ev) {
		this.trigger(
			'dayClick',
			dayEl,
			this.calendar.applyTimezone(span.start), // convert to calendar's timezone for external API
			ev
		);
	},


	/* Date Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Initializes internal variables related to calculating hidden days-of-week
	initHiddenDays: function() {
		var hiddenDays = this.opt('hiddenDays') || []; // array of day-of-week indices that are hidden
		var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
		var dayCnt = 0;
		var i;

		if (this.opt('weekends') === false) {
			hiddenDays.push(0, 6); // 0=sunday, 6=saturday
		}

		for (i = 0; i < 7; i++) {
			if (
				!(isHiddenDayHash[i] = $.inArray(i, hiddenDays) !== -1)
			) {
				dayCnt++;
			}
		}

		if (!dayCnt) {
			throw 'invalid hiddenDays'; // all days were hidden? bad.
		}

		this.isHiddenDayHash = isHiddenDayHash;
	},


	// Is the current day hidden?
	// `day` is a day-of-week index (0-6), or a Moment
	isHiddenDay: function(day) {
		if (moment.isMoment(day)) {
			day = day.day();
		}
		return this.isHiddenDayHash[day];
	},


	// Incrementing the current day until it is no longer a hidden day, returning a copy.
	// If the initial value of `date` is not a hidden day, don't do anything.
	// Pass `isExclusive` as `true` if you are dealing with an end date.
	// `inc` defaults to `1` (increment one day forward each time)
	skipHiddenDays: function(date, inc, isExclusive) {
		var out = date.clone();
		inc = inc || 1;
		while (
			this.isHiddenDayHash[(out.day() + (isExclusive ? inc : 0) + 7) % 7]
		) {
			out.add(inc, 'days');
		}
		return out;
	},


	// Returns the date range of the full days the given range visually appears to occupy.
	// Returns a new range object.
	computeDayRange: function(range) {
		var startDay = range.start.clone().stripTime(); // the beginning of the day the range starts
		var end = range.end;
		var endDay = null;
		var endTimeMS;

		if (end) {
			endDay = end.clone().stripTime(); // the beginning of the day the range exclusively ends
			endTimeMS = +end.time(); // # of milliseconds into `endDay`

			// If the end time is actually inclusively part of the next day and is equal to or
			// beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
			// Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
			if (endTimeMS && endTimeMS >= this.nextDayThreshold) {
				endDay.add(1, 'days');
			}
		}

		// If no end was specified, or if it is within `startDay` but not past nextDayThreshold,
		// assign the default duration of one day.
		if (!end || endDay <= startDay) {
			endDay = startDay.clone().add(1, 'days');
		}

		return { start: startDay, end: endDay };
	},


	// Does the given event visually appear to occupy more than one day?
	isMultiDayEvent: function(event) {
		var range = this.computeDayRange(event); // event is range-ish

		return range.end.diff(range.start, 'days') > 1;
	}

});

;;

/*
Embodies a div that has potential scrollbars
*/
var Scroller = FC.Scroller = Class.extend({

	el: null, // the guaranteed outer element
	scrollEl: null, // the element with the scrollbars
	overflowX: null,
	overflowY: null,


	constructor: function(options) {
		options = options || {};
		this.overflowX = options.overflowX || options.overflow || 'auto';
		this.overflowY = options.overflowY || options.overflow || 'auto';
	},


	render: function() {
		this.el = this.renderEl();
		this.applyOverflow();
	},


	renderEl: function() {
		return (this.scrollEl = $('<div class="fc-scroller"></div>'));
	},


	// sets to natural height, unlocks overflow
	clear: function() {
		this.setHeight('auto');
		this.applyOverflow();
	},


	destroy: function() {
		this.el.remove();
	},


	// Overflow
	// -----------------------------------------------------------------------------------------------------------------


	applyOverflow: function() {
		this.scrollEl.css({
			'overflow-x': this.overflowX,
			'overflow-y': this.overflowY
		});
	},


	// Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
	// Useful for preserving scrollbar widths regardless of future resizes.
	// Can pass in scrollbarWidths for optimization.
	lockOverflow: function(scrollbarWidths) {
		var overflowX = this.overflowX;
		var overflowY = this.overflowY;

		scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();

		if (overflowX === 'auto') {
			overflowX = (
					scrollbarWidths.top || scrollbarWidths.bottom || // horizontal scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		if (overflowY === 'auto') {
			overflowY = (
					scrollbarWidths.left || scrollbarWidths.right || // vertical scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		this.scrollEl.css({ 'overflow-x': overflowX, 'overflow-y': overflowY });
	},


	// Getters / Setters
	// -----------------------------------------------------------------------------------------------------------------


	setHeight: function(height) {
		this.scrollEl.height(height);
	},


	getScrollTop: function() {
		return this.scrollEl.scrollTop();
	},


	setScrollTop: function(top) {
		this.scrollEl.scrollTop(top);
	},


	getClientWidth: function() {
		return this.scrollEl[0].clientWidth;
	},


	getClientHeight: function() {
		return this.scrollEl[0].clientHeight;
	},


	getScrollbarWidths: function() {
		return getScrollbarWidths(this.scrollEl);
	}

});

;;

var Calendar = FC.Calendar = Class.extend({

	dirDefaults: null, // option defaults related to LTR or RTL
	localeDefaults: null, // option defaults related to current locale
	overrides: null, // option overrides given to the fullCalendar constructor
	dynamicOverrides: null, // options set with dynamic setter method. higher precedence than view overrides.
	options: null, // all defaults combined with overrides
	viewSpecCache: null, // cache of view definitions
	view: null, // current View object
	header: null,
	loadingLevel: 0, // number of simultaneous loading tasks


	// a lot of this class' OOP logic is scoped within this constructor function,
	// but in the future, write individual methods on the prototype.
	constructor: Calendar_constructor,


	// Subclasses can override this for initialization logic after the constructor has been called
	initialize: function() {
	},


	// Computes the flattened options hash for the calendar and assigns to `this.options`.
	// Assumes this.overrides and this.dynamicOverrides have already been initialized.
	populateOptionsHash: function() {
		var locale, localeDefaults;
		var isRTL, dirDefaults;

		locale = firstDefined( // explicit locale option given?
			this.dynamicOverrides.locale,
			this.overrides.locale
		);
		localeDefaults = localeOptionHash[locale];
		if (!localeDefaults) { // explicit locale option not given or invalid?
			locale = Calendar.defaults.locale;
			localeDefaults = localeOptionHash[locale] || {};
		}

		isRTL = firstDefined( // based on options computed so far, is direction RTL?
			this.dynamicOverrides.isRTL,
			this.overrides.isRTL,
			localeDefaults.isRTL,
			Calendar.defaults.isRTL
		);
		dirDefaults = isRTL ? Calendar.rtlDefaults : {};

		this.dirDefaults = dirDefaults;
		this.localeDefaults = localeDefaults;
		this.options = mergeOptions([ // merge defaults and overrides. lowest to highest precedence
			Calendar.defaults, // global defaults
			dirDefaults,
			localeDefaults,
			this.overrides,
			this.dynamicOverrides
		]);
		populateInstanceComputableOptions(this.options); // fill in gaps with computed options
	},


	// Gets information about how to create a view. Will use a cache.
	getViewSpec: function(viewType) {
		var cache = this.viewSpecCache;

		return cache[viewType] || (cache[viewType] = this.buildViewSpec(viewType));
	},


	// Given a duration singular unit, like "week" or "day", finds a matching view spec.
	// Preference is given to views that have corresponding buttons.
	getUnitViewSpec: function(unit) {
		var viewTypes;
		var i;
		var spec;

		if ($.inArray(unit, intervalUnits) != -1) {

			// put views that have buttons first. there will be duplicates, but oh well
			viewTypes = this.header.getViewsWithButtons();
			$.each(FC.views, function(viewType) { // all views
				viewTypes.push(viewType);
			});

			for (i = 0; i < viewTypes.length; i++) {
				spec = this.getViewSpec(viewTypes[i]);
				if (spec) {
					if (spec.singleUnit == unit) {
						return spec;
					}
				}
			}
		}
	},


	// Builds an object with information on how to create a given view
	buildViewSpec: function(requestedViewType) {
		var viewOverrides = this.overrides.views || {};
		var specChain = []; // for the view. lowest to highest priority
		var defaultsChain = []; // for the view. lowest to highest priority
		var overridesChain = []; // for the view. lowest to highest priority
		var viewType = requestedViewType;
		var spec; // for the view
		var overrides; // for the view
		var duration;
		var unit;

		// iterate from the specific view definition to a more general one until we hit an actual View class
		while (viewType) {
			spec = fcViews[viewType];
			overrides = viewOverrides[viewType];
			viewType = null; // clear. might repopulate for another iteration

			if (typeof spec === 'function') { // TODO: deprecate
				spec = { 'class': spec };
			}

			if (spec) {
				specChain.unshift(spec);
				defaultsChain.unshift(spec.defaults || {});
				duration = duration || spec.duration;
				viewType = viewType || spec.type;
			}

			if (overrides) {
				overridesChain.unshift(overrides); // view-specific option hashes have options at zero-level
				duration = duration || overrides.duration;
				viewType = viewType || overrides.type;
			}
		}

		spec = mergeProps(specChain);
		spec.type = requestedViewType;
		if (!spec['class']) {
			return false;
		}

		if (duration) {
			duration = moment.duration(duration);
			if (duration.valueOf()) { // valid?
				spec.duration = duration;
				unit = computeIntervalUnit(duration);

				// view is a single-unit duration, like "week" or "day"
				// incorporate options for this. lowest priority
				if (duration.as(unit) === 1) {
					spec.singleUnit = unit;
					overridesChain.unshift(viewOverrides[unit] || {});
				}
			}
		}

		spec.defaults = mergeOptions(defaultsChain);
		spec.overrides = mergeOptions(overridesChain);

		this.buildViewSpecOptions(spec);
		this.buildViewSpecButtonText(spec, requestedViewType);

		return spec;
	},


	// Builds and assigns a view spec's options object from its already-assigned defaults and overrides
	buildViewSpecOptions: function(spec) {
		spec.options = mergeOptions([ // lowest to highest priority
			Calendar.defaults, // global defaults
			spec.defaults, // view's defaults (from ViewSubclass.defaults)
			this.dirDefaults,
			this.localeDefaults, // locale and dir take precedence over view's defaults!
			this.overrides, // calendar's overrides (options given to constructor)
			spec.overrides, // view's overrides (view-specific options)
			this.dynamicOverrides // dynamically set via setter. highest precedence
		]);
		populateInstanceComputableOptions(spec.options);
	},


	// Computes and assigns a view spec's buttonText-related options
	buildViewSpecButtonText: function(spec, requestedViewType) {

		// given an options object with a possible `buttonText` hash, lookup the buttonText for the
		// requested view, falling back to a generic unit entry like "week" or "day"
		function queryButtonText(options) {
			var buttonText = options.buttonText || {};
			return buttonText[requestedViewType] ||
				// view can decide to look up a certain key
				(spec.buttonTextKey ? buttonText[spec.buttonTextKey] : null) ||
				// a key like "month"
				(spec.singleUnit ? buttonText[spec.singleUnit] : null);
		}

		// highest to lowest priority
		spec.buttonTextOverride =
			queryButtonText(this.dynamicOverrides) ||
			queryButtonText(this.overrides) || // constructor-specified buttonText lookup hash takes precedence
			spec.overrides.buttonText; // `buttonText` for view-specific options is a string

		// highest to lowest priority. mirrors buildViewSpecOptions
		spec.buttonTextDefault =
			queryButtonText(this.localeDefaults) ||
			queryButtonText(this.dirDefaults) ||
			spec.defaults.buttonText || // a single string. from ViewSubclass.defaults
			queryButtonText(Calendar.defaults) ||
			(spec.duration ? this.humanizeDuration(spec.duration) : null) || // like "3 days"
			requestedViewType; // fall back to given view name
	},


	// Given a view name for a custom view or a standard view, creates a ready-to-go View object
	instantiateView: function(viewType) {
		var spec = this.getViewSpec(viewType);

		return new spec['class'](this, viewType, spec.options, spec.duration);
	},


	// Returns a boolean about whether the view is okay to instantiate at some point
	isValidViewType: function(viewType) {
		return Boolean(this.getViewSpec(viewType));
	},


	// Should be called when any type of async data fetching begins
	pushLoading: function() {
		if (!(this.loadingLevel++)) {
			this.trigger('loading', null, true, this.view);
		}
	},


	// Should be called when any type of async data fetching completes
	popLoading: function() {
		if (!(--this.loadingLevel)) {
			this.trigger('loading', null, false, this.view);
		}
	},


	// Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
	buildSelectSpan: function(zonedStartInput, zonedEndInput) {
		var start = this.moment(zonedStartInput).stripZone();
		var end;

		if (zonedEndInput) {
			end = this.moment(zonedEndInput).stripZone();
		}
		else if (start.hasTime()) {
			end = start.clone().add(this.defaultTimedEventDuration);
		}
		else {
			end = start.clone().add(this.defaultAllDayEventDuration);
		}

		return { start: start, end: end };
	}

});


Calendar.mixin(EmitterMixin);


function Calendar_constructor(element, overrides) {
	var t = this;


	// Exports
	// -----------------------------------------------------------------------------------

	t.render = render;
	t.destroy = destroy;
	t.refetchEvents = refetchEvents;
	t.refetchEventSources = refetchEventSources;
	t.reportEvents = reportEvents;
	t.reportEventChange = reportEventChange;
	t.rerenderEvents = renderEvents; // `renderEvents` serves as a rerender. an API method
	t.changeView = renderView; // `renderView` will switch to another view
	t.select = select;
	t.unselect = unselect;
	t.prev = prev;
	t.next = next;
	t.prevYear = prevYear;
	t.nextYear = nextYear;
	t.today = today;
	t.gotoDate = gotoDate;
	t.incrementDate = incrementDate;
	t.zoomTo = zoomTo;
	t.getDate = getDate;
	t.getCalendar = getCalendar;
	t.getView = getView;
	t.option = option; // getter/setter method
	t.trigger = trigger;


	// Options
	// -----------------------------------------------------------------------------------

	t.dynamicOverrides = {};
	t.viewSpecCache = {};
	t.optionHandlers = {}; // for Calendar.options.js
	t.overrides = $.extend({}, overrides); // make a copy

	t.populateOptionsHash(); // sets this.options



	// Locale-data Internals
	// -----------------------------------------------------------------------------------
	// Apply overrides to the current locale's data

	var localeData;

	// Called immediately, and when any of the options change.
	// Happens before any internal objects rebuild or rerender, because this is very core.
	t.bindOptions([
		'locale', 'monthNames', 'monthNamesShort', 'dayNames', 'dayNamesShort', 'firstDay', 'weekNumberCalculation'
	], function(locale, monthNames, monthNamesShort, dayNames, dayNamesShort, firstDay, weekNumberCalculation) {

		// normalize
		if (weekNumberCalculation === 'iso') {
			weekNumberCalculation = 'ISO'; // normalize
		}

		localeData = createObject( // make a cheap copy
			getMomentLocaleData(locale) // will fall back to en
		);

		if (monthNames) {
			localeData._months = monthNames;
		}
		if (monthNamesShort) {
			localeData._monthsShort = monthNamesShort;
		}
		if (dayNames) {
			localeData._weekdays = dayNames;
		}
		if (dayNamesShort) {
			localeData._weekdaysShort = dayNamesShort;
		}

		if (firstDay == null && weekNumberCalculation === 'ISO') {
			firstDay = 1;
		}
		if (firstDay != null) {
			var _week = createObject(localeData._week); // _week: { dow: # }
			_week.dow = firstDay;
			localeData._week = _week;
		}

		if ( // whitelist certain kinds of input
			weekNumberCalculation === 'ISO' ||
			weekNumberCalculation === 'local' ||
			typeof weekNumberCalculation === 'function'
		) {
			localeData._fullCalendar_weekCalc = weekNumberCalculation; // moment-ext will know what to do with it
		}

		// If the internal current date object already exists, move to new locale.
		// We do NOT need to do this technique for event dates, because this happens when converting to "segments".
		if (date) {
			localizeMoment(date); // sets to localeData
		}
	});


	// Calendar-specific Date Utilities
	// -----------------------------------------------------------------------------------


	t.defaultAllDayEventDuration = moment.duration(t.options.defaultAllDayEventDuration);
	t.defaultTimedEventDuration = moment.duration(t.options.defaultTimedEventDuration);


	// Builds a moment using the settings of the current calendar: timezone and locale.
	// Accepts anything the vanilla moment() constructor accepts.
	t.moment = function() {
		var mom;

		if (t.options.timezone === 'local') {
			mom = FC.moment.apply(null, arguments);

			// Force the moment to be local, because FC.moment doesn't guarantee it.
			if (mom.hasTime()) { // don't give ambiguously-timed moments a local zone
				mom.local();
			}
		}
		else if (t.options.timezone === 'UTC') {
			mom = FC.moment.utc.apply(null, arguments); // process as UTC
		}
		else {
			mom = FC.moment.parseZone.apply(null, arguments); // let the input decide the zone
		}

		localizeMoment(mom);

		return mom;
	};


	// Updates the given moment's locale settings to the current calendar locale settings.
	function localizeMoment(mom) {
		mom._locale = localeData;
	}
	t.localizeMoment = localizeMoment;


	// Returns a boolean about whether or not the calendar knows how to calculate
	// the timezone offset of arbitrary dates in the current timezone.
	t.getIsAmbigTimezone = function() {
		return t.options.timezone !== 'local' && t.options.timezone !== 'UTC';
	};


	// Returns a copy of the given date in the current timezone. Has no effect on dates without times.
	t.applyTimezone = function(date) {
		if (!date.hasTime()) {
			return date.clone();
		}

		var zonedDate = t.moment(date.toArray());
		var timeAdjust = date.time() - zonedDate.time();
		var adjustedZonedDate;

		// Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
		if (timeAdjust) { // is the time result different than expected?
			adjustedZonedDate = zonedDate.clone().add(timeAdjust); // add milliseconds
			if (date.time() - adjustedZonedDate.time() === 0) { // does it match perfectly now?
				zonedDate = adjustedZonedDate;
			}
		}

		return zonedDate;
	};


	// Returns a moment for the current date, as defined by the client's computer or from the `now` option.
	// Will return an moment with an ambiguous timezone.
	t.getNow = function() {
		var now = t.options.now;
		if (typeof now === 'function') {
			now = now();
		}
		return t.moment(now).stripZone();
	};


	// Get an event's normalized end date. If not present, calculate it from the defaults.
	t.getEventEnd = function(event) {
		if (event.end) {
			return event.end.clone();
		}
		else {
			return t.getDefaultEventEnd(event.allDay, event.start);
		}
	};


	// Given an event's allDay status and start date, return what its fallback end date should be.
	// TODO: rename to computeDefaultEventEnd
	t.getDefaultEventEnd = function(allDay, zonedStart) {
		var end = zonedStart.clone();

		if (allDay) {
			end.stripTime().add(t.defaultAllDayEventDuration);
		}
		else {
			end.add(t.defaultTimedEventDuration);
		}

		if (t.getIsAmbigTimezone()) {
			end.stripZone(); // we don't know what the tzo should be
		}

		return end;
	};


	// Produces a human-readable string for the given duration.
	// Side-effect: changes the locale of the given duration.
	t.humanizeDuration = function(duration) {
		return duration.locale(t.options.locale).humanize();
	};


	
	// Imports
	// -----------------------------------------------------------------------------------


	EventManager.call(t);
	var isFetchNeeded = t.isFetchNeeded;
	var fetchEvents = t.fetchEvents;
	var fetchEventSources = t.fetchEventSources;



	// Locals
	// -----------------------------------------------------------------------------------


	var _element = element[0];
	var header;
	var content;
	var tm; // for making theme classes
	var currentView; // NOTE: keep this in sync with this.view
	var viewsByType = {}; // holds all instantiated view instances, current or not
	var suggestedViewHeight;
	var windowResizeProxy; // wraps the windowResize function
	var ignoreWindowResize = 0;
	var events = [];
	var date; // unzoned
	
	
	
	// Main Rendering
	// -----------------------------------------------------------------------------------


	// compute the initial ambig-timezone date
	if (t.options.defaultDate != null) {
		date = t.moment(t.options.defaultDate).stripZone();
	}
	else {
		date = t.getNow(); // getNow already returns unzoned
	}
	
	
	function render() {
		if (!content) {
			initialRender();
		}
		else if (elementVisible()) {
			// mainly for the public API
			calcSize();
			renderView();
		}
	}
	
	
	function initialRender() {
		element.addClass('fc');

		// event delegation for nav links
		element.on('click.fc', 'a[data-goto]', function(ev) {
			var anchorEl = $(this);
			var gotoOptions = anchorEl.data('goto'); // will automatically parse JSON
			var date = t.moment(gotoOptions.date);
			var viewType = gotoOptions.type;

			// property like "navLinkDayClick". might be a string or a function
			var customAction = currentView.opt('navLink' + capitaliseFirstLetter(viewType) + 'Click');

			if (typeof customAction === 'function') {
				customAction(date, ev);
			}
			else {
				if (typeof customAction === 'string') {
					viewType = customAction;
				}
				zoomTo(date, viewType);
			}
		});

		// called immediately, and upon option change
		t.bindOption('theme', function(theme) {
			tm = theme ? 'ui' : 'fc'; // affects a larger scope
			element.toggleClass('ui-widget', theme);
			element.toggleClass('fc-unthemed', !theme);
		});

		// called immediately, and upon option change.
		// HACK: locale often affects isRTL, so we explicitly listen to that too.
		t.bindOptions([ 'isRTL', 'locale' ], function(isRTL) {
			element.toggleClass('fc-ltr', !isRTL);
			element.toggleClass('fc-rtl', isRTL);
		});

		content = $("<div class='fc-view-container'/>").prependTo(element);

		header = t.header = new Header(t);
		renderHeader();

		renderView(t.options.defaultView);

		if (t.options.handleWindowResize) {
			windowResizeProxy = debounce(windowResize, t.options.windowResizeDelay); // prevents rapid calls
			$(window).resize(windowResizeProxy);
		}
	}


	// can be called repeatedly and Header will rerender
	function renderHeader() {
		header.render();
		if (header.el) {
			element.prepend(header.el);
		}
	}
	
	
	function destroy() {

		if (currentView) {
			currentView.removeElement();

			// NOTE: don't null-out currentView/t.view in case API methods are called after destroy.
			// It is still the "current" view, just not rendered.
		}

		header.removeElement();
		content.remove();
		element.removeClass('fc fc-ltr fc-rtl fc-unthemed ui-widget');

		element.off('.fc'); // unbind nav link handlers

		if (windowResizeProxy) {
			$(window).unbind('resize', windowResizeProxy);
		}
	}
	
	
	function elementVisible() {
		return element.is(':visible');
	}
	
	

	// View Rendering
	// -----------------------------------------------------------------------------------


	// Renders a view because of a date change, view-type change, or for the first time.
	// If not given a viewType, keep the current view but render different dates.
	// Accepts an optional scroll state to restore to.
	function renderView(viewType, explicitScrollState) {
		ignoreWindowResize++;

		// if viewType is changing, remove the old view's rendering
		if (currentView && viewType && currentView.type !== viewType) {
			freezeContentHeight(); // prevent a scroll jump when view element is removed
			clearView();
		}

		// if viewType changed, or the view was never created, create a fresh view
		if (!currentView && viewType) {
			currentView = t.view =
				viewsByType[viewType] ||
				(viewsByType[viewType] = t.instantiateView(viewType));

			currentView.setElement(
				$("<div class='fc-view fc-" + viewType + "-view' />").appendTo(content)
			);
			header.activateButton(viewType);
		}

		if (currentView) {

			// in case the view should render a period of time that is completely hidden
			date = currentView.massageCurrentDate(date);

			// render or rerender the view
			if (
				!currentView.displaying ||
				!( // NOT within interval range signals an implicit date window change
					date >= currentView.intervalStart &&
					date < currentView.intervalEnd
				)
			) {
				if (elementVisible()) {

					currentView.display(date, explicitScrollState); // will call freezeContentHeight
					unfreezeContentHeight(); // immediately unfreeze regardless of whether display is async

					// need to do this after View::render, so dates are calculated
					updateHeaderTitle();
					updateTodayButton();

					getAndRenderEvents();
				}
			}
		}

		unfreezeContentHeight(); // undo any lone freezeContentHeight calls
		ignoreWindowResize--;
	}


	// Unrenders the current view and reflects this change in the Header.
	// Unregsiters the `currentView`, but does not remove from viewByType hash.
	function clearView() {
		header.deactivateButton(currentView.type);
		currentView.removeElement();
		currentView = t.view = null;
	}


	// Destroys the view, including the view object. Then, re-instantiates it and renders it.
	// Maintains the same scroll state.
	// TODO: maintain any other user-manipulated state.
	function reinitView() {
		ignoreWindowResize++;
		freezeContentHeight();

		var viewType = currentView.type;
		var scrollState = currentView.queryScroll();
		clearView();
		renderView(viewType, scrollState);

		unfreezeContentHeight();
		ignoreWindowResize--;
	}

	

	// Resizing
	// -----------------------------------------------------------------------------------


	t.getSuggestedViewHeight = function() {
		if (suggestedViewHeight === undefined) {
			calcSize();
		}
		return suggestedViewHeight;
	};


	t.isHeightAuto = function() {
		return t.options.contentHeight === 'auto' || t.options.height === 'auto';
	};
	
	
	function updateSize(shouldRecalc) {
		if (elementVisible()) {

			if (shouldRecalc) {
				_calcSize();
			}

			ignoreWindowResize++;
			currentView.updateSize(true); // isResize=true. will poll getSuggestedViewHeight() and isHeightAuto()
			ignoreWindowResize--;

			return true; // signal success
		}
	}


	function calcSize() {
		if (elementVisible()) {
			_calcSize();
		}
	}
	
	
	function _calcSize() { // assumes elementVisible
		var contentHeightInput = t.options.contentHeight;
		var heightInput = t.options.height;

		if (typeof contentHeightInput === 'number') { // exists and not 'auto'
			suggestedViewHeight = contentHeightInput;
		}
		else if (typeof contentHeightInput === 'function') { // exists and is a function
			suggestedViewHeight = contentHeightInput();
		}
		else if (typeof heightInput === 'number') { // exists and not 'auto'
			suggestedViewHeight = heightInput - queryHeaderHeight();
		}
		else if (typeof heightInput === 'function') { // exists and is a function
			suggestedViewHeight = heightInput() - queryHeaderHeight();
		}
		else if (heightInput === 'parent') { // set to height of parent element
			suggestedViewHeight = element.parent().height() - queryHeaderHeight();
		}
		else {
			suggestedViewHeight = Math.round(content.width() / Math.max(t.options.aspectRatio, .5));
		}
	}


	function queryHeaderHeight() {
		return header.el ? header.el.outerHeight(true) : 0; // includes margin
	}
	
	
	function windowResize(ev) {
		if (
			!ignoreWindowResize &&
			ev.target === window && // so we don't process jqui "resize" events that have bubbled up
			currentView.start // view has already been rendered
		) {
			if (updateSize(true)) {
				currentView.trigger('windowResize', _element);
			}
		}
	}
	
	
	
	/* Event Fetching/Rendering
	-----------------------------------------------------------------------------*/
	// TODO: going forward, most of this stuff should be directly handled by the view


	function refetchEvents() { // can be called as an API method
		fetchAndRenderEvents();
	}


	// TODO: move this into EventManager?
	function refetchEventSources(matchInputs) {
		fetchEventSources(t.getEventSourcesByMatchArray(matchInputs));
	}


	function renderEvents() { // destroys old events if previously rendered
		if (elementVisible()) {
			freezeContentHeight();
			currentView.displayEvents(events);
			unfreezeContentHeight();
		}
	}
	

	function getAndRenderEvents() {
		if (!t.options.lazyFetching || isFetchNeeded(currentView.start, currentView.end)) {
			fetchAndRenderEvents();
		}
		else {
			renderEvents();
		}
	}


	function fetchAndRenderEvents() {
		fetchEvents(currentView.start, currentView.end);
			// ... will call reportEvents
			// ... which will call renderEvents
	}

	
	// called when event data arrives
	function reportEvents(_events) {
		events = _events;
		renderEvents();
	}


	// called when a single event's data has been changed
	function reportEventChange() {
		renderEvents();
	}



	/* Header Updating
	-----------------------------------------------------------------------------*/


	function updateHeaderTitle() {
		header.updateTitle(currentView.title);
	}


	function updateTodayButton() {
		var now = t.getNow();

		if (now >= currentView.intervalStart && now < currentView.intervalEnd) {
			header.disableButton('today');
		}
		else {
			header.enableButton('today');
		}
	}
	


	/* Selection
	-----------------------------------------------------------------------------*/
	

	// this public method receives start/end dates in any format, with any timezone
	function select(zonedStartInput, zonedEndInput) {
		currentView.select(
			t.buildSelectSpan.apply(t, arguments)
		);
	}
	

	function unselect() { // safe to be called before renderView
		if (currentView) {
			currentView.unselect();
		}
	}
	
	
	
	/* Date
	-----------------------------------------------------------------------------*/
	
	
	function prev() {
		date = currentView.computePrevDate(date);
		renderView();
	}
	
	
	function next() {
		date = currentView.computeNextDate(date);
		renderView();
	}
	
	
	function prevYear() {
		date.add(-1, 'years');
		renderView();
	}
	
	
	function nextYear() {
		date.add(1, 'years');
		renderView();
	}
	
	
	function today() {
		date = t.getNow();
		renderView();
	}
	
	
	function gotoDate(zonedDateInput) {
		date = t.moment(zonedDateInput).stripZone();
		renderView();
	}
	
	
	function incrementDate(delta) {
		date.add(moment.duration(delta));
		renderView();
	}


	// Forces navigation to a view for the given date.
	// `viewType` can be a specific view name or a generic one like "week" or "day".
	function zoomTo(newDate, viewType) {
		var spec;

		viewType = viewType || 'day'; // day is default zoom
		spec = t.getViewSpec(viewType) || t.getUnitViewSpec(viewType);

		date = newDate.clone();
		renderView(spec ? spec.type : null);
	}
	
	
	// for external API
	function getDate() {
		return t.applyTimezone(date); // infuse the calendar's timezone
	}



	/* Height "Freezing"
	-----------------------------------------------------------------------------*/
	// TODO: move this into the view

	t.freezeContentHeight = freezeContentHeight;
	t.unfreezeContentHeight = unfreezeContentHeight;


	function freezeContentHeight() {
		content.css({
			width: '100%',
			height: content.height(),
			overflow: 'hidden'
		});
	}


	function unfreezeContentHeight() {
		content.css({
			width: '',
			height: '',
			overflow: ''
		});
	}
	
	
	
	/* Misc
	-----------------------------------------------------------------------------*/
	

	function getCalendar() {
		return t;
	}

	
	function getView() {
		return currentView;
	}
	
	
	function option(name, value) {
		var newOptionHash;

		if (typeof name === 'string') {
			if (value === undefined) { // getter
				return t.options[name];
			}
			else { // setter for individual option
				newOptionHash = {};
				newOptionHash[name] = value;
				setOptions(newOptionHash);
			}
		}
		else if (typeof name === 'object') { // compound setter with object input
			setOptions(name);
		}
	}


	function setOptions(newOptionHash) {
		var optionCnt = 0;
		var optionName;

		for (optionName in newOptionHash) {
			t.dynamicOverrides[optionName] = newOptionHash[optionName];
		}

		t.viewSpecCache = {}; // the dynamic override invalidates the options in this cache, so just clear it
		t.populateOptionsHash(); // this.options needs to be recomputed after the dynamic override

		// trigger handlers after this.options has been updated
		for (optionName in newOptionHash) {
			t.triggerOptionHandlers(optionName); // recall bindOption/bindOptions
			optionCnt++;
		}

		// special-case handling of single option change.
		// if only one option change, `optionName` will be its name.
		if (optionCnt === 1) {
			if (optionName === 'height' || optionName === 'contentHeight' || optionName === 'aspectRatio') {
				updateSize(true); // true = allow recalculation of height
				return;
			}
			else if (optionName === 'defaultDate') {
				return; // can't change date this way. use gotoDate instead
			}
			else if (optionName === 'businessHours') {
				if (currentView) {
					currentView.unrenderBusinessHours();
					currentView.renderBusinessHours();
				}
				return;
			}
			else if (optionName === 'timezone') {
				t.rezoneArrayEventSources();
				refetchEvents();
				return;
			}
		}

		// catch-all. rerender the header and rebuild/rerender the current view
		renderHeader();
		viewsByType = {}; // even non-current views will be affected by this option change. do before rerender
		reinitView();
	}
	
	
	function trigger(name, thisObj) { // overrides the Emitter's trigger method :(
		var args = Array.prototype.slice.call(arguments, 2);

		thisObj = thisObj || _element;
		this.triggerWith(name, thisObj, args); // Emitter's method

		if (t.options[name]) {
			return t.options[name].apply(thisObj, args);
		}
	}

	t.initialize();
}

;;
/*
Options binding/triggering system.
*/
Calendar.mixin({

	// A map of option names to arrays of handler objects. Initialized to {} in Calendar.
	// Format for a handler object:
	// {
	//   func // callback function to be called upon change
	//   names // option names whose values should be given to func
	// }
	optionHandlers: null, 

	// Calls handlerFunc immediately, and when the given option has changed.
	// handlerFunc will be given the option value.
	bindOption: function(optionName, handlerFunc) {
		this.bindOptions([ optionName ], handlerFunc);
	},

	// Calls handlerFunc immediately, and when any of the given options change.
	// handlerFunc will be given each option value as ordered function arguments.
	bindOptions: function(optionNames, handlerFunc) {
		var handlerObj = { func: handlerFunc, names: optionNames };
		var i;

		for (i = 0; i < optionNames.length; i++) {
			this.registerOptionHandlerObj(optionNames[i], handlerObj);
		}

		this.triggerOptionHandlerObj(handlerObj);
	},

	// Puts the given handler object into the internal hash
	registerOptionHandlerObj: function(optionName, handlerObj) {
		(this.optionHandlers[optionName] || (this.optionHandlers[optionName] = []))
			.push(handlerObj);
	},

	// Reports that the given option has changed, and calls all appropriate handlers.
	triggerOptionHandlers: function(optionName) {
		var handlerObjs = this.optionHandlers[optionName] || [];
		var i;

		for (i = 0; i < handlerObjs.length; i++) {
			this.triggerOptionHandlerObj(handlerObjs[i]);
		}
	},

	// Calls the callback for a specific handler object, passing in the appropriate arguments.
	triggerOptionHandlerObj: function(handlerObj) {
		var optionNames = handlerObj.names;
		var optionValues = [];
		var i;

		for (i = 0; i < optionNames.length; i++) {
			optionValues.push(this.options[optionNames[i]]);
		}

		handlerObj.func.apply(this, optionValues); // maintain the Calendar's `this` context
	}

});

;;

Calendar.defaults = {

	titleRangeSeparator: ' \u2013 ', // en dash
	monthYearFormat: 'MMMM YYYY', // required for en. other locales rely on datepicker computable option

	defaultTimedEventDuration: '02:00:00',
	defaultAllDayEventDuration: { days: 1 },
	forceEventDuration: false,
	nextDayThreshold: '09:00:00', // 9am

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	weekNumbers: false,

	weekNumberTitle: 'W',
	weekNumberCalculation: 'local',
	
	//editable: false,

	//nowIndicator: false,

	scrollTime: '06:00:00',
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	timezoneParam: 'timezone',

	timezone: false,

	//allDayDefault: undefined,

	// locale
	isRTL: false,
	buttonText: {
		prev: "prev",
		next: "next",
		prevYear: "prev year",
		nextYear: "next year",
		year: 'year', // TODO: locale files need to specify this
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},

	buttonIcons: {
		prev: 'left-single-arrow',
		next: 'right-single-arrow',
		prevYear: 'left-double-arrow',
		nextYear: 'right-double-arrow'
	},

	allDayText: 'all-day',
	
	// jquery-ui theming
	theme: false,
	themeButtonIcons: {
		prev: 'circle-triangle-w',
		next: 'circle-triangle-e',
		prevYear: 'seek-prev',
		nextYear: 'seek-next'
	},

	//eventResizableFromStart: false,
	dragOpacity: .75,
	dragRevertDuration: 500,
	dragScroll: true,
	
	//selectable: false,
	unselectAuto: true,
	
	dropAccept: '*',

	eventOrder: 'title',

	eventLimit: false,
	eventLimitText: 'more',
	eventLimitClick: 'popover',
	dayPopoverFormat: 'LL',
	
	handleWindowResize: true,
	windowResizeDelay: 100, // milliseconds before an updateSize happens

	longPressDelay: 1000
	
};


Calendar.englishDefaults = { // used by locale.js
	dayPopoverFormat: 'dddd, MMMM D'
};


Calendar.rtlDefaults = { // right-to-left defaults
	header: { // TODO: smarter solution (first/center/last ?)
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonIcons: {
		prev: 'right-single-arrow',
		next: 'left-single-arrow',
		prevYear: 'right-double-arrow',
		nextYear: 'left-double-arrow'
	},
	themeButtonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w',
		nextYear: 'seek-prev',
		prevYear: 'seek-next'
	}
};

;;

var localeOptionHash = FC.locales = {}; // initialize and expose


// TODO: document the structure and ordering of a FullCalendar locale file


// Initialize jQuery UI datepicker translations while using some of the translations
// Will set this as the default locales for datepicker.
FC.datepickerLocale = function(localeCode, dpLocaleCode, dpOptions) {

	// get the FullCalendar internal option hash for this locale. create if necessary
	var fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// transfer some simple options from datepicker to fc
	fcOptions.isRTL = dpOptions.isRTL;
	fcOptions.weekNumberTitle = dpOptions.weekHeader;

	// compute some more complex options from datepicker
	$.each(dpComputableOptions, function(name, func) {
		fcOptions[name] = func(dpOptions);
	});

	// is jQuery UI Datepicker is on the page?
	if ($.datepicker) {

		// Register the locale data.
		// FullCalendar and MomentJS use locale codes like "pt-br" but Datepicker
		// does it like "pt-BR" or if it doesn't have the locale, maybe just "pt".
		// Make an alias so the locale can be referenced either way.
		$.datepicker.regional[dpLocaleCode] =
			$.datepicker.regional[localeCode] = // alias
				dpOptions;

		// Alias 'en' to the default locale data. Do this every time.
		$.datepicker.regional.en = $.datepicker.regional[''];

		// Set as Datepicker's global defaults.
		$.datepicker.setDefaults(dpOptions);
	}
};


// Sets FullCalendar-specific translations. Will set the locales as the global default.
FC.locale = function(localeCode, newFcOptions) {
	var fcOptions;
	var momOptions;

	// get the FullCalendar internal option hash for this locale. create if necessary
	fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// provided new options for this locales? merge them in
	if (newFcOptions) {
		fcOptions = localeOptionHash[localeCode] = mergeOptions([ fcOptions, newFcOptions ]);
	}

	// compute locale options that weren't defined.
	// always do this. newFcOptions can be undefined when initializing from i18n file,
	// so no way to tell if this is an initialization or a default-setting.
	momOptions = getMomentLocaleData(localeCode); // will fall back to en
	$.each(momComputableOptions, function(name, func) {
		if (fcOptions[name] == null) {
			fcOptions[name] = func(momOptions, fcOptions);
		}
	});

	// set it as the default locale for FullCalendar
	Calendar.defaults.locale = localeCode;
};


// NOTE: can't guarantee any of these computations will run because not every locale has datepicker
// configs, so make sure there are English fallbacks for these in the defaults file.
var dpComputableOptions = {

	buttonText: function(dpOptions) {
		return {
			// the translations sometimes wrongly contain HTML entities
			prev: stripHtmlEntities(dpOptions.prevText),
			next: stripHtmlEntities(dpOptions.nextText),
			today: stripHtmlEntities(dpOptions.currentText)
		};
	},

	// Produces format strings like "MMMM YYYY" -> "September 2014"
	monthYearFormat: function(dpOptions) {
		return dpOptions.showMonthAfterYear ?
			'YYYY[' + dpOptions.yearSuffix + '] MMMM' :
			'MMMM YYYY[' + dpOptions.yearSuffix + ']';
	}

};

var momComputableOptions = {

	// Produces format strings like "ddd M/D" -> "Fri 9/15"
	dayOfMonthFormat: function(momOptions, fcOptions) {
		var format = momOptions.longDateFormat('l'); // for the format like "M/D/YYYY"

		// strip the year off the edge, as well as other misc non-whitespace chars
		format = format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, '');

		if (fcOptions.isRTL) {
			format += ' ddd'; // for RTL, add day-of-week to end
		}
		else {
			format = 'ddd ' + format; // for LTR, add day-of-week to beginning
		}
		return format;
	},

	// Produces format strings like "h:mma" -> "6:00pm"
	mediumTimeFormat: function(momOptions) { // can't be called `timeFormat` because collides with option
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)a" -> "6pm" / "6:30pm"
	smallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)t" -> "6p" / "6:30p"
	extraSmallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 't'); // convert to AM/PM/am/pm to lowercase one-letter. remove any spaces beforehand
	},

	// Produces format strings like "ha" / "H" -> "6pm" / "18"
	hourFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '')
			.replace(/(\Wmm)$/, '') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h:mm" -> "6:30" (with no AM/PM)
	noMeridiemTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, ''); // remove trailing AM/PM
	}

};


// options that should be computed off live calendar options (considers override options)
// TODO: best place for this? related to locale?
// TODO: flipping text based on isRTL is a bad idea because the CSS `direction` might want to handle it
var instanceComputableOptions = {

	// Produces format strings for results like "Mo 16"
	smallDayDateFormat: function(options) {
		return options.isRTL ?
			'D dd' :
			'dd D';
	},

	// Produces format strings for results like "Wk 5"
	weekFormat: function(options) {
		return options.isRTL ?
			'w[ ' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ' ]w';
	},

	// Produces format strings for results like "Wk5"
	smallWeekFormat: function(options) {
		return options.isRTL ?
			'w[' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ']w';
	}

};

function populateInstanceComputableOptions(options) {
	$.each(instanceComputableOptions, function(name, func) {
		if (options[name] == null) {
			options[name] = func(options);
		}
	});
}


// Returns moment's internal locale data. If doesn't exist, returns English.
function getMomentLocaleData(localeCode) {
	return moment.localeData(localeCode) || moment.localeData('en');
}


// Initialize English by forcing computation of moment-derived options.
// Also, sets it as the default.
FC.locale('en', Calendar.englishDefaults);

;;

/* Top toolbar area with buttons and title
----------------------------------------------------------------------------------------------------------------------*/
// TODO: rename all header-related things to "toolbar"

function Header(calendar) {
	var t = this;
	
	// exports
	t.render = render;
	t.removeElement = removeElement;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	t.getViewsWithButtons = getViewsWithButtons;
	t.el = null; // mirrors local `el`
	
	// locals
	var el;
	var viewsWithButtons = [];
	var tm;


	// can be called repeatedly and will rerender
	function render() {
		var options = calendar.options;
		var sections = options.header;

		tm = options.theme ? 'ui' : 'fc';

		if (sections) {
			if (!el) {
				el = this.el = $("<div class='fc-toolbar'/>");
			}
			else {
				el.empty();
			}
			el.append(renderSection('left'))
				.append(renderSection('right'))
				.append(renderSection('center'))
				.append('<div class="fc-clear"/>');
		}
		else {
			removeElement();
		}
	}
	
	
	function removeElement() {
		if (el) {
			el.remove();
			el = t.el = null;
		}
	}
	
	
	function renderSection(position) {
		var sectionEl = $('<div class="fc-' + position + '"/>');
		var options = calendar.options;
		var buttonStr = options.header[position];

		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				var groupChildren = $();
				var isOnlyButtons = true;
				var groupEl;

				$.each(this.split(','), function(j, buttonName) {
					var customButtonProps;
					var viewSpec;
					var buttonClick;
					var overrideText; // text explicitly set by calendar's constructor options. overcomes icons
					var defaultText;
					var themeIcon;
					var normalIcon;
					var innerHtml;
					var classes;
					var button; // the element

					if (buttonName == 'title') {
						groupChildren = groupChildren.add($('<h2>&nbsp;</h2>')); // we always want it to take up height
						isOnlyButtons = false;
					}
					else {
						if ((customButtonProps = (options.customButtons || {})[buttonName])) {
							buttonClick = function(ev) {
								if (customButtonProps.click) {
									customButtonProps.click.call(button[0], ev);
								}
							};
							overrideText = ''; // icons will override text
							defaultText = customButtonProps.text;
						}
						else if ((viewSpec = calendar.getViewSpec(buttonName))) {
							buttonClick = function() {
								calendar.changeView(buttonName);
							};
							viewsWithButtons.push(buttonName);
							overrideText = viewSpec.buttonTextOverride;
							defaultText = viewSpec.buttonTextDefault;
						}
						else if (calendar[buttonName]) { // a calendar method
							buttonClick = function() {
								calendar[buttonName]();
							};
							overrideText = (calendar.overrides.buttonText || {})[buttonName];
							defaultText = options.buttonText[buttonName]; // everything else is considered default
						}

						if (buttonClick) {

							themeIcon =
								customButtonProps ?
									customButtonProps.themeIcon :
									options.themeButtonIcons[buttonName];

							normalIcon =
								customButtonProps ?
									customButtonProps.icon :
									options.buttonIcons[buttonName];

							if (overrideText) {
								innerHtml = htmlEscape(overrideText);
							}
							else if (themeIcon && options.theme) {
								innerHtml = "<span class='ui-icon ui-icon-" + themeIcon + "'></span>";
							}
							else if (normalIcon && !options.theme) {
								innerHtml = "<span class='fc-icon fc-icon-" + normalIcon + "'></span>";
							}
							else {
								innerHtml = htmlEscape(defaultText);
							}

							classes = [
								'fc-' + buttonName + '-button',
								tm + '-button',
								tm + '-state-default'
							];

							button = $( // type="button" so that it doesn't submit a form
								'<button type="button" class="' + classes.join(' ') + '">' +
									innerHtml +
								'</button>'
								)
								.click(function(ev) {
									// don't process clicks for disabled buttons
									if (!button.hasClass(tm + '-state-disabled')) {

										buttonClick(ev);

										// after the click action, if the button becomes the "active" tab, or disabled,
										// it should never have a hover class, so remove it now.
										if (
											button.hasClass(tm + '-state-active') ||
											button.hasClass(tm + '-state-disabled')
										) {
											button.removeClass(tm + '-state-hover');
										}
									}
								})
								.mousedown(function() {
									// the *down* effect (mouse pressed in).
									// only on buttons that are not the "active" tab, or disabled
									button
										.not('.' + tm + '-state-active')
										.not('.' + tm + '-state-disabled')
										.addClass(tm + '-state-down');
								})
								.mouseup(function() {
									// undo the *down* effect
									button.removeClass(tm + '-state-down');
								})
								.hover(
									function() {
										// the *hover* effect.
										// only on buttons that are not the "active" tab, or disabled
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-hover');
									},
									function() {
										// undo the *hover* effect
										button
											.removeClass(tm + '-state-hover')
											.removeClass(tm + '-state-down'); // if mouseleave happens before mouseup
									}
								);

							groupChildren = groupChildren.add(button);
						}
					}
				});

				if (isOnlyButtons) {
					groupChildren
						.first().addClass(tm + '-corner-left').end()
						.last().addClass(tm + '-corner-right').end();
				}

				if (groupChildren.length > 1) {
					groupEl = $('<div/>');
					if (isOnlyButtons) {
						groupEl.addClass('fc-button-group');
					}
					groupEl.append(groupChildren);
					sectionEl.append(groupEl);
				}
				else {
					sectionEl.append(groupChildren); // 1 or 0 children
				}
			});
		}

		return sectionEl;
	}
	
	
	function updateTitle(text) {
		if (el) {
			el.find('h2').text(text);
		}
	}
	
	
	function activateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.addClass(tm + '-state-active');
		}
	}
	
	
	function deactivateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.removeClass(tm + '-state-active');
		}
	}
	
	
	function disableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', true)
				.addClass(tm + '-state-disabled');
		}
	}
	
	
	function enableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', false)
				.removeClass(tm + '-state-disabled');
		}
	}


	function getViewsWithButtons() {
		return viewsWithButtons;
	}

}

;;

FC.sourceNormalizers = [];
FC.sourceFetchers = [];

var ajaxDefaults = {
	dataType: 'json',
	cache: false
};

var eventGUID = 1;


function EventManager() { // assumed to be a calendar
	var t = this;
	
	
	// exports
	t.isFetchNeeded = isFetchNeeded;
	t.fetchEvents = fetchEvents;
	t.fetchEventSources = fetchEventSources;
	t.getEventSources = getEventSources;
	t.getEventSourceById = getEventSourceById;
	t.getEventSourcesByMatchArray = getEventSourcesByMatchArray;
	t.getEventSourcesByMatch = getEventSourcesByMatch;
	t.addEventSource = addEventSource;
	t.removeEventSource = removeEventSource;
	t.removeEventSources = removeEventSources;
	t.updateEvent = updateEvent;
	t.renderEvent = renderEvent;
	t.removeEvents = removeEvents;
	t.clientEvents = clientEvents;
	t.mutateEvent = mutateEvent;
	t.normalizeEventDates = normalizeEventDates;
	t.normalizeEventTimes = normalizeEventTimes;
	
	
	// imports
	var reportEvents = t.reportEvents;
	
	
	// locals
	var stickySource = { events: [] };
	var sources = [ stickySource ];
	var rangeStart, rangeEnd;
	var pendingSourceCnt = 0; // outstanding fetch requests, max one per source
	var cache = []; // holds events that have already been expanded


	$.each(
		(t.options.events ? [ t.options.events ] : []).concat(t.options.eventSources || []),
		function(i, sourceInput) {
			var source = buildEventSource(sourceInput);
			if (source) {
				sources.push(source);
			}
		}
	);
	
	
	
	/* Fetching
	-----------------------------------------------------------------------------*/


	// start and end are assumed to be unzoned
	function isFetchNeeded(start, end) {
		return !rangeStart || // nothing has been fetched yet?
			start < rangeStart || end > rangeEnd; // is part of the new range outside of the old range?
	}
	
	
	function fetchEvents(start, end) {
		rangeStart = start;
		rangeEnd = end;
		fetchEventSources(sources, 'reset');
	}


	// expects an array of event source objects (the originals, not copies)
	// `specialFetchType` is an optimization parameter that affects purging of the event cache.
	function fetchEventSources(specificSources, specialFetchType) {
		var i, source;

		if (specialFetchType === 'reset') {
			cache = [];
		}
		else if (specialFetchType !== 'add') {
			cache = excludeEventsBySources(cache, specificSources);
		}

		for (i = 0; i < specificSources.length; i++) {
			source = specificSources[i];

			// already-pending sources have already been accounted for in pendingSourceCnt
			if (source._status !== 'pending') {
				pendingSourceCnt++;
			}

			source._fetchId = (source._fetchId || 0) + 1;
			source._status = 'pending';
		}

		for (i = 0; i < specificSources.length; i++) {
			source = specificSources[i];

			tryFetchEventSource(source, source._fetchId);
		}
	}


	// fetches an event source and processes its result ONLY if it is still the current fetch.
	// caller is responsible for incrementing pendingSourceCnt first.
	function tryFetchEventSource(source, fetchId) {
		_fetchEventSource(source, function(eventInputs) {
			var isArraySource = $.isArray(source.events);
			var i, eventInput;
			var abstractEvent;

			if (
				// is this the source's most recent fetch?
				// if not, rely on an upcoming fetch of this source to decrement pendingSourceCnt
				fetchId === source._fetchId &&
				// event source no longer valid?
				source._status !== 'rejected'
			) {
				source._status = 'resolved';

				if (eventInputs) {
					for (i = 0; i < eventInputs.length; i++) {
						eventInput = eventInputs[i];

						if (isArraySource) { // array sources have already been convert to Event Objects
							abstractEvent = eventInput;
						}
						else {
							abstractEvent = buildEventFromInput(eventInput, source);
						}

						if (abstractEvent) { // not false (an invalid event)
							cache.push.apply(
								cache,
								expandEvent(abstractEvent) // add individual expanded events to the cache
							);
						}
					}
				}

				decrementPendingSourceCnt();
			}
		});
	}


	function rejectEventSource(source) {
		var wasPending = source._status === 'pending';

		source._status = 'rejected';

		if (wasPending) {
			decrementPendingSourceCnt();
		}
	}


	function decrementPendingSourceCnt() {
		pendingSourceCnt--;
		if (!pendingSourceCnt) {
			reportEvents(cache);
		}
	}
	
	
	function _fetchEventSource(source, callback) {
		var i;
		var fetchers = FC.sourceFetchers;
		var res;

		for (i=0; i<fetchers.length; i++) {
			res = fetchers[i].call(
				t, // this, the Calendar object
				source,
				rangeStart.clone(),
				rangeEnd.clone(),
				t.options.timezone,
				callback
			);

			if (res === true) {
				// the fetcher is in charge. made its own async request
				return;
			}
			else if (typeof res == 'object') {
				// the fetcher returned a new source. process it
				_fetchEventSource(res, callback);
				return;
			}
		}

		var events = source.events;
		if (events) {
			if ($.isFunction(events)) {
				t.pushLoading();
				events.call(
					t, // this, the Calendar object
					rangeStart.clone(),
					rangeEnd.clone(),
					t.options.timezone,
					function(events) {
						callback(events);
						t.popLoading();
					}
				);
			}
			else if ($.isArray(events)) {
				callback(events);
			}
			else {
				callback();
			}
		}else{
			var url = source.url;
			if (url) {
				var success = source.success;
				var error = source.error;
				var complete = source.complete;

				// retrieve any outbound GET/POST $.ajax data from the options
				var customData;
				if ($.isFunction(source.data)) {
					// supplied as a function that returns a key/value object
					customData = source.data();
				}
				else {
					// supplied as a straight key/value object
					customData = source.data;
				}

				// use a copy of the custom data so we can modify the parameters
				// and not affect the passed-in object.
				var data = $.extend({}, customData || {});

				var startParam = firstDefined(source.startParam, t.options.startParam);
				var endParam = firstDefined(source.endParam, t.options.endParam);
				var timezoneParam = firstDefined(source.timezoneParam, t.options.timezoneParam);

				if (startParam) {
					data[startParam] = rangeStart.format();
				}
				if (endParam) {
					data[endParam] = rangeEnd.format();
				}
				if (t.options.timezone && t.options.timezone != 'local') {
					data[timezoneParam] = t.options.timezone;
				}

				t.pushLoading();
				$.ajax($.extend({}, ajaxDefaults, source, {
					data: data,
					success: function(events) {
						events = events || [];
						var res = applyAll(success, this, arguments);
						if ($.isArray(res)) {
							events = res;
						}
						callback(events);
					},
					error: function() {
						applyAll(error, this, arguments);
						callback();
					},
					complete: function() {
						applyAll(complete, this, arguments);
						t.popLoading();
					}
				}));
			}else{
				callback();
			}
		}
	}
	
	
	
	/* Sources
	-----------------------------------------------------------------------------*/


	function addEventSource(sourceInput) {
		var source = buildEventSource(sourceInput);
		if (source) {
			sources.push(source);
			fetchEventSources([ source ], 'add'); // will eventually call reportEvents
		}
	}


	function buildEventSource(sourceInput) { // will return undefined if invalid source
		var normalizers = FC.sourceNormalizers;
		var source;
		var i;

		if ($.isFunction(sourceInput) || $.isArray(sourceInput)) {
			source = { events: sourceInput };
		}
		else if (typeof sourceInput === 'string') {
			source = { url: sourceInput };
		}
		else if (typeof sourceInput === 'object') {
			source = $.extend({}, sourceInput); // shallow copy
		}

		if (source) {

			// TODO: repeat code, same code for event classNames
			if (source.className) {
				if (typeof source.className === 'string') {
					source.className = source.className.split(/\s+/);
				}
				// otherwise, assumed to be an array
			}
			else {
				source.className = [];
			}

			// for array sources, we convert to standard Event Objects up front
			if ($.isArray(source.events)) {
				source.origArray = source.events; // for removeEventSource
				source.events = $.map(source.events, function(eventInput) {
					return buildEventFromInput(eventInput, source);
				});
			}

			for (i=0; i<normalizers.length; i++) {
				normalizers[i].call(t, source);
			}

			return source;
		}
	}


	function removeEventSource(matchInput) {
		removeSpecificEventSources(
			getEventSourcesByMatch(matchInput)
		);
	}


	// if called with no arguments, removes all.
	function removeEventSources(matchInputs) {
		if (matchInputs == null) {
			removeSpecificEventSources(sources, true); // isAll=true
		}
		else {
			removeSpecificEventSources(
				getEventSourcesByMatchArray(matchInputs)
			);
		}
	}


	function removeSpecificEventSources(targetSources, isAll) {
		var i;

		// cancel pending requests
		for (i = 0; i < targetSources.length; i++) {
			rejectEventSource(targetSources[i]);
		}

		if (isAll) { // an optimization
			sources = [];
			cache = [];
		}
		else {
			// remove from persisted source list
			sources = $.grep(sources, function(source) {
				for (i = 0; i < targetSources.length; i++) {
					if (source === targetSources[i]) {
						return false; // exclude
					}
				}
				return true; // include
			});

			cache = excludeEventsBySources(cache, targetSources);
		}

		reportEvents(cache);
	}


	function getEventSources() {
		return sources.slice(1); // returns a shallow copy of sources with stickySource removed
	}


	function getEventSourceById(id) {
		return $.grep(sources, function(source) {
			return source.id && source.id === id;
		})[0];
	}


	// like getEventSourcesByMatch, but accepts multple match criteria (like multiple IDs)
	function getEventSourcesByMatchArray(matchInputs) {

		// coerce into an array
		if (!matchInputs) {
			matchInputs = [];
		}
		else if (!$.isArray(matchInputs)) {
			matchInputs = [ matchInputs ];
		}

		var matchingSources = [];
		var i;

		// resolve raw inputs to real event source objects
		for (i = 0; i < matchInputs.length; i++) {
			matchingSources.push.apply( // append
				matchingSources,
				getEventSourcesByMatch(matchInputs[i])
			);
		}

		return matchingSources;
	}


	// matchInput can either by a real event source object, an ID, or the function/URL for the source.
	// returns an array of matching source objects.
	function getEventSourcesByMatch(matchInput) {
		var i, source;

		// given an proper event source object
		for (i = 0; i < sources.length; i++) {
			source = sources[i];
			if (source === matchInput) {
				return [ source ];
			}
		}

		// an ID match
		source = getEventSourceById(matchInput);
		if (source) {
			return [ source ];
		}

		return $.grep(sources, function(source) {
			return isSourcesEquivalent(matchInput, source);
		});
	}


	function isSourcesEquivalent(source1, source2) {
		return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
	}


	function getSourcePrimitive(source) {
		return (
			(typeof source === 'object') ? // a normalized event source?
				(source.origArray || source.googleCalendarId || source.url || source.events) : // get the primitive
				null
		) ||
		source; // the given argument *is* the primitive
	}


	// util
	// returns a filtered array without events that are part of any of the given sources
	function excludeEventsBySources(specificEvents, specificSources) {
		return $.grep(specificEvents, function(event) {
			for (var i = 0; i < specificSources.length; i++) {
				if (event.source === specificSources[i]) {
					return false; // exclude
				}
			}
			return true; // keep
		});
	}
	
	
	
	/* Manipulation
	-----------------------------------------------------------------------------*/


	// Only ever called from the externally-facing API
	function updateEvent(event) {

		// massage start/end values, even if date string values
		event.start = t.moment(event.start);
		if (event.end) {
			event.end = t.moment(event.end);
		}
		else {
			event.end = null;
		}

		mutateEvent(event, getMiscEventProps(event)); // will handle start/end/allDay normalization
		reportEvents(cache); // reports event modifications (so we can redraw)
	}


	// Returns a hash of misc event properties that should be copied over to related events.
	function getMiscEventProps(event) {
		var props = {};

		$.each(event, function(name, val) {
			if (isMiscEventPropName(name)) {
				if (val !== undefined && isAtomic(val)) { // a defined non-object
					props[name] = val;
				}
			}
		});

		return props;
	}

	// non-date-related, non-id-related, non-secret
	function isMiscEventPropName(name) {
		return !/^_|^(id|allDay|start|end)$/.test(name);
	}

	
	// returns the expanded events that were created
	function renderEvent(eventInput, stick) {
		var abstractEvent = buildEventFromInput(eventInput);
		var events;
		var i, event;

		if (abstractEvent) { // not false (a valid input)
			events = expandEvent(abstractEvent);

			for (i = 0; i < events.length; i++) {
				event = events[i];

				if (!event.source) {
					if (stick) {
						stickySource.events.push(event);
						event.source = stickySource;
					}
					cache.push(event);
				}
			}

			reportEvents(cache);

			return events;
		}

		return [];
	}
	
	
	function removeEvents(filter) {
		var eventID;
		var i;

		if (filter == null) { // null or undefined. remove all events
			filter = function() { return true; }; // will always match
		}
		else if (!$.isFunction(filter)) { // an event ID
			eventID = filter + '';
			filter = function(event) {
				return event._id == eventID;
			};
		}

		// Purge event(s) from our local cache
		cache = $.grep(cache, filter, true); // inverse=true

		// Remove events from array sources.
		// This works because they have been converted to official Event Objects up front.
		// (and as a result, event._id has been calculated).
		for (i=0; i<sources.length; i++) {
			if ($.isArray(sources[i].events)) {
				sources[i].events = $.grep(sources[i].events, filter, true);
			}
		}

		reportEvents(cache);
	}

	
	function clientEvents(filter) {
		if ($.isFunction(filter)) {
			return $.grep(cache, filter);
		}
		else if (filter != null) { // not null, not undefined. an event ID
			filter += '';
			return $.grep(cache, function(e) {
				return e._id == filter;
			});
		}
		return cache; // else, return all
	}


	// Makes sure all array event sources have their internal event objects
	// converted over to the Calendar's current timezone.
	t.rezoneArrayEventSources = function() {
		var i;
		var events;
		var j;

		for (i = 0; i < sources.length; i++) {
			events = sources[i].events;
			if ($.isArray(events)) {

				for (j = 0; j < events.length; j++) {
					rezoneEventDates(events[j]);
				}
			}
		}
	};

	function rezoneEventDates(event) {
		event.start = t.moment(event.start);
		if (event.end) {
			event.end = t.moment(event.end);
		}
		backupEventDates(event);
	}
	
	
	/* Event Normalization
	-----------------------------------------------------------------------------*/


	// Given a raw object with key/value properties, returns an "abstract" Event object.
	// An "abstract" event is an event that, if recurring, will not have been expanded yet.
	// Will return `false` when input is invalid.
	// `source` is optional
	function buildEventFromInput(input, source) {
		var out = {};
		var start, end;
		var allDay;

		if (t.options.eventDataTransform) {
			input = t.options.eventDataTransform(input);
		}
		if (source && source.eventDataTransform) {
			input = source.eventDataTransform(input);
		}

		// Copy all properties over to the resulting object.
		// The special-case properties will be copied over afterwards.
		$.extend(out, input);

		if (source) {
			out.source = source;
		}

		out._id = input._id || (input.id === undefined ? '_fc' + eventGUID++ : input.id + '');

		if (input.className) {
			if (typeof input.className == 'string') {
				out.className = input.className.split(/\s+/);
			}
			else { // assumed to be an array
				out.className = input.className;
			}
		}
		else {
			out.className = [];
		}

		start = input.start || input.date; // "date" is an alias for "start"
		end = input.end;

		// parse as a time (Duration) if applicable
		if (isTimeString(start)) {
			start = moment.duration(start);
		}
		if (isTimeString(end)) {
			end = moment.duration(end);
		}

		if (input.dow || moment.isDuration(start) || moment.isDuration(end)) {

			// the event is "abstract" (recurring) so don't calculate exact start/end dates just yet
			out.start = start ? moment.duration(start) : null; // will be a Duration or null
			out.end = end ? moment.duration(end) : null; // will be a Duration or null
			out._recurring = true; // our internal marker
		}
		else {

			if (start) {
				start = t.moment(start);
				if (!start.isValid()) {
					return false;
				}
			}

			if (end) {
				end = t.moment(end);
				if (!end.isValid()) {
					end = null; // let defaults take over
				}
			}

			allDay = input.allDay;
			if (allDay === undefined) { // still undefined? fallback to default
				allDay = firstDefined(
					source ? source.allDayDefault : undefined,
					t.options.allDayDefault
				);
				// still undefined? normalizeEventDates will calculate it
			}

			assignDatesToEvent(start, end, allDay, out);
		}

		t.normalizeEvent(out); // hook for external use. a prototype method

		return out;
	}
	t.buildEventFromInput = buildEventFromInput;


	// Normalizes and assigns the given dates to the given partially-formed event object.
	// NOTE: mutates the given start/end moments. does not make a copy.
	function assignDatesToEvent(start, end, allDay, event) {
		event.start = start;
		event.end = end;
		event.allDay = allDay;
		normalizeEventDates(event);
		backupEventDates(event);
	}


	// Ensures proper values for allDay/start/end. Accepts an Event object, or a plain object with event-ish properties.
	// NOTE: Will modify the given object.
	function normalizeEventDates(eventProps) {

		normalizeEventTimes(eventProps);

		if (eventProps.end && !eventProps.end.isAfter(eventProps.start)) {
			eventProps.end = null;
		}

		if (!eventProps.end) {
			if (t.options.forceEventDuration) {
				eventProps.end = t.getDefaultEventEnd(eventProps.allDay, eventProps.start);
			}
			else {
				eventProps.end = null;
			}
		}
	}


	// Ensures the allDay property exists and the timeliness of the start/end dates are consistent
	function normalizeEventTimes(eventProps) {
		if (eventProps.allDay == null) {
			eventProps.allDay = !(eventProps.start.hasTime() || (eventProps.end && eventProps.end.hasTime()));
		}

		if (eventProps.allDay) {
			eventProps.start.stripTime();
			if (eventProps.end) {
				// TODO: consider nextDayThreshold here? If so, will require a lot of testing and adjustment
				eventProps.end.stripTime();
			}
		}
		else {
			if (!eventProps.start.hasTime()) {
				eventProps.start = t.applyTimezone(eventProps.start.time(0)); // will assign a 00:00 time
			}
			if (eventProps.end && !eventProps.end.hasTime()) {
				eventProps.end = t.applyTimezone(eventProps.end.time(0)); // will assign a 00:00 time
			}
		}
	}


	// If the given event is a recurring event, break it down into an array of individual instances.
	// If not a recurring event, return an array with the single original event.
	// If given a falsy input (probably because of a failed buildEventFromInput call), returns an empty array.
	// HACK: can override the recurring window by providing custom rangeStart/rangeEnd (for businessHours).
	function expandEvent(abstractEvent, _rangeStart, _rangeEnd) {
		var events = [];
		var dowHash;
		var dow;
		var i;
		var date;
		var startTime, endTime;
		var start, end;
		var event;

		_rangeStart = _rangeStart || rangeStart;
		_rangeEnd = _rangeEnd || rangeEnd;

		if (abstractEvent) {
			if (abstractEvent._recurring) {

				// make a boolean hash as to whether the event occurs on each day-of-week
				if ((dow = abstractEvent.dow)) {
					dowHash = {};
					for (i = 0; i < dow.length; i++) {
						dowHash[dow[i]] = true;
					}
				}

				// iterate through every day in the current range
				date = _rangeStart.clone().stripTime(); // holds the date of the current day
				while (date.isBefore(_rangeEnd)) {

					if (!dowHash || dowHash[date.day()]) { // if everyday, or this particular day-of-week

						startTime = abstractEvent.start; // the stored start and end properties are times (Durations)
						endTime = abstractEvent.end; // "
						start = date.clone();
						end = null;

						if (startTime) {
							start = start.time(startTime);
						}
						if (endTime) {
							end = date.clone().time(endTime);
						}

						event = $.extend({}, abstractEvent); // make a copy of the original
						assignDatesToEvent(
							start, end,
							!startTime && !endTime, // allDay?
							event
						);
						events.push(event);
					}

					date.add(1, 'days');
				}
			}
			else {
				events.push(abstractEvent); // return the original event. will be a one-item array
			}
		}

		return events;
	}
	t.expandEvent = expandEvent;



	/* Event Modification Math
	-----------------------------------------------------------------------------------------*/


	// Modifies an event and all related events by applying the given properties.
	// Special date-diffing logic is used for manipulation of dates.
	// If `props` does not contain start/end dates, the updated values are assumed to be the event's current start/end.
	// All date comparisons are done against the event's pristine _start and _end dates.
	// Returns an object with delta information and a function to undo all operations.
	// For making computations in a granularity greater than day/time, specify largeUnit.
	// NOTE: The given `newProps` might be mutated for normalization purposes.
	function mutateEvent(event, newProps, largeUnit) {
		var miscProps = {};
		var oldProps;
		var clearEnd;
		var startDelta;
		var endDelta;
		var durationDelta;
		var undoFunc;

		// diffs the dates in the appropriate way, returning a duration
		function diffDates(date1, date0) { // date1 - date0
			if (largeUnit) {
				return diffByUnit(date1, date0, largeUnit);
			}
			else if (newProps.allDay) {
				return diffDay(date1, date0);
			}
			else {
				return diffDayTime(date1, date0);
			}
		}

		newProps = newProps || {};

		// normalize new date-related properties
		if (!newProps.start) {
			newProps.start = event.start.clone();
		}
		if (newProps.end === undefined) {
			newProps.end = event.end ? event.end.clone() : null;
		}
		if (newProps.allDay == null) { // is null or undefined?
			newProps.allDay = event.allDay;
		}
		normalizeEventDates(newProps);

		// create normalized versions of the original props to compare against
		// need a real end value, for diffing
		oldProps = {
			start: event._start.clone(),
			end: event._end ? event._end.clone() : t.getDefaultEventEnd(event._allDay, event._start),
			allDay: newProps.allDay // normalize the dates in the same regard as the new properties
		};
		normalizeEventDates(oldProps);

		// need to clear the end date if explicitly changed to null
		clearEnd = event._end !== null && newProps.end === null;

		// compute the delta for moving the start date
		startDelta = diffDates(newProps.start, oldProps.start);

		// compute the delta for moving the end date
		if (newProps.end) {
			endDelta = diffDates(newProps.end, oldProps.end);
			durationDelta = endDelta.subtract(startDelta);
		}
		else {
			durationDelta = null;
		}

		// gather all non-date-related properties
		$.each(newProps, function(name, val) {
			if (isMiscEventPropName(name)) {
				if (val !== undefined) {
					miscProps[name] = val;
				}
			}
		});

		// apply the operations to the event and all related events
		undoFunc = mutateEvents(
			clientEvents(event._id), // get events with this ID
			clearEnd,
			newProps.allDay,
			startDelta,
			durationDelta,
			miscProps
		);

		return {
			dateDelta: startDelta,
			durationDelta: durationDelta,
			undo: undoFunc
		};
	}


	// Modifies an array of events in the following ways (operations are in order):
	// - clear the event's `end`
	// - convert the event to allDay
	// - add `dateDelta` to the start and end
	// - add `durationDelta` to the event's duration
	// - assign `miscProps` to the event
	//
	// Returns a function that can be called to undo all the operations.
	//
	// TODO: don't use so many closures. possible memory issues when lots of events with same ID.
	//
	function mutateEvents(events, clearEnd, allDay, dateDelta, durationDelta, miscProps) {
		var isAmbigTimezone = t.getIsAmbigTimezone();
		var undoFunctions = [];

		// normalize zero-length deltas to be null
		if (dateDelta && !dateDelta.valueOf()) { dateDelta = null; }
		if (durationDelta && !durationDelta.valueOf()) { durationDelta = null; }

		$.each(events, function(i, event) {
			var oldProps;
			var newProps;

			// build an object holding all the old values, both date-related and misc.
			// for the undo function.
			oldProps = {
				start: event.start.clone(),
				end: event.end ? event.end.clone() : null,
				allDay: event.allDay
			};
			$.each(miscProps, function(name) {
				oldProps[name] = event[name];
			});

			// new date-related properties. work off the original date snapshot.
			// ok to use references because they will be thrown away when backupEventDates is called.
			newProps = {
				start: event._start,
				end: event._end,
				allDay: allDay // normalize the dates in the same regard as the new properties
			};
			normalizeEventDates(newProps); // massages start/end/allDay

			// strip or ensure the end date
			if (clearEnd) {
				newProps.end = null;
			}
			else if (durationDelta && !newProps.end) { // the duration translation requires an end date
				newProps.end = t.getDefaultEventEnd(newProps.allDay, newProps.start);
			}

			if (dateDelta) {
				newProps.start.add(dateDelta);
				if (newProps.end) {
					newProps.end.add(dateDelta);
				}
			}

			if (durationDelta) {
				newProps.end.add(durationDelta); // end already ensured above
			}

			// if the dates have changed, and we know it is impossible to recompute the
			// timezone offsets, strip the zone.
			if (
				isAmbigTimezone &&
				!newProps.allDay &&
				(dateDelta || durationDelta)
			) {
				newProps.start.stripZone();
				if (newProps.end) {
					newProps.end.stripZone();
				}
			}

			$.extend(event, miscProps, newProps); // copy over misc props, then date-related props
			backupEventDates(event); // regenerate internal _start/_end/_allDay

			undoFunctions.push(function() {
				$.extend(event, oldProps);
				backupEventDates(event); // regenerate internal _start/_end/_allDay
			});
		});

		return function() {
			for (var i = 0; i < undoFunctions.length; i++) {
				undoFunctions[i]();
			}
		};
	}


	t.getEventCache = function() {
		return cache;
	};

}


// hook for external libs to manipulate event properties upon creation.
// should manipulate the event in-place.
Calendar.prototype.normalizeEvent = function(event) {
};


// Does the given span (start, end, and other location information)
// fully contain the other?
Calendar.prototype.spanContainsSpan = function(outerSpan, innerSpan) {
	var eventStart = outerSpan.start.clone().stripZone();
	var eventEnd = this.getEventEnd(outerSpan).stripZone();

	return innerSpan.start >= eventStart && innerSpan.end <= eventEnd;
};


// Returns a list of events that the given event should be compared against when being considered for a move to
// the specified span. Attached to the Calendar's prototype because EventManager is a mixin for a Calendar.
Calendar.prototype.getPeerEvents = function(span, event) {
	var cache = this.getEventCache();
	var peerEvents = [];
	var i, otherEvent;

	for (i = 0; i < cache.length; i++) {
		otherEvent = cache[i];
		if (
			!event ||
			event._id !== otherEvent._id // don't compare the event to itself or other related [repeating] events
		) {
			peerEvents.push(otherEvent);
		}
	}

	return peerEvents;
};


// updates the "backup" properties, which are preserved in order to compute diffs later on.
function backupEventDates(event) {
	event._allDay = event.allDay;
	event._start = event.start.clone();
	event._end = event.end ? event.end.clone() : null;
}


/* Overlapping / Constraining
-----------------------------------------------------------------------------------------*/


// Determines if the given event can be relocated to the given span (unzoned start/end with other misc data)
Calendar.prototype.isEventSpanAllowed = function(span, event) {
	var source = event.source || {};

	var constraint = firstDefined(
		event.constraint,
		source.constraint,
		this.options.eventConstraint
	);

	var overlap = firstDefined(
		event.overlap,
		source.overlap,
		this.options.eventOverlap
	);

	return this.isSpanAllowed(span, constraint, overlap, event) &&
		(!this.options.eventAllow || this.options.eventAllow(span, event) !== false);
};


// Determines if an external event can be relocated to the given span (unzoned start/end with other misc data)
Calendar.prototype.isExternalSpanAllowed = function(eventSpan, eventLocation, eventProps) {
	var eventInput;
	var event;

	// note: very similar logic is in View's reportExternalDrop
	if (eventProps) {
		eventInput = $.extend({}, eventProps, eventLocation);
		event = this.expandEvent(
			this.buildEventFromInput(eventInput)
		)[0];
	}

	if (event) {
		return this.isEventSpanAllowed(eventSpan, event);
	}
	else { // treat it as a selection

		return this.isSelectionSpanAllowed(eventSpan);
	}
};


// Determines the given span (unzoned start/end with other misc data) can be selected.
Calendar.prototype.isSelectionSpanAllowed = function(span) {
	return this.isSpanAllowed(span, this.options.selectConstraint, this.options.selectOverlap) &&
		(!this.options.selectAllow || this.options.selectAllow(span) !== false);
};


// Returns true if the given span (caused by an event drop/resize or a selection) is allowed to exist
// according to the constraint/overlap settings.
// `event` is not required if checking a selection.
Calendar.prototype.isSpanAllowed = function(span, constraint, overlap, event) {
	var constraintEvents;
	var anyContainment;
	var peerEvents;
	var i, peerEvent;
	var peerOverlap;

	// the range must be fully contained by at least one of produced constraint events
	if (constraint != null) {

		// not treated as an event! intermediate data structure
		// TODO: use ranges in the future
		constraintEvents = this.constraintToEvents(constraint);
		if (constraintEvents) { // not invalid

			anyContainment = false;
			for (i = 0; i < constraintEvents.length; i++) {
				if (this.spanContainsSpan(constraintEvents[i], span)) {
					anyContainment = true;
					break;
				}
			}

			if (!anyContainment) {
				return false;
			}
		}
	}

	peerEvents = this.getPeerEvents(span, event);

	for (i = 0; i < peerEvents.length; i++)  {
		peerEvent = peerEvents[i];

		// there needs to be an actual intersection before disallowing anything
		if (this.eventIntersectsRange(peerEvent, span)) {

			// evaluate overlap for the given range and short-circuit if necessary
			if (overlap === false) {
				return false;
			}
			// if the event's overlap is a test function, pass the peer event in question as the first param
			else if (typeof overlap === 'function' && !overlap(peerEvent, event)) {
				return false;
			}

			// if we are computing if the given range is allowable for an event, consider the other event's
			// EventObject-specific or Source-specific `overlap` property
			if (event) {
				peerOverlap = firstDefined(
					peerEvent.overlap,
					(peerEvent.source || {}).overlap
					// we already considered the global `eventOverlap`
				);
				if (peerOverlap === false) {
					return false;
				}
				// if the peer event's overlap is a test function, pass the subject event as the first param
				if (typeof peerOverlap === 'function' && !peerOverlap(event, peerEvent)) {
					return false;
				}
			}
		}
	}

	return true;
};


// Given an event input from the API, produces an array of event objects. Possible event inputs:
// 'businessHours'
// An event ID (number or string)
// An object with specific start/end dates or a recurring event (like what businessHours accepts)
Calendar.prototype.constraintToEvents = function(constraintInput) {

	if (constraintInput === 'businessHours') {
		return this.getCurrentBusinessHourEvents();
	}

	if (typeof constraintInput === 'object') {
		if (constraintInput.start != null) { // needs to be event-like input
			return this.expandEvent(this.buildEventFromInput(constraintInput));
		}
		else {
			return null; // invalid
		}
	}

	return this.clientEvents(constraintInput); // probably an ID
};


// Does the event's date range intersect with the given range?
// start/end already assumed to have stripped zones :(
Calendar.prototype.eventIntersectsRange = function(event, range) {
	var eventStart = event.start.clone().stripZone();
	var eventEnd = this.getEventEnd(event).stripZone();

	return range.start < eventEnd && range.end > eventStart;
};


/* Business Hours
-----------------------------------------------------------------------------------------*/

var BUSINESS_HOUR_EVENT_DEFAULTS = {
	id: '_fcBusinessHours', // will relate events from different calls to expandEvent
	start: '09:00',
	end: '17:00',
	dow: [ 1, 2, 3, 4, 5 ], // monday - friday
	rendering: 'inverse-background'
	// classNames are defined in businessHoursSegClasses
};

// Return events objects for business hours within the current view.
// Abuse of our event system :(
Calendar.prototype.getCurrentBusinessHourEvents = function(wholeDay) {
	return this.computeBusinessHourEvents(wholeDay, this.options.businessHours);
};

// Given a raw input value from options, return events objects for business hours within the current view.
Calendar.prototype.computeBusinessHourEvents = function(wholeDay, input) {
	if (input === true) {
		return this.expandBusinessHourEvents(wholeDay, [ {} ]);
	}
	else if ($.isPlainObject(input)) {
		return this.expandBusinessHourEvents(wholeDay, [ input ]);
	}
	else if ($.isArray(input)) {
		return this.expandBusinessHourEvents(wholeDay, input, true);
	}
	else {
		return [];
	}
};

// inputs expected to be an array of objects.
// if ignoreNoDow is true, will ignore entries that don't specify a day-of-week (dow) key.
Calendar.prototype.expandBusinessHourEvents = function(wholeDay, inputs, ignoreNoDow) {
	var view = this.getView();
	var events = [];
	var i, input;

	for (i = 0; i < inputs.length; i++) {
		input = inputs[i];

		if (ignoreNoDow && !input.dow) {
			continue;
		}

		// give defaults. will make a copy
		input = $.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, input);

		// if a whole-day series is requested, clear the start/end times
		if (wholeDay) {
			input.start = null;
			input.end = null;
		}

		events.push.apply(events, // append
			this.expandEvent(
				this.buildEventFromInput(input),
				view.start,
				view.end
			)
		);
	}

	return events;
};

;;

/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

var BasicView = FC.BasicView = View.extend({

	scroller: null,

	dayGridClass: DayGrid, // class the dayGrid will be instantiated from (overridable by subclasses)
	dayGrid: null, // the main subcomponent that does most of the heavy lifting

	dayNumbersVisible: false, // display day numbers on each day cell?
	colWeekNumbersVisible: false, // display week numbers along the side?
	cellWeekNumbersVisible: false, // display week numbers in day cell?

	weekNumberWidth: null, // width of all the week-number cells running down the side

	headContainerEl: null, // div that hold's the dayGrid's rendered date header
	headRowEl: null, // the fake row element of the day-of-week header


	initialize: function() {
		this.dayGrid = this.instantiateDayGrid();

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Generates the DayGrid object this view needs. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		// generate a subclass on the fly with BasicView-specific behavior
		// TODO: cache this subclass
		var subclass = this.dayGridClass.extend(basicDayGridMethods);

		return new subclass(this);
	},


	// Sets the display range and computes all necessary dates
	setRange: function(range) {
		View.prototype.setRange.call(this, range); // call the super-method

		this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit); // do before setRange
		this.dayGrid.setRange(range);
	},


	// Compute the value to feed into setRange. Overrides superclass.
	computeRange: function(date) {
		var range = View.prototype.computeRange.call(this, date); // get value from the super-method

		// year and month views should be aligned with weeks. this is already done for week
		if (/year|month/.test(range.intervalUnit)) {
			range.start.startOf('week');
			range.start = this.skipHiddenDays(range.start);

			// make end-of-week if not already
			if (range.end.weekday()) {
				range.end.add(1, 'week').startOf('week');
				range.end = this.skipHiddenDays(range.end, -1, true); // exclusively move backwards
			}
		}

		return range;
	},


	// Renders the view into `this.el`, which should already be assigned
	renderDates: function() {

		this.dayNumbersVisible = this.dayGrid.rowCnt > 1; // TODO: make grid responsible
		if (this.opt('weekNumbers')) {
			if (this.opt('weekNumbersWithinDays')) {
				this.cellWeekNumbersVisible = true;
				this.colWeekNumbersVisible = false;
			}
			else {
				this.cellWeekNumbersVisible = false;
				this.colWeekNumbersVisible = true;
			};
		}
		this.dayGrid.numbersVisible = this.dayNumbersVisible ||
			this.cellWeekNumbersVisible || this.colWeekNumbersVisible;

		this.el.addClass('fc-basic-view').html(this.renderSkeletonHtml());
		this.renderHead();

		this.scroller.render();
		var dayGridContainerEl = this.scroller.el.addClass('fc-day-grid-container');
		var dayGridEl = $('<div class="fc-day-grid" />').appendTo(dayGridContainerEl);
		this.el.find('.fc-body > tr > td').append(dayGridContainerEl);

		this.dayGrid.setElement(dayGridEl);
		this.dayGrid.renderDates(this.hasRigidRows());
	},


	// render the day-of-week headers
	renderHead: function() {
		this.headContainerEl =
			this.el.find('.fc-head-container')
				.html(this.dayGrid.renderHeadHtml());
		this.headRowEl = this.headContainerEl.find('.fc-row');
	},


	// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
	// always completely kill the dayGrid's rendering.
	unrenderDates: function() {
		this.dayGrid.unrenderDates();
		this.dayGrid.removeElement();
		this.scroller.destroy();
	},


	renderBusinessHours: function() {
		this.dayGrid.renderBusinessHours();
	},


	unrenderBusinessHours: function() {
		this.dayGrid.unrenderBusinessHours();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid component will render inside of a container defined by this HTML.
	renderSkeletonHtml: function() {
		return '' +
			'<table>' +
				'<thead class="fc-head">' +
					'<tr>' +
						'<td class="fc-head-container ' + this.widgetHeaderClass + '"></td>' +
					'</tr>' +
				'</thead>' +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + this.widgetContentClass + '"></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the week number column, if it is known
	weekNumberStyleAttr: function() {
		if (this.weekNumberWidth !== null) {
			return 'style="width:' + this.weekNumberWidth + 'px"';
		}
		return '';
	},


	// Determines whether each row should have a constant height
	hasRigidRows: function() {
		var eventLimit = this.opt('eventLimit');
		return eventLimit && typeof eventLimit !== 'number';
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes the horizontal dimensions of the view
	updateWidth: function() {
		if (this.colWeekNumbersVisible) {
			// Make sure all week number cells running down the side have the same width.
			// Record the width for cells created later.
			this.weekNumberWidth = matchCellWidths(
				this.el.find('.fc-week-number')
			);
		}
	},


	// Adjusts the vertical dimensions of the view to the specified values
	setHeight: function(totalHeight, isAuto) {
		var eventLimit = this.opt('eventLimit');
		var scrollerHeight;
		var scrollbarWidths;

		// reset all heights to be natural
		this.scroller.clear();
		uncompensateScroll(this.headRowEl);

		this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

		// is the event limit a constant level number?
		if (eventLimit && typeof eventLimit === 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
		}

		// distribute the height to the rows
		// (totalHeight is a "recommended" value if isAuto)
		scrollerHeight = this.computeScrollerHeight(totalHeight);
		this.setGridHeight(scrollerHeight, isAuto);

		// is the event limit dynamically calculated?
		if (eventLimit && typeof eventLimit !== 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				compensateScroll(this.headRowEl, scrollbarWidths);

				// doing the scrollbar compensation might have created text overflow which created more height. redo
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	// Sets the height of just the DayGrid component in this view
	setGridHeight: function(height, isAuto) {
		if (isAuto) {
			undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
		}
		else {
			distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
		}
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	queryScroll: function() {
		return this.scroller.getScrollTop();
	},


	setScroll: function(top) {
		this.scroller.setScrollTop(top);
	},


	/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
	// forward all hit-related method calls to dayGrid


	prepareHits: function() {
		this.dayGrid.prepareHits();
	},


	releaseHits: function() {
		this.dayGrid.releaseHits();
	},


	queryHit: function(left, top) {
		return this.dayGrid.queryHit(left, top);
	},


	getHitSpan: function(hit) {
		return this.dayGrid.getHitSpan(hit);
	},


	getHitEl: function(hit) {
		return this.dayGrid.getHitEl(hit);
	},


	/* Events
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the given events onto the view and populates the segments array
	renderEvents: function(events) {
		this.dayGrid.renderEvents(events);

		this.updateHeight(); // must compensate for events that overflow the row
	},


	// Retrieves all segment objects that are rendered in the view
	getEventSegs: function() {
		return this.dayGrid.getEventSegs();
	},


	// Unrenders all event elements and clears internal segment data
	unrenderEvents: function() {
		this.dayGrid.unrenderEvents();

		// we DON'T need to call updateHeight() because
		// a renderEvents() call always happens after this, which will eventually call updateHeight()
	},


	/* Dragging (for both events and external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(dropLocation, seg) {
		return this.dayGrid.renderDrag(dropLocation, seg);
	},


	unrenderDrag: function() {
		this.dayGrid.unrenderDrag();
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection
	renderSelection: function(span) {
		this.dayGrid.renderSelection(span);
	},


	// Unrenders a visual indications of a selection
	unrenderSelection: function() {
		this.dayGrid.unrenderSelection();
	}

});


// Methods that will customize the rendering behavior of the BasicView's dayGrid
var basicDayGridMethods = {


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '' +
				'<th class="fc-week-number ' + view.widgetHeaderClass + '" ' + view.weekNumberStyleAttr() + '>' +
					'<span>' + // needed for matchCellWidths
						htmlEscape(view.opt('weekNumberTitle')) +
					'</span>' +
				'</th>';
		}

		return '';
	},


	// Generates the HTML that will go before content-skeleton cells that display the day/week numbers
	renderNumberIntroHtml: function(row) {
		var view = this.view;
		var weekStart = this.getCellDate(row, 0);

		if (view.colWeekNumbersVisible) {
			return '' +
				'<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: weekStart, type: 'week', forceOff: this.colCnt === 1 },
						weekStart.format('w') // inner HTML
					) +
				'</td>';
		}

		return '';
	},


	// Generates the HTML that goes before the day bg cells for each day-row
	renderBgIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '<td class="fc-week-number ' + view.widgetContentClass + '" ' +
				view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	},


	// Generates the HTML that goes before every other type of row generated by DayGrid.
	// Affects helper-skeleton and highlight-skeleton rows.
	renderIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	}

};

;;

/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/

var MonthView = FC.MonthView = BasicView.extend({

	// Produces information about what range to display
	computeRange: function(date) {
		var range = BasicView.prototype.computeRange.call(this, date); // get value from super-method
		var rowCnt;

		// ensure 6 weeks
		if (this.isFixedWeeks()) {
			rowCnt = Math.ceil(range.end.diff(range.start, 'weeks', true)); // could be partial weeks due to hiddenDays
			range.end.add(6 - rowCnt, 'weeks');
		}

		return range;
	},


	// Overrides the default BasicView behavior to have special multi-week auto-height logic
	setGridHeight: function(height, isAuto) {

		// if auto, make the height of each row the height that it would be if there were 6 weeks
		if (isAuto) {
			height *= this.rowCnt / 6;
		}

		distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
	},


	isFixedWeeks: function() {
		return this.opt('fixedWeekCount');
	}

});

;;

fcViews.basic = {
	'class': BasicView
};

fcViews.basicDay = {
	type: 'basic',
	duration: { days: 1 }
};

fcViews.basicWeek = {
	type: 'basic',
	duration: { weeks: 1 }
};

fcViews.month = {
	'class': MonthView,
	duration: { months: 1 }, // important for prev/next
	defaults: {
		fixedWeekCount: true
	}
};
;;

/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.

var AgendaView = FC.AgendaView = View.extend({

	scroller: null,

	timeGridClass: TimeGrid, // class used to instantiate the timeGrid. subclasses can override
	timeGrid: null, // the main time-grid subcomponent of this view

	dayGridClass: DayGrid, // class used to instantiate the dayGrid. subclasses can override
	dayGrid: null, // the "all-day" subcomponent. if all-day is turned off, this will be null

	axisWidth: null, // the width of the time axis running down the side

	headContainerEl: null, // div that hold's the timeGrid's rendered date header
	noScrollRowEls: null, // set of fake row elements that must compensate when scroller has scrollbars

	// when the time-grid isn't tall enough to occupy the given height, we render an <hr> underneath
	bottomRuleEl: null,


	initialize: function() {
		this.timeGrid = this.instantiateTimeGrid();

		if (this.opt('allDaySlot')) { // should we display the "all-day" area?
			this.dayGrid = this.instantiateDayGrid(); // the all-day subcomponent of this view
		}

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Instantiates the TimeGrid object this view needs. Draws from this.timeGridClass
	instantiateTimeGrid: function() {
		var subclass = this.timeGridClass.extend(agendaTimeGridMethods);

		return new subclass(this);
	},


	// Instantiates the DayGrid object this view might need. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		var subclass = this.dayGridClass.extend(agendaDayGridMethods);

		return new subclass(this);
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Sets the display range and computes all necessary dates
	setRange: function(range) {
		View.prototype.setRange.call(this, range); // call the super-method

		this.timeGrid.setRange(range);
		if (this.dayGrid) {
			this.dayGrid.setRange(range);
		}
	},


	// Renders the view into `this.el`, which has already been assigned
	renderDates: function() {

		this.el.addClass('fc-agenda-view').html(this.renderSkeletonHtml());
		this.renderHead();

		this.scroller.render();
		var timeGridWrapEl = this.scroller.el.addClass('fc-time-grid-container');
		var timeGridEl = $('<div class="fc-time-grid" />').appendTo(timeGridWrapEl);
		this.el.find('.fc-body > tr > td').append(timeGridWrapEl);

		this.timeGrid.setElement(timeGridEl);
		this.timeGrid.renderDates();

		// the <hr> that sometimes displays under the time-grid
		this.bottomRuleEl = $('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>')
			.appendTo(this.timeGrid.el); // inject it into the time-grid

		if (this.dayGrid) {
			this.dayGrid.setElement(this.el.find('.fc-day-grid'));
			this.dayGrid.renderDates();

			// have the day-grid extend it's coordinate area over the <hr> dividing the two grids
			this.dayGrid.bottomCoordPadding = this.dayGrid.el.next('hr').outerHeight();
		}

		this.noScrollRowEls = this.el.find('.fc-row:not(.fc-scroller *)'); // fake rows not within the scroller
	},


	// render the day-of-week headers
	renderHead: function() {
		this.headContainerEl =
			this.el.find('.fc-head-container')
				.html(this.timeGrid.renderHeadHtml());
	},


	// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
	// always completely kill each grid's rendering.
	unrenderDates: function() {
		this.timeGrid.unrenderDates();
		this.timeGrid.removeElement();

		if (this.dayGrid) {
			this.dayGrid.unrenderDates();
			this.dayGrid.removeElement();
		}

		this.scroller.destroy();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid and time-grid components will render inside containers defined by this HTML.
	renderSkeletonHtml: function() {
		return '' +
			'<table>' +
				'<thead class="fc-head">' +
					'<tr>' +
						'<td class="fc-head-container ' + this.widgetHeaderClass + '"></td>' +
					'</tr>' +
				'</thead>' +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + this.widgetContentClass + '">' +
							(this.dayGrid ?
								'<div class="fc-day-grid"/>' +
								'<hr class="fc-divider ' + this.widgetHeaderClass + '"/>' :
								''
								) +
						'</td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the axis, if it is known
	axisStyleAttr: function() {
		if (this.axisWidth !== null) {
			 return 'style="width:' + this.axisWidth + 'px"';
		}
		return '';
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessHours: function() {
		this.timeGrid.renderBusinessHours();

		if (this.dayGrid) {
			this.dayGrid.renderBusinessHours();
		}
	},


	unrenderBusinessHours: function() {
		this.timeGrid.unrenderBusinessHours();

		if (this.dayGrid) {
			this.dayGrid.unrenderBusinessHours();
		}
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return this.timeGrid.getNowIndicatorUnit();
	},


	renderNowIndicator: function(date) {
		this.timeGrid.renderNowIndicator(date);
	},


	unrenderNowIndicator: function() {
		this.timeGrid.unrenderNowIndicator();
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(isResize) {
		this.timeGrid.updateSize(isResize);

		View.prototype.updateSize.call(this, isResize); // call the super-method
	},


	// Refreshes the horizontal dimensions of the view
	updateWidth: function() {
		// make all axis cells line up, and record the width so newly created axis cells will have it
		this.axisWidth = matchCellWidths(this.el.find('.fc-axis'));
	},


	// Adjusts the vertical dimensions of the view to the specified values
	setHeight: function(totalHeight, isAuto) {
		var eventLimit;
		var scrollerHeight;
		var scrollbarWidths;

		// reset all dimensions back to the original state
		this.bottomRuleEl.hide(); // .show() will be called later if this <hr> is necessary
		this.scroller.clear(); // sets height to 'auto' and clears overflow
		uncompensateScroll(this.noScrollRowEls);

		// limit number of events in the all-day area
		if (this.dayGrid) {
			this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

			eventLimit = this.opt('eventLimit');
			if (eventLimit && typeof eventLimit !== 'number') {
				eventLimit = AGENDA_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
			}
			if (eventLimit) {
				this.dayGrid.limitRows(eventLimit);
			}
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			scrollerHeight = this.computeScrollerHeight(totalHeight);
			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				// make the all-day and header rows lines up
				compensateScroll(this.noScrollRowEls, scrollbarWidths);

				// the scrollbar compensation might have changed text flow, which might affect height, so recalculate
				// and reapply the desired height to the scroller.
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);

			// if there's any space below the slats, show the horizontal rule.
			// this won't cause any new overflow, because lockOverflow already called.
			if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
				this.bottomRuleEl.show();
			}
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	// Computes the initial pre-configured scroll state prior to allowing the user to change it
	computeInitialScroll: function() {
		var scrollTime = moment.duration(this.opt('scrollTime'));
		var top = this.timeGrid.computeTimeTop(scrollTime);

		// zoom can give weird floating-point values. rather scroll a little bit further
		top = Math.ceil(top);

		if (top) {
			top++; // to overcome top border that slots beyond the first have. looks better
		}

		return top;
	},


	queryScroll: function() {
		return this.scroller.getScrollTop();
	},


	setScroll: function(top) {
		this.scroller.setScrollTop(top);
	},


	/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
	// forward all hit-related method calls to the grids (dayGrid might not be defined)


	prepareHits: function() {
		this.timeGrid.prepareHits();
		if (this.dayGrid) {
			this.dayGrid.prepareHits();
		}
	},


	releaseHits: function() {
		this.timeGrid.releaseHits();
		if (this.dayGrid) {
			this.dayGrid.releaseHits();
		}
	},


	queryHit: function(left, top) {
		var hit = this.timeGrid.queryHit(left, top);

		if (!hit && this.dayGrid) {
			hit = this.dayGrid.queryHit(left, top);
		}

		return hit;
	},


	getHitSpan: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitSpan(hit);
	},


	getHitEl: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitEl(hit);
	},


	/* Events
	------------------------------------------------------------------------------------------------------------------*/


	// Renders events onto the view and populates the View's segment array
	renderEvents: function(events) {
		var dayEvents = [];
		var timedEvents = [];
		var daySegs = [];
		var timedSegs;
		var i;

		// separate the events into all-day and timed
		for (i = 0; i < events.length; i++) {
			if (events[i].allDay) {
				dayEvents.push(events[i]);
			}
			else {
				timedEvents.push(events[i]);
			}
		}

		// render the events in the subcomponents
		timedSegs = this.timeGrid.renderEvents(timedEvents);
		if (this.dayGrid) {
			daySegs = this.dayGrid.renderEvents(dayEvents);
		}

		// the all-day area is flexible and might have a lot of events, so shift the height
		this.updateHeight();
	},


	// Retrieves all segment objects that are rendered in the view
	getEventSegs: function() {
		return this.timeGrid.getEventSegs().concat(
			this.dayGrid ? this.dayGrid.getEventSegs() : []
		);
	},


	// Unrenders all event elements and clears internal segment data
	unrenderEvents: function() {

		// unrender the events in the subcomponents
		this.timeGrid.unrenderEvents();
		if (this.dayGrid) {
			this.dayGrid.unrenderEvents();
		}

		// we DON'T need to call updateHeight() because
		// a renderEvents() call always happens after this, which will eventually call updateHeight()
	},


	/* Dragging (for events and external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(dropLocation, seg) {
		if (dropLocation.start.hasTime()) {
			return this.timeGrid.renderDrag(dropLocation, seg);
		}
		else if (this.dayGrid) {
			return this.dayGrid.renderDrag(dropLocation, seg);
		}
	},


	unrenderDrag: function() {
		this.timeGrid.unrenderDrag();
		if (this.dayGrid) {
			this.dayGrid.unrenderDrag();
		}
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection
	renderSelection: function(span) {
		if (span.start.hasTime() || span.end.hasTime()) {
			this.timeGrid.renderSelection(span);
		}
		else if (this.dayGrid) {
			this.dayGrid.renderSelection(span);
		}
	},


	// Unrenders a visual indications of a selection
	unrenderSelection: function() {
		this.timeGrid.unrenderSelection();
		if (this.dayGrid) {
			this.dayGrid.unrenderSelection();
		}
	}

});


// Methods that will customize the rendering behavior of the AgendaView's timeGrid
// TODO: move into TimeGrid
var agendaTimeGridMethods = {


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;
		var weekText;

		if (view.opt('weekNumbers')) {
			weekText = this.start.format(view.opt('smallWeekFormat'));

			return '' +
				'<th class="fc-axis fc-week-number ' + view.widgetHeaderClass + '" ' + view.axisStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: this.start, type: 'week', forceOff: this.colCnt > 1 },
						htmlEscape(weekText) // inner HTML
					) +
				'</th>';
		}
		else {
			return '<th class="fc-axis ' + view.widgetHeaderClass + '" ' + view.axisStyleAttr() + '></th>';
		}
	},


	// Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
	renderBgIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis ' + view.widgetContentClass + '" ' + view.axisStyleAttr() + '></td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};


// Methods that will customize the rendering behavior of the AgendaView's dayGrid
var agendaDayGridMethods = {


	// Generates the HTML that goes before the all-day cells
	renderBgIntroHtml: function() {
		var view = this.view;

		return '' +
			'<td class="fc-axis ' + view.widgetContentClass + '" ' + view.axisStyleAttr() + '>' +
				'<span>' + // needed for matchCellWidths
					view.getAllDayHtml() +
				'</span>' +
			'</td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};

;;

var AGENDA_ALL_DAY_EVENT_LIMIT = 5;

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ seconds: 30 },
	{ seconds: 15 }
];

fcViews.agenda = {
	'class': AgendaView,
	defaults: {
		allDaySlot: true,
		slotDuration: '00:30:00',
		minTime: '00:00:00',
		maxTime: '24:00:00',
		slotEventOverlap: true // a bad name. confused with overlap/constraint system
	}
};

fcViews.agendaDay = {
	type: 'agenda',
	duration: { days: 1 }
};

fcViews.agendaWeek = {
	type: 'agenda',
	duration: { weeks: 1 }
};
;;

/*
Responsible for the scroller, and forwarding event-related actions into the "grid"
*/
var ListView = View.extend({

	grid: null,
	scroller: null,

	initialize: function() {
		this.grid = new ListViewGrid(this);
		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},

	setRange: function(range) {
		View.prototype.setRange.call(this, range); // super

		this.grid.setRange(range); // needs to process range-related options
	},

	renderSkeleton: function() {
		this.el.addClass(
			'fc-list-view ' +
			this.widgetContentClass
		);

		this.scroller.render();
		this.scroller.el.appendTo(this.el);

		this.grid.setElement(this.scroller.scrollEl);
	},

	unrenderSkeleton: function() {
		this.scroller.destroy(); // will remove the Grid too
	},

	setHeight: function(totalHeight, isAuto) {
		this.scroller.setHeight(this.computeScrollerHeight(totalHeight));
	},

	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},

	renderEvents: function(events) {
		this.grid.renderEvents(events);
	},

	unrenderEvents: function() {
		this.grid.unrenderEvents();
	},

	isEventResizable: function(event) {
		return false;
	},

	isEventDraggable: function(event) {
		return false;
	}

});

/*
Responsible for event rendering and user-interaction.
Its "el" is the inner-content of the above view's scroller.
*/
var ListViewGrid = Grid.extend({

	segSelector: '.fc-list-item', // which elements accept event actions
	hasDayInteractions: false, // no day selection or day clicking

	// slices by day
	spanToSegs: function(span) {
		var view = this.view;
		var dayStart = view.start.clone().time(0); // timed, so segs get times!
		var dayIndex = 0;
		var seg;
		var segs = [];

		while (dayStart < view.end) {

			seg = intersectRanges(span, {
				start: dayStart,
				end: dayStart.clone().add(1, 'day')
			});

			if (seg) {
				seg.dayIndex = dayIndex;
				segs.push(seg);
			}

			dayStart.add(1, 'day');
			dayIndex++;

			// detect when span won't go fully into the next day,
			// and mutate the latest seg to the be the end.
			if (
				seg && !seg.isEnd && span.end.hasTime() &&
				span.end < dayStart.clone().add(this.view.nextDayThreshold)
			) {
				seg.end = span.end.clone();
				seg.isEnd = true;
				break;
			}
		}

		return segs;
	},

	// like "4:00am"
	computeEventTimeFormat: function() {
		return this.view.opt('mediumTimeFormat');
	},

	// for events with a url, the whole <tr> should be clickable,
	// but it's impossible to wrap with an <a> tag. simulate this.
	handleSegClick: function(seg, ev) {
		var url;

		Grid.prototype.handleSegClick.apply(this, arguments); // super. might prevent the default action

		// not clicking on or within an <a> with an href
		if (!$(ev.target).closest('a[href]').length) {
			url = seg.event.url;
			if (url && !ev.isDefaultPrevented()) { // jsEvent not cancelled in handler
				window.location.href = url; // simulate link click
			}
		}
	},

	// returns list of foreground segs that were actually rendered
	renderFgSegs: function(segs) {
		segs = this.renderFgSegEls(segs); // might filter away hidden events

		if (!segs.length) {
			this.renderEmptyMessage();
		}
		else {
			this.renderSegList(segs);
		}

		return segs;
	},

	renderEmptyMessage: function() {
		this.el.html(
			'<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
			'<div class="fc-list-empty-wrap1">' +
			'<div class="fc-list-empty">' +
				htmlEscape(this.view.opt('noEventsMessage')) +
			'</div>' +
			'</div>' +
			'</div>'
		);
	},

	// render the event segments in the view
	renderSegList: function(allSegs) {
		var segsByDay = this.groupSegsByDay(allSegs); // sparse array
		var dayIndex;
		var daySegs;
		var i;
		var tableEl = $('<table class="fc-list-table"><tbody/></table>');
		var tbodyEl = tableEl.find('tbody');

		for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
			daySegs = segsByDay[dayIndex];
			if (daySegs) { // sparse array, so might be undefined

				// append a day header
				tbodyEl.append(this.dayHeaderHtml(
					this.view.start.clone().add(dayIndex, 'days')
				));

				this.sortEventSegs(daySegs);

				for (i = 0; i < daySegs.length; i++) {
					tbodyEl.append(daySegs[i].el); // append event row
				}
			}
		}

		this.el.empty().append(tableEl);
	},

	// Returns a sparse array of arrays, segs grouped by their dayIndex
	groupSegsByDay: function(segs) {
		var segsByDay = []; // sparse array
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			(segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
				.push(seg);
		}

		return segsByDay;
	},

	// generates the HTML for the day headers that live amongst the event rows
	dayHeaderHtml: function(dayDate) {
		var view = this.view;
		var mainFormat = view.opt('listDayFormat');
		var altFormat = view.opt('listDayAltFormat');

		return '<tr class="fc-list-heading" data-date="' + dayDate.format('YYYY-MM-DD') + '">' +
			'<td class="' + view.widgetHeaderClass + '" colspan="3">' +
				(mainFormat ?
					view.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-main' },
						htmlEscape(dayDate.format(mainFormat)) // inner HTML
					) :
					'') +
				(altFormat ?
					view.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-alt' },
						htmlEscape(dayDate.format(altFormat)) // inner HTML
					) :
					'') +
			'</td>' +
		'</tr>';
	},

	// generates the HTML for a single event row
	fgSegHtml: function(seg) {
		var view = this.view;
		var classes = [ 'fc-list-item' ].concat(this.getSegCustomClasses(seg));
		var bgColor = this.getSegBackgroundColor(seg);
		var event = seg.event;
		var url = event.url;
		var timeHtml;

		if (event.allDay) {
			timeHtml = view.getAllDayHtml();
		}
		else if (view.isMultiDayEvent(event)) { // if the event appears to span more than one day
			if (seg.isStart || seg.isEnd) { // outer segment that probably lasts part of the day
				timeHtml = htmlEscape(this.getEventTimeText(seg));
			}
			else { // inner segment that lasts the whole day
				timeHtml = view.getAllDayHtml();
			}
		}
		else {
			// Display the normal time text for the *event's* times
			timeHtml = htmlEscape(this.getEventTimeText(event));
		}

		if (url) {
			classes.push('fc-has-url');
		}

		return '<tr class="' + classes.join(' ') + '">' +
			(this.displayEventTime ?
				'<td class="fc-list-item-time ' + view.widgetContentClass + '">' +
					(timeHtml || '') +
				'</td>' :
				'') +
			'<td class="fc-list-item-marker ' + view.widgetContentClass + '">' +
				'<span class="fc-event-dot"' +
				(bgColor ?
					' style="background-color:' + bgColor + '"' :
					'') +
				'></span>' +
			'</td>' +
			'<td class="fc-list-item-title ' + view.widgetContentClass + '">' +
				'<a' + (url ? ' href="' + htmlEscape(url) + '"' : '') + '>' +
					htmlEscape(seg.event.title || '') +
				'</a>' +
			'</td>' +
		'</tr>';
	}

});

;;

fcViews.list = {
	'class': ListView,
	buttonTextKey: 'list', // what to lookup in locale files
	defaults: {
		buttonText: 'list', // text to display for English
		listDayFormat: 'LL', // like "January 1, 2016"
		noEventsMessage: 'No events to display'
	}
};

fcViews.listDay = {
	type: 'list',
	duration: { days: 1 },
	defaults: {
		listDayFormat: 'dddd' // day-of-week is all we need. full date is probably in header
	}
};

fcViews.listWeek = {
	type: 'list',
	duration: { weeks: 1 },
	defaults: {
		listDayFormat: 'dddd', // day-of-week is more important
		listDayAltFormat: 'LL'
	}
};

fcViews.listMonth = {
	type: 'list',
	duration: { month: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

fcViews.listYear = {
	type: 'list',
	duration: { year: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

;;

return FC; // export for Node/CommonJS
});

/***/ },

/***/ "./node_modules/jquery-ui/ui/data.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo( function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		} ) :

		// Support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		}
} );
} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/ie.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/plugin.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
return $.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
				instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};

} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/safe-active-element.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};

} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/safe-blur.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeBlur = function( element ) {

	// Support: IE9 - 10 only
	// If the <body> is blurred, IE will switch windows, see #9420
	if ( element && element.nodeName.toLowerCase() !== "body" ) {
		$( element ).trigger( "blur" );
	}
};

} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/scroll-parent.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.scrollParent = function( includeHidden ) {
	var position = this.css( "position" ),
		excludeStaticParent = position === "absolute",
		overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
		scrollParent = this.parents().filter( function() {
			var parent = $( this );
			if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
				return false;
			}
			return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
				parent.css( "overflow-x" ) );
		} ).eq( 0 );

	return position === "fixed" || !scrollParent.length ?
		$( this[ 0 ].ownerDocument || document ) :
		scrollParent;
};

} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/version.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/widget.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery-ui/ui/version.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/widgets/draggable.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("./node_modules/jquery/dist/jquery.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/widgets/mouse.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/data.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/plugin.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/safe-active-element.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/safe-blur.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/scroll-parent.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/version.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/widget.js")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.draggable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// Callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if ( this.options.addClasses ) {
			this._addClass( "ui-draggable" );
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var o = this.options;

		// Among others, prevent a drag on a resizable-handle
		if ( this.helper || o.disabled ||
				$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle( event );
		if ( !this.handle ) {
			return false;
		}

		this._blurActiveElement( event );

		this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

		return true;

	},

	_blockFrames: function( selector ) {
		this.iframeBlocks = this.document.find( selector ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( "position", "absolute" )
				.appendTo( iframe.parent() )
				.outerWidth( iframe.outerWidth() )
				.outerHeight( iframe.outerHeight() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: function( event ) {
		var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
			target = $( event.target );

		// Don't blur if the event occurred on an element that is within
		// the currently focused element
		// See #10527, #12472
		if ( target.closest( activeElement ).length ) {
			return;
		}

		// Blur any element that currently has focus, see #4261
		$.ui.safeBlur( activeElement );
	},

	_mouseStart: function( event ) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper( event );

		this._addClass( this.helper, "ui-draggable-dragging" );

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent( true );
		this.offsetParent = this.helper.offsetParent();
		this.hasFixedAncestor = this.helper.parents().filter( function() {
				return $( this ).css( "position" ) === "fixed";
			} ).length > 0;

		//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if ( this._trigger( "start", event ) === false ) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ( $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( this, event );
		}

		// Execute the drag once - this causes the helper not to be visible before getting its
		// correct position
		this._mouseDrag( event, true );

		// If the ddmanager is used for droppables, inform the manager that dragging has started
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart( this, event );
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function( event, noPropagation ) {

		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo( "absolute" );

		//Call plugins and callbacks and use the resulting position if something is returned
		if ( !noPropagation ) {
			var ui = this._uiHash();
			if ( this._trigger( "drag", event, ui ) === false ) {
				this._mouseUp( new $.Event( "mouseup", event ) );
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.drag( this, event );
		}

		return false;
	},

	_mouseStop: function( event ) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
			dropped = $.ui.ddmanager.drop( this, event );
		}

		//if a drop comes from outside (a sortable)
		if ( this.dropped ) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ( ( this.options.revert === "invalid" && !dropped ) ||
				( this.options.revert === "valid" && dropped ) ||
				this.options.revert === true || ( $.isFunction( this.options.revert ) &&
				this.options.revert.call( this.element, dropped ) )
		) {
			$( this.helper ).animate(
				this.originalPosition,
				parseInt( this.options.revertDuration, 10 ),
				function() {
					if ( that._trigger( "stop", event ) !== false ) {
						that._clear();
					}
				}
			);
		} else {
			if ( this._trigger( "stop", event ) !== false ) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		// If the ddmanager is used for droppables, inform the manager that dragging has stopped
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop( this, event );
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {

			// The interaction is over; whether or not the click resulted in a drag,
			// focus the element
			this.element.trigger( "focus" );
		}

		return $.ui.mouse.prototype._mouseUp.call( this, event );
	},

	cancel: function() {

		if ( this.helper.is( ".ui-draggable-dragging" ) ) {
			this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function( event ) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this._addClass( this.handleElement, "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this._removeClass( this.handleElement, "ui-draggable-handle" );
	},

	_createHelper: function( event ) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if ( !helper.parents( "body" ).length ) {
			helper.appendTo( ( o.appendTo === "parent" ?
				this.element[ 0 ].parentNode :
				o.appendTo ) );
		}

		// Http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create
		if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
			this._setPositionRelative();
		}

		if ( helper[ 0 ] !== this.element[ 0 ] &&
				!( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
			helper.css( "position", "absolute" );
		}

		return helper;

	},

	_setPositionRelative: function() {
		if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
			this.element[ 0 ].style.position = "relative";
		}
	},

	_adjustOffsetFromHelper: function( obj ) {
		if ( typeof obj === "string" ) {
			obj = obj.split( " " );
		}
		if ( $.isArray( obj ) ) {
			obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
		}
		if ( "left" in obj ) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ( "right" in obj ) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ( "top" in obj ) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ( "bottom" in obj ) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: function( element ) {
		return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset(),
			document = this.document[ 0 ];

		// This is a special case where we need to modify a offset calculated on start, since the
		// following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the
		// next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
		// the document, which means that the scroll is included in the initial calculation of the
		// offset of the parent, and never recalculated upon drag
		if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
			left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
		};

	},

	_getRelativeOffset: function() {
		if ( this.cssPosition !== "relative" ) {
			return { top: 0, left: 0 };
		}

		var p = this.element.position(),
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
			left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
		};

	},

	_cacheMargins: function() {
		this.margins = {
			left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
			top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
			right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
			bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var isUserScrollable, c, ce,
			o = this.options,
			document = this.document[ 0 ];

		this.relativeContainer = null;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() -
					this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() +
					( $( window ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document" ) {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if ( !ce ) {
			return;
		}

		isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
			( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
				( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right,
			( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
				( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
				this.helperProportions.height -
				this.margins.top -
				this.margins.bottom
		];
		this.relativeContainer = c;
	},

	_convertPositionTo: function( d, pos ) {

		if ( !pos ) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: (

				// The absolute mouse position
				pos.top	+

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top * mod -
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
			),
			left: (

				// The absolute mouse position
				pos.left +

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left * mod	-
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
			)
		};

	},

	_generatePosition: function( event, constrainPosition ) {

		var containment, co, top, left,
			o = this.options,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
			pageX = event.pageX,
			pageY = event.pageY;

		// Cache the scroll
		if ( !scrollIsRootNode || !this.offset.scroll ) {
			this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( constrainPosition ) {
			if ( this.containment ) {
				if ( this.relativeContainer ) {
					co = this.relativeContainer.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				} else {
					containment = this.containment;
				}

				if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
					pageX = containment[ 0 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
					pageY = containment[ 1 ] + this.offset.click.top;
				}
				if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
					pageX = containment[ 2 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
					pageY = containment[ 3 ] + this.offset.click.top;
				}
			}

			if ( o.grid ) {

				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
				// argument errors in IE (see ticket #6950)
				top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
					this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
				pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
					top - this.offset.click.top > containment[ 3 ] ) ?
						top :
						( ( top - this.offset.click.top >= containment[ 1 ] ) ?
							top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

				left = o.grid[ 0 ] ? this.originalPageX +
					Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
					this.originalPageX;
				pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
					left - this.offset.click.left > containment[ 2 ] ) ?
						left :
						( ( left - this.offset.click.left >= containment[ 0 ] ) ?
							left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
			}

			if ( o.axis === "y" ) {
				pageX = this.originalPageX;
			}

			if ( o.axis === "x" ) {
				pageY = this.originalPageY;
			}
		}

		return {
			top: (

				// The absolute mouse position
				pageY -

				// Click offset (relative to the element)
				this.offset.click.top -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
			),
			left: (

				// The absolute mouse position
				pageX -

				// Click offset (relative to the element)
				this.offset.click.left -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
			)
		};

	},

	_clear: function() {
		this._removeClass( this.helper, "ui-draggable-dragging" );
		if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
		if ( this.destroyOnClear ) {
			this.destroy();
		}
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function( type, event, ui ) {
		ui = ui || this._uiHash();
		$.ui.plugin.call( this, type, [ event, ui, this ], true );

		// Absolute position and offset (see #6884 ) have to be recalculated after plugins
		if ( /^(drag|start|stop)/.test( type ) ) {
			this.positionAbs = this._convertPositionTo( "absolute" );
			ui.offset = this.positionAbs;
		}
		return $.Widget.prototype._trigger.call( this, type, event, ui );
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.sortables = [];
		$( draggable.options.connectToSortable ).each( function() {
			var sortable = $( this ).sortable( "instance" );

			if ( sortable && !sortable.options.disabled ) {
				draggable.sortables.push( sortable );

				// RefreshPositions is called at drag start to refresh the containerCache
				// which is used in drag. This ensures it's initialized and synchronized
				// with any changes that might have happened on the page since initialization.
				sortable.refreshPositions();
				sortable._trigger( "activate", event, uiSortable );
			}
		} );
	},
	stop: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.cancelHelperRemoval = false;

		$.each( draggable.sortables, function() {
			var sortable = this;

			if ( sortable.isOver ) {
				sortable.isOver = 0;

				// Allow this sortable to handle removing the helper
				draggable.cancelHelperRemoval = true;
				sortable.cancelHelperRemoval = false;

				// Use _storedCSS To restore properties in the sortable,
				// as this also handles revert (#9675) since the draggable
				// may have modified them in unexpected ways (#8809)
				sortable._storedCSS = {
					position: sortable.placeholder.css( "position" ),
					top: sortable.placeholder.css( "top" ),
					left: sortable.placeholder.css( "left" )
				};

				sortable._mouseStop( event );

				// Once drag has ended, the sortable should return to using
				// its original helper, not the shared helper from draggable
				sortable.options.helper = sortable.options._helper;
			} else {

				// Prevent this Sortable from removing the helper.
				// However, don't set the draggable to remove the helper
				// either as another connected Sortable may yet handle the removal.
				sortable.cancelHelperRemoval = true;

				sortable._trigger( "deactivate", event, uiSortable );
			}
		} );
	},
	drag: function( event, ui, draggable ) {
		$.each( draggable.sortables, function() {
			var innermostIntersecting = false,
				sortable = this;

			// Copy over variables that sortable's _intersectsWith uses
			sortable.positionAbs = draggable.positionAbs;
			sortable.helperProportions = draggable.helperProportions;
			sortable.offset.click = draggable.offset.click;

			if ( sortable._intersectsWith( sortable.containerCache ) ) {
				innermostIntersecting = true;

				$.each( draggable.sortables, function() {

					// Copy over variables that sortable's _intersectsWith uses
					this.positionAbs = draggable.positionAbs;
					this.helperProportions = draggable.helperProportions;
					this.offset.click = draggable.offset.click;

					if ( this !== sortable &&
							this._intersectsWith( this.containerCache ) &&
							$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
						innermostIntersecting = false;
					}

					return innermostIntersecting;
				} );
			}

			if ( innermostIntersecting ) {

				// If it intersects, we use a little isOver variable and set it once,
				// so that the move-in stuff gets fired only once.
				if ( !sortable.isOver ) {
					sortable.isOver = 1;

					// Store draggable's parent in case we need to reappend to it later.
					draggable._parent = ui.helper.parent();

					sortable.currentItem = ui.helper
						.appendTo( sortable.element )
						.data( "ui-sortable-item", true );

					// Store helper option to later restore it
					sortable.options._helper = sortable.options.helper;

					sortable.options.helper = function() {
						return ui.helper[ 0 ];
					};

					// Fire the start events of the sortable with our passed browser event,
					// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );

					// Hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );

					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {

				// If it doesn't intersect with the sortable, and it intersected before,
				// we fake the drag stop of the sortable, but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,
					// so revert must be temporarily false until after mouseStop is called.
					sortable.options._revert = sortable.options.revert;
					sortable.options.revert = false;

					sortable._trigger( "out", event, sortable._uiHash( sortable ) );
					sortable._mouseStop( event, true );

					// Restore sortable behaviors that were modfied
					// when the draggable entered the sortable area (#9481)
					sortable.options.revert = sortable.options._revert;
					sortable.options.helper = sortable.options._helper;

					if ( sortable.placeholder ) {
						sortable.placeholder.remove();
					}

					// Restore and recalculate the draggable's offset considering the sortable
					// may have modified them in unexpected ways. (#8809, #10669)
					ui.helper.appendTo( draggable._parent );
					draggable._refreshOffsets( event );
					ui.position = draggable._generatePosition( event, true );

					draggable._trigger( "fromSortable", event );

					// Inform draggable that the helper is no longer in a valid drop zone
					draggable.dropped = false;

					// Need to refreshPositions of all sortables just in case removing
					// from one sortable changes the location of other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );
				}
			}
		} );
	}
} );

$.ui.plugin.add( "draggable", "cursor", {
	start: function( event, ui, instance ) {
		var t = $( "body" ),
			o = instance.options;

		if ( t.css( "cursor" ) ) {
			o._cursor = t.css( "cursor" );
		}
		t.css( "cursor", o.cursor );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._cursor ) {
			$( "body" ).css( "cursor", o._cursor );
		}
	}
} );

$.ui.plugin.add( "draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if ( t.css( "opacity" ) ) {
			o._opacity = t.css( "opacity" );
		}
		t.css( "opacity", o.opacity );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._opacity ) {
			$( ui.helper ).css( "opacity", o._opacity );
		}
	}
} );

$.ui.plugin.add( "draggable", "scroll", {
	start: function( event, ui, i ) {
		if ( !i.scrollParentNotHidden ) {
			i.scrollParentNotHidden = i.helper.scrollParent( false );
		}

		if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
				i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
			i.overflowOffset = i.scrollParentNotHidden.offset();
		}
	},
	drag: function( event, ui, i  ) {

		var o = i.options,
			scrolled = false,
			scrollParent = i.scrollParentNotHidden[ 0 ],
			document = i.document[ 0 ];

		if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
			if ( !o.axis || o.axis !== "x" ) {
				if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
						o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
				} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
						o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
				} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if ( !o.axis || o.axis !== "x" ) {
				if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
				} else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() - o.scrollSpeed
					);
				} else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() + o.scrollSpeed
					);
				}
			}

		}

		if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( i, event );
		}

	}
} );

$.ui.plugin.add( "draggable", "snap", {
	start: function( event, ui, i ) {

		var o = i.options;

		i.snapElements = [];

		$( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
			.each( function() {
				var $t = $( this ),
					$o = $t.offset();
				if ( this !== i.element[ 0 ] ) {
					i.snapElements.push( {
						item: this,
						width: $t.outerWidth(), height: $t.outerHeight(),
						top: $o.top, left: $o.left
					} );
				}
			} );

	},
	drag: function( event, ui, inst ) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

			l = inst.snapElements[ i ].left - inst.margins.left;
			r = l + inst.snapElements[ i ].width;
			t = inst.snapElements[ i ].top - inst.margins.top;
			b = t + inst.snapElements[ i ].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
					!$.contains( inst.snapElements[ i ].item.ownerDocument,
					inst.snapElements[ i ].item ) ) {
				if ( inst.snapElements[ i ].snapping ) {
					( inst.options.snap.release &&
						inst.options.snap.release.call(
							inst.element,
							event,
							$.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
						) );
				}
				inst.snapElements[ i ].snapping = false;
				continue;
			}

			if ( o.snapMode !== "inner" ) {
				ts = Math.abs( t - y2 ) <= d;
				bs = Math.abs( b - y1 ) <= d;
				ls = Math.abs( l - x2 ) <= d;
				rs = Math.abs( r - x1 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l - inst.helperProportions.width
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r
					} ).left;
				}
			}

			first = ( ts || bs || ls || rs );

			if ( o.snapMode !== "outer" ) {
				ts = Math.abs( t - y1 ) <= d;
				bs = Math.abs( b - y2 ) <= d;
				ls = Math.abs( l - x1 ) <= d;
				rs = Math.abs( r - x2 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r - inst.helperProportions.width
					} ).left;
				}
			}

			if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
				( inst.options.snap.snap &&
					inst.options.snap.snap.call(
						inst.element,
						event,
						$.extend( inst._uiHash(), {
							snapItem: inst.snapElements[ i ].item
						} ) ) );
			}
			inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

		}

	}
} );

$.ui.plugin.add( "draggable", "stack", {
	start: function( event, ui, instance ) {
		var min,
			o = instance.options,
			group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
				return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
					( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
			} );

		if ( !group.length ) { return; }

		min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
		$( group ).each( function( i ) {
			$( this ).css( "zIndex", min + i );
		} );
		this.css( "zIndex", ( min + group.length ) );
	}
} );

$.ui.plugin.add( "draggable", "zIndex", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;

		if ( t.css( "zIndex" ) ) {
			o._zIndex = t.css( "zIndex" );
		}
		t.css( "zIndex", o.zIndex );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;

		if ( o._zIndex ) {
			$( ui.helper ).css( "zIndex", o._zIndex );
		}
	}
} );

return $.ui.draggable;

} ) );


/***/ },

/***/ "./node_modules/jquery-ui/ui/widgets/mouse.js":
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("./node_modules/jquery/dist/jquery.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/ie.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/version.js"),
			__webpack_require__("./node_modules/jquery-ui/ui/widget.js")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ },

/***/ "./node_modules/jqvmap/dist/jquery.vmap.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/06/02
 */

var VectorCanvas = function (width, height, params) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';
  this.params = params;

  if (this.mode === 'svg') {
    this.createSvgNode = function (nodeName) {
      return document.createElementNS(this.svgns, nodeName);
    };
  } else {
    try {
      if (!document.namespaces.rvml) {
        document.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml');
      }
      this.createVmlNode = function (tagName) {
        return document.createElement('<rvml:' + tagName + ' class="rvml">');
      };
    } catch (e) {
      this.createVmlNode = function (tagName) {
        return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
      };
    }

    document.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)');
  }

  if (this.mode === 'svg') {
    this.canvas = this.createSvgNode('svg');
  } else {
    this.canvas = this.createVmlNode('group');
    this.canvas.style.position = 'absolute';
  }

  this.setSize(width, height);
};

VectorCanvas.prototype = {
  svgns: 'http://www.w3.org/2000/svg',
  mode: 'svg',
  width: 0,
  height: 0,
  canvas: null
};

var ColorScale = function (colors, normalizeFunction, minValue, maxValue) {
  if (colors) {
    this.setColors(colors);
  }
  if (normalizeFunction) {
    this.setNormalizeFunction(normalizeFunction);
  }
  if (minValue) {
    this.setMin(minValue);
  }
  if (minValue) {
    this.setMax(maxValue);
  }
};

ColorScale.prototype = {
  colors: []
};

var JQVMap = function (params) {
  params = params || {};
  var map = this;
  var mapData = JQVMap.maps[params.map];
  var mapPins;

  if( !mapData){
    throw new Error('Invalid "' + params.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');
  }

  this.selectedRegions = [];
  this.multiSelectRegion = params.multiSelectRegion;

  this.container = params.container;

  this.defaultWidth = mapData.width;
  this.defaultHeight = mapData.height;

  this.color = params.color;
  this.selectedColor = params.selectedColor;
  this.hoverColor = params.hoverColor;
  this.hoverColors = params.hoverColors;
  this.hoverOpacity = params.hoverOpacity;
  this.setBackgroundColor(params.backgroundColor);

  this.width = params.container.width();
  this.height = params.container.height();

  this.resize();

  jQuery(window).resize(function () {
    var newWidth = params.container.width();
    var newHeight = params.container.height();

    if(newWidth && newHeight){
      map.width = newWidth;
      map.height = newHeight;
      map.resize();
      map.canvas.setSize(map.width, map.height);
      map.applyTransform();

      var resizeEvent = jQuery.Event('resize.jqvmap');
      jQuery(params.container).trigger(resizeEvent, [newWidth, newHeight]);

      if(mapPins){
        jQuery('.jqvmap-pin').remove();
        map.pinHandlers = false;
        map.placePins(mapPins.pins, mapPins.mode);
      }
    }
  });

  this.canvas = new VectorCanvas(this.width, this.height, params);
  params.container.append(this.canvas.canvas);

  this.makeDraggable();

  this.rootGroup = this.canvas.createGroup(true);

  this.index = JQVMap.mapIndex;
  this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();

  if (params.enableZoom) {
    jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
    jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container);
  }

  map.countries = [];

  for (var key in mapData.paths) {
    var path = this.canvas.createPath({
      path: mapData.paths[key].path
    });

    path.setFill(this.color);
    path.id = map.getCountryId(key);
    map.countries[key] = path;

    if (this.canvas.mode === 'svg') {
      path.setAttribute('class', 'jqvmap-region');
    } else {
      jQuery(path).addClass('jqvmap-region');
    }

    jQuery(this.rootGroup).append(path);
  }

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'mouseover mouseout', function (e) {
    var containerPath = e.target,
      code = e.target.id.split('_').pop(),
      labelShowEvent = jQuery.Event('labelShow.jqvmap'),
      regionMouseOverEvent = jQuery.Event('regionMouseOver.jqvmap');

    code = code.toLowerCase();

    if (e.type === 'mouseover') {
      jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.paths[code].name]);
      if (!regionMouseOverEvent.isDefaultPrevented()) {
        map.highlight(code, containerPath);
      }
      if (params.showTooltip) {
        map.label.text(mapData.paths[code].name);
        jQuery(params.container).trigger(labelShowEvent, [map.label, code]);

        if (!labelShowEvent.isDefaultPrevented()) {
          map.label.show();
          map.labelWidth = map.label.width();
          map.labelHeight = map.label.height();
        }
      }
    } else {
      map.unhighlight(code, containerPath);

      map.label.hide();
      jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.paths[code].name]);
    }
  });

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'click', function (regionClickEvent) {

    var targetPath = regionClickEvent.target;
    var code = regionClickEvent.target.id.split('_').pop();
    var mapClickEvent = jQuery.Event('regionClick.jqvmap');

    code = code.toLowerCase();

    jQuery(params.container).trigger(mapClickEvent, [code, mapData.paths[code].name]);

    if ( !params.multiSelectRegion && !mapClickEvent.isDefaultPrevented()) {
      for (var keyPath in mapData.paths) {
        map.countries[keyPath].currentFillColor = map.countries[keyPath].getOriginalFill();
        map.countries[keyPath].setFill(map.countries[keyPath].getOriginalFill());
      }
    }

    if ( !mapClickEvent.isDefaultPrevented()) {
      if (map.isSelected(code)) {
        map.deselect(code, targetPath);
      } else {
        map.select(code, targetPath);
      }
    }
  });

  if (params.showTooltip) {
    params.container.mousemove(function (e) {
      if (map.label.is(':visible')) {
        var left = e.pageX - 15 - map.labelWidth;
        var top = e.pageY - 15 - map.labelHeight;

        if(left < 0) {
          left = e.pageX + 15;
        }
        if(top < 0) {
          top = e.pageY + 15;
        }

        map.label.css({
          left: left,
          top: top
        });
      }
    });
  }

  this.setColors(params.colors);

  this.canvas.canvas.appendChild(this.rootGroup);

  this.applyTransform();

  this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);

  if (params.values) {
    this.values = params.values;
    this.setValues(params.values);
  }

  if (params.selectedRegions) {
    if (params.selectedRegions instanceof Array) {
      for(var k in params.selectedRegions) {
        this.select(params.selectedRegions[k].toLowerCase());
      }
    } else {
      this.select(params.selectedRegions.toLowerCase());
    }
  }

  this.bindZoomButtons();

  if(params.pins) {
    mapPins = {
      pins: params.pins,
      mode: params.pinMode
    };

    this.pinHandlers = false;
    this.placePins(params.pins, params.pinMode);
  }

  if(params.showLabels){
    this.pinHandlers = false;

    var pins = {};
    for (key in map.countries){
      if (typeof map.countries[key] !== 'function') {
        if( !params.pins || !params.pins[key] ){
          pins[key] = key.toUpperCase();
        }
      }
    }

    mapPins = {
      pins: pins,
      mode: 'content'
    };

    this.placePins(pins, 'content');
  }

  JQVMap.mapIndex++;
};

JQVMap.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,
  width: 0,
  height: 0,
  countries: {},
  countriesColors: {},
  countriesData: {},
  zoomStep: 1.4,
  zoomMaxStep: 4,
  zoomCurStep: 1
};

JQVMap.xlink = 'http://www.w3.org/1999/xlink';
JQVMap.mapIndex = 1;
JQVMap.maps = {};

(function(){

  var apiParams = {
    colors: 1,
    values: 1,
    backgroundColor: 1,
    scaleColors: 1,
    normalizeFunction: 1,
    enableZoom: 1,
    showTooltip: 1,
    borderColor: 1,
    borderWidth: 1,
    borderOpacity: 1,
    selectedRegions: 1,
    multiSelectRegion: 1
  };

  var apiEvents = {
    onLabelShow: 'labelShow',
    onLoad: 'load',
    onRegionOver: 'regionMouseOver',
    onRegionOut: 'regionMouseOut',
    onRegionClick: 'regionClick',
    onRegionSelect: 'regionSelect',
    onRegionDeselect: 'regionDeselect',
    onResize: 'resize'
  };

  jQuery.fn.vectorMap = function (options) {

    var defaultParams = {
      map: 'world_en',
      backgroundColor: '#a5bfdd',
      color: '#f4f3f0',
      hoverColor: '#c9dfaf',
      hoverColors: {},
      selectedColor: '#c9dfaf',
      scaleColors: ['#b6d6ff', '#005ace'],
      normalizeFunction: 'linear',
      enableZoom: true,
      showTooltip: true,
      borderColor: '#818181',
      borderWidth: 1,
      borderOpacity: 0.25,
      selectedRegions: null,
      multiSelectRegion: false
    }, map = this.data('mapObject');

    if (options === 'addMap') {
      JQVMap.maps[arguments[1]] = arguments[2];
    } else if (options === 'set' && apiParams[arguments[1]]) {
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2));
    } else if (typeof options === 'string' &&
      typeof map[options] === 'function') {
      return map[options].apply(map, Array.prototype.slice.call(arguments, 1));
    } else {
      jQuery.extend(defaultParams, options);
      defaultParams.container = this;
      this.css({ position: 'relative', overflow: 'hidden' });

      map = new JQVMap(defaultParams);

      this.data('mapObject', map);

      this.unbind('.jqvmap');

      for (var e in apiEvents) {
        if (defaultParams[e]) {
          this.bind(apiEvents[e] + '.jqvmap', defaultParams[e]);
        }
      }

      var loadEvent = jQuery.Event('load.jqvmap');
      jQuery(defaultParams.container).trigger(loadEvent, map);

      return map;
    }
  };

})(jQuery);

ColorScale.arrayToRgb = function (ar) {
  var rgb = '#';
  var d;
  for (var i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length === 1 ? '0' + d : d;
  }
  return rgb;
};

ColorScale.prototype.getColor = function (value) {
  if (typeof this.normalize === 'function') {
    value = this.normalize(value);
  }

  var lengthes = [];
  var fullLength = 0;
  var l;

  for (var i = 0; i < this.colors.length - 1; i++) {
    l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
    lengthes.push(l);
    fullLength += l;
  }

  var c = (this.maxValue - this.minValue) / fullLength;

  for (i = 0; i < lengthes.length; i++) {
    lengthes[i] *= c;
  }

  i = 0;
  value -= this.minValue;

  while (value - lengthes[i] >= 0) {
    value -= lengthes[i];
    i++;
  }

  var color;
  if (i === this.colors.length - 1) {
    color = this.vectorToNum(this.colors[i]).toString(16);
  } else {
    color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16);
  }

  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
};

ColorScale.rgbToArray = function (rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};

ColorScale.prototype.setColors = function (colors) {
  for (var i = 0; i < colors.length; i++) {
    colors[i] = ColorScale.rgbToArray(colors[i]);
  }
  this.colors = colors;
};

ColorScale.prototype.setMax = function (max) {
  this.clearMaxValue = max;
  if (typeof this.normalize === 'function') {
    this.maxValue = this.normalize(max);
  } else {
    this.maxValue = max;
  }
};

ColorScale.prototype.setMin = function (min) {
  this.clearMinValue = min;

  if (typeof this.normalize === 'function') {
    this.minValue = this.normalize(min);
  } else {
    this.minValue = min;
  }
};

ColorScale.prototype.setNormalizeFunction = function (f) {
  if (f === 'polynomial') {
    this.normalize = function (value) {
      return Math.pow(value, 0.2);
    };
  } else if (f === 'linear') {
    delete this.normalize;
  } else {
    this.normalize = f;
  }
  this.setMin(this.clearMinValue);
  this.setMax(this.clearMaxValue);
};

ColorScale.prototype.vectorAdd = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] + vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorLength = function (vector) {
  var result = 0;
  for (var i = 0; i < vector.length; i++) {
    result += vector[i] * vector[i];
  }
  return Math.sqrt(result);
};

ColorScale.prototype.vectorMult = function (vector, num) {
  var result = [];
  for (var i = 0; i < vector.length; i++) {
    result[i] = vector[i] * num;
  }
  return result;
};

ColorScale.prototype.vectorSubtract = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] - vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorToNum = function (vector) {
  var num = 0;
  for (var i = 0; i < vector.length; i++) {
    num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1);
  }
  return num;
};

JQVMap.prototype.applyTransform = function () {
  var maxTransX, maxTransY, minTransX, minTransY;
  if (this.defaultWidth * this.scale <= this.width) {
    maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  } else {
    maxTransX = 0;
    minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
  }

  if (this.defaultHeight * this.scale <= this.height) {
    maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  } else {
    maxTransY = 0;
    minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
  }

  if (this.transY > maxTransY) {
    this.transY = maxTransY;
  } else if (this.transY < minTransY) {
    this.transY = minTransY;
  }
  if (this.transX > maxTransX) {
    this.transX = maxTransX;
  } else if (this.transX < minTransX) {
    this.transX = minTransX;
  }

  this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
};

JQVMap.prototype.bindZoomButtons = function () {
  var map = this;
  this.container.find('.jqvmap-zoomin').click(function(){
    map.zoomIn();
  });
  this.container.find('.jqvmap-zoomout').click(function(){
    map.zoomOut();
  });
};

JQVMap.prototype.deselect = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.isSelected(cc)) {
    this.selectedRegions.splice(this.selectIndex(cc), 1);

    jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
    path.currentFillColor = path.getOriginalFill();
    path.setFill(path.getOriginalFill());
  } else {
    for (var key in this.countries) {
      this.selectedRegions.splice(this.selectedRegions.indexOf(key), 1);
      this.countries[key].currentFillColor = this.color;
      this.countries[key].setFill(this.color);
    }
  }
};

JQVMap.prototype.getCountryId = function (cc) {
  return 'jqvmap' + this.index + '_' + cc;
};

JQVMap.prototype.getPin = function(cc){
  var pinObj = jQuery('#' + this.getPinId(cc));
  return pinObj.html();
};

JQVMap.prototype.getPinId = function (cc) {
  return this.getCountryId(cc) + '_pin';
};

JQVMap.prototype.getPins = function(){
  var pins = this.container.find('.jqvmap-pin');
  var ret = {};
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var cc = pinObj.attr('for').toLowerCase();
    var pinContent = pinObj.html();
    ret[cc] = pinContent;
  });
  return JSON.stringify(ret);
};

JQVMap.prototype.highlight = function (cc, path) {
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  if (this.hoverOpacity) {
    path.setOpacity(this.hoverOpacity);
  } else if (this.hoverColors && (cc in this.hoverColors)) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColors[cc]);
  } else if (this.hoverColor) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColor);
  }
};

JQVMap.prototype.isSelected = function(cc) {
  return this.selectIndex(cc) >= 0;
};

JQVMap.prototype.makeDraggable = function () {
  var mouseDown = false;
  var oldPageX, oldPageY;
  var self = this;

  self.isMoving = false;
  self.isMovingTimeout = false;

  var lastTouchCount;
  var touchCenterX;
  var touchCenterY;
  var touchStartDistance;
  var touchStartScale;
  var touchX;
  var touchY;

  this.container.mousemove(function (e) {

    if (mouseDown) {
      self.transX -= (oldPageX - e.pageX) / self.scale;
      self.transY -= (oldPageY - e.pageY) / self.scale;

      self.applyTransform();

      oldPageX = e.pageX;
      oldPageY = e.pageY;

      self.isMoving = true;
      if (self.isMovingTimeout) {
        clearTimeout(self.isMovingTimeout);
      }

      self.container.trigger('drag');
    }

    return false;

  }).mousedown(function (e) {

    mouseDown = true;
    oldPageX = e.pageX;
    oldPageY = e.pageY;

    return false;

  }).mouseup(function () {

    mouseDown = false;

    clearTimeout(self.isMovingTimeout);
    self.isMovingTimeout = setTimeout(function () {
      self.isMoving = false;
    }, 100);

    return false;

  }).mouseout(function () {

    if(mouseDown && self.isMoving){

      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = setTimeout(function () {
        mouseDown = false;
        self.isMoving = false;
      }, 100);

      return false;
    }
  });

  jQuery(this.container).bind('touchmove', function (e) {

    var offset;
    var scale;
    var touches = e.originalEvent.touches;
    var transformXOld;
    var transformYOld;

    if (touches.length === 1) {
      if (lastTouchCount === 1) {

        if(touchX === touches[0].pageX && touchY === touches[0].pageY){
          return;
        }

        transformXOld = self.transX;
        transformYOld = self.transY;

        self.transX -= (touchX - touches[0].pageX) / self.scale;
        self.transY -= (touchY - touches[0].pageY) / self.scale;

        self.applyTransform();

        if (transformXOld !== self.transX || transformYOld !== self.transY) {
          e.preventDefault();
        }

        self.isMoving = true;
        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }
      }

      touchX = touches[0].pageX;
      touchY = touches[0].pageY;

    } else if (touches.length === 2) {

      if (lastTouchCount === 2) {
        scale = Math.sqrt(
            Math.pow(touches[0].pageX - touches[1].pageX, 2) +
            Math.pow(touches[0].pageY - touches[1].pageY, 2)
          ) / touchStartDistance;

        self.setScale(
          touchStartScale * scale,
          touchCenterX,
          touchCenterY
        );

        e.preventDefault();

      } else {

        offset = jQuery(self.container).offset();
        if (touches[0].pageX > touches[1].pageX) {
          touchCenterX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
        } else {
          touchCenterX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
        }

        if (touches[0].pageY > touches[1].pageY) {
          touchCenterY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
        } else {
          touchCenterY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
        }

        touchCenterX -= offset.left;
        touchCenterY -= offset.top;
        touchStartScale = self.scale;

        touchStartDistance = Math.sqrt(
          Math.pow(touches[0].pageX - touches[1].pageX, 2) +
          Math.pow(touches[0].pageY - touches[1].pageY, 2)
        );
      }
    }

    lastTouchCount = touches.length;
  });

  jQuery(this.container).bind('touchstart', function () {
    lastTouchCount = 0;
  });

  jQuery(this.container).bind('touchend', function () {
    lastTouchCount = 0;
  });
};

JQVMap.prototype.placePins = function(pins, pinMode){
  var map = this;

  if(!pinMode || (pinMode !== 'content' && pinMode !== 'id')) {
    pinMode = 'content';
  }

  if(pinMode === 'content') {//treat pin as content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }

      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute">' + pin + '</div>');
    });
  } else { //treat pin as id of an html content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }
      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute"></div>');
      $pin.append(jQuery('#' + pin));
    });
  }

  this.positionPins();
  if(!this.pinHandlers){
    this.pinHandlers = true;
    var positionFix = function(){
      map.positionPins();
    };
    this.container.bind('zoomIn', positionFix)
      .bind('zoomOut', positionFix)
      .bind('drag', positionFix);
  }
};

JQVMap.prototype.positionPins = function(){
  var map = this;
  var pins = this.container.find('.jqvmap-pin');
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
    var countryObj = jQuery('#' + countryId);
    var bbox = countryObj[0].getBBox();

    var scale = map.scale;
    var rootCoords = map.canvas.rootGroup.getBoundingClientRect();
    var mapCoords = map.container[0].getBoundingClientRect();
    var coords = {
      left: rootCoords.left - mapCoords.left,
      top: rootCoords.top - mapCoords.top
    };

    var middleX = (bbox.x * scale) + ((bbox.width * scale) / 2);
    var middleY = (bbox.y * scale) + ((bbox.height * scale) / 2);

    pinObj.css({
      left: coords.left + middleX - (pinObj.width() / 2),
      top: coords.top + middleY - (pinObj.height() / 2)
    });
  });
};

JQVMap.prototype.removePin = function(cc) {
  cc = cc.toLowerCase();
  jQuery('#' + this.getPinId(cc)).remove();
};

JQVMap.prototype.removePins = function(){
  this.container.find('.jqvmap-pin').remove();
};

JQVMap.prototype.reset = function () {
  for (var key in this.countries) {
    this.countries[key].setFill(this.color);
  }
  this.scale = this.baseScale;
  this.transX = this.baseTransX;
  this.transY = this.baseTransY;
  this.applyTransform();
};

JQVMap.prototype.resize = function () {
  var curBaseScale = this.baseScale;
  if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
    this.baseScale = this.height / this.defaultHeight;
    this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
  } else {
    this.baseScale = this.width / this.defaultWidth;
    this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
  }
  this.scale *= this.baseScale / curBaseScale;
  this.transX *= this.baseScale / curBaseScale;
  this.transY *= this.baseScale / curBaseScale;
};

JQVMap.prototype.select = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (!this.isSelected(cc)) {
    if (this.multiSelectRegion) {
      this.selectedRegions.push(cc);
    } else {
      this.selectedRegions = [cc];
    }

    jQuery(this.container).trigger('regionSelect.jqvmap', [cc]);
    if (this.selectedColor && path) {
      path.currentFillColor = this.selectedColor;
      path.setFill(this.selectedColor);
    }
  }
};

JQVMap.prototype.selectIndex = function (cc) {
  cc = cc.toLowerCase();
  for (var i = 0; i < this.selectedRegions.length; i++) {
    if (cc === this.selectedRegions[i]) {
      return i;
    }
  }
  return -1;
};

JQVMap.prototype.setBackgroundColor = function (backgroundColor) {
  this.container.css('background-color', backgroundColor);
};

JQVMap.prototype.setColors = function (key, color) {
  if (typeof key === 'string') {
    this.countries[key].setFill(color);
    this.countries[key].setAttribute('original', color);
  } else {
    var colors = key;

    for (var code in colors) {
      if (this.countries[code]) {
        this.countries[code].setFill(colors[code]);
        this.countries[code].setAttribute('original', colors[code]);
      }
    }
  }
};

JQVMap.prototype.setNormalizeFunction = function (f) {
  this.colorScale.setNormalizeFunction(f);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setScale = function (scale) {
  this.scale = scale;
  this.applyTransform();
};

JQVMap.prototype.setScaleColors = function (colors) {
  this.colorScale.setColors(colors);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setValues = function (values) {
  var max = 0,
    min = Number.MAX_VALUE,
    val;

  for (var cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);

    if (isNaN(val)) {
      continue;
    }
    if (val > max) {
      max = values[cc];
    }
    if (val < min) {
      min = val;
    }
  }

  if (min === max) {
    max++;
  }

  this.colorScale.setMin(min);
  this.colorScale.setMax(max);

  var colors = {};
  for (cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);
    colors[cc] = isNaN(val) ? this.color : this.colorScale.getColor(val);
  }
  this.setColors(colors);
  this.values = values;
};

JQVMap.prototype.unhighlight = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  path.setOpacity(1);
  if (path.currentFillColor) {
    path.setFill(path.currentFillColor);
  }
};

JQVMap.prototype.zoomIn = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep < map.zoomMaxStep) {
    map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
    map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
    map.setScale(map.scale * map.zoomStep);
    map.zoomCurStep++;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) - sliderDelta);

    map.container.trigger('zoomIn');
  }
};

JQVMap.prototype.zoomOut = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep > 1) {
    map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
    map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
    map.setScale(map.scale / map.zoomStep);
    map.zoomCurStep--;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) + sliderDelta);

    map.container.trigger('zoomOut');
  }
};

VectorCanvas.prototype.applyTransformParams = function (scale, transX, transY) {
  if (this.mode === 'svg') {
    this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
  } else {
    this.rootGroup.coordorigin = (this.width - transX) + ',' + (this.height - transY);
    this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale;
  }
};

VectorCanvas.prototype.createGroup = function (isRoot) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('g');
  } else {
    node = this.createVmlNode('group');
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.style.left = '0px';
    node.style.top = '0px';
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
  }

  if (isRoot) {
    this.rootGroup = node;
  }
  return node;
};

VectorCanvas.prototype.createPath = function (config) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('path');
    node.setAttribute('d', config.path);

    if (this.params.borderColor !== null) {
      node.setAttribute('stroke', this.params.borderColor);
    }
    if (this.params.borderWidth > 0) {
      node.setAttribute('stroke-width', this.params.borderWidth);
      node.setAttribute('stroke-linecap', 'round');
      node.setAttribute('stroke-linejoin', 'round');
    }
    if (this.params.borderOpacity > 0) {
      node.setAttribute('stroke-opacity', this.params.borderOpacity);
    }

    node.setFill = function (color) {
      this.setAttribute('fill', color);
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getAttribute('fill');
    };

    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };

    node.setOpacity = function (opacity) {
      this.setAttribute('fill-opacity', opacity);
    };
  } else {
    node = this.createVmlNode('shape');
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.fillcolor = JQVMap.defaultFillColor;
    node.stroked = false;
    node.path = VectorCanvas.pathSvgToVml(config.path);

    var scale = this.createVmlNode('skew');
    scale.on = true;
    scale.matrix = '0.01,0,0,0.01,0,0';
    scale.offset = '0,0';

    node.appendChild(scale);

    var fill = this.createVmlNode('fill');
    node.appendChild(fill);

    node.setFill = function (color) {
      this.getElementsByTagName('fill')[0].color = color;
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getElementsByTagName('fill')[0].color;
    };
    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };
    node.setOpacity = function (opacity) {
      this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
    };
  }
  return node;
};

VectorCanvas.prototype.pathSvgToVml = function (path) {
  var result = '';
  var cx = 0, cy = 0, ctrlx, ctrly;

  return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords) {
    coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
    if (!coords[0]) {
      coords.shift();
    }

    for (var i = 0, l = coords.length; i < l; i++) {
      coords[i] = Math.round(100 * coords[i]);
    }

    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        result = 't' + coords.join(',');
        break;

      case 'M':
        cx = coords[0];
        cy = coords[1];
        result = 'm' + coords.join(',');
        break;

      case 'l':
        cx += coords[0];
        cy += coords[1];
        result = 'r' + coords.join(',');
        break;

      case 'L':
        cx = coords[0];
        cy = coords[1];
        result = 'l' + coords.join(',');
        break;

      case 'h':
        cx += coords[0];
        result = 'r' + coords[0] + ',0';
        break;

      case 'H':
        cx = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'v':
        cy += coords[0];
        result = 'r0,' + coords[0];
        break;

      case 'V':
        cy = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'c':
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'C':
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      case 's':
        coords.unshift(cy - ctrly);
        coords.unshift(cx - ctrlx);
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'S':
        coords.unshift(cy + cy - ctrly);
        coords.unshift(cx + cx - ctrlx);
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      default:
        break;
    }

    return result;

  }).replace(/z/g, '');
};

VectorCanvas.prototype.setSize = function (width, height) {
  if (this.mode === 'svg') {
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
  } else {
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.canvas.coordsize = width + ' ' + height;
    this.canvas.coordorigin = '0 0';
    if (this.rootGroup) {
      var paths = this.rootGroup.getElementsByTagName('shape');
      for (var i = 0, l = paths.length; i < l; i++) {
        paths[i].coordsize = width + ' ' + height;
        paths[i].style.width = width + 'px';
        paths[i].style.height = height + 'px';
      }
      this.rootGroup.coordsize = width + ' ' + height;
      this.rootGroup.style.width = width + 'px';
      this.rootGroup.style.height = height + 'px';
    }
  }
  this.width = width;
  this.height = height;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/jqvmap/dist/maps/continents/jquery.vmap.australia.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'australia_en', {"width":950,"height":550,"paths":{"pg":{"path":"m 484.34788,3.4935749 -1.05721,69.8328711 10.05776,-0.54289 13.22939,-15.458095 11.11497,0.542891 7.1433,6.400394 2.37157,19.715499 22.74426,12.000739 5.82893,-2.142989 v -7.200443 l -18.25827,-15.200936 -9.00055,-20.801281 7.1433,-3.457356 -5.28604,-11.457848 -10.57208,-0.257159 -2.65731,-12.257897 -28.0303,-18.9154509 -4.77172,-0.8000492 0,0 m 79.20488,2.0286963 -2.51444,3.5716485 13.7437,12.1721783 1.88583,7.143297 3.74309,-0.428598 0.4286,-7.343309 -4.17169,-3.771661 -13.11509,-11.3435558 0,0 m 6.88614,17.2296328 -2.71446,0.62861 -1.65724,7.343309 -5.20032,3.371636 -15.62954,2.743026 0.62861,5.886077 16.45816,-0.828622 10.42921,-6.514687 -0.62861,-11.343556 -1.68581,-1.285793 0,0 m 18.54399,12.800788 3.54308,9.85775 6.25753,6.086089 1.88583,-1.685818 -0.62861,-6.514687 -7.08615,-8.60053 -3.97168,0.857196 0,0 z","name":"Papua New Guinea"},"au":{"path":"m 222.64605,231.19331 -1.00006,72.51875 -11.14354,8.17193 -1.00007,7.1433 15.20094,10.20063 37.5166,-7.1433 h 19.25833 l 7.08615,-10.2292 42.57405,-8.17193 30.40187,9.20056 -2.0287,12.2579 4.05739,12.2579 23.31573,-4.08597 1.00006,6.11467 -15.20094,11.22926 5.05746,4.08596 11.14354,-4.08596 -3.02876,33.71636 21.28703,16.34386 12.17217,-4.08596 6.08609,6.11466 35.4879,-5.1146 33.45921,-54.14619 12.17217,-3.05733 24.31579,-44.94563 6.08609,-38.80239 -15.20094,-19.40119 6.08609,-4.08597 -12.17218,-37.80232 -13.17224,-9.20057 2.0287,-51.06029 -12.17218,-9.20056 -3.02876,-28.601766 h -6.08609 l -20.28696,67.404146 -11.14354,1.02864 -25.34442,-25.54443 14.20087,-37.80233 -26.34448,-5.114599 -29.40181,8.171929 -8.11478,23.48716 -13.17224,3.05733 -1.00006,-16.34386 -53.7176,32.68773 1.00006,12.2579 -8.11478,11.22926 h -20.28696 l -43.60269,18.37256 -15.22951,40.97395 0,0 m 184.49708,195.09773 -5.05746,20.42983 1.00006,14.28659 15.20094,-1.02863 17.22963,-26.5445 -28.37317,-7.14329 0,0 z","name":"Australia"},"nz":{"path":"m 656.52991,385.43138 3.02876,33.71636 -4.05739,15.31523 -15.20094,11.22926 1.00006,13.28653 v 14.2866 l 4.05739,5.1146 41.57399,-35.74506 v -8.17193 H 676.7883 l -14.20087,-48.00296 -6.05752,-1.02863 0,0 m -30.40187,73.54738 8.11478,15.31523 -22.31566,21.45847 -2.02869,11.22926 -15.20094,2.0287 -25.34442,23.48716 -23.31572,-11.22927 -2.02869,-8.17193 42.57405,-18.37256 39.54529,-35.74506 0,0 z","name":"New Zealand"},"nc":{"path":"m 638.30022,209.73485 -1.00006,5.1146 13.17223,18.37256 7.08616,3.05733 1.00006,-7.1433 -20.25839,-19.40119 0,0 z","name":"New Caledonia"},"sb":{"path":"m 606.26967,50.23931 0.4286,6.514687 3.97167,3.771661 3.74309,-2.314428 -3.34306,-6.943285 -4.8003,-1.028635 0,0 m 5.00031,16.172425 -3.34306,3.571648 3.54307,6.514687 4.17169,1.25722 -0.20001,-4.40027 -4.17169,-6.943285 0,0 m 8.14336,-3.771661 2.91446,7.143297 5.62892,6.714699 3.11448,-5.028881 -4.17169,-7.143297 -7.48617,-1.685818 0,0 m 14.6009,10.714946 1.65724,8.829115 3.97168,5.457479 3.34306,-6.914712 -8.97198,-7.371882 0,0 m 4.57171,19.744072 -1.45723,2.514441 4.80029,6.314677 3.34306,0.20001 -2.08584,-8.200505 -4.60028,-0.828623 0,0 m -10.62923,12.572208 -5.00031,2.31442 4.3717,6.08609 3.74309,-2.11441 -3.11448,-6.2861 0,0 z","name":"Solomon Islands"},"vu":{"path":"m 678.95986,143.30218 -3.54307,4.74315 1.4858,5.34319 1.77154,1.20007 3.22877,-4.17168 -2.94304,-7.11473 0,0 m 1.77154,14.54376 0.28573,3.85738 3.82881,1.20007 2.65731,-1.48581 -2.65731,-4.17168 -4.11454,0.60004 0,0 m 5.60035,34.45926 -1.77154,2.68588 2.6573,2.97161 4.42885,-1.4858 -5.31461,-4.17169 0,0 z","name":"Vanuatu"},"fj":{"path":"m 758.25046,186.36198 -3.54308,4.74315 -0.28573,5.34318 4.11454,4.17169 -0.28573,-14.25802 0,0 z","name":"Fiji"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/jqvmap/dist/maps/jquery.vmap.europe.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add Europe Map Data Points */
jQuery.fn.vectorMap('addMap', 'europe_en', {"width":680,"height":520,"paths":{"gl":{"path":"M13.47,93.57C12.35,92.52 12.34,90 10.44,89.14 10.62,88.14 13.84,87.66 11.35,86.39 10.05,87.17 9.25,86.92 8.71,87.58 6.27,88.12 8.6,85.09 6.17,85.17 5.23,84.47 10.33,84.75 9.98,83.14 11.32,83.4 14.67,82.04 12.37,81.03 11.23,81.19 6.54,82.06 10.06,81.32 13.04,80.64 9.92,76.6 8.71,79.05 9.24,77.06 11.03,78.05 12.88,77.78 14.68,74.59 9.38,77.17 8.23,75.54 7.26,73.61 12.43,77.09 11.48,74.6c2.44,-0.76 -0.97,1.23 1.21,1.43 1,0.07 3.06,0.24 1.26,-0.8C15.39,74.51 14.27,73.05 14.04,72.76 16.26,70.08 9.73,69.39 11.65,72.54 9.43,70.77 7.4,69.72 5.62,68.37 4.84,67.27 3.62,65.14 5.75,64.54 6.27,63.17 3.83,63.23 6.08,62.64 8.52,60.62 3.8,58.38 3.79,56.87 4.78,56.07 3.39,53.57 4.92,55.82c2,1.48 -1.5,0.05 -0.41,1.67 0.7,1.18 4.94,4.58 4.09,1.22C7.96,57.37 6.11,57.21 8.09,56.47 5.75,56.14 4.83,52.58 8.11,53.61c1.58,0.65 2.17,-1 2.13,-1.24 1.86,-0.56 0.99,-3.89 0.14,-5.02 -2.29,-0.92 1.59,-2.34 -1.23,-2.91 0.6,-3.73 4.98,-2.29 7.51,-3.37 2.78,-1.33 -1.33,-1.73 -1.69,-3.06 -3.07,-1.99 2.8,-0.5 3.28,-2.76 2.87,0.22 -2.67,-2.82 -1.49,-3.84 1.34,0.59 4.57,3.1 4.27,-0.2C20.58,29.48 17.09,31.14 17.33,29.6c1.78,1.02 0.79,-3.69 2.33,-1.12 1.76,1.21 4.05,-0.81 1.11,-1.21 -0.72,-0.16 1.96,-1.91 2.18,-0.31 2.04,0.89 2.39,3.26 4.86,3.29 1.12,-1.58 -2.89,-2.38 -0.16,-2.31 1.35,-1.83 -5.03,-0.94 -1.14,-2.29 1.39,-1.55 1.81,4.29 2.64,1.36 -0.57,-1.39 -0.41,-4.67 1.53,-2.59 0.16,2.02 -2.74,3.73 -1.03,6.23 2.7,1.13 0.11,-4.85 3.69,-4.25 2.74,-0.7 0.37,-3.01 -1.39,-3.16 0.93,-1.59 -0.48,-0.52 -0.91,-1.1 -1.26,0.42 -2.63,-0.27 -1.15,-1.19 -0.81,-1.9 -3.85,0.74 -5.54,0.53 -3.44,0.64 1.14,-2.76 2.36,-3.3 2.28,-0.77 4.66,2.97 6.55,0.04C34.81,17.14 33.04,17.79 32.17,17.97 30.61,18.81 30.38,17.32 30.54,16.77 29.14,17.79 26.4,16.27 29.42,16.34 29.89,14.12 31.85,14.39 33.58,13.44c0.27,-2.21 -3.96,0.03 -1.92,-1.94 2.34,1.37 5.29,0.49 7.37,1.6 0.49,1.25 2.93,3.07 2.07,0.58C40.16,10.86 37.07,10.79 34.89,10.94 32.01,10.71 38.39,8.92 36.45,6.69 35.49,6.8 33.31,6.65 34.75,5.53c1.74,0.57 3.45,1.31 2.13,3.63 0.97,-0.77 3.6,0.14 4.92,-0.01C42.62,6.51 37.36,8.29 39.31,5.97 39.94,4.69 35.39,5.71 36.07,3.41c2.18,-0.52 6.21,0.1 8.48,1.64 1.78,-0.72 2.84,-0.23 4.07,0.55 1.73,-0.23 3.46,0.06 2.78,2.25C52.75,9.86 54.51,8.35 52.72,6.73 52.71,4.07 54.56,10.07 55.78,8.98 56.01,5.87 52.57,4.02 49.87,3.57 48.45,2.66 43.96,4.29 45.02,2.48 44.96,1.07 43.75,0.16 45.71,1.28 47.56,3.52 50.55,-0.47 53.01,0.78 55.13,-0.05 52.02,4.62 54.57,4.07 55.09,3.62 56.43,7.62 57.26,5.53 57.36,3.28 54.5,4.61 54.71,2.93 54.66,0.68 56.28,0.89 57.93,0.78 59.1,1.36 57.92,5.72 60.98,5.64 61.74,4.33 57.63,0.17 61.09,2.11 61.53,3.09 65.18,3.43 63.42,2.17 61.88,1.53 60.02,-0.12 62.69,1.24c1.18,0.74 1.27,-0.27 2.37,-0.09 0.49,-0.8 2.06,-0.17 3.01,-0.37 45.89,0 91.78,0 137.67,0 0.61,1.21 1.15,3.04 -0.24,1.09 -2.48,-0.7 1.23,2.94 1.58,3.94 1.63,2.86 -1.86,0.67 -3.36,1.88 1.28,-1.72 -2.26,-4.24 -1.57,-1.36 0.03,2.25 1.64,3.73 3.68,2.39 1.03,0.77 -1.42,2.8 -1.62,3.53 -3.09,0.12 0.02,1.62 1.04,2.22 0.66,2.09 4.04,0.64 2.3,3.22 -1.05,1.95 -3.92,1.82 -3.21,-0.86 0.14,-3.28 -4.67,-1.36 -4.04,-5.02 -2.02,-0.71 -0.18,3.84 -2.96,2.48 -0.73,0.74 0.41,1.75 -1.42,1.32 -2.61,0.54 1.71,4.84 -0.38,4.25 -1.39,0.66 -1.21,4.72 0.33,2.08 -0.04,-1.13 1.18,-4.09 2.39,-2.05 0.43,1.69 3.14,3.16 0.34,3.59 0.86,3.33 -3.29,2.48 -4.22,0.42 -0.56,1.42 -4.92,2.25 -4.96,-1.01 -1.09,-1.09 -0.61,-6.28 0.38,-2.79 -0.38,2.15 4.88,3.94 3.74,1.34 -3.75,0.99 -2.13,-7.24 -6.06,-4.79 -0.93,1.3 -1.66,1.94 -1.57,-0.09 0.87,-1.48 -0.65,-6.36 -1.62,-2.76 -0.29,1.71 1.87,5.7 -1.38,4.23 -1.61,0.79 -3.43,1.95 -3.68,-0.56 -1.68,-1 0.16,-4.48 -2.68,-3.04 -0.67,1.11 2.68,6.25 0.02,3.71 -0.94,-1.89 -3.02,-1.6 -4.56,-0.77 1.83,0.09 2.37,0.85 0.57,2.18 0.59,2.05 2.81,-2.2 3.66,0.12 1.38,0.4 3.13,-0.11 3.81,2.17 2.43,3.24 -2.95,0.83 -4.01,1.04 -0.05,-1.82 -4.79,-3.3 -3.23,-1.13 1.49,0.95 1.71,0.82 0.15,1.51 -1.1,2.37 1.53,3.48 2.9,1.87 3.12,-1.53 5.02,4.79 1.15,3.53 -2.62,-0.97 -1.48,2.05 -3.89,2.7 -0.43,2.18 2.56,-0.04 2.88,-0.79 2.47,-0.74 2.4,2.46 3.26,3.28 -2.41,2.08 2.06,1.61 0.72,3.86 0.87,0.94 2.37,2.01 0.05,2.28 -2.05,0.35 -0.86,2.02 0.59,1.45 -1.67,-0.11 -1.69,1.85 -1.36,2.27 -1.73,0.52 -2.08,4.37 -0.55,3.78 -0.25,-2.23 4.33,-2.23 2.08,-0.24 -2.82,-0.46 -0.7,2.99 -3.43,2.2 2.08,0.81 0.22,1 -1.03,1.19 -1.32,0.16 3.49,1.1 1.39,1.26 -1.9,0.07 -0.29,1.99 -2.31,1.42 1.18,0.54 1.34,1.84 1.35,2.8 -2.18,2.04 -4.44,-0.74 -2.18,-2.64 1.63,-0.69 0.76,-4.19 -0.17,-2.1 -0.64,2.71 -4.66,4.66 -4.98,0.68 -0.13,-3.43 1.98,-6.57 2.12,-10.01 -0.26,-1.47 -2.38,-1.12 -1.92,-3.26 0.2,-2.67 -2.43,-4.09 -3.97,-4.66 0.54,-2.82 0.04,-5.39 -1.15,-7.72 0.49,-2.96 -3.2,-2.36 -2.3,0.29 0.39,1.99 2.16,3.98 1.82,5.79 -0.98,-1.18 -4.72,-2.37 -4.53,0.09 1.53,0.74 4.96,0.32 3.23,3.09 -0.36,0.92 2.65,-0.97 2.92,1.14 1.39,1.16 4.2,3.13 1.09,4.33 -2.3,0.81 -7.78,0.76 -7.23,-2.79 1.56,-1.72 -2.19,-2.27 -1.32,0.16 -1.72,-2.55 -3.53,-0.09 -1.9,1.66 -2.13,2.01 -4.41,0.62 -6.81,0.57 -2.19,2.71 4.76,1.16 2.08,3.05 0.58,1.9 4.08,1.91 5.81,2.83 1.96,1.43 -0.47,2.15 -1.35,0.46 -1.82,-1.08 -3.45,2.21 -4.74,-0.62 -0.64,-2.28 -4.68,1.1 -2.47,0.81 1.98,0.42 2.27,5.38 5.07,2.98 1.84,-3.35 3.57,2.14 6.26,0.44 1.29,-0.17 2.13,-0.02 0.67,0.65 1.09,1.24 2.33,0.17 2.6,1.96 1.19,2.8 4.25,5.41 6.32,6.4 -0.65,1.36 -3.26,-1.74 -3.14,1.07 -0.24,-1.71 -1.8,-0.78 -1.41,0.45 -1.2,-0.78 -1.84,-2.07 -1.82,0.08 -0.39,2.77 -2.92,-1.74 -2.76,-0.46 0.55,1.51 -0.55,2.28 -0.85,0.45 -2.38,-1.66 -2.14,3.66 -3.7,0.79 -1.88,-0.98 -0.85,3.28 -2.38,0.99 -2,-0.69 -1.48,2.95 -3.73,1.98 -1.43,0.57 -1.73,-1.87 -2.48,0.33 -1.28,0.15 -2.02,-1.77 -3.67,-0.49 -1.51,-0.59 -3.89,-0.69 -5.18,-1.79 -1.83,0.4 -3.94,-2.71 -4.99,0.05 -1.52,0.2 0.6,-5.44 -2.51,-2.84 -0.5,1.46 -2.44,2.79 -1.46,0.41 -0.04,-2.08 -3.47,-2.35 -1.81,-0.01 -0.33,2.95 -2.47,-1.46 -3.31,-2.22 2.66,-0.66 -1.9,-3.4 0.58,-4.85 0.98,-1.25 -0.43,-3.9 -1.29,-1.57 -2.2,1.2 0.59,4.8 -2.3,3.1 0.07,1.58 0.73,2.33 -0.49,2.37 -0.31,3.19 -2.4,-0.77 -3.7,1.08 -1.26,-0.57 -3.86,-0.58 -3.24,0.73 -1.86,1.54 -5.17,-0.4 -5.06,3.18 -2.02,-0.95 -3.43,1.13 -4.24,1.49 -0.67,-0.74 -1.24,2.48 -2,1.23 2.12,-2.45 -2.15,-1.8 -1.8,0.58 -2.16,1.39 -3.92,0.18 -2.08,-1.7 -1.67,0.05 -3.09,2.47 -2.5,-0.4 -0.88,-2.96 -1.92,-0.22 -2,1.13 -1.96,-0.26 -4.27,2.16 -3.76,-0.97 -0.78,-1.12 -2.93,1.49 -3.4,-0.02 1.83,-0.91 0.7,-3.4 -0.63,-1.07 -0.78,1.04 -1.78,1.59 -1.04,-0.05 -2.35,-3.54 3.85,-1.66 4.59,-3.73 -0.17,-1.96 -2.75,-5.32 -4.26,-2.64 1.79,0.66 -1.44,2.8 -2.07,2.43 -1.51,-3.02 -4.63,-0.57 -2.13,1.56 0.17,1.83 -2.38,1.81 -1.85,-0.14 -1.36,-2.38 -2.64,3.42 -2.69,-0.09 0.92,-1.47 0.05,-4.47 -1.39,-1.81 0.69,-2.4 -1.59,-1.67 -2.42,-0.69 -1.63,-2.6 -2.81,-0.08 -1.32,1.39 -0.12,2.09 -5.82,3.27 -3.43,0.33 -0.7,-1.39 -2.14,-1.09 -2.9,-2.54 -1.31,0.12 -1.87,1.12 -2.63,1.96 -0.18,2.43 -0.75,4.74 -2.05,6.98 -0.56,-1.99 -3.06,-1.81 -4.45,-3.2 -2.37,1.32 0.55,4.85 0.85,5.51 -2.93,-1.09 -0.49,5.23 -3.18,2.66C53.03,69.44 53.8,64.37 51.35,66.72c-0.01,1.25 1.67,5.14 1.03,4.67 -0.53,-2.51 -2.88,0.37 -2.61,-2.21 -1.56,-2.63 -4.32,1.46 -2.75,2.77 0.01,1.17 -1.56,2.39 -0.5,0.42 0.86,-3.51 -4.59,-2.97 -3.27,0.28 1.49,1.65 -0.07,2.95 -1.09,0.84 -1.55,-1.63 -4.28,0.31 -4.69,-2.84 -1.38,-1.87 -1.94,1.56 -0.77,2.26 -0.06,1.31 -0.47,2.49 -0.74,0.56 -1.54,-2.22 -1.58,2.78 -0.86,3.53 1.64,2.36 -5.86,1.67 -2.64,3.82 2.3,1.03 -2.22,1.12 -2.82,0.61 -1.74,0.43 1.87,2.58 -0.75,1.83C27.52,82.87 27.84,78.97 25.72,81.05c-0.33,1.79 3.97,2.08 0.81,3.67C24.18,85.6 27.77,81.48 24.7,81.96c-1.65,-0.58 -3.25,0.94 -2.07,2.52 -0.13,-1.56 -3.34,-2.97 -2.3,-0.65 0.92,1 3.65,4.19 0.68,3.11 -0.39,-1.36 -2.18,-3.54 -2.55,-1.53 -2.1,0.36 1.98,3.44 0.79,3.95 -0.52,-1.87 -2.86,-1.68 -1.64,0.35 -0.16,0.51 -2.67,-2.78 -2.9,-4.29 -1.64,-2.64 -1.84,0.81 -1.4,1.86 -0.78,1.52 2.24,0.79 1.57,2.42 -1.75,-0.73 -3.2,1.28 -0.75,1.28 -0.16,0.78 0.34,2.28 -0.65,2.59z M34.12,18.3c-1.05,0.6 -2.47,3.81 -0.57,3.47 1.95,-0.22 4.06,-4.82 0.57,-3.47z m-22.97,56.17c-2.31,-0.35 -0.79,-1.58 0,0z M2.14,66.59c-1.38,-1.11 -0.95,-1.35 0.46,-0.36 -0.18,-0.08 -0.27,0.6 -0.46,0.36z m168.23,-6.32c-0.28,-1.85 2.85,0.02 0.03,0l-0.03,0z M7.85,51.96c-0.57,-0.92 1.55,0.27 0,0z m1.18,-1.63C7.41,50.26 7.17,48.77 8.95,49.87 10,50.07 10.77,49.96 9.03,50.33z M184.09,37.53c-0.77,-1.48 -1.43,-4.23 -2.73,-6.24 -2.01,-2.67 1.21,-6.02 3.05,-2.64 0.95,1.04 0.93,3.38 1.44,4.42 -4.98,-0.16 0.39,3.51 -1.76,4.46z M23.01,25.35c-1.12,-0.81 -0.79,-3.25 0.17,-0.92 0.17,0.37 -0.49,0.58 -0.17,0.92z M209.99,8.88c0.65,-1.41 0.2,-3.29 -1.61,-3.21 -0.07,-1.5 -1.95,-5.46 0.62,-4.89 1.44,0 2.88,0 4.31,0 1.06,2.38 -1.6,4.58 -1.58,7.24 -0.32,0.7 -1.06,0.8 -1.74,0.86z M44.32,3.05c-1.74,-0.98 -6.31,0.12 -6.14,-2.09 1.47,1.81 3.05,0.95 2.25,-0.17 2.2,-0.52 2.82,0.46 3.89,2.27z","name":"Greenland"},"is":{"path":"m151.61,141.44c-2.42,-0.05 -4.73,-1.12 -5.95,-3.36 -0.71,-2.06 -4.34,-1.68 -3.81,-4.38 0.8,-0.95 3.4,-0.95 1.03,-1.6 -1.69,0.92 -0.37,-1.61 -2.18,-0.86 -0.88,-0.03 -1.32,-2.12 -2.96,-2.05 -1.43,-1.13 -6,-1.27 -4.53,-3.48 1.4,1.45 5.16,1.15 5.29,-1.63 0.95,-0.08 4.39,1.14 2.46,-0.91 -1.28,-0.31 -3.16,-1.27 -0.58,-1.35 2.41,0.51 2.39,-2.69 -0.02,-1.57 -1.25,0.39 -2.36,1.06 -1.66,-0.43 -0.34,-1.62 1.57,-4.11 -1.54,-3.94 -1.49,-1.7 -3.83,-2.36 -5.98,-2.91 1.9,-1.43 2.13,2 4.45,0.36 0.58,-0.11 0.84,1.82 1.93,0.36 1.45,0.02 2.12,1.75 4.12,1.85 1.57,1.88 4.72,-0.08 2.56,-1.73 -1.13,0.23 -4.71,-0.08 -2.41,-1.51 1.13,0.1 5.66,-0.35 3.94,-1.58 -2.53,-0.05 -1.4,-0.83 -0.29,-1.63 0.84,-2.83 -2.64,-1.96 -3.34,-1.81 -1.47,-0.72 -2,-0.85 -1.64,-2.44 2.52,0.42 0.64,-2.75 -0.27,-3.56 -0.04,-0.34 1.76,2 1.91,-0.11 -0.65,-3.43 1.88,0.34 1.11,2 -0.95,4.21 5.86,2.44 3.19,-0.73 -1.94,-1.31 0.11,-2.67 -1.13,-4.2 1.13,0.42 1.67,1.6 2.04,1.18 1.98,0.31 -0.01,2.5 1.33,3.37 0.86,1.89 -0.77,4.19 1.64,5.57 -1.28,0.64 -3.87,-0.52 -2.63,1.99 -0.4,1.18 -1.92,2.25 -0.42,2.93 -1.31,1.46 -1.09,4.59 1.22,2.7 0.49,-1.4 2.89,-6.12 2.22,-2.37 2.69,2.22 4.53,-3.04 4.48,-5.25 2.58,0.03 -0.68,6.63 3.51,5.53 -0.01,-0.74 0.05,-5.1 1.81,-2.72 1.08,-2.01 3.5,-0.36 1.83,1.62 2.1,1.36 -0.53,3.45 0.95,5.46 2.69,-0.06 0.02,-7.39 2.92,-6.07 -0.32,2.52 1.49,4.92 3.27,1.85 1.68,-2.37 1.62,3.33 3.69,1.28 1.71,-0.8 1.1,-6.38 3.47,-3.02 -0.81,1.5 1.32,1.54 -0.24,3.29 -0.5,2.17 2.82,1.16 2.36,3.29 2.02,0.52 2.1,1.62 0.19,2.57 -2.6,1.53 3.45,1.86 0.49,3.25 -0.74,0.55 -3.68,1.15 -1.27,1.34 1.72,-0.23 4.34,-1.28 4.35,1.54 -0.04,2.17 -4.93,1.21 -2.47,3.09 1.83,0.33 2.75,2.38 0.41,2.2 -1.18,-0.56 -1.74,-0.63 -0.71,0.56 -0.6,-0.3 -3.92,0.12 -2.06,0.55 2.71,0.87 -0.55,1.36 -1.7,1.52 -1.06,0.04 -2.49,1.02 -2.87,2.69 -1.35,-0.83 -1.72,1.98 -2.29,-0.35 -0.72,-2.57 -2.1,-0.68 -2.71,0.31 -2.09,-0.1 -4.17,0.18 -5.78,1.63 -1.89,0.57 -3.52,-3.04 -3.52,0.21 -2.4,-1.75 -5.62,-1.53 -6.88,1.4l-0.35,0.08 0,0z m24.31,-7.94c-1.58,1.64 1.17,1.65 0.84,-0.23 -0.28,0.08 -0.56,0.15 -0.84,0.23z M147.49,99.76c-2.33,0.02 -1.42,1.38 0.2,1.79 0.14,-0.38 0.69,-1.97 -0.2,-1.79z m33.62,15.99c1.19,-0.59 1.6,-0.17 0,0z m-44.05,-9.09c-1.62,-0.01 -0.68,-1.6 0.37,-0.74 1.34,-0.47 -0.84,-4.6 0.49,-2.48 -0.6,1.82 2.54,3.42 -0.86,3.22z m-1.42,-1.5c-1.66,0.2 -1.5,-3.06 -0.29,-0.86 -0.05,0.3 1.22,0.95 0.29,0.86z m4.48,-1.49c-0.86,-0.96 -0.83,-1.57 0,0z","name":"Iceland"},"pt":{"path":"m126.31,476.79c-3.11,-0.89 -5.74,-4.21 -9.28,-3.12 -1.78,0.38 1.76,-2.58 1.47,-3.95 0.39,-1.92 1.56,-3.11 1.18,-4.56 -0.46,-1.65 0.47,-3.6 1.4,-5.27 -0.61,-1.65 3.07,-0.14 2.33,-1.74 -1.59,-1.17 -2.48,-2.71 -4.71,-1.61 -1.89,-0.04 -2.12,-3.1 -2.67,-4.46 0.27,-2.21 3.57,-4.27 2.21,-6.5 2.42,0.37 3.47,-2.17 4.77,-3.81 0.98,-1.71 1.87,-3.43 3.16,-4.47 -0.79,-1.76 1.02,-5.31 3.28,-5.87 1.59,-1.26 -0.95,-2.63 0.8,-4.09 0.23,-2.53 -1.05,-5.19 -0.11,-7.75 2.54,0.06 0.15,-1.87 0.17,-2.24 1.59,-1.44 4.74,-3.3 6.49,-1.31 -3.35,1.53 -0.16,3.98 2.09,3.19 1.85,-0.17 3.87,2.53 6.45,0.97 1.56,-0.13 6.26,-0.07 4.22,3.05 0.22,1.77 4.81,2.08 1.88,3.98 -2.66,0.33 -4.02,2.88 -6.33,3.35 -0.97,1.66 1.09,4.53 -0.81,6.49 -1.07,1.01 0.55,2.39 -1.62,2.77 -2.6,1.54 1.62,6.06 -2.82,6.49 -1.74,-0.37 -5.6,-2.08 -3.57,1.31 1.07,1.89 -0.41,4.57 2.03,6.2 1.92,2.91 -3.81,2.81 -3.68,5.95 -1.09,1.6 0.5,5.45 2.67,5.41 -1.19,1.2 -4.31,1 -5,3.34 -3.07,2.07 -0.28,7.22 -4.25,7.62 -0.55,0.29 -1.11,0.63 -1.75,0.65z","name":"Portugal"},"ma":{"path":"m114.26,519.26c5.38,-1.06 11.75,-0.39 15.9,-4.63 5.26,-4.88 8.22,-11.54 11.83,-17.6 2.3,-1.64 3.11,0.89 3.7,2.43 3.25,0.06 3.27,5.03 6.51,6.18 2.01,2.4 5.02,1.6 7.69,1.35 1.26,1.84 3.78,-0.68 5.41,1.5 1.48,1.09 4.97,-1.46 5.09,1.72 1.76,1.07 3.75,0.97 5.94,1.12 1.21,2.49 5.27,4 3.5,6.77 1.55,1.82 -0.97,1 -2.11,1.18 -21.15,0 -42.31,0 -63.46,0z","name":"Morocco"},"es":{"path":"m170.08,507.95c-0.69,-0.45 0.64,-1.19 0,0z m-23.1,-9.15c-1.89,-0.27 -1.23,-3.36 0.81,-2.76 -1.01,0.61 -0.28,2.16 -0.81,2.76z m-1.53,-5.41c-1.92,-1.84 -4.81,-3.55 -4.78,-6.5 1.74,-1.65 -3.05,-2.72 0.06,-3.62 1.8,0.08 1.95,-2.62 0.29,-1.71 -1.68,1.92 -1.49,-3.2 -3.57,-3.37 -1.21,-2.54 -5.06,-1.7 -6.26,-3.7 0.08,-2.72 1.22,-5.37 3.58,-6.95 1.91,0.46 5.66,-3.3 1.98,-3.27 -1.9,-2.17 -1.67,-5.74 1.14,-6.99 3.7,-0.95 1.1,-4.57 -0.28,-6.35 0.58,-1.68 0.45,-3.01 -0.84,-4.53 2.46,2.34 7.45,0.07 6.4,-3.43 -2.26,-2.56 3.15,-2.71 1.97,-5.34 1.81,-1.67 0.28,-5.41 1.17,-6.21 1.77,-2.14 4.99,-2.46 6.88,-4.55 1.92,-2.79 -4.07,-2.45 -2.2,-4.91 0.43,-3.16 -4.07,-2.3 -5.69,-3.2 -1.8,2.37 -3.89,-1.02 -6.23,-0.51 -0.28,-1.34 -3.49,1.05 -2.42,-0.88 2.82,-1.19 -0.75,-4.5 -2.73,-2.96 -2.11,1.45 -3.86,-0.78 -1.34,-1.64 0.94,0.28 2.32,-1.98 0.72,-1.58 2.23,-1.63 -2.16,-0.92 -0.24,-2.66 2.41,-1.99 0.28,-4.66 -2.06,-3.75 -2.26,-1.66 -0.12,-3.23 1.07,-4.13 3.66,0.29 6.76,-2.08 9.92,-3.51 1.78,-2.19 1.34,2.22 3.29,-0.21 3.33,-0.27 2.62,6.64 6.6,4.09 2.47,1.16 5.51,0.94 8.02,1.44 1.9,-1.24 3.14,2.45 5.32,2.3 2.35,0.57 4.3,2.34 6.75,2.93 2.65,1.41 5.29,-0 7.84,-0 2.13,0.65 4.69,5.39 6.5,1.98 2.5,1.32 5.04,3.91 8.46,3.08 1.39,-0.01 3.8,0.79 4.14,1.8 -1.87,1.22 0.06,2.67 1.22,2.4 1.66,1.57 5.29,1.19 5.34,4 1.46,0.54 4.43,-0.57 4.33,1.92 1.41,-0.29 3.73,0.98 4.54,0.5 1.54,0.01 3.53,0.67 3.72,-1.35 1.63,1.02 3.94,2.12 5.05,3.3 -0.62,2.48 1.62,2.94 3.4,2.37 1.23,1.43 2.74,2.23 4.47,1.42 1.62,0.92 3.85,2.1 4.94,-0.04 1.38,-0.43 5.47,1.31 2.5,2.25 -0.52,2.49 0.35,5.62 -3.02,6.24 -3.95,0.65 -6.55,3.99 -10.24,4.85 -4,0.26 -8.86,0.24 -11.41,3.91 0.64,1.13 2.06,1.75 -0.08,1.82 -2.98,1.35 -3.8,5 -6.55,6.72 -2.04,2.09 -4.6,4.27 -5.09,7.29 -0.14,3.13 0.72,6.8 3.86,8.19 -0.28,2.13 -4.94,1.61 -6.14,3.93 -1.51,0.81 -1.84,2.35 -3.08,3.65 0.22,1.68 -4.27,3.01 -1.46,5.03 -0.94,1.1 -4.96,-1.49 -6.88,0.41 -2.79,1.13 -4.55,3.71 -5.69,6.37 -2.11,3.74 -4.63,-2.34 -7.31,0.69 -2.28,0.2 -4.7,-1.72 -7.4,-1.1 -2.51,-0.92 -5.12,-1.75 -7.89,-1.82 -2.99,0.03 -4.54,3.25 -7.74,1.83 -3.45,-0.48 -3.73,3.46 -6.83,4.06z M229.67,469.73c-3.03,-0.94 2.34,-1.17 0,0z m-3.28,-1.86c-1.31,-1.98 3.63,-2.8 0.96,-0.55 -0.28,0.23 -0.58,0.51 -0.96,0.55z m8.15,-0.95c-0.99,-1.19 -3.24,-1.21 -2.69,-3.07 -1.57,-0.61 -4.43,-0.57 -1.44,-1.83 1.82,-0.69 5.61,-3.6 5.15,-0.13 1.01,1.13 4.03,0.64 1.76,2.77 -0.83,0.87 -1.8,1.58 -2.78,2.26z m11.67,-5.53c-0.43,-1.32 -5.6,-1.9 -2.47,-2.15 1.42,0.04 2.4,0.66 2.47,2.15z","name":"Spain"},"tn":{"path":"m284.9,519.26c-2.21,-1.12 0.73,-3.64 -0.95,-5.51 -1.46,-3.16 2.15,-6.93 -0.12,-9.45 -0.67,-0.73 2.93,-1.29 1.98,-2.95 2.23,-0.03 1.46,-2.58 3.74,-2.85 2.52,-1.83 5.41,-3.02 8.35,-3.78 1.3,0.18 -1.34,3.29 1.51,2.64 0.71,-1.15 1.1,-2.15 2.08,-1.26 -0.76,0.27 1.03,1.6 0.03,2.09 1.72,0.55 2.13,5.46 4.03,3.7 1.46,-0.73 4.4,-5.15 5.37,-2.71 -0.9,2.37 -2.28,5.07 -4.51,6.35 -3.22,1.82 -2.27,6.37 0.87,7.67 1.26,0.82 1.66,2.08 3.04,2.36 -0.15,1.99 1.01,4.41 -1.79,3.68 -7.88,0 -15.77,-0.01 -23.63,0.01z","name":"Tunisia"},"dz":{"path":"m181.84,519.26c-2.16,-1 0.09,-2.29 0.05,-3.03 -0.8,-1.48 -5.28,-4.37 -1.47,-3.7 2.83,-0.51 5.98,-1.33 7.84,-3.67 1.17,-2.46 3.66,-2.95 5.89,-2.07 1.44,-0.79 2.77,-2.77 3.38,-0.29 3.67,1.9 4.38,-3.05 7.15,-3.91 3.27,-1.17 6.41,-3.1 10.01,-2.8 3.04,0.05 6.13,0.57 9.13,-0.19 2.74,1.56 5.53,-0.24 7.63,-1.26 2.46,0.75 5.2,0.79 7.75,-0.34 2.83,-0.67 5.62,0.67 8.61,0.23 3.35,0.17 5.17,6.05 8.94,3.1 1.43,-2.77 7.09,0.3 7.33,-3.88 2.03,-1.62 1.87,1.59 2.96,1.23 1.79,0.05 6.14,2.99 6.01,-0.61 2.5,-2 5.17,3.33 8.12,2.16 1.57,-1.13 4.46,-0.6 5.35,-0.15 -1.62,-0.02 -2.54,1.2 -1.93,2.18 -1.87,0.63 -3.58,2.5 -1.04,3.3 0.38,2.87 -2.09,5.94 -0.27,8.63 -0.06,1.4 0.31,4.98 -0.86,5.05 -33.52,0 -67.05,0 -100.57,0z","name":"Algeria"},"be":{"path":"m265.32,343.64c-0.99,-1.16 -1.81,-2.49 -3.73,-3.37 -2.08,-0.35 -0.28,-1.85 -1.25,-2.79 1.47,-1.88 -0.53,-2.73 -1.47,-0.87 -1.28,2.32 -4.46,0.99 -3.2,-0.74 -0.78,-0.74 1.11,-3.63 -1.62,-3.19 -2.17,0.83 -2.23,-1.41 -2.67,-2.1 -3.94,1.05 -1.51,-5.53 -5.39,-3.71 -2.36,1.07 -3.02,-4.27 -0.45,-4.53 1.73,-0.62 4.14,-3.17 4.52,-0.63 2.42,-0.22 3.66,2.56 5.83,0.13 1.3,-0.02 1.88,1.91 1.96,-0.36 0.89,-2.95 2.67,0.31 4.45,-0.43 0.58,-0.7 1.45,3.34 3.54,2.07 2.55,0.01 1.99,1.94 1.4,3.06 -1.22,1.97 -0.15,4.06 2.13,3.5 1.5,1.19 1.36,3.16 2.63,4.39 -1.48,2.22 -4.2,1.28 -5.1,4.2 -1.39,2.28 2.74,5.98 -1.59,5.37z","name":"Belgium"},"it":{"path":"m350.4,500.36c-1.75,-1.38 -4.77,0.56 -6.21,-2.11 -0.98,-3.12 -4.25,-2.35 -6.74,-3.12 -2.11,-1.47 -4.61,-1.93 -6.58,-3.76 -2.2,-1.23 -6.25,0.31 -6.1,-3.66 0.15,-1.98 2.31,-4.17 3.5,-1.8 2.52,0.49 3.53,-4.85 5.24,-0.9 2.01,0.26 4.02,2.27 5.97,0.45 2.63,-0.1 5.81,0.01 7.46,-2.47 1.45,0.01 4.12,1.89 4.36,-0.76 1.1,1.6 3.69,-2.6 2.02,0.26 -1.4,3.25 -4.08,7.31 -3.12,10.66 1.21,0.69 0.93,2.35 2.17,3.37 -1.93,0.14 -1.88,2.41 -1.97,3.84z m7.22,-15.37c-2.78,-0.14 -2.87,-3.99 -0.28,-4.55 1.37,-2.08 -1.36,-4.79 2.17,-5.13 3.25,-2.22 -1.35,-4.63 -1.21,-7.46 -1.16,-2.63 -2.56,-4.66 -3.09,-7.45 -1.59,-2.98 -4.91,-0.29 -6.78,-2.73 -1.65,-0.84 -0.12,-5.17 -3.33,-5.63 -1.56,-0.37 -4.03,2.8 -2.57,0.22 0.06,-2.91 -3.33,-1.3 -4.25,-2.37 -0.69,-2.23 -3.26,-6.17 -5.36,-4.2 -1.73,-2.18 -4.5,1.85 -5.25,-1.44 -2.69,-0.65 -4.1,-2.62 -6.18,-4.28 -0.73,-3.32 -5.19,-3.11 -5.74,-6.57 -1.05,-1.9 -5.27,-0.02 -4.05,-2.26 -1.1,-2.38 -3.86,-3.39 -4.73,-5.46 -3.13,0.51 0.07,-2.73 -1.71,-4.47 -2.14,-2.56 -1.2,-6.42 -3.6,-8.63 -2.19,-1.12 -4.5,-0.88 -6.03,-3.28 -2.22,-0.9 -4.82,-2.51 -7.33,-1.86 -1.74,1.89 -3.46,3.3 -4.61,5.48 -1.55,2.14 -5.91,2.59 -3.27,-0.76 1.07,-4.25 -4.16,-0.46 -5.52,-3.08 -2.08,-1.9 -1.08,-4.02 0.62,-5.53 0.76,-2.12 -4.77,-3.84 -2.88,-4.68 2.55,0.23 5.53,-3.6 2.83,-5.28 -0.93,-1.94 -2.92,-4.5 0.7,-3.9 2.4,0.04 4.29,-1.2 6.65,-0.24 1.85,-1.05 2.45,-2.98 2.51,-4.87 1.03,-0.35 2.29,-2.18 1.57,0.13 -0.67,2.56 4.99,2.17 2.47,4.45 0.19,0.08 2.08,0.32 2.23,1.7 1.41,1.01 2.54,-1.65 0.98,-2.25 0.53,-2.02 3.41,-3.57 2.37,-5.9 0.68,2.09 2.82,3.69 4.41,1.42 0.81,0.91 2.52,3.75 3.07,0.97 -0.97,-1.55 1.29,-1.81 -0.84,-2.7 -0.29,-2.99 3.05,2.3 3.43,-1.02 -1.77,-2.29 0.88,-4.07 2.84,-1.92 2.41,1.34 1.9,-4.15 4.64,-2.65 2.33,0.51 5.21,-2.28 6.13,0.74 1.38,2.34 4.22,3.29 6.93,3.47 1.41,0.44 5.26,-0.07 4.99,0.93 -2.13,0.92 -2.35,3.92 0.43,3.72 -1.26,1.22 -1.47,2.53 -0.57,3.56 0.79,3.16 -4.05,-1.16 -3.93,2.42 -2.22,1.73 -5.54,2.13 -7.33,4.03 -0.52,1.97 1.06,2.99 1.39,4.46 3.61,0.71 -1.06,2.87 -0.87,4.28 0.35,2.85 0.62,6.32 3.48,7.85 2.75,2.1 5.47,4.43 8.75,5.58 2.03,1.86 2.11,4.88 3.12,7.29 0.93,3.7 3.47,6.75 6.72,8.67 2.2,2.52 5.18,4.19 8.71,3.54 1.79,0.5 5.88,-2.59 5.92,0.29 -0.8,1.53 -3.65,2.89 -1.29,4.86 4.13,2.94 10.13,1.81 13.75,5.65 1.89,1.55 5.85,0.5 6.34,3.52 1.71,1.18 6.04,2.73 4.13,5.37 0.4,1.63 -0.95,3.55 -2.34,1.36 -0.96,-2.97 -3.23,-5.68 -6.54,-4.48 -2.32,-1.32 -6.05,-2.69 -6.78,1.09 -1.28,2.2 -1.32,4.97 -2.42,7.17 0.64,2.84 4.59,1.65 5.83,3.73 1.59,0.26 0.35,2.98 1.81,3.8 -0.21,3.1 -5.83,1.6 -5.88,5 0.28,1.92 0.81,4.68 -1.72,5.06 -1.23,1.65 -1.39,4.64 -3.63,5.25z m-35.56,-71.98c1.98,1.43 0.5,-2.39 0,0z m-33.54,62.41c-0.72,-1.6 -3.1,-3.35 -3.37,-5.68 1.54,-2 1.07,-4.81 2.16,-7.03 -3.26,0.28 0.82,-2.8 -0.89,-4.55 -0.02,-1.96 -1.35,-4.24 -2.94,-4.22 0.19,-1.55 0.4,-3.39 2.06,-1.78 3.1,0.15 5.25,-2.55 7.52,-4.29 0.91,-0.84 5.63,1.48 2.53,2.55 -0.36,1.47 2.3,1.33 1.41,2.66 3.07,1.36 0.3,4.08 -0.53,6.16 1.23,2.67 0.22,5.65 0.3,8.76 -0.33,1.29 -0.37,5.73 -2.35,3.37 -1.49,-1.18 -4.61,-1.6 -3.46,1.11 -0.38,1.17 -0.94,2.88 -2.43,2.94z","name":"Italy"},"by":{"path":"m402.72,308.87c0.99,-3.18 0.27,-7 -3.79,-7.04 -0.71,-2.3 3.14,-4.07 4.34,-6.18 -0.26,-5.15 -3.83,-9.19 -5.74,-13.77 2.18,-0.83 4.01,-0.87 5.95,-0.9 0.86,-1.84 2.51,-1.83 3.98,-0.84 -1.05,-1.12 -2.37,-3.07 0.28,-3.17 1.9,0.02 -0.71,-2.58 2.17,-2.24 -1.28,2.76 4.76,1.14 2.24,-1.38 -2.85,-0.47 0.33,-3.89 -1.4,-5.76 0.96,-1.56 2.7,-3.08 2.72,-4.65 2.53,0.76 4.43,-4.49 0.94,-3.47 -1.1,-1.17 0.25,-4.78 1.91,-6.11 2.45,0.48 4.37,-0.43 4.51,-3.22 0.17,-2.25 2.08,-1.78 3.18,-1.85 2.02,-2.32 2.15,2.85 3.69,0.14 1.75,-1.51 3.73,-0.83 3.53,1.45 2.17,2.99 3.24,-2.73 5.87,-2.54 1.93,0.2 3.24,2.17 5.04,1.95 0.25,2.02 -0.47,3.85 1.8,5.15 0.82,1.65 -1.87,4.51 1.47,4.95 2.1,-0.08 0.99,1.32 1.56,1.96 1.72,2.18 3.98,3.94 6.71,3.73 0,1.84 0.71,4.69 2.92,2.85 2.09,-1.22 3.09,0.78 3.28,1.76 2.02,-0.38 3.13,1.46 1.26,2.31 -0.06,3.07 -3.04,4.09 -5.35,2.65 -3.54,0.27 -2.85,5.57 0.51,5.52 0.97,2.55 1.33,5.72 3.91,7.42 -2.66,1.35 -6.88,2 -6.85,5.76 -1.23,2.53 1.43,5.57 1.33,7.2 -1.16,-1.33 -5.51,-3.73 -5.13,-0.77 -2.24,-2.52 -3.75,4.16 -4.59,0.03 -1.77,-2.65 -4.04,1.4 -4.28,1.56 -1.22,-2.58 -2.82,1.6 -3.58,-0.67 -1.01,0.66 -2.93,1.68 -4.34,1.01 -1.39,0.16 -1.96,2.41 -2.67,0.56 -2.3,-2.34 -5.69,0.72 -8.43,-0.73 -2.87,-0.21 -5.7,0.69 -8.51,0.87 -1.69,1.51 -4.3,1.17 -5.72,2.79 -0.82,1.63 -1.2,4.18 -3.37,2.88 -0.54,-0.03 -1.11,0.27 -1.34,0.78z","name":"Belarus"},"pl":{"path":"m378.8,342.69c0.85,-2.71 -2.77,-1.44 -3.2,-3.81 -2.16,-0.74 -2.68,4.74 -4.1,1.6 -1.34,-0.42 -0.38,-2.05 -2.3,-2.3 -1.38,-1.23 -0.72,-3.2 -2.99,-2.63 -1.39,-1.14 -3.17,-0.83 -4.08,-0.27 -2.65,-1 1.12,-2.8 -1.66,-3.95 -1.04,2.08 -3.71,0.51 -5.13,-0.34 -2.56,-1.21 -1.29,2 -1.13,2.64 -1.27,1.67 -2.44,1.3 -2.92,-0.65 -1.25,-0.75 -2.67,-1.29 -0.72,-2.16 1.16,-2.1 -2.17,-2.93 -3.11,-1.63 -1.5,-2.25 -5.49,-1.16 -6.45,-4 -1.21,-1.39 -2.59,1.06 -1.9,-1.41 0.23,-2.18 -0.48,-4.58 -2.34,-5.49 -1.37,-2.65 0.61,-5.37 -0.78,-8.1 -2.17,-1.37 0.53,-5.96 -3.41,-5.97 -3.09,-2.11 2.9,-5.25 0.3,-8.13 -0.64,-1.64 -2.11,-4.93 -1.01,-5.69 2.39,-0.86 4.49,-2.6 7.02,-3.34 1.88,-0.91 4.34,-1.13 5.97,-2.18 0.73,-2.97 3.72,-4.13 6.19,-5.25 2.44,-1.51 5.22,-3.64 8.26,-2.74 0.34,2.92 2.37,6.29 5.83,5.11 2.32,-0.46 3.66,-2.87 6.19,-1.88 5.94,0.22 12.06,0.04 17.77,-1.75 2.19,-1.89 4.37,-0.56 6.59,0.69 0.91,5.68 5.67,10 6.52,15.73 -0.74,2.77 -4.55,3.76 -4.71,6.89 0.95,2.08 5.51,0.97 4.43,4.48 -0.75,3.1 1.11,5.48 1.99,8.14 0.77,2 4.89,2.48 3.07,4.57 1.18,1.35 3.03,3.77 0.15,4.64 -2.63,0.49 -3.02,4.28 -4.54,6.17 -0.82,2.29 -3.04,4.17 -2.56,6.78 1.11,1.72 -0.12,4.53 2.39,4.91 -2.96,0.2 -5.66,-0.81 -7.88,-2.64 -2.12,-1.23 -4.34,-0.31 -6.37,0.12 -1.06,0.6 -0.02,2.66 -2.03,1.15 -2.7,-1.27 -4.67,0.77 -6.02,2.87 -0.44,-0.92 -1.49,0.48 -1.34,-0.18z","name":"Poland"},"jo":{"path":"m566.3,519.26c-0.01,-4.69 -2.26,-8.97 -3.12,-13.51 1.51,-3.32 4.45,-0.15 6.76,0.1 3.02,0.33 6.94,0.22 8.51,-2.87 4.44,-5.57 8.37,-11.53 12.83,-17.08 1.86,2.51 3.76,5 5.38,7.68 -2.06,2.03 2.19,4.71 3.12,1.72 0.91,2.72 -2.48,4.53 -4.03,6.38 -4,3.47 -8.47,6.39 -12.72,9.51 -2.44,0.61 -3.15,3.3 -0.46,3.9 2.58,1.36 5.17,2.72 7.71,4.17 -7.99,0 -15.99,-0 -23.98,0z","name":"Jordan"},"gr":{"path":"m449.88,508.26c-1.41,-0.44 -0.91,-2.43 -2.98,-2.05 -2.92,-1.02 -4.66,0.87 -7.49,-0.12 -2.89,2.86 -3.34,-3.03 -1.84,-3.28 2.13,1.48 4.85,0.78 6.99,2.27 2.66,-1.89 5.67,-2.41 8.68,-1.61 1.64,-0.07 3.7,-0.37 4.57,-0.83 -1.03,2.5 2.95,2.63 3.64,0.39 1.59,-1.01 2.86,-0.15 1.23,1.36 -4.14,0.67 -8.27,1.86 -12.04,3.72l-0.39,0.1 -0.37,0.03 0,0z m-26.29,-13.55c-0.61,-2.64 -1.46,-5.84 -4.37,-6.76 -3.02,-0.62 -1.68,2.8 -1.92,4.11 -2.48,0.25 -0.03,-2.58 -2.33,-3.13 -1.56,-1.69 2.11,-3.33 -0.42,-5.29 -1.75,-1.46 -3.48,-2.23 -4.88,-3.8 -1.71,-0.32 1.67,-2.18 0.95,-3.89 1.31,0.41 3.43,-0.58 4.2,-2.4 2.31,-0.03 5.27,1.8 8.03,2.01 1.1,0.72 3.08,0.98 3.24,1.46 1.77,0.36 1.5,3.47 4.29,3.78 1.97,0.86 -3.33,1.22 -3.75,-0.39 -3.29,-1.87 -3.6,3.04 -0.88,3.97 1.42,2.4 3.54,4.49 2.98,7.25 0.93,1.21 1.93,2.16 0.11,0.68 -1.13,-1.37 -3.59,-4.36 -5,-1.33 -0.38,1.2 -0.28,2.48 -0.25,3.72z m12.62,-17.67c-0.61,-1.76 -3.37,-2.18 -4.61,-3.83 -1.54,-1.35 -1.12,2.07 -3.22,1.63 -1.32,1.11 -3.33,0.37 -1.06,-0.31 2.53,-1.38 -0.23,-3.22 -1.98,-2.17 -2.19,0.64 -2.76,-3.59 -4.29,-0.5 0.28,-1.81 -1.78,-2.98 -1.95,-0.63 -1.85,0.67 -5.66,-0.17 -7.42,2.31 -1.43,-1.51 -2.69,-1.73 -3.58,0.32 -0.06,-3.13 -3.02,-4.71 -4.64,-5.97 -0.05,-3.03 -3.45,-4.15 -5.3,-5.69 0.58,-2.13 -4.66,-2.22 -1.22,-2.7 1.45,0.13 1.31,-1.81 1.97,-2.79 -2.74,-2.59 4.57,-2.51 2.29,-5.81 0.57,-2.27 3.93,-4.04 1.77,-6.57 2.29,-1.19 5.68,-0.59 7.21,-3.12 0.92,-4.2 5.51,-0.91 7.7,-3.66 0.88,-0.81 0.03,-3.12 2.26,-2.13 2.68,-1.49 5.94,-1.98 8.75,-3.4 1.35,-1.69 4.25,-2.43 5.72,-0.71 1.88,0.93 3.48,-0.95 5.39,0.66 2.83,0.48 5.06,-1.99 7.75,-2.56 2.63,-1.48 -0.92,-3.81 -0.19,-4.93 2.53,-0.82 6.54,2.78 3.07,4.45 -2.66,1.03 1.16,6.08 -1.92,6.2 -2.59,-1.16 -5.58,1.42 -8.08,-0.62 -2.31,-0.06 -3.98,4.61 -5.94,1.87 -2.75,-0.21 -2.93,5.39 -5.82,3.29 -2.56,0.13 -2.19,2.87 -0.61,3.88 1.51,1.31 -0.02,1.67 -0.46,3.12 -2.01,-0.91 -2.94,1.12 -4.72,-0.3 -3.05,1.25 -3.01,-2.2 -1.76,-3.97 -0.09,-0.54 -2.81,1.81 -3.44,2.49 -1.02,1.92 0.18,3.87 -0.21,6.03 1.55,1.98 3.8,3.4 4.84,5.84 0.92,0.8 4.25,2.4 3.42,2.64 -2.14,-2.19 -4.85,-0.02 -3.78,2.46 1.31,0.13 3.2,1.7 0.6,2.21 -1.13,0.04 -4.23,2.36 -2.68,2.49 2.62,-1.25 4.96,1.17 7.41,0.98 0.52,2.36 2.91,0.77 3.98,2.53 2.06,0.36 4.93,0.25 3.64,2.95 0.1,1.33 1.96,3.02 1.13,4.05z m-32.41,-12.35c-2.66,1.97 2.35,4.76 3.65,1.72 0.88,-3.08 -2.48,0.37 -3.25,-1.63l-0.4,-0.09 0,0z m1.2,12.17c-2.12,0.67 -3.94,-2.49 -2.24,-3.05 -0.52,2.11 1.79,2.11 2.24,3.05z m35.21,-4.75c-1.33,-0.45 -3.15,-2.25 -0.48,-1.45 1.91,-0.84 2.27,1.01 0.48,1.45z m-3.1,-3.76c-1.98,-1.68 -5.22,0.85 -5.86,-2.11 -1.43,-1.48 -5.05,-2.2 -5.77,-2.78 2.78,-2.67 4.14,2.1 7.15,1.68 1.66,0.78 3.06,-0.62 3.9,1.22 0.4,0.59 0.43,1.32 0.58,1.99z m-10.1,-17.81c-3.53,-1.73 2.32,0.07 0,0z m3.59,-1.57c-2.32,-1.62 -0.44,-1.62 0.45,0.12l-0.11,0.22 -0.34,-0.34z","name":"Greece"},"tm":{"path":"m679.06,344.59c-1.21,-0.72 -0.78,-2.05 -2.51,-2.48 -0.91,-2.53 -0.44,-5.74 -2.11,-7.9 1.43,2.3 3.65,0.44 4.81,-0.09 -0.04,3.47 0.02,6.95 -0.03,10.42l-0.16,0.04z m-9.11,-14.43c-1.83,0.29 -2,-1.85 -2.97,-2.07 -2.67,-0.77 0.57,-4.63 0.48,-6.52 1.65,-3.13 3.89,-6.16 6.88,-8.09 1.36,-0.18 5.09,-1.73 4.9,0.43 0,2.65 0,5.3 0,7.95 -2.35,-1.52 -3.83,-5.43 -6.79,-5.11 -2.41,2.22 -6.24,4.38 -5.17,8.26 -0.05,1.27 0.71,3.09 1.95,2.4 0.34,0.89 0.41,1.85 0.72,2.75z m9.29,-40.46c-2.98,-4.77 -6.29,-9.32 -9.41,-14 0.44,-3.11 3.69,-4.89 4.74,-7.82 1.56,-2.45 3.21,-4.85 4.68,-7.37 0,9.73 0,19.46 0,29.19z","name":"Turkmenistan"},"kz":{"path":"m665.18,326.25c-2.97,-1.86 -1.2,-5.67 -2.65,-8.21 0.53,-3.17 -3.51,-2.8 -4.88,-0.83 -1.79,-1.67 -2.48,2.95 -4.91,0.84 -1.43,-2.21 -3.22,-0.68 -4.76,0.52 -0.4,-3.09 -3.28,-5.18 -6.16,-5.75 -2.02,-1.36 -4.24,-5.19 -6.86,-2.37 -2.9,1.87 -4.15,-4.1 -0.51,-3.35 1.06,-1.32 1.8,-1.79 3.42,-0.84 1.53,-0.78 2.76,-2.24 4.06,-3.11 -1.44,-2.18 -5.78,0.43 -7.07,-2.22 0.12,-1.34 3.47,-2.2 0.83,-3.45 -1.26,-2.14 2.16,-2.43 1.45,-4.52 2.51,-0.62 4.01,-2.7 6.42,-3.67 1.55,-0.68 5.82,-1.56 4.27,-3.73 -2.44,0.42 -5.53,1.2 -4.64,-2.51 0.27,-3.12 -0.67,-6.7 -3.34,-8.56 -1.46,-0.11 0.78,-3.59 -1.86,-3.15 -1.5,-2.77 -4.84,0.02 -6.51,0.7 0.1,2.2 -0.93,4.69 -3.45,3.61 -2.4,0.56 -6.57,-0.38 -7.49,3.29 -0,2.58 -2.65,3.31 -2.68,6 -1.27,1.57 -1.07,5.37 -3.43,5.36 -2.12,-0.08 -2.2,2.62 -2.46,3.63 -1.26,0.74 -5.86,0.39 -4.64,-0.82 3.5,0.56 3.47,-4.4 0.06,-4.32 -3.14,-1.51 -5.73,-4.02 -8.93,-5.36 -2.47,-0.32 -4.25,2.11 -6.54,2.07 -0.12,1.28 0.37,2.59 -1.35,1.17 -1.8,-0.93 0.01,-2.79 -2.21,-3.3 0,-2.52 -4.2,-0.23 -5.74,-0.66 -0.96,-2.72 -0.8,-5.85 -0.41,-8.82 0.73,-3.23 -4.34,-1.07 -3.74,-4.61 -1.48,-2.21 -1.17,-5.16 0.32,-7.28 -2.58,-1.5 -1.53,-6.73 1.82,-4.04 2.29,0.54 4.78,3.98 7.13,1.98 1.97,-1.65 2.09,-5.06 -0.41,-5.79 -0.5,-2.08 -4.31,-2.93 -1.9,-4.7 0.1,-1.7 1.79,-4.1 2.05,-4.93 -2.7,-0.86 -1.25,-3.39 0.39,-3.59 0.3,-2.73 3.83,-4.97 2.24,-7.88 -1.16,-1.26 2.12,-0.49 0.87,-2.37 -0.73,-0.82 1.71,-0.82 1.99,-1.86 2.14,-0.45 -1.05,2.08 1.69,2.02 1.48,-0.55 1.41,-1.96 2.93,-1.7 0.29,-1.63 -1.06,-3.26 1.01,-4 0.5,-1.63 0.88,-2.2 1.87,-0.46 3.2,2.4 4.8,-3.1 7.46,-3.43 1.62,1.55 3.73,2.04 5.43,0.37 1.27,1.42 3.01,1.43 4.62,1.61 -0.26,2.56 4.05,4.44 3.68,0.87 -0.11,-2.04 -2.23,-3.06 -3.52,-3.49 2.49,-1.89 5.28,1.44 8.06,-0.13 2.65,1.71 2.89,-3.09 2.88,-4.82 -0.94,-1.46 1.32,-2.87 0.36,-4.29 1.64,0.4 1.75,-1.1 1.34,-1.85 1.08,-2.25 2.79,-1.39 4.44,-0.52 1,-0.8 1.78,-2.46 2.98,-2.01 -1.89,-1.21 -2.16,-3.64 0.61,-3.9 -0.26,-1.23 0.14,-1.29 1.28,-1.45 1.06,-0.94 2.07,2.58 4.01,1.26 1.98,1.74 4.96,-3.12 5.37,-1.36 0.29,1.89 3.37,-0.99 2.39,-2.55 -0.11,-1.94 -1.41,-4.21 1.46,-3.17 2.91,-0.36 4.26,-3.79 5.34,-6.17 1.47,-2.93 -2.47,-4.1 -2.09,-6.64 -1.36,-2.25 -4.48,-0.11 -5.91,0.2 -2.22,-2.09 -4.58,3.81 -4.91,0.16 -1.29,-0.68 -2.71,2.23 -3.65,0.73 1.29,-1.47 1.19,-4.25 2.39,-6.18 1.51,-3.13 -2.02,-3.28 -3.58,-4.22 -3.1,0.97 0.81,-3.99 -1.61,-4.03 1.01,-2.42 4.84,-2.6 5.47,-5.2 -0.01,-2.9 -4.66,-1.68 -5.74,0.02 -1.13,1.71 -4.5,-0.24 -1.75,-0.92 2.16,-2.49 -2.77,-3.66 -2.05,-1.2 -2.33,3.55 -0.85,-4.14 -3.83,-1.64 1.26,-0.48 -0.31,-3.76 1.92,-2.68 1.3,1.04 0.21,-2.26 2.14,-1.3 2.74,-0.21 -1.15,-2.68 1.49,-3.26 1.26,2.1 3.9,-0.29 1.53,-1.19 0.54,-2.35 2.7,-4.74 3.28,-7.51 1.48,-0.31 3.12,-1.58 1.37,-2.69 1.12,-2.77 3.18,-4.87 5.44,-6.15 -0.1,-1.8 -3.04,-1.6 -1.06,-3.51 0.73,-2.38 2.55,-3.81 3.48,-6.49 2.08,-2.53 2.36,-5.49 3.47,-8.34 0.29,-1.69 3.72,-3.96 0.35,-4.97 -1.01,-0.43 2.31,-2.04 0.29,-3.41 -1.75,-1.68 3.22,-0.78 0.65,-2.37 -1.73,-0.49 3.06,-0.82 1.8,-2.5 2.25,-1.54 6.79,-0.26 5.35,-4.64 -0.2,-2.91 3.08,-0.72 4.32,0.28 1.69,1.75 4.12,-0.2 4.78,2.52 1.5,0.9 1.01,3.62 3.74,3.35 2.67,0.01 -0.81,-3.38 2.11,-2.14 1.93,-0.51 -0.97,-4.41 1.41,-3.27 0,52.65 0,105.3 0,157.95 -2.28,4.16 -5.07,8.03 -7.49,12.09 -2.11,1.94 -4.29,5.26 -1.49,7.58 3.01,4.53 6.37,8.91 8.98,13.65 0.02,6.62 -0.04,13.29 0.04,19.87 -3.05,0.34 -6.58,0.54 -8.5,3.49 -2.48,2.8 -4.81,5.91 -5.35,9.73 -0.09,0.46 -0.18,0.92 -0.25,1.38z","name":"Kazakhstan"},"fi":{"path":"m382.62,208.07c0.7,-3.07 -2.78,1.32 -3.86,-1.32 0.05,-0.96 1.56,-3.75 -0.71,-2.21 -1.13,1.69 -1.33,-1.45 -2.92,-0.68 -0.94,0.89 -2.97,-0.9 -3.55,-0.42 -0.14,-2.36 -1.97,-0.15 -2.25,-0.03 -0.63,-1.67 -0.91,-3.6 -2.08,-5.17 1.86,-0.74 1.72,-4.06 0.26,-5.25 -0.34,-1.47 3.17,-0.38 1.07,-2.02 -1.2,-2.15 -2.78,-4.06 -3.52,-6.25 0.62,-2.08 -0.63,-3.97 -1.49,-4.42 0.49,-1.2 -0.5,-2.29 -0.95,-2.29 0.13,-1.71 3.82,-4.59 2.52,-5.52 -3.07,-0.18 0.32,-3.17 1.17,-0.45 1.02,-1.23 3.05,-2.66 2.12,-4.84 0.01,-1.7 0.15,-2.94 1.36,-1.21 0.12,-2.42 1.26,-4.91 3.64,-5.85 -0.72,-2.45 1.54,-4.8 2.24,-7.01 -0.27,-2.84 0.9,-5.24 3.71,-6.24 1.6,-1.13 1.77,-3.36 -0.51,-2.84 -0.44,-2.27 -0.12,-5.32 -2.74,-6.02 -2.3,1.99 -2.43,-3.68 -4.97,-1.88 -1.75,-2.03 -4.37,-4.52 -3.48,-7.48 1.52,-3.03 -0.83,-5.16 -2.34,-7.18 -0.2,-1.46 0.87,-4.46 -1.6,-3.74 -0.01,-2.39 -0.15,-4.83 -1.27,-7.01 -2.48,-1.84 -4.57,-4.14 -8.05,-4.18 -1.93,-1.7 -6.43,-2.88 -5.46,-6.12 -0.41,-2.16 1.14,-3.53 2.73,-1.48 2.59,1.31 1.85,6.17 5.39,5.44 2.27,0.35 4.34,-0.45 4.98,-2.51 2.4,-0.26 6.27,3.96 5.78,-0.87 -0.39,-2.02 3.32,-1.43 1.97,-3.98 -1.32,-3.02 -2.11,-7.03 -0.35,-9.99 -0.31,-2.74 4.21,-0.11 4.22,-3.35 1.47,-1.91 3.36,2.08 5.49,1.78 2.95,0.9 3.14,3.84 1.7,6.03 1.41,1.64 0.21,2.38 -0.46,3.84 1.14,0.8 2.75,1.02 1.72,2.87 -0.47,3.13 2.02,6.77 5.45,6.28 1.67,2.35 6.13,3.59 3.92,7.14 -0.75,2.27 -1.97,4.85 -0.96,7.21 3.59,3.29 6.5,7.25 9.05,11.36 0.06,1.49 -2.83,0.38 -0.84,2.06 -0.22,2.17 0.21,4.77 1.29,6.07 -1.26,3.74 5.08,3.34 3.58,6.82 0.48,3.1 6.13,1.5 4.41,5.52 -0.25,1.99 -2.95,4.48 0.53,5.03 2.93,1.69 6.43,2.67 8.87,5.07 1.06,2.48 -0.3,5.24 -0.57,7.75 -2.26,6.49 -4.21,13.14 -7.27,19.3 -1.55,2.69 -3.59,5.26 -4.3,8.32 -1.76,0.21 -3.5,-1.24 -4.38,1.19 1.52,0.77 -3.01,1.75 -1.49,-0.16 -0.76,-2.31 -1.99,0.16 -1.56,1.47 -1.82,-2.09 -4.5,1.44 -1.45,2.01 0.62,2.53 -3.67,-2.15 -3.14,-0.28 0.89,2.06 -2.52,3.25 -2.85,3.52 -2.72,0.33 -4.14,2.39 -6.64,3.79l-0.57,0.27 -0.58,0.1 0,0z","name":"Finland"},"de":{"path":"m302.45,372.15c0.39,-0.91 1.99,-2.77 0.16,-1.49 -1.57,0.93 -2.11,-2.91 -4.19,-2.08 -2.04,1.85 -3.44,-2.27 -6.01,-1.15 -2.15,0.46 -2.02,-2.87 -4.5,-1.23 -1.72,0.52 0.38,3.76 -1.44,1.73 -1.84,0.2 -4.84,0.84 -5.69,-0.07 -0.64,-1 1.16,-4.13 0.65,-5.99 1.9,-2.36 0.91,-6.25 3.86,-7.87 2.56,-1.63 0.59,-4.12 -1.86,-3.67 -2.56,0.2 -2.84,-3.15 -5.48,-1.32 -1.23,0.08 -2.11,-2.54 -3.28,-1.12 -0.17,-2.33 -4.09,-3.23 -1.38,-5.35 1.81,-3.01 -5.32,-3.18 -1.88,-6.63 1.67,-1.33 2.21,-2.89 0.22,-4.22 1.95,-2 -1.2,-0.75 -1.34,-2.77 1.01,-1.22 0.18,-2.51 -0.16,-3.21 1.78,-1.86 2.88,-5.05 1.22,-7.64 -2.19,-2.06 0.71,-2.52 2.29,-1.67 2.39,0.34 3.33,-2.08 3.64,-3.33 2.38,-1.19 2.15,-5.11 -0.59,-5.64 -0.03,-1.55 3.42,0.08 2.83,-2.66 0.31,-2.54 1.52,-4.9 2.38,-7.37 -0.34,-0.18 -3.53,0.96 -2.22,-1.41 0.9,-2.9 4.25,-1.28 6.2,-2.15 0.16,2.03 2.57,6.54 4.4,3.34 0.14,-1.85 -1,-6.59 2.18,-4.76 1.27,0.28 4.88,-0.75 2.09,-1.66 -3.15,0.44 1.18,-4.81 -1.98,-5.31 4.2,-1.72 -2.92,-4.5 -0.43,-6.3 2.37,1.37 6.56,0.38 7.64,2.55 -0.45,0.53 1.55,0.68 -0.04,1.71 -1.46,1.22 0.47,2.21 1.51,1.23 -1.09,2.31 1.04,2.07 1.81,0.68 1.67,1.18 3.81,1.56 5.14,0.49 0.21,1.77 -4.56,3.93 -2.04,5 1.38,0.2 3.65,-1.17 3.27,1.31 2.66,-0.01 2.46,-4.21 4.91,-4.12 1.43,1.57 3,-1.39 3.56,-2.49 0.61,-2.1 3.54,-0.7 4.16,-0.17 0.88,1.8 2.57,3.83 4.93,3.32 -0.95,4 4.51,3.57 4.6,6.93 3.14,3.28 -3.49,6.24 0.16,9.19 2.04,0.76 2.91,2.01 2.23,4.17 0.93,1.99 2.9,4.81 0.48,6.79 1.68,1.23 1.03,4.11 3.18,4.83 0.68,1.92 0.82,5.65 -0.66,6.5 -0.87,-1.78 -4.46,-3.53 -3.95,-0.41 1.16,0.88 -2.8,1.08 -3.3,2.22 -2.5,0.18 -3.71,2.69 -5.8,3.41 -0.73,-0.12 -0.57,1.65 -2.06,0.72 -2.78,-0.99 -2.28,4.11 -4.17,1.96 -3.51,0.44 1.56,4.5 2.19,5.46 -2.26,2.79 1.42,6 3.88,7.15 1.53,1.88 3.04,3.44 5.43,4.44 2.44,1.22 2.24,4.86 -1.02,3.8 -0.57,1.52 -0.37,3.53 -2.79,3.73 -3.29,0.46 -2.9,3.65 -1.01,5.5 0.76,1.93 -3,3.3 -3.36,1.75 -0.45,-0 -3.6,-1.29 -2.93,0.98 -3.48,-0.65 -5.56,1.87 -8.47,2.95 -1.59,-0.45 -2.06,-3.03 -4.27,-1.95 -2.85,-1.05 -0.37,3.13 -2.89,3.37z m-6.7,-79.27c-0.21,2.06 4.44,6.44 3.78,2.2 -1.59,0.14 -2.26,-2.95 -3.66,-2.25L295.75,292.88z m29,76.43c-1.59,-1.17 -0.3,-3.24 0.69,-1.13 -0.04,0.43 -0.23,0.99 -0.69,1.13z m-0.01,-83.07c-2.42,-0.16 -2.07,-4.22 0.32,-2.83 -1.17,-1.29 -0.5,-0.74 0.89,-0.58 -1.82,1.06 2.32,2.92 -0.86,3.34l-0.35,0.07 0,0z","name":"Germany"},"se":{"path":"m323.06,272.38c-2.85,0.68 -1.5,-2.92 -0.88,-3.47 -1.34,-1.73 -2.37,-3.77 -4.04,-5.01 0.79,-1.22 -1.53,-2.8 1.01,-1.48 2.77,0.18 -2.19,-2.84 0.98,-2.65 2.38,-2.15 -2.21,-3.59 -2.38,-5.5 -2.18,-0.93 -1.38,-4.24 -3.57,-5.03 -0.5,-2.35 -1.05,-4.69 -2.37,-6.57 0.36,-2.06 3.34,-6.36 -0.08,-6.96 -1.38,2.23 -3.39,1.39 -2.89,-1.18 0.66,-1.66 -0.9,-5.32 -0.3,-5.55 1.22,1.95 2.5,1.63 3.29,-0.5 0.91,-2.52 -0.9,-5.03 -0.38,-7.57 2.08,-1.14 -0.02,-3.96 3.05,-4 2.39,-1.51 1.37,-4.54 1.71,-6.85 0.8,-2.58 -4.53,-6.31 0,-6.91 1.04,-0.81 1.22,-3.31 1.37,-4.79 -1.12,-2.38 -6.01,-2.81 -4.1,-6.25 1.84,-3.74 -1.45,-6.92 -1.02,-10.47 0.52,-2.44 0.53,-5.73 -0.14,-7.32 0.64,-2.96 1.19,-6.43 4.34,-7.91 2.35,-0.49 6.23,1.31 6.51,-2.71 0.96,-3.43 -4.73,-4.28 -1.85,-7.71 0.9,-2.93 3.32,-5.66 2.42,-8.87 0.15,-1.92 0.67,-3.87 -0.11,-5.73 -1.01,-2.32 3.73,-0.74 3.99,-3.33 -0.13,-2.25 -0.54,-4.21 1.52,-5.81 2.69,-2.56 2.7,-6.48 0.46,-8.94 2.93,-1.39 1.66,-4.89 3.52,-7.09 1.35,-0.88 5.1,1.96 4.84,-1.65 -0.51,-1.95 -1.78,-6.23 1.75,-4.92 2.24,0.45 5.5,2.66 7.12,-0.07 1.29,-1.53 -2.75,-1.44 -0.66,-3.53 0.95,-1.42 0.76,-3.57 -0.83,-4.28 3.02,-0.52 2.64,2.5 5.35,3.5 2.17,2.8 6.24,2.01 8.45,4.17 1.81,1.26 3.78,2.76 3.22,5.22 1.03,1.27 -0.68,4.42 1.98,4.24 -0.85,2.83 1.11,4.63 2.62,6.51 0.04,2.86 -1.49,6.25 1.05,8.57 1.6,1.29 3.31,4.27 -0.1,3.45 -1.76,0.14 -2.91,-0.92 -2.17,1.42 -0.95,1.6 -5.22,-2.83 -4.14,0.58 0.84,1.65 -2.05,2.45 -1.57,1.13 -2.06,-0.65 -0.53,1.54 0.66,1.49 -0.6,0.2 -1.52,0.57 -0.3,1.82 -1.49,0.26 -4.7,1.58 -1.68,2.64 2.32,2.25 -3.2,4.64 -1.02,7.19 1.54,0.9 4.4,2.82 1.64,4.33 -1.68,2.21 -0.66,5.89 -3.12,7.17 -0.94,1.59 -3.16,2.96 -4.81,3.45 -0.21,1.34 -1.22,2.8 -1.35,4.54 -1.77,-1.72 -2.61,0.56 -2.76,1.85 -1.12,0.81 -2.56,2.13 0.01,2.01 -0.44,1.31 -4.33,0.73 -2.47,3.43 -0.06,0.73 -0.49,2.94 -1.88,1.95 -2.76,-0.24 -2.07,3.37 0.06,3.69 -0.77,1.95 -1.46,4.89 0.24,6.81 -3.74,-1.85 -2.36,2.41 -0.94,3.91 0.18,1.27 -3.07,0.5 -0.73,1.44 0.84,1.85 1.12,4.66 1.43,6.67 -0.32,2.79 5.02,-0.22 4.86,2.53 0.7,1.96 4.04,1.71 4.48,1.82 -3.19,-0.43 -0.28,3.53 1.17,3.32 1.13,1.08 3.55,2.93 0.69,3.17 -0.96,1.32 -2.08,3.54 -3.42,3.71 1.54,1.27 -2.79,1.25 -1.63,-0.68 0.49,-2.21 -4.13,-4.8 -3.64,-1.69 1.43,0.51 0.2,2.21 2.13,2.69 -1.79,0.21 -3.94,-2.79 -5.52,-0.41 -0.59,-1.15 -2.36,-1.3 -1.99,0.35 -2.53,-0.76 -3.68,2.49 -1.03,1.96 1.95,-0.49 4.14,0.17 6.05,0.67 -0.71,2.97 4.28,-1.28 2.88,1.93 -0.14,2.13 -0.95,4.88 -3.12,4.77 0.18,1.44 -0.14,1.56 -2.15,1.24 -1.48,-0.93 -5.69,1.16 -2.24,1.59 0.93,-0.93 4.88,0.08 2.51,0.95 -1.3,-0.74 -2.65,-1.15 -1.6,0.7 1.1,0.49 3.58,1.85 1.37,2.42 -0.48,1.93 2.49,4.34 -0.83,3.78 -1.22,1.55 3.46,2.55 0.79,3.59 -0.59,1.57 1.8,1.83 -0.1,3.07 -0.36,1.71 1.22,3.68 -0.24,4.3 0.8,1.29 0.72,4.62 -0.49,4.51 -0.92,1.99 -0.01,8.09 -3.9,5.74 -0.75,-0.04 -1.2,1.04 -1.28,-0.03 -1.81,1.13 -4.91,0.3 -5.24,2.54 -3.47,0.86 -2.77,5.15 -1.48,7.22 -1.25,2.12 -3.78,-0.71 -5.21,1.44 -0.58,0.2 -1.19,0.28 -1.8,0.28z m21.76,-13.69c-0.6,-1.64 -0.03,-5.51 0.58,-5.62 -0.47,1.84 -0.07,3.79 -0.58,5.62z m11.16,-10.28c-1.47,-2.04 -0.57,-3.97 -1.15,-6.17 0.13,-1.54 3.5,-5.82 3.93,-3.32 -1.59,1.67 -1.23,4.3 -0.42,5.29 -0.56,1.58 -2.33,2.58 -2.36,4.21z m-6.04,-22.62c-0.58,-0.9 -1.01,-2.64 0.37,-3.19 0.51,-2.57 3.62,1.5 0.73,1.06 -0.71,0.44 -0.93,1.57 -1.1,2.14z m3.41,-4.74c-1.71,-0.56 1.15,-0.98 0,0z","name":"Sweden"},"no":{"path":"m283.92,239.69c-2.05,0.82 -1.04,-2.38 -3.04,-0.45 -2.25,0.63 -2.45,-1.19 -0.48,-1.71 1.16,-1.98 -1.94,-1.69 -2.54,-0.89 -1.88,-1.69 -4.73,-3.13 -5.46,-5.54 0.16,-1.17 0.04,-2.84 1.26,-1.53 2.45,-0.31 0.5,-3.28 2.63,-3.15 -0.92,-1.74 3.6,-1.24 2.16,-3.19 -1.49,-0.01 -3.77,0.75 -1.5,-1.08 1.07,-1.87 -4.03,-2.48 -3.95,0.31 -0.43,1.99 -1.31,-1.27 0.03,-1.59 -0.59,-1.71 3.37,0.46 2.3,-1.73 2.11,-0.09 3.7,-3.31 0.62,-1.92 -2.12,1.06 -0.9,-1.62 0.69,-0.69 -1.77,-1.8 3.78,-2.21 0.57,-3.6 -0.56,-4.05 -3.61,3.53 -2.9,-0.4 -0.09,-1.07 2.45,-2.14 0.56,-2.38 1.23,-1.75 0.14,-1.45 -1.12,-1.67 -0.48,-2.03 3.39,-0.54 1.29,-2.62 -1.57,-0.11 -2.3,1.01 -2.92,1.83 0.23,-1.47 -0.96,-1.1 0.71,-1.97 1.17,-0.81 3,-0.92 0.68,-1.9 -1.68,1.41 -3.48,-0.55 -1.63,-1.27 2.35,2.15 4.25,-2.5 6.35,0.43 1.83,1.86 1.2,0.18 2.05,-1.15 2.54,-0.3 -0.18,4.44 3.17,3.6 2.08,-1.21 -0.36,-4.05 -1.72,-4.82 -1.87,-1.19 -2.86,1.17 -4.77,-0.24 -1.71,-0.32 -5.74,2.24 -5.21,-1.12 1.24,-0.84 -1.48,-1.91 1.02,-1.63 0.93,-0.21 -1.41,2 0.86,1.55 1.15,0.42 4.11,-2.74 2.32,-2.56 -1.17,0.24 -3.58,0.07 -2.04,-0.78 0.01,-1.15 -2.86,-0.72 -1.37,-2.6 1.92,-1.21 1.67,-2.06 2.44,-3.76 1.13,0.7 1.55,1.95 2.59,0.89 1.71,1.83 3.67,-1.21 0.78,-1.26 -1.72,-1.7 2.02,-2.98 1.47,-0.81 -0.08,1.94 2.1,2.28 1.49,0.15 -1.54,-0.73 -0.39,-3.26 1.26,-2.04 -0.9,2.54 1.99,2.46 3.2,1.29 -0.57,-1.07 -3.07,-0.84 -2.76,-2.61 -1.93,-0.78 -0.88,-1.18 0.63,-1.75 -0.31,2.53 1.54,0.84 1.46,0.89 0.76,2.66 4.97,0.16 2.35,-0.64 -1.68,1.13 0.97,-2.47 -1.62,-1.35 -1.33,0.1 -1.92,0.19 -0.62,-0.55 0.77,-1.45 -3.3,-3.11 -0.25,-2.56 1.36,2.34 4.5,0.23 4.77,-0.42 0.76,1.21 1.99,4.78 3.9,2.5 -0.19,-1.38 -1.61,-1.13 -0.15,-1.91 -0.52,-0.88 -3.96,-0.82 -1.31,-0.98 2.56,1.07 3.94,-2.68 1.6,-3.22 -2.38,3 -0.29,-2.57 1.23,-0.79 -1.13,2.54 3.47,1.05 2.52,-0.37 0.79,-1.1 1.41,-2.4 1.63,-0.68 1.42,0.16 -1.15,3.34 1.22,2.27 1.23,1.9 3.05,-0.32 1.25,-1.45 2.02,0.81 5.84,0.23 4.08,-2.68 2.55,-0.11 3.44,-2.71 1.89,-3.48 2.7,-0.44 1.04,-4.25 -0.61,-2.47 -0.94,0.99 -4.98,3.53 -3.32,4.59 1.36,-0.14 -3.55,4.36 -3.84,1.11 1.8,-0.4 1.59,-2.97 -0.14,-1.47 -1.54,1.59 -1.58,-0.15 0.05,-0.55 1.29,-0.12 3.11,-2.23 0.74,-1.96 0.49,-1.84 0.69,-1.57 2.55,-2.66 -0.01,-1.8 3.87,-1.75 1.44,-3.46 1.6,-3.11 2.62,3.25 4.94,0.36 -0.07,-0.91 1.83,-2.92 -0.44,-2.32 -1.97,0.37 0.51,-3.35 0.91,-3.77 2.46,-0.4 5.23,-2.14 6.04,-4.52 -0.69,-1.41 -1.97,0.46 -0.84,-1.25 0.83,-2.9 -4.58,-0.06 -1.84,-2.23 2.88,-0.42 -1.2,-4.08 2.2,-4.17 1.93,2.26 1.6,-1.88 -0.02,-2.41 1.79,-0.55 2.5,-1.55 4.25,-0.42 0.51,-2.76 -3.45,-2.33 -4.43,-3.58 -0.26,-3.01 2.59,-3.12 4.58,-3.67 0.29,-0.78 -0.81,-3.13 0.47,-2.48 2.46,0.65 2.45,-2.36 2.11,-3.23 1.27,-0.62 3.06,1.08 2.81,-1.49 0.06,-2.75 -4.88,2.23 -2.7,-0.53 -0.33,-1.84 3.17,-2.65 3.79,-1 0.44,2.38 2.69,0.96 0.74,-0.53 -0.37,-0.19 2.89,-3.12 0.16,-2.12 -1.52,1.62 -2.69,-1.67 -0.67,-0.49 2.18,0.6 1.78,-2.26 0.1,-2.63 1.64,-0.99 1.76,-1.25 3.09,0.31 2.65,0.05 -0.04,3.53 -1.13,3.83 -0.13,2.43 3.49,4.78 1.03,6.94 -1.52,2.38 -4.26,5.02 -2.96,8.1 -1.03,2.23 -5.62,0.34 -3.97,3.87 1.08,2.24 -0.41,4.62 0.29,6.91 -0.21,2.4 -1.5,4.65 -2.48,6.84 -1.89,2.33 -0.64,4.78 1.42,6.24 1.36,2.71 -1.06,4.75 -3.56,3.4 -3.47,0.13 -6.05,3.54 -6.55,6.75 -0.09,2.61 -2.39,4.76 -0.87,7.58 1.7,0.33 -0.26,3.51 0.65,5.09 0.93,2.11 2.11,4.27 1.04,6.66 -1.85,3.6 1.33,5.61 3.87,7.28 0.34,1.26 -0.49,2.52 -0.69,3.78 -4.37,0.5 -1.64,4.45 -0.68,6.73 -0.19,2.39 0.87,5.69 -1.37,7.29 -2.33,-0.08 -2.37,2.05 -2.44,3.42 -2.81,2.64 1.45,6.5 -0.89,9.33 -0.63,-0.51 -0.86,-4.28 -3.41,-3.07 -1.98,0.66 -1.1,-2.02 -2.18,-2.85 0.06,-1.66 0.25,-4.8 -1.34,-6.05 -1.51,0.96 0.6,3.37 -1.47,1.82 -1.6,1.08 1.29,3.05 0.43,4.75 1.82,1.57 -1.36,1.57 -0.61,3.28 -0.57,0.33 -1.78,3.28 -2.33,0.68 -1.69,-2.25 -3.03,0.06 -1.93,1.1 -2.37,0.2 -1.22,2.58 -3.27,2.72 0.26,1.74 0.63,2.15 -0.66,0.4 -0.55,-0.29 -0.31,3.24 -1.72,3.89 -1.13,1.13 -2.53,1.14 -2.96,2.81 -1.25,-1.4 -1.53,-2.14 -2.1,0.08 -0.58,1.07 -1.97,0.9 -2.97,1.19z m1.79,-42.62c-2.02,0.59 -1.81,3.69 -1.92,5.35 2.29,1.58 5.16,-1.56 2.82,-2.47 -2.51,1.62 -0.41,-2.26 1.2,-2.22 -0.69,-0.24 -1.35,-0.63 -2.1,-0.66z m-8.26,-3.48c1.26,1.05 1.96,-0.59 3.75,0.18 2.86,-0.7 0.32,-3.31 -1.23,-1.63 -0.54,1.11 -4.66,-2.16 -3.53,0.83 -0.64,0.74 0.98,1.54 1.01,0.63z m-1.56,-1.31c1.64,-1.54 -2.29,-0.9 0,0l0,0z m-3.39,20.54c-1.15,-1.48 -0.79,-2.31 1.27,-2.09 -0.5,0.65 -0.76,1.45 -1.27,2.09z m20.58,-43.12c1.89,-0.99 1.05,0.09 0,0z m18.74,-19.12c-0.11,-1.35 1.21,-2.72 0.71,-0.65l-0.24,0.29 -0.47,0.36 0,0z m7.46,-19.18c-1.61,-0.55 0.1,-1.14 0,0l0,0z m3.95,-10.61c-1.42,-0.85 2.16,-3.22 0.98,-0.56 -0.23,0.31 -0.59,0.56 -0.98,0.56z m8.03,-3.21c-0.35,-1.4 -4.22,-5.53 -0.69,-3.55 1.98,-0.66 -2.87,-2.41 0.24,-2.21 2.34,-1.07 1.29,3.96 3.81,2.24 0.12,-1.58 -1.95,-2.83 0.76,-2.09 1.98,-2.01 2.51,5.82 -0.36,3.01 -2.2,-1.1 -3.01,1.06 -3.76,2.6z m-5.57,-1.57c-2.14,-0.36 2.05,-0.11 0,0z m-7.93,-1.09c-0.6,-2.04 2.47,-0.64 0,0z m7.12,-4.13c0.59,-2.37 4.58,-1.01 4.01,-4.46 0.66,-1.69 0.95,3.05 2.77,1.99 1.53,1.25 -2.5,3.06 -1.7,0.6 -1.05,-1.01 -2.27,1.66 -3.77,0.7 -0.56,0.22 -0.96,0.7 -1.3,1.17z m7.58,-0.78c-1.19,-2.28 3.86,-0.43 2.34,-2.88 -3.7,-0.04 1.43,-1.56 0.6,-2.56 -2.52,-1.2 0.41,-2.37 1.15,-2.81 0.41,-3.22 -2.85,-1.84 -4.06,-0.47 -1.59,-2.04 2.26,-2.36 2.32,-4.57 0.14,1.33 0.46,2.85 1.65,2.42 0.8,1.52 3.32,1.84 3.24,-0.37 1.68,1.68 2.77,1.67 2.31,-0.48 0.79,-1.17 0.35,-2.79 1.61,-3.02 -0.4,-0.66 -1.42,-3.92 0.2,-3.31 0.95,2.39 -0.14,5.28 -0.89,7.26 2.94,1.88 1.55,-3.57 4.12,-3.05 0.22,-1.76 -3.3,-2.79 -1.17,-4.59 1.11,2.64 2.9,-1.39 2.9,-1.08 0.95,0.44 4.33,3.19 2.86,0.58 0.52,-1.54 -0.4,-5.86 -2.92,-3.36 -3.05,-0.22 1.04,-4.05 2.23,-1.43 1.8,-0.47 3.36,-0.55 3.65,1.78 1.6,2.82 3.68,-1.17 2.1,-1.52 0.07,-0.51 -0.69,-2.47 -0.41,-3.71 -0.86,-0.45 -2.21,1.67 -1.86,-0.59 0.28,-1.23 2.77,-3.11 1.94,-0.75 0.94,1.47 4.41,-0.15 2,-1.03 0.6,-1.49 3.48,0.04 1.97,-2.16 -0.79,-0.71 -2.04,-3.95 0.25,-3.13 1.93,-0.42 3.84,0.45 2.02,2.21 -1.75,1.98 -0.56,3.61 -0.42,5.65 -2.28,2.68 3.1,3.87 2.24,0.45 -0.18,-2.74 0.93,-5.32 1.76,-8.05 1.89,-3.05 -1.06,3.6 0.33,2.81 1.3,-1.62 0.64,3.35 2.9,1.4 2.12,-1.22 -1.68,-4.46 1.77,-4.91 0.72,-1.47 -2.34,-1.18 -0.57,-2.18 -0.51,-2.17 4.79,-1.62 2.39,1.11 -1.65,1.09 -1.95,4.14 -0.56,3.08 -0.4,2.24 2.84,0.85 3.62,0.4 -0.89,-1.13 -1.79,-4.79 0.32,-4.87 0.09,2.52 4.6,3.29 3.84,0.25 1.3,0.25 1.81,0.78 0.68,1.44 0.12,2.4 2.78,-0.68 3.9,1.46 2.08,1.26 -1.72,0.74 -1.03,2.68 -0.51,3.31 -7.08,0.08 -6.25,3.51 1.53,-0.19 4.57,0.06 4.67,1.27 -0.73,2.54 2.28,1.63 2.62,2.01 1.41,2.24 -3.5,3.67 -1.9,6.17 0.12,3.04 -1.51,0.49 -0.35,-1.03 0.73,-2.35 -0.61,-5.22 -3.22,-5.51 -2.52,-0.23 -4.95,-4.8 -6.83,-0.86 -0.98,2.59 -3.07,-0.98 -3.73,2.03 -1.82,2.85 -1.43,6.39 -0.81,9.47 1.12,1.85 1.17,3.38 -0.82,4.1 -0.7,1.31 0.29,4.41 -1.67,2.5 -2.14,-1.69 -5.02,-0.86 -5.85,1.4 -2.54,0.85 -4.72,0.04 -5.34,-2.66 -0.99,-2.14 -5.91,-6.2 -6.14,-1.61 0.57,2.13 -0.39,0.96 -1.13,1.23 -0.7,0.99 -4.96,0.92 -2.14,2.3 2.85,1.94 -1.88,4.5 0.34,5.92 1.59,3.24 -4.12,0.39 -5.68,0.21 -2.06,-1.04 -3.15,2.55 -4.42,0.38 -1.01,-0.36 -2.16,1.19 -2.67,1.07z m-9.01,-1c0.11,-2.56 2.91,0.13 0,0z m-1.13,-1.28c-0.8,-1.29 3.49,-1.49 0.69,-0.52l-0.34,0.34 -0.36,0.18 0,0z m4.3,-0.48c-1.71,-0.47 -0.9,-2.93 0.17,-2.2 -0,0.74 -0.11,1.47 -0.17,2.2z m4.79,-4.64c0.18,-0.78 1.29,-1.07 0,0z m7.64,-3.83c-2.24,0.29 -1.11,-3.47 -0.22,-0.75 0.06,0.35 1.74,0.98 0.22,0.75z m2.2,-0.62c-2.38,-0.91 -2.84,-5.4 0.1,-4.68 0.37,1.54 -0.1,3.12 -0.1,4.68z m-1.72,-6.1c-4,-0.97 3.45,-2.52 1.03,-0.52 -0.42,0.05 -0.59,0.56 -1.03,0.52z m5.27,-4.48c-0.27,-0.28 0.7,-0.67 0,0z m42.25,-2.91c-1.73,0.39 -2.88,-3.16 -0.45,-1.74 1.34,-0.78 2.3,1.96 0.45,1.74z m-35.9,-2.93c0.17,-2 2.33,-0.17 0,0z m1.12,-1.12c1.6,0.69 0.37,-2.16 2.16,-2.14 -0.43,0.5 -1.9,3.93 -2.16,2.14z m20.87,-4.79c0.68,-1.68 0.54,-0.43 0,0z m-9.67,-2.21c-2.58,-0.52 -0.4,-3.09 0.65,-0.8 -0.07,0.3 -0.24,0.8 -0.65,0.8z M319.32,12.08c-0.3,-1.14 -1.45,-2.77 -2.39,-2.03 -1.57,-1.66 3.97,-2.79 -0.11,-4.02 -1.19,0.78 -1.7,1.41 -2.54,-0.32 -1.8,0.29 -3.52,-4 -2,-4.15 0.28,2.4 2.41,-1.85 3.57,0.39 1.62,1.46 1.99,-0.61 1.81,-1.03 1.1,0 2.2,0 3.3,0 -1.65,1.5 0.79,4.98 -1.45,5.97 1.81,0.96 -0.87,3.73 0.84,4.72 -0.27,0.27 -0.64,0.46 -1.03,0.47z M334.56,1.41c-0.71,-0.78 1.26,-0.59 0,0z","name":"Norway"},"ua":{"path":"m458.88,376.43c-1.65,0.13 -4.78,-1.76 -1.5,-2.12 1.11,-0.94 -0.88,-2.9 1.02,-4.06 0.62,-1.77 2.75,-4.95 1.17,-6.55 -2.35,-0.6 0.77,-4.92 0.58,-1.37 1.22,0.09 1.33,-0.46 2.29,-1.4 1.42,1.03 2.11,1.68 2.01,-0.49 0.8,-0.31 0.98,2.31 1.91,0.48 2.09,-0.77 2.07,-2.38 0.02,-2.62 0.48,-3.05 -2.01,-4.08 -4.34,-4.76 -1.03,-1.35 0.14,-4.1 -2.32,-4.58 -0.19,2.48 -3.85,-0.68 -2.94,-2.62 0.58,-1.57 -1.58,-5.77 -2.62,-3.02 -1.32,-0.9 -3.45,-3.78 -4.76,-1.05 -0.61,-1.26 -0.31,-1.31 -2.39,-0.85 -1.59,-0.19 -3.7,-2.91 -5.96,-1.05 -1.9,1.41 -4.52,1.99 -6.34,2.49 -0.3,1.21 -2.98,2.87 -3.26,4.06 0.69,2.88 -3.92,2.94 -5.88,3.36 -1.91,1.06 -2.85,5.5 -5.12,2.22 -2.55,-1.4 -4.85,1.16 -7.45,0.17 -2.78,0.68 -6.22,-1.81 -7.42,1.27 -1.7,-1.79 -4.36,-1.99 -6.08,-3.8 -1.69,-1.99 1.67,-4.76 1.1,-7.32 0.71,-2.08 3.89,1.72 3.03,-0.71 -0.43,-1.86 -2.14,-2.21 -2.09,-4.41 -1.6,-2.52 1.02,-5.01 1.85,-7.4 1.48,-2.09 2.06,-5.46 4.76,-6.09 3,-1.14 0.85,-4.79 0.14,-5.51 2.5,-2.1 -3.76,-3.23 -3.93,-5.84 -0.3,-1.41 -1.88,-4.75 0.96,-3.25 2.78,-0.65 2.08,-4.77 5.31,-4.83 2.44,-2.13 5.65,-1.09 8.41,-2.29 2.86,0.12 5.82,0.8 8.71,-0.13 1.44,0.02 2.96,3.43 4.46,0.67 0.48,-0.61 1.02,3.11 2.27,0.92 -0.68,-2.01 1.68,-0.28 2.33,-1.83 1.72,1.64 3.14,-2.06 4.36,1.19 0.98,-0.83 1.53,-5.36 3.12,-2.13 0.91,1.83 2.9,1.59 3.18,-0.37 1.11,-0.89 4.84,0.77 2.92,-1.35 2.22,-0.55 3.94,4.29 5.74,0.82 -0.53,-2.27 -3.24,-4.21 -1.65,-7.03 0.3,-2.91 3.55,-3.36 5.73,-4.62 2.8,0.98 5.55,-1.1 4.6,-3.99 2.15,-0.59 4.74,-0.01 5.62,-2.79 1.28,-1.72 2.08,2.03 2.83,-0.54 3.15,-1.7 3.09,3.74 6.17,3.78 2.69,0.81 -2.77,1.83 -0.06,3.34 0.97,1.1 0.27,1.92 1.66,2.64 0.13,1.93 0.76,2.76 1.8,0.93 1.75,0.21 3.63,-0.42 4.86,-1.04 1.22,1.6 2.86,1.33 3.58,3.44 0.66,2.12 2.97,6.38 5.86,3.86 0.95,-2.66 2.98,0.62 4.61,-0.26 2.96,0.38 3.76,-3.58 5.99,-4.66 2.15,1.36 3.87,3.07 6.32,3.78 2.39,1.73 1.46,-2.06 1.83,-2.22 2.04,0.83 3.63,-0.35 5.65,0.78 1.64,-1.06 3.29,-0.67 5.4,-0.98 -0.34,2.96 3.78,0.35 3.93,-0.21 -1.54,1.79 2.89,1.91 1.36,4.34 -0.91,1.71 -3.3,4.32 0.42,4.36 1.34,-0.17 -2.51,1.76 -0.87,3.22 0.73,1.16 4.31,0.82 2.94,3.4 -1.12,2.14 2.56,-1.79 1.05,1.32 0.04,1.92 1.74,4.67 -1.56,4.6 -2.59,0.04 -5.57,1.58 -4.88,4.34 -1.93,1.59 -3.46,4.3 -2.04,6.74 1.21,-0.9 1.4,3.27 -0.48,2.33 -2.61,-0.17 -4.34,2.86 -4.47,4.25 -3.32,-0.37 -1.93,5.58 -4.94,3.83 -1.97,0.68 -1.55,3.31 -3.9,2.83 -2.31,2.16 -4.28,4.87 -4.46,8.16 0.05,2.37 -1.89,1.63 -2.69,0.94 -1.43,2.66 1.92,4.83 3.49,6.52 1.72,1.52 4.3,4.21 6.67,2.42 1.12,-1.05 0.41,-2.57 2.09,-1.56 1.41,-0.15 1,-2.82 3.17,-2.37 1.15,-0 0.13,2.98 0.5,4.21 -1.72,0.79 -3.13,2.24 -5.41,1.17 -2.72,0.19 -1.51,3.05 -3.33,4.45 -1.46,1.36 -5.27,2.16 -5.39,5.34 -0.65,2.52 -2.91,5.33 -5.63,3.62 -2.92,-0.52 2.13,-0.53 -0.45,-1.77 -0.6,-1.76 -0.24,-6.9 -3.31,-5.63 -2.51,0.74 -5.09,-2.4 -7.49,-0.19 -0.84,-1.11 2.17,-2.44 2.5,-3.9 1.15,-2.11 4.76,-3.17 5,-5.4 -1.21,-0.47 -1.1,-4.45 -2.98,-2.14 -0.01,2.53 -3.55,-2.55 -3,-0.06 -1.18,1.35 -4.02,3.26 -6.29,3.26 -0.55,-2.41 -5.82,0.8 -2.84,-2.01 -2.07,-2.11 3.13,-0.37 2.51,-2.12 0.43,-0.87 2.54,-3.83 0.04,-2.33 -1.67,2.49 -5.64,0.74 -4.34,-2.2 -3.44,-0.71 0.17,4.67 -3.05,4.35 -0.95,0.4 -1.24,-2.89 -2.18,-0.81 1.19,3.1 -5.65,1.69 -4.31,5.43 -0.19,2.64 -0.71,6.16 -2.65,8.5 -1.92,0.15 -2.28,-0.37 -1.97,1.56 1.06,2.6 -1.47,1.65 -1.44,-0.04 -3.03,0.54 1.86,5.97 -1.63,4.84 -1.69,1.04 -2.76,2.58 -4.85,3.23 -0.33,0.68 0.22,1.06 -0.9,0.94z m8.84,-3.13c-1.24,-0.5 0.31,-1.59 0,0z M480,354.71c-2.02,-0.24 1.4,-0.94 0,0z","name":"Ukraine"},"il":{"path":"m564.91,519.32c-2.79,-0.13 -5.59,-0.02 -8.39,-0.06 1.03,-3 0.55,-6.35 0.36,-9.47 -0.77,-1.89 -0.08,-3.97 0.69,-5.38 -2.21,-3.68 3.62,-1.36 3.34,-4.63 0.16,-2.5 0.5,0.45 0.78,1.3 0.41,1.74 0.97,3.45 0.64,5.26 0.64,4.15 2.85,8.05 2.93,12.32 -0.33,0.17 0.28,0.88 -0.36,0.66z","name":"Israel"},"sa":{"path":"m593.15,519.31c-2.83,-0.62 -5.1,-2.77 -7.77,-3.86 -1.58,-0.98 -5.22,-1.86 -2.02,-3.26 5.2,-3.81 10.77,-7.23 15.26,-11.9 1.43,-2.99 4.63,-3.12 7.49,-3.98 3.73,-1.26 7.76,-1.54 11.57,-0.41 3.34,1.04 6.79,1.79 10.32,1.49 3.1,-0.23 6.16,0.27 9.07,1.36 7.05,2.14 14.23,3.86 21.25,6.06 3.22,1.22 7.13,2.8 10.33,0.7 3.47,-1.54 7.12,-2.66 10.59,-4.19 0,5.98 0,11.96 0,17.94 -28.52,0 -57.04,0 -85.55,0l-0.54,0.05z","name":"Saudi Arabia"},"iq":{"path":"m665.09,505.54c-3.93,-0.14 -7.37,-2.41 -11.2,-3.08 -6.98,-1.9 -13.93,-3.92 -20.88,-5.88 -4.51,-0.55 -9.21,0.46 -13.56,-1.25 -4.06,-1.23 -8.45,-1.67 -12.53,-0.27 -2.28,0.01 -6.14,3.28 -6.23,-0.28 -1.25,-1.52 -3.9,2.58 -3.26,-0.38 2.09,0.09 -1.51,-3.02 -1.67,-4.04 -1.32,-2.57 -5.49,-5.02 -2.13,-7.49 4.5,-5.84 9.16,-11.56 13.6,-17.45 2.04,-3.07 2.39,-7.4 0.02,-10.4 -1.41,-3.28 0.38,-7.66 -2.62,-10.31 -3.09,-2.29 -2.71,-6.73 0.85,-8.16 2.5,-2.92 2.33,-7.04 4.39,-10.19 0.66,-2.04 0.93,-3.47 3.19,-3.89 2.1,-2.75 5.72,-0.13 8.03,-2.44 0.9,-1.04 2.2,-3.85 2.95,-0.99 0.24,2.01 2.47,2.98 2.75,0.39 0.38,-1.99 1.84,-3.41 3.5,-1.73 2.25,0.16 -1.13,2.67 1.73,2.71 2.42,-0.18 1.65,4.3 5.21,2.73 1.14,1.18 1.93,5.76 4.16,3.01 2.6,0.76 5.25,0.47 7.14,-1.59 0.61,0.22 -3.19,2.13 -1.4,3.83 1.09,1.94 5.9,4.19 1.79,5.59 0.41,2.25 -2.38,5.11 0.78,6.65 -2.86,-0.58 -2.74,5.86 0.16,4.24 -0.52,2.48 -0.45,5.39 2.6,5.52 0.99,0.71 1.98,1.43 2.96,2.14 0.34,-1.31 1.06,-1.78 0.88,-0.17 1.65,-0.62 3.99,0.32 4.03,2.59 0.12,1.35 0.91,3.75 2.75,1.76 3.33,-1.46 6.61,1.38 9.97,1.03 2.56,-1.77 4.83,0.86 6.18,2.91 0,13.19 0,26.38 0,39.57 -4.3,1.87 -8.8,3.32 -13.06,5.23 -0.36,0.05 -0.72,0.08 -1.09,0.08z","name":"Iraq"},"az":{"path":"m625.84,392.01c-2.29,-1.74 -6.12,-1.39 -7.67,-4.17 -2.87,-0.9 2.82,-3.1 1.5,0.21 -0.29,2.16 0.66,-0.38 1.38,-0.86 1.98,0.67 2.99,-0.38 4.14,-1.97 0.78,0.36 1.17,3.12 3.09,2.25 0.41,1.86 5.4,3.6 1.25,3.88 -1.24,0.15 -2.44,0.52 -3.69,0.66z m9.25,-4.53c-1.22,-1.31 -1.37,-1.74 -0.58,-3.22 -0.7,-1.79 -4.05,0.28 -2.18,-2.45 -0.71,-3.07 -3.86,1.6 -5.74,-0.73 -1.12,-1.04 -4.8,-0.64 -2.24,-1.72 1.66,-3.91 -3.46,-4.05 -5.96,-4.45 -3.06,-0.54 1.31,-0.13 -0.04,-1.79 -1.74,-0.11 0.76,-3.32 -2.15,-2.78 -1.13,-2.07 -3.77,1.24 -3.43,-1.3 -3.83,0.78 -1.14,-4.07 1.25,-3.79 1.55,-0.11 2.45,2.19 4.64,1.11 1.17,-0.47 1.66,-2.32 3.53,-1.24 4.04,0.44 2.81,-5.63 -0.82,-5.09 -1.19,-0.23 -4.57,-0.92 -2.6,-1.97 -1.03,-3.22 2.59,-2.79 4.29,-1.55 1.8,0.76 4.71,-0.66 4.29,1.94 2.3,1.27 5.96,-0.02 6.83,-2.57 -0.51,-2.81 0.78,-5.44 1.5,-8.17 0.77,-1.87 3.93,1.21 5.57,1.75 2.04,2.28 4.63,3.86 7.4,4.84 2.72,2.9 5,-2.29 8.05,-0.66 2.42,0.7 -1.69,0.86 -2.16,1.8 -1.58,1 -0.94,2.98 -2.64,4.05 -0.87,2.65 2.35,4.7 1.48,7.28 0.01,2.24 2,3.06 1.53,5.18 2.05,2.31 -2.94,0.21 -1.67,3.07 0.41,2.71 2.06,5.63 2.66,7.96 -1.4,1.58 -3.89,-2.8 -4.72,-0.12 -0.51,-2.33 -5.01,-0.05 -2.24,-2.75 1.89,-2.25 -0.89,-2.79 -2.14,-3.4 -0.39,-1.7 3.13,-2.19 0.43,-2.98 -2.55,-2.17 -6.8,-1.82 -7.18,2.01 -1.56,2.2 -2.45,4.87 -3.2,7.25 -1.02,1.28 -1.42,2.9 -1.76,4.47z","name":"Azerbaijan"},"ir":{"path":"m679.21,458.81c-1.85,-0.64 -2.96,-4.67 -5.07,-2.4 -2.51,1.13 -4.99,-0.69 -7.5,-0.94 -1.54,-1.25 -4.65,1.4 -4.88,0.3 -0.35,-2 -1.76,-5.08 -4.31,-4.59 -0.55,-2.48 -2.8,0.93 -4,-1.28 -1.15,-1.36 -3.82,-0.5 -2.7,-3.18 1.2,-2.24 -1.18,-2.93 -1.92,-2.92 -0.76,-2.14 0.85,-1.8 1.93,-2.95 -0.87,-1.54 -2.25,-2.23 -1.18,-3.98 1.41,-1.22 -0.93,-2.74 1.62,-3.12 2.22,-2.84 -3.32,-4.02 -3.44,-6.68 1.23,-0.62 3.69,-3.96 0.62,-3.5 -2.16,1.88 -4.6,2.34 -7.4,1.61 -2.13,2.68 -1.52,-4.01 -4.35,-3.02 -2.59,1.12 -1.74,-3.71 -4.6,-2.9 0.47,-2.81 -2.6,-2.62 -3.34,-4.74 -3.51,-0.37 -2.73,-5.88 -6.79,-4.9 -2.43,-0.23 0.88,-4.74 -1.15,-6.42 -2.63,1.81 -2.65,-3.09 -4,-4.32 -2.26,0.51 -1.17,-4.01 -3.82,-4.01 -1.08,-1.34 3.43,-0.98 2.24,-3.41 -0.62,-1.73 -1.46,-4.27 1.42,-2.93 2.06,1.49 5.14,2.91 7.63,3.88 2.25,1.24 5.18,-0.04 7.5,-0.74 2.07,-1.71 5.07,-2.61 4.75,-5.97 2.3,-2.33 1.71,-5.53 3.7,-8.09 0.98,-2.61 2.58,-5.68 5.71,-3.44 1.82,0.32 -1.95,3.66 1.08,3.95 4.06,-0.35 -2.73,4.32 1.52,4.83 1.27,-1.49 2.59,2.44 3.8,0.15 1.45,1.58 3.99,1.1 4.87,0.71 1.82,2.85 3.68,6.92 7.62,6.9 3.17,0.36 5.34,-2.56 8.13,-3.02 2.01,0.9 4.99,2.01 6.34,2.88 -0.02,22.74 0.03,45.49 -0.03,68.23z","name":"Iran"},"ge":{"path":"m581.92,380.27c-2.26,-0.5 1.41,-3.83 -0.72,-5.4 -1.82,-2.3 -4.05,-4.17 -5.45,-6.77 -1.72,-2.18 -4.46,-0.36 -5.95,-2.58 -2.48,-1.15 -5.99,1.77 -7.69,-0.38 -1.24,-0.61 -3.4,-1.34 -1.11,-2.52 2.92,-1.18 5.31,-0.74 8.31,-1.17 2.62,-0.64 4.81,0.81 7.27,-1.05 1.64,-1.03 2.03,-2.53 4.37,-2.32 3.09,-1.55 5.23,0.93 8.34,0.23 1.97,-0.34 3.8,-1.06 3.76,1.37 3.33,1.16 4.09,-3.43 6.09,-4.97 1.82,1.19 3.56,0.44 3.29,-1.84 2.38,1.1 4.89,0.94 6.98,-0.29 0.1,2.19 0.6,4.52 3.44,3.9 1.82,0.87 6.7,-2.08 4.44,1.62 -1.04,4.09 6.18,1.33 6.51,4.88 -0.55,2.71 -3.63,-0.63 -4.78,1.93 -2.42,2.07 -3.95,-2.25 -6.59,-0.28 -2.88,0.84 -1.75,4.15 -4.11,5.26 -2.15,1.64 -6.02,2.97 -7.99,5.72 -1.4,1.55 -3.24,0.61 -4.57,1.11 -0.32,-2.7 -4.41,-0.39 -5.08,-2.59 -2.74,0.39 -1.4,4.41 -4.46,3.55 -2.08,-0.04 -2.63,2.5 -4.3,2.58z","name":"Georgia"},"sy":{"path":"m570.98,505.1c-2.37,-0.06 -4.22,-2.23 -6.66,-1.9 -1.76,1.54 -0.95,-3.61 -2.17,-4.66 0.26,-2.1 3.06,-4.25 2.48,-6.23 -2.86,0.37 -0.12,-3.18 1.61,-2.81 1.41,-1.1 -2.08,-2 0.23,-3.24 2.46,-1.85 0.82,-6.41 -2.32,-5.73 1.74,-2.54 -3.41,-1.48 -4.52,-0.5 -2.16,-1.45 -1.71,-4.59 -2.2,-6.89 -0.72,-2.13 -3.63,-2.2 -2.69,-4.95 -1.91,-3.07 4.61,0.44 2.96,-3.37 1.96,-1.34 -0.54,-4.12 2.56,-4.37 1.92,-1.95 -2.9,-3.08 -1.96,-5.67 -0.17,-2.68 3.53,-1.88 4.07,-0.24 2.8,-1.4 6.26,-2.87 7.96,-6.08 1.77,-3.87 6.01,-0.57 8.96,-1.32 4.89,-1.98 9.3,-5.28 12.15,-9.78 2.06,-3.09 5.52,-4.42 8.88,-5.51 3.15,-0.62 4.71,-4.01 6.68,-5.54 2.16,2.06 -0.35,4.49 -0.71,6.75 -0.34,2.94 -3.64,3.54 -4.67,5.93 -0.77,2.72 0.96,5.34 2.92,7.06 1.91,2.86 0.25,6.61 2.05,9.52 1.43,2.7 2.07,6.08 0.11,8.71 -2.41,4.04 -5.84,7.35 -8.54,11.19 -6.92,8.84 -13.8,17.72 -20.31,26.87 -1.64,2.62 -4.19,2.66 -6.86,2.76z","name":"Syrian Arab Republic"},"tr":{"path":"m494.91,482.2c-2.64,-0.83 -6.61,0.7 -6.69,-3.38 -0.28,-2.26 -4.06,-2.7 -3.32,0.14 -2.13,0.72 -2.01,-4.36 -4.24,-2.06 -1.1,1.64 -1.71,4.09 -2.75,1.3 -0.06,-0.7 3.87,-0.84 1.58,-2.85 -2.66,-0.75 -4.9,2.05 -7.56,2.3 -3.22,0.12 2.63,-2.09 -0.16,-3.58 -1.02,-1.26 -2.59,-1.78 -3.85,-0.25 0.8,-2.14 -2.11,-2.59 -0.3,-4.42 0.7,-2.91 -3.46,-4.14 -4.72,-3.08 -0.35,-2.13 -2.41,-1.66 -2.94,-0.12 -0.96,-0.52 -4.49,-1.13 -1.65,-1.67 1.95,-1.12 -0.35,-1.93 -0.64,-2.3 -0.1,-2.91 1.76,1.21 2.44,2.3 1.21,0.53 0.61,-1.54 2.32,-0.91 2.14,0.31 3.08,-4.19 0.9,-2.3 -2.98,0.71 -3.35,-2.88 -0.63,-3.63 1.42,-2.31 -2.41,-1.49 -2.02,-3.47 -1.48,-1.26 -3.08,-1.7 -1.12,-3.61 1.88,-4.06 -3.41,-1.44 -4.89,-0.21 -3.22,2.13 -1.41,-2.71 -2.53,-4.43 0.27,-1.5 2.4,-1.02 1.65,-3 1.08,-2.79 3.49,-3.54 5.85,-4.95 1.33,-0.2 3.18,2.13 5.06,0.5 2.19,-0.32 0.53,-4.12 2.21,-2.66 -1.01,2.78 3.65,-0.5 5.07,-0.34 1.73,-0.22 7.01,-0.13 5.15,-2.97 -1.48,-0.21 -3.18,0.39 -0.99,-0.95 1.96,-1.62 4.19,-2.4 6.66,-2.8 2.77,-0.54 1.2,-2.91 -0.89,-1.86 -1.93,1.45 -3.4,0.81 -4.38,0.32 -3.58,0.35 -2.31,-4.79 0.81,-3.52 2.71,0.01 5.57,-0.39 7.64,-2.28 2.46,-0.32 5.31,1.16 7.39,-0.69 2.9,-0.41 1.41,-4.52 4.23,-5.54 2.71,-2.98 4.61,-6.84 8.39,-8.68 2.29,-1.78 4.29,-3.83 7.39,-4.02 3.16,-0.7 6.47,-1.22 9.26,-2.97 -0.18,-2.01 2.92,-3.03 2.12,-0.46 1.09,2.77 5.37,3.22 7.04,0.72 1.14,-1.37 -0.27,2.45 1.16,0.14 2.04,-1.94 2.88,3.79 5.57,2.83 1.27,-1.86 4.62,-3.78 5.67,-1.09 1.67,-0.99 4.1,0.27 5.52,-0.17 -0.07,-1.45 1.44,-1.93 0.76,-0.72 3.48,0.31 7.66,-0.08 9.71,-3.32 2.34,-1.18 4.33,-4.18 7.15,-3.36 2.71,-0.07 6.67,-0.67 7.5,-3.83 1.38,-2.88 4.81,-4.34 5.49,-7.63 0.34,-3.02 3.69,-0.01 3.89,-2.79 0.79,-1.71 6.06,-0.8 5.2,-2.54 -0.27,-1.98 1.64,-2.11 0.91,-0.61 1.97,-1.13 4.24,-0.33 5.11,0.95 0.95,1.76 2.34,-1.7 3.43,0.93 2.07,0.94 4.5,1.8 3.64,4.81 0.12,2.83 2.56,6.38 5.64,4.35 1.45,-1.61 6.05,-1.12 6.12,-0.28 -2.87,1.25 2.28,4.65 -1.45,5.76 -2.31,0.86 -1.86,1.74 0.02,2.55 2.07,1.41 1.16,4.02 3.6,4.69 1.23,1.57 1.59,5.71 3.8,4.2 0.43,2.37 -1.79,7.52 2.74,6.05 2.64,-0.44 0.94,3.97 3.94,4.02 3.58,1.02 -1.74,2.3 -1.12,4.76 -1.2,0.98 -0.5,-3.85 -3.12,-2.67 -1.98,1.2 -2.57,4.14 -5.61,3.29 -2.88,-0.31 -4.84,1.72 -7.02,2.7 -0.69,1.88 -0.86,5.21 -2.91,2.44 -2.75,-0.22 -2.61,4.46 -5.58,4.92 -2.98,1.72 -6.75,1.93 -9.15,4.66 -2.61,2.66 -4.36,6.14 -7.61,8.16 -2.25,1.32 -4.52,3.36 -7.26,3.28 -3.54,-1.52 -7.49,-0.78 -9.08,3.03 -1.68,2.28 -5.43,4.75 -7.39,2.82 -3.82,-1.14 -4.64,3.62 -2.75,6 0.73,1.14 2.5,1.57 0.17,2.12 -3,0.1 0.83,3.76 -2.09,4.07 1.59,1.89 -1.39,2.48 -1.35,0.31 -1.32,-1.73 -3.85,-3.07 -1.43,-5.18 3.46,-2.09 -0.87,-8.48 -3.12,-4.45 -0.21,1.09 -4.52,4.06 -1.07,3.29 -0.14,0.32 -3.7,3.62 -5.39,1.57 -3.14,-1.5 -6.7,0.91 -7.75,3.93 -2.31,1.12 0.64,5.77 -2.52,4.44 -0.89,2.68 -3.25,3.27 -5.84,4.06 -1.96,1.06 -3.83,3.65 -6.37,2.47 -2.84,-1.55 -5.07,-4.65 -8.7,-4.14 -2.94,-0.38 -6,-0.94 -8.9,-0.06 -3.48,-0.29 -3.26,3.57 -2.85,5.62 -0.19,1.75 1.15,3.5 -1.34,2.67 -2.13,0.36 -2.94,2.88 -4.85,3.38z m-22.48,-0.92c1.54,-1.56 1.67,0.46 0,0z m4.91,-2.51c-0.79,-0.93 0.97,-1.15 0,0z m-7.81,-0.87c-2.21,-0.79 -0.04,-1.14 0.54,-0.39 -0.12,0.2 -0.29,0.4 -0.54,0.39z m-17.07,-35.78c-2.05,-1.66 3.84,-4.8 1.02,-1.64 -0.17,0.27 -1.7,3.54 -1.02,1.64z m-2.5,-4.63c-2.27,-0.95 2.99,-3.59 0.8,-5.77 -1.18,-2.59 4.67,-3.55 1.64,-6.24 -1.25,-1.27 -3.7,-1.75 -1.56,-3.41 0.31,-2.43 2.93,-0.92 3.7,-3.21 1.99,-1.8 4.08,2.49 6.12,-0.22 3,-2.82 1.8,3.03 4.59,3.75 2.54,1.72 5.71,1.31 8.59,1.46 1.59,1.71 -1.83,5.17 -3.31,2.87 -1.59,0.83 -4.21,-0.49 -5.46,2.07 -2.23,0.06 -4.36,0.17 -4.68,3.06 -0.43,2.55 -2.87,5.66 -5.23,3.75 -1.9,0.1 -3.3,1.78 -5.2,1.9z","name":"Turkey"},"am":{"path":"m631.96,389.85c-1.96,-0.78 -2.5,-4.05 -4.9,-3.4 0,-2.98 -2.99,-2.85 -3.89,-0.42 -0.72,0.59 -2.05,-1 -2.73,0.47 -1.44,-4.24 -3.82,2.15 -6.08,-0.34 -2.43,-1.36 -5.05,-0.13 -7.33,0.88 -1.6,1.02 -2.24,-1.35 -3.25,-2.19 -0.22,-2.63 -0.35,-6.8 -3.95,-6.8 -1.56,-1.33 3.34,-2.22 3.67,-4.1 2.01,-1.81 4.84,-2.17 7,-3.75 -1.93,-0.72 2.92,-0.35 0.29,0.72 0.12,2.73 3.55,-1.6 5.25,0.33 2.07,0.17 -1.51,3.12 1.09,4.06 1.57,1.97 7.78,-0.09 6.04,3.56 -1.81,0.88 -2.21,2.81 0.36,2.27 2.62,0.26 4.73,3.06 7.3,0.67 1.25,-0.38 -1.56,2.52 0.95,2.4 1.37,0.14 2.22,0.32 0.58,1.07 -0.16,1.55 3.78,3 0.58,4.04l-0.53,0.37 -0.44,0.16 0,0z","name":"Armenia"},"cy":{"path":"m527.35,491.44c-2,0.03 -5.42,-2.87 -2.34,-3.85 0.27,-2.84 4.77,-0.45 3.78,-3.88 -1.1,-2.02 2.82,-0.4 4.03,-1.67 3.21,-1.08 5.34,-3.84 7.9,-5.9 -1.85,1.69 -5.66,5.67 -1.55,7.09 -1.16,0.96 -4.02,1.69 -3.88,3.92 -1.79,0.94 -4.14,2.55 -4.75,3.95 -1.18,-1.33 -2.1,0.23 -3.19,0.34z","name":"Cyprus"},"ie":{"path":"m160.13,300.45c-1.94,-0.73 -5.41,-0.29 -5.93,-1.1 2.68,-0.96 1.02,-3.47 -1.27,-2.29 -2.17,-0.03 4.61,-0.27 1.86,-1.87 -1.29,0.35 -5.82,0.84 -4.6,-0.88 0.33,-2.41 5.15,0.07 4.57,-2.91 -1.5,-0.99 -3.62,0.6 -3.81,-1.26 1.2,-0.91 6.26,2.54 3.91,-0.67 0.38,-1.38 3.44,-1.82 5,-1.34 1.1,0.96 5.65,0.21 3.16,-0.84 -0.11,-2.83 -2.54,-0.03 -3.01,-0.47 -0.23,-0.23 -3.43,-0.5 -1.1,-1.34 2.22,-1.01 0.54,-4 2.82,-3.42 2.56,1.02 3.91,-3.17 0.52,-2.46 -1.68,0.14 -2.56,-0.23 -2,-1.83 -0.18,-2.01 -5.12,-1.21 -3.94,-2.82 2.15,0.5 2.19,-2.65 4.57,-1.69 2.67,-0.16 1.13,-2.7 -0.21,-3.26 0.29,-1.31 0.02,-3.18 -0.75,-3.28 2.65,-0.82 4.91,0.87 5.93,2.56 1.46,-1.86 3.2,1.45 5.23,1.05 -1.45,-1.4 -1.04,-3.03 1.32,-2.78 1.21,-0.78 -0.05,1.72 1.32,2.45 1.11,1.84 4.55,5.05 6.16,2.17 -0.49,-1.92 2.26,-1.77 1.43,0.13 0.94,1.15 1.06,2.27 0.8,3.26 0.63,1.48 4.47,-0.64 2.75,0.86 -2.34,0.42 -0.05,3.2 -0.77,4.83 0.46,1.62 -0.08,2.98 -1.28,2.32 1.02,2.41 1.46,5.54 -0.48,7.61 -1.25,2.01 -3.34,4.38 -4.14,6.02 -2.56,-0.85 -5.09,-0.34 -7.67,-1.06 -1.16,0.41 -0.62,2.52 -2.3,1.42 -1.5,0.14 -2.91,2.49 -3.4,0.19 -2.29,-1.05 -1.04,2.27 -2.69,2.29 -0.11,0.95 -1.6,-1.12 -2.01,0.4z m13.73,-33.46c2.33,-2.06 -0.9,-1.95 -2,-2.14 -1.29,-0.53 -2.55,-1.96 -0.25,-1.08 1.89,0.69 2.47,-1.66 2.15,-3.1 -1.16,-1.71 7.03,-1.16 4.23,1.31 -0.31,1.85 2.66,-0.08 1.09,1.63 -0.53,1.73 -5.09,0.69 -2.83,2.72 -0.77,0.31 -1.61,0.36 -2.38,0.64z m6.45,-5.05c0.02,-0.88 0.61,0.23 0,0z","name":"Ireland"},"gb":{"path":"m182.64,325.46c0.06,-1.95 -4.47,-2.09 -0.74,-2.3 2.67,-0.61 3.94,-3.31 6.49,-4.14 2.12,-0.77 1.4,-4.5 3.94,-3.31 1.45,-3.67 5.43,-1.45 8.06,-0.26 2.91,0.6 2.6,-3.72 5.07,-4.06 1.35,-0.1 4.35,-3.93 1.42,-2.57 -1.86,1.99 -5.05,0.84 -6.82,2.84 -2.27,-0.51 -2.72,-5.62 -5.77,-3.31 0.24,-2.37 -1.53,-4.27 -3.69,-2.44 -0.87,0.75 -2.94,0.79 -1.58,-0.17 0.16,-1.27 -3.6,-0.88 -1.52,-2.98 1.52,-0.74 3.44,0.29 4.82,-1.36 2.13,0.95 4.49,-1.92 5.83,-3.38 1.68,-2.26 0.05,-8.36 -3.37,-5.58 -1.46,1.33 -0.19,-1.41 0.97,-0.91 1.28,-1.84 2.91,-2.79 5,-2.8 1.2,0.32 4.62,-0.54 5.23,2.01 0.71,1.84 0.61,0.28 0.62,-0.81 -0.49,-1.45 0.01,-1.88 0.83,-1.63 -1.44,-2.21 1.58,-2.99 1.67,-4.6 -1.45,-0.49 -1.63,-2.14 0.09,-1.51 0.69,-1.16 0.79,-2.38 1.37,-3.56 -0.63,-2.27 -3.62,2.01 -2.38,-1.12 -0.36,-1.35 -2.39,0.41 -1.46,-1.51 -2.08,-2.31 0.12,-6.19 3.07,-5.98 2.74,-1.73 -0.83,-1.86 -2.08,-2.37 -0.92,0.48 -3.28,2.29 -4.42,1.19 -1.32,1.2 -1.79,-3.4 -3.43,-0.83 0.32,2.13 0.14,1.46 -0.76,0.01 -1.33,-0.68 -2.66,-1.39 -1.32,-3.18 1.13,-2.26 5.13,-4.6 2.33,-7.17 0.52,-2.42 1.47,-4.31 0.99,-6.83 -1.19,-2.25 -5.91,3.7 -3.96,0.19 -1.17,-1.95 1,-2.29 1.54,-3.39 -1.93,-1.31 3.92,-1.92 1.97,-3.06 1.93,-2.14 -1.4,-1.12 -1.91,0.17 -2.64,0.37 -2.78,2.95 -5.17,3.25 1.64,-1.88 1.56,-3.32 4.36,-3.1 0.45,-1.67 -5.98,-1.25 -1.81,-1.19 1.82,-0.7 -1.08,-3.69 1.83,-2.58 2.2,1.18 2.55,-1.86 1.62,-2.28 3.21,-0.32 0.94,-5 -0.12,-6.67 -1.49,-3.19 1.62,1.59 1.66,-1.31 -0.16,-0.99 3.11,1.17 2.06,-1.21 -1.02,-1.19 -0.29,-1.17 0.73,-0.82 0.07,-1.49 0.01,-1.71 1.64,-1.31 1.56,-1.15 -0.74,-2.21 0.86,-3.26 -0.88,-3.08 1.49,-0.59 1.87,-0.27 0.74,0.04 0.92,2.92 2,0.79 2.21,-0.9 6.43,0.18 7.86,0.3 -1.51,1.12 -1.16,3.83 -3.76,4.28 -1.25,1.24 -5.25,2.21 -4.45,4.19 2.02,-0.77 1.46,0.73 0.51,0.2 -2.65,-1.31 -3.91,3.83 -0.65,3.27 1.6,-1 4.76,-1.27 6.96,-0.43 2.15,0.77 9,0.4 6.36,4.13 -2.17,1.32 -1.95,4.3 -3.79,5.88 -1.36,2.24 -3.73,4.99 -6.67,3.85 -2.54,0.88 -0.66,2.52 1.1,1.38 0.78,-0.5 3.15,3.35 0.84,1.99 -2.07,-0.28 -3.16,1.31 -5.18,1.63 -0.02,2.53 4.56,1.95 5.82,1.47 2.3,1.2 3.8,3.55 4.55,5.85 2,2.23 0.13,5.79 1.35,8.49 -0.45,3.02 1.26,4.86 3.81,6.01 1.66,1.49 2.34,4.19 3.57,5.37 -2.57,1.95 1.1,5.12 0.44,6.31 -2.04,-0.08 1.34,3.78 1.3,5.11 0.78,2.24 -5.08,2.32 -2.09,4.71 1.56,2.69 3.3,0.05 4.83,-1 2.51,1.1 6.37,1.79 6.61,5.25 -0.28,2.6 -1.71,7.67 -4.87,6.84 -2.14,0.29 1.39,3.23 -1.35,2.01 -1.64,-1.62 -4.38,2.64 -1.7,1.39 1.98,0.5 -1.21,2.23 -2.35,1.41 -3.04,0.03 -0.52,3.18 1.11,2.57 2.13,-1.55 -0.82,1.67 1.85,1 1.37,0.01 4.16,-1.13 2.4,1.04 0.18,1.94 -3.04,1.77 -3.79,3.01 -3.03,-0.26 -5.14,2.46 -7.81,0.22 -2.14,-0.87 -5.12,1.06 -5.71,-1.04 -0.97,0.35 -1.61,-1.39 -2.37,0.11 -0.34,-1.96 -3.3,-2.15 -1.9,0.13 -1.76,0.29 -4.97,-1.2 -5.38,0.98 -2.03,-0.7 -3.26,-0.69 -4.99,-2.14 -2.67,-1.4 -6.68,-1.13 -6.68,2.71 -0.68,3.61 -3.23,0.34 -4.72,-0.57 -1.81,-0.09 -4.28,-1.13 -5.91,0.19 -1.52,-0.34 -2.18,1.47 -2.78,2.5z m18.76,-70.13c1.65,1.54 3.03,-0.19 0.57,-0.92 -0.47,-0.23 -0.39,0.68 -0.57,0.92z m-3.12,31.93c0.55,0.53 0.27,0.88 0,0z m-1.17,-10.07c0.02,-1.53 3.39,-4.02 1.66,-1.22 -0.39,0.58 -0.96,1.08 -1.66,1.22z m-10.63,-1.73c-1.59,-0.31 -2.08,-2.29 -3.03,-0.36 -1.91,-0.73 1.49,-2.2 -1,-2.29 0.13,-2.31 -2.8,-4.88 -3.79,-2.04 0.08,3.32 -3.97,-0.09 -4.6,-1.78 -1.85,-2.46 4.1,-0.54 2.7,-3.31 3.07,0.55 2.59,-4.32 5.36,-2.92 1.06,-1.19 2,-1.61 3.15,-1.03 2.23,-0.98 4.88,1.21 3.52,3.35 -0.19,2.26 3.15,1.24 0.87,3.27 -2.06,1.44 -0.04,2.03 1.25,1.47 1.84,1.95 -0.91,4.87 -2.77,3.75 -0.28,0.8 -0.67,1.84 -1.67,1.88z m10.61,-7.92c-1.67,-0.09 0.88,-0.41 0,0z m-4.29,-6.97c1.08,-0.83 2.3,-4.85 2.33,-3.8 -0.86,1.14 -0.52,3.62 -2.33,3.8z m2.73,-6.13c0.35,-1.24 0.97,-0.17 0,0l0,0z m-3.97,-25.03c-1.05,-1.04 1.79,-1.33 0,0z m1.85,-1.48c-0.51,-1.01 -1.32,-1.32 -0.4,-1.6 -1.54,-1.3 0.12,-2.32 1.22,-0.9 1.22,-0.53 0.35,-2.59 1.9,-1.78 0.84,-0.86 3.02,-1.98 1.27,-0.28 -1.41,1.61 -1.17,5.41 -3.42,2.95 -0.74,0.32 -0.1,1.35 -0.58,1.61z m38.33,-20.76c-1.93,-1.65 4.17,-0.89 0.99,-0.51l-0.47,0.12 -0.53,0.39 0,0z","name":"United Kingdom"},"ch":{"path":"m292.05,389.98c-1.12,-2.03 -1.49,-3.96 -4.14,-4.68 0.24,-1.27 0.28,-4.19 -2.02,-2.48 -2.76,1.07 -0.98,6.19 -4.8,5.6 -1.34,-2.05 -4.35,2.18 -5.85,-0.49 -0.66,-1.9 -1.54,-2.82 -1.22,-5.23 -0.26,-1.58 -4.49,-1.34 -5.35,0.35 0,0.96 -0.92,3.04 -1.36,2.14 2.08,-0.65 -0.4,-3.99 1.78,-5.21 1.94,-0.57 2.18,-1.6 2.3,-3.5 2.42,-0.82 3.23,-3.53 5.4,-5.02 0.92,-1.36 3.51,-0.53 3.7,-1.93 2.51,-0.36 5.31,-0.33 7.48,-0.01 1.57,-0.63 0.5,-2.03 0.36,-2.23 1.31,-1.57 1.36,1.33 2.5,0.98 1.1,0.96 4.91,-0.68 5.97,2.04 0.36,1.7 -2.95,6.33 1.28,6.08 1.9,0.87 4.09,3.47 5.78,0.3 -0.28,1.18 -0.17,4.33 -0.42,4.42 -1.87,-2.39 -4.17,0.79 -2.27,2.33 0.4,3.64 -0.7,-1.85 -2.69,-0.06 -1.62,2.46 -2.25,-1.46 -3.43,-1.76 -2.43,0.76 -0.07,4.33 -2.78,4.97 -1.02,0.89 -0.72,2.33 -0.22,3.4z M275.63,370.8c0.49,-1.83 2.92,0.14 0.45,0.04l-0.53,0.11 0.08,-0.14 0,0z","name":"Switzerland"},"at":{"path":"m338.89,381.72c-2.92,-0.37 -5.68,-0.8 -8.68,-1.29 -3.41,-0.44 -7.47,0 -10.13,-2.59 -0.49,-1.79 -2.01,-0.99 -0.74,-2.9 -1.54,-1.34 -4.15,1.63 -6.36,0.74 -2.58,-0.56 -3.71,1.14 -4.67,3.02 -0.77,-1.61 -4.07,-0.58 -3.15,-2.45 -2.02,-1.72 -4.43,3.34 -5.34,-0.45 -2.71,0.05 -3.32,-2.5 -1.76,-4.48 -0.11,-1.92 0.65,-1.26 2.03,-1.24 0.77,2.34 2.91,4.54 4.57,1.3 -0.46,-2.13 1.09,-1.56 2.51,-1.62 1.01,3.44 4.52,1.32 6.34,0.3 1.07,-2.1 5.55,-0.39 5.96,-2.32 1.02,0.88 3.01,0.37 3.69,0.59 0.18,3.89 5.07,0.73 2.69,-1.53 -0.2,-1.43 -1.39,-3.39 -2.11,-5.03 1.93,-1.47 5.36,-2.58 5.54,-5.05 1.88,0.9 2.55,-1.98 3.13,-1.73 2,1.9 4.33,0.91 6.33,0.45 0.7,-1.97 2.92,-2.39 2.31,-5.03 1.96,0.92 4.91,0.17 6.97,1.75 1.9,2.39 4.37,-0.77 6.11,0.38 1.43,-0.03 2.77,1.31 1.21,2.94 -0.45,2.79 3.86,4.35 2.35,7.1 1.97,3.48 -4.51,0.08 -4.56,2.79 1.63,1.11 3.27,1.96 0.42,2.95 -0.98,1.81 1.97,4.01 -0.88,5.49 -1.01,1.14 -3.1,1.64 -2.24,3.63 -2.75,-0.79 -4.87,2.27 -7.7,0.89 -1.89,0.31 -2.39,2.61 -3.87,3.38z","name":"Austria"},"cz":{"path":"m335.18,355.05c-3.65,-0.41 -4.96,-4.57 -8.41,-5.66 -1.31,-1.75 -2.19,-2.91 -4.32,-3.66 -1.8,-1.56 -2.64,-3.53 -1.6,-5.57 -0.16,-1.57 -4.02,-3.53 -3.2,-4.17 1.42,3.2 2.44,-2.24 4.26,-2.25 1.35,1.3 3.09,-0.63 3.77,-1.12 1.58,-1.86 4.18,-2.74 6.59,-3.91 1.63,-0.69 3.11,-2.35 4.59,-0.56 2.65,1.13 2.61,-4.69 4.17,-1.06 1.38,1.66 3.64,0.69 5.11,2.36 0.67,1.75 5.33,-1.17 2.84,1.24 -1.67,2.06 2.09,2.81 2.61,4.74 2.09,1.86 2.12,-0.93 3.96,-1.42 0.43,-1.39 -1.9,-2.7 0.65,-1.55 1.23,1.3 3.29,0.96 4.4,0.53 -3.27,0.95 2.17,5.16 3.09,2.65 2.93,0.44 4.53,2.63 6.07,4.63 -2.15,1.71 -4.92,3.04 -5,6.15 -1.22,2.56 -3.35,3.75 -6.24,3.67 -1.85,1 -3.16,2.67 -5.05,0.79 -2.11,1.83 -4.69,0.96 -6.9,-0.42 -1.92,-1.1 -4.07,-0.45 -5.85,-0.93 -0.34,2.31 -2.03,3.48 -2.87,5.34 -1.07,-1.47 -1.28,0.34 -2.66,0.17z m-0.68,-28.45c-2.43,-2.03 2.32,0.24 0,0z","name":"Czech Republic"},"sk":{"path":"m364.44,362.94c-2.39,-2.37 -6.56,-2.63 -7.73,-6.02 -0.46,-2.43 0.4,-6.56 3.64,-6.16 3.23,0.29 4.91,-3 5.9,-5.48 0.17,-1.96 3.95,-5.08 5.19,-3.02 2.43,1.82 3.49,-4.97 4.66,-0.89 1.56,0.35 1.91,0.85 1.91,2.52 2.64,1.02 3.89,-1.84 5.57,-3.22 1.58,-0.07 4.26,1.88 5.1,-0.34 0.99,-1.59 4.74,-1.57 6.47,-0.13 1.28,2.35 6.24,0.73 4.22,4.32 -1.5,2.17 -0.53,7.67 -4.43,6.22 -0.53,-3.18 -3.88,-1.31 -5.83,-0.46 -2.77,-2.02 -4.98,0.68 -5.07,3.51 -1.08,0.67 -2.09,-0.14 -2.29,1.79 -1.29,1.17 -3.96,-2.16 -4.46,1.1 -0.72,2.43 -5.78,-0.07 -5.66,3.66 1.11,2.54 -4.04,1.94 -5.84,2.51 -0.44,0.04 -0.88,0.07 -1.32,0.1z","name":"Slovakia"},"hu":{"path":"m369.77,387.01c-2.75,-0.58 -5.39,-1.37 -7.78,-2.73 -2.27,-2.63 -5.77,-3.91 -7.5,-7.04 -1.21,-1.85 -2.06,-2.65 0.1,-3.74 1.43,-1.97 -1.64,-4.55 1.32,-5.48 2.04,-1.7 -3.3,-3.48 -0.09,-2.71 2.81,1.04 3.86,-1.91 3.11,-3.93 1.93,-1.05 3.43,2.43 5.44,2.58 3.24,-0.18 6.53,-0.68 9.48,-2.09 -2.94,-1.84 0.68,-3.88 2.85,-2.99 1.75,-0.27 1.26,-4.31 3.33,-2 2.26,0.8 3.01,-1.99 4.8,-2.5 0.41,-2.48 1.52,-4.92 4.25,-3.08 1.93,-0.18 4.28,-2.95 5.05,0.14 2.1,1.7 4.8,-1.81 6.38,0.84 2.12,-0.07 1.45,3.23 3.34,1.35 3.46,3.21 -4.18,3.49 -4.55,6.38 0.35,2.87 -2.65,4.72 -2.5,7.52 0.37,3.17 -2.46,5.43 -2.51,8.54 0.01,3.02 -4.16,0.17 -4.1,3.12 -3.14,1.57 -7.09,0.21 -9.73,1.82 -1.24,2.36 -3.12,1.16 -4.53,3 -2.57,0.36 -3.31,3.42 -6.16,3.01z","name":"Hungary"},"lt":{"path":"m397.76,280.99c-1.28,-1.32 -1.63,-4.58 -4.11,-3.7 -1.13,-2.07 -4.01,-0.28 -3.26,-3.14 1.62,-3.48 -2.4,-7.19 -5.64,-5.13 -2.28,0.26 -5.13,-1.48 -6.05,-2.17 -0.51,-2.23 -1.53,-3.51 -2.2,-5.4 -1.37,-2.68 1.24,-5.63 3.5,-7 1.88,-1.44 4.85,-0.65 6.6,-1.37 0.56,-1.26 2.33,2.09 2.82,-0.31 2.06,-0.86 4.97,0.1 6.62,-0.3 1.76,-0.28 3.35,-0.61 3.78,-2.83 1.19,2.4 3.3,3.12 5.7,2.26 2.79,0.52 4.16,3.86 7.04,4.08 1.64,1.42 -0.82,5.15 2.39,4.69 0.41,1.84 -3.75,0.79 -2.82,3.52 -2.05,1.6 -2.93,3.79 -1.88,6.23 -0.12,2.13 -0.68,3.69 -2.75,4.26 -0.43,1.13 -0.04,1.82 -1.97,2.11 -0.51,1.51 -1.38,2.09 -2.67,3.35 -1.72,-1.32 -3.41,0.53 -5.09,0.87z m13.27,-5.67c-0.11,-1.17 -1.77,-2.09 0.31,-1.22 0.43,0.34 0.36,1.19 -0.31,1.22z","name":"Lithuania"},"lv":{"path":"m375.49,257.31c-1.25,-2.79 -1.57,-6.54 -0.19,-9.24 2.63,-2.07 -0.8,-6.67 2.34,-8.6 1.69,0.07 4.11,-4.27 4.4,-1.32 2.44,1.48 4.79,3.19 5.76,5.78 2.55,1.96 6.17,0.07 7.13,-2.71 1.39,-2.75 -1.14,-5.3 -1.86,-7.82 1.34,-1.86 3.66,-3.57 5.64,-3.47 0.08,-0.9 1.63,1.08 2.69,0.67 1.72,0.06 3.13,2.25 4.97,3.22 2.21,0.36 3.53,-2.11 5.72,-1.12 1.76,-0.72 2.78,1.38 4.4,2.33 -0.55,1.5 -1.61,1.77 0.06,2.4 -0.17,1.1 -0.46,3.72 1.44,2.57 1.53,2.66 6.04,5.32 2.65,8.5 -1.42,1.56 -0.49,4.51 -3.48,3.69 -2.28,0.64 -3.94,4.9 -6.51,1.93 -2.03,-2.26 -5.06,-3.95 -7.91,-2.78 -1.1,-1.49 -3.6,-4.26 -4.46,-0.94 -1.47,1.77 -5.35,0.57 -7.87,1.17 -1.87,0.26 -2.16,0.89 -3.44,-0.06 -2.37,1.98 -6.1,0.17 -8.37,2.54 -1.6,0.14 -2,4.17 -3.11,3.25z","name":"Latvia"},"md":{"path":"m454.92,374.42c-0.33,-2.09 -1.86,-4.78 -2.23,-7.4 0.38,-3.56 0.07,-7.47 -2.96,-9.91 -3.2,-3.43 -7.96,-5.44 -9.93,-9.93 -0.24,-2.34 -6.31,-3.34 -2.39,-4.03 2.67,0.33 3.73,-3.48 6.57,-2.14 1.32,0.97 1.83,2.54 3.78,1.18 -0.02,0.82 2.42,2.73 2.56,0.37 1.33,-1.44 3.96,3.6 4.43,1.55 1.2,-1.55 0.65,3.03 1.22,3.93 0.07,2.32 4.57,4.13 4.42,2.59 -0.43,1.81 0.64,4.31 3.01,4.64 2.61,-0.41 1.35,4.32 2.84,4.34 -0.24,1.12 -3.35,-2.1 -2.5,0.78 -1.04,0.18 -2.3,-2.64 -2.02,-0.03 -1.22,0.21 -2.31,-1.71 -3.62,0.36 -1.34,1.85 1.39,3.73 0.77,5.48 -0.5,2.25 -2.95,4.34 -2.23,7.32 -0.82,-0.46 -1.48,0.35 -1.72,0.91z","name":"Moldova"},"ro":{"path":"m414.71,404.53c-2.94,-0.37 2.3,-2.82 -0.89,-3.86 -1.36,-0.38 -6.12,-1.72 -3.63,-3.39 3.62,-1.4 -2.29,-3.42 -3.82,-3.63 -1.25,0.73 1.78,4.33 -1.06,3.46 -0.47,-2.42 -4.24,0.23 -4.49,-2.27 -1.54,0.07 -1.87,0.1 -0.31,-0.74 0.46,-1.41 -2.15,-1.17 -0.71,-2.27 0.07,-4.02 -6.25,-1.24 -6.86,-4.86 0.56,-2.93 -2.25,-4.23 -4.45,-5.46 -1.23,-1.35 3.36,-1.23 3.59,-2.71 4.37,0.45 2.54,-4.6 4.68,-6.55 1.28,-2.95 0.7,-6.3 2.76,-8.97 0.62,-2.75 1.58,-5.21 4.69,-5.79 2.24,-1.25 2.4,-5.8 5.34,-3.67 2.44,-0.6 4.8,0.38 7.17,-0.21 2.51,-1.94 3.7,1.15 5.91,1.18 2.03,-1.31 2.68,-4.39 5.67,-3.96 2.31,-0.28 4.86,-1.95 4.49,-4.32 1.75,-2.97 4.98,-1.01 6.29,1.29 1.93,4.74 7.06,6.72 10.28,10.39 2.93,2.37 2.34,6.09 2.36,9.35 0.53,2.52 1.69,4.86 1.92,7.13 1.82,1.67 4.12,3.74 6.83,2.36 1.37,-1.24 4.51,-5.35 6.51,-2.84 1.18,1.97 2.1,5.63 -1.2,6.33 -1.85,1.04 -1.42,-3.67 -3.88,-1.61 -1.51,1.92 1.84,2.51 -0.11,4.51 -0.61,2.57 2.04,-0.86 0.82,1.98 -2.28,2.63 -0.38,5.59 -0.04,8.5 -1.15,2.51 -5.2,-0 -6.02,-1.11 -1.09,1.46 -1.67,-0.92 -3.54,0.54 -1.82,0.49 -3.31,-1.46 -5.44,0.01 -3.08,1.35 -6.52,2.81 -8.17,5.95 -1.31,3.55 -4.97,3.29 -8.01,2.77 -2.75,-0.48 -4.92,1.71 -7.44,1.75 -2.74,-0.25 -5.83,-1.37 -8.31,0.42l-0.52,0.24 -0.43,0.06 0,0z","name":"Romania"},"bg":{"path":"m419.98,434.43c-0.77,-1.6 0.33,-5.03 -1.67,-6.74 -1.14,-2.34 -7.05,-2.04 -4.41,-5.19 -0.49,-1.45 -2.46,-4.37 -1,-5.23 2.16,0.54 4.75,-3.78 2.92,-5.59 -2.57,-1.55 -5.66,-2.78 -5.98,-6.24 -0.97,-2.47 2.74,-1.99 1.69,-4.32 2.08,-0.06 3.2,1.11 1.22,2.59 -0.15,3.28 3.83,0.6 5.65,0.71 2.58,-0.64 5.13,0.94 7.65,0.08 2.61,-1.18 5.46,-2.28 8.27,-1.01 3.32,0.37 5.6,-2.51 6.93,-5.13 2.16,-2.35 5.29,-3.61 8.27,-4.56 1.69,0.75 3.92,0.92 5.2,0.32 0.77,1.61 2.46,-1.39 3.17,1.07 1.58,2.18 6.09,-1.71 5.26,2.45 0.21,2.63 -4.48,0.38 -4.02,3.94 -1.88,1.85 1.39,5.32 -0.17,7.14 -1.24,1.25 -1.7,3.03 -2.93,4.26 0.82,1.66 4.27,-0.37 3.64,2.02 1.44,0.86 3.71,1.89 1.23,2.18 -1.9,3.08 -4.18,-1.08 -6.49,0.5 -1.52,1.95 -4.37,1.58 -4.82,4.55 -1.37,1.04 -4.43,1.49 -2.91,4.13 3.08,3.26 -3.78,2.7 -5.13,4.68 -1.95,0.62 -4.22,-2.41 -5.93,-0.29 -2.04,-2.63 -5.18,-1.43 -7.46,0.15 -2.06,2.52 -5.54,1.17 -7.76,3.47l-0.43,0.06 0,0z","name":"Bulgaria"},"al":{"path":"m396.5,458.88c-2.16,0.08 -0.81,-2.55 -2.74,-3.41 -0.91,-2.13 -5.81,-2.06 -5.48,-3.81 2.36,-1.04 -1.62,-3.19 -0.48,-4.99 0.36,-1.26 2.66,-2.2 0.57,-3.3 1.39,-2.49 -3.57,-5.96 0.77,-6.52 2.37,-0.03 -1.92,-0.89 -0.55,-2.51 -0.14,-2.15 -3.24,-0.23 -2.21,-2.9 -1.48,-2.28 0.07,-4.41 1.36,-6.71 1.01,3.42 4.23,-2.13 4.66,1.78 1.21,1.69 4.6,1.07 3.88,4.25 -0.33,2.87 -0.02,5.6 0.51,8.19 0.21,1.77 2.38,5.51 4.15,4.74 1.69,-0.32 2.5,4.45 0.05,5.02 -0.86,1.75 -0.27,5.37 -3.24,5.56 -2.01,1.26 1.3,2.75 -0.81,3.98l-0.23,0.5 -0.19,0.12 0,0z","name":"Albania"},"ee":{"path":"m378.18,234.33c-0.29,-1.42 0.77,-0.85 0,0z m29.34,-1.46c-2.55,-0.18 -3.15,-3.15 -5.39,-3.23 -0.21,-1.76 -1.21,1.44 -2.27,-0.65 -2.12,-1.63 -4.52,1.21 -6.27,2.48 -1.26,-0.67 1.67,-5.98 -1.81,-5.74 -1.1,1.92 -1.82,2.36 -3.83,1.3 -0.08,-2.54 -3.43,-2.95 -2.01,-5.67 0.96,-2.03 -3.8,-2.6 -0.62,-3.95 1.35,-0.61 4.23,-0.97 2.3,-2.67 2.82,-0.9 4.5,-2.4 7.47,-2.41 1.66,-0.56 1.5,-2.75 3.42,-1.67 0.91,-1.72 4.64,0.07 6.63,-0.66 2.13,-0.1 4.26,0.22 6.03,-1.29 -1.43,2.67 -1.02,5.84 -2.24,8.62 2.11,2.2 1.2,5.64 3.15,7.83 0.24,0.52 1.89,2.24 1.35,2.38 -0.73,0.83 -0.81,2.27 -1.35,2.68 1.66,2.85 -2.28,0.25 -2.89,1.26 -0.29,0.68 -0.83,1.4 -1.65,1.38z m-28.89,-1.28c-1.29,-0.43 -2.59,-1.4 -0.92,-2.29 -0.22,-0.67 0.59,-1.5 0.99,-0.78 -0.53,-2.4 4.69,-3.37 4.19,-1.27 0.07,2.48 -3,2.5 -4.26,4.33z m1.02,-7.14c-0.54,-0.34 -0.96,-2.14 -1.01,-2.27 0.8,-1.29 0.79,-1.32 2,-0.55 1.89,-0.4 1.35,1.06 -0.17,0.69 0.83,0.84 0.55,2.1 -0.81,2.14z","name":"Estonia"},"lb":{"path":"m557.2,501.39c0.58,-2.8 0.32,-5.88 1.17,-8.53 -0.92,-2.02 1.77,-3.87 0.09,-5.88 -0.28,-2.6 2.65,-3.83 2.23,-6.01 1.03,-0.93 3.35,-2.1 2.42,0.09 1.64,0.57 3.96,0.89 3.49,3.25 -1.11,1.34 -2.61,3.51 -1.84,4.51 -2.48,0.69 -2.89,3.8 -1.53,5.08 -0.04,2.15 -2.43,3.34 -3.12,4.26 0.57,1.87 -1.28,3.1 -2.91,3.25z","name":"Lebanon"},"ad":{"path":"m225.99,427.08c-4.4,2.06 -0.81,-5.33 0.49,-0.98l-0.2,0.53 -0.29,0.45z","name":"Andorra"},"sm":{"path":"m321.66,413.68c0.71,-2.83 1.59,1.21 0,0z","name":"San Marino"},"mc":{"path":"m273.92,416.64c-2.8,-1.65 2.23,-1.64 0.39,-0.13l-0.39,0.13 0,0z","name":"Monaco"},"lu":{"path":"m268.7,344.38c-1.34,-0.37 0.48,-2.79 -0.9,-3.99 -1.47,-1.94 2.76,-5.38 1.98,-1.49 0.37,1.78 4.79,2.33 1.84,4.09 -0.47,1.66 -1.49,1.22 -2.93,1.39z","name":"Luxembourg"},"fr":{"path":"m292.72,444.55c-0.12,-2 -3.86,-0.94 -2.75,-2.99 -2.34,-0.62 -0.11,-2.51 0.75,-3.57 0.35,-0.55 -3.76,1.07 -1.24,-0.63 0.32,-1.34 -2.6,-2.05 -0.51,-3.01 -0.25,-1.14 -1.13,-1.51 -0.02,-1.71 -0.89,-2.66 3.14,-1.71 3.48,-3.51 1.94,0.96 2.98,-0.2 2.33,-2.11 1.79,-2.18 -0.99,3.51 1.02,4.43 1.2,3.29 -2.09,6.35 -1.33,9.73 -0.95,0.89 -1.15,2.64 -1.75,3.36z m-58.87,-15.16c-2.27,-2.01 -5.59,-0.28 -7.2,-2.87 1.48,-2.11 -2.14,-2.13 -2.92,-2.19 -1.78,-1.34 -3.82,-2.36 -5.67,-3.53 -1.54,0.58 -1.53,2.27 -3.51,1.46 -1.54,0.07 -2.66,-0.59 -3.93,-0.35 -0.8,-2.33 -2.93,-1.69 -4.53,-2.09 -1.06,-2 -2.81,-3.32 -5.06,-3.18 -1.57,-1.15 -1.33,-1.7 -1.45,-3.5 -1.23,-0.24 -3.44,-0.96 -1.02,-1.55 3.04,-3.75 2.96,-8.84 4.5,-13.21 0.85,-1.4 2.99,0.68 2.08,-1.85 -1.2,-1.06 -2.14,-0.84 -1.15,-2.81 1.1,-1.59 0.63,-5.99 2.35,-6.1 1.89,1.55 0.82,3.87 1.88,5.79 -0.05,2.01 2.7,3.12 1.93,0.38 -2.25,-2.11 -0.08,-5.11 -2.23,-7.23 -1.52,-1.07 -0.74,-1.21 -0.52,-2.39 -2.12,-1.87 0.87,-2.79 -0.3,-5.08 -0.91,-0.78 2.06,-4.15 0.31,-2.92 -1.7,1.58 -2.8,-0.99 -4.34,-1.54 -1.66,-0.48 -1.34,-4.04 -3.07,-5.27 1.45,-1.37 2.03,-3.5 -0.17,-4.21 -1.28,-1.38 -1.85,-1.7 -0.64,-3.42 1.28,-3.05 -5.85,-0.88 -2.14,-2.3 -0.4,-2.26 -4.49,0.28 -3.4,-2.31 -0.36,-2.67 -3.56,0.62 -4,-1.74 -2.28,-0.09 -2.42,-4.2 -4.81,-1.84 -1.78,1.57 -0.33,-2.39 -2.37,-2.56 1.59,0.62 3.87,-0.51 1.92,-2.13 1.84,1.1 2.88,-0.7 0.65,-1.01 0.13,0.05 1.59,-2.28 -0.46,-1.5 -1.34,1.45 -4.19,-0.07 -1.73,-1.25 1.3,-0.76 2.79,-0.81 2.95,-0 1.4,-0.85 2.87,-0.97 3.66,0.09 0.65,-1.02 3.21,1.35 3.19,-1.26 2.43,-1.62 2.22,2.03 2.47,2.06 1.69,-2.75 1.86,2.19 3.17,3.11 1.26,-0.74 3.83,-3.16 3.73,-0.14 1.62,2.63 2.82,-1.65 4.78,0.11 0.83,-0.47 4.32,1.06 3.36,-0.07 -1.65,-1.65 -2.42,-4.02 -1.35,-6.19 0.76,-2.4 -2.42,-4.6 -1.19,-7.04 1.21,1.81 5.2,-0.98 3.31,2.03 -0.19,2.43 1.93,3.76 3.68,2.84 2.59,0.56 5.12,3.56 7.68,1.11 2.16,-0.17 1.32,-1.39 0.53,-2.64 1.54,-3 5.41,-2.03 8.05,-3.16 1.81,-0.67 4.58,-1.88 5.31,-3.4 -1.75,-1.03 0.04,-4.18 -0.3,-6.15 0.44,-3.1 4.2,-2.36 6.44,-2.8 0.98,0.77 1.49,6.24 4.58,4.17 1.46,-0.35 0.7,4.82 3.67,3.62 -0.14,3.07 3.12,1.53 4.18,2.82 -0.64,1.44 -0.56,1.83 -0.25,2.78 -0.88,2.67 3.93,2.4 4.83,0.49 0.88,1.69 -1.1,3.55 1.66,3.61 2.55,0.29 2.49,4.49 5.21,3.37 2.65,1.52 6.43,-0.33 7.5,3.53 0.45,0.9 2.96,3.41 2.01,0.96 0.54,-1.16 0.79,1.42 0.5,1.49 1.47,-0.3 3.92,-1.81 4.53,0.32 1.92,0.28 7.08,0.84 3.22,2.94 -2.39,2.02 -1.66,5.55 -3.51,7.88 -0.4,2.45 -0.29,5.21 -1.25,7.67 -1.85,0.33 -4.65,-1.22 -4.94,2.33 0.2,1.24 -1.59,3.49 -3.64,4.12 -0.97,0.48 0.4,3.01 -1.75,3.44 -3.21,1.4 -0.53,4.69 -2.87,6.5 1.14,2.08 4.46,-0.29 3.63,-2.44 2.64,-1.79 4.27,0.65 3.32,3.02 0.97,1.33 2.7,2.42 0.16,3.24 -1.7,2.56 4.01,4.8 1.9,7.11 -0.78,1.84 -6.17,0.54 -3.47,3.57 1.68,1.38 4.39,3.16 1.43,4.85 -1.24,3.13 2.12,7 5.6,6.15 2.64,-0.69 -0.62,4.28 -2,4.64 -1.17,-0.72 -4.03,-3.03 -4.38,0.05 0.55,1.28 1.71,2.84 -0.72,3.26 -2.25,0.54 -0.87,3.61 -3.15,2.9 -1.62,1.27 -2.66,0.82 -4.12,0.04 -1.35,1.82 -1.33,-1.1 -3.38,-0.87 -2.84,0.75 -0.64,-3.44 -1.53,-2.84 -0.63,0.89 -3.09,1.3 -1.09,0.56 1.49,-2.74 -3.49,-2.8 -2.54,-0.31 -2.24,0.5 -1.46,-2.79 -1.57,-3.36 -1.08,1.05 -1.96,2.65 -0.52,3.91 -1.04,-0.28 -1.31,-2.83 -3.36,-2.08 -2.5,-1.7 -5.52,-1.71 -6.96,1.2 -2.68,0.79 -5.03,2.02 -5.69,4.77 0.13,1.89 -0.47,3.75 0.65,5.49 -1.42,-0.84 -3.32,-0.38 -4.33,0.88z","name":"France"},"li":{"path":"m296.51,373.48c1.45,1.4 -0.83,3.11 -0.11,0.58 0.04,-0.19 0.08,-0.38 0.11,-0.58z","name":"Liechtenstein"},"nl":{"path":"m269.04,328.72c-2.4,0.87 -0.84,-4.47 0.3,-2.01 0.8,0.23 0,1.75 -0.3,2.01z m-0.07,-3.78c0.6,-3.32 -5.02,-1.6 -5.27,-4.51 -0.12,-2.74 -3.14,1.24 -2.06,-1.29 -0.99,-0.79 -2.22,1.2 -3.22,-0.45 -0.9,0.27 -1.14,2.68 -1.08,0.81 0.68,-2.17 -1.32,-2.87 -3.53,-3.17 2.34,0.11 2.58,-2.07 3,-3.35 2.89,-2.17 4.59,-5.57 4.61,-9.18 -0.19,-3.29 4.06,-0.89 5.3,-3.43 1.14,-2.76 4.56,-2.87 7.04,-3.65 2.21,-0.91 4.28,0.51 5.07,2.25 2.56,1.19 -1.21,4.26 -0.45,6.54 -1.09,0.31 -2.87,-0.17 -2.83,1.81 -1.46,0.58 -1.58,0.91 0.09,0.93 3.35,-0.05 2.57,4.59 -0.38,4.58 -2.35,0.19 2.62,1.25 -0.12,2.19 -2.05,1.07 -3.43,-1.35 -5.33,0.59 -1.38,2.19 2.97,4.39 0.94,6.8 -0.8,0.77 -1.72,1.2 -0.27,1.66 -0.44,0.36 -0.82,1.02 -1.51,0.87z m-14.99,-3c-0.33,-1.2 -5.07,-0.99 -2.8,-1.87 1.14,1.13 2.85,1.22 3.93,0.81 -0.06,0.56 -0.57,1.04 -1.13,1.06z m0.03,-2.7c-1.37,-0.05 -4.02,-1.94 -1,-1.43 0.49,-0.33 2.23,1.73 1,1.43z","name":"Netherlands"},"ba":{"path":"m376.75,425.9c-1.98,-1.6 -4.83,-1.93 -6.41,-4.05 -1.67,0.65 -0.52,0.38 -0.54,-0.48 -1.09,-2.31 -4.84,-2.74 -4.68,-5.7 -3.06,-0.33 -4.09,-3.71 -6.36,-5.29 -1.63,-1.9 -4.06,-2.19 -3.82,-4.87 -1.04,-2.44 -3.06,-3.46 -4.21,-5.63 -0.7,-2.04 0.84,-4.87 2.73,-2.36 1.15,1.84 2.68,1.49 3.04,-0.59 0.75,-2.51 2.6,0.54 3.87,-1.57 1.61,1.11 3.76,0.32 5.58,0.98 1.67,0.69 2.8,0.63 3.98,-0.64 1.28,0.32 2.43,1.79 1.94,-0.33 2.34,0.41 3.8,0.76 5.26,2.77 1.51,0.59 4.58,-2.46 3.33,0.9 -1.48,2.62 -1.55,6.27 2.2,6.4 -0.16,1.48 3,1.5 0.7,2.04 -2.41,-1.63 -1.77,2 -0.04,2.77 1.22,1.2 1.32,2.1 -0.54,1.97 -0.8,1.43 -2.82,1.15 -3.55,0.9 0.15,1.26 1.77,2.85 -0.32,2.67 -1.22,1.98 -1.74,4.24 -3.03,5.92 0.2,1.48 1.25,2.79 0.88,4.2z","name":"Bosnia and Herzegovina"},"si":{"path":"m332.96,393.93c-2.25,0.07 3.69,-1.78 0.33,-3.25 -2.05,-0.05 -1.39,-3.19 -2.18,-3.5 2.21,-1.77 -0.2,-2.6 -1.36,-3.11 1.58,-3.35 4.85,-1.64 7.7,-1.58 3.3,1.9 3.73,-4.65 7.02,-2.86 2.43,0.1 4.45,-1.78 6.8,-1.33 -0.07,-1.25 0.26,-3.28 1.79,-1.82 0.58,1.34 2.29,2.96 -0.11,2.97 0.07,3.17 -6.44,2.43 -4.97,6.04 0.89,1.87 0.62,3.86 -1.85,3.13 -2.37,0.85 1.33,6.35 -2.15,4.17 -1.76,0.02 -2.78,0.57 -3.81,-1.48 -1.83,-1 -1.59,2.92 -3.88,1.76 -1.41,-0.46 -2.2,0.65 -3.34,0.85z","name":"Slovenia"},"mk":{"path":"m403.18,443.19c-1.28,-0.84 -1.77,-0.72 -3.14,-0.4 -2.27,-2.33 -2.73,-5.58 -2.85,-8.64 -1.26,-2.44 2.39,-0.6 1.33,-3.13 0.23,-2.42 3.43,-3.85 5.06,-1.8 1.38,1.18 -1.35,-3.28 1.33,-2.73 2.83,0.6 4.67,-2.89 7.49,-1.79 1.51,2.18 4.77,1.95 5.79,4.72 1.29,2.63 0.37,4.95 -1.12,7.01 -1.05,2.69 -5.33,0.11 -7.05,2.7 -0.97,2.88 -4.09,3.39 -6.84,4.04z","name":"Macedonia"},"hr":{"path":"m375.93,426.49c-1.17,-0.64 -1.03,-0.77 0,0z m-5.08,-2.9c-0.73,0.27 -1.25,-2.08 0,0z m-2.28,-1.81c-3.23,-1.04 -5.06,-4.7 -8.53,-5.08 -1.74,-1.23 -4.13,-1.36 -6.19,-0.38 -0.54,-3.7 -5.51,-3.9 -7.37,-6.92 -1.68,-2.86 2.16,-0.38 2.91,-1.43 -1.18,-2.05 -5.06,-2.05 -5.62,-5.05 0.07,-2.45 -0.12,-5.23 -2.77,-6.41 -1.46,-3.02 -5.35,-1.33 -4.75,1.8 -0.1,1.22 -1.81,1.15 -1.78,3.18 -0.42,-0.02 -2.43,-3.25 -2.8,-4.77 0.5,-1.41 -1.33,-2.59 0.97,-1.85 1.93,-0.05 3.32,-1.26 5.49,-0.87 1.75,-0.28 1.19,-2.99 2.55,-0.54 1.83,1.65 2.98,0.1 5.14,0.7 1.63,-0.59 0.6,-2.35 1.05,-3.41 -2.13,-1.84 3.84,-0.57 2.93,-3.42 -1.1,-1.62 -1.88,-3.53 0.82,-4.04 1.16,-1.26 3.54,-0.9 3.14,-3.3 3.59,0.79 6.21,3.61 8.62,6.19 2.91,-0.18 5.33,2.55 8.31,1.69 2.32,0.95 5.06,-5.2 5.33,-0.4 0.15,1.9 1.2,2.64 1.4,4.46 1.55,0.76 2.24,0.37 1.04,2.01 -0.17,1.69 1.08,1.86 -0.44,2.99 -1.42,0.96 -2.53,-3.66 -4.34,-2.06 -2.98,-1.4 -5.14,1.63 -8.13,0.38 -2.22,0.17 -4.52,-1.28 -6.44,-0.34 -1.8,-0.84 -3.54,0.72 -3.99,2.64 -1.51,-1.59 -4.97,-3.78 -5.35,0.02 -1.16,3.92 2.99,5.58 4.38,8.58 -0.13,1.41 -1.05,2.05 0.83,2.59 2.9,1.5 4.8,4.21 6.98,6.53 2.65,1.59 3.98,4.49 6.78,6.28l-0.16,0.23 0,0z","name":"Croatia"},"dk":{"path":"m311.37,281.37c-1.81,-0.13 -3.63,-2.95 -0.99,-2.75 0.71,0.89 2.21,0.72 1.2,1.27 0.93,0.68 0.95,1.07 -0.21,1.48z m2.12,-1.04c1.35,-0.18 -0.34,1.13 0,0z m0.84,-0.24c-0.07,-1 -2.35,-2.59 0.16,-1.62 2.08,0.28 -0.51,1.71 -0.16,1.62z m-17.99,-0.84c-2.31,-0.88 -6.15,-0.22 -4.5,-3.71 0.81,-2.84 -1.69,-4.3 -3.84,-4.7 -1.19,-2.12 0.77,-2.92 1.79,-2.7 1.1,-1.9 -0.71,-4.04 -1.69,-4.68 0.35,-1.37 0.2,-5.41 0.68,-4.97 1.59,3.78 6.34,-5.25 4.96,-0.56 0.24,2.86 4.45,-0.07 2.01,-1.61 0.04,-2.03 -0.06,-3.57 2.27,-2.05 0.18,-1.79 3.93,-0.45 2.6,-2.4 -2.36,-1.07 -4.97,1.4 -7.44,0.51 -0.9,0.41 -2.06,0.6 -1.03,-0.46 2.89,0.74 6.43,-0.56 7.07,-3.76 0.42,-1.7 4.2,-3.59 3.75,-0.9 2.01,1.66 -0.21,4.73 -1.55,6.01 0.4,0.87 0.32,2.52 0.39,3.1 -1.16,1.34 2.36,4.31 4.12,3.09 1.32,1.67 -1.85,5.56 -2.69,2.65 -3.21,0.21 -0.77,4.74 -2.69,6.35 -0.74,1.02 -5.24,-0.82 -2.77,1.37 1.61,1.85 3.89,1.32 5.37,0.39 1.04,1.32 2.66,0.54 1.88,1.61 2.2,1.44 0.71,6.32 -1.89,3.8 -0.99,-0.9 -2.97,-2.42 -3.55,-4.38 -0.8,-2.14 -4.39,1.02 -3.28,1.06 2.19,-0.86 -0.04,1.87 1.38,2.68 -1.87,1.01 -1.25,3.06 -0.58,3.35 -0.3,0.27 -0.55,0.59 -0.78,0.92z m18.96,-2.29c-1.92,-0.02 -1.04,-3.7 -3.92,-2.81 -3.51,-0.09 0.22,-3.64 -2.76,-5.02 -1.79,-1.21 3.2,0.15 3.13,-2.28 0.04,-2.46 4.91,0.23 1.92,1.9 1.06,2.45 3.33,-0.76 2,-2.36 -0.51,-1.34 -2.25,-2.02 0.21,-1.96 2.33,-0.37 1.21,1.23 1.29,2.13 2.22,2.03 -1.98,3.78 -1.88,4.86 2.05,0.87 2.04,2.76 -0.28,2.66 -0.97,0.83 0.11,2.08 0.29,2.88z m-25.23,-19.54c-1.89,-1.51 1.09,-5.6 1.21,-4.99 -1.52,1.21 -1.11,3.3 -1.21,4.99z","name":"Denmark"},"ru":{"path":"m558.98,364.3c-2.56,-0.91 -4.97,-2.14 -7.36,-3.43 -2.39,-1.15 -4.94,-2.06 -7.59,-2.35 -2.81,2.28 -5.5,-0.94 -8.06,-1.85 -1.23,0.3 0.78,2.15 -1.52,1.8 -2.42,-0.25 -3.69,-3.69 -6.4,-2.82 -1.31,0.16 -4.41,0.18 -1.55,-0.66 1.64,-0.7 0.81,-3.34 -0.75,-1.74 0.37,-1.63 2.93,0.94 3.87,-1 1.25,-0.31 2.74,-1.24 3.63,-1.06 1.16,-2.32 -3.44,-3.39 -1.08,-5.92 0.57,-0.81 -0.94,-4.08 0.12,-2.72 0.39,2.37 2.24,1.11 1.25,-0.78 -1.26,-3.41 3.86,0.53 3.04,-2.81 -1.97,-1.81 -4.99,-1.7 -7.55,-2.54 -2.06,-0.94 2.06,-1.24 1.86,-3.16 2.06,1.7 4.87,-1.76 1.32,-1.4 -0.21,-1.02 3.11,-2.69 3.56,-4.64 3.16,0.27 3.03,-5.1 -0.28,-4.48 -2.62,0.21 -2.08,3.91 -4.95,4.14 -2.31,1.85 -0.59,-0.97 -1.26,-1.15 -2.27,0.02 -1.28,-3.82 0.48,-4.34 1.4,-2.13 0.73,-5.08 4.3,-4.68 2.91,0.1 4.24,-2.66 2.99,-5.05 -0.44,-0.81 1.31,-4.54 -0.5,-3.12 -0.89,0.38 -1.08,-3.79 -3.06,-2.28 -2.61,-1.85 3.34,-2.5 1.03,-4.59 -1.03,0.14 -4.3,0.91 -2.02,-0.74 1.96,-2.14 1.02,-4.53 -0.68,-6.4 1.16,-2.59 -2.93,-0.35 -3.64,0.61 0.41,-2.95 -3.61,-0.32 -4.74,-2.01 -1.3,0.69 -2.17,2.73 -3.44,0.57 -1.62,0.46 -2.9,0.42 -4.52,-0.03 -1.18,0.97 0.35,3.57 -1.91,1.94 -2.66,-0.03 -3.84,-4.48 -6.19,-3.24 -2.12,0.99 -3.16,6.03 -6.01,3.79 -0.55,1.88 -3.23,-1.75 -4.12,0.93 -2.26,2.15 -4.17,-0.6 -4.14,-2.64 -1.31,-0.74 -1.67,-2.47 -1.76,-3.17 -1.84,0.68 -2.55,-1.54 -3.04,-1.81 -1.53,1.29 -5.9,2.64 -6.27,0.53 -0.46,-1.43 -3.35,-2.71 -0.58,-3.43 0.87,-2.91 -3.85,-2.55 -4.29,-5.27 -1.34,-1.28 -2.82,-2.7 -4.07,-0.62 -2.6,-1.29 -3.34,1.16 -4.86,2.57 -2.29,-0.64 -4.88,0.47 -3.99,3.28 -1.64,3.09 -5.33,-1.16 -5.28,-3.38 0.29,-1.54 -1.99,-0.85 -0.93,-2.73 -1.04,-1.23 -5.06,-2.53 -2.44,-4.58 2.85,1.31 6.86,-0.11 6.98,-3.34 2.36,-1.51 -0.16,-3.89 -1.6,-4.2 -0.58,-2.91 -4.71,-0.88 -5.61,-1.07 0.65,-2.69 -1.62,-3.41 -3.71,-3.4 -2.11,-1.16 -3.32,-2.8 -3.81,-4.83 -2.42,0.17 -3.41,-1.67 -2.18,-3.83 -0.02,-1.71 -2.9,-2.44 -1.99,-4.84 -0.01,-1.79 -0.45,-2.87 -2.15,-2.08 -2.12,-2.07 -5.85,-2.66 -7.51,0.31 -0.95,2.92 -2.17,-0.33 -1.92,-1.55 -1.94,-2.34 -4.43,2.65 -5.64,-0.22 -1.71,0.04 -3.09,1.26 -3.28,-1.31 -0.9,-2.65 -2.85,-5.01 -4.71,-6.53 -1.83,-1.02 1.04,-5.27 -2.45,-5.76 -1.67,-0.51 -0.04,-2.71 -2.19,-1.57 0.05,-1.42 0.26,-2.99 1.68,-3.72 -0.54,-0.99 -1.34,-2.16 -1.45,-2.96 -2.84,-0.69 -1.01,-4.26 -2.77,-5.86 -2.08,-2.24 0.85,-4.53 0.39,-6.92 -1.01,-2.41 3.22,-2.6 0.55,-4.16 -0.83,-1.3 -2.35,-4.31 0.18,-2.28 1.51,-0.56 0.02,-3.79 2.55,-2.16 2.03,-0.4 0.55,-4.34 3.6,-3.39 1.61,0.41 6.06,0.64 4.72,-1.87 -2.47,0.38 -3.46,-3.31 -5.66,-1.7 -1.73,1.59 -3.35,0.22 -4.28,-0.75 -2.83,1.04 -0.5,-5.97 -3.43,-3.33 -0.79,1.95 -3.72,3.09 -1.67,0.48 4.94,-7.07 7.08,-15.55 9.98,-23.55 0.44,-3.03 2.51,-7.51 -0.31,-9.8 -2.38,-1.89 -5.29,-2.93 -7.96,-4.32 -3.88,-1.06 2.38,-6.07 -1.12,-8.02 -2.45,-0.36 -4.96,-1.94 -3.33,-4.47 -1.48,-1.21 -6.02,-2.28 -3.05,-4.86 0.42,-0.7 -3.23,-0.64 -2.08,-2.79 0.39,-2.06 -0.85,-2.94 1.09,-3.89 -0.82,-2.4 -2.73,-4.51 -4.14,-6.68 -1.51,-2.32 -3.78,-4.06 -5.41,-6.21 -0.98,-3.34 2.21,-6.3 1.62,-9.59 -0.91,-2.31 -3.95,-2.73 -4.86,-5.04 -3.1,0.98 -6.11,-2.82 -4.58,-5.63 1.26,-2.13 -3.52,-2.39 -0.66,-3.49 1.51,-2.49 0.64,-5.59 3.12,-7.72 -0.6,-2.56 3.46,0.62 3.16,-2.41 -2.11,-2.17 1.85,-1.54 2.99,-1.35 2.03,1.63 4.11,1.29 6.52,0.08 0.37,0.23 -0.76,2.57 1.13,2.81 -1.22,0.77 -1.32,4.65 0.4,2.88 0.2,-1.73 1.36,-3.42 1.9,-5.04 3.21,0.08 6.07,-1.95 9.29,-1.34 2.75,0.76 5.58,1.26 8.28,2.2 2.14,0.82 4.03,2.32 6.18,3.01 2,-1.35 5.54,1.61 7.21,-0.07 2.23,0.7 3.31,3.46 5.54,1.69 1.16,1.01 0.65,2.43 2.18,2.82 1.01,2.1 3.8,2.21 3.29,5.21 -0.09,3.44 0.15,7.2 -2.11,10.07 -2.26,3.09 -6,5.79 -10.02,4.97 -2.84,-0.74 -5.34,0.99 -8.08,1.16 -2.01,0.97 -5.49,-2.15 -6.54,-0.13 -1.33,0.97 -2.24,-0.89 -2.89,-1.46 -1,2.57 -7.21,1.52 -6.06,-1.62 -0.53,-0.64 -4.07,0.19 -5.44,0.48 -1.33,1.22 -0,2.41 1.25,1.32 2.16,-0.38 0.62,2.19 3.06,2.74 1.23,1.53 6.57,0.25 5.42,2.51 -1.91,3.1 2.22,0.91 3.81,1.72 2.09,0.58 5.78,2.19 4.56,4.13 2.75,1.59 0.23,3.96 -0.48,5.25 2.3,-0.18 4.43,1.99 4.35,4.27 2,-0.84 0.78,1.8 1.68,2.47 0.1,3.23 4.49,3.53 6.69,2.22 2.28,0.22 3.06,3.83 6.02,2.68 3.14,0.7 6.51,-0.4 7.17,-3.81 0.24,-2.71 -4.02,-6.69 -5.49,-3.3 -2.65,0.34 -5.44,-2.93 -6.7,-4.13 2.45,-0.62 0.68,-2.65 0.87,-3.74 2.98,-0.53 5.18,2.7 8.25,1.24 2.42,-0.59 5.57,1.81 7.6,-0.26 0.47,-1.42 5.9,0.3 3.69,-2.76 -1.12,-2.61 -3.65,-4.39 -6.37,-5.3 -3.26,-1.55 -1.48,-4.68 -0.67,-7 0.13,-2.98 3,-4.72 3.48,-7.44 -0.29,-1.95 -0.01,-6.22 2.42,-3.58 1.94,-2.25 5.82,-1.29 7.83,0.68 1.2,2.1 3.32,0.53 1.22,-1.06 -2.48,-1.87 -1.81,-4.87 -2.24,-7.47 -1.88,-1.57 -2.53,-5.38 -5.87,-5.07 -3.66,0.72 -1.05,-5.18 -3.4,-6.67 -1.19,-0.92 0.46,-3.75 -1.48,-3.55 -1.01,-2.39 -5.64,-2.94 -6.17,-3.55 2.64,0.97 4.98,-0.76 6.95,-2.52 2.55,-2.21 4.69,1.32 7.17,1.82 2.66,0.14 2.98,2.58 0.58,3.55 -1.44,1.01 -3.37,2.5 -1.86,4.15 -2.05,2.82 1.45,5.04 4.18,4.46 2.24,0.66 3.9,4.74 5.89,0.83 -0.45,2.74 1.7,0.82 1.6,-0.76 0.67,-1.92 4.97,-2.44 2.12,-4.7 -0.88,-2.08 -0.93,-5.08 -2.83,-6.29 1.51,-0.41 1.74,-3.36 4.33,-3.14 0.74,-1.52 -4.26,-0.47 -1.65,-2.01 1.38,-2.03 1.95,-4.13 2.25,-6.48 -0.71,-3 2.32,-4.04 2.61,-6.78 0.79,-1.07 0.87,-3.3 2.02,-0.85 0.37,3.39 3.79,-1.54 1.28,-2.71 -2.87,-0.55 -1.44,-3.38 -0.47,-5.41 0.59,0.58 1.75,-1.54 1.49,0.66 0.07,2.26 4.9,2.03 2.07,4.51 -3.06,1.89 2.52,2.73 3.16,0.29 0.8,-0.58 2.28,-0.85 1.45,-2.12 2.18,1.11 3.08,-1.11 1.14,-2.24 -0.63,-3.15 1.27,-6.2 4.04,-7.12 3.15,-0.33 1.76,-4.5 2.46,-6.7 2.68,1.91 1.44,-1.23 0.17,-1.57 -0.24,-1.73 3.07,-1.64 3.49,-0.99 -0.52,3.68 4.93,5.45 5.98,1.6 -0.74,-2.19 -4.02,-2.52 -1.51,-4.94 1.37,-2.71 -0.97,-5.14 -3.64,-5.47 -2.06,-0.69 -6.98,-0.83 -4,-3.86 -2.84,-2.24 1.77,-2.66 3.14,-4.1 2.67,-3.27 6.84,-5.01 10.97,-5.41 2.08,0.66 3.04,-0.42 5.04,-0.78 3.26,-0.69 5.53,-2.7 8.88,-1.89 1.83,0.09 3.72,-0.92 5.18,-0.23 3.3,-0.51 -0.59,-3.78 0.31,-4.05 7.13,0.01 14.26,-0.01 21.38,0.01 2.09,0.14 -2,3.01 0.93,2.93 1.33,0.5 2.97,0.39 1.78,1.28 0.04,1.2 -0.09,5.95 -1.36,3.75 0.88,-1.97 -1.47,-3.03 -1.4,-0.65 -0.13,1.49 -3.77,0.21 -3.69,2.55 -3.37,1.5 0.23,4.73 2.72,4.05 3.82,-0.71 6.21,-3.84 8.09,-6.94 1.84,-0.32 4.98,-2.24 2.66,-4.31C557.34,3.94 555.66,1.55 558.62,2.18c40.17,0 80.35,0 120.52,0 0,32.42 0,64.83 0,97.25 -2.09,0.36 -2.95,2.3 -1.54,3.74 -2.44,-1.53 -2.16,1.82 -2.17,2.03 -1.83,-0.06 -0.41,-2.79 -2.86,-3.06 -0.55,-1.54 -1.56,-2.65 -3.54,-1.77 -1.52,-1.23 -4.42,-2.86 -6,-3.08 -2.3,1.54 0.4,6.71 -3.71,5.55 -1.63,0.21 -3.74,1.9 -3.4,2.86 -1.22,-0.25 -2.92,1.14 -1.43,2.07 -2.82,1.19 1.7,2.9 -0.94,4.55 -2.72,2.09 2.48,0.44 1.29,3.06 -2.53,0.4 -0.3,2.61 -2.09,4 -0.4,3.26 -2.41,5.93 -3.86,8.82 0.28,0.79 -3.1,0.12 -1.27,1.6 -1.02,2.01 -3.11,4.53 -0.2,6.39 -2.52,0.22 -3.43,3.38 -5,5.17 -0.91,1.5 1.12,2.54 -1.32,2.93 -1.23,2.37 -2.15,5.27 -3.97,7.32 1.46,1.7 -3.54,1.33 -2.2,4 0.89,0.84 -2.06,0.35 -2,1.51 -2.16,-0.19 -3.58,4.12 -1.57,4.8 2.75,-1.67 -0.46,5.07 2.92,2.57 1.47,-1.64 1.11,3.68 3.89,2.06 1.15,-1.3 4.64,-3.43 5.55,-1.97 -0.97,2.34 -5.83,2.91 -5.32,5.59 1.65,1.51 -1.67,5.32 2.05,4.87 0.58,1.25 3.67,-0.2 3.17,2.56 -0.46,2.07 -2.09,3.57 -1.96,5.92 -2.28,1.79 1.99,3.07 3.27,1.27 1.22,3.88 3.54,-2.53 5.73,-0.07 1.71,0.15 3.48,-3.04 4.82,-0.75 0.7,2.54 3.93,4.85 1.33,7.39 -0.96,2.05 -3.49,5.21 -5.83,2.98 -2.18,1.39 0.8,4.71 -0.35,6.74 -1.64,-3.35 -4.19,2.67 -7,1.13 -1.58,0.37 -1.77,-1.65 -2.62,-1.81 -0.7,0.72 -4.76,0.36 -3.34,1.66 -0.36,0.87 -3.77,2.22 -1.73,4.23 -0.31,2.89 -2.88,-1.51 -4.31,1.09 -1.46,1.61 -3.55,2.49 -3.46,4.75 -0.41,1.43 -0.54,3.48 -0.05,5.34 -0.27,1.74 -0.64,1.81 -2.46,1.7 -2.35,1.24 -5.67,-2 -7.94,0.36 -1.02,1.19 0.11,2.72 -2.11,2.54 -1.91,-2.74 -5.13,1.42 -6.94,-1.53 -3.68,-1.24 -4.83,6.16 -8.08,2.91 -0.68,-0.31 -3.05,-3.22 -2.23,-1.07 0.44,2 -3.21,4.32 -1.91,5.59 -1.58,-0.54 -1.24,3.52 -1.64,0.7 -1.39,-2.07 -3.9,0.94 -5.63,0.87 0.37,1.37 0.82,0.9 -0.34,1.77 -0.21,2.03 1.56,4.11 -0.43,6.09 -0.26,2.82 -3.85,3.15 -3.39,6.04 1.82,1.79 -0.1,4.43 -1.07,6.43 -3.76,0.87 1.99,2.12 2.03,4.1 0.89,1.78 3.76,2.19 1.71,4.57 -2.3,2.9 -5.15,-1.81 -7.83,-2.01 -3.78,-1.12 -4.32,3.77 -2.19,5.82 -2.31,2.78 -0.33,6.19 0.38,9.1 0.77,1.86 4.43,0.77 3.16,3.54 -0.62,2.49 -0.11,4.99 0.21,7.43 1.17,3.44 5.88,-1.22 6.9,2.2 0.63,0.39 -1.33,1.3 0.64,1.71 0.61,2 4.71,2.89 4.1,0.07 2.42,-0.19 4.16,-3.38 6.65,-1.26 2.61,1.3 4.67,3.68 7.51,4.49 2.44,-0.41 2.29,3.63 -0.15,2.17 -3.16,1.33 0.69,4.72 2.95,3.33 2.69,-1.74 4.67,2.16 2.98,3.28 -1.53,-1.48 -3.23,1.37 -1.51,2.46 -1.66,0.09 -1.17,4.59 -3.15,5.57 -2.16,-0.57 -0.01,3.21 -2.03,1.18 -1.51,-0.51 -1.63,0.74 -2.82,1.17 0.46,1.78 3.76,-0.82 2.44,1.78 0.45,1.46 -0.73,2.48 0.5,3.94 -0.91,1.42 1.06,4.29 -0.87,5.01 0.89,2.05 -1.39,4.46 -0.11,6.57 1.6,2.36 2.84,-1.08 4.63,0.84 2.19,0.61 6.36,2.5 5.42,5.48 1.51,1.9 3.6,2.8 3.89,5.79 1.08,1.98 3.28,1.24 4.3,3.24 2.25,0.68 4.45,1.39 6.37,2.79 1.16,1.48 3.78,2.23 4.69,2.86 -0.38,2.65 -2.37,5.25 -1.49,7.93 0.05,2.46 -6.1,4.34 -5.15,1.14 -2.52,-0.74 -5.24,-0.5 -7.55,-1.88 -1.49,0.54 -3.24,0.69 -4.5,0.55 -1.71,1.13 -6.19,1.11 -5.4,-1.84 -0.88,-3.94 -4.63,1.38 -6.95,-0.97 -1.81,-1.22 -2.73,1 -2.64,2.13 -3.4,-2.47 -4.1,3.12 -6.37,4.33 -1.56,1.14 -0.42,-3.07 -2.75,-1.69 -2.4,0.37 -5.28,1.01 -7,-0.66 -2.78,0.67 -5.63,0.98 -8.42,1.61 1.94,1.66 -2.76,2.56 -3.79,2.43 -2.67,-0.72 -5.06,0.99 -7.69,0.02 -2.34,1.37 -6.27,0.31 -6.05,4.11l-0.04,0.01 0,0z m57.81,-33.85c-0.89,-1.57 0.49,-2.17 0,0z m-241.23,-51.26c-1.5,-0.26 -4.88,0.4 -5.3,-0.46 2.59,-1.58 -0.9,-5.56 2.71,-5.44 2.09,-0.97 5.31,1.36 6.88,-1.15 -0.17,-1.75 -1.39,-4.59 1.04,-3 2.58,1.66 5.83,-0.05 8.09,1.03 2.4,1.17 -0.19,4.14 1.51,6.12 -0.91,2.05 -4.72,1.7 -6.85,2.38 -2.67,0.39 -5.38,0.53 -8.08,0.53z m245.17,-54.27c-0.96,-0.5 -1.79,-4.14 -0.7,-1.7 0.41,0.34 1.1,1.13 0.7,1.7z m15.47,-62.08c-0.5,-1.68 1.86,0.26 0,0z M392.43,81.96c-1.18,-1.24 -0.52,-3.74 1,-1.58 0.97,0.64 4.51,-0.85 3.11,1.22 -1.28,-0.1 -4.06,-2.2 -4.11,0.36z m69.72,-22.48c-3.13,-0.37 -5.18,-4.96 -3.51,-7.6 1.49,-0.95 5.9,-1.19 6.08,0.31 -0.75,2.23 0.93,5.01 -1.2,6.83 -0.37,0.32 -0.88,0.46 -1.36,0.46z m1.2,-32.66c0.64,-1.98 -0.94,-1.7 -1.81,-2.37 0.83,-0.97 3.57,-1.76 1.01,-2.23 -1.29,0.52 -2.78,0.7 -3.28,0.14 -1.2,0.89 -3.04,-4.18 -2.96,-0.9 1.94,3.97 -3.66,-2.01 -2.98,1.25 2.3,2.87 -2.86,2.37 -3.53,0.29 -1.84,-1.41 -2.9,-5.04 0.07,-4.98 -0.36,-1.21 -1.52,-2.86 -0.18,-4.45 -3.01,0.94 -0.61,-2.79 -2.49,-3.65 -1.26,2.21 -4.03,0.25 -1.58,-1.13 2.3,-1.91 -4.09,-1.91 -1.43,-4.6 0.66,-1.81 2.03,-2.29 3.79,-2.01 1.73,-0.33 3.25,0.66 4.85,0.17 2.53,-1.3 -3.03,3.08 0.48,2.2 3.11,-1.44 -1.22,5.41 2.65,3.83 2.34,0.52 1.33,4.72 3.21,4.64 2.81,0.65 4.59,3.49 7.55,3.98 2.95,1.5 6.52,1.02 9.42,1.43 -0.95,0.85 -5.31,2.46 -4.34,3.45 -1.86,0.24 -4.2,1.89 -2.01,3.36 -1.56,0.82 -3.63,-0.42 -4.9,1.06 -0.87,-0.61 -1.05,-0.3 -1.52,0.53z m23.35,-5.93c-1.68,-0.42 -4.33,-0.5 -2.76,-2.36 -1.89,0.07 -1.65,-3.14 0.36,-1.62 2.48,0.8 5.12,0.27 7.63,0.6 2.21,1.62 -2.46,4.83 -3.16,1.83 -0.45,0.12 -0.96,1.84 -2.07,1.55z","name":"Russian Federation"},"mt":{"path":"m343.65,509.08c-1.52,-0.23 -1.75,-0.24 0,0z m1.95,2.72c-1.32,-0.63 -1.5,-0.7 0,0z","name":"Malta"},"me":{"path":"m385.29,433.13c-1.98,-1.45 -3.12,-5.3 -6.16,-4.27 -0.68,-0.6 -0.46,-1.87 -1.44,-2.17 0.16,-1.66 0.06,-3.3 -0.89,-4.86 1.96,-1.05 1.28,-4.74 3.12,-5.09 1.81,3.01 2.14,-1.15 0.71,-2.43 2.24,-0.2 3.4,-2.11 5.57,-0.36 3.49,0.56 2.95,4.72 6.22,5.9 -2.5,0.45 -0.84,6.17 -3.72,4.67 0.19,-3.37 -2.81,0.5 -2.99,1.87 -0.8,1.83 -2.3,3.26 -0.46,4.87 0.08,0.47 0.4,1.59 0.03,1.87z","name":"Montenegro"},"rs":{"path":"m397.48,431.57c-0.16,-2.49 -1.05,-5.46 -3.99,-5.18 -0.83,-1.86 -3.16,-3.89 -0.74,-5.1 2.42,-2.35 -3,-3.15 -2.73,-5.8 -1.28,-2.34 -5.16,-1.7 -5.47,-5.07 -0.61,-1.48 -2.43,-2.36 0.08,-2.14 2.37,-1.69 -1.79,-3.25 -2.79,-4.49 -3.49,-0.35 0.76,-4.99 -0.07,-7.08 -1.54,-0.41 -2.38,-0.6 -2.22,-2.53 -0.29,-0.9 3.52,-0.03 1.84,-1.89 -1.99,-0.46 -4.18,-1.03 -2.61,-2.61 0.5,-1.92 -2.64,0.29 -1.69,-2.2 -0.12,-1.58 -1.93,-2.81 0.65,-3.27 2.64,-1.35 4.3,-3.64 7.52,-3.04 2.34,-0.11 4.56,2.67 6.11,3.82 1,0.92 0.22,4.94 3.24,4.94 1.65,0.3 5.5,0.5 3.47,2.78 1.27,1.27 0.97,1.07 -0.4,2.22 0.32,1.47 3.21,0.4 3.09,2.01 1.78,0.14 4.21,-0.13 4.93,1.74 2.85,0.45 1.17,-3.79 1.99,-3.56 1.66,0.7 3.37,1 1.04,1.99 -1.64,2.21 4.19,3.86 0.86,5.71 -2.2,2.75 0.34,6.72 2.98,8.19 2.92,0.51 3.82,2.98 1.52,5.06 -0.82,0.05 -2.7,-0.25 -2.65,1.85 -1.23,2.37 3.66,5.04 -0.48,5.54 -2.42,1.11 -4.61,2.18 -7.35,2.39 -1.32,2.74 -6.31,0.55 -6.16,5.74z","name":"Serbia"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/jqvmap/dist/maps/jquery.vmap.usa.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add USA Map Data Points */
jQuery.fn.vectorMap('addMap', 'usa_en', {"width":959,"height":593,"paths":{"hi":{"path":"m244.66,512.25c-2.48,3.8 2.23,4.04 4.74,5.38 3.06,0.16 3.51,-4.28 2.66,-6.56 -2.72,-0.77 -5.01,-0.19 -7.41,1.19z m-9.31,3.97c-4.02,5.11 3.64,0.48 0.63,-0.09l-0.5,0.07 -0.14,0.02z m39.69,7.97c-0.62,2.09 1.91,6.73 4.39,6.2 2.41,-1.46 3.73,1.73 6.48,0.56 1.23,-1.48 -3.77,-3.2 -3.7,-6.08 -0.95,-3.8 -3.28,-3.2 -5.96,-1.28 -0.41,0.2 -0.81,0.4 -1.22,0.6z m19.94,10.03c3.58,0.95 7.91,2.99 11.25,0.47 -1.05,-1.63 -5.06,-0.59 -7.1,-0.86 -1.44,0.01 -3.54,-1.63 -4.15,0.39z m12.13,4.38c2.33,2.45 3.64,6.83 7.24,7.4 2.36,-0.69 6.84,-0.66 7.32,-3.43 -2.09,-2.51 -5.77,-3.35 -8.88,-4.29 -2.53,-1.2 -4.11,-3.25 -5.68,0.33z m-7.06,1c-0.29,3.69 5.55,3.98 3.67,0.55 -0.27,-1.25 -3.83,-1.74 -3.67,-0.55z m23.66,14.69c0.27,2.45 3.18,3.93 0.47,6.15 -0.65,2.42 -5.54,2.87 -2.52,5.53 2.36,1.46 2.01,4.85 2.92,7.14 -0.72,2.69 -1.43,6.78 1.72,8.06 2.8,2.95 4.5,-1.93 6.19,-3.68 1.27,-1.69 3.85,-4.1 5.94,-2.59 3.04,-0.81 6.3,-2.42 7.78,-5.22 -2.79,-1.31 -4.88,-3.19 -5.57,-6.29 -2.4,-5.33 -8.95,-6.26 -13.58,-8.98 -1.29,-0.52 -2.26,-1.62 -3.34,-0.11z","name":"Hawaii"},"ak":{"path":"m107.84,436.56c-2.27,0.55 -4.87,0.32 -6.84,-0.34 -2.41,1.22 -5.63,4.03 -8.25,1.88 -3.1,0.93 -3.51,3.84 -5.22,5.97 -1.82,2.52 -4.21,3.65 -7.31,3.14 -2.5,-0.94 -5.49,-1.15 -7.5,0.98 2.03,4.34 6.39,8.13 5.82,13.23 -1.85,2.94 6.31,2.99 2.68,5.02 0.15,2.8 3.07,5.68 2.91,7.88 -2.35,2.21 -5.24,-0.38 -7.71,-1.06 -3.24,-0.64 -2.73,-3.35 -0.82,-5.22 -1.57,-1.51 -7.35,-1.81 -6.51,1.12 -2.01,0.04 -3.81,-1.66 -6.27,-0.77 -3.72,-0.44 -5.97,0.65 -2.94,4.05 3.68,1.45 1.06,4.72 1.17,7.57 0.76,2.63 3.66,4.89 6.67,4.17 3.2,-0.06 5.87,3.59 9.21,1.65 2.16,-1.3 5.33,-0.99 4.79,1.89 -2.53,2.07 -1.36,6.13 -2.78,8.75 -1.96,1.88 -4.53,1.59 -6.59,0.16 -1.52,1.37 -4.7,3.68 -6.28,2.22 0.72,-3.71 -4.77,-3.63 -5.51,-0.61 -1.21,3.97 -6.27,4.46 -8.31,7.63 -0.7,2.42 -1.55,6.7 1.74,6.3 1.26,1.11 -1.2,4.8 -2.77,5.52 1.62,2.19 2.65,4.59 2.72,7.34 1.71,1.55 6.35,1.98 7.5,-0.16 2.45,-0.95 1.79,4.1 2.08,5.97 2.47,2.95 -4.02,1.28 -1.61,4.56 -0.85,2.93 -1.76,5.02 2,2.72 2.76,-0.47 5.11,-0.69 5.66,2.09 2.59,-3.91 2.26,2.78 3.25,4.66 0.59,-0.75 1.3,-5.69 3.94,-3.06 -0.17,4.52 5.33,-0.45 5.78,-0.04 0.54,2.92 -1.63,4.24 -2.86,6.41 -1.51,2.24 -2.07,5.63 -4.21,7.17 -3.87,-0.42 -3.37,4.1 -5.5,5.02 -2.65,-0.72 -5.73,0.71 -8.44,1.41 -1.35,2.41 -3.61,4.2 -5.78,1.81 -2.56,0.05 -5.63,0.68 -7.63,2.33 -2.48,2.43 -6.32,3.11 -9.66,2.29 -2.78,-1.91 -7.11,3.41 -3.11,2.31 2.5,-1.91 4.66,0.64 7.25,0.63 2.21,-1.15 4.17,-2.75 6.84,-2.06 2.32,-3.35 5.1,-0.32 7.92,-1.16 2.31,-0.39 7.01,-3.91 5.26,0.66 0.09,-2.91 3.42,-2.73 5.54,-2.04 4.21,0.96 0.29,-3.16 2.08,-3.43 3.47,-2.05 7.52,-2.41 11.2,-3.72 5.48,-3.19 11.62,-5.7 16.21,-10.1 4.27,-2.97 -2.78,-3.48 -1.21,-6.32 1.68,-2.43 4.58,-3.81 7.47,-4.5 1.5,-3.07 3.53,-6.11 5.88,-8.52 2.49,-1.32 4.83,-3.39 7.83,-2.32 2.67,0.71 3.74,5.32 -0.52,3.66 -1.27,-1.88 -5.56,-0.09 -5.25,2.41 -0.21,2.44 -2.56,4.22 -3.06,6.66 4.79,0.85 0.24,3.54 -1.38,3.8 1.67,1.91 5.66,0.6 7.57,-1.14 1.25,-1.85 3.43,-3.8 5.41,-4.22 1.81,2.8 5.1,-1.16 5.74,2.72 0.71,2.78 6.02,-4.86 3.34,-3.1 -3.03,3.11 -3.78,2.86 -1.94,-1.24 1.43,-4.85 -1.76,6.17 -1.45,0.81 -0.81,-3.19 -0.93,-6.03 3.05,-6.4 2.7,-0.86 5.37,-0.87 5.79,2.52 0.42,3.48 3.8,2.84 5.95,4.76 2.41,2.2 4.76,1.95 7.8,1.78 4.34,-0.47 8.01,4.04 12.28,3.17 2.49,-0.42 5.1,-5.2 4.29,-0.23 -2.26,2.83 -0.02,4.12 2.5,5.41 3.13,1.35 5.87,3.14 7.94,5.85 1.31,3.02 6.05,0.28 6.18,2.43 -3.83,1.25 -1.23,3.54 0.21,5.47 1.81,1.95 0.33,5.72 3.64,5.82 1.14,1.28 3.49,7.44 4.01,5.38 -0.35,-2.32 -0.7,-7.86 1.61,-3.76 0.37,1.42 1.04,8.7 2.07,4.74 1.07,-4.88 3.18,0.18 2.22,2.93 3.33,1.69 -1.23,3.33 0.69,4.88 0.69,-3.24 1.31,-0.36 2.16,1.56 1.05,1 1.54,3.94 3.13,3.72 -1.68,-1.72 -2.94,-6.23 0.4,-3 2.42,2.79 4.05,2.12 2.74,-1.66 -2.65,-2.66 0.28,-4.96 2.58,-2.29 3.12,-0.05 2.84,5.21 5.28,4.53 3.31,-3.17 1.5,-7.87 0.69,-11.7 -3.3,-1.55 -7.04,-2.54 -10.22,-4.06 -1.5,-5.33 -6.29,-8.69 -8.4,-13.77 -0.44,-3.33 -4.71,-2.62 -5.75,-5.23 -2.32,-1.72 -2.7,-4.4 -4.56,-6.35 -1.65,-1.53 -5.22,0.95 -5.51,2.94 0.59,3.09 -3.23,3.04 -5.06,4.72 0.05,-4.27 -4.3,-6.15 -6.7,-9.1 -1.33,-1.99 -1.32,-5.36 -4.45,-2.34 -2.37,0.24 -6.38,-0.31 -5.34,-3.62 0.1,-27.7 0.2,-55.4 0.31,-83.09 -2.75,-1.88 -5.88,-4.17 -9.15,-4.4 -2.52,1.72 -5.07,1.09 -7.39,-0.62 -2.72,0.23 -5.12,-0.65 -7.7,-2.89 -3.08,-2.74 -8.58,0.17 -10.98,-3.65 1.13,-3.56 -3.22,-4.83 -5,-2.09 -2.09,0.26 -0.65,-4.31 -3.64,-4.93 -2.57,-2.85 -4.01,-1.28 -5.86,1.21z M36.38,480.63c-0.67,3.11 4.27,1.31 4.72,4.66 0.24,3.82 5.37,3.9 2.34,-0.08 -0.1,-3.22 -3.92,-1.83 -5.06,-4.43 -0.76,-2.02 -0.9,-1.86 -2,-0.16z m-17.16,23.16c2.57,4.06 1.45,1.37 0.13,-1.28 -0.36,0.01 0,1 -0.13,1.28z m21.84,14.81c1.27,1.79 4.99,5.58 6.22,2.03 2.26,-3.3 -3.27,-2.89 -5.23,-3.68 -1.83,-0.9 -0.88,0.54 -0.99,1.65z m91.72,18.78c0.06,3.21 2.81,-1.98 0,0z m-31.47,14.69c-3.2,2.91 -7.24,4.67 -10.56,7.38 0.22,2.75 0.99,7.64 4.67,5.15 2.5,-1.44 4.98,-2.9 7.45,-4.37 -1.84,-3.31 -0.81,-3.15 -4.55,-3.48 -4.15,0.09 1.06,-3.73 2.64,-1.62 3.74,-1.04 3.95,-2.36 1.5,-3.66 0.7,-1.08 -1,0.61 -1.16,0.59z M55.75,570.75c1.42,2.83 3.53,-1.99 0,0z m-35.78,0.34c0.53,2.46 -4.04,4.84 1.05,3.59 4.2,0.47 3.46,-4.35 0.01,-3.84 -0.35,0.08 -0.7,0.16 -1.06,0.24z m62.19,0.69c1.57,2.91 1.31,-2.03 0,0z M58.63,573.13c3.23,0.49 0.99,-3.05 0,0z m-49,0.09c-4.84,2.56 -0.44,1.81 2.29,0.58 2.89,0.16 5.05,-0.48 0.84,-1.46 -1.04,0.29 -2.08,0.58 -3.13,0.88z m7.25,1.38c1.28,0.21 -2.23,-0.59 0,0z","name":"Alaska"},"fl":{"path":"m748.38,439.94c1.69,2.92 1.5,6.12 1.16,9.34 -4.12,0.54 -2.15,-4.69 -5.56,-3.99 -6.18,-0.07 -12.34,1.13 -18.54,1.19 -10.09,0.29 -20.37,2.14 -30.33,0.64 -2.57,-1.57 -2.84,-6.15 -6.5,-5.33 -9.12,-0.12 -18.18,1.79 -27.26,2.55 -5.82,0.63 -11.62,1.37 -17.43,2.12 -1.42,3.25 2.6,4.37 4.06,6.34 0.8,2.28 -1.56,8.42 2.19,7.1 4.11,-1.2 8.08,-2.93 12.48,-2.72 3.34,-0.82 6.63,-0.73 9.89,0.45 4.09,0.8 7.77,3.09 11.41,4.98 1.77,1.94 5.5,1.87 5.97,5 -0.14,3.27 4.32,-0.94 6.5,0.53 3.19,-0.8 5.24,-3.68 7.69,-5.5 4.86,1.69 0.62,-2.9 3.27,-3.97 3.13,-0.83 6.62,-1.39 9.35,0.79 3.04,0.57 5.43,2 6.57,4.99 3.68,0.02 2.88,4.13 5.48,5.3 2.96,0.49 2.98,4.52 6.3,4.3 2.91,0.36 5.45,1.15 5.84,4.45 2.05,2.11 3.92,4.26 3.09,7.41 0.18,3.68 0.12,7.33 -1.44,10.75 0.39,3.68 1.37,7.94 3.28,10.78 2.25,-3.46 0.17,-3.87 -1.74,-6.03 2.19,-1.76 4.86,-0.22 7.3,0.16 0.82,3.15 -2.16,5.6 -3.48,8.19 -3.3,2.21 1.65,4.09 2.73,6.3 3.11,3.34 4.35,7.94 7.53,11.26 0.78,2.29 2.51,7.47 4.63,3.09 2.54,-0.24 3.88,3.44 5.28,5.41 -0.02,2.26 1.93,7.04 3.59,6.44 2.88,-0.8 6.04,0.65 8.28,2.59 2.56,3.3 4.58,6.98 4.56,11.27 1.37,2.73 4.55,0.44 5.81,-1.14 3.74,0.45 7.26,-1.25 9.22,-4.47 -1.01,-2.36 -0.57,-4.83 -0.32,-7.17 -0.04,-2.18 4.33,-3.19 2.25,-6.51 -0.98,-6.33 -0.19,-12.96 -1.87,-19.25 -2.46,-6.93 -7.54,-12.74 -10.4,-19.56 -1.51,-2.41 -4.24,-3.92 -4.62,-7.04 -0.94,-2.28 -2.67,-4.95 -0.07,-6.71 -0.39,-3.56 -4.86,-5.42 -6.84,-8.41 -5.38,-5.57 -8.29,-12.94 -12.35,-19.44 -2.15,-5.53 -4.29,-11.07 -5.91,-16.78 -3.43,0.07 -7.3,-1.03 -10.46,-0.35l-0.34,0.37 -0.26,0.29z m52.91,109.22c-1.9,4.58 0.72,0.38 0.66,-1.91 -0.22,0.64 -0.44,1.27 -0.66,1.91z m-4.69,9.91c2.56,-1.97 3.68,-6.84 1.04,-1.68 -0.35,0.56 -0.69,1.12 -1.04,1.68z m-2.25,2.22c1.46,-1.22 2.04,-2.07 0.18,-0.18l-0.18,0.18z m-5.72,4.16c-5.23,3.69 4.03,-2.14 0.33,-0.19l-0.33,0.19z m-10.72,3.22c-3.41,3.16 5.71,-0.32 4.1,-0.81 -1.8,-0.56 -2.56,-0.71 -4.1,0.81z m-4.59,3.16c0.08,0.16 0.4,-0.3 0,0z","name":"Florida"},"nh":{"path":"m862.56,94c-1.4,-0.41 -3.87,-0.72 -3.05,3 0.22,3.63 -0.73,7.84 2.23,10.59 0.33,2.78 0.08,5.36 -2.17,7.29 -0.19,2.83 -5.98,2.58 -3.35,5.32 1.16,7.35 -0.56,15.03 -0.62,22.51 1.2,1.95 0.98,4.39 0.76,6.75 -1.07,3.79 4.84,-0.05 6.89,0.06 3.93,-1.29 8.46,-1.74 12.04,-3.54 0.77,-3.1 4.37,-2.75 5.94,-4.96 2.59,-3.52 -3.01,-2.73 -2,-6.59 -3.83,0.01 -4.27,-2.46 -4.66,-5.62 -3.84,-11.98 -7.32,-24.45 -11.49,-36.1 -0.18,0.43 -0.35,0.85 -0.53,1.28z","name":"New Hampshire"},"mi":{"path":"M697.86,177.24L694.63,168.99L692.36,159.94L689.94,156.71L687.35,154.93L685.74,156.06L681.86,157.84L679.92,162.85L677.17,166.57L676.04,167.21L674.58,166.57C674.58,166.57 671.99,165.11 672.16,164.47C672.32,163.82 672.64,159.45 672.64,159.45L676.04,158.16L676.84,154.77L677.49,152.18L679.92,150.56L679.59,140.54L677.98,138.28L676.68,137.47L675.87,135.37L676.68,134.56L678.3,134.88L678.46,133.27L676.04,131L674.74,128.42L672.16,128.42L667.63,126.96L662.13,123.57L659.38,123.57L658.74,124.21L657.77,123.73L654.7,121.46L651.79,123.24L648.88,125.51L649.2,129.06L650.17,129.39L652.27,129.87L652.76,130.68L650.17,131.49L647.58,131.81L646.13,133.59L645.81,135.69L646.13,137.31L646.45,142.8L642.9,144.9L642.25,144.74L642.25,140.54L643.54,138.12L644.19,135.69L643.38,134.88L641.44,135.69L640.47,139.89L637.72,141.02L635.94,142.96L635.78,143.93L636.43,144.74L635.78,147.33L633.52,147.81L633.52,148.95L634.33,151.37L633.2,157.51L631.58,161.56L632.23,166.24L632.71,167.38L631.9,169.8L631.58,170.61L631.26,173.36L634.81,179.34L637.72,185.8L639.18,190.65L638.37,195.34L637.4,201.32L634.97,206.5L634.65,209.25L631.39,212.33L635.8,212.17L657.22,209.91L664.5,208.92L664.59,210.58L671.45,209.37L681.74,207.87L685.6,207.41L685.74,206.82L685.9,205.37L688,201.65L690,199.91L689.78,194.86L691.37,193.26L692.46,192.92L692.69,189.36L694.22,186.33L695.27,186.94L695.44,187.58L696.24,187.74L698.18,186.77L697.86,177.24z M581.62,82.06L583.45,80L585.62,79.2L590.99,75.31L593.28,74.74L593.74,75.2L588.59,80.34L585.28,82.29L583.22,83.2L581.62,82.06z M667.79,114.19L668.44,116.69L671.67,116.85L672.97,115.64C672.97,115.64 672.89,114.19 672.56,114.03C672.24,113.86 670.95,112.17 670.95,112.17L668.76,112.41L667.15,112.57L666.82,113.7L667.79,114.19z M567.49,111.21L568.21,110.63L570.96,109.82L574.51,107.56L574.51,106.59L575.16,105.94L581.14,104.97L583.57,103.03L587.93,100.93L588.09,99.64L590.03,96.73L591.81,95.92L593.1,94.14L595.37,91.88L599.73,89.46L604.42,88.97L605.55,90.1L605.23,91.07L601.51,92.04L600.06,95.11L597.79,95.92L597.31,98.35L594.88,101.58L594.56,104.17L595.37,104.65L596.34,103.52L599.89,100.61L601.19,101.9L603.45,101.9L606.68,102.87L608.14,104L609.59,107.08L612.34,109.82L616.22,109.66L617.68,108.69L619.29,109.99L620.91,110.47L622.2,109.66L623.33,109.66L624.95,108.69L628.99,105.14L632.39,104L639.02,103.68L643.54,101.74L646.13,100.45L647.58,100.61L647.58,106.27L648.07,106.59L650.98,107.4L652.92,106.91L659.06,105.3L660.19,104.17L661.65,104.65L661.65,111.6L664.88,114.67L666.17,115.32L667.47,116.29L666.17,116.61L665.37,116.29L661.65,115.81L659.55,116.45L657.28,116.29L654.05,117.75L652.27,117.75L646.45,116.45L641.28,116.61L639.34,119.2L632.39,119.85L629.96,120.66L628.83,123.73L627.54,124.86L627.05,124.7L625.6,123.08L621.07,125.51L620.42,125.51L619.29,123.89L618.48,124.05L616.54,128.42L615.57,132.46L612.39,139.46L611.22,138.42L609.85,137.39L607.9,127.1L604.36,125.73L602.31,123.45L590.19,120.7L587.33,119.67L579.1,117.5L571.21,116.36L567.49,111.21z","name":"Michigan"},"vt":{"path":"m833.16,106.59c0.19,6 4.65,11.21 3.72,17.28 -2.48,4.23 4.52,7.29 2.22,11.58 0.9,1.59 4.66,1.96 4.06,5.25 1.08,4.21 2.86,8.34 1.84,12.76 3.35,-0.51 7.06,-1.17 10.13,-1.97 -0.21,-2.13 1.51,-5.75 -0.53,-7.81 0.2,-7.64 1.01,-15.26 1.13,-22.91 -3.25,-2.41 0.32,-3.79 2.12,-5.18 1.96,-2.28 3.9,-5.07 2.6,-8.1 -2.62,-1.63 -1.02,-5.94 -2.39,-7.22 -8.3,2.1 -16.59,4.21 -24.89,6.31z","name":"Vermont"},"me":{"path":"m889.88,40.22c-2.16,1.31 -3.69,2.74 -4.84,4.69 -2.29,0.6 -4.99,-1.37 -4.88,-3.94 -2.97,-0.82 -3.33,3.68 -4.37,5.71 -1.09,4.29 -3.27,8.39 -3.97,12.69 -0.06,3.04 1,6.63 -1.35,9.09 0.08,2.92 -0.75,6.18 2,8.16 -1.37,5.7 -6.23,10.36 -5.41,16.56 -4.27,-2.21 -1.74,2.47 -1.09,4.73 3.51,11.08 7.19,22.16 10.25,33.35 0.21,3.01 5.81,1.35 4.53,5.7 2.9,2 2.06,-3.92 2.66,-5.87 -1.01,-3.29 2.7,-4.63 0.66,-7.62 0.94,-1.05 2.92,-5.9 4.61,-3.46 2.03,1.03 5.28,-1.89 6.74,-3.19 -0.98,-4.02 4.21,-1.75 4.73,-5.32 -1.11,-2.61 0.74,-5.45 -0.57,-7.44 -2.42,-1.59 3.53,-4.63 3.31,-0.78 2.27,0.48 2.15,2.8 3.66,3.93 1.94,-2.82 -2.15,-3.81 0.35,-6.03 2.43,-0.81 3.1,-3.96 6,-3.31 -0.17,1.46 1.03,3.34 2.26,1.38 2.94,-2.9 5.24,-7.08 9.37,-8.34 1.17,-2.61 3.34,-5.74 0.71,-8.24 -0.55,-1.64 -3.68,-4.84 -4.15,-2.58 -0.75,2.6 -4.66,-0.65 -4.92,-2.22 0.1,-2.8 0.29,-7.17 -3.8,-5.81 -3.96,1.36 -3.64,-3.04 -4.69,-5.61C905.22,58.3 902.75,50.15 900.28,42c-2.86,-1.25 -5.71,-2.92 -8.81,-3.38 -0.53,0.53 -1.06,1.06 -1.59,1.59z m20.47,61c-2.81,1.7 1.87,5.16 1.13,1.22 1.48,-0.9 0.13,-2.4 -1.13,-1.22z m-7.81,7.81c3.16,6.67 2.63,-3.59 0,0z","name":"Maine"},"ri":{"path":"m871,164.28c1.15,4.66 2.29,9.31 3.44,13.97 2.56,-0.49 4.66,-2.29 5.84,-4.56 4.17,0.76 4,-2.64 1.51,-4.97 -1.79,-1.94 -3.16,-5.31 -5.74,-5.92 -1.68,0.49 -3.37,0.99 -5.05,1.48z","name":"Rhode Island"},"ny":{"path":"m825.56,108.66c-2.7,1.12 -5.45,1.68 -8.33,1.43 -5.07,0.72 -10.17,2.73 -12.92,7.31 -2.84,3.43 -4.89,7.49 -7.18,11.2 -1.65,2.36 -5.82,3.73 -5.55,6.84 -0.17,3.56 5.77,0.73 4.43,4.38 -2.69,2.3 0.8,4.23 0.56,6.59 0.5,3.47 -4.26,1.99 -5.36,4 -1.62,2.71 -3.35,6.62 -7.22,6.05 -3.04,-0.43 -5.35,2.05 -7.98,2.63 -2.5,-0.75 -4.7,-2.05 -7.59,-1.31 -5.31,0.21 -10.62,1.98 -15.23,4.53 -0.29,1.77 0.61,6.25 3.17,6.14 1.55,2.48 2.09,4.96 -0.63,6.72 -1.51,1.76 -1.8,4.25 -4.16,5.3 -1.93,1.14 -2.68,3.51 -4.8,4.54 0.33,3.07 -0.22,7.29 4.08,5.12 22.14,-4.26 44.26,-8.68 66.23,-13.74 0.98,3.85 5.67,1.32 6.44,4 0.64,2.93 1.36,7.4 5.33,6.88 3.14,1.9 6.9,3.68 10.69,4.22 2.71,0.47 7.18,1.43 6.44,5.06 -0.33,1.97 -1.62,7.56 1.97,5.93 5.3,-1.65 10.96,-2.84 15.06,-6.85 3.23,-2.49 6.76,-4.64 9.35,-7.86 -2.99,-2.44 -4.65,0.46 -6.81,2.42 -2.91,1.56 -6.01,3.51 -9.16,4.32 -2.6,-0.63 -4.83,-0.86 -6.18,2.07 -1.03,2.04 -4.86,2.98 -3.98,-0.15 4.26,-1.87 -2.17,-3.97 -0.33,-6.21 1.19,-3.13 0.56,-6.87 0.42,-10.21 -1.43,-7.38 -3.69,-14.76 -2.54,-22.36 -0.08,-4.46 1.55,-8.97 -0.51,-13.21 -1.22,-2.56 -0.47,-6.83 -4.05,-7.34 -2.99,-0.66 0.75,-4.31 -1.57,-6.2 -1.7,-2.43 -3.17,-4.91 -1.54,-7.81 0.38,-5.77 -3.83,-10.57 -3.55,-16.35 -2.32,0.65 -4.65,1.29 -6.97,1.94z","name":"New York"},"pa":{"path":"m798.88,181.63c-17.5,3.38 -34.87,7.42 -52.47,10.28 -0.61,-2 0.48,-8.42 -2.41,-4.31 -2.18,2.73 -5.48,3.74 -8.09,5.97 1.52,9.75 2.63,19.57 5.44,29.05 1.14,6.09 2.27,12.17 3.41,18.26 8.85,-1.42 17.79,-2.25 26.51,-4.41 16.39,-3.45 33.03,-6.46 49.33,-9.87 2.48,-3.07 8.03,-1.69 8.97,-6.19 0.64,-2.36 4.86,-3.99 4.33,-5.9 -2.3,-1.89 -5.94,-2.77 -6.39,-6.13 -3.14,1.09 -4.42,-3.94 -3.12,-5.32 3.86,-1.1 -0.49,-3.68 0.55,-5.96 2.52,-1.88 1.12,-5.15 2.81,-7.07 3.87,-2.7 -2.98,-1.1 -3.72,-3.99 -1.35,-2.18 -0.28,-7.24 -4.16,-5.92 -2.34,-1.13 -3.87,-3.75 -7.09,-1.7 -4.64,1.07 -9.28,2.15 -13.92,3.22z","name":"Pennsylvania"},"nj":{"path":"m827.84,191.34c1.03,2.99 -1.82,4.8 -2.06,7.47 2.86,1.63 0.49,4.87 -0.92,5.73 -0.41,3.86 4.01,1.68 4.16,5.14 1.37,2.19 4.72,3.02 6.26,4.94 -0.15,2.61 -3.85,3.5 -4.69,6.06 -0.26,3.07 -4.09,3.19 -4.18,5.96 -0.99,2.38 -0.74,5.09 1.7,6.47 2.85,2.76 6.86,3.99 10.73,4.38 0.48,1.55 -1.84,7.18 1.1,3.59 1.5,-2.42 0.59,-5.95 3.11,-8.01 2.5,-4.08 5.03,-8.84 4.88,-13.61 -1.35,-4.07 0.8,-9.01 -1.81,-12.82 -1.1,1.32 -6.17,1.23 -4.13,-0.8 2.39,-1.39 3.37,-3.62 2.39,-6.31 0.21,-2.31 1.58,-5.42 -1.69,-6.19 -4.35,-1.15 -8.82,-2.13 -12.88,-4.26 -0.66,0.75 -1.31,1.5 -1.97,2.25z","name":"New Jersey"},"de":{"path":"m824.88,225.34c-3.72,0.25 -3.47,3.52 -1.91,6.13 3.35,6.89 3.86,14.58 6.03,21.81 3.45,0.11 6.81,-0.49 10.16,-1.25 -1.2,-2.17 -0.68,-6.38 -3.32,-6.38 -2.9,-1.2 -4.17,-3.69 -4.9,-6.58 -0.91,-3.11 -3.62,-4.96 -5.48,-7.35 -1.85,-1.82 0.94,-5.5 -0.26,-6.47l-0.33,0.09z","name":"Delaware"},"md":{"path":"m813.59,229.19c-17.31,3.18 -34.53,6.83 -51.78,10.28 0.74,3.02 1.31,6.08 1.78,9.16 2.14,-1.9 3.29,-5.35 6.59,-5.34 2.14,-1.85 2.67,-5.25 5.77,-3.55 3.46,0.18 5.43,-5.35 9.01,-3.85 2.63,1.63 5.66,2.79 7.34,5.59 4.19,0.11 3.68,3.73 5.74,4.96 2.73,1.11 5.02,1.18 6.38,-0.53 4.29,1.38 2.24,3.74 1.44,6.9 0.09,2.97 -3.7,4.92 -1.66,7.97 3.1,1.31 6.4,1.2 9.63,1.4 2.17,1.58 6.83,1.03 3.79,-2.1 0.41,-2.74 -3.08,-3.35 -3.32,-6.04 -1.7,-2.67 -1.42,-5.47 -0.36,-8.32 1.68,-2.42 -2.83,-3.82 -0.4,-5.41 1.25,-1.53 0.43,-4.16 2.98,-4.7 1.62,-3.02 5.1,-1.45 2.35,1.02 -2.54,2.98 -0.81,4.5 0.57,6.3 1.41,3.55 -0.68,5.07 -1.53,7.31 -0.22,-0.81 3.62,-1.01 3.22,1.79 -3.15,1.64 -1.45,6.12 1.09,7.31 2.98,0.99 5.58,-1.8 6.98,2.14 1.5,3.75 4.92,0.81 7.41,-0.02 2.74,-1.21 3.47,-4.93 2.78,-7.7 -1.13,-1.58 -4.82,0.92 -7.13,0.4 -3.86,1.26 -4.9,-1.25 -5.28,-4.64 -1.68,-5.97 -2.14,-12.33 -5.16,-17.9 -0.04,-4.32 -2.71,-4.2 -6.07,-2.91 -0.73,0.16 -1.45,0.31 -2.18,0.47z m10.94,32.59c1.32,0.99 0.59,4.97 2.06,4.63 -0.48,-1.31 -0.36,-4.99 -2.06,-4.63z","name":"Maryland"},"va":{"path":"m792.88,242.88c-0.16,1.46 0.24,5.89 -2.4,4.29 -2.58,-0.67 -6.42,-3.2 -8.23,-2.73 0.7,3.72 -1.46,6.77 -2.99,9.94 -3.05,1.14 -2.29,5.83 -5.84,5.58 -1.62,1.74 -1.47,5.31 -2.45,7.73 -3.09,1.14 -5.37,-0.48 -7.28,-1.75 0.11,6.5 -3.72,11.95 -5.91,17.84 -1.69,1.73 1.19,3.8 -0.74,5.77 -1.35,3.56 -3.79,2.72 -6.19,4.19 -2.72,1.1 -4.9,0.5 -5.4,4.61 -2.07,1.14 -4.83,2.63 -6.91,0.47 -2.38,1.51 -5.02,3.21 -7.81,1.6 -2.69,-0.01 -3.9,-6.55 -6.07,-2.94 -3.27,4.09 -7.89,7.48 -10.21,12.09 0.43,3.25 -4.46,3.32 -6.42,5.15 -4.27,1.95 3.62,-0.11 5.16,-0.07 5.56,-0.79 11.14,-1.37 16.76,-1.36 1.95,-2.65 4.98,-1.81 7.77,-1.65 7.86,-0.32 15.65,-2.12 23.48,-2.99 12.85,-1.4 25.44,-4.27 38.04,-7.05 11.65,-2.52 23.3,-5.03 34.96,-7.55 -1.64,-2.66 -2.75,-6.67 -6.42,-4.14 -1.99,2.03 -6.61,-1.82 -2.7,-2.48 2.65,-1.62 -1.75,-4.07 -1.8,-5.97 -2.73,-0.62 -2.88,-5.12 0.54,-3.6 -0.17,-1.37 -1.24,-3.62 -1.62,-5.68 1.47,-3.51 -0.84,-4.97 -3.72,-5.16 0.31,-3.42 -2.9,-2.93 -5.22,-3.97 -3.33,0.21 -7.06,-0.25 -9.91,-1.66 -1.22,-2.41 -0.91,-5.12 1.25,-6.88 1.39,-2.83 -0.28,-5.7 -3.3,-6.27 -2.65,-0.83 -6.97,-0.29 -5.73,-4.3 -0.83,-0.3 -2.05,-1.06 -2.69,-1.06z m39.16,21.59c0.44,4.71 -3.15,8.7 -2.62,13.48 -0.34,4.11 2.64,5.72 3.48,0.92 1.71,-3.04 -0.23,-6.47 0.8,-9.73 0.4,-2.53 3.66,-3.88 3.52,-6.73 -1.73,0.69 -3.46,1.38 -5.19,2.06z","name":"Virginia"},"wv":{"path":"m739.75,223.25c-1.6,2.23 1.3,5.02 0.25,7.75 -0.18,4.04 -0.63,8.11 -0.84,12.13 -1.94,3.58 -4.43,7.35 -8.16,9.13 -3.15,-1.33 -3.92,3.25 -5.76,4.98 -1.56,2.28 2.64,4.93 -0.3,6.69 -2.57,3.58 -2.6,-4.8 -4.46,-0.71 -1.32,2.59 0.02,6.02 -1.35,8.33 -1.82,1.54 -0.53,5.19 -4.16,4.81 -2.23,0.13 -1.45,6.19 1,6.81 2.24,1.47 2.49,4.74 5.5,5.92 1.92,1.96 2.28,5.18 5.39,6.05 1.64,2.19 3.07,4.96 6.25,4.88 2.63,0.5 4.77,-3.86 7.22,-1.35 1.49,0.81 3.93,-0.57 4.58,-1.83 0.43,-4.57 3.42,-2.71 6.03,-4.39 2.39,-0.94 4.82,-0.98 5.62,-4.44 -1.26,-2.59 0.3,-5 1.56,-7.64 2.23,-4.81 4.72,-9.61 4.67,-15.05 2.65,-2.31 3.72,3.56 7.05,1.41 1.64,-1.77 1.12,-5.67 2.6,-7.59 3.47,0.39 2.97,-3.96 5.76,-5.21 2.29,-3.11 3.52,-6.8 3.06,-10.7 1.06,-1.29 5.1,1.62 7.23,2.15 3.3,3.35 4.34,-1.98 2.85,-4.05 -2,-2.28 -5.12,-3.7 -7.62,-4.75 -3.31,0.98 -5.44,5.47 -9.38,3.97 -1.86,-0.23 -2.38,3.98 -4.86,3.88 -2.89,0.71 -3.79,4.38 -6.03,6.22 -1.1,-0.06 -0.99,-4.82 -1.62,-6.64 -0.01,-3.93 -1.77,-5.3 -5.48,-3.82 -4.21,0.6 -8.41,1.23 -12.61,1.91 -1.17,-6.45 -2.29,-12.92 -3.44,-19.38l-0.35,0.35 -0.18,0.18z","name":"West Virginia"},"oh":{"path":"m729.5,197.78c-4.85,2.06 -7.38,6.9 -11.47,9.97 -4.08,0.86 -8.09,1.75 -11.72,3.88 -3.41,1.61 -4.39,-4.09 -7.67,-2.63 -3.13,1.35 -5.49,-1.1 -8.11,-2.41 -8.6,1.15 -17.15,2.64 -25.66,4.38 1.45,17.83 4.12,35.53 5.87,53.33 -0.69,3.82 4.06,2.26 6.23,1.48 2.74,0.41 4.83,2.16 5.48,4.94 1.26,2.48 5.82,-0.87 6.96,2.54 2.19,1.53 4.46,-2.33 7.03,-0.58 2.52,0.04 5.62,1.51 6.84,-1.56 1.49,-0.55 5.37,-3.85 5.41,-0.71 0.38,2.53 3.82,3.57 5.77,4.7 3.53,0.63 2.32,-3.91 4.21,-5.51 -0.11,-2.74 0.21,-5.73 1.39,-8.13 2.53,-2.81 3.8,4.53 4.98,0.39 -2.02,-2.27 -0.99,-5.41 0.93,-7.41 1.07,-4.06 4.05,-2.41 6.5,-4.39 2.93,-3.16 6.59,-6.57 5.97,-11.27 0.44,-4.71 1.18,-9.75 -0.53,-14.23 1.47,-2.48 2.58,-4.29 0.96,-7.33 -2.04,-7.53 -2.56,-15.37 -3.93,-23.04 -1.81,1.2 -3.63,2.4 -5.44,3.59z","name":"Ohio"},"in":{"path":"m658.66,210.31c-9.12,0.93 -18.35,1.98 -27.41,2.68 -2.6,0.39 -4.21,5.08 -6.89,2.98 -3.83,-2.84 -2.64,1.83 -2.41,4.45 1.1,14.81 2.73,29.61 3.44,44.42 -0.76,3.69 -1.39,7.89 1.36,10.91 0.1,2.99 1.4,6.28 -1.14,8.65 -1.83,2.73 -2.55,6.09 -5.02,8.42 0.09,2.08 -2.02,8.2 1.63,5.16 3.49,-0.6 7.25,-1.53 10.69,-1.34 2.36,4.08 2.67,-0.62 5.26,-1.29 2.03,-2.62 4.78,2.05 5.34,1.04 -1.26,-3.41 3.05,-3.77 5.1,-5.22 1.09,0.63 6.05,3.38 5.3,-0.64 -0.46,-2.47 2.02,-4.71 3.65,-6.34 3.11,-1.39 4.33,-3.9 4.16,-7.23 1.83,-1 4.93,-1.01 6.97,-2.47 4.23,-1.03 0.26,-3.48 1.22,-5.92 -0.83,-12.56 -2.8,-25.13 -4.08,-37.69 -0.85,-6.99 -1.44,-14.01 -2.14,-21.02 -1.68,0.16 -3.35,0.31 -5.03,0.47z","name":"Indiana"},"il":{"path":"m569.75,200.44c-0.29,2.58 4.2,1.83 3.73,5.07 2.07,2.09 5.71,4.21 4.38,7.77 -0.31,3.04 -2.61,5.44 -3.08,8.4 -2.38,2.71 -6.06,2.98 -9.31,3.94 -1.61,2.47 -1.05,4.91 1.28,6.47 0.63,3.25 -1.08,5.07 -2.74,7.38 1.41,3.63 -2.39,2.86 -3.56,5.02 1.08,3.12 -2.11,3.8 -2.53,6.64 0.19,3.95 1.33,8.21 3.28,11.58 3.68,3.96 7.38,7.9 12.21,10.47 -0.61,2.88 -0.64,6.7 3.43,5.71 2.05,0 6.18,0.38 6.26,2.68 -0.19,4.39 -3.6,8.24 -3.28,12.53 1.6,3.83 5.33,6.26 8.59,8.42 3.37,-0.29 5.36,1.27 5.9,4.6 1.01,2.64 3.84,4.73 1.73,7.67 0.55,1.74 2.58,7.7 4.31,4.05 1.21,-2.98 5.41,-4.78 8.07,-2.46 3.1,2.46 5.94,0.47 3.13,-2.8 -0.98,-3.39 2.61,-4.96 5.37,-5.33 1.01,-1.55 -1.6,-4.46 1.4,-5.97 1.8,-3.97 -0.56,-9.39 3.32,-12.49 1.43,-2.97 3.23,-5.97 4.4,-8.97 0.13,-3 -0.7,-5.7 -2.34,-8.16 -0.45,-4.59 1.31,-9.09 0.02,-13.65 -1.16,-15 -2.22,-30.05 -3.67,-45.01 -1.02,-3.1 -1.61,-6.46 -4.04,-8.77 -2.27,-1.83 -0.51,-5.93 -1.97,-7.32 -14.76,0.83 -29.52,1.67 -44.28,2.5z","name":"Illinois"},"ct":{"path":"m865.78,165.41c-6.91,1.54 -13.81,3.08 -20.72,4.63 2.17,6.2 2.74,12.83 2.44,19.34 -2.62,4.3 2.61,2.38 3.97,-0.21 2.09,-1.89 4.19,-3.71 5.99,-5.88 2.06,1.35 4.78,-1.86 7.44,-1.46 2.98,-0.68 5.69,-2.24 8.56,-3.26 -1.15,-4.67 -2.29,-9.33 -3.44,-14 -1.42,0.28 -2.83,0.56 -4.25,0.84z","name":"Connecticut"},"wi":{"path":"m559.53,104.97c-4.06,2.75 -8.71,4.92 -13.53,5.84 -2.88,-1.08 -5.54,-1.12 -5.57,2.68 -0.48,3.34 0.51,7.03 -0.47,10.17 -2.02,3.26 -6.91,4.03 -7.36,8.38 -2.63,2.78 2.21,3.06 2.23,5.53 1.79,2.9 -2.13,4.74 -1.33,7.65 0.29,2.93 -0.4,6.49 1.14,8.93 1.33,3.48 5.88,0.21 6.64,3.93 1.56,2.26 5.47,1.03 6.19,4.78 2.15,5.1 9.7,4.85 11.21,10.39 0.68,3.38 0.35,7.34 1.94,10.32 3.26,1.05 1.94,4.34 0.25,6.21 -0.79,3.96 2.53,8.34 6.75,8.25 2.28,1.6 4.86,1.65 7.83,1.19 13.03,-0.77 26.07,-1.53 39.1,-2.3 -0.02,-4.45 -1.98,-8.61 -1.86,-13.13 -1.7,-2.04 -0.86,-4.17 -0.04,-6.39 0.32,-2.84 3.07,-4.93 1.51,-7.87 -1.05,-2.94 -0.88,-6.21 1.73,-8.27 -0.2,-2.83 -0.5,-5.03 -0.16,-7.93 -1.14,-4.2 2.64,-7.5 3.69,-11.36 0.92,-1.13 3.15,-8.34 0.73,-4.93 -2.65,3.81 -4.99,8.01 -8.18,11.29 -0.86,2.06 -3.21,4.55 -5.21,4.5 -2.57,-1.26 0.28,-4.49 0.9,-6.41 0.47,-2.94 3.2,-4.25 4.09,-6.85 -3.31,-1.29 -2.77,-5.03 -3.54,-7.92 0.02,-3.09 -1.23,-5.08 -4.29,-5.57 -2.14,-3.67 -7.04,-2.78 -10.59,-4.12 -7.13,-1.87 -14.21,-4.39 -21.67,-4.99 -2.48,-0.54 -2.84,-5.51 -5.51,-4.73 -1.71,-1.54 -3.85,-0.7 -5.82,0.13 -2.8,-1.32 0.68,-4.59 1.5,-6.38 2.18,-1.34 -1.53,-2.14 -2.31,-1z","name":"Wisconsin"},"nc":{"path":"m830.06,295.97c-18.3,3.8 -36.53,8 -54.86,11.65 -12.74,1.51 -25.38,4.07 -38.18,4.94 -3.32,-0.82 -1.17,3.72 -2.5,5.53 -2.62,1.34 -3.49,4.59 -5.03,6.38 -3.24,-1.36 -5.07,1.46 -6.34,3.97 -1.09,-0.57 -2.96,0.03 -3.41,-1.41 -2.02,1.96 -4.37,3.73 -4.31,6.81 -3.66,1.1 -6.31,3.82 -9.28,5.96 -2.64,0.94 -5.76,2.16 -7.4,4.35 0.73,4.06 -2.98,3.3 -5.1,5.29 -1.98,4.69 2.74,2.66 5.58,2.5 6.41,-1.19 13.32,-0.49 19.18,-3.73 5.04,-1.9 9.41,-5.9 15.06,-5.67 6.5,-0.64 13.15,-0.6 19.62,-0.69 2.99,0.53 3.36,4.79 5.58,5.01 5.37,-0.81 10.87,-1.67 16.25,-1.79 5.38,1.36 9.61,5.45 14.52,7.93 3.59,2.64 6.93,5.66 10.43,8.44 3.15,-0.86 6.32,-1.58 9.59,-1.72 1.06,-4.55 2.04,-9.29 5.39,-12.78 4.2,-4.27 9.23,-8.29 15.33,-9.29 2.91,1.95 3.69,-2.9 5.27,-4.53 2.72,-5 -2.44,3.91 -2.46,-1.22 -3.87,0.7 -5.43,-0.26 -3.29,-4 2.77,-4.25 -2.73,-2.51 -2.12,-6.02 -1.42,-3.76 2.84,2.19 5.06,0.81 2.81,0.12 5.1,-1.87 5.59,-4.6 0.45,-2.9 4.59,-2.7 3.28,-6.48 -4.02,-2.43 4.25,-0.66 0.4,-3.93 -3.52,-3.44 -5.24,-8.33 -7.23,-12.76 -1.54,0.35 -3.08,0.71 -4.63,1.06z m17.13,23.72c1.55,2.61 -4.64,4.26 -0.52,2.69 1.38,-1.92 0.21,-5.22 0.24,-7.62 -0.74,-2.05 0.37,4.57 0.28,4.94z","name":"North Carolina"},"dc":{"path":"m803.44,248.16c2.67,3.43 3.85,-1.02 0.55,-0.75l-0.29,0.4 -0.25,0.35z","name":"District of Columbia"},"ma":{"path":"m877.59,144.41c-1.04,3.1 -4.01,3.5 -6.79,4.13 -8.62,2.32 -17.17,4.6 -25.96,6.12 -0.11,4.77 -1.17,9.59 -0.03,14.31 10.66,-2.6 21.54,-4.29 32,-7.44 3.57,2.81 6.01,6.73 8.28,10.59 2.13,-0.78 0.01,-5.15 3.77,-5.38 2.93,-3.28 1.83,4.78 3.17,2.62 2.13,-3.09 6.1,-3.9 9.41,-5.21 -0.11,-3.41 -2.21,-8.55 -6.38,-7.53 1.64,-0.1 4.89,0.87 4.91,3.82 0.85,2.24 -2.55,3.71 -4.35,4.24 -3.37,0.51 -4.99,-1.76 -6.32,-4.47 -1.38,-2.05 -3.58,-6.56 -6.3,-3.6 -1.89,-1.72 -3.13,-4.04 -1.33,-6.3 2.3,-2.34 1.23,-6.2 -1.28,-7.16 -0.93,0.41 -1.86,0.82 -2.79,1.24z M902.25,172.69c-1.6,2.76 3.05,-2.44 0.08,-0.32l-0.08,0.32z m-11.28,1.28c1.59,0.78 6.09,-2.26 1.78,-2.03 -0.59,0.68 -1.19,1.35 -1.78,2.03z","name":"Massachusetts"},"tn":{"path":"m730.41,314.34c-8.87,-0.11 -17.76,1.5 -26.57,2.73c-10.24,2.86 -20.99,2.66 -31.48,4.02c-16.34,1.45 -32.65,3.29 -48.96,4.95c-4.57,-1.71 -0.43,5.74 -5.06,4.14c-6.97,0.06 -13.87,1.23 -20.84,0.71c-0.95,4.26 -1.37,9.04 -3.6,12.76c1.03276,2.6246 -1.94104,7.30425 -2.59092,9.90471c-2.52529,1.78965 -2.61104,1.92035 -0.46104,4.90035c3.07759,1.94598 -1.38459,5.12506 1.90081,3.86506c33.91,-3.26 65.53115,-6.30012 99.44115,-9.56012c-0.23,-2.54 0.72,-5.31 3.53,-5.69c3.11,-0.4 0.99,-5.41 4.88,-5.81c2.77,-2.02 6.49,-2.19 8.62,-5.18c1.76,-2.26 6.31,-1.64 5.78,-5.38c1.19,-1.77 3.1,-3.84 5.03,-4.85c1.04,-0.39 0.28,1.78 1.72,1.19c2.38,0.56 2.2,-4.36 5.22,-3.86c3.3,1.27 2.68,-2.92 4.96,-4.18c2.05,-0.94 3.81,-6.68 0.92,-6.59c-0.81,0.64 -1.63,1.27 -2.44,1.91l0,0.02z","name":"Tennessee"},"ar":{"path":"m509.47,335.31c1.73,4.9 1.5,10.02 1.53,15.12c2.15,12.21 1.13,24.64 1.47,36.97c0.02,3.71 0.04,7.42 0.06,11.13c2.06,3.2 5.05,-1.45 7.69,1.47c1.53,1.76 -0.88,7.54 2.97,6.49c17.61,-0.36 35.23,-0.72 52.84,-1.08c1.97,-2.6 0.41,-5.9 -1.28,-8.22c3.3,-1.61 -1.59,-3.96 0.84,-6.53c0.75,-2.77 0.62,-6.34 3.78,-7.69c-1.88,-3.07 2.08,-5.24 3.19,-7.88c3.77,-0.38 1.58,-3.3 2.64,-5.42c1.12,-2.67 2.56,-5.28 4.85,-6.58c1.2,-4.12 0.21,-2.67 -1.53,-5.61c-2.76,-3.32 1.95,-3.50023 2.36,-6.84c0.17988,-0.90552 3.08012,-6.46012 1.22,-6.75c-2.65,0.85 -5.34,-0.18 -8.02,-0.33c-0.09,-3.38 4.4,-3.88 4.22,-7.3c0.58,-3.87 -3.58,-3.68 -6.34,-3.26c-24.17,0.77 -48.34,1.54 -72.5,2.31l0.01,0z","name":"Arkansas"},"mo":{"path":"m490.44,245.63c-2.39,-0.46 -0.19,4.05 0.07,5.6 2.45,3.32 4.51,7.86 8.55,9.22 2.81,-0.24 3.61,2.67 2.79,4.84 -3.22,1.64 -1.72,5.03 0.19,7.07 0.9,2.55 4.61,3.05 4.89,5.61 2.1,12.97 1.12,26.14 1.51,39.22 0,5.72 0.08,11.44 0.72,17.13 24.99,-0.94 49.98,-1.8 74.97,-2.51 3.02,-1.12 4.35,1.72 5.31,3.98 0.52,3.48 -2.86,4.46 -4.14,6.86 2.37,0.64 5.57,0.65 8.21,-0.08 1.46,-3.59 1.87,-7.45 2.38,-11.22 0.84,-2.83 5.27,-2.89 4.61,-6.03 1.37,-2.94 0.14,-4.6 -2.22,-4.28 -2.15,-1.81 -2.84,-5.03 -2.86,-7.6 1.45,-2.84 -2.08,-5.07 -2.44,-7.89 -0.66,-3.24 -5.34,-0.87 -6.89,-3.66 -2.64,-2.34 -6.24,-3.94 -6.91,-7.76 -0.94,-3.21 1.52,-6.47 2.17,-9.64 2.2,-3.53 -1.34,-4.7 -4.33,-4.5 -2.66,0.39 -5.34,-1.15 -4.81,-4.1 0.86,-4.07 -4.71,-4.05 -6.43,-6.93 -2.7,-3.4 -6.72,-6.05 -7.25,-10.67 -1.1,-3.16 -2.12,-6.86 -0.62,-10.06 -2.3,-1.34 -2.28,-5.77 -5.37,-4.89 -20.69,0.77 -41.38,1.53 -62.06,2.3z","name":"Missouri"},"ga":{"path":"m672.78,356c-0.74,7.06 4.28,12.69 5.29,19.4 1.36,6.57 3.44,12.96 5.03,19.44 0.94,4.88 2.17,9.95 5.53,13.75 -0.85,3.5 3.37,3.17 2.59,6.44 -1.89,4.45 -3.57,9.65 -0.84,14.13 0.05,2.63 0.94,5.4 -0.38,7.88 2.95,0.94 1.45,4.01 3.07,6.01 1.35,2.67 3.68,4.75 6.83,4 12.35,-0.01 24.69,-1.31 37.03,-1.92 3.32,-0.58 6.67,-0.74 10.04,-0.59 -0.78,4.24 3.04,4.15 2.09,-0.09 -0.9,-2.14 -2.94,-6.23 0.59,-6.62 3.2,0.5 6.42,0.91 9.66,1.02 -0.84,-3.8 -0.8,-7.57 0.5,-11.27 0.2,-3.54 2.62,-6.73 2.21,-10.21 -0.72,-2.93 3.26,-5.26 2.85,-8.05 -2.19,1.37 -5.29,-0.71 -5.34,-3.19 -0.56,-3.12 -2.71,-5.83 -6.03,-6.06 -1.33,-3.9 -2.62,-8.17 -4.99,-11.43 -3.12,-1.07 -6.13,-2.99 -7.17,-6.29 -2.06,-2.33 -5.23,-3.21 -6.66,-6.16 -2.08,-2.2 -5.24,-2.83 -7.66,-4.19 -0.76,-2.53 -3.21,-4.09 -3.94,-6.67 -1.36,-2.63 -2.97,-4.65 -6.15,-3.77 -2.33,-1.57 -7.15,-3.38 -5.31,-6.97 2.02,-2.01 3.76,-4.11 -0.8,-3.11 -12.68,1.51 -25.37,3.01 -38.05,4.52z","name":"Georgia"},"sc":{"path":"m737.03,343.19c-4.26,0.4 -8.64,0.43 -12.24,3.07 -3.2,1.75 -6.48,3.19 -9.88,4.49 2.21,3.31 -4.28,2.74 -2.34,6.44 2.27,2.24 5.2,4.13 8.5,3.28 2.53,3.15 3.83,6.94 6.53,9.88 0.91,2.76 5.13,2.06 6.85,4.46 2.18,1.38 2.96,4.25 5.62,5.01 2.99,1.95 3.36,6.38 7.26,7.24 3.61,0.62 3.77,4.77 5.34,7.38 0.38,3.35 2.02,4.84 4.79,5.96 3.36,1.79 1.76,7.23 5.67,8.16 3.63,-1.38 5.8,-4.63 8.38,-7.34 -2.35,-3.93 0.29,-3.32 3.01,-4.44 1.95,-2.4 5.02,-3.3 6.25,-6.28 2.17,-2 3.86,-4.52 5.4,-6.9 2.81,-0.17 3.42,-3.58 4.92,-5.03 -0.28,-4.13 1.3,-7.89 3.12,-11.47 1.03,-2.11 7.03,-4.5 3.47,-6.34 -5.97,-5.35 -12.78,-9.5 -19.71,-13.47 -4.45,-2.68 -9.74,-0.07 -14.57,-0.06 -2.57,-0.23 -6.63,2.48 -7.32,-1.28 -1.66,-4.5 -6.93,-2.82 -10.63,-2.96 -2.8,0.07 -5.61,0.14 -8.41,0.21z","name":"South Carolina"},"ky":{"path":"m675,267.5c-2.76,-0.77 -6,1.11 -3.38,3.78 1.52,3.15 -3.12,4.12 -5.19,5.27 -2.94,0.53 -4.71,1.29 -4.3,4.82 -1.15,2.66 -5.3,3.24 -6.32,6.32 -2.16,1.4 0.74,6.22 -2.84,5.92 -3.06,0.61 -4.36,-2.79 -7.09,0.11 -2.26,0.51 -1.1,6.98 -3.85,3.1 -2.27,-2.54 -5.57,0.14 -6.16,2.81 -1.91,1.07 -3.4,-3.73 -6.02,-1.91 -3.32,0.61 -7.48,0.47 -9.92,2.91 0.08,2.65 -3.39,3.78 -1.7,6.05 2.34,2.66 -2.23,2.68 -3.86,3.3 -3.57,1.35 -0.68,4.35 -0.76,6.72 0.33,3.45 -3.76,1.44 -5.49,0.72 -2.5,-2.29 -6.26,-0.38 -7.13,2.53 2.86,2.28 -0.04,4.76 0.41,7.66 -3.47,2.04 -3.19,2.73 0.94,2.35 5.84,0.01 11.64,-0.95 17.5,-0.76 -0.7,-3.74 0.98,-4.99 4.56,-4.19 24.33,-3.01 48.82,-4.7 73.16,-7.43 4.3,-0.7 8.2,-2.38 11.75,-4.88 3.3,-0.8 4.04,-2.71 5.12,-5.35 3.46,-4.09 7.13,-8.06 10.79,-12 -3.27,-1.24 -3.03,-5.51 -6.21,-6.95 -2.6,-1.25 -2.07,-4.66 -5.16,-5.36 -2.38,-2.64 0.8,-7.28 -3.02,-8.87 -3.02,-0.01 -2.37,-4.65 -4.57,-3.51 -2.95,0.61 -3.67,4.78 -7.02,3.29 -2.69,-0.23 -5.51,-1.19 -7.82,0.71 -3,0.83 -3.99,-3.61 -7.44,-2.06 -3.51,0.82 -2.17,-5.19 -5.65,-5.26C677.17,266.43 676.21,267.17 675,267.5z","name":"Kentucky"},"al":{"path":"m628.53,359.63c-0.2,14.37 0.12,28.75 -0.54,43.12 -0.04,9.01 -0.88,18.1 -0.07,27.07 1.55,10 2.94,20.01 3.85,30.09 3.07,1.09 3.69,-1.92 4.4,-4.18 -0.3,-3.89 4.27,-3.02 4.89,-0.04 0.72,2.06 4.08,5.27 0.77,6.65 -0.15,0.92 6.17,-0.9 5.88,-2.89 -0.44,-3.01 0.64,-6.86 -2.87,-8.19 -2.29,-0.88 -3.03,-5.59 -0.32,-5.67 14.08,-1.86 28.21,-3.59 42.35,-4.8 2.7,1.07 6.76,-0.25 2.97,-2.5 -1.8,-2 0.95,-5.03 -0.27,-7.65 -0.31,-3.1 -2.63,-5.9 -1.31,-9.15 0.01,-2.92 2.49,-5.36 1.93,-8.3 -3.52,-0.45 -1.34,-5.11 -4.26,-6.7 -3.48,-5.82 -3.36,-13.04 -5.96,-19.21 -2.02,-8.09 -3.34,-16.41 -7.25,-23.88 -0.51,-2.39 -1.08,-4.85 -0.72,-7.31 -14.49,1.18 -28.98,2.35 -43.47,3.53z","name":"Alabama"},"la":{"path":"m521.09,407.28c0.1,7.53 -0.24,15.32 1.67,22.61 2.08,2.49 2.82,5.51 3.15,8.67 1.87,2.78 5.27,4.95 4.59,8.72 1.61,2.18 -0.21,5.69 0.08,8.38 0.42,2.64 -4.36,4.89 -2.01,7.12 1.07,2.26 -0.92,5.31 -0.53,7.95 0.38,3.22 -2.37,5.7 -1.55,8.93 5.18,-2.4 10.98,-0.86 16.47,-1.09 5.72,1.7 11.56,4.87 17.56,4.26 2.93,-2.25 5.94,0.36 8.98,0.93 1.08,-3.4 -4.22,-0.81 -5.8,-2.2 -1.91,-0.36 -2.89,-2.3 -1.17,-3.4 2.08,-1.1 4.08,-1.09 5.66,0.04 2.15,-1.39 5.6,-0.24 6.26,2.38 -0.33,3.62 3.42,1.7 5.28,3.15 3.83,1.5 -1.41,4.07 0.83,5.37 2.88,0.97 5.73,2.94 8.62,3.29 3.51,-0.05 2.81,-4.53 6.47,-4.17 1.83,-2.9 4.44,-0.25 4.39,2.31 1.53,1.64 4,-3.68 1.98,-3.66 0.22,-3.37 2.17,-3.21 4.31,-5.41 1.59,0.95 0.91,2.82 1.41,4.16 3.33,0.39 7.44,1.09 9.34,4.06 2.79,0.08 5.17,1.1 5.56,-2.56 -2.68,-0.27 -4.15,-3.88 -7.35,-3.19 -2.31,0.06 -6.3,-1.62 -6.15,-3.77 1.62,-3.62 2.23,-1.74 2.03,-4.38 2.88,1.09 5.69,-2.27 3.22,-4.47 0.46,-4.62 -3.73,-0.15 -3.34,2.19 -1.36,1.21 -6.35,-0.96 -4.6,-3.27 1.71,-1.84 4.2,-4.5 2.19,-6.95 -0.13,-3.26 -2.69,-5.21 -4.47,-7.38 0.52,-2.7 2.26,-7.35 -2.36,-5.46 -10.43,1.28 -20.97,0.69 -31.45,1.12 -1.61,-3.72 -0.02,-7.76 0.16,-11.59 2.66,-4.86 5.46,-9.65 8.25,-14.44 -2.04,-2.82 3.52,-4.45 -0.74,-6.48 -0.53,-2.15 -1.29,-4.65 -2.32,-6.83 -0.08,-3.1 0.9,-7.3 -3.62,-5.79 -17,0.28 -34,0.57 -51,0.85z","name":"Louisiana"},"ms":{"path":"m591.03,363.5c-1.45,1.74 -4.03,3.15 -4.63,6.03 -1.4,2.22 1.43,5.74 -2.69,6.07 -1.48,1.97 -4.77,4.42 -3.4,7.17 -1.36,1.83 -3.59,3.95 -3.48,7.01 -2.16,2.66 1.55,5.28 -0.27,7.12 -0.45,1.84 2.25,4.42 1.35,7.03 -1.92,2.71 -1.63,6.55 -0.61,9.53 1.6,2.4 0.78,5.54 3.73,6.94 -0.95,2.53 -1.41,3.75 -1.87,6.31 -2.55,4.96 -6.07,9.62 -7.89,14.84 0.01,2.98 -1.44,6.14 -0.14,8.97 11.4,-0.36 22.87,0.25 34.19,-1.5 2.75,2.21 -2.19,6.39 1.33,8.15 2.82,1.62 2.28,5.18 3.89,7.63 2.07,-1.86 2.51,-6.19 5.82,-4.07 3.21,-0.67 6.85,-3.02 9.89,-0.64 3.62,0.73 6.01,-0.27 4.42,-4.26 -0.81,-10.1 -2.99,-20.07 -3.84,-30.15 0.14,-21.99 1.48,-43.98 0.64,-65.97 -12.15,1.26 -24.29,2.52 -36.44,3.78z","name":"Mississippi"},"ia":{"path":"m476.25,181.16c-3.42,-0.05 -2.16,5.68 0.72,6.29 0.54,2.07 -0.75,5.06 -1.41,7.35 -2.13,2.82 -0.93,5.45 1.04,7.92 1.22,4.34 2.24,8.85 4.05,13.06 0.6,3.22 1.29,6.38 3.41,9 0.02,3.49 1.27,6.69 2.3,9.91 -0.04,3.54 0.03,7.05 2.08,10.09 22.2,-1.02 44.44,-1.75 66.66,-2.63 0.77,1.43 3.25,7.11 4.37,4.25 -0.96,-2.5 1.19,-4.52 3.57,-4.72 -0.88,-2.62 1.19,-4.59 2.5,-6.28 1.27,-2.92 -1.39,-4.02 -2.41,-6.31 0.69,-2.9 1.79,-5.3 5.13,-5.46 2.88,-0.83 6.57,-1.81 6.65,-5.41 1.76,-3.04 3.73,-8.01 -0.26,-10.18 -2.74,-1.06 -1.75,-5.27 -5.21,-5.14 -0.64,-1.97 -0.85,-4.76 -4.19,-4.21 -2.75,-0.8 -4.55,-3.47 -5.37,-6 -1.36,-2.89 2.01,-4.72 1.65,-7.28 -3.82,-0.4 -1.19,-6.5 -5.03,-5.47 -26.75,0.41 -53.5,0.81 -80.25,1.22z","name":"Iowa"},"mn":{"path":"m497.03,53.84c-0.69,2.52 0.93,7.42 -1.31,8.34 -9.65,-0.01 -19.29,-0.02 -28.94,-0.03 1.16,2.87 2.18,5.76 0.97,8.81 0.05,5.74 -0.79,11.86 2.51,16.95 2.04,3.78 0.64,8.47 1.5,12.6 0.82,6.84 1.76,13.67 3.55,20.32 0.05,3.83 0.88,7.8 0.03,11.53 -1.57,1.74 -4.91,3.29 -2.22,5.78 1.89,1.83 5.05,2.94 4.58,6.1 0.28,11.9 0.25,23.83 0.42,35.75 26.72,-0.38 53.44,-0.75 80.16,-1.13 -0.15,-3.62 -0.46,-7.93 -4.36,-9.47 -3.02,-1.66 -6.24,-3.1 -7.63,-6.5 -0.72,-3.61 -5.32,-1.16 -6.05,-4.61 -1.56,-2.09 -5.29,-0.37 -6.57,-3.78 -1.66,-2.1 -0.52,-5.5 -1.1,-8.1 -1.34,-2.93 1.65,-4.99 1.47,-7.54 -0.2,-3.22 -5.36,-3.85 -2.24,-7.43 0.41,-4.47 5.39,-5.33 7.61,-8.59 0.24,-3.87 -0.73,-8.14 0.52,-11.77 1.76,-3.14 5.17,-5.1 8.28,-6.26 1.92,-2.08 3.66,-4.57 6.13,-5.81 2.54,-4.97 6.04,-9.99 11.81,-11.4 4.55,-1.98 9.12,-3.92 13.6,-6.04 0.73,-3.15 -3.7,-0.18 -5.06,0.03 -0.82,-3.87 -4.2,-3.09 -7.28,-2.87 -2.25,-0.87 -5.34,2.83 -6,-0.66 -1.13,-3.5 -4.51,0.72 -5.88,2.13 -2.33,1.63 -6.22,1.16 -8.06,-0.56 0.94,-3.05 -4.61,-0.39 -4.53,-3.96 -0.16,-2.3 -3.48,1.3 -5.77,-1.2 -3.04,-0.91 -5.5,-3.22 -8.29,-4.38 -2.49,0.4 -5.86,-2.38 -6.7,1.5 -1.17,0.79 -7.15,1.83 -5.93,-1.54 -2.99,0.03 -6.03,-0.05 -7.53,-1.75 -2.6,0.59 -5.72,-0.41 -5.9,-3.43 -0.88,-3.28 -1.44,-6.61 -1.88,-9.98 -1.23,-0.6 -2.54,-1.02 -3.91,-1.06z","name":"Minnesota"},"ok":{"path":"m363.31,330.03c17.51,1.12 35.04,1.73 52.56,2.47 -1.37,13.62 -2.89,27.23 -2.83,40.93 -0.92,3.93 3.48,5.78 6.14,7.66 0.56,-5.56 2.96,1.46 4.25,-1.31 0.93,-1.5 5.57,1.68 3.39,4.42 1.59,0.66 4.76,0.51 6.73,1.82 2.79,-0.99 5.16,3.32 7.03,1.26 1.82,-1.93 5.59,-0.31 6.5,2.02 2.44,0.79 1.71,5.84 4.76,3.05 1.39,-1.65 6.25,-1.17 6.69,1.21 1.28,1.5 5.69,3.72 7.39,1.92 0.33,-2.75 3.38,-5.95 4.59,-1.83 3.59,0.38 6.96,2 10.46,3 2.28,-1.86 2.44,-4.68 6.53,-3.41 2.53,1.92 3.8,-1.41 6.31,-1.16 0.85,2.42 5.2,2.41 6.19,-0.5 3.2,-0.2 3.66,3.71 6.55,4.35 1.86,0.4 6.31,3.63 5.36,0.18 -0.32,-12.27 0.1,-24.59 -0.7,-36.82 -1.15,-6.03 -1.01,-12.18 -1.43,-18.25 -1.32,-5.29 -2.05,-10.73 -2.07,-16.18 -20.01,0.66 -40.04,-0.04 -60.06,-0.22 -27.85,-1.32 -55.73,-2.3 -83.53,-4.56 -0.27,3.31 -0.54,6.63 -0.81,9.94z","name":"Oklahoma"},"tx":{"path":"m359.47,330.97c2.34,-0.11 -0.86,-1.81 0,0z m0.72,18.31c-1.64,20.84 -2.52,41.75 -4.68,62.55 -0.51,4.33 -0.99,8.66 -1.51,12.98 -17.84,-0.87 -35.67,-1.93 -53.42,-3.89 -4.16,-0.41 -8.32,-0.76 -12.48,-1.11 -0.67,3.74 2.27,3.68 4.04,6.12 2.26,1.83 1.13,6.03 4.65,6.5 3.52,0.48 2.9,4.6 5.45,6.34 3.38,3.15 5.5,7.91 10.27,9.06 1.91,1.27 4,3.22 4.53,5.46 0.69,3.96 4.53,7.02 3.47,11.33 -0.88,5.15 2.22,9.63 5.93,12.88 2.18,2.95 5.14,4.76 8.63,5.78 1.88,1.95 3.01,3.88 5.72,4.88 2.59,0.18 5.38,4.34 7.35,1.18 2.59,-3.14 5.48,-6.41 6.05,-10.55 1.26,-2.82 3.58,-4.32 6.5,-5.06 2.72,-1.59 5.32,-2.13 7.47,0.62 4.91,0.57 10.2,0.53 14.79,2.22 2.83,1.43 2.56,4.53 5.17,6.33 1.73,2.05 4.83,3.37 5.81,5.82 1.37,2.07 2.66,4.26 2.69,7.03 1.62,4.34 4.17,8.51 5.31,12.94 -0.24,2.77 4.65,2.49 4.95,5.51 2.24,4.08 4.37,9.17 9.21,10.49 3.28,2 0.03,5.04 0.91,7.5 3.28,0.87 -0.01,4.68 0.94,6.67 2.53,1.36 4.37,3.2 4.22,6.44 0.39,3.34 2.13,6.83 5.69,7.54 3.01,1.93 6.69,2.13 9.87,3.4 2.28,1.79 5.15,4.09 8.16,2.83 3.46,0.46 6.77,1.29 9.37,3.75 1.43,2.54 6.51,-0.91 4.31,-2.89 -2.04,-3.39 -1.3,-7.79 -2.83,-11.46 -0.63,-3.07 -2.39,-5.95 -0.99,-9.1 1.17,-4.9 2.87,-9.76 4.04,-14.71 -3.37,-1.01 -2.07,-5.47 1.21,-4.71 3.99,0.42 3.65,-6.43 7.81,-6.05 5.25,-1.56 9.07,-6 14.16,-8.05 6.91,-2.81 13.62,-6.46 18.72,-12.05 2.58,-2.98 7.09,-3.95 8.69,-7.75 5,-2.22 9.8,-4.93 15.22,-6 -0.97,-2.64 0.52,-4.86 1.32,-7.22 0.39,-2.99 0.19,-6.07 1.18,-8.94 -3.15,-2.27 0.38,-4.91 1.38,-7.41 -0.2,-2.8 1.42,-6.25 0.09,-8.66 0.3,-2.93 -1.49,-5.14 -3.35,-7.29 -2.46,-2.64 -1.11,-6.91 -3.87,-9.52 -2.53,-4.57 -1.59,-10.19 -2.25,-15.22 0.02,-5 0.19,-10 -0.5,-14.97 -2.63,-2.31 -5.52,2.33 -7.52,-1.37 -3.1,-2.07 -7.66,-2.1 -9.73,-5.68 -2.31,-2.48 -3.82,2.84 -7.18,0.96 -1.91,-2.73 -3.59,0.03 -5.98,0.18 -2.27,-1.15 -6.07,-1.48 -6.09,1.76 -2.76,2.37 -5.95,-0.93 -8.94,-1.28 -3,1.38 -5.23,-3.83 -6.3,-1.87 -0.15,2.66 -2.52,5.1 -5.13,3.34 -3.23,-0.15 -4.91,-2.49 -6.57,-3.89 -2.95,-1.74 -4.3,2.32 -6.94,0.88 -1.48,-1.39 -1.87,-3.6 -3.92,-5.65 -3.06,-2.83 -5.03,3.17 -7.13,0.23 -2.05,-2.11 -5.57,-0.83 -7.94,-2.69 -3.56,0.59 -5.54,-0.24 -4.13,-4.11 -1.89,-1.85 -2.28,1.21 -4.77,-0.14 -0.59,-0.41 -3.45,1.78 -5,-1.11 -1.9,-1.9 -5.13,-3.22 -4.18,-6.45 0.03,-10.58 0.25,-21.15 1.66,-31.65 0.3,-2.99 0.6,-5.98 0.89,-8.98 -17.65,-0.63 -35.3,-1.27 -52.94,-2.22 -0.52,6.07 -1.04,12.15 -1.56,18.22z M466.53,518.63c-5.2,7.17 2.93,-3.27 0,0z","name":"Texas"},"nm":{"path":"m242.72,428.78c4.82,0.63 9.65,1.25 14.47,1.88 0.43,-3.33 0.85,-6.67 1.28,-10 9.7,0.89 19.4,1.86 29.09,2.78 -0.9,-3.14 -1.39,-5.98 2.84,-4.5 18.29,1.28 36.48,3.79 54.81,4.49 2.45,-0.6 7.66,2.13 7.99,-1.01 3.06,-22.93 3.75,-46.09 5.59,-69.14 0.54,-7.79 1.39,-15.56 2.02,-23.34 3.21,0.65 1.17,-4.81 2.07,-6.86 1.79,-4.38 -2.87,-3.37 -5.73,-3.85 -32.35,-3.3 -64.71,-6.59 -97.06,-9.89 -5.79,39.81 -11.58,79.63 -17.38,119.44z","name":"New Mexico"},"ks":{"path":"m380.53,320.34c25.06,1.17 50.11,2.71 75.19,3.35 17.22,0.07 34.44,0.63 51.66,0.18 -0.25,-12.69 0.23,-25.42 -0.47,-38.08 -0.61,-2.83 -0.17,-6.27 -1.38,-8.74 -3.04,-2.03 -6.02,-5.19 -6.68,-8.77 -0.43,-2.51 4.3,-4.59 1.29,-6.64 -3.02,0.54 -4.05,-3.34 -7.17,-2.43 -36.21,-0.82 -72.43,-1.33 -108.63,-2.5 -1.27,21.21 -2.54,42.42 -3.81,63.63z","name":"Kansas"},"ne":{"path":"m353.38,230.59c10.76,0.96 21.27,2.72 32.03,3.66 -0.37,7.11 -0.71,14.23 -1.06,21.34 36.49,1.29 73,1.84 109.5,2.56 -0.31,-1.17 -3.13,-4.05 -4.03,-6.15 -1.99,-2.11 -0.36,-5.13 -2.45,-7.34 -2.42,-3.19 -1.66,-7.14 -2.2,-10.79 -1.66,-2.86 -1.45,-6.25 -2.29,-9.26 -2.94,-2.85 -2.34,-7.01 -3.95,-10.49 -1.13,-3.1 -2.18,-6.19 -2.62,-9.47 -3.51,1.32 -2.89,-3.07 -4.85,-4.29 -2.4,-1.68 -5.57,-1.85 -7.72,-3.93 -3.79,0.07 -7.65,1.04 -11.13,1.94 -2.52,-2.2 -6.03,-3.13 -7.91,-6.06 -13.61,0.96 -27.23,-0.49 -40.83,-1.11 -15.5,-1.05 -31.02,-1.79 -46.51,-2.86 -1.67,14.08 -2.83,28.17 -4,42.25z","name":"Nebraska"},"sd":{"path":"m357.44,187.41c25.68,1.58 51.37,3.15 77.06,4.26 3.58,-0.01 7.34,-0.51 10.81,-0.23 1.8,2.9 5.24,3.85 7.69,6 3.55,-1.45 7.52,-1.89 11.25,-1.91 2.45,2.67 7.26,2.29 9.15,5.33 1.32,4.76 3.27,1.86 0.18,-1.15 -1.53,-2.17 1.46,-4.6 1.56,-6.99 1.2,-2.87 1.38,-5.28 -1.58,-6.75 -0.5,-2.04 -0.73,-6.65 2.41,-5.84 2.62,-0.28 0.39,-5.28 1.06,-7.5 -0.32,-9.7 0.19,-19.47 -0.64,-29.13 -0.24,-3.58 -6.26,-4.19 -5.42,-8.4 1.09,-1.22 5.81,-4.38 2.75,-5.4 -27.23,-0.89 -54.5,-1.01 -81.67,-3.15 -9.79,-0.62 -19.57,-1.24 -29.36,-1.86 -1.75,20.91 -3.5,41.81 -5.25,62.72z","name":"South Dakota"},"nd":{"path":"m362.88,123.72c26.46,1.49 52.89,3.7 79.4,3.91 10.84,0.26 21.67,0.52 32.51,0.78 0.01,-5.53 -1.38,-10.82 -2.5,-16.17 -1.27,-7.42 -2.05,-14.89 -2.13,-22.42 -2.61,-4.16 -4.11,-9 -3.48,-13.94 -0.44,-3.25 0.67,-6.57 0.3,-9.7 -0.15,-4.01 -2.83,-4.61 -6.31,-4.12 -25.15,-0.47 -50.33,-1.05 -75.41,-3.06 -5.17,-0.49 -10.33,-0.98 -15.5,-1.47 -2.29,22.06 -4.58,44.13 -6.88,66.19z","name":"North Dakota"},"wy":{"path":"m240.16,217.84c37.4,4.49 74.29,8.23 111.69,12.72 2.5,-29.2 5.5,-57.65 8,-86.84 -35.26,-4.45 -70.52,-8.9 -105.78,-13.34 -4.64,29.16 -9.27,58.31 -13.91,87.47z","name":"Wyoming"},"mt":{"path":"m192.59,52.19c0.84,2.76 3.25,5.4 3.2,8.23 -1.5,2.79 -1,5.49 0.52,8.15 3.4,0.39 4.18,3.44 5.26,6.16 1.43,3.34 2.55,6.88 5.37,9.34 0.88,2.21 5.27,1.18 4.34,4.72 -2.23,6.21 -5.45,12.23 -7.06,18.56 0.02,3.34 3.4,5.25 5.73,2.22 1.61,-2.43 5.63,-3.04 4.69,0.97 -0.5,5.3 1.81,10.35 2.59,15.53 1.9,2 5.27,3.44 5.68,6.31 -0.71,1.91 -0.39,8.78 2.32,5.14 1.85,-1.89 4.93,-0.29 6.85,0.86 3.28,-1.63 7.26,-1.21 10.34,0.69 3.69,0.41 1.52,-5 5.95,-4.08 2.71,-0.42 2.01,6.69 3.21,4.1 0.56,-3.26 1.09,-6.54 1.68,-9.8 35.57,4.49 71.15,8.96 106.72,13.44 2.9,-28.44 5.79,-56.88 8.69,-85.31 -28.84,-2.29 -57.55,-5.91 -86.19,-9.99 -26.71,-4.12 -53.36,-8.71 -79.73,-14.68 -3.05,-0.61 -6.99,-2.59 -6.53,2.19 -1.21,5.75 -2.42,11.51 -3.62,17.26z","name":"Montana"},"co":{"path":"m260.17,308.53c39.89,4.09 79.51,8.26 119.39,11.91 1.61,-28.46 3.23,-56.92 4.84,-85.38 -37.47,-4.17 -74.94,-8.33 -112.41,-12.5 -4.03,28.98 -7.8,56.99 -11.83,85.97z","name":"Colorado"},"id":{"path":"m169.84,91.72c0.52,3.07 2.27,5.25 4.94,6.78 0.4,3.02 -0.61,5.46 -3.03,7.31 -2.3,2.7 -4.38,5.97 -6.09,8.83 0.39,2.93 -2.57,3.54 -4.23,4.8 -1.77,2.31 -4.28,4.3 -3.93,7.5 -0.64,2.43 4.69,0.57 4.09,4.34 -5.19,11.17 -6.78,23.51 -10.13,35.32 -0.79,3.16 -1.22,4.91 -2.01,8.08 56.92,12.84 62.26,13.45 93.58,19.41 2.75,-17.6 5.5,-35.21 8.25,-52.81 -2.66,-0.84 -0.58,-6.52 -4.23,-4.97 -1.24,1.7 -1.62,4.95 -5.17,3.47 -3.11,-1.99 -6.81,-1.34 -10.13,-0.56 -2.53,-1.76 -5.91,-2.01 -7.69,0.88 -1.75,-0.05 -3.29,-3.39 -2.79,-5.36 1.91,-3.98 -2.85,-5.89 -5.05,-8.27 -0.98,-5.88 -3.48,-11.64 -2.5,-17.69 -1.86,-0.01 -4.25,2.69 -6.47,3.63 -2.21,0.18 -4.52,-3.09 -4.1,-5.31 1.19,-5.37 4.07,-10.37 5.88,-15.6 1.95,-2.64 1.12,-5.57 -2.41,-5.62 -1.55,-3.37 -4.92,-5.66 -5.61,-9.53 -1.31,-2.63 -1.42,-6.47 -5.06,-6.76 -0.99,-1.85 -3.18,-4.47 -1.91,-6.73 2.09,-2.98 -0.34,-5.7 -1.53,-8.5 -2.13,-3.05 0.55,-6.68 0.67,-10.01 0.9,-4.35 1.8,-8.69 2.69,-13.04 -4.18,-0.78 -8.35,-1.56 -12.53,-2.34 -4.5,20.92 -9,41.83 -13.5,62.75z","name":"Idaho"},"ut":{"path":"m176.34,297.78c27.57,3.92 55.15,7.83 82.72,11.75 4.04,-29.08 8.08,-58.17 12.13,-87.25 -10.83,-1.14 -21.65,-2.33 -32.47,-3.59 1.43,-7.93 2.82,-15.85 3.84,-23.84 -15.27,-2.85 -30.54,-5.71 -45.81,-8.56 -6.8,37.17 -13.6,74.33 -20.41,111.5z","name":"Utah"},"az":{"path":"m173.19,314.66c-2.49,-0.06 -3.05,4.43 -6.38,2.94 -0.74,-2.87 -3.59,-2.82 -5.59,-4.22 -3.74,0.74 -2.37,4.58 -2.68,7.41 -0.52,5.04 -0.42,10.21 -0.89,15.22 -2.19,2.33 -2.44,5.78 -0.24,8.19 2.32,2.62 0.58,7.52 4.09,9.09 0.98,3.59 -2.89,4.83 -5.41,6.09 -3.29,2.46 -3.28,6.86 -3.88,10.47 -1.25,2.44 -4.81,2.39 -4.92,4.97 0.47,2.18 6.18,0.38 3.42,4.54 -0.65,2.75 -3.14,3.45 -5.62,3.78 -3.6,1.45 -2.69,4.7 0.77,5.44 14.69,7.84 28.52,17.13 43.01,25.32 5.79,3.19 11.27,7.21 17.27,9.88 11.71,2.83 23.75,3.45 35.68,4.87 5.71,-39.38 11.42,-78.75 17.13,-118.13 -27.58,-3.93 -55.17,-7.85 -82.75,-11.78 -1,5.31 -2,10.63 -3,15.94z","name":"Arizona"},"nv":{"path":"m84.84,232.41c22.96,34.61 45.92,69.23 68.88,103.84 3.66,2.65 3.19,-3.47 3.27,-5.71 0.37,-5.43 0.36,-11.24 1.08,-16.44 2.05,-2.03 4.26,-2 6.08,-0.39 2.62,-0.16 3.86,5.9 6.03,1.27 2.74,-0.82 2.66,-3.64 3.13,-6.41 7.5,-40.87 15,-81.75 22.51,-122.62 -30.72,-6.81 -61.44,-13.63 -92.16,-20.44 -6.27,22.3 -12.54,44.6 -18.81,66.91z","name":"Nevada"},"or":{"path":"M67.16,62.81C64.24,70.42 62.73,78.57 58.5,85.63c-2.86,8.53 -5.96,16.93 -10.17,24.89 -3.06,6.61 -8,12.31 -11.32,18.7 -1.03,6.5 -0.64,13.05 -0.36,19.6 37.23,8.7 74.46,16.69 111.69,25.39 3.45,-13.15 6.51,-25.75 10.19,-38.81 1.2,-2.48 3.15,-6.06 -1.1,-5.42 -2.58,-1.78 -0.23,-4.45 -0.38,-6.91 2.3,-2.82 4.36,-5.82 7.47,-7.75 1.75,-5.08 5.43,-9.19 9.03,-13.06 1.66,-3.48 -2.46,-3.92 -3.39,-6.47 -0.25,-3.79 -3.56,-4.26 -6.62,-4.99 -7.63,-2.2 -15.38,-4.2 -23.21,-5.54 -4.9,0.03 -9.79,0.06 -14.69,0.09 -0.95,-2.84 -4.67,1.86 -7.11,0.5 -2.61,0.82 -4.42,-2.63 -6.57,-1.28 -2.61,-0.06 -5.23,0.11 -7.15,-1.87 -3.09,-1.53 -6.33,-1.81 -9.5,-3.1 -1.87,3.03 -5.69,1.22 -8.53,1.31 -1.65,-1.64 -5.79,-3.02 -6.03,-4.81 1.1,-2.44 0.78,-5.93 0.53,-8.59 -0.42,-3.92 -4.72,-2.63 -6.25,-4.49C74.59,58.67 69.45,62.45 67.16,62.81z","name":"Oregon"},"wa":{"path":"m101.38,8.72c0.05,2.75 2.93,5.39 3.25,8.16 -1.92,2.33 -1.78,5.19 -1.32,7.71 -1.81,2.64 1.63,4.82 0.67,7.42 -3.6,1.52 -2.43,-3.7 -4.86,-4.99 -3.34,-2.24 1.47,-3.87 1.17,-5.42 -2.5,-1.11 -2.24,3.88 -3.69,4.17C92.33,26.39 88.86,23.04 84.76,22.57 79.82,20.66 75.28,17.69 72.25,13.25c-3.13,-0.98 -1.96,4.97 -3.25,6.95 -0.63,2.8 2.59,5.06 1.41,8.21 0.52,3.86 -1.29,7.55 0.18,11.29 -1.06,2.88 4.75,5.54 2.94,6.39 -3.45,-1.05 -6.2,3.2 -2.25,4.34 1.57,0.97 -0.61,6.32 -3.3,5.43 -1.83,2.15 1.28,6.86 4.14,4.17 3.77,-1.55 2.75,3.51 5.83,3.13 2.81,-0.24 4.26,3.31 4.54,5.61 0.04,2.48 -0.15,6.02 -0.26,7.78 2.63,1.76 5.01,4.26 8.46,3.62 3.2,0.66 4.7,-3.26 7.97,-0.5 3.01,0.48 6.37,1.55 8.79,3.66 3.03,0.92 6.02,-1.78 8.19,1.05 3.44,1.3 6.67,0.03 9.84,-1.4 0.99,1.78 4.42,1.32 7,1.3 5.35,-0.19 10.68,-0.16 15.82,1.55 6.99,1.44 13.78,3.45 20.65,5.4 4.47,-20.85 8.94,-41.71 13.41,-62.56 -19.81,-3.93 -39.37,-9.21 -58.73,-14.66 -7.27,-1.53 -14.4,-3.52 -21.46,-5.87L101.75,8.45 101.38,8.72z M95.5,15.16C94.05,13.72 92.15,14.26 94.72,17.63 94.39,13.84 99.19,18.11 98.98,14.18 98.24,12.75 96.05,14.08 95.5,15.16z m2.31,1.91c-3.13,3.04 1.36,2.18 0.16,-0.25l-0.16,0.25z","name":"Washington"},"ca":{"path":"m35.06,153.94c-0.1,4.04 0.4,8.21 -1.99,11.75 -1.86,3.68 -2.55,8.24 -6.48,10.38 -1.19,2.11 -3.49,3.38 -3.59,6.45 -1.94,3.49 2.49,5.65 2.91,8.98 1.54,3.39 2.34,6.94 1.63,10.65 0,2.92 -2.79,5.01 -2.24,8.14 0.05,2.97 -2.24,5.87 0.04,8.54 2.58,5 6.38,9.93 6.71,15.69 -0.54,2.77 -0.99,5.37 1.81,7.17 1.6,1.95 4.49,3.66 2.79,6.46 -1.73,3.87 -1.14,8.04 -1.09,12.16 1.68,2.67 2.83,6.76 6.66,6.53 1.48,2.33 0.97,4.84 -0.22,7.13 -2.5,1.53 -4.36,2.73 -3.66,6.08 0.27,3.49 4.27,5.34 4.36,9.01 1.46,6.2 4.13,11.92 7.59,17.25 0.71,2.57 2.16,4.34 2.9,6.41 -0.24,3.33 -1.93,6.49 -2.41,9.87 -1.66,2.61 1.19,5.52 3.99,5.12 4.03,0.15 7.27,3.31 11.01,4.04 3,-0.55 4.74,2.9 6.07,5.11 1.54,2.71 2.37,6 5.76,6.88 2.51,1.14 6.19,0.05 7.17,3.45 2.41,2.72 -2.39,5.05 1.41,5.17 2.73,1.87 5.56,-1.74 7.56,-0.74 2.13,2.06 4.05,4.2 4.93,7.05 4.3,4.9 1.44,11.77 2.79,17.52 14.73,1.94 29.44,4.72 44.27,5.38 2.78,1.19 6.19,-4.43 2.84,-4.65 -3.13,0.64 -2.83,-4.02 -1.36,-4.66 3.15,-0.88 4.92,-3.83 4.65,-7.04 0.47,-3.98 3.27,-7.43 7.22,-8.4 3.43,-2.04 -0.33,-3.58 -0.79,-5.79 -0.23,-3.65 -1.95,-6.81 -3.62,-9.89 2.02,-3.66 -2.22,-3.32 -3.16,-6.24 -22.6,-34.1 -45.2,-68.19 -67.81,-102.29 6.27,-22.44 12.54,-44.88 18.81,-67.31 -22.04,-5.16 -44.08,-10.31 -66.13,-15.47 -0.45,1.38 -0.9,2.75 -1.34,4.13z m24.13,184.72c-0.27,3.05 7.99,3.06 4.7,2.07 -1.63,-0.35 -3.17,-2.46 -4.7,-2.07z m-5.16,0.38c0.33,3.71 5.81,0.51 1.31,-0.04 -0.44,0.01 -0.88,0.02 -1.31,0.04z M79.69,357.5c-0.2,1.58 4.42,6 3.16,2.37C82.22,358.91 80.8,357.6 79.69,357.5z M77.75,369.13c-0.14,1.55 3.2,3.89 1.32,1.26C78.6,369.72 77.39,366.55 77.75,369.13z","name":"California"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/jqvmap/dist/maps/jquery.vmap.world.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', {"width":950,"height":550,"paths":{"id":{"path":"M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z","name":"Indonesia"},"pg":{"path":"M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z","name":"Papua New Guinea"},"mx":{"path":"M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z","name":"Mexico"},"ee":{"path":"M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z","name":"Estonia"},"dz":{"path":"M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z","name":"Algeria"},"ma":{"path":"M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z","name":"Morocco"},"mr":{"path":"M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z","name":"Mauritania"},"sn":{"path":"M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z","name":"Senegal"},"gm":{"path":"M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z","name":"Gambia"},"gw":{"path":"M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z","name":"Guinea-Bissau"},"gn":{"path":"M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z","name":"Guinea"},"sl":{"path":"M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z","name":"Sierra Leone"},"lr":{"path":"M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z","name":"Liberia"},"ci":{"path":"M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z","name":"Cote d'Ivoire"},"ml":{"path":"M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z","name":"Mali"},"bf":{"path":"M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z","name":"Burkina Faso"},"ne":{"path":"M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z","name":"Niger"},"gh":{"path":"M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z","name":"Ghana"},"tg":{"path":"M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z","name":"Togo"},"bj":{"path":"M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z","name":"Benin"},"ng":{"path":"M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z","name":"Nigeria"},"tn":{"path":"M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z","name":"Tunisia"},"ly":{"path":"M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z","name":"Libya"},"eg":{"path":"M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z","name":"Egypt"},"td":{"path":"M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z","name":"Chad"},"sd":{"path":"M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z","name":"Sudan"},"cm":{"path":"M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z","name":"Cameroon"},"er":{"path":"M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z","name":"Eritrea"},"dj":{"path":"M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z","name":"Djibouti"},"et":{"path":"M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z","name":"Ethiopia"},"so":{"path":"M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z","name":"Somalia"},"ye":{"path":"M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z","name":"Yemen"},"cf":{"path":"M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z","name":"Central African Republic"},"st":{"path":"M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z","name":"Sao Tome and Principe"},"gq":{"path":"M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z","name":"Equatorial Guinea"},"ga":{"path":"M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z","name":"Gabon"},"cg":{"path":"M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z","name":"Congo"},"ao":{"path":"M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z","name":"Angola"},"cd":{"path":"M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z","name":"Congo"},"rw":{"path":"M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z","name":"Rwanda"},"bi":{"path":"M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z","name":"Burundi"},"ug":{"path":"M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z","name":"Uganda"},"ke":{"path":"M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z","name":"Kenya"},"tz":{"path":"M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z","name":"Tanzania"},"zm":{"path":"M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z","name":"Zambia"},"mw":{"path":"M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z","name":"Malawi"},"mz":{"path":"M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z","name":"Mozambique"},"zw":{"path":"M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z","name":"Zimbabwe"},"na":{"path":"M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z","name":"Namibia"},"bw":{"path":"M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z","name":"Botswana"},"sz":{"path":"M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z","name":"Swaziland"},"ls":{"path":"M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z","name":"Lesotho"},"za":{"path":"M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z","name":"South Africa"},"gl":{"path":"M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z","name":"Greenland"},"au":{"path":"M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z","name":"Australia"},"nz":{"path":"M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z","name":"New Zealand"},"nc":{"path":"M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z","name":"New Caledonia"},"my":{"path":"M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z","name":"Malaysia"},"bn":{"path":"M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z","name":"Brunei Darussalam"},"tl":{"path":"M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z","name":"Timor-Leste"},"sb":{"path":"M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z","name":"Solomon Islands"},"vu":{"path":"M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z","name":"Vanuatu"},"fj":{"path":"M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z","name":"Fiji"},"ph":{"path":"M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z","name":"Philippines"},"cn":{"path":"M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z","name":"China"},"tw":{"path":"M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z","name":"Taiwan"},"jp":{"path":"M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z","name":"Japan"},"ru":{"path":"M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z","name":"Russian Federation"},"us":{"path":"M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z","name":"United States of America"},"mu":{"path":"M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z","name":"Mauritius"},"re":{"path":"M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z","name":"Reunion"},"mg":{"path":"M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z","name":"Madagascar"},"km":{"path":"M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z","name":"Comoros"},"sc":{"path":"M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z","name":"Seychelles"},"mv":{"path":"M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z","name":"Maldives"},"pt":{"path":"M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z","name":"Portugal"},"es":{"path":"M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z","name":"Spain"},"cv":{"path":"M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z","name":"Cape Verde"},"pf":{"path":"M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z","name":"French Polynesia"},"kn":{"path":"M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z","name":"Saint Kitts and Nevis"},"ag":{"path":"M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z","name":"Antigua and Barbuda"},"dm":{"path":"M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z","name":"Dominica"},"lc":{"path":"M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z","name":"Saint Lucia"},"bb":{"path":"M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z","name":"Barbados"},"gd":{"path":"M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z","name":"Grenada"},"tt":{"path":"M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z","name":"Trinidad and Tobago"},"do":{"path":"M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z","name":"Dominican Republic"},"ht":{"path":"M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z","name":"Haiti"},"fk":{"path":"M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z","name":"Falkland Islands"},"is":{"path":"M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z","name":"Iceland"},"no":{"path":"M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z","name":"Norway"},"lk":{"path":"M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z","name":"Sri Lanka"},"cu":{"path":"M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z","name":"Cuba"},"bs":{"path":"M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z","name":"Bahamas"},"jm":{"path":"M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z","name":"Jamaica"},"ec":{"path":"M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z","name":"Ecuador"},"ca":{"path":"M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z","name":"Canada"},"gt":{"path":"M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z","name":"Guatemala"},"hn":{"path":"M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z","name":"Honduras"},"sv":{"path":"M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z","name":"El Salvador"},"ni":{"path":"M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z","name":"Nicaragua"},"cr":{"path":"M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z","name":"Costa Rica"},"pa":{"path":"M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z","name":"Panama"},"co":{"path":"M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z","name":"Colombia"},"ve":{"path":"M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z","name":"Venezuela"},"gy":{"path":"M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z","name":"Guyana"},"sr":{"path":"M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z","name":"Suriname"},"gf":{"path":"M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z","name":"French Guiana"},"pe":{"path":"M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z","name":"Peru"},"bo":{"path":"M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z","name":"Bolivia"},"py":{"path":"M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z","name":"Paraguay"},"uy":{"path":"M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z","name":"Uruguay"},"ar":{"path":"M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z","name":"Argentina"},"cl":{"path":"M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z","name":"Chile"},"br":{"path":"M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z","name":"Brazil"},"bz":{"path":"M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z","name":"Belize"},"mn":{"path":"M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z","name":"Mongolia"},"kp":{"path":"M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z","name":"North Korea"},"kr":{"path":"M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z","name":"South Korea"},"kz":{"path":"M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z","name":"Kazakhstan"},"tm":{"path":"M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z","name":"Turkmenistan"},"uz":{"path":"M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z","name":"Uzbekistan"},"tj":{"path":"M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z","name":"Tajikistan"},"kg":{"path":"M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z","name":"Kyrgyz Republic"},"af":{"path":"M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z","name":"Afghanistan"},"pk":{"path":"M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z","name":"Pakistan"},"in":{"path":"M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z","name":"India"},"np":{"path":"M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z","name":"Nepal"},"bt":{"path":"M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z","name":"Bhutan"},"bd":{"path":"M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z","name":"Bangladesh"},"mm":{"path":"M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z","name":"Myanmar"},"th":{"path":"M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z","name":"Thailand"},"kh":{"path":"M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z","name":"Cambodia"},"la":{"path":"M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z","name":"Lao People's Democratic Republic"},"vn":{"path":"M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z","name":"Vietnam"},"ge":{"path":"M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z","name":"Georgia"},"am":{"path":"M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z","name":"Armenia"},"az":{"path":"M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z","name":"Azerbaijan"},"ir":{"path":"M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z","name":"Iran"},"tr":{"path":"M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z","name":"Turkey"},"om":{"path":"M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z","name":"Oman"},"ae":{"path":"M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z","name":"United Arab Emirates"},"qa":{"path":"M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z","name":"Qatar"},"kw":{"path":"M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z","name":"Kuwait"},"sa":{"path":"M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z","name":"Saudi Arabia"},"sy":{"path":"M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z","name":"Syrian Arab Republic"},"iq":{"path":"M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z","name":"Iraq"},"jo":{"path":"M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z","name":"Jordan"},"lb":{"path":"M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z","name":"Lebanon"},"il":{"path":"M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z","name":"Israel"},"cy":{"path":"M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z","name":"Cyprus"},"gb":{"path":"M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z","name":"United Kingdom"},"ie":{"path":"M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z","name":"Ireland"},"se":{"path":"M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z","name":"Sweden"},"fi":{"path":"M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z","name":"Finland"},"lv":{"path":"M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z","name":"Latvia"},"lt":{"path":"M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z","name":"Lithuania"},"by":{"path":"M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z","name":"Belarus"},"pl":{"path":"M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z","name":"Poland"},"it":{"path":"M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z","name":"Italy"},"fr":{"path":"M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z","name":"France"},"nl":{"path":"M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z","name":"Netherlands"},"be":{"path":"M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z","name":"Belgium"},"de":{"path":"M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z","name":"Germany"},"dk":{"path":"M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z","name":"Denmark"},"ch":{"path":"M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z","name":"Switzerland"},"cz":{"path":"M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z","name":"Czech Republic"},"sk":{"path":"M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z","name":"Slovakia"},"at":{"path":"M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z","name":"Austria"},"hu":{"path":"M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z","name":"Hungary"},"si":{"path":"M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z","name":"Slovenia"},"hr":{"path":"M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z","name":"Croatia"},"ba":{"path":"M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z","name":"Bosnia and Herzegovina"},"mt":{"path":"M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z","name":"Malta"},"ua":{"path":"M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z","name":"Ukraine"},"md":{"path":"M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z","name":"Moldova"},"ro":{"path":"M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z","name":"Romania"},"rs":{"path":"M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z","name":"Serbia"},"bg":{"path":"M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z","name":"Bulgaria"},"al":{"path":"M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z","name":"Albania"},"mk":{"path":"M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z","name":"Macedonia"},"gr":{"path":"M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z","name":"Greece"}}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!__webpack_provided_window_dot_jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (event.currentTarget === this.element[0]) {
            return;
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    /*
     _addOverClass(item:any):any {
     item.addOverClass();
     }
  
     _removeOverClass(item:any):any {
     item.removeOverClass();
     }*/
    FileDropDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ng2FileDrop]' },] },
    ];
    /** @nocollapse */
    FileDropDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    FileDropDirective.propDecorators = {
        'uploader': [{ type: core_1.Input },],
        'fileOver': [{ type: core_1.Output },],
        'onFileDrop': [{ type: core_1.Output },],
        'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
        'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
        'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
    };
    return FileDropDirective;
}());
exports.FileDropDirective = FileDropDirective;


/***/ },

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var file_like_object_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ },

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/***/ function(module, exports) {

"use strict";
"use strict";
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ },

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
        }
    };
    FileSelectDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ng2FileSelect]' },] },
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    FileSelectDirective.propDecorators = {
        'uploader': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.HostListener, args: ['change',] },],
    };
    return FileSelectDirective;
}());
exports.FileSelectDirective = FileSelectDirective;


/***/ },

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/***/ function(module, exports) {

"use strict";
"use strict";
var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    /*  MS office  */
    FileType.mime_doc = [
        'application/msword',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'application/vnd.ms-word.document.macroEnabled.12',
        'application/vnd.ms-word.template.macroEnabled.12'
    ];
    FileType.mime_xsl = [
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'application/vnd.ms-excel.sheet.macroEnabled.12',
        'application/vnd.ms-excel.template.macroEnabled.12',
        'application/vnd.ms-excel.addin.macroEnabled.12',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ];
    FileType.mime_ppt = [
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml.template',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ];
    /* PSD */
    FileType.mime_psd = [
        'image/photoshop',
        'image/x-photoshop',
        'image/psd',
        'application/photoshop',
        'application/psd',
        'zz-application/zz-winassoc-psd'
    ];
    /* Compressed files */
    FileType.mime_compress = [
        'application/x-gtar',
        'application/x-gcompress',
        'application/compress',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/octet-stream'
    ];
    return FileType;
}());
exports.FileType = FileType;


/***/ },

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var file_drop_directive_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
                    exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
                },] },
    ];
    /** @nocollapse */
    FileUploadModule.ctorParameters = [];
    return FileUploadModule;
}());
exports.FileUploadModule = FileUploadModule;


/***/ },

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var file_like_object_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        // todo
        /*item.headers.map((value, name) => {
         xhr.setRequestHeader(name, value);
         });*/
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // private _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*private _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ },

/***/ "./node_modules/ng2-file-upload/ng2-file-upload.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
var file_upload_module_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ },

/***/ "./node_modules/shufflejs/dist/shuffle.js":
/***/ function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["shuffle"] = factory();
	else
		root["shuffle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(2);
	
	var _matchesSelector = __webpack_require__(3);
	
	var _matchesSelector2 = _interopRequireDefault(_matchesSelector);
	
	var _arrayUniq = __webpack_require__(4);
	
	var _arrayUniq2 = _interopRequireDefault(_arrayUniq);
	
	var _xtend = __webpack_require__(5);
	
	var _xtend2 = _interopRequireDefault(_xtend);
	
	var _throttleit = __webpack_require__(6);
	
	var _throttleit2 = _interopRequireDefault(_throttleit);
	
	var _arrayParallel = __webpack_require__(7);
	
	var _arrayParallel2 = _interopRequireDefault(_arrayParallel);
	
	var _point = __webpack_require__(8);
	
	var _point2 = _interopRequireDefault(_point);
	
	var _shuffleItem = __webpack_require__(10);
	
	var _shuffleItem2 = _interopRequireDefault(_shuffleItem);
	
	var _classes = __webpack_require__(11);
	
	var _classes2 = _interopRequireDefault(_classes);
	
	var _getNumberStyle = __webpack_require__(12);
	
	var _getNumberStyle2 = _interopRequireDefault(_getNumberStyle);
	
	var _sorter = __webpack_require__(14);
	
	var _sorter2 = _interopRequireDefault(_sorter);
	
	var _onTransitionEnd = __webpack_require__(15);
	
	var _layout2 = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function toArray(arrayLike) {
	  return Array.prototype.slice.call(arrayLike);
	}
	
	function arrayMax(array) {
	  return Math.max.apply(Math, array);
	}
	
	function arrayIncludes(array, obj) {
	  if (arguments.length === 2) {
	    return arrayIncludes(array)(obj);
	  }
	
	  return function (obj) {
	    return array.indexOf(obj) > -1;
	  };
	}
	
	// Used for unique instance variables
	var id = 0;
	
	var Shuffle = function () {
	
	  /**
	   * Categorize, sort, and filter a responsive grid of items.
	   *
	   * @param {Element} element An element which is the parent container for the grid items.
	   * @param {Object} [options=Shuffle.options] Options object.
	   * @constructor
	   */
	  function Shuffle(element) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, Shuffle);
	
	    this.options = (0, _xtend2.default)(Shuffle.options, options);
	
	    this.useSizer = false;
	    this.lastSort = {};
	    this.group = this.lastFilter = Shuffle.ALL_ITEMS;
	    this.isEnabled = true;
	    this.isDestroyed = false;
	    this.isInitialized = false;
	    this._transitions = [];
	    this.isTransitioning = false;
	    this._queue = [];
	
	    element = this._getElementOption(element);
	
	    if (!element) {
	      throw new TypeError('Shuffle needs to be initialized with an element.');
	    }
	
	    this.element = element;
	    this.id = 'shuffle_' + id++;
	
	    this._init();
	    this.isInitialized = true;
	  }
	
	  _createClass(Shuffle, [{
	    key: '_init',
	    value: function _init() {
	      this.items = this._getItems();
	
	      this.options.sizer = this._getElementOption(this.options.sizer);
	
	      if (this.options.sizer) {
	        this.useSizer = true;
	      }
	
	      // Add class and invalidate styles
	      this.element.classList.add(Shuffle.Classes.BASE);
	
	      // Set initial css for each item
	      this._initItems();
	
	      // Bind resize events
	      this._onResize = this._getResizeFunction();
	      window.addEventListener('resize', this._onResize);
	
	      // Get container css all in one request. Causes reflow
	      var containerCss = window.getComputedStyle(this.element, null);
	      var containerWidth = Shuffle.getSize(this.element).width;
	
	      // Add styles to the container if it doesn't have them.
	      this._validateStyles(containerCss);
	
	      // We already got the container's width above, no need to cause another
	      // reflow getting it again... Calculate the number of columns there will be
	      this._setColumns(containerWidth);
	
	      // Kick off!
	      this.filter(this.options.group, this.options.initialSort);
	
	      // The shuffle items haven't had transitions set on them yet so the user
	      // doesn't see the first layout. Set them now that the first layout is done.
	      // First, however, a synchronous layout must be caused for the previous
	      // styles to be applied without transitions.
	      this.element.offsetWidth; // jshint ignore: line
	      this._setTransitions();
	      this.element.style.transition = 'height ' + this.options.speed + 'ms ' + this.options.easing;
	    }
	
	    /**
	     * Returns a throttled and proxied function for the resize handler.
	     * @return {Function}
	     * @private
	     */
	
	  }, {
	    key: '_getResizeFunction',
	    value: function _getResizeFunction() {
	      var resizeFunction = this._handleResize.bind(this);
	      return this.options.throttle ? this.options.throttle(resizeFunction, this.options.throttleTime) : resizeFunction;
	    }
	
	    /**
	     * Retrieve an element from an option.
	     * @param {string|jQuery|Element} option The option to check.
	     * @return {?Element} The plain element or null.
	     * @private
	     */
	
	  }, {
	    key: '_getElementOption',
	    value: function _getElementOption(option) {
	      // If column width is a string, treat is as a selector and search for the
	      // sizer element within the outermost container
	      if (typeof option === 'string') {
	        return this.element.querySelector(option);
	
	        // Check for an element
	      } else if (option && option.nodeType && option.nodeType === 1) {
	        return option;
	
	        // Check for jQuery object
	      } else if (option && option.jquery) {
	        return option[0];
	      }
	
	      return null;
	    }
	
	    /**
	     * Ensures the shuffle container has the css styles it needs applied to it.
	     * @param {Object} styles Key value pairs for position and overflow.
	     * @private
	     */
	
	  }, {
	    key: '_validateStyles',
	    value: function _validateStyles(styles) {
	      // Position cannot be static.
	      if (styles.position === 'static') {
	        this.element.style.position = 'relative';
	      }
	
	      // Overflow has to be hidden.
	      if (styles.overflow !== 'hidden') {
	        this.element.style.overflow = 'hidden';
	      }
	    }
	
	    /**
	     * Filter the elements by a category.
	     * @param {string} [category] Category to filter by. If it's given, the last
	     *     category will be used to filter the items.
	     * @param {Array} [collection] Optionally filter a collection. Defaults to
	     *     all the items.
	     * @return {!{visible: Array, hidden: Array}}
	     * @private
	     */
	
	  }, {
	    key: '_filter',
	    value: function _filter() {
	      var category = arguments.length <= 0 || arguments[0] === undefined ? this.lastFilter : arguments[0];
	      var collection = arguments.length <= 1 || arguments[1] === undefined ? this.items : arguments[1];
	
	      var set = this._getFilteredSets(category, collection);
	
	      // Individually add/remove hidden/visible classes
	      this._toggleFilterClasses(set);
	
	      // Save the last filter in case elements are appended.
	      this.lastFilter = category;
	
	      // This is saved mainly because providing a filter function (like searching)
	      // will overwrite the `lastFilter` property every time its called.
	      if (typeof category === 'string') {
	        this.group = category;
	      }
	
	      return set;
	    }
	
	    /**
	     * Returns an object containing the visible and hidden elements.
	     * @param {string|Function} category Category or function to filter by.
	     * @param {Array.<Element>} items A collection of items to filter.
	     * @return {!{visible: Array, hidden: Array}}
	     * @private
	     */
	
	  }, {
	    key: '_getFilteredSets',
	    value: function _getFilteredSets(category, items) {
	      var _this = this;
	
	      var visible = [];
	      var hidden = [];
	
	      // category === 'all', add visible class to everything
	      if (category === Shuffle.ALL_ITEMS) {
	        visible = items;
	
	        // Loop through each item and use provided function to determine
	        // whether to hide it or not.
	      } else {
	        items.forEach(function (item) {
	          if (_this._doesPassFilter(category, item.element)) {
	            visible.push(item);
	          } else {
	            hidden.push(item);
	          }
	        });
	      }
	
	      return {
	        visible: visible,
	        hidden: hidden
	      };
	    }
	
	    /**
	     * Test an item to see if it passes a category.
	     * @param {string|Function} category Category or function to filter by.
	     * @param {Element} element An element to test.
	     * @return {boolean} Whether it passes the category/filter.
	     * @private
	     */
	
	  }, {
	    key: '_doesPassFilter',
	    value: function _doesPassFilter(category, element) {
	
	      if (typeof category === 'function') {
	        return category.call(element, element, this);
	
	        // Check each element's data-groups attribute against the given category.
	      } else {
	        var attr = element.getAttribute('data-' + Shuffle.FILTER_ATTRIBUTE_KEY);
	        var keys = this.options.delimeter ? attr.split(this.options.delimeter) : JSON.parse(attr);
	
	        if (Array.isArray(category)) {
	          return category.some(arrayIncludes(keys));
	        }
	
	        return arrayIncludes(keys, category);
	      }
	    }
	
	    /**
	     * Toggles the visible and hidden class names.
	     * @param {{visible, hidden}} Object with visible and hidden arrays.
	     * @private
	     */
	
	  }, {
	    key: '_toggleFilterClasses',
	    value: function _toggleFilterClasses(_ref) {
	      var visible = _ref.visible;
	      var hidden = _ref.hidden;
	
	      visible.forEach(function (item) {
	        item.show();
	      });
	
	      hidden.forEach(function (item) {
	        item.hide();
	      });
	    }
	
	    /**
	     * Set the initial css for each item
	     * @param {Array.<ShuffleItem>} [items] Optionally specifiy at set to initialize.
	     * @private
	     */
	
	  }, {
	    key: '_initItems',
	    value: function _initItems() {
	      var items = arguments.length <= 0 || arguments[0] === undefined ? this.items : arguments[0];
	
	      items.forEach(function (item) {
	        item.init();
	      });
	    }
	
	    /**
	     * Remove element reference and styles.
	     * @private
	     */
	
	  }, {
	    key: '_disposeItems',
	    value: function _disposeItems() {
	      var items = arguments.length <= 0 || arguments[0] === undefined ? this.items : arguments[0];
	
	      items.forEach(function (item) {
	        item.dispose();
	      });
	    }
	
	    /**
	     * Updates the visible item count.
	     * @private
	     */
	
	  }, {
	    key: '_updateItemCount',
	    value: function _updateItemCount() {
	      this.visibleItems = this._getFilteredItems().length;
	    }
	
	    /**
	     * Sets css transform transition on a group of elements. This is not executed
	     * at the same time as `item.init` so that transitions don't occur upon
	     * initialization of Shuffle.
	     * @param {Array.<ShuffleItem>} items Shuffle items to set transitions on.
	     * @private
	     */
	
	  }, {
	    key: '_setTransitions',
	    value: function _setTransitions() {
	      var items = arguments.length <= 0 || arguments[0] === undefined ? this.items : arguments[0];
	
	      var speed = this.options.speed;
	      var easing = this.options.easing;
	
	      var str;
	      if (this.options.useTransforms) {
	        str = 'transform ' + speed + 'ms ' + easing + ', opacity ' + speed + 'ms ' + easing;
	      } else {
	        str = 'top ' + speed + 'ms ' + easing + ', left ' + speed + 'ms ' + easing + ', opacity ' + speed + 'ms ' + easing;
	      }
	
	      items.forEach(function (item) {
	        item.element.style.transition = str;
	      });
	    }
	  }, {
	    key: '_getItems',
	    value: function _getItems() {
	      var _this2 = this;
	
	      return toArray(this.element.children).filter(function (el) {
	        return (0, _matchesSelector2.default)(el, _this2.options.itemSelector);
	      }).map(function (el) {
	        return new _shuffleItem2.default(el);
	      });
	    }
	
	    /**
	     * When new elements are added to the shuffle container, update the array of
	     * items because that is the order `_layout` calls them.
	     */
	
	  }, {
	    key: '_updateItemsOrder',
	    value: function _updateItemsOrder() {
	      var children = this.element.children;
	      this.items = (0, _sorter2.default)(this.items, {
	        by: function by(element) {
	          return Array.prototype.indexOf.call(children, element);
	        }
	      });
	    }
	  }, {
	    key: '_getFilteredItems',
	    value: function _getFilteredItems() {
	      return this.items.filter(function (item) {
	        return item.isVisible;
	      });
	    }
	  }, {
	    key: '_getConcealedItems',
	    value: function _getConcealedItems() {
	      return this.items.filter(function (item) {
	        return !item.isVisible;
	      });
	    }
	
	    /**
	     * Returns the column size, based on column width and sizer options.
	     * @param {number} containerWidth Size of the parent container.
	     * @param {number} gutterSize Size of the gutters.
	     * @return {number}
	     * @private
	     */
	
	  }, {
	    key: '_getColumnSize',
	    value: function _getColumnSize(containerWidth, gutterSize) {
	      var size;
	
	      // If the columnWidth property is a function, then the grid is fluid
	      if (typeof this.options.columnWidth === 'function') {
	        size = this.options.columnWidth(containerWidth);
	
	        // columnWidth option isn't a function, are they using a sizing element?
	      } else if (this.useSizer) {
	        size = Shuffle.getSize(this.options.sizer).width;
	
	        // if not, how about the explicitly set option?
	      } else if (this.options.columnWidth) {
	        size = this.options.columnWidth;
	
	        // or use the size of the first item
	      } else if (this.items.length > 0) {
	        size = Shuffle.getSize(this.items[0].element, true).width;
	
	        // if there's no items, use size of container
	      } else {
	        size = containerWidth;
	      }
	
	      // Don't let them set a column width of zero.
	      if (size === 0) {
	        size = containerWidth;
	      }
	
	      return size + gutterSize;
	    }
	
	    /**
	     * Returns the gutter size, based on gutter width and sizer options.
	     * @param {number} containerWidth Size of the parent container.
	     * @return {number}
	     * @private
	     */
	
	  }, {
	    key: '_getGutterSize',
	    value: function _getGutterSize(containerWidth) {
	      var size;
	      if (typeof this.options.gutterWidth === 'function') {
	        size = this.options.gutterWidth(containerWidth);
	      } else if (this.useSizer) {
	        size = (0, _getNumberStyle2.default)(this.options.sizer, 'marginLeft');
	      } else {
	        size = this.options.gutterWidth;
	      }
	
	      return size;
	    }
	
	    /**
	     * Calculate the number of columns to be used. Gets css if using sizer element.
	     * @param {number} [containerWidth] Optionally specify a container width if
	     *    it's already available.
	     */
	
	  }, {
	    key: '_setColumns',
	    value: function _setColumns() {
	      var containerWidth = arguments.length <= 0 || arguments[0] === undefined ? Shuffle.getSize(this.element).width : arguments[0];
	
	      var gutter = this._getGutterSize(containerWidth);
	      var columnWidth = this._getColumnSize(containerWidth, gutter);
	      var calculatedColumns = (containerWidth + gutter) / columnWidth;
	
	      // Widths given from getStyles are not precise enough...
	      if (Math.abs(Math.round(calculatedColumns) - calculatedColumns) < this.options.columnThreshold) {
	        // e.g. calculatedColumns = 11.998876
	        calculatedColumns = Math.round(calculatedColumns);
	      }
	
	      this.cols = Math.max(Math.floor(calculatedColumns), 1);
	      this.containerWidth = containerWidth;
	      this.colWidth = columnWidth;
	    }
	
	    /**
	     * Adjust the height of the grid
	     */
	
	  }, {
	    key: '_setContainerSize',
	    value: function _setContainerSize() {
	      this.element.style.height = this._getContainerSize() + 'px';
	    }
	
	    /**
	     * Based on the column heights, it returns the biggest one.
	     * @return {number}
	     * @private
	     */
	
	  }, {
	    key: '_getContainerSize',
	    value: function _getContainerSize() {
	      return arrayMax(this.positions);
	    }
	
	    /**
	     * Get the clamped stagger amount.
	     * @param {number} index Index of the item to be staggered.
	     * @return {number}
	     */
	
	  }, {
	    key: '_getStaggerAmount',
	    value: function _getStaggerAmount(index) {
	      return Math.min(index * this.options.staggerAmount, this.options.staggerAmountMax);
	    }
	
	    /**
	     * @return {boolean} Whether the event was prevented or not.
	     */
	
	  }, {
	    key: '_dispatch',
	    value: function _dispatch(name) {
	      var details = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      if (this.isDestroyed) {
	        return;
	      }
	
	      details.shuffle = this;
	      return !this.element.dispatchEvent(new CustomEvent(name, {
	        bubbles: true,
	        cancelable: false,
	        detail: details
	      }));
	    }
	
	    /**
	     * Zeros out the y columns array, which is used to determine item placement.
	     * @private
	     */
	
	  }, {
	    key: '_resetCols',
	    value: function _resetCols() {
	      var i = this.cols;
	      this.positions = [];
	      while (i--) {
	        this.positions.push(0);
	      }
	    }
	
	    /**
	     * Loops through each item that should be shown and calculates the x, y position.
	     * @param {Array.<ShuffleItem>} items Array of items that will be shown/layed
	     *     out in order in their array.
	     */
	
	  }, {
	    key: '_layout',
	    value: function _layout(items) {
	      var _this3 = this;
	
	      var count = 0;
	      items.forEach(function (item) {
	        var currPos = item.point;
	        var currScale = item.scale;
	        var itemSize = Shuffle.getSize(item.element, true);
	        var pos = _this3._getItemPosition(itemSize);
	
	        function callback() {
	          item.element.style.transitionDelay = '';
	          item.applyCss(_shuffleItem2.default.Css.VISIBLE.after);
	        }
	
	        // If the item will not change its position, do not add it to the render
	        // queue. Transitions don't fire when setting a property to the same value.
	        if (_point2.default.equals(currPos, pos) && currScale === _shuffleItem2.default.Scale.VISIBLE) {
	          callback();
	          return;
	        }
	
	        item.point = pos;
	        item.scale = _shuffleItem2.default.Scale.VISIBLE;
	
	        // Use xtend here to clone the object so that the `before` object isn't
	        // modified when the transition delay is added.
	        var styles = (0, _xtend2.default)(_shuffleItem2.default.Css.VISIBLE.before);
	        styles.transitionDelay = _this3._getStaggerAmount(count) + 'ms';
	
	        _this3._queue.push({
	          item: item,
	          styles: styles,
	          callback: callback
	        });
	
	        count++;
	      });
	    }
	
	    /**
	     * Determine the location of the next item, based on its size.
	     * @param {{width: number, height: number}} itemSize Object with width and height.
	     * @return {Point}
	     * @private
	     */
	
	  }, {
	    key: '_getItemPosition',
	    value: function _getItemPosition(itemSize) {
	      return (0, _layout2.getItemPosition)({
	        itemSize: itemSize,
	        positions: this.positions,
	        gridSize: this.colWidth,
	        total: this.cols,
	        threshold: this.options.columnThreshold,
	        buffer: this.options.buffer
	      });
	    }
	
	    /**
	     * Hides the elements that don't match our filter.
	     * @param {Array.<ShuffleItem>} collection Collection to shrink.
	     * @private
	     */
	
	  }, {
	    key: '_shrink',
	    value: function _shrink() {
	      var _this4 = this;
	
	      var collection = arguments.length <= 0 || arguments[0] === undefined ? this._getConcealedItems() : arguments[0];
	
	      var count = 0;
	      collection.forEach(function (item) {
	        function callback() {
	          item.applyCss(_shuffleItem2.default.Css.HIDDEN.after);
	        }
	
	        // Continuing would add a transitionend event listener to the element, but
	        // that listener would not execute because the transform and opacity would
	        // stay the same.
	        // The callback is executed here because it is not guaranteed to be called
	        // after the transitionend event because the transitionend could be
	        // canceled if another animation starts.
	        if (item.scale === _shuffleItem2.default.Scale.HIDDEN) {
	          callback();
	          return;
	        }
	
	        item.scale = _shuffleItem2.default.Scale.HIDDEN;
	
	        var styles = (0, _xtend2.default)(_shuffleItem2.default.Css.HIDDEN.before);
	        styles.transitionDelay = _this4._getStaggerAmount(count) + 'ms';
	
	        _this4._queue.push({
	          item: item,
	          styles: styles,
	          callback: callback
	        });
	
	        count++;
	      });
	    }
	
	    /**
	     * Resize handler.
	     * @private
	     */
	
	  }, {
	    key: '_handleResize',
	    value: function _handleResize() {
	      // If shuffle is disabled, destroyed, don't do anything
	      if (!this.isEnabled || this.isDestroyed) {
	        return;
	      }
	
	      // Will need to check height in the future if it's layed out horizontaly
	      var containerWidth = Shuffle.getSize(this.element).width;
	
	      // containerWidth hasn't changed, don't do anything
	      if (containerWidth === this.containerWidth) {
	        return;
	      }
	
	      this.update();
	    }
	
	    /**
	     * Returns styles which will be applied to the an item for a transition.
	     * @param {Object} obj Transition options.
	     * @return {!Object} Transforms for transitions, left/top for animate.
	     * @private
	     */
	
	  }, {
	    key: '_getStylesForTransition',
	    value: function _getStylesForTransition(_ref2) {
	      var item = _ref2.item;
	      var styles = _ref2.styles;
	
	      if (!styles.transitionDelay) {
	        styles.transitionDelay = '0ms';
	      }
	
	      var x = item.point.x;
	      var y = item.point.y;
	
	      if (this.options.useTransforms) {
	        styles.transform = 'translate(' + x + 'px, ' + y + 'px) scale(' + item.scale + ')';
	      } else {
	        styles.left = x + 'px';
	        styles.top = y + 'px';
	      }
	
	      return styles;
	    }
	
	    /**
	     * Listen for the transition end on an element and execute the itemCallback
	     * when it finishes.
	     * @param {Element} element Element to listen on.
	     * @param {Function} itemCallback Callback for the item.
	     * @param {Function} done Callback to notify `parallel` that this one is done.
	     */
	
	  }, {
	    key: '_whenTransitionDone',
	    value: function _whenTransitionDone(element, itemCallback, done) {
	      var id = (0, _onTransitionEnd.onTransitionEnd)(element, function (evt) {
	        itemCallback();
	        done(null, evt);
	      });
	
	      this._transitions.push(id);
	    }
	
	    /**
	     * Return a function which will set CSS styles and call the `done` function
	     * when (if) the transition finishes.
	     * @param {Object} opts Transition object.
	     * @return {Function} A function to be called with a `done` function.
	     */
	
	  }, {
	    key: '_getTransitionFunction',
	    value: function _getTransitionFunction(opts) {
	      var _this5 = this;
	
	      return function (done) {
	        opts.item.applyCss(_this5._getStylesForTransition(opts));
	        _this5._whenTransitionDone(opts.item.element, opts.callback, done);
	      };
	    }
	
	    /**
	     * Execute the styles gathered in the style queue. This applies styles to elements,
	     * triggering transitions.
	     * @private
	     */
	
	  }, {
	    key: '_processQueue',
	    value: function _processQueue() {
	      if (this.isTransitioning) {
	        this._cancelMovement();
	      }
	
	      var hasSpeed = this.options.speed > 0;
	      var hasQueue = this._queue.length > 0;
	
	      if (hasQueue && hasSpeed && this.isInitialized) {
	        this._startTransitions(this._queue);
	      } else if (hasQueue) {
	        this._styleImmediately(this._queue);
	        this._dispatchLayout();
	
	        // A call to layout happened, but none of the newly visible items will
	        // change position or the transition duration is zero, which will not trigger
	        // the transitionend event.
	      } else {
	        this._dispatchLayout();
	      }
	
	      // Remove everything in the style queue
	      this._queue.length = 0;
	    }
	
	    /**
	     * Wait for each transition to finish, the emit the layout event.
	     * @param {Array.<Object>} transitions Array of transition objects.
	     */
	
	  }, {
	    key: '_startTransitions',
	    value: function _startTransitions(transitions) {
	      var _this6 = this;
	
	      // Set flag that shuffle is currently in motion.
	      this.isTransitioning = true;
	
	      // Create an array of functions to be called.
	      var callbacks = transitions.map(function (obj) {
	        return _this6._getTransitionFunction(obj);
	      });
	
	      (0, _arrayParallel2.default)(callbacks, this._movementFinished.bind(this));
	    }
	  }, {
	    key: '_cancelMovement',
	    value: function _cancelMovement() {
	      // Remove the transition end event for each listener.
	      this._transitions.forEach(_onTransitionEnd.cancelTransitionEnd);
	
	      // Reset the array.
	      this._transitions.length = 0;
	
	      // Show it's no longer active.
	      this.isTransitioning = false;
	    }
	
	    /**
	     * Apply styles without a transition.
	     * @param {Array.<Object>} objects Array of transition objects.
	     * @private
	     */
	
	  }, {
	    key: '_styleImmediately',
	    value: function _styleImmediately(objects) {
	      var _this7 = this;
	
	      if (objects.length) {
	        var elements = objects.map(function (obj) {
	          return obj.item.element;
	        });
	
	        Shuffle._skipTransitions(elements, function () {
	          objects.forEach(function (obj) {
	            obj.item.applyCss(_this7._getStylesForTransition(obj));
	            obj.callback();
	          });
	        });
	      }
	    }
	  }, {
	    key: '_movementFinished',
	    value: function _movementFinished() {
	      this._transitions.length = 0;
	      this.isTransitioning = false;
	      this._dispatchLayout();
	    }
	  }, {
	    key: '_dispatchLayout',
	    value: function _dispatchLayout() {
	      this._dispatch(Shuffle.EventType.LAYOUT);
	    }
	
	    /**
	     * The magic. This is what makes the plugin 'shuffle'
	     * @param {string|Function|Array.<string>} [category] Category to filter by.
	     *     Can be a function, string, or array of strings.
	     * @param {Object} [sortObj] A sort object which can sort the visible set
	     */
	
	  }, {
	    key: 'filter',
	    value: function filter(category, sortObj) {
	      if (!this.isEnabled) {
	        return;
	      }
	
	      if (!category || category && category.length === 0) {
	        category = Shuffle.ALL_ITEMS;
	      }
	
	      this._filter(category);
	
	      // Shrink each hidden item
	      this._shrink();
	
	      // How many visible elements?
	      this._updateItemCount();
	
	      // Update transforms on visible elements so they will animate to their new positions.
	      this.sort(sortObj);
	    }
	
	    /**
	     * Gets the visible elements, sorts them, and passes them to layout.
	     * @param {Object} opts the options object for the sorted plugin
	     */
	
	  }, {
	    key: 'sort',
	    value: function sort() {
	      var opts = arguments.length <= 0 || arguments[0] === undefined ? this.lastSort : arguments[0];
	
	      if (!this.isEnabled) {
	        return;
	      }
	
	      this._resetCols();
	
	      var items = this._getFilteredItems();
	      items = (0, _sorter2.default)(items, opts);
	
	      this._layout(items);
	
	      // `_layout` always happens after `_shrink`, so it's safe to process the style
	      // queue here with styles from the shrink method.
	      this._processQueue();
	
	      // Adjust the height of the container.
	      this._setContainerSize();
	
	      this.lastSort = opts;
	    }
	
	    /**
	     * Reposition everything.
	     * @param {boolean} isOnlyLayout If true, column and gutter widths won't be
	     *     recalculated.
	     */
	
	  }, {
	    key: 'update',
	    value: function update(isOnlyLayout) {
	      if (this.isEnabled) {
	
	        if (!isOnlyLayout) {
	          // Get updated colCount
	          this._setColumns();
	        }
	
	        // Layout items
	        this.sort();
	      }
	    }
	
	    /**
	     * Use this instead of `update()` if you don't need the columns and gutters updated
	     * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations
	     * could be off.
	     */
	
	  }, {
	    key: 'layout',
	    value: function layout() {
	      this.update(true);
	    }
	
	    /**
	     * New items have been appended to shuffle. Mix them in with the current
	     * filter or sort status.
	     * @param {Array.<Element>} newItems Collection of new items.
	     */
	
	  }, {
	    key: 'add',
	    value: function add(newItems) {
	      newItems = (0, _arrayUniq2.default)(newItems).map(function (el) {
	        return new _shuffleItem2.default(el);
	      });
	
	      // Add classes and set initial positions.
	      this._initItems(newItems);
	
	      // Add transition to each item.
	      this._setTransitions(newItems);
	
	      // Update the list of items.
	      this.items = this.items.concat(newItems);
	      this._updateItemsOrder();
	      this.filter(this.lastFilter);
	    }
	
	    /**
	     * Disables shuffle from updating dimensions and layout on resize
	     */
	
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this.isEnabled = false;
	    }
	
	    /**
	     * Enables shuffle again
	     * @param {boolean} [isUpdateLayout=true] if undefined, shuffle will update columns and gutters
	     */
	
	  }, {
	    key: 'enable',
	    value: function enable(isUpdateLayout) {
	      this.isEnabled = true;
	      if (isUpdateLayout !== false) {
	        this.update();
	      }
	    }
	
	    /**
	     * Remove 1 or more shuffle items
	     * @param {Array.<Element>} collection An array containing one or more
	     *     elements in shuffle
	     * @return {Shuffle} The shuffle object
	     */
	
	  }, {
	    key: 'remove',
	    value: function remove(collection) {
	      var _this8 = this;
	
	      if (!collection.length) {
	        return;
	      }
	
	      collection = (0, _arrayUniq2.default)(collection);
	
	      var oldItems = collection.map(function (element) {
	        return _this8.getItemByElement(element);
	      }).filter(function (item) {
	        return !!item;
	      });
	
	      var handleLayout = function handleLayout() {
	        _this8.element.removeEventListener(Shuffle.EventType.LAYOUT, handleLayout);
	        _this8._disposeItems(oldItems);
	
	        // Remove the collection in the callback
	        collection.forEach(function (element) {
	          element.parentNode.removeChild(element);
	        });
	
	        _this8._dispatch(Shuffle.EventType.REMOVED, { collection: collection });
	
	        // Let it get garbage collected
	        collection = null;
	        oldItems = null;
	      };
	
	      // Hide collection first.
	      this._toggleFilterClasses({
	        visible: [],
	        hidden: oldItems
	      });
	
	      this._shrink(oldItems);
	
	      this.sort();
	
	      // Update the list of items here because `remove` could be called again
	      // with an item that is in the process of being removed.
	      this.items = this.items.filter(function (item) {
	        return !arrayIncludes(oldItems, item);
	      });
	      this._updateItemCount();
	
	      this.element.addEventListener(Shuffle.EventType.LAYOUT, handleLayout);
	    }
	
	    /**
	     * Retrieve a shuffle item by its element.
	     * @param {Element} element Element to look for.
	     * @return {?ShuffleItem} A shuffle item or null if it's not found.
	     */
	
	  }, {
	    key: 'getItemByElement',
	    value: function getItemByElement(element) {
	      for (var i = this.items.length - 1; i >= 0; i--) {
	        if (this.items[i].element === element) {
	          return this.items[i];
	        }
	      }
	
	      return null;
	    }
	
	    /**
	     * Destroys shuffle, removes events, styles, and classes
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this._cancelMovement();
	      window.removeEventListener('resize', this._onResize);
	
	      // Reset container styles
	      this.element.classList.remove('shuffle');
	      this.element.removeAttribute('style');
	
	      // Reset individual item styles
	      this._disposeItems();
	
	      // Null DOM references
	      this.items = null;
	      this.options.sizer = null;
	      this.element = null;
	      this._transitions = null;
	
	      // Set a flag so if a debounced resize has been triggered,
	      // it can first check if it is actually isDestroyed and not doing anything
	      this.isDestroyed = true;
	    }
	
	    /**
	     * Returns the outer width of an element, optionally including its margins.
	     *
	     * There are a few different methods for getting the width of an element, none of
	     * which work perfectly for all Shuffle's use cases.
	     *
	     * 1. getBoundingClientRect() `left` and `right` properties.
	     *   - Accounts for transform scaled elements, making it useless for Shuffle
	     *   elements which have shrunk.
	     * 2. The `offsetWidth` property.
	     *   - This value stays the same regardless of the elements transform property,
	     *   however, it does not return subpixel values.
	     * 3. getComputedStyle()
	     *   - This works great Chrome, Firefox, Safari, but IE<=11 does not include
	     *   padding and border when box-sizing: border-box is set, requiring a feature
	     *   test and extra work to add the padding back for IE and other browsers which
	     *   follow the W3C spec here.
	     *
	     * @param {Element} element The element.
	     * @param {boolean} [includeMargins] Whether to include margins. Default is false.
	     * @return {{width: number, height: number}} The width and height.
	     */
	
	  }], [{
	    key: 'getSize',
	    value: function getSize(element, includeMargins) {
	      // Store the styles so that they can be used by others without asking for it again.
	      var styles = window.getComputedStyle(element, null);
	      var width = (0, _getNumberStyle2.default)(element, 'width', styles);
	      var height = (0, _getNumberStyle2.default)(element, 'height', styles);
	
	      if (includeMargins) {
	        var marginLeft = (0, _getNumberStyle2.default)(element, 'marginLeft', styles);
	        var marginRight = (0, _getNumberStyle2.default)(element, 'marginRight', styles);
	        var marginTop = (0, _getNumberStyle2.default)(element, 'marginTop', styles);
	        var marginBottom = (0, _getNumberStyle2.default)(element, 'marginBottom', styles);
	        width += marginLeft + marginRight;
	        height += marginTop + marginBottom;
	      }
	
	      return {
	        width: width,
	        height: height
	      };
	    }
	
	    /**
	     * Change a property or execute a function which will not have a transition
	     * @param {Array.<Element>} elements DOM elements that won't be transitioned.
	     * @param {Function} callback A function which will be called while transition
	     *     is set to 0ms.
	     * @private
	     */
	
	  }, {
	    key: '_skipTransitions',
	    value: function _skipTransitions(elements, callback) {
	      var zero = '0ms';
	
	      // Save current duration and delay.
	      var data = elements.map(function (element) {
	        var style = element.style;
	        var duration = style.transitionDuration;
	        var delay = style.transitionDelay;
	
	        // Set the duration to zero so it happens immediately
	        style.transitionDuration = zero;
	        style.transitionDelay = zero;
	
	        return {
	          duration: duration,
	          delay: delay
	        };
	      });
	
	      callback();
	
	      // Cause reflow.
	      elements[0].offsetWidth; // jshint ignore:line
	
	      // Put the duration back
	      elements.forEach(function (element, i) {
	        element.style.transitionDuration = data[i].duration;
	        element.style.transitionDelay = data[i].delay;
	      });
	    }
	  }]);
	
	  return Shuffle;
	}();
	
	Shuffle.ShuffleItem = _shuffleItem2.default;
	
	Shuffle.ALL_ITEMS = 'all';
	Shuffle.FILTER_ATTRIBUTE_KEY = 'groups';
	
	/**
	 * @enum {string}
	 */
	Shuffle.EventType = {
	  LAYOUT: 'shuffle:layout',
	  REMOVED: 'shuffle:removed'
	};
	
	/** @enum {string} */
	Shuffle.Classes = _classes2.default;
	
	// Overrideable options
	Shuffle.options = {
	  // Initial filter group.
	  group: Shuffle.ALL_ITEMS,
	
	  // Transition/animation speed (milliseconds).
	  speed: 250,
	
	  // CSS easing function to use.
	  easing: 'ease',
	
	  // e.g. '.picture-item'.
	  itemSelector: '*',
	
	  // Element or selector string. Use an element to determine the size of columns
	  // and gutters.
	  sizer: null,
	
	  // A static number or function that tells the plugin how wide the gutters
	  // between columns are (in pixels).
	  gutterWidth: 0,
	
	  // A static number or function that returns a number which tells the plugin
	  // how wide the columns are (in pixels).
	  columnWidth: 0,
	
	  // If your group is not json, and is comma delimeted, you could set delimeter
	  // to ','.
	  delimeter: null,
	
	  // Useful for percentage based heights when they might not always be exactly
	  // the same (in pixels).
	  buffer: 0,
	
	  // Reading the width of elements isn't precise enough and can cause columns to
	  // jump between values.
	  columnThreshold: 0.01,
	
	  // Shuffle can be isInitialized with a sort object. It is the same object
	  // given to the sort method.
	  initialSort: null,
	
	  // By default, shuffle will throttle resize events. This can be changed or
	  // removed.
	  throttle: _throttleit2.default,
	
	  // How often shuffle can be called on resize (in milliseconds).
	  throttleTime: 300,
	
	  // Transition delay offset for each item in milliseconds.
	  staggerAmount: 15,
	
	  // Maximum stagger delay in milliseconds.
	  staggerAmountMax: 250,
	
	  // Whether to use transforms or absolute positioning.
	  useTransforms: true
	};
	
	// Expose for testing. Hack at your own risk.
	Shuffle.__Point = _point2.default;
	Shuffle.__sorter = _sorter2.default;
	Shuffle.__getColumnSpan = _layout2.getColumnSpan;
	Shuffle.__getAvailablePositions = _layout2.getAvailablePositions;
	Shuffle.__getShortColumn = _layout2.getShortColumn;
	
	exports.default = Shuffle;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// Polyfill for creating CustomEvents on IE9/10/11
	
	// code pulled from:
	// https://github.com/d4tocchini/customevent-polyfill
	// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
	
	try {
	  new window.CustomEvent("test");
	} catch(e) {
	 var CustomEvent = function(event, params) {
	      var evt;
	      params = params || {
	          bubbles: false,
	          cancelable: false,
	          detail: undefined
	      };
	
	      evt = document.createEvent("CustomEvent");
	      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	      return evt;
	  };
	
	  CustomEvent.prototype = window.Event.prototype;
	  window.CustomEvent = CustomEvent; // expose definition to window
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var proto = Element.prototype;
	var vendor = proto.matches
	  || proto.matchesSelector
	  || proto.webkitMatchesSelector
	  || proto.mozMatchesSelector
	  || proto.msMatchesSelector
	  || proto.oMatchesSelector;
	
	module.exports = match;
	
	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */
	
	function match(el, selector) {
	  if (vendor) return vendor.call(el, selector);
	  var nodes = el.parentNode.querySelectorAll(selector);
	  for (var i = 0; i < nodes.length; i++) {
	    if (nodes[i] == el) return true;
	  }
	  return false;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// there's 3 implementations written in increasing order of efficiency
	
	// 1 - no Set type is defined
	function uniqNoSet(arr) {
		var ret = [];
	
		for (var i = 0; i < arr.length; i++) {
			if (ret.indexOf(arr[i]) === -1) {
				ret.push(arr[i]);
			}
		}
	
		return ret;
	}
	
	// 2 - a simple Set type is defined
	function uniqSet(arr) {
		var seen = new Set();
		return arr.filter(function (el) {
			if (!seen.has(el)) {
				seen.add(el);
				return true;
			}
	
			return false;
		});
	}
	
	// 3 - a standard Set type is defined and it has a forEach method
	function uniqSetWithForEach(arr) {
		var ret = [];
	
		(new Set(arr)).forEach(function (el) {
			ret.push(el);
		});
	
		return ret;
	}
	
	// V8 currently has a broken implementation
	// https://github.com/joyent/node/issues/8449
	function doesForEachActuallyWork() {
		var ret = false;
	
		(new Set([true])).forEach(function (el) {
			ret = el;
		});
	
		return ret === true;
	}
	
	if ('Set' in global) {
		if (typeof Set.prototype.forEach === 'function' && doesForEachActuallyWork()) {
			module.exports = uniqSetWithForEach;
		} else {
			module.exports = uniqSet;
		}
	} else {
		module.exports = uniqNoSet;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = extend
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	function extend() {
	    var target = {}
	
	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]
	
	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }
	
	    return target
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = throttle;
	
	/**
	 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
	 *
	 * @param {Function} func Function to wrap.
	 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
	 * @return {Function} A new function that wraps the `func` function passed in.
	 */
	
	function throttle (func, wait) {
	  var ctx, args, rtn, timeoutID; // caching
	  var last = 0;
	
	  return function throttled () {
	    ctx = this;
	    args = arguments;
	    var delta = new Date() - last;
	    if (!timeoutID)
	      if (delta >= wait) call();
	      else timeoutID = setTimeout(call, wait - delta);
	    return rtn;
	  };
	
	  function call () {
	    timeoutID = 0;
	    last = +new Date();
	    rtn = func.apply(ctx, args);
	    ctx = null;
	    args = null;
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function parallel(fns, context, callback) {
	  if (!callback) {
	    if (typeof context === 'function') {
	      callback = context
	      context = null
	    } else {
	      callback = noop
	    }
	  }
	
	  var pending = fns && fns.length
	  if (!pending) return callback(null, []);
	
	  var finished = false
	  var results = new Array(pending)
	
	  fns.forEach(context ? function (fn, i) {
	    fn.call(context, maybeDone(i))
	  } : function (fn, i) {
	    fn(maybeDone(i))
	  })
	
	  function maybeDone(i) {
	    return function (err, result) {
	      if (finished) return;
	
	      if (err) {
	        callback(err, results)
	        finished = true
	        return
	      }
	
	      results[i] = result
	
	      if (!--pending) callback(null, results);
	    }
	  }
	}
	
	function noop() {}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getNumber = __webpack_require__(9);
	
	var _getNumber2 = _interopRequireDefault(_getNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Represents a coordinate pair.
	 * @param {number} [x=0] X.
	 * @param {number} [y=0] Y.
	 */
	var Point = function Point(x, y) {
	  this.x = (0, _getNumber2.default)(x);
	  this.y = (0, _getNumber2.default)(y);
	};
	
	/**
	 * Whether two points are equal.
	 * @param {Point} a Point A.
	 * @param {Point} b Point B.
	 * @return {boolean}
	 */
	Point.equals = function (a, b) {
	  return a.x === b.x && a.y === b.y;
	};
	
	exports.default = Point;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Always returns a numeric value, given a value. Logic from jQuery's `isNumeric`.
	 * @param {*} value Possibly numeric value.
	 * @return {number} `value` or zero if `value` isn't numeric.
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getNumber;
	function getNumber(value) {
	  return parseFloat(value) || 0;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _point = __webpack_require__(8);
	
	var _point2 = _interopRequireDefault(_point);
	
	var _classes = __webpack_require__(11);
	
	var _classes2 = _interopRequireDefault(_classes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var id = 0;
	
	var ShuffleItem = function () {
	  function ShuffleItem(element) {
	    _classCallCheck(this, ShuffleItem);
	
	    this.id = id++;
	    this.element = element;
	    this.isVisible = true;
	  }
	
	  _createClass(ShuffleItem, [{
	    key: 'show',
	    value: function show() {
	      this.isVisible = true;
	      this.element.classList.remove(_classes2.default.HIDDEN);
	      this.element.classList.add(_classes2.default.VISIBLE);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.isVisible = false;
	      this.element.classList.remove(_classes2.default.VISIBLE);
	      this.element.classList.add(_classes2.default.HIDDEN);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.addClasses([_classes2.default.SHUFFLE_ITEM, _classes2.default.VISIBLE]);
	      this.applyCss(ShuffleItem.Css.INITIAL);
	      this.scale = ShuffleItem.Scale.VISIBLE;
	      this.point = new _point2.default();
	    }
	  }, {
	    key: 'addClasses',
	    value: function addClasses(classes) {
	      var _this = this;
	
	      classes.forEach(function (className) {
	        _this.element.classList.add(className);
	      });
	    }
	  }, {
	    key: 'removeClasses',
	    value: function removeClasses(classes) {
	      var _this2 = this;
	
	      classes.forEach(function (className) {
	        _this2.element.classList.remove(className);
	      });
	    }
	  }, {
	    key: 'applyCss',
	    value: function applyCss(obj) {
	      for (var key in obj) {
	        this.element.style[key] = obj[key];
	      }
	    }
	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      this.removeClasses([_classes2.default.HIDDEN, _classes2.default.VISIBLE, _classes2.default.SHUFFLE_ITEM]);
	
	      this.element.removeAttribute('style');
	      this.element = null;
	    }
	  }]);
	
	  return ShuffleItem;
	}();
	
	ShuffleItem.Css = {
	  INITIAL: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    visibility: 'visible',
	    'will-change': 'transform'
	  },
	  VISIBLE: {
	    before: {
	      opacity: 1,
	      visibility: 'visible'
	    },
	    after: {}
	  },
	  HIDDEN: {
	    before: {
	      opacity: 0
	    },
	    after: {
	      visibility: 'hidden'
	    }
	  }
	};
	
	ShuffleItem.Scale = {
	  VISIBLE: 1,
	  HIDDEN: 0.001
	};
	
	exports.default = ShuffleItem;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  BASE: 'shuffle',
	  SHUFFLE_ITEM: 'shuffle-item',
	  VISIBLE: 'shuffle-item--visible',
	  HIDDEN: 'shuffle-item--hidden'
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getNumberStyle;
	
	var _getNumber = __webpack_require__(9);
	
	var _getNumber2 = _interopRequireDefault(_getNumber);
	
	var _computedSize = __webpack_require__(13);
	
	var _computedSize2 = _interopRequireDefault(_computedSize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Retrieve the computed style for an element, parsed as a float.
	 * @param {Element} element Element to get style for.
	 * @param {string} style Style property.
	 * @param {CSSStyleDeclaration} [styles] Optionally include clean styles to
	 *     use instead of asking for them again.
	 * @return {number} The parsed computed value or zero if that fails because IE
	 *     will return 'auto' when the element doesn't have margins instead of
	 *     the computed style.
	 */
	function getNumberStyle(element, style) {
	  var styles = arguments.length <= 2 || arguments[2] === undefined ? window.getComputedStyle(element, null) : arguments[2];
	
	  var value = (0, _getNumber2.default)(styles[style]);
	
	  // Support IE<=11 and W3C spec.
	  if (!_computedSize2.default && style === 'width') {
	    value += (0, _getNumber2.default)(styles.paddingLeft) + (0, _getNumber2.default)(styles.paddingRight) + (0, _getNumber2.default)(styles.borderLeftWidth) + (0, _getNumber2.default)(styles.borderRightWidth);
	  } else if (!_computedSize2.default && style === 'height') {
	    value += (0, _getNumber2.default)(styles.paddingTop) + (0, _getNumber2.default)(styles.paddingBottom) + (0, _getNumber2.default)(styles.borderTopWidth) + (0, _getNumber2.default)(styles.borderBottomWidth);
	  }
	
	  return value;
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var element = document.body || document.documentElement;
	var e = document.createElement('div');
	e.style.cssText = 'width:10px;padding:2px;box-sizing:border-box;';
	element.appendChild(e);
	
	var width = window.getComputedStyle(e, null).width;
	var ret = width === '10px';
	
	element.removeChild(e);
	
	exports.default = ret;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sorter;
	
	var _xtend = __webpack_require__(5);
	
	var _xtend2 = _interopRequireDefault(_xtend);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// http://stackoverflow.com/a/962890/373422
	function randomize(array) {
	  var tmp;
	  var current;
	  var top = array.length;
	
	  if (!top) {
	    return array;
	  }
	
	  while (--top) {
	    current = Math.floor(Math.random() * (top + 1));
	    tmp = array[current];
	    array[current] = array[top];
	    array[top] = tmp;
	  }
	
	  return array;
	}
	
	var defaults = {
	  // Use array.reverse() to reverse the results
	  reverse: false,
	
	  // Sorting function
	  by: null,
	
	  // If true, this will skip the sorting and return a randomized order in the array
	  randomize: false,
	
	  // Determines which property of each item in the array is passed to the
	  // sorting method.
	  key: 'element'
	};
	
	// You can return `undefined` from the `by` function to revert to DOM order.
	function sorter(arr, options) {
	  var opts = (0, _xtend2.default)(defaults, options);
	  var original = [].slice.call(arr);
	  var revert = false;
	
	  if (!arr.length) {
	    return [];
	  }
	
	  if (opts.randomize) {
	    return randomize(arr);
	  }
	
	  // Sort the elements by the opts.by function.
	  // If we don't have opts.by, default to DOM order
	  if (typeof opts.by === 'function') {
	    arr.sort(function (a, b) {
	
	      // Exit early if we already know we want to revert
	      if (revert) {
	        return 0;
	      }
	
	      var valA = opts.by(a[opts.key]);
	      var valB = opts.by(b[opts.key]);
	
	      // If both values are undefined, use the DOM order
	      if (valA === undefined && valB === undefined) {
	        revert = true;
	        return 0;
	      }
	
	      if (valA < valB || valA === 'sortFirst' || valB === 'sortLast') {
	        return -1;
	      }
	
	      if (valA > valB || valA === 'sortLast' || valB === 'sortFirst') {
	        return 1;
	      }
	
	      return 0;
	    });
	  }
	
	  // Revert to the original array if necessary
	  if (revert) {
	    return original;
	  }
	
	  if (opts.reverse) {
	    arr.reverse();
	  }
	
	  return arr;
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onTransitionEnd = onTransitionEnd;
	exports.cancelTransitionEnd = cancelTransitionEnd;
	var transitions = {};
	var eventName = 'transitionend';
	var count = 0;
	
	function uniqueId() {
	  return eventName + count++;
	}
	
	function onTransitionEnd(element, callback) {
	  var id = uniqueId();
	  var listener = function listener(evt) {
	    if (evt.currentTarget === evt.target) {
	      cancelTransitionEnd(id);
	      callback(evt);
	    }
	  };
	
	  element.addEventListener(eventName, listener);
	
	  transitions[id] = { element: element, listener: listener };
	
	  return id;
	}
	
	function cancelTransitionEnd(id) {
	  if (transitions[id]) {
	    transitions[id].element.removeEventListener(eventName, transitions[id].listener);
	    transitions[id] = null;
	    return true;
	  }
	
	  return false;
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getItemPosition = getItemPosition;
	exports.getColumnSpan = getColumnSpan;
	exports.getAvailablePositions = getAvailablePositions;
	exports.getShortColumn = getShortColumn;
	
	var _point = __webpack_require__(8);
	
	var _point2 = _interopRequireDefault(_point);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function arrayMax(array) {
	  return Math.max.apply(Math, array);
	}
	
	function arrayMin(array) {
	  return Math.min.apply(Math, array);
	}
	
	/**
	 * Determine the location of the next item, based on its size.
	 * @param {Object} itemSize Object with width and height.
	 * @param {Array.<number>} positions Positions of the other current items.
	 * @param {number} gridSize The column width or row height.
	 * @param {number} total The total number of columns or rows.
	 * @param {number} threshold Buffer value for the column to fit.
	 * @param {number} buffer Vertical buffer for the height of items.
	 * @return {Point}
	 */
	function getItemPosition(_ref) {
	  var itemSize = _ref.itemSize;
	  var positions = _ref.positions;
	  var gridSize = _ref.gridSize;
	  var total = _ref.total;
	  var threshold = _ref.threshold;
	  var buffer = _ref.buffer;
	
	  var span = getColumnSpan(itemSize.width, gridSize, total, threshold);
	  var setY = getAvailablePositions(positions, span, total);
	  var shortColumnIndex = getShortColumn(setY, buffer);
	
	  // Position the item
	  var point = new _point2.default(Math.round(gridSize * shortColumnIndex), Math.round(setY[shortColumnIndex]));
	
	  // Update the columns array with the new values for each column.
	  // e.g. before the update the columns could be [250, 0, 0, 0] for an item
	  // which spans 2 columns. After it would be [250, itemHeight, itemHeight, 0].
	  var setHeight = setY[shortColumnIndex] + itemSize.height;
	  for (var i = 0; i < span; i++) {
	    positions[shortColumnIndex + i] = setHeight;
	  }
	
	  return point;
	}
	
	/**
	 * Determine the number of columns an items spans.
	 * @param {number} itemWidth Width of the item.
	 * @param {number} columnWidth Width of the column (includes gutter).
	 * @param {number} columns Total number of columns
	 * @param {number} threshold A buffer value for the size of the column to fit.
	 * @return {number}
	 */
	function getColumnSpan(itemWidth, columnWidth, columns, threshold) {
	  var columnSpan = itemWidth / columnWidth;
	
	  // If the difference between the rounded column span number and the
	  // calculated column span number is really small, round the number to
	  // make it fit.
	  if (Math.abs(Math.round(columnSpan) - columnSpan) < threshold) {
	    // e.g. columnSpan = 4.0089945390298745
	    columnSpan = Math.round(columnSpan);
	  }
	
	  // Ensure the column span is not more than the amount of columns in the whole layout.
	  return Math.min(Math.ceil(columnSpan), columns);
	}
	
	/**
	 * Retrieves the column set to use for placement.
	 * @param {number} columnSpan The number of columns this current item spans.
	 * @param {number} columns The total columns in the grid.
	 * @return {Array.<number>} An array of numbers represeting the column set.
	 */
	function getAvailablePositions(positions, columnSpan, columns) {
	  // The item spans only one column.
	  if (columnSpan === 1) {
	    return positions;
	  }
	
	  // The item spans more than one column, figure out how many different
	  // places it could fit horizontally.
	  // The group count is the number of places within the positions this block
	  // could fit, ignoring the current positions of items.
	  // Imagine a 2 column brick as the second item in a 4 column grid with
	  // 10px height each. Find the places it would fit:
	  // [20, 10, 10, 0]
	  //  |   |   |
	  //  *   *   *
	  //
	  // Then take the places which fit and get the bigger of the two:
	  // max([20, 10]), max([10, 10]), max([10, 0]) = [20, 10, 0]
	  //
	  // Next, find the first smallest number (the short column).
	  // [20, 10, 0]
	  //          |
	  //          *
	  //
	  // And that's where it should be placed!
	  //
	  // Another example where the second column's item extends past the first:
	  // [10, 20, 10, 0] => [20, 20, 10] => 10
	  var available = [];
	
	  // For how many possible positions for this item there are.
	  for (var i = 0; i <= columns - columnSpan; i++) {
	    // Find the bigger value for each place it could fit.
	    available.push(arrayMax(positions.slice(i, i + columnSpan)));
	  }
	
	  return available;
	}
	
	/**
	 * Find index of short column, the first from the left where this item will go.
	 *
	 * @param {Array.<number>} positions The array to search for the smallest number.
	 * @param {number} buffer Optional buffer which is very useful when the height
	 *     is a percentage of the width.
	 * @return {number} Index of the short column.
	 */
	function getShortColumn(positions, buffer) {
	  var minPosition = arrayMin(positions);
	  for (var i = 0, len = positions.length; i < len; i++) {
	    if (positions[i] >= minPosition - buffer && positions[i] <= minPosition + buffer) {
	      return i;
	    }
	  }
	
	  return 0;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=shuffle.js.map

/***/ },

/***/ "./src/app/components/calendar/calendar.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
__webpack_require__("./node_modules/moment/moment.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Calendar = (function () {
    function Calendar() {
        var _this = this;
        this.dragOptions = { zIndex: 999, revert: true, revertDuration: 0 };
        this.event = {};
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        this.calendarOptions = {
            header: {
                left: '',
                center: 'title',
                right: ''
            },
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    backgroundColor: '#79A5F0',
                    textColor: '#fff',
                    description: 'Will be busy throughout the whole day'
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d + 5),
                    end: new Date(y, m, d + 7),
                    description: 'This conference should be worse visiting'
                },
                {
                    id: 999,
                    title: 'Blah Blah Car',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    description: 'Agree with this guy on arrival time'
                },
                {
                    id: 1000,
                    title: 'Buy this template',
                    start: new Date(y, m, d + 3, 12, 0),
                    allDay: false,
                    backgroundColor: '#555',
                    textColor: '#fff',
                    description: 'Make sure everything is consistent first'
                },
                {
                    title: 'Got to school',
                    start: new Date(y, m, d + 16, 12, 0),
                    end: new Date(y, m, d + 16, 13, 0),
                    backgroundColor: '#64bd63',
                    textColor: '#fff',
                    description: 'Time to go back'
                },
                {
                    title: 'Study some Node',
                    start: new Date(y, m, d + 18, 12, 0),
                    end: new Date(y, m, d + 18, 13, 0),
                    backgroundColor: '#79A5F0',
                    textColor: '#fff',
                    description: 'Node.js is a platform built ' +
                        'on Chrome\'s JavaScript runtime for easily' +
                        ' building fast, scalable network applications.' +
                        ' Node.js uses an event-driven, non-blocking' +
                        ' I/O model that makes it lightweight and' +
                        ' efficient, perfect for data-intensive real-time' +
                        ' applications that run across distributed devices.'
                },
                {
                    title: 'Click for Flatlogic',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://flatlogic.com/',
                    backgroundColor: '#e5603b',
                    textColor: '#fff',
                    description: 'Creative solutions'
                }
            ],
            selectable: true,
            selectHelper: true,
            select: function (start, end, allDay) {
                _this.createEvent = function () {
                    var title = _this.event.title;
                    if (title) {
                        _this.$calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay,
                            backgroundColor: '#64bd63',
                            textColor: '#fff'
                        }, true // make the event "stick"
                        );
                    }
                    _this.$calendar.fullCalendar('unselect');
                    jQuery('#create-event-modal').modal('hide');
                };
                jQuery('#create-event-modal').modal('show');
            },
            eventClick: function (event) {
                _this.event = event;
                jQuery('#show-event-modal').modal('show');
            },
            editable: true,
            droppable: true,
            drop: function (dateItem, event) {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = {
                    // use the element's text as the event title
                    title: jQuery.trim(jQuery(event.target).text())
                };
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = jQuery.extend({}, originalEventObject);
                // assign it the date that was reported
                copiedEventObject.start = dateItem;
                copiedEventObject.allDay = !dateItem.hasTime();
                var $categoryClass = jQuery(event.target).data('event-class');
                if ($categoryClass) {
                    copiedEventObject.className = [$categoryClass];
                }
                // render the event on the calendar
                // the last `true` argument determines if
                // the event 'sticks'
                // http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                _this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);
                jQuery(event.target).remove();
            },
        };
    }
    ;
    Calendar.prototype.addEvent = function (event) {
        this.calendarOptions.events.push(event);
    };
    ;
    Calendar.prototype.changeView = function (view) {
        this.$calendar.fullCalendar('changeView', view);
    };
    ;
    Calendar.prototype.currentMonth = function () {
        return moment(this.$calendar.fullCalendar('getDate')).format('MMM YYYY');
    };
    ;
    Calendar.prototype.currentDay = function () {
        return moment(this.$calendar.fullCalendar('getDate')).format('dddd');
    };
    ;
    Calendar.prototype.prev = function () {
        this.$calendar.fullCalendar('prev');
    };
    ;
    Calendar.prototype.next = function () {
        this.$calendar.fullCalendar('next');
    };
    ;
    Calendar.prototype.today = function () {
        this.$calendar.fullCalendar('today');
    };
    Calendar.prototype.ngOnInit = function () {
        this.$calendar = jQuery('#calendar');
        this.$calendar.fullCalendar(this.calendarOptions);
        jQuery('.draggable').draggable(this.dragOptions);
    };
    Calendar = __decorate([
        core_1.Component({
            selector: '[calendar]',
            template: __webpack_require__("./src/app/components/calendar/calendar.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./src/app/components/calendar/calendar.style.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], Calendar);
    return Calendar;
}());
exports.Calendar = Calendar;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/components/calendar/calendar.style.scss":
/***/ function(module, exports) {

module.exports = "/*!\n * FullCalendar v3.0.1 Stylesheet\n * Docs & License: http://fullcalendar.io/\n * (c) 2016 Adam Shaw\n */\n.fc {\n  direction: ltr;\n  text-align: left; }\n\n.fc-rtl {\n  text-align: right; }\n\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em; }\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd; }\n\n.fc-unthemed .fc-popover {\n  background-color: #fff; }\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee; }\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n  color: #666; }\n\n.fc-unthemed .fc-today {\n  background: #fcf8e3; }\n\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: .3; }\n\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: .3; }\n\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7; }\n\n/* Icons (inline elements with styled text that mock arrow icons)\n--------------------------------------------------------------------------------------------------*/\n.fc-icon {\n  display: inline-block;\n  height: 1em;\n  line-height: 1em;\n  font-size: 1em;\n  text-align: center;\n  overflow: hidden;\n  font-family: \"Courier New\", Courier, monospace;\n  /* don't allow browser text-selection */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/*\nAcceptable font-family overrides for individual icons:\n\t\"Arial\", sans-serif\n\t\"Times New Roman\", serif\n\nNOTE: use percentage font sizes or else old IE chokes\n*/\n.fc-icon:after {\n  position: relative; }\n\n.fc-icon-left-single-arrow:after {\n  content: \"\\02039\";\n  font-weight: bold;\n  font-size: 200%;\n  top: -7%; }\n\n.fc-icon-right-single-arrow:after {\n  content: \"\\0203A\";\n  font-weight: bold;\n  font-size: 200%;\n  top: -7%; }\n\n.fc-icon-left-double-arrow:after {\n  content: \"\\000AB\";\n  font-size: 160%;\n  top: -7%; }\n\n.fc-icon-right-double-arrow:after {\n  content: \"\\000BB\";\n  font-size: 160%;\n  top: -7%; }\n\n.fc-icon-left-triangle:after {\n  content: \"\\25C4\";\n  font-size: 125%;\n  top: 3%; }\n\n.fc-icon-right-triangle:after {\n  content: \"\\25BA\";\n  font-size: 125%;\n  top: 3%; }\n\n.fc-icon-down-triangle:after {\n  content: \"\\25BC\";\n  font-size: 125%;\n  top: 2%; }\n\n.fc-icon-x:after {\n  content: \"\\000D7\";\n  font-size: 200%;\n  top: 6%; }\n\n/* Buttons (styled <button> tags, normalized to work cross-browser)\n--------------------------------------------------------------------------------------------------*/\n.fc button {\n  /* force height to include the border and padding */\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* dimensions */\n  margin: 0;\n  height: 2.1em;\n  padding: 0 .6em;\n  /* text & cursor */\n  font-size: 1em;\n  /* normalize */\n  white-space: nowrap;\n  cursor: pointer; }\n\n/* Firefox has an annoying inner border */\n.fc button::-moz-focus-inner {\n  margin: 0;\n  padding: 0; }\n\n.fc-state-default {\n  /* non-theme */\n  border: 1px solid; }\n\n.fc-state-default.fc-corner-left {\n  /* non-theme */\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.fc-state-default.fc-corner-right {\n  /* non-theme */\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n/* icons in buttons */\n.fc button .fc-icon {\n  /* non-theme */\n  position: relative;\n  top: -0.05em;\n  /* seems to be a good adjustment across browsers */\n  margin: 0 .2em;\n  vertical-align: middle; }\n\n/*\n  button states\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\n*/\n.fc-state-default {\n  background-color: #f5f5f5;\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\n  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\n  background-repeat: repeat-x;\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  color: #333;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); }\n\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n  color: #333333;\n  background-color: #e6e6e6; }\n\n.fc-state-hover {\n  color: #333333;\n  text-decoration: none;\n  background-position: 0 -15px;\n  -webkit-transition: background-position 0.1s linear;\n  -moz-transition: background-position 0.1s linear;\n  -o-transition: background-position 0.1s linear;\n  transition: background-position 0.1s linear; }\n\n.fc-state-down,\n.fc-state-active {\n  background-color: #cccccc;\n  background-image: none;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05); }\n\n.fc-state-disabled {\n  cursor: default;\n  background-image: none;\n  opacity: 0.65;\n  box-shadow: none; }\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  display: inline-block; }\n\n/*\nevery button that is not first in a button group should scootch over one pixel and cover the\nprevious button's border...\n*/\n.fc .fc-button-group > * {\n  /* extra precedence b/c buttons have margin set to zero */\n  float: left;\n  margin: 0 0 0 -1px; }\n\n.fc .fc-button-group > :first-child {\n  /* same */\n  margin-left: 0; }\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }\n\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  padding: 2px 4px; }\n\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px; }\n\n.fc-popover .fc-header .fc-close {\n  cursor: pointer; }\n\n.fc-ltr .fc-popover .fc-header .fc-title,\n.fc-rtl .fc-popover .fc-header .fc-close {\n  float: left; }\n\n.fc-rtl .fc-popover .fc-header .fc-title,\n.fc-ltr .fc-popover .fc-header .fc-close {\n  float: right; }\n\n/* unthemed */\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid; }\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n  font-size: .9em;\n  margin-top: 2px; }\n\n/* jqui themed */\n.fc-popover > .ui-widget-header + .ui-widget-content {\n  border-top: 0;\n  /* where they meet, let the header have the border */ }\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px; }\n\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0; }\n\n.fc-clear {\n  clear: both; }\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-helper-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */ }\n\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */ }\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */ }\n\n.fc th {\n  text-align: center; }\n\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top; }\n\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */ }\n\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer; }\n\na[data-goto]:hover {\n  text-decoration: underline; }\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0; }\n\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\n\t   the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent; }\n\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */ }\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative; }\n\n.fc-row .fc-bg {\n  z-index: 1; }\n\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */ }\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */ }\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent; }\n\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2; }\n\n.fc-row .fc-highlight-skeleton {\n  z-index: 3; }\n\n/*\nrow content (which contains day/week numbers and events) as well as \"helper\" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */ }\n\n.fc-row .fc-helper-skeleton {\n  z-index: 5; }\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-helper-skeleton td {\n  /* see-through to the background below */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0; }\n\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-helper-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0; }\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch; }\n\n/* TODO: move to agenda/basic */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */ }\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: .85em;\n  line-height: 1.3;\n  border-radius: 3px;\n  border: 1px solid #3a87ad;\n  /* default BORDER color */\n  font-weight: normal;\n  /* undo jqui's ui-widget-header bold */ }\n\n.fc-event,\n.fc-event-dot {\n  background-color: #3a87ad;\n  /* default BACKGROUND color */ }\n\n/* overpower some of bootstrap's and jqui's styles on <a> tags */\n.fc-event,\n.fc-event:hover,\n.ui-widget .fc-event {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */ }\n\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */ }\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed; }\n\n.fc-event .fc-bg {\n  /* the generic .fc-bg already does position */\n  z-index: 1;\n  background: #fff;\n  opacity: .25; }\n\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2; }\n\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4; }\n\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none; }\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block; }\n\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px; }\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }\n\n.fc-event.fc-selected.fc-dragging {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3); }\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0; }\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */ }\n\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */ }\n\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */ }\n\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px; }\n\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */ }\n\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */ }\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px; }\n\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */ }\n\n.fc-day-grid-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: .25; }\n\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden; }\n\n.fc-day-grid-event .fc-time {\n  font-weight: bold; }\n\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */ }\n\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */ }\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: .85em;\n  cursor: pointer;\n  text-decoration: none; }\n\na.fc-more:hover {\n  text-decoration: underline; }\n\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none; }\n\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */ }\n\n.fc-more-popover {\n  z-index: 2;\n  width: 220px; }\n\n.fc-more-popover .fc-event-container {\n  padding: 10px; }\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red; }\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent; }\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  text-align: center;\n  margin-bottom: 1em; }\n\n.fc-toolbar .fc-left {\n  float: left; }\n\n.fc-toolbar .fc-right {\n  float: right; }\n\n.fc-toolbar .fc-center {\n  display: inline-block; }\n\n/* the things within each left/right/center section */\n.fc .fc-toolbar > * > * {\n  /* extra precedence to override button border margins */\n  float: left;\n  margin-left: .75em; }\n\n/* the first thing within each left/center/right section */\n.fc .fc-toolbar > * > :first-child {\n  /* extra precedence to override button border margins */\n  margin-left: 0; }\n\n/* title text */\n.fc-toolbar h2 {\n  margin: 0; }\n\n/* button layering (for border precedence) */\n.fc-toolbar button {\n  position: relative; }\n\n.fc-toolbar .fc-state-hover,\n.fc-toolbar .ui-state-hover {\n  z-index: 2; }\n\n.fc-toolbar .fc-state-down {\n  z-index: 3; }\n\n.fc-toolbar .fc-state-active,\n.fc-toolbar .ui-state-active {\n  z-index: 4; }\n\n.fc-toolbar button:focus {\n  z-index: 5; }\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1; }\n\n/* BasicView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-basicWeek-view .fc-content-skeleton,\n.fc-basicDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */ }\n\n.fc-basic-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */ }\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden; }\n\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3; }\n\n.fc-basic-view .fc-week-number,\n.fc-basic-view .fc-day-number {\n  padding: 2px; }\n\n.fc-basic-view th.fc-week-number,\n.fc-basic-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can't have as much v space */ }\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-day-number {\n  float: right; }\n\n.fc-rtl .fc-basic-view .fc-day-top .fc-day-number {\n  float: left; }\n\n.fc-ltr .fc-basic-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0; }\n\n.fc-rtl .fc-basic-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px; }\n\n.fc-basic-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080; }\n\n/* when week/day number have own column */\n.fc-basic-view td.fc-week-number {\n  text-align: center; }\n\n.fc-basic-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em; }\n\n/* AgendaView all-day area\n--------------------------------------------------------------------------------------------------*/\n.fc-agenda-view .fc-day-grid {\n  position: relative;\n  z-index: 2;\n  /* so the \"more..\" popover will be over the time grid */ }\n\n.fc-agenda-view .fc-day-grid .fc-row {\n  min-height: 3em;\n  /* all-day section will never get shorter than this */ }\n\n.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n  padding-bottom: 1em;\n  /* give space underneath events for clicking/selecting days */ }\n\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-axis {\n  /* .fc to overcome default cell styles */\n  vertical-align: middle;\n  padding: 0 4px;\n  white-space: nowrap; }\n\n.fc-ltr .fc-axis {\n  text-align: right; }\n\n.fc-rtl .fc-axis {\n  text-align: left; }\n\n.ui-widget td.fc-axis {\n  font-weight: normal;\n  /* overcome jqui theme making it bold */ }\n\n/* TimeGrid Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid-container,\n.fc-time-grid {\n  /* so slats/bg/content/etc positions get scoped within here */\n  position: relative;\n  z-index: 1; }\n\n.fc-time-grid {\n  min-height: 100%;\n  /* so if height setting is 'auto', .fc-bg stretches to fill height */ }\n\n.fc-time-grid table {\n  /* don't put outer borders on slats/bg/content/etc */\n  border: 0 hidden transparent; }\n\n.fc-time-grid > .fc-bg {\n  z-index: 1; }\n\n.fc-time-grid .fc-slats,\n.fc-time-grid > hr {\n  /* the <hr> AgendaView injects when grid is shorter than scroller */\n  position: relative;\n  z-index: 2; }\n\n.fc-time-grid .fc-content-col {\n  position: relative;\n  /* because now-indicator lives directly inside */ }\n\n.fc-time-grid .fc-content-skeleton {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n/* divs within a cell within the fc-content-skeleton */\n.fc-time-grid .fc-business-container {\n  position: relative;\n  z-index: 1; }\n\n.fc-time-grid .fc-bgevent-container {\n  position: relative;\n  z-index: 2; }\n\n.fc-time-grid .fc-highlight-container {\n  position: relative;\n  z-index: 3; }\n\n.fc-time-grid .fc-event-container {\n  position: relative;\n  z-index: 4; }\n\n.fc-time-grid .fc-now-indicator-line {\n  z-index: 5; }\n\n.fc-time-grid .fc-helper-container {\n  /* also is fc-event-container */\n  position: relative;\n  z-index: 6; }\n\n/* TimeGrid Slats (lines that run horizontally)\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-slats td {\n  height: 1.5em;\n  border-bottom: 0;\n  /* each cell is responsible for its top border */ }\n\n.fc-time-grid .fc-slats .fc-minor td {\n  border-top-style: dotted; }\n\n.fc-time-grid .fc-slats .ui-widget-content {\n  /* for jqui theme */\n  background: none;\n  /* see through to fc-bg */ }\n\n/* TimeGrid Highlighting Slots\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-highlight-container {\n  /* a div within a cell within the fc-highlight-skeleton */\n  position: relative;\n  /* scopes the left/right of the fc-highlight to be in the column */ }\n\n.fc-time-grid .fc-highlight {\n  position: absolute;\n  left: 0;\n  right: 0;\n  /* top and bottom will be in by JS */ }\n\n/* TimeGrid Event Containment\n--------------------------------------------------------------------------------------------------*/\n.fc-ltr .fc-time-grid .fc-event-container {\n  /* space on the sides of events for LTR (default) */\n  margin: 0 2.5% 0 2px; }\n\n.fc-rtl .fc-time-grid .fc-event-container {\n  /* space on the sides of events for RTL */\n  margin: 0 2px 0 2.5%; }\n\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n  position: absolute;\n  z-index: 1;\n  /* scope inner z-index's */ }\n\n.fc-time-grid .fc-bgevent {\n  /* background events always span full width */\n  left: 0;\n  right: 0; }\n\n/* Generic Vertical Event\n--------------------------------------------------------------------------------------------------*/\n.fc-v-event.fc-not-start {\n  /* events that are continuing from another day */\n  /* replace space made by the top border with padding */\n  border-top-width: 0;\n  padding-top: 1px;\n  /* remove top rounded corners */\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.fc-v-event.fc-not-end {\n  /* replace space made by the top border with padding */\n  border-bottom-width: 0;\n  padding-bottom: 1px;\n  /* remove bottom rounded corners */\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n/* TimeGrid Event Styling\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-time-grid-event {\n  overflow: hidden;\n  /* don't let the bg flow over rounded corners */ }\n\n.fc-time-grid-event.fc-selected {\n  /* need to allow touch resizers to extend outside event's bounding box */\n  /* common fc-selected styles hide the fc-bg, so don't need this anyway */\n  overflow: visible; }\n\n.fc-time-grid-event.fc-selected .fc-bg {\n  display: none;\n  /* hide semi-white background, to appear darker */ }\n\n.fc-time-grid-event .fc-content {\n  overflow: hidden;\n  /* for when .fc-selected */ }\n\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n  padding: 0 1px; }\n\n.fc-time-grid-event .fc-time {\n  font-size: .85em;\n  white-space: nowrap; }\n\n/* short mode, where time and title are on the same line */\n.fc-time-grid-event.fc-short .fc-content {\n  /* don't wrap to second line (now that contents will be inline) */\n  white-space: nowrap; }\n\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n  /* put the time and title on the same line */\n  display: inline-block;\n  vertical-align: top; }\n\n.fc-time-grid-event.fc-short .fc-time span {\n  display: none;\n  /* don't display the full time text... */ }\n\n.fc-time-grid-event.fc-short .fc-time:before {\n  content: attr(data-start);\n  /* ...instead, display only the start time */ }\n\n.fc-time-grid-event.fc-short .fc-time:after {\n  content: \"\\000A0-\\000A0\";\n  /* seperate with a dash, wrapped in nbsp's */ }\n\n.fc-time-grid-event.fc-short .fc-title {\n  font-size: .85em;\n  /* make the title text the same size as the time */\n  padding: 0;\n  /* undo padding from above */ }\n\n/* resizer (cursor device) */\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 8px;\n  overflow: hidden;\n  line-height: 8px;\n  font-size: 11px;\n  font-family: monospace;\n  text-align: center;\n  cursor: s-resize; }\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {\n  content: \"=\"; }\n\n/* resizer (touch device) */\n.fc-time-grid-event.fc-selected .fc-resizer {\n  /* 10x10 dot */\n  border-radius: 5px;\n  border-width: 1px;\n  width: 8px;\n  height: 8px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* horizontally center */\n  left: 50%;\n  margin-left: -5px;\n  /* center on the bottom edge */\n  bottom: -5px; }\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-now-indicator-line {\n  border-top-width: 1px;\n  left: 0;\n  right: 0; }\n\n/* arrow on axis */\n.fc-time-grid .fc-now-indicator-arrow {\n  margin-top: -5px;\n  /* vertically center on top coordinate */ }\n\n.fc-ltr .fc-time-grid .fc-now-indicator-arrow {\n  left: 0;\n  /* triangle pointing right... */\n  border-width: 5px 0 5px 6px;\n  border-top-color: transparent;\n  border-bottom-color: transparent; }\n\n.fc-rtl .fc-time-grid .fc-now-indicator-arrow {\n  right: 0;\n  /* triangle pointing left... */\n  border-width: 5px 6px 5px 0;\n  border-top-color: transparent;\n  border-bottom-color: transparent; }\n\n/* List View\n--------------------------------------------------------------------------------------------------*/\n/* possibly reusable */\n.fc-event-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px; }\n\n/* view wrapper */\n.fc-rtl .fc-list-view {\n  direction: rtl;\n  /* unlike core views, leverage browser RTL */ }\n\n.fc-list-view {\n  border-width: 1px;\n  border-style: solid; }\n\n/* table resets */\n.fc .fc-list-table {\n  table-layout: auto;\n  /* for shrinkwrapping cell content */ }\n\n.fc-list-table td {\n  border-width: 1px 0 0;\n  padding: 8px 14px; }\n\n.fc-list-table tr:first-child td {\n  border-top-width: 0; }\n\n/* day headings with the list */\n.fc-list-heading {\n  border-bottom-width: 1px; }\n\n.fc-list-heading td {\n  font-weight: bold; }\n\n.fc-ltr .fc-list-heading-main {\n  float: left; }\n\n.fc-ltr .fc-list-heading-alt {\n  float: right; }\n\n.fc-rtl .fc-list-heading-main {\n  float: right; }\n\n.fc-rtl .fc-list-heading-alt {\n  float: left; }\n\n/* event list items */\n.fc-list-item.fc-has-url {\n  cursor: pointer;\n  /* whole row will be clickable */ }\n\n.fc-list-item:hover td {\n  background-color: #f5f5f5; }\n\n.fc-list-item-marker,\n.fc-list-item-time {\n  white-space: nowrap;\n  width: 1px; }\n\n/* make the dot closer to the event title */\n.fc-ltr .fc-list-item-marker {\n  padding-right: 0; }\n\n.fc-rtl .fc-list-item-marker {\n  padding-left: 0; }\n\n.fc-list-item-title a {\n  /* every event title cell has an <a> tag */\n  text-decoration: none;\n  color: inherit; }\n\n.fc-list-item-title a[href]:hover {\n  /* hover effect only on titles with hrefs */\n  text-decoration: underline; }\n\n/* message when no events */\n.fc-list-empty-wrap2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.fc-list-empty-wrap1 {\n  width: 100%;\n  height: 100%;\n  display: table; }\n\n.fc-list-empty {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center; }\n\n.fc-unthemed .fc-list-empty {\n  /* theme will provide own background */\n  background-color: #eee; }\n\n.widget > header h4 {\n  font-size: 14px; }\n\n/**************************/\n/* Full Calendar Override */\n/**************************/\nlabel.btn.btn-secondary {\n  margin-bottom: 0; }\n\n.fc-body .fc-widget-content .fc-scroller {\n  overflow-y: hidden !important; }\n\n.fc-grid th {\n  text-transform: uppercase; }\n\n.fc-event {\n  padding: 2px 3px;\n  border: none;\n  font-weight: 400;\n  background-color: #ddd;\n  color: #666; }\n\na:not([href]):not([tabindex]) {\n  color: #666;\n  text-decoration: none; }\n\n.fc-today {\n  background-color: #88918e !important;\n  border-left-color: #dddddd;\n  border-top-color: #dddddd; }\n\na.fc-event {\n  height: auto;\n  line-height: 1.42857; }\n\n/***********************************/\n/**      Full Calendar Custom     **/\n/***********************************/\n.full-calendar {\n  margin-top: 10px; }\n\n.calendar-controls .btn {\n  font-size: 0.75rem; }\n\n.calendar-external-events {\n  margin-top: 20px; }\n  .calendar-external-events .external-event {\n    margin: 10px 0;\n    padding: 6px;\n    font-size: 0.75rem;\n    cursor: pointer;\n    border-radius: .25rem;\n    background-color: #ffffff;\n    border: 1px solid #bbb; }\n\n@media (min-width: 1200px) {\n  .widget-calendar {\n    margin-top: -100px; } }\n"

/***/ },

/***/ "./src/app/components/calendar/calendar.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Components - <span class=\"fw-semi-bold\">Calendar App</span>\n  <small>Draggable access</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <section class=\"widget\" widget>\n      <header>\n        <h4>\n          <i class=\"fa fa-calendar\"></i>\n          Calendar\n        </h4>\n        <div class=\"actions\">\n          <div class=\"btn-group mr-sm\">\n            <button class=\"btn btn-secondary\" id=\"calender-prev\" (click)=\"prev()\"><i class=\"fa fa-angle-left\"></i></button>\n            <button class=\"btn btn-secondary\" id=\"calender-next\" (click)=\"next()\"><i class=\"fa fa-angle-right\"></i></button>\n          </div>\n          <button id=\"today\" type=\"button\" class=\"btn btn-warning mr-sm\" (click)=\"today()\">\n            Today\n          </button>\n          <div id=\"calendar-switcher\" class=\"btn-group\" data-toggle=\"buttons\">\n            <label class=\"btn btn-secondary active\" (click)=\"changeView('month')\">\n              <input type=\"radio\" name=\"view\" value=\"month\" checked> Month\n            </label>\n            <label class=\"btn btn-secondary\" (click)=\"changeView('agendaWeek')\">\n              <input type=\"radio\" name=\"view\" value=\"agendaWeek\"> Week\n            </label>\n            <label class=\"btn btn-secondary\" (click)=\"changeView('agendaDay')\">\n              <input type=\"radio\" name=\"view\" value=\"agendaDay\"> Day\n            </label>\n          </div>\n        </div>\n      </header>\n      <div class=\"widget-body\">\n        <div id=\"calendar\" class=\"calendar mt-lg\"></div>\n      </div>\n    </section>\n  </div>\n  <div class=\"col-md-4\">\n    <section widget class=\"widget\">\n      <header>\n        <h5>\n          <i class=\"fa fa-exchange\"></i>\n          Draggable events\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <div id='external-events'>\n          <div class='external-event draggable bg-danger' data-event-class=\"bg-danger text-white\"><i class=\"fa fa-check\"></i> Buy\n            this template\n          </div>\n          <div class='external-event draggable bg-warning' data-event-class=\"bg-warning text-white\">Study some Node</div>\n          <div class='external-event draggable bg-success' data-event-class=\"bg-success text-white\">Make a tea</div>\n          <div class='external-event draggable bg-primary' data-event-class=\"bg-primary text-white\"><i class=\"fa fa-book\"></i> Go\n            to school\n          </div>\n          <div class='external-event draggable bg-info' data-event-class=\"bg-info text-white\">Open windows</div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"create-event-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body</p>\n\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"event.title\" class=\"form-control input-no-border\"\n                 placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button data-dismiss=\"modal\" class=\"btn btn-secondary\">Cancel</button>\n        <button (click)=\"createEvent()\" class=\"btn bg-success btn-success\">OK</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div><!-- /.modal -->\n<div class=\"modal fade\" id=\"show-event-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n        <h4 *ngIf=\"event.title\" class=\"modal-title\">{{ event.title }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p><i class=\"fa fa-calendar text-muted fs-sm\"></i> &nbsp; {{ event.start }}\n        <p *ngIf=\"event.end\">\n          <i class=\"fa fa-clock-o text-muted fs-sm\"></i> &nbsp; {{ event.end }}\n        </p>\n        <p *ngIf=\"event.description\">{{ event.description }}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ },

/***/ "./src/app/components/components.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__("./node_modules/fullcalendar/dist/fullcalendar.js");
__webpack_require__("./node_modules/jquery-ui/ui/widgets/draggable.js");
__webpack_require__("./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js");
__webpack_require__("./node_modules/shufflejs/dist/shuffle.js");
__webpack_require__("./node_modules/moment/moment.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ng2_file_upload_1 = __webpack_require__("./node_modules/ng2-file-upload/ng2-file-upload.js");
var calendar_component_1 = __webpack_require__("./src/app/components/calendar/calendar.component.ts");
var maps_component_1 = __webpack_require__("./src/app/components/maps/maps.component.ts");
var gallery_component_1 = __webpack_require__("./src/app/components/gallery/gallery.component.ts");
var fileupload_component_1 = __webpack_require__("./src/app/components/fileupload/fileupload.component.ts");
var hideOnUpload_directive_1 = __webpack_require__("./src/app/components/fileupload/hideOnUpload.directive.ts");
var core_2 = __webpack_require__("./node_modules/angular2-google-maps/core/index.js");
var jqvmap_module_1 = __webpack_require__("./src/app/components/maps/jvmap/jqvmap.module.ts");
var ng2_bootstrap_1 = __webpack_require__("./node_modules/ng2-bootstrap/ng2-bootstrap.js");
exports.routes = [
    { path: '', redirectTo: 'calendar', pathMatch: 'full' },
    { path: 'calendar', component: calendar_component_1.Calendar },
    { path: 'maps', component: maps_component_1.Maps },
    { path: 'gallery', component: gallery_component_1.Gallery },
    { path: 'fileupload', component: fileupload_component_1.Fileupload }
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule.routes = exports.routes;
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                calendar_component_1.Calendar,
                maps_component_1.Maps,
                gallery_component_1.Gallery,
                fileupload_component_1.Fileupload,
                hideOnUpload_directive_1.HideOnUpload
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                jqvmap_module_1.JqvmapModule,
                ng2_bootstrap_1.ModalModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE',
                    libraries: ['places']
                }),
                router_1.RouterModule.forChild(exports.routes),
                ng2_file_upload_1.FileUploadModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentsModule);
    return ComponentsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentsModule;


/***/ },

/***/ "./src/app/components/fileupload/fileupload.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ng2_file_upload_1 = __webpack_require__("./node_modules/ng2-file-upload/ng2-file-upload.js");
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var Fileupload = (function () {
    function Fileupload() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
    }
    Fileupload.prototype.cancelItem = function (item) {
        item.isUploading ? item.cancel() : item.remove();
    };
    Fileupload.prototype.floor = function (num) {
        return Math.floor(num);
    };
    Fileupload = __decorate([
        core_1.Component({
            selector: '[fileupload]',
            template: __webpack_require__("./src/app/components/fileupload/fileupload.template.html"),
            styles: [__webpack_require__("./src/app/components/fileupload/fileupload.style.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Fileupload);
    return Fileupload;
}());
exports.Fileupload = Fileupload;


/***/ },

/***/ "./src/app/components/fileupload/fileupload.style.scss":
/***/ function(module, exports) {

module.exports = "/*\n * jQuery File Upload UI Plugin CSS 7.4\n * https://github.com/blueimp/jQuery-File-Upload\n *\n * Copyright 2010, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * http://www.opensource.org/licenses/MIT\n */\n.fileinput-button {\n  position: relative;\n  overflow: hidden;\n  float: left;\n  margin-right: 4px; }\n\n.fileinput-button input {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  transform: translate(-300px, 0) scale(4);\n  font-size: 23px;\n  direction: ltr;\n  cursor: pointer; }\n\n.fileupload-buttonbar .btn,\n.fileupload-buttonbar .toggle {\n  margin-bottom: 5px; }\n\n.fileupload-loading {\n  position: absolute;\n  left: 50%;\n  width: 128px;\n  height: 128px;\n  display: none; }\n\n.fileupload-processing .fileupload-loading {\n  display: block; }\n\n/* Fix for IE 6: */\n* html .fileinput-button {\n  line-height: 24px;\n  margin: 1px -3px 0 0; }\n\n/* Fix for IE 7: */\n* + html .fileinput-button {\n  padding: 2px 15px;\n  margin: 1px 0 0 0; }\n\n@media (max-width: 767px) {\n  .fileupload-buttonbar .toggle,\n  .files .toggle,\n  .files .btn span {\n    display: none; }\n  .files .name * {\n    width: 80px;\n    display: inline-block;\n    word-wrap: break-word; }\n  .files .progress {\n    width: 20px; } }\n\n.files-table td:first-child {\n  padding-left: 2.25rem; }\n\n.files-table td .progress {\n  margin-bottom: 9px;\n  margin-top: 0;\n  margin-right: 0; }\n\n.files-table td p {\n  margin-bottom: 9px; }\n\n.files-table td .btn .glyphicon {\n  top: 3px; }\n\n.form-actions {\n  display: flex;\n  flex-wrap: wrap; }\n  .form-actions .btn {\n    margin-right: 7px; }\n\n.fileupload-progress {\n  padding-top: 1.39rem; }\n  .fileupload-progress progress {\n    margin-bottom: 0.39rem; }\n  .fileupload-progress .progress-extended {\n    margin-bottom: 1.39rem; }\n\n@media (max-width: 576px) {\n  .files-table td p {\n    word-break: break-all;\n    max-width: 100px; }\n  .files-table td .btn .glyphicon {\n    top: 4px; } }\n"

/***/ },

/***/ "./src/app/components/fileupload/fileupload.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Components - <span class=\"fw-semi-bold\">Fileupload</span>\n  <small>Drag & drop fileupload</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-md-8 offset-md-1\">\n    <section widget class=\"widget\">\n      <div class=\"widget-body\">\n        <form id=\"fileupload\" action=\"server/php\" method=\"POST\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div id=\"dropzone\"\n                   class=\"dropzone\"\n                   ng2FileDrop\n                   [uploader]=\"uploader\">\n                Drop files here\n                <i class=\"fa fa-download-alt float-xs-right\"></i>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 fileupload-progress\">\n              <!-- The global progress bar -->\n              <progress class=\"progress progress-xs progress-inverse mt-0\" *ngIf=\"uploader.progress || uploader.isUploading\" value=\"{{uploader.progress}}\" max=\"100\"></progress>\n              <div *ngIf=\"uploader.progress || uploader.isUploading\" class=\"progress-extended\">{{floor(uploader.progress * uploader.queue.length / 100)}} / {{uploader.queue.length}} files uploaded</div>\n            </div>\n          </div>\n          <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->\n          <div class=\"form-actions fileupload-buttonbar no-margin\">\n            <!-- The fileinput-button span is used to style the file input field as button -->\n            <button class=\"btn btn-default add-files-btn fileinput-button mr-xs\">\n              <i class=\"glyphicon glyphicon-plus\"></i>\n              <span>Add files...</span>\n              <input type=\"file\" name=\"files[]\" ng2FileSelect [uploader]=\"uploader\" multiple>\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary start mr-xs\"\n                    (click)=\"uploader.uploadAll()\">\n              <i class=\"glyphicon glyphicon-upload\"></i>\n              <span>Start upload</span>\n            </button>\n            <button type=\"reset\" class=\"btn btn-inverse cancel\"\n                    (click)=\"uploader.cancelAll()\">\n              <i class=\"glyphicon glyphicon-ban-circle\"></i>\n              <span>Cancel upload</span>\n            </button>\n          </div>\n\n          <!-- The table listing the files available for upload/download -->\n          <table role=\"presentation\" class=\"table table-striped files-table\">\n            <tbody class=\"files\">\n            <tr class=\"template-upload fade in\" *ngFor=\"let item of uploader.queue\">\n              <td>\n                <p class=\"name\">{{ item?.file?.name }}</p>\n                <strong class=\"error text-danger\"></strong>\n              </td>\n              <td>\n                <p class=\"size\">{{ item?.file?.size/1024 | number:'.2' }} KB</p>\n                <progress\n                  hide-on-upload\n                  [fileItem]=\"item\"\n                  class=\"progress progress-xs progress-success\"\n                  value=\"{{item?.progress}}\"\n                  max=\"100\"></progress>\n              </td>\n              <td>\n                <button class=\"btn btn-primary btn-sm start\"\n                        *ngIf=\"!item.isUploaded\"\n                        (click)=\"item.upload()\"\n                        [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                  <i class=\"glyphicon glyphicon-upload\"></i>\n                  <span>Start</span>\n                </button>\n                <button class=\"btn btn-warning btn-sm cancel\"\n                        *ngIf=\"!item.isUploaded\"\n                        (click)=\"cancelItem(item)\">\n                  <i class=\"glyphicon glyphicon-ban-circle\"></i>\n                  <span>Cancel</span>\n                </button>\n                <button class=\"btn btn-danger btn-sm delete\"\n                        *ngIf=\"item.isUploaded\"\n                        (click)=\"item.remove()\">\n                  <i class=\"glyphicon glyphicon-trash\"></i>\n                  <span>Delete</span>\n                </button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </form>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/components/fileupload/hideOnUpload.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/Subject.js");
var HideOnUpload = (function () {
    function HideOnUpload(el) {
        this.uploadedSubject = new Subject_1.Subject();
        this.el = el.nativeElement;
    }
    HideOnUpload.prototype.ngOnInit = function () {
        var _this = this;
        this.uploadedSubject.subscribe(function (isUploaded) {
            if (isUploaded) {
                _this.uploadedSubject.unsubscribe();
                _this.hideSelf();
            }
        });
    };
    HideOnUpload.prototype.hideSelf = function () {
        var _this = this;
        setTimeout(function () {
            _this.el.style.display = 'none';
        }, 650);
    };
    HideOnUpload.prototype.ngDoCheck = function () {
        if (!this.uploadedSubject.closed) {
            this.uploadedSubject.next(this.item.isUploaded);
        }
    };
    __decorate([
        core_1.Input('fileItem'), 
        __metadata('design:type', Object)
    ], HideOnUpload.prototype, "item", void 0);
    HideOnUpload = __decorate([
        core_1.Directive({
            selector: '[hide-on-upload]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], HideOnUpload);
    return HideOnUpload;
    var _a;
}());
exports.HideOnUpload = HideOnUpload;


/***/ },

/***/ "./src/app/components/gallery/gallery.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Gallery = (function () {
    function Gallery() {
    }
    Gallery.prototype.ngOnInit = function () {
        this.initGallery();
    };
    Gallery.prototype.initGallery = function () {
        jQuery('#grid').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    };
    Gallery = __decorate([
        core_1.Component({
            selector: '[gallery]',
            template: __webpack_require__("./src/app/components/gallery/gallery.template.html"),
            styles: [__webpack_require__("./src/app/components/gallery/gallery.style.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Gallery);
    return Gallery;
}());
exports.Gallery = Gallery;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/components/gallery/gallery.style.scss":
/***/ function(module, exports) {

module.exports = "/* Magnific Popup CSS */\n.mfp-bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1042;\n  overflow: hidden;\n  position: fixed;\n  background: #0b0b0b;\n  opacity: 0.8; }\n\n.mfp-wrap {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1043;\n  position: fixed;\n  outline: none !important;\n  -webkit-backface-visibility: hidden; }\n\n.mfp-container {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding: 0 8px;\n  box-sizing: border-box; }\n\n.mfp-container:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\n.mfp-align-top .mfp-container:before {\n  display: none; }\n\n.mfp-content {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 auto;\n  text-align: left;\n  z-index: 1045; }\n\n.mfp-inline-holder .mfp-content,\n.mfp-ajax-holder .mfp-content {\n  width: 100%;\n  cursor: auto; }\n\n.mfp-ajax-cur {\n  cursor: progress; }\n\n.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {\n  cursor: -moz-zoom-out;\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out; }\n\n.mfp-zoom {\n  cursor: pointer;\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.mfp-auto-cursor .mfp-content {\n  cursor: auto; }\n\n.mfp-close,\n.mfp-arrow,\n.mfp-preloader,\n.mfp-counter {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n\n.mfp-loading.mfp-figure {\n  display: none; }\n\n.mfp-hide {\n  display: none !important; }\n\n.mfp-preloader {\n  color: #CCC;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  text-align: center;\n  margin-top: -0.8em;\n  left: 8px;\n  right: 8px;\n  z-index: 1044; }\n\n.mfp-preloader a {\n  color: #CCC; }\n\n.mfp-preloader a:hover {\n  color: #FFF; }\n\n.mfp-s-ready .mfp-preloader {\n  display: none; }\n\n.mfp-s-error .mfp-content {\n  display: none; }\n\nbutton.mfp-close,\nbutton.mfp-arrow {\n  overflow: visible;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  display: block;\n  outline: none;\n  padding: 0;\n  z-index: 1046;\n  box-shadow: none;\n  touch-action: manipulation; }\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n.mfp-close {\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-decoration: none;\n  text-align: center;\n  opacity: 0.65;\n  padding: 0 0 18px 10px;\n  color: #FFF;\n  font-style: normal;\n  font-size: 28px;\n  font-family: Arial, Baskerville, monospace; }\n\n.mfp-close:hover,\n.mfp-close:focus {\n  opacity: 1; }\n\n.mfp-close:active {\n  top: 1px; }\n\n.mfp-close-btn-in .mfp-close {\n  color: #333; }\n\n.mfp-image-holder .mfp-close,\n.mfp-iframe-holder .mfp-close {\n  color: #FFF;\n  right: -6px;\n  text-align: right;\n  padding-right: 6px;\n  width: 100%; }\n\n.mfp-counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #CCC;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap; }\n\n.mfp-arrow {\n  position: absolute;\n  opacity: 0.65;\n  margin: 0;\n  top: 50%;\n  margin-top: -55px;\n  padding: 0;\n  width: 90px;\n  height: 110px;\n  -webkit-tap-highlight-color: transparent; }\n\n.mfp-arrow:active {\n  margin-top: -54px; }\n\n.mfp-arrow:hover,\n.mfp-arrow:focus {\n  opacity: 1; }\n\n.mfp-arrow:before,\n.mfp-arrow:after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin-top: 35px;\n  margin-left: 35px;\n  border: medium inset transparent; }\n\n.mfp-arrow:after {\n  border-top-width: 13px;\n  border-bottom-width: 13px;\n  top: 8px; }\n\n.mfp-arrow:before {\n  border-top-width: 21px;\n  border-bottom-width: 21px;\n  opacity: 0.7; }\n\n.mfp-arrow-left {\n  left: 0; }\n\n.mfp-arrow-left:after {\n  border-right: 17px solid #FFF;\n  margin-left: 31px; }\n\n.mfp-arrow-left:before {\n  margin-left: 25px;\n  border-right: 27px solid #3F3F3F; }\n\n.mfp-arrow-right {\n  right: 0; }\n\n.mfp-arrow-right:after {\n  border-left: 17px solid #FFF;\n  margin-left: 39px; }\n\n.mfp-arrow-right:before {\n  border-left: 27px solid #3F3F3F; }\n\n.mfp-iframe-holder {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n\n.mfp-iframe-holder .mfp-content {\n  line-height: 0;\n  width: 100%;\n  max-width: 900px; }\n\n.mfp-iframe-holder .mfp-close {\n  top: -40px; }\n\n.mfp-iframe-scaler {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56.25%; }\n\n.mfp-iframe-scaler iframe {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n  background: #000; }\n\n/* Main image in popup */\nimg.mfp-img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  line-height: 0;\n  box-sizing: border-box;\n  padding: 40px 0 40px;\n  margin: 0 auto; }\n\n/* The shadow behind the image */\n.mfp-figure {\n  line-height: 0; }\n\n.mfp-figure:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 40px;\n  bottom: 40px;\n  display: block;\n  right: 0;\n  width: auto;\n  height: auto;\n  z-index: -1;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n  background: #444; }\n\n.mfp-figure small {\n  color: #BDBDBD;\n  display: block;\n  font-size: 12px;\n  line-height: 14px; }\n\n.mfp-figure figure {\n  margin: 0; }\n\n.mfp-bottom-bar {\n  margin-top: -36px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  cursor: auto; }\n\n.mfp-title {\n  text-align: left;\n  line-height: 18px;\n  color: #F3F3F3;\n  word-wrap: break-word;\n  padding-right: 36px; }\n\n.mfp-image-holder .mfp-content {\n  max-width: 100%; }\n\n.mfp-gallery .mfp-image-holder .mfp-figure {\n  cursor: pointer; }\n\n@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {\n  /**\n       * Remove all paddings around the image on small screen\n       */\n  .mfp-img-mobile .mfp-image-holder {\n    padding-left: 0;\n    padding-right: 0; }\n  .mfp-img-mobile img.mfp-img {\n    padding: 0; }\n  .mfp-img-mobile .mfp-figure:after {\n    top: 0;\n    bottom: 0; }\n  .mfp-img-mobile .mfp-figure small {\n    display: inline;\n    margin-left: 5px; }\n  .mfp-img-mobile .mfp-bottom-bar {\n    background: rgba(0, 0, 0, 0.6);\n    bottom: 0;\n    margin: 0;\n    top: auto;\n    padding: 3px 5px;\n    position: fixed;\n    box-sizing: border-box; }\n  .mfp-img-mobile .mfp-bottom-bar:empty {\n    padding: 0; }\n  .mfp-img-mobile .mfp-counter {\n    right: 5px;\n    top: 3px; }\n  .mfp-img-mobile .mfp-close {\n    top: 0;\n    right: 0;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    background: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    text-align: center;\n    padding: 0; } }\n\n@media all and (max-width: 900px) {\n  .mfp-arrow {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75); }\n  .mfp-arrow-left {\n    -webkit-transform-origin: 0;\n    transform-origin: 0; }\n  .mfp-arrow-right {\n    -webkit-transform-origin: 100%;\n    transform-origin: 100%; }\n  .mfp-container {\n    padding-left: 6px;\n    padding-right: 6px; } }\n\n.gallery-widget .thumbnails .img-thumbnail {\n  margin-bottom: 23px; }\n"

/***/ },

/***/ "./src/app/components/gallery/gallery.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Media - <span class=\"fw-semi-bold\">Gallery</span>\n  <small>Images, videos and more</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <section widget class=\"widget\">\n      <header>\n        <h4>\n          <i class=\"fa fa-star\"></i>\n          Grid of images, videos, text, and more\n        </h4>\n      </header>\n      <div class=\"widget gallery-widget body\">\n        <div id=\"grid\" class=\"row thumbnails\">\n          <div class=\"col-sm-6\">\n            <a href=\"assets/img/5.jpg\">\n              <img src=\"assets/img/5.jpg\" class=\"img-thumbnail\" alt=\"\">\n            </a>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-sm-8\">\n                <a href=\"assets/img/9.jpg\">\n                  <img src=\"assets/img/9.jpg\" class=\"img-thumbnail\" alt=\"\">\n                </a>\n              </div>\n              <div class=\"col-sm-4\">\n                <a href=\"assets/img/6.jpg\">\n                  <img src=\"assets/img/6.jpg\" class=\"img-thumbnail\" alt=\"\">\n                </a>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-8\">\n                <a href=\"assets/img/8.jpg\">\n                  <img src=\"assets/img/8.jpg\" class=\"img-thumbnail\" alt=\"\">\n                </a>\n              </div>\n              <div class=\"col-sm-4\">\n                <a href=\"assets/img/7.jpg\">\n                  <img src=\"assets/img/7.jpg\" class=\"img-thumbnail\">\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <ul class=\"row thumbnails\">\n      <li class=\"col-sm-4\">\n        <div class=\"card\">\n          <img src=\"assets/img/10.jpg\" class=\"card-img-top\" alt=\"\">\n\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Card label</h4>\n            <p class=\"card-text\"><strong>You will never know exactly how something will go until you try it.</strong> You can think three\n              hundred times and still have no precise result...\n            </p>\n            <p><a href=\"#\" class=\"btn btn-danger\">Favorite</a> <a href=\"#\" class=\"btn btn-inverse\">Read more...</a></p>\n          </div>\n        </div>\n      </li>\n      <li class=\"col-sm-4\">\n        <div class=\"card\">\n          <img src=\"assets/img/12.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Card label</h4>\n            <p class=\"card-text\">You don’t\n              need to think about HOW it can turn out. All you have to do is to GO and DO IT. It\n              should be super-fast and easy. You don’t\n              need to think about.\n            </p>\n            <p><a href=\"#\" class=\"btn btn-danger\">Favorite</a> <a href=\"#\" class=\"btn btn-inverse\">Read more...</a></p>\n          </div>\n        </div>\n      </li>\n      <li class=\"col-sm-4\">\n        <div class=\"card\">\n          <img src=\"assets/img/11.jpg\" class=\"card-img-top\" alt=\"\">\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">Card label</h4>\n            <p class=\"card-text\">No hesitation. You ask me: “What to do with\n              fearful thoughts preventing me from doing that?” The answer is to ignore them, because\n              they can’t\n            </p>\n            <p><a href=\"#\" class=\"btn btn-danger\">Favorite</a> <a href=\"#\" class=\"btn btn-inverse\">Read more...</a></p>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/components/maps/jvmap/jqvmap.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
__webpack_require__("./node_modules/jqvmap/dist/jquery.vmap.js");
__webpack_require__("./node_modules/jqvmap/dist/maps/jquery.vmap.world.js");
__webpack_require__("./node_modules/jqvmap/dist/maps/continents/jquery.vmap.australia.js");
__webpack_require__("./node_modules/jqvmap/dist/maps/jquery.vmap.europe.js");
__webpack_require__("./node_modules/jqvmap/dist/maps/jquery.vmap.usa.js");
var Jqvmap = (function () {
    function Jqvmap(el) {
        var _this = this;
        this.el = el;
        this.map = 'world_en';
        this.zoomed = false;
        this.regionClick = new core_1.EventEmitter();
        this.options = {
            enableZoom: true,
            hoverColor: 'orange',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: 'red',
            selectedRegion: null,
            showTooltip: true,
            onRegionClick: function (event, code, region) {
                _this.onRegionClick({ event: event, code: code, region: region });
            }
        };
    }
    Jqvmap.prototype.onRegionClick = function ($event) {
        this.regionClick.emit($event);
    };
    Jqvmap.prototype.initVectorMap = function (map, zoomed) {
        var options = this.options;
        options.map = map;
        jQuery(this.el.nativeElement).empty();
        jQuery(this.el.nativeElement).vectorMap(this.options);
        if (zoomed) {
            jQuery(this.el.nativeElement).vectorMap('zoomIn');
            jQuery(this.el.nativeElement).vectorMap('zoomIn');
            jQuery(this.el.nativeElement).vectorMap('zoomIn');
        }
    };
    Jqvmap.prototype.ngOnInit = function () {
        this.initVectorMap(this.map, this.zoomed);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Jqvmap.prototype, "map", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Jqvmap.prototype, "zoomed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Jqvmap.prototype, "regionClick", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Jqvmap.prototype, "options", void 0);
    Jqvmap = __decorate([
        core_1.Component({
            selector: 'jqvmap',
            template: __webpack_require__("./src/app/components/maps/jvmap/jqvmap.template.html"),
            styles: [__webpack_require__("./src/app/components/maps/jvmap/jqvmap.style.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], Jqvmap);
    return Jqvmap;
    var _a;
}());
exports.Jqvmap = Jqvmap;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/components/maps/jvmap/jqvmap.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var jqvmap_component_1 = __webpack_require__("./src/app/components/maps/jvmap/jqvmap.component.ts");
var JqvmapModule = (function () {
    function JqvmapModule() {
    }
    JqvmapModule = __decorate([
        core_1.NgModule({
            declarations: [
                jqvmap_component_1.Jqvmap
            ],
            exports: [
                jqvmap_component_1.Jqvmap
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], JqvmapModule);
    return JqvmapModule;
}());
exports.JqvmapModule = JqvmapModule;


/***/ },

/***/ "./src/app/components/maps/jvmap/jqvmap.style.scss":
/***/ function(module, exports) {

module.exports = ".jqvmap-label {\n  position: absolute;\n  display: none;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  background: #292929;\n  color: white;\n  font-family: sans-serif, Verdana;\n  font-size: smaller;\n  padding: 3px;\n  pointer-events: none; }\n\n.jqvmap-pin {\n  pointer-events: none; }\n\n.jqvmap-zoomin, .jqvmap-zoomout {\n  position: absolute;\n  left: 10px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  background: #000000;\n  padding: 3px;\n  color: white;\n  width: 10px;\n  height: 10px;\n  cursor: pointer;\n  line-height: 10px;\n  text-align: center; }\n\n.jqvmap-zoomin {\n  top: 10px; }\n\n.jqvmap-zoomout {\n  top: 30px; }\n\n.jqvmap-region {\n  cursor: pointer; }\n\n.jqvmap-ajax_response {\n  width: 100%;\n  height: 500px; }\n"

/***/ },

/***/ "./src/app/components/maps/jvmap/jqvmap.template.html":
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ "./src/app/components/maps/maps.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var core_2 = __webpack_require__("./node_modules/angular2-google-maps/core/index.js");
var Maps = (function () {
    function Maps(apiLoader, zone) {
        this.apiLoader = apiLoader;
        this.zone = zone;
        this.latFirst = -37.813179;
        this.lngFirst = 144.950259;
        this.latSecond = 53.901771;
        this.lngSecond = 27.501222;
        this.zoom = 12;
        this.vmRegion = '';
        this.vmCode = '';
        this.select2Continents = [
            {
                id: 'europe_en',
                text: 'Europe'
            },
            {
                id: 'usa_en',
                text: 'USA'
            },
            {
                id: 'australia_en',
                text: 'Australia'
            }
        ];
        this.vectorMapContinent = 'europe_en';
    }
    Maps.prototype.regionModalInfoOpen = function ($event, modal) {
        this.vmRegion = $event.region;
        this.vmCode = $event.code.toUpperCase();
        modal.show();
    };
    // workaround for ng2-bootstrap modal backdrop issue
    Maps.prototype.showBackdrop = function () {
        var el = document.createElement('div');
        el.className = 'modal-backdrop fade in';
        document.body.appendChild(el);
    };
    Maps.prototype.hideBackdrop = function () {
        document.body.removeChild(document.querySelector('.modal-backdrop'));
    };
    Maps.prototype.ngOnInit = function () {
        var _this = this;
        jQuery('.selectpicker').selectpicker().on('change', function (event) {
            _this.vectorMapContinent = event.target.value;
        });
        this.apiLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'), {});
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                _this.zone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry.location) {
                        _this.latSecond = place.geometry.location.lat();
                        _this.lngSecond = place.geometry.location.lng();
                    }
                });
            });
        });
    };
    Maps = __decorate([
        core_1.Component({
            selector: '[maps]',
            template: __webpack_require__("./src/app/components/maps/maps.template.html"),
            styles: [__webpack_require__("./src/app/components/maps/maps.style.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_2.MapsAPILoader !== 'undefined' && core_2.MapsAPILoader) === 'function' && _a) || Object, (typeof (_b = typeof core_1.NgZone !== 'undefined' && core_1.NgZone) === 'function' && _b) || Object])
    ], Maps);
    return Maps;
    var _a, _b;
}());
exports.Maps = Maps;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/components/maps/maps.style.scss":
/***/ function(module, exports) {

module.exports = "#basic,\n#location {\n  height: 100%; }\n  #basic sebm-google-map,\n  #location sebm-google-map {\n    height: 100%; }\n\n#vector-world,\n#vector-europe,\n#vector-usa,\n#vector-australia {\n  display: block;\n  height: 100%;\n  width: 100%; }\n\n.form-control {\n  width: inherit; }\n\n.widget .actions {\n  top: -3px; }\n"

/***/ },

/***/ "./src/app/components/maps/maps.template.html":
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-title\">Maps\n  <small>Built-in google & vector maps</small>\n</h2>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <section widget class=\"widget large\">\n      <header>\n        <h5>\n          <i class=\"fa fa-google-plus\"></i>\n          Google maps. Basic\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"map\">\n          <div id=\"basic\">\n            <sebm-google-map [latitude]=\"latFirst\" [longitude]=\"lngFirst\" [zoom]=\"zoom\" class=\"content-map\">\n              <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\">\n              </sebm-google-map-marker>\n            </sebm-google-map>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"col-md-6\">\n    <section widget class=\"widget large\">\n      <header>\n        <h5>\n          <i class=\"fa fa-map-marker\"></i>\n          Address and location\n        </h5>\n\n        <div class=\"actions\">\n          <input id=\"address\" type=\"text\" class=\"form-control input-transparent mt-n-xs\" placeholder=\"Enter Address\">\n        </div>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"map\">\n          <div id=\"location\">\n            <sebm-google-map [latitude]=\"latSecond\" [longitude]=\"lngSecond\" [zoom]=\"zoom\" class=\"content-map\">\n              <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\">\n              </sebm-google-map-marker>\n            </sebm-google-map>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <section widget class=\"widget large\">\n      <header>\n        <h5>\n          <i class=\"fa fa-arrow-right\"></i>\n          Region vector map\n        </h5>\n\n        <div class=\"actions\">\n          <select id=\"maps\" name=\"maps\"\n                  data-style=\"btn-success\"\n                  data-width=\"auto\"\n                  class=\"selectpicker\">\n            <option value=\"europe_en\">Europe</option>\n            <option value=\"usa_en\">USA</option>\n            <option value=\"australia_en\">Australia</option>\n          </select>\n        </div>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"map\">\n          <jqvmap *ngIf=\"vectorMapContinent === 'europe_en'\" id=\"vector-europe\" [map]=\"'europe_en'\" [zoomed]=\"'true'\" (regionClick)=\"regionModalInfoOpen($event, modal)\"></jqvmap>\n          <jqvmap *ngIf=\"vectorMapContinent === 'usa_en'\" id=\"vector-usa\" [map]=\"'usa_en'\" (regionClick)=\"regionModalInfoOpen($event, modal)\"></jqvmap>\n          <jqvmap *ngIf=\"vectorMapContinent === 'australia_en'\" id=\"vector-australia\" [map]=\"'australia_en'\" (regionClick)=\"regionModalInfoOpen($event, modal)\"></jqvmap>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"col-md-6\">\n    <section widget class=\"widget large\">\n      <header>\n        <h5>\n          <i class=\"fa fa-dashboard\"></i>\n          World vector map\n        </h5>\n      </header>\n      <div class=\"widget-body\">\n        <div class=\"map\">\n          <jqvmap id=\"vector-world\" (regionClick)=\"regionModalInfoOpen($event, modal)\"></jqvmap>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<div bsModal #modal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" [config]=\"{backdrop: false}\" (onShow)=\"showBackdrop()\" (onHide)=\"hideBackdrop()\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div *ngIf=\"vmRegion && vmCode\" class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>You clicked <strong><strong>{{ vmRegion }}</strong></strong> which has code '{{ vmCode }}'</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" (click)=\"modal.hide()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }

});
//# sourceMappingURL=5.map