import PropTypes from 'prop-types';

import {
  Status,
  FriendsListItem,
  Img,
} from 'components/FriendsList/FriendsList.styled';

export const FriendsList = ({ friends }) => (
  <ul>
    <FriendsItem friends={friends} />
  </ul>
);

const FriendsItem = ({ friends }) =>
  friends.map(({ avatar, name, id, isOnline }) => (
    <FriendsListItem key={id}>
      {isOnline ? (
        <Status style={{ backgroundColor: '#00FF00' }}></Status>
      ) : (
        <Status style={{ backgroundColor: '#FF0000' }}></Status>
      )}
      <Img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsListItem>
  ));

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

FriendsItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
