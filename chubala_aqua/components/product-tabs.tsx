"use client"

import type { FishFood } from "@/types/fish-food"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface ProductTabsProps {
  product: FishFood
}

interface StarProps {
  className?: string
}

function Star({ className }: StarProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}

export default function ProductTabs({ product }: ProductTabsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Mô tả sản phẩm</TabsTrigger>
          <TabsTrigger value="specifications">Thông số kỹ thuật</TabsTrigger>
          <TabsTrigger value="reviews">Đánh giá (12)</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="pt-6">
          <div className="prose max-w-none">
            <h3 className="text-lg font-bold mb-4">{product.name}</h3>

            <p className="mb-4">{product.description}</p>

            <p className="mb-4">
              Thức ăn cá cảnh là một yếu tố quan trọng trong việc nuôi cá cảnh. Việc lựa chọn thức ăn phù hợp sẽ giúp cá
              phát triển khỏe mạnh, màu sắc tươi sáng và tăng tuổi thọ. Thức ăn cá cảnh có nhiều loại khác nhau, phù hợp
              với từng loại cá và môi trường sống của chúng.
            </p>

            <h4 className="text-md font-bold mb-2">Đặc điểm nổi bật:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Giàu dinh dưỡng, cung cấp đầy đủ protein, vitamin và khoáng chất cần thiết</li>
              <li>Tăng cường màu sắc tự nhiên của cá</li>
              <li>Dễ tiêu hóa, không gây đục nước</li>
              <li>Phù hợp với nhiều loại cá cảnh khác nhau</li>
              <li>Bảo quản dễ dàng, thời gian sử dụng lâu</li>
            </ul>

            <h4 className="text-md font-bold mb-2">Hướng dẫn sử dụng:</h4>
            <p className="mb-4">
              Cho cá ăn 2-3 lần mỗi ngày, mỗi lần một lượng vừa đủ trong khoảng 2-3 phút. Không cho cá ăn quá nhiều để
              tránh thức ăn thừa làm ô nhiễm nước. Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.
            </p>

            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
              <p className="text-sm italic">
                Lưu ý: Thông tin sản phẩm có thể thay đổi tùy theo đợt nhập hàng. Vui lòng liên hệ với chúng tôi để biết
                thêm chi tiết.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="specifications" className="pt-6">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 font-medium bg-gray-50 w-1/3">Tên sản phẩm</td>
                <td className="py-2 px-4">{product.name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-medium bg-gray-50">Thương hiệu</td>
                <td className="py-2 px-4">Cá Cảnh Thiên Đức</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-medium bg-gray-50">Xuất xứ</td>
                <td className="py-2 px-4">Việt Nam</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-medium bg-gray-50">Trọng lượng</td>
                <td className="py-2 px-4">100g</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-medium bg-gray-50">Thành phần</td>
                <td className="py-2 px-4">Bột cá, bột tôm, bột gạo, vitamin, khoáng chất</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-medium bg-gray-50">Đối tượng sử dụng</td>
                <td className="py-2 px-4">Các loại cá cảnh</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-medium bg-gray-50">Hạn sử dụng</td>
                <td className="py-2 px-4">12 tháng kể từ ngày sản xuất</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium bg-gray-50">Bảo quản</td>
                <td className="py-2 px-4">Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp</td>
              </tr>
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="reviews" className="pt-6">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">4.0/5</span>
              <span className="text-sm text-gray-500 ml-2">(12 đánh giá)</span>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "Nguyễn Văn A",
                  rating: 5,
                  date: "12/05/2023",
                  comment: "Sản phẩm rất tốt, cá nhà mình ăn rất thích. Giao hàng nhanh, đóng gói cẩn thận.",
                },
                {
                  name: "Trần Thị B",
                  rating: 4,
                  date: "28/04/2023",
                  comment: "Thức ăn chất lượng, cá ăn khỏe, màu sắc đẹp hơn. Sẽ mua lại.",
                },
                {
                  name: "Lê Văn C",
                  rating: 3,
                  date: "15/04/2023",
                  comment: "Sản phẩm tạm ổn, cá ăn được nhưng không nhiều như mong đợi.",
                },
              ].map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          <Button className="bg-green-600 hover:bg-green-700">Viết đánh giá</Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
