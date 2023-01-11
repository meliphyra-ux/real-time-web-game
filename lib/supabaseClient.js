import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://xjnzezotfmmbwnmusuhx.supabase.co',
  process.env.NEXT_PUBLIC_PROJECT_KEY
);

export const insertUser = async () => {
  try {
    const { error } = await supabase
      .from('users')
      .insert({ nickname: 'Meliphyra', online: 'true' });
    if (error) {
      throw new Error(`${error}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const signInUserWithEmail = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
      throw new Error(`${error}`);
    }
    return [data, error]
  } catch (error) {
    return [,error]
  }
};
export const signUpUserWithEmail = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
          email,
          password
      });
      if (error) {
        throw new Error(`${error}`);
      }
      return [data, error]
    } catch (error) {
      return [,error];
    }
  };
  
