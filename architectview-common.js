"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_1 = require("ui/core/view");
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
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
    ArchitectView.urlStringProperty = new dependencyObservable.Property("urlString", "ArchitectView", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    return ArchitectView;
}(view_1.View));
exports.ArchitectView = ArchitectView;
ArchitectView.urlStringProperty.metadata.onSetNativeValue = function (data) {
    var architectView = data.object;
    architectView._onUrlStringPropertyChanged(data);
};
//# sourceMappingURL=architectview-common.js.map