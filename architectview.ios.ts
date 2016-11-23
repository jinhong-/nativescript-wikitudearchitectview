import { View } from "ui/core/view";
import {ContentView} from 'ui/content-view';
import common = require("./architectview-common");
global.moduleMerge(common, exports);

declare var CMMotionManager: any;
declare var WTArchitectView: any;
declare var CGRectZero;

export class ArchitectView extends common.ArchitectView {
    _motionManager;
    
    _ios: any;
    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }

    public _createUI() {
        this._motionManager = new CMMotionManager();
        this._ios = new WTArchitectView(CGRectZero, this._motionManager);
        this._ios.setLicenseKey(this.readLicenseKey());
        // var config = new com.wikitude.architect.StartupConfiguration('z+TFVQCpdO2EW/NPs7LEh7PxWwru2VDPJG33uNLkTNLvkPaR8XrYRYmDXDaLZF7nz6wvP8MVPXe1cwFTkgg/kQsryDz2JwW2NmsZoxRNddqw33kT3zXBczWRFJJx9uUsYHGpNBhL1digu1iW/6jthx9eCIp4cd5KvmVTRVcmgYdTYWx0ZWRfX6SJx8+S/tkumtmkJX0IOsVx1PRDD/Uw4x9ktFFqs/mrIVujvkrZ0d9iGogDU1/1qSAbm7dVDBUbniyNA5Y0/4bFFvcO+lAyWCKGXOpesWiCPGpuM9D9xk8iUWjiN49cOdGlQLxKX4YdHEkyeHmrZkngU2Hv6OyHDpHszBg5lAU/+z0UgM3JD0VOZJJxPtToaz4ZtMgRBQEdZQEOyfCmEsVenPVnJ7CKZNRKykVQTxGvWQqyUDCF72geyPzFK7vdXT4Qo+/7O344oSlpIwG/amWGwqZWVD7yGOMeemazOoFmWOLfOKibvpfvPfiDF9wrWWRdZhLk5Y8gL91s+Zj/7Nk3BdYMZnza6VxT6ofuzlpsa86hIt8Z2w6OL71nF/pqaLs46OcjtOwCvMQYIS5ygH34zSiyJxBPGuZZ2RTMcfyhvvOFGcoKj8o2VdX9vTwZcJdOA2YYQWQb0EBHeDOI1oS5t6PDi+2U3RH8ayDDiIvvUpXRvB9hsJ4=');
        // this._ios.onCreate(config);
        // this._ios.onPostCreate();
        // this._ios.load('http://10.20.30.162:3000/');
    }

    // public _onAttached(context) {
    //     super._onAttached(context);
    // }

    // public _onDetached(force?: boolean) {
    //     super._onDetached(force);
    // }
}