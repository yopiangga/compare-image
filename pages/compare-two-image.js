import axios from "axios";
import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function CompareTwoImage() {
  const [result, setResult] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [imagePreview1, setImagePreview1] = useState(false);
  const [imagePreview2, setImagePreview2] = useState(false);

  const handleImageAsFile = (e) => {
    const file = e.target.files[0];
    var pattern = /image-*/;

    if (file.type.match(pattern)) {
      if (e.target.name == "avatar1") {
        setFile1(e.target.files[0]);
      } else if (e.target.name == "avatar2") {
        setFile2(e.target.files[0]);
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (e.target.name == "avatar1") {
          setImagePreview1(reader.result);
        } else if (e.target.name == "avatar2") {
          setImagePreview2(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);

      return;
    }
  };

  function handleReset() {
    setFile1("");
    setFile2("");
    setImagePreview1(false);
    setImagePreview2(false);
  }

  function handleSubmit() {
    axios
      .post("http://127.0.0.1:5000/compare-two-image", {
        image1: imagePreview1,
        image2: imagePreview2,
      })
      .then(function (response) {
        setResult(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div>
      <nav className="w-full border-b">
        <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
          <div aria-label="Home. logo" role="img">
            <img
              className="w-12 md:w-auto"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg"
              alt="logo"
            />
          </div>
          <div>
            <button className="sm:block md:hidden text-gray-500 hover:text-gray-400 focus:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden icon icon-tabler icon-tabler-menu"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            </button>
            <div id="menu" className="md:block lg:block hidden">
              <button className="block md:hidden lg:hidden text-gray-500 hover:text-gray-400 focus:text-gray-400 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6">
                <svg
                  aria-label="close main menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                <li className="text-gray-400 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                  <a href="javascript: void(0)">Feature</a>
                </li>
                <li className="text-gray-400 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="javascript: void(0)">Marketplace</a>
                </li>
                <li className="text-gray-400 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="javascript: void(0)">Company</a>
                </li>
                <li className="text-gray-400 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="javascript: void(0)">Features</a>
                </li>
                <li className="text-gray-400 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="javascript: void(0)">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-orange-400 text-orange-400 px-4 sm:px-8 py-1 sm:py-3 text-sm">
            Sign In
          </button>
        </div>
      </nav>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              The Freedom to Create the
              <span className="text-orange-400">Websites</span>
              You Want
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              A professonal website drives sales. Create a beautiful website to
              impress and engage new customers and establish your business
              online{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-8">
            <div className="flex flex-col">
              <div className="relative h-32">
                <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
                  <FaUpload />
                  <p className="ml-2 mt-2 text-center break-all">
                    {file1 == null || file1 == undefined || file1 == ""
                      ? "Upload Image"
                      : file1.name}
                  </p>
                </div>
                <input
                  className="cursor-pointer w-full h-40 opacity-0 pin-r pin-t absolute z-10"
                  type="file"
                  id="avatar1"
                  name="avatar1"
                  onChange={handleImageAsFile}
                  accept="image/png, image/jpeg"
                />
              </div>
              {imagePreview1 ? (
                <div className="w-full relative overflow-hidden mt-5">
                  <img src={imagePreview1} layout="fill" alt="image-preview" />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col">
              <div className="relative h-32">
                <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
                  <FaUpload />
                  <p className="ml-2 mt-2 text-center break-all">
                    {file2 == null || file2 == undefined || file2 == ""
                      ? "Upload Image"
                      : file2.name}
                  </p>
                </div>
                <input
                  className="cursor-pointer w-full h-40 opacity-0 pin-r pin-t absolute z-10"
                  type="file"
                  id="avatar2"
                  name="avatar2"
                  onChange={handleImageAsFile}
                  accept="image/png, image/jpeg"
                />
              </div>
              {imagePreview2 ? (
                <div className="w-full relative overflow-hidden mt-5">
                  <img src={imagePreview2} layout="fill" alt="image-preview" />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {result == null || result == undefined || result == "" ? (
            ""
          ) : (
            <div className="flex flex-col items-center justify-center mt-10">
              <h1>MSE : {result.mse}</h1>
              <h1>SSIM : {result.ssim}</h1>
            </div>
          )}

          <div className="flex justify-center items-center mt-16">
            <button
              onClick={handleReset}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 bg-transparent transition duration-150 ease-in-out hover:border-orange-300 lg:text-xl lg:font-bold  hover:text-orange-300 rounded border border-orange-400 text-orange-400 px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Reset
            </button>
            <button
              onClick={handleSubmit}
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 bg-orange-400 transition duration-150 ease-in-out hover:bg-orange-300 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-orange-400 py-2 sm:py-4 text-sm"
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
