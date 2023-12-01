import dataHelper from "@/helpers/dataHelper";

const TechnoHero = (): JSX.Element => {
  const { MERNIcon } = dataHelper();
  return (
    <section id="techno-hero">
      <div id="techno-hero__container">
        <div className="section-header">
          <div className="subtitle">
            <div className="spinner"></div>
            <h4>Stack</h4>
          </div>
          <div className="title">
            <h3>
              I generally use <span>MERN Stack </span>for fullstack Web
              Application
            </h3>
          </div>
          <div className="text mt-4">
            <p>
              The combination of{" "}
              <b>
                <span>
                  MERN (MongoDB, Express.js, React.js, Node.js) with Next.js
                </span>
              </b>{" "}
              offers smooth integration between the server and client side, a
              flexible database with MongoDB, optimized responsiveness thanks to
              React.js, and enhanced server-side rendering (SSR) with Next.js.
              This approach unifies development, simplifying state management
              with Redux or React context, and enables the creation of
              responsive, scalable, and optimized web applications.
            </p>
          </div>
        </div>
        <div className="section-langage">
          {MERNIcon.map((item, index) => (
            <div className="box-langage" key={index}>
              <div className="langage-name">
                <h3>{item.label}</h3>
              </div>
              <div className="langage-svg">
                <img src={item.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnoHero;
