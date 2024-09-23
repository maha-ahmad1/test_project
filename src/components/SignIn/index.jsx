import ToggleButton from "../ToggleButton";
import email from "/assets/email.png";

export default function SignupForm() {
  return (
    <div className="font-keep-calm h-screen bg-black">
      <div className=" p-6 rounded-lg shadow-lg text-white bg-black">
        <h2 className=" font-keep-calm text-center text-3xl font-medium mt-10 tracking-tight">
          WELCOME TO WORLD
        </h2>
        <h1 className=" font-keep-calm text-center text-4xl  font-medium  mt-2  tracking-10px">
          METACCES
        </h1>
        <p className="text-center opacity-70 text-md mt-4 text-[#D7D8D9]">
          From Mythical Origins to Digital Frontiers
        </p>

        <div className="mt-6">
          <div className="relative">
            <input
              id="username"
              type="text"
              className="w-full px-12 py-4 rounded-[14px] bg-black border text-[#6C6B70] focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Username"
            />
            <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <img src={email} alt="email" className="text-white" />
            </i>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <ToggleButton />
        </div>

        <div className="mt-80">
          <button className="w-full rounded-[14px] px-4 py-4 bg-white text-black font-semibold text-md ">
            Next
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-[#D7D8D9]">
          Already have an account?{" "}
          <a href="#" className="text-[#5F9FE7]">
            Sign-in here
          </a>
        </div>
      </div>
    </div>
  );
}
