"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { FishFood } from "@/types/fish-food"
import { useCart } from "@/context/cart-context"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

interface ProductCardProps {
  product: FishFood
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, originalPrice, image, discount } = product
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      addItem(product, 1)
      setIsAdding(false)

      toast({
        title: "Đã thêm vào giỏ hàng",
        description: name,
        action: (
          <ToastAction altText="Xem giỏ hàng">
            <Link href="/cart">Xem giỏ hàng</Link>
          </ToastAction>
        ),
      })
    }, 300)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Link href={`/product/${id}`}>
          <div className="aspect-square overflow-hidden">
            <Image
              src={image || "/placeholder.svg?height=300&width=300"}
              alt={name}
              width={300}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
            -{discount}%
          </div>
        )}
      </div>

      <div className="p-3">
        <Link href={`/product/${id}`}>
          <h3 className="font-medium text-sm mb-2 hover:text-green-600 line-clamp-2 min-h-[2.5rem]">{name}</h3>
        </Link>

        <div className="flex items-center mb-3">
          <span className="text-red-600 font-bold">{price.toLocaleString()}₫</span>
          {originalPrice > price && (
            <span className="text-gray-500 text-sm line-through ml-2">{originalPrice.toLocaleString()}₫</span>
          )}
        </div>

        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white text-sm"
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isAdding ? "Đang thêm..." : "Thêm vào giỏ"}
        </Button>
      </div>
    </div>
  )
}
