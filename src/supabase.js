import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xnuqrjqhndwdzjpaxntm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudXFyanFobmR3ZHpqcGF4bnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNjcwNzcsImV4cCI6MjAwODg0MzA3N30.MyraDCot0oNPW5PqUXxfLsUyejTgZsKnaT-nm9Ihx4I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
