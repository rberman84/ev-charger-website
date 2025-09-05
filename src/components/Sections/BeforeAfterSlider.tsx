import { useState } from "react";
import beforeImage from "@/assets/before-installation.jpg";
import afterImage from "@/assets/after-installation.jpg";

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-navy-deep mb-2">See the Transformation</h3>
        <p className="text-silver">Drag the slider to see before and after installation</p>
      </div>
      
      <div className="relative max-w-[800px] mx-auto">
        <img 
          src={beforeImage} 
          alt="Before EV charger installation" 
          className="w-full block rounded-lg"
        />
        <img 
          src={afterImage} 
          alt="After EV charger installation" 
          className="absolute left-0 top-0 w-full rounded-lg"
          style={{
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`
          }}
        />
        
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, hsl(var(--electric-green)) 0%, hsl(var(--electric-green)) ${sliderValue}%, #d1d5db ${sliderValue}%, #d1d5db 100%)`
          }}
        />
        
        <div className="flex justify-between text-sm text-silver mt-2">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;