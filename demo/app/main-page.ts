import * as app from 'application';
import { Color } from 'color';
import * as platform from 'platform';
import { Demo } from "./main-view-model";
import { View } from "ui/core/view";
import { ArchitectView } from 'nativescript-wikitudearchitectview'

function pageLoaded(args) {
  var page = <View>args.object;
  page.bindingContext = new Demo();
  var architectView = page.getViewById<any>("architectView");
  console.log('loaded');
}
exports.pageLoaded = pageLoaded;

export function tap(eventData){
  console.log('tapped')
};

export function urlLoaded(eventData){
  console.log(eventData.url);
  console.log('url loaded');
};

export function urlLoadError(eventData) {
  console.dump(eventData.error);
  console.log('url failed')
};

export function urlInvoked(eventData){
  console.log('url invoked')
};