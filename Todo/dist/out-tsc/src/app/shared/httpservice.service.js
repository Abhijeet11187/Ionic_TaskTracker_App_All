import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var HttpserviceService = /** @class */ (function () {
    function HttpserviceService(http) {
        this.http = http;
        this.url = "http://192.168.0.110:3000/user";
    }
    HttpserviceService.prototype.register = function (formData) {
        return this.http.post(this.url + "/register", formData);
    };
    HttpserviceService.prototype.login = function (userName, formdata) {
        return this.http.post(this.url + "/login/" + userName, formdata);
    };
    HttpserviceService.prototype.registerTask = function (formdata) {
        console.log("In service");
        return this.http.post(this.url + "/registerTask", formdata);
    };
    HttpserviceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HttpserviceService);
    return HttpserviceService;
}());
export { HttpserviceService };
//# sourceMappingURL=httpservice.service.js.map