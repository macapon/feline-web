import { OpaqueToken } from '@angular/core';
import { LazyMapsAPILoaderConfig } from 'angular2-google-maps/core';

export const CONFIG_TOKEN = new OpaqueToken('config');

export interface Configuration {
  api: string;
}

export let config: Configuration = {
  api: 'http://ayoza.com:8081/feline-rest',
};

export let configGoogleMapsApi = new LazyMapsAPILoaderConfig();
configGoogleMapsApi.apiKey = 'AIzaSyAxpkLY1rVXnPu8RtAypCU0ZE7tSdOMKXY';

