import React, { useEffect } from 'react';
import UserInfo from 'components/userInfo/UserInfo';
import urls from 'api/urls';
import { getData } from 'api/minariClient';

function App() {
  let data = [];

  const getCustomers = async () => {
    data = await getData(urls.customers());
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="App">
      {data.map(user => (
        <UserInfo user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
