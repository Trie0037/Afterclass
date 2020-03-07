import React from "react";

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
                          src="https://raw.githubusercontent.com/Trie0037/Afterclass/master/client/public/favicon.png"
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
