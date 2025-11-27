export type Role = 'user' | 'model';

export interface AnalysisResult {
  possibleCauses: string[];
  urgency: 'Mild' | 'Moderate' | 'Severe';
  recommendations: string[];
  disclaimer: string;
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: number;
  attachment?: string; // Base64 string for images
  analysis?: AnalysisResult; // If this message contains a health analysis
}
