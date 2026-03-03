import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-display font-bold mb-12 flex items-center gap-3 text-white">
                    <Briefcase className="text-pink-300 w-10 h-10" />
                    Experience
                </h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-8 pl-8 md:pl-12 py-4">
                    {/* Timeline Dot */}
                    <div className="absolute w-4 h-4 bg-pink-300 rounded-full -left-[9px] top-6 shadow-[0_0_15px_rgba(244,114,182,0.8)]" />

                    <motion.div
                        className="bg-neutral-900/70 border border-white/15 rounded-2xl p-8 relative hover:border-pink-400/40 transition-colors"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold font-display text-white">Data Science Intern</h3>
                                <p className="text-lg text-pink-200 font-medium mt-1">NullClass • Remote</p>
                            </div>
                            <span className="text-sm px-4 py-2 bg-black border border-pink-300/30 rounded-full mt-4 md:mt-0 whitespace-nowrap text-neutral-300">
                                Apr 2024 – June 2024
                            </span>
                        </div>

                        <ul className="space-y-3 text-neutral-400 mb-8 list-disc list-inside marker:text-pink-300">
                            <li>Researched and optimized CNN architectures for multi-output facial classification tasks.</li>
                            <li>Performed hyperparameter tuning and comparative experimentation for improved performance.</li>
                            <li>Enhanced evaluation robustness using precision, recall, F1-score, and class-wise metrics.</li>
                            <li>Deployed model as an interactive web application using Streamlit.</li>
                            <li>Collaborated with mentors on debugging and performance improvements.</li>
                        </ul>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                            <a href="drive.google.com/file/d/1UFVat7qVh5oHkaby7lETgUeaM1uzgbnJ/view?usp=drivelink" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-pink-300 transition-colors">
                                <ExternalLink size={16} className="text-pink-300" />
                                Experience Letter
                            </a>
                            <a href="drive.google.com/file/d/1NfX8PFAp-JHhwoSHQEa9ghWvlgnQsWUZ/view?usp=drivelink" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-violet-300 transition-colors">
                                <ExternalLink size={16} className="text-violet-300" />
                                Letter of Recommendation
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
