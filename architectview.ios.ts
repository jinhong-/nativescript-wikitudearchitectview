import { View } from "ui/core/view";
import { ContentView } from 'ui/content-view';
import common = require("./architectview-common");
import { topmost } from 'ui/frame';
import dependencyObservable = require("ui/core/dependency-observable");

global.moduleMerge(common, exports);

declare var CMMotionManager,
    WTArchitectView, CGRectZero,
    UIScreen, CGRectMake,
    UIInterfaceOrientation,
    NSURL, WTFeature_2DTracking,
    NSObject,
    WTArchitectViewDelegate;

declare interface WTArchitectViewDelegate {

}

export class ArchitectView extends common.ArchitectView {
    _motionManager;
    _delegate;
    _ios: any;
    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }

    _hasError: boolean;
    constructor() {
        super();
        this._motionManager = new CMMotionManager();
        var architectView = new WTArchitectView(CGRectZero, this._motionManager);

        this._delegate = NSObject.extend(
            {
                architectViewDidFinishLoadArchitectWorldNavigation: (architectView: any, navigation: any) => {
                    if (this._hasError) return;
                    this.onUrlLoadEvent(navigation.originalURL ? navigation.originalURL.absoluteString : '');
                },
                architectViewDidFailToLoadArchitectWorldNavigationWithError: (architectView: any, navigation: any, error: any) => {
                    this._hasError = true;
                    this.onUrlLoadError({
                        description: error.localizedDescription,
                        failingUrl: navigation.originalURL ? navigation.originalURL.absoluteString : ''
                    });
                },
                architectViewInvokedURL: (architectView: any, url: any) => {
                    this.onUrlInvoked(url.absoluteString);
                }
            },
            {
                protocols: [WTArchitectViewDelegate]
            }).alloc().init();

        architectView.delegate = this._delegate;

        architectView.setLicenseKey(this.readLicenseKey());
        architectView.setShouldRotateToInterfaceOrientation(true, UIInterfaceOrientation.unknown);
        architectView.startCompletion(config => {
        }, (isRunning, error) => {

        });
        this._ios = architectView;
    }

    public _onUrlStringPropertyChanged(data: dependencyObservable.PropertyChangeData) {
        this._hasError = false;
        var url = NSURL.URLWithString(data.newValue);
        this._ios.loadArchitectWorldFromURLWithRequiredFeatures(url, WTFeature_2DTracking);
    }
}