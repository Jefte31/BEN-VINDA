import { DayPlan, Destination } from '../types';

const day = (day: number, title: string, shortSummary: string, stay: string, schedule: [string, string][] = []): DayPlan => ({
  day,
  title,
  shortSummary,
  stay,
  schedule: schedule.map(([time, activity]) => ({ time, activity })),
  mealsIncluded: ['Café da manhã'],
});

const departures = (duracao: string, grupoMaximo: number, first: string, second: string) => [
  { dateRange: first, duracao, vagasDisponiveis: Math.min(5, grupoMaximo), grupoMaximo, status: 'Vagas Abertas' as const },
  { dateRange: second, duracao, vagasDisponiveis: Math.min(3, grupoMaximo), grupoMaximo, status: 'Últimas Vagas' as const },
];

export const allDestinations: Destination[] = [
  {
    id: 'atacama-salar-de-uyuni', slug: 'atacama-salar-de-uyuni', orderNumber: 1,
    name: 'Atacama + Salar de Uyuni', subtitle: 'Uma travessia entre alguns dos cenários mais improváveis da América do Sul.',
    country: 'Chile + Bolívia', pais: 'Chile e Bolívia', heroImage: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=1800&q=84',
    durationDays: 10, duracao: '10 dias', valor: 8900, parcelamento: '12x de R$ 741,60 sem juros', vagas: 5, grupoMaximo: 12,
    perfilExperiencia: 'DESERTO • AVENTURA • NATUREZA', difficulty: 'Desafiador',
    description: 'Uma travessia de paisagens extremas entre San Pedro de Atacama e a imensidão branca do Salar de Uyuni.',
    sobreViagem: [
      'Existem paisagens que parecem pertencer a outro planeta. Nesta expedição cruzamos desertos, vulcões, lagoas coloridas e pequenas comunidades até chegar ao maior deserto de sal do mundo.',
      'A viagem foi pensada em ritmo progressivo, respeitando a altitude e deixando espaço para contemplar, fotografar e viver os encontros do caminho.',
      'O grupo reduzido permite acompanhamento próximo e uma travessia muito diferente de uma excursão convencional.'
    ],
    experiencias: [
      { titulo: 'Salar de Uyuni', descricao: 'Horizonte branco, reflexos e a sensação de estar dentro de uma paisagem sem fim.', tag: 'Contemplação' },
      { titulo: 'Lagunas Altiplânicas', descricao: 'Flamingos, vulcões e cores improváveis no coração do altiplano.', tag: 'Natureza' },
      { titulo: 'Céu do Atacama', descricao: 'Uma das noites mais impressionantes para observar estrelas e Via Láctea.', tag: 'Céu noturno' },
    ],
    roteiro: [
      day(1, 'Chegada a San Pedro de Atacama', 'Recepção, acomodação e primeiro encontro do grupo.', 'San Pedro de Atacama', [['16:00','Check-in e acolhida Benviva'],['19:30','Jantar de boas-vindas']]),
      day(2, 'Valle de la Luna', 'Formações de sal, dunas e pôr do sol no deserto.', 'San Pedro de Atacama', [['09:00','Manhã livre para aclimatação'],['15:00','Saída para Valle de la Luna']]),
      day(3, 'Gêiseres del Tatio', 'Amanhecer no campo geotérmico e águas termais.', 'San Pedro de Atacama', [['05:00','Saída para os gêiseres'],['11:00','Parada em águas termais']]),
      day(4, 'Travessia ao Altiplano Boliviano', 'Fronteira, lagunas e início da travessia 4x4.', 'Altiplano Boliviano'),
      day(5, 'Laguna Colorada e Deserto de Siloli', 'Flamingos, rochas e paisagens de altitude.', 'Hotel de Sal'),
      day(6, 'Salar de Uyuni', 'Dia inteiro na imensidão branca do salar.', 'Hotel de Sal'),
      day(7, 'Uyuni e despedida do altiplano', 'Cemitério de trens, Colchani e encerramento da travessia.', 'Uyuni'),
      day(8, 'Dia de respiro e conexão', 'Tempo livre, gastronomia e experiências locais.', 'Uyuni'),
      day(9, 'Últimos encontros', 'Passeios leves e jantar de despedida.', 'Uyuni'),
      day(10, 'Retorno', 'Traslado e despedida do grupo.', '—'),
    ],
    itinerary: [],
    inclui: ['Hospedagens previstas no roteiro', 'Traslados e transportes terrestres', 'Travessia 4x4', 'Guias locais', 'Passeios descritos no roteiro', 'Suporte Benviva antes e durante a viagem'],
    naoInclui: ['Passagens aéreas', 'Seguro viagem', 'Refeições não especificadas', 'Despesas pessoais'],
    climate: 'Árido de altitude', clima: 'Árido de altitude com grande amplitude térmica', temperatura: '-4°C a 24°C', altitude: '2.400m a 4.850m', moeda: 'Peso Chileno / Boliviano', idioma: 'Espanhol e Quechua',
    saidas: departures('10 dias', 12, '12 — 21 Outubro', '04 — 13 Novembro'),
  },
  {
    id: 'caraiva', slug: 'caraiva', orderNumber: 2, name: 'Caraíva',
    subtitle: 'Ruas de areia, o encontro suave do rio com o mar e o tempo que passa no ritmo da maré.',
    country: 'Brasil', pais: 'Bahia, Brasil', heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84',
    durationDays: 6, duracao: '6 dias', valor: 4890, parcelamento: '12x de R$ 407,50 sem juros', vagas: 4, grupoMaximo: 10,
    perfilExperiencia: 'PRAIA • DESCONEXÃO • VILAREJO', difficulty: 'Leve',
    description: 'Uma viagem para desacelerar entre rio, mar, gastronomia e a atmosfera única de um vilarejo sem carros.',
    sobreViagem: ['Caraíva é uma pausa. A proposta aqui é desacelerar e deixar os dias serem conduzidos por banho de mar, travessias de barco, boa comida e conversas sem hora para terminar.', 'O grupo pequeno combina liberdade com companhia: existe programação, mas também existe tempo para simplesmente estar.'],
    experiencias: [
      { titulo: 'Rio encontra o mar', descricao: 'Banho no encontro das águas e fim de tarde sem pressa.', tag: 'Natureza' },
      { titulo: 'Praia do Espelho', descricao: 'Um dia entre falésias, piscinas naturais e mar transparente.', tag: 'Praia' },
      { titulo: 'Noites de Caraíva', descricao: 'Gastronomia, música e o vilarejo iluminado de um jeito só dele.', tag: 'Cultura' },
    ],
    roteiro: [day(1,'Chegada a Caraíva','Travessia do rio, check-in e boas-vindas.','Caraíva'),day(2,'Praia e rio','Dia de banho de mar e encontro das águas.','Caraíva'),day(3,'Praia do Espelho','Passeio de dia inteiro por uma das praias mais bonitas do sul da Bahia.','Caraíva'),day(4,'Cultura e sabores','Experiências locais e jantar especial.','Caraíva'),day(5,'Dia livre','Tempo para escolher o próprio ritmo.','Caraíva'),day(6,'Despedida','Café da manhã e retorno.','—')], itinerary: [],
    inclui: ['Hospedagem', 'Traslados previstos', 'Passeios descritos', 'Experiências selecionadas', 'Suporte Benviva'], naoInclui: ['Passagens aéreas', 'Refeições não especificadas', 'Despesas pessoais'],
    climate: 'Tropical', clima: 'Tropical quente e ensolarado', temperatura: '24°C a 31°C', altitude: 'Nível do mar', moeda: 'Real (BRL)', idioma: 'Português', saidas: departures('6 dias',10,'08 — 13 Novembro','03 — 08 Dezembro'),
  },
  {
    id: 'colombia', slug: 'colombia', orderNumber: 3, name: 'Colômbia',
    subtitle: 'Cores coloniais, cidades vibrantes e o azul transparente do Caribe colombiano.', country: 'Colômbia', pais: 'Colômbia',
    heroImage: 'https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?auto=format&fit=crop&w=1800&q=84', durationDays: 8, duracao: '8 dias', valor: 7800, parcelamento: '12x de R$ 650,00 sem juros', vagas: 6, grupoMaximo: 12,
    perfilExperiencia: 'CULTURA • HISTÓRIA • CARIBE', difficulty: 'Leve', description: 'Uma rota que mistura história, música, gastronomia e mar caribenho.',
    sobreViagem: ['A Colômbia reúne cidades cheias de personalidade e uma energia difícil de explicar sem viver.', 'A expedição combina cultura urbana, história colonial, gastronomia e dias de Caribe em um ritmo confortável.'],
    experiencias: [{titulo:'Cartagena amuralhada',descricao:'Ruas coloridas, varandas e história em cada esquina.','tag':'Cultura'},{titulo:'Caribe colombiano',descricao:'Um dia de mar azul e descanso entre ilhas.','tag':'Praia'},{titulo:'Sabores colombianos',descricao:'Mercados, cafés e mesas que contam a história do país.','tag':'Gastronomia'}],
    roteiro: [day(1,'Chegada à Colômbia','Recepção e encontro do grupo.','Cartagena'),day(2,'Cartagena histórica','Centro amuralhado e experiências locais.','Cartagena'),day(3,'Caribe','Passeio de barco e dia de ilha.','Cartagena'),day(4,'Ritmos e sabores','Gastronomia, cultura e noite colombiana.','Cartagena'),day(5,'Nova cidade','Deslocamento e novo capítulo da viagem.','Medellín'),day(6,'Medellín','Arte urbana, história e transformação.','Medellín'),day(7,'Guatapé','Paisagens, cores e passeio de dia inteiro.','Medellín'),day(8,'Retorno','Café da manhã e traslado.','—')], itinerary: [],
    inclui: ['Hospedagem', 'Traslados previstos', 'Passeios guiados', 'Experiências selecionadas', 'Suporte Benviva'], naoInclui: ['Passagens aéreas', 'Seguro viagem', 'Refeições não especificadas'],
    climate: 'Tropical', clima: 'Tropical caribenho ensolarado', temperatura: '26°C a 32°C', altitude: 'Varia conforme a cidade', moeda: 'Peso Colombiano (COP)', idioma: 'Espanhol', saidas: departures('8 dias',12,'20 — 27 Outubro','17 — 24 Novembro'),
  },
  {
    id: 'bonito', slug: 'bonito', orderNumber: 4, name: 'Bonito', subtitle: 'Flutuar entre peixes em rios tão transparentes que parecem feitos de ar.', country: 'Brasil', pais: 'Mato Grosso do Sul, Brasil',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=84', durationDays: 6, duracao: '6 dias', valor: 5200, parcelamento: '12x de R$ 433,30 sem juros', vagas: 4, grupoMaximo: 10,
    perfilExperiencia: 'ECOTURISMO • ÁGUAS CRISTALINAS • BIODIVERSIDADE', difficulty: 'Leve', description: 'Natureza em estado puro entre rios cristalinos, grutas e cachoeiras.',
    sobreViagem: ['Bonito é uma viagem de natureza com estrutura e conforto. A água cristalina é protagonista, mas cada dia revela um cenário diferente.', 'O roteiro equilibra flutuações, cachoeiras e tempo para descansar.'],
    experiencias: [{titulo:'Flutuação',descricao:'Água transparente e cardumes vistos de perto.','tag':'Água'},{titulo:'Grutas',descricao:'Formações geológicas e lagoas de cores profundas.','tag':'Natureza'},{titulo:'Cachoeiras',descricao:'Trilhas leves com paradas para banho.','tag':'Aventura'}],
    roteiro: [day(1,'Chegada a Bonito','Recepção e briefing da viagem.','Bonito'),day(2,'Flutuação','Dia em um dos rios cristalinos da região.','Bonito'),day(3,'Cachoeiras','Circuito leve de trilhas e banhos.','Bonito'),day(4,'Gruta','Visita a uma das formações mais marcantes da região.','Bonito'),day(5,'Experiência livre','Atividade opcional e tempo para aproveitar a cidade.','Bonito'),day(6,'Retorno','Café da manhã e traslado.','—')], itinerary: [],
    inclui: ['Hospedagem', 'Traslados previstos', 'Passeios descritos', 'Equipamentos das atividades quando previstos', 'Suporte Benviva'], naoInclui: ['Passagens aéreas', 'Refeições não especificadas', 'Despesas pessoais'], climate:'Tropical', clima:'Agradável com dias ensolarados', temperatura:'20°C a 30°C', altitude:'315m', moeda:'Real (BRL)', idioma:'Português', saidas: departures('6 dias',10,'06 — 11 Novembro','04 — 09 Dezembro'),
  },
  {
    id: 'lencois-maranhenses', slug: 'lencois-maranhenses', orderNumber: 5, name: 'Lençóis Maranhenses', subtitle: 'Entre dunas e lagoas que parecem mudar a paisagem todos os dias.', country: 'Brasil', pais: 'Maranhão, Brasil',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=84', durationDays: 7, duracao: '7 dias', valor: 5890, parcelamento: '12x de R$ 490,80 sem juros', vagas: 5, grupoMaximo: 15,
    perfilExperiencia: 'NATUREZA • EXPERIÊNCIA • BRASIL', difficulty: 'Moderado', description: 'Dunas, lagoas sazonais e pores do sol que transformam o horizonte.',
    sobreViagem: ['Os Lençóis Maranhenses mudam de aparência ao longo do dia — e é justamente essa sensação de paisagem viva que guia a expedição.', 'A experiência reúne lagoas, travessias, pequenos povoados e tempo para mergulhar sem pressa.'],
    experiencias: [{titulo:'Lagoas entre dunas',descricao:'Banhos em água doce cercados por areia branca.','tag':'Natureza'},{titulo:'Pôr do sol',descricao:'A luz muda as dunas a cada minuto.','tag':'Contemplação'},{titulo:'Comunidades locais',descricao:'Encontros e sabores que completam a paisagem.','tag':'Cultura'}],
    roteiro: [day(1,'Chegada ao Maranhão','Recepção e deslocamento.','Barreirinhas'),day(2,'Circuito de lagoas','Primeiro grande mergulho nos Lençóis.','Barreirinhas'),day(3,'Travessia e povoados','Paisagens e comunidades no caminho.','Atins'),day(4,'Atins','Dia de lagoas e ritmo leve.','Atins'),day(5,'Rio e mangue','Novo cenário da região.','Atins'),day(6,'Último pôr do sol','Dia livre e encerramento.','Barreirinhas'),day(7,'Retorno','Café da manhã e traslado.','—')], itinerary: [],
    inclui:['Hospedagem','Transportes 4x4 e barcos previstos','Passeios descritos','Guias locais','Suporte Benviva'], naoInclui:['Passagens aéreas','Refeições não especificadas','Despesas pessoais'], climate:'Tropical', clima:'Ensolarado com brisa nas dunas', temperatura:'25°C a 33°C', altitude:'Nível do mar', moeda:'Real (BRL)', idioma:'Português', saidas: departures('7 dias',15,'14 — 20 Junho','12 — 18 Julho'),
  },
  {
    id:'jalapao',slug:'jalapao',orderNumber:6,name:'Jalapão',subtitle:'Fervedouros, dunas e o cerrado mais selvagem do Brasil.',country:'Brasil',pais:'Tocantins, Brasil',heroImage:'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=1800&q=84',durationDays:6,duracao:'6 dias',valor:4950,parcelamento:'12x de R$ 412,50 sem juros',vagas:4,grupoMaximo:10,perfilExperiencia:'EXPEDIÇÃO 4X4 • FERVEDOUROS • CERRADO',difficulty:'Moderado',description:'Uma rota 4x4 por fervedouros, cachoeiras, serras e dunas.',
    sobreViagem:['O Jalapão tem distâncias grandes, estradas de terra e recompensas ainda maiores. O roteiro é montado para transformar a logística do destino em parte da aventura.','Grupos menores deixam os deslocamentos mais confortáveis e as paradas muito mais especiais.'], experiencias:[{titulo:'Fervedouros',descricao:'A experiência de flutuar sem esforço em nascentes cristalinas.','tag':'Natureza'},{titulo:'Dunas do Jalapão',descricao:'Fim de tarde dourado com vista para a serra.','tag':'Pôr do sol'},{titulo:'Cachoeiras',descricao:'Pausas refrescantes entre os trechos de estrada.','tag':'Aventura'}],
    roteiro:[day(1,'Chegada a Palmas','Recepção e encontro do grupo.','Palmas'),day(2,'Estrada para o Jalapão','Primeiras cachoeiras e paisagens do cerrado.','Ponte Alta'),day(3,'Fervedouros','Dia dedicado às nascentes.','Mateiros'),day(4,'Dunas','Cultura local e pôr do sol.','Mateiros'),day(5,'Últimos cenários','Cachoeiras e retorno gradual.','São Félix'),day(6,'Retorno a Palmas','Encerramento da expedição.','—')],itinerary:[],inclui:['Hospedagem','Veículos 4x4','Guias e motoristas','Passeios descritos','Suporte Benviva'],naoInclui:['Passagens aéreas','Refeições não especificadas','Despesas pessoais'],climate:'Cerrado',clima:'Cerrado quente com noites frescas',temperatura:'20°C a 34°C',altitude:'200m a 450m',moeda:'Real (BRL)',idioma:'Português',saidas:departures('6 dias',10,'22 — 27 Outubro','19 — 24 Novembro')
  },
  {
    id:'fernando-de-noronha',slug:'fernando-de-noronha',orderNumber:7,name:'Fernando de Noronha',subtitle:'O santuário do Atlântico onde golfinhos, tartarugas e praias intocadas ditam o dia.',country:'Brasil',pais:'Pernambuco, Brasil',heroImage:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=84',durationDays:6,duracao:'6 dias',valor:9400,parcelamento:'12x de R$ 783,30 sem juros',vagas:3,grupoMaximo:8,perfilExperiencia:'SANTUÁRIO MARINHO • MERGULHO • EXCLUSIVIDADE',difficulty:'Moderado',description:'Uma semana entre praias, trilhas, mar e vida selvagem.',sobreViagem:['Noronha pede grupos ainda menores. A ilha funciona melhor quando existe liberdade para ajustar horários e aproveitar cada janela de mar.','A proposta combina praias emblemáticas, experiências aquáticas e tempo livre.'],experiencias:[{titulo:'Mar de Noronha',descricao:'Snorkel e encontros com a vida marinha.','tag':'Oceano'},{titulo:'Praias icônicas',descricao:'Sancho, Cacimba e mirantes inesquecíveis.','tag':'Natureza'},{titulo:'Pôr do sol',descricao:'O ritual diário da ilha, cada dia de um ponto diferente.','tag':'Contemplação'}],roteiro:[day(1,'Chegada à ilha','Recepção e primeiro pôr do sol.','Noronha'),day(2,'Ilha tour','Panorama dos principais pontos.','Noronha'),day(3,'Mar','Snorkel e passeio aquático.','Noronha'),day(4,'Trilhas e praias','Dia de caminhada leve e banhos.','Noronha'),day(5,'Dia livre','Escolha sua experiência favorita.','Noronha'),day(6,'Retorno','Último mergulho e traslado.','—')],itinerary:[],inclui:['Hospedagem','Traslados previstos','Passeios descritos','Guias locais','Suporte Benviva'],naoInclui:['Passagens aéreas','Taxas ambientais','Seguro viagem','Refeições não especificadas'],climate:'Tropical',clima:'Tropical paradisíaco',temperatura:'25°C a 30°C',altitude:'Nível do mar',moeda:'Real (BRL)',idioma:'Português',saidas:departures('6 dias',8,'10 — 15 Novembro','08 — 13 Dezembro')
  },
  {
    id:'peru',slug:'peru',orderNumber:8,name:'Peru',subtitle:'A sabedoria milenar do Vale Sagrado e o amanhecer inesquecível sobre Machu Picchu.',country:'Peru',pais:'Peru',heroImage:'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1800&q=84',durationDays:8,duracao:'8 dias',valor:8600,parcelamento:'12x de R$ 716,60 sem juros',vagas:5,grupoMaximo:12,perfilExperiencia:'IMPÉRIO INCA • HISTÓRIA • GASTRONOMIA',difficulty:'Moderado',description:'Uma jornada por Cusco, Vale Sagrado e Machu Picchu com tempo para aclimatar e sentir a história.',sobreViagem:['O Peru mistura arqueologia, paisagem e cultura viva. O roteiro respeita a altitude e constrói a experiência aos poucos.','Entre mercados, vilarejos andinos e sítios incas, a viagem deixa de ser apenas sobre Machu Picchu.'],experiencias:[{titulo:'Machu Picchu',descricao:'A chegada a um dos lugares mais emblemáticos do mundo.','tag':'História'},{titulo:'Vale Sagrado',descricao:'Vilarejos, sítios incas e montanhas.','tag':'Cultura'},{titulo:'Cozinha peruana',descricao:'Sabores que fazem parte da identidade do país.','tag':'Gastronomia'}],roteiro:[day(1,'Chegada a Cusco','Aclimatação e acolhida.','Cusco'),day(2,'Cusco','Centro histórico e cultura local.','Cusco'),day(3,'Vale Sagrado','Pisac, paisagens e comunidades.','Vale Sagrado'),day(4,'Ollantaytambo','História inca e viagem de trem.','Águas Calientes'),day(5,'Machu Picchu','Dia dedicado ao santuário histórico.','Cusco'),day(6,'Experiência andina','Montanhas e comunidades.','Cusco'),day(7,'Dia livre','Gastronomia e últimos passeios.','Cusco'),day(8,'Retorno','Traslado e despedida.','—')],itinerary:[],inclui:['Hospedagem','Traslados previstos','Trem e ingressos conforme roteiro','Guias locais','Suporte Benviva'],naoInclui:['Passagens aéreas','Seguro viagem','Refeições não especificadas'],climate:'Montanha',clima:'Clima de montanha com céus azuis',temperatura:'6°C a 21°C',altitude:'2.040m a 3.400m',moeda:'Sol Peruano (PEN)',idioma:'Espanhol e Quechua',saidas:departures('8 dias',12,'15 — 22 Outubro','12 — 19 Novembro')
  },
  {
    id:'tailandia',slug:'tailandia',orderNumber:9,name:'Tailândia',subtitle:'Templos reluzentes, aromas de especiarias e falésias sobre o mar de Andaman.',country:'Tailândia',pais:'Tailândia',heroImage:'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1800&q=84',durationDays:12,duracao:'12 dias',valor:13900,parcelamento:'12x de R$ 1.158,30 sem juros',vagas:6,grupoMaximo:12,perfilExperiencia:'SUDESTE ASIÁTICO • ESPIRITUALIDADE • ILHAS',difficulty:'Moderado',description:'Uma viagem que combina Bangkok, norte cultural e ilhas em um único grande percurso.',sobreViagem:['A Tailândia muda de ritmo a cada parada: intensidade urbana, silêncio de templos, mercados, montanhas e mar tropical.','A expedição foi pensada para quem quer uma primeira experiência no Sudeste Asiático com apoio e companhia.'],experiencias:[{titulo:'Bangkok',descricao:'Templos, mercados e uma cidade que nunca parece parar.','tag':'Cidade'},{titulo:'Chiang Mai',descricao:'Cultura do norte, montanhas e espiritualidade.','tag':'Cultura'},{titulo:'Mar de Andaman',descricao:'Ilhas, falésias e dias de água morna.','tag':'Praia'}],roteiro:[day(1,'Chegada a Bangkok','Recepção e descanso.','Bangkok'),day(2,'Bangkok essencial','Templos, rio e mercados.','Bangkok'),day(3,'Sabores da Tailândia','Gastronomia e bairros locais.','Bangkok'),day(4,'Rumo ao norte','Viagem para Chiang Mai.','Chiang Mai'),day(5,'Chiang Mai','Templos e cultura local.','Chiang Mai'),day(6,'Natureza do norte','Experiência de dia inteiro.','Chiang Mai'),day(7,'Rumo ao mar','Voo para o sul.','Krabi'),day(8,'Ilhas','Passeio de barco.','Krabi'),day(9,'Praia','Dia livre.','Krabi'),day(10,'Novos cenários','Falésias e mar.','Krabi'),day(11,'Último dia','Tempo livre e jantar de despedida.','Krabi'),day(12,'Retorno','Traslado ao aeroporto.','—')],itinerary:[],inclui:['Hospedagem','Traslados previstos','Passeios descritos','Guias locais','Suporte Benviva'],naoInclui:['Passagens aéreas internacionais','Seguro viagem','Refeições não especificadas','Despesas pessoais'],climate:'Tropical',clima:'Tropical quente e ensolarado',temperatura:'26°C a 34°C',altitude:'Nível do mar a regiões montanhosas',moeda:'Baht Tailandês (THB)',idioma:'Tailandês e Inglês turístico',saidas:departures('12 dias',12,'05 — 16 Novembro','03 — 14 Dezembro')
  },
];
