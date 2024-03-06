import React from 'react';

import './First.css'
import logo from './image/logo2.jpg'
import vector1 from './image/Vector-3.png'
import vector2 from './image/Vector-1.png'

import { useNavigate } from 'react-router-dom';
const First = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/second')
  }
  return (
    <div className='headcontainer'>

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


      <div className='movable-shade'></div>
      <div className='main-container'>
        <div className='onesidecontainer'>
          <div className='eventscontainer'>
            <h3 className='events'>Events</h3>
            <p><i class='bx bx-chevron-up' style={{ color: '#ff69b4' }} ></i></p>
          </div>

          <div className='newcontainer'>

            <div className='vectornewcontainer'>
              <img className='vector1' src={vector1} alt='Vector'></img>
              <img className='vector2' src={vector2} alt='Vector'></img>
              <img className='vector2' src={vector2} alt='Vector'></img>
              <img className='vector2' src={vector2} alt='Vector'></img>
            </div>

            <div className='vectornamecontainer'>
              <p className="sidedropdownselect" onClick={handleClick}>New Requests</p>
              <p className="sidedropdown">Estimate </p>
              <p className="sidedropdown">Events</p>
              <p className="sidedropdown">Partial Requests </p>
            </div>
          </div>


          <p className='sidedivbutton'>Positions</p>
          <p className='sidedivbutton'>Contractors</p>
          <div className='usercontainer'>
            <h3 className='user'>User</h3>
            <p><i class='bx bx-chevron-up' style={{ color: '#ffff' }} ></i></p>
          </div>
          <div className='newcontainer'>

            <div className='vectornewcontainer'>
              <img className='vector1' src={vector2} alt='Vector'></img>
              <img className='vector2' src={vector2} alt='Vector'></img>
              <img className='vector2' src={vector2} alt='Vector'></img>

            </div>

            <div className='vectornamecontainer'>
              <p className="sidedropdown">Admin</p>
              <p className="sidedropdown">Clients </p>
              <p className="sidedropdown">Coordinators</p>
            </div>
          </div>

          <p className='sidedivbutton'>Profile</p>
          <div className='logoutcontainer'>
            <p className='logoutbutton'><i class='bx bx-upload bx-rotate-270' style={{ color: '#ffffff' }}></i> Logout</p>
          </div>
        </div>




        <div className='secondsidecontainer'>
          <div className='eventnamecontainer'>
            <h2 className='eventname'>Event Name</h2>
            <h4 className='venuedetails'>(venue details)</h4>
          </div>
          <div className='buttoncontainer'>
            <button className='firstbutton'>Event Details</button>
            <button className='secondbutton'>Assign Coordinator/Coordinator</button>
            <button className='firstbutton'>Session Management</button>
            <button className='firstbutton'>Generate SOW</button>
          </div>

          <div className='secondmain-container'>
            <div className='second-onesidecontainer'>
              <h4 className='assigncoordinator'>Assign Coordinator</h4>
              <select className='firstinputdata'>
                <option value="" disabled selected hidden style={{ color: '#fff' }}>
                  Search Coordinator
                </option>
                <option value="coordinator1">Coordinator 1</option>
                <option value="coordinator2">Coordinator 2</option>
              </select>

              <p className='bottomusername'>Add new username</p>
            </div>
            <div className='second-secondsidecontainer'>
              <span className='eventname'><h4>Event Name</h4><p>(Venue Here)</p></span>
              <span className='startend'>
                <p>Start: 12-12-2023</p>
                <p>Ends: 15-12-2023</p>
              </span>
              <p className='venueaddress'>Venue Address: Some Location 12,  Name Here, City, State.</p>
            </div>
          </div>

          <div className='thirdmain-container'>
            <div className='third-onesidecontainer'>
              <h2>Assign Contractor</h2>
              <div className='assigncontractorcontainer'>
                <div className='cards1'>
                  <div className='meetingroom'>
                    <p>Meeting Room 1 <i class='bx bx-star custom-star'></i></p>
                    <p className='selectedposition12'> 12 Postion</p>
                  </div>
                  <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                </div>
                <div className='cards'>
                  <div className='meetingroom'>
                    <p>Meeting Room 1 <i class='bx bx-star custom-star'></i></p>
                    <p className='position12'> 12 Postion</p>
                  </div>
                  <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                </div>
                <div className='cards'>
                  <div className='meetingroom'>
                    <p>Meeting Room 1 <i class='bx bx-star custom-star'></i></p>
                    <p className='position12'> 12 Postion</p>
                  </div>
                  <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                </div>
                <div className='cards'>
                  <div className='meetingroom'>
                    <p>Meeting Room 1 <i class='bx bx-star custom-star'></i></p>
                    <p className='position12'> 12 Postion</p>
                  </div>
                  <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                </div>
                <div className='cards'>
                  <div className='meetingroom'>
                    <p>Meeting Room 1 <i class='bx bx-star custom-star'></i></p>
                    <p className='position12'> 12 Postion</p>
                  </div>
                  <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                </div>
              </div>
            </div>
            <div className='third-secondsidecontainer'>
              <h4>Position</h4>
              <table>
                <thead>
                  <tr>
                    <th>Camera</th>
                    <th>Time</th>
                    <th>LP Default</th>
                    <th>Value</th>
                    <th>Select Contractor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata'>
                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>


                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata'>

                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>


                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata' >
                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata'>
                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata'>
                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata'>
                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata'>
                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Camera 1 (Video)</td>
                    <td>9 am - 7 pm</td>
                    <td>LP default</td>
                    <td>20</td>
                    <td>
                      <select className='inputdata'>
                        <option value="contractor1">Select Contractor </option>
                        <option value="contractor2">Contractor 2</option>

                      </select>
                    </td>
                  </tr>


                </tbody>

              </table>
              <div className='tablefirstfooter'>
                <i className='bx bx-left-arrow-alt' style={{ color: '#ffffff' }}></i>
                <i className='bx bx-radio-circle' style={{ color: '#ffffff' }}></i>
                <i className='bx bxs-circle' style={{ color: '#d175b6' }}></i>
                <i className='bx bx-right-arrow-alt' style={{ color: 'grey' }}></i>
              </div>
            </div>
          </div>
          <div className='firstfooter'>
            <button className='saveeditbutton'>Save Edits</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default First;
