import axios, { AxiosError } from "axios";
import { ethers } from "ethers";

interface GetChallengeTokenResponse {
  challengeToken: string;
}
interface GetAuthTokenResponse {
  authToken: string;
}

interface AuthProviderErrorResponse {
  message: string;
  code: number;
}
export function authProviderURL() {
  const AUTH_PROVIDER_URL = process.env.REACT_APP_AUTH_PROVIDER_URL;
  if (!AUTH_PROVIDER_URL) {
    throw Error("Please set REACT_APP_AUTH_PROVIDER_URL in env variable");
  }
  return AUTH_PROVIDER_URL;
}

export async function getChallengeToken(address: string): Promise<string> {
  if (!ethers.utils.isAddress(address)) {
    throw Error("Address provided is not considered an address");
  }
  const challenge = await axios
    .get<GetChallengeTokenResponse>(
      authProviderURL() + "/auth/get-challenge-token",
      {
        params: {
          address,
        },
      }
    )
    .catch((error: AxiosError<AuthProviderErrorResponse>) => {
      if (error.response && error.response.data.message) {
        throw Error(error.response.data.message);
      }
      throw Error(error.message);
    });
  if (challenge.status === 200) {
    if (challenge.data.challengeToken) {
      return challenge.data.challengeToken;
    }
  }
  throw Error("Response did not include an challenge token.");
}

export async function signToken(token: string, signer: ethers.Signer) {
  const tokenHash = ethers.utils.id(token);
  const tokenHashBytes = ethers.utils.arrayify(tokenHash);
  const signature = await signer.signMessage(tokenHashBytes);
  return signature;
}

export async function getAuthToken(
  signature: string,
  challengeToken: string
): Promise<string> {
  const challenge = await axios
    .get<GetAuthTokenResponse>(authProviderURL() + "/auth/get-auth-token", {
      params: {
        signature,
        challengeToken,
      },
    })
    .catch((error: AxiosError<AuthProviderErrorResponse>) => {
      if (error.response && error.response.data.message) {
        throw Error(error.response.data.message);
      }
      throw Error(error.message);
    });
  if (challenge.status === 200) {
    if (challenge.data.authToken) {
      return challenge.data.authToken;
    }
  }
  throw Error("Response did not include an auth token.");
}

export async function signChallengeAndVerify(
  challengeToken: string,
  signer: ethers.Signer
) {
  const signature = await signToken(challengeToken, signer);
  const authToken = await getAuthToken(signature, challengeToken);
  return authToken;
}

export async function getUserMe(authToken: string) {
  const me = await axios
    .get<any>(authProviderURL() + "/auth/me", {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
    .catch((error: AxiosError<AuthProviderErrorResponse>) => {
      if (error.response && error.response.data.message) {
        throw Error(error.response.data.message);
      }
      throw Error(error.message);
    });
  if (me.status === 200) {
    if (me.data) {
      return me.data;
    }
  }
  throw Error("Response did not include an auth token.");
}
