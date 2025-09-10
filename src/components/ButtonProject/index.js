import PropTypes from 'prop-types';
import { StyledButton, Icon } from './styles';

import demoIcon from '../../assets/images/icons/click-icon.svg';
import repoIcon from '../../assets/images/icons/code-icon.svg';

function ProjectButton({ type, href }) {
  let iconSrc;
  let buttonText;

  switch (type) {
    case 'demostracao':
      iconSrc = demoIcon;
      buttonText = 'Demonstração';
      break;
    case 'repositorio':
      iconSrc = repoIcon;
      buttonText = 'Repositório';
      break;
    default:
      iconSrc = '';
      buttonText = '';
  }

  return (
    <StyledButton $type={type} href={href}>
      <Icon src={iconSrc} alt={`${buttonText} icon`} />
      {buttonText}
    </StyledButton>
  );
}

ProjectButton.propTypes = {
  type: PropTypes.oneOf(['demostracao', 'repositorio']).isRequired,
  href: PropTypes.string.isRequired,
};

export default ProjectButton;
