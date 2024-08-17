import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";
import { AiFillFilePdf } from 'react-icons/ai';

const MyApplications = () => {
  const { user, isAuthorized } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const url =
          user && user.role === "Employer"
            ? "http://localhost:4000/api/v1/application/employer/getall"
            : "http://localhost:4000/api/v1/application/jobseeker/getall";

        const response = await axios.get(url, {
          withCredentials: true,
        });
        setApplications(response.data.applications);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch applications");
      }
    };

    if (isAuthorized) {
      fetchApplications();
    } else {
      navigateTo("/");
    }
  }, [isAuthorized, navigateTo, user]);

  const deleteApplication = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== id)
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete application");
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      <div className="container">
        {user && user.role === "Job Seeker" ? (
          <>
            <h1>My Applications</h1>
            {applications.length <= 0 ? (
              <h4>No Applications Found</h4>
            ) : (
              applications.map((element) => (
                <JobSeekerCard
                  element={element}
                  key={element._id}
                  deleteApplication={deleteApplication}
                  openModal={openModal}
                />
              ))
            )}
          </>
        ) : (
          <>
            <h1>Applications From Job Seekers</h1>
            {applications.length <= 0 ? (
              <h4>No Applications Found</h4>
            ) : (
              applications.map((element) => (
                <EmployerCard
                  element={element}
                  key={element._id}
                  openModal={openModal}
                />
              ))
            )}
          </>
        )}
      </div>
      {modalOpen && <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />}
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => (
  <div className="job_seeker_card">
    <div className="detail">
      <p>
        <span>Name:</span> {element.name}
      </p>
      <p>
        <span>Email:</span> {element.email}
      </p>
      <p>
        <span>Phone:</span> {element.phone}
      </p>
      <p>
        <span>Address:</span> {element.address}
      </p>
      <p>
        <span>CoverLetter:</span> {element.coverLetter}
      </p>
    </div>
    <div className="resume">
      <img
        src={element.resume.url}
        alt="resume"
        onClick={() => openModal(element.resume.url)}
      />
    </div>
    <div className="btn_area">
      <button onClick={() => deleteApplication(element._id)}>Delete Application</button>
    </div>
  </div>
);

const EmployerCard = ({ element, openModal }) => (
  <div className="job_seeker_card">
    <div className="detail">
      <p>
        <span>Name:</span> {element.name}
      </p>
      <p>
        <span>Email:</span> {element.email}
      </p>
      <p>
        <span>Phone:</span> {element.phone}
      </p>
      <p>
        <span>Address:</span> {element.address}
      </p>
      <p>
        <span>CoverLetter:</span> {element.coverLetter}
      </p>
    </div>
    <div className="resume">
      {element.resume.url.endsWith('.pdf') ? (
        <AiFillFilePdf
          size={50}
          onClick={() => openModal(element.resume.url)}
          style={{ cursor: 'pointer', color: 'red' }}
        />
      ) : (
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      )}
    </div>
  </div>
);
