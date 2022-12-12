import React from "react";

const Working = () => {
  return (
    <div className="working">
      <h3 className="open-campaigns">✨How FundMe Works</h3>
      <div className="working-items">
        <div className="working-item">
          <img
            className="working-image"
            src="https://cdn-icons-png.flaticon.com/128/3662/3662580.png"
          ></img>
          <div>
            <p className="working-item1-title">
              Create a campaign for Fund Raising
            </p>
            <p className="working-text">
              It takes only 2 minutes.Just enter few details about the funds you
              are raising for.
            </p>
          </div>
        </div>
        <div className="working-item">
          <img
            className="working-image"
            src="https://cdn-icons-png.flaticon.com/512/2145/2145158.png"
          ></img>
          <div>
            <p className="working-item2-title">Request and Withdraw Funds</p>
            <p className="working-text">
              The funds raised can be withdrawn directly to the recipient when
              50% of approvers approve of the withdrawal request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Working;
