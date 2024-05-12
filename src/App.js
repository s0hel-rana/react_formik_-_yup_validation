import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import FAQS from './components/FAQ/FAQS';
import DataFetch from './components/CustomHooks/DataFetch';

function App() {
  return (
    <div className="App">
      <SignUp/>
      {/* <FAQS/> */}
      {/* <DataFetch/> */}
    </div>
  );
}

export default App;
