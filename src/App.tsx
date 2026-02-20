import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubjectPage from "./pages/SubjectPage";
import ChapterPage from "./pages/ChapterPage";
import ContentPage from "./pages/ContentPage";
import CalmMode from "./pages/CalmMode";
import PomodoroPage from "./pages/PomodoroPage";
import QuickRevisionPage from "./pages/QuickRevisionPage";
import BoardPredictorPage from "./pages/BoardPredictorPage";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";
import AIChatbot from "./components/AIChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeToggle />
      <AIChatbot />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/subject/:subjectId/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/subject/:subjectId/chapter/:chapterId/:section" element={<ContentPage />} />
          <Route path="/calm" element={<CalmMode />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/revision" element={<QuickRevisionPage />} />
          <Route path="/predictor" element={<BoardPredictorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
