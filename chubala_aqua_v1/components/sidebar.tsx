"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

interface SidebarProps {
  className?: string
  activeCategory?: string
}

export default function Sidebar({ className, activeCategory }: SidebarProps) {
  const pathname = usePathname()

  // Xác định xem đang ở trang cá cảnh hay thức ăn
  const isOnFishPage = pathname.includes("/ca-") || pathname === "/ca-canh"
  const isOnFoodPage = pathname.includes("/thuc-an")

  // Danh mục cá cảnh
  const fishCategories = [
    { name: "Cá Koi", href: "/ca-koi", slug: "ca-koi" },
    { name: "Cá Rồng", href: "/ca-rong", slug: "ca-rong" },
    { name: "Cá Đĩa", href: "/ca-dia", slug: "ca-dia" },
    { name: "Cá Vàng", href: "/ca-vang", slug: "ca-vang" },
    { name: "Cá La Hán", href: "/ca-la-han", slug: "ca-la-han" },
    { name: "Cá Betta", href: "/ca-betta", slug: "ca-betta" },
    { name: "Cá Neon", href: "/ca-neon", slug: "ca-neon" },
    { name: "Cá Thủy Sinh", href: "/ca-thuy-sinh", slug: "ca-thuy-sinh" },
    { name: "Cá Ali", href: "/ca-ali", slug: "ca-ali" },
    { name: "Cá Cảnh Khác", href: "/ca-canh-khac", slug: "ca-canh-khac" },
  ]

  // Danh mục thức ăn cá cảnh
  const fishFoodCategories = [
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

  // Chọn danh mục phù hợp dựa trên trang hiện tại
  const categories = isOnFoodPage ? fishFoodCategories : fishCategories
  const categoryTitle = isOnFoodPage ? "DANH MỤC THỨC ĂN" : "DANH MỤC CÁ CẢNH"
  const featuredTitle = isOnFoodPage ? "THỨC ĂN NỔI BẬT" : "CÁ CẢNH NỔI BẬT"
  const featuredItems = isOnFoodPage
    ? [
        { name: "Thức ăn cá cảnh loại 1", price: "120.000₫", img: "/img/1.png" },
        { name: "Thức ăn cá cảnh loại 2", price: "150.000₫", img: "/img/2.png" },
        { name: "Thức ăn cá cảnh loại 3", price: "180.000₫", img: "/img/3.png" },
      ]
    : [
        { name: "Cá Betta Halfmoon 1", price: "120.000₫", img: "/img/ca1.jpg" },
        { name: "Cá Koi Nhật Bản", price: "350.000₫", img: "/img/ca2.jpg" },
        { name: "Cá Rồng Huyết Long", price: "1.200.000₫", img: "/img/ca3.jpg" },
      ]

  return (
    <div className={className}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="bg-green-600 text-white py-3 px-4 font-medium">{categoryTitle}</div>
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
        <div className="bg-green-600 text-white py-3 px-4 font-medium">{featuredTitle}</div>
        <div className="p-4 space-y-4">
          {featuredItems.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0">
              <img src={item.img} alt={item.name}/>
              </div>
              <div>
                <h3 className="font-medium text-sm hover:text-green-600">{item.name}</h3>
                <p className="text-red-600 font-medium text-sm mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
