import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useContent(keys: string[], fallback: Record<string, string>) {
  const [content, setContent] = useState<Record<string, string>>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      const { data, error } = await supabase
        .from('site_content')
        .select('key, value')
        .in('key', keys);

      if (!error && data && data.length > 0) {
        const newContent = { ...fallback };
        data.forEach(item => {
          newContent[item.key] = item.value;
        });
        setContent(newContent);
      }
      setLoading(false);
    }

    fetchContent();
  }, [keys.join(',')]);

  return { content, loading };
}
