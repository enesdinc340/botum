# Çarşamba Haber Ajansı — Web Sitesi

Kurulum gerektirmeyen, statik (HTML/CSS/JS) yerel haber sitesi.

## Sayfalar
| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa: manşet slaytı, son dakika bandı, son haberler, kategori blokları |
| `haber.html?id=12` | Haber detay: paylaşım butonları, ilgili haberler |
| `kategori.html?k=spor` | Kategori sayfası |
| `arama.html?q=...` | Haber arama |
| `iletisim.html` | İletişim + WhatsApp ile haber ihbar formu |
| `kunye.html` | Künye |

Yan sütunda **en çok okunanlar**, **canlı Çarşamba hava durumu** (Open-Meteo, ücretsiz, anahtar gerektirmez) ve **WhatsApp ihbar** kutusu var.

## Ayarlar
`js/site.js` dosyasının en üstündeki `SITE` nesnesinden ajans adı, kısa ad (logo), telefon, WhatsApp numarası, e-posta, adres, sosyal medya linkleri ve kategoriler değiştirilir.
Künye bilgileri `kunye.html` içindedir.

## Haber ekleme
`data/haberler.js` dosyasında listenin en üstüne yeni bir haber nesnesi ekleyin (alanların açıklaması dosyanın başında).
Kendi fotoğraflarınızı `img/` klasörüne koyup `resim: "img/foto.jpg"` şeklinde kullanabilirsiniz.

## Yayına alma
Klasörün tamamını herhangi bir hosting'e (cPanel, Netlify, GitHub Pages vb.) yüklemeniz yeterli.
Bilgisayarda denemek için `index.html` dosyasını çift tıklayarak açabilirsiniz.
