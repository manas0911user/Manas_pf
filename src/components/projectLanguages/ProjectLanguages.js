import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
  render() {
    const logos = Array.isArray(this.props.logos) ? this.props.logos : [];

    if (logos.length === 0) return null; // nothing to render safely

    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {logos.map((logo, index) => {
              if (!logo) return null;

              return (
                <OverlayTrigger
                  key={logo.name || logo.skillName || index}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-${index}`}>
                      <strong>{logo.name || logo.skillName || "Tech"}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName || "tech"}
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass || ""}
                      data-inline="false"
                    ></span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
