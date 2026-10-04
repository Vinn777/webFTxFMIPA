// ============================================================================
// DAFTAR ANGGOTA MAHASISWA KOLABORATOR (FT & FMIPA)
// Data nama masing-masing anggota belum ada jadi dikosongkan terlebih dahulu.
// Silakan isi data anggota kelompok pada array di bawah ini:
// ============================================================================
const teamMembers = [
  /*
  // CONTOH FORMAT PENGISIAN ANGGOTA:
  {
    name: "Nama Mahasiswa FT",
    faculty: "ft", // gunakan 'ft' untuk Fakultas Teknik
    facultyName: "Fakultas Teknik",
    prodi: "Informatika",
    avatar: "foto/nama_foto.jpg",
    quote: "Kutipan atau pesan singkat kegiatan.",
    reflection: "Refleksi atau pembelajaran yang didapatkan dari kegiatan di panti asuhan."
  },
  {
    name: "Nama Mahasiswa FMIPA",
    faculty: "mipa", // gunakan 'mipa' untuk Fakultas MIPA (Warna Biru Muda)
    facultyName: "Fakultas MIPA",
    prodi: "Biologi",
    avatar: "foto/nama_foto.jpg",
    quote: "Kutipan atau pesan singkat kegiatan.",
    reflection: "Refleksi atau pembelajaran yang didapatkan dari kegiatan di panti asuhan."
  }
  */
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
  setupNavigation();
  initCanvasVisualization();

  // Sistem animasi baru
  initScrollReveal();
  initTimelineProgress();
  initParallax();
  initTestimonialSlider();
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
    const scrollEnd   = rect.bottom - viewH * 0.25;
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
  const track       = document.getElementById("testi-track");
  const dotsWrap    = document.getElementById("testi-dots");
  const prevBtn     = document.getElementById("testi-prev");
  const nextBtn     = document.getElementById("testi-next");

  if (!track || !testiData.length) {
    const sec = document.getElementById("testimonial");
    if (sec) sec.style.display = "none";
    return;
  }

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

  const getVisible  = () => window.innerWidth <= 768 ? 1 : 2;
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
// === FUNGSI LAMA YANG DIPERTAHANKAN ==========================================
// ============================================================================

function updateMemberCount() {
  const statEl = document.getElementById("stat-members");
  if (statEl) {
    statEl.textContent = teamMembers.length > 0 ? teamMembers.length : "-";
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

  const filtered = filter === "all" ? teamMembers : teamMembers.filter(m => m.faculty === filter);

  filtered.forEach(m => {
    const card = document.createElement("div");
    card.className = `member-card ${m.faculty}`;
    const avatarSrc = m.avatar && m.avatar.trim() !== "" ? m.avatar : "foto/placeholder_avatar.jpg";
    card.innerHTML = `
      <div class="member-card-top">
        <img class="member-avatar" src="${avatarSrc}" alt="${m.name}" loading="lazy" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=0284c7&color=fff'">
        <div class="member-meta">
          <div class="member-name">${m.name}</div>
          <span class="member-faculty-badge">${m.faculty.toUpperCase()}</span>
        </div>
      </div>
      <div class="member-prodi">${m.prodi} &bull; ${m.facultyName}</div>
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

  teamMembers.slice(0, 6).forEach(m => {
    const item = document.createElement("div");
    item.className = "reflection-item";
    item.innerHTML = `
      <div class="reflection-quote">&ldquo;${m.reflection}&rdquo;</div>
      <div class="reflection-author">
        <div>
          <div class="reflection-author-name">${m.name}</div>
          <div class="reflection-author-prodi">${m.prodi} &bull; ${m.facultyName}</div>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function setupGallery() {
  const modal    = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalVid = document.getElementById("lightbox-video");
  const modalCap = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  // Pastikan seluruh video tidak autoplay saat halaman dimuat
  document.querySelectorAll("video").forEach(v => {
    v.removeAttribute("autoplay");
    v.pause();
  });

  document.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      const src      = card.getAttribute("data-src");
      const title    = card.getAttribute("data-title");

      if (!modal || !modalCap) return;
      modalCap.textContent = title || "";

      if (videoSrc) {
        if (modalImg) modalImg.style.display = "none";
        if (modalVid) {
          modalVid.style.display = "block";
          modalVid.src = videoSrc;
          modalVid.pause();
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
    if (modalVid) { modalVid.pause(); modalVid.src = ""; modalVid.style.display = "none"; }
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

function setupNavigation() {
  const navbar    = document.getElementById("navbar");
  const toggle    = document.getElementById("nav-toggle");
  const menu      = document.getElementById("nav-menu");
  const backToTop = document.getElementById("back-to-top");

  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("open"));
    });
  }

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (navbar)    navbar.classList.toggle("scrolled", y > 40);
    if (backToTop) backToTop.classList.toggle("visible", y > 400);
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

function initCanvasVisualization() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 12);

  function resize() {
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  const group = new THREE.Group();
  scene.add(group);

  const particleCount = 45;
  const geometry      = new THREE.BufferGeometry();
  const positions     = new Float32Array(particleCount * 3);
  const colors        = new Float32Array(particleCount * 3);
  const ftColor       = new THREE.Color(0x1D4ED8);
  const mipaColor     = new THREE.Color(0x38BDF8);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

    const c = Math.random() > 0.5 ? ftColor : mipaColor;
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

  group.add(new THREE.Points(geometry, new THREE.PointsMaterial({
    size: 0.18, vertexColors: true, transparent: true, opacity: 0.75
  })));

  const linePositions = [];
  for (let i = 0; i < particleCount; i++) {
    for (let j = i + 1; j < particleCount; j++) {
      const dx = positions[i*3]-positions[j*3], dy = positions[i*3+1]-positions[j*3+1], dz = positions[i*3+2]-positions[j*3+2];
      if (Math.sqrt(dx*dx+dy*dy+dz*dz) < 4.2) {
        linePositions.push(positions[i*3],positions[i*3+1],positions[i*3+2],positions[j*3],positions[j*3+1],positions[j*3+2]);
      }
    }
  }
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  group.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: 0x94A3B8, transparent: true, opacity: 0.25 })));

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  window.addEventListener("mousemove", e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
  });

  (function animate() {
    requestAnimationFrame(animate);
    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;
    group.rotation.y += 0.0018 + targetX * 0.02;
    group.rotation.x  = targetY * 0.4;
    renderer.render(scene, camera);
  })();
}
