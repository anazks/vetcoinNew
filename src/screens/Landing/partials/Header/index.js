import React from 'react';
import PropTypes from 'prop-types';

import { SectionContainer } from '../Layout';
import DropDown from '../../../../components/DropDown/DropDown';

const Header = ({loggedIn,setLoggedin,currentScreen}) => (
  <>
    <SectionContainer className="bg-dark">
      <div className="wl-header py-4">
        
        <div>
          {
           (currentScreen==="form" && loggedIn) ?<DropDown setLoggedin={setLoggedin}/>
           :
            <button
            className="btn btn-responsive"
            type="button"
            data-toggle="modal"
            data-target="#modal">
            Join waitlist
          </button>
          }
         
        </div>
      </div>
    </SectionContainer>
    <div className="wl-header-hr" />
  </>
);
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setLoggedin:PropTypes.func.isRequired,
  currentScreen:PropTypes.string.isRequired
};
export default Header;
