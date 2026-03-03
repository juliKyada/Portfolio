import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-display font-bold mb-12 text-white">
                    Profile Context
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div 
                        className="md:col-span-2 bg-neutral-900/70 border border-white/15 rounded-2xl p-8 row-span-2 flex flex-col justify-center relative overflow-hidden group"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-violet-500/15"></div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">The Engineering Journey</h3>
                        <p className="text-white text-lg leading-relaxed mb-6">
                            I am an AI/ML undergraduate with extensive experience in architecting deep learning solutions, multi-output computer vision systems, and robust real-time model deployment strategies.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Currently, I am developing a cutting-edge <strong>metadata-driven AI agent</strong> that dynamically selects optimal machine learning pipelines using dataset meta-features and advanced rule-based decision strategies.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-neutral-900/70 border border-white/15 rounded-2xl p-6 group hover:border-pink-400/40 transition-colors"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Brain className="text-pink-300 mb-4 w-10 h-10" />
                        <h4 className="text-xl font-medium mb-2 text-white">Computer Vision</h4>
                        <p className="text-sm text-gray-400">Building precise multi-output models and real-time perception systems.</p>
                    </motion.div>

                    <motion.div 
                        className="bg-neutral-900/70 border border-white/15 rounded-2xl p-6 group hover:border-violet-400/40 transition-colors ml-0 md:-ml-4 mt-0 md:mt-4 z-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Cpu className="text-violet-300 mb-4 w-10 h-10" />
                        <h4 className="text-xl font-medium mb-2 text-white">AutoML Agents</h4>
                        <p className="text-sm text-gray-400">Engineering meta-feature driven, intelligent pipeline selectors.</p>
                    </motion.div>

                    <motion.div 
                        className="md:col-span-3 bg-neutral-900/70 border border-white/15 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-pink-500/15 rounded-lg border border-pink-300/20">
                                <Rocket className="text-pink-300 w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white">End-to-End Execution</h4>
                                <p className="text-sm text-gray-300">From raw data preprocessing to highly optimized model inference deployment.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
