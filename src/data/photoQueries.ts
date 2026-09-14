export const destinationPhotoQueries: Record<string, string[]> = {
  'atacama-salar-de-uyuni': [
    'Atacama Desert Chile landscape',
    'San Pedro de Atacama Chile',
    'Salar de Uyuni Bolivia',
    'Laguna Colorada Bolivia',
    'Valle de la Luna Atacama Chile',
    'El Tatio geysers Chile',
  ],
  caraiva: [
    'Caraiva Bahia Brazil',
    'Caraiva Porto Seguro Bahia beach',
    'Rio Caraiva Bahia',
    'Praia do Espelho Bahia Brazil',
  ],
  colombia: [
    'Cartagena Colombia old city',
    'Medellin Colombia city',
    'Guatape Colombia',
    'Rosario Islands Colombia',
  ],
  bonito: [
    'Bonito Mato Grosso do Sul Brazil',
    'Rio Sucuri Bonito Brazil',
    'Gruta do Lago Azul Bonito',
    'Rio da Prata Bonito Brazil',
  ],
  'lencois-maranhenses': [
    'Lencois Maranhenses National Park Brazil',
    'Barreirinhas Maranhao Brazil',
    'Atins Maranhao Brazil',
    'Santo Amaro Maranhao Brazil',
  ],
  jalapao: [
    'Jalapao State Park Brazil',
    'Fervedouro Jalapao Brazil',
    'Dunas Jalapao Tocantins',
    'Cachoeira da Velha Jalapao',
  ],
  'fernando-de-noronha': [
    'Fernando de Noronha Brazil',
    'Baia do Sancho Fernando de Noronha',
    'Morro Dois Irmaos Fernando de Noronha',
    'Praia do Leao Fernando de Noronha',
  ],
  peru: [
    'Machu Picchu Peru',
    'Cusco Peru',
    'Sacred Valley Peru',
    'Vinicunca Rainbow Mountain Peru',
  ],
  tailandia: [
    'Bangkok Thailand',
    'Chiang Mai Thailand',
    'Phi Phi Islands Thailand',
    'Krabi Thailand',
    'Thai temples Thailand',
  ],
};

export const getDestinationPhotoQueries = (slug: string, name?: string, place?: string) => {
  const mapped = destinationPhotoQueries[slug];
  if (mapped?.length) return mapped;
  return [`${name ?? slug} ${place ?? ''}`.trim()];
};
