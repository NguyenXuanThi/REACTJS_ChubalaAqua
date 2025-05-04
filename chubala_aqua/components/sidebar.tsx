import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SidebarProps {
  className?: string
  activeCategory?: string
}

export default function Sidebar({ className, activeCategory }: SidebarProps) {
  const categories = [
    { name: "Thức ăn cá cảnh", href: "/thuc-an-ca-canh", slug: "thuc-an-ca-canh" },
    { name: "Thức ăn cá Koi", href: "/thuc-an-ca-koi", slug: "thuc-an-ca-koi" },
    { name: "Thức ăn cá rồng", href: "/thuc-an-ca-rong", slug: "thuc-an-ca-rong" },
    { name: "Thức ăn cá đĩa", href: "/thuc-an-ca-dia", slug: "thuc-an-ca-dia" },
    { name: "Thức ăn cá vàng", href: "/thuc-an-ca-vang", slug: "thuc-an-ca-vang" },
    { name: "Thức ăn cá la hán", href: "/thuc-an-ca-la-han", slug: "thuc-an-ca-la-han" },
    { name: "Thức ăn cá betta", href: "/thuc-an-ca-betta", slug: "thuc-an-ca-betta" },
    { name: "Thức ăn cá neon", href: "/thuc-an-ca-neon", slug: "thuc-an-ca-neon" },
    { name: "Thức ăn cá thủy sinh", href: "/thuc-an-ca-thuy-sinh", slug: "thuc-an-ca-thuy-sinh" },
  ]

  return (
    <div className={className}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="bg-green-600 text-white py-3 px-4 font-medium">DANH MỤC SẢN PHẨM</div>
        <ul className="divide-y">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={category.href}
                className={`flex items-center justify-between py-3 px-4 hover:bg-gray-50 ${
                  category.slug === activeCategory ? "text-green-600 font-medium" : ""
                }`}
              >
                <span>{category.name}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 text-white py-3 px-4 font-medium">SẢN PHẨM NỔI BẬT</div>
        <div className="p-4 space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-3">
              <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-sm hover:text-green-600">Thức ăn cá cảnh loại {item}</h3>
                <p className="text-red-600 font-medium text-sm mt-1">120.000₫</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
