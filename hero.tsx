export function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            An Toàn Giao Thông Cho Mọi Người
          </h1>
          <p className="text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto text-balance">
            Tìm hiểu những quy tắc, kỹ năng và kiến thức cần thiết để lái xe an toàn và bảo vệ bản thân trên đường.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
            Bắt Đầu Học Ngay
          </button>
        </div>
      </div>
    </section>
  )
}
