import { View } from "ui/core/view";
//import {ContentView} from 'ui/content-view';
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import common = require("./architectview-common");
global.moduleMerge(common, exports);

declare var com: any;
export class ArchitectView extends common.ArchitectView {
    _android: any;
    get android(): any {
        return this._android;
    }

    get _nativeView(): any {
        return this._android;
    }

    public _createUI() {
        this._android = new com.wikitude.architect.ArchitectView(this._context);

        let config = new com.wikitude.architect.StartupConfiguration(this.readLicenseKey('android'));
        this._android.onCreate(config);
        this._android.onPostCreate();
        this._android.onResume();
        this._android.registerUrlListener(new com.wikitude.architect.ArchitectView.ArchitectUrlListener({
            urlWasInvoked: (url: string) => {
                this.onUrlInvoked(url);
                return true;
            }
        }))
        this._android.registerWorldLoadedListener(new com.wikitude.architect.ArchitectView.ArchitectWorldLoadedListener({
            worldLoadFailed: (errorCode, description, failingUrl) => {
                this.onUrlLoadError({
                    description: description,
                    failingUrl: failingUrl
                });
            },
            worldWasLoaded: (url) => {
                this.onUrlLoad(url);
            }
        }));
    }

    public _onUrlStringPropertyChanged(data: dependencyObservable.PropertyChangeData) {
        this._android.load(data.newValue);
    }

    public reloadUrl() {
        this._android.load(this.urlString);
    }

    public callJavaScript(javaScript: string) {
        this._android.callJavascript(javaScript);
    }

    public onLoaded() {
        super.onLoaded();
        if(!this._android) return;
        this._android.onResume();
    }

    public onUnloaded() {
        super.onUnloaded();
        if(!this._android) return;
        this._android.onPause();
    }
}