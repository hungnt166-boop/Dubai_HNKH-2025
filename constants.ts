import { DaySchedule, LocationInfo, FlightInfo, ContactInfo } from './types';

export const APP_NAME = "HÀNH TRÌNH KẾT NỐI UAE - THỐNG NHẤT";

// --- CONTACT DATA ---
export const CONTACT: ContactInfo = {
  name: "Hoàng Trung Phong",
  role: "Giám đốc kinh doanh",
  phone: "0986969160",
  zalo: "https://zalo.me/0986969160"
};

// --- FLIGHT DATA ---
export const FLIGHTS: { outbound: FlightInfo; inbound: FlightInfo } = {
  outbound: {
    code: "EK395",
    route: "Hà Nội (HAN) - Dubai (DXB)",
    date: "02/12/2025",
    time: "00h25 - 05h00",
    checkUrl: "https://www.google.com/search?q=flight+status+EK395"
  },
  inbound: {
    code: "EK394",
    route: "Dubai (DXB) - Hà Nội (HAN)",
    date: "06/12/2025",
    time: "03h40 - 12h40",
    checkUrl: "https://www.google.com/search?q=flight+status+EK394"
  }
};

export const MEETING_INFO = {
  location1: "Nhà máy (Lô A2CN3 cụm CN Từ Liêm, Xuân Phương)",
  time1: "Trước 19h30 ngày 01/12/2025",
  location2: "Sân bay Nội Bài (Sảnh A - Tầng 3 - Nhà ga T2)",
  time2: "Trước 21h00 ngày 01/12/2025"
};

// --- ITINERARY DATA (From PDF) ---
export const ITINERARY_DATA: DaySchedule[] = [
  {
    day: 1,
    date: "01/12/2025 (Thứ 2)",
    title: "Hà Nội - Dubai",
    activities: [
      { time: "19:30", title: "Tập trung tại Nhà máy", description: "Lô A2CN3 cụm CN Từ Liêm, Xuân Phương, Hà Nội." },
      { time: "21:00", title: "Tập trung tại Sân bay", description: "Sảnh A - Tầng 3 - Nhà ga T2 Nội Bài." },
      { time: "Tối", title: "Ăn tối", description: "Ăn tối tại nhà hàng Phở Lý Quốc Sư." },
      { time: "Đêm", title: "Ra sân bay", description: "Làm thủ tục xuất cảnh." },
      { time: "00:25", title: "Cất cánh", description: "Chuyến bay EK395 đi Dubai." }
    ]
  },
  {
    day: 2,
    date: "02/12/2025 (Thứ 3)",
    title: "Khám phá Dubai",
    activities: [
      { time: "05:00", title: "Hạ cánh", description: "Sân bay Dubai International Airport (DXB)." },
      { time: "Sáng", title: "Tham quan", description: "Đảo Cọ Palm Jumeirah\nChụp ảnh bên ngoài khách sạn 7* Burj Al Arab\nTham quan vườn hoa Miracle Dubai" },
      { time: "Trưa", title: "Ăn trưa", description: "Tại nhà hàng địa phương." },
      { time: "Chiều", title: "Nhận phòng", description: "Khách sạn 5 sao: Asiana Hotel." },
      { time: "Tối", title: "Du thuyền Marina", description: "Ngắm Cayan Tower, Ain Dubai, Atlantis The Palm, Skyline JBR.\nChụp ảnh tại Bluewater Island." },
      { time: "Đêm", title: "Nghỉ ngơi", description: "Về khách sạn hoặc tự do khám phá." }
    ]
  },
  {
    day: 3,
    date: "03/12/2025 (Thứ 4)",
    title: "Văn hóa & Sa mạc",
    activities: [
      { time: "Sáng", title: "Khu phố cổ Al Fahidi", description: "Qua kênh bằng thuyền gỗ truyền thống\nTham quan Chợ gia vị Spice Souk\nTham quan Chợ vàng Gold Souk\nMua sắm đồ da độc đáo" },
      { time: "Trưa", title: "Ăn trưa", description: "Tại nhà hàng, sau đó về khách sạn nghỉ ngơi." },
      { time: "Chiều", title: "Sa mạc Safari", description: "Ngắm hoàng hôn sa mạc rực rỡ\nCưỡi lạc đà, vẽ henna\nMặc trang phục truyền thống Ả Rập" },
      { time: "Tối", title: "Tiệc BBQ & Belly Dance", description: "Ăn buffet Ả Rập và thưởng thức múa bụng trong đêm sa mạc." }
    ]
  },
  {
    day: 4,
    date: "04/12/2025 (Thứ 5)",
    title: "Abu Dhabi - Dubai",
    activities: [
      { time: "Sáng", title: "Di chuyển Abu Dhabi", description: "Tham quan Đại thánh đường hồi giáo Sheikh Zayed (dát vàng lớn nhất thế giới)." },
      { time: "Trưa", title: "Ăn trưa", description: "Tại nhà hàng ở Abu Dhabi." },
      { time: "Chiều", title: "Tham quan", description: "Chụp ảnh khách sạn Emirates Palace (bên ngoài)\nCung điện Tổng thống\nLàng di sản Heritage Village." },
      { time: "Tối", title: "Về Dubai", description: "Đoàn dùng bữa tối và nghỉ ngơi tại khách sạn." }
    ]
  },
  {
    day: 5,
    date: "05/12/2025 (Thứ 6)",
    title: "Dubai - Mua sắm",
    activities: [
      { time: "Sáng", title: "Trả phòng", description: "Ăn sáng và làm thủ tục trả phòng." },
      { time: "Tham quan", title: "Văn hóa & Nghệ thuật", description: "Bảo tàng Tương lai (Museum of the Future)\nCung điện Sheikh Palace\nTrung tâm nghệ thuật hồi giáo." },
      { time: "Trưa", title: "Ăn trưa", description: "Đoàn ăn trưa tại nhà hàng." },
      { time: "Chiều", title: "Mua sắm", description: "Trung tâm thương mại lớn nhất Dubai - Dubai Mall." },
      { time: "Tối", title: "Ra sân bay", description: "Ăn tối xong ra sân bay làm thủ tục." }
    ]
  },
  {
    day: 6,
    date: "06/12/2025 (Thứ 7)",
    title: "Về Hà Nội",
    activities: [
      { time: "03:40", title: "Cất cánh", description: "Chuyến bay EK394 (Dubai -> Hà Nội)." },
      { time: "12:40", title: "Hạ cánh", description: "Về đến Nội Bài, xe đón đoàn về lại Nhà máy." }
    ]
  }
];

// --- LOCATIONS INFO ---
export const LOCATIONS: LocationInfo[] = [
  {
    name: "Thánh đường Sheikh Zayed",
    description: "Thánh đường hồi giáo dát vàng lớn nhất thế giới tại Abu Dhabi. Một kiệt tác kiến trúc với 82 mái vòm, hơn 1.000 cột, đèn chùm dát vàng 24 carat và thảm dệt tay lớn nhất thế giới.",
    note: "Trang phục bắt buộc: Nam quần dài áo có cổ. Nữ trùm kín đầu, không mặc váy ngắn, áo sát nách.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sheikh_Zayed_Mosque_view.jpg/640px-Sheikh_Zayed_Mosque_view.jpg"
  },
  {
    name: "Sa mạc Safari",
    description: "Trải nghiệm cảm giác mạnh trên đồi cát (Dune Bashing), ngắm hoàng hôn rực rỡ, cưỡi lạc đà và tìm hiểu văn hóa Bedouin.",
    note: "Nên mang dép hoặc giày dễ tháo, mang theo áo khoác mỏng vì ban đêm lạnh.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Rub_al_Khali_002.JPG/640px-Rub_al_Khali_002.JPG"
  },
  {
    name: "Dubai Mall",
    description: "Thiên đường mua sắm lớn nhất thế giới với hơn 1.200 cửa hàng, thủy cung trong nhà và sân trượt băng.",
    note: "Hàng hiệu thường rẻ hơn 10-20% so với VN. Giờ mở cửa đến 12h đêm cuối tuần.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Dubai_Mall_Aquarium_2.jpg/640px-Dubai_Mall_Aquarium_2.jpg"
  },
  {
    name: "Burj Al Arab",
    description: "Khách sạn 7 sao biểu tượng hình cánh buồm, nằm trên một hòn đảo nhân tạo.",
    note: "Đoàn sẽ chụp ảnh check-in từ bãi biển Jumeirah.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Burj_Al_Arab%2C_Dubai%2C_UAE.jpg/640px-Burj_Al_Arab%2C_Dubai%2C_UAE.jpg"
  },
  {
    name: "Vườn hoa Miracle",
    description: "Vườn hoa tự nhiên lớn nhất thế giới ngay giữa sa mạc với hơn 50 triệu bông hoa được tạo hình nghệ thuật.",
    note: "Chuẩn bị máy ảnh đầy pin vì cảnh rất đẹp.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dubai_Miracle_Garden.jpg/640px-Dubai_Miracle_Garden.jpg"
  }
];

// --- AI CONTEXT ---
export const TRIP_CONTEXT = `
Bạn là trợ lý ảo AI cho chuyến đi Dubai "HÀNH TRÌNH KẾT NỐI UAE - THỐNG NHẤT".
Nhiệm vụ: Hỗ trợ thành viên đoàn về lịch trình, thủ tục, lưu ý và thông tin điểm đến.

Dưới đây là thông tin chi tiết về chuyến đi:

1. THÔNG TIN CHUNG:
- Tên chương trình: ${APP_NAME}
- Liên hệ BTC: ${CONTACT.name} - ${CONTACT.role} - SĐT: ${CONTACT.phone} - Zalo: ${CONTACT.zalo}

2. CHUYẾN BAY (Emirates Airlines - 5 Sao):
- Chiều đi: ${FLIGHTS.outbound.code} (${FLIGHTS.outbound.route}) ngày ${FLIGHTS.outbound.date}. Giờ: ${FLIGHTS.outbound.time}.
- Chiều về: ${FLIGHTS.inbound.code} (${FLIGHTS.inbound.route}) ngày ${FLIGHTS.inbound.date}. Giờ: ${FLIGHTS.inbound.time}.

3. ĐIỂM TẬP TRUNG (01/12/2025):
- 19h30: ${MEETING_INFO.location1}
- 21h00: ${MEETING_INFO.location2}

4. LỊCH TRÌNH CHI TIẾT:
${ITINERARY_DATA.map(d => `Ngày ${d.day} (${d.date}): ${d.title}\n${d.activities.map(a => `- ${a.time}: ${a.title}`).join('\n')}`).join('\n\n')}

5. ĐỊA ĐIỂM THAM QUAN:
${LOCATIONS.map(l => `- ${l.name}: ${l.description}. Lưu ý: ${l.note}`).join('\n')}

LƯU Ý QUAN TRỌNG:
- Trang phục: Kín đáo khi vào thánh đường (nữ trùm đầu, nam quần dài).
- Múi giờ: Dubai chậm hơn VN 3 tiếng.
- Tiền tệ: Đổi USD ở VN, sang Dubai đổi AED.
- Ổ cắm: 3 chấu vuông.

Hãy trả lời ngắn gọn, súc tích và hữu ích.
`;
