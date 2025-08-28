import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qquljxlqrayffifmhime.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdWxqeGxxcmF5ZmZpZm1oaW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NjU3NTgsImV4cCI6MjA2OTQ0MTc1OH0.Csb7QrRSKCVv-PaXYn7li8LRAY3q2nD-gtSw6TrPc_s';
export const supabase = createClient(supabaseUrl, supabaseKey);

// small helpers (optional)
export const getSession = () => supabase.auth.getSession();
export const onAuthStateChange = (cb) => supabase.auth.onAuthStateChange(cb);
export const signOut = () => supabase.auth.signOut();
