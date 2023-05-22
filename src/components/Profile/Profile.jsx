import PropTypes from 'prop-types';
import {
  CardContainer,
  DescriptionContainer,
  Img,
  UserName,
  Paragraph,
  StatsList,
  StatsItem,
  StatsValue,
} from 'components/Profile/Profile.styled';

import { addComa } from 'utils/addComa';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <CardContainer>
      <DescriptionContainer>
        <Img src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Paragraph>@{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </DescriptionContainer>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsValue>{addComa(stats.followers)}</StatsValue>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsValue>{addComa(stats.views)}</StatsValue>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsValue>{addComa(stats.likes)}</StatsValue>
        </StatsItem>
      </StatsList>
    </CardContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
