import { View } from "ui/core/view";
import { ContentView } from 'ui/content-view';
import common = require("./architectview-common");
import { topmost } from 'ui/frame';
import dependencyObservable = require("ui/core/dependency-observable");
import application = require("application");

global.moduleMerge(common, exports);

declare var CMMotionManager,
    WTArchitectView, CGRectZero,
    UIScreen, CGRectMake,
    UIInterfaceOrientation,
    NSURL, WTFeature_2DTracking,
    NSObject,
    WTArchitectViewDelegate;

declare interface WTArchitectViewDelegate { }

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
        console.log('architect view created');

        this._motionManager = new CMMotionManager();
        var architectView = new WTArchitectView(CGRectZero, this._motionManager);

        this._delegate = NSObject.extend(
            {
                architectViewDidFinishLoadArchitectWorldNavigation: (architectView: any, navigation: any) => {
                    if (this._hasError) return;
                    this.onUrlLoad(navigation.originalURL ? navigation.originalURL.absoluteString : '');
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
        architectView.setLicenseKey(this.readLicenseKey('ios'));
        architectView.setShouldRotateToInterfaceOrientation(true, UIInterfaceOrientation.unknown);
        this._ios = architectView;

        application.on(application.suspendEvent, () => {
            this.onSuspend();
        });

        application.on(application.resumeEvent, () => {
            this.onResume();
        });
    }

    private onSuspend() {
        this.stopArchitectView();
    }

    private onResume() {
        this.startArchitectView();
    }

    private loadUrl(urlString: string) {
        this._hasError = false;
        var url = NSURL.URLWithString(urlString);
        this._ios.loadArchitectWorldFromURLWithRequiredFeatures(url, WTFeature_2DTracking);
    }

    public _onUrlStringPropertyChanged(data: dependencyObservable.PropertyChangeData) {
        this.loadUrl(data.newValue);
    }

    public callJavaScript(javaScript: string) {
        this._ios.callJavaScript(javaScript);
    }

    public reloadUrl() {
        this.loadUrl(this.urlString);
    }

    public onLoaded() {
        super.onLoaded();
        this.startArchitectView();
    }

    public onUnloaded() {
        super.onUnloaded();
        this.stopArchitectView();
    }

    private startArchitectView() {
        if (this._ios.isRunning) return;

        this._ios.startCompletion(config => {
        }, (isRunning, error) => {

        });
    }
    private stopArchitectView() {
        if (!this._ios.isRunning) return;

        this._ios.stop();
    }
}