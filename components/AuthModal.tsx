'use client'

import { useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { useEffect } from "react"
import { ThemeSupa } from "@supabase/auth-ui-shared"

import Modal from "./Modal"
import useAuthModal from "@/hooks/useAuthModal"

type Props = {}

const AuthModal = (props: Props) => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const { session } = useSessionContext()
    const { onClose, isOpen } = useAuthModal()

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    useEffect(() => {
        if (session) {
            router.refresh()
            onClose()
        }
    }, [session, router, onClose])

    return (
        <Modal title="Welcome back" description="Login to your account" isOpen={isOpen} onChange={onChange}>
            <Auth providers={['github']} magicLink theme="dark" supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa, variables: { default: { colors: { brand: '#404040', brandAccent: '#22C55E' } } } }} />
        </Modal>
    )
}

export default AuthModal