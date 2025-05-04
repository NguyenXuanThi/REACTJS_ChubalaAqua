"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu, Phone, User, LogOut, Heart, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const { itemCount } = useCart()
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4">
        {/* Top header with contact info */}
        <div className="py-2 flex justify-between items-center text-sm border-b border-green-500">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>Hotline: 0123.456.789</span>
          </div>
          <div className="flex space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 hover:underline">
                  <span>Xin chào, {user?.fullName.split(" ").pop()}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/account/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Tài khoản của tôi</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/account/orders" className="flex items-center">
                      <Package className="mr-2 h-4 w-4" />
                      <span>Đơn hàng</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/account/wishlist" className="flex items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Sản phẩm yêu thích</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logout()} className="text-red-500 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Đăng xuất</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/account/login" className="hover:underline">
                  Đăng nhập
                </Link>
                <Link href="/account/register" className="hover:underline">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Main header with logo and navigation */}
        <div className="py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              CÁ CẢNH THIÊN ĐỨC
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="py-2 px-4 pr-10 rounded-full text-black w-full md:w-64"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>

            <Link href="/cart">
              <Button variant="outline" className="bg-green-700 hover:bg-green-800 border-none relative">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Giỏ hàng</span>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="hidden md:flex py-3 space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-200">
            TRANG CHỦ
          </Link>
          <Link href="/gioi-thieu" className="hover:text-green-200">
            GIỚI THIỆU
          </Link>
          <Link href="/san-pham" className="hover:text-green-200">
            SẢN PHẨM
          </Link>
          <Link href="/thuc-an-ca-canh" className="hover:text-green-200 font-bold">
            THỨC ĂN CÁ CẢNH
          </Link>
          <Link href="/phu-kien" className="hover:text-green-200">
            PHỤ KIỆN
          </Link>
          <Link href="/tin-tuc" className="hover:text-green-200">
            TIN TỨC
          </Link>
          <Link href="/lien-he" className="hover:text-green-200">
            LIÊN HỆ
          </Link>
        </nav>
      </div>
    </header>
  )
}
