import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import type { Movie } from "@/data/movies";
import MoviePoster from "@/components/MoviePoster";

interface ResultListProps {
  movies: Movie[];
  onRestart: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const ResultList = ({ movies, onRestart }: ResultListProps) => {
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="mb-2 text-3xl font-light tracking-wider text-foreground"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        今日片单
      </motion.h2>
      <motion.p
        className="mb-12 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        为你精心挑选的三部电影
      </motion.p>

      <motion.div
        className="grid w-full max-w-3xl gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {movies.map((movie, i) => (
          <motion.div
            key={movie.id}
            variants={item}
            className="group flex gap-6 overflow-hidden rounded-2xl bg-card p-4 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
          >
            {/* Poster */}
            <MoviePoster
              src={movie.poster}
              title={movie.title}
              className="w-28 flex-shrink-0 rounded-xl"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            />

            {/* Info */}
            <div className="flex flex-1 flex-col justify-center space-y-2 py-1">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-medium text-muted-foreground/60">
                  #{i + 1}
                </span>
                <h3 className="text-xl font-semibold tracking-wide text-card-foreground">
                  {movie.title}
                </h3>
                <span className="text-sm text-muted-foreground">⭐ {movie.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {movie.titleEn} · {movie.year} · {movie.genre}
              </p>
              <p className="text-sm leading-relaxed text-card-foreground/70">
                {movie.conflict}
              </p>
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                "{movie.recommendation}"
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        onClick={onRestart}
        className="mt-12 flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm text-muted-foreground shadow-card transition-all duration-200 hover:shadow-card-hover hover:text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <RotateCcw className="h-4 w-4" />
        重新开始
      </motion.button>
    </motion.div>
  );
};

export default ResultList;
