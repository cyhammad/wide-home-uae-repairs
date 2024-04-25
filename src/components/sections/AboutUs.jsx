import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  const cards = [
    {
      title: "20 Years Of Experience",
      description:
        "Delivering top-tier home repair services across the UAE with two decades of unmatched expertise and dedication to quality craftsmanship.",
    },
    {
      title: "30 Minutes Quick Appointment",
      description:
        "Get your home repairs done swiftly with our 30-minute quick appointment service, ensuring efficient solutions tailored to your needs.",
    },
    {
      title: "16 Technicians",
      description:
        "With a team of 16 skilled technicians, we offer comprehensive coverage and rapid response to all your home repair needs across the UAE.",
    },
    {
      title: "10k Repairs Experience",
      description:
        "Benefit from our extensive 10,000 repairs worth of experience, ensuring reliable solutions and expertise for your home repair needs.",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-evenly pb-16 pt-36">
        {cards.map((card, index) => (
          <AboutUsCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default AboutUs;
