"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import type { FishFood } from "@/types/fish-food"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface CategoryProductListProps {
  products: FishFood[]
  categoryName: string
}

export default function CategoryProductList({ products, categoryName }: CategoryProductListProps) {
  const [sortedProducts, setSortedProducts] = useState<FishFood[]>(products)
  const [sortOption, setSortOption] = useState("default")
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [showInStock, setShowInStock] = useState(true)
  const [showDiscount, setShowDiscount] = useState(false)
  const [showFeatured, setShowFeatured] = useState(false)

  const handleSortChange = (value: string) => {
    setSortOption(value)
    let newSortedProducts = [...products]

    switch (value) {
      case "name-asc":
        newSortedProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        newSortedProducts.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "price-asc":
        newSortedProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        newSortedProducts.sort((a, b) => b.price - a.price)
        break
      case "discount":
        newSortedProducts.sort((a, b) => b.discount - a.discount)
        break
      default:
        // Default sorting (newest)
        newSortedProducts = [...products]
    }

    setSortedProducts(newSortedProducts)
  }

  const applyFilters = () => {
    let filtered = [...products]

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by stock status
    if (showInStock) {
      filtered = filtered.filter((product) => product.inStock)
    }

    // Filter by discount
    if (showDiscount) {
      filtered = filtered.filter((product) => product.discount > 0)
    }

    // Filter by featured
    if (showFeatured) {
      filtered = filtered.filter((product) => product.featured)
    }

    // Apply current sort
    handleSortChange(sortOption)
  }

  // Format price for display
  const formatPrice = (price: number) => {
    return price.toLocaleString() + "₫"
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-xl font-bold mb-2 sm:mb-0">{categoryName.toUpperCase()}</h1>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex-1 sm:flex-initial">
            <Select value={sortOption} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Mặc định</SelectItem>
                <SelectItem value="name-asc">Tên A-Z</SelectItem>
                <SelectItem value="name-desc">Tên Z-A</SelectItem>
                <SelectItem value="price-asc">Giá tăng dần</SelectItem>
                <SelectItem value="price-desc">Giá giảm dần</SelectItem>
                <SelectItem value="discount">Khuyến mãi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:flex hidden">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Lọc</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Lọc sản phẩm</SheetTitle>
                <SheetDescription>Điều chỉnh các bộ lọc để tìm sản phẩm phù hợp</SheetDescription>
              </SheetHeader>

              <div className="py-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Khoảng giá</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 500000]}
                      max={500000}
                      step={10000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Trạng thái</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="inStock"
                        checked={showInStock}
                        onCheckedChange={(checked) => setShowInStock(checked as boolean)}
                      />
                      <Label htmlFor="inStock">Còn hàng</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="discount"
                        checked={showDiscount}
                        onCheckedChange={(checked) => setShowDiscount(checked as boolean)}
                      />
                      <Label htmlFor="discount">Đang giảm giá</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="featured"
                        checked={showFeatured}
                        onCheckedChange={(checked) => setShowFeatured(checked as boolean)}
                      />
                      <Label htmlFor="featured">Sản phẩm nổi bật</Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={applyFilters}>
                  Áp dụng
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Product count and view options */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <div>Hiển thị {sortedProducts.length} sản phẩm</div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
