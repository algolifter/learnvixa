import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// navigate(-1) does nothing when there is no in-app history (page refresh,
// direct link, new tab). Fall back to a sensible page in that case.
export function useSafeBack(fallback = "/") {
  const navigate = useNavigate();
  return useCallback(() => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) navigate(-1);
    else navigate(fallback, { replace: true });
  }, [navigate, fallback]);
}
