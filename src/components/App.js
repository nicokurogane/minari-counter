import React, { useEffect } from 'react';
import UserInfo from 'components/userInfo/UserInfo';
import urls from 'api/urls';
import { getData } from 'api/minariClient';

function App() {
  let data;

  const getCustomers = async () => {
    data = await getData(urls.customers());
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="App">
      <UserInfo user={{ id: 10, name: 'Nicolas', purchases: 0 }} />
    </div>
  );
}

export default App;
