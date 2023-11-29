import Typewriter from "typewriter-effect";

const Hero = (): JSX.Element => {
  return (
    <section id="home-hero">
      <div id="home-hero__container">
        <div className="row">
          <div className="col-6">
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
              <div className="text">
                <p></p>
              </div>
              <div className="button"></div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-cover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
