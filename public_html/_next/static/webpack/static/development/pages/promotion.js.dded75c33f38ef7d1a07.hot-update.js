webpackHotUpdate("static\\development\\pages\\promotion.js",{

/***/ "./components/promotions/promotionDetail.js":
/*!**************************************************!*\
  !*** ./components/promotions/promotionDetail.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/login */ "./components/common/login.js");
/* harmony import */ var _payments_buyPromotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payments/buyPromotion */ "./components/payments/buyPromotion.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _categories_listCategories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../categories/listCategories */ "./components/categories/listCategories.js");
var _jsxFileName = "D:\\Proyectos\\unamarcatepremia\\components\\promotions\\promotionDetail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;

var PromotionDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(PromotionDetail, _Component);

  function PromotionDetail(props) {
    var _this;

    _classCallCheck(this, PromotionDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PromotionDetail).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChangeMain", function (file) {
      var url = "".concat(publicRuntimeConfig.promotionImagesBasePath).concat(file.name);

      _this.setState({
        urlMainImg: url,
        assetSelected: file.id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderListImg", function () {
      var assets = _this.props.promotion.assets;
      var assetSelected = _this.state.assetSelected;
      var rows = [];
      var permited = true;
      assets.forEach(function (asset, index) {
        permited = !index && !assetSelected ? false : assetSelected && assetSelected == asset.id ? false : true;

        if (permited) {
          rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: asset.id,
            onClick: function onClick() {
              return _this.onChangeMain(asset);
            },
            className: "list",
            style: {
              backgroundImage: "url(".concat(publicRuntimeConfig.promotionImagesBasePath).concat(asset.name, ")")
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }));
        }
      });
      return rows;
    });

    _defineProperty(_assertThisInitialized(_this), "renderer", function (_ref) {
      var days = _ref.days,
          hours = _ref.hours,
          minutes = _ref.minutes,
          seconds = _ref.seconds,
          completed = _ref.completed;

      if (completed) {
        // Render a completed state
        return false;
      } else {
        // Render a countdown
        seconds = seconds < 10 ? "0".concat(seconds) : seconds;
        minutes = minutes < 10 ? "0".concat(minutes) : minutes;
        hours = hours < 10 ? "0".concat(hours) : hours;
        days = days < 10 ? "0".concat(days) : days;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "interval",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, days), ":", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "interval",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, hours), ":", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "interval",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, minutes), ":", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "interval",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, seconds), " ");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCallPaid", function () {
      var token = localStorage.getItem('token');

      if (!token) {
        _this.setState({
          showLogin: true
        });
      } else {
        _this.setState({
          showPay: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelLogin", function () {
      _this.setState({
        showLogin: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelPay", function () {
      _this.setState({
        showPay: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowLogin", function () {
      _this.setState({
        showLogin: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCreatePreference", function (preference) {
      _this.props.createPreference(preference);
    });

    _this.state = {
      showLogin: false,
      showPay: false,
      urlMainImg: null,
      assetSelected: null
    };
    return _this;
  }

  _createClass(PromotionDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          promotion = _this$props.promotion,
          preference = _this$props.preference;
      var urlMainImg = this.state.urlMainImg;
      var urlImage = promotion.assets.length ? "".concat(publicRuntimeConfig.promotionImagesBasePath).concat(promotion.assets[0].name) : "../../static/img/no-imagen.png";
      var imgUnderline = '../../static/img/bg-underline.svg';
      var imgClock = '../../static/img/clock.png';
      var imgMap = '../../static/img/map.png';
      var endDate = new Date();
      var companyName = promotion.company ? promotion.company.name : "Marca";

      if (urlMainImg) {
        urlImage = urlMainImg;
      }

      if (promotion.end_date && promotion.end_time) {
        var newEnd = promotion.end_date.split('T')[0] + " " + promotion.end_time;
        endDate = new Date(newEnd);
      } else {
        endDate = new Date(promotion.end_date);
      }

      var urlButton = preference ? preference.init_point : "#";
      var nameButton = preference ? "DONAR YA" : "DONA AQUI";
      var target = preference ? '_blank' : '_self';
      var donation = promotion.donation.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      });
      var price = promotion.price.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      });
      var discount = (promotion.price - promotion.price * (promotion.discount / 100)).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'menu-categories',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_categories_listCategories__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'promotion-images',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 14,
        className: 'left-images',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'marca-images',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, companyName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'shortd-images',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, promotion.shortdescription), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'main-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: urlImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        className: 'list-images',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, this.renderListImg())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 10,
        className: 'description-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'detail-deal',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 14,
        className: 'donation',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Donaci\xF3n: ", donation), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 18,
        className: 'discount',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Bono de descuento: ", promotion.discount, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'valor',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "  Valor Comercial:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'underline',
        style: {
          backgroundImage: "url(".concat(imgUnderline, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'withdiscount',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, discount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'countdown',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'time-promotion',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: 'img-countdown',
        src: imgClock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), "Tiempo ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), "  Restante", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown_now__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: 'interval',
        date: endDate.getTime(),
        renderer: this.renderer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'quantity',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Donaciones disponibles: ", promotion.quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: "div-botton-donate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        href: urlButton,
        target: target,
        className: "botton-donate",
        onClick: function onClick() {
          return _this2.handleCallPaid();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, " ", nameButton, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_login__WEBPACK_IMPORTED_MODULE_3__["default"], {
        showLogin: this.state.showLogin,
        onCancelLogin: this.handleCancelLogin,
        onShowLogin: this.handleShowLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), this.state.showPay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        visible: this.state.showPay,
        onCancel: function onCancel() {
          return _this2.handleCancelPay();
        },
        footer: [],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_payments_buyPromotion__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        onCreatePreference: this.handleCreatePreference,
        onCancelPay: this.handleCancelPay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'promotion-description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: "title-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Descripci\xF3n de la "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "interest-blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Promoci\xF3n")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: "title-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, promotion.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'promotion-description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: "title-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Condiciones "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "interest-blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "de uso")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: "title-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, promotion.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 24,
        className: 'promotion-map',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 5,
        className: 'title-map',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Localizaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: 'img-map',
        src: imgMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })));
    }
  }]);

  return PromotionDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(_ref2) {
  var auth = _ref2.auth,
      payments = _ref2.payments;
  var preference = payments.preference;
  return {
    auth: auth,
    preference: preference
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  createPreference: _actions__WEBPACK_IMPORTED_MODULE_6__["createPreference"]
})(PromotionDetail));

/***/ })

})
//# sourceMappingURL=promotion.js.dded75c33f38ef7d1a07.hot-update.js.map