export default function FamiliarTechnologies() {
  const techLogos = [
    
    "/docker.svg",
    "/sql.svg",
    "/aws.png",
    "/azure.svg",
    "/gcp.svg",
    "/python.png",
    "/pyspark.png",
    "/tensorflow.svg",
    "/pytorch.png",
    "/kubernetes.svg",
    "/powebi1.png",
    "/tableau1.png",
    "/excel.svg",
    "/rust.svg",
    "/gitlab.svg",
    // add more paths as needed
  ];

  // Duplicate the array to create an infinite loop illusion
  const logos = [...techLogos, ...techLogos];

  return (
    <div className="relative  overflow-hidden  container mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center mb-16">
        Familiar Technologies
      </h2>

      <div className="animate-marquee flex whitespace-nowrap gap-12">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Tech logo"
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
