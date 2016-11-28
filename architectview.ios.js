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
        _super.call(this);
        this._motionManager = new CMMotionManager();
        var architectView = new WTArchitectView(CGRectZero, this._motionManager);
        architectView.delegate = this;
        architectView.setLicenseKey(this.readLicenseKey());
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
    ArchitectView.prototype.init = function () {
    };
    ArchitectView.prototype._onUrlStringPropertyChanged = function (data) {
        var url = NSURL.URLWithString(data.newValue);
        this._ios.loadArchitectWorldFromURLWithRequiredFeatures(url, WTFeature_2DTracking);
    };
    return ArchitectView;
}(common.ArchitectView));
exports.ArchitectView = ArchitectView;
//# sourceMappingURL=architectview.ios.js.map