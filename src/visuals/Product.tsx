import { motion, useReducedMotion } from "framer-motion";
import manifest from "../../public/assets/manifest.json";
export function Product({
  name,
  size = 90,
}: {
  name: keyof typeof manifest;
  size?: number;
}) {
  const a = manifest[name];
  const reduced = useReducedMotion();
  return a.path ? (
    <motion.img
      layoutId={!reduced && name === "fabric" ? "fabric-mark" : undefined}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="product"
      src={import.meta.env.BASE_URL + a.path}
      alt={a.label}
      style={{ width: size, height: size }}
    />
  ) : (
    <span className="wordmark">{a.label}</span>
  );
}
