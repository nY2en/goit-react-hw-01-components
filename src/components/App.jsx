import { Profile } from 'components/Profile/Profile';
import user from 'json/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from 'json/data.json';

import { FriendsList } from 'components/FriendsList/FriendsList';
import friendsList from 'json/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: 14,
        color: '#010101',
        background: '#D3D3D3',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" statistics={data} />

      <FriendsList friends={friendsList} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
