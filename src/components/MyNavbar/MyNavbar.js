/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../Auth/Auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"> <img alt=".." src="https://img.shiftstats.com/dcd7c2ef-0bf7-4a7e-a22f-e1e1a76f936c/team-logo_url-61638-pride-1566720849090260505-medium.svg"></img> Boston Pride </a>
      <span className="badge badge-warning"> <img alt=".." src="https://img.shiftstats.com/dcd7c2ef-0bf7-4a7e-a22f-e1e1a76f936c/league-logo_url-100-nwhl-1566867909528718735-50.svg"></img></span>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {
            authed
              ? <button className="nav-link btn btn-warning text-dark logout-button" onClick={this.logoutClickEvent}>Logout <i className="fas fa-sign-out-alt"></i></button>
              : <Auth />
          }
        </li>
      </ul>
    </nav>
    );
  }
}

export default MyNavbar;
