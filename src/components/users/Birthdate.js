import React from 'react';
import * as moment from 'moment';

export class Birthdate extends React.Component {
  constructor(props) {
    super(props);
    const birthdate = props.birthdate ? moment(props.birthdate).format('D M YYYY').split(' ') : "";
    this.state = {
      date: '',
      day: birthdate ? birthdate[0] : "",
      month: birthdate ? birthdate[1] : "",
      year: birthdate ? birthdate[2] : "",
    }
  };

  onDayChange = (e) => {
    const day = e.target.value;
    if (!day || day.match(/^\d{1,2}$/)) {
      this.setState({ day }, () => {
        this.setState({ date: Date.parse(`${this.state.month} ${this.state.day} ${this.state.year}`) }, () => {
          this.props.onBdayChange(this.state.date)
        })
      });
    }
  };
  onMonthChange = (e) => {
    const month = e.target.value;
    if (!month || month.match(/^\d{1,2}$/)) {
      this.setState({ month }, () => {
        this.setState({ date: Date.parse(`${this.state.month} ${this.state.day} ${this.state.year}`) }, () => {
          this.props.onBdayChange(this.state.date)
        })
      });
    }
  };
  onYearChange = (e) => {
    const year = e.target.value;
    if (!year || year.match(/^\d{1,4}$/)) {
      this.setState({ year }, () => {
        this.setState({ date: Date.parse(`${this.state.month} ${this.state.day} ${this.state.year}`) }, () => {
          this.props.onBdayChange(this.state.date)
        })
      });
    }
  };


  render() {
    return (
      <div className="birthdate">
        Birthdate:<div>
          <label className="margin-side"> Day: <input
              type="text"
              onChange={this.onDayChange}
              className="inline-input2"
              placeholder="1"
              value={this.state.day} />
          </label>
          <label className="margin-right">
            Month: <input
              type="text"
              onChange={this.onMonthChange}
              className="inline-input2"
              placeholder="1"
              value={this.state.month} />
          </label>
          <label className="margin-right">
            Year: <input
              type="text"
              onChange={this.onYearChange}
              className="inline-input4"
              placeholder="1990"
              value={this.state.year} />
          </label>
        </div>
      </div>
    )
  };
};
