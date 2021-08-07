'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const StyledBreakView = props => {
  const { breakLabel, onClick, styledBreakListOption, styledBreakLink } = props;

  return (
    <styledBreakListOption>
      <styledBreakLink
        onClick={onClick}
        role="button"
        tabIndex="0"
        onKeyPress={onClick}
      >
        {breakLabel}
      </styledBreakLink>
    </styledBreakListOption>
  );
};

StyledBreakView.propTypes = {
  breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  styledBreakListOption: PropTypes.element.isRequired,
  styledBreakLink: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StyledBreakView;