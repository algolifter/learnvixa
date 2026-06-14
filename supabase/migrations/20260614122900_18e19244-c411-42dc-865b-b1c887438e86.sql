
CREATE TABLE public.content_nodes (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_id uuid REFERENCES public.content_nodes(id) ON DELETE CASCADE,
  node_type text NOT NULL CHECK (node_type IN ('category','exam','class','subject','chapter')),
  slug text NOT NULL,
  title text NOT NULL,
  description text,
  icon text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  order_index integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (parent_id, slug)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_nodes TO authenticated;
GRANT ALL ON public.content_nodes TO service_role;

ALTER TABLE public.content_nodes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read published nodes"
  ON public.content_nodes FOR SELECT TO authenticated
  USING (is_published OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage nodes"
  ON public.content_nodes FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_content_nodes_parent ON public.content_nodes(parent_id);
CREATE INDEX idx_content_nodes_type ON public.content_nodes(node_type);

CREATE TRIGGER trg_content_nodes_updated_at
  BEFORE UPDATE ON public.content_nodes
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


CREATE TABLE public.content_items (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id uuid NOT NULL REFERENCES public.content_nodes(id) ON DELETE CASCADE,
  item_type text NOT NULL CHECK (item_type IN ('note','question','summary','pyq')),
  title text NOT NULL,
  body text NOT NULL DEFAULT '',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  order_index integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_items TO authenticated;
GRANT ALL ON public.content_items TO service_role;

ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read published items"
  ON public.content_items FOR SELECT TO authenticated
  USING (is_published OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage items"
  ON public.content_items FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_content_items_chapter ON public.content_items(chapter_id);
CREATE INDEX idx_content_items_type ON public.content_items(item_type);

CREATE TRIGGER trg_content_items_updated_at
  BEFORE UPDATE ON public.content_items
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
