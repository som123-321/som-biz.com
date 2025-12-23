
export interface ServiceFeature {
  label: string;
  iconName: string;
  description: string;
}

export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: ServiceFeature[];
}

export interface CompanyInfo {
  name: string;
  representative: string;
  address: string;
  established: string;
  businessDetails: string[];
}
