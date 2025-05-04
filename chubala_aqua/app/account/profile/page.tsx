"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, ShoppingBag, Heart, LogOut, User, Key, Bell } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/account/login")
    }
  }, [isLoading, isAuthenticated, router])

  // Handle logout
  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <div className="animate-pulse text-xl">Đang tải...</div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">TÀI KHOẢN CỦA TÔI</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-3">
                    <Image
                      src={user.avatar || "/placeholder.svg?height=100&width=100"}
                      alt={user.fullName}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                    <button className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full">
                      <Pencil className="h-4 w-4" />
                    </button>
                  </div>
                  <h2 className="font-bold text-lg">{user.fullName}</h2>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                </div>

                <nav className="space-y-1">
                  <Link
                    href="/account/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md bg-green-50 text-green-600 font-medium"
                  >
                    <User className="h-5 w-5" />
                    <span>Thông tin tài khoản</span>
                  </Link>
                  <Link
                    href="/account/orders"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Đơn hàng của tôi</span>
                  </Link>
                  <Link
                    href="/account/wishlist"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Sản phẩm yêu thích</span>
                  </Link>
                  <Link
                    href="/account/change-password"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    <Key className="h-5 w-5" />
                    <span>Đổi mật khẩu</span>
                  </Link>
                  <Link
                    href="/account/notifications"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    <Bell className="h-5 w-5" />
                    <span>Thông báo</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50 text-red-500 w-full text-left"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Đăng xuất</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main content */}
            <div className="md:col-span-3">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="info">Thông tin cá nhân</TabsTrigger>
                  <TabsTrigger value="address">Địa chỉ</TabsTrigger>
                </TabsList>

                <TabsContent value="info">
                  <Card>
                    <CardHeader>
                      <CardTitle>Thông tin cá nhân</CardTitle>
                      <CardDescription>
                        Cập nhật thông tin cá nhân của bạn. Đảm bảo email của bạn luôn chính xác.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Họ và tên</Label>
                          <Input id="fullName" defaultValue={user.fullName} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue={user.email} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Số điện thoại</Label>
                          <Input id="phone" defaultValue={user.phone} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthday">Ngày sinh</Label>
                          <Input id="birthday" type="date" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button className="bg-green-600 hover:bg-green-700">Lưu thay đổi</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="address">
                  <Card>
                    <CardHeader>
                      <CardTitle>Địa chỉ giao hàng</CardTitle>
                      <CardDescription>
                        Quản lý địa chỉ giao hàng của bạn. Bạn có thể thêm nhiều địa chỉ khác nhau.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border rounded-md p-4 mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{user.fullName} (Địa chỉ mặc định)</h3>
                            <p className="text-sm text-gray-500">{user.phone}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Sửa
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-500">
                              Xóa
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm">123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</p>
                      </div>

                      <Button variant="outline" className="w-full border-dashed">
                        + Thêm địa chỉ mới
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
