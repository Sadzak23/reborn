import React from 'react';
import { connect } from 'react-redux';
import { faUserPlus, faUsers, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import SingleUser from './SingleUser';
import { ListHeader, ListBody, ListFooter } from '../Elements/List';
import { BtnLinkCancel, BtnBackFullWidth } from '../Elements/Buttons';

const UsersList = ({ users, location }) => {
  const usersList = users.length === 0 ? (
    <p className="list-no-int">Please create user</p>
  ) : (
      users.map(user =>
        (<SingleUser
          path={location.pathname}
          key={user.id}
          users={users}
          {...user}
        />))
    );
  return (
    <div className="content-container">
      <ListHeader
        titleIcon={faUsers}
        titleTxt="Please select user"
        linkPath="/create-user"
        linkState={{ userCount: users.length }}
        linkIcon={faUserPlus}
      />
      <ListBody list={usersList} />
      <ListFooter />

      {location.pathname == "/user-select-timer" ?
        <BtnLinkCancel
          linkTxt="Select Timer"
          linkPath="/timers"
          linkState={{ activeUsers: users.filter(user => user.activeUser) }}
          linkIcon={faStopwatch}
        />
        :
        <BtnBackFullWidth />
      }
    </div>
  )
};

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(UsersList);
