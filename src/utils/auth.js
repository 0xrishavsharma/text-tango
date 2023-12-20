import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

console.log("Google provider", GoogleProvider);
console.log("Github provider", GithubProvider);

export const authProviders = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: "adfadfads",
};
