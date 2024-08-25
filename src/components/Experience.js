import React, { Component } from "react";

class Experience extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
    }
      
    
    return (
      <section id="experience">
        <div className="col-md-12">
          <h1 class="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
            </h1>
          <div className="row mx-auto mb-5 col-6">
            <div className="col">
              <h2 class="company">Creative Circle Media Solutions</h2>
              <h3 class="year">2022-Ongoing</h3>
            </div>
              <div className="col">
                <div className="card" style={{background: "transparent"}}>
                    <div className="card-header" style={{background: "#e1cfa2"}}>
                      <span
                        className="iconify"
                        data-icon="pixelarticons:downasaur" data-width="40" data-height="40"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                    </div>
                  <div className="card-body font-trebuchet"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                  >
                    I've spent over the last two years working at Creative Circle. This was my first experience at a "real" job post college. Here I use php and SQL for backend / data management and Javascript, HTML, CSS, Bootstrap for frontend display. I spend my time building numerous websites and making improvments to our "core" software repo which supports our web CMS and numerous "Apps" used in our websites.   
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
