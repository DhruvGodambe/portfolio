# CV -- Alex Chen

**Location:** Thane, Maharashtra, India
**Email:** dhruvrockstone@gmail.com
**LinkedIn:** linkedin.com/in/dhruvgodambe
**GitHub:** github.com/DhruvGodambe

## Professional Summary

I am a Backend and DevOps Engineer with 3+ years of experience building and operating production systems at scale. I specialize in cloud infrastructure on AWS (EC2, ECS, Fargate), CI/CD pipelines with Jenkins and GitHub Actions, and containerized deployments with Docker. I have hands-on experience with Linux administration, observability tooling (Grafana, Prometheus), and microservices development with Node.js and Python — deploying systems that serve 5M+ concurrent users. My background spans the full lifecycle from API development to infrastructure
provisioning and production monitoring.

## Work Experience

### Stellar code -- Remote
**Lead Backend & Devops Engineer**
2024 - current

- Lead a team of backend and DevOps engineers. I review pull requests by developers and merge with production code. I set up and manage AWS infrastructure including EC2 instances and ECS containers for deployment. I
integrate and deploy the final code, monitor and maintain it in production environments.
- Implemented AWS Secret Manager service to securely save private keys and load them into the code only during runtime.
- Built automation scripts in Bash and Python for infrastructure management. Managed version control workflows using Git. Monitored and maintained live servers handling 5M+ concurrent users.
- Deployed and managed applications on AWS EC2, ECS, Fargate and Lambda. Configured load balancing and auto-scaling for high availability. This increased the uptime of application from 50% to 85%.
- Dockerized the backend code and hosted it on the kubernetes cluster on AWS. Used Jenkins and Github actions to set up CI/CD pipelines. Created a sandbox environment for dev testing and QA. Improved the load time of APIs by optimizing the database queries.
- Setup Grafana and Prometheus for real time monitoring of the system

### Element Zero Labs -- Pune, India
**Fullstack Developer**
2021-2023

- Worked with a team of 4 backend engineers. Planned and executed backend infrastructure for products
including API services, payment systems, decentralized systems, and custodial wallet systems.
- Built Python and Node.js backend services. Implemented REST APIs and webhooks. Developed caching layers
using Redis. Managed database operations and query optimization.
- Managed version control using Git. Automated deployment processes with Python scripts. Worked with devops
engineer to containerize applications using Docker.
- Built backend systems using Python with MVC framework architecture. Developed microservices-based
backend with Node.js. Implemented real-time data processing and state management.
- Integrated backend GraphQL APIs with frontend systems. Wrote automated test cases and deployment scripts.
- Maintained code quality through code reviews and Git workflows.

## Projects

- **FraudShield** (Open Source) -- Real-time fraud detection framework. Kafka Streams + feature store + model serving. 500+ GitHub stars
- **LLM Eval Toolkit** (Open Source) -- Evaluation framework for LLM applications. Supports custom metrics, regression testing, CI integration

- **Referral model with multi level commission** (Node.js, Python, AWS) -- Built an app with referral model that pays out commissions based on a 20 levels compensation plan. The commission distribution was built on the solana blockchain. The project has been live on the mainnet since july 2024.
- **Social Media Platform** (Node.js, React.js, MongoDB, AWS) -- Built a social media platform where users can make posts and groups. users can like, comment and share post. Implement Websockets for real time posting and messaging. Built a secure Admin panel for monitoring and reporting of the app.

- **Github Actions Pipeline with AWS ECS** (Github, AWS ECS, AWS Fargate, AWS ECR) -- I introduced the first pipeline workflow in my organization to create a docker image on a push to the main branch. The pipeline will run the test and build command before creating a new docker image and storing it in ECR. The ArgoCD will then monitor for new images, and when a new image is detected it would trigger the deployment of the image on the AWS ECS configuration.

## Education

- BE Electronics Engineering, Mumbai University (2018 - 2024)

## Skills

- **Devops:** Docker, Kubernetes, Github Actions, Jenkins, Linux, Bash, Shell scripting, ArgoCD
- **Fullstack:** Node.js, React.js, MongoDB, MySQL, git, cursor, claude
- **Monitoring:** Prometheus, Grafana, AWS CloudWatch
- **Infra:** Kubernetes, PostgreSQL, AWS
- **Languages:** Python, Javascript, TypeScript, SQL, Rust
