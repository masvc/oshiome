import { supabase } from '../lib/supabase';

export type Contribution = {
  id: string;
  campaign_id: string;
  supporter_id: string;
  amount: number;
  payment_status: string;
  created_at: string;
};

export const contributionRepository = {
  async getById(id: string) {
    const { data, error } = await supabase
      .from('contributions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data as Contribution;
  },

  async create(contribution: Omit<Contribution, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('contributions')
      .insert([contribution])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data as Contribution;
  },
};
