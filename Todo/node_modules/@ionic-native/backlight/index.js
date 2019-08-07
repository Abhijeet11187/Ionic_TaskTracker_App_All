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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BacklightOriginal = /** @class */ (function (_super) {
    __extends(BacklightOriginal, _super);
    function BacklightOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BacklightOriginal.prototype.on = function () { return cordova(this, "on", {}, arguments); };
    BacklightOriginal.prototype.off = function () { return cordova(this, "off", {}, arguments); };
    BacklightOriginal.pluginName = "Backlight";
    BacklightOriginal.plugin = "cordova-plugin-backlight";
    BacklightOriginal.pluginRef = "cordova.plugins.Backlight";
    BacklightOriginal.repo = "https://github.com/mebibou/cordova-plugin-backlight";
    BacklightOriginal.platforms = ["Android"];
    return BacklightOriginal;
}(IonicNativePlugin));
var Backlight = new BacklightOriginal();
export { Backlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tsaWdodC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQ3pDLDZCQUFpQjs7OztJQU85QyxzQkFBRTtJQVNGLHVCQUFHOzs7Ozs7b0JBbERMO0VBa0MrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIEJhY2tsaWdodFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhZGRzIHR1cm5pbmcgb24vb2ZmIHRoZSBkZXZpY2UgYmFja2xpZ2h0LlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFja2xpZ2h0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrbGlnaHQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tsaWdodDogQmFja2xpZ2h0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBUdXJuIGJhY2tsaWdodCBvblxuICogdGhpcy5iYWNrbGlnaHQub24oKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdiYWNrbGlnaHQgb24nKSk7XG4gKlxuICogLy8gVHVybiBiYWNrbGlnaHQgb2ZmXG4gKiB0aGlzLmJhY2tsaWdodC5vZmYoKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdiYWNrbGlnaHQgb2ZmJykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhY2tsaWdodCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tsaWdodCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5CYWNrbGlnaHQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21lYmlib3UvY29yZG92YS1wbHVnaW4tYmFja2xpZ2h0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrbGlnaHQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdHVybnMgYmFja2xpZ2h0IG9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYWNrbGlnaHQgaXMgb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB0dXJucyBiYWNrbGlnaHQgb2ZmXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYWNrbGlnaHQgaXMgb2ZmXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9mZigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=