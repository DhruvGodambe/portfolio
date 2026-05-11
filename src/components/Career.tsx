import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Backend & DevOps Engineer</h4>
                <h5>Stellar Code · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lead a team of backend and DevOps engineers. Manage AWS infrastructure
              (EC2, ECS, Fargate, Lambda) and Kubernetes clusters. Built CI/CD
              pipelines with Jenkins and GitHub Actions. Set up Grafana and Prometheus
              for real-time monitoring. Improved application uptime from 50% to 85%
              across systems serving 5M+ concurrent users.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer</h4>
                <h5>Element Zero Labs · Pune</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <p>
              Built Python and Node.js backend services, REST APIs, webhooks, and
              caching layers with Redis. Developed microservices architecture,
              integrated GraphQL APIs with frontend systems, and worked on payment
              systems, decentralized systems, and custodial wallet infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
