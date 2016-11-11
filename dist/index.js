(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "jquery"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("jquery"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.jquery);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _jquery) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var ContactForm = function (_React$Component) {
        _inherits(ContactForm, _React$Component);

        function ContactForm() {
            _classCallCheck(this, ContactForm);

            return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).apply(this, arguments));
        }

        _createClass(ContactForm, [{
            key: "_handleSubmit",
            value: function _handleSubmit(event) {
                var email = (0, _jquery2.default)("#email").val();
                if (validateEmail(email)) {
                    event.preventDefault();
                    (0, _jquery2.default)('#emailId').addClass('has-success');
                    (0, _jquery2.default)('#emailContent').addClass('has-success');
                    (0, _jquery2.default)('#success').removeClass('hiddenSuccess');
                    (0, _jquery2.default)('#success').addClass('form-control-feedback');
                } else {
                    event.preventDefault();
                    (0, _jquery2.default)('#emailId').addClass('has-danger');
                }
            }
        }, {
            key: "render",
            value: function render() {

                return _react2.default.createElement(
                    "div",
                    { className: "contactForm" },
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "h1",
                            null,
                            this.props.data.header
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: "col s12" },
                            _react2.default.createElement(
                                "form",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { id: "emailId", className: "form-group " },
                                    _react2.default.createElement(
                                        "small",
                                        { className: "form-text text-muted" },
                                        this.props.data.mailAddress
                                    ),
                                    _react2.default.createElement("input", { type: "text", className: "form-control form-control-success", id: "inputSuccess1" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { id: "emailContent", className: "input-field" },
                                    _react2.default.createElement(
                                        "small",
                                        { className: "form-text text-muted" },
                                        this.props.data.message
                                    ),
                                    _react2.default.createElement("textarea", { className: "form-control",
                                        name: "emailcontent", id: "emailcontent", "data-cip-id": "emailcontent" }),
                                    _react2.default.createElement(
                                        "div",
                                        { id: "success", className: "hiddenSuccess" },
                                        this.props.data.sendMessage
                                    )
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { className: "btn btn-primary",
                                        onClick: this._handleSubmit },
                                    this.props.data.sendButton
                                )
                            )
                        )
                    )
                );
            }
        }]);

        return ContactForm;
    }(_react2.default.Component);

    ;

    exports.default = ContactForm;
});