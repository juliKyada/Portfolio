'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
    return (
        <Card className= "w-full h-[500px] md:h-[600px] lg:h-[700px] bg-neutral-950 relative overflow-hidden flex flex-col md:flex-row border-white/15 rounded-3xl mx-auto my-12">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#f472b6"
            />

            <div className="flex flex-col md:flex-row h-full w-full">
                {/* Left content */}
                <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400 leading-tight">
                        Juli Kyada                        
                    </h1>
                    <p className="mt-6 text-neutral-300 text-lg md:text-xl max-w-lg leading-relaxed">
                        AI/ML Engineer crafting intelligent solutions with cutting-edge technology
                    </p>
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[300px] md:min-h-full">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full absolute inset-0"
                    />
                </div>
            </div>
        </Card>
    )
}
