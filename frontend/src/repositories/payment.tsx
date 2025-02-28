import { supabase } from "../lib/supabase"

export type Payment = {
    id: string
    contribution_id: string
    payment_method: string
    payment_gateway_id: string
    status: string
    created_at: string
}

export const paymentRepository = {
    async create(payment: Omit<Payment, 'id' | 'created_at'>) {
        const { data, error } = await supabase
            .from('payments')
            .insert([payment])
            .select()
            .single()

        if (error) throw new Error(error.message)
        return data as Payment
    }
}
