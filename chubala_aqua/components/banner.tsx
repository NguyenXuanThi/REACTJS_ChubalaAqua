import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden">
      <Image
        src="/img/banner.jpg"
        alt="Thức ăn cá cảnh banner"
        width={1200}
        height={400}
        className="w-full h-full object-cover"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4">THỨC ĂN CÁ CẢNH</h1>
      </div> */}
    </div>
  )
}
