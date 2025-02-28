import { supabase } from "../lib/supabase"

export type Campaign = {
    id: string
    title: string
    description: string | null
    goal_amount: number
    creator_id: string
    start_date: string
    end_date: string
    status: string
    created_at: string
    updated_at: string
}

export const campaignRepository = {
    async getAll() {
        const { data, error } = await supabase
            .from('campaigns')
            .select('*')

        if (error) throw new Error(error.message)
        return data as Campaign[]
    },

    async getById(id: string) {
        const { data, error } = await supabase
            .from('campaigns')
            .select('*')
            .eq('id', id)
            .single()

        if (error) throw new Error(error.message)
        return data as Campaign
    },

    async getActiveOnly() {
        const { data, error } = await supabase
            .from('campaigns')
            .select('*')
            .eq('status', 'active')

        if (error) throw new Error(error.message)
        return data as Campaign[]
    },

    async create(campaign: Omit<Campaign, 'id' | 'created_at' | 'updated_at'>) {
        const { data, error } = await supabase
            .from('campaigns')
            .insert([campaign])
            .select()
            .single()

        if (error) throw new Error(error.message)
        return data as Campaign
    }
}
