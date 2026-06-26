function StatCard({ title, value }) {
  return (
    <div
      className="
      bg-[#182235]
      rounded-2xl
      p-6
      h-36
      shadow-xl
      border
      border-gray-700
      hover:border-purple-500
      hover:-translate-y-1
      hover:shadow-purple-500/20
      transition-all
      duration-300
      flex
      flex-col
      justify-center
      items-center
      "
    >
      <p className="text-gray-400 text-lg text-center">
        {title}
      </p>

      <h1 className="text-4xl font-bold text-white mt-3">
        {value}
      </h1>
    </div>
  );
}

export default StatCard;