import React from "react";
import { Link } from "react-router-dom";

// components
import Timeline from "../../component/Timeline";

export default function AboutUs() {
  const selectionProcess = [
    {
      id: "1",
      date: "Step 1",
      title: "Application",
    },
    {
      id: "2",
      date: "Step 2",
      title: "Screening",
    },
    {
      id: "3",
      date: "Step 3",
      title: "Internship",
    },
    {
      id: "4",
      date: "Step 4",
      title: "Be a member",
    },
  ];

  const demoTable = [
    {
      occassion:
        "HackTheNorth Pluto tech community was founded by a Indian technepreneur",
      result: "Gold",
    },
    {
      occassion: "HackTheNorth",
      result: "Gold",
    },
    {
      occassion: "HackTheNorth",
      result: "Gold",
    },
    {
      occassion: "HackTheNorth",
      result: "Gold",
    },
  ];

  return (
    <div
      className="container my-5 row"
      style={{ lineHeight: "2rem", textAlign: "justify", width: "100vw" }}
    >
      <img
        src="/img/about-us-hero.jpg"
        className="img img-fluid my-5"
        alt="about-2"
      />
      <p className="fs-5 text-secondary" style={{ wordSpacing: "1rem" }}>
        &nbsp;Pluto tech community was founded by a Indian technepreneur{" "}
        <span className="fw-bold">Syed Vilayat Ali Rizvi</span> on 25th
        Feburary, 2022, with the aim of offering platform to budding developers
        meanwhile solving some of the
        <span className="fw-bold"> important</span> problems in the modern
        world.
        <br />
        <br />
        &nbsp;Initially started with just 5 devs, the community currently
        cherish global recognition from major open-source communities with over{" "}
        <span className="text-success">100</span> developers in the community,
        and growing. If you are a dev/content writer/product manager/marketing
        personnel, and willing to contribute to some of our open-source
        projects, apply for joining our community <Link to="/join">HERE</Link>.{" "}
        <br />
        <br />
        &nbsp;The <Link to="/">Pluto Tech Community</Link> 's engaging and
        opportunistic environment is the perfect habitat for developers and open
        source contributors to make world-changing tech, with intense focus on
        continuous learning, problem-solving and global collaboration; We make
        sure you become not just another FAANG-addicted dev but a passionate
        problem-solver with new perspective on tech.
        <br />
        <br />
      </p>

      <div className="section-header py-1 my-4 text-left">
        <div className="my-5">
          <h2>Our philosophy</h2>
          <p>We are a community on a mission of changing the world with tech</p>
        </div>

        <img
          src="/img/about-us-image-2.jpg"
          className="img img-fluid my-4"
          alt="about-2"
        />

        <p
          className="fs-5 py-4"
          style={{
            textAlign: "justify",
            lineHeight: "2rem",
            wordSpacing: "0.5rem",
          }}
        >
          <span className="fw-bold my-2">
            Connect budding developers around the globe.
          </span>
          <br />
          We are a team of passionate developers and we need more developers to
          contribute to our cause. The power of open-source and
          sense-of-community is immense. Our mission is to make more and more
          developers come together into one single community and help them
          picture the next technological revolution.
        </p>

        <p
          className="fs-5 py-4"
          style={{
            textAlign: "justify",
            lineHeight: "2rem",
            wordSpacing: "0.5rem",
          }}
        >
          <span className="fw-bold my-2">Spreading technical knowledge.</span>
          <br />
          Continuous learning is a virtue, here at our community. We abide by
          continuous learning at all stages of our developement. We focus
          intensively on works like simplifying documentations, conducting
          workshops on technical writing and webinars on industry best-practises
          and latest tech.
        </p>

        <p
          className="fs-5 py-4"
          style={{
            textAlign: "justify",
            lineHeight: "2rem",
            wordSpacing: "0.5rem",
          }}
        >
          <span className="fw-bold my-2">
            Making budding devs vertical-growth oriented.
          </span>
          <br />
          There are two types of successes, namely - horizontal and vertical
          success.
          <br />
          Horizontal success is the common type of success and is termed as{" "}
          <span className="fw-bold"> globalisation </span>
          in the industry, though being easily-attainable, it is equally
          unimportant as a accomplishment.
          <br />
          Where the vertical success is the rarest type of success and is termed
          as <span className="fw-bold"> innovation </span>
          in the industry, though being hard to attain, it is equally important
          as a accomplishment and considered to be ground-breaking.
          <br />
          We work on making devs being vertical-growth oriented or innovative,
          here at our community.
        </p>

        <p
          className="fs-5 py-4"
          style={{
            textAlign: "justify",
            lineHeight: "2rem",
            wordSpacing: "0.5rem",
          }}
        >
          <span className="fw-bold my-2">
            Spreading the art and knowledge of research.
          </span>
          <br />
          Research is the skill that will define our future or the next
          technological revolution. We emphasize over the important of research
          and mentorship. We offer perfect opportunity to the new developers to
          learn and become capable of working on new technologies.
        </p>

        <p
          className="fs-5 my-4"
          style={{
            textAlign: "justify",
            lineHeight: "2rem",
            wordSpacing: "0.5rem",
          }}
        >
          <span className="fw-bold my-2">
            Making projects for betterment of humanity.
          </span>
          <br />
          We always strive to create projects that can add value to the human
          life. We have immense debate and discussion over project ideas before
          starting one, inorder to ensure a clear goal of betterment for
          humanity.
        </p>
      </div>

      <div className="section-header py-1 my-4">
        <div className="my-5">
          <h2>How we choose members</h2>
          <p>
            Each members go through a very unique selection process before
            joining the community
          </p>
        </div>
        <div className="container row">
          <div className="container col-12 my-4">
            <Timeline
              title="Steps of our selection process"
              events={selectionProcess}
            />
          </div>

          <p
            className="fs-5 my-4"
            style={{
              textAlign: "justify",
              lineHeight: "2rem",
              wordSpacing: "0.5rem",
            }}
          >
            <span className="fw-bold my-2">Step 1</span>
            <br />
            Anyone can apply to be a part of our rich community by going through
            a unique selection process, initated after you request for joining
            from <Link to="/join"> here </Link>.<br />
            After your request has been verified by our key members, you will be
            receiving an email, asking you to submit your headshot image, resume
            and brief summary via email as attachments.
          </p>

          <p
            className="fs-5 my-4"
            style={{
              textAlign: "justify",
              lineHeight: "2rem",
              wordSpacing: "0.5rem",
            }}
          >
            <span className="fw-bold my-2">Step 2</span>
            <br />
            After verification, you will be required to really stand-out in the
            screening process. Show us the best projects you have made ever
            since in your developer career and your soft-skills. You will be
            notified of the result later via email.
          </p>

          <p
            className="fs-5 my-4"
            style={{
              textAlign: "justify",
              lineHeight: "2rem",
              wordSpacing: "0.5rem",
            }}
          >
            <span className="fw-bold my-2">Step 3</span>
            <br />
            Congrats if you make it this far. You will be now offered an
            internship of 1 month, where you will work with our existing
            developers on various projects and learn the work methodology, art
            of researching and open-source.
          </p>

          <p
            className="fs-5 my-4"
            style={{
              textAlign: "justify",
              lineHeight: "2rem",
              wordSpacing: "0.5rem",
            }}
          >
            <span className="fw-bold my-2">Step 4</span>
            <br />
            After you are done with your internship, you will be an honorable
            member of our community for life. Your image and details will be
            displayed on our website and you are alotted to a team, where you
            will write the destiny of the next 'tech revolution'!
          </p>
        </div>
      </div>
    </div>
  );
}
