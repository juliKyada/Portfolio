'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight-aceternity"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden border-slate-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="cyan"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-tight">
            Juli Kyada
          </h1>
          <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-lg font-medium">
            AI/ML Engineer crafting intelligent solutions through deep learning and interactive experiences.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
