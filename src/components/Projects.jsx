import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, TerminalSquare } from 'lucide-react';

const projects = [
    {
        title: 'Metadata-Driven AutoML Agent',
        date: 'Jan 2026 – Present',
        description: 'Designed an AI agent that selects ML pipelines based on dataset meta-features (dimensionality, class imbalance, missing value ratio). Implemented rule-based decision frameworks dynamically choosing preprocessing and scaling. Optimizing decision strategies to reduce brute-force search cost.',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'AutoML'],
        links: [],
        accent: 'border-primary/30'
    },
    {
        title: 'Multi-Output Facial Analysis System',
        date: 'May 2025 – July 2025',
        description: 'Developed CNN-based multi-output models predicting age, gender, ethnicity, and emotion on UTKFace/FER2019. Integrated a unified Streamlit interface supporting webcam and image uploads. Deployed live on Hugging Face Spaces.',
        tags: ['TensorFlow', 'OpenCV', 'Streamlit', 'Deep Learning'],
        links: [
            { name: 'Live Demo', url: 'https://huggingface.co/spaces/JuliKyada/Auto-face-labelling', icon: <Globe size={18} /> },
            { name: 'GitHub', url: 'https://github.com/juliKyada/Age-Gender-Detection', icon: <Github size={18} /> }
        ],
        accent: 'border-accent/30'
    },
    {
        title: 'Amazon Price Tracker & Forecasting',
        date: 'Dec 2023 – Feb 2024',
        description: 'Built automated web scraping pipeline to collect Amazon pricing. Engineered time-series features and trained regression models to forecast future prices, alongside rule-based alert logic predicting proximity to historical minimums.',
        tags: ['Python', 'BeautifulSoup', 'Time-Series', 'Predictive Modeling'],
        links: [],
        accent: 'border-secondary/30'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-display font-bold mb-12 flex items-center gap-3 text-white">
                    <TerminalSquare className="text-violet-300 w-10 h-10" />
                    Featured Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-neutral-900/70 border border-white/15 rounded-2xl p-8 flex flex-col h-full hover:-translate-y-3 hover:border-violet-400/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="text-xs text-neutral-400 font-medium tracking-wider mb-3">
                                {project.date}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-display text-white">
                                {project.title}
                            </h3>
                            <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-black border border-pink-300/20 rounded-full text-neutral-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.links && project.links.length > 0 && (
                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    {project.links.map(link => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-pink-300 group transition-colors"
                                        >
                                            <span className="group-hover:-translate-y-0.5 transition-transform">{link.icon}</span>
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
