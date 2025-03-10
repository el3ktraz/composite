import EventsList from "./EventsList"
import { useState } from "react";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import valoPoster from '../media/images/valoposter.jpg'
const Events = () => {
     const [event, setEvent] = useState("");
     return (
          <>
               <div className="bg-[#f8f7ff] pt-6 md:px-16 md:pt-0 flex flex-col items-center justify-center">
                    <div>
                         <h1 id="svg-div" className="text-center mb-4 md:mb-8 text-3xl font-poppy-bold tracking-widest font-extrabold text-black md:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400"> EVENTS </span> WE CONDUCT</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              EventsList.map((items, key) => {
                                   return (
                                        <Fade delay={15} key={key}>
                                             <Link smooth={true} to={items.path} onClick={() => setEvent(items.path)} className={`${items.bgImg} bg-cover w-[16rem] h-[23rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg m-4`}>
                                                  <div className="px-4 pb-4">
                                                       <h1 className="text-white font-poppy font-semibold text-2xl text-left">{items.name}</h1>
                                                       <h1 className="text-white font-poppy text-lg text-left">{items.event}</h1>
                                                  </div>
                                             </Link>
                                        </Fade>
                                   )
                              })
                         }
                    </div>
                    {EventsList.map((event, key) => {
                         return (
                              <div key={key} id={event.path}></div>
                         )
                    })}
                    {(event == "open") ? (
                         <div id="open" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                              <div className="font-poppy">
                                   <div>
                                        <h1 className="text-3xl font-bold pb-2">Arcadia (Open Gaming Event)</h1>
                                        <h1 className="text-lg font-bold">
                                             Timing : 10:00 Am - 3:00 Pm
                                             <br></br>
                                             Venue : St. Aloysius College Maffei Block IT-Lab : 501</h1>
                                        <h1 className="text-md ">Laniel Charles Dias, 7892849393</h1>
                                        <h1 className="text-md ">Frank Stalin Dsouza, 7022678809</h1>
                                   </div>
                              </div>
                              <h1 className="text-md font-poppy py-2">Open Gaming Rules:</h1>
                              <ul className="mb-2 ml-4 text-md font-poppy list-disc list-inside capitalize">
                                   <h1 className="text-md font-bold">
                                        Valorant Championship
                                   </h1>
                                   <h1 className="text-sm font-bold">
                                        Date: 1st April, 2023
                                   </h1>
                                   <li>
                                        Team Size : 3 Members.
                                   </li>
                                   <li>
                                        Players must carry their College ID Cards.
                                   </li>
                                   <li>
                                        Teams must pre-register before 31st March 2023. Spot Registration is not allowed.
                                   </li>
                                   <li>
                                        Teams must report at 9:00AM (Maffei Block) IT lab 501.
                                   </li>
                                   <li>
                                        Login accounts will be provided by the organizers on the day of the event.
                                   </li>
                                   <li>
                                        Players are allowed to bring their own headphones, keyboard and mouse on the day of the event.
                                   </li>
                                   <li>
                                        Players must bring their own Headphones / earphones. It won't be provided by the organizers.
                                   </li>
                                   <li>
                                        Team Captains must take screenshots of the scoreboard after their matches.
                                   </li>
                                   <li>
                                        Each round will be single elimination. Only Grand Finals will be best of 3.
                                   </li>
                                   <li>
                                        Use of illegal software or any forms of cheating/abusive actions will cause disqualification of the team.
                                   </li>
                                   <li>
                                        Map and team sides will be decided right before the rounds begin.
                                   </li>
                                   <li>
                                        Amazing cash prizes will be given at the end of the event for the top two teams.
                                   </li>
                                   <li>
                                        Organizers decision will be final.
                                   </li>
                              </ul>
                              <a
                                   className="text-md font-poppy mb-4 text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                   href="https://forms.gle/miiRcaHb14b3mCbu8"
                              >
                                   Register Now
                              </a>

                              <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside capitalize">
                                   <h1 className="text-md font-bold">
                                        NFS Most Wanted Rules
                                   </h1>
                                   <h1 className="text-sm font-bold">
                                        Date: 31st March, 2023
                                   </h1>
                                   <li>
                                        The race will be played on a solo basis.
                                   </li>
                                   <li>
                                        Race will be set against 5 players.
                                   </li>
                                   <li>
                                        Top 2 racers will get exciting cash prizes at the end of the race.
                                   </li>
                                   <li>
                                        Winners will be able to compete again
                                   </li>
                                   <li>
                                        Registration Fee : ₹40
                                   </li>
                              </ul>
                              <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside capitalize">
                                   <h1 className="text-md font-bold">
                                        Rocket League Rules
                                   </h1>
                                   <h1 className="text-sm font-bold">
                                        Date: 31st March, 2023
                                   </h1>
                                   <li>
                                        Team size : 2 members
                                   </li>
                                   <li>
                                        Highest scoring team at the end of the match will receive attractive prizes.
                                   </li>
                                   <li>
                                        Registration Fee : ₹100 per team.
                                   </li>
                              </ul>
                              <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside capitalize">
                                   <h1 className="text-md font-bold">
                                        Call of Duty Mobile Rules
                                   </h1>
                                   <h1 className="text-sm font-bold">
                                        Date: 31st March, 2023
                                   </h1>
                                   <li>
                                        The game mode will be Free for all.
                                   </li> <li>
                                        Match will bse set up against 5 players.
                                   </li>
                                   <li>
                                        Cod mobile must be pre-installed on the player's mobile device.
                                   </li>
                                   <li>
                                        Amazing cash prizes will be given at the end of the round for the top two players.
                                   </li>
                                   <li>
                                        Registration Fee : ₹40
                                   </li>
                              </ul>
                              <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside capitalize">
                                   <h1 className="text-md font-bold">
                                        Mini Games Rules
                                   </h1>
                                   <h1 className="text-sm font-bold">
                                        Date: 31st March, 2023
                                   </h1>
                                   <li>
                                        Mini games are Fruit Ninja, Subway Surfers, Getting over it & Flappy Bird.
                                   </li>
                                   <li>
                                        Players can spot register for these games.
                                   </li>
                                   <li>
                                        1 attempt per registration.
                                   </li>
                                   <li>
                                        Top 2 Highest Scorers will receive amazing prizes for each game at the end of the event.
                                   </li>
                                   <li>
                                        Registration Fee : ₹10
                                   </li>
                              </ul>
                              <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside capitalize">
                                   <h1 className="text-md font-bold">
                                        Note
                                   </h1>

                                   <li>
                                        Players can register for multiple games.
                                   </li>
                                   <li>
                                        Players must report at the specified time slot mentioned in the WhatsApp group
                                   </li>
                              </ul>
                              <a
                                   className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                   href="https://forms.gle/RzR4xP4XYAj2ZAQS8"
                              >
                                   Register Now
                              </a>
                         </div>) :
                         ((event == "close") ? (
                              <div id="close" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center">
                                   <div className="font-poppy">
                                        <div>
                                             <h1 className="text-3xl font-bold pb-2">Arcadia (Closed Valorant Tournament)</h1>
                                             <h1 className="text-lg font-bold">
                                                  Date:31st March, 2023
                                                  <br ></br>
                                                  Timing : 10:00 Am - 3:00 Pm
                                                  <br ></br>
                                                  Venue : St. Aloysius College Maffei Block IT-Lab : 501
                                             </h1>

                                             <h1 className="text-md ">Joel James, 9108770492</h1>
                                             <h1 className="text-md ">  Sonal Riva Gonsalves, 7204206754</h1>
                                             <h1 className="font-semibold">Registration fee for closed gaming is covered in Composite registration fees.
                                             </h1>
                                        </div>
                                   </div>

                                   <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                   <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside normal-case">
                                        <li>
                                             Team Size : 3 Members.
                                        </li>
                                        <li>
                                             Players must carry their College ID Cards.
                                        </li>
                                        <li>
                                             Teams must report at 9:00AM to IT lab (Maffei Block) 501.
                                        </li>
                                        <li>
                                             Login accounts will be provided by the organizers on the day of the event.
                                        </li>
                                        <li>
                                             Players are allowed to bring their own headphones, keyboard and mouse on the day of the event.
                                        </li>
                                        <li>
                                             Players must bring their own Headphones / earphones. It won't be provided by the organizers.
                                        </li>
                                        <li>
                                             Team Captains must take screenshots of the scoreboard after their matches.
                                        </li>
                                        <li>
                                             Each round will be a knockout round. Only Grand Finals will be best of 3.
                                        </li>
                                        <li>
                                             Use of illegal software or any forms of cheating/abusive actions will cause disqualification of the team.
                                        </li>
                                        <li>
                                             Map and team sides will be decided right before the rounds begin.
                                        </li>
                                        <li>
                                             Amazing cash prizes will be given at the end of the event for the top two teams.
                                        </li>
                                        <li>
                                             Organizers decision will be final.
                                        </li>
                                   </ul>
                                   <a
                                        className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                        href="https://forms.gle/XHyd5Rd6VWKB4nkSA
                                        "
                                   >
                                        Register Now
                                   </a>
                              </div>) :
                              ((event == "code") ? (
                                   <div id="code" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                        <div className="font-poppy">
                                             <div>
                                                  <h1 className="text-3xl font-bold pb-2">{"Elsify{}"}</h1>
                                                  <h1 className="text-md ">Ashwin K V, 9567454484</h1>
                                                  <h1 className="text-md ">Iyola Gloria Dsilva, 6362115410</h1>
                                             </div>
                                        </div>
                                        <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                        <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                             <li>
                                                  A single team composed of two members from the same college is permitted to participate in the competition.
                                             </li>
                                             <li>
                                                  It is recommended that the participants possess fundamental knowledge of C, C++, and Java programming languages.
                                             </li>
                                             <li>
                                                  Coding will be done using C programming language
                                             </li>
                                             <li>
                                                  Decision of the judges will be made final.
                                             </li>
                                             <li>
                                                  The winners will be chosen based on their score in all 3 rounds.
                                             </li>
                                        </ul>
                                        <a
                                             className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                             href="https://forms.gle/XHyd5Rd6VWKB4nkSA
                                             "
                                        >
                                             Register Now
                                        </a>
                                   </div>) :
                                   ((event == "man") ? (
                                        <div id="man" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                             <div className="font-poppy">
                                                  <div>
                                                       <h1 className="text-3xl font-bold pb-2">IT Manager</h1>
                                                       <h1 className="text-md ">Bhushan Bangera, 7204624083</h1>
                                                       <h1 className="text-md ">Elkan Pais, 9483916991</h1>
                                                  </div>
                                             </div>

                                             <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                             <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                  <li>Only one member from each college team can participate in this event</li>
                                                  <li>Students who have registered for this event are not permitted to participate in any other event.</li>
                                                  <li> The participants must bring all relevant equipment.</li>
                                                  <li>No professional aid will be accepted.</li>
                                                  <li> All participants are required to be present at the reporting time for each round of the event. Any delay or absence may result in disqualification from the round. </li>
                                                  <li> Code of conduct must be followed. Participants must behave professionally and respectfully towards each other, the event organizers, and the event venue staff. Any behavior that is deemed inappropriate or disruptive may result in expulsion from the event.</li>
                                                  <li>Decision of the judges will be made final.</li>
                                             </ul>
                                             <a className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                  href="https://forms.gle/XHyd5Rd6VWKB4nkSA
                                                  ">Register Now </a>
                                        </div>) :
                                        (event == "expos") ? (
                                             <div id="expos" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                  <div className="font-poppy">
                                                       <div>
                                                            <h1 className="text-3xl font-bold pb-2">Exi-Bit</h1>
                                                            <h1 className="text-md ">Vivian Dsouza, 8073425253</h1>
                                                            <h1 className="text-md ">Lishma Menezes, 7899026237</h1>
                                                       </div>
                                                  </div>

                                                  <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                  <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                       <li>Models can be either web application, IOT, app development or any hardware related components.
                                                       </li>
                                                       <li> Maximum number of participants per team is 2 or 3.
                                                       </li>
                                                       <li> All necessary equipment should be brought by the participants.
                                                       </li>
                                                       <li>  No professional assistance will be entertained.
                                                       </li>
                                                       <li> All participants should be present at the venue at the given time and be there until the event gets over.
                                                       </li>
                                                  </ul>
                                                  <a
                                                       className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                       href="https://forms.gle/XHyd5Rd6VWKB4nkSA
                                                       "
                                                  >
                                                       Register Now
                                                  </a>
                                             </div>) :
                                             ((event == "inco") ? (
                                                  <div id="inco" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                       <div className="font-poppy">
                                                            <div>
                                                                 <h1 className="text-3xl font-bold pb-2">Incognito</h1>
                                                                 <h1 className="text-md ">Deepak Amin, 8618000577</h1>
                                                                 <h1 className="text-md ">Pragathi Jayakar, 7019727270</h1>
                                                            </div>
                                                       </div>

                                                       <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                       <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                            <li>Only team  two from each college  can participate in this event.</li>
                                                            <li>
                                                                 Students who have registered for this event are not permitted to participate in any other event.
                                                            </li>
                                                            <li>
                                                                 No professional aid will be accepted.
                                                            </li>
                                                            <li>
                                                                 All participants are required to be present at the reporting time for each round of the event. Any delay or absence may result in disqualification from the round.
                                                            </li>
                                                            <li>
                                                                 Code of conduct must be followed.
                                                                 Participants must behave professionally and respectfully towards each other, the event organizers, and the event venue staff. Any behavior that is deemed inappropriate or disruptive may result in expulsion from the event.
                                                            </li>
                                                            <li> Decision of the judges will be made final.</li>
                                                       </ul>
                                                       <a
                                                            className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                            href="https://forms.gle/XHyd5Rd6VWKB4nkSA
                                                            "
                                                       >
                                                            Register Now
                                                       </a>
                                                  </div>) :
                                                  ((event == "quiz") ? (
                                                       <div id="quiz" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                            <div className="font-poppy">
                                                                 <div>
                                                                      <h1 className="text-3xl font-bold pb-2">Quizathon</h1>
                                                                      <h1 className="text-md ">Mahima P, 8317349105</h1>
                                                                      <h1 className="text-md ">Kavya, 459827345</h1>
                                                                 </div>
                                                            </div>

                                                            <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                            <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                                 <li>
                                                                      A team of two members of same college can participate for the quizathon.
                                                                 </li>
                                                                 <li>
                                                                      Quiz is related to general as well as technology related which includes C,C++ programming language and other technological facts.
                                                                 </li>
                                                                 <li>
                                                                      Elimination will be done based on the teams which scores lowest points in each rounds.
                                                                 </li>
                                                                 <li>
                                                                      Teams will move forward to next rounds based on the highest points secured by them in a particular round,without computing the marks of previous rounds.
                                                                 </li>
                                                            </ul>
                                                            <a
                                                                 className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                                 href="https://forms.gle/XHyd5Rd6VWKB4nkSA
                                                                 "
                                                            >
                                                                 Register Now
                                                            </a>
                                                       </div>) :
                                                       ((event == "web") ? (
                                                            <div id="web" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                                 <div className="font-poppy">
                                                                      <div>
                                                                           <h1 className="text-3xl font-bold pb-2">Web Odyssey</h1>
                                                                           <h1 className="text-md ">Anvisha Gladline Dsouza, 7022308033</h1>
                                                                           <h1 className="text-md ">Delbin George, 9539361202</h1>
                                                                      </div>
                                                                 </div>

                                                                 <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                                 <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                                      <li>Each college is allowed to have one team consisting of two participants, and both participants must be from the same college.
                                                                      </li>
                                                                      <li> Participants are allowed to use HTML, CSS, and JavaScript to create their website design. The use of any other languages is not permitted.
                                                                      </li>
                                                                      <li> The design should be visually appealing and reflect the participant's creativity and design skills.
                                                                      </li>
                                                                      <li> All necessary software, tools, and assets required for the competition will be provided.  Text Editors - VSCode, Sublime and Notepad++
                                                                      </li>
                                                                      <li>Participants must complete their website design within the given time frame, and late submissions will not be accepted.
                                                                      </li>
                                                                      <li> The design should be original and not infringe on any copyright laws.
                                                                      </li>
                                                                      <li>   The design should include all necessary elements, such as navigation, content, images, and any other features required.
                                                                      </li>
                                                                      <li>Participants will be judged based on creativity, design aesthetics, responsiveness, user experience, and adherence to the given theme.
                                                                      </li>
                                                                      <li> Electronic devices, including smartwatches, smartphones, and earpods, are not allowed in the lab.
                                                                      </li>
                                                                      <li> The judges' decision will be final, and no appeals will be entertained.
                                                                      </li>
                                                                      <li> The competition organizers reserve the right to disqualify any participant who violates the rules or engages in any unethical behavior.
                                                                      </li>
                                                                      <li>  Plagiarism or any form of cheating will result in disqualification.
                                                                      </li>
                                                                      <li> Participants cannot participate in other events if they are participating in “Web Odyssey” event.
                                                                      </li>
                                                                 </ul>
                                                                 <a
                                                                      className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                                      href="https://forms.gle/XHyd5Rd6VWKB4nkSA
                                                                      "
                                                                 >
                                                                      Register Now
                                                                 </a>
                                                            </div>) : ("")))))))
                    }
               </div >
          </>
     )
}

export default Events