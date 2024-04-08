import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/NEST.png'; // Update with the path to your logo image

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <header className="flex justify-between items-center p-4 bg-white">
            <Link href="/">
            <a>
            <Image src={logo} alt="Nest Logo" width={50} height={50} />
            </a>
        </Link>
        <nav>
            <Link href="/"><a className="p-2">Home</a></Link>
            <Link href="/plan"><a className="p-2">Plan</a></Link>
            <Link href="/about"><a className="p-2">About</a></Link>
            <Link href="/contacts"><a className="p-2">Contacts</a></Link>
        </nav>
        </header>
        <main className="flex-grow">
            <section className="text-center p-8">
                <h2 className="text-2xl font-bold">Sign In</h2>
                {/* Form implementation */}
            </section>
            <section className="text-center p-8">
                <h2 className="text-2xl font-bold">About Nest</h2>
                <p>An innovative app for special education needs...</p>
            </section>
            <section className="text-center p-8">
                <h2 className="text-2xl font-bold">User Testimonials</h2>
                {/* Testimonial cards implementation */}
            </section>
        </main>
        <footer className="flex justify-between items-center p-4 bg-white">
            <div>
                <p>Nest for Children</p>
                <p>Contact us: contact@nestchildrenapp.com</p>
            </div>
        </footer>
    </div>
  );
};

export default HomePage;
