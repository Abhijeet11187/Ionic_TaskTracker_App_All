import { TestBed } from '@angular/core/testing';
import { HttpserviceService } from './httpservice.service';
describe('HttpserviceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HttpserviceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=httpservice.service.spec.js.map