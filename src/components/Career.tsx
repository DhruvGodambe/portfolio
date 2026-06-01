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
                <h4>Senior Blockchain Developer</h4>
                <h5>Stellar Code · Thane</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lead frontend, backend, and blockchain developers. Deploy and maintain
              production code on AWS EC2 and Lambda with Docker. Solana Rust work
              includes airdrop contracts (10k+ transactions), multi-level commission
              distribution, and arbitrage contracts. Solidity work spans DAO governance
              and treasury, cross-chain payment distribution, and NFT collections.
              Monitor live servers with 5M+ users and real-time on-chain events.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Developer</h4>
                <h5>Element Zero Labs · Pune</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Planned and executed smart contract infrastructure with a team of four —
              off-chain crypto price medianizer, NFT marketplace, staking pools, meta
              transactions, decentralized exchange, Wormhole cross-chain bridge, and
              custodial wallet systems. Launched token IDOs on Pinksale and Gempad.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer</h4>
                <h5>Element Zero Labs · Remote</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Contributed to a DeFi trading protocol backend focused on decentralized
              asset trading and liquidity. Built dynamic React frontends with Redux,
              Redis, and custom hooks. Developed MVC and microservices Node.js
              backends and integrated REST APIs end to end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
