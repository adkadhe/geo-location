import { Location } from "@prisma/client";

export interface ProviderStrategy {
  fetchLocation(latitude: string, longitude: string): Promise<any>;
  formatAddress(response: any): Partial<Location>;
}
