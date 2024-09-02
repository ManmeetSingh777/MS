import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './FStack.css';

const FStack = ({ items, offset = 20, scaleFactor = 0.10 }) => {
  const [fs, setfs] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setfs((prevfs) => {
        const newArray = [...prevfs];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="f-stack">
      {fs.map((f, index) => (
        <motion.div
          key={f.id}
          className="f"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: fs.length - index,
          }}
        >
          <div className="f-content">{f.content}</div>
          <div className="f-footer">
            <p className="f-name">{f.name}</p>
            <p className="f-designation">{f.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FStack;
