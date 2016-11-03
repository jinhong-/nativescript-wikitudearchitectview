import { View } from "ui/core/view";
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");

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
}

(<proxy.PropertyMetadata>ArchitectView.urlStringProperty.metadata).onSetNativeValue = (data: dependencyObservable.PropertyChangeData) => {
    let architectView = <ArchitectView>data.object;
    architectView._onUrlStringPropertyChanged(data);
};