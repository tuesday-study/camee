import React, { Component } from 'react';

export default class LookUpFilter extends Component {
  render() {
    return (
      <div className="filterbutton">
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#FilterModal"
        >
          Filter
        </button>

        <div
          className="modal"
          id="FilterModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="FilterModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FiltereModalLabel">
                  Filter
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">Select Your Filter</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
