import React from 'react';
import logo from './image/logo2.jpg'
import image from './image/Show.jpg'
import vector1 from './image/Vector-3.png'
import vector2 from './image/Vector-1.png'
import './Second.css'
import { useNavigate } from 'react-router-dom';


const Second = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>

      <div className='userdetailscontainer'>
        <p className='infosquare'><i class='bx bx-info-square' style={{ color: '#ffffff' }}></i></p>
        <p className='bellicon'>
          <i className='bx bx-bell' style={{ color: '#ffffff', position: 'relative' }}>
            <span style={{
              position: 'absolute', top: '-1px', right: '-1px', width: '8px',
              height: '10px', background: '#D175B6', borderRadius: '50%', display: 'block'
            }}></span>
          </i>
        </p>

        <div className='usernamecontainer'>
          <span className='username'>
            <p>Hi,</p>
            <p style={{ color: "#00EEC5" }}> Muhammad Asad</p>
          </span>

          <p>Welcome back</p>
        </div>
        <div className='image-container'>
          <img className='userimage' src={logo} alt='User Profile'></img>
        </div>

      </div>


      <div className='main-container'>
        <div className='onesidecontainer'>
          <div className='eventscontainer'>
            <h3 className='events'>Events</h3>
            <p><i class='bx bx-chevron-up' style={{ color: '#ff69b4' }} ></i></p>
          </div>

          <div className='vectorcontainer'>
            <img className='vector1' src={vector1} alt='Vector'></img>
            <p className="sidedropdownselect" >New Requests</p>
          </div>

          <div className='vectorcontainer'>
            <img className='vector2' src={vector2} alt='Vector'></img>
            <p className="sidedropdown">Estimate </p>
          </div>

          <div className='vectorcontainer'>
            <img className='vector2' src={vector2} alt='Vector'></img>
            <p className="sidedropdown" onClick={handleClick} >Events</p>
          </div>

          <div className='vectorcontainer'>
            <img className='vector2' src={vector2} alt='Vector'></img>
            <p className="sidedropdown">Partial Requests </p>
          </div>


          <p className='sidedivbutton'>Positions</p>
          <p className='sidedivbutton'>Contractors</p>
          <div className='usercontainer'>
            <h3 className='user'>User</h3>
            <p><i class='bx bx-chevron-up' style={{ color: '#ffff' }} ></i></p>
          </div>

          <div className='vectorcontainer'>
            <img className='vector2' src={vector2} alt='Vector'></img>
            <p className="sidedropdown">-Admins</p>
          </div>

          <div className='vectorcontainer'>
            <img className='vector2' src={vector2} alt='Vector'></img>
            <p className="sidedropdown">-Clients</p>
          </div>
          <div className='vectorcontainer'>
            <img className='vector2' src={vector2} alt='Vector'></img>
            <p className="sidedropdown">-Coordinators</p>
          </div>


          <p className='sidedivbutton'>Profile</p>
          <div className='logoutcontainer'>
            <p className='logoutbutton'><i class='bx bx-upload bx-rotate-270' style={{ color: '#ffffff' }}></i> Logout</p>
          </div>
        </div>



        <div className='tablesecondsidecontainer'>

          <div className='eventsearchcontainer'>
            <h2>Event Requests</h2>
            <div className='mainsearch-wrapper'>
              <div class="search-wrapper">
                <input className="searchinput" placeholder='Search here'></input>
                <i class='bx bx-search search-icon' style={{ color: '#ffffff' }}></i>
              </div>
              <button className='plusbutton'><i class='bx bx-plus' style={{ color: '#ffffff' }}></i></button>
            </div>
          </div>


          <div className='headercontainer'>
            <div className='tablesidecontainer'>
              <table>
                <thead>
                  <tr>
                    <th>Event Name <i class='bx bxs-chevron-up-circle' style={{ color: "#fff" }} ></i></th>
                    <th>Event Start <i class='bx bxs-chevron-down-circle' style={{ color: "#fff" }} ></i> </th>
                    <th>Event end</th>
                    <th>Cleint name <i class='bx bxs-chevron-up-circle' style={{ color: "#fff" }} ></i></th>
                    <th>Contact info</th>
                    <th>Venue</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>

                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>

                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>
                  <tr>
                    <td className="flex-container">
                      <img src={image} alt='Name' className="image-style" />
                      Filled Name
                    </td>
                    <td>Jun 12 2024</td>
                    <td>Jun 14 2024</td>
                    <td>Muhammed Asad</td>
                    <td>+1234567890</td>
                    <td>Lorem lispum Dolor Sit amat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>

                  </tr>

                </tbody>
              </table>

            </div>
          </div>
          <div className='tablefooter'>
            <i class='bx bx-left-arrow-alt' style={{ color: '#ffffff' }} ></i>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p style={{ color: "pink" }}>4</p>
            <i class='bx bx-right-arrow-alt' style={{ color: 'grey' }} ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
