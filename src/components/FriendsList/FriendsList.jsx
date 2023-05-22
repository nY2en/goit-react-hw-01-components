import PropTypes from 'prop-types';
import { FriendsItem } from "components/FriendsList/FriendsItem";
export const FriendsList = ({ friends }) => (
  <ul>
    <FriendsItem friends={friends} />
  </ul>
);

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
