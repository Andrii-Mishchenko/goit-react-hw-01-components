import React from 'react';
import FriendList from './components/friends/FriendList';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics'
import TransactionHistory from './components/transactions/TransactionHistory'

import friends from './components/friends/friends.json';
import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import transactions from './components/transactions/transactions.json';


const App =() => (
    <div className="container">
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <FriendList friends={friends}/>
        <Statistics 
            title="Upload stats" 
            stats={statisticalData} 
        />
        <Statistics stats={statisticalData} />    
        <TransactionHistory items={transactions} />    
    </div>
);

export default App;
