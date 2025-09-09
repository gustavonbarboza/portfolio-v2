import PropTypes from 'prop-types';
import { CardButton, Title, Period } from './styles';

function ExperienceCard({
  title, period, active, onClick,
}) {
  return (
    <CardButton active={active} onClick={onClick}>
      <Title>{title}</Title>
      <Period>{period}</Period>
    </CardButton>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ExperienceCard.defaultProps = {
  active: false,
};

export default ExperienceCard;
