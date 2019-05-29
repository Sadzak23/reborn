import React from 'react';
import { connect } from 'react-redux';
import SingleTimer from './SingleTimer'

const TimersListPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Timer Workouts</h1>
      </div>
    </div>
    <div className="content-container list-body">
    <div className="list-header">
    <p>Select Timer Workout</p>
    </div>
    <div className="list-body">
    {
              props.timers.length === 0 ? (
                <p className="expense-list-no-exp">No timers</p>
              ) : (
              props.timers.map(timer =>
                (<SingleTimer
                  key={timer.id}
                  {...timer}
                />))
            )
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  timers: state.timers
});

export default connect(mapStateToProps)(TimersListPage);