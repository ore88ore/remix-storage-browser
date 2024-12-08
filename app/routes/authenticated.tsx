import { Amplify } from "aws-amplify";
// npx ampx sandbox コマンドで作成された amplify_outputs.json ファイルをインポート
import config from "../../amplify_outputs.json";

import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";
import { Authenticator } from "@aws-amplify/ui-react";

// Amplify.configure(config) を呼び出して、Amplify を設定
Amplify.configure(config);

export const { StorageBrowser } = createStorageBrowser({
  // Amplify auth を利用した場合は createAmplifyAuthAdapter() を使用
  config: createAmplifyAuthAdapter(),
});

export default function Index() {
  return (
    // 認証を必須にしたい場合、Authenticator コンポーネントでラップ
    <Authenticator>
      <StorageBrowser />
    </Authenticator>
  );
}
