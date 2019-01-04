import React from 'react';
//Libraries
import { BounceLoader } from 'react-spinners';

import Constants from '../constants';

//Spinner or loading icon for the application
const Loader = () => (
  <div className="loader">
    <BounceLoader
      className="bounce-loader"
      sizeUnit={"px"}
      size={Constants.LOADER.SIZE}
      color={Constants.LOADER.COLOR}
    />
  </div>
);

export default Loader;