import { View } from "ui/core/view";
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import { File, knownFolders, path } from "file-system";

export class ArchitectView extends View {
    public static urlStringProperty = new dependencyObservable.Property("urlString", "ArchitectView", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    public get urlString() {
        return this._getValue(ArchitectView.urlStringProperty);
    }

    public set urlString(value: string) {
        this._setValue(ArchitectView.urlStringProperty, value);
    }

    public _onUrlStringPropertyChanged(data: dependencyObservable.PropertyChangeData) {
    }

    protected onUrlLoaded() {
        var eventData = {
            eventName: "urlLoaded",
            object: this
        };
        this.notify(eventData);
    }

    protected onUrlLoadFailed() {
        var eventData = {
            eventName: "urlLoadFailed",
            object: this
        };
        this.notify(eventData);
    }

    protected onUrlInvoked(url: string) {
        var eventData = {
            eventName: "urlInvoked",
            object: this,
            url: url
        };
        this.notify(eventData);
    }

    protected readLicenseKey() {
        let wikitudeLicenseFile = knownFolders.currentApp().getFile('wikitude.lic');
        let licenseKey = wikitudeLicenseFile.readTextSync();
        return licenseKey;
    }
}

(<proxy.PropertyMetadata>ArchitectView.urlStringProperty.metadata).onSetNativeValue = (data: dependencyObservable.PropertyChangeData) => {
    let architectView = <ArchitectView>data.object;
    architectView._onUrlStringPropertyChanged(data);
};