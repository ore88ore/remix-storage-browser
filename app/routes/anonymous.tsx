import { Amplify } from "aws-amplify";
import config from "../../amplify_outputs.json";

import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";

Amplify.configure(config);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

export default function Index() {
  return <StorageBrowser />;
}
