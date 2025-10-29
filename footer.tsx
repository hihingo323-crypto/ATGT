import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Về Chúng Tôi</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Chúng tôi cam kết nâng cao nhận thức về an toàn giao thông và giảm thiểu tai nạn trên đường.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tips" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Tư Vấn An Toàn
                </a>
              </li>
              <li>
                <a href="#statistics" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Thống Kê
                </a>
              </li>
              <li>
                <a href="#resources" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Tài Nguyên
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-primary-foreground/80">1900 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="text-primary-foreground/80">info@antoangtaothong.vn</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span className="text-primary-foreground/80">Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 An Toàn Giao Thông. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
