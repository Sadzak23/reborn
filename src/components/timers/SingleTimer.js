import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { startRemoveTimer } from '../../actions/timers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SingleTimer = ({ id, name, warmupTime, intervals, startRemoveTimer }) => {

  // Delete timer confirmation
  const onConfirm = () => swal({
    title: "Are you sure?!",
    text: "You can't bring it back!",
    icon: "error",
    buttons: {
      cancel: "Cancel!",
      delete: {
        text: "Yes, delete it!",
        value: "delete",
        className: "btn-alert-delete"
      },
    },
  })
    .then((value) =>
      value === "delete" ?
        swal("Deleted!", "Your timer has been deleted!", "success") &&
        startRemoveTimer(id) : swal("Your timer is safe!", "", "success")
    );
  //
  return (
    <div className="list-item">
      <div className="list-int list-userName">
        <Link to={`/timer/${id}`} className="btn-activate grid" onMouseDown={(e) => { e.preventDefault() }}>
          <h3>{name}</h3>
          <p>{intervals.length} intervals - Warmup time: {warmupTime}</p>
        </Link>
      </div>

      <div className="list-item-btns">
        <Link to={`/edit-timer/${id}`} onMouseDown={(e) => { e.preventDefault() }}>
          <button className="btn-edit-m">
            <FontAwesomeIcon icon={faPen} style={{ color: '#fff' }} />
          </button>
        </Link>
        <button className="btn-remove-m" onClick={onConfirm}>
          <FontAwesomeIcon icon={faTimes} style={{ color: '#fff' }} />
        </button>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startRemoveTimer: (id) => dispatch(startRemoveTimer(id))
});

export default connect(undefined, mapDispatchToProps)(SingleTimer);