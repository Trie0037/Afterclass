import React from "react";
import "../../App.css";

const ThreeHighestVotedProjects = props => (
  <React.Fragment>
    <h2>Join these Projects!</h2>
    <div className="row">
      {
        props.threeHighestVotedProjects.map(project => {
          return (
            <div key={project._id} className="col-md-4 highestVotedProjects">
              <div className="card">
                <div className="img-container">
                  <img
                    className="projectImage"
                    src="https://lh3.googleusercontent.com/proxy/FqH48oOUsez5SiX7KGwc1ne2zhTr1-Q89j2AozgNhi-ldjeCy0G1lMpI4wxmjyuDBhitgTStzx2w151mTH5rs40h4hqldQrKl2U9u3zDL5tn7rWDYsI430FxOqFH8M4D6vttDaKHIZSXkA"
                    alt="default"
                  />
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
