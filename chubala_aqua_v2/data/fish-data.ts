export interface Fish {
  id: number
  name: string
  scientificName: string
  price: number
  originalPrice: number
  image: string
  description: string
  origin: string
  size: string
  temperature: string
  pH: string
  diet: string
  lifespan: string
  tankSize: string
  compatibility: string
  careLevel: string
  breeding: string
  discount: number
  category: string
  inStock: boolean
  featured: boolean
}

export const fishData: Fish[] = [
  {
    id: 1,
    name: "Cá Betta Halfmoon Đỏ",
    scientificName: "Betta splendens",
    price: 150000,
    originalPrice: 180000,
    image: "/img/ca1.jpg",
    description:
      "Cá Betta Halfmoon Đỏ có màu sắc rực rỡ với đuôi hình bán nguyệt đẹp mắt. Loài cá này được yêu thích bởi vẻ đẹp sang trọng và dễ chăm sóc.",
    origin: "Thái Lan",
    size: "5-7 cm",
    temperature: "24-28°C",
    pH: "6.5-7.5",
    diet: "Thức ăn viên, thức ăn đông lạnh, thức ăn sống",
    lifespan: "2-3 năm",
    tankSize: "Tối thiểu 5 lít",
    compatibility: "Nên nuôi riêng",
    careLevel: "Dễ",
    breeding: "Xây tổ bọt",
    discount: 17,
    category: "ca-betta",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Cá Betta Halfmoon Galaxy",
    scientificName: "Betta splendens",
    price: 250000,
    originalPrice: 300000,
    image: "/img/ca2.jpg",
    description:
      "Cá Betta Halfmoon Galaxy có màu xanh đậm với các đốm trắng như những vì sao trên bầu trời đêm. Đuôi và vây dài, mở rộng tạo thành hình bán nguyệt hoàn hảo.",
    origin: "Thái Lan",
    size: "5-7 cm",
    temperature: "24-28°C",
    pH: "6.5-7.5",
    diet: "Thức ăn viên, thức ăn đông lạnh, thức ăn sống",
    lifespan: "2-3 năm",
    tankSize: "Tối thiểu 5 lít",
    compatibility: "Nên nuôi riêng",
    careLevel: "Dễ",
    breeding: "Xây tổ bọt",
    discount: 17,
    category: "ca-betta",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Cá Betta Koi Nemo",
    scientificName: "Betta splendens",
    price: 200000,
    originalPrice: 200000,
    image: "/img/ca3.jpg",
    description:
      "Cá Betta Koi Nemo có màu sắc đa dạng với các đốm đỏ, trắng và đen giống như cá Koi Nhật Bản. Đây là một trong những dòng Betta được săn đón nhất hiện nay.",
    origin: "Thái Lan",
    size: "5-7 cm",
    temperature: "24-28°C",
    pH: "6.5-7.5",
    diet: "Thức ăn viên, thức ăn đông lạnh, thức ăn sống",
    lifespan: "2-3 năm",
    tankSize: "Tối thiểu 5 lít",
    compatibility: "Nên nuôi riêng",
    careLevel: "Dễ",
    breeding: "Xây tổ bọt",
    discount: 0,
    category: "ca-betta",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Cá Đĩa Blue Diamond",
    scientificName: "Symphysodon aequifasciatus",
    price: 450000,
    originalPrice: 500000,
    image: "/img/ca4.jpg",
    description:
      "Cá Đĩa Blue Diamond có màu xanh dương đậm, thân hình tròn dẹt đặc trưng. Loài cá này được mệnh danh là 'Vua của bể thủy sinh' với vẻ đẹp quý phái.",
    origin: "Nam Mỹ (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "28-30°C",
    pH: "6.0-7.0",
    diet: "Thức ăn viên chuyên dụng, thức ăn đông lạnh, thức ăn sống",
    lifespan: "10-15 năm",
    tankSize: "Tối thiểu 100 lít",
    compatibility: "Trung bình, hợp với các loài cá Nam Mỹ khác",
    careLevel: "Trung bình - Khó",
    breeding: "Đẻ trứng trên bề mặt phẳng",
    discount: 10,
    category: "ca-dia",
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    name: "Cá Đĩa Red Melon",
    scientificName: "Symphysodon aequifasciatus",
    price: 400000,
    originalPrice: 450000,
    image: "/img/ca5.jpg",
    description:
      "Cá Đĩa Red Melon có màu đỏ cam rực rỡ, thân hình tròn dẹt đặc trưng. Loài cá này mang vẻ đẹp nhiệt đới và sống động cho bể thủy sinh.",
    origin: "Nam Mỹ (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "28-30°C",
    pH: "6.0-7.0",
    diet: "Thức ăn viên chuyên dụng, thức ăn đông lạnh, thức ăn sống",
    lifespan: "10-15 năm",
    tankSize: "Tối thiểu 100 lít",
    compatibility: "Trung bình, hợp với các loài cá Nam Mỹ khác",
    careLevel: "Trung bình - Khó",
    breeding: "Đẻ trứng trên bề mặt phẳng",
    discount: 11,
    category: "ca-dia",
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: "Cá Rồng Huyết Long",
    scientificName: "Scleropages formosus",
    price: 15000000,
    originalPrice: 18000000,
    image: "/img/ca6.jpg",
    description:
      "Cá Rồng Huyết Long có màu đỏ rực với vảy lớn óng ánh như vàng. Đây là một trong những loài cá cảnh đắt giá và được săn đón nhất, biểu tượng của sự giàu sang và may mắn.",
    origin: "Đông Nam Á",
    size: "60-90 cm",
    temperature: "26-30°C",
    pH: "6.5-7.5",
    diet: "Thức ăn sống, thức ăn đông lạnh, thức ăn viên cao cấp",
    lifespan: "20-25 năm",
    tankSize: "Tối thiểu 1000 lít",
    compatibility: "Khó, nên nuôi riêng hoặc với cá lớn khác",
    careLevel: "Khó",
    breeding: "Rất khó, hiếm khi sinh sản trong điều kiện nuôi nhốt",
    discount: 17,
    category: "ca-rong",
    inStock: true,
    featured: true,
  },
  {
    id: 7,
    name: "Cá Rồng Bạch Kim",
    scientificName: "Scleropages formosus",
    price: 12000000,
    originalPrice: 12000000,
    image: "/img/ca7.jpg",
    description:
      "Cá Rồng Bạch Kim có màu bạc ánh kim với vảy lớn sáng bóng. Loài cá này mang vẻ đẹp quý tộc và sang trọng, là biểu tượng của sự thịnh vượng.",
    origin: "Đông Nam Á",
    size: "60-90 cm",
    temperature: "26-30°C",
    pH: "6.5-7.5",
    diet: "Thức ăn sống, thức ăn đông lạnh, thức ăn viên cao cấp",
    lifespan: "20-25 năm",
    tankSize: "Tối thiểu 1000 lít",
    compatibility: "Khó, nên nuôi riêng hoặc với cá lớn khác",
    careLevel: "Khó",
    breeding: "Rất khó, hiếm khi sinh sản trong điều kiện nuôi nhốt",
    discount: 0,
    category: "ca-rong",
    inStock: true,
    featured: false,
  },
  {
    id: 8,
    name: "Cá Koi Kohaku",
    scientificName: "Cyprinus carpio koi",
    price: 1500000,
    originalPrice: 1800000,
    image: "/img/ca8.jpg",
    description:
      "Cá Koi Kohaku có nền trắng với các đốm đỏ tươi. Đây là một trong những dòng Koi truyền thống và được yêu thích nhất, biểu tượng cho sự may mắn và thịnh vượng.",
    origin: "Nhật Bản",
    size: "60-90 cm",
    temperature: "18-25°C",
    pH: "7.0-8.5",
    diet: "Thức ăn viên chuyên dụng, rau củ",
    lifespan: "25-35 năm",
    tankSize: "Tối thiểu 1000 lít, thích hợp với hồ ngoài trời",
    compatibility: "Tốt, có thể nuôi chung với các loài Koi khác",
    careLevel: "Trung bình",
    breeding: "Đẻ trứng vào thực vật nước",
    discount: 17,
    category: "ca-koi",
    inStock: true,
    featured: true,
  },
  {
    id: 9,
    name: "Cá Koi Showa",
    scientificName: "Cyprinus carpio koi",
    price: 1800000,
    originalPrice: 2000000,
    image: "/img/ca9.jpg",
    description:
      "Cá Koi Showa có nền đen với các đốm đỏ và trắng. Đây là một trong những dòng Koi truyền thống của Nhật Bản, mang vẻ đẹp mạnh mẽ và cá tính.",
    origin: "Nhật Bản",
    size: "60-90 cm",
    temperature: "18-25°C",
    pH: "7.0-8.5",
    diet: "Thức ăn viên chuyên dụng, rau củ",
    lifespan: "25-35 năm",
    tankSize: "Tối thiểu 1000 lít, thích hợp với hồ ngoài trời",
    compatibility: "Tốt, có thể nuôi chung với các loài Koi khác",
    careLevel: "Trung bình",
    breeding: "Đẻ trứng vào thực vật nước",
    discount: 10,
    category: "ca-koi",
    inStock: true,
    featured: false,
  },
  {
    id: 10,
    name: "Cá La Hán King Kamfa",
    scientificName: "Cichlasoma sp.",
    price: 1200000,
    originalPrice: 1500000,
    image: "/img/ca10.jpg",
    description:
      "Cá La Hán King Kamfa có đầu to, u đầu phát triển mạnh và màu sắc rực rỡ. Đây là một trong những dòng La Hán cao cấp được săn đón nhất hiện nay.",
    origin: "Thái Lan (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "26-30°C",
    pH: "7.0-8.0",
    diet: "Thức ăn viên chuyên dụng, thức ăn đông lạnh",
    lifespan: "10-12 năm",
    tankSize: "Tối thiểu 100 lít",
    compatibility: "Trung bình, có thể hung dữ",
    careLevel: "Trung bình",
    breeding: "Đẻ trứng và bảo vệ con non",
    discount: 20,
    category: "ca-la-han",
    inStock: true,
    featured: true,
  },
  {
    id: 11,
    name: "Cá La Hán Red Dragon",
    scientificName: "Cichlasoma sp.",
    price: 1000000,
    originalPrice: 1200000,
    image: "/img/ca11.jpg",
    description:
      "Cá La Hán Red Dragon có màu đỏ rực với u đầu phát triển tốt. Loài cá này mang vẻ đẹp mạnh mẽ và uy nghiêm, được nhiều người chơi cá cảnh yêu thích.",
    origin: "Thái Lan (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "26-30°C",
    pH: "7.0-8.0",
    diet: "Thức ăn viên chuyên dụng, thức ăn đông lạnh",
    lifespan: "10-12 năm",
    tankSize: "Tối thiểu 100 lít",
    compatibility: "Trung bình, có thể hung dữ",
    careLevel: "Trung bình",
    breeding: "Đẻ trứng và bảo vệ con non",
    discount: 17,
    category: "ca-la-han",
    inStock: true,
    featured: false,
  },
  {
    id: 12,
    name: "Cá Neon Tetra",
    scientificName: "Paracheirodon innesi",
    price: 15000,
    originalPrice: 20000,
    image: "/img/ca12.jpg",
    description:
      "Cá Neon Tetra có thân nhỏ với dải màu xanh neon và đỏ rực rỡ. Loài cá này bơi theo đàn, tạo nên khung cảnh sống động và đẹp mắt trong bể thủy sinh.",
    origin: "Nam Mỹ",
    size: "3-4 cm",
    temperature: "22-26°C",
    pH: "6.0-7.0",
    diet: "Thức ăn viên nhỏ, thức ăn đông lạnh",
    lifespan: "3-5 năm",
    tankSize: "Tối thiểu 40 lít",
    compatibility: "Tốt, hòa đồng với nhiều loài cá khác",
    careLevel: "Dễ",
    breeding: "Đẻ trứng, cần điều kiện đặc biệt",
    discount: 25,
    category: "ca-thuy-sinh",
    inStock: true,
    featured: true,
  },
  {
    id: 13,
    name: "Cá Hồng Két",
    scientificName: "Xiphophorus maculatus",
    price: 25000,
    originalPrice: 25000,
    image: "/img/ca13.jpg",
    description:
      "Cá Hồng Két có nhiều màu sắc đa dạng, thân hình tròn và dễ thương. Loài cá này sinh sản nhanh và dễ chăm sóc, phù hợp cho người mới bắt đầu.",
    origin: "Trung Mỹ",
    size: "4-5 cm",
    temperature: "22-28°C",
    pH: "7.0-8.0",
    diet: "Thức ăn viên, thức ăn đông lạnh, thức ăn sống",
    lifespan: "3-5 năm",
    tankSize: "Tối thiểu 40 lít",
    compatibility: "Tốt, hòa đồng với nhiều loài cá khác",
    careLevel: "Dễ",
    breeding: "Đẻ con",
    discount: 0,
    category: "ca-thuy-sinh",
    inStock: true,
    featured: false,
  },
  {
    id: 14,
    name: "Cá Mún Guppy Full Red",
    scientificName: "Poecilia reticulata",
    price: 35000,
    originalPrice: 40000,
    image: "/img/ca14.jpg",
    description:
      "Cá Mún Guppy Full Red có màu đỏ rực từ đầu đến đuôi, đặc biệt là cá đực có đuôi dài và rực rỡ. Loài cá này dễ nuôi và sinh sản nhanh.",
    origin: "Nam Mỹ (nuôi sinh sản)",
    size: "3-6 cm",
    temperature: "22-28°C",
    pH: "7.0-8.0",
    diet: "Thức ăn viên nhỏ, thức ăn đông lạnh",
    lifespan: "1-3 năm",
    tankSize: "Tối thiểu 20 lít",
    compatibility: "Tốt, hòa đồng với nhiều loài cá khác",
    careLevel: "Dễ",
    breeding: "Đẻ con, sinh sản nhanh",
    discount: 13,
    category: "ca-thuy-sinh",
    inStock: true,
    featured: true,
  },
  {
    id: 15,
    name: "Cá Mún Guppy Dumbo Mosaic",
    scientificName: "Poecilia reticulata",
    price: 45000,
    originalPrice: 50000,
    image: "/img/ca15.jpg",
    description:
      "Cá Mún Guppy Dumbo Mosaic có vây ngực lớn (dumbo) và màu sắc đa dạng như khảm. Đây là một trong những dòng Guppy đẹp và được ưa chuộng hiện nay.",
    origin: "Nam Mỹ (nuôi sinh sản)",
    size: "3-6 cm",
    temperature: "22-28°C",
    pH: "7.0-8.0",
    diet: "Thức ăn viên nhỏ, thức ăn đông lạnh",
    lifespan: "1-3 năm",
    tankSize: "Tối thiểu 20 lít",
    compatibility: "Tốt, hòa đồng với nhiều loài cá khác",
    careLevel: "Dễ",
    breeding: "Đẻ con, sinh sản nhanh",
    discount: 10,
    category: "ca-thuy-sinh",
    inStock: true,
    featured: false,
  },
  {
    id: 16,
    name: "Cá Ali Albino",
    scientificName: "Pterophyllum scalare",
    price: 120000,
    originalPrice: 150000,
    image: "/img/ca16.jpg",
    description:
      "Cá Ali Albino có màu trắng đục với mắt đỏ đặc trưng. Thân hình dẹp, vây dài tạo nên vẻ đẹp thanh thoát và quý phái trong bể thủy sinh.",
    origin: "Nam Mỹ (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "24-28°C",
    pH: "6.5-7.5",
    diet: "Thức ăn viên, thức ăn đông lạnh, thức ăn sống",
    lifespan: "8-10 năm",
    tankSize: "Tối thiểu 80 lít",
    compatibility: "Trung bình, hợp với các loài cá Nam Mỹ khác",
    careLevel: "Trung bình",
    breeding: "Đẻ trứng trên bề mặt phẳng",
    discount: 20,
    category: "ca-ali",
    inStock: true,
    featured: true,
  },
  {
    id: 17,
    name: "Cá Ali Koi",
    scientificName: "Pterophyllum scalare",
    price: 150000,
    originalPrice: 180000,
    image: "/img/ca17.jpg",
    description:
      "Cá Ali Koi có màu sắc đa dạng với các đốm đỏ, đen và trắng giống như cá Koi. Loài cá này mang vẻ đẹp độc đáo và sang trọng cho bể thủy sinh.",
    origin: "Nam Mỹ (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "24-28°C",
    pH: "6.5-7.5",
    diet: "Thức ăn viên, thức ăn đông lạnh, thức ăn sống",
    lifespan: "8-10 năm",
    tankSize: "Tối thiểu 80 lít",
    compatibility: "Trung bình, hợp với các loài cá Nam Mỹ khác",
    careLevel: "Trung bình",
    breeding: "Đẻ trứng trên bề mặt phẳng",
    discount: 17,
    category: "ca-ali",
    inStock: true,
    featured: false,
  },
  {
    id: 18,
    name: "Cá Dĩa Bạc",
    scientificName: "Metynnis argenteus",
    price: 80000,
    originalPrice: 100000,
    image: "/img/ca18.jpg",
    description:
      "Cá Dĩa Bạc có thân hình tròn dẹp với màu bạc ánh kim. Loài cá này bơi theo đàn, tạo nên khung cảnh sống động và đẹp mắt trong bể thủy sinh.",
    origin: "Nam Mỹ",
    size: "10-15 cm",
    temperature: "24-28°C",
    pH: "6.5-7.5",
    diet: "Thức ăn viên, thức ăn đông lạnh, thực vật",
    lifespan: "5-8 năm",
    tankSize: "Tối thiểu 100 lít",
    compatibility: "Tốt, hòa đồng với nhiều loài cá khác",
    careLevel: "Dễ - Trung bình",
    breeding: "Đẻ trứng, khó sinh sản trong điều kiện nuôi nhốt",
    discount: 20,
    category: "ca-thuy-sinh",
    inStock: true,
    featured: false,
  },
  {
    id: 19,
    name: "Cá Phượng Hoàng Đỏ",
    scientificName: "Carassius auratus",
    price: 180000,
    originalPrice: 200000,
    image: "/img/ca19.jpg",
    description:
      "Cá Phượng Hoàng Đỏ có màu đỏ rực với đuôi và vây dài, phát triển. Loài cá này mang vẻ đẹp sang trọng và quý phái, biểu tượng cho sự may mắn.",
    origin: "Trung Quốc (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "18-24°C",
    pH: "7.0-8.0",
    diet: "Thức ăn viên, thức ăn đông lạnh, thực vật",
    lifespan: "10-15 năm",
    tankSize: "Tối thiểu 80 lít",
    compatibility: "Tốt, hòa đồng với các loài cá vàng khác",
    careLevel: "Trung bình",
    breeding: "Đẻ trứng vào thực vật nước",
    discount: 10,
    category: "ca-vang",
    inStock: true,
    featured: true,
  },
  {
    id: 20,
    name: "Cá Vàng Ranchu",
    scientificName: "Carassius auratus",
    price: 250000,
    originalPrice: 300000,
    image: "/img/ca20.jpg",
    description:
      "Cá Vàng Ranchu có thân hình tròn, đầu to với u đầu phát triển và không có vây lưng. Đây là một trong những dòng cá vàng cao cấp của Nhật Bản.",
    origin: "Nhật Bản (nuôi sinh sản)",
    size: "15-20 cm",
    temperature: "18-24°C",
    pH: "7.0-8.0",
    diet: "Thức ăn viên, thức ăn đông lạnh, thực vật",
    lifespan: "10-15 năm",
    tankSize: "Tối thiểu 80 lít",
    compatibility: "Tốt, hòa đồng với các loài cá vàng khác",
    careLevel: "Trung bình - Khó",
    breeding: "Đẻ trứng vào thực vật nước",
    discount: 17,
    category: "ca-vang",
    inStock: true,
    featured: false,
  },
]
