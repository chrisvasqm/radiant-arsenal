import { createBrowserRouter } from "react-router-dom";
import App from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import AgentsPage from "./pages/AgentsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'agents', element: <AgentsPage /> }
        ]
    }
])

export default router