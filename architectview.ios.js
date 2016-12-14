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
        var _this = this;
        _super.call(this);
        this._motionManager = new CMMotionManager();
        var architectView = new WTArchitectView(CGRectZero, this._motionManager);
        this._delegate = NSObject.extend({
            architectViewDidFinishLoadArchitectWorldNavigation: function (architectView, navigation) {
                if (_this._hasError)
                    return;
                _this.onUrlLoad(navigation.originalURL ? navigation.originalURL.absoluteString : '');
            },
            architectViewDidFailToLoadArchitectWorldNavigationWithError: function (architectView, navigation, error) {
                _this._hasError = true;
                _this.onUrlLoadError({
                    description: error.localizedDescription,
                    failingUrl: navigation.originalURL ? navigation.originalURL.absoluteString : ''
                });
            },
            architectViewInvokedURL: function (architectView, url) {
                _this.onUrlInvoked(url.absoluteString);
            }
        }, {
            protocols: [WTArchitectViewDelegate]
        }).alloc().init();
        architectView.delegate = this._delegate;
        architectView.setLicenseKey(this.readLicenseKey('ios'));
        architectView.setShouldRotateToInterfaceOrientation(true, UIInterfaceOrientation.unknown);
        architectView.startCompletion(function (config) {
        }, function (isRunning, error) {
        });
        this._ios = architectView;
    }
    Object.defineProperty(ArchitectView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchitectView.prototype, "_nativeView", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    ArchitectView.prototype._onUrlStringPropertyChanged = function (data) {
        this._hasError = false;
        var url = NSURL.URLWithString(data.newValue);
        this._ios.loadArchitectWorldFromURLWithRequiredFeatures(url, WTFeature_2DTracking);
    };
    ArchitectView.prototype.callJavaScript = function (javaScript) {
        this._ios.callJavaScript(javaScript);
    };
    return ArchitectView;
}(common.ArchitectView));
exports.ArchitectView = ArchitectView;
//# sourceMappingURL=architectview.ios.js.map