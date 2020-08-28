'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTSubscriber = function (_Component) {
  _inherits(OTSubscriber, _Component);

  function OTSubscriber(props, context) {
    _classCallCheck(this, OTSubscriber);

    var _this = _possibleConstructorReturn(this, (OTSubscriber.__proto__ || Object.getPrototypeOf(OTSubscriber)).call(this, props));

    _this.state = {
      subscriber: null,
      stream: props.stream || context.stream || null,
      session: props.session || context.session || null,
      currentRetryAttempt: 0
    };
    _this.maxRetryAttempts = props.maxRetryAttempts || 5;
    _this.retryAttemptTimeout = props.retryAttemptTimeout || 1000;
    return _this;
  }

  _createClass(OTSubscriber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createSubscriber();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var cast = function cast(value, Type, defaultValue) {
        return value === undefined ? defaultValue : Type(value);
      };

      var updateSubscriberProperty = function updateSubscriberProperty(key) {
        var previous = cast(prevProps.properties[key], Boolean, true);
        var current = cast(_this2.props.properties[key], Boolean, true);
        if (previous !== current) {
          _this2.state.subscriber[key](current);
        }
      };

      updateSubscriberProperty('subscribeToAudio');
      updateSubscriberProperty('subscribeToVideo');

      if (prevState.session !== this.state.session || prevState.stream !== this.state.stream) {
        this.destroySubscriber(prevState.session);
        this.createSubscriber();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroySubscriber();
    }
  }, {
    key: 'getSubscriber',
    value: function getSubscriber() {
      return this.state.subscriber;
    }
  }, {
    key: 'createSubscriber',
    value: function createSubscriber() {
      var _this3 = this;

      if (!this.state.session || !this.state.stream) {
        this.setState({ subscriber: null });
        return;
      }
      var properties = this.props.properties || {};
      var container = void 0;
      if (properties.insertDefaultUI !== false) {
        container = document.createElement('div');
        container.setAttribute('class', 'OTSubscriberContainer');
        this.node.appendChild(container);
      }

      this.subscriberId = (0, _uuid2.default)();
      var subscriberId = this.subscriberId;


      var subscriber = this.state.session.subscribe(this.state.stream, container, this.props.properties, function (err) {
        if (subscriberId !== _this3.subscriberId) {
          // Either this subscriber has been recreated or the
          // component unmounted so don't invoke any callbacks
          return;
        }
        if (err && _this3.props.retry && _this3.state.currentRetryAttempt < _this3.maxRetryAttempts - 1) {
          // Error during subscribe function
          _this3.handleRetrySubscriber();
          // If there is a retry action, do we want to execute the onError props function?
          // return;
        }
        if (err && typeof _this3.props.onError === 'function') {
          _this3.props.onError(err);
        } else if (!err && typeof _this3.props.onSubscribe === 'function') {
          _this3.props.onSubscribe();
        }
      });

      if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
        subscriber.on(this.props.eventHandlers);
      }

      this.setState({ subscriber: subscriber });
    }
  }, {
    key: 'handleRetrySubscriber',
    value: function handleRetrySubscriber() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState(function (state) {
          return {
            currentRetryAttempt: state.currentRetryAttempt + 1,
            subscriber: null
          };
        });
        _this4.createSubscriber();
      }, this.retryAttemptTimeout);
    }
  }, {
    key: 'destroySubscriber',
    value: function destroySubscriber() {
      var _this5 = this;

      var session = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.session;

      delete this.subscriberId;

      if (this.state.subscriber) {
        if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
          this.state.subscriber.once('destroyed', function () {
            _this5.state.subscriber.off(_this5.props.eventHandlers);
          });
        }

        if (session) {
          session.unsubscribe(this.state.subscriber);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement('div', { className: className, style: style, ref: function ref(node) {
          _this6.node = node;
        } });
    }
  }]);

  return OTSubscriber;
}(_react.Component);

exports.default = OTSubscriber;


OTSubscriber.propTypes = {
  stream: _propTypes2.default.shape({
    streamId: _propTypes2.default.string
  }),
  session: _propTypes2.default.shape({
    subscribe: _propTypes2.default.func,
    unsubscribe: _propTypes2.default.func
  }),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  properties: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  retry: _propTypes2.default.bool,
  maxRetryAttempts: _propTypes2.default.number,
  retryAttemptTimeout: _propTypes2.default.number,
  eventHandlers: _propTypes2.default.objectOf(_propTypes2.default.func),
  onSubscribe: _propTypes2.default.func,
  onError: _propTypes2.default.func
};

OTSubscriber.defaultProps = {
  stream: null,
  session: null,
  className: '',
  style: {},
  properties: {},
  retry: false,
  maxRetryAttempts: 5,
  retryAttemptTimeout: 1000,
  eventHandlers: null,
  onSubscribe: null,
  onError: null
};

OTSubscriber.contextTypes = {
  stream: _propTypes2.default.shape({
    streamId: _propTypes2.default.string
  }),
  session: _propTypes2.default.shape({
    subscribe: _propTypes2.default.func,
    unsubscribe: _propTypes2.default.func
  })
};