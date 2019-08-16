import React from 'react';
import { colorMapGender } from '../ColorMap';
import { userFormAlerts } from '../Alerts';
import { Birthdate } from './Birthdate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale, faSave, faUserPlus, faBan } from '@fortawesome/free-solid-svg-icons';
import { history } from '../../routers/AppRouter';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      weight: props.user ? props.user.weight : "",
      height: props.user ? props.user.height : "",
      gender: props.user ? props.user.gender : 'male',
      birthdate: props.user ? props.user.birthdate : "",
      activeUser: props.user ? props.user.activeUser : false
    };
  };

  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState({ firstName });
  };
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState({ lastName });
  };

  onWeightChange = (e) => {
    const weight = e.target.value;
    if (!weight || weight.match(/^\d{1,3}$/)) {
      this.setState({ weight });
    };
  };

  onHeightChange = (e) => {
    const height = e.target.value;
    if (!height || height.match(/^\d{1,3}$/)) {
      this.setState({ height });
    };
  };

  onBirthdateChange = (birthdate) => {
    this.setState({ birthdate })
  }

  onGenderChange = () => {
    const gender = this.state.gender === "male" ? "female" : "male";
    this.setState({ gender });
  };

  onCreateUser = () => {
    const now = new Date();
    if (!this.state.firstName || !this.state.lastName) {
      swal(userFormAlerts.title, userFormAlerts.noName, "error", { dangerMode: true, })
    } else if (!this.state.birthdate || this.state.birthdate > now) {
      swal(userFormAlerts.bDateTitle, userFormAlerts.bDate, "error", { dangerMode: true, })
    } else if (this.state.weight < 20) {
      swal(userFormAlerts.title, userFormAlerts.lowWeight, "error", { dangerMode: true, })
    } else if (this.state.height < 100 || this.state.height > 250) {
      swal(userFormAlerts.title, userFormAlerts.lowHeight, "error", { dangerMode: true, })
    }
    else {
      this.props.onAddUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthdate: this.state.birthdate,
        height: this.state.height,
        weight: this.state.weight,
        gender: this.state.gender,
        activeUser: false,
        workouts: {
          history: ""
        }
      })
    }
  };

  onEditUser = () => {
    const now = new Date();
    if (!this.state.firstName || !this.state.lastName) {
      swal(userFormAlerts.title, userFormAlerts.noName, "error", { dangerMode: true, })
    } else if (!this.state.birthdate || this.state.birthdate > now) {
      swal(userFormAlerts.bDateTitle, userFormAlerts.bDate, "error", { dangerMode: true, })
    } else if (this.state.weight < 20) {
      swal(userFormAlerts.title, userFormAlerts.lowWeight, "error", { dangerMode: true, })
    } else if (this.state.height < 100 || this.state.height > 250) {
      swal(userFormAlerts.title, userFormAlerts.lowHeight, "error", { dangerMode: true, })
    }
    else {
      this.props.onEditUser(this.props.user.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthdate: this.state.birthdate,
        height: this.state.height,
        weight: this.state.weight,
        gender: this.state.gender,
        activeUser: this.state.activeUser
      });
    }
  };

  onCancel = () => {
    history.goBack();
  };

  render() {
    const genderColor = this.state.gender === "male" ? `${Object.keys(colorMapGender)[0]}` : `${Object.keys(colorMapGender)[1]}`;
    const background = this.state.gender === "male" ? "#bae0ff" : "#f5ccd3";
    return (
      <div>
      <div className="user-form" style={{background}}>
      {this.state.firstName ? <h2>Welcome {this.state.firstName}</h2> : <h2>Please enter user data</h2>}
        <div className="flex">
          <input
            id="firstName"
            type="text"
            onChange={this.onFirstNameChange}
            autoComplete="off"
            className="margin-right text-input full-width"
            placeholder="First Name"
            value={this.state.firstName}
          />
          <input
            id="lastName"
            type="text"
            onChange={this.onLastNameChange}
            autoComplete="off"
            className="text-input full-width"
            placeholder="Last Name"
            value={this.state.lastName}
          />
        </div>
        <Birthdate
          birthdate={this.state.birthdate}
          ref="child"
          onBdayChange={this.onBirthdateChange}
        />
        <div className="flex">
          <label className="text-input full-width margin-right">
            Weight: <input
              type="text"
              onChange={this.onWeightChange}
              autoComplete="off"
              className="inline-input"
              placeholder="0"
              value={this.state.weight} /> kg
            </label>
          <label className="text-input full-width">
            Height: <input
              type="text"
              onChange={this.onHeightChange}
              autoComplete="off"
              className="inline-input"
              placeholder="0"
              value={this.state.height} /> cm
            </label>
        </div>
        <div className="gender-label">
          Gender:
        <button
            className="btn-gender"
            onClick={this.onGenderChange}
            style={{ background: genderColor }}
          >
            {this.state.gender === "male" ? <FontAwesomeIcon icon={faMale} size='3x' /> : <FontAwesomeIcon icon={faFemale} size='3x' />}
          </button>
        </div>
        </div>
        <div className="form-submit">
          {!this.props.user ?
            <button className="btn-save" onClick={this.onCreateUser}>
              <FontAwesomeIcon icon={faUserPlus} /> Create New User</button> :
            <button className="btn-save" onClick={this.onEditUser}>
              <FontAwesomeIcon icon={faSave} /> Save Changes
              </button>}
          <button className="btn-cancel form-cancel" onClick={this.onCancel}>
            <FontAwesomeIcon icon={faBan} /> Cancel
              </button>
        </div>
      </div>
    );
  }
};
