import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Education & Pubs */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-12"
                >
                    {/* Education */}
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3 text-white">
                            <GraduationCap className="text-pink-300" />
                            Education
                        </h2>
                        <div className="bg-neutral-900/70 border border-white/15 rounded-2xl p-8 relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-violet-500/15 transition-all duration-500"></div>
                            <h3 className="text-2xl font-bold mb-2 text-white">B.Tech in Artificial Intelligence and Machine Learning</h3>
                            <h4 className="text-lg text-pink-200 mb-4">Charotar University Of Science & Technology</h4>
                            <p className="text-neutral-400">Gujarat, India | July 2023 – May 2027</p>
                        </div>
                    </div>

                    {/* Publications */}
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3 text-white">
                            <BookOpen className="text-violet-300" />
                            Publications
                        </h2>
                        <div className="bg-neutral-900/70 border border-white/15 rounded-2xl p-8 relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-pink-500/15 transition-all duration-500"></div>
                            <h3 className="text-xl font-bold mb-2 text-white leading-tight">Automatic Facial Labeling Using Semi-Supervised Learning</h3>
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-violet-200 font-medium">Conference Submission (Springer CCIS) | 2025</h4>
                                <span className="px-3 py-1 bg-pink-500/10 rounded-full text-xs text-pink-200 border border-pink-300/30">Submitted</span>
                            </div>
                            <p className="text-neutral-400">Proposed a semi-supervised learning approach using pseudo-labeling for multi-attribute facial classification integrating pre-trained CNN models. Analyzed performance improvements using class-wise evaluation metrics.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3 text-white">
                        <Award className="text-pink-300" />
                        Certifications
                    </h2>
                    <div className="bg-neutral-900/70 border border-white/15 rounded-2xl p-8 h-full">
                        <ul className="space-y-6">
                            {[
                                { provider: 'Coursera', name: 'Neural Networks and Deep Learning' },
                                { provider: 'Coursera', name: 'Improving Deep NN: Hyperparameter Tuning' },
                                { provider: 'Coursera', name: 'Structuring Machine Learning Projects' },
                                { provider: 'Coursera', name: 'Machine Learning with Python (IBM)' },
                                { provider: 'Coursera', name: 'AWS Cloud Practitioner Essentials' },
                                { provider: 'OpenCV', name: 'Deep Learning Bootcamp' },
                                { provider: 'NPTEL', name: 'Data Structures and Algorithms' },
                                { provider: 'NPTEL', name: 'Database Management Systems' },
                                { provider: 'NPTEL', name: 'Introduction to Machine Learning' },
                                { provider: 'Kaggle', name: 'Intro to Machine Learning' },
                            ].map((cert, i) => (
                                <li key={i} className="flex flex-col border-b border-white/10 pb-4 last:border-0 last:pb-0 group">
                                    <span className="text-xs text-pink-300 font-bold tracking-wider uppercase mb-1">{cert.provider}</span>
                                    <span className="text-neutral-300 font-medium group-hover:text-violet-200 transition-colors">{cert.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
