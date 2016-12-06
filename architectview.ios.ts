import { View } from "ui/core/view";
import { ContentView } from 'ui/content-view';
import common = require("./architectview-common");
import { topmost } from 'ui/frame';
import dependencyObservable = require("ui/core/dependency-observable");

global.moduleMerge(common, exports);

declare var CMMotionManager, WTArchitectView, CGRectZero, UIScreen, CGRectMake, UIInterfaceOrientation, NSURL, WTFeature_2DTracking;

export class ArchitectView extends common.ArchitectView {
    _motionManager;

    _ios: any;
    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }

    constructor() {
        super();
        this._motionManager = new CMMotionManager();
        var architectView = new WTArchitectView(CGRectZero, this._motionManager);
        architectView.delegate = this;
        architectView.setLicenseKey(this.readLicenseKey());
        architectView.setShouldRotateToInterfaceOrientation(true, UIInterfaceOrientation.unknown);
        architectView.startCompletion(config => {
        }, (isRunning, error) => {

        });
        this._ios = architectView;
    }

    public init() {

    }

    architectViewDidFinishLoadArchitectWorldNavigation(architectView: any, navigation: any) {
        this.onUrlLoaded();
    }

    architectViewDidFailToLoadArchitectWorldNavigationWithError(architectView: any, navigation: any, error: any) {
        this.onUrlLoadFailed();
    }

    architectViewInvokedURL(architectView: any, url: any){
        this.onUrlInvoked(url.absoluteString);
    }

    public _onUrlStringPropertyChanged(data: dependencyObservable.PropertyChangeData) {
        var url = NSURL.URLWithString(data.newValue)
        this._ios.loadArchitectWorldFromURLWithRequiredFeatures(url, WTFeature_2DTracking);
    }
}