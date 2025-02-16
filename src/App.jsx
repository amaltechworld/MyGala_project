// import Nav from "./components/navbar/Nav";
import {
    Hero,
    Card,
    VendorGallery,
    Testimonial,
    PhotoGallery,
    Recent,
    Subscribe,
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
                <Recent />
            </section>
            <section>
                <Subscribe />
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
