import React from "react";
import { defaults } from "../../assets/Defaults";

const ThreeHighestVotedProjects = props => (
  <React.Fragment>
    <h2>Join These Projects!</h2>
    <div className="row">
      {
        props.threeHighestVotedProjects.map(project => {
          return (
            <div key={project._id} className="col-md-4 highestVotedProjects">
              <div className="card">
                <div className="img-container">
                  {
                    project.image ?
                      (
                        <img
                          className="projectImage"
                          src={project.image}
                          alt="default"
                        />
                      ) :
                      (
                        <img
                          className="projectImage"
                          src={defaults.defaultProjectImage}
                          alt="default"
                        />
                      )
                  }
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
            </div>
          )
        })
      }
    </div>
  </React.Fragment>
);

export default ThreeHighestVotedProjects;
