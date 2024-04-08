import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/NEST.png'; 
import SignInForm from '../components/SignInForm'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <header className="flex justify-between items-center p-4 bg-white">
            <Link legacyBehavior href="/">
                <Image src={logo} alt="Nest Logo" width={50} height={50} />
            </Link>
            <nav>
                <Link legacyBehavior href="/"><a className="p-2">Home</a></Link>
                <Link legacyBehavior href="/plan"><a className="p-2">Plan</a></Link>
                <Link legacyBehavior href="/about"><a className="p-2">About</a></Link>
                <Link legacyBehavior href="/contacts"><a className="p-2">Contacts</a></Link>
            </nav>
        </header>
        <main className="flex-grow">
            <section className="text-center p-8">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <SignInForm />
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
