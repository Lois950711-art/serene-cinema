import { useState } from "react";
import { motion } from "framer-motion";

interface MoodInputProps {
  onSubmit: (mood: string) => void;
}

const MoodInput = ({ onSubmit }: MoodInputProps) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit(value.trim());
    }
  };

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.p
        className="mb-10 text-lg font-light tracking-wide text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        今天想来点什么感觉的？
      </motion.p>

      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="想看点公路片..."
          autoFocus
          className="w-full border-b border-border bg-transparent px-2 py-4 text-center text-xl font-light tracking-wider text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/40 focus:border-foreground"
        />
      </motion.div>

      <motion.p
        className="mt-6 text-xs text-muted-foreground/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        按下回车，开始探索
      </motion.p>
    </motion.div>
  );
};

export default MoodInput;
