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

document.addEventListener("DOMContentLoaded", () => {
  updateMemberCount();
  renderTeam("all");
  renderReflections();
  setupFilter();
  setupGallery();
  setupNavigation();
  initCanvasVisualization();
});

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
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalVideo = document.getElementById("lightbox-video");
  const modalCap = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  // Pastikan seluruh video tidak autoplay saat halaman dimuat
  document.querySelectorAll("video").forEach(v => {
    v.removeAttribute("autoplay");
    v.pause();
  });

  const cards = document.querySelectorAll(".gallery-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      const src = card.getAttribute("data-src");
      const title = card.getAttribute("data-title");

      if (!modal || !modalCap) return;
      modalCap.textContent = title || "";

      if (videoSrc) {
        if (modalImg) modalImg.style.display = "none";
        if (modalVideo) {
          modalVideo.style.display = "block";
          modalVideo.src = videoSrc;
          modalVideo.pause(); // Jangan diputar otomatis, tunggu pengguna menekan tombol play
        }
      } else if (src) {
        if (modalVideo) {
          modalVideo.pause();
          modalVideo.src = "";
          modalVideo.style.display = "none";
        }
        if (modalImg) {
          modalImg.style.display = "block";
          modalImg.src = src;
        }
      }

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.src = "";
        modalVideo.style.display = "none";
      }
    }
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const backToTop = document.getElementById("back-to-top");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  }

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (navbar) {
      if (y > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }
    if (backToTop) {
      if (y > 400) backToTop.classList.add("visible");
      else backToTop.classList.remove("visible");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function initCanvasVisualization() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
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
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const ftColor = new THREE.Color(0x1D4ED8);
  const mipaColor = new THREE.Color(0x38BDF8); // Biru muda FMIPA

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 18;
    const y = (Math.random() - 0.5) * 12;
    const z = (Math.random() - 0.5) * 8;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const chosenColor = Math.random() > 0.5 ? ftColor : mipaColor;
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const pMaterial = new THREE.PointsMaterial({
    size: 0.18,
    vertexColors: true,
    transparent: true,
    opacity: 0.75
  });

  const pointCloud = new THREE.Points(geometry, pMaterial);
  group.add(pointCloud);

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x94A3B8,
    transparent: true,
    opacity: 0.25
  });

  const linePositions = [];
  for (let i = 0; i < particleCount; i++) {
    for (let j = i + 1; j < particleCount; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < 4.2) {
        linePositions.push(
          positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
          positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
        );
      }
    }
  }

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
  group.add(lineMesh);

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
  });

  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;

    group.rotation.y += 0.0018;
    group.rotation.x = targetY * 0.4;
    group.rotation.y += targetX * 0.02;

    renderer.render(scene, camera);
  }

  animate();
}
