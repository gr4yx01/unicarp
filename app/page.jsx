'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace('/main')
    }, [])
}

export default page
