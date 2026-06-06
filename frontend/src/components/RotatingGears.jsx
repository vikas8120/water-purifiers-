const gears = [
  { className: "gear gear-lg", style: { top: "14%", left: "-4%" } },
  { className: "gear gear-md reverse", style: { top: "58%", left: "8%" } },
  { className: "gear gear-xl reverse", style: { top: "10%", right: "-6%" } },
  { className: "gear gear-sm", style: { top: "64%", right: "18%" } },
];

export default function RotatingGears() {
  return (
    <div className="gears-layer">
      {gears.map((gear, idx) => (
        <div key={idx} className={gear.className} style={gear.style} />
      ))}
    </div>
  );
}
