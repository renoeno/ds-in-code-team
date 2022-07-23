import React from "react";

import { CardContent as CardContentComponent } from ".";

export default {
  title: "Team Component/Card Content",
  component: CardContentComponent,
};

const Template = (args) => {
  return (
    <div
      style={{
        width: "314px",
        height: "417px",
      }}
    >
      <CardContentComponent {...args} />
    </div>
  );
};

export const CardContent = Template.bind({});

CardContent.args = {
  tagContent: "Tag Highlight",
  headingContent: "Heading",
  paragraphContent:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
};
