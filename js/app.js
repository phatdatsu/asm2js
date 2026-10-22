// ==========================================
// DỮ LIỆU SẢN PHẨM HOÀN CHỈNH & KHỚP HÌNH ẢNH
// ==========================================
const products = [
  // --- LAPTOP (9 sản phẩm) ---
  {
    id: 1,
    name: "Laptop MSI Cyborg 15 A13UC",
    price: 27990000,
    oldPrice: 30990000,
    image: "IMAGE/text_d_i_7_126.webp",
    shortDescription: "i7-13620H/ 16GB/ 512GB/ RTX3050/ 15.6 FHD",
    category: "Laptop",
    stock: 20,
    specifications: {
      cpu: "Intel Core i7-13620H",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "NVIDIA GeForce RTX 3050",
      display: "15.6 inch Full HD",
    },
    features: [
      "Hiệu năng đỉnh cao với chip Intel Core i7 dòng H thế hệ 13",
      "Card đồ họa rời RTX hỗ trợ dò tia Ray Tracing",
      "Thiết kế phong cách cyberpunk hiện đại, cá tính",
    ],
    detailedDescription:
      "Trang bị bộ vi xử lý Intel Core i7-13620H kết hợp cùng card đồ họa rời RTX 3050, RAM 16GB và ổ cứng 512GB SSD. Màn hình 15.6 inch chuẩn Full HD mang lại không gian hiển thị sắc nét. Dòng máy hướng đến game thủ và người làm đồ họa phổ thông, xử lý mượt mà các tựa game esports (như FO4, CS:GO, Liên Minh Huyền Thoại) và dựng hình cơ bản trên Adobe.",
  },
  {
    id: 2,
    name: "Laptop gaming Lenovo LOQ 15IRX9",
    price: 43990000,
    oldPrice: 46990000,
    image: "IMAGE/text_d_i_8_51.webp",
    shortDescription: "R7-170/ RTX 3050/ 16GB/ 512GB",
    category: "Laptop",
    stock: 15,
    specifications: {
      cpu: "Intel Core i7-13650HX",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "NVIDIA GeForce RTX 4050",
      display: "15.6 inch Full HD 144Hz",
    },
    features: [
      "Chip Intel HX hiệu năng cực cao dành cho tác vụ nặng",
      "Card đồ họa RTX 40 Series tích hợp DLSS 3 AI",
      "Hệ thống tản nhiệt tối ưu giữ nhiệt độ ổn định khi chơi game dài",
    ],
    detailedDescription:
      "Sở hữu sức mạnh từ chip Intel Core i7 dòng HX hiệu năng cực cao, đi kèm card đồ họa RTX tiên tiến, RAM 16GB và 512GB SSD. Đây là mẫu laptop gaming tầm trung cận cao cấp có hệ thống tản nhiệt tối ưu, hỗ trợ DLSS 3 giúp tăng khung hình trong các tựa game AAA nặng và đáp ứng tốt các tác vụ kỹ thuật chuyên sâu.",
  },
  {
    id: 3,
    name: "Laptop ASUS TUF Gaming F15",
    price: 19990000,
    oldPrice: 22490000,
    image: "IMAGE/text_ng_n_7__4_146.webp",
    shortDescription: "i5-11400H/ 8GB/ 512GB SSD/ RTX 3050",
    category: "Laptop",
    stock: 18,
    specifications: {
      cpu: "Intel Core i5-11400H",
      ram: "8GB",
      storage: "512GB SSD",
      gpu: "NVIDIA GeForce RTX 3050",
      display: "15.6 inch Full HD",
    },
    features: [
      "Độ bền đạt chuẩn quân sự Mỹ",
      "Bàn phím LED RGB phong cách gaming",
      "Khả năng nâng cấp phần cứng linh hoạt",
    ],
    detailedDescription:
      "Sử dụng chip Intel Core i5-11400H, RAM 8GB, ổ cứng 512GB SSD tốc độ cao và card đồ họa rời RTX 3050. Nổi bật với độ bền đạt chuẩn quân sự, máy mang lại sự ổn định cao trong suốt quá trình sử dụng lâu dài, rất phù hợp cho học sinh, sinh viên kỹ thuật hoặc game thủ có mức ngân sách vừa phải.",
  },
  {
    id: 4,
    name: "Laptop Acer Nitro ProPanel",
    price: 21990000,
    oldPrice: 24990000,
    image: "IMAGE/x_m_2__10.webp",
    shortDescription: "Hiệu năng mạnh mẽ cho game thủ",
    category: "Laptop",
    stock: 25,
    specifications: {
      cpu: "Intel Core i5 / i7 Gen mới",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "NVIDIA GeForce RTX Series",
      display: "15.6 inch Full HD 144Hz",
    },
    features: [
      "Hiệu năng mạnh mẽ chuyên game và đồ họa",
      "Hệ thống tản nhiệt kép quạt tản nhiệt tối ưu",
      "Bàn phím LED chuyển màu bắt mắt",
    ],
    detailedDescription:
      "Dòng laptop gaming Acer Nitro mang đến trải nghiệm thị giác ấn tượng cùng hiệu năng phần cứng mạnh mẽ. Khả năng làm mát tối ưu giúp duy trì khung hình ổn định trong suốt các trận chiến game kéo dài.",
  },
  {
    id: 5,
    name: "Laptop ASUS Vivobook OLED",
    price: 18990000,
    oldPrice: 21990000,
    image: "IMAGE/group_744_1_107.webp",
    shortDescription: "Core 7-150U/ 16GB/ 512GB/ 14 Full HD",
    category: "Laptop",
    stock: 12,
    specifications: {
      cpu: "Intel Core 7-150U",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "Intel Graphics",
      display: "14 inch Full HD OLED",
    },
    features: [
      "Đạt chuẩn độ bền quân sự Mỹ MIL-STD 810H",
      "Màn hình sắc nét màu sắc sống động",
      "Thiết kế mỏng nhẹ tinh tế sang trọng",
    ],
    detailedDescription:
      "Trang bị vi xử lý Intel Core 7-150U hiện đại, kết hợp RAM 16GB và SSD 512GB siêu tốc. Thiết kế mỏng nhẹ, thanh lịch cùng màn hình chất lượng cao phục vụ hoàn hảo cho giới văn phòng và sáng tạo nội dung.",
  },
  {
    id: 6,
    name: "Laptop HP Pavilion 16 WUXGA",
    price: 15490000,
    oldPrice: 17290000,
    image: "IMAGE/group_744_1_42.webp",
    shortDescription: "U5-225U/ 16GB/ 512GB/ 16 WUXGA",
    category: "Laptop",
    stock: 16,
    specifications: {
      cpu: "Intel Core U5-225U",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "Intel Graphics",
      display: "16 inch WUXGA",
    },
    features: [
      "Không gian hiển thị rộng rãi kích thước 16 inch",
      "Cấu hình phần cứng tối ưu đa nhiệm mượt mà",
      "Thời lượng pin ấn tượng phục vụ cả ngày",
    ],
    detailedDescription:
      "Sở hữu màn hình lớn 16 inch độ phân giải WUXGA sắc nét, mang lại không gian làm việc và giải trí cực kỳ thoải mái. Cấu hình mạnh mẽ với chip U5 và RAM 16GB giúp xử lý nhanh chóng mọi công việc.",
  },
  {
    id: 7,
    name: "Laptop Apple MacBook Air M2",
    price: 24990000,
    oldPrice: 27990000,
    image: "IMAGE/image_1396_1.webp",
    shortDescription: "Apple M2/ 8 nhân GPU/ 16GB/ 256GB",
    category: "Laptop",
    stock: 14,
    specifications: {
      cpu: "Apple M2 (8 nhân CPU, 8 nhân GPU)",
      ram: "16GB",
      storage: "256GB SSD",
      display: "13.6 inch Liquid Retina",
    },
    features: [
      "Thiết kế mỏng nhẹ đỉnh cao mang tính biểu tượng",
      "Chip Apple M2 mạnh mẽ tiết kiệm điện",
      "Webcam FaceTime HD sắc nét",
    ],
    detailedDescription:
      "Tích hợp chip Apple M2 tiên tiến mang lại hiệu suất xử lý tác vụ văn phòng, đồ họa và dựng phim cơ bản cực tốt. Thiết kế vỏ nhôm nguyên khối sang trọng, mỏng nhẹ tối đa cho sự cơ động.",
  },
  {
    id: 8,
    name: "Laptop Apple MacBook Air M5",
    price: 28990000,
    oldPrice: 31990000,
    image: "IMAGE/macbook_13_17.webp",
    shortDescription: "Apple M5/ 16GB/ 512GB/ 13.6 2.5K",
    category: "Laptop",
    stock: 10,
    specifications: {
      cpu: "Apple M5",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.6 inch 2.5K Liquid Retina",
    },
    features: [
      "Hiệu năng thế hệ mới cực kỳ mạnh mẽ",
      "Dung lượng lưu trữ thoải mái 512GB",
      "Màn hình độ phân giải cao 2.5K chi tiết sắc sảo",
    ],
    detailedDescription:
      "Đại diện cho dòng sản phẩm cao cấp mới nhất của Apple với chip M5 thế hệ mới, mang lại tốc độ xử lý vượt trội, không gian lưu trữ 512GB rộng rãi và màn hình 2.5K sắc nét tuyệt mỹ.",
  },
  {
    id: 31,
    name: "Laptop gaming Lenovo LOQ 15IRX10 i7-13650HX",
    price: 32990000,
    oldPrice: 35990000,
    image: "IMAGE/text_d_i_7_109.webp",
    shortDescription: "i7-13650HX/ 16GB/ 512GB/ RTX 5050/ 15.6 FHD",
    category: "Laptop",
    stock: 12,
    specifications: {
      cpu: "Intel Core i7-13650HX",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "NVIDIA GeForce RTX 5050",
      display: "15.6 inch Full HD",
    },
    features: [
      "Hiệu năng mạnh mẽ với chip Intel Core i7 dòng HX",
      "Card đồ họa RTX 50 Series thế hệ mới",
      "Tối ưu tản nhiệt hiệu quả cho gaming và đồ họa",
    ],
    detailedDescription:
      "Trang bị bộ vi xử lý Intel Core i7-13650HX, card đồ họa rời RTX 5050, RAM 16GB, ổ cứng 512GB SSD và màn hình 15.6 inch Full HD[cite: 63]. Mang lại khả năng chiến game mượt mà và xử lý các tác vụ đồ họa chuyên nghiệp.",
  },

  // --- ĐIỆN THOẠI (10 sản phẩm) ---
  {
    id: 9,
    name: "Điện thoại Realme 10 Pro",
    price: 6990000,
    oldPrice: 7990000,
    image: "IMAGE/10_pro_1_.webp",
    shortDescription: "Camera 108MP, thiết kế thời trang",
    category: "Điện thoại",
    stock: 22,
    specifications: {
      chip: "Snapdragon 695 5G",
      ram: "8GB",
      storage: "128GB",
      camera: "108MP + 2MP",
      display: "6.72 inch FHD+ 120Hz",
    },
    features: [
      "Màn hình viền siêu mỏng ấn tượng",
      "Camera chính độ phân giải cao 108MP",
      "Hỗ trợ kết nối mạng 5G tốc độ cao",
    ],
    detailedDescription:
      "Thiết kế tràn viền siêu mỏng thanh lịch kết hợp cùng camera 108MP bắt trọn mọi chi tiết. Đem lại trải nghiệm giải trí và chụp ảnh tuyệt vời trong phân khúc.",
  },
  {
    id: 10,
    name: "Điện thoại Samsung Galaxy S26 Ultra",
    price: 29990000,
    oldPrice: 33990000,
    image: "IMAGE/samsung-galaxy-s26-ultra-1.webp",
    shortDescription: "Galaxy AI đỉnh cao, kèm bút S-Pen",
    category: "Điện thoại",
    stock: 19,
    specifications: {
      chip: "Snapdragon đầu bảng",
      ram: "12GB",
      storage: "256GB",
      camera: "Hệ thống camera AI chuyên nghiệp",
      display: "Dynamic AMOLED 2X",
    },
    features: [
      "Tích hợp công nghệ Galaxy AI tiên tiến nhất",
      "Bút S-Pen quyền năng gắn liền thân máy",
      "Khung viền titan siêu bền bỉ",
    ],
    detailedDescription:
      "Siêu phẩm smartphone cao cấp hàng đầu với thiết kế sang trọng, tích hợp bút S-Pen tiện lợi cùng hệ thống camera chụp đêm đỉnh cao được hỗ trợ toàn diện bởi trí tuệ nhân tạo Galaxy AI.",
  },
  {
    id: 11,
    name: "Điện thoại Samsung Galaxy Z Flip 8",
    price: 24990000,
    oldPrice: 28990000,
    image: "IMAGE/samsung-galaxy-z-flip-8-pink-01.webp",
    shortDescription: "Màn hình gập thời trang, Galaxy AI",
    category: "Điện thoại",
    stock: 30,
    specifications: {
      design: "Màn hình gập vỏ sò linh hoạt",
      chip: "High-performance Processor",
      ram: "8GB",
      storage: "256GB",
    },
    features: [
      "Thiết kế màn hình gập thời trang đẳng cấp",
      "Màn hình phụ bên ngoài tùy biến đa dạng",
      "Tích hợp các tính năng Galaxy AI thông minh",
    ],
    detailedDescription:
      "Smartphone màn hình gập thời thượng với kiểu dáng vỏ sò nhỏ gọn, dễ dàng bỏ túi. Mang lại trải nghiệm sử dụng độc đáo kết hợp cùng các tính năng AI thông minh.",
  },
  {
    id: 12,
    name: "Điện thoại Xiaomi Redmi Note 17",
    price: 5490000,
    oldPrice: 6290000,
    image: "IMAGE/xiaomi-redmi-note-17-purple.webp",
    shortDescription: "Màn hình AMOLED sắc nét, pin trâu",
    category: "Điện thoại",
    stock: 25,
    specifications: {
      display: "AMOLED tần số quét cao",
      battery: "Dung lượng lớn 5000mAh+",
      camera: "AI Camera sắc nét",
    },
    features: [
      "Màn hình AMOLED hiển thị rực rỡ",
      "Viên pin dung lượng lớn sử dụng bền bỉ",
      "Thiết kế trẻ trung, màu sắc nổi bật",
    ],
    detailedDescription:
      "Mẫu điện thoại tầm trung tối ưu toàn diện từ màn hình AMOLED cao cấp đến thời lượng pin khủng, đáp ứng mượt mà mọi nhu cầu liên lạc, học tập và giải trí hằng ngày.",
  },
  {
    id: 13,
    name: "Điện thoại Xiaomi Poco F9 Ultra",
    price: 9990000,
    oldPrice: 11490000,
    image: "IMAGE/xiaomi-poco-f9-ultra-red.webp",
    shortDescription: "Hiệu năng cực khủng cho game thủ",
    category: "Điện thoại",
    stock: 28,
    specifications: {
      chip: "Flagship Performance Chip",
      ram: "12GB",
      storage: "256GB / 512GB",
      cooling: "Hệ thống tản nhiệt buồng hơi lớn",
    },
    features: [
      "Hiệu năng cấu hình cực mạnh mẽ trong tầm giá",
      "Hệ thống tản nhiệt chơi game chuyên dụng",
      "Sạc nhanh công suất lớn",
    ],
    detailedDescription:
      "Kẻ hủy diệt phân khúc cấu hình cao với con chip flagship mạnh mẽ, hệ thống tản nhiệt tiên tiến giúp duy trì hiệu năng tối đa khi chơi các tựa game đồ họa nặng.",
  },
  {
    id: 14,
    name: "Điện thoại Realme 13 Plus 5G",
    price: 8490000,
    oldPrice: 9490000,
    image: "IMAGE/realme-13-plus-5g_6_.webp",
    shortDescription: "Sạc nhanh siêu tốc, camera sắc nét",
    category: "Điện thoại",
    stock: 24,
    specifications: {
      chip: "MediaTek Dimensity 5G",
      ram: "8GB",
      storage: "256GB",
      charging: "Sạc nhanh siêu tốc",
    },
    features: [
      "Hỗ trợ kết nối 5G tốc độ cao ổn định",
      "Công nghệ sạc nhanh đầy pin nhanh chóng",
      "Thiết kế mặt lưng sang trọng",
    ],
    detailedDescription:
      "Smartphone tối ưu cho trải nghiệm giải trí và kết nối tốc độ cao với mạng 5G, đi kèm công nghệ sạc nhanh ấn tượng giúp bạn luôn sẵn sàng năng lượng trong mọi hành trình.",
  },
  {
    id: 15,
    name: "Điện thoại iPhone 16 Pro Max",
    price: 32990000,
    oldPrice: 35990000,
    image: "IMAGE/iphone-16-pro-max_1.webp",
    shortDescription: "Titan tự nhiên, chip A18 Pro mạnh mẽ",
    category: "Điện thoại",
    stock: 26,
    specifications: {
      chip: "Apple A18 Pro",
      display: "6.9 inch Super Retina XDR",
      camera: "Hệ thống camera Fusion 48MP",
    },
    features: [
      "Khung viền titan nhẹ và bền bỉ",
      "Nút điều khiển Camera Control tiện lợi",
      "Chip A18 Pro tối ưu cho Apple Intelligence",
    ],
    detailedDescription:
      "Đỉnh cao công nghệ Apple với màn hình lớn viền siêu mỏng, khung viền titan cao cấp và sức mạnh vượt trội từ con chip A18 Pro hỗ trợ các tính năng thông minh Apple Intelligence.",
  },
  {
    id: 16,
    name: "Điện thoại iPhone 17 Pro Max",
    price: 35990000,
    oldPrice: 38990000,
    image: "IMAGE/iphone-17-pro-max_3.webp",
    shortDescription: "Thiết kế camera mới, hiệu năng đỉnh cao",
    category: "Điện thoại",
    stock: 15,
    specifications: {
      chip: "Next-gen Apple Silicon",
      display: "ProMotion 120Hz",
      camera: "Nâng cấp thấu kính tiềm vọng",
    },
    features: [
      "Thiết kế cụm camera đổi mới hoàn toàn",
      "Hiệu năng siêu việt thế hệ mới",
      "Thời lượng pin tối ưu vượt trội",
    ],
    detailedDescription:
      "Thế hệ iPhone Pro Max tiếp theo với nhiều cải tiến đột phá về thiết kế, cụm camera chuyên nghiệp và hiệu năng phần cứng mạnh mẽ hàng đầu thế giới smartphone.",
  },
  {
    id: 35,
    name: "Điện thoại iPhone 18 Pro (Đỏ mận)",
    price: 31990000,
    oldPrice: 34990000,
    image: "IMAGE/iphone-18-pro-01.webp",
    shortDescription: "Thiết kế đỏ mận độc đáo, cụm camera cao cấp",
    category: "Điện thoại",
    stock: 15,
    specifications: {
      chip: "Apple A Series thế hệ mới",
      ram: "8GB",
      storage: "256GB",
      camera: "Cụm 3 camera sau chuyên nghiệp",
      display: "Màn hình tràn viền cao cấp",
    },
    features: [
      "Màu sắc đỏ mận sang trọng, độc lạ",
      "Cụm camera bố trí gọn gàng trong module góc trái",
      "Hiệu năng xử lý đỉnh cao từ Apple",
    ],
    detailedDescription:
      "Thiết kế màu đỏ mận sang trọng với cụm camera sau bố trí gọn gàng trong khung module ở góc trên cùng bên trái và mặt trước hiển thị hình nền đồng bộ[cite: 64].",
  },
  {
    id: 36,
    name: "Điện thoại iPhone màn hình gập (iPhone Duo)",
    price: 62910000,
    oldPrice: 69990000,
    image: "IMAGE/iphone-duo-01.webp",
    shortDescription: "Thiết kế gập mở ngang hiện đại, màn hình lớn",
    category: "Điện thoại",
    stock: 8,
    specifications: {
      design: "Màn hình gập mở ngang dạng cuốn sách",
      connection: "5G tốc độ cao",
      camera: "Cụm camera kép mặt lưng",
    },
    features: [
      "Thiết kế gập mở linh hoạt hiện đại",
      "Màn hình lớn bên trong hiển thị không gian rộng rãi",
      "Khung viền hoàn thiện bằng kim loại sáng bóng",
    ],
    detailedDescription:
      "Thiết kế gập mở ngang hiện đại màu trắng bạc với cụm camera kép ở mặt lưng và màn hình bên trong hiển thị phong cảnh đồi cát[cite: 65].",
  },

  // --- TAI NGHE (8 sản phẩm) ---
  {
    id: 17,
    name: "Tai nghe Apple AirPods 5",
    price: 3490000,
    oldPrice: 4290000,
    image: "IMAGE/apple-airpods-5-sac-co-day.webp",
    shortDescription: "Hỗ trợ Siri AI, Bluetooth 5.3, Chip H2",
    category: "Tai nghe",
    stock: 35,
    specifications: {
      chip: "Apple H2",
      connection: "Bluetooth 5.3",
      battery: "Tai nghe 4h / Hộp sạc 20h",
    },
    features: [
      "Tích hợp công nghệ hỗ trợ Siri AI thông minh",
      "Chip H2 xử lý âm thanh không gian sống động",
      "Bluetooth 5.3 kết nối ổn định độ trễ thấp",
    ],
    detailedDescription:
      "Trải nghiệm âm thanh không dây đỉnh cao từ Apple với chip H2 tiên tiến, hỗ trợ các tính năng thông minh và thời lượng pin tối ưu cho cả ngày dài sử dụng.",
  },
  {
    id: 18,
    name: "Tai nghe có dây KZ chính hãng",
    price: 450000,
    oldPrice: 600000,
    image: "IMAGE/frame_1_4_2.webp",
    shortDescription: "Mic thoại, Jack 3.5, Driver 10mm",
    category: "Tai nghe",
    stock: 30,
    specifications: {
      driver: "10mm",
      connection: "Jack 3.5mm tiêu chuẩn",
      mic: "Mic thoại tích hợp",
    },
    features: [
      "Driver 10mm tái tạo âm thanh chi tiết",
      "Thiết kế dạng móc vành tai chắc chắn",
      "Mic thoại đàm thoại rõ ràng",
    ],
    detailedDescription:
      "Tai nghe in-ear có dây chất lượng cao với màng loa driver 10mm mang lại dải âm cân bằng, thiết kế ôm sát vành tai giúp cách âm tốt khi nghe nhạc.",
  },
  {
    id: 19,
    name: "Tai nghe Apple EarPods Lightning",
    price: 590000,
    oldPrice: 750000,
    image: "IMAGE/frame_3_3.webp",
    shortDescription: "Mic thoại tích hợp, cổng Lightning chuẩn",
    category: "Tai nghe",
    stock: 22,
    specifications: {
      connection: "Cổng Lightning",
      design: "EarPods tối ưu theo hình dáng tai",
      control: "Phím bấm tích hợp trên dây",
    },
    features: [
      "Thiết kế EarPods thoải mái không gây đau tai",
      "Tích hợp micro và phím điều khiển âm lượng",
      "Tương thích hoàn hảo với thiết bị Apple cổng Lightning",
    ],
    detailedDescription:
      "Tai nghe có dây chính hãng Apple với đầu cắm Lightning tiện lợi, thiết kế ôm trọn cấu trúc tai mang lại cảm giác dễ chịu khi nghe nhạc hoặc đàm thoại lâu.",
  },
  {
    id: 20,
    name: "Tai nghe Bluetooth Anker Soundcore",
    price: 1490000,
    oldPrice: 1890000,
    image: "IMAGE/frame_345_1_.webp",
    shortDescription: "Tai nghe 10h, hộp sạc 30h, Bluetooth 5.3",
    category: "Tai nghe",
    stock: 18,
    specifications: {
      battery: "10h liên tục (30h với hộp sạc)",
      connection: "Bluetooth 5.3",
      driver: "10mm",
    },
    features: [
      "Thời lượng pin ấn tượng lên tới 30 giờ tổng cộng",
      "Bluetooth 5.3 kết nối nhanh và tiết kiệm pin",
      "Tích hợp tính năng dịch thuật / trợ lý thông minh",
    ],
    detailedDescription:
      "Dòng tai nghe true wireless Anker Soundcore nổi bật với thời lượng pin cực trâu, chất âm bass uy lực và kết nối Bluetooth 5.3 hiện đại.",
  },
  {
    id: 21,
    name: "Tai nghe chụp tai Sony WH-CH520",
    price: 1190000,
    oldPrice: 1490000,
    image: "IMAGE/frame_379_1_7.png",
    shortDescription: "Tai nghe 40h, sạc đầy 2h, Bluetooth 5.2",
    category: "Tai nghe",
    stock: 20,
    specifications: {
      battery: "40 giờ sử dụng",
      charging: "Sạc đầy trong 2 giờ",
      connection: "Bluetooth 5.2",
      driver: "30mm",
    },
    features: [
      "Pin sử dụng bền bỉ đến 40 giờ",
      "Trọng lượng nhẹ ôm đầu thoải mái",
      "Hỗ trợ ứng dụng tùy chỉnh âm thanh Sony",
    ],
    detailedDescription:
      "Tai nghe chụp tai không dây Sony WH-CH520 mang lại sự thoải mái tối đa với đệm tai êm ái, pin khủng 40 giờ và chất âm trong trẻo.",
  },
  {
    id: 22,
    name: "Tai nghe chụp tai Sony WH-1000XM5",
    price: 7990000,
    oldPrice: 9490000,
    image: "IMAGE/tai-nghe-chup-tai-sony-wh-1000x-_2_.webp",
    shortDescription: "Tắt ANC 32h, Bật ANC 24h, Bluetooth 6.0",
    category: "Tai nghe",
    stock: 21,
    specifications: {
      anc: "Chống ồn chủ động đỉnh cao",
      battery: "24h (Bật ANC) / 32h (Tắt ANC)",
      connection: "Bluetooth 6.0",
      driver: "30mm",
    },
    features: [
      "Công nghệ chống ồn đỉnh cao thế hệ mới",
      "Bluetooth kết nối siêu tốc ổn định",
      "Thiết kế sang trọng, cao cấp",
    ],
    detailedDescription:
      "Đỉnh cao tai nghe chống ồn Sony với khả năng loại bỏ tạp âm hoàn hảo, mang đến không gian thưởng thức âm nhạc đẳng cấp và riêng tư tuyệt đối.",
  },
  {
    id: 23,
    name: "Tai nghe Gaming HyperX Cloud 3",
    price: 2290000,
    oldPrice: 2790000,
    image: "IMAGE/tai-nghe-gaming-co-day-hyperx-cloud-3_2_.webp",
    shortDescription: "Mic thoại, Jack 3.5, Driver 53mm",
    category: "Tai nghe",
    stock: 25,
    specifications: {
      driver: "53mm tinh chỉnh góc",
      connection: "Jack 3.5mm / USB",
      mic: "Microphone khử tiếng ồn",
    },
    features: [
      "Màng loa 53mm tái tạo âm thanh vòm chính xác",
      "Đệm mút hoạt tính đặc trưng siêu êm",
      "Khung nhôm bền bỉ chịu lực tốt",
    ],
    detailedDescription:
      "Huyền thoại tai nghe gaming HyperX Cloud 3 tiếp tục khẳng định vị thế với driver 53mm tinh chỉnh góc độ, mang lại lợi thế định vị âm thanh không gian cực tốt trong game.",
  },
  {
    id: 24,
    name: "Tai nghe chụp tai Marshall Major V",
    price: 3990000,
    oldPrice: 4590000,
    image: "IMAGE/tai-nghe-chup-tai-marshall-major-5_2_.webp",
    shortDescription: "Thiết kế cổ điển, âm bass cực chắc",
    category: "Tai nghe",
    stock: 12,
    specifications: {
      design: "Phong cách Rock'n'Roll cổ điển",
      battery: "Thời lượng pin siêu dài",
      connection: "Bluetooth không dây",
    },
    features: [
      "Thiết kế bọc da vân nổi phong cách Marshall đặc trưng",
      "Chất âm đặc trưng với bass chắc khỏe, uy lực",
      "Khả năng gấp gọn linh hoạt",
    ],
    detailedDescription:
      "Biểu tượng thời trang và âm nhạc với thiết kế hoài cổ cá tính. Marshall Major V đem lại trải nghiệm nghe nhạc đậm chất rock với dải bass mạnh mẽ và độ bền cơ học cao.",
  },

  // --- CHUỘT (6 sản phẩm) ---
  {
    id: 25,
    name: "Chuột Gaming Logitech G502 Hero",
    price: 1000000,
    oldPrice: 1290000,
    image: "IMAGE/chuot-gaming-khong-day-e-dra-thunderbird-tm621w.webp",
    shortDescription: "Cảm biến HERO 25K, 11 nút lập trình",
    category: "Chuột",
    stock: 40,
    specifications: {
      sensor: "HERO 25K",
      dpi: "Lên đến 25,600 DPI",
      buttons: "11 nút lập trình",
      weight: "Trọng lượng tùy chỉnh",
    },
    features: [
      "Cảm biến HERO 25K độ chính xác cực cao không có gia tốc",
      "Hệ thống tạ đi kèm tùy chỉnh trọng lượng linh hoạt",
      "Đèn LED Lightsync RGB cá nhân hóa",
    ],
    detailedDescription:
      "Biểu tượng chuột gaming huyền thoại của Logitech với cảm biến HERO 25K siêu chính xác và 11 nút bấm có thể lập trình tùy biến sâu, đáp ứng hoàn hảo mọi thể loại game thủ chuyên nghiệp.",
  },
  {
    id: 26,
    name: "Chuột không dây Logitech Pebble M350",
    price: 450000,
    oldPrice: 590000,
    image: "IMAGE/chuot-gaming-khong-day-logitech-g304-lightspeed_1_1.webp",
    shortDescription: "Thiết kế mỏng nhẹ, click siêu êm",
    category: "Chuột",
    stock: 50,
    specifications: {
      connection: "Bluetooth / USB Receiver",
      battery: "Pin AA dùng lên đến 18 tháng",
      design: "Mỏng nhẹ, hiện đại",
    },
    features: [
      "Thiết kế mỏng gọn ôm tay, dễ dàng mang đi lại",
      "Cơ chế bấm và cuộn siêu êm giảm tiếng ồn 90%",
      "Kết nối kép qua Bluetooth hoặc đầu thu USB",
    ],
    detailedDescription:
      "Mẫu chuột quốc dân dành cho dân văn phòng và học sinh nhờ thiết kế mỏng nhẹ, tối giản và cực kỳ sang trọng. Nút bấm giảm tiếng ồn tối đa giúp không gian làm việc luôn yên tĩnh.",
  },
  {
    id: 27,
    name: "Chuột Razer DeathAdder Essential",
    price: 590000,
    oldPrice: 890000,
    image: "IMAGE/chuot-gaming-khong-day-logitech-pro-x2-superstrike-lightspeed.webp",
    shortDescription: "Cảm biến quang học chính xác cao",
    category: "Chuột",
    stock: 33,
    specifications: {
      sensor: "Quang học 6,400 DPI",
      buttons: "5 nút lập trình Hyperesponse",
      durability: "Độ bền 10 triệu lần click",
    },
    features: [
      "Thiết kế công thái học ôm trọn lòng bàn tay",
      "Cảm biến quang học độ chính xác chuẩn gaming",
      "Switch cơ học Razer tuổi thọ cao",
    ],
    detailedDescription:
      "Dòng chuột gaming công thái học kinh điển của Razer, nổi tiếng với sự thoải mái khi cầm nắm trong thời gian dài và cảm biến quang học cực nhạy, phù hợp cho nhiều tựa game.",
  },
  {
    id: 28,
    name: "Chuột Bluetooth Asus WT425",
    price: 320000,
    oldPrice: 400000,
    image: "IMAGE/chuot-khong-day-logitech-mx-master-2s_3_.webp",
    shortDescription: "Kết nối không dây ổn định, tiết kiệm pin",
    category: "Chuột",
    stock: 38,
    specifications: {
      connection: "Wireless 2.4GHz",
      dpi: "1600 DPI",
      battery: "Tiết kiệm pin thông minh",
    },
    features: [
      "Kết nối không dây ổn định khoảng cách xa",
      "Thiết kế đối xứng phù hợp cho cả người thuận tay trái/phải",
      "Chế độ ngủ tự động tiết kiệm năng lượng",
    ],
    detailedDescription:
      "Giải pháp làm việc văn phòng không dây gọn gàng, ổn định và bền bỉ. Tiết kiệm năng lượng thông minh giúp kéo dài tuổi thọ pin đáng kể trong quá trình sử dụng.",
  },
  {
    id: 29,
    name: "Chuột Gaming Có Dây Razer DeathAdder Essential",
    price: 540000,
    oldPrice: 690000,
    image: "IMAGE/chuot-gaming-co-day-razer-deathadder-essential.webp",
    shortDescription: "DPI 6400, Cáp 1.72m, LED đơn sắc",
    category: "Chuột",
    stock: 25,
    specifications: {
      sensor: "Optical Sensor",
      dpi: "6400 DPI",
      connection: "Cáp USB (1.72 mét)",
      led: "LED đơn sắc xanh lá đặc trưng",
    },
    features: [
      "Cảm biến quang học 6400 DPI kiểm soát tốt mọi thao tác",
      "Thiết kế công thái học mang lại sự thoải mái tối đa",
      "Đèn LED đơn sắc thương hiệu Razer nổi bật",
    ],
    detailedDescription:
      "Phiên bản chuột gaming có dây Razer DeathAdder Essential với độ phân giải 6400 DPI, trang bị cáp dài 1.72 mét và hệ thống LED đơn sắc cá tính, là lựa chọn tin cậy cho game thủ phổ thông.",
  },
  {
    id: 30,
    name: "Chuột Chơi Game Có Dây Dareu LM130S",
    price: 220000,
    oldPrice: 300000,
    image: "IMAGE/chuot-choi-game-co-day-dareu-lm130s_1.webp",
    shortDescription: "DPI 1000, Dây 1.8m, LED RGB",
    category: "Chuột",
    stock: 45,
    specifications: {
      dpi: "1000 DPI",
      connection: "Cáp USB (1.8 mét)",
      led: "Đèn nền RGB sống động",
    },
    features: [
      "Thiết kế đối xứng vừa vặn tay cầm",
      "Hiệu ứng đèn LED RGB rực rỡ đổi màu",
      "Độ dài dây cáp lên tới 1.8 mét tiện lợi",
    ],
    detailedDescription:
      "Mẫu chuột chơi game có dây Dareu LM130S sở hữu độ phân giải 1000 DPI ổn định, cáp kết nối dài 1.8m cùng hệ thống đèn LED RGB bắt mắt, phục vụ tốt nhu cầu giải trí và làm việc hằng ngày.",
  },
];

const formatPrice = (price) => price.toLocaleString("vi-VN") + " đ";

let cart = JSON.parse(localStorage.getItem("shop_cart")) || [];

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".nav-cart-count").forEach((badge) => {
    badge.textContent = totalItems;
  });
}

function saveCart() {
  localStorage.setItem("shop_cart", JSON.stringify(cart));
  updateCartBadge();
}

// Bắt buộc đăng nhập mới được thêm vào giỏ hàng
window.addToCart = function (id) {
  const isLoggedIn = localStorage.getItem("cofe_isLoggedIn") === "true";
  if (!isLoggedIn) {
    alert("Vui lòng đăng nhập tài khoản để có thể thêm sản phẩm vào giỏ hàng!");
    window.location.href = "login.html";
    return;
  }

  const product = products.find((p) => p.id === id);
  if (!product) return;

  if (product.stock <= 0) {
    alert("Rất tiếc! Sản phẩm này đã tạm hết hàng.");
    return;
  }

  product.stock--;
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  updateCartBadge();
};

function checkAuthUI() {
  const container = document.getElementById("user-actions-container");
  if (!container) return;

  const isLoggedIn = localStorage.getItem("cofe_isLoggedIn") === "true";
  const fullname = localStorage.getItem("cofe_fullname") || "Người dùng";

  if (isLoggedIn) {
    container.innerHTML = `
      <div class="user-dropdown">
        <div class="user-dropdown-btn" onclick="toggleUserMenu(event)">
          👤 Xin chào, <strong>${fullname}</strong> ▼
        </div>
        <div class="user-dropdown-content" id="user-menu-dropdown">
          <div class="user-dropdown-content-inner">
            <a href="change-password.html">🔑 Đổi mật khẩu</a>
            <a href="history.html">📦 Lịch sử đơn hàng</a>
            <a href="#" onclick="handleLogout(event)">🚪 Đăng xuất</a>
          </div>
        </div>
      </div>
      <a href="cart.html" class="btn-cart">🛒 Giỏ hàng (<span class="nav-cart-count">0</span>)</a>
    `;
  } else {
    container.innerHTML = `
      <a href="login.html">🔑 Đăng nhập</a>
      <a href="register.html">📝 Đăng ký</a>
      <a href="cart.html" class="btn-cart">🛒 Giỏ hàng (<span class="nav-cart-count">0</span>)</a>
    `;
  }
  updateCartBadge();
}

// Xử lý bật/tắt menu dropdown tài khoản khi click
window.toggleUserMenu = function (e) {
  e.stopPropagation();
  const dropdown = document.getElementById("user-menu-dropdown");
  if (dropdown) {
    dropdown.classList.toggle("show");
  }
};

// Bấm ra ngoài thì ẩn menu
window.addEventListener("click", () => {
  const dropdown = document.getElementById("user-menu-dropdown");
  if (dropdown && dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});

window.handleLogout = function (e) {
  e.preventDefault();
  if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
    localStorage.removeItem("cofe_isLoggedIn");
    localStorage.removeItem("cofe_fullname");
    alert("Đã đăng xuất thành công!");
    window.location.href = "index.html";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  checkAuthUI();
});
