import { Button } from "@/components/ui/button"
import { Link, Outlet } from "react-router-dom"

const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col container max-w-5xl mx-auto bg-background text-foreground">
            <header className="border-b p-4 flex gap-4">
                <Link to="/">
                    <Button variant="ghost">Home</Button>
                </Link>

                <Link to="/delivery-zone">
                    <Button variant="ghost">Delivery Zone</Button>
                </Link>
                <Link to="/create-delivery-zone">
                    <Button variant="ghost">Create Delivery Zone</Button>
                </Link>
            </header>

            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    )
}
export default MainLayout