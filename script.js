// ============================================================================
// DAFTAR ANGGOTA MAHASISWA KOLABORATOR (FT & FMIPA)
// Data nama masing-masing anggota belum ada jadi dikosongkan terlebih dahulu.
// Silakan isi data anggota kelompok pada array di bawah ini:
// ============================================================================
const teamMembers = [
  // ── FAKULTAS TEKNIK — INFORMATIKA ──────────────────────────────────────────
  {
    name: "Airin Citra Kirana",
    npm: "2615061001",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "citet.jpeg",
    quote: "Teknologi bermakna ketika ia digunakan untuk mengangkat derajat sesama.",
    reflection: "Kunjungan ke panti asuhan mengajarkan saya bahwa ilmu tanpa kepedulian adalah kosong. Saya pulang dengan hati yang lebih penuh dan tekad untuk terus bermanfaat."
  },
  {
    name: "Syifa Uljanah",
    npm: "2615061017",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "ul.jpeg",
    quote: "Kebaikan yang tulus selalu menemukan jalannya ke hati yang tepat.",
    reflection: "Berinteraksi langsung dengan adik-adik panti menumbuhkan rasa syukur yang dalam. Setiap senyum mereka adalah pengingat bahwa empati adalah bekal hidup yang sesungguhnya."
  },
  {
    name: "Zahra Salsabilla",
    npm: "2615061019",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "zar.jpeg",
    quote: "Berbagi waktu dan perhatian adalah investasi kemanusiaan terbaik.",
    reflection: "Pengalaman ini membuka mata saya bahwa pengabdian nyata jauh lebih berdampak daripada sekadar teori. Nilai Pancasila benar-benar hidup dalam setiap interaksi di panti."
  },
  {
    name: "Erin Chelsia Sabila",
    npm: "2615061024",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "erin.jpeg",
    quote: "Kepedulian adalah kode sumber dari peradaban yang bermartabat.",
    reflection: "Melihat semangat belajar adik-adik panti yang tak pernah padam meski di tengah keterbatasan menjadi motivasi terkuat saya untuk terus berkontribusi bagi masyarakat."
  },
  {
    name: "Dinayira Fransiska Sitinjak",
    npm: "2615061035",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "nay.jpg",
    quote: "pada akhirnya, kita akan sampai pada tempat yang selama ini kita doakan.",
    reflection: "Sinergi antara mahasiswa FT dan FMIPA membuktikan bahwa perbedaan disiplin ilmu bukan hambatan, melainkan kekuatan untuk menciptakan dampak sosial yang lebih besar."
  },
  {
    name: "Genial Ang Djenar",
    npm: "2615061060",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "nial.jpeg",
    quote: "Inovasi terhebat adalah yang mampu menyentuh kehidupan orang banyak.",
    reflection: "Kegiatan ini menyadarkan saya bahwa sebagai insan teknologi, tanggung jawab sosial harus selalu berjalan seiring dengan kemampuan teknis yang kami kembangkan."
  },
  {
    name: "Lucky Dharma Putra",
    npm: "2615061063",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "luk.png",
    quote: "Keberuntungan sejati adalah ketika kita bisa membuat orang lain bahagia.",
    reflection: "Mendampingi adik-adik panti belajar dan bermain adalah pengalaman yang tidak ternilai. Mereka mengajarkan saya arti ketulusan dan keberanian dalam menghadapi hidup."
  },
  {
    name: "Renatha Hany Yuztika",
    npm: "2615061066",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "ren.jpeg",
    quote: "Setiap langkah kecil menuju kebaikan adalah kontribusi nyata bagi bangsa.",
    reflection: "Momen berbagi bersama adik-adik di Panti Asuhan Hasbi Rabbi adalah pengingat bahwa di balik layar teknologi, ada jiwa-jiwa manusia yang perlu kita jaga dan perhatikan."
  },
  {
    name: "Shofi Gholi Alwan Azzaki",
    npm: "2615061067",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "sofi.jpeg",
    quote: "Pengabdian adalah ekspresi tertinggi dari ilmu yang dimiliki.",
    reflection: "Kegiatan sosial ini memperkuat keyakinan saya bahwa mahasiswa teknik bukan hanya membangun sistem, tetapi juga harus turut membangun karakter dan kesejahteraan masyarakat."
  },
  {
    name: "Khodijah Bintu H.Wardono",
    npm: "2615061072",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "koko.png",
    quote: "Ketika hati dan pikiran bersatu, tidak ada kebaikan yang terlalu kecil.",
    reflection: "Kunjungan ini mengajarkan saya bahwa nilai Pancasila bukan sekadar hapalan, melainkan panduan hidup yang harus diwujudkan dalam tindakan nyata setiap harinya."
  },
  {
    name: "Syahrul Muhammad Farel",
    npm: "2615061076",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "syah.jpeg",
    quote: "Generasi muda yang peduli adalah fondasi bangsa yang kuat.",
    reflection: "Berinteraksi dengan penghuni panti asuhan memperdalam pemahaman saya tentang pentingnya keadilan sosial. Ini adalah pelajaran yang tidak akan saya temukan di bangku kuliah."
  },
  {
    name: "Fathiyah Izza Ramadani",
    npm: "2615061082",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "izaa.jpeg",
    quote: "Dedikasi dan keikhlasan adalah dua sayap pengabdian yang sesungguhnya.",
    reflection: "Melihat adik-adik panti begitu antusias dan bersemangat meski dalam keterbatasan memberikan pelajaran berharga tentang rasa syukur dan ketangguhan jiwa."
  },
  {
    name: "Fauziyah Nur Hasanah",
    npm: "2615061095",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "pau.jpeg",
    quote: "Hasanah sejati lahir dari niat tulus untuk berbagi tanpa pamrih.",
    reflection: "Kegiatan pengabdian ini menguatkan tekad saya untuk menjadi pribadi yang tidak hanya cerdas secara akademis, tetapi juga peka dan responsif terhadap kebutuhan sosial."
  },
  {
    name: "Hafid Surya",
    npm: "2615061096",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "fid.jpeg",
    quote: "Seperti matahari, jadilah sumber cahaya dan kehangatan bagi sekitar.",
    reflection: "Pengalaman di panti asuhan mengajarkan bahwa keberhasilan sejati bukan diukur dari nilai IPK, melainkan dari seberapa besar dampak positif yang kita berikan kepada orang lain."
  },
  {
    name: "Amsal Fritzie Siregar",
    npm: "2615061105",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "sal.jpeg",
    quote: "Kepedulian sosial adalah kompas moral seorang intelektual sejati.",
    reflection: "Kolaborasi dalam kegiatan ini memperkuat rasa persatuan saya dengan rekan-rekan dari berbagai latar belakang. Kami membuktikan bahwa perbedaan bisa menjadi kekuatan luar biasa."
  },
  {
    name: "Daffa Choirul Shihab",
    npm: "2615061106",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "faa.jpeg",
    quote: "Setiap baris kode yang baik dimulai dari hati yang ikhlas melayani.",
    reflection: "Momen berbagi ilmu dan kegembiraan bersama adik-adik panti adalah pengalaman yang mengubah perspektif saya tentang makna hidup sebagai mahasiswa dan sebagai manusia."
  },
  {
    name: "Rafa Fairuz Athaya",
    npm: "2615061124",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "rafa.jpeg",
    quote: "Kejernihan hati melahirkan tindakan yang bermakna bagi sesama.",
    reflection: "Kegiatan pengabdian ini adalah salah satu momen paling bermakna dalam perjalanan perkuliahan saya. Senyum adik-adik panti adalah hadiah yang tidak ternilai harganya."
  },
  {
    name: "Bona Hasian Sitohang",
    npm: "2615061140",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "bon.jpeg",
    quote: "Hasian berarti kasih sayang — dan kasih sayang adalah modal terbesar pengabdian.",
    reflection: "Interaksi hangat di panti asuhan mengingatkan saya bahwa di balik setiap angka data dan algoritma, ada manusia nyata yang membutuhkan perhatian dan empati kita."
  },
  {
    name: "Ariiq Nawfal Aqilla",
    npm: "2655061005",
    faculty: "FT",
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "riiq.jpeg",
    quote: "Kecerdasan tanpa nurani adalah pisau tanpa gagang — berbahaya bagi diri sendiri.",
    reflection: "Bergabung dalam kegiatan ini memperkaya saya bukan hanya secara sosial, tetapi juga spiritualitas. Nilai-nilai Pancasila terasa hidup dan nyata dalam setiap kegiatan yang kami lakukan bersama."
  },

  {
    name: "Karel Agreska Arlin",
    npm: "2617021006",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "Karel.jpeg",
    quote: "Kepedulian terhadap sesama adalah bentuk tertinggi dari keharmonisan hidup.",
    reflection: "Melihat binar mata dan keceriaan adik-adik panti menyadarkan saya bahwa kebahagiaan sejati hadir ketika kita mau berbagi waktu dan ketulusan."
  },
  {
    name: "Arta Aulia",
    npm: "2617021030",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "Artha.jpeg",
    quote: "Berbagi bukan tentang seberapa banyak yang kita punya, melainkan ketulusan hati.",
    reflection: "Kunjungan ini mengajarkan makna rasa syukur yang mendalam dan pentingnya merawat empati sosial di tengah kesibukan perkuliahan."
  },
  {
    name: "Annisa Qania Fitri",
    npm: "2617021039",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "anisa.jpeg",
    quote: "Setiap senyuman adik-adik panti adalah motivasi terbesar untuk terus bermanfaat.",
    reflection: "Melalui interaksi hangat ini, nilai kemanusiaan dalam Pancasila bukan lagi teori, tetapi tindakan nyata yang menyentuh nurani."
  },
  {
    name: "Clarissa Aurelia",
    npm: "2617021021",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "clarisa.jpeg",
    quote: "Menyemai kasih sayang adalah langkah awal membangun masa depan generasi bangsa.",
    reflection: "Mendampingi adik-adik belajar dan bermain memberikan pengalaman batin yang berharga tentang arti kebersamaan dan ketulusan."
  },
  {
    name: "Saifina Izza Aulia",
    npm: "2617021050",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "fina.jpeg",
    quote: "Kebaikan kecil yang dilakukan bersama akan melahirkan dampak yang luar biasa.",
    reflection: "Kegiatan ini mempererat ikatan kekeluargaan lintas disiplin ilmu dan menguatkan komitmen moral kami untuk terus peduli pada sesama."
  },
  {
    name: "Syabilla Aura Puffy",
    npm: "2617021060",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "bila.jpeg",
    quote: "Belajar memahami arti kehidupan dari ketulusan dan ketegaran anak-anak panti.",
    reflection: "Senyum polos mereka mengajarkan arti kesabaran dan keikhlasan. Pengalaman berharga yang akan selalu membekas di hati."
  },
  {
    name: "Puja Tyas Cahyani",
    npm: "2617021070",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "ayas.jpeg",
    quote: "Sains mengajarkan kita tentang kehidupan, tetapi kemanusiaan memberi makna padanya.",
    reflection: "Kolaborasi ini membuktikan bahwa ilmu biologi dan nurani sosial saling melengkapi dalam mengabdi kepada masyarakat."
  },
  {
    name: "Aqila Salsabila Fitri",
    npm: "2617021081",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "aqila.jpeg",
    quote: "Hadir dan mendengarkan adalah wujud sederhana dari kasih sayang yang bermakna.",
    reflection: "Mendengarkan cita-cita adik-adik panti membuka mata saya bahwa setiap anak berhak mendapatkan kasih sayang dan ruang untuk bermimpi."
  },
  {
    name: "Jeni Hestiana Dewi",
    npm: "2617021091",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "jeni.jpeg",
    quote: "Mengabdi dengan hati, menebar benih kebaikan untuk negeri.",
    reflection: "Pengalaman di Panti Asuhan Hasbi Rabbi menumbuhkan tekad kuat untuk terus berkontribusi aktif bagi kesejahteraan sosial."
  },
  {
    name: "Chintya Nabila",
    npm: "2657021004",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "cynta.jpeg",
    quote: "Persatuan dan gotong royong adalah kunci terciptanya kepedulian yang berkelanjutan.",
    reflection: "Sinergi antara mahasiswa dan pengurus panti menjadi bukti nyata indahnya nilai persatuan dan keadilan sosial Pancasila."
  },
  {
    name: "Syaqinata Riskia Karlin",
    npm: "2657021013",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "nata.jpeg",
    quote: "Cinta kasih yang tulus mampu meruntuhkan setiap jarak dan perbedaan.",
    reflection: "Kebersamaan bersama adik-adik panti asuhan mengajarkan bahwa kebahagiaan terbesar datang saat kita mampu membuat orang lain tersenyum."
  },
  {
    name: "Syahdan Abbad Zabran",
    npm: "2657021017",
    faculty: "Fmipa",
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "zabran.jpeg",
    quote: "Jadilah pribadi yang menebar manfaat di mana pun kaki berpijak.",
    reflection: "Aksi nyata di panti asuhan ini memperkokoh integritas dan rasa tanggung jawab sosial sebagai generasi muda harapan bangsa."
  }
];

const galleryItems = [
  {
    src: "foto/Survei Lokasi.mp4",
    type: "video",
    title: "Dokumentasi Survei Lokasi",
    sub: "Peninjauan langsung kondisi lapangan dan fasilitas Panti Asuhan Hasbi Rabbi"
  },
  {
    src: "foto/ProsesMemintaizin.jpeg",
    type: "image",
    title: "Proses Meminta Izin & Silaturahmi",
    sub: "Pertemuan awal dan permohonan izin resmi bersama pimpinan panti asuhan"
  },
  {
    src: "foto/WhatsApp Image 2026-10-05 at 19.20.53.jpeg",
    type: "image",
    title: "Survei Pendopo Utama & Diskusi Tempat",
    sub: "Observasi pendopo terbuka untuk penempatan sesi mentoring dan kelas belajar"
  },
  {
    src: "foto/WhatsApp Image 2026-10-05 at 19.20.51.jpeg",
    type: "image",
    title: "Observasi Halaman & Ruang Terbuka",
    sub: "Pengamatan kondisi halaman untuk kegiatan games interaktif anak-anak panti"
  },
  {
    src: "foto/WhatsApp Image 2026-10-05 at 19.20.54.jpeg",
    type: "image",
    title: "Koordinasi Teknis Lapangan FT × FMIPA",
    sub: "Sinkronisasi pembagian tugas mahasiswa Informatika dan Biologi di lokasi"
  },
  {
    src: "foto/WhatsApp Video 2026-10-05 at 19.20.54.mp4",
    type: "video",
    title: "Video Dokumentasi Lapangan",
    sub: "Observasi suasana riil dan dinamika lingkungan panti asuhan"
  }
];

const heroSlides = [
  {
    src: "foto/ProsesMemintaizin.jpeg",
    alt: "Proses perizinan dan silaturahmi di panti asuhan",
    title: "Silaturahmi &amp; Proses Perizinan",
    sub: "Panti Asuhan Hasbi Rabbi &bull; Informatika &times; Biologi"
  },
  {
    src: "foto/WhatsApp Image 2026-10-05 at 19.20.53.jpeg",
    alt: "Survei dan koordinasi di pendopo panti asuhan",
    title: "Survei Lapangan &amp; Pendopo Kegiatan",
    sub: "Panti Asuhan Hasbi Rabbi &bull; Persiapan H-7"
  },
  {
    src: "foto/WhatsApp Image 2026-10-05 at 19.20.51.jpeg",
    alt: "Peninjauan area terbuka panti asuhan",
    title: "Peninjauan Area &amp; Fasilitas Terbuka",
    sub: "Kolaborasi Tim FT &times; FMIPA"
  },
  {
    src: "foto/WhatsApp Image 2026-10-05 at 19.20.54.jpeg",
    alt: "Koordinasi teknis tim mahasiswa",
    title: "Koordinasi &amp; Pemetaan Teknis Lapangan",
    sub: "Penyusunan Rangkaian Acara Edukatif"
  }
];

// ============================================================================
// KESAN & PESAN PANTI ASUHAN
// Isi dengan ungkapan nyata dari pimpinan, pengasuh, atau anak-anak panti.
// Hapus contoh di bawah dan ganti dengan ucapan asli setelah kegiatan selesai.
// Kosongkan array ( [] ) jika belum ada data — section akan otomatis tersembunyi.
// ============================================================================
const testiData = [
  {
    body: "Kami sangat bersyukur dengan kehadiran adik-adik mahasiswa yang membawa begitu banyak kebaikan. Anak-anak kami merasa sangat senang dan terhibur. Semoga ilmu yang kalian bagi menjadi bekal berharga bagi mereka.",
    name: "Pimpinan Panti Asuhan",
    role: "Panti Asuhan Hasbi Rabbi",
    initial: "P"
  },
  {
    body: "Kak-kak mahasiswanya baik banget! Saya belajar matematika dan menggambar bersama mereka. Rasanya seperti punya kakak baru yang peduli. Semoga bisa datang lagi ya, Kak!",
    name: "Anak Panti (Usia 10 Tahun)",
    role: "Adik Panti Asuhan Hasbi Rabbi",
    initial: "A"
  },
  {
    body: "Kegiatan ini luar biasa. Para mahasiswa tidak hanya membawa bantuan materi, tetapi juga kehangatan dan semangat yang menginspirasi anak-anak kami untuk terus belajar dan bermimpi besar.",
    name: "Pengasuh Panti",
    role: "Staf Pengasuh Panti Asuhan Hasbi Rabbi",
    initial: "Pe"
  },
  {
    body: "Momen bersama kak-kak dari FT dan FMIPA adalah yang paling berkesan tahun ini. Kami merasa tidak sendirian. Terima kasih sudah datang dan berbagi dari hati.",
    name: "Koordinator Anak Panti",
    role: "Perwakilan Anak-anak Panti",
    initial: "K"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  updateMemberCount();
  renderTeam("all");
  renderReflections();
  setupFilter();
  setupGallery();
  setupPrepFilters();
  setupNavigation();
  initCanvasVisualization();
  initInteractive3DLab();
  initDocCarousel();

  // Sistem animasi baru
  initScrollReveal();
  initTimelineProgress();
  initParallax();
  initTestimonialSlider();
  initHeroSlideshow();
});

// ============================================================================
// SCROLL REVEAL — 3D PERSPECTIVE ENTRANCE ANIMATION
// ============================================================================
function initScrollReveal() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;

  let counterFired = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");

        // Trigger counter saat blok hero-stats mulai terlihat
        if (!counterFired && entry.target.closest(".hero-stats")) {
          counterFired = true;
          animateCounters();
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

// ============================================================================
// NUMBER COUNTER — easeOutExpo ANIMATION
// ============================================================================
function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach(el => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 900;
    const startTime = performance.now();

    el.classList.add("counting");

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo easing
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(eased * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
        el.classList.remove("counting");
      }
    }
    requestAnimationFrame(step);
  });
}

// ============================================================================
// TIMELINE — SCROLL-DRIVEN PROGRESS FILL & NODE ACTIVATION
// ============================================================================
function initTimelineProgress() {
  const stream = document.getElementById("timeline-stream");
  if (!stream) return;

  const nodes = stream.querySelectorAll(".timeline-node[data-node]");

  function updateTimeline() {
    const rect = stream.getBoundingClientRect();
    const viewH = window.innerHeight;

    const scrollStart = rect.top - viewH * 0.75;
    const scrollEnd = rect.bottom - viewH * 0.25;
    const rawProgress = 1 - (scrollEnd - 0) / (scrollEnd - scrollStart);
    const progress = Math.max(0, Math.min(1, rawProgress));

    stream.style.setProperty("--timeline-progress", `${progress * 100}%`);

    nodes.forEach(node => {
      const nodeRect = node.getBoundingClientRect();
      if (nodeRect.top < viewH * 0.65) {
        node.classList.add("node-active");
      } else {
        node.classList.remove("node-active");
      }
    });
  }

  window.addEventListener("scroll", updateTimeline, { passive: true });
  updateTimeline();
}

// ============================================================================
// PARALLAX — FLOATING BADGE MOUSE TRACKING
// ============================================================================
function initParallax() {
  const badge = document.getElementById("floating-badge");
  if (!badge) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener("mousemove", e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 18;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
  });

  function tick() {
    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;
    badge.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(tick);
  }
  tick();
}

// ============================================================================
// TESTIMONIAL SLIDER — KESAN & PESAN PANTI ASUHAN
// Slider 2-per-view di desktop, 1-per-view di mobile, dengan dots & swipe.
// ============================================================================
function initTestimonialSlider() {
  const track = document.getElementById("testi-track");
  const dotsWrap = document.getElementById("testi-dots");
  const prevBtn = document.getElementById("testi-prev");
  const nextBtn = document.getElementById("testi-next");

  if (!track || !testiData.length) {
    const sec = document.getElementById("testimonial");
    if (sec) sec.style.display = "none";
    return;
  }
  const sec = document.getElementById("testimonial");
  if (sec) sec.style.display = "";

  // --- Render kartu ---
  testiData.forEach(t => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <p class="testimonial-body">${t.body}</p>
      <div class="testimonial-footer">
        <div class="testimonial-avatar">${t.initial}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  const getVisible = () => window.innerWidth <= 768 ? 1 : 2;
  const totalSlides = () => Math.ceil(testiData.length / getVisible());
  let current = 0;

  function renderDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < totalSlides(); i++) {
      const dot = document.createElement("button");
      dot.className = "testi-dot" + (i === current ? " active" : "");
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function goTo(index) {
    const total = totalSlides();
    current = ((index % total) + total) % total;

    const cardEl = track.querySelector(".testimonial-card");
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth;
    const gap = 24; // 1.5rem gap
    const perSlide = getVisible();
    track.style.transform = `translateX(-${current * perSlide * (cardWidth + gap)}px)`;

    dotsWrap.querySelectorAll(".testi-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  // Auto-play — reset on manual interaction
  let autoplay = setInterval(() => goTo(current + 1), 5000);
  function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(() => goTo(current + 1), 5000);
  }
  [prevBtn, nextBtn].forEach(btn => btn.addEventListener("click", resetAutoplay));

  // Touch / swipe support
  let touchStartX = 0;
  track.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      goTo(dx < 0 ? current + 1 : current - 1);
      resetAutoplay();
    }
  });

  renderDots();
  goTo(0);

  window.addEventListener("resize", () => {
    renderDots();
    goTo(0);
  });
}

// ============================================================================
// HERO SLIDESHOW — CROSSFADE AUTO-ADVANCE
// ============================================================================
function initHeroSlideshow() {
  const container = document.getElementById("hero-slideshow");
  const dotsWrap = document.getElementById("hero-slide-dots");
  const titleEl = document.getElementById("slide-caption-title");
  const subEl = document.getElementById("slide-caption-sub");

  if (!container || !heroSlides.length) return;

  // Render semua slide (absolut bertumpuk, crossfade)
  heroSlides.forEach((slide, i) => {
    const el = document.createElement("div");
    el.className = "hero-slide" + (i === 0 ? " active" : "");
    el.innerHTML = `<img src="${slide.src}" alt="${slide.alt}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
    container.appendChild(el);
  });

  // Render dots hanya jika ada > 1 slide
  if (heroSlides.length > 1 && dotsWrap) {
    heroSlides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "hero-slide-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Foto ${i + 1}`);
      dot.addEventListener("click", () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });
  }

  let current = 0;
  const slides = container.querySelectorAll(".hero-slide");
  const dots = dotsWrap ? dotsWrap.querySelectorAll(".hero-slide-dot") : [];

  function goToSlide(index) {
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");

    current = ((index % heroSlides.length) + heroSlides.length) % heroSlides.length;

    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");

    // Fade caption saat ganti slide
    if (titleEl && subEl) {
      titleEl.style.transition = "opacity 0.2s ease";
      subEl.style.transition = "opacity 0.2s ease";
      titleEl.style.opacity = "0";
      subEl.style.opacity = "0";
      setTimeout(() => {
        titleEl.innerHTML = heroSlides[current].title;
        subEl.innerHTML = heroSlides[current].sub;
        titleEl.style.transition = "opacity 0.4s ease";
        subEl.style.transition = "opacity 0.4s ease";
        titleEl.style.opacity = "1";
        subEl.style.opacity = "1";
      }, 220);
    }
  }

  // Auto-advance tiap 4 detik, pause saat hover
  if (heroSlides.length > 1) {
    let timer = setInterval(() => goToSlide(current + 1), 4000);
    const card = container.closest(".hero-main-card");
    if (card) {
      card.addEventListener("mouseenter", () => clearInterval(timer));
      card.addEventListener("mouseleave", () => {
        timer = setInterval(() => goToSlide(current + 1), 4000);
      });
    }
  }
}

// ============================================================================
// === FUNGSI LAMA YANG DIPERTAHANKAN ==========================================
// ============================================================================

function updateMemberCount() {
  const statEl = document.getElementById("stat-members");
  if (statEl) {
    const count = teamMembers.length;
    statEl.setAttribute("data-count", count);
    statEl.textContent = count > 0 ? count : "-";
  }
}

function renderTeam(filter) {
  const section = document.getElementById("tim");
  const container = document.getElementById("team-grid");
  if (!container) return;
  container.innerHTML = "";

  if (teamMembers.length === 0) {
    if (section) section.style.display = "none";
    return;
  }

  if (section) section.style.display = "";

  const filtered = filter === "all" ? teamMembers : teamMembers.filter(m => m.faculty.toLowerCase() === filter.toLowerCase());

  if (filtered.length === 0) {
    const emptyNotice = document.createElement("div");
    emptyNotice.className = "placeholder-box";
    emptyNotice.style.gridColumn = "1 / -1";
    emptyNotice.innerHTML = `
      <div class="placeholder-icon-wrap">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <h3 class="placeholder-title">Data Anggota Belum Tersedia</h3>
      <p class="placeholder-desc">Data mahasiswa untuk kategori ini dapat ditambahkan di <code>script.js</code> pada variabel <code>teamMembers</code>.</p>
    `;
    container.appendChild(emptyNotice);
    return;
  }

  filtered.forEach(m => {
    const card = document.createElement("div");
    card.className = `member-card ${m.faculty}`;
    const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=0284c7&color=fff&size=128&bold=true`;
    const avatarSrc = m.avatar && m.avatar.trim() !== ""
      ? (m.avatar.startsWith("http") || m.avatar.startsWith("foto/") ? m.avatar : `foto/${m.avatar}`)
      : fallbackAvatar;
    card.innerHTML = `
      <div class="member-card-top">
        <img class="member-avatar" src="${avatarSrc}" alt="${m.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackAvatar}'">
        <div class="member-meta">
          <div class="member-name">${m.name}</div>
          <span class="member-faculty-badge">${m.faculty.toUpperCase()}</span>
        </div>
      </div>
      <div class="member-prodi">${m.prodi} &bull; ${m.facultyName}</div>
      ${m.npm ? `<div class="member-npm"><span class="npm-label">NPM</span><code>${m.npm}</code></div>` : ''}
      <div class="member-quote">&ldquo;${m.quote || 'Mengabdi untuk masyarakat.'}&rdquo;</div>
    `;
    container.appendChild(card);
  });
}

function setupFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-filter");
      renderTeam(target);
    });
  });
}

function renderReflections() {
  const section = document.getElementById("refleksi");
  const container = document.getElementById("reflection-grid");
  if (!container) return;
  container.innerHTML = "";

  if (teamMembers.length === 0) {
    if (section) section.style.display = "none";
    return;
  }

  if (section) section.style.display = "";

  teamMembers.forEach(m => {
    const item = document.createElement("div");
    item.className = "reflection-item";
    item.innerHTML = `
      <div class="reflection-quote">&ldquo;${m.reflection}&rdquo;</div>
      <div class="reflection-author">
        <div>
          <div class="reflection-author-name">${m.name}</div>
          <div class="reflection-author-prodi">${m.prodi} &bull; ${m.facultyName}${m.npm ? ` (NPM: ${m.npm})` : ''}</div>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function setupGallery() {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalVid = document.getElementById("lightbox-video");
  const modalCap = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  // Pastikan seluruh video preview tidak autoplay dan tidak bisa diklik langsung
  document.querySelectorAll("video").forEach(v => {
    v.removeAttribute("autoplay");
    v.pause();
    v.addEventListener("click", e => e.preventDefault());
  });

  // Sambungkan semua elemen yang memiliki kelas lightbox-trigger atau gallery-card
  document.querySelectorAll(".gallery-card, .lightbox-trigger").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();

      const videoSrc = card.getAttribute("data-video");
      const src = card.getAttribute("data-src") || card.querySelector("img")?.src;
      const title = card.getAttribute("data-title") || card.querySelector(".timeline-media-label")?.textContent?.trim() || "";

      if (!modal || !modalCap) return;
      modalCap.textContent = title || "";

      if (videoSrc) {
        if (modalImg) modalImg.style.display = "none";
        if (modalVid) {
          modalVid.style.display = "block";
          modalVid.style.width = "100%";
          modalVid.style.maxHeight = "70vh";
          modalVid.style.borderRadius = "0.75rem";
          modalVid.src = videoSrc;
          modal.classList.add("active");
          document.body.style.overflow = "hidden";
          modalVid.load();
          modalVid.play().catch(() => {});
          return;
        }
      } else if (src) {
        if (modalVid) { modalVid.pause(); modalVid.src = ""; modalVid.style.display = "none"; }
        if (modalImg) { modalImg.style.display = "block"; modalImg.src = src; }
      }

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
    if (modalVid) {
      modalVid.pause();
      modalVid.src = "";
      modalVid.style.display = "none";
    }
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

// ============================================================================
// FILTER MEDIA KEGIATAN PERSIAPAN (ALL / FOTO / VIDEO)
// ============================================================================
function setupPrepFilters() {
  const filterBtns = document.querySelectorAll(".prep-filter-btn");
  const mediaCards = document.querySelectorAll("#prep-media-grid .timeline-media-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-prep-filter");

      mediaCards.forEach(card => {
        const type = card.getAttribute("data-type");
        if (filter === "all" || type === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const backToTop = document.getElementById("back-to-top");

  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("open"));
    });
  }

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle("scrolled", y > 40);
    if (backToTop) backToTop.classList.toggle("visible", y > 400);
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

// ============================================================================
// VISUALISASI 3D HERO CANVAS — UNSUR BIOLOGI (DNA) & INFORMATIKA (CYBER CUBE)
// ============================================================================
function initCanvasVisualization() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  function resize() {
    if (!canvas.parentElement) return;
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // 1. Unsur Biologi: 3D DNA Double Helix di sisi kiri/latar
  const dnaGroup = new THREE.Group();
  const dnaSteps = 28;
  const dnaRadius = 2.2;
  const dnaPitch = 0.42;

  const sphereGeo = new THREE.SphereGeometry(0.12, 8, 8);
  const mipaMat = new THREE.MeshBasicMaterial({ color: 0x10B981, transparent: true, opacity: 0.85 });
  const cyanMat = new THREE.MeshBasicMaterial({ color: 0x0EA5E9, transparent: true, opacity: 0.85 });
  const rungLineMat = new THREE.LineBasicMaterial({ color: 0x38BDF8, transparent: true, opacity: 0.35 });

  for (let i = 0; i < dnaSteps; i++) {
    const angle = i * 0.4;
    const y = (i - dnaSteps / 2) * dnaPitch;
    const x1 = Math.cos(angle) * dnaRadius;
    const z1 = Math.sin(angle) * dnaRadius;
    const x2 = Math.cos(angle + Math.PI) * dnaRadius;
    const z2 = Math.sin(angle + Math.PI) * dnaRadius;

    // Node untaian 1
    const s1 = new THREE.Mesh(sphereGeo, mipaMat);
    s1.position.set(x1, y, z1);
    dnaGroup.add(s1);

    // Node untaian 2
    const s2 = new THREE.Mesh(sphereGeo, cyanMat);
    s2.position.set(x2, y, z2);
    dnaGroup.add(s2);

    // Penghubung pasangan basa (rung)
    const rungGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x1, y, z1),
      new THREE.Vector3(x2, y, z2)
    ]);
    dnaGroup.add(new THREE.Line(rungGeo, rungLineMat));
  }
  dnaGroup.position.set(-6.5, 0.5, -2);
  dnaGroup.rotation.z = 0.25;
  mainGroup.add(dnaGroup);

  // 2. Unsur Informatika: 3D Cyber Data Cube & Gimbal Rings di sisi kanan/latar
  const cyberGroup = new THREE.Group();
  const boxGeo = new THREE.BoxGeometry(3.2, 3.2, 3.2);
  const edgesGeo = new THREE.EdgesGeometry(boxGeo);
  const boxLines = new THREE.LineSegments(edgesGeo, new THREE.LineBasicMaterial({ color: 0x2563EB, transparent: true, opacity: 0.6 }));
  cyberGroup.add(boxLines);

  const ringGeo1 = new THREE.TorusGeometry(2.5, 0.04, 8, 36);
  const ring1 = new THREE.Mesh(ringGeo1, new THREE.MeshBasicMaterial({ color: 0x38BDF8, transparent: true, opacity: 0.5 }));
  cyberGroup.add(ring1);

  const ringGeo2 = new THREE.TorusGeometry(3.0, 0.04, 8, 36);
  const ring2 = new THREE.Mesh(ringGeo2, new THREE.MeshBasicMaterial({ color: 0x60A5FA, transparent: true, opacity: 0.4 }));
  ring2.rotation.x = Math.PI / 2;
  cyberGroup.add(ring2);

  // Inti kristal dalam
  const coreMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.9, 0), new THREE.MeshBasicMaterial({ color: 0x0EA5E9, wireframe: true, transparent: true, opacity: 0.7 }));
  cyberGroup.add(coreMesh);

  cyberGroup.position.set(7.2, -0.2, -2.5);
  mainGroup.add(cyberGroup);

  // 3. Jaringan Partikel Penghubung (Sinergi FT & FMIPA)
  const particleCount = 55;
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const cFt = new THREE.Color(0x1D4ED8);
  const cMipa = new THREE.Color(0x10B981);

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 22;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;

    const c = Math.random() > 0.5 ? cFt : cMipa;
    particleColors[i * 3] = c.r;
    particleColors[i * 3 + 1] = c.g;
    particleColors[i * 3 + 2] = c.b;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.16, vertexColors: true, transparent: true, opacity: 0.7 });
  mainGroup.add(new THREE.Points(pGeo, pMat));

  // Garis interkoneksi antarpartikel
  const connectLines = [];
  for (let i = 0; i < particleCount; i++) {
    for (let j = i + 1; j < particleCount; j++) {
      const dx = particlePositions[i * 3] - particlePositions[j * 3];
      const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
      const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 3.8) {
        connectLines.push(
          particlePositions[i * 3], particlePositions[i * 3 + 1], particlePositions[i * 3 + 2],
          particlePositions[j * 3], particlePositions[j * 3 + 1], particlePositions[j * 3 + 2]
        );
      }
    }
  }
  const connGeo = new THREE.BufferGeometry();
  connGeo.setAttribute("position", new THREE.Float32BufferAttribute(connectLines, 3));
  mainGroup.add(new THREE.LineSegments(connGeo, new THREE.LineBasicMaterial({ color: 0x94A3B8, transparent: true, opacity: 0.18 })));

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  window.addEventListener("mousemove", e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
  });

  (function animate() {
    requestAnimationFrame(animate);
    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;

    // Rotasi mandiri unsur biologi & informatika
    dnaGroup.rotation.y += 0.012;
    cyberGroup.rotation.x += 0.009;
    cyberGroup.rotation.y += 0.014;
    ring1.rotation.z += 0.018;
    ring2.rotation.y -= 0.015;
    coreMesh.rotation.y += 0.025;

    // Parallaks responsif mouse
    mainGroup.rotation.y = targetX * 0.25;
    mainGroup.rotation.x = targetY * 0.2;

    renderer.render(scene, camera);
  })();
}

// ============================================================================
// SEKSI 3D INTERAKTIF LAB — EKSPLORASI MANDIRI UNSUR BIOLOGI & INFORMATIKA
// ============================================================================
function initInteractive3DLab() {
  const canvas = document.getElementById("interactive-3d-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 15);

  function resize() {
    if (!canvas.parentElement) return;
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  // Pencahayaan
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const dirLight = new THREE.DirectionalLight(0x38BDF8, 1.2);
  dirLight.position.set(10, 20, 15);
  scene.add(dirLight);

  const greenLight = new THREE.PointLight(0x10B981, 1.5, 30);
  greenLight.position.set(-6, 4, 6);
  scene.add(greenLight);

  const blueLight = new THREE.PointLight(0x2563EB, 1.5, 30);
  blueLight.position.set(6, 4, 6);
  scene.add(blueLight);

  // Group Induk Visualisasi
  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // ─────────────────────────────────────────────────────────────
  // A. UNSUR BIOLOGI (DNA DOUBLE HELIX & MOLEKUL HAYATI)
  // ─────────────────────────────────────────────────────────────
  const bioGroup = new THREE.Group();
  const helixSteps = 36;
  const helixRadius = 1.9;
  const helixPitch = 0.38;

  const nucleotideColors = [
    new THREE.Color(0x10B981), // Adenin (Hijau Zamrud)
    new THREE.Color(0x06B6D4), // Timin (Sian Laut)
    new THREE.Color(0x2563EB), // Guanin (Biru Terang)
    new THREE.Color(0xF59E0B)  // Sitosin (Kuning Emas)
  ];

  const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
  const baseCenterGeo = new THREE.SphereGeometry(0.1, 12, 12);
  const baseCenterMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.9 });

  for (let i = 0; i < helixSteps; i++) {
    const angle = i * 0.38;
    const y = (i - helixSteps / 2) * helixPitch;
    const x1 = Math.cos(angle) * helixRadius;
    const z1 = Math.sin(angle) * helixRadius;
    const x2 = Math.cos(angle + Math.PI) * helixRadius;
    const z2 = Math.sin(angle + Math.PI) * helixRadius;

    const c1 = nucleotideColors[i % 4];
    const c2 = nucleotideColors[(i + 2) % 4];

    const mat1 = new THREE.MeshStandardMaterial({ color: c1, roughness: 0.3, metalness: 0.2 });
    const mat2 = new THREE.MeshStandardMaterial({ color: c2, roughness: 0.3, metalness: 0.2 });

    // Node tulang punggung DNA
    const n1 = new THREE.Mesh(nodeGeo, mat1);
    n1.position.set(x1, y, z1);
    bioGroup.add(n1);

    const n2 = new THREE.Mesh(nodeGeo, mat2);
    n2.position.set(x2, y, z2);
    bioGroup.add(n2);

    // Titik tengah ikatan hidrogen
    const midX = (x1 + x2) / 2;
    const midZ = (z1 + z2) / 2;
    const midNode = new THREE.Mesh(baseCenterGeo, baseCenterMat);
    midNode.position.set(midX, y, midZ);
    bioGroup.add(midNode);

    // Rung (batang penghubung dua warna)
    const lineGeo1 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x1, y, z1),
      new THREE.Vector3(midX, y, midZ)
    ]);
    const lineGeo2 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(midX, y, midZ),
      new THREE.Vector3(x2, y, z2)
    ]);
    bioGroup.add(new THREE.Line(lineGeo1, new THREE.LineBasicMaterial({ color: c1, linewidth: 2 })));
    bioGroup.add(new THREE.Line(lineGeo2, new THREE.LineBasicMaterial({ color: c2, linewidth: 2 })));
  }

  // Floating biomolecule clusters (cincin organik)
  for (let b = 0; b < 6; b++) {
    const bioMol = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.35 + Math.random() * 0.2, 0),
      new THREE.MeshStandardMaterial({ color: 0x34D399, wireframe: true, transparent: true, opacity: 0.65 })
    );
    const theta = (b / 6) * Math.PI * 2;
    bioMol.position.set(Math.cos(theta) * 3.5, (b - 2.5) * 1.8, Math.sin(theta) * 3.5);
    bioGroup.add(bioMol);
  }

  bioGroup.position.set(-4.5, 0, 0);
  worldGroup.add(bioGroup);

  // ─────────────────────────────────────────────────────────────
  // B. UNSUR INFORMATIKA (CYBER DATA CORE, GIMBAL & MATRIX)
  // ─────────────────────────────────────────────────────────────
  const infoGroup = new THREE.Group();

  // 1. Kubus data matriks utama dengan kisi kawat
  const cyberCubeGeo = new THREE.BoxGeometry(3.6, 3.6, 3.6);
  const cubeWire = new THREE.LineSegments(
    new THREE.EdgesGeometry(cyberCubeGeo),
    new THREE.LineBasicMaterial({ color: 0x38BDF8, linewidth: 2 })
  );
  infoGroup.add(cubeWire);

  // Simpul sudut kubus (data vertices)
  const cornerGeo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
  const cornerMat = new THREE.MeshStandardMaterial({ color: 0x60A5FA, roughness: 0.2, metalness: 0.8 });
  const half = 1.8;
  const signs = [-1, 1];
  signs.forEach(sx => {
    signs.forEach(sy => {
      signs.forEach(sz => {
        const corner = new THREE.Mesh(cornerGeo, cornerMat);
        corner.position.set(sx * half, sy * half, sz * half);
        infoGroup.add(corner);
      });
    });
  });

  // 2. Gimbal Orbital Rings (3 cincin ortogonal konsentris)
  const gimbalRing1 = new THREE.Mesh(
    new THREE.TorusGeometry(3.0, 0.05, 12, 64),
    new THREE.MeshStandardMaterial({ color: 0x0EA5E9, roughness: 0.2, metalness: 0.7 })
  );
  infoGroup.add(gimbalRing1);

  const gimbalRing2 = new THREE.Mesh(
    new THREE.TorusGeometry(3.6, 0.05, 12, 64),
    new THREE.MeshStandardMaterial({ color: 0x3B82F6, roughness: 0.2, metalness: 0.7 })
  );
  gimbalRing2.rotation.x = Math.PI / 2;
  infoGroup.add(gimbalRing2);

  const gimbalRing3 = new THREE.Mesh(
    new THREE.TorusGeometry(4.2, 0.05, 12, 64),
    new THREE.MeshStandardMaterial({ color: 0x818CF8, roughness: 0.2, metalness: 0.7 })
  );
  gimbalRing3.rotation.y = Math.PI / 2;
  infoGroup.add(gimbalRing3);

  // 3. Inti Kristal Komputasi (Octahedron Inti)
  const coreOcta = new THREE.Mesh(
    new THREE.OctahedronGeometry(1.2, 0),
    new THREE.MeshStandardMaterial({ color: 0x0284C7, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.85 })
  );
  infoGroup.add(coreOcta);

  // Titik partikel matriks biner
  const matrixPoints = [];
  for (let ix = -1; ix <= 1; ix++) {
    for (let iy = -1; iy <= 1; iy++) {
      for (let iz = -1; iz <= 1; iz++) {
        matrixPoints.push(ix * 1.1, iy * 1.1, iz * 1.1);
      }
    }
  }
  const mGeo = new THREE.BufferGeometry();
  mGeo.setAttribute("position", new THREE.Float32BufferAttribute(matrixPoints, 3));
  infoGroup.add(new THREE.Points(mGeo, new THREE.PointsMaterial({ size: 0.15, color: 0x38BDF8 })));

  infoGroup.position.set(4.5, 0, 0);
  worldGroup.add(infoGroup);

  // ─────────────────────────────────────────────────────────────
  // C. SINERGI BRIDGING FILAMENT (ALIRAN DATA BIO-KOMPUTASI)
  // ─────────────────────────────────────────────────────────────
  const synergyGroup = new THREE.Group();
  const bridgeLineCount = 6;
  const bridgeLines = [];

  for (let k = 0; k < bridgeLineCount; k++) {
    const curvePoints = [];
    const yStart = (k - 2.5) * 1.2;
    const yMid = yStart + Math.sin(k) * 1.5;
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-2.6, yStart, 0),
      new THREE.Vector3(0, yMid, Math.cos(k) * 2.5),
      new THREE.Vector3(2.6, yStart, 0)
    );
    const cPoints = curve.getPoints(24);
    const cGeo = new THREE.BufferGeometry().setFromPoints(cPoints);
    const cLine = new THREE.Line(cGeo, new THREE.LineBasicMaterial({
      color: k % 2 === 0 ? 0x10B981 : 0x0EA5E9,
      transparent: true,
      opacity: 0.45
    }));
    synergyGroup.add(cLine);
    bridgeLines.push({ curve, cLine, tOffset: k * 0.15 });
  }

  // Floating data packets di jembatan sinergi
  const packetGeo = new THREE.SphereGeometry(0.12, 10, 10);
  const packetMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const packets = [];
  for (let p = 0; p < 8; p++) {
    const pMesh = new THREE.Mesh(packetGeo, packetMat);
    synergyGroup.add(pMesh);
    packets.push({ mesh: pMesh, progress: p / 8, curveIdx: p % bridgeLineCount });
  }

  worldGroup.add(synergyGroup);

  // ─────────────────────────────────────────────────────────────
  // D. KONTROL INTERAKSI MOUSE / TOUCH / MODE SWITCHER
  // ─────────────────────────────────────────────────────────────
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;
  let rotationVelocityX = 0;
  let rotationVelocityY = 0;
  let isAutoRotating = true;
  let currentMode = "synergy"; // 'synergy' | 'bio' | 'info'

  let targetBioPos = new THREE.Vector3(-4.5, 0, 0);
  let targetInfoPos = new THREE.Vector3(4.5, 0, 0);
  let targetBioScale = 1.0;
  let targetInfoScale = 1.0;
  let targetCamZ = 15;

  // Drag interaction
  const viewport = canvas.parentElement;
  if (viewport) {
    viewport.addEventListener("mousedown", e => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    window.addEventListener("mousemove", e => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      rotationVelocityY = dx * 0.005;
      rotationVelocityX = dy * 0.005;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    // Touch support untuk HP / Tablet
    viewport.addEventListener("touchstart", e => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });

    window.addEventListener("touchmove", e => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevMouseX;
      const dy = e.touches[0].clientY - prevMouseY;
      rotationVelocityY = dx * 0.006;
      rotationVelocityX = dy * 0.006;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    }, { passive: true });

    // Scroll zoom
    viewport.addEventListener("wheel", e => {
      e.preventDefault();
      targetCamZ += e.deltaY * 0.015;
      targetCamZ = Math.max(8, Math.min(26, targetCamZ));
    }, { passive: false });
  }

  // Tombol Toggle Rotasi
  const btnRotate = document.getElementById("btn-toggle-rotate");
  const rotateIcon = document.getElementById("rotate-icon");
  if (btnRotate) {
    btnRotate.addEventListener("click", () => {
      isAutoRotating = !isAutoRotating;
      if (rotateIcon) {
        rotateIcon.innerHTML = isAutoRotating ? "&#10074;&#10074;" : "&#9658;";
      }
    });
  }

  // Tombol Reset Tampilan
  const btnReset = document.getElementById("btn-reset-view");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      worldGroup.rotation.set(0, 0, 0);
      rotationVelocityX = 0;
      rotationVelocityY = 0;
      targetCamZ = 15;
      camera.position.set(0, 0, 15);
      switchMode("synergy");
    });
  }

  // Mode Switcher Tabs
  const modeLabel = document.getElementById("three-mode-label");
  const modeBtns = document.querySelectorAll(".three-mode-btn");

  function switchMode(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
    });

    if (mode === "synergy") {
      targetBioPos.set(-4.5, 0, 0);
      targetInfoPos.set(4.5, 0, 0);
      targetBioScale = 1.0;
      targetInfoScale = 1.0;
      synergyGroup.visible = true;
      if (modeLabel) modeLabel.textContent = "Mode: Sinergi FT × FMIPA";
    } else if (mode === "info") {
      targetInfoPos.set(0, 0, 0);
      targetBioPos.set(-16, 0, -10);
      targetInfoScale = 1.35;
      targetBioScale = 0.3;
      synergyGroup.visible = false;
      if (modeLabel) modeLabel.textContent = "Mode: 3D Unsur Informatika (Cyber Matrix & Data Core)";
    }
  }

  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      switchMode(btn.getAttribute("data-mode"));
    });
  });

  // IntersectionObserver agar animasi hanya render saat terlihat di layar
  let isVisible = true;
  const observer = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  if (viewport) observer.observe(viewport);

  // Animation Loop 60 FPS
  let clock = 0;
  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    clock += 0.015;

    // Smooth inertia rotasi
    worldGroup.rotation.y += rotationVelocityY;
    worldGroup.rotation.x += rotationVelocityX;
    rotationVelocityY *= 0.92;
    rotationVelocityX *= 0.92;

    if (isAutoRotating) {
      worldGroup.rotation.y += 0.005;
    }

    // Rotasi lokal masing-masing model
    bioGroup.rotation.y += 0.015;
    infoGroup.rotation.x += 0.008;
    infoGroup.rotation.y += 0.012;
    gimbalRing1.rotation.z += 0.018;
    gimbalRing2.rotation.y -= 0.014;
    gimbalRing3.rotation.x += 0.016;
    coreOcta.rotation.y -= 0.025;

    // Animasi paket data sinergi
    if (synergyGroup.visible) {
      packets.forEach(p => {
        p.progress += 0.006;
        if (p.progress > 1) p.progress = 0;
        const cObj = bridgeLines[p.curveIdx];
        if (cObj && cObj.curve) {
          const pt = cObj.curve.getPoint(p.progress);
          p.mesh.position.copy(pt);
        }
      });
    }

    // Lerp posisi & skala untuk transisi mode yang mulus
    bioGroup.position.lerp(targetBioPos, 0.08);
    infoGroup.position.lerp(targetInfoPos, 0.08);

    const curBioScale = bioGroup.scale.x;
    const nextBioScale = curBioScale + (targetBioScale - curBioScale) * 0.08;
    bioGroup.scale.set(nextBioScale, nextBioScale, nextBioScale);

    const curInfoScale = infoGroup.scale.x;
    const nextInfoScale = curInfoScale + (targetInfoScale - curInfoScale) * 0.08;
    infoGroup.scale.set(nextInfoScale, nextInfoScale, nextInfoScale);

    // Lerp camera zoom
    camera.position.z += (targetCamZ - camera.position.z) * 0.08;

    renderer.render(scene, camera);
  }
  animate();
}

// ============================================================================
// DOC CAROUSEL — GALERI DOKUMENTASI TERKINI
// Swipe: HP (touch), Laptop (touchpad drag / mouse drag) — Pointer Events API
// ============================================================================
function initDocCarousel() {
  const track    = document.getElementById("doc-carousel-track");
  const dotsWrap = document.getElementById("doc-dots");
  const prevBtn  = document.getElementById("doc-prev");
  const nextBtn  = document.getElementById("doc-next");
  const progBar  = document.getElementById("doc-progress-bar");

  if (!track) return;

  const slides = Array.from(track.querySelectorAll(".doc-slide"));
  const total  = slides.length;
  if (total === 0) return;

  let current      = 0;
  let autoTimer    = null;
  const INTERVAL   = 4000;

  // ── Dots ────────────────────────────────────────────────────────────────────
  function renderDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const d = document.createElement("button");
      d.className = "doc-dot" + (i === 0 ? " active" : "");
      d.setAttribute("aria-label", `Slide ${i + 1}`);
      d.addEventListener("click", () => { goTo(i); resetAutoplay(); });
      dotsWrap.appendChild(d);
    });
  }

  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll(".doc-dot").forEach((d, i) =>
      d.classList.toggle("active", i === current)
    );
  }

  // ── Go to slide ─────────────────────────────────────────────────────────────
  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * slides[0].offsetWidth}px)`;
    updateDots();
  }

  // ── Progress bar ────────────────────────────────────────────────────────────
  function startProgress() {
    if (!progBar) return;
    progBar.style.transition = "none";
    progBar.style.width = "0%";
    requestAnimationFrame(() => {
      progBar.style.transition = `width ${INTERVAL}ms linear`;
      progBar.style.width = "100%";
    });
  }

  // ── Autoplay ────────────────────────────────────────────────────────────────
  function startAutoplay() {
    clearInterval(autoTimer);
    startProgress();
    autoTimer = setInterval(() => { goTo(current + 1); startProgress(); }, INTERVAL);
  }

  function stopAutoplay() {
    clearInterval(autoTimer);
    if (progBar) { progBar.style.transition = "none"; progBar.style.width = "0%"; }
  }

  function resetAutoplay() { stopAutoplay(); startAutoplay(); }

  // ── Arrow buttons ───────────────────────────────────────────────────────────
  if (prevBtn) prevBtn.addEventListener("click", () => { goTo(current - 1); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { goTo(current + 1); resetAutoplay(); });

  // ── SWIPE / DRAG — Pointer Events (tanpa setPointerCapture agar click child tetap jalan)
  // touch-action: pan-y di CSS sudah mencegah scroll vertikal saat swipe horizontal.
  let pointerStartX    = 0;
  let pointerStartY    = 0;
  let pointerActive    = false;
  let isDrag           = false;
  const SWIPE_MIN      = 40; // px minimum untuk pindah slide

  track.addEventListener("pointerdown", e => {
    if (!e.isPrimary) return;
    pointerStartX = e.clientX;
    pointerStartY = e.clientY;
    pointerActive = true;
    isDrag        = false;
    track.style.cursor = "grabbing";
    stopAutoplay();
    // TIDAK pakai setPointerCapture — supaya click event tetap sampai ke child (gallery-card / video)
  });

  // Pantau gerakan di document agar drag tetap terdeteksi walau pointer keluar area track
  document.addEventListener("pointermove", e => {
    if (!pointerActive || !e.isPrimary) return;
    const dx = Math.abs(e.clientX - pointerStartX);
    const dy = Math.abs(e.clientY - pointerStartY);
    if (!isDrag && (dx > 8 || dy > 8)) {
      isDrag = dx >= dy; // horizontal lebih dominan = swipe carousel
    }
  }, { passive: true });

  document.addEventListener("pointerup", e => {
    if (!pointerActive || !e.isPrimary) return;
    const wasSwipe = isDrag;
    const dx = e.clientX - pointerStartX;
    pointerActive = false;
    track.style.cursor = "grab";

    if (wasSwipe && Math.abs(dx) > SWIPE_MIN) {
      goTo(dx < 0 ? current + 1 : current - 1);
    }
    resetAutoplay();
  });

  document.addEventListener("pointercancel", e => {
    if (!e.isPrimary) return;
    pointerActive = false;
    track.style.cursor = "grab";
    resetAutoplay();
  });

  // ── Pause on hover (desktop only — fine to keep) ────────────────────────────
  const wrap = track.closest(".doc-carousel-wrap");
  if (wrap) {
    wrap.addEventListener("mouseenter", stopAutoplay);
    wrap.addEventListener("mouseleave", () => { if (!pointerActive) startAutoplay(); });
  }

  // ── Resize snap ─────────────────────────────────────────────────────────────
  window.addEventListener("resize", () => goTo(current));

  // ── Init ────────────────────────────────────────────────────────────────────
  renderDots();
  goTo(0);
  startAutoplay();
}
