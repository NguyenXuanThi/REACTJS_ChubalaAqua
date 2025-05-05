"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { fishFoodData } from "@/data/fish-food"
import type { FishFood } from "@/types/fish-food"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Sidebar from "@/components/sidebar"
import CategoryProductList from "@/components/category-product-list"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"
import { fishData } from "@/data/fish-data"

// Map of category slugs to display names
const categoryNames: Record<string, string> = {
  "thuc-an-ca-canh": "Thức ăn cá cảnh",
  "thuc-an-ca-koi": "Thức ăn cá Koi",
  "thuc-an-ca-rong": "Thức ăn cá rồng",
  "thuc-an-ca-dia": "Thức ăn cá đĩa",
  "thuc-an-ca-vang": "Thức ăn cá vàng",
  "thuc-an-ca-la-han": "Thức ăn cá La Hán",
  "thuc-an-ca-betta": "Thức ăn cá Betta",
  "thuc-an-ca-neon": "Thức ăn cá Neon",
  "thuc-an-ca-thuy-sinh": "Thức ăn cá thủy sinh",
  "ca-canh": "Cá cảnh",
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.category as string
  const [products, setProducts] = useState<FishFood[]>([])
  const [loading, setLoading] = useState(true)
  const categoryName = categoryNames[categorySlug] || "Sản phẩm"

  useEffect(() => {
    // Filter products by category
    let filteredProducts: FishFood[] = []
    if (params.category === "ca-canh") {
      filteredProducts = fishData as any
    } else if (fishData.some((fish) => fish.category === params.category)) {
      filteredProducts = fishData.filter((fish) => fish.category === params.category) as any
    } else {
      filteredProducts = fishFoodData.filter((product) => product.category === categorySlug)
    }

    // Simulate API delay
    setTimeout(() => {
      setProducts(filteredProducts)
      setLoading(false)
    }, 300)
  }, [categorySlug])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/san-pham">Sản phẩm</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{categoryName}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar className="w-full md:w-64" activeCategory={categorySlug} />

          <div className="flex-1">
            {loading ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="animate-pulse text-xl">Đang tải...</div>
              </div>
            ) : products.length > 0 ? (
              <CategoryProductList products={products} categoryName={categoryName} />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-gray-500 mb-4">Không tìm thấy sản phẩm trong danh mục này</div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
