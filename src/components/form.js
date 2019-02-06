import React, { Component } from "react";
import { WITHDRAW, DEPOSIT } from "../constant";
import { connect } from "react-redux";
import { depositAmount, withdrawAmount } from "../actions/actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      err1: false,
      err2: false,
      err3: false,
      err4: false
    };
  }

  handleChange = e => {
    const { err1, err2, err3, err4 } = this.state;
    if (err1) this.setState({ err1: false });
    if (err2) this.setState({ err2: false });
    if (err3) this.setState({ err3: false });
    if (err4) this.setState({ err4: false });
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    const amount = this.state.value;
    if (this.checkIt(amount, e)) {
      switch (e.target.dataset.type) {
        case DEPOSIT:
          this.props.depositAmount(amount);
          break;
        case WITHDRAW:
          this.props.withdrawAmount(amount);
          break;
        default:
          console.log("INVALID_CHOICE");
      }
    }
    console.log(this.props);
    this.setState({ value: "" });
  };

  checkIt = (amount, e) => {
    if (amount === "") {
      this.setState({ err1: true });
      return false;
    } else if (isNaN(amount)) {
      this.setState({ err2: true });
      return false;
    } else if (amount < 0) {
      this.setState({ err3: true });
      return false;
    } else if (
      amount > this.props.balance &&
      e.target.dataset.type === WITHDRAW
    ) {
      this.setState({ err4: true });
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { err1, err2, err3, err4 } = this.state;
    return (
      <div className="ui centered grid">
        <div className="ten wide column">
          <div className="ui inverted center aligned segment raised">
            <h1>Redux Bank</h1>
            <h2 className="ui grey header">
              Your Balance is : ${this.props.balance}
            </h2>
            <div className="ui form">
              <div className="field">
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Enter Amount in $"
                  type="text"
                />
                {err1 && (
                  <div className="ui pointing red label">
                    Please enter a value
                  </div>
                )}
                {err2 && (
                  <div className="ui pointing red label">
                    Please enter valid input
                  </div>
                )}
                {err3 && (
                  <div className="ui pointing red label">
                    Please enter positive value
                  </div>
                )}
                {err4 && (
                  <div className="ui pointing red label">
                    Balance insufficient
                  </div>
                )}
              </div>
              <div className="ui two buttons">
                <div
                  onClick={this.handleClick}
                  data-type={DEPOSIT}
                  className="ui primary button"
                >
                  Deposit
                </div>
                <div
                  onClick={this.handleClick}
                  data-type={WITHDRAW}
                  className="ui button"
                >
                  Withdraw
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { balance: state.balance };
};

export default connect(
  mapStateToProps,
  { depositAmount, withdrawAmount }
)(Form);
