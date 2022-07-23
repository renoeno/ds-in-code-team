import React from "react";
import "@renoeno/dsc-design-system-meiuca/dist/components/card";
import "@renoeno/dsc-design-system-meiuca/dist/components/typography";
import "@renoeno/dsc-design-system-meiuca/dist/components/tag";
import "./style.scss";

export const CardContent = ({
  tagContent,
  headingContent,
  paragraphContent,
}) => {
  return (
    <dsc-card class="card-content">
      <dsc-tag>{tagContent}</dsc-tag>
      <dsc-typography variant="h2" component="heading" size="lg">
        {headingContent}
      </dsc-typography>
      <dsc-typography component="paragraph">{paragraphContent}</dsc-typography>
    </dsc-card>
  );
};
