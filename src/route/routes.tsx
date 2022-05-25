import { Link, RouteObject } from "react-router-dom";
import Index from "../pages/Index";
import TestForCard from "../pages/TestForCard";
import TestForDocsifyComponent from "../pages/TestForDocsifyComponent";

interface customRouteObject extends RouteObject {
    title: string
}

const routes: customRouteObject[] = [
    { index: true, path: '/', element: <Index />, title: 'index' },
    { path: '/TestForDocsifyComponent', element: <TestForDocsifyComponent />, title: 'TestForDocsifyComponent' },
    { path: '/TestForCard', element: <TestForCard />, title: '/TestForCard' },
    { path: '*', element: <NoMatchPage />, title: 'no match page' }
]

function getAllRoutes() {
    return routes
}

function NoMatchPage() {
    return (
        <div>
            <h2>No such Page, please check your url.</h2>
            <Link to='/'>back to home page</Link>
        </div>
    )
}

export { getAllRoutes }