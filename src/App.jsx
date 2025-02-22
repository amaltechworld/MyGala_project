// import Nav from "./components/navbar/Nav";
import {
    Hero,
    Card,
    VendorGallery,
    Testimonial,
    HorizontalScrollGallery,
    DashboardStats,
    Newsletter,
    Footer,
} from "./section";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
    return (
        <main className="relative">
            {/* <Nav /> */}
            <section>
                <ErrorBoundary>
                    <Hero />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Card />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <VendorGallery />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Testimonial />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <HorizontalScrollGallery />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <DashboardStats />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Newsletter />
                </ErrorBoundary>
            </section>
            <section>
                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>
            </section>
        </main>
    );
}


