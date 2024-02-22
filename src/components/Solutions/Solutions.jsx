import React from "react";
import "./Solutions.css";
import { Link } from "react-router-dom";
export const Solutions = () => {
  // const myData = {
  //   name: "Some thing",
  //   price: 123,
  // };
  return (
    <div>
      <div className="solution-main-div">
        <img
          style={{ width: "100%", height: "100%" }}
          src="Images/Sliders/solutions.jpg"
          alt=""
        />
      </div>
      <div id="1" className="sol-main-div">
        <div className="sol-first-division">
          <h5 id="sol-heading">
            Next-Generation Security Solutions with Trinai
          </h5>
          <span>
            Trinai is a security solutions provider, we specialize in total
            integrated surveillance, data communication and storage solutions
            that can be customized to precisely resolve any security issue. We
            are proven business partners that are committed to increasing
            customer value by creating a secure environment, resulting in
            societal prosperity. We endeavor to recreate every challenge with
            leading-edge and innovative technologies to cultivate and enhance a
            business’s working environment. Our end-to-end solution offerings
            include
          </span>
          <ul>
            <li>Airport Security</li>
            <li>Public spaces security</li>
            <li>High-end surveillance for financial institutions</li>
            <li>Surveillance in populated areas</li>
            <li>Large area and City surveillance</li>
            <li>Mobile DVR and transportation</li>
          </ul>
          <span>
            Operating in an environment that sustains rapid technological
            innovation, we stay at the forefront of every ubiquitous solution to
            provide some of the most secure and reliable solutions. Over the
            years, we have developed expertise and the experience to offer our
            customers one of the broadest portfolios ever found in the
            surveillance industry. Our proven business practices integrate and
            manage some of the most intelligent and streamlined surveillance
            solutions across sectors.
          </span>
          <div>
            <h5 id="sol-heading">
              Features of Trinai surveillance security solutions
            </h5>
            <span>
              Generally, where applicable, Trinai ensures the following features
              depending upon the solution.
            </span>
            <ul>
              <li>
                Day and night operations with 24/7 surveillance capabilities
              </li>
              <li>
                Both day and night cameras have continuous zoom-in / zoom-out;
                also equipped with a continuous optical IR zoom lens
              </li>
              <li>
                Particularly in Airport security, the devices can be interfaced
                with the air or ground radar systems
              </li>
              <li>
                Self-governing wide panoramic scanning and picture display
              </li>
              <li>
                Automatic real-time intruder alert with audio immediately upon
                detection.
              </li>
              <li>
                Scanning, Tracking, Multiple target detection, Modes of
                operation
              </li>
              <li>
                Enhanced visualization even in low atmospheric visibility.{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* 1 container */}
        <div style={{ width: "90%" }}>
          <h2 id="sol-heading">Airport Security Solutions</h2>
          <div className="solu-img-mat-div">
            <div className="sol-img-div un-order-class">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/airport.jpg"
                alt=""
              />
            </div>
            <div className="sol-matter-span-con order-class">
              <span>
                Airports have a lot to deal with when it comes to security. From
                facing the ever-present threat of terrorism to enforcing strict
                rules and regulations, airport security personnel operate in a
                fast-paced environment that offers no room for mistakes. IP
                surveillance technology and new innovations in video analytics
                are helping to raise airport security to new heights.
              </span>
              <span>
                Besides the considerable challenges of airport security, there
                is also the incredibly demanding criteria for protecting
                passengers, preventing sabotage, fires, and explosions and
                managing accesses and authorizations. Trinai provides airport
                security solutions that can combat terrorism along with
                providing advanced video analytics using behavioral technology
                and enabling real-time surveillance from several digital
                streams. The surveillance systems are flexible, scalable and can
                be easily integrated into newer systems using digital encoders.
                With robust IP-based surveillance systems capable of capturing
                and relaying live video streams, users can monitor airport
                activities even off-location.
              </span>
            </div>
            <div className="button-position">
              <Link to="/BankingSolutions" state={{ name: "1" }}>
                <button className="btn btn-info"> Read More</button>
              </Link>
            </div>

            <div className="sol-background-div2">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/background.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 2 container */}
        <div style={{ width: "90%" }}>
          <h2 id="sol-heading">Shopping Malls and Public Solutions</h2>
          <div className="solu-img-mat-div">
            <div className="sol-img-div">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/shopping mall.jpg"
                alt=""
              />
            </div>
            <div className="sol-matter-span-con">
              <span>
                Shopping malls constitute large open areas with multiple levels
                inclusive of restaurants, shops, movie theaters and a lot of
                other delivery, service and storage areas, which are highly
                susceptible to unceremonious activities. The expanse of space
                and buildings can be challenging for security personnel to
                monitor. Trinai ensures that crucial security areas are
                continuously observed with the help of solutions that are
                planned and involve a strategic installation of surveillance
                equipment. At the same time, we also affirm non-intrusive
                monitoring for retail establishments, shoppers and customers who
                might otherwise be brittle to supervision. However, shoplifters
                and other security threats need to be clearly told that the area
                is under surveillance and liberties just cannot be taken. Trinai
                offers a range of surveillance solutions that provide customers
                with a judicious mix of discretion and security specially
                designed for the retail industry.
              </span>
              <span>
                With our Shopping mall and public places safety solutions we
                prevent theft at storage facilities, delivery areas, and other
                retail outlets. Crime is deterred when security officers are
                able to identify suspicious activity through the installed
                equipment. Furthermore, the equipment increases the overall
                level of security, enables monitoring of employee activity, and
                allows coordination between the security personnel and aids in
                crime investigation.
              </span>
            </div>{" "}
            <div className="button-position-right">
              <Link to="/BankingSolutions" state={{ name: "2" }}>
                <button className="btn btn-info"> Read More</button>
              </Link>
            </div>
            <div className="sol-background-div1">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/background.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 3 container */}
        <div style={{ width: "90%" }}>
          <h2 id="sol-heading">Office Security Solutions</h2>
          <div className="solu-img-mat-div">
            <div className="sol-img-div un-order-class">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/office.jpg"
                alt=""
              />
            </div>
            <div className="sol-matter-span-con order-class">
              <span>
                From corporate espionage to sabotage, from the destruction of
                property to keeping a check on productivity – most workplaces
                today need a range of electronic security solutions. Keeping
                this in mind, Trinai has designed surveillance solutions for
                corporates specially designed for the office space.
              </span>
              <span>
                We fully understand the security challenges of a commercial
                office and therefore strive to provide surveillance solutions
                that alleviate the risks of liability, vandalism, dishonest
                employee behavior, and more importantly theft. Having delivered
                experienced quality video surveillance solutions, we help our
                customers build powerful security plans that have the ability to
                thwart every challenge and facilitate business protection.
              </span>
              <span>
                Trinai’s systems can minimize annual losses due to theft as they
                aid in monitoring day to day operations while accelerating
                customer service through off-site facility management on a
                smartphone. Trespassers and vandals are warded off and employers
                can experience decreasing liability from frivolous lawsuits and
                claims.
              </span>
            </div>
            <div className="button-position">
              <Link to="/BankingSolutions" state={{ name: "3" }}>
                <button className="btn btn-info"> Read More</button>
              </Link>
            </div>
            <div className="sol-background-div2">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/background.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* 4 container */}
        <div style={{ width: "90%" }}>
          <h2 id="sol-heading">High End Security for Banks/Finance House</h2>
          <div className="solu-img-mat-div">
            <div className="sol-img-div">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/Bank.jpg"
                alt=""
              />
            </div>
            <div className="sol-matter-span-con">
              <span>
                Banks are usually a symbol of security and assurance for
                everyone. They can, therefore, make no compromise in securing
                themselves. In the recent years, banks have needed to resort to
                more and higher end and fail-safe security measures, especially
                in the area of electronic surveillance. To help keep banks and
                other such financial institutions stay secure Trinai has
                developed special tools and technologies to ensure complete
                safety and security within the premises.
              </span>
              <span>
                These days whether they are banks or financial institutions,
                reliable video surveillance systems are indispensable. With the
                increase in burglaries, check frauds, robberies, frauds in ATMs
                or even vandalism, swift action is required to conserve all that
                is within the facility. The only way to apprehend the
                perpetrators is through video surveillance and recordings.
                Trinai offers compact digital recording systems with specific
                parameters and software specifically designed for applications
                in banks. With reliable devices and highly stable recording
                servers, the systems offer high operator convenience and
                outstanding image quality. Our digital recording systems carry
                certifications for use, especially in financial, credit and
                banking institutions. All recorded data are admissible as
                evidence in court. This also includes ATM activity survey where
                periodic transaction checks are conducted.
              </span>
            </div>
            <div className="button-position-right">
              <Link to="/BankingSolutions" state={{ name: "4" }}>
                <button className="btn btn-info"> Read More</button>
              </Link>
            </div>
            <div className="sol-background-div1">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/background.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 5 container */}
        <div style={{ width: "90%" }}>
          <h2 id="sol-heading">Populated Area Security Solutions</h2>
          <div className="solu-img-mat-div">
            <div className="sol-img-div un-order-class">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/Populated Area.jpg"
                alt=""
              />
            </div>
            <div className="sol-matter-span-con order-class">
              <span>
                Places, where a large number of people converge, are always
                security flashpoints, especially with the rising threat of
                terrorism. Trinai has developed a surveillance technology that
                not only helps security professionals handle the huge volume of
                people but also identifies individual faces among them. Trinai
                provides access control and perimeter protection for commercial,
                government and all public facilities that are highly populated.
                Enhanced vigilance is provided through solutions that are
                cohesive and involve real-time monitoring and swift response
                capabilities. Our products are designed to maintain all control
                systems in the most austere conditions in these congested areas.
                The surveillance systems are highly sophisticated thus ensuring
                lasting, and adaptable solutions to minimize the risks of
                intrusions. Trinai’s solutions for populated areas include RFID
                and biometric access control systems, video solutions,and
                turn-key solutions that cover DVR systems, networking,
                procurement, and integration. All surveillance systems are
                solidified with the most advanced and appropriate technologies
                to ensure security in highly populous areas.
              </span>
            </div>
            <div className="button-position">
              <Link to="/BankingSolutions" state={{ name: "5" }}>
                <button className="btn btn-info"> Read More</button>
              </Link>
            </div>
            <div className="sol-background-div2">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/background.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 6  container*/}
        <div style={{ width: "90%" }}>
          <h2 id="sol-heading">City Surveillance</h2>
          <div className="solu-img-mat-div">
            <div className="sol-img-div">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/City.jpg"
                alt=""
              />
            </div>
            <div className="sol-matter-span-con">
              <span>
                The urban landscape is rife with security threats. And every
                city has its vulnerable groups. It becomes the responsibility of
                every urban planner to also plan for the security of the city
                thus ensuring an environment where everyone can live together in
                peace.
              </span>
              <span>
                It is true that safe cities provide countless opportunities, can
                foster innovation and more importantly bring with its safety,
                the capability to attract businesses. With the rise of urban
                planners, governments and other facilities, city populations are
                gradually rising. The spirit of collaborative working lays the
                groundwork for the continued success of the citizens. Trinai
                partners with city planners and authorities to ensure a safe and
                secure space for work, recreation, and life. Our products
                improve emergency preparedness to keep citizens safe while
                quickly responding to unforeseen events or disasters. All public
                utilities and municipal areas are transformed to increase
                situational awareness and to maintain a secure environment.
                Public organizations inclusive of police departments are granted
                full system access to respond to threats effectively.
                Operational efficiency is enhanced when a comprehensive strategy
                for the urban environment is developed to intelligently manage
                traffic, daily life, transportation, assets, and infrastructure.
              </span>
            </div>{" "}
            <div className="button-position-right">
              <Link to="/BankingSolutions" state={{ name: "6" }}>
                <button className="btn btn-info"> Read More</button>
              </Link>
            </div>
            <div className="sol-background-div1">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/background.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 7 container */}
        <div style={{ width: "90%" }}>
          <h2 id="sol-heading">Transport – Mobile DVR as a solution</h2>
          <div className="solu-img-mat-div">
            <div className="sol-img-div un-order-class">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/Transport – Mobile DVR as a solution.jpg"
                alt=""
              />
            </div>
            <div className="sol-matter-span-con order-class">
              <span>
                Transport systems profess fresh challenges to the surveillance
                technology industry each day. New technologies are needed to
                track and monitor targets that are in motion, some even miles
                away from the control room. Trinai has been creating and
                developing solutions that are robust and can meet the challenges
                of this particular sector.
              </span>
              <span>
                More and more mass transit vehicles are opting for video
                surveillance systems such as ferries, buses and other public as
                well as private transportations to improve the safety and
                security of the people. With our mobile DVR solutions, you can
                track vehicles using video management software, store video data
                and view live footage over a web browser or any
                internet-connected device. The systems are compatible with a
                wide variety of security needs to suit 3G mobile DVR, and 4G
                mobile DVR. We fully understand the security threats existent in
                the transportation sector inclusive of vandalism, petty crimes,
                harassment, etc. and therefore insulate all transportation
                systems from risks and threats. These solutions also reduce the
                liability of passenger injuries in addition to other perils.
              </span>
            </div>
            <div className="button-position">
              <Link to="/BankingSolutions" state={{ name: "7" }}>
                <button className="btn btn-info"> Read More</button>
              </Link>
            </div>
            <div className="sol-background-div2">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                src="Images/SolutionImages/background.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
