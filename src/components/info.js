import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleInfo } from "../actions/actions";

const Info = props => (
  <div className="ui centered grid">
    <div className="column ten wide">
      <div className="ui inverted segment">
        <div className="ui two column middle aligned grid">
          <div className="column">
            <h3>Additional Info</h3>
          </div>
          <div className="column">
            <div
              onClick={props.toggleInfo}
              className="ui right floated circular inverted red button"
            >
              {props.toggle ? "Hide" : "See"}
            </div>
          </div>
        </div>
        {props.toggle && (
          <>
            <div className="ui inverted divider" />
            <div className="ui two column grid">
              <div className="column">
                <div>Your account manager</div>
                <div>Pre-approved Credi Limit</div>
              </div>
              <div className="column">
                <div>
                  <b>Dr. Gulati</b>
                </div>
                <div>
                  <b>$5000,000.00</b>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  toggle: state.toggle
});

export default connect(
  mapStateToProps,
  { toggleInfo }
)(Info);
