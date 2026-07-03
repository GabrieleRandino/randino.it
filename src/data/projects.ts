export interface Project {
  id: string
  title: string
  description?: string
  category: string
  type: 'video' | 'image'
  src: string
  cover?: string
}

const projects: Project[] = [
  // === PIC NIC ===
  // Videos
  { id: 'pn-v13', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/reel2.mp4', cover: '/images/covers/picnic-reel2.jpg' },
  { id: 'pn-v10', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/reel completo da postare.mp4', cover: '/images/covers/picnic-reel_completo_da_postare.jpg' },
  { id: 'pn-v23', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/videofuinito.mp4', cover: '/images/covers/picnic-videofuinito.jpg' },
  { id: 'pn-v20', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/video picnic 2.mp4', cover: '/images/covers/picnic-video_picnic_2.jpg' },
  { id: 'pn-v2', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/Sequenza 01.mp4', cover: '/images/covers/picnic-Sequenza_01.jpg' },
  { id: 'pn-v17', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/stiamo cercando talenti veri.mp4', cover: '/images/covers/picnic-stiamo_cercando_talenti_veri.jpg' },
  { id: 'pn-v18', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/video 1 maggio.mp4', cover: '/images/covers/picnic-video_1_maggio.jpg' },
  { id: 'pn-v0', title: '', category: 'Pic Nic', type: 'video', src: '/videos/video-apertura.mp4', cover: '/images/covers/picnic-video-apertura.jpg' },
  { id: 'pn-v19', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/video finito.mp4', cover: '/images/covers/picnic-video_finito.jpg' },
  { id: 'pn-v15', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/seedance-1.mp4', cover: '/images/covers/picnic-seedance-1.jpg' },
  { id: 'pn-v16', title: '', category: 'Pic Nic', type: 'video', src: '/videos/picnic/seedance-2.mp4', cover: '/images/covers/picnic-seedance-2.jpg' },
  // Photos
  { id: 'pn-f27', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 1.jpg' },
  { id: 'pn-f43', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 1-1.jpg' },
  { id: 'pn-f11', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 1-2.jpg' },
  { id: 'pn-f40', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 2.jpg' },
  { id: 'pn-f3', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 4.jpg' },
  { id: 'pn-f42', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 5.jpg' },
  { id: 'pn-f31', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 6.jpg' },
  { id: 'pn-f13', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 7.jpg' },
  { id: 'pn-f45', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 8.jpg' },
  { id: 'pn-f17', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 9.jpg' },
  { id: 'pn-f15', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 10.jpg' },
  { id: 'pn-f28', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 11.jpg' },
  { id: 'pn-f33', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 12.jpg' },
  { id: 'pn-f18', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 13.jpg' },
  { id: 'pn-f20', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 14.jpg' },
  { id: 'pn-f21', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 15.jpg' },
  { id: 'pn-f8', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 16.jpg' },
  { id: 'pn-f25', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 17.jpg' },
  { id: 'pn-f10', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 18.jpg' },
  { id: 'pn-f39', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 20.jpg' },
  { id: 'pn-f23', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 21.jpg' },
  { id: 'pn-f14', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 22.jpg' },
  { id: 'pn-f26', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 24.jpg' },
  { id: 'pn-f36', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 25.jpg' },
  { id: 'pn-f12', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 26.jpg' },
  { id: 'pn-f32', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 27.jpg' },
  { id: 'pn-f44', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 28.jpg' },
  { id: 'pn-f49', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 30.jpg' },
  { id: 'pn-f48', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 31.jpg' },
  { id: 'pn-f22', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 32.jpg' },
  { id: 'pn-f24', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 34.jpg' },
  { id: 'pn-f29', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 35.jpg' },
  { id: 'pn-f34', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 36.jpg' },
  { id: 'pn-f30', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 37.jpg' },
  { id: 'pn-f6', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 39.jpg' },
  { id: 'pn-f9', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 40.jpg' },
  { id: 'pn-f16', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 42.jpg' },
  { id: 'pn-f38', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 43.jpg' },
  { id: 'pn-f19', title: '', category: 'Pic Nic', type: 'image', src: '/images/picnic-foto-editate/Tavola da disegno 45.jpg' },

// === CRIANZA CATERING PUGLIESE ===
  { id: 'cz-2', title: 'Crianza 2', category: 'Crianza Catering Pugliese', type: 'video', src: '/videos/crianza/Crianza 2.mp4', cover: '/images/covers/crianza-2.jpg' },
  { id: 'cz-tendenza', title: 'Crianza | Senza Audio Tendenza', category: 'Crianza Catering Pugliese', type: 'video', src: '/videos/crianza/video crianza senza audio tendenza.mp4', cover: '/images/covers/crianza-tendenza.jpg' },
  // === STARS LEAGUE ===
  { id: 'sl-completo', title: 'Stars League | Prima Edizione', category: 'Stars League', type: 'video', src: '/videos/completo.mp4', cover: '/images/covers/completo.jpg' },
  { id: 'sl-seconda', title: 'Stars League | Seconda Edizione', category: 'Stars League', type: 'video', src: '/videos/stars-league.mp4', cover: '/images/covers/stars-league.jpg' },
  { id: 'sl-v1', title: 'Stars League | Video 1', category: 'Stars League', type: 'video', src: '/videos/stars-league/video1-stars.mp4', cover: '/images/covers/video1-stars.jpg' },
  { id: 'sl-0526', title: 'Stars League | 0526', category: 'Stars League', type: 'video', src: '/videos/stars-league/0526.mp4', cover: '/images/covers/0526.jpg' },

  // === BRINMALTE ===
  { id: 'bm-1', title: 'BrinMalte', description: 'Video promozionale per BrinMalte', category: 'BrinMalte', type: 'video', src: '/videos/brinmalte/VIDEO1.mp4', cover: '/images/brinmalte/COPERTINA1.jpg' },
  { id: 'bm-2', title: 'BrinMalte', category: 'BrinMalte', type: 'video', src: '/videos/brinmalte/VIDEO2.mp4', cover: '/images/brinmalte/COPERTINA1.jpg' },
  { id: 'bm-3', title: 'BrinMalte', category: 'BrinMalte', type: 'video', src: '/videos/brinmalte/VIDEO3.mp4', cover: '/images/brinmalte/COPERTINA1.jpg' },
  { id: 'bm-4', title: 'BrinMalte', category: 'BrinMalte', type: 'video', src: '/videos/brinmalte/VIDEO4.mp4', cover: '/images/brinmalte/COPERTINA1.jpg' },
  { id: 'bm-5', title: 'BrinMalte', category: 'BrinMalte', type: 'video', src: '/videos/brinmalte/VIDEO5.mp4', cover: '/images/brinmalte/COPERTINA1.jpg' },
  { id: 'bm-6', title: 'BrinMalte', category: 'BrinMalte', type: 'video', src: '/videos/brinmalte/VIDEO6.mp4', cover: '/images/brinmalte/COPERTINA1.jpg' },
  { id: 'bm-7', title: 'BrinMalte', category: 'BrinMalte', type: 'video', src: '/videos/brinmalte/VIDEO7.mp4', cover: '/images/brinmalte/COPERTINA1.jpg' },
]

export default projects
