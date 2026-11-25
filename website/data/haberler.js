/*
 * HABER VERİLERİ
 * Yeni haber eklemek için listenin EN ÜSTÜNE yeni bir nesne ekleyin.
 *  id        : benzersiz sayı
 *  baslik    : haber başlığı
 *  ozet      : kısa özet (liste ve manşette görünür)
 *  icerik    : paragraflar dizisi
 *  kategori  : SITE.kategoriler içindeki anahtarlardan biri
 *  tarih     : "YYYY-MM-DDTHH:MM"
 *  resim     : görsel adresi (kendi görselinizi "img/..." şeklinde koyabilirsiniz)
 *  manset    : true ise ana sayfa manşet slaytında çıkar
 *  sondakika : true ise kırmızı "son dakika" bandında çıkar
 *  okunma    : okunma sayısı (en çok okunanlar için)
 */
const HABERLER = [
  {
    id: 12, kategori: "gundem", manset: true, sondakika: true, okunma: 4820,
    tarih: "2026-11-25T14:10",
    baslik: "Yeşilırmak'ta su seviyesi yükseldi, ekipler teyakkuzda",
    ozet: "Son günlerde etkili olan yağışların ardından Yeşilırmak'ın debisi arttı. Belediye ve AFAD ekipleri nehir kıyısındaki mahallelerde kontrollerini sürdürüyor.",
    resim: "https://picsum.photos/seed/irmak/1200/675",
    icerik: [
      "Bölgede etkili olan sağanak yağışların ardından Yeşilırmak'ın su seviyesinde belirgin bir artış gözlendi. Nehir kıyısındaki mahallelerde yaşayan vatandaşlar tedirginlik yaşarken, ilgili kurumların ekipleri sahada çalışmalarını sürdürüyor.",
      "Yetkililer, şu an için tahliyeyi gerektiren bir durum bulunmadığını, ancak vatandaşların nehir yatağına yaklaşmamaları ve resmi açıklamaları takip etmeleri gerektiğini belirtti.",
      "Meteoroloji'nin yaptığı uyarılara göre yağışların hafta sonuna kadar aralıklarla devam etmesi bekleniyor."
    ]
  },
  {
    id: 11, kategori: "ekonomi", manset: true, okunma: 3110,
    tarih: "2026-11-25T11:30",
    baslik: "Fındık hasadı sonrası üretici fiyatları masaya yatırıldı",
    ozet: "İlçe ziraat odasında düzenlenen toplantıda fındık ve çeltik üreticilerinin sorunları konuşuldu, maliyet artışlarına dikkat çekildi.",
    resim: "https://picsum.photos/seed/findik/1200/675",
    icerik: [
      "İlçe Ziraat Odası'nda gerçekleştirilen toplantıda üreticiler, bu sezon artan gübre, mazot ve işçilik maliyetlerini dile getirdi.",
      "Toplantıya katılan oda başkanı, üreticilerin taleplerini rapor haline getirerek ilgili bakanlığa ileteceklerini söyledi.",
      "Çeltik üreticileri ise kurutma ve depolama tesisi ihtiyacının altını çizdi."
    ]
  },
  {
    id: 10, kategori: "spor", manset: true, okunma: 5240,
    tarih: "2026-11-24T21:45",
    baslik: "Çarşambaspor sahasında 3 puanı 2 golle aldı",
    ozet: "Haftanın maçında taraftarının önünde sahaya çıkan temsilcimiz, ikinci yarıda bulduğu gollerle rakibini 2-0 mağlup etti.",
    resim: "https://picsum.photos/seed/futbol/1200/675",
    icerik: [
      "Kendi sahasında oynanan karşılaşmanın ilk yarısı golsüz eşitlikle tamamlandı.",
      "İkinci yarıda oyuna ağırlığını koyan ev sahibi ekip, 58. ve 81. dakikalarda bulduğu gollerle sahadan galip ayrıldı.",
      "Teknik direktör maç sonu yaptığı açıklamada, taraftarın desteğinin galibiyette büyük pay sahibi olduğunu söyledi."
    ]
  },
  {
    id: 9, kategori: "yerel", manset: true, sondakika: true, okunma: 2780,
    tarih: "2026-11-24T16:20",
    baslik: "Merkez mahallelerde asfalt çalışması başladı",
    ozet: "Belediye fen işleri ekipleri, kış öncesi bozulan yolların yenilenmesi için çalışma başlattı. Bazı caddeler geçici olarak trafiğe kapatıldı.",
    resim: "https://picsum.photos/seed/asfalt/1200/675",
    icerik: [
      "Fen işleri müdürlüğü ekipleri, kış mevsimi öncesinde bozulan yolların bakım ve onarımı için çalışmalara başladı.",
      "Çalışmalar süresince bazı caddelerin trafiğe kapalı olacağı, sürücülerin alternatif güzergahları kullanmaları gerektiği bildirildi."
    ]
  },
  {
    id: 8, kategori: "egitim", okunma: 1650,
    tarih: "2026-11-24T10:05",
    baslik: "Lise öğrencilerinden bilim fuarına yoğun ilgi",
    ozet: "Öğrencilerin hazırladığı 40'ı aşkın proje, veliler ve vatandaşların beğenisine sunuldu.",
    resim: "https://picsum.photos/seed/bilim/1200/675",
    icerik: [
      "İlçedeki bir lisede düzenlenen bilim fuarında öğrenciler, robotik, tarım teknolojileri ve yenilenebilir enerji alanlarındaki projelerini sergiledi.",
      "Fuarı ziyaret eden İlçe Milli Eğitim Müdürü, öğrencileri tek tek tebrik etti."
    ]
  },
  {
    id: 7, kategori: "saglik", okunma: 1980,
    tarih: "2026-11-23T15:40",
    baslik: "Devlet hastanesinde yeni poliklinik hizmete girdi",
    ozet: "Hastanede açılan yeni poliklinikle birlikte vatandaşların randevu bekleme süresinin kısalması hedefleniyor.",
    resim: "https://picsum.photos/seed/hastane/1200/675",
    icerik: [
      "İlçe devlet hastanesinde yeni bir poliklinik hizmet vermeye başladı.",
      "Hastane yönetimi, yeni düzenlemeyle birlikte günlük muayene kapasitesinin artacağını açıkladı."
    ]
  },
  {
    id: 6, kategori: "asayis", okunma: 3620,
    tarih: "2026-11-23T09:15",
    baslik: "Kavşakta iki otomobil çarpıştı: 3 yaralı",
    ozet: "İlçe girişindeki kavşakta meydana gelen kazada yaralananlar ambulanslarla hastaneye kaldırıldı.",
    resim: "https://picsum.photos/seed/kaza/1200/675",
    icerik: [
      "Sabah saatlerinde ilçe girişindeki kavşakta iki otomobil çarpıştı.",
      "Kazada yaralanan 3 kişi, olay yerine gelen sağlık ekiplerince hastaneye kaldırıldı. Yaralıların hayati tehlikesinin bulunmadığı öğrenildi.",
      "Kazayla ilgili soruşturma başlatıldı."
    ]
  },
  {
    id: 5, kategori: "kultur", okunma: 1240,
    tarih: "2026-11-22T19:00",
    baslik: "Kültür merkezinde halk müziği konseri düzenlendi",
    ozet: "Karadeniz ezgilerinin seslendirildiği konser, salonu dolduran izleyicilerden tam not aldı.",
    resim: "https://picsum.photos/seed/konser/1200/675",
    icerik: [
      "Belediye kültür merkezinde düzenlenen konserde yöresel türküler seslendirildi.",
      "Konsere katılan vatandaşlar, bu tür etkinliklerin artmasını istediklerini dile getirdi."
    ]
  },
  {
    id: 4, kategori: "yerel", okunma: 2210,
    tarih: "2026-11-22T13:25",
    baslik: "Pazartesi pazarında kış sebzeleri tezgahlarda",
    ozet: "Haftalık pazarda lahana, pırasa ve karalahana fiyatları vatandaşın gündeminde.",
    resim: "https://picsum.photos/seed/pazar/1200/675",
    icerik: [
      "İlçenin geleneksel pazarında kış sebzeleri tezgahlardaki yerini aldı.",
      "Pazarcı esnafı, bu yıl ürünün bol olduğunu ve fiyatların geçen haftaya göre düştüğünü söyledi."
    ]
  },
  {
    id: 3, kategori: "spor", okunma: 980,
    tarih: "2026-11-21T18:30",
    baslik: "Gençler güreş turnuvasında madalyaları topladı",
    ozet: "İl genelinde düzenlenen turnuvada ilçemizi temsil eden sporcular 2 altın, 1 gümüş madalya kazandı.",
    resim: "https://picsum.photos/seed/gures/1200/675",
    icerik: [
      "Samsun'da düzenlenen yıldızlar güreş turnuvasında ilçemiz sporcuları büyük başarı elde etti.",
      "Antrenörler, sporcuların bölge şampiyonasına hazırlanacağını açıkladı."
    ]
  },
  {
    id: 2, kategori: "gundem", okunma: 1720,
    tarih: "2026-11-21T11:00",
    baslik: "Kaymakamlıkta ilçe koordinasyon toplantısı yapıldı",
    ozet: "Toplantıda kış tedbirleri, yatırımlar ve kamu hizmetlerine ilişkin değerlendirmeler yapıldı.",
    resim: "https://picsum.photos/seed/toplanti/1200/675",
    icerik: [
      "Kaymakamlık toplantı salonunda gerçekleştirilen toplantıya kurum müdürleri katıldı.",
      "Toplantıda özellikle kış aylarında yaşanabilecek olumsuzluklara karşı alınacak tedbirler ele alındı."
    ]
  },
  {
    id: 1, kategori: "ekonomi", okunma: 1390,
    tarih: "2026-11-20T09:45",
    baslik: "Organize sanayide yeni fabrika için temel atıldı",
    ozet: "Tesisin tamamlanmasıyla birlikte 150 kişiye istihdam sağlanması bekleniyor.",
    resim: "https://picsum.photos/seed/fabrika/1200/675",
    icerik: [
      "Organize sanayi bölgesinde yapılacak yeni üretim tesisinin temeli düzenlenen törenle atıldı.",
      "Yatırımcı firma yetkilileri, tesisin gelecek yıl sonunda üretime başlamasını hedeflediklerini söyledi."
    ]
  }
];
