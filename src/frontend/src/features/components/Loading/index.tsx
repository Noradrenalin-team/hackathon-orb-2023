import "./Loading.scss";
import { ReactNode, Suspense } from "react";
// import { Circles } from "react-loader-spinner"
import { Loader } from "@gravity-ui/uikit";

const Loading = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="loading-wrapper">
          <Loader size="l" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default Loading;
