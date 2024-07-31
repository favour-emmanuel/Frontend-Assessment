import { departments } from "../constants";

const DepartmentPage = () => {
  return (
    <>
      <section id="departments" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Departments</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg w-60"
              >
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
                <p className="mb-4">{dept.description}</p>
                <a href={dept.link} className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentPage;
