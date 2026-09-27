import { useEffect, useRef, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { isDevEnvironment, DEV_ADMIN_EMAIL, DEV_ADMIN_PASSWORD } from "@/config/devMode";
import { useUserProfile } from "@/hooks/useUserProfile";
import Index from "./pages/Index";
import SubjectPage from "./pages/SubjectPage";
import ChapterPage from "./pages/ChapterPage";
import ContentPage from "./pages/ContentPage";
import CalmMode from "./pages/CalmMode";
import PomodoroPage from "./pages/PomodoroPage";
import QuickRevisionPage from "./pages/QuickRevisionPage";
import BoardPredictorPage from "./pages/BoardPredictorPage";
import SettingsPage from "./pages/SettingsPage";
import OnboardingPage from "./pages/OnboardingPage";
import QuickStartPage from "./pages/QuickStartPage";
import AuthPage from "./pages/AuthPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import OAuthConsent from "./pages/OAuthConsent";

import AdminPage from "./pages/AdminPage";
import AdminContentPage from "./pages/AdminContentPage";
import AdminRoadmapPage from "./pages/AdminRoadmapPage";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";
import AIChatbot from "./components/AIChatbot";
import NavigationMenu from "./components/NavigationMenu";
import DevModeBadge from "./components/DevModeBadge";

const queryClient = new QueryClient();

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AuthedAppContent() {
  const { profile, loading, saveProfile } = useUserProfile();
  const { user } = useAuth();
  const location = useLocation();

  // Allow reset-password + OAuth consent routes even before onboarding
  if (location.pathname === "/reset-password") {
    return (
      <Routes>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    );
  }

  if (location.pathname === "/.lovable/oauth/consent") {
    return (
      <Routes>
        <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />
      </Routes>
    );
  }


  if (loading) return <LoadingScreen />;

  if (!profile && !user) return <QuickStartPage onComplete={saveProfile} />;

  if (!profile) {
    return (
      <OnboardingPage
        initialName={(user?.user_metadata as any)?.name || ""}
        initialEmail={user?.email || ""}
        onComplete={saveProfile}
      />
    );
  }

  return (
    <>
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
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/content" element={<AdminContentPage />} />
        <Route path="/admin/roadmap" element={<AdminRoadmapPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function Root() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [devAuthing, setDevAuthing] = useState(false);
  const devTriedRef = useRef(false);

  useEffect(() => {
    if (loading || user || devTriedRef.current) return;
    return; // Sign-in disabled for quick demo access
    if (!isDevEnvironment()) return;
    devTriedRef.current = true;
    setDevAuthing(true);
    (async () => {
      let { error } = await supabase.auth.signInWithPassword({
        email: DEV_ADMIN_EMAIL,
        password: DEV_ADMIN_PASSWORD,
      });
      if (error) {
        // Account likely doesn't exist yet — create it.
        const { error: signUpErr } = await supabase.auth.signUp({
          email: DEV_ADMIN_EMAIL,
          password: DEV_ADMIN_PASSWORD,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { name: "Dev Admin" },
          },
        });
        if (signUpErr) console.error("Dev auto sign-up failed:", signUpErr.message);
      }
      setDevAuthing(false);
    })();
  }, [loading, user]);

  if (loading || devAuthing) return <LoadingScreen />;

  // Public route: password reset
  if (location.pathname === "/reset-password") {
    return (
      <Routes>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    );
  }


  return <AuthedAppContent />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeToggle />
      <AIChatbot />
      <DevModeBadge />
      <BrowserRouter>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
