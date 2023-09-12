import { AuthProvider, Provider } from "@dasmeta/auth-interface";
import { history } from "@umijs/max";
import { Outlet } from "umi";

export default (children: any) => {
  return (
    <AuthProvider
      provider={Provider.STRAPI}
      config={{
        host: BACKEND_HOST_EXAMPLE,
        onLoginSuccess: ({ jwt }) => {
          localStorage.setItem("jwtToken", jwt || "");
          history.push("/");
        },
        onLoginFail: (message: string) => {
          alert(message);
        },
      }}
    >
      <Outlet />
    </AuthProvider>
  );
};
