import { View } from "ui/core/view";
import { ContentView } from 'ui/content-view';
import common = require("./architectview-common");
import cameraModule = require("camera");
import { topmost } from 'ui/frame';

global.moduleMerge(common, exports);

declare var CMMotionManager, WTArchitectView, CGRectZero, UIScreen, CGRectMake;

export class ArchitectView extends common.ArchitectView {
    _motionManager;
    //_architectView;

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
        //var rect = CGRectMake((UIScreen.mainScreen.bounds.size.width - 50) / 2, (UIScreen.mainScreen.bounds.size.height - 50) / 2, 50, 50);;
        var architectView = new WTArchitectView(CGRectZero, this._motionManager);
        architectView.delegate = this;
        architectView.setLicenseKey(this.readLicenseKey());
        //topmost().ios.controller.view.addSubview(architectView);
        
        //TODO: Request camera permissions before starting
        architectView.startCompletion(config => {
        }, (isRunning, error) => {

        });
        this._ios = architectView;
    }

    public init() {

    }
}