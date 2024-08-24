import { createClient } from "@supabase/supabase-js";

const URL = "https://lpttnerfncaeqlzuhyzh.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdHRuZXJmbmNhZXFsenVoeXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMDE2MjEsImV4cCI6MjAzOTY3NzYyMX0.NpNTtcfuqUOTomVPh0Mc6n3esAsm8TPvCWpBw_kEQEY";
export const supabase = createClient(URL, API_KEY);
