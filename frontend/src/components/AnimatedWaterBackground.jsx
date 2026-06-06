import BubbleParticles from "./BubbleParticles";
import RotatingGears from "./RotatingGears";

export default function AnimatedWaterBackground() {
  return (
    <div className="water-depth" aria-hidden="true">
      <div className="water-fill-layer" />
      <div className="water-caustics" />
      <div className="water-reflection" />
      <div className="water-surface top" />
      <div className="water-surface mid" />
      <div className="water-surface low" />
      <div className="wave-layer one" />
      <div className="wave-layer two" />
      <div className="wave-layer three" />
      <RotatingGears />
      <BubbleParticles />
    </div>
  );
}
