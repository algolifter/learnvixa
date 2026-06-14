/**
 * Development Admin Mode configuration.
 *
 * Set DEV_MODE_ENABLED = false before public release.
 *
 * Optional auto sign-in:
 *   Add `VITE_DEV_ADMIN_PASSWORD=...` to your local .env to skip the login
 *   screen entirely when running in dev mode. If unset, the auth page will
 *   simply prefill the admin email and you can sign in with one click after
 *   typing the password.
 */
export const DEV_MODE_ENABLED = true;

export const DEV_ADMIN_EMAIL = "sowravdinesh2009@gmail.com";

/** True only when the app runs locally / in the Lovable preview. */
export const isDevEnvironment = (): boolean => {
  if (!DEV_MODE_ENABLED) return false;
  // Vite injects this at build time
  return Boolean(import.meta.env.DEV);
};

/** Optional password from local env for fully-automatic sign-in. */
export const DEV_ADMIN_PASSWORD: string | undefined =
  (import.meta.env.VITE_DEV_ADMIN_PASSWORD as string | undefined) || undefined;
