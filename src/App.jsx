// import Nav from "./components/navbar/Nav";
import {
    Hero,
    Card,
    VendorGallery,
    Testimonial,
    PhotoGallery,
    DashboardStats,
    Newsletter,
    Footer,
} from "./section";

export default function App() {
    return (
        <main className="relative">
            {/* <Nav /> */}
            <section>
                <Hero />
            </section>
            <section>
                <Card />
            </section>
            <section>
                <VendorGallery />
            </section>
            <section>
                <Testimonial />
            </section>
            <section>
                <PhotoGallery />
            </section>
            <section>
                <DashboardStats />
            </section>
            <section>
                <Newsletter />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    );
}

//header
//hero
//card
//vendor Gallery
//testimonial
//app
//photo Gallery
//recent
//subscribe
//footer
