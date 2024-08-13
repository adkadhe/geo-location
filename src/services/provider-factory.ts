// src/services/providerFactory.ts

import { ProviderStrategy } from "./provider-strategy/provider-strategy";
import { GoogleProvider } from "./provider-strategy/google-provider";
import { OlaProvider } from "./provider-strategy/ola-provider";
import { OpenStreetMapProvider } from "./provider-strategy/open-street-map-provider";
import env from "../utils/env-config";

export class ProviderFactory {
  public static createProvider(): ProviderStrategy {
    switch (env.provider) {
      case "google":
        return new GoogleProvider();
      case "ola":
        return new OlaProvider();
      case "openstreetmap":
        return new OpenStreetMapProvider();
      default:
        throw new Error("Unsupported provider");
    }
  }
}
