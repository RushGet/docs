import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
      <Giscus
          repo="RushGet/docs"
          repoId="R_kgDOJFemWw"
          category="Announcements"
          categoryId="DIC_kwDOJFemW84CUp8G"
          mapping="pathname"                        // Important! To map comments to URL
          term="Welcome to @giscus/react component!"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          theme={colorMode}
          lang="en"
          loading="lazy"
      />
  );
}