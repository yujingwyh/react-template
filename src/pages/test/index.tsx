import React, { useEffect } from "react";

import styles from "./style.module.less";

import { config } from "@/common/utils/config";
import { SettingContext } from "@/context/setting";
import { useList } from "hatom";
import { sleep } from "@/common/utils/helper";
import { ForControl, IfElseControl } from "@/common/control";

const ArticleList = () => {
  const settingContext = SettingContext.useContext();
  const list = useList({
    async onGetListData() {
      await sleep(1000);

      return {
        items: [{ title: "111" }, { title: "222" }],
      };
    },
  });

  useEffect(() => {
    list.getListData();
  }, []);

  return (
    <div>
      <div
        onClick={() => {
          settingContext.setTheme();
        }}
      >
        当前主题：{settingContext.data.theme}，点击切换主题
      </div>
      <IfElseControl when={!list.loading} else={<div>loading...</div>}>
        <ForControl list={list.items}>{(item) => item.title}</ForControl>
      </IfElseControl>
    </div>
  );
};

export default function () {
  return (
    <div className={styles.test}>
      <SettingContext.Provider>
        <h1>{config.name}</h1>
        <div className="text">text</div>
        <img src={require("./common/assets/test.webp")} alt="" />
        <ArticleList></ArticleList>
      </SettingContext.Provider>
    </div>
  );
}
