
-- 1. Extend app_role enum (future contributor roles)
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'teacher';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'subject_expert';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'moderator';

-- 2. Add development_status to content_nodes
ALTER TABLE public.content_nodes
  ADD COLUMN IF NOT EXISTS development_status text NOT NULL DEFAULT 'coming_soon';

-- 3. roadmap_items
CREATE TABLE IF NOT EXISTS public.roadmap_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'planned',
  category text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.roadmap_items TO authenticated;
GRANT ALL ON public.roadmap_items TO service_role;
ALTER TABLE public.roadmap_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated can read roadmap"
  ON public.roadmap_items FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins manage roadmap"
  ON public.roadmap_items FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
GRANT INSERT, UPDATE, DELETE ON public.roadmap_items TO authenticated;
CREATE TRIGGER roadmap_items_updated_at
  BEFORE UPDATE ON public.roadmap_items
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 4. content_templates
CREATE TABLE IF NOT EXISTS public.content_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  template_type text NOT NULL DEFAULT 'chapter',
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_templates TO authenticated;
GRANT ALL ON public.content_templates TO service_role;
ALTER TABLE public.content_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage templates"
  ON public.content_templates FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER content_templates_updated_at
  BEFORE UPDATE ON public.content_templates
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
