import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Backend and DevOps Engineer with 3+ years of experience building
          and operating production systems at scale. I specialize in cloud
          infrastructure on AWS (EC2, ECS, Fargate), CI/CD pipelines with Jenkins
          and GitHub Actions, and containerized deployments with Docker. I have
          deployed systems serving 5M+ concurrent users, improved application
          uptime from 50% to 85%, and set up real-time observability with Grafana
          and Prometheus. My background spans the full lifecycle — from API
          development to infrastructure provisioning and production monitoring.
        </p>
      </div>
    </div>
  );
};

export default About;
