import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
];


const About = () => {
  return (
    <article data-page="about">
      <header>
        <h2 className="pt-16 text-white text-xl font-bold">About me</h2>
      </header>
      <section className="leading-6 text-white">
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

      <section className="service">

        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">

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