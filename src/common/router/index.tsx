import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ErrorComponent } from "@/common/router/error";
import { config } from "@/common/utils/config";
import { LayoutBlank } from "@/common/layout/blank";

type PageStatus = {
  status: "pending" | "fulfilled" | "rejected";
  payload: any;
};

const PageComponent = (props: PageStatus & { pagePath: string }) => {
  if (props.status === "pending") {
    return <div>loading...</div>;
  }
  if (props.status === "rejected") {
    return <ErrorComponent message={String(props.payload)}></ErrorComponent>;
  }

  const Component = props.payload.default;

  return (
    <LayoutBlank>
      <Component></Component>
    </LayoutBlank>
  );
};

const PageRouter = () => {
  const location = useLocation();
  const pagePath =
    location.pathname === "/" ? config.defaultPage : location.pathname;

  const [pageStatus, setPageStatus] = useState<PageStatus>({
    status: "pending",
    payload: null,
  });
  useLayoutEffect(() => {
    (async () => {
      setPageStatus({
        status: "pending",
        payload: null,
      });
      try {
        const result = await import(
          /* webpackInclude: /\.(tsx|jsx)$/ */
          /* webpackExclude: /common/ */
          `../../pages/${pagePath.substring(1)}`
        );

        setPageStatus({
          status: "fulfilled",
          payload: result,
        });
      } catch (err) {
        setPageStatus({
          status: "rejected",
          payload: err,
        });
      }
    })();
  }, [pagePath]);

  return <PageComponent {...pageStatus} pagePath={pagePath}></PageComponent>;
};

export const Router = () => {
  return (
    <BrowserRouter basename={config.basePath}>
      <PageRouter></PageRouter>
    </BrowserRouter>
  );
};
