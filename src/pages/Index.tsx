import { useState, useEffect, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import MoodInput from "@/components/MoodInput";
import SwipeCards from "@/components/SwipeCards";
import ResultList from "@/components/ResultList";
import { movies as allMovies, type Movie } from "@/data/movies";

type View = "mood" | "swipe" | "result";

const STORAGE_KEY = "movie-rec-history";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Index = () => {
  const [view, setView] = useState<View>("mood");
  const [mood, setMood] = useState("");
  const [result, setResult] = useState<Movie[]>([]);
  const [pool, setPool] = useState<Movie[]>([]);

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        // Could use history for smarter recommendations in the future
      }
    } catch {}
  }, []);

  const handleMoodSubmit = (input: string) => {
    setMood(input);
    setPool(shuffleArray(allMovies));
    setView("swipe");
  };

  const handleSwipeComplete = (liked: Movie[]) => {
    setResult(liked);
    // Save to localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const history = saved ? JSON.parse(saved) : [];
      history.push({
        mood,
        result: liked.map((m) => m.id),
        date: new Date().toISOString(),
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch {}
    setView("result");
  };

  const handleRestart = () => {
    setView("mood");
    setMood("");
    setResult([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {view === "mood" && (
          <MoodInput key="mood" onSubmit={handleMoodSubmit} />
        )}
        {view === "swipe" && (
          <SwipeCards
            key="swipe"
            movies={pool}
            onComplete={handleSwipeComplete}
          />
        )}
        {view === "result" && (
          <ResultList
            key="result"
            movies={result}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
