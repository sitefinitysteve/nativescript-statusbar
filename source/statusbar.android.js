var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./statusbar-common");
var app = require("application");
var color = require("color");
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar(options) {
        _super.call(this, options);
    }
    StatusBar.prototype.update = function (value) {
        try {
            if (value) {
                var nativeColor = new color.Color(value).android;
                var window = app.android.startActivity.getWindow();
                window.setStatusBarColor(nativeColor);
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    return StatusBar;
})(common.StatusBar);
exports.StatusBar = StatusBar;
