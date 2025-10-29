import { Card } from "@/components/ui/card"
import { BookOpen, FileText, Phone, MapPin } from "lucide-react"

const resources = [
  {
    icon: BookOpen,
    title: "Hướng Dẫn Chi Tiết",
    description: "Tài liệu toàn diện về luật giao thông, kỹ năng lái xe và xử lý tình huống khẩn cấp.",
    link: "#",
  },
  {
    icon: FileText,
    title: "Quy Tắc Giao Thông",
    description: "Danh sách đầy đủ các quy tắc, biển báo và tín hiệu giao thông cần biết.",
    link: "#",
  },
  {
    icon: Phone,
    title: "Hỗ Trợ 24/7",
    description: "Liên hệ với chúng tôi bất kỳ lúc nào để được tư vấn về an toàn giao thông.",
    link: "#",
  },
  {
    icon: MapPin,
    title: "Trung Tâm Đào Tạo",
    description: "Tìm các trung tâm đào tạo lái xe uy tín gần bạn để học kỹ năng lái xe an toàn.",
    link: "#",
  },
]

export function Resources() {
  return (
    <section id="resources" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tài Nguyên & Hỗ Trợ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Các công cụ và thông tin để giúp bạn lái xe an toàn hơn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition cursor-pointer group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{resource.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                <a href={resource.link} className="text-green-600 font-semibold hover:text-green-700 transition">
                  Tìm Hiểu Thêm →
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
