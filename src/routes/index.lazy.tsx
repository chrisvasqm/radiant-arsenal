import { createLazyFileRoute } from '@tanstack/react-router'
import AgentsPage from '../pages/AgentsPage'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return <AgentsPage />
}