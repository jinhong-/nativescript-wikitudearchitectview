"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_1 = require("ui/core/view");
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var file_system_1 = require("file-system");
var ArchitectView = (function (_super) {
    __extends(ArchitectView, _super);
    function ArchitectView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(ArchitectView.prototype, "urlString", {
        get: function () {
            return this._getValue(ArchitectView.urlStringProperty);
        },
        set: function (value) {
            this._setValue(ArchitectView.urlStringProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    ArchitectView.prototype._onUrlStringPropertyChanged = function (data) {
    };
    ArchitectView.prototype.onUrlLoad = function (url) {
        var eventData = {
            eventName: ArchitectView.urlLoadedEvent,
            object: this,
            url: url
        };
        this.notify(eventData);
    };
    ArchitectView.prototype.onUrlLoadError = function (error) {
        var eventData = {
            eventName: ArchitectView.urlLoadErrorEvent,
            object: this,
            error: error
        };
        this.notify(eventData);
    };
    ArchitectView.prototype.onUrlInvoked = function (url) {
        var eventData = {
            eventName: ArchitectView.urlInvokedEvent,
            object: this,
            url: url
        };
        this.notify(eventData);
    };
    ArchitectView.prototype.readLicenseKey = function (suffix) {
        var appPath = file_system_1.knownFolders.currentApp().path;
        var licenseFilePath = ['wikitude.lic', ("wikitude." + suffix + ".lic")]
            .map(function (x) { return file_system_1.path.join(appPath, x); })
            .filter(function (x) { return file_system_1.File.exists(x); })
            .shift();
        if (!licenseFilePath)
            return null;
        var wikitudeLicenseFile = file_system_1.File.fromPath(licenseFilePath);
        var licenseKey = wikitudeLicenseFile.readTextSync();
        return licenseKey;
    };
    ArchitectView.urlLoadedEvent = "urlLoaded";
    ArchitectView.urlLoadErrorEvent = "urlLoadError";
    ArchitectView.urlInvokedEvent = "urlInvoked";
    ArchitectView.urlStringProperty = new dependencyObservable.Property("urlString", "ArchitectView", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    return ArchitectView;
}(view_1.View));
exports.ArchitectView = ArchitectView;
ArchitectView.urlStringProperty.metadata.onSetNativeValue = function (data) {
    var architectView = data.object;
    architectView._onUrlStringPropertyChanged(data);
};
//# sourceMappingURL=architectview-common.js.map