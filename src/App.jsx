import './App.css'
// import WebApp from "./assets/webApp.png"
import row12 from "./assets/row12.jpg"
import row111 from "./assets/row111.jpg"
import row112 from "./assets/row112.jpeg"
import row22Img1 from "./assets/row22-img1.jpg"
import row22Img2 from "./assets/row22-img2.png"
import row22Img3 from "./assets/row22-img3.png"
import row22Img4 from "./assets/row22-img4.png"
import BellIcon from "./assets/bell.png"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";


const App = () => {
  return (
    <div className='container'>
      <div className='container-3 align-content-center'>
        <div className='container-31'>
          <ul className='d-flex flex-column p-0 gap-4'>
            <li className='list-group-item'><FaHome /></li>
            <li className='list-group-item'><FaRegHeart /></li>
            <li className='list-group-item'><FaDownload /></li>
            <li className='list-group-item'><FaRegUser /></li>
            <li className='list-group-item'><IoIosSettings /></li>
          </ul>
        </div>
      </div>
      <div className='container-2'>
        <div className='container-0'>
          <div className="leftbar d-flex justify-content-between align-items-flex-start">
            <div className='d-flex align-items-center align-content-center'>
              <ul className='d-flex  justify-content-between gap-4 mt-3'>
                <li className='list-group-item'><BsReverseLayoutTextWindowReverse /></li>
                <li className='list-group-item'><MdArrowBackIos /></li>
                <li className='list-group-item'><MdArrowForwardIos /></li>
              </ul>
            </div>
            <div className="search">
              <input type="text" placeholder="Steary.com" />
            </div>
            <div className='d-flex align-items-center'>
              <ul className='d-flex justify-content-between gap-4 mt-3'>
                <li className='list-group-item'><MdDownloadForOffline /></li>
                <li className='list-group-item'><FaCloudUploadAlt /></li>
                <li className='list-group-item'><FaPlus /></li>
                <li className='list-group-item'><BsReverseLayoutTextWindowReverse /></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="container-1">
          <div className="topbar">
            <div className="search">
              <input type="text" placeholder="Search movies" />
            </div>
            <div>
              <ul className='nav font-size-small'>
                <li>Movies</li>
                <li>TV Series</li>
                <li>Animation</li>
                <li>Mistory</li>
                <li>More</li>
              </ul>
            </div>
            <div className='bell'>
              <img src={BellIcon} alt="" width={20} />
            </div>
            <div className='profile'>
              <img src={row111} alt="" width={30} />
              <h6>Arfi  Maulana</h6>
              <span>^</span>

            </div>

          </div>

          <div className="main">
            <div className="sidebar">
              <div className="sidebar-1">
                <div className="sidebar-section">
                  <h5>New Trailer</h5>
                  <div className='new-trailer-section'>
                    <div className='new-trailer-card'>
                      <img src={row12} alt="Movie A" />
                      <div className="text-overlay">
                        <h3>The last kingdom : Seven Kings die</h3>
                      </div>
                    </div>
                    <div className='new-trailer-card'>
                      <img src={row22Img1} alt="Movie B" />
                      <div className="text-overlay">
                        <h3>The Supper Mario: Bros Movies</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-2">
                <div className="sidebar-section">
                  <h5>Continue Watching</h5>
                  <ul>
                    <li>DarkSide</li>
                    <li>Transformer</li>
                    <li>Avatar: the Wild fire</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="main-content">
              <div className="content-1">
                <div className="movie-list">
                  <div className="movie-card">
                    <div className="inside-movies-card">
                      <div className='tags'>
                        <h6>Animation</h6>
                        <h6>Adventure</h6>
                      </div>
                      <span>Spider-Man: <br />Across the Spider-Verse</span>
                      <p>Miles morals cataputs across the multiverse , where the encounters a team of spiderman. People charged with protecting the multiverse.</p>
                      <div className='button'>
                        <button>Watch</button>
                        <button>Download</button>
                        <button>...</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-2">
                <h5>You might like</h5>
                <div className="recommendations">
                  <div className="recommendation-card">
                    <img src={row22Img1} alt="Recommendation 1" />
                    <div className="text-overlay">
                      <h3>The Flash (2023)</h3>
                      <p>After being struck by lightning, Barry Allen is reborn.</p>
                    </div>
                  </div>
                  <div className="recommendation-card">
                    <img src={row22Img2} alt="Recommendation 2" />
                    <div className="text-overlay">
                      <h3>Manifest (2018)</h3>
                      <p>In a city where fire, water, land, and air residents live together.</p>
                    </div>
                  </div>
                  <div className="recommendation-card">
                    <img src={row22Img3} alt="Recommendation 3" />
                    <div className="text-overlay">
                      <h6>Animation</h6>
                      <h3>Elemental (2023)</h3>
                      <p>Montego Air Flight 828 try reintegrating into society.</p>
                    </div>
                  </div>
                  <div className="recommendation-card">
                    <img src={row22Img4} alt="Recommendation 4" />
                    <div className="text-overlay">
                      <h3>Interstellar (2014)</h3>
                      <p>When Earth becomes uninhabitable in the future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default App;
