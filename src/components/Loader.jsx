import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Fixed typo "progrss" → "progress"

  return (
    <Html center>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span className="canvas-load"></span>
        <p style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 800, marginTop: 80 }}>
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
