/* =====================================================
   ГЛАВНЫЙ ФАЙЛ НАСТРОЕК — под нового клиента меняете только его
   ===================================================== */
const CONFIG = {
  name: "Cascara",
  phone: "+7 495 000-00-00",
  email: "hello@cascara.coffee",
  telegram: "@cascara_coffee",
  instagram: "@cascara.coffee",
  whatsapp: "74950000000",              // номер без + и пробелов
  address: "Москва, Тверская улица, 12",
  howto: "Вход со двора, красная дверь рядом с аркой. 3 минуты от метро «Пушкинская».",
  lat: 55.7648, lng: 37.6053,
  // часы работы: 0 = воскресенье … 6 = суббота, [открытие, закрытие]
  hours: { 1:[8,21], 2:[8,21], 3:[8,21], 4:[8,21], 5:[8,22], 6:[9,22], 0:[9,21] },
  maxGuests: 10,
  stampsForGift: 8
};

const MENU = {
  "Эспрессо и молоко": [
    { n:"Эспрессо", p:180, d:"Двойной, на зерне недели. Сладкий, с кислинкой красных ягод." },
    { n:"Американо", p:200, d:"Эспрессо и горячая вода, без горечи." },
    { n:"Капучино", p:260, d:"Бархатная пена, 180 мл — как должен быть настоящий капучино." },
    { n:"Флэт уайт", p:290, d:"Двойной ристретто и тонкая микропена." },
    { n:"Латте на овсяном", p:310, d:"Мягкий, с карамельным послевкусием.", tag:"хит" },
    { n:"Вишнёвый раф", p:340, d:"Сливки, ваниль и наш вишнёвый сироп из кофейной ягоды.", tag:"новинка" }
  ],
  "Фильтр и альтернатива": [
    { n:"Воронка V60", p:340, d:"Выбираете один из шести сортов, готовим при вас." },
    { n:"Аэропресс", p:340, d:"Плотный, чистый вкус. Хорош для светлой обжарки." },
    { n:"Кемекс на двоих", p:620, d:"Графин на 500 мл, подаём с двумя чашками." },
    { n:"Каскара-чай", p:280, d:"Настой из сушёной кожуры кофейной вишни. Без кофеина почти.", tag:"необычное" }
  ],
  "Холодное": [
    { n:"Колд брю", p:320, d:"Настаивается 16 часов. Чёрный, плотный, на большом льду." },
    { n:"Эспрессо-тоник", p:330, d:"Тоник, лёд, цедра апельсина и двойной эспрессо.", tag:"хит" },
    { n:"Айс-латте", p:310, d:"Холодное молоко, лёд, эспрессо сверху." },
    { n:"Лимонад с базиликом", p:290, d:"Лимон, базилик, газированная вода. Без кофе." }
  ],
  "Выпечка и десерты": [
    { n:"Миндальный круассан", p:250, d:"Хрустящий снаружи, с кремом внутри. Выпекаем в 6 утра." },
    { n:"Чизкейк с вишней", p:340, d:"Нью-Йоркский, с вишнёвым конфитюром." },
    { n:"Овсяное печенье", p:120, d:"С шоколадом и морской солью. Берут по три." },
    { n:"Тост с авокадо", p:420, d:"Зерновой хлеб, яйцо пашот, микрозелень." }
  ]
};

const REVIEWS = [
  { name:"Анна К.", when:"2 недели назад", t:"Нашла это место случайно и теперь хожу сюда каждую субботу. Флэт уайт лучший в районе, а круассан хочется забрать с собой целым противнем." },
  { name:"Дмитрий С.", when:"месяц назад", t:"Бариста спросил, что я люблю, и предложил фильтр, о котором я даже не слышал. Оказалось, это именно то, что нужно. Вернусь за этим сортом." },
  { name:"Мария Л.", when:"3 недели назад", t:"Работаю здесь удалённо по вторникам: розетки у каждого стола, тихо, wi-fi не падает. И собаку пускают." },
  { name:"Игорь П.", when:"неделю назад", t:"Бронировали веранду на день рождения жены. Поставили плед, свечу и принесли десерт с запиской. Мелочь, а до сих пор вспоминаем." },
  { name:"Елена В.", when:"2 месяца назад", t:"Эспрессо-тоник — моя зависимость. Не слишком сладкий, с горчинкой апельсина. Жаль, что нельзя поставить шесть звёзд." }
];

/* ===================== утилиты ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const DAYS = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
const pad = n => String(n).padStart(2, "0");
const fmtH = h => `${pad(h)}:00`;

/* ===================== подстановка данных ===================== */
$$("[data-cfg]").forEach(el => { el.textContent = CONFIG[el.dataset.cfg]; });
const hrefs = {
  tel: "tel:" + CONFIG.phone.replace(/[^\d+]/g, ""),
  mail: "mailto:" + CONFIG.email,
  tg: "https://t.me/" + CONFIG.telegram.replace("@", ""),
  ig: "https://instagram.com/" + CONFIG.instagram.replace("@", "")
};
$$("[data-href]").forEach(a => { a.href = hrefs[a.dataset.href]; });
$("#year").textContent = new Date().getFullYear();
$("#routeLink").href = `https://www.google.com/maps/dir/?api=1&destination=${CONFIG.lat},${CONFIG.lng}`;
const d = 0.006;
$("#mapFrame").src = `https://www.openstreetmap.org/export/embed.html?bbox=${CONFIG.lng-d*2},${CONFIG.lat-d},${CONFIG.lng+d*2},${CONFIG.lat+d}&layer=mapnik&marker=${CONFIG.lat},${CONFIG.lng}`;

/* ===================== мобильное меню ===================== */
const burger = $("#burger"), nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
$$("a", nav).forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); burger.setAttribute("aria-expanded", false);
}));

/* подсветка раздела в шапке */
const links = $$(".nav a");
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => io.observe(s));

/* ===================== часы работы + статус ===================== */
const tbody = $("#hoursTable tbody");
const order = [1,2,3,4,5,6,0];
tbody.innerHTML = order.map(i => `<tr data-day="${i}"><td>${DAYS[i]}</td><td>${fmtH(CONFIG.hours[i][0])} – ${fmtH(CONFIG.hours[i][1])}</td></tr>`).join("");

function updateStatus() {
  const now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  const [o, c] = CONFIG.hours[day];
  const el = $("#openStatus");
  const isOpen = h >= o && h < c;
  el.className = "status " + (isOpen ? "open" : "closed");
  if (isOpen) el.lastElementChild.textContent = `Открыто до ${fmtH(c)}`;
  else {
    const next = h < o ? day : (day + 1) % 7;
    el.lastElementChild.textContent = `Закрыто. Откроемся ${h < o ? "сегодня" : "завтра"} в ${fmtH(CONFIG.hours[next][0])}`;
  }
  $$("#hoursTable tr").forEach(tr => tr.classList.toggle("today", +tr.dataset.day === day));
}
updateStatus(); setInterval(updateStatus, 60000);

/* ===================== меню ===================== */
const tabsBox = $("#menuTabs"), list = $("#menuList");
const cats = Object.keys(MENU);
tabsBox.innerHTML = cats.map((c, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-i="${i}">${c}</button>`).join("");
function renderMenu(i) {
  list.innerHTML = MENU[cats[i]].map((m, k) => `
    <article class="item" style="animation-delay:${k * 60}ms">
      <div class="item-top"><span class="item-name">${m.n}</span>${m.tag ? `<span class="tag">${m.tag}</span>` : ""}<span class="item-dots"></span><span class="item-price">${m.p} ₽</span></div>
      <p>${m.d}</p>
    </article>`).join("");
}
tabsBox.addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  $$(".tab", tabsBox).forEach(t => t.setAttribute("aria-selected", t === b));
  renderMenu(+b.dataset.i);
});
renderMenu(0);

/* ===================== галерея ===================== */
const lb = $("#lightbox"), lbPic = $("#lbPic"), lbCap = $("#lbCap");
$("#galGrid").addEventListener("click", e => {
  const t = e.target.closest(".tile"); if (!t) return;
  const cs = getComputedStyle(t);
  lbPic.style.setProperty("--photo", cs.getPropertyValue("--photo"));
  lbPic.style.setProperty("--g", cs.getPropertyValue("--g"));
  lbCap.textContent = t.dataset.cap;
  lb.showModal();
});
$("#lbClose").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

/* ===================== отзывы ===================== */
const track = $("#revTrack");
track.innerHTML = REVIEWS.map(r => `
  <article class="rev">
    <div class="stars" aria-label="5 из 5">★★★★★</div>
    <p>${r.t}</p>
    <div class="who"><i>${r.name[0]}</i><span>${r.name}<small>${r.when}</small></span></div>
  </article>`).join("");
const step = () => track.querySelector(".rev").offsetWidth + 19;
$("#revPrev").addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
$("#revNext").addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));

/* ===================== клуб: карта со штампами ===================== */
const N = CONFIG.stampsForGift;
const stampsBox = $("#stamps"), info = $("#stampInfo");
let count = +(localStorage.getItem("cascara_stamps") || 0);
stampsBox.innerHTML = Array.from({ length: N }, (_, i) => `<div class="stamp ${i === N - 1 ? "gift" : ""}">${i === N - 1 ? "♥" : i + 1}</div>`).join("");
function drawStamps(animate) {
  $$(".stamp", stampsBox).forEach((s, i) => s.classList.toggle("on", i < count));
  if (count >= N) info.textContent = "Восьмой кофе за наш счёт. Покажите карту на кассе.";
  else if (count === 0) info.textContent = "Пока пусто. Первый штамп — за любой напиток.";
  else info.textContent = `Ещё ${N - count} ${N - count === 1 ? "кофе" : "кофе"} до подарка.`;
  $("#addStamp").disabled = count >= N;
  $("#addStamp").style.opacity = count >= N ? .5 : 1;
}
$("#addStamp").addEventListener("click", () => {
  if (count < N) { count++; localStorage.setItem("cascara_stamps", count); drawStamps(); }
});
$("#resetStamp").addEventListener("click", () => { count = 0; localStorage.setItem("cascara_stamps", 0); drawStamps(); });
drawStamps();

$("#joinForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#jName").value.trim(), phone = $("#jPhone").value.trim();
  const msg = $("#joinMsg");
  if (name.length < 2 || phone.replace(/\D/g, "").length < 10) { msg.textContent = "Укажите имя и телефон, чтобы мы оформили карту."; return; }
  msg.textContent = `${name}, вы в клубе. Карта будет ждать вас на кассе.`;
  e.target.reset();
});

/* ===================== бронирование ===================== */
const bDate = $("#bDate"), bTime = $("#bTime"), gCount = $("#gCount"), bookMsg = $("#bookMsg");
let guests = 2;
const toISO = dt => `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
const today = new Date();
bDate.min = toISO(today);
bDate.value = toISO(today);
const max = new Date(); max.setDate(max.getDate() + 60); bDate.max = toISO(max);

function fillTimes() {
  const dt = new Date(bDate.value + "T00:00");
  if (isNaN(dt)) return;
  const [o, c] = CONFIG.hours[dt.getDay()];
  const isToday = bDate.value === toISO(new Date());
  const nowH = new Date().getHours() + new Date().getMinutes() / 60;
  const opts = [];
  for (let t = o; t <= c - 1; t += 0.5) {
    if (isToday && t < nowH + 0.5) continue;
    opts.push(`<option value="${pad(Math.floor(t))}:${t % 1 ? "30" : "00"}">${pad(Math.floor(t))}:${t % 1 ? "30" : "00"}</option>`);
  }
  bTime.innerHTML = opts.length ? opts.join("") : `<option value="">Сегодня мест нет</option>`;
}
bDate.addEventListener("change", fillTimes); fillTimes();

$("#gMinus").addEventListener("click", () => { guests = Math.max(1, guests - 1); gCount.textContent = guests; });
$("#gPlus").addEventListener("click", () => {
  if (guests >= CONFIG.maxGuests) { bookMsg.textContent = `Для компании больше ${CONFIG.maxGuests} человек напишите нам в мессенджер.`; return; }
  guests++; gCount.textContent = guests; bookMsg.textContent = "";
});

$("#bookForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#bName"), phone = $("#bPhone");
  [name, phone, bTime].forEach(x => x.classList.remove("bad"));
  const errors = [];
  if (!bTime.value) { bTime.classList.add("bad"); errors.push("выберите время"); }
  if (name.value.trim().length < 2) { name.classList.add("bad"); errors.push("укажите имя"); }
  if (phone.value.replace(/\D/g, "").length < 10) { phone.classList.add("bad"); errors.push("проверьте телефон"); }
  if (errors.length) { bookMsg.textContent = "Чтобы забронировать: " + errors.join(", ") + "."; return; }
  bookMsg.textContent = "";

  const zone = $("input[name=zone]:checked").value;
  const date = new Date(bDate.value + "T00:00").toLocaleDateString("ru-RU", { day: "numeric", month: "long", weekday: "long" });
  const note = $("#bNote").value.trim();
  $("#doneText").textContent = `${name.value.trim()}, ждём вас ${date} в ${bTime.value}. ${guests} ${plural(guests)}, ${zone}.`;
  const text = `Здравствуйте! Бронь: ${date}, ${bTime.value}, ${guests} ${plural(guests)}, ${zone}. Имя: ${name.value.trim()}, тел: ${phone.value.trim()}.${note ? " Пожелания: " + note : ""}`;
  $("#doneWa").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  $("#bookForm").hidden = true; $("#bookDone").hidden = false;
});
$("#doneAgain").addEventListener("click", () => {
  $("#bookForm").hidden = false; $("#bookDone").hidden = true; $("#bookForm").reset();
  guests = 2; gCount.textContent = 2; bDate.value = toISO(new Date()); fillTimes();
});
function plural(n) { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? "гость" : a >= 2 && a <= 4 && (b < 10 || b >= 20) ? "гостя" : "гостей"; }