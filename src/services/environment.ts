import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
} from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";

async function fetchRelay(
  params: RequestParameters,
  variables: { [key: string]: string }
) {
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
