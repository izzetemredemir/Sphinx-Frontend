import { goerli } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
} from "@starknet-react/core";

export default function StarknetProvider({ children }) {
  const chains = [goerli];
  const provider = publicProvider();
  const connectors = [argent(), braavos()];

  return (
    <StarknetConfig chains={chains} provider={provider} connectors={connectors}>
      {children}
    </StarknetConfig>
  );
}
