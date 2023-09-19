import { AuthProvider, Provider } from "@dasmeta/auth-interface";
import { history, useModel } from "@umijs/max";
import { Outlet } from "umi";

export default (children: any) => {
  const { initialState }: any = useModel("@@initialState");
  const { settings } = initialState;
  return (
    <AuthProvider
      provider={Provider.STRAPI}
      theme={{
        colorPrimary: settings.colorPrimary,
        borderRadius: settings.borderRadius,
      }}
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
