import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import type { Movie } from "@/data/movies";

interface SwipeCardsProps {
  movies: Movie[];
  onComplete: (liked: Movie[]) => void;
}

const SWIPE_THRESHOLD = 120;
const MAX_CARDS = 5;

const MovieCard = ({
  movie,
  onSwipe,
  isTop,
  exitDirection,
}: {
  movie: Movie;
  onSwipe: (dir: "left" | "right") => void;
  isTop: boolean;
  exitDirection: "left" | "right";
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-18, 18]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0.5, 1, 1, 1, 0.5]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > SWIPE_THRESHOLD) {
      onSwipe("right");
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      onSwipe("left");
    }
  };

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        x: exitDirection === "right" ? 400 : -400,
        rotate: exitDirection === "right" ? 20 : -20,
        opacity: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-[340px] cursor-grab overflow-hidden rounded-2xl bg-card shadow-elevated active:cursor-grabbing"
        style={{ x, rotate, opacity }}
        drag={isTop ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        onDragEnd={handleDragEnd}
      >
        {/* Swipe indicators */}
        <motion.div
          className="absolute left-6 top-6 z-10 rounded-lg border-2 border-heart px-3 py-1 text-sm font-semibold text-heart"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>
        <motion.div
          className="absolute right-6 top-6 z-10 rounded-lg border-2 border-muted-foreground px-3 py-1 text-sm font-semibold text-muted-foreground"
          style={{ opacity: nopeOpacity }}
        >
          NOPE
        </motion.div>

        {/* Poster */}
        <div className="aspect-[2/3] w-full overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* Info */}
        <div className="space-y-2 p-5">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold tracking-wide text-card-foreground">
              {movie.title}
            </h3>
            <span className="text-sm text-muted-foreground">
              ⭐ {movie.rating}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{movie.titleEn} · {movie.year} · {movie.genre}</p>
          <p className="text-sm leading-relaxed text-card-foreground/80">{movie.conflict}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SwipeCards = ({ movies, onComplete }: SwipeCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<Movie[]>([]);
  const [exitDir, setExitDir] = useState<"left" | "right">("left");
  const cardsToShow = movies.slice(0, MAX_CARDS);

  const handleSwipe = (dir: "left" | "right") => {
    setExitDir(dir);
    const movie = cardsToShow[currentIndex];

    const newLiked = dir === "right" ? [...liked, movie] : liked;
    if (dir === "right") setLiked(newLiked);

    const nextIndex = currentIndex + 1;
    if (nextIndex >= MAX_CARDS) {
      // Select top 3 liked, or fill from shown cards
      const result = newLiked.length >= 3
        ? newLiked.slice(0, 3)
        : [...newLiked, ...cardsToShow.filter((m) => !newLiked.includes(m))].slice(0, 3);
      setTimeout(() => onComplete(result), 300);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const progress = ((currentIndex) / MAX_CARDS) * 100;

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress */}
      <div className="absolute top-8 left-1/2 w-48 -translate-x-1/2">
        <div className="h-0.5 w-full rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-foreground/30"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {currentIndex + 1} / {MAX_CARDS}
        </p>
      </div>

      {/* Card stack */}
      <div className="relative h-[560px] w-[340px]">
        <AnimatePresence custom={exitDir}>
          {currentIndex < MAX_CARDS && (
            <MovieCard
              key={cardsToShow[currentIndex].id}
              movie={cardsToShow[currentIndex]}
              onSwipe={handleSwipe}
              isTop={true}
              exitDirection={exitDir}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <motion.div
        className="mt-8 flex items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <button
          onClick={() => handleSwipe("left")}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-card transition-all duration-200 hover:shadow-card-hover hover:scale-105 active:scale-95"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>
        <button
          onClick={() => handleSwipe("right")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-heart shadow-card transition-all duration-200 hover:shadow-card-hover hover:scale-105 active:scale-95"
        >
          <Heart className="h-5 w-5 text-heart-foreground fill-current" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SwipeCards;
