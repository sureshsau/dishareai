import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layouts/Layout';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Page Not Found</h2>
        <p className="text-gray-600 mb-6 text-center px-4">
          Oops! The page you're looking for doesn't exist. It might have been removed or the URL may be incorrect.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
