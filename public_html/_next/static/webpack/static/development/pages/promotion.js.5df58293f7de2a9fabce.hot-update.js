webpackHotUpdate("static\\development\\pages\\promotion.js",{

/***/ "./components/common/banner.js":
/*!*************************************!*\
  !*** ./components/common/banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./components/common/login.js");
/* harmony import */ var _menuAdmin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuAdmin */ "./components/common/menuAdmin.js");
var _jsxFileName = "D:\\Proyectos\\unamarcatepremia\\components\\common\\banner.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Banner =
/*#__PURE__*/
function (_Component) {
  _inherits(Banner, _Component);

  function Banner(props) {
    var _this;

    _classCallCheck(this, Banner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Banner).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onShowLogin", function () {
      _this.setState({
        showLogin: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelLogin", function () {
      _this.setState({
        showLogin: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLogout", function () {
      _this.props.userSignOut();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (prevProps.auth.user !== _this.props.auth.user && !_this.props.auth.user) {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('El usuario se deslogeo correctamente.');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowLogin", function () {});

    _defineProperty(_assertThisInitialized(_this), "renderCities", function () {
      //const { listCities } = this.props;
      var rows = [];
      var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option; //listCities.forEach(city => {

      rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        key: "no",
        defaultValue: "Bogot\xE1",
        style: {
          width: 200
        },
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        key: "Bogot\xE1",
        value: "Bogot\xE1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Bogot\xE1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        key: "Cartagena",
        value: "Cartagena",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Cartagena"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        key: "Cali",
        value: "Cali",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Cali"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        key: "Medellin",
        value: "Medellin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Medell\xEDn"))); //});

      return rows;
    });

    _this.state = {
      showLogin: false
    };
    return _this;
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          auth = _this$props.auth,
          title = _this$props.title,
          menuAdmin = _this$props.menuAdmin;
      var bgBanner = "../../static/img/bg-banner.svg";
      var bannerLogo = "../../static/img/banner-logo.png";
      var isLogin = auth.user ? true : false;
      var Search = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 24,
        className: "banner-content",
        style: {
          backgroundImage: "url(".concat(bgBanner, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: '/',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 10,
        className: "banner-logo",
        style: {
          backgroundImage: "url(".concat(bannerLogo, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 4,
        className: 'search',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, {
        size: "large",
        placeholder: "SEARCH",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 4,
        className: 'cities',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, this.renderCities()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, !isLogin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 12,
        offset: 12,
        className: "banner-row banner-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.onShowLogin();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "shopping-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        type: "verical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), "Login")), isLogin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        span: 12,
        offset: 12,
        className: "banner-row banner-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.onLogout();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "logout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        type: "verical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), "Logout")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
        showLogin: this.state.showLogin,
        onCancelLogin: this.handleCancelLogin,
        onShowLogin: this.handleShowLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), menuAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuAdmin__WEBPACK_IMPORTED_MODULE_5__["default"], {
        showMenu: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  userSignOut: _actions__WEBPACK_IMPORTED_MODULE_2__["userSignOut"]
})(Banner));

/***/ })

})
//# sourceMappingURL=promotion.js.5df58293f7de2a9fabce.hot-update.js.map