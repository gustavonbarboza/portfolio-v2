import PropTypes from 'prop-types';
import {
  ButtonWrapper, Icon, TextContainer, Title, Subtitle,
} from './styles';

function SocialMediaButton({
  title, subtitle, iconSrc, href,
}) {
  return (
    <ButtonWrapper href={href}>
      <Icon src={iconSrc} alt={`${title} icon`} />
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </ButtonWrapper>
  );
}

SocialMediaButton.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default SocialMediaButton;
