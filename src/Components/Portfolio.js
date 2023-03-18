import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div> 
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var projects2 = this.props.data.projects2.map(function(projects2){
        return <div key={projects2.title}><h3>{projects2.title}</h3>
          <p className="info"><em className="date">{projects2.date}</em></p>
            <p>{projects2.blurb}</p>
        </div>
      })
    }

    return (
      <div>
      <section id="portfolio">
        
      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Selected Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>

      


   </section>
  {/* <section id="resume">
   <div className="row work">

<div className="three columns header-col">
   <h1><span>Other</span></h1>
</div>

<div className="nine columns main-col">
 projects2
</div>
</div>
   </section>*/}
   </div>
    );
  }
}

export default Portfolio;
