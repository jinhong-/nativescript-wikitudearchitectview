"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./architectview-common");
global.moduleMerge(common, exports);
var ArchitectView = (function (_super) {
    __extends(ArchitectView, _super);
    function ArchitectView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(ArchitectView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchitectView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    ArchitectView.prototype._createUI = function () {
        var _this = this;
        console.log('_createUI');
        this._android = new com.wikitude.architect.ArchitectView(this._context);
        var config = new com.wikitude.architect.StartupConfiguration(this.readLicenseKey('android'));
        this._android.onCreate(config);
        this._android.onPostCreate();
        this._android.onResume();
        this._android.registerUrlListener(new com.wikitude.architect.ArchitectView.ArchitectUrlListener({
            urlWasInvoked: function (url) {
                _this.onUrlInvoked(url);
                return true;
            }
        }));
        this._android.registerWorldLoadedListener(new com.wikitude.architect.ArchitectView.ArchitectWorldLoadedListener({
            worldLoadFailed: function (errorCode, description, failingUrl) {
                _this.onUrlLoadError({
                    description: description,
                    failingUrl: failingUrl
                });
            },
            worldWasLoaded: function (url) {
                _this.onUrlLoad(url);
            }
        }));
    };
    ArchitectView.prototype._onUrlStringPropertyChanged = function (data) {
        this._android.load(data.newValue);
    };
    ArchitectView.prototype.reloadUrl = function () {
        this._android.load(this.urlString);
    };
    ArchitectView.prototype.callJavaScript = function (javaScript) {
        this._android.callJavascript(javaScript);
    };
    ArchitectView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._android.onResume();
    };
    ArchitectView.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        this._android.onPause();
    };
    ArchitectView.prototype._onDetached = function () {
        this._android.onDestroy();
    };
    return ArchitectView;
}(common.ArchitectView));
exports.ArchitectView = ArchitectView;
//# sourceMappingURL=architectview.android.js.map