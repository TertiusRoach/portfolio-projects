define(["require", "exports", "tools/get-page"], function (require, exports, get_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectName = void 0;
    var ProjectName;
    (function (ProjectName) {
        function startProgram() {
            console.log('index.js Loaded');
            var filename = location.href.split('/')[5];
            get_page_1.GetPage.forHTML(filename);
        }
        ProjectName.startProgram = startProgram;
    })(ProjectName = exports.ProjectName || (exports.ProjectName = {}));
});

//# sourceMappingURL=dist/main.js.map
