import { Button, Flex, View } from "@aws-amplify/ui-react";
import { Link } from "@remix-run/react";
import { signOut } from "@aws-amplify/auth";
import { Amplify } from "aws-amplify";
import config from "../../amplify_outputs.json";

Amplify.configure(config);

export default function Index() {
  return (
    <View padding="medium">
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="4rem"
      >
        <Link to="/anonymous">
          <Button size="large">未認証で Storage Browser</Button>
        </Link>
        <Link to="/authenticated">
          <Button variation="primary" size="large">
            認証して Storage Browser
          </Button>
        </Link>
        <Button
          variation="destructive"
          size="large"
          onClick={async () => await signOut()}
        >
          ログアウト
        </Button>
      </Flex>
    </View>
  );
}
