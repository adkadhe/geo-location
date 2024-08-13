import axiosInstance from "../../utils/axios";
import env from "../../utils/env-config";
import { ProviderStrategy } from "./provider-strategy";
import { Location } from "@prisma/client";

export class OlaProvider implements ProviderStrategy {
  async fetchLocation(latitude: string, longitude: string): Promise<any> {
    const response = await axiosInstance.get(
      `/location?latitude=${latitude}&longitude=${longitude}&key=${env.olaApiKey}`,
    );
    return response.data;
  }

  formatAddress(response: any): Partial<Location> {
    return {
      formattedAddress: response.formatted_address,
      country: response.country,
      city: response.city,
      state: response.state,
      zipcode: response.zipcode,
    };
  }
}
