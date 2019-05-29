import React from 'react';
import { connect } from 'react-redux';
import TimerForm from './TimerForm';
import { createTimer } from '../../actions/timers'

export class CreateTimerPage extends React.Component {
  onSubmit = (timer) => {
    this.props.createTimer(timer);
    this.props.history.push('/timers');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">New timer</h1>
          </div>
        </div>
        <div className="content-container">
          <TimerForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  createTimer: (timer) => dispatch(createTimer(timer)),
  startAddtimer: (timer) => dispatch(startAddtimer(timer))
});

export default connect(undefined, mapDispatchToProps)(CreateTimerPage);