import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { category: 'Programming Languages', tags: ['Python', 'SQL', 'C++'] },
    { category: 'Machine Learning', tags: ['Supervised Learning', 'CNNs', 'Multi-output Models', 'Time-Series Forecasting'] },
    { category: 'Frameworks', tags: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn'] },
    { category: 'Tools', tags: ['OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Git', 'Streamlit', 'Hugging Face'] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-display font-bold mb-12 text-white">
                    Technical Arsenal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            className="bg-neutral-900/70 border border-white/15 rounded-2xl p-6 hover:-translate-y-2 hover:border-pink-400/40 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 text-sm font-medium bg-black border border-white/20 text-neutral-300 rounded-full hover:border-violet-300/50 hover:text-pink-200 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
