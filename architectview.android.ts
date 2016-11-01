import { View } from "ui/core/view";
import {ContentView} from 'ui/content-view';
var application = require("application");
declare var com: any;

export class ArchitectView extends View {
    _android: any;
    get android(): any {
        return this._android;
    }

    get _nativeView(): any {
        return this._android;
    }

    public load(urlString: string) {
        this._android.load(urlString);
    }
    private _licenseKey: string;

    public get licenseKey() {
        return this._licenseKey;
    }

    public set licenseKey(value: string) {
        if(this.licenseKey) return;
        var config = new com.wikitude.architect.StartupConfiguration(value);
        this._android.onCreate(config);
        this._android.onPostCreate();
        this._android.onResume();
    }

    public _createUI() {
        this._android = new com.wikitude.architect.ArchitectView(this._context);
    }
}