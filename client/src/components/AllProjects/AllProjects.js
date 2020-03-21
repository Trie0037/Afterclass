import React from "react";
import { Link } from "react-router-dom";
import { defaults } from "../../assets/Defaults";

const AllProjects = props => (
  <React.Fragment>
    <h2>All Submitted Projects:</h2>
    <div className="row">
      {props.projects.map(project => {
        return (
          <div key={project._id} className="col-md-4 allSubmittedProjects">
            <Link
              to={{
                pathname: "/displayprojectdetails/" + project._id,
                state: [
                  project.title,
                  project.description,
                  project.image,
                  project._id,
                  props.loggedIn,
                  props.userId
                ]
              }}
            >
              <div className="card">
                <div className="img-container">
                  {project.image ? (
                    <img
                      className="projectImage"
                      src={project.image}
                      alt="default"
                    />
                  ) : (
                    <img
                      className="projectImage"
                      src={defaults.defaultProjectImage}
                      alt="default"
                    />
                  )}
                </div>
                <div className="content-unordered-list">
                  <ul>
                    <li>
                      <strong>Title:</strong> {project.title}
                    </li>
                    <li>
                      <strong>Description:</strong> {project.description}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>{" "}
          </div>
        );
      })}
    </div>
  </React.Fragment>
);

export default AllProjects;
