import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpserviceService } from '../shared/httpservice.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(toaster, menuCtrl, fb, http, route) {
        this.toaster = toaster;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.login = "Login";
        this.dis = true;
        this.dis2 = false;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    //Submit button From Login And Register
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        //Login Submit
        if (this.login === 'Login') {
            var userName = this.userData.get('userName').value;
            formData.append('password', this.userData.get('password').value);
            this.http.login(userName, formData).subscribe(function (res) {
                console.log(res);
                if (res.message !== "Not Found") {
                    _this.presentToast();
                    _this.route.navigate(['./task']);
                }
                else {
                    _this.presentToast2();
                }
            }, function (err) {
                console.log(err);
            });
        }
        //Register Submit
        else {
            if (this.userData.get('password').value === this.userData.get('password2').value) {
                console.log("err");
                formData.append('userName', this.userData.get('userName').value);
                formData.append('password', this.userData.get('password').value);
                console.log("data ", this.userData);
                this.http.register(formData).subscribe(function (res) {
                    console.log(res);
                    _this.onClick();
                    _this.presentToast();
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.presentToast3();
            }
        }
    };
    //Navigate Between Login And Registration
    LoginPage.prototype.onClick = function () {
        this.userData.patchValue({ userName: '', password: '', password2: '' });
        this.dis = !this.dis;
        this.dis2 = !this.dis2;
        if (this.dis2) {
            this.login = "Register";
        }
        else {
            this.login = "Login";
        }
    };
    LoginPage.prototype.ngOnInit = function () {
        this.userData = this.fb.group({
            userName: ['', []],
            password: ['', []],
            password2: ['', []]
        });
    };
    //Toster Sucess
    LoginPage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toaster.create({
                            position: 'top',
                            color: 'success',
                            message: 'Successful !',
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Toster Failure
    LoginPage.prototype.presentToast2 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toaster.create({
                            position: 'top',
                            color: 'danger',
                            message: 'UnAuthentic User',
                            duration: 1000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Toaster Password Not Matched
    LoginPage.prototype.presentToast3 = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toaster.create({
                            position: 'top',
                            color: 'danger',
                            message: 'Password Matched',
                            duration: 1000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController, MenuController, FormBuilder, HttpserviceService, Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map