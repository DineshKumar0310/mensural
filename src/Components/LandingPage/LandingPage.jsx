import { h } from "preact";
import { Link } from "preact-router";
import './LandingPage.css'
import logimg from '../../assets/logimg.jpg'

const LandingPage = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-4">Welcome to our App!</h1>
        <img src={logimg} alt="" />
        <p class="text-lg mb-6">Choose to explore !</p>
        <div class="flex flex-col md:flex-row gap-4">
          <Link href="/signup" class="button signup">
            Sign Up
          </Link>
          <Link href="/signin" class="button signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
