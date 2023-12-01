  import Typewriter from "typewriter-effect";
  import Fade from "react-reveal/Fade";

  type IbuttonHero = {
    label: string;
    id: string | null;
  };

  const Hero = (): JSX.Element => {
    const buttonHero: IbuttonHero[] = [
      { label: "Download my CV", id: "btn1" },
      { label: "See my realisations", id: "btn2" },
    ];

    return (
      <section id="home-hero">
        <div id="home-hero__container">
          <div className="row gx-4">
            <Fade left>
              <div className="col-md-9 col-lg-6">
                <div className="section-header">
                  <div className="title">
                    <h1>
                      {" "}
                      Welcome to MY <span>PORTFOLIO</span>
                    </h1>
                  </div>
                  <div className="subtitle mt-3">
                    <h3>
                      <Typewriter
                        options={{
                          loop: true, // Active la boucle
                        }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("I'm a Javascript Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I'm fascinated by new technologies")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I search best IT solutions")
                            .start();
                        }}
                      />
                    </h3>
                  </div>
                  <div className="text mt-4">
                    <p>
                      I'm a Javascript Developer, I am looking for efficiency,
                      effectiveness of all my programs , I'm using mostly for
                      dynamic Web App <b> REACT JS and NEXT JS</b> for frontend
                      and <b>NODE JS </b> for serverside{" "}
                    </p>
                  </div>
                  <div className="button mt-4">
                    {buttonHero.map((item, index) => (
                      <div key={index}>
                        <button className="btn" id={`${item.id}`}>
                          {item.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="d-none d-md-flex col-md-3 col-lg-6">
                <div className="section-cover">
                  <img src="/images/MERN_couv.jpg" alt="" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
