import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Workout5x5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        squat: 120,
        benchPress: 95,
        barbellRow: 80,
        overHeadPress: 60,
        deadLift: 110,
        bodyWeight: 75
      },
      workout: {
        exercise1: {
          set1: 0,
          set2: 0,
          set3: 0,
          set4: 0,
          set5: 0,
        },
        exercise2: {
          set1: 0,
          set2: 0,
          set3: 0,
          set4: 0,
          set5: 0,
        },
        exercise3: {
          set1: 0,
          set2: 0,
          set3: 0,
          set4: 0,
          set5: 0,
        },
      }
    }
  }

  onRepCount = (exerciseNo, setNo) => {
    if (this.state.workout[exerciseNo][setNo] === 0) {
      this.setState({
        workout: {
          ...this.state.workout,
          [exerciseNo]: {
            ...this.state.workout[exerciseNo],
            [setNo]: 5
          }
        }
      });
    } else {
      this.setState({
        workout: {
          ...this.state.workout,
          [exerciseNo]: {
            ...this.state.workout[exerciseNo],
            [setNo]: this.state.workout[exerciseNo][setNo] - 1
          }
        }
      });
    }
  };
  /* Exercise 1 */
  onRepCountE1R1 = () => {
    this.onRepCount('exercise1', 'set1')
  }
  onRepCountE1R2 = () => {
    this.onRepCount('exercise1', 'set2')
  }
  onRepCountE1R3 = () => {
    this.onRepCount('exercise1', 'set3')
  }
  onRepCountE1R4 = () => {
    this.onRepCount('exercise1', 'set4')
  }
  onRepCountE1R5 = () => {
    this.onRepCount('exercise1', 'set5')
  }

  /* Exercise 2 */
  onRepCountE2R1 = () => {
    this.onRepCount('exercise2', 'set1')
  }
  onRepCountE2R2 = () => {
    this.onRepCount('exercise2', 'set2')
  }
  onRepCountE2R3 = () => {
    this.onRepCount('exercise2', 'set3')
  }
  onRepCountE2R4 = () => {
    this.onRepCount('exercise2', 'set4')
  }
  onRepCountE2R5 = () => {
    this.onRepCount('exercise2', 'set5')
  }

  /* Exercise 3 */
  onRepCountE3R1 = () => {
    this.onRepCount('exercise3', 'set1')
  }
  onRepCountE3R2 = () => {
    this.onRepCount('exercise3', 'set2')
  }
  onRepCountE3R3 = () => {
    this.onRepCount('exercise3', 'set3')
  }
  onRepCountE3R4 = () => {
    this.onRepCount('exercise3', 'set4')
  }
  onRepCountE3R5 = () => {
    this.onRepCount('exercise3', 'set5')
  }

  render() {
    return (
      <div className="content-container">
        <Link to="/dashboard5x5">
          <button className="btn-x">
            <FontAwesomeIcon icon={faTimes} className="timer-x" />
          </button>
        </Link>
        <div className="timer5x5">
          <h1>Rest: 01:00</h1>
        </div>

        {/* Exercise 1 */}
        <div className="workout-exercise">
          <div className="exercise-title-5x5">
            <h2>Squat</h2>
            <h3>5x5 {this.state.userData.squat}kg</h3>
          </div>
          <div className="counter5x5">
            <button onClick={this.onRepCountE1R1} className="btn-exercise-count">{this.state.workout.exercise1.set1}</button>
            <button onClick={this.onRepCountE1R2} className="btn-exercise-count">{this.state.workout.exercise1.set2}</button>
            <button onClick={this.onRepCountE1R3} className="btn-exercise-count">{this.state.workout.exercise1.set3}</button>
            <button onClick={this.onRepCountE1R4} className="btn-exercise-count">{this.state.workout.exercise1.set4}</button>
            <button onClick={this.onRepCountE1R5} className="btn-exercise-count">{this.state.workout.exercise1.set5}</button>
          </div>
        </div>

        {/* Exercise 2 */}
        <div className="workout-exercise">
          <div className="exercise-title-5x5">
            <h2>Bench Press</h2>
            <h3>5x5 {this.state.userData.benchPress}kg</h3>
          </div>
          <div className="counter5x5">
            <button onClick={this.onRepCountE2R1} className="btn-exercise-count">{this.state.workout.exercise2.set1}</button>
            <button onClick={this.onRepCountE2R2} className="btn-exercise-count">{this.state.workout.exercise2.set2}</button>
            <button onClick={this.onRepCountE2R3} className="btn-exercise-count">{this.state.workout.exercise2.set3}</button>
            <button onClick={this.onRepCountE2R4} className="btn-exercise-count">{this.state.workout.exercise2.set4}</button>
            <button onClick={this.onRepCountE2R5} className="btn-exercise-count">{this.state.workout.exercise2.set5}</button>
          </div>
        </div>

        {/* Exercise 3 */}
        <div className="workout-exercise">
          <div className="exercise-title-5x5">
            <h2>Barbell Row</h2>
            <h3>5x5 {this.state.userData.barbellRow}kg</h3>
          </div>
          <div className="counter5x5">
            <button onClick={this.onRepCountE3R1} className="btn-exercise-count">{this.state.workout.exercise3.set1}</button>
            <button onClick={this.onRepCountE3R2} className="btn-exercise-count">{this.state.workout.exercise3.set2}</button>
            <button onClick={this.onRepCountE3R3} className="btn-exercise-count">{this.state.workout.exercise3.set3}</button>
            <button onClick={this.onRepCountE3R4} className="btn-exercise-count">{this.state.workout.exercise3.set4}</button>
            <button onClick={this.onRepCountE3R5} className="btn-exercise-count">{this.state.workout.exercise3.set5}</button>
          </div>
        </div>

        <div className="workout-bodyweight">
          <h2>Body Weight: {this.state.userData.bodyWeight}Kg</h2>
        </div>
      </div>
    )
  }
};