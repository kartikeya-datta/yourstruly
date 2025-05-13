"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React", "Redux", "JavaScript", "A/B Testing", "Responsive UI Design",
      "Chart.js", "WebSocket", "AWS AppSync"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot", "Python", "Django REST Framework", "RESTful APIs",
      "Asynchronous Processing", "Modular Architecture", "RabbitMQ", "AWS SNS"
    ]
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Database Optimization",
      "Indexing", "Partitioning", "Secure Data Handling"
    ]
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      "AWS CodePipeline", "Azure DevOps", "Docker", "Auto-scaling",
      "Load Balancing", "Rollback Strategies", "Monitoring & Logging"
    ]
  },
  {
    title: "Cloud Platforms",
    skills: [
      "AWS (S3, RDS, App Services, SNS)", "Azure (App Services, SQL, DevOps)", "Google Cloud"
    ]
  },
  {
    title: "Security",
    skills: [
      "JWT Authentication", "Role-Based Access Control", "AES Encryption",
      "OAuth2", "Data Compliance"
    ]
  },
  {
    title: "Testing",
    skills: [
      "PyTest", "React Testing Library", "Unit Testing", "Integration Testing", "95%+ Test Coverage"
    ]
  },
  {
    title: "Collaboration & Workflow",
    skills: [
      "Agile/Scrum", "Cross-functional Teams", "Requirement Gathering", "Stakeholder Alignment"
    ]
  },
  {
    title: "Languages & IDEs",
    skills: [
      "Python", "Java", "JavaScript", "TypeScript", "Swift", "C", "Bash",
      "Django", "TailwindCSS", "Sass", "Next.js", "Node.js", "Express.js",
      "HTML5", "CSS3", "PyCharm", "Eclipse", "NetBeans"
    ]
  },
  {
    title: "Big Data Tools",
    skills: ["Hadoop", "PySpark", "Kafka"]
  },
  {
    title: "Machine Learning / Deep Learning",
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "OpenCV", "Jupyter Notebook"]
  },
  {
    title: "Visualization Tools",
    skills: ["MATLAB", "Tableau", "Power BI"]
  },
  {
    title: "Development Tools",
    skills: ["VS Code", "Jupyter", "Colab", "Postman", "Figma"]
  }
];

export default function SkillsGrid() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
      >
        My Technical Skills
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-md"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-white border border-primary/20"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
