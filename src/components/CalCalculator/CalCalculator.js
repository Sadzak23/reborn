import React from 'react';
import { connect } from 'react-redux';
import { RunningCal } from './RunningCal'
import { CyclingCal } from './CyclingCal'
import { WalkincCal } from './WalkingCal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as moment from 'moment';
import { faToggleOn, faTimes } from '@fortawesome/free-solid-svg-icons';

export class CalCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      activity: "running",
      checkDuration: true,
      age: props.user ? moment().diff(props.user.birthdate, 'years') : "",
    }
  };

  onActivitySelect = (e) => {
    const activity = e.target.value;
    this.setState({ activity });
  };

  onResultType = () => {
    this.setState({ checkDuration: !this.state.checkDuration })
  };

  Click = () => {
    this.setState({
      user: this.props.user,
      age: moment().diff(this.props.user.birthdate, 'years'),
      weight: this.props.user.weight
    })
  };

  onGoBack = () => {
    this.props.history.goBack();
  }

  render() {
    const activity = {
      "running": <RunningCal user={this.state.user} checkDuration={this.state.checkDuration} />,
      "cycling": <CyclingCal user={this.state.user} checkDuration={this.state.checkDuration} />,
      "walking": <WalkincCal user={this.state.user} checkDuration={this.state.checkDuration} />
    }
    return (
      <div className="content-container">
        <button className="btn-x-header" onClick={this.onGoBack}>
          <FontAwesomeIcon icon={faTimes} className="timer-x" />
        </button>

        {this.state.user ? (
          <div>
            <h1>Hi {this.state.user.firstName}</h1>
            <h3>Age: {this.state.age} - Weight: {this.state.user.weight}kg</h3>
          </div>
        ) : (<h3>Please Select user</h3>)
        }

        <button onClick={this.Click}>Click me</button>
        <div className="activity-controls">
          <select
            className="activity-result-type"
            id="activity-select"
            onChange={this.onActivitySelect}
          >
            <option value="running">
              Running
          </option>
            <option value="cycling">
              Cycling
          </option>
            <option value="walking">
              Walking
          </option>
          </select>

          <button onClick={this.onResultType} className="activity-result-type">
            Duration
            <FontAwesomeIcon icon={faToggleOn} size="2x" className={this.state.checkDuration ? "fa-rotate-180 margin-xs" : "margin-xs"} />
            Calories
          </button>
        </div>
        {activity[this.state.activity]}

      </div>
    )
  }
};

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(CalCalculator);