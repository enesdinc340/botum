/* ==== SİTE AYARLARI — Ajans bilgilerinizi buradan değiştirin ==== */
const SITE = {
  ad: "Çarşamba Haber Ajansı",
  kisaAd: "ÇHA",
  slogan: "Çarşamba'nın ve Samsun'un haber kaynağı",
  telefon: "0 (362) 000 00 00",
  whatsapp: "905000000000",
  eposta: "haber@ornek.com",
  adres: "Merkez Mah. Örnek Cad. No:1, Çarşamba / Samsun",
  sosyal: { facebook: "#", x: "#", instagram: "#", youtube: "#" },
  kategoriler: {
    gundem:  { ad: "Gündem",  renk: "#c8102e" },
    yerel:   { ad: "Yerel",   renk: "#0b6e4f" },
    asayis:  { ad: "Asayiş",  renk: "#7a1f1f" },
    ekonomi: { ad: "Ekonomi", renk: "#1d4e89" },
    spor:    { ad: "Spor",    renk: "#e07a00" },
    saglik:  { ad: "Sağlık",  renk: "#0f8b8d" },
    egitim:  { ad: "Eğitim",  renk: "#5b3c88" },
    kultur:  { ad: "Kültür-Sanat", renk: "#9c4f2e" }
  }
};

/* ==== Yardımcılar ==== */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const param = (k) => new URLSearchParams(location.search).get(k);
const siraliHaberler = () => [...HABERLER].sort((a, b) => b.tarih.localeCompare(a.tarih));
const kat = (k) => SITE.kategoriler[k] || { ad: k, renk: "#555" };

function tarihYaz(t, uzun = false) {
  const d = new Date(t);
  const opt = uzun
    ? { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }
    : { day: "2-digit", month: "2-digit", year: "numeric" };
  return d.toLocaleString("tr-TR", opt);
}
function onceYaz(t) {
  const fark = (Date.now() - new Date(t)) / 60000;
  if (fark < 1) return "az önce";
  if (fark < 60) return Math.floor(fark) + " dk önce";
  if (fark < 1440) return Math.floor(fark / 60) + " saat önce";
  if (fark < 10080) return Math.floor(fark / 1440) + " gün önce";
  return tarihYaz(t);
}
const link = (h) => `haber.html?id=${h.id}`;
const etiket = (k) => `<a class="etiket" href="kategori.html?k=${k}" style="background:${kat(k).renk}">${esc(kat(k).ad)}</a>`;

function kart(h, tip = "") {
  return `<article class="kart ${tip}">
    <a href="${link(h)}" class="kart-resim"><img src="${esc(h.resim)}" alt="" loading="lazy"></a>
    <div class="kart-govde">
      ${etiket(h.kategori)}
      <h3><a href="${link(h)}">${esc(h.baslik)}</a></h3>
      ${tip === "yatay" || tip === "buyuk" ? `<p>${esc(h.ozet)}</p>` : ""}
      <time datetime="${h.tarih}">${onceYaz(h.tarih)}</time>
    </div>
  </article>`;
}

/* ==== Ortak üst/alt bölüm ==== */
function ustKisim() {
  const bugun = new Date().toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const aktif = param("k");
  const menu = Object.entries(SITE.kategoriler).map(([k, v]) =>
    `<a href="kategori.html?k=${k}" class="${aktif === k ? "aktif" : ""}">${esc(v.ad)}</a>`).join("");
  const sd = siraliHaberler().filter(h => h.sondakika);
  const bant = sd.length ? `<div class="sondakika"><div class="kap">
      <strong>SON DAKİKA</strong>
      <div class="akis"><div class="akis-ic">${[...sd, ...sd].map(h => `<a href="${link(h)}">${esc(h.baslik)}</a>`).join("")}</div></div>
    </div></div>` : "";

  $("#ust").innerHTML = `
  <div class="ust-bar"><div class="kap">
    <span>${bugun}</span>
    <span class="ust-sag">
      <a href="kunye.html">Künye</a><a href="iletisim.html">İletişim</a>
      <a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp İhbar Hattı</a>
    </span>
  </div></div>
  <header class="baslik-alan"><div class="kap">
    <a href="index.html" class="logo"><span class="logo-kutu">${esc(SITE.kisaAd)}</span>
      <span><b>${esc(SITE.ad)}</b><small>${esc(SITE.slogan)}</small></span></a>
    <form class="arama" action="arama.html"><input name="q" placeholder="Haberlerde ara..." aria-label="Ara" value="${esc(param("q") || "")}"><button aria-label="Ara">🔍</button></form>
  </div></header>
  <nav class="menu"><div class="kap">
    <button class="menu-ac" aria-label="Menü" onclick="this.parentNode.classList.toggle('acik')">☰</button>
    <a href="index.html" class="${location.pathname.endsWith("index.html") || location.pathname.endsWith("/") ? "aktif" : ""}">Ana Sayfa</a>${menu}
  </div></nav>${bant}`;

  $("#alt").innerHTML = `<footer><div class="kap alt-izgara">
    <div><div class="logo"><span class="logo-kutu">${esc(SITE.kisaAd)}</span><span><b>${esc(SITE.ad)}</b></span></div>
      <p>${esc(SITE.slogan)}. Yerel haberleri hızlı, doğru ve tarafsız şekilde sizlere ulaştırıyoruz.</p></div>
    <div><h4>Kategoriler</h4>${Object.entries(SITE.kategoriler).map(([k, v]) => `<a href="kategori.html?k=${k}">${esc(v.ad)}</a>`).join("")}</div>
    <div><h4>İletişim</h4><p>${esc(SITE.adres)}<br>Tel: ${esc(SITE.telefon)}<br>${esc(SITE.eposta)}</p>
      <div class="sosyal">${Object.entries(SITE.sosyal).map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${k}</a>`).join("")}</div></div>
  </div><div class="telif">© ${new Date().getFullYear()} ${esc(SITE.ad)} — Tüm hakları saklıdır. İzinsiz kopyalanamaz, kaynak gösterilerek alıntı yapılabilir.</div></footer>`;
}

/* ==== Yan sütun ==== */
function yanSutun(haric) {
  const cok = [...HABERLER].filter(h => h.id !== haric).sort((a, b) => b.okunma - a.okunma).slice(0, 5);
  return `
  <div class="kutu"><h2 class="bolum-baslik">En Çok Okunanlar</h2>
    <ol class="cok-okunan">${cok.map(h => `<li><a href="${link(h)}">${esc(h.baslik)}</a></li>`).join("")}</ol></div>
  <div class="kutu hava" id="hava"><h2 class="bolum-baslik">Çarşamba Hava Durumu</h2><p>Yükleniyor…</p></div>
  <div class="kutu ihbar"><h3>Haber ihbarınız mı var?</h3><p>Fotoğraf ve videolarınızı WhatsApp üzerinden bize iletin.</p>
    <a class="dugme" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp ile Gönder</a></div>`;
}

/* Ücretsiz Open-Meteo servisi ile canlı hava durumu (Çarşamba koordinatları) */
async function havaYukle() {
  const el = $("#hava"); if (!el) return;
  const kod = { 0: "☀️ Açık", 1: "🌤️ Az bulutlu", 2: "⛅ Parçalı bulutlu", 3: "☁️ Bulutlu", 45: "🌫️ Sisli", 48: "🌫️ Sisli",
    51: "🌦️ Çisenti", 53: "🌦️ Çisenti", 55: "🌦️ Çisenti", 61: "🌧️ Yağmurlu", 63: "🌧️ Yağmurlu", 65: "🌧️ Kuvvetli yağmur",
    71: "🌨️ Kar", 73: "🌨️ Kar", 75: "❄️ Yoğun kar", 80: "🌦️ Sağanak", 81: "🌧️ Sağanak", 82: "⛈️ Kuvvetli sağanak", 95: "⛈️ Gök gürültülü" };
  try {
    const r = await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.20&longitude=36.72&current=temperature_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe%2FIstanbul&forecast_days=4");
    const d = await r.json();
    const g = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
    el.innerHTML = `<h2 class="bolum-baslik">Çarşamba Hava Durumu</h2>
      <div class="hava-simdi"><span class="derece">${Math.round(d.current.temperature_2m)}°</span>
      <span>${kod[d.current.weather_code] || ""}<br><small>Rüzgar ${Math.round(d.current.wind_speed_10m)} km/s</small></span></div>
      <div class="hava-gunler">${d.daily.time.slice(1).map((t, i) => `<div><b>${g[new Date(t).getDay()]}</b>
        <span>${(kod[d.daily.weather_code[i + 1]] || "").split(" ")[0]}</span>
        <small>${Math.round(d.daily.temperature_2m_max[i + 1])}° / ${Math.round(d.daily.temperature_2m_min[i + 1])}°</small></div>`).join("")}</div>`;
  } catch { el.querySelector("p").textContent = "Hava durumu şu an alınamadı."; }
}

document.addEventListener("DOMContentLoaded", () => { ustKisim(); });

/* Görsel yüklenemezse bozuk resim simgesi yerine logolu yer tutucu göster */
document.addEventListener("error", (e) => {
  const img = e.target;
  if (img.tagName !== "IMG" || img.dataset.yedek) return;
  img.dataset.yedek = 1;
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#2b3240"/><stop offset="1" stop-color="#14181f"/></linearGradient></defs><rect width="160" height="90" fill="url(#g)"/><text x="80" y="52" font-family="Arial" font-weight="900" font-size="22" fill="#c8102e" text-anchor="middle">${SITE.kisaAd}</text></svg>`);
}, true);
