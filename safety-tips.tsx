import { Card } from "@/components/ui/card"
import { AlertCircle, Eye, Gauge, Users, Shield, Zap } from "lucide-react"

const tips = [
  {
    icon: AlertCircle,
    title: "Tuân Thủ Luật Giao Thông",
    description:
      "Luôn tuân thủ các quy tắc giao thông, biển báo và tín hiệu đèn giao thông để đảm bảo an toàn cho bản thân và những người khác.",
  },
  {
    icon: Eye,
    title: "Tập Trung Khi Lái Xe",
    description:
      "Tránh sử dụng điện thoại, không lái xe khi mệt mỏi hoặc dưới ảnh hưởng của rượu bia. Luôn chú ý đến đường xá.",
  },
  {
    icon: Gauge,
    title: "Kiểm Soát Tốc Độ",
    description:
      "Lái xe với tốc độ phù hợp với điều kiện đường xá. Giảm tốc độ trong khu vực dân cư, trường học và khu vực nguy hiểm.",
  },
  {
    icon: Users,
    title: "Nhường Đường Cho Người Khác",
    description:
      "Hãy lịch sự và nhường đường cho những người khác. Tôn trọng các tài xế khác và người đi bộ trên đường.",
  },
  {
    icon: Shield,
    title: "Sử Dụng Thiết Bị Bảo Vệ",
    description: "Luôn đeo dây an toàn, đội mũ bảo hiểm khi đi xe máy. Đảm bảo xe của bạn có đủ thiết bị an toàn.",
  },
  {
    icon: Zap,
    title: "Bảo Dưỡng Xe Thường Xuyên",
    description:
      "Kiểm tra phanh, lốp xe, đèn và các hệ thống khác thường xuyên. Xe tốt là chìa khóa để lái xe an toàn.",
  },
]

export function SafetyTips() {
  return (
    <section id="tips" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            6 Quy Tắc An Toàn Giao Thông Quan Trọng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những lời khuyên thiết thực giúp bạn và gia đình luôn an toàn trên đường
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition border-l-4 border-l-green-600">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
