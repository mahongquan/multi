webpackHotUpdate("static\\development\\pages\\datepick.js",{

/***/ "./pages/datepick.js":
/*!***************************!*\
  !*** ./pages/datepick.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/dist/material-ui-pickers.esm.js");
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @date-io/moment */ "./node_modules/@date-io/moment/build/index.esm.js");
var _jsxFileName = "D:\\ma\\multi\\pages\\datepick.js";





function BasicDatePicker(props) {
  const [selectedDate, handleDateChange] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_1__["MuiPickersUtilsProvider"], {
    utils: _date_io_moment__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, ">", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    label: "Basic example",
    value: selectedDate,
    onChange: handleDateChange,
    animateYearScrolling: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    autoOk: true,
    label: "Clearable",
    clearable: true,
    disableFuture: true,
    value: selectedDate,
    onChange: handleDateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    disableFuture: true,
    openTo: "year",
    label: "Date of birth",
    views: ['year', 'month', 'date'],
    value: selectedDate,
    onChange: handleDateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BasicDatePicker);

/***/ })

})
//# sourceMappingURL=datepick.js.b13d169e05d763ab2e1c.hot-update.js.map