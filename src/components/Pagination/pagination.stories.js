import React from "react";
import { storiesOf } from "@storybook/react";

import Pagination from ".";

const stories = storiesOf("Pagination", module);
stories.add("without props", () => (
<Pagination
total={10} />
));
