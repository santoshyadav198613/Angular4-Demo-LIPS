import {InjectionToken} from '@angular/core';
import { IValueProvider } from "./IValueProvider";

export let APP_CONFIG = new InjectionToken<IValueProvider>('appconfig');
export let APP_VALUES : IValueProvider={
    apiEndPoint:"http://localhost:3000/api/",
    applicationTitle:"Shopping App"

}