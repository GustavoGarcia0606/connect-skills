import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Supa_KEY, Supa_URL } from "../constants/supabase";

export const supabase = createClient(Supa_URL, Supa_KEY, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }


} );
