"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_1 = require("ui/core/view");
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
        var config = new com.wikitude.architect.StartupConfiguration('z+TFVQCpdO2EW/NPs7LEh7PxWwru2VDPJG33uNLkTNLvkPaR8XrYRYmDXDaLZF7nz6wvP8MVPXe1cwFTkgg/kQsryDz2JwW2NmsZoxRNddqw33kT3zXBczWRFJJx9uUsYHGpNBhL1digu1iW/6jthx9eCIp4cd5KvmVTRVcmgYdTYWx0ZWRfX6SJx8+S/tkumtmkJX0IOsVx1PRDD/Uw4x9ktFFqs/mrIVujvkrZ0d9iGogDU1/1qSAbm7dVDBUbniyNA5Y0/4bFFvcO+lAyWCKGXOpesWiCPGpuM9D9xk8iUWjiN49cOdGlQLxKX4YdHEkyeHmrZkngU2Hv6OyHDpHszBg5lAU/+z0UgM3JD0VOZJJxPtToaz4ZtMgRBQEdZQEOyfCmEsVenPVnJ7CKZNRKykVQTxGvWQqyUDCF72geyPzFK7vdXT4Qo+/7O344oSlpIwG/amWGwqZWVD7yGOMeemazOoFmWOLfOKibvpfvPfiDF9wrWWRdZhLk5Y8gL91s+Zj/7Nk3BdYMZnza6VxT6ofuzlpsa86hIt8Z2w6OL71nF/pqaLs46OcjtOwCvMQYIS5ygH34zSiyJxBPGuZZ2RTMcfyhvvOFGcoKj8o2VdX9vTwZcJdOA2YYQWQb0EBHeDOI1oS5t6PDi+2U3RH8ayDDiIvvUpXRvB9hsJ4=');
        this._android.onCreate(config);
        this._android.onPostCreate();
        this._android.load('http://10.20.30.162:3000/');
    };
    return ArchitectView;
}(view_1.View));
exports.ArchitectView = ArchitectView;
//# sourceMappingURL=architectview.ios.js.map