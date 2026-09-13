export type DifficultyLevel = 'Leve' | 'Moderado' | 'Desafiador' | 'Intensa';

export interface DayScheduleItem {
  time: string;
  activity: string;
}

export interface DayPlan {
  day: number;
  title: string;
  shortSummary: string;
  schedule: DayScheduleItem[];
  mealsIncluded: string[];
  stay: string;
}

export interface ExperienceHighlight {
  titulo: string;
  descricao: string;
  tag: string;
}

export interface DepartureDate {
  dateRange: string;
  duracao: string;
  vagasDisponiveis: number;
  grupoMaximo: number;
  status: 'Vagas Abertas' | 'Últimas Vagas' | 'Lista de Espera';
}

export interface Destination {
  id: string;
  slug: string;
  orderNumber: number;
  name: string;
  subtitle: string;
  country: string;
  pais: string;
  heroImage: string;
  durationDays: number;
  duracao: string;
  valor: number;
  parcelamento: string;
  vagas: number;
  grupoMaximo: number;
  perfilExperiencia: string;
  difficulty: DifficultyLevel;
  description: string;
  sobreViagem: string[];
  experiencias: ExperienceHighlight[];
  roteiro: DayPlan[];
  itinerary: DayPlan[];
  inclui: string[];
  naoInclui: string[];
  climate: string;
  clima: string;
  temperatura: string;
  altitude: string;
  moeda: string;
  idioma: string;
  saidas: DepartureDate[];
}
