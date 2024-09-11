import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="left-about">
        <h1>What's different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="right-about">
        <div className="box">
          <div className="title">
            <h3>01</h3>
            <h4>Track company-wide progress</h4>
          </div>
          <p className="para">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="box">
          <div className="title">
            <h3>02</h3>
            <h4>Advanced built-in reports</h4>
          </div>
          <p className="para" >
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="box">
          <div className="title">
            <h3>03</h3>
            <h4>Everything you need in one place</h4>
          </div>
          <p className="para" >
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
