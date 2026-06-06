const bubbles = Array.from({ length: 16 }, (_, index) => index + 1);

export default function BubbleParticles() {
  return (
    <div className="bubble-field">
      {bubbles.map((bubble) => (
        <span key={bubble} className="bubble" style={{ "--bubble-id": bubble }} />
      ))}
    </div>
  );
}
