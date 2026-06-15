const ALLOW_TRANSLATION = false;

const TRANSLATIONS = {
	home: {
		'arabic': { // Arabic
			title: "استكشف مقاطع فيديو الدعم الخاصة بدراسة DESTINY-Lung07",
			subtitle: "<p><strong>حدد</strong> بلدك للمتابعة.</p>",
			search: "بحث",
			button_disabled: "حدد بلدك",
			button_enabled: "دخول"
		},
		'brazilian-portuguese': { // Brazilian Portuguese
			title: "Explore seus vídeos de suporte DESTINY-Lung07",
			subtitle: "<p><strong>Selecione</strong> seu país de origem para continuar.</p>",
			search: "Buscar",
			button_disabled: "Selecione seu país",
			button_enabled: "Entrar"
		},
		'chinese-hk': { // Chinese (HK)
			title: "探索您的 DESTINY-Lung07 支援影片",
			subtitle: "<p><strong>選擇</strong>您的國家/地區以繼續。</p>",
			search: "搜尋",
			button_disabled: "選擇您的國家/地區",
			button_enabled: "進入"
		},
		'chinese-tw': { // Chinese (TW)
			title: "探索您的 DESTINY-Lung07 支援影片",
			subtitle: "<p><strong>選擇</strong>您的國家/地區以繼續。</p>",
			search: "搜尋",
			button_disabled: "選擇您的國家/地區",
			button_enabled: "進入"
		},
		'english': { // English (UK)
			title: "Explore your DESTINY-Lung07 support videos",
			subtitle: "<p><strong>Select</strong> your home country to continue.</p>",
			search: "Search",
			button_disabled: "Select your country",
			button_enabled: "Enter"
		},
		'english-us': { // English (US)
			title: "Explore your DESTINY-Lung07 support videos",
			subtitle: "<p><strong>Select</strong> your home country to continue.</p>",
			search: "Search",
			button_disabled: "Select your country",
			button_enabled: "Enter"
		},
		'german': { // German
			title: "Entdecken Sie unsere Support-Videos für DESTINY Lung07",
			subtitle: "<p><strong>Wählen</strong> Sie Ihr Heimatland aus, um fortzufahren.</p>",
			search: "Suchen",
			button_disabled: "Wählen Sie Ihr Land aus",
			button_enabled: "Eingeben"
		},
		'hindi': { // Hindi
			title: "अपने DESTINY-Lung07 सहायता वीडियो खोजें",
			subtitle: "<p>जारी रखने के लिए अपना देश <strong>चुनें</strong>।</p>",
			search: "खोजें",
			button_disabled: "अपना देश चुनें",
			button_enabled: "प्रवेश करें"
		},
		'italian': { // Italian
			title: "Esplora i tuoi video di supporto DESTINY-Lung07",
			subtitle: "<p><strong>Seleziona</strong> il tuo Paese di origine per continuare.</p>",
			search: "Cerca",
			button_disabled: "Seleziona il tuo paese",
			button_enabled: "Entra"
		},
		'japanese': { // Japanese
			title: "DESTINY-Lung07サポートビデオをご覧ください",
			subtitle: "<p>続けるには、お住まいの国を<strong>選択</strong>してください。</p>",
			search: "検索",
			button_disabled: "国を選択してください",
			button_enabled: "入る"
		},
		'malay': { // Malay
			title: "Terokai video sokongan DESTINY-Lung07 anda",
			subtitle: "<p><strong>Pilih</strong> negara asal anda untuk meneruskan.</p>",
			search: "Cari",
			button_disabled: "Pilih negara anda",
			button_enabled: "Masuk"
		},
		'polish': { // Polish
			title: "Przeglądaj filmy pomocy technicznej DESTINY-Lung07",
			subtitle: "<p><strong>Wybierz</strong> swój kraj, aby kontynuować.</p>",
			search: "Szukaj",
			button_disabled: "Wybierz swój kraj",
			button_enabled: "Wejdź"
		},
		'spanish': { // Spanish
			title: "Explora tus videos de soporte DESTINY-Lung07",
			subtitle: "<p><strong>Selecciona</strong> tu país de origen para continuar.</p>",
			search: "Buscar",
			button_disabled: "Selecciona tu país",
			button_enabled: "Entrar"
		},
		'tagalog': { // Tagalog
			title: "I-explore ang iyong mga video ng suporta para sa DESTINY-Lung07",
			subtitle: "<p><strong>Piliin</strong> ang iyong bansa upang magpatuloy.</p>",
			search: "Maghanap",
			button_disabled: "Piliin ang iyong bansa",
			button_enabled: "Pumasok"
		},
		'thai': { // Thai
			title: "สำรวจวิดีโอสนับสนุน DESTINY-Lung07 ของคุณ",
			subtitle: "<p><strong>เลือก</strong>ประเทศของคุณเพื่อดำเนินการต่อ</p>",
			search: "ค้นหา",
			button_disabled: "เลือกประเทศของคุณ",
			button_enabled: "เข้าสู่ระบบ"
		},
		'turkish': { // Turkish
			title: "DESTINY-Lung07 destek videolarınızı keşfedin",
			subtitle: "<p>Devam etmek için ülkenizi <strong>seçin</strong>.</p>",
			search: "Ara",
			button_disabled: "Ülkenizi seçin",
			button_enabled: "Gir"
		},
		'vietnamese': { // Vietnamese
			title: "Khám phá video hỗ trợ DESTINY-Lung07 của bạn",
			subtitle: "<p><strong>Chọn</strong> quốc gia của bạn để tiếp tục.</p>",
			search: "Tìm kiếm",
			button_disabled: "Chọn quốc gia của bạn",
			button_enabled: "Nhập"
		}
	},
	password: {
		'arabic': { // Arabic
			label: "يرجى إدخال كلمة المرور الخاصة بك",
			button_enter: "دخول",
			forgotten_password: "إذا كنت <strong>لا تتذكر</strong> كلمة المرور الخاصة بك، يرجى الرجوع إلى بطاقة المحفظة الخاصة بك أو التواصل مع فريق الدراسة.",
			error: "كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى."
		},
		'brazilian-portuguese': { // Brazilian Portuguese
			label: "Insira sua senha",
			button_enter: "Entrar",
			forgotten_password: "Se você <strong>esqueceu</strong> a senha, consulte seu cartão de bolso ou contate a equipe do estudo.",
			error: "Senha incorreta. Tente novamente."
		},
		'chinese-hk': { // Chinese (HK)
			label: "請輸入您的密碼",
			button_enter: "輸入",
			forgotten_password: "若您<strong>忘記密碼</strong>，請查看您的研究資料卡，或者聯絡您所屬的研究團隊。",
			error: "密碼錯誤。請再嘗試輸入。"
		},
		'chinese-tw': { // Chinese (TW)
			label: "請輸入您的密碼",
			button_enter: "輸入",
			forgotten_password: "如果您<strong>忘記密碼</strong>，請查閱您的隨身卡或聯絡您所屬的試驗團隊。",
			error: "密碼不正確。請再試一次。"
		},
		'english': { // English (UK)
			label: "Please enter your password",
			button_enter: "Enter",
			forgotten_password: "If you <strong>can't remember</strong> your password, please refer to your wallet card or contact your study team.",
			error: "Incorrect password. Please try again."
		},
		'english-us': { // English (US)
			label: "Please enter your password",
			button_enter: "Enter",
			forgotten_password: "If you <strong>can't remember</strong> your password, please refer to your wallet card or contact your study team.",
			error: "Incorrect password. Please try again."
		},
		'german': { // German
			label: "Bitte geben Sie Ihr Passwort ein",
			button_enter: "Eingeben",
			forgotten_password: "Wenn Sie sich <strong>nicht</strong> an Ihr Passwort <strong>erinnern können</strong>, sehen Sie bitte auf Ihrer Patientenkarte nach oder wenden Sie sich an Ihr Studienteam.",
			error: "Falsches Passwort. Bitte erneut versuchen."
		},
		'hindi': { // Hindi
			label: "कृपया अपना पासवर्ड एंटर करें",
			button_enter: "एंटर करें",
			forgotten_password: "अगर आपको अपना पासवर्ड <strong>याद नहीं आ रहा है</strong> तो कृपया अपना वॉलेट कार्ड देखें या अपनी अध्ययन टीम से संपर्क करें।",
			error: "गलत पासवर्ड। कृपया फिर से कोशिश करें।"
		},
		'italian': { // Italian
			label: "Inserisci la password",
			button_enter: "Accedi",
			forgotten_password: "Se <strong>non ricordi</strong> la password, controlla sulla tessera oppure contatta l'équipe medica.",
			error: "Password errata. Riprova."
		},
		'japanese': { // Japanese
			label: "パスワードを入力してください",
			button_enter: "入力",
			forgotten_password: "パスワードをお忘れの場合はウォレットカードをご確認いただくか、治験チームまでお問い合わせください。",
			error: "パスワードが正しくありません。もう一度お試しください。"
		},
		'malay': { // Malay
			label: "Sila masukkan kata laluan anda",
			button_enter: "Masuk",
			forgotten_password: "Jika anda <strong>tidak dapat mengingati</strong> kata laluan anda, sila rujuk kad dompet anda atau hubungi pasukan kajian anda.",
			error: "Kata laluan salah. Sila cuba lagi."
		},
		'polish': { // Polish
			label: "Wprowadź hasło",
			button_enter: "Wejdź",
			forgotten_password: "Jeśli <strong>nie pamiętasz</strong> hasła, znajdziesz je na karcie uczestnika badania. Możesz też skontaktować się z zespołem badawczym",
			error: "Nieprawidłowe hasło. Proszę spróbować ponownie."
		},
		'spanish': { // Spanish
			label: "Introduzca su contraseña",
			button_enter: "Introducir",
			forgotten_password: "Si <strong>no recuerda</strong> su contraseña, consulte su tarjeta de bolsillo o póngase en contacto con su equipo del ensayo.",
			error: "Contraseña incorrecta. Inténtelo de nuevo."
		},
		'tagalog': { // Tagalog
			label: "Mangyaring ilagay ang iyong password",
			button_enter: "Pumasok",
			forgotten_password: "Kung <strong>hindi mo maalala</strong> ang iyong password, mangyaring tingnan ang iyong wallet card o makipag-ugnayan sa iyong study team.",
			error: "Maling password. Mangyaring subukan muli."
		},
		'thai': { // Thai
			label: "โปรดใส่รหัสผ่านของท่าน",
			button_enter: "ป้อนข้อมูล",
			forgotten_password: "หากท่าน<strong>จำ</strong>รหัสผ่านของท่าน<strong>ไม่ได้</strong> โปรดดูบัตรประจำตัวสำหรับพกพาหรือติดต่อทีมวิจัย",
			error: "รหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง"
		},
		'turkish': { // Turkish
			label: "Lütfen şifrenizi girin",
			button_enter: "Giriş",
			forgotten_password: "Şifrenizi <strong>hatırlayamıyorsanız</strong>, lütfen cüzdan kartınıza başvurun veya çalışma ekibinizle iletişime geçin.",
			error: "Yanlış şifre. Lütfen tekrar deneyin."
		},
		'vietnamese': { // Vietnamese
			label: "Vui lòng nhập mật khẩu của mình",
			button_enter: "Nhập",
			forgotten_password: "Nếu bạn <strong>không thể nhớ</strong> mật khẩu của mình, hãy xem lại thẻ thông tin hoặc liên hệ với nhóm nghiên cứu.",
			error: "Mật khẩu không chính xác. Vui lòng thử lại."
		}
	},
	language_select: {
		'arabic': { // Arabic
			title: "يرجى اختيار لغتك المفضلة",
			unavailable_language: "صفحة الدعم لهذا البلد لا تقدم حالياً نسخة باللغة التي اخترتها (العربية)",
			search: "بحث",
			button_disabled: "اختر اللغة",
			button_enabled: "متابعة",
			button_back: "رجوع"
		},
		'brazilian-portuguese': { // Brazilian Portuguese
			title: "Selecione seu idioma preferido",
			unavailable_language: "A página de suporte deste país atualmente não oferece uma versão no seu idioma escolhido (Português Brasileiro)",
			search: "Buscar",
			button_disabled: "Selecione o idioma",
			button_enabled: "Continuar",
			button_back: "Voltar"
		},
		'chinese-hk': { // Chinese (HK)
			title: "請選擇您偏好使用的語言",
			unavailable_language: "此國家/地區的支援頁面目前不提供您所選語言的版本 (中文 HK)",
			search: "搜尋",
			button_disabled: "選擇語言",
			button_enabled: "繼續",
			button_back: "返回"
		},
		'chinese-tw': { // Chinese (TW)
			title: "請選擇您的首選語言",
			unavailable_language: "此國家/地區的支援頁面目前不提供您所選語言的版本 (中文 TW)",
			search: "搜尋",
			button_disabled: "選擇語言",
			button_enabled: "繼續",
			button_back: "返回"
		},
		'english': { // English (UK)
			title: "Please select your preferred language",
			unavailable_language: "This country's support page currently does not offer a version in your chosen language (English UK)",
			search: "Search",
			button_disabled: "Select language",
			button_enabled: "Continue",
			button_back: "Back"
		},
		'english-us': { // English (US)
			title: "Please select your preferred language",
			unavailable_language: "This country's support page currently does not offer a version in your chosen language (English US)",
			search: "Search",
			button_disabled: "Select language",
			button_enabled: "Continue",
			button_back: "Back"
		},
		'german': { // German
			title: "Bitte wählen Sie Ihre bevorzugte Sprache aus.",
			unavailable_language: "Die Support-Seite dieses Landes bietet derzeit keine Version in Ihrer gewählten Sprache an (Deutsch)",
			search: "Suchen",
			button_disabled: "Sprache auswählen",
			button_enabled: "Weiter",
			button_back: "Zurück"
		},
		'hindi': { // Hindi
			title: "कृपया अपनी पसंदीदा भाषा चुनें",
			unavailable_language: "इस देश का सहायता पृष्ठ वर्तमान में आपकी चुनी हुई भाषा (हिंदी) में संस्करण प्रदान नहीं करता है",
			search: "खोजें",
			button_disabled: "भाषा चुनें",
			button_enabled: "जारी रखें",
			button_back: "वापस"
		},
		'italian': { // Italian
			title: "Seleziona la tua lingua preferita",
			unavailable_language: "La pagina di supporto di questo paese attualmente non offre una versione nella lingua scelta (Italiano)",
			search: "Cerca",
			button_disabled: "Seleziona lingua",
			button_enabled: "Continua",
			button_back: "Indietro"
		},
		'japanese': { // Japanese
			title: "希望する言語を選択してください",
			unavailable_language: "この国のサポートページは現在、選択した言語（日本語）のバージョンを提供していません",
			search: "検索",
			button_disabled: "言語を選択",
			button_enabled: "続ける",
			button_back: "戻る"
		},
		'malay': { // Malay
			title: "Sila pilih bahasa pilihan anda",
			unavailable_language: "Halaman sokongan negara ini pada masa ini tidak menawarkan versi dalam bahasa pilihan anda (Bahasa Melayu)",
			search: "Cari",
			button_disabled: "Pilih bahasa",
			button_enabled: "Teruskan",
			button_back: "Kembali"
		},
		'polish': { // Polish
			title: "Wybierz preferowany język",
			unavailable_language: "Strona wsparcia tego kraju obecnie nie oferuje wersji w wybranym języku (Polski)",
			search: "Szukaj",
			button_disabled: "Wybierz język",
			button_enabled: "Kontynuuj",
			button_back: "Wstecz"
		},
		'spanish': { // Spanish
			title: "Selecciona tu idioma preferido",
			unavailable_language: "La página de soporte de este país actualmente no ofrece una versión en tu idioma elegido (Español)",
			search: "Buscar",
			button_disabled: "Seleccionar idioma",
			button_enabled: "Continuar",
			button_back: "Atrás"
		},
		'tagalog': { // Tagalog
			title: "Mangyaring piliin ang iyong gustong wika",
			unavailable_language: "Ang pahina ng suporta ng bansang ito ay kasalukuyang hindi nag-aalok ng bersyon sa iyong napiling wika (Tagalog)",
			search: "Maghanap",
			button_disabled: "Pumili ng wika",
			button_enabled: "Magpatuloy",
			button_back: "Bumalik"
		},
		'thai': { // Thai
			title: "โปรดเลือกภาษาที่คุณต้องการ",
			unavailable_language: "หน้าสนับสนุนของประเทศนี้ปัจจุบันไม่มีเวอร์ชันในภาษาที่คุณเลือก (ไทย)",
			search: "ค้นหา",
			button_disabled: "เลือกภาษา",
			button_enabled: "ดำเนินการต่อ",
			button_back: "กลับ"
		},
		'turkish': { // Turkish
			title: "Lütfen tercih ettiğiniz dili seçin",
			unavailable_language: "Bu ülkenin destek sayfası şu anda seçtiğiniz dilde (Türkçe) bir sürüm sunmamaktadır",
			search: "Ara",
			button_disabled: "Dil seçin",
			button_enabled: "Devam et",
			button_back: "Geri"
		},
		'vietnamese': { // Vietnamese
			title: "Vui lòng chọn ngôn ngữ ưa thích của bạn",
			unavailable_language: "Trang hỗ trợ của quốc gia này hiện không cung cấp phiên bản bằng ngôn ngữ bạn đã chọn (Tiếng Việt)",
			search: "Tìm kiếm",
			button_disabled: "Chọn ngôn ngữ",
			button_enabled: "Tiếp tục",
			button_back: "Quay lại"
		}
	}
};

const MULTI_LANGUAGE_COUNTRIES = ['in', 'us', 'ca', 'my', 'ph', 'sa'];

const COUNTRY_DEFAULTS = {
	'au': 'english',              // Australia
	'at': 'german',               // Austria
	'br': 'brazilian-portuguese', // Brazil
	'ca': 'english',              // Canada
	'cz': 'english',              // Czech Republic
	'de': 'german',               // Germany
	'hk': 'chinese-hk',           // Hong Kong
	'in': 'hindi',                // India
	'it': 'italian',              // Italy
	'jp': 'japanese',             // Japan
	'my': 'malay',                // Malaysia
	'ph': 'tagalog',              // Philippines
	'pl': 'polish',               // Poland
	'sa': 'arabic',               // Saudi Arabia
	'sk': 'english',              // Slovakia
	'es': 'spanish',              // Spain
	'tw': 'chinese-tw',           // Taiwan
	'th': 'thai',                 // Thailand
	'tr': 'turkish',              // Turkey
	'gb': 'english',              // United Kingdom
	'us': 'english-us',           // United States
	'vn': 'vietnamese',           // Vietnam
};
