import {
  CreateButton,
  DatagridConfigurable,
  EditButton,
  ExportButton,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  SelectColumnsButton,
  TextField,
  TopToolbar,
  useRecordContext,
} from "react-admin";
import { NFTFilterSidebar } from "./FilterList";

const NFTListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const UrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={record[source]} target="_blank">
      View
    </a>
  );
};

export const NFTList = () => (
  <List aside={<NFTFilterSidebar />} actions={<NFTListActions />}>
    <DatagridConfigurable rowClick="">
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories" link="show">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <NumberField source="width" />
      <NumberField source="height" />
      <NumberField
        source="price"
        options={{ style: "currency", currency: "USD" }}
      />
      <ImageField
        source="thumbnail"
        title="title"
        sx={{ "& img": { maxWidth: 40, maxHeight: 40, objectFit: "contain" } }}
      />
      <UrlField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);
