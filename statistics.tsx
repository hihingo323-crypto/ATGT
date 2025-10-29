import { Card } from "@/components/ui/card"

const stats = [
  {
    number: "90%",
    label: "Tai nạn có thể phòng tránh",
    description: "bằng cách tuân thủ luật giao thông",
  },
  {
    number: "50%",
    label: "Giảm nguy hiểm",
    description: "khi đeo dây an toàn hoặc đội mũ bảo hiểm",
  },
  {
    number: "3 giây",
    label: "Thời gian phản ứng",
    description: "cần thiết để tránh tai nạn",
  },
  {
    number: "100km/h",
    label: "Tốc độ an toàn",
    description: "trên đường cao tốc trong điều kiện tốt",
  },
]

export function Statistics() {
  return (
    <section id="statistics" className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Những Con Số Quan Trọng</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Dữ liệu thực tế về an toàn giao thông</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center bg-white">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3">{stat.number}</div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
