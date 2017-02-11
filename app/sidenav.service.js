System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SidenavService;
    return {
        setters:[],
        execute: function() {
            SidenavService = (function () {
                function SidenavService() {
                    this.sidenavs = [];
                }
                SidenavService.prototype.getBooks = function () {
                    return ["Administracion", "Pacientes", "Citas", "Reportes", "Enlaces"];
                };
                SidenavService.prototype.addBook = function (title) {
                    this.sidenavs.push(title);
                };
                return SidenavService;
            }());
            exports_1("SidenavService", SidenavService);
        }
    }
});
//# sourceMappingURL=sidenav.service.js.map