import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Join JobZee and unlock a world of opportunities. By creating an account, 
              you gain access to our cutting-edge tools and resources designed to connect you with the best career prospects or top talent.
              Whether you're looking for your next great job or seeking the perfect candidate for your team, 
              our platform is here to make the process seamless and efficient. Sign up now to start exploring personalized job matches, 
              track your applications, 
              and access exclusive features tailored to your career goals.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Discover thousands of tailored job opportunities or attract top talent by posting your job openings.
               Our platform offers seamless job searching and efficient hiring with personalized recommendations and intuitive tools
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Apply for jobs and recruit suitable candidates effortlessly with TalentConnect. Job seekers can find and apply for positions that match their skills and career goals, 
              while employers can post openings and efficiently recruit top talent using our advanced matching tools and streamlined application process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;