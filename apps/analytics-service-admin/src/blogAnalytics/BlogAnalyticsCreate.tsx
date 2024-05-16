import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BlogAnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BlogPost" source="blogPost" />
        <NumberInput step={1} label="likes" source="likes" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Create>
  );
};
