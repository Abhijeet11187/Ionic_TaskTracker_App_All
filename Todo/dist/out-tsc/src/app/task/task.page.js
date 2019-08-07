import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpserviceService } from '../shared/httpservice.service';
import { FormBuilder } from '@angular/forms';
var TaskPage = /** @class */ (function () {
    function TaskPage(menuCtrl, alertController, http, fb) {
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.http = http;
        this.fb = fb;
    }
    TaskPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    TaskPage.prototype.onAdd = function () {
        this.myAlert_show();
    };
    TaskPage.prototype.ngOnInit = function () {
    };
    // Ge Data From Alert
    TaskPage.prototype.getFromAlert = function (data) {
        console.log(data);
        var formData = new FormData();
        formData.append('taskName', data.name1);
        formData.append('taskDescription', data.name2);
        formData.append('taskDate', data.name3);
        this.http.registerTask(formData).subscribe(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    //Alert Function
    TaskPage.prototype.myAlert_show = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var myAlert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add Taks',
                            message: 'Enter Details Here',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function (data) {
                                        _this.getFromAlert(data);
                                    },
                                },
                                {
                                    text: 'Cancel',
                                    role: "cancel",
                                    handler: function (data) {
                                        //console.log('Abbrechen clicked. Data -> ' + JSON.stringify(data));
                                    },
                                }
                            ],
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'Enter Name of Task'
                                },
                                {
                                    name: 'name2',
                                    type: 'text',
                                    placeholder: 'Description'
                                },
                                {
                                    name: 'name3',
                                    type: 'date',
                                    placeholder: 'Date',
                                    min: '26-07-19',
                                    max: '20-01-20'
                                },
                            ]
                        })];
                    case 1:
                        myAlert = _a.sent();
                        return [4 /*yield*/, myAlert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskPage = tslib_1.__decorate([
        Component({
            selector: 'app-task',
            templateUrl: './task.page.html',
            styleUrls: ['./task.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController, AlertController, HttpserviceService, FormBuilder])
    ], TaskPage);
    return TaskPage;
}());
export { TaskPage };
//# sourceMappingURL=task.page.js.map