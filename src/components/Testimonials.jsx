import React from "react";
import Ali from "../assets//images/avatar-ali.png";
import anisha from "../assets/images/avatar-anisha.png";
import richard from "../assets/images/avatar-richard.png";
import shanai from "../assets/images/avatar-shanai.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>What they've said</h1>
      <div className="cards">
        <div className="card">
          <img src={richard} alt="" />
          <h4>Richard Watts</h4>
          <p>
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </div>
        <div className="card">
          <img src={shanai} alt="" />
          <h4> Shanai Gough</h4>
          <p>
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </p>
        </div>
        <div className="card">
          <img src={anisha} alt="" />
          <h4>Anisha Li</h4>
          <p>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        <div className="card">
          <img src={Ali} alt="" />
          <h4>Ali Bravo</h4>
          <p>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
      </div>
      <div className="button">
        <p>Get started</p>
      </div>
    </div>
  );
};

export default Testimonials;
