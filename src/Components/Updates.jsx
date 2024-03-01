import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WebImage from "../assets/web.png";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Updates = () => {
  return (
    <div className="w-2/3">
      <div>
        <h1 className="font-semibold text-xl">
          Best Website builders in the US
        </h1>
      </div>
      <div className=" mt-2 text-xs text-zinc-600">
        <hr style={{ width: "100%", borderTop: "1px solid grey" }} />
        <div className="flex items-center justify-between">
          <div>
            <ul className=" flex gap-5">
              <li className="flex gap-2">
                <span className="text-sm">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p>Last updated - February 22, 2020</p>
              </li>
              <li className="flex gap-2">
                <span className="text-xs">
                  <InfoOutlinedIcon color="action" fontSize="small" />
                </span>
                <p>Advertising Disclosure</p>
              </li>
            </ul>
          </div>
          <div className="flex">
            <p>Top Relevant</p>
            <span>
              <ExpandMoreOutlinedIcon color="action" fontSize="small" />
            </span>
          </div>
        </div>
        <hr style={{ width: "100%", borderTop: "1px solid grey" }} />
      </div>
      <div className="text-sm mt-3 text-zinc-700">
        <ul className="flex justify-evenly items-center">
          <li>Tools</li>
          <li>AWS Builder</li>
          <li>Start Build</li>
          <li>Build Supplies</li>
          <li>Tooling</li>
          <li>BlueHosting</li>
        </ul>
      </div>
      <div className="mt-5 text-zinc-700">
        <ul className="flex gap-3">
          <li>
            Home <span style={{ fontSize: "17px" }}>&#128898;</span>
          </li>
          <li>
            {" "}
            Hosting for all <span style={{ fontSize: "17px" }}>&#128898;</span>
          </li>
          <li>
            Hosting <span style={{ fontSize: "17px" }}>&#128898;</span>
          </li>
          <li>
            Hosting6 <span style={{ fontSize: "17px" }}>&#128898;</span>
          </li>
          <li>
            Hosting5 <span style={{ fontSize: "17px" }}>&#128898;</span>
          </li>
        </ul>
      </div>
      <div className="mt-5 ">
        <span className="py-1 px-2 rounded-full bg-zinc-50 relative top-14 left-[-10px] border-2">
          1
        </span>
        <span className=" text-sm bg-orange-500 p-1 rounded-md relative top-4 left-[-28px] text-white ">
          <EmojiEventsOutlinedIcon fontSize="small" />
          Best Choice
        </span>
        <div className=" bg-white flex gap-5">
          <div className=" max-w-40 h-24">
            <img src={WebImage} className="w-full h-full bg-center m-2" />
            <p className="text-center text-zinc-500">Builder1</p>
          </div>
          <div className="flex-1">
            <p>
              <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
              Digital Platform Creation Tool, Streamlined Design Interface for
              Professional Websites and Online Stores (Black/Blue)
            </p>
            <h1 className="font-bold">Main highlights</h1>
            <div>
              <p>
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </p>
              <button className=" text-blue-400">
                Show more <KeyboardArrowDownIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <div className="bg-blue-100 max-w-40 rounded-md flex flex-col justify-center items-center p-4 mr-5">
              <h1 className="text-3xl">9.8</h1>
              <p className="text-xl">Exceptional</p>
              <div>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 px-10 mx-2 py-1 rounded-md">
                View
              </button>
            </div>
          </div>
        </div>
        <span className="py-1 px-2 rounded-full bg-zinc-50 relative top-20 left-[-10px] border-2">
          2
        </span>

        <span className=" text-sm bg-orange-500 p-1 rounded-md relative top-8 text-white left-[-28px] ">
          <DiamondOutlinedIcon fontSize="small" />
          Best value
        </span>
        <div className="bg-white flex gap-5 mt-5">
          <div className=" max-w-40 h-24">
            <img src={WebImage} className="w-full h-full bg-center m-2" />
            <p className="text-center text-zinc-500">Builder</p>
          </div>
          <div className="flex-1">
            <p>
              <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
              Digital Platform Creation Tool, Streamlined Design Interface for
              Professional Websites and Online Stores (Black/Blue)
            </p>
            <h1 className="font-bold">Main highlights</h1>
            <div>
              <p>
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </p>
              <button className=" text-blue-400 ">
                Show more <KeyboardArrowDownIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <div className="bg-blue-100 max-w-40 rounded-md flex flex-col justify-center items-center p-4 mr-5">
              <h1 className="text-3xl">9.5</h1>
              <p className="text-xl">Excellent</p>
              <div>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 px-10 py-1 mx-2 rounded-md">
                View
              </button>
            </div>
          </div>
        </div>
        <span className="py-1 px-2 rounded-full bg-zinc-50 relative top-20 left-[-10px] border-2">
          3
        </span>
        <div className="bg-white flex gap-5 my-5">
          <div className=" max-w-40 h-24">
            <img src={WebImage} className="w-full h-full bg-center m-2" />
            <p className="text-center text-zinc-500">Builder1</p>
          </div>
          <div className="flex-1">
            <p>
              <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
              Digital Platform Creation Tool, Streamlined Design Interface for
              Professional Websites and Online Stores (Black/Blue)
            </p>
            <h1 className="font-bold">Main highlights</h1>
            <div>
              <p>
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </p>
              <button className=" text-blue-400">
                Show more <KeyboardArrowDownIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <div className="bg-blue-100 max-w-40 rounded-md flex flex-col justify-center items-center p-4 mr-5">
              <h1 className="text-3xl">9.3</h1>
              <p className="text-xl">Exceptional</p>
              <div>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 rounded-md px-10 py-1">
                View
              </button>
            </div>
          </div>
        </div>
        <span className="py-1 px-2 rounded-full bg-zinc-50 relative top-20 left-[-10px] border-2">
          4
        </span>
        <div className="bg-white flex gap-5 my-5">
          <div className=" max-w-40 h-24">
            <img src={WebImage} className="w-full h-full bg-center m-2" />
            <p className="text-center text-zinc-500">Builder1</p>
          </div>
          <div className="flex-1">
            <div>
              <p>
                <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
                Digital Platform Creation Tool, Streamlined Design Interface for
                Professional Websites and Online Stores (Black/Blue)
              </p>
            </div>
            <span className="bg-zinc-200 px-2 pb-1 rounded-md">26% Off</span>
            <div>
              <h1 className="text-md font-bold">Main highlights</h1>
            </div>
            <div className=" bg-[#ffdcdc] rounded-xl">
              <div className="flex gap-2 ">
                <span className="bg-zinc-100 px-2 ml-3 rounded-lg text-blue-400 mt-2">
                  9.9
                </span>
                <p className="mt-2">Building Responsive</p>
              </div>
              <div className="flex gap-2 my-2">
                <span className="bg-zinc-100 px-2 ml-3 rounded-lg text-blue-400">
                  8.9
                </span>
                <p>Cool</p>
              </div>
              <div className="flex gap-2">
                <span className="bg-zinc-100 px-2 ml-3 mb-2 rounded-lg text-blue-400">
                  9.9
                </span>
                <p>Docs</p>
              </div>
            </div>
            <h4>Why we love it</h4>
            <div>
              <ul itemType="">
                <li>
                  <CheckCircleRoundedIcon color="primary" fontSize="small" />{" "}
                  Documentation
                </li>
                <li>
                  <CheckCircleRoundedIcon color="primary" fontSize="small" />{" "}
                  Ease of use
                </li>
                <li>
                  <CheckCircleRoundedIcon color="primary" fontSize="small" />{" "}
                  Out Of Box
                </li>
              </ul>
            </div>
            <button className=" text-blue-400">Show more</button>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <div className="bg-blue-100 max-w-40 rounded-md flex flex-col justify-center items-center p-4 mr-5">
              <h1 className="text-3xl">9.1</h1>
              <p className="text-xl">Very Good</p>
              <div>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
                <span>
                  <StarIcon color="warning" fontSize="small" />
                </span>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 rounded-md px-10 py-1">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl">Related deals you might like for</h2>
      <div className="mt-5 flex items-center justify-between gap-2">
        <div className="w-1/3 bg-white">
          <div className="flex items-center justify-center relative top-3">
            <img src={WebImage} className="w-2/3" />
          </div>
          <div className="mt-5 text-xs py-1">
            <span className="bg-zinc-200 px-1 text-blue-800 rounded-sm mx-2">
              20% Off
            </span>
            <span className="bg-zinc-200 px-1 text-blue-800 rounded-sm">
              Limited time
            </span>
            <p className="text-center font-semibold">Webbuilder 1</p>
          </div>
          <div className="ml-2">
            <p className="text-xs text-zinc-600">
              Computer Modern classic with wix support
            </p>
          </div>
          <div className="ml-2">
            <span>$39.96</span>
            <span className="text-xs mx-2">$.9496</span>
            <span className="text-xs text-red-500">(20% Off)</span>
          </div>
          <button className="w-[calc(100%-20px)] bg-blue-500 rounded-md m-2 p-1">
            View Deal
          </button>
        </div>
        <div className="w-1/3 bg-white">
          <div className="flex items-center justify-center relative top-3">
            <img src={WebImage} className="w-2/3" />
          </div>
          <div className="mt-5 text-xs py-1">
            <span className="bg-zinc-200 px-1 text-blue-800 rounded-sm mx-2">
              20% Off
            </span>
            <span className="bg-zinc-200 px-1 text-blue-800 rounded-sm">
              Limited time
            </span>
            <p className="text-center font-semibold">Webbuilder 1</p>
          </div>
          <div className="ml-2">
            <p className="text-xs text-zinc-600">
              Computer Modern classic with wix support
            </p>
          </div>
          <div className="ml-2">
            <span>$39.96</span>
            <span className="text-xs mx-2">$.9496</span>
            <span className="text-xs text-red-500">(20% Off)</span>
          </div>
          <button className="w-[calc(100%-20px)] bg-blue-500 rounded-md m-2 p-1">
            View Deal
          </button>
        </div>
        <div className="w-1/3 bg-white">
          <div className="flex items-center justify-center relative top-3">
            <img src={WebImage} className="w-2/3" />
          </div>
          <div className="mt-5 text-xs py-1">
            <span className="bg-zinc-200 px-1 text-blue-800 rounded-sm mx-2">
              20% Off
            </span>
            <span className="bg-zinc-200 px-1 text-blue-800 rounded-sm">
              Limited time
            </span>
            <p className="text-center font-semibold">Webbuilder 1</p>
          </div>
          <div className="ml-2">
            <p className="text-xs text-zinc-600">
              Computer Modern classic with wix support
            </p>
          </div>
          <div className="ml-2">
            <span>$39.96</span>
            <span className="text-xs mx-2">$.9496</span>
            <span className="text-xs text-red-500">(20% Off)</span>
          </div>
          <button className="w-[calc(100%-20px)] bg-blue-500 rounded-md m-2 p-1">
            View Deal
          </button>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-between mt-5">
        <h3 className="text-xl font-normal">
            Sign up and get exclusive special offer
        </h3>
        <button className="bg-blue-500 p-1 rounded-md">Sign Up</button>
      </div>
      
    </div>
  );
};

export default Updates;
