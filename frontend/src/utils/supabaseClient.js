import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key must be provided in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getURL = () => {
  let url = process.env.REACT_APP_SITE_URL || 'http://localhost:3000';
  // Ensure URL starts with http/https
  url = url.startsWith('http') ? url : `https://${url}`;
  // Ensure URL ends with /
  url = url.endsWith('/') ? url : `${url}/`;
  return url;
};
