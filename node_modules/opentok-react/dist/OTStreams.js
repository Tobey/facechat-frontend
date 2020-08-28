'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OTStreams;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OTSubscriberContext = require('./OTSubscriberContext');

var _OTSubscriberContext2 = _interopRequireDefault(_OTSubscriberContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OTStreams(props, context) {
  var session = props.session || context.session || null;
  var streams = props.streams || context.streams || null;

  if (!session) {
    return _react2.default.createElement('div', null);
  }

  var child = _react.Children.only(props.children);

  var childrenWithContextWrapper = Array.isArray(streams) ? streams.map(function (stream) {
    return child ? _react2.default.createElement(
      _OTSubscriberContext2.default,
      { stream: stream, key: stream.id },
      (0, _react.cloneElement)(child)
    ) : child;
  }) : null;

  return _react2.default.createElement(
    'div',
    null,
    childrenWithContextWrapper
  );
}

OTStreams.propTypes = {
  children: _propTypes2.default.element.isRequired,
  session: _propTypes2.default.shape({ publish: _propTypes2.default.func, subscribe: _propTypes2.default.func }),
  streams: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

OTStreams.defaultProps = {
  session: null,
  streams: null
};

OTStreams.contextTypes = {
  session: _propTypes2.default.shape({ publish: _propTypes2.default.func, subscribe: _propTypes2.default.func }),
  streams: _propTypes2.default.arrayOf(_propTypes2.default.object)
};