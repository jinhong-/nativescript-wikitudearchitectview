import * as app from 'application';
import {Color} from 'color';
import * as platform from 'platform';
import {Demo} from "./main-view-model";
import { View } from "ui/core/view";
import { ArchitectView } from 'nativescript-wikitudearchitectview'

function pageLoaded(args) {
  var page = <View>args.object;
  page.bindingContext = new Demo();
  var architectView = page.getViewById<any>("architectView");
  //architectView.urlString ='http://10.20.30.194:8888';
  console.log('loaded');
}
exports.pageLoaded = pageLoaded;