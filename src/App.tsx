import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUserProfile } from "@/hooks/useUserProfile";
import Index from "./pages/Index";
import SubjectPage from "./pages/SubjectPage";
import ChapterPage from "./pages/ChapterPage";
import ContentPage from "./pages/ContentPage";
import CalmMode from "./pages/CalmMode";
import PomodoroPage from "./pages/PomodoroPage";
import QuickRevisionPage from "./pages/QuickRevisionPage";
import BoardPredictorPage from "./pages/BoardPredictorPage";
import OnboardingPage from "./pages/OnboardingPage";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";
import AIChatbot from "./components/AIChatbot";
import NavigationMenu from "./components/NavigationMenu";

const queryClient = new QueryClient();

function AppContent() {
  const { profile, loading, saveProfile } = useUserProfile();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!profile) {
    return <OnboardingPage onComplete={saveProfile} />;
  }

  return (
    <BrowserRouter>
      <NavigationMenu />
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
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeToggle />
      <AIChatbot />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
