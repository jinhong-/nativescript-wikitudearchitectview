﻿import * as app from 'application';
import {Color} from 'color';
import * as platform from 'platform';
import {Demo} from "./main-view-model";
import { View } from "ui/core/view";
import { ArchitectView } from 'nativescript-wikitudearchitectview'

function pageLoaded(args) {
  var page = <View>args.object;
  page.bindingContext = new Demo();
  var architectView = page.getViewById<any>("architectView");
  architectView.licenseKey = 'z+TFVQCpdO2EW/NPs7LEh7PxWwru2VDPJG33uNLkTNLvkPaR8XrYRYmDXDaLZF7nz6wvP8MVPXe1cwFTkgg/kQsryDz2JwW2NmsZoxRNddqw33kT3zXBczWRFJJx9uUsYHGpNBhL1digu1iW/6jthx9eCIp4cd5KvmVTRVcmgYdTYWx0ZWRfX6SJx8+S/tkumtmkJX0IOsVx1PRDD/Uw4x9ktFFqs/mrIVujvkrZ0d9iGogDU1/1qSAbm7dVDBUbniyNA5Y0/4bFFvcO+lAyWCKGXOpesWiCPGpuM9D9xk8iUWjiN49cOdGlQLxKX4YdHEkyeHmrZkngU2Hv6OyHDpHszBg5lAU/+z0UgM3JD0VOZJJxPtToaz4ZtMgRBQEdZQEOyfCmEsVenPVnJ7CKZNRKykVQTxGvWQqyUDCF72geyPzFK7vdXT4Qo+/7O344oSlpIwG/amWGwqZWVD7yGOMeemazOoFmWOLfOKibvpfvPfiDF9wrWWRdZhLk5Y8gL91s+Zj/7Nk3BdYMZnza6VxT6ofuzlpsa86hIt8Z2w6OL71nF/pqaLs46OcjtOwCvMQYIS5ygH34zSiyJxBPGuZZ2RTMcfyhvvOFGcoKj8o2VdX9vTwZcJdOA2YYQWQb0EBHeDOI1oS5t6PDi+2U3RH8ayDDiIvvUpXRvB9hsJ4=';
  architectView.load('http://10.20.30.62:8888');
  console.log('loaded');
}
exports.pageLoaded = pageLoaded;