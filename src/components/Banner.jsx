import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
export function Banner({ title, subtitle, backgroundImage, height = 'md', overlay = true }) {
    const heightClasses = {
        sm: 'h-64',
        md: 'h-80',
        lg: 'h-96'
    };
    return (<div className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (<div className="absolute inset-0 z-0">
          <ImageWithFallback src={backgroundImage} alt="Banner background" className="w-full h-full object-cover"/>
          {overlay && <div className="absolute inset-0 bg-black/50"></div>}
        </div>)}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {title}
        </motion.h1>
        
        {subtitle && (<motion.p className="text-xl md:text-2xl text-white/90" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {subtitle}
          </motion.p>)}
      </div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (<motion.div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }} animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
            }} transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
            }}/>))}
      </div>
    </div>);
}
