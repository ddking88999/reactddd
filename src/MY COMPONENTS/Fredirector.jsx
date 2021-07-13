import React from 'react';
import './style.css';
import './main.js';

import { useHistory } from 'react-router-dom';

export default function Fredirector() {
  let history = useHistory();

    history.push('/login');
  
  return (
    <>
    </>
  );
}
