import Service from "./Service";
import { MdDesignServices, MdWeb } from "react-icons/md";

const servicesData = [
  {
    icon: MdDesignServices,
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: MdWeb,
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
];


const About = () => {
  return (
    <article data-page="about">
      <header>
        <h2 className="text-highlight text-xl font-bold">About me</h2>
      </header>
      <section className="pb-5 leading-6 text-white">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I
          add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your
          message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

      <section>
        <h3 className="text-highlight text-xl font-bold mb-2">What I'm doing</h3>
        <ul className="grid grid-cols-1">
        {servicesData.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
        </ul>
      </section>

    </article>
  )
}

export default About