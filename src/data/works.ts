export interface Work {
  id: string
  title: string
  description: string
  type: 'video' | 'image'
  cover: string
  src: string
}

const works: Work[] = [
  {
    id: '10',
    title: 'Pic Nic | Restaurant e Beach Club',
    description: 'Ho gestito l\'intera produzione dei contenuti per la comunicazione digitale del Pic Nic, ristorante storico sulla scogliera brindisina che dopo 40 anni ha riaperto. Ogni scatto e ogni clip sono pensati per valorizzare gli interni curati, la location affacciata sul mare e il mood unico del posto.',
    type: 'video',
    cover: '',
    src: '/videos/video-apertura.mp4',
  },
  {
    id: '07',
    title: 'Masseria Della Piana',
    description: 'Spot cinematografico per la promozione e valorizzazione di Masseria Della Piana, storica masseria pugliese situata a Ostuni. Un progetto che fonde regia, luce e storytelling visivo per restituire l\'essenza autentica del luogo, trasformando ogni inquadratura in un racconto di identità e territorio.',
    type: 'video',
    cover: '',
    src: '/videos/masseria-piana.mp4',
  },
  {
    id: '01',
    title: 'FotoGraficAnnarita',
    description: 'Ho creato diversi contenuti per FotoGraficAnnarita, fotografa specializzata in newborn, maternity, family photography, shooting ed eventi. Ho raccontato lo shooting newborn attraverso una narrazione emozionale, con suoni e clip pensati per rendere ogni momento indimenticabile.',
    type: 'video',
    cover: '',
    src: '/videos/video-finito.mp4',
  },
  {
    id: '05',
    title: 'UG Manduria 1926',
    description: 'Storica matricola del calcio pugliese, ho voluto raccontare una partita e il calore della propria tifoseria. Riprese dinamiche, stop motion e SFX per catturare l\'energia del match e la passione dei tifosi.',
    type: 'video',
    cover: '',
    src: '/videos/film.mp4',
  },
  {
    id: '03',
    title: 'Stars League',
    description: 'Video trailer realizzato per la prima edizione della Stars League, torneo estivo tenutosi a Brindisi. Ho raccontato la passione della città per il calcio alternando riprese cinematografiche a momenti più dinamici per catturare l\'energia del torneo.',
    type: 'video',
    cover: '',
    src: '/videos/completo.mp4',
  },
  {
    id: '02',
    title: 'Brindisi e la cultura marinara',
    description: 'Ho voluto raccontare il villaggio dei pescatori, il casale e la cultura marinara di Brindisi. I pescatori che preparano le reti e il mood che li circonda, tra tradizione e autenticità.',
    type: 'video',
    cover: '',
    src: '/videos/brindisi-film.mp4',
  },
  {
    id: '08',
    title: 'Stars League | Seconda Edizione',
    description: 'La prima edizione della Stars League ha spaccato ed è rimasta impressa in testa a tutti. Volevamo comunicare proprio questo: un video dinamico e d\'impatto per raccontare l\'energia e il successo del torneo.',
    type: 'video',
    cover: '',
    src: '/videos/stars-league.mp4',
  },
  {
    id: '04',
    title: 'DINAMO BASKET BRINDISI | PLAY OFF',
    description: 'Video realizzato per il match valido per i play off della Dinamo Basket Brindisi, squadra storica brindisina. Ho voluto raccontare il match con riprese ipnotiche, color correction particolare e SFX che intrattengono.',
    type: 'video',
    cover: '',
    src: '/videos/film-dinamo.mp4',
  },
  {
    id: '09',
    title: 'UG Manduria 1926',
    description: 'Ho voluto raccontare un allenamento in preparazione di una partita importante per far captare il mood ai tifosi che seguono la squadra sui social e cercare di portarli ancora più numerosi allo stadio.',
    type: 'video',
    cover: '',
    src: '/videos/snap-instagram.mp4',
  },

]

export default works
