import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center pt-20" id="hero">
            <Card className="w-full h-auto min-h-[600px] bg-black/40 relative overflow-hidden flex flex-col md:flex-row border-white/10 rounded-3xl backdrop-blur-md">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />

                {/* Left content */}
                <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/30">
                            <Sparkles size={16} className="text-primary" />
                            <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">AI / ML Engineer</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Building Intelligent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
                            Systems & Models.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        I'm <span className="text-white font-medium">Juli Kyada</span>, focused on deep learning, computer vision, and real-time model deployment. Bridging the gap between theory and high-performance ML pipelines.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#projects" className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-background font-semibold rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,242,254,0.5)] flex items-center gap-2">
                            View My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="mailto:julikyada293@gmail.com" className="px-6 md:px-8 py-3 md:py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-colors border-white/20">
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Right content - Spline 3D Scene */}
                <div className="flex-1 relative min-h-[400px] md:min-h-full w-full">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full absolute inset-0"
                    />
                </div>
            </Card>
        </section>
    );
};

export default Hero;
