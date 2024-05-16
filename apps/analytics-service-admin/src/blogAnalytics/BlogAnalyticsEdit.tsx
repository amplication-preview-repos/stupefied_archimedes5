import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BlogAnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="BlogPost" source="blogPost" />
        <NumberInput step={1} label="likes" source="likes" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Edit>
  );
};
