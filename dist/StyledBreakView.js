'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledBreakView = function StyledBreakView(props) {
  var breakLabel = props.breakLabel,
      onClick = props.onClick,
      styledBreakListOption = props.styledBreakListOption,
      styledBreakLink = props.styledBreakLink;


  return _react2.default.createElement(
    'styledBreakListOption',
    null,
    _react2.default.createElement(
      'styledBreakLink',
      {
        onClick: onClick,
        role: 'button',
        tabIndex: '0',
        onKeyPress: onClick
      },
      breakLabel
    )
  );
};

StyledBreakView.propTypes = {
  breakLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  styledBreakListOption: _propTypes2.default.element.isRequired,
  styledBreakLink: _propTypes2.default.element.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = StyledBreakView;
//# sourceMappingURL=StyledBreakView.js.map