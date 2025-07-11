const ServiceCard = ( { icon, title, description }) => {
  return (

    <div className="h-full hover:scale-105 transition-all duration-300">
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="h-full flex flex-col justify-between items-center bg-gray-900 w-full rounded-xl shadow-lg shadow-blue-500/10 text-center px-6 py-8 gap-4"
    >
      <div className="text-blue-500 text-4xl transform translate-y-5">
        {icon}
      </div>
      <h1 className="text-white text-xl font-bold">{title}</h1>
      <p className="text-gray-300 text-sm px-2">{description}</p>
    </div>
  </div>
  
  )
}

export default ServiceCard
