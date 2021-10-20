define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetPage = void 0;
    var GetPage;
    (function (GetPage) {
        function forHTML(filename) {
            var page = filename.split('.')[0];
            switch (page) {
                case 'index':
                    break;
                case 'tickets':
                    break;
            }
        }
        GetPage.forHTML = forHTML;
    })(GetPage = exports.GetPage || (exports.GetPage = {}));
});

//# sourceMappingURL=dist/tools/get-page.js.map
