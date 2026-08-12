export default function Footer() {
    return (
        <footer className="bg-accent text-dark py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} April Rose Alpha. All rights reserved.</p>
            </div>
        </footer>
    );
}