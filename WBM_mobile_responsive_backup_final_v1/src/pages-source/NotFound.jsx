import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg pt-20 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="section-title font-semibold text-gray-800 dark:text-gray-200 mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium inline-block transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
