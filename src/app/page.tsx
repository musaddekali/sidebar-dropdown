'use client';

import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <section className="py-24 bg-black text-center text-white  bg-[url('https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?w=1000')] bg-center bg-center bg-black/70 bg-blend-multiply relative z-10">
        <div className="container">
          <div>
            <h2 className="text-4xl font-medium font-[verdana] mb-6">
              Hello, Welcome Back!
            </h2>
            <p className="max-w-screen-sm mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              delectus laboriosam minima doloremque omnis.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 transition duration-3 px-12 py-4 rounded mt-12 text-lg font-medium">
              Join Here
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
