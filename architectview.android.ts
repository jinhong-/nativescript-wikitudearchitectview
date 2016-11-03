import { View } from "ui/core/view";
//import {ContentView} from 'ui/content-view';
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import { File, knownFolders, path } from "file-system";
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
        let wikitudeLicenseFile = knownFolders.currentApp().getFile('wikitude.lic');
        let licenseKey = wikitudeLicenseFile.readTextSync();
        let config = new com.wikitude.architect.StartupConfiguration(licenseKey);
        this._android.onCreate(config);
        this._android.onPostCreate();
        this._android.onResume();
        this._android.registerUrlListener(new com.wikitude.architect.ArchitectView.ArchitectUrlListener({
            urlWasInvoked: (url: string) => {
                //TODO: Need to fire an event that can be hooked from the other side
                console.log(`URL Invoked: ${url}`);
            }
        }))
    }

    public _onUrlStringPropertyChanged(data: dependencyObservable.PropertyChangeData) {
        console.log(`url set ${data.newValue}`);     
        this._android.load(data.newValue);
    }
}