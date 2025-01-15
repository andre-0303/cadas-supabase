import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://exqtawlxvwamgnzhqgda.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cXRhd2x4dndhbWduemhxZ2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjU5MTEsImV4cCI6MjA1MjU0MTkxMX0.eMnYqtDtfc9ayxHjoFgRu8aD8yiRhQE1ZqNgHLAIwM4';
    
export const supabase = createClient(supabaseUrl, supabaseKey);