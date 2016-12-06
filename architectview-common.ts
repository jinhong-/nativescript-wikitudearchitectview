import { View } from "ui/core/view";
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import { File, knownFolders, path } from "file-system";
import { EventData } from "data/observable";

export interface UrlLoadError {
    description: string;
    failingUrl: string;
}

export class ArchitectView extends View {

    public static urlLoadedEvent = "urlLoaded";
    public static urlLoadErrorEvent = "urlLoadError";
    public static urlInvokedEvent = "urlInvoked";

    public static urlStringProperty = new dependencyObservable.Property("urlString", "ArchitectView", new proxy.PropertyMetadata(0, dependencyObservable.PropertyMetadataSettings.AffectsLayout));
    public get urlString() {
        return this._getValue(ArchitectView.urlStringProperty);
    }

    public set urlString(value: string) {
        this._setValue(ArchitectView.urlStringProperty, value);
    }

    public _onUrlStringPropertyChanged(data: dependencyObservable.PropertyChangeData) {
    }

    protected onUrlLoadEvent(url: string) {
        var eventData = {
            eventName: ArchitectView.urlLoadedEvent,
            object: this,
            url: url
        };
        this.notify(eventData);
    }

    protected onUrlLoadError(error: UrlLoadError) {
        var eventData = {
            eventName: ArchitectView.urlLoadErrorEvent,
            object: this,
            error: error
        };
        this.notify(eventData);
    }

    protected onUrlInvoked(url: string) {
        var eventData = {
            eventName: ArchitectView.urlInvokedEvent,
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