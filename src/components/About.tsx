import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a fullstack developer with a specialization in blockchain. Most of
          my experience comes from implementing smart contracts, writing unit
          test cases, and deploying applications to production. I build backend
          systems in Node.js and Rust with CI/CD pipelines and containerize them
          with Docker. I have launched and maintained production applications
          serving 5M+ users — from Solana and Solidity smart contracts to
          fullstack dapps on AWS.
        </p>
      </div>
    </div>
  );
};

export default About;
