const About = () :JSX.Element => {
    return (
        <section id="home-about">
            <div id="home-about__container">
                  <div className="row">
                     <div className="col-5">
                         <div className="section-cover">
                              <img src="/images/p1.jpg" alt="" />
                         </div>
                     </div>
                     <div className="col-6">
                         <div className="section-header">
                             <div className="subtitle">
                                 <h4></h4>
                             </div>
                             <div className="title"></div>
                             <div className="text"></div>
                             <div className="button"></div>
                         </div>
                     </div>
                  </div>
            </div>
        </section>
    );
};

export default About;