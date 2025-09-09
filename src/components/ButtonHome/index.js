import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, Icon } from './styles';

function ButtonHome({
  children, variant, iconSrc, href,
}) {
  return (
    <StyledButton $variant={variant} href={href}>
      {children}
      {iconSrc && <Icon src={iconSrc} alt="" />}
    </StyledButton>
  );
}

ButtonHome.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
};

ButtonHome.defaultProps = {
  variant: 'primary',
  iconSrc: '',
};

export default ButtonHome;
