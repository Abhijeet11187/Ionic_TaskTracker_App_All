var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Backlight = /** @class */ (function (_super) {
    __extends(Backlight, _super);
    function Backlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Backlight.prototype.on = function () { return cordova(this, "on", {}, arguments); };
    Backlight.prototype.off = function () { return cordova(this, "off", {}, arguments); };
    Backlight.pluginName = "Backlight";
    Backlight.plugin = "cordova-plugin-backlight";
    Backlight.pluginRef = "cordova.plugins.Backlight";
    Backlight.repo = "https://github.com/mebibou/cordova-plugin-backlight";
    Backlight.platforms = ["Android"];
    Backlight = __decorate([
        Injectable()
    ], Backlight);
    return Backlight;
}(IonicNativePlugin));
export { Backlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tsaWdodC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQ3pDLDZCQUFpQjs7OztJQU85QyxzQkFBRTtJQVNGLHVCQUFHOzs7Ozs7SUFoQlEsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQWxDdEI7RUFrQytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgQmFja2xpZ2h0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFkZHMgdHVybmluZyBvbi9vZmYgdGhlIGRldmljZSBiYWNrbGlnaHQuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYWNrbGlnaHQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhY2tsaWdodC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2xpZ2h0OiBCYWNrbGlnaHQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIFR1cm4gYmFja2xpZ2h0IG9uXG4gKiB0aGlzLmJhY2tsaWdodC5vbigpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ2JhY2tsaWdodCBvbicpKTtcbiAqXG4gKiAvLyBUdXJuIGJhY2tsaWdodCBvZmZcbiAqIHRoaXMuYmFja2xpZ2h0Lm9mZigpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ2JhY2tsaWdodCBvZmYnKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFja2xpZ2h0JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmFja2xpZ2h0JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJhY2tsaWdodCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWViaWJvdS9jb3Jkb3ZhLXBsdWdpbi1iYWNrbGlnaHQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tsaWdodCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB0dXJucyBiYWNrbGlnaHQgb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGJhY2tsaWdodCBpcyBvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHR1cm5zIGJhY2tsaWdodCBvZmZcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGJhY2tsaWdodCBpcyBvZmZcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb2ZmKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==