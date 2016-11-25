"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system_1 = require("file-system");
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
        this._android = new com.wikitude.architect.ArchitectView(this._context);
        var wikitudeLicenseFile = file_system_1.knownFolders.currentApp().getFile('wikitude.lic');
        var licenseKey = wikitudeLicenseFile.readTextSync();
        var config = new com.wikitude.architect.StartupConfiguration(licenseKey);
        this._android.onCreate(config);
        this._android.onPostCreate();
        this._android.onResume();
        this._android.registerUrlListener(new com.wikitude.architect.ArchitectView.ArchitectUrlListener({
            urlWasInvoked: function (url) {
                console.log("URL Invoked: " + url);
            }
        }));
    };
    ArchitectView.prototype._onUrlStringPropertyChanged = function (data) {
        console.log("url set " + data.newValue);
        this._android.load(data.newValue);
    };
    return ArchitectView;
}(common.ArchitectView));
exports.ArchitectView = ArchitectView;
//# sourceMappingURL=architectview.android.js.map